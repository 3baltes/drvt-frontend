import {Injectable} from '@angular/core';
import {Resource, ResourceParams, ResourceAction, ResourceMethod} from 'ng2-resource-rest';
import { Http, Request, RequestMethod } from '@angular/http';
import { Injector } from '@angular/core';
import {Host} from "./HostResource";
import {environment} from "../../environments/environment";


export interface Container {
    id: number,
    image: string,
    name: string,
    reference: string
    host?:Host,
    dependencies: Container[],
    depending_nodes: Container[],
    redundancies: Container[],
    redundant_nodes: Container[]
}



@Injectable()
@ResourceParams({
    url: environment.base_api_url + '/containers'
})
export class ContainerResource extends Resource {
    constructor(http: Http, injector: Injector){
        super(http, injector)
    }

    @ResourceAction({
        isArray: true
    })
    query: ResourceMethod<any, Container[]>;

    @ResourceAction()
    get: ResourceMethod<string, Container>;

    @ResourceAction({
        method: RequestMethod.Post,
        path: '/{!container_id}/dependencies/{!dependency_id}'
    })
    addDependency: ResourceMethod<{container_id: any, dependency_id:any}, Container>;


    @ResourceAction({
        method: RequestMethod.Post,
        path: '/{!container_id}/redundancies/{!redundancy_id}'
    })
    addRedundancy: ResourceMethod<{container_id: any, redundancy_id:any}, Container>;

    @ResourceAction({
        method: RequestMethod.Delete,
        path: '/{!container_id}/dependencies/{!dependency_id}'
    })
    removeDependency: ResourceMethod<{container_id: any, dependency_id:any}, Container>;


    @ResourceAction({
        method: RequestMethod.Delete,
        path: '/{!container_id}/redundancies/{!redundancy_id}'
    })
    removeRedundancy: ResourceMethod<{container_id: any, redundancy_id:any}, Container>
}