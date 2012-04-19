tt.ui.confirm = {};

(function(){
	tt.ui.confirm.createWindow = function(image) {
		var win = Ti.UI.createWindow({
			title: 'Camera image confirmation'
		});
		
		win.add(tt.ui.confirm.createImageView(image));
		
		return win;
	}
	
	tt.ui.confirm.createImageView = function(image) {
		var view = Ti.UI.createImageView({
			width: 100,
			height: 100,
			image: image
		});
		
		return view;
	}
})();
