"use strict";(self.webpackChunkHorizontal_Light=self.webpackChunkHorizontal_Light||[]).push([[592],{2178:(M,y,t)=>{t.d(y,{pW:()=>P,Cv:()=>h});var r=t(7716),d=t(8583),p=t(2458),u=t(9490),a=t(6237),o=t(5319),s=t(2759),b=t(5435);const l=["primaryValueBar"],c=(0,p.pj)(class{constructor(n){this._elementRef=n}},"primary"),g=new r.OlP("mat-progress-bar-location",{providedIn:"root",factory:function(){const n=(0,r.f3M)(d.K0),m=n?n.location:null;return{getPathname:()=>m?m.pathname+m.search:""}}});let f=0,P=(()=>{class n extends c{constructor(e,i,v,O){super(e),this._ngZone=i,this._animationMode=v,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new r.vpe,this._animationEndSubscription=o.w.EMPTY,this.mode="determinate",this.progressbarId="mat-progress-bar-"+f++;const T=O?O.getPathname().split("#")[0]:"";this._rectangleFillValue=`url('${T}#${this.progressbarId}')`,this._isNoopAnimation="NoopAnimations"===v}get value(){return this._value}set value(e){this._value=E((0,u.su)(e)||0)}get bufferValue(){return this._bufferValue}set bufferValue(e){this._bufferValue=E(e||0)}_primaryTransform(){return{transform:`scale3d(${this.value/100}, 1, 1)`}}_bufferTransform(){return"buffer"===this.mode?{transform:`scale3d(${this.bufferValue/100}, 1, 1)`}:null}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{const e=this._primaryValueBar.nativeElement;this._animationEndSubscription=(0,s.R)(e,"transitionend").pipe((0,b.h)(i=>i.target===e)).subscribe(()=>{("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))})})}ngOnDestroy(){this._animationEndSubscription.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(r.SBq),r.Y36(r.R0b),r.Y36(a.Qb,8),r.Y36(g,8))},n.\u0275cmp=r.Xpm({type:n,selectors:[["mat-progress-bar"]],viewQuery:function(e,i){if(1&e&&r.Gf(l,5),2&e){let v;r.iGM(v=r.CRH())&&(i._primaryValueBar=v.first)}},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-progress-bar"],hostVars:4,hostBindings:function(e,i){2&e&&(r.uIk("aria-valuenow","indeterminate"===i.mode||"query"===i.mode?null:i.value)("mode",i.mode),r.ekj("_mat-animation-noopable",i._isNoopAnimation))},inputs:{color:"color",mode:"mode",value:"value",bufferValue:"bufferValue"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[r.qOj],decls:10,vars:4,consts:[["aria-hidden","true"],["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(e,i){1&e&&(r.TgZ(0,"div",0),r.O4$(),r.TgZ(1,"svg",1),r.TgZ(2,"defs"),r.TgZ(3,"pattern",2),r._UZ(4,"circle",3),r.qZA(),r.qZA(),r._UZ(5,"rect",4),r.qZA(),r.kcU(),r._UZ(6,"div",5),r._UZ(7,"div",6,7),r._UZ(9,"div",8),r.qZA()),2&e&&(r.xp6(3),r.Q6J("id",i.progressbarId),r.xp6(2),r.uIk("fill",i._rectangleFillValue),r.xp6(1),r.Q6J("ngStyle",i._bufferTransform()),r.xp6(1),r.Q6J("ngStyle",i._primaryTransform()))},directives:[d.PC],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n'],encapsulation:2,changeDetection:0}),n})();function E(n,m=0,e=100){return Math.max(m,Math.min(e,n))}let h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[d.ez,p.BQ],p.BQ]}),n})()},187:(M,y,t)=>{t.d(y,{ZP:()=>d});const d=(a,o={})=>{const{action:s="start",duration:b=1e3,delay:l=16}=o;if("stop"===s)return void p(a);if(p(a),!/[0-9]/.test(a.innerHTML))return;const c=u(a.innerHTML,{duration:b||a.getAttribute("data-duration"),delay:l||a.getAttribute("data-delay")});a._countUpOrigInnerHTML=a.innerHTML,a.innerHTML=c[0]||"&nbsp;",a.style.visibility="visible";const g=function(){a.innerHTML=c.shift()||"&nbsp;",c.length?(clearTimeout(a.countUpTimeout),a.countUpTimeout=setTimeout(g,l)):a._countUpOrigInnerHTML=void 0};a.countUpTimeout=setTimeout(g,l)},p=a=>{clearTimeout(a.countUpTimeout),a._countUpOrigInnerHTML&&(a.innerHTML=a._countUpOrigInnerHTML,a._countUpOrigInnerHTML=void 0),a.style.visibility=""},u=(a,o={})=>{const{duration:s=1e3,delay:b=16}=o,l=s/b,c=a.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/),g=[];for(let _=0;_<l;_++)g.push("");for(let _=0;_<c.length;_++)if(/([0-9.][,.0-9]*[0-9]*)/.test(c[_])&&!/<[^>]+>/.test(c[_])){let f=c[_];const P=[...f.matchAll(/[.,]/g)].map(h=>({char:h[0],i:f.length-h.index-1})).sort((h,n)=>h.i-n.i);f=f.replace(/[.,]/g,"");let E=g.length-1;for(let h=l;h>=1;h--){let n=parseInt(f/l*h,10);n=P.reduce((m,{char:e,i})=>m.length<=i?m:m.slice(0,-i)+e+m.slice(-i),n.toString()),g[E--]+=n}}else for(let f=0;f<l;f++)g[f]+=c[_];return g[g.length]=a.toString(),g}},1122:(M,y,t)=>{t.d(y,{H:()=>o});var r=t(6215),d=t(8307),p=t(2340),u=t(7716),a=t(1841);let o=(()=>{class s{constructor(l){this.http=l,this._question=new r.X(null)}get question$(){return this._question.asObservable()}getQuestionById(l){return this.http.get(`${p.N.apiBackend.url}/question/${l}`).pipe((0,d.b)(c=>{this._question.next(c)}))}}return s.\u0275fac=function(l){return new(l||s)(u.LFG(a.eN))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},5505:(M,y,t)=>{t.d(y,{$:()=>p});var r=t(7716),d=t(9075);let p=(()=>{class u{constructor(o){this.sanitizer=o}transform(o){return this.sanitizer.bypassSecurityTrustHtml(o)}}return u.\u0275fac=function(o){return new(o||u)(r.Y36(d.H7,16))},u.\u0275pipe=r.Yjl({name:"html",type:u,pure:!0}),u})()},2867:(M,y,t)=>{t.d(y,{L:()=>u});var r=t(7716),d=t(8583);function p(a,o){if(1&a&&(r.TgZ(0,"li",5),r.TgZ(1,"a",6),r._uU(2),r.qZA(),r.qZA()),2&a){const s=o.$implicit;r.xp6(1),r.s9C("routerLink",s.link),r.xp6(1),r.Oqu(s.name)}}let u=(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=r.Xpm({type:a,selectors:[["app-header-breadcrumb-custom"]],inputs:{title:"title",items:"items",active_item:"active_item"},decls:8,vars:3,consts:[[1,"page-header"],[1,"page-title"],[1,"breadcrumb"],["class","breadcrumb-item",4,"ngFor","ngForOf"],["aria-current","page",1,"breadcrumb-item","active"],[1,"breadcrumb-item"],[3,"routerLink"]],template:function(s,b){1&s&&(r.TgZ(0,"div",0),r.TgZ(1,"div"),r.TgZ(2,"h1",1),r._uU(3),r.qZA(),r.TgZ(4,"ol",2),r.YNc(5,p,3,2,"li",3),r.TgZ(6,"li",4),r._uU(7),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&s&&(r.xp6(3),r.Oqu(b.title),r.xp6(2),r.Q6J("ngForOf",b.items),r.xp6(2),r.Oqu(b.active_item))},directives:[d.sg],encapsulation:2}),a})()}}]);