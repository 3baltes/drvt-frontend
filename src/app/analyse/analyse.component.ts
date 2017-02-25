import {Component, OnInit} from '@angular/core';
import {Analysis, AnalysisResource} from "../resources/AnalysisResource";
@Component({
  templateUrl: 'analyse.component.html',
  styleUrls: [
      'analyse.component.scss'
  ]
})
export class AnalyseComponent implements OnInit{
    analysis:Analysis;


    constructor(private analysisResource:AnalysisResource) {
    }

    ngOnInit(): void {
        this.analysisResource.get({}, (analysis:Analysis) => {
            this.analysis = analysis;
        });
    }
}
