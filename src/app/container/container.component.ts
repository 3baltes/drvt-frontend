import {Component, OnInit, style} from '@angular/core';
import { Router } from '@angular/router';
import CytoscapeOptions = Cy.CytoscapeOptions;
import {HostResource, Host} from "../resources/HostResource";
import {Container, ContainerResource} from "../resources/ContainerResource";

@Component({
  templateUrl: 'container.component.html',
  styleUrls: [
      './container.component.scss'
  ]
})
export class ContainerComponent implements OnInit {
  cy:any = null;
  hosts:Host[] = null;
  cyoptions:Object = {
    boxSelectionEnabled: false,
    autounselectify: true,
    style: [
      {
        selector: 'node',
        css: {
          'background-color': '#ccc',
          'border-color': '#888',
          'padding-right': '3',
          'padding-left': '3',
          'padding-top': '3',
          'padding-bottom': '3',
          'text-wrap': 'wrap',
          'text-valign': 'center',
          'text-max-width': '100px',
          'label': 'data(name)',
          'font-size': '10'
        }
      },
      {
        selector: '$node > node',
        css: {
          'padding-top': '10px',
          'padding-left': '10px',
          'padding-bottom': '10px',
          'padding-right': '10px',
          'text-valign': 'top',
          'text-halign': 'center',
          'background-color': 'rgba(255,255,255, .1)',
          'border-width': '2px',
          'border-color': '#aaaaaa'
        }
      },
      {
        selector: 'edge',
        css: {
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier'
        }
      },
      {
        selector: '.dependency',
        css: {
          'line-color': '#bb433f',
          'target-arrow-color': '#bb433f'
        }
      },
      {
        selector: '.redundancy',
        css: {
          'line-color': '#60bb75',
          'target-arrow-color': '#60bb75'
        }
      },
      {
        selector: ':selected',
        css: {
          'background-color': 'black',
          'line-color': 'black',
          'target-arrow-color': 'black',
          'source-arrow-color': 'black'
        }
      }
    ],
    layout: {
      name: "circle"
    },
    zoom: 3,
    maxZoom: 1
  };

  addConnectionData = {
    show: false,
    type: null,
    from: null,
    to: null
  };

  addConnection(){
    if(this.addConnectionData.type == 'dependency'){
      this.containerResource.addDependency({container_id: this.addConnectionData.from, dependency_id:this.addConnectionData.to}, () => {
        this.drawGraph()
      });
    }

    if(this.addConnectionData.type == 'redundancy'){
      this.containerResource.addRedundancy({container_id: this.addConnectionData.from, redundancy_id:this.addConnectionData.to}, () => {
        this.drawGraph()
      })
    }

    this.addConnectionData.show = false;
  }

  removeDependency(container, dependency)
  {
    this.containerResource.removeDependency({container_id: container.id, dependency_id:dependency.id},() => {
      this.drawGraph()
    });
  }

  removeRedundancy(container, redundancy)
  {
    this.containerResource.removeRedundancy({container_id: container.id, redundancy_id:redundancy.id},() => {
      this.drawGraph()
    });
  }

  containers:Container[] = [];

  constructor(public hostResource:HostResource, public containerResource:ContainerResource) { }




  drawGraph(){
    this.hostResource.query(null, (response) => {
      this.hosts = response;

      let nodes = [];
      let edges = [];

      for(let host of response){
        if(host.containers.length > 0){
          nodes.push({ data: { id: 'h_'+host.id, name: host.name, address:host.address } });
          for(let container of host.containers) {
            nodes.push({data: {id: 'c_' + container.id, parent: 'h_' + host.id, name: container.name}});
            for (let dependency of container.dependencies) {
              edges.push({
                data: {
                  id: 'd_' + container.id + '_' + dependency.id,
                  source: 'c_' + container.id,
                  target: 'c_' + dependency.id
                },
                classes: 'dependency'
              });
            }

            for (let redundancy of container.redundancies) {
              edges.push({
                data: {
                  id: 'r_' + container.id + '_' + redundancy.id,
                  source: 'c_' + container.id,
                  target: 'c_' + redundancy.id
                },
                classes: 'redundancy'
              });
            }

            for (let redundancy of container.redundant_nodes) {
              edges.push({
                data: {
                  id: 'r_' + container.id + '_' + redundancy.id,
                  source: 'c_' + container.id,
                  target: 'c_' + redundancy.id
                },
                classes: 'redundancy'
              });
            }
          }
        }
      }
      this.cyoptions['container'] = document.getElementById('graph_container');
      this.cyoptions['elements'] = {nodes: nodes, edges: edges};
      this.cy = cytoscape(this.cyoptions);


    });



  }

  ngOnInit(): void {
    this.drawGraph();
    this.containerResource.query(null, (containers:Container[]) => {
      this.containers = containers
    });

  }
}
