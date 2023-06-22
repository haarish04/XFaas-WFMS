//import { useState,useEffect,useMemo } from "react";
import {useMode} from "./theme"
import {ThemeProvider} from "@mui/material"
//import Topbar from "./scenes/global/Topbar";
import Bar from "./scenes/bar/Bar";
import Invocation from "./scenes/invocations/Invocation";
//import UserGraphs from "./scenes/graphs/Usergraphs";
//import GraphComponent from "./scenes/graphs/Refgraph";
//import GraphVisualization from "./scenes/graphs/Refgraph";
//import testData from "./components/data/testData";
import "./InvocationsPage.css"
import  Graph  from 'react-graph-vis';
import ResponsiveAppBar from './components/App-bar';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import GraphTable from './components/GraphTable';


var data = {
  Nodes: [
    {
      NodeId: "fm9m",
      NodeName: "Resize",
      Path: "examples/image-processing-diamond-multicloud-aws-to-az/src/Resize",
      EntryPoint: "func.py",
      MemoryInMB: 512,
      IsFused: true,
      IsAutoGenerated: false,
    },
    {
      NodeId: "b74b",
      NodeName: "Mobilenet",
      Path: "examples/image-processing-diamond-multicloud-aws-to-az/src/Mobilenet",
      EntryPoint: "func.py",
      MemoryInMB: 512,
      IsFused: true,
      IsAutoGenerated: false,
    },
    // Other nodes
  ],
  Edges: [
    {
      fm9m: ["b74b"],
    },
    // Other edges
  ],
  wf_partitions: [
    {
      partition_label: "label for datacentre",
      func_ids: ["fm9m", "b74b"],
    },
  ],
  wf_fusion_config: [
    {
      fused_func_id: "fm9m_b74b",
      original_func_ids: ["fm9m", "b74b"],
    },
  ],
};


const GraphWrapper = () => {
  const navigate = useNavigate();

  const HandleNodeClick = (event) => {
    const nodeId = event.nodes[0];
    if (nodeId) {
      navigate('/wf/CodeViewer');
    }
  };

  const options = {
    layout: {
        hierarchical: false,
      },
      edges: {
        arrows: 'to',
      },
      height: '400px',
      interaction: {
        zoomView: false, 
        hover: true, 
        hoverConnectedEdges: false,
        selectConnectedEdges: true,
     
      },
      nodes: {
  
      fixed:{
        x:true,
        y:true
      },
      opacity: 1,
  
      shape:"circle",
  
      font: {
        "size": 16,
        "face": "ariel",
        
      },
  
  
    },
  
      physics: {
        enabled: true,
        barnesHut: {
          gravitationalConstant: -3000,
          centralGravity: 0.1,
          springLength: 100,
          springConstant: 0.04,
          damping: 0.09,
        },
        stabilization: {
          enabled: false
        },
  
        layout: {
          randomSeed: 42, 
        },
  
        
      },
    
  };

  const graph = {
    nodes: [
        { id: 1, label: "1", color: "41e0c9" },
        { id: 2, label: "2", color: "#41e0c9" },
        { id: 3, label: "3", color: "#41e0c9" },
        { id: 4, label: "4", color: "#41e0c9" },
        { id: 5, label: "5", color: "#41e0c9" }
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
      ]
  };

 

  return (
    <div className="graphcontainer">
      <div className="graphbox">
        <Graph graph={graph} options={options} events={{ click: HandleNodeClick }} style={{ height: "640px" }} />
      </div>
    </div>
  );
};






function InvocationsPage() {

  const [activeComponent, setActiveComponent] = useState('GraphWrapper');

  const handlegraphClick = () => {
    setActiveComponent('GraphWrapper');
  };

  const handleTableClick = () => {
    setActiveComponent('GraphTable');
  };
 
const [theme]=useMode();
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="app">
          <div className="header">
              <ResponsiveAppBar />
          </div> 
          <div className="button-container">
          <Button 
            color="primary"
            size="large"
            variant="outlined"
            onClick={handlegraphClick}>Graph View
          </Button>
          <Button
            color="primary"
            size="large"
            variant="outlined"
            onClick={handleTableClick}>Table View
            </Button>
        </div>
        {activeComponent === 'GraphWrapper' ? <GraphWrapper /> : <GraphTable />}


          <main className="context">
                
            <Invocation />
            <Bar />

          </main>
        </div>
        
      </ThemeProvider>
      <div className= "FooterBox" />
  </>
  
  );
}

export default InvocationsPage;