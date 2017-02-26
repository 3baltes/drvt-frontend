import {Component, OnInit, ViewChild} from '@angular/core';
import {HostResource, Host} from "../resources/HostResource";
import {ModalDirective} from "ng2-bootstrap";
import {Response} from "@angular/http";

@Component({
  templateUrl: 'hosts.component.html'
})
export class HostsComponent implements OnInit{

  public addHostData = {
    show: false,
    address: null,
    port: 8080,
    description: null,
    name: null
  };

  hosts:Host[] = [];
  activeHost:Host = null;

  constructor(public hostResource:HostResource) {

  }

  addHost(){
   this
       .hostResource.save({address:this.addHostData.address+':'+this.addHostData.port, name:this.addHostData.name, description: this.addHostData.description})
       .$observable.subscribe((host:Host) => {
         this.addHostData.show = false;
         this.addHostData.address = null;
         this.addHostData.name= null;
         this.updateHosts();
       }, (error:Response) => {
          let message = JSON.parse(error.text()).error.exception[0].message;
          alert(message);
       }
   );
  }

  removeHost(host:Host){
    this.hostResource.remove({id: host.id}, () => {
      this.updateHosts();
    });
  }

  ngOnInit() {
    this.updateHosts();
  }

  updateHosts(){
    this.hosts = this.hostResource.query();
  }

  setActiveHost(host:Host)
  {
    this.activeHost = host;
  }



}
