require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/ImageryLayer"
      ], function (Map, MapView, ImageryLayer) {
        /********************
         * Create image layer
         ********************/

   /*     var layer = new ImageryLayer({
          url:
            "https://sampleserver6.arcgisonline.com/arcgis/rest/services/NLCDLandCover2001/ImageServer",
          format: "jpgpng" // server exports in either jpg or png format
        }); */

          var layer = new ImageryLayer({
          url:
            "https://landsat2.arcgis.com/arcgis/rest/services/Landsat8_Views/ImageServer",
          format: "jpgpng" // server exports in either jpg or png format
        });
  
        /**************************
         * Add image layer to map
         *************************/

        var map = new Map({
          basemap: "gray-vector",
          layers: [layer]
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-105.5, 36.15],
          zoom: 4
        });
      });
