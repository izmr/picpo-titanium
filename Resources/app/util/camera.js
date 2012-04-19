tt.util.camera = {};

/**
 * camera
 * @author Izumori, Tatsuya <tatsuya.izumori@gmail.com>
 */
(function() {
	tt.util.camera.open = function(callback) {
		Ti.Media.showCamera({
			success: function(event) {
				var image = event.media;
				callback(image);
			},
			error: function (error) {
				if (error.code == Titanium.Media.NO_CAMERA) {
                    alert('カメラがありません');
                }
                
                var image = Ti.Filesystem.getFile("/Users/marimofire/workspace/titanium/Sample20120419/Resources/iphone/Default.png");
                callback(image.read());
			},
			saveToPhotoGallery: true,
			allowEditing: true,
			mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO]
		});
	}
})();
