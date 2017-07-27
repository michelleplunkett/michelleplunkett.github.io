var mapboxAccessToken ="pk.eyJ1IjoibWljaGVsbGVwMTk5NCIsImEiOiJjajVscDYzbjMyZzNzMzNtbnZ4YXJ5OTE5In0.SHgm53V-q1ItLoDcJO7wsA";

var base = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=" +
		mapboxAccessToken,
	{
		id: "mapbox.light",
		attribution: "Mapbox"
	}
);

function highlightFeature(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 3,
		color: "#666",
		dashArray: "",
		fillOpacity: 0.7
	});

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	}
}

function resetRegionHighlight(e) {
	regions.resetStyle(e.target);
}

function resetStateHighlight(e) {
	states.resetStyle(e.target);
}

function resetDistrictHighlight(e) {
	districts.resetStyle(e.target);
}

function zoomToFeature(e) {
	mymap.fitBounds(e.target.getBounds());
}

function onEachRegion(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetRegionHighlight,
		click: zoomToFeature
	});
}

function onEachState(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetStateHighlight,
		click: zoomToFeature
	});
}

function onEachDistrict(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetDistrictHighlight,
		click: zoomToFeature
	});
}

function regionStyle(feature) {
	return {
		fillColor: "#B0E2E2",
		weight: 1,
		opacity: 1,
		color: "white",
		dashArray: "1.5",
		fillOpacity: 0.7
	};
}

function stateStyle(feature) {
	return {
		fillColor: "#888888",
		weight: 2,
		opacity: 1,
		color: "white",
		dashArray: "1.5",
		fillOpacity: 0.7
	};
}

function districtStyle(feature) {
	return {
		fillColor: "#0047BA",
		weight: 1,
		opacity: 1,
		color: "white",
		dashArray: "1.5",
		fillOpacity: 0.7
	};
}

var regions = L.geoJson(regions, {style: regionStyle,onEachFeature: onEachRegion});

var states = L.geoJson(states, {style: stateStyle,onEachFeature: onEachState});

var districts = L.geoJson(districts, {style: districtStyle,onEachFeature: onEachDistrict});

var mymap = L.map("mapid", {
	layers: [base, regions]
}).setView([39, -97], 4);

var overlayLayers = {
	"Regions": regions,
	"States": states,
	"Districts": districts
};

L.control.layers(overlayLayers, null, {
	autoZIndex: true,
	collapsed: false
}).addTo(mymap);