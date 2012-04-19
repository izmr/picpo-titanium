tt.model.register = {};


(function() {
	/**
	 * Send register api
	 */
	tt.model.register.add = function (config) {
		config = config || {};
		
		tt.model.request(
			'http://localhost/proxy/index.php/userapi/user/add'
		);
	}
})();
