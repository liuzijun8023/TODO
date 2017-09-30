/*
* @Author: Administrator
* @Date:   2017-09-05 10:37:26
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-05 15:42:48
*/
//业务逻辑(能重用) 都必须出现在服务中
(function (angular) {
	// 注册一个模块
	angular.module('app.services.main',[])
	.service('MainService',['$window',function($window){	//注册一个服务
		var storage = $window.localStorage;
		var todos = storage['my_todo_list'] ? JSON.parse(storage['my_todo_list']) : [] ;
		
		/*var todos = [
			{id:1, text:'学习1', completed:true},
			{id:2, text:'学习2', completed:false},
			{id:3, text:'学习3', completed:false},
			{id:4, text:'学习4', completed:false}];
		*/
		//获取唯一ID
		function getID(){
			var id = Math.random();
			for (var i = 0; i < todos.length; i++) {
				if(todos[i].id === id){
					id = getID();
					break;
				}			
			}
			return id;
		}

		//封装一个私有函数
		this.save = function (){
			storage['my_todo_list'] = JSON.stringify(todos); 
		}

		//暴露todos,控制私有字段的访问权限
		this.get = function(){
			return todos;
		}

		//添加任务
		this.add = function(taskTxt){
			todos.push({
				id : getID(),
				text : taskTxt,
				completed : false
			})
			this.save();
		}

		//删除操作
		this.remove = function(id){
			for (var i = 0; i <todos.length; i++) {
				if(todos[i].id === id){
					todos.splice(i,1);		//返回的是删除的元素
					break;
				}
			}
			this.save();
		}

		//清空已完成
		this.clear = function(){
			var newArr = [];
			for (var i = 0; i < todos.length; i++) {
				if(!todos[i].completed){
					newArr.push(todos[i]);
				}
			}
			todos = newArr;
			this.save();
			//此时，将todos指向了一个新的地址
			return todos;
		}

		//是否存在已完成项
		this.existCmpt = function(){
			//console.log(todos.length)
			for (var i = 0; i < todos.length; i++) {
				if(todos[i].completed){
					return true;
				}
			}
			return false;
		};

		//更新
		this.update = function(id,target){
			this.save();
		}

		//全部选中or全部不选中
		var now = true;
		this.toggleAll = function(){
			for (var i = 0; i < todos.length; i++) {
				todos[i].completed = now;
			};
			now = !now;
			this.save();
		};
	}]);
})(angular);