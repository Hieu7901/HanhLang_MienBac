ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([104.845481, 19.251504, 108.348791, 21.333593]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_HP_WGS84_1 = new ol.format.GeoJSON();
var features_HP_WGS84_1 = format_HP_WGS84_1.readFeatures(json_HP_WGS84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_HP_WGS84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HP_WGS84_1.addFeatures(features_HP_WGS84_1);
var lyr_HP_WGS84_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HP_WGS84_1, 
                style: style_HP_WGS84_1,
                popuplayertitle: 'HP_WGS84',
                interactive: true,
                title: '<img src="styles/legend/HP_WGS84_1.png" /> HP_WGS84'
            });
var format_NB_WGS84_2 = new ol.format.GeoJSON();
var features_NB_WGS84_2 = format_NB_WGS84_2.readFeatures(json_NB_WGS84_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NB_WGS84_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NB_WGS84_2.addFeatures(features_NB_WGS84_2);
var lyr_NB_WGS84_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NB_WGS84_2, 
                style: style_NB_WGS84_2,
                popuplayertitle: 'NB_WGS84',
                interactive: true,
                title: '<img src="styles/legend/NB_WGS84_2.png" /> NB_WGS84'
            });
var format_ND_WGS84_3 = new ol.format.GeoJSON();
var features_ND_WGS84_3 = format_ND_WGS84_3.readFeatures(json_ND_WGS84_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ND_WGS84_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ND_WGS84_3.addFeatures(features_ND_WGS84_3);
var lyr_ND_WGS84_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ND_WGS84_3, 
                style: style_ND_WGS84_3,
                popuplayertitle: 'ND_WGS84',
                interactive: true,
                title: '<img src="styles/legend/ND_WGS84_3.png" /> ND_WGS84'
            });
var format_TB_WGS84_4 = new ol.format.GeoJSON();
var features_TB_WGS84_4 = format_TB_WGS84_4.readFeatures(json_TB_WGS84_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TB_WGS84_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TB_WGS84_4.addFeatures(features_TB_WGS84_4);
var lyr_TB_WGS84_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TB_WGS84_4, 
                style: style_TB_WGS84_4,
                popuplayertitle: 'TB_WGS84',
                interactive: true,
                title: '<img src="styles/legend/TB_WGS84_4.png" /> TB_WGS84'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_HP_WGS84_1.setVisible(true);lyr_NB_WGS84_2.setVisible(true);lyr_ND_WGS84_3.setVisible(true);lyr_TB_WGS84_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_HP_WGS84_1,lyr_NB_WGS84_2,lyr_ND_WGS84_3,lyr_TB_WGS84_4];
lyr_HP_WGS84_1.set('fieldAliases', {'STT': 'STT', 'Ky_hieu': 'Ky_hieu', 'Y': 'Y', 'X': 'X', 'Dia_gioi': 'Dia_gioi', });
lyr_NB_WGS84_2.set('fieldAliases', {'STT': 'STT', 'Dia_Gioi': 'Dia_Gioi', 'Ky_Hieu': 'Ky_Hieu', 'Y': 'Y', 'X': 'X', 'F6': 'F6', 'F7': 'F7', 'F8': 'F8', });
lyr_ND_WGS84_3.set('fieldAliases', {'STT': 'STT', 'Ky_Hieu': 'Ky_Hieu', 'Y': 'Y', 'X': 'X', 'Dia_Gioi': 'Dia_Gioi', });
lyr_TB_WGS84_4.set('fieldAliases', {'STT': 'STT', 'Dia_Gioi': 'Dia_Gioi', 'Ky_hieu': 'Ky_hieu', 'Y': 'Y', 'X': 'X', });
lyr_HP_WGS84_1.set('fieldImages', {'STT': 'TextEdit', 'Ky_hieu': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Dia_gioi': 'TextEdit', });
lyr_NB_WGS84_2.set('fieldImages', {'STT': 'TextEdit', 'Dia_Gioi': 'TextEdit', 'Ky_Hieu': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'F6': 'TextEdit', 'F7': 'TextEdit', 'F8': 'TextEdit', });
lyr_ND_WGS84_3.set('fieldImages', {'STT': 'TextEdit', 'Ky_Hieu': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Dia_Gioi': 'TextEdit', });
lyr_TB_WGS84_4.set('fieldImages', {'STT': 'TextEdit', 'Dia_Gioi': 'TextEdit', 'Ky_hieu': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_HP_WGS84_1.set('fieldLabels', {'STT': 'no label', 'Ky_hieu': 'no label', 'Y': 'no label', 'X': 'no label', 'Dia_gioi': 'no label', });
lyr_NB_WGS84_2.set('fieldLabels', {'STT': 'no label', 'Dia_Gioi': 'no label', 'Ky_Hieu': 'no label', 'Y': 'no label', 'X': 'no label', 'F6': 'no label', 'F7': 'no label', 'F8': 'no label', });
lyr_ND_WGS84_3.set('fieldLabels', {'STT': 'no label', 'Ky_Hieu': 'no label', 'Y': 'no label', 'X': 'no label', 'Dia_Gioi': 'no label', });
lyr_TB_WGS84_4.set('fieldLabels', {'STT': 'no label', 'Dia_Gioi': 'no label', 'Ky_hieu': 'no label', 'Y': 'no label', 'X': 'no label', });
lyr_TB_WGS84_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});