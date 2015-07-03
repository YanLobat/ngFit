;(function(){	
	'use strict';
	angular
		.module('ngFit.main',['ngRoute'])
		.config(configMain)
		.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['$scope','$rootScope','$log','fitfire'];

	function MainCtrl($scope,$rootScope,$log,fitfire){

			var vm = this; //чтобы не путаться в областях видимости

			$rootScope.curPath = 'main';//что-то вроде глобальной переменной для использования во вьюхах

			vm.title = "Это Главная";
			vm.name = "Yan";
			vm.users = fitfire;
			
			$scope.clickFunction = function(name){
				alert('Hi,'+ name);
			}
	}

	configMain.$inject = ['$routeProvider'];

	function configMain($routeProvider){
		$routeProvider.
			when("/",{
				templateUrl: "app/main/main.html",
				controller: 'MainCtrl',
				controllerAs: 'vm'
			});
	}
})();