tt.ui = {};

/**
 * ui.js main logic
 * @author Izumori, Tatsuya <tatsuya.izumori@gmail.com>
 */
(function() {
	/**
	 * return main window
	 */
	tt.ui.createApplicationWindow = function()
	{
		var win = Ti.UI.createWindow({
			title: 'sample',
			backgroundColor: '#FFFFFF'
		});
		
		win.add(tt.ui.createTitleView());
		
		return win;
	}
	
	/**
	 * show title view
	 */
	tt.ui.createTitleView = function ()
	{
		var view = Ti.UI.createView({
			backgroundColor: '#000',
			layout: 'vertical' // 上から順番に並べる
		});
		
		var label = Ti.UI.createLabel({
			text: 'Welcome to Picpo!',
			font: {
				fontSize: 16,
				fontWeight: 'bold'
			},
			width: 'auto',
			color: '#F00',
			height: 'auto',
			top: 5 // relative position(vertical)
			//top: 100 // absolute position
		});
		
		var button = Ti.UI.createButton({
			title: 'Sign up',
			width: 100,
			height: 30,
			top: 5 // relative position(vertical)
			//top: 120 // absolute position
		});
		
		button.addEventListener('click', function(){
			var win = tt.ui.register.createWindow();
			win.open({modal: true});
		});
		
		var cameraButton = Ti.UI.createButton({
			title: 'camera',
			width: 100,
			height: 30,
			top: 5
		});
		
		cameraButton.addEventListener('click', function(){
			Ti.API.info("cameraButton");
			tt.util.camera.open(function(image){
				Ti.API.info(image);
				var win = tt.ui.confirm.createWindow(image);
				win.open();
			});
		});
		
		view.add(label);
		view.add(button);
		view.add(cameraButton);
		
		return view;
	}
	
	/**
	 * create modal window
	 */
	tt.ui.createModalWindow = function (config) {
		config = config || {};// config設定を反映、あるいはdefault
		
		var win = Ti.UI.createWindow({
			barColor: '#333',
			backgroundColor: '#FFF'
		});
		
		var button = Ti.UI.createButton({
			title: "close",
			height: 30,
			width: 150
		});
		
		button.addEventListener('click', function(){
			win.close(); // wrong?
		});
		
		win.leftNavButton = button;
		
		return win;
	}
})();

/**
 * include all uis
 */
Ti.include(
	'/app/ui/register.js',
	'/app/ui/confirm.js'
);