// --------------------
// * Toggle Navigation
// --------------------
$(function () {
	var Topcontroller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});
	var pinning = new ScrollMagic.Scene({
					triggerElement: "#drawer-nav"//, duration: 300
				})
				.setPin("#drawer")
				.addTo(Topcontroller);
});
