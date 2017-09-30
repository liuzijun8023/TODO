(function (angular) {
	'use strict';

	//为应用程序创建一个模块，用来管理界面的结构
	var myApp = angular.module('app', ['ngRoute','app.controllers.main']);

	//路由配置
	myApp.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/:status?',{
			controller:'MainCtrl',
			templateUrl:'main_tmpl'
		})
		.otherwise({ redirectTo:'/'});
	}]);
	
	//注册一个主要的控制器 $location方法
	/*myApp.controller('MainCtrl',['$scope','$location',function($scope,$location){
		
		function getID(){
			var id = Math.random();
			for (var i = 0; i < $scope.todos.length; i++) {
				if($scope.todos[i].id === id){
					id = getID();
					break;
				}			
			}
			return id;
		}

		//文本框需要一个模型，为了拿文本框的值
		$scope.taskTxt = "";
		
		//任务列表
		//每个人物的机构{id:1,text:'学习',completed:true/false}
		$scope.todos = [
			{id:1, text:'学习1', completed:true},
			{id:2, text:'学习2', completed:false},
			{id:3, text:'学习3', completed:false},
			{id:4, text:'学习4', completed:false}
		];

		//添加任务
		$scope.add = function(){
			if(!$scope.taskTxt){
    		return;
    	}
			$scope.todos.push({
				//自动增长
				//id : $scope.todos.length +1,
				id : getID(),
				//$scope.text是双向绑定，add执行的同时能拿到界面输入文本框的值
				text : $scope.taskTxt,
				completed : false
			})

			//清空输入框
			$scope.taskTxt = "";
		}

		//删除操作
		$scope.remove = function(id){
			for (var i = 0; i <$scope.todos.length; i++) {
				if($scope.todos[i].id === id){
					$scope.todos.splice(i,1);		//返回的是删除的元素
					break;
				}
			}
		}

		//清空已完成
		$scope.clear = function(){
			var newArr = [];
			for (var i = 0; i <$scope.todos.length; i++) {
				if(!$scope.todos[i].completed){
					newArr.push($scope.todos[i]);
				}
			}
			$scope.todos = newArr;
		}

		//是否存在已完成项
		$scope.existCmpt = function(){
			for(var i=0; i< $scope.todos.length; i++){
				if($scope.todos[i].completed){
					return true;
				}else{
					return false;
				}
			}
		}

		//当前编辑哪个元素
		$scope.currEditID = -1;
		$scope.edting = function(id){
			$scope.currEditID = id;
		};

		$scope.save = function(){
			$scope.currEditID = -1;
		};

		//全部选中or全部不选中
		var now = true;
		$scope.toggleAll = function(){
			for (var i = 0; i < $scope.todos.length; i++) {
				$scope.todos[i].completed = now;
			};
			now = !now;
		}

		//状态筛选
		$scope.selector = {};
		
		//让$scope也有一个指向$lacation的数据成员
		$scope.$location = $location;
		//$watch只能监视属于$scope的成员
		$scope.$watch('$location.hash()',function(now, old){
			switch(now){
				case '/active': 
					$scope.selector = {completed:false}
					break;
				case '/completed': 
					$scope.selector = {completed:true}
					break;
				default: 
					$scope.selector = {};
					break;
			}
		});

		//自定义比较函数（默认filter过滤是模糊匹配）
		$scope.compare = function(source, target){
			//console.log(source);	//todo[i]
			//console.log(target);	//selecter
			return source === target;

		}
	}])*/
	
	//注册一个主要的控制器 ngRoute方法
	// myApp.controller('MainCtrl',[
	// 	'$scope',
	// 	'$routeParams',
	// 	'$route',function($scope,$routeParams,$route){
		
	// 	function getID(){
	// 		var id = Math.random();
	// 		for (var i = 0; i < $scope.todos.length; i++) {
	// 			if($scope.todos[i].id === id){
	// 				id = getID();
	// 				break;
	// 			}			
	// 		}
	// 		return id;
	// 	}

	// 	//文本框需要一个模型，为了拿文本框的值
	// 	$scope.taskTxt = "";
		
	// 	//任务列表
	// 	//每个人物的机构{id:1,text:'学习',completed:true/false}
	// 	$scope.todos = [
	// 		{id:1, text:'学习1', completed:true},
	// 		{id:2, text:'学习2', completed:false},
	// 		{id:3, text:'学习3', completed:false},
	// 		{id:4, text:'学习4', completed:false}
	// 	];

	// 	//添加任务
	// 	$scope.add = function(){
	// 		if(!$scope.taskTxt){
 //    		return;
 //    	}
	// 		$scope.todos.push({
	// 			//自动增长
	// 			//id : $scope.todos.length +1,
	// 			id : getID(),
	// 			//$scope.text是双向绑定，add执行的同时能拿到界面输入文本框的值
	// 			text : $scope.taskTxt,
	// 			completed : false
	// 		})

	// 		//清空输入框
	// 		$scope.taskTxt = "";
	// 	}

	// 	//删除操作
	// 	$scope.remove = function(id){
	// 		for (var i = 0; i <$scope.todos.length; i++) {
	// 			if($scope.todos[i].id === id){
	// 				$scope.todos.splice(i,1);		//返回的是删除的元素
	// 				break;
	// 			}
	// 		}
	// 	}

	// 	//清空已完成
	// 	$scope.clear = function(){
	// 		var newArr = [];
	// 		for (var i = 0; i <$scope.todos.length; i++) {
	// 			if(!$scope.todos[i].completed){
	// 				newArr.push($scope.todos[i]);
	// 			}
	// 		}
	// 		$scope.todos = newArr;
	// 	}

	// 	//是否存在已完成项
	// 	$scope.existCmpt = function(){
	// 		for(var i=0; i< $scope.todos.length; i++){
	// 			if($scope.todos[i].completed){
	// 				return true;
	// 			}else{
	// 				return false;
	// 			}
	// 		}
	// 	}

	// 	//当前编辑哪个元素
	// 	$scope.currEditID = -1;
	// 	$scope.edting = function(id){
	// 		$scope.currEditID = id;
	// 	};

	// 	$scope.save = function(){
	// 		$scope.currEditID = -1;
	// 	};

	// 	//全部选中or全部不选中
	// 	var now = true;
	// 	$scope.toggleAll = function(){
	// 		for (var i = 0; i < $scope.todos.length; i++) {
	// 			$scope.todos[i].completed = now;
	// 		};
	// 		now = !now;
	// 	}

	// 	//状态筛选
	// 	$scope.selector = {};

	// 	//取路由中匹配出来数据
	// 	var status = $routeParams.status;
	// 	switch(status){
	// 		case 'active': 
	// 			$scope.selector = {completed:false}
	// 			break;
	// 		case 'completed': 
	// 			$scope.selector = {completed:true}
	// 			break;
	// 		default: 
	// 			$route.updateParams({status:''});
	// 			$scope.selector = {};
	// 			break;
	// 	}
		

	// 	//自定义比较函数（默认filter过滤是模糊匹配）
	// 	$scope.compare = function(source, target){
	// 		return source === target;
	// 	}


	//}])
})(angular);
