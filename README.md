# Earthquake Zen Garden

ver. 3.12.3

## React Developer Skill Evaluation Exercise

This is a simple app that shows a homepage with a list of earthquakes. It has a header with a logo (link back to home), and a link to a profile detail view. Each entry in the table links to a detail view of that particular record. See the screens and reference data below.

### Page navigation

//(RackMultipart20210510-4-14yyepq_html_c7314554897c7b17.png)

## Instructions:

1. Create an app called &#39;earthquake-zen-garden&#39;
2. Do not use Create React App
3. Use the provided data.js JSON file to create the app according to the diagram above
4. Create a Github repo to host the app (optional but suggested)
5. The app should have 3 main views as outlined below

### Requirements

A user should be able to:

- Clone the repo
- Run &#39;_ **npm install** _&#39; // install dependencies
- Run &#39;_ **npm run start** _&#39; // auto-start the app, open a browser instance and load the app
- The app should look and behave as outlined below

### Specs

- Color palette:
  - #ededed
  - #777777
  - #444444
  - #0011bb
  - #6600cc
- Font family: sans-serif
- No need for IE11 support

## Screens Reference

### Home

This should be the default view the users sees when the application loads.

**Note** :

- Clicking the logo in the header from any view will return to this view
- Clicking on one of the items in the list should take the user to the Detail View
- Clicking the welcome message in the header should take the user to the Profile View
- Clicking the column header should sort the data according to that column
- Clicking the column header successively should toggle the sort directions

//(RackMultipart20210510-4-14yyepq_html_cee249e6340f88bb.png)

###


### Detail View

//(RackMultipart20210510-4-14yyepq_html_fd9f826623cc7dfc.png)

### Profile View

//(RackMultipart20210510-4-14yyepq_html_7509255cb19e7f89.png)

## Source Data (JSON)

