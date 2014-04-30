define(['d3factory/module', 'd3'], function(d3factory, d3) {
  d3factory.factory('PieChart', function() {

    function PieChart(data, el) {
      this.data = data;
      this.el = el;
    }

    PieChart.prototype.render = function() {
      this.el.innerHTML = '';

      var height = this.el.parentElement.clientHeight,
          width = this.el.parentElement.clientWidth,
          radius = Math.min(width, height) / 2;

      var svg = d3.select(this.el).append('svg')
          .attr('height', height)
          .attr('widht', width)
        .append('g')
          .attr('transform', 'translate(' + width/2 + ',' + height/2 + ')');

      var color = d3.scale.ordinal()
          .range(['#e0f3db', '#a8ddb5', '#43a2ca']);

      var arc = d3.svg.arc()
          .outerRadius(radius - 10)
          .innerRadius(radius / 2);

      var pie = d3.layout.pie()
          .sort(null)
          .value(function(d) { return d.votes; });

      var g = svg.selectAll('.arc')
          .data(pie(this.data))
        .enter().append('g')
          .attr('class', 'arc');

      g.append('path')
          .attr('d', arc)
          .style('fill', function(d) { return color(d.data.pet); });

      g.append('text')
          .attr('transform', function(d) { return 'translate(' + arc.centroid(d) + ')'; })
          .attr('dy', '.35em')
          .style('text-anchor', 'middle')
          .text(function(d) { return d.data.pet; });
    };

    return PieChart;
  });
});