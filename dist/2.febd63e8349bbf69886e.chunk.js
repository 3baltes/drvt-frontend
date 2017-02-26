webpackJsonp([2,7],{859:function(e,t,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=_(156),r=_(915),i=_(157),s=_(916),h=_(345),l=(_.n(h),_(226)),a=_(84),c=_(903),x=_(899),d=_(152),o=_(67);_.d(t,"AnalyseModuleNgFactory",function(){return T});var u=this&&this.__extends||function(e,t){function _(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(_.prototype=t.prototype,new _)},p=function(e){function t(t){return e.call(this,t,[c.a],[])||this}return u(t,e),Object.defineProperty(t.prototype,"_ROUTES_5",{get:function(){return null==this.__ROUTES_5&&(this.__ROUTES_5=[[{path:"",component:x.a,data:{title:"Analyse"}}]]),this.__ROUTES_5},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgLocalization_6",{get:function(){return null==this.__NgLocalization_6&&(this.__NgLocalization_6=new a.a(this.parent.get(d.a))),this.__NgLocalization_6},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._RouterModule_0=new i.f(this.parent.get(i.g,null)),this._AnalyseRoutingModule_1=new s.a,this._ChartsModule_2=new h.ChartsModule,this._CommonModule_3=new l.a,this._AnalyseModule_4=new r.a,this._AnalyseModule_4},t.prototype.getInternal=function(e,t){return e===i.f?this._RouterModule_0:e===s.a?this._AnalyseRoutingModule_1:e===h.ChartsModule?this._ChartsModule_2:e===l.a?this._CommonModule_3:e===r.a?this._AnalyseModule_4:e===o.a?this._ROUTES_5:e===a.b?this._NgLocalization_6:t},t.prototype.destroyInternal=function(){},t}(n.a),T=new n.b(p,r.a)},899:function(e,t,_){"use strict";var n=_(347);_.d(t,"a",function(){return r});var r=function(){function e(e){this.analysisResource=e}return e.prototype.ngOnInit=function(){var e=this;this.analysisResource.get({},function(t){e.analysis=t})},e.ctorParameters=function(){return[{type:n.a}]},e}()},903:function(e,t,_){"use strict";var n=_(899),r=_(108),i=_(22),s=_(83),h=_(55),l=_(54),a=_(66),c=_(347),x=_(904),d=_(109),o=_(31),u=_(342),p=_(155),T=_(107),f=_(153),I=_(343),R=_(346),m=_(152),w=_(154);_.d(t,"a",function(){return v});var y=this&&this.__extends||function(e,t){function _(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(_.prototype=t.prototype,new _)},E=function(){function e(e){this._changed=!1,this.context=new n.a(e)}return e.prototype.ngOnDetach=function(e,t,_){},e.prototype.ngOnDestroy=function(){},e.prototype.ngDoCheck=function(e,t,_){var n=this._changed;return this._changed=!1,_||0===e.numberOfChecks&&this.context.ngOnInit(),n},e.prototype.checkHost=function(e,t,_,n){},e.prototype.handleEvent=function(e,t){var _=!0;return _},e.prototype.subscribe=function(e,t){this._eventHandler=t},e}(),g=i.createRenderComponentType("",0,s.b.None,[],{}),A=function(e){function t(_,n,r,i){return e.call(this,t,g,h.a.HOST,_,n,r,i,l.b.CheckAlways)||this}return y(t,e),t.prototype.createInternal=function(e){return this._el_0=i.selectOrCreateRenderHostElement(this.renderer,"ng-component",i.EMPTY_INLINE_ARRAY,e,null),this.compView_0=new L(this.viewUtils,this,0,this._el_0),this._AnalyseComponent_0_3=new E(this.injectorGet(c.a,this.parentIndex)),this.compView_0.create(this._AnalyseComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new a.a(0,this,this._el_0,this._AnalyseComponent_0_3.context)},t.prototype.injectorGetInternal=function(e,t,_){return e===n.a&&0===t?this._AnalyseComponent_0_3.context:_},t.prototype.detectChangesInternal=function(e){this._AnalyseComponent_0_3.ngDoCheck(this,this._el_0,e),this.compView_0.internalDetectChanges(e)},t.prototype.destroyInternal=function(){this.compView_0.destroy()},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t}(r.a),v=new a.b("ng-component",A,n.a),N=[x.a],b=function(e){function t(_,n,r,i,s){return e.call(this,t,D,h.a.EMBEDDED,_,n,r,i,l.b.CheckAlways,s)||this}return y(t,e),t.prototype.createInternal=function(e){return this._el_0=i.createRenderElement(this.renderer,null,"div",new i.InlineArray4(4,"class","col-lg-12 text-center","id","noanalysis"),null),this._text_1=this.renderer.createText(this._el_0,"\n        ",null),this._el_2=i.createRenderElement(this.renderer,this._el_0,"i",new i.InlineArray2(2,"class","fa fa-refresh fa-spin fa-5x"),null),this._text_3=this.renderer.createText(this._el_0,"\n        ",null),this._el_4=i.createRenderElement(this.renderer,this._el_0,"div",new i.InlineArray2(2,"style","margin-top: 20px"),null),this._text_5=this.renderer.createText(this._el_4,"\n            Die Analyse wird ausgeführt\n        ",null),this._text_6=this.renderer.createText(this._el_0,"\n    ",null),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._text_3,this._el_4,this._text_5,this._text_6],null),null},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t}(r.a),C=function(e){function t(_,n,r,i,s){var a=e.call(this,t,D,h.a.EMBEDDED,_,n,r,i,l.b.CheckAlways,s)||this;return a._expr_70=o.b,a._expr_71=o.b,a._expr_72=o.b,a._expr_73=o.b,a}return y(t,e),t.prototype.createInternal=function(e){return this._el_0=i.createRenderElement(this.renderer,null,"div",new i.InlineArray2(2,"class","row"),null),this._text_1=this.renderer.createText(this._el_0,"\n\n        ",null),this._el_2=i.createRenderElement(this.renderer,this._el_0,"div",new i.InlineArray2(2,"class","col-lg-3"),null),this._text_3=this.renderer.createText(this._el_2,"\n            ",null),this._el_4=i.createRenderElement(this.renderer,this._el_2,"div",new i.InlineArray2(2,"class","card"),null),this._text_5=this.renderer.createText(this._el_4,"\n                ",null),this._el_6=i.createRenderElement(this.renderer,this._el_4,"div",new i.InlineArray2(2,"class","card-block p-0 clearfix"),null),this._text_7=this.renderer.createText(this._el_6,"\n                    ",null),this._el_8=i.createRenderElement(this.renderer,this._el_6,"i",new i.InlineArray2(2,"class","fa fa-building-o bg-warning p-2 font-2xl mr-1 float-left"),null),this._text_9=this.renderer.createText(this._el_6,"\n                    ",null),this._el_10=i.createRenderElement(this.renderer,this._el_6,"div",new i.InlineArray2(2,"class","h5 text-warning mb-0 pt-1"),null),this._text_11=this.renderer.createText(this._el_10,"",null),this._text_12=this.renderer.createText(this._el_6,"\n                    ",null),this._el_13=i.createRenderElement(this.renderer,this._el_6,"div",new i.InlineArray2(2,"class","text-muted text-uppercase font-weight-bold font-xs"),null),this._text_14=this.renderer.createText(this._el_13,"Hosts insgesamt",null),this._text_15=this.renderer.createText(this._el_6,"\n                ",null),this._text_16=this.renderer.createText(this._el_4,"\n            ",null),this._text_17=this.renderer.createText(this._el_2,"\n        ",null),this._text_18=this.renderer.createText(this._el_0,"\n\n        ",null),this._el_19=i.createRenderElement(this.renderer,this._el_0,"div",new i.InlineArray2(2,"class","col-lg-3"),null),this._text_20=this.renderer.createText(this._el_19,"\n            ",null),this._el_21=i.createRenderElement(this.renderer,this._el_19,"div",new i.InlineArray2(2,"class","card"),null),this._text_22=this.renderer.createText(this._el_21,"\n                ",null),this._el_23=i.createRenderElement(this.renderer,this._el_21,"div",new i.InlineArray2(2,"class","card-block p-0 clearfix"),null),this._text_24=this.renderer.createText(this._el_23,"\n                    ",null),this._el_25=i.createRenderElement(this.renderer,this._el_23,"i",new i.InlineArray2(2,"class","fa fa-cubes bg-primary p-2 font-2xl mr-1 float-left"),null),this._text_26=this.renderer.createText(this._el_23,"\n                    ",null),this._el_27=i.createRenderElement(this.renderer,this._el_23,"div",new i.InlineArray2(2,"class","h5 text-primary mb-0 pt-1"),null),this._text_28=this.renderer.createText(this._el_27,"",null),this._text_29=this.renderer.createText(this._el_23,"\n                    ",null),this._el_30=i.createRenderElement(this.renderer,this._el_23,"div",new i.InlineArray2(2,"class","text-muted text-uppercase font-weight-bold font-xs"),null),this._text_31=this.renderer.createText(this._el_30,"Container insgesamt",null),this._text_32=this.renderer.createText(this._el_23,"\n                ",null),this._text_33=this.renderer.createText(this._el_21,"\n            ",null),this._text_34=this.renderer.createText(this._el_19,"\n        ",null),this._text_35=this.renderer.createText(this._el_0,"\n\n        ",null),this._el_36=i.createRenderElement(this.renderer,this._el_0,"div",new i.InlineArray2(2,"class","col-lg-3"),null),this._text_37=this.renderer.createText(this._el_36,"\n            ",null),this._el_38=i.createRenderElement(this.renderer,this._el_36,"div",new i.InlineArray2(2,"class","card"),null),this._text_39=this.renderer.createText(this._el_38,"\n                ",null),this._el_40=i.createRenderElement(this.renderer,this._el_38,"div",new i.InlineArray2(2,"class","card-block p-0 clearfix"),null),this._text_41=this.renderer.createText(this._el_40,"\n                    ",null),this._el_42=i.createRenderElement(this.renderer,this._el_40,"i",new i.InlineArray2(2,"class","icon-link bg-success p-2 font-2xl mr-1 float-left"),null),this._text_43=this.renderer.createText(this._el_40,"\n                    ",null),this._el_44=i.createRenderElement(this.renderer,this._el_40,"div",new i.InlineArray2(2,"class","h5 text-success mb-0 pt-1"),null),this._text_45=this.renderer.createText(this._el_44,"",null),this._text_46=this.renderer.createText(this._el_40,"\n                    ",null),this._el_47=i.createRenderElement(this.renderer,this._el_40,"div",new i.InlineArray2(2,"class","text-muted text-uppercase font-weight-bold font-xs"),null),this._text_48=this.renderer.createText(this._el_47,"Redundanzen insgesamt",null),this._text_49=this.renderer.createText(this._el_40,"\n                ",null),this._text_50=this.renderer.createText(this._el_38,"\n            ",null),this._text_51=this.renderer.createText(this._el_36,"\n        ",null),this._text_52=this.renderer.createText(this._el_0,"\n\n\n        ",null),this._el_53=i.createRenderElement(this.renderer,this._el_0,"div",new i.InlineArray2(2,"class","col-lg-3"),null),this._text_54=this.renderer.createText(this._el_53,"\n            ",null),this._el_55=i.createRenderElement(this.renderer,this._el_53,"div",new i.InlineArray2(2,"class","card"),null),this._text_56=this.renderer.createText(this._el_55,"\n                ",null),this._el_57=i.createRenderElement(this.renderer,this._el_55,"div",new i.InlineArray2(2,"class","card-block p-0 clearfix"),null),this._text_58=this.renderer.createText(this._el_57,"\n                    ",null),this._el_59=i.createRenderElement(this.renderer,this._el_57,"i",new i.InlineArray2(2,"class","icon-share bg-danger p-2 font-2xl mr-1 float-left"),null),this._text_60=this.renderer.createText(this._el_57,"\n                    ",null),this._el_61=i.createRenderElement(this.renderer,this._el_57,"div",new i.InlineArray2(2,"class","h5 text-danger mb-0 pt-1"),null),this._text_62=this.renderer.createText(this._el_61,"",null),this._text_63=this.renderer.createText(this._el_57,"\n                    ",null),this._el_64=i.createRenderElement(this.renderer,this._el_57,"div",new i.InlineArray2(2,"class","text-muted text-uppercase font-weight-bold font-xs"),null),this._text_65=this.renderer.createText(this._el_64,"Abhängigkeiten insgesamt",null),this._text_66=this.renderer.createText(this._el_57,"\n                ",null),this._text_67=this.renderer.createText(this._el_55,"\n            ",null),this._text_68=this.renderer.createText(this._el_53,"\n        ",null),this._text_69=this.renderer.createText(this._el_0,"\n    ",null),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._text_3,this._el_4,this._text_5,this._el_6,this._text_7,this._el_8,this._text_9,this._el_10,this._text_11,this._text_12,this._el_13,this._text_14,this._text_15,this._text_16,this._text_17,this._text_18,this._el_19,this._text_20,this._el_21,this._text_22,this._el_23,this._text_24,this._el_25,this._text_26,this._el_27,this._text_28,this._text_29,this._el_30,this._text_31,this._text_32,this._text_33,this._text_34,this._text_35,this._el_36,this._text_37,this._el_38,this._text_39,this._el_40,this._text_41,this._el_42,this._text_43,this._el_44,this._text_45,this._text_46,this._el_47,this._text_48,this._text_49,this._text_50,this._text_51,this._text_52,this._el_53,this._text_54,this._el_55,this._text_56,this._el_57,this._text_58,this._el_59,this._text_60,this._el_61,this._text_62,this._text_63,this._el_64,this._text_65,this._text_66,this._text_67,this._text_68,this._text_69],null),null},t.prototype.detectChangesInternal=function(e){var t=i.inlineInterpolate(1,"",this.parentView.context.analysis.totalHostCount,"");i.checkBinding(e,this._expr_70,t)&&(this.renderer.setText(this._text_11,t),this._expr_70=t);var _=i.inlineInterpolate(1,"",this.parentView.context.analysis.totalContainerCount,"");i.checkBinding(e,this._expr_71,_)&&(this.renderer.setText(this._text_28,_),this._expr_71=_);var n=i.inlineInterpolate(1,"",this.parentView.context.analysis.totalRedundancies,"");i.checkBinding(e,this._expr_72,n)&&(this.renderer.setText(this._text_45,n),this._expr_72=n);var r=i.inlineInterpolate(1,"",this.parentView.context.analysis.totalDependencies,"");i.checkBinding(e,this._expr_73,r)&&(this.renderer.setText(this._text_62,r),this._expr_73=r)},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t}(r.a),V=function(e){function t(_,n,r,i,s){var a=e.call(this,t,D,h.a.EMBEDDED,_,n,r,i,l.b.CheckAlways,s)||this;return a._expr_20=o.b,a._expr_21=o.b,a._expr_22=o.b,a._expr_23=o.b,a._expr_24=o.b,a}return y(t,e),t.prototype.createInternal=function(e){return this._el_0=i.createRenderElement(this.renderer,null,"tr",i.EMPTY_INLINE_ARRAY,null),this._text_1=this.renderer.createText(this._el_0,"\n                                ",null),this._el_2=i.createRenderElement(this.renderer,this._el_0,"td",i.EMPTY_INLINE_ARRAY,null),this._text_3=this.renderer.createText(this._el_2,"",null),this._text_4=this.renderer.createText(this._el_0,"\n                                ",null),this._el_5=i.createRenderElement(this.renderer,this._el_0,"td",i.EMPTY_INLINE_ARRAY,null),this._text_6=this.renderer.createText(this._el_5,"",null),this._text_7=this.renderer.createText(this._el_0,"\n                                ",null),this._el_8=i.createRenderElement(this.renderer,this._el_0,"td",i.EMPTY_INLINE_ARRAY,null),this._el_9=i.createRenderElement(this.renderer,this._el_8,"samp",i.EMPTY_INLINE_ARRAY,null),this._text_10=this.renderer.createText(this._el_9,"",null),this._text_11=this.renderer.createText(this._el_8," ",null),this._el_12=i.createRenderElement(this.renderer,this._el_8,"i",new i.InlineArray2(2,"class","fa fa-long-arrow-right"),null),this._text_13=this.renderer.createText(this._el_8," ",null),this._el_14=i.createRenderElement(this.renderer,this._el_8,"samp",i.EMPTY_INLINE_ARRAY,null),this._text_15=this.renderer.createText(this._el_14,"",null),this._text_16=this.renderer.createText(this._el_0,"\n                                ",null),this._el_17=i.createRenderElement(this.renderer,this._el_0,"td",i.EMPTY_INLINE_ARRAY,null),this._text_18=this.renderer.createText(this._el_17,"",null),this._text_19=this.renderer.createText(this._el_0,"\n                            ",null),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._text_3,this._text_4,this._el_5,this._text_6,this._text_7,this._el_8,this._el_9,this._text_10,this._text_11,this._el_12,this._text_13,this._el_14,this._text_15,this._text_16,this._el_17,this._text_18,this._text_19],null),null},t.prototype.detectChangesInternal=function(e){var t=i.inlineInterpolate(1,"",this.context.$implicit.type,"");i.checkBinding(e,this._expr_20,t)&&(this.renderer.setText(this._text_3,t),this._expr_20=t);var _=i.inlineInterpolate(1,"",this.context.$implicit.connection,"");i.checkBinding(e,this._expr_21,_)&&(this.renderer.setText(this._text_6,_),this._expr_21=_);var n=i.inlineInterpolate(2,"",this.context.$implicit.from.host.name,"/",this.context.$implicit.from.name,"");i.checkBinding(e,this._expr_22,n)&&(this.renderer.setText(this._text_10,n),this._expr_22=n);var r=i.inlineInterpolate(2,"",this.context.$implicit.to.host.name,"/",this.context.$implicit.to.name,"");i.checkBinding(e,this._expr_23,r)&&(this.renderer.setText(this._text_15,r),this._expr_23=r);var s=i.inlineInterpolate(1,"",this.context.$implicit.message,"");i.checkBinding(e,this._expr_24,s)&&(this.renderer.setText(this._text_18,s),this._expr_24=s)},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t}(r.a),Y=function(e){function t(_,n,r,i,s){var a=e.call(this,t,D,h.a.EMBEDDED,_,n,r,i,l.b.CheckAlways,s)||this;return a._expr_51=o.b,a}return y(t,e),t.prototype.createInternal=function(e){return this._el_0=i.createRenderElement(this.renderer,null,"div",new i.InlineArray2(2,"class","row"),null),this._text_1=this.renderer.createText(this._el_0,"\n        ",null),this._el_2=i.createRenderElement(this.renderer,this._el_0,"div",new i.InlineArray2(2,"class","col-lg-12"),null),this._text_3=this.renderer.createText(this._el_2,"\n            ",null),this._el_4=i.createRenderElement(this.renderer,this._el_2,"div",new i.InlineArray2(2,"class","card"),null),this._text_5=this.renderer.createText(this._el_4,"\n                ",null),this._el_6=i.createRenderElement(this.renderer,this._el_4,"div",new i.InlineArray2(2,"class","card-header"),null),this._text_7=this.renderer.createText(this._el_6,"Redundanzfehler ",null),this._el_8=i.createRenderElement(this.renderer,this._el_6,"span",new i.InlineArray2(2,"class","badge badge-warning"),null),this._text_9=this.renderer.createText(this._el_8,"",null),this._text_10=this.renderer.createText(this._el_6," ",null),this._text_11=this.renderer.createText(this._el_4,"\n                ",null),this._el_12=i.createRenderElement(this.renderer,this._el_4,"div",new i.InlineArray2(2,"class","card-block"),null),this._text_13=this.renderer.createText(this._el_12,"\n                    ",null),this._el_14=i.createRenderElement(this.renderer,this._el_12,"div",new i.InlineArray2(2,"class","table-responsive"),null),this._text_15=this.renderer.createText(this._el_14,"\n                        ",null),this._el_16=i.createRenderElement(this.renderer,this._el_14,"table",new i.InlineArray2(2,"class","table table-sm table-striped"),null),this._text_17=this.renderer.createText(this._el_16,"\n                            ",null),this._el_18=i.createRenderElement(this.renderer,this._el_16,"thead",i.EMPTY_INLINE_ARRAY,null),this._text_19=this.renderer.createText(this._el_18,"\n                            ",null),this._el_20=i.createRenderElement(this.renderer,this._el_18,"tr",i.EMPTY_INLINE_ARRAY,null),this._text_21=this.renderer.createText(this._el_20,"\n                                ",null),this._el_22=i.createRenderElement(this.renderer,this._el_20,"th",i.EMPTY_INLINE_ARRAY,null),this._text_23=this.renderer.createText(this._el_22,"Art",null),this._text_24=this.renderer.createText(this._el_20,"\n                                ",null),this._el_25=i.createRenderElement(this.renderer,this._el_20,"th",i.EMPTY_INLINE_ARRAY,null),this._text_26=this.renderer.createText(this._el_25,"Verbindung",null),this._text_27=this.renderer.createText(this._el_20,"\n                                ",null),this._el_28=i.createRenderElement(this.renderer,this._el_20,"th",i.EMPTY_INLINE_ARRAY,null),this._text_29=this.renderer.createText(this._el_28,"Von ",null),this._el_30=i.createRenderElement(this.renderer,this._el_28,"i",new i.InlineArray2(2,"class","fa fa-long-arrow-right"),null),this._text_31=this.renderer.createText(this._el_28," Zu",null),this._text_32=this.renderer.createText(this._el_20,"\n                                ",null),this._el_33=i.createRenderElement(this.renderer,this._el_20,"th",i.EMPTY_INLINE_ARRAY,null),this._text_34=this.renderer.createText(this._el_33,"Mitteilung",null),this._text_35=this.renderer.createText(this._el_20,"\n                            ",null),this._text_36=this.renderer.createText(this._el_18,"\n                            ",null),this._text_37=this.renderer.createText(this._el_16,"\n                            ",null),this._el_38=i.createRenderElement(this.renderer,this._el_16,"tbody",i.EMPTY_INLINE_ARRAY,null),this._text_39=this.renderer.createText(this._el_38,"\n                            ",null),this._anchor_40=this.renderer.createTemplateAnchor(this._el_38,null),this._vc_40=new d.a(40,38,this,this._anchor_40),this._TemplateRef_40_5=new p.a(this,40,this._anchor_40),this._NgFor_40_6=new u.a(this._vc_40.vcRef,this._TemplateRef_40_5,this.parentView.parentView.injectorGet(T.a,this.parentView.parentIndex),this.parentView.ref),this._text_41=this.renderer.createText(this._el_38,"\n                            ",null),this._text_42=this.renderer.createText(this._el_16,"\n                        ",null),this._text_43=this.renderer.createText(this._el_14,"\n                    ",null),this._text_44=this.renderer.createText(this._el_12,"\n                ",null),this._text_45=this.renderer.createText(this._el_4,"\n            ",null),this._text_46=this.renderer.createText(this._el_2,"\n        ",null),this._text_47=this.renderer.createText(this._el_0,"\n    ",null),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._text_3,this._el_4,this._text_5,this._el_6,this._text_7,this._el_8,this._text_9,this._text_10,this._text_11,this._el_12,this._text_13,this._el_14,this._text_15,this._el_16,this._text_17,this._el_18,this._text_19,this._el_20,this._text_21,this._el_22,this._text_23,this._text_24,this._el_25,this._text_26,this._text_27,this._el_28,this._text_29,this._el_30,this._text_31,this._text_32,this._el_33,this._text_34,this._text_35,this._text_36,this._text_37,this._el_38,this._text_39,this._anchor_40,this._text_41,this._text_42,this._text_43,this._text_44,this._text_45,this._text_46,this._text_47],null),null},t.prototype.injectorGetInternal=function(e,t,_){return e===p.b&&40===t?this._TemplateRef_40_5:e===f.a&&40===t?this._NgFor_40_6.context:_},t.prototype.detectChangesInternal=function(e){var t=this.parentView.context.analysis.redundancyIssues;this._NgFor_40_6.check_ngForOf(t,e,!1),this._NgFor_40_6.ngDoCheck(this,this._anchor_40,e),this._vc_40.detectChangesInNestedViews(e);var _=i.inlineInterpolate(1,"",this.parentView.context.analysis.redundancyIssues.length,"");i.checkBinding(e,this._expr_51,_)&&(this.renderer.setText(this._text_9,_),this._expr_51=_)},t.prototype.destroyInternal=function(){this._vc_40.destroyNestedViews()},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t.prototype.createEmbeddedViewInternal=function(e){return 40==e?new V(this.viewUtils,this,40,this._anchor_40,this._vc_40):null},t}(r.a),M=function(e){function t(_,n,r,i,s){var a=e.call(this,t,D,h.a.EMBEDDED,_,n,r,i,l.b.CheckAlways,s)||this;return a._expr_5=o.b,a}return y(t,e),t.prototype.createInternal=function(e){return this._el_0=i.createRenderElement(this.renderer,null,"li",i.EMPTY_INLINE_ARRAY,null),this._text_1=this.renderer.createText(this._el_0,"\n                                                ",null),this._el_2=i.createRenderElement(this.renderer,this._el_0,"samp",i.EMPTY_INLINE_ARRAY,null),this._text_3=this.renderer.createText(this._el_2,"",null),this._text_4=this.renderer.createText(this._el_0,"\n                                            ",null),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._text_3,this._text_4],null),null},t.prototype.detectChangesInternal=function(e){var t=i.inlineInterpolate(2,"",this.context.$implicit.host.name,"/",this.context.$implicit.name,"");i.checkBinding(e,this._expr_5,t)&&(this.renderer.setText(this._text_3,t),this._expr_5=t)},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t}(r.a),k=function(e){function t(_,n,r,i,s){var a=e.call(this,t,D,h.a.EMBEDDED,_,n,r,i,l.b.CheckAlways,s)||this;return a._expr_23=o.b,a._expr_24=o.b,a._expr_25=o.b,a}return y(t,e),t.prototype.createInternal=function(e){return this._el_0=i.createRenderElement(this.renderer,null,"tr",i.EMPTY_INLINE_ARRAY,null),this._text_1=this.renderer.createText(this._el_0,"\n                                    ",null),this._el_2=i.createRenderElement(this.renderer,this._el_0,"td",i.EMPTY_INLINE_ARRAY,null),this._el_3=i.createRenderElement(this.renderer,this._el_2,"samp",i.EMPTY_INLINE_ARRAY,null),this._text_4=this.renderer.createText(this._el_3,"",null),this._text_5=this.renderer.createText(this._el_0,"\n                                    ",null),this._el_6=i.createRenderElement(this.renderer,this._el_0,"td",i.EMPTY_INLINE_ARRAY,null),this._text_7=this.renderer.createText(this._el_6,"\n                                        ",null),this._el_8=i.createRenderElement(this.renderer,this._el_6,"ul",i.EMPTY_INLINE_ARRAY,null),this._text_9=this.renderer.createText(this._el_8,"\n                                            ",null),this._anchor_10=this.renderer.createTemplateAnchor(this._el_8,null),this._vc_10=new d.a(10,8,this,this._anchor_10),this._TemplateRef_10_5=new p.a(this,10,this._anchor_10),this._NgFor_10_6=new u.a(this._vc_10.vcRef,this._TemplateRef_10_5,this.parentView.parentView.parentView.injectorGet(T.a,this.parentView.parentView.parentIndex),this.parentView.parentView.ref),this._text_11=this.renderer.createText(this._el_8,"\n                                        ",null),this._text_12=this.renderer.createText(this._el_6,"\n                                    ",null),this._text_13=this.renderer.createText(this._el_0,"\n                                    ",null),this._el_14=i.createRenderElement(this.renderer,this._el_0,"td",i.EMPTY_INLINE_ARRAY,null),this._text_15=this.renderer.createText(this._el_14,"",null),this._el_16=i.createRenderElement(this.renderer,this._el_14,"span",new i.InlineArray2(2,"class","text-muted"),null),this._text_17=this.renderer.createText(this._el_16,"",null),this._text_18=this.renderer.createText(this._el_14,"\n                                    ",null),this._text_19=this.renderer.createText(this._el_0,"\n                                ",null),this._pipe_number_0_0=i.pureProxy1(this.parentView.parentView._pipe_number_0.transform.bind(this.parentView.parentView._pipe_number_0)),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._el_3,this._text_4,this._text_5,this._el_6,this._text_7,this._el_8,this._text_9,this._anchor_10,this._text_11,this._text_12,this._text_13,this._el_14,this._text_15,this._el_16,this._text_17,this._text_18,this._text_19],null),null},t.prototype.injectorGetInternal=function(e,t,_){return e===p.b&&10===t?this._TemplateRef_10_5:e===f.a&&10===t?this._NgFor_10_6.context:_},t.prototype.detectChangesInternal=function(e){var t=new o.c,_=this.context.$implicit.impactedContainers;this._NgFor_10_6.check_ngForOf(_,e,!1),this._NgFor_10_6.ngDoCheck(this,this._anchor_10,e),this._vc_10.detectChangesInNestedViews(e);var n=i.inlineInterpolate(2,"",this.context.$implicit.container.host.name,"/",this.context.$implicit.container.name,"");i.checkBinding(e,this._expr_23,n)&&(this.renderer.setText(this._text_4,n),this._expr_23=n);var r=i.inlineInterpolate(2,"\n                                        ",this.context.$implicit.impactedContainerCount,"/",this.parentView.parentView.context.analysis.totalContainerCount," ");i.checkBinding(e,this._expr_24,r)&&(this.renderer.setText(this._text_15,r),this._expr_24=r),t.reset();var s=i.inlineInterpolate(1,"(",t.unwrap(i.castByValue(this._pipe_number_0_0,this.parentView.parentView._pipe_number_0.transform)(this.context.$implicit.impactedContainerCount/this.parentView.parentView.context.analysis.totalContainerCount*100)),"%)");(t.hasWrappedValue||i.checkBinding(e,this._expr_25,s))&&(this.renderer.setText(this._text_17,s),this._expr_25=s)},t.prototype.destroyInternal=function(){this._vc_10.destroyNestedViews()},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t.prototype.createEmbeddedViewInternal=function(e){return 10==e?new M(this.viewUtils,this,10,this._anchor_10,this._vc_10):null},t}(r.a),P=function(e){function t(_,n,r,i,s){return e.call(this,t,D,h.a.EMBEDDED,_,n,r,i,l.b.CheckAlways,s)||this}return y(t,e),t.prototype.createInternal=function(e){return this._el_0=i.createRenderElement(this.renderer,null,"div",new i.InlineArray2(2,"class","row"),null),this._text_1=this.renderer.createText(this._el_0,"\n        ",null),this._el_2=i.createRenderElement(this.renderer,this._el_0,"div",new i.InlineArray2(2,"class","col-lg-12"),null),this._text_3=this.renderer.createText(this._el_2,"\n            ",null),this._el_4=i.createRenderElement(this.renderer,this._el_2,"div",new i.InlineArray2(2,"class","card"),null),this._text_5=this.renderer.createText(this._el_4,"\n                ",null),this._el_6=i.createRenderElement(this.renderer,this._el_4,"div",new i.InlineArray2(2,"class","card-header"),null),this._text_7=this.renderer.createText(this._el_6,"Auswirkungen eines Container-Ausfalls",null),this._text_8=this.renderer.createText(this._el_4,"\n                ",null),this._el_9=i.createRenderElement(this.renderer,this._el_4,"div",new i.InlineArray2(2,"class","card-block"),null),this._text_10=this.renderer.createText(this._el_9,"\n                    ",null),this._el_11=i.createRenderElement(this.renderer,this._el_9,"div",new i.InlineArray2(2,"class","table-responsive"),null),this._text_12=this.renderer.createText(this._el_11,"\n                        ",null),this._el_13=i.createRenderElement(this.renderer,this._el_11,"table",new i.InlineArray2(2,"class","table table-sm table-bordered"),null),this._text_14=this.renderer.createText(this._el_13,"\n                            ",null),this._el_15=i.createRenderElement(this.renderer,this._el_13,"thead",i.EMPTY_INLINE_ARRAY,null),this._text_16=this.renderer.createText(this._el_15,"\n                                ",null),this._el_17=i.createRenderElement(this.renderer,this._el_15,"tr",i.EMPTY_INLINE_ARRAY,null),this._text_18=this.renderer.createText(this._el_17,"\n                                    ",null),this._el_19=i.createRenderElement(this.renderer,this._el_17,"th",i.EMPTY_INLINE_ARRAY,null),this._text_20=this.renderer.createText(this._el_19,"Ausgefallener Container",null),this._text_21=this.renderer.createText(this._el_17,"\n                                    ",null),this._el_22=i.createRenderElement(this.renderer,this._el_17,"th",i.EMPTY_INLINE_ARRAY,null),this._text_23=this.renderer.createText(this._el_22,"Betroffene Container",null),this._text_24=this.renderer.createText(this._el_17,"\n                                    ",null),this._el_25=i.createRenderElement(this.renderer,this._el_17,"th",i.EMPTY_INLINE_ARRAY,null),this._text_26=this.renderer.createText(this._el_25,"%",null),this._text_27=this.renderer.createText(this._el_17,"\n                                ",null),this._text_28=this.renderer.createText(this._el_15,"\n                            ",null),this._text_29=this.renderer.createText(this._el_13,"\n                            ",null),this._el_30=i.createRenderElement(this.renderer,this._el_13,"tbody",i.EMPTY_INLINE_ARRAY,null),this._text_31=this.renderer.createText(this._el_30,"\n                                ",null),this._anchor_32=this.renderer.createTemplateAnchor(this._el_30,null),this._vc_32=new d.a(32,30,this,this._anchor_32),this._TemplateRef_32_5=new p.a(this,32,this._anchor_32),this._NgFor_32_6=new u.a(this._vc_32.vcRef,this._TemplateRef_32_5,this.parentView.parentView.injectorGet(T.a,this.parentView.parentIndex),this.parentView.ref),this._text_33=this.renderer.createText(this._el_30,"\n                            ",null),this._text_34=this.renderer.createText(this._el_13,"\n                        ",null),this._text_35=this.renderer.createText(this._el_11,"\n                    ",null),
this._text_36=this.renderer.createText(this._el_9,"\n                ",null),this._text_37=this.renderer.createText(this._el_4,"\n            ",null),this._text_38=this.renderer.createText(this._el_2,"\n        ",null),this._text_39=this.renderer.createText(this._el_0,"\n    ",null),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._text_3,this._el_4,this._text_5,this._el_6,this._text_7,this._text_8,this._el_9,this._text_10,this._el_11,this._text_12,this._el_13,this._text_14,this._el_15,this._text_16,this._el_17,this._text_18,this._el_19,this._text_20,this._text_21,this._el_22,this._text_23,this._text_24,this._el_25,this._text_26,this._text_27,this._text_28,this._text_29,this._el_30,this._text_31,this._anchor_32,this._text_33,this._text_34,this._text_35,this._text_36,this._text_37,this._text_38,this._text_39],null),null},t.prototype.injectorGetInternal=function(e,t,_){return e===p.b&&32===t?this._TemplateRef_32_5:e===f.a&&32===t?this._NgFor_32_6.context:_},t.prototype.detectChangesInternal=function(e){var t=this.parentView.context.analysis.containerFailImpacts;this._NgFor_32_6.check_ngForOf(t,e,!1),this._NgFor_32_6.ngDoCheck(this,this._anchor_32,e),this._vc_32.detectChangesInNestedViews(e)},t.prototype.destroyInternal=function(){this._vc_32.destroyNestedViews()},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t.prototype.createEmbeddedViewInternal=function(e){return 32==e?new k(this.viewUtils,this,32,this._anchor_32,this._vc_32):null},t}(r.a),D=i.createRenderComponentType("",0,s.b.Emulated,N,{}),L=function(e){function t(_,n,r,i){return e.call(this,t,D,h.a.COMPONENT,_,n,r,i,l.b.CheckAlways)||this}return y(t,e),t.prototype.createInternal=function(e){var t=this.renderer.createViewRoot(this.parentElement);return this._el_0=i.createRenderElement(this.renderer,t,"div",new i.InlineArray2(2,"class","animated fadeIn"),null),this._text_1=this.renderer.createText(this._el_0,"\n    ",null),this._el_2=i.createRenderElement(this.renderer,this._el_0,"h4",i.EMPTY_INLINE_ARRAY,null),this._text_3=this.renderer.createText(this._el_2,"Analyse",null),this._text_4=this.renderer.createText(this._el_0,"\n    ",null),this._anchor_5=this.renderer.createTemplateAnchor(this._el_0,null),this._vc_5=new d.a(5,0,this,this._anchor_5),this._TemplateRef_5_5=new p.a(this,5,this._anchor_5),this._NgIf_5_6=new I.a(this._vc_5.vcRef,this._TemplateRef_5_5),this._text_6=this.renderer.createText(this._el_0,"\n\n    ",null),this._anchor_7=this.renderer.createTemplateAnchor(this._el_0,null),this._vc_7=new d.a(7,0,this,this._anchor_7),this._TemplateRef_7_5=new p.a(this,7,this._anchor_7),this._NgIf_7_6=new I.a(this._vc_7.vcRef,this._TemplateRef_7_5),this._text_8=this.renderer.createText(this._el_0,"\n\n    ",null),this._anchor_9=this.renderer.createTemplateAnchor(this._el_0,null),this._vc_9=new d.a(9,0,this,this._anchor_9),this._TemplateRef_9_5=new p.a(this,9,this._anchor_9),this._NgIf_9_6=new I.a(this._vc_9.vcRef,this._TemplateRef_9_5),this._text_10=this.renderer.createText(this._el_0,"\n    ",null),this._anchor_11=this.renderer.createTemplateAnchor(this._el_0,null),this._vc_11=new d.a(11,0,this,this._anchor_11),this._TemplateRef_11_5=new p.a(this,11,this._anchor_11),this._NgIf_11_6=new I.a(this._vc_11.vcRef,this._TemplateRef_11_5),this._text_12=this.renderer.createText(this._el_0,"\n",null),this._text_13=this.renderer.createText(t,"\n",null),this._pipe_number_0=new R.a(this.parentView.injectorGet(m.a,this.parentIndex)),this.init(null,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._el_2,this._text_3,this._text_4,this._anchor_5,this._text_6,this._anchor_7,this._text_8,this._anchor_9,this._text_10,this._anchor_11,this._text_12,this._text_13],null),null},t.prototype.injectorGetInternal=function(e,t,_){return e===p.b&&5===t?this._TemplateRef_5_5:e===w.a&&5===t?this._NgIf_5_6.context:e===p.b&&7===t?this._TemplateRef_7_5:e===w.a&&7===t?this._NgIf_7_6.context:e===p.b&&9===t?this._TemplateRef_9_5:e===w.a&&9===t?this._NgIf_9_6.context:e===p.b&&11===t?this._TemplateRef_11_5:e===w.a&&11===t?this._NgIf_11_6.context:_},t.prototype.detectChangesInternal=function(e){var t=!this.context.analysis;this._NgIf_5_6.check_ngIf(t,e,!1),this._NgIf_5_6.ngDoCheck(this,this._anchor_5,e);var _=this.context.analysis;this._NgIf_7_6.check_ngIf(_,e,!1),this._NgIf_7_6.ngDoCheck(this,this._anchor_7,e);var n=this.context.analysis;this._NgIf_9_6.check_ngIf(n,e,!1),this._NgIf_9_6.ngDoCheck(this,this._anchor_9,e);var r=this.context.analysis;this._NgIf_11_6.check_ngIf(r,e,!1),this._NgIf_11_6.ngDoCheck(this,this._anchor_11,e),this._vc_5.detectChangesInNestedViews(e),this._vc_7.detectChangesInNestedViews(e),this._vc_9.detectChangesInNestedViews(e),this._vc_11.detectChangesInNestedViews(e)},t.prototype.destroyInternal=function(){this._vc_5.destroyNestedViews(),this._vc_7.destroyNestedViews(),this._vc_9.destroyNestedViews(),this._vc_11.destroyNestedViews()},t.prototype.createEmbeddedViewInternal=function(e){return 5==e?new b(this.viewUtils,this,5,this._anchor_5,this._vc_5):7==e?new C(this.viewUtils,this,7,this._anchor_7,this._vc_7):9==e?new Y(this.viewUtils,this,9,this._anchor_9,this._vc_9):11==e?new P(this.viewUtils,this,11,this._anchor_11,this._vc_11):null},t}(r.a)},904:function(e,t,_){"use strict";_.d(t,"a",function(){return n});var n=["#graph_container[_ngcontent-%COMP%]{height:600px}"]},915:function(e,t,_){"use strict";_.d(t,"a",function(){return n});var n=function(){function e(){}return e}()},916:function(e,t,_){"use strict";var n=_(899);_.d(t,"a",function(){return r});var r=([{path:"",component:n.a,data:{title:"Analyse"}}],function(){function e(){}return e}())}});