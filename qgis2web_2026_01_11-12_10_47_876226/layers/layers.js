var wms_layers = [];

var format_8_0 = new ol.format.GeoJSON();
var features_8_0 = format_8_0.readFeatures(json_8_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8_0.addFeatures(features_8_0);
var lyr_8_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8_0, 
                style: style_8_0,
                popuplayertitle: '8',
                interactive: true,
                title: '<img src="styles/legend/8_0.png" /> 8'
            });
var format_88_1 = new ol.format.GeoJSON();
var features_88_1 = format_88_1.readFeatures(json_88_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_88_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_88_1.addFeatures(features_88_1);
var lyr_88_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_88_1, 
                style: style_88_1,
                popuplayertitle: '8 8',
                interactive: true,
                title: '<img src="styles/legend/88_1.png" /> 8 8'
            });
var format_7_2 = new ol.format.GeoJSON();
var features_7_2 = format_7_2.readFeatures(json_7_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7_2.addFeatures(features_7_2);
var lyr_7_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7_2, 
                style: style_7_2,
                popuplayertitle: '7',
                interactive: true,
                title: '<img src="styles/legend/7_2.png" /> 7'
            });
var format_77_3 = new ol.format.GeoJSON();
var features_77_3 = format_77_3.readFeatures(json_77_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_3.addFeatures(features_77_3);
var lyr_77_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_3, 
                style: style_77_3,
                popuplayertitle: '7 7',
                interactive: true,
                title: '<img src="styles/legend/77_3.png" /> 7 7'
            });
var format_6_4 = new ol.format.GeoJSON();
var features_6_4 = format_6_4.readFeatures(json_6_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6_4.addFeatures(features_6_4);
var lyr_6_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6_4, 
                style: style_6_4,
                popuplayertitle: '6',
                interactive: true,
                title: '<img src="styles/legend/6_4.png" /> 6'
            });
var format_66_5 = new ol.format.GeoJSON();
var features_66_5 = format_66_5.readFeatures(json_66_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_66_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_66_5.addFeatures(features_66_5);
var lyr_66_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_66_5, 
                style: style_66_5,
                popuplayertitle: '6 6',
                interactive: true,
                title: '<img src="styles/legend/66_5.png" /> 6 6'
            });
var format_5_6 = new ol.format.GeoJSON();
var features_5_6 = format_5_6.readFeatures(json_5_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5_6.addFeatures(features_5_6);
var lyr_5_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5_6, 
                style: style_5_6,
                popuplayertitle: '5',
                interactive: true,
                title: '<img src="styles/legend/5_6.png" /> 5'
            });
var format_55_7 = new ol.format.GeoJSON();
var features_55_7 = format_55_7.readFeatures(json_55_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_55_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_55_7.addFeatures(features_55_7);
var lyr_55_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_55_7, 
                style: style_55_7,
                popuplayertitle: '5 5',
                interactive: true,
                title: '<img src="styles/legend/55_7.png" /> 5 5'
            });
var format_4_8 = new ol.format.GeoJSON();
var features_4_8 = format_4_8.readFeatures(json_4_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_8.addFeatures(features_4_8);
var lyr_4_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4_8, 
                style: style_4_8,
                popuplayertitle: '4',
                interactive: true,
                title: '<img src="styles/legend/4_8.png" /> 4'
            });
var format_44_9 = new ol.format.GeoJSON();
var features_44_9 = format_44_9.readFeatures(json_44_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_44_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_44_9.addFeatures(features_44_9);
var lyr_44_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_44_9, 
                style: style_44_9,
                popuplayertitle: '4 4',
                interactive: true,
                title: '<img src="styles/legend/44_9.png" /> 4 4'
            });
var format_3_10 = new ol.format.GeoJSON();
var features_3_10 = format_3_10.readFeatures(json_3_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_10.addFeatures(features_3_10);
var lyr_3_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3_10, 
                style: style_3_10,
                popuplayertitle: '3',
                interactive: true,
                title: '<img src="styles/legend/3_10.png" /> 3'
            });
var format_33_11 = new ol.format.GeoJSON();
var features_33_11 = format_33_11.readFeatures(json_33_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_11.addFeatures(features_33_11);
var lyr_33_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_11, 
                style: style_33_11,
                popuplayertitle: '3 3',
                interactive: true,
                title: '<img src="styles/legend/33_11.png" /> 3 3'
            });
