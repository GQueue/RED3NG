define(['d3factory/module', 'd3', 'topojson'], function(d3factory, d3, topojson) {
  d3factory.factory('Map', function() {

    function Map(data, el) {
      this.data = data;
      this.el = el;
    }

    Map.prototype.render = function() {
      this.el.innerHTML = '';

      var height = this.el.parentElement.clientHeight,
          width = this.el.parentElement.clientWidth;

      var svg = d3.select(this.el).append('svg')
          .attr('height', height)
          .attr('widht', width);

      var projection = d3.geo.albersUsa()
          .scale(width - (height / 2))
          .translate([width/2, height/2]);

      var path = d3.geo.path().projection(projection);

      svg.append("path")
          .datum(topojson.feature(this.data, this.data.objects.land))
          .attr("d", path)
          .attr("class", "land-boundary");

      svg.append("path")
          .datum(topojson.mesh(this.data, this.data.objects.states, function(a, b) {
            return a !== b;
          }))
          .attr("d", path)
          .attr("class", "state-boundary");
    };

    return Map;
  });
});