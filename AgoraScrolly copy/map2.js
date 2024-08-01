mapboxgl.accessToken = 'pk.eyJ1Ijoic3RlcGhlbmFudGkiLCJhIjoiY2x5M2ZndmtqMDM4YTJrb2ozN24zb3JmbCJ9.qSuAh5SE-sou1NQF3xYUGQ';  // Replace with your Mapbox token

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/stephenanti/cly9cg0lw00l101pxbc499txf',
    center: [-120, 44.0 ],  // Center of Oregon
    zoom: 5.8, // Initial Zoom level
    minZoom: 2,  // Allow zooming out further
    maxZoom: 22, // Allow zooming in closer
    maxBounds: [[-130, 40], // Southwest corner
    [-115, 48]  // Northeast corner
    ]
});

map.on('load', function () {
    console.log('Map loaded');

    // Add agoranewsoutlets layer
    let layers = map.getStyle().layers;
    let firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }

    map.addLayer({
        'id': 'agoranewsoutlets',
        'type': 'circle',
        'source': {
            'type': 'geojson',
            'data': 'data/agoraAgora.geojson'
        },
        'paint': {
            'circle-color': ['interpolate', ['linear'], ['get', 'circulation_audience'],
            0, '#000000',     // Black for the lowest value
            234, '#ff00bf',   // Pink for 0 – 234
            800, '#ff007f',   // Reddish pink for 800 – 1200
            1500, '#ff5a36',  // Orange-red for 1500 – 3000
            3100, '#ff8c00',  // Orange for 3100 – 5000
            5200, '#ffd700',  // Gold for 5200 – 7000
            7500, '#ffff00',  // Yellow for 7500 – 9000
            9300, '#adff2f',  // Green-yellow for 9300 – 12000
            12300, '#00ff00', // Green for 12300 – 18000
            19900, '#008000', // Dark green for 19900 – 30000
            30020, '#0000ff', // Blue for 30020 – 70000
            80000, '#4b0082', // Indigo for 80000 – 1000000
            1000000, '#440154'// Dark purple for the highest value
            ],
            'circle-stroke-color': '#4d4d4d',
            'circle-stroke-width': 0.5,
            'circle-radius': ['interpolate', ['linear'], ['get', 'circulation_audience'],
            0, 6,        // Small radius for the lowest values
            234, 7,      // Slightly larger for 0 – 234
            800, 8,      // Larger for 800 – 1200
            1500, 9,     // Increasing radius for 1500 – 3000
            3100, 10,     // And so on for each range
            5200, 11,
            7500, 12,
            9300, 13,
            12300, 14,
            19900, 15,
            30020, 16,
            80000, 18,
            1000000, 20  // Largest radius for the highest values
            ]
        }
    }, firstSymbolId);

    // Add agoracounties source and layer
    if (!map.getSource('agora_counties_source')) {
        console.log('Adding agora_counties_source');
        map.addSource('agora_counties_source', {
            'type': 'geojson',
            'data': 'data/agora_outer_counties.geojson'
        });
    }

    if (!map.getLayer('agoracounties')) {
        console.log('Adding agoracounties layer');
        map.addLayer({
            'id': 'agoracounties',
            'type': 'fill',
            'source': 'agora_counties_source',
            'paint': {
                'fill-color': [
                    'interpolate', ['linear'], ['get', 'pop_den_county '],
                    0.7, '#ccedf5',
                    5.5, '#99daea',
                    12.6, '#66c7e0',
                    139.9, '#33b5d5',
                    753.6, '#00a2ca',
                    1626.6, '#093fed'
                ],
                'fill-opacity': 0.7
            }
        }, 'waterway');

        // Add a layer for the county boundaries
        map.addLayer({
            'id': 'county-borders',
            'type': 'line',
            'source': 'agora_counties_source',
            'paint': {
                'line-color': '#888888',
                'line-width': 0.1
            }
        });
    }

    // Add a layer for county names that appears at a certain zoom level
    map.addLayer({
        'id': 'county-names',
        'type': 'symbol',
        'source': 'agora_counties_source',
        'layout': {
            'text-field': ['get', 'county'],
            'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
            'text-size': 12,
            'text-transform': 'uppercase',
            'text-offset': [0, 0.6],
            'text-anchor': 'top'
        },
        'paint': {
            'text-color': '#000000',
            'text-halo-color': '#ffffff',
            'text-halo-width': 1
        },
        'minzoom': 9 // Adjust this value to control when the names appear
    });
});

// Create the popup for agoranewsoutlets
map.on('click', 'agoranewsoutlets', function (e) {
    let outletname = e.features[0].properties.outlet;
    let outletaddress = e.features[0].properties.address;
    let mediatype = e.features[0].properties.medium;
    let how_often = e.features[0].properties.frequency;
    let owners = e.features[0].properties.ownership_type;
    let contact = e.features[0].properties.contact_email;
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h4>' + outletname + '</h4>' + '<br>' + '<p><b> Frequency: </b>' + how_often + '<br>' + '<b> Medium:</b>' +' ' + mediatype + '<br>' + '<b> Address: </b>' + outletaddress + '<br>' + '<b> Contact & Email: </b>'+ contact + '<br>' + '<b> Ownership type: </b>' + owners)
        .addTo(map);
});

// Change the cursor to a pointer when the mouse is over the agoranewsoutlets layer.
map.on('mouseenter', 'agoranewsoutlets', function () {
    map.getCanvas().style.cursor = 'pointer';
});

// Change it back to default when it leaves.
map.on('mouseleave', 'agoranewsoutlets', function () {
    map.getCanvas().style.cursor = '';
});

// Add menu
var toggleableLayerIds = ['News Outlets', 'Outlets Counties'];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function(e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            document.getElementById('legend-' + clickedLayer).style.display = 'none';
            this.className = '';
        } else {
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            document.getElementById('legend-' + clickedLayer).style.display = 'block';
            this.className = 'active';
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}



// Create an inset map if enabled in config.js
if (config.inset) {
    var insetMap = new mapboxgl.Map({
        container: 'mapInset', // container id
        style: 'mapbox://styles/mapbox/dark-v10', // hosted style id
        center: [-120.5542, 43.8041], // Hardcoded center coordinates (example: Oregon)
        zoom: 5 // Optional: adjust the zoom level as needed
    });
}

