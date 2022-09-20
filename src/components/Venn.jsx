import React, {useEffect, useState} from "react";
import * as d3 from "d3";
import * as venn from "venn.js";
import AnimatedBg from "react-animated-bg";




const VennDiagram = (props) => {

  const [sets, setSets] = useState([
    { sets: ["I"], size: 1000, label: "IMPORTANT: Plan", fill: "orange"},
    { sets: ["U"], size: 1000, label: "URGENT: Delegate Next" },
    { sets: ["S"], size: 1000, label: "FIT: Make Time" },
    { sets: ["S", "I"], size: 200, label: "SIZE" },
    { sets: ["S", "U"], size: 200, label: "UDDENLY SUZETOW" },
    { sets: ["I", "U"], size: 200, label: "IOU 300 DOLLAS" },
    { sets: ["I", "U", "S"], size: 200, label: "I M SMOL MIDLLED" },

  ]);



  useEffect(() => {
    let chart = venn.VennDiagram().styled(false);;
    d3.select("#venn").datum(sets).call(chart);
    d3.selectAll("#rings .venn-circle text")
    .style("fill", "magenta")
    .style("font-size", "24px")
    .style("font-weight", "100");
    d3.select("#rings .venn-circle")
    .style("fill", "#89a2ec")
  }, [sets]);

  return (
    <div id = "rings">
        
  
    <div id="venn">
     
    </div>
    </div>
  );
};

export default VennDiagram