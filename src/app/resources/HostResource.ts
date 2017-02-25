import {Injectable} from '@angular/core';
import {Resource, ResourceParams, ResourceAction, ResourceMethod} from 'ng2-resource-rest';
import { Http, Request, RequestMethod } from '@angular/http';
import { Injector } from '@angular/core';
import {Container} from "./ContainerResource";
import {environment} from "../../environments/environment";


export interface Host {
    id: string,
    name: string,
    address: string,
    description: string,
    status: HostStatus,
    containers: Container[]
}

export interface HostStatus {
    cpu_count: number,
    cpu_freq: number,
    memory: number
}

@Injectable()
@ResourceParams({
    url: environment.base_api_url + '/hosts'
})
export class HostResource extends Resource {
    constructor(http: Http, injector: Injector){
        super(http, injector)
    }

    @ResourceAction({
        isArray: true
    })
    query: ResourceMethod<any, Host[]>;

    @ResourceAction({
        method: RequestMethod.Post
    })
    save: ResourceMethod<{address: string, name: string}, Host>;


    @ResourceAction({
        method: RequestMethod.Delete,
        path: '/{!id}'
    })
    remove: ResourceMethod<{id: any},any>;
}


