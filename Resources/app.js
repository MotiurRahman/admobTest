var self = Ti.UI.createWindow({
	backgroundColor : 'white'
});
//Ad placement
var viewBanner = Ti.UI.createView({
//	bottom : 0,
	height : Ti.UI.FILL,
	width : Ti.UI.FILL,
	//borderColor: 'black',
	backgroundColor : '#afff',
	zIndex : 10
});

var AdMobID = 'ca-app-pub-1379038283004834/9899276307';

Ti.API.info('Requesting Ads...');
Admob = require('ti.admob');
banner = Admob.createView({
	bottom : 0,
	width : viewBanner.width,
	height : viewBanner.height,
	publisherId : AdMobID,
	adBackgroundColor : 'white',
	testing : false,  // default is false
});

//Set listeners
banner.addEventListener('didReceiveAd', function(e) {
	Ti.API.info('New Ad');
	banner.show();
});

banner.addEventListener('didFailToReceiveAd', function(e) {
	Ti.API.info('New ad failed');
	banner.hide();
});

/*MillennialMedia.addEventListener('adWasTapped', function() {
dk.flurryEvent(flurry, 'adWasTapped');
});*/

//add now
viewBanner.add(banner);
self.add(viewBanner);

self.open();
