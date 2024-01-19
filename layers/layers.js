var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_eliminados_1 = new ol.format.GeoJSON();
var features_eliminados_1 = format_eliminados_1.readFeatures(json_eliminados_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eliminados_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eliminados_1.addFeatures(features_eliminados_1);
var lyr_eliminados_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_eliminados_1, 
                style: style_eliminados_1,
                interactive: true,
                title: '<img src="styles/legend/eliminados_1.png" /> eliminados'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_eliminados_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_eliminados_1];
lyr_eliminados_1.set('fieldAliases', {'country': 'country', 'locality': 'locality', 'state': 'state', 'zonificacion': 'zonificacion', 'catstationid': 'catstationid', 'station_code': 'station_code', 'zipcode': 'zipcode', 'region': 'region', 'station_name': 'station_name', 'id': 'id', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'cluster_diferenciado': 'cluster_diferenciado', 'polygon': 'polygon', 'neighborhood': 'neighborhood', 'fid': 'fid', 'zipcodes_eliminados_v43_kam — eliminados_zipcod_valid_42': 'zipcodes_eliminados_v43_kam — eliminados_zipcod_valid_42', });
lyr_eliminados_1.set('fieldImages', {'country': '', 'locality': '', 'state': '', 'zonificacion': '', 'catstationid': '', 'station_code': '', 'zipcode': '', 'region': '', 'station_name': '', 'id': '', 'coverage_type': '', 'cobertura_diferenciada': '', 'cluster_diferenciado': '', 'polygon': '', 'neighborhood': '', 'fid': '', 'zipcodes_eliminados_v43_kam — eliminados_zipcod_valid_42': '', });
lyr_eliminados_1.set('fieldLabels', {'country': 'no label', 'locality': 'no label', 'state': 'no label', 'zonificacion': 'no label', 'catstationid': 'no label', 'station_code': 'no label', 'zipcode': 'no label', 'region': 'no label', 'station_name': 'no label', 'id': 'no label', 'coverage_type': 'no label', 'cobertura_diferenciada': 'no label', 'cluster_diferenciado': 'no label', 'polygon': 'no label', 'neighborhood': 'no label', 'fid': 'no label', 'zipcodes_eliminados_v43_kam — eliminados_zipcod_valid_42': 'no label', });
lyr_eliminados_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});