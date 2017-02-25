import {Component, OnInit, ViewChild} from '@angular/core';
import {HostResource, Host} from "../resources/HostResource";
import {ModalDirective} from "ng2-bootstrap";

@Component({
  templateUrl: 'hosts.component.html'
})
export class HostsComponent implements OnInit{

  public addHostData = {
    show: false,
    address: "test",
    name: null
  };

  hosts:Host[] = [];
  activeHost:Host = null;

  constructor(public hostResource:HostResource) {

  }

  addHost(){
   this.hostResource.save({address:this.addHostData.address, name:this.addHostData.name}, (host:Host) => {
     this.addHostData.show = false;
     this.addHostData.address = null;
     this.addHostData.name= null;
     this.updateHosts();
   });
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
