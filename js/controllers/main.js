/*
* @Author: Administrator
* @Date:   2017-09-05 10:20:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-05 15:58:05
*/
//界面逻辑

(function (angular) {
	'use strict';

	//创建一个独立的模块
	var mainCtrl = angular.module('app.controllers.main',['app.services.main'])
	
	
	//注册一个主要的控制器
	mainCtrl.controller('MainCtrl',[
		'$scope',
		'$routeParams',
		'$route',
		'MainService',
		function($scope, $routeParams, $route, MainService){

		//文本框需要一个模型，为了拿文本框的值
		$scope.taskTxt = "";
		
		//任务列表
		//每个人物的结构{id:1,text:'学习',completed:true/false}
		$scope.todos = MainService.get();

		//添加任务
		$scope.add = function(){
			if(!$scope.taskTxt){
    			return;
    		}
			MainService.add($scope.taskTxt);
			//清空输入框
			$scope.taskTxt = "";
		}

		//删除操作
		$scope.remove = function(id){
			MainService.remove(id);
		}

		//清空已完成
		$scope.clear = function(){
			var newTodos = MainService.clear();
			$scope.todos = newTodos;
		}

		//是否存在已完成项
		$scope.existCmpt = function(){
			MainService.existCmpt();
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
		
		$scope.toggleAll = function(){
			MainService.toggleAll();
		}

		$scope.toggle = function(){
			MainService.save();
		}

		//状态筛选
		$scope.selector = {};

		//取路由中匹配出来数据
		var status = $routeParams.status;
		switch (status){
			case 'active': 
				$scope.selector = { completed:false };
				break;
			case 'completed': 
				$scope.selector = { completed:true };
				break;
			default: 
				$route.updateParams({ status: ''});
				$scope.selector = {};
				break;
		}
		

		//自定义比较函数（默认filter过滤是模糊匹配）
		$scope.compare = function(source, target){
			//console.log(source);	//todo[i]
			//console.log(target);	//selecter
			return source === target;

		};


	}])
})(angular);
