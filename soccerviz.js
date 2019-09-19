function createSoccerViz() {
    d3.csv("data/worldcup.csv", data => {overallTeamViz(data)});

    function overallTeamViz(incomingData) {
        d3.select("svg")
            .append("g")
            .attr("id", "teamsG")
            .attr("transform", "translate(50,300)")
            .selectAll("g")
            .data(incomingData)
            .enter()
            .append("g")
            .attr("class", "overallG")
            .attr("transform", (d, i) =>"translate(" + (i * 50) + ", 0)");
        var teamG = d3.selectAll("g.overallG");
        teamG
            .append("circle")
            .attr("r", 20);
        teamG
            .append("text")
            .attr("y", 30)
            .text(d => d.team)

        teamG.on("mouseover", highlightRegion);

    }

    function highlightRegion(d) {
        d3.selectAll("g.overallG").select("circle")
            .attr("class", p => p.region === d.region ? "active" : "inactive")
    }


}