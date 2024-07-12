sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("tablens.table.controller.TableView", {
        onInit: function () {
            var oData = {
                
                DataSet : [
                    {
                        Bukrs : "1000", //Company Code
                        Gjahr : "2024", // Fiscal year
                        Belnr : "0017000218", //Document number
                        Wrbtr : "150000"
                    },{
                        Bukrs : "2000",
                        Gjahr : "2024",
                        Belnr : "0020000218", //Document number
                        Wrbtr : "200000"
                    },{
                        Bukrs : "3000",
                        Gjahr : "2024",
                        Belnr : "0017000123", //Document number
                        Wrbtr : "300000"
                    }
                ],
                AirData :[
                    { "Carrid": "AA", "CarrName": "American Airlines", "ConnId":"0017", "CityFrom":"NEW YORK", "CityTo":"SAN FRANCISCO", "Fldate":"2020-10-01", 
                        "SeatsTot":416, "SeatsOcc": 366, "SeatsOccB":30, "SeatsOccF":20 },
                      { "Carrid": "AA", "CarrName": "American Airlines", "ConnId":"0017", "CityFrom":"NEW YORK", "CityTo":"SAN FRANCISCO", "Fldate":"2020-12-04", 
                        "SeatsTot":424, "SeatsOcc": 373, "SeatsOccB":29, "SeatsOccF":21 },
                      { "Carrid": "AA", "CarrName": "American Airlines", "ConnId":"0064", "CityFrom":"SAN FRANCISCO", "CityTo":"NEW YORK", "Fldate":"2020-10-13", 
                        "SeatsTot":356, "SeatsOcc": 309, "SeatsOccB":28, "SeatsOccF":19 },
                      { "Carrid": "AA", "CarrName": "American Airlines", "ConnId":"0064", "CityFrom":"SAN FRANCISCO", "CityTo":"NEW YORK", "Fldate":"2020-11-04", 
                        "SeatsTot":363, "SeatsOcc": 314, "SeatsOccB":29, "SeatsOccF":20 },
                      { "Carrid": "AA", "CarrName": "American Airlines", "ConnId":"0064", "CityFrom":"SAN FRANCISCO", "CityTo":"NEW YORK", "Fldate":"2020-12-06", 
                        "SeatsTot":367, "SeatsOcc": 319, "SeatsOccB":29, "SeatsOccF":19 },
                      { "Carrid": "LH", "CarrName": "Lufthansa", "ConnId":"0400", "CityFrom":"FRANKFURT", "CityTo":"NEW YORK", "Fldate":"2020-10-04", 
                        "SeatsTot":364, "SeatsOcc": 315, "SeatsOccB":30, "SeatsOccF":19 },
                      { "Carrid": "LH", "CarrName": "Lufthansa", "ConnId":"0400", "CityFrom":"FRANKFURT", "CityTo":"NEW YORK", "Fldate":"2020-11-05", 
                        "SeatsTot":362, "SeatsOcc": 313, "SeatsOccB":29, "SeatsOccF":20 },
                      { "Carrid": "LH", "CarrName": "Lufthansa", "ConnId":"0400", "CityFrom":"FRANKFURT", "CityTo":"NEW YORK", "Fldate":"2020-12-07", 
                        "SeatsTot":360, "SeatsOcc": 313, "SeatsOccB":28, "SeatsOccF":19 }
                ],
                ChartSet :[
                    {
                        Matnr : "STNL_ST304",
                        Price : "1254000",
                        Name : "a"
                    },{
                        Matnr : "STNLALLOY",
                        Price : "1210000",
                        Name : "b"
                    },{
                        Matnr : "STNL_HASTELLOY",
                        Price : "1235400",
                        Name : "c"
                    },{
                        Matnr : "STNL_HAYNES",
                        Price : "325700",
                        Name : "d"
                    }
                ]
                
            }
            var oData2 ={
                AirData :[
                    { "Carrid": "AA", "CarrName": "American Airlines", "ConnId":"0017", "CityFrom":"NEW YORK", "CityTo":"SAN FRANCISCO", "Fldate":"2020-10-01", 
                        "SeatsTot":416, "SeatsOcc": 366, "SeatsOccB":30, "SeatsOccF":20 },
                      { "Carrid": "AA", "CarrName": "American Airlines", "ConnId":"0017", "CityFrom":"NEW YORK", "CityTo":"SAN FRANCISCO", "Fldate":"2020-12-04", 
                        "SeatsTot":424, "SeatsOcc": 373, "SeatsOccB":29, "SeatsOccF":21 },
                      { "Carrid": "AA", "CarrName": "American Airlines", "ConnId":"0064", "CityFrom":"SAN FRANCISCO", "CityTo":"NEW YORK", "Fldate":"2020-10-13", 
                        "SeatsTot":356, "SeatsOcc": 309, "SeatsOccB":28, "SeatsOccF":19 },
                      { "Carrid": "AA", "CarrName": "American Airlines", "ConnId":"0064", "CityFrom":"SAN FRANCISCO", "CityTo":"NEW YORK", "Fldate":"2020-11-04", 
                        "SeatsTot":363, "SeatsOcc": 314, "SeatsOccB":29, "SeatsOccF":20 },
                      { "Carrid": "AA", "CarrName": "American Airlines", "ConnId":"0064", "CityFrom":"SAN FRANCISCO", "CityTo":"NEW YORK", "Fldate":"2020-12-06", 
                        "SeatsTot":367, "SeatsOcc": 319, "SeatsOccB":29, "SeatsOccF":19 },
                      { "Carrid": "LH", "CarrName": "Lufthansa", "ConnId":"0400", "CityFrom":"FRANKFURT", "CityTo":"NEW YORK", "Fldate":"2020-10-04", 
                        "SeatsTot":364, "SeatsOcc": 315, "SeatsOccB":30, "SeatsOccF":19 },
                      { "Carrid": "LH", "CarrName": "Lufthansa", "ConnId":"0400", "CityFrom":"FRANKFURT", "CityTo":"NEW YORK", "Fldate":"2020-11-05", 
                        "SeatsTot":362, "SeatsOcc": 313, "SeatsOccB":29, "SeatsOccF":20 },
                      { "Carrid": "LH", "CarrName": "Lufthansa", "ConnId":"0400", "CityFrom":"FRANKFURT", "CityTo":"NEW YORK", "Fldate":"2020-12-07", 
                        "SeatsTot":360, "SeatsOcc": 313, "SeatsOccB":28, "SeatsOccF":19 }
                ]
            }
            ;
            var oModel = new JSONModel(oData);
            var oModel2 = new JSONModel(oData2);
            this.getView().setModel(oModel);
            this.getView().setModel(oModel2, "fly");
            let oModel3 = new JSONModel("/temp.json");
            this.getView().setModel(oModel3, "FFFly")

        }
    });
});
