export class  ChartObject {
    id:string = "1";
    title:string = "Title";
    chartType:string  = "PieChart";
    dataTable:Array<any> = [];

    constructor(){
        this.dataTable.push(["X Axis","Y Axis"]);
    }

}

export class ChartItem {
 key : any = "";
 value : any = "";
}

export class  ChartOptions {
 
static get(){
	return {
    "chart": {
        "type": "pie",

        "backgroundColor": "none", 
        "options3d": {
          "enabled": true,
          "alpha": 15,
          "beta": 15,
          "depth": 110,
          "frame": {
                                        "bottom": {
                                            "size": 5
                                        
                                        },
                                        "side": {
                                            "size":5
                                        
                                        },
                                        "back": {
                                            "size": 5
                                        
                                        }
                                       }
      }
    },
    "xAxis": {
        "type": "category"
    },

    "legend": {
        "enabled": false
    },

     "plotOptions": {
    "pie": {
            "depth": 50,
             "alpha": 15,
            "beta": 0,
            "innerSize": "50%"
        },
        "column": {
                "depth": 40,
                "stacking": true,
                "grouping": false,
                "groupZPadding": 10
            },
        "series" : {
                "events" : {}
            }
  },
    "series": [],

    "drilldown": {
        "series": []
    },
    "title" : {"text": null},
    "exporting" : {
        "buttons" :{
            "contextButton": {
                "enabled" : false
            }
        }
    }
}

}

}
