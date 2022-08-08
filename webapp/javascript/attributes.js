function filter(evt, column) {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = evt.target;
	filter = input.value.toUpperCase();
	table = evt.path[4];
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 2; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[column];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function goToMap(layer, featureID){
	var feature = layer._layers[featureID];
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}

	document.getElementById('mapBtn').click();
	feature.openPopup();

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	};
}

tableHTML__Violence_Risk_Forecast_Week_31_2022 = '<table id="_Violence_Risk_Forecast_Week_31_2022_table">';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 	'<tr>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<th>Mapa</th>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<th>ID_3</th>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<th>ID_3L</th>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<th>LGA</th>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<th>LOCATION</th>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<th>Risk_Cla_1</th>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<th>Risk_Class</th>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<th>Risk_Rank</th>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<th>Ward</th>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<th>State</th>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<th>WARD_ID</th>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 	'</tr>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 	'<tr>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<td></td>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Procurar ID_3"></td>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Procurar ID_3L"></td>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Procurar LGA"></td>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<td><input type="text" onkeyup="filter(event, 4)" placeholder="Procurar LOCATION"></td>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<td><input type="text" onkeyup="filter(event, 5)" placeholder="Procurar Risk_Cla_1"></td>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<td><input type="text" onkeyup="filter(event, 6)" placeholder="Procurar Risk_Class"></td>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<td><input type="text" onkeyup="filter(event, 7)" placeholder="Procurar Risk_Rank"></td>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<td><input type="text" onkeyup="filter(event, 8)" placeholder="Procurar Ward"></td>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<td><input type="text" onkeyup="filter(event, 9)" placeholder="Procurar State"></td>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 		'<td><input type="text" onkeyup="filter(event, 10)" placeholder="Procurar WARD_ID"></td>';
tableHTML__Violence_Risk_Forecast_Week_31_2022 += 	'</tr>';

var _Violence_Risk_Forecast_Week_31_2022_IDs = Object.keys(_Violence_Risk_Forecast_Week_31_2022._layers);
for (var i=0; i < _Violence_Risk_Forecast_Week_31_2022_IDs.length; i++){
	var feature = _Violence_Risk_Forecast_Week_31_2022._layers[_Violence_Risk_Forecast_Week_31_2022_IDs[i]].feature;
	tableHTML__Violence_Risk_Forecast_Week_31_2022 += '<tr>';
	tableHTML__Violence_Risk_Forecast_Week_31_2022 += 	'<td onclick="goToMap(_Violence_Risk_Forecast_Week_31_2022, ' + _Violence_Risk_Forecast_Week_31_2022_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Violence_Risk_Forecast_Week_31_2022 += 	'<td>' + feature.properties['ID_3'] + '</td>';
	tableHTML__Violence_Risk_Forecast_Week_31_2022 += 	'<td>' + feature.properties['ID_3L'] + '</td>';
	tableHTML__Violence_Risk_Forecast_Week_31_2022 += 	'<td>' + feature.properties['LGA'] + '</td>';
	tableHTML__Violence_Risk_Forecast_Week_31_2022 += 	'<td>' + feature.properties['LOCATION'] + '</td>';
	tableHTML__Violence_Risk_Forecast_Week_31_2022 += 	'<td>' + feature.properties['Risk_Cla_1'] + '</td>';
	tableHTML__Violence_Risk_Forecast_Week_31_2022 += 	'<td>' + feature.properties['Risk_Class'] + '</td>';
	tableHTML__Violence_Risk_Forecast_Week_31_2022 += 	'<td>' + feature.properties['Risk_Rank'] + '</td>';
	tableHTML__Violence_Risk_Forecast_Week_31_2022 += 	'<td>' + feature.properties['Ward'] + '</td>';
	tableHTML__Violence_Risk_Forecast_Week_31_2022 += 	'<td>' + feature.properties['State'] + '</td>';
	tableHTML__Violence_Risk_Forecast_Week_31_2022 += 	'<td>' + feature.properties['WARD_ID'] + '</td>';
	tableHTML__Violence_Risk_Forecast_Week_31_2022 += '</tr>';
}

tableHTML__Violence_Risk_Forecast_Week_31_2022 += '</table>';
document.getElementById('_Violence_Risk_Forecast_Week_31_2022_tab').innerHTML = tableHTML__Violence_Risk_Forecast_Week_31_2022;

