var app = angular.module('customerservice',[]);
$('.datepicker').datepicker({
		    format: 'mm/dd/yyyy',
		    startDate: '-3d'
		})
app.filter('dateFilter',function(){
	return function(obj){
		var date=new Date(obj);
		return date.getDate()+"/"+parseInt(date.getMonth()+1)+"/"+date.getFullYear();
	}
});
app.controller('customercontroller',['$scope',function($scope){
		var index;
		$scope.details={};
		$scope.products = [];
		$scope.submit=function(obj){
			$scope.products.push(angular.copy(obj));
			$scope.reset();

		}
		$scope.reset=function(){
			$scope.details={};
			$scope.details.pdt=$scope.options[0];
		}

		$scope.edit = function(ind){
			index=ind;
			$scope.update=angular.copy($scope.products[ind]);
		} 
		$scope.upd=function(obj){
			$scope.products[index] = angular.copy(obj);
			$scope.reset();
		}
		$scope.remove = function(ind) { 
  			$scope.products.splice(ind, 1);     

		}


	$scope.options=['Select','IPhone','Ipad','MacBook','Mac Book Air','Mac Book Pro','Apple Watch'];
	$scope.details.pdt=$scope.options[0];
}]);