import { Injectable } from '@angular/core';
import { ChartObject, ChartItem } from "../app/chart.schema";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs'
import { saveSvgAsPng ,svgAsDataUri ,svgAsPngUri } from 'save-svg-as-png';


declare var require: any;
var json2csv = require('json2csv');

var JSONtoCSV = require("json-to-csv");



@Injectable()
export class ChartService {
    encodeData(obj : any) : ChartObject{
        var tempData = [];
        obj.dataTable.forEach(arr => {
            let chartItem = new ChartItem(); 
            chartItem.key = arr[0];
            chartItem.value = arr[1];
            tempData.push(chartItem);
        });
         obj.dataTable = tempData;
            return obj ;
    }
    decodeData(obj : ChartObject) : any{
        var tempData = [];
        obj.dataTable.forEach(arr => {
            let chartItem = []; 
            chartItem.push(arr.key);
            arr.value = parseInt(arr.value) ? parseInt(arr.value) : arr.value
            chartItem.push(arr.value);
            tempData.push(chartItem);
        });
         obj.dataTable = tempData;
        return obj;
    }
    download(chart){
      var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(chart));
      var elem= document.createElement('a');
     
        elem.setAttribute('href',"data:"+ data);
        elem.setAttribute('download', chart.title+".json");
        elem.click()
    }
    downloadImage (elem,filename){
        saveSvgAsPng(elem, filename);
     }
    getImageURI(elem,callback){
        svgAsPngUri(elem, {}, uri => {
           callback(uri);
        });
        //svgAsPngUri(document.getElementById("diagram"), {}, function(uri) {});
  
    }
    downloadCSV(data) {
        var result = json2csv({ data: data,fields: Object.keys(data[0]) });
        JSONtoCSV(data, "file.csv");
   }

}
