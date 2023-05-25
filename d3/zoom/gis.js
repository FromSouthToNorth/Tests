var svg = d3.select("#map").append("svg");
var g = svg.append('g');
var projection = d3.geoMercator()
  .scale(100)
  .translate([300, 200]);

d3.json("map.geojson").then((topology) => {
  console.log(topology);
  // var countries = topojson.feature(topology, topology.objects.countries);
  var path = d3.geoPath()
    .projection(projection);
  g.selectAll("path")
    .data(topology.features)
    .enter().append("path")
    .attr("d", path)
    .style("fill", "#ccc")
    .style("stroke", "#222");
});
var zoom = d3.zoom()
  .scaleExtent([1, 8])
  .on("zoom", zoomed);

function zoomed() {
  g.attr("transform", d3.event.transform);
}

d3.select("#map")
  .call(zoom);
