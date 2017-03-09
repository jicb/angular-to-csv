/**
 * Created by jicb on 2017/3/9.
 */
(function(angular){
    'use strict';
    var app = angular.module('myApp',[]);
    app.controller('MainCtrl',function($scope,toCsv){
        $scope.exportToCsv = function(){
            var header = "id,name";
            var bodyData = "1,jcb\n"+"2,szz";
            toCsv.export(header,bodyData,'');
        }
    });

    app.factory('toCsv',function(){
        return {
            export:function(header,bodyData,name){
                var data = "data:text/csv;charset=utf-8,\ufeff";
                data += header ? header+"\n":"";
                data += bodyData;
                var encodedData = encodeURI(data);
                var body = angular.element(document.getElementsByTagName('body'))[0];
                angular.element(body).append("<a id='ExportToCSV'></a>");
                var link = angular.element(document.getElementById('ExportToCSV'));
                link.attr('href',encodedData);
                var fileName = name || ((new Date()).toLocaleDateString()+".csv");
                link.attr('download',fileName);
                link[0].click();
                link.remove();
            }
        }
    });
})(window.angular)