var format_2_12 = new ol.format.GeoJSON();
var features_2_12 = format_2_12.readFeatures(json_2_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_12.addFeatures(features_2_12);
var lyr_2_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2_12, 
                style: style_2_12,
                popuplayertitle: '2',
                interactive: true,
                title: '<img src="styles/legend/2_12.png" /> 2'
            });
var format_22_13 = new ol.format.GeoJSON();
var features_22_13 = format_22_13.readFeatures(json_22_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_22_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_22_13.addFeatures(features_22_13);
var lyr_22_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_22_13, 
                style: style_22_13,
                popuplayertitle: '2 2',
                interactive: true,
                title: '<img src="styles/legend/22_13.png" /> 2 2'
            });
var format_1_14 = new ol.format.GeoJSON();
var features_1_14 = format_1_14.readFeatures(json_1_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_14.addFeatures(features_1_14);
var lyr_1_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_14, 
                style: style_1_14,
                popuplayertitle: '1',
                interactive: true,
                title: '<img src="styles/legend/1_14.png" /> 1'
            });
var format_jlntlng_15 = new ol.format.GeoJSON();
var features_jlntlng_15 = format_jlntlng_15.readFeatures(json_jlntlng_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jlntlng_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jlntlng_15.addFeatures(features_jlntlng_15);
var lyr_jlntlng_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jlntlng_15, 
                style: style_jlntlng_15,
                popuplayertitle: 'jln tlng',
                interactive: true,
                title: '<img src="styles/legend/jlntlng_15.png" /> jln tlng'
            });
var format_jlntlng1_16 = new ol.format.GeoJSON();
var features_jlntlng1_16 = format_jlntlng1_16.readFeatures(json_jlntlng1_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jlntlng1_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jlntlng1_16.addFeatures(features_jlntlng1_16);
var lyr_jlntlng1_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jlntlng1_16, 
                style: style_jlntlng1_16,
                popuplayertitle: 'jln tlng 1',
                interactive: true,
                title: '<img src="styles/legend/jlntlng1_16.png" /> jln tlng 1'
            });

