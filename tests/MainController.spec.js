describe('MainController', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));


	it('should have some properties', function () {
		var $scope = {};

		$controller('MainController', { $scope: $scope });

		expect(Object.keys($scope).length).not.toBe(0);
	})
});
