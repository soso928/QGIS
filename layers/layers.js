ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([82.100647, -19.198391, 152.899353, 34.198390]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Inundation_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Inundation<br />\
    <img src="styles/legend/Inundation_1_0.png" /> <= 1.0000<br />\
    <img src="styles/legend/Inundation_1_1.png" /> 1.0000 - 1.5000<br />\
    <img src="styles/legend/Inundation_1_2.png" /> 1.5000 - 2.0000<br />\
    <img src="styles/legend/Inundation_1_3.png" /> 2.0000 - 2.5000<br />\
    <img src="styles/legend/Inundation_1_4.png" /> 2.5000 - 3.0000<br />\
    <img src="styles/legend/Inundation_1_5.png" /> 3.0000 - 3.5000<br />\
    <img src="styles/legend/Inundation_1_6.png" /> 3.5000 - 4.0000<br />\
    <img src="styles/legend/Inundation_1_7.png" /> 4.0000 - 4.5000<br />\
    <img src="styles/legend/Inundation_1_8.png" /> 4.5000 - 5.0000<br />\
    <img src="styles/legend/Inundation_1_9.png" /> 5.0000 - 5.5000<br />\
    <img src="styles/legend/Inundation_1_10.png" /> 5.5000 - 6.0000<br />\
    <img src="styles/legend/Inundation_1_11.png" /> > 6.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Inundation_1.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [85.092811, -17.925000, 149.907189, 32.925000]
        })
    });

lyr_GoogleSatellite_0.setVisible(true);lyr_Inundation_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Inundation_1];
