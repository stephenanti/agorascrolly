var config = {
    style: 'mapbox://styles/stephenanti/clyo0ozvc03n701r1fa91fret',
    accessToken: 'pk.eyJ1Ijoic3RlcGhlbmFudGkiLCJhIjoiY2x5M2ZndmtqMDM4YTJrb2ozN24zb3JmbCJ9.qSuAh5SE-sou1NQF3xYUGQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Local News Ecosystem in Oregon',
    subtitle: 'Oregonians unequally served by local news media',
    byline: 'By Stephen Anti',
    footer: 'Database compiled from several sources: Cision, <a href="https://www.cision.com/">Cission</a>, <a href="https://www.usnewsdeserts.com/#1536249049294-115f3533-f5e9">US News Deserts</a>. Other sources includes <a href="https://orenews.com/">Oregon Newspaper Publishers Association</a>, <a href="https://www.projectnewsoasis.com/publications">Project Oasis </a>, <a href="https://inn.org/">Institute for Nonprofit News</a>, the <a href="https://www.theajp.org/">American Journalism Project</a>, and <a href="deserts">Poynter </a>.  <a href="https://agorajournalism.center/newsecosystem22/"> <br> CLICK TO GO BACK TO REPORT.</a>',

    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Newspapers popular despite closures & contractions',
            image: 'image/outlet_popden.png',
            description: 'This map scrolls us through some of the key findings of the Agora Journalism Center <a href="https://agorajournalism.center/newsecosystem22/">Assessing Oregons Local News & Information Ecosystem 2022 report.</a> After years of closures and contractions, newspapers are still the most common outlet for local news in Oregon, though public radio, online-only outlets, television stations and magazines also play an important role. In terms of ownership structure, Oregon’s newspapers are a mix of privately-owned single holdings, small locally-owned chains, and nonprofits, along with about one-third that are owned by large geographically diffuse chains and publicly-traded corporations.',
           
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Types of local news outlets across the state.',
            image: 'image/outlet_by_medium.png',
            description: 'Our database shows that newspapers comprise 49% of news outlets in Oregon (defined by the criteria above), followed by radio stations (27.8%). Online only news outlets comprise 12% of the media outlets in our dataset. It is likely that more online news sources exist in Oregon that could reasonably meet our criteria, but given the limitations on the datasets we sourced (see Methods appendix) and the infeasibility of accounting for all Oregon based websites and social media accounts, we present a conservative estimate. Finally, television (6.64%) and magazines (4.56%) make up just over one-tenth of Oregon’s outlets regularly producing original local news.',
            location: {
                center: [-121.72938, 43.99054],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'fully',
            hidden: false,
            title: 'Ownership  Structure',
            image: 'image/outlet_bytype.png',
            description: 'We identified the ownership type of all 241 outlets in our final database by examining each outlet’s website or, when necessary, searching the Internet for information on their ownership. Using this method, 239 outlets had identifiable owners/funding sources. We categorized ownership into five types, expanding upon prior research studies: <br> - Publicly traded and shareholder-controlled corporation. <br> - Large geographically diffuse chain. <br> -	Non-profit. <br> -	Small local chain owned in Oregon. <br> - Privately-owned single media holding. <br> <br> Of these 241 media outlets, 41.5% describe themselves as nonprofits. The prominence of nonprofit outlets in our data is related to our decision to exclude commercial radio stations, meaning that 100% of all radio stations in our database are nonprofits. <br> <br> The remaining outlets are relatively evenly distributed across ownership models: Privately owned single-holdings, small local chains, and large geographically diffuse chains each make up between 15-18% of the dataset – that is, 36 to 43 outlets in each category. Publicly traded corporations make up a smaller portion of news outlets producing original local news in Oregon, comprising just about 5% of the dataset. <br> <br>Among other things, these data illustrate the continuing importance of newspapers in Oregon’s local news ecosystem, and also highlight the importance of non-profit media, particularly public radio. And the data show that a significant portion of outlets that regularly produce local news content are non-profits, privately-held single properties, or part of small, locally-owned chains',
            location: {
                center: [-122.65948, 45.5191],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Where are Oregon outlets located',
            image: 'image/where_newspapers.png',
            description: 'The 241 media outlets we identified that regularly produce original local news (based on the criteria described above) are located in 97 different Oregon cities. Figures 3 and 4 illustrate how they are distributed around the state. Additionally, Table 2 lists the number of news outlets by county with   Multnomah (50 outlets ), Lane (26 outlets), Marion (13), Clackamas (12 outlets), Linn (12  outlets), Deschutes (11 outlets), Lincoln (11 outlets), Washington (10 outlets), Jackson (9 outlets), Tillamook (7 outlets) as the top ten counties with the highest number of outlets. The data indicate that eight Oregon counties have just 1-2 local news outlets each. <br> <br> Not all locally-based media outlets necessarily produce local news, however. Most notably, commercial radio stations (those that are operated for-profit, which distinguishes them from “public” or “community” radio stations) generally carry limited news programming at best 3, whereas local newspapers, local television, and public and community radio stations are more likely to include original, local news content. As discussed above, some sites that look like traditional news outlets actually do not independently produce news at all, but rather, package press releases and algorithmically-generated content.',
            location: {
                center: [-122.654, 45.5322],
                zoom: 10,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Outlets unevenly distributed',
            image: 'image/where_newspapers.png',
            description: 'Together, the data show that access to local news is unevenly distributed across the state. Areas with higher population density tend to have more news outlets serving them–a pattern identified in studies of other locations around the U.S.13 The areas of the state with lower population density are also geographically large, however, meaning that it can be harder for the few news outlets covering those areas to effectively cover all communities. The uneven distribution of outlets regularly producing original local news also means that, for some communities, if even one area outlet is at risk of shrinking or disappearing altogether, the impact for those communities is greater. <br> <br> Indeed, our data also confirm that some Oregon counties have very little access to original local news. Our findings align with the US News Deserts project’s conclusion that Sherman County is a “news desert” lacking a local newspaper,14 since the county is served by just two OPB rebroadcasting stations (KOTD in Biggs Junction and KOPB in Rufus).15 The US News Deserts project also categorizes Wheeler County as a news desert, but our research uncovered Wheeler County News, a print publication, as an outlet possibly partially filling the gap. <br> <br> Meanwhile, there are a number of counties in Oregon that have precious few local news outlets. Gilliam, Grant, Harney, Klamath, Lake, and Wallowa counties would each be left with one newspaper as their sole source for original Oregon news were it not for local stations rebroadcasting OPB and Jefferson Public Radio. We also could find only one news outlet fitting our criteria in Crook county, east of Bend. Additionally, Morrow County, near Pendleton, was nearly classified as a news desert, as it has one newspaper (Heppner Gazette-Times) which appeared to be lacking in recent content available online during our initial rounds of coding.',
            location: {
                center: [-119.584, 45.416],
                zoom: 11,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
             id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Multnomah County: highest number of outlets in Oregon',
            image: 'image/outlet_by_medium.png',
            description: 'The evidence is increasingly clear that the civic health of communities is tied to the fate of local news. <br> This report represents one step toward assessing the state of local news in Oregon and what can be done to strengthen it. Counting and mapping Oregon’s local news producers will allow for tracking further contraction or growth over time. <br> By looking at initiatives underway around the country, Oregon’s newsrooms, educators, funders, and policy-makers can consider emerging innovations to build the vitality of Oregon’s local news ecosystem.',
            location: {
                center: [-121.72938, 43.99054],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Overall picture is concerning',
            image: 'image/outlet_bytype.png',
            description: 'The overall picture, however, is concerning. The underlying infrastructure for producing local news has been weakened by two decades of losses of newsrooms and reporting jobs. And news organizations today, from the smallest all-volunteer hyperlocal websites to the largest legacy newsrooms, often sense they are swimming against the tide of economic, technological, political, and cultural changes that threaten the long-term viability of local news production. Ultimately, larger-scale interventions may be needed to create a stronger civic information infrastructure. We examine innovations and interventions happening around our state and beyond.',
            location: {
                center: [-122.65948, 45.5191],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'eigth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Some outlets do not produce news at all',
            image: 'image/where_newspapers.png',
            description: 'Not all locally-based media outlets necessarily produce local news, however. Most notably, commercial radio stations (those that are operated for-profit, which distinguishes them from “public” or “community” radio stations) generally carry limited news programming at best 3, whereas local newspapers, local television, and public and community radio stations are more likely to include original, local news content. As discussed above, some sites that look like traditional news outlets actually do not independently produce news at all, but rather, package press releases and algorithmically-generated content.',
            location: {
                center: [-117.58839, 44.31732],
                zoom: 5.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }




    ]
};
