require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/ImageryLayer",
  "esri/layers/support/RasterFunction"
      ], function (Map, MapView, ImageryLayer, RasterFunction) {
        /********************
         * Set up popup template of image layer
         ********************/

    var imagePopupTemplate = { // autocastes as neww PopupTemplate ()
      Title: "Data from {SensorName} satellite",
     Content: "Rendered NDVI values: <b>{Raster.ServicePixelValue} </b>" +
            "<br>Original values (B1, B2, B3, B4, B5, B6, B7, B8, B9, B10, B11): <b>{Raster.ItemPixelValue} </b>"
        };
  /*******************************************************************
         * Create image layer with server defined raster function templates
         ******************************************************************/
  var serviceRFT = new RasterFunction({
          functionName: "NDVI Raw",
          variableName: "Raster"
        });

          var layer = new ImageryLayer({
          url:
            "https://landsat2.arcgis.com/arcgis/rest/services/Landsat8_Views/ImageServer",
           renderingRule: serviceRFT,
          popupTemplate: imagePopupTemplate
        });
  
        /**************************
         * Add image layer to map
         *************************/

        var map = new Map({
          basemap: "hybrid",
          layers: [layer]
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-90.1994, 38.6270],
          zoom: 11,
           popup: {
            actions: []
          }
        });
      });

