"use strict";(self.webpackChunkHorizontal_Light=self.webpackChunkHorizontal_Light||[]).push([[767],{6767:(J,d,i)=>{i.r(d),i.d(d,{QuestionPageModule:()=>L});var s=i(8583),r=i(5042),l=i(9964),g=i(4667),c=i(313),p=i(173),v=i(9765),Z=i(6782),e=i(7716),m=i(1122),f=i(2867),h=i(3151),q=i(5505);const A=function(t){return["","account","lawyer",t]};function y(t,a){if(1&t&&(e.TgZ(0,"div",15),e.TgZ(1,"div",16),e._UZ(2,"app-avatar-element",7),e.qZA(),e.TgZ(3,"div",17),e.TgZ(4,"a",18),e._uU(5),e.qZA(),e.TgZ(6,"p",19),e._uU(7),e.ALo(8,"date"),e.qZA(),e.TgZ(9,"div",20),e._UZ(10,"i",21),e._UZ(11,"i",21),e._UZ(12,"i",21),e._UZ(13,"i",21),e._UZ(14,"i",22),e.qZA(),e._UZ(15,"div",23),e.ALo(16,"html"),e.qZA(),e.qZA()),2&t){const n=a.$implicit;e.xp6(2),e.Q6J("avatar",n.lawyer_id.picture)("first_name",n.lawyer_id.first_name.toUpperCase().substring(0,1))("last_name",n.lawyer_id.last_name.toUpperCase().substring(0,1))("size","lg"),e.xp6(2),e.Q6J("routerLink",e.VKq(13,A,n.lawyer_id.id)),e.xp6(1),e.Oqu(n.lawyer_id.first_name),e.xp6(2),e.Oqu(e.xi3(8,8,n.created_at,"dd / MM / yyyy ")),e.xp6(8),e.Q6J("innerHTML",e.lcZ(16,11,n.text),e.oJD)}}function Q(t,a){1&t&&(e.TgZ(0,"div"),e.TgZ(1,"p",24),e._UZ(2,"i",25),e._UZ(3,"br"),e._uU(4,"No hay respuestas de Abogados"),e.qZA(),e.qZA())}const T=function(t){return["","account","new_answering",t]},U=[{path:":id",component:(()=>{class t{constructor(n,o,u){this.questionPageService=n,this.router=o,this._changeDetectorRef=u,this.item_header=[{name:"Inicio",link:"/account/home"},{name:"Nuevas Preguntas",link:"/account/new_question"}],this.loading=!0,this._unsubscribeAll=new v.xQ}ngOnInit(){this.questionPageService.question$.pipe((0,Z.R)(this._unsubscribeAll)).subscribe(n=>{this.question=n,this._changeDetectorRef.markForCheck(),this.loading=!1})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.H),e.Y36(r.F0),e.Y36(e.sBO))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-question-page"]],decls:23,vars:18,consts:[[3,"title","items","active_item"],[1,"row"],[1,"col-lg-8","col-md-12"],[1,"card"],[1,"card-body"],[1,"wideget-user-desc","d-sm-flex"],[1,"wideget-user-img"],[3,"avatar","first_name","last_name","size"],[1,"user-wrap"],[1,"ml-5"],[1,"text-muted","mb-3","ml-5"],[1,"btn","btn-success","mt-1","mb-1","me-2",3,"routerLink"],[1,"fe","fe-message-circle"],["class","media mb-5",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"media","mb-5"],[1,"me-3"],[1,"media-body"],[1,"mt-0","mb-0","my-2","fw-semibold","text-dark",3,"routerLink"],[1,"text-muted","float-end"],[1,"text-warning","mb-0"],[1,"fa","fa-star"],[1,"fa","fa-star-o"],[3,"innerHTML"],[1,"text-center"],[1,"fa","fa-bell-slash"]],template:function(n,o){1&n&&(e._UZ(0,"app-header-breadcrumb-custom",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e._UZ(7,"app-avatar-element",7),e.qZA(),e.TgZ(8,"div",8),e.TgZ(9,"h4",9),e._uU(10),e.qZA(),e.TgZ(11,"h6",10),e._uU(12),e.ALo(13,"date"),e.qZA(),e.TgZ(14,"p"),e._uU(15),e.qZA(),e.TgZ(16,"a",11),e._UZ(17,"i",12),e._uU(18," Responder"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(19,"div",3),e.TgZ(20,"div",4),e.YNc(21,y,17,15,"div",13),e.YNc(22,Q,5,0,"div",14),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.Q6J("title",o.question.people_id.first_name)("items",o.item_header)("active_item",o.question.people_id.first_name),e.xp6(7),e.Q6J("first_name",o.question.people_id.first_name.toUpperCase().substring(0,1))("last_name",o.question.people_id.last_name.toUpperCase().substring(0,1))("size","xl"),e.xp6(3),e.AsE("",o.question.people_id.first_name," ",o.question.people_id.last_name,""),e.xp6(2),e.Oqu(e.xi3(13,13,o.question.created_at,"dd / MM / yyyy ")),e.xp6(3),e.Oqu(o.question.text),e.xp6(1),e.Q6J("routerLink",e.VKq(16,T,o.question.id)),e.xp6(5),e.Q6J("ngForOf",o.question.answerings),e.xp6(1),e.Q6J("ngIf",0==o.question.answerings.length))},directives:[f.L,h.y,r.yS,s.sg,s.O5],pipes:[s.uU,q.$],encapsulation:2}),t})(),resolve:{question:(()=>{class t{constructor(n){this.questionPageService=n}resolve(n,o){return this.questionPageService.getQuestionById(n.params.id)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(m.H))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}];var P=i(72),b=i(2602),x=i(7276),C=i(1759);let L=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[x.bd,C.ne,b.j,P.Q,p.N,c.V,g.L,r.Bz.forChild(U),s.ez,l.m9]]}),t})()}}]);