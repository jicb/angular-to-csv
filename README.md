# angular-to-csv
angular to csv;you can organize your data then call export to csv
##Dependencies
*angular.js,any version starting with 1.x
##Usage
1.html add a ng-click to your html file
```html
<button type='button' ng-click='exportToCSV()'>export to csv</button>
```
2.js set 'toCsv' as a dependency in your controller
```javascript
app.controller('MainCtrl',function($scope,toCsv)){
```
3.js set header,data,name,call toCsv.export(...)
```javascript
var name = 'today.csv';
var header = 'id,name'+'\n';
var bodyData = '1,jcb\n2,szz\n3,nobody';
toCsv.export(header,bodyData,name);
```
