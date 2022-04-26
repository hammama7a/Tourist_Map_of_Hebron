var wms_layers = [];

var format_Border_0 = new ol.format.GeoJSON();
var features_Border_0 = format_Border_0.readFeatures(json_Border_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Border_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Border_0.addFeatures(features_Border_0);
var lyr_Border_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Border_0, 
                style: style_Border_0,
                interactive: true,
                title: '<img src="styles/legend/Border_0.png" /> Border'
            });
var format_RoadSystem_1 = new ol.format.GeoJSON();
var features_RoadSystem_1 = format_RoadSystem_1.readFeatures(json_RoadSystem_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadSystem_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadSystem_1.addFeatures(features_RoadSystem_1);
var lyr_RoadSystem_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RoadSystem_1, 
                style: style_RoadSystem_1,
                interactive: true,
    title: 'Road System<br />\
    <img src="styles/legend/RoadSystem_1_0.png" /> Bypass Road<br />\
    <img src="styles/legend/RoadSystem_1_1.png" /> Local Road<br />\
    <img src="styles/legend/RoadSystem_1_2.png" /> Main Road<br />'
        });
var format_BuildingCatagores_2 = new ol.format.GeoJSON();
var features_BuildingCatagores_2 = format_BuildingCatagores_2.readFeatures(json_BuildingCatagores_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuildingCatagores_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingCatagores_2.addFeatures(features_BuildingCatagores_2);
var lyr_BuildingCatagores_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BuildingCatagores_2, 
                style: style_BuildingCatagores_2,
                interactive: true,
    title: 'Building Catagores<br />\
    <img src="styles/legend/BuildingCatagores_2_0.png" /> Commercial Foundation<br />\
    <img src="styles/legend/BuildingCatagores_2_1.png" /> Cummunity Servise Building<br />\
    <img src="styles/legend/BuildingCatagores_2_2.png" /> Educational Building<br />\
    <img src="styles/legend/BuildingCatagores_2_3.png" /> Health<br />\
    <img src="styles/legend/BuildingCatagores_2_4.png" /> HOUSES<br />\
    <img src="styles/legend/BuildingCatagores_2_5.png" /> Industrial Foundation<br />\
    <img src="styles/legend/BuildingCatagores_2_6.png" /> Religious<br />'
        });
var format_SymbolsMap_3 = new ol.format.GeoJSON();
var features_SymbolsMap_3 = format_SymbolsMap_3.readFeatures(json_SymbolsMap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SymbolsMap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SymbolsMap_3.addFeatures(features_SymbolsMap_3);
var lyr_SymbolsMap_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SymbolsMap_3, 
                style: style_SymbolsMap_3,
                interactive: true,
    title: 'Symbols Map<br />\
    <img src="styles/legend/SymbolsMap_3_0.png" /> Bakery<br />\
    <img src="styles/legend/SymbolsMap_3_1.png" /> Bank<br />\
    <img src="styles/legend/SymbolsMap_3_2.png" /> Company<br />\
    <img src="styles/legend/SymbolsMap_3_3.png" /> Garage<br />\
    <img src="styles/legend/SymbolsMap_3_4.png" /> Hospital<br />\
    <img src="styles/legend/SymbolsMap_3_5.png" /> Hotel<br />\
    <img src="styles/legend/SymbolsMap_3_6.png" /> Kindergarten<br />\
    <img src="styles/legend/SymbolsMap_3_7.png" /> Mosque<br />\
    <img src="styles/legend/SymbolsMap_3_8.png" /> Pharmacy<br />\
    <img src="styles/legend/SymbolsMap_3_9.png" /> Restaurant<br />\
    <img src="styles/legend/SymbolsMap_3_10.png" /> School<br />\
    <img src="styles/legend/SymbolsMap_3_11.png" /> Social Center<br />\
    <img src="styles/legend/SymbolsMap_3_12.png" /> Supermarket<br />'
        });

lyr_Border_0.setVisible(true);lyr_RoadSystem_1.setVisible(true);lyr_BuildingCatagores_2.setVisible(true);lyr_SymbolsMap_3.setVisible(true);
var layersList = [lyr_Border_0,lyr_RoadSystem_1,lyr_BuildingCatagores_2,lyr_SymbolsMap_3];
lyr_Border_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', });
lyr_RoadSystem_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Type': 'Type', 'NAME': 'NAME', });
lyr_BuildingCatagores_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Layer': 'Layer', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SymbolsMap_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Type': 'Type', 'Name': 'Name', });
lyr_Border_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_RoadSystem_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Type': 'TextEdit', 'NAME': 'TextEdit', });
lyr_BuildingCatagores_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Layer': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SymbolsMap_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Type': 'TextEdit', 'Name': 'TextEdit', });
lyr_Border_0.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', });
lyr_RoadSystem_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Type': 'inline label', 'NAME': 'inline label', });
lyr_BuildingCatagores_2.set('fieldLabels', {'OBJECTID': 'no label', 'Layer': 'inline label', 'Shape_Length': 'inline label', 'Shape_Area': 'inline label', });
lyr_SymbolsMap_3.set('fieldLabels', {'OBJECTID': 'no label', 'Type': 'inline label', 'Name': 'inline label', });
lyr_SymbolsMap_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});