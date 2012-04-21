tt.ui.confirm = {};

/**
 * confirm images
 * @author Izumori, Tatsuya <tatsuya.izumori@gmail.com>
 */
(function(){
	/**
	 * create confirm window
	 * that has one image, OK button, NG button
	 * 
	 * @param {Object} image
	 */
	tt.ui.confirm.createWindow = function(image) {
		var win = Ti.UI.createWindow({
			title: 'Camera image confirmation'
		});
		
		// add view
		win.add(tt.ui.confirm.createView(image));
		
		return win;
	}
	
	/**
	 * create confirm view
	 */
	tt.ui.confirm.createView = function(image) {
		var view = Ti.UI.createView({
			backgroundColor: '#EEE'
		});
		
		// confirmation sentence
		var label = Ti.UI.createLabel({
			text: 'この写真でいい？',
			font: {
				fontSize: 16,
				fontWeight: 'bold'
			},
			//width: 500,
			height: 'auto',
			top: 50
		});
		
		// the camera image
		var imageView = tt.ui.confirm.createImageView(image);
		
		// the ng button
		var ngButton = Ti.UI.createButton({
			title: "NG",
			top: 320,
			left: 100
		});
		
		// close button
		ngButton.addEventListener('click', function(){
			Ti.UI.currentWindow.close();
		});
		
		// the ok button
		var okButton = Ti.UI.createButton({
			title: "OK",
			top: 320,
			right: 100
		});
		
		view.add(label);
		view.add(imageView);
		view.add(ngButton);
		view.add(okButton);
		
		return view;
	} 
	
	/**
	 * create camera image view
	 * @param {Object} image
	 */
	tt.ui.confirm.createImageView = function(image) {
		var view = Ti.UI.createImageView({
			width: 200,
			height: 200,
			top: 100,
			image: image
		});
		
		return view;
	}
})();
