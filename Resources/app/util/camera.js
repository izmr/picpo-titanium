tt.util.camera = {};

(function() {
	tt.util.camera.open = function() {
		Ti.API.debug('camera open');
		Ti.Media.showCamera({
			success: function(event) {
				var image = event.media;
			},
			error: function (error) {
				if (error.code == Titanium.Media.NO_CAMERA)
                {
                    alert('カメラがありません');
                }
			},
			saveToPhotoGallery: true,
			allowEditing: true,
			mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO]
		});
	}
})();