{

&quot;site&quot;: {

&quot;title&quot;: &quot;Earthquake Zen Garden&quot;,

&quot;heroImage&quot;: &quot;https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Arenal\_Volcano\_07\_2015\_CRI\_3828.jpg/1920px-Arenal\_Volcano\_07\_2015\_CRI\_3828.jpg&quot;,

&quot;logoImage&quot;: &quot;https://www.realtor.com/realtor-com.png&quot;

},

&quot;profile&quot;: {

&quot;firstName&quot;: &quot;Sally&quot;,

&quot;lastName&quot;: &quot;Wang&quot;,

&quot;avatarImage&quot;: &quot;https://upload.wikimedia.org/wikipedia/commons/5/59/That\_Poppy\_profile\_picture.jpg&quot;,

&quot;phone&quot;: &quot;01-343-989-2345&quot;,

&quot;email&quot;: &quot;sw@nowhere.ic.kp&quot;,

&quot;bio&quot;: &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur&quot;

},

&quot;data&quot;: {

&quot;type&quot;: &quot;FeatureCollection&quot;,

&quot;metadata&quot;: {

&quot;generated&quot;: 1523648330000,

&quot;url&quot;: &quot;https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all\_hour.geojson&quot;,

&quot;title&quot;: &quot;USGS All Earthquakes, Past Hour&quot;,

&quot;status&quot;: 200,

&quot;api&quot;: &quot;1.5.8&quot;,

&quot;count&quot;: 9

},

&quot;features&quot;: [

{

&quot;type&quot;: &quot;Feature&quot;,

&quot;properties&quot;: {

&quot;mag&quot;: 1.19,

&quot;place&quot;: &quot;3km ENE of The Geysers, CA&quot;,

&quot;time&quot;: 1523647508250,

&quot;updated&quot;: 1523648041843,

&quot;tz&quot;: -480,

&quot;url&quot;: &quot;https://earthquake.usgs.gov/earthquakes/eventpage/nc72999021&quot;,

&quot;detail&quot;: &quot;https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc72999021.geojson&quot;,

&quot;felt&quot;: null,

&quot;cdi&quot;: null,

&quot;mmi&quot;: null,

&quot;alert&quot;: null,

&quot;status&quot;: &quot;automatic&quot;,

&quot;tsunami&quot;: 0,

&quot;sig&quot;: 22,

&quot;net&quot;: &quot;nc&quot;,

&quot;code&quot;: &quot;72999021&quot;,

&quot;ids&quot;: &quot;,nc72999021,&quot;,

&quot;sources&quot;: &quot;,nc,&quot;,

&quot;types&quot;: &quot;,geoserve,nearby-cities,origin,phase-data,scitech-link,&quot;,

&quot;nst&quot;: 12,

&quot;dmin&quot;: 0.008595,

&quot;rms&quot;: 0.04,

&quot;gap&quot;: 68,

&quot;magType&quot;: &quot;md&quot;,

&quot;type&quot;: &quot;earthquake&quot;,

&quot;title&quot;: &quot;M 1.2 - 3km ENE of The Geysers, CA&quot;

},

&quot;geometry&quot;: {

&quot;type&quot;: &quot;Point&quot;,

&quot;coordinates&quot;: [

-122.7304993,

38.7903328,

1.22

]

},

&quot;id&quot;: &quot;nc72999021&quot;

},

{

&quot;type&quot;: &quot;Feature&quot;,

&quot;properties&quot;: {

&quot;mag&quot;: 0.54,

&quot;place&quot;: &quot;11km NE of Aguanga, CA&quot;,

&quot;time&quot;: 1523647447080,

&quot;updated&quot;: 1523648292169,

&quot;tz&quot;: -480,

&quot;url&quot;: &quot;https://earthquake.usgs.gov/earthquakes/eventpage/ci38148464&quot;,

&quot;detail&quot;: &quot;https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ci38148464.geojson&quot;,

&quot;felt&quot;: null,

&quot;cdi&quot;: null,

&quot;mmi&quot;: null,

&quot;alert&quot;: null,

&quot;status&quot;: &quot;reviewed&quot;,

&quot;tsunami&quot;: 0,

&quot;sig&quot;: 4,

&quot;net&quot;: &quot;ci&quot;,

&quot;code&quot;: &quot;38148464&quot;,

&quot;ids&quot;: &quot;,ci38148464,&quot;,

&quot;sources&quot;: &quot;,ci,&quot;,

&quot;types&quot;: &quot;,geoserve,nearby-cities,origin,phase-data,scitech-link,&quot;,

&quot;nst&quot;: 19,

&quot;dmin&quot;: 0.06726,

&quot;rms&quot;: 0.11,

&quot;gap&quot;: 47,

&quot;magType&quot;: &quot;ml&quot;,

&quot;type&quot;: &quot;earthquake&quot;,

&quot;title&quot;: &quot;M 0.5 - 11km NE of Aguanga, CA&quot;

},

&quot;geometry&quot;: {

&quot;type&quot;: &quot;Point&quot;,

&quot;coordinates&quot;: [

-116.7931667,

33.5168333,

5.69

]

},

&quot;id&quot;: &quot;ci38148464&quot;

},

{

&quot;type&quot;: &quot;Feature&quot;,

&quot;properties&quot;: {

&quot;mag&quot;: 1.5,

&quot;place&quot;: &quot;65km W of Anchor Point, Alaska&quot;,

&quot;time&quot;: 1523647111107,

&quot;updated&quot;: 1523647975137,

&quot;tz&quot;: -540,

&quot;url&quot;: &quot;https://earthquake.usgs.gov/earthquakes/eventpage/ak19233683&quot;,

&quot;detail&quot;: &quot;https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ak19233683.geojson&quot;,

&quot;felt&quot;: null,

&quot;cdi&quot;: null,

&quot;mmi&quot;: null,

&quot;alert&quot;: null,

&quot;status&quot;: &quot;automatic&quot;,

&quot;tsunami&quot;: 0,

&quot;sig&quot;: 35,

&quot;net&quot;: &quot;ak&quot;,

&quot;code&quot;: &quot;19233683&quot;,

&quot;ids&quot;: &quot;,ak19233683,&quot;,

&quot;sources&quot;: &quot;,ak,&quot;,

&quot;types&quot;: &quot;,geoserve,origin,&quot;,

&quot;nst&quot;: null,

&quot;dmin&quot;: null,

&quot;rms&quot;: 0.76,

&quot;gap&quot;: null,

&quot;magType&quot;: &quot;ml&quot;,

&quot;type&quot;: &quot;earthquake&quot;,

&quot;title&quot;: &quot;M 1.5 - 65km W of Anchor Point, Alaska&quot;

},

&quot;geometry&quot;: {

&quot;type&quot;: &quot;Point&quot;,

&quot;coordinates&quot;: [

-152.9665,

59.6595,

102.5

]

},

&quot;id&quot;: &quot;ak19233683&quot;

},

{

&quot;type&quot;: &quot;Feature&quot;,

&quot;properties&quot;: {

&quot;mag&quot;: 2.3,

&quot;place&quot;: &quot;31km SE of Bridgeport, California&quot;,

&quot;time&quot;: 1523646631530,

&quot;updated&quot;: 1523646936090,

&quot;tz&quot;: -480,

&quot;url&quot;: &quot;https://earthquake.usgs.gov/earthquakes/eventpage/nn00630289&quot;,

&quot;detail&quot;: &quot;https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nn00630289.geojson&quot;,

&quot;felt&quot;: 0,

&quot;cdi&quot;: 0,

&quot;mmi&quot;: null,

&quot;alert&quot;: null,

&quot;status&quot;: &quot;automatic&quot;,

&quot;tsunami&quot;: 0,

&quot;sig&quot;: 81,

&quot;net&quot;: &quot;nn&quot;,

&quot;code&quot;: &quot;00630289&quot;,

&quot;ids&quot;: &quot;,nn00630289,&quot;,

&quot;sources&quot;: &quot;,nn,&quot;,

&quot;types&quot;: &quot;,dyfi,geoserve,origin,phase-data,&quot;,

&quot;nst&quot;: 20,

&quot;dmin&quot;: 1.109,

&quot;rms&quot;: 0.19,

&quot;gap&quot;: 129.72,

&quot;magType&quot;: &quot;ml&quot;,

&quot;type&quot;: &quot;earthquake&quot;,

&quot;title&quot;: &quot;M 2.3 - 31km SE of Bridgeport, California&quot;

},

&quot;geometry&quot;: {

&quot;type&quot;: &quot;Point&quot;,

&quot;coordinates&quot;: [

-118.9815,

38.0482,

13

]

},

&quot;id&quot;: &quot;nn00630289&quot;

},

{

&quot;type&quot;: &quot;Feature&quot;,

&quot;properties&quot;: {

&quot;mag&quot;: 1.5,

&quot;place&quot;: &quot;13km NNW of Fritz Creek, Alaska&quot;,

&quot;time&quot;: 1523646564971,

&quot;updated&quot;: 1523647974895,

&quot;tz&quot;: -540,

&quot;url&quot;: &quot;https://earthquake.usgs.gov/earthquakes/eventpage/ak19233673&quot;,

&quot;detail&quot;: &quot;https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ak19233673.geojson&quot;,

&quot;felt&quot;: null,

&quot;cdi&quot;: null,

&quot;mmi&quot;: null,

&quot;alert&quot;: null,

&quot;status&quot;: &quot;automatic&quot;,

&quot;tsunami&quot;: 0,

&quot;sig&quot;: 35,

&quot;net&quot;: &quot;ak&quot;,

&quot;code&quot;: &quot;19233673&quot;,

&quot;ids&quot;: &quot;,ak19233673,&quot;,

&quot;sources&quot;: &quot;,ak,&quot;,

&quot;types&quot;: &quot;,geoserve,origin,&quot;,

&quot;nst&quot;: null,

&quot;dmin&quot;: null,

&quot;rms&quot;: 0.82,

&quot;gap&quot;: null,

&quot;magType&quot;: &quot;ml&quot;,

&quot;type&quot;: &quot;earthquake&quot;,

&quot;title&quot;: &quot;M 1.5 - 13km NNW of Fritz Creek, Alaska&quot;

},

&quot;geometry&quot;: {

&quot;type&quot;: &quot;Point&quot;,

&quot;coordinates&quot;: [

-151.3919,

59.8471,

163.6

]

},

&quot;id&quot;: &quot;ak19233673&quot;

},

{

&quot;type&quot;: &quot;Feature&quot;,

&quot;properties&quot;: {

&quot;mag&quot;: 5.3,

&quot;place&quot;: &quot;24km ESE of Nemuro, Japan&quot;,

&quot;time&quot;: 1523646000170,

&quot;updated&quot;: 1523647410040,

&quot;tz&quot;: 540,

&quot;url&quot;: &quot;https://earthquake.usgs.gov/earthquakes/eventpage/us2000dzwr&quot;,

&quot;detail&quot;: &quot;https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us2000dzwr.geojson&quot;,

&quot;felt&quot;: null,

&quot;cdi&quot;: null,

&quot;mmi&quot;: null,

&quot;alert&quot;: null,

&quot;status&quot;: &quot;reviewed&quot;,

&quot;tsunami&quot;: 0,

&quot;sig&quot;: 432,

&quot;net&quot;: &quot;us&quot;,

&quot;code&quot;: &quot;2000dzwr&quot;,

&quot;ids&quot;: &quot;,us2000dzwr,&quot;,

&quot;sources&quot;: &quot;,us,&quot;,

&quot;types&quot;: &quot;,geoserve,origin,phase-data,&quot;,

&quot;nst&quot;: null,

&quot;dmin&quot;: 2.306,

&quot;rms&quot;: 1.03,

&quot;gap&quot;: 58,

&quot;magType&quot;: &quot;mww&quot;,

&quot;type&quot;: &quot;earthquake&quot;,

&quot;title&quot;: &quot;M 5.3 - 24km ESE of Nemuro, Japan&quot;

},

&quot;geometry&quot;: {

&quot;type&quot;: &quot;Point&quot;,

&quot;coordinates&quot;: [

145.8313,

43.208,

42.74

]

},

&quot;id&quot;: &quot;us2000dzwr&quot;

},

{

&quot;type&quot;: &quot;Feature&quot;,

&quot;properties&quot;: {

&quot;mag&quot;: 0.93,

&quot;place&quot;: &quot;10km NE of Aguanga, CA&quot;,

&quot;time&quot;: 1523645864330,

&quot;updated&quot;: 1523648313171,

&quot;tz&quot;: -480,

&quot;url&quot;: &quot;https://earthquake.usgs.gov/earthquakes/eventpage/ci38148440&quot;,

&quot;detail&quot;: &quot;https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ci38148440.geojson&quot;,

&quot;felt&quot;: null,

&quot;cdi&quot;: null,

&quot;mmi&quot;: null,

&quot;alert&quot;: null,

&quot;status&quot;: &quot;reviewed&quot;,

&quot;tsunami&quot;: 0,

&quot;sig&quot;: 13,

&quot;net&quot;: &quot;ci&quot;,

&quot;code&quot;: &quot;38148440&quot;,

&quot;ids&quot;: &quot;,ci38148440,&quot;,

&quot;sources&quot;: &quot;,ci,&quot;,

&quot;types&quot;: &quot;,geoserve,nearby-cities,origin,phase-data,scitech-link,&quot;,

&quot;nst&quot;: 35,

&quot;dmin&quot;: 0.07121,

&quot;rms&quot;: 0.22,

&quot;gap&quot;: 36,

&quot;magType&quot;: &quot;ml&quot;,

&quot;type&quot;: &quot;earthquake&quot;,

&quot;title&quot;: &quot;M 0.9 - 10km NE of Aguanga, CA&quot;

},

&quot;geometry&quot;: {

&quot;type&quot;: &quot;Point&quot;,

&quot;coordinates&quot;: [

-116.7943333,

33.5123333,

4.65

]

},

&quot;id&quot;: &quot;ci38148440&quot;

},

{

&quot;type&quot;: &quot;Feature&quot;,

&quot;properties&quot;: {

&quot;mag&quot;: 1.6,

&quot;place&quot;: &quot;44km NNW of Valdez, Alaska&quot;,

&quot;time&quot;: 1523645022880,

&quot;updated&quot;: 1523645250368,

&quot;tz&quot;: -540,

&quot;url&quot;: &quot;https://earthquake.usgs.gov/earthquakes/eventpage/ak19233602&quot;,

&quot;detail&quot;: &quot;https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ak19233602.geojson&quot;,

&quot;felt&quot;: null,

&quot;cdi&quot;: null,

&quot;mmi&quot;: null,

&quot;alert&quot;: null,

&quot;status&quot;: &quot;automatic&quot;,

&quot;tsunami&quot;: 0,

&quot;sig&quot;: 39,

&quot;net&quot;: &quot;ak&quot;,

&quot;code&quot;: &quot;19233602&quot;,

&quot;ids&quot;: &quot;,ak19233602,&quot;,

&quot;sources&quot;: &quot;,ak,&quot;,

&quot;types&quot;: &quot;,geoserve,origin,&quot;,

&quot;nst&quot;: null,

&quot;dmin&quot;: null,

&quot;rms&quot;: 0.49,

&quot;gap&quot;: null,

&quot;magType&quot;: &quot;ml&quot;,

&quot;type&quot;: &quot;earthquake&quot;,

&quot;title&quot;: &quot;M 1.6 - 44km NNW of Valdez, Alaska&quot;

},

&quot;geometry&quot;: {

&quot;type&quot;: &quot;Point&quot;,

&quot;coordinates&quot;: [

-146.6562,

61.497,

31

]

},

&quot;id&quot;: &quot;ak19233602&quot;

},

{

&quot;type&quot;: &quot;Feature&quot;,

&quot;properties&quot;: {

&quot;mag&quot;: 1.6,

&quot;place&quot;: &quot;133km WSW of Ruby, Alaska&quot;,

&quot;time&quot;: 1523644756560,

&quot;updated&quot;: 1523645047293,

&quot;tz&quot;: -540,

&quot;url&quot;: &quot;https://earthquake.usgs.gov/earthquakes/eventpage/ak19233598&quot;,

&quot;detail&quot;: &quot;https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/ak19233598.geojson&quot;,

&quot;felt&quot;: null,

&quot;cdi&quot;: null,

&quot;mmi&quot;: null,

&quot;alert&quot;: null,

&quot;status&quot;: &quot;automatic&quot;,

&quot;tsunami&quot;: 0,

&quot;sig&quot;: 39,

&quot;net&quot;: &quot;ak&quot;,

&quot;code&quot;: &quot;19233598&quot;,

&quot;ids&quot;: &quot;,ak19233598,&quot;,

&quot;sources&quot;: &quot;,ak,&quot;,

&quot;types&quot;: &quot;,geoserve,origin,&quot;,

&quot;nst&quot;: null,

&quot;dmin&quot;: null,

&quot;rms&quot;: 0.6,

&quot;gap&quot;: null,

&quot;magType&quot;: &quot;ml&quot;,

&quot;type&quot;: &quot;earthquake&quot;,

&quot;title&quot;: &quot;M 1.6 - 133km WSW of Ruby, Alaska&quot;

},

&quot;geometry&quot;: {

&quot;type&quot;: &quot;Point&quot;,

&quot;coordinates&quot;: [

-158.1586,

64.3882,

6.9

]

},

&quot;id&quot;: &quot;ak19233598&quot;

}

],

&quot;bbox&quot;: [

-158.1586,

33.5123333,

1.22,

145.8313,

64.3882,

163.6

]

}

};