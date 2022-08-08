var map = L.map('map', {});

// PAINEIS
map.createPane('pane_0').style.zIndex = 499;

var baseMaps = {};
var overlayMaps = {};

// CAMADAS BASE
var googleStreet = L.tileLayer('http://{s}.google.com/vt/lyrs=m,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
googleStreet.addTo(map);
baseMaps["Google Street"] = googleStreet;

// CAMADAS VETORIAIS
var _Violence_Risk_Forecast_Week_31_2022 = L.geoJSON(_Violence_Risk_Forecast_Week_31_2022_data, {
			pane: 'pane_0',
			style: function (feature) {
				if ( feature.properties["Risk_Class"] == '1') {
					return {
						opacity: 0.242,
						fillOpacity: 0.242,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(255, 245, 240, 1.00)'
					}
				} else if ( feature.properties["Risk_Class"] == '2') {
					return {
						opacity: 0.242,
						fillOpacity: 0.242,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(252, 190, 165, 1.00)'
					}
				} else if ( feature.properties["Risk_Class"] == '3') {
					return {
						opacity: 0.242,
						fillOpacity: 0.242,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(251, 112, 80, 1.00)'
					}
				} else if ( feature.properties["Risk_Class"] == '4') {
					return {
						opacity: 0.242,
						fillOpacity: 0.242,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(211, 32, 32, 1.00)'
					}
				} else if ( feature.properties["Risk_Class"] == '5') {
					return {
						opacity: 0.242,
						fillOpacity: 0.242,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(103, 0, 13, 1.00)'
					}
				} 
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Violence Risk Forecast Week 31 2022</h4><br/>'  +
							'<b>LGA:</b>&ensp;' + feature.properties['LGA'] + '<br/>' +
							'<b>RISK_CLA_1:</b>&ensp;' + feature.properties['Risk_Cla_1'] + '<br/>' +
							'<b>RISK_CLASS:</b>&ensp;' + feature.properties['Risk_Class'] + '<br/>' +
							'<b>RISK_RANK:</b>&ensp;' + feature.properties['Risk_Rank'] + '<br/>' +
							'<b>STATE:</b>&ensp;' + feature.properties['State'] + '<br/>' +
							'<b>WARD:</b>&ensp;' + feature.properties['Ward'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Violence_Risk_Forecast_Week_31_2022'] = _Violence_Risk_Forecast_Week_31_2022;

//Função que dá zoom sobre a feição clicada
function clickedFeature(e) {
	var feature = e.target;
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}
}

// LEGENDA
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'info legend');
	div.innerHTML = '<dl>';
	div.innerHTML += 	'<dt class="_Violence_Risk_Forecast_Week_31_2022_lgd">Violence Risk Forecast Week 31 2022</dt>';
	div.innerHTML += 		'<dd class="_Violence_Risk_Forecast_Week_31_2022_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(255, 245, 240, 1.00)"></svg>Very Low Risk</dd>';
	div.innerHTML += 		'<dd class="_Violence_Risk_Forecast_Week_31_2022_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(252, 190, 165, 1.00)"></svg>Low Risk</dd>';
	div.innerHTML += 		'<dd class="_Violence_Risk_Forecast_Week_31_2022_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(251, 112, 80, 1.00)"></svg>Moderate Risk</dd>';
	div.innerHTML += 		'<dd class="_Violence_Risk_Forecast_Week_31_2022_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(211, 32, 32, 1.00)"></svg>High Risk</dd>';
	div.innerHTML += 		'<dd class="_Violence_Risk_Forecast_Week_31_2022_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(103, 0, 13, 1.00)"></svg>Very High Risk</dd>';
	div.innerHTML += '</dl>';
	return div
}
legend.addTo(map);

//ESCALA
L.control.scale({
	maxWidth: 250,
	imperial: false
}).addTo(map);

// CONTROLE DE CAMADAS
L.control.layers(baseMaps, overlayMaps, {
	position: 'topright',
	collapsed: false,
	sortLayers: true
}).addTo(map);

function layerON (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'block';
	}
}

function layerOFF (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'none';
	}
}

map.on('overlayadd', layerON);
map.on('overlayremove', layerOFF);

// CALCULA A AREA QUE COBRE TODAS AS CAMADAS
var bounds = {xmin: 180, ymin: 90, xmax: -180, ymax: -90};
for (var layer in overlayMaps) {
	var layerBounds = overlayMaps[layer].getBounds();
	if (bounds.xmin > layerBounds.getSouthWest().lng) {bounds.xmin = layerBounds.getSouthWest().lng};
	if (bounds.ymin > layerBounds.getSouthWest().lat) {bounds.ymin = layerBounds.getSouthWest().lat};
	if (bounds.xmax < layerBounds.getNorthEast().lng) {bounds.xmax = layerBounds.getNorthEast().lng};
	if (bounds.ymax < layerBounds.getNorthEast().lat) {bounds.ymax = layerBounds.getNorthEast().lat};
}
map.fitBounds([
	[bounds.ymin, bounds.xmin],
	[bounds.ymax, bounds.xmax]
]);
