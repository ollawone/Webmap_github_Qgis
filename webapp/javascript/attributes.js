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