lyr_8_0.setVisible(true);lyr_88_1.setVisible(true);lyr_7_2.setVisible(true);lyr_77_3.setVisible(true);lyr_6_4.setVisible(true);lyr_66_5.setVisible(true);lyr_5_6.setVisible(true);lyr_55_7.setVisible(true);lyr_4_8.setVisible(true);lyr_44_9.setVisible(true);lyr_3_10.setVisible(true);lyr_33_11.setVisible(true);lyr_2_12.setVisible(true);lyr_22_13.setVisible(true);lyr_1_14.setVisible(true);lyr_jlntlng_15.setVisible(true);lyr_jlntlng1_16.setVisible(true);
var layersList = [lyr_8_0,lyr_88_1,lyr_7_2,lyr_77_3,lyr_6_4,lyr_66_5,lyr_5_6,lyr_55_7,lyr_4_8,lyr_44_9,lyr_3_10,lyr_33_11,lyr_2_12,lyr_22_13,lyr_1_14,lyr_jlntlng_15,lyr_jlntlng1_16];
lyr_8_0.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'motor_vehicle': 'motor_vehicle', 'access': 'access', 'motorcar': 'motorcar', 'layer': 'layer', });
lyr_88_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'motor_vehi': 'motor_vehi', 'access': 'access', 'motorcar': 'motorcar', 'layer': 'layer', });
lyr_7_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'office': 'office', 'amenity': 'amenity', 'foto': 'foto', });
lyr_77_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'office': 'office', 'amenity': 'amenity', 'foto': 'foto', });
lyr_6_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'healthcare': 'healthcare', 'name': 'name', });
lyr_66_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'healthcare': 'healthcare', 'name': 'name', });
lyr_5_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'access': 'access', 'import': 'import', 'oneway': 'oneway', });
lyr_55_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'access': 'access', 'import': 'import', 'oneway': 'oneway', });
lyr_4_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'office': 'office', 'school:type_idn': 'school:type_idn', 'shop': 'shop', 'amenity': 'amenity', });
lyr_44_9.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'office': 'office', 'school_typ': 'school_typ', 'shop': 'shop', 'amenity': 'amenity', });
lyr_3_10.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'access': 'access', 'name': 'name', 'motorcar': 'motorcar', 'layer': 'layer', });
lyr_33_11.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'access': 'access', 'name': 'name', 'motorcar': 'motorcar', 'layer': 'layer', });
lyr_2_12.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'motorcar': 'motorcar', });
lyr_22_13.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'motorcar': 'motorcar', });
lyr_1_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KD_PROV': 'KD_PROV', 'KD_KABKOTA': 'KD_KABKOTA', 'KD_KEC': 'KD_KEC', 'KD_DESA': 'KD_DESA', 'NM_PROV': 'NM_PROV', 'NM_KABKOTA': 'NM_KABKOTA', 'NM_KEC': 'NM_KEC', 'NM_DESA': 'NM_DESA', 'LUAS_DESA': 'LUAS_DESA', 'foto': 'foto', });
lyr_jlntlng_15.set('fieldAliases', {'id': 'id', 'jln tlng': 'jln tlng', });
lyr_jlntlng1_16.set('fieldAliases', {'id': 'id', 'jln tlng': 'jln tlng', });
lyr_8_0.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'motor_vehicle': '', 'access': '', 'motorcar': '', 'layer': '', });
lyr_88_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'motor_vehi': '', 'access': '', 'motorcar': '', 'layer': '', });
lyr_7_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'office': '', 'amenity': '', 'foto': '', });
lyr_77_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'office': '', 'amenity': '', 'foto': '', });
lyr_6_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'healthcare': '', 'name': '', });
lyr_66_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'healthcare': '', 'name': '', });
lyr_5_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name': '', 'access': '', 'import': '', 'oneway': '', });
lyr_55_7.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name': '', 'access': '', 'import': '', 'oneway': '', });
lyr_4_8.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'office': '', 'school:type_idn': '', 'shop': '', 'amenity': '', });
lyr_44_9.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'office': '', 'school_typ': '', 'shop': '', 'amenity': '', });
lyr_3_10.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'access': '', 'name': '', 'motorcar': '', 'layer': '', });
lyr_33_11.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'access': '', 'name': '', 'motorcar': '', 'layer': '', });
lyr_2_12.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name': '', 'motorcar': '', });
lyr_22_13.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name': '', 'motorcar': '', });
lyr_1_14.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KD_PROV': 'TextEdit', 'KD_KABKOTA': 'TextEdit', 'KD_KEC': 'TextEdit', 'KD_DESA': 'TextEdit', 'NM_PROV': 'TextEdit', 'NM_KABKOTA': 'TextEdit', 'NM_KEC': 'TextEdit', 'NM_DESA': 'TextEdit', 'LUAS_DESA': 'TextEdit', 'foto': 'TextEdit', });
lyr_jlntlng_15.set('fieldImages', {'id': '', 'jln tlng': '', });
lyr_jlntlng1_16.set('fieldImages', {'id': '', 'jln tlng': '', });
lyr_8_0.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'motor_vehicle': 'no label', 'access': 'no label', 'motorcar': 'no label', 'layer': 'no label', });
lyr_88_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'motor_vehi': 'no label', 'access': 'no label', 'motorcar': 'no label', 'layer': 'no label', });
lyr_7_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'office': 'no label', 'amenity': 'no label', 'foto': 'no label', });
lyr_77_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'office': 'no label', 'amenity': 'no label', 'foto': 'no label', });
lyr_6_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'healthcare': 'no label', 'name': 'no label', });
lyr_66_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'healthcare': 'no label', 'name': 'no label', });
lyr_5_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'access': 'no label', 'import': 'no label', 'oneway': 'no label', });
lyr_55_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'access': 'no label', 'import': 'no label', 'oneway': 'no label', });
lyr_4_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'office': 'no label', 'school:type_idn': 'no label', 'shop': 'no label', 'amenity': 'no label', });
lyr_44_9.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'office': 'no label', 'school_typ': 'no label', 'shop': 'no label', 'amenity': 'no label', });
lyr_3_10.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'access': 'no label', 'name': 'no label', 'motorcar': 'no label', 'layer': 'no label', });
lyr_33_11.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'access': 'no label', 'name': 'no label', 'motorcar': 'no label', 'layer': 'no label', });
lyr_2_12.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'motorcar': 'no label', });
lyr_22_13.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'motorcar': 'no label', });
lyr_1_14.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'KD_PROV': 'no label', 'KD_KABKOTA': 'no label', 'KD_KEC': 'no label', 'KD_DESA': 'no label', 'NM_PROV': 'no label', 'NM_KABKOTA': 'no label', 'NM_KEC': 'no label', 'NM_DESA': 'no label', 'LUAS_DESA': 'no label', 'foto': 'no label', });
lyr_jlntlng_15.set('fieldLabels', {'id': 'no label', 'jln tlng': 'no label', });
lyr_jlntlng1_16.set('fieldLabels', {'id': 'no label', 'jln tlng': 'no label', });
lyr_jlntlng1_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});