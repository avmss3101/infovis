//-----------------------------------------------functions------------------------------------------------

function display(stepCallback, highlited) {
    stepCallback();
}

function tokenization() {
    d3.select("#tokenization").transition().attr("opacity", 1).duration(1000);
    d3.select("#sentence").transition().attr("opacity", 0).duration(1000);
}

function lowercase() {
    tokenization()
    d3.select(".low").transition().attr("opacity", 0.5).duration(1000);
    d3.select("#tokenization").attr("class", "lowerCase");
    d3.selectAll(".low").transition().attr("opacity", 1).attr("fill","red").duration(1000);
}

function removingSpecial() {
    tokenization()
    d3.selectAll(".special").transition().attr("opacity", 0).duration(2000);
}

function stopwords() {
    tokenization()
    d3.selectAll(".removal").attr("opacity", 0);
}

function stemming() {
    tokenization()
    d3.selectAll(".ste").transition().attr("opacity", 0).duration(2000);
}

//##########################################################Globals##########################################################
var svg = d3.select("div");
var sentenca = d3.select("#sentence");
var tokens = d3.select("#tokenization");

// --------------------------------------------------------main------------------------------------------------------


sentenca.attr("transform", "translate(3,80)");

sentenca.attr("stroke", "blue")
.attr("stroke-width", ".2px");


d3.select("#tokenization").attr("opacity", 0);
tokens.attr("transform", "translate(3,80)");