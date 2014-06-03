var Admob = require('ti.admob');
var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});

var ad;
win.add( ad = Admob.createView({
	top : 0,
	width : Ti.UI.FILL,
	height : Ti.UI.FILL,
	publisherId : 'ca-app-pub-4951262838901192/5818956263', // You can get your own at http: //www.admob.com/
	test : true
}));

if (Ti.Platform.osname == "android") {
	ad.addEventListener(Admob.AD_RECEIVED, function() {
		// alert("ad received");
		Ti.API.info("Did receive ad!");
	});

	//listener for adNotReceived
	ad.addEventListener(Admob.AD_NOT_RECEIVED, function() {
		//alert("ad not received");
		Ti.API.info("Failed to receive ad!");
	});
} else {
	//Set listeners
	ad.addEventListener('didReceiveAd', function() {
		//alert('Did receive ad!');
		Ti.API.info("Did receive ad!");
	});
	ad.addEventListener('didFailToReceiveAd', function() {
		//alert('Failed to receive ad!');
		Ti.API.info("Failed to receive ad!");
	});

}

win.open();
