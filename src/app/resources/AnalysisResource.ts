import {Injectable} from '@angular/core';
import {Resource, ResourceParams, ResourceAction, ResourceMethod} from 'ng2-resource-rest';
import { Http, Request, RequestMethod } from '@angular/http';
import { Injector } from '@angular/core';
import {Container} from "./ContainerResource";
import {environment} from "../../environments/environment";
import {Host} from "./HostResource";


export interface Analysis {
    totalHostCount: number,
    totalContainerCount: number,
    totalDependencies: number,
    totalRedundancies: number,
    redundancyIssues:RedundancyIssue[],
    failReachResults:ContainerFailImpact[]
}

export interface RedundancyIssue {
    type:string,
    message:string,
    connection: string,
    from:Container,
    to:Container
}

export interface ContainerFailImpact {
    container:Container,
    impactedContainers:Container[],
    impactPercentage:number
}


@Injectable()
@ResourceParams({
    url: environment.base_api_url + '/analysis'
})
export class AnalysisResource extends Resource {
    constructor(http: Http, injector: Injector){
        super(http, injector)
    }

    @ResourceAction()
    get: ResourceMethod<any, Analysis>;
}