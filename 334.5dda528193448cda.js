"use strict";(self.webpackChunkneumaticos_app=self.webpackChunkneumaticos_app||[]).push([[334],{334:(rr,me,p)=>{p.r(me),p.d(me,{CartModule:()=>j});var _=p(895),_e=p(736),r=p(256);function At(n,t){if(1&n){const e=r.EpF();r.TgZ(0,"a",12),r.NdJ("keyup.enter",function(){r.CHM(e),r.oxw(3);const o=r.MAs(1);return r.KtG(o.previous())})("click",function(){r.CHM(e),r.oxw(3);const o=r.MAs(1);return r.KtG(o.previous())}),r._uU(1),r.TgZ(2,"span",13),r._uU(3),r.qZA()()}if(2&n){const e=r.oxw(3);r.xp6(1),r.hij(" ",e.previousLabel," "),r.xp6(2),r.Oqu(e.screenReaderPageLabel)}}function Mt(n,t){if(1&n&&(r.TgZ(0,"span",14),r._uU(1),r.TgZ(2,"span",13),r._uU(3),r.qZA()()),2&n){const e=r.oxw(3);r.xp6(1),r.hij(" ",e.previousLabel," "),r.xp6(2),r.Oqu(e.screenReaderPageLabel)}}function Dt(n,t){if(1&n&&(r.TgZ(0,"li",9),r.YNc(1,At,4,2,"a",10),r.YNc(2,Mt,4,2,"span",11),r.qZA()),2&n){r.oxw(2);const e=r.MAs(1);r.ekj("disabled",e.isFirstPage()),r.xp6(1),r.Q6J("ngIf",1<e.getCurrent()),r.xp6(1),r.Q6J("ngIf",e.isFirstPage())}}function xt(n,t){if(1&n){const e=r.EpF();r.TgZ(0,"a",12),r.NdJ("keyup.enter",function(){r.CHM(e);const o=r.oxw().$implicit;r.oxw(2);const s=r.MAs(1);return r.KtG(s.setCurrent(o.value))})("click",function(){r.CHM(e);const o=r.oxw().$implicit;r.oxw(2);const s=r.MAs(1);return r.KtG(s.setCurrent(o.value))}),r.TgZ(1,"span",13),r._uU(2),r.qZA(),r.TgZ(3,"span"),r._uU(4),r.ALo(5,"number"),r.qZA()()}if(2&n){const e=r.oxw().$implicit,i=r.oxw(2);r.xp6(2),r.hij("",i.screenReaderPageLabel," "),r.xp6(2),r.Oqu("..."===e.label?e.label:r.xi3(5,2,e.label,""))}}function Ft(n,t){if(1&n&&(r.ynx(0),r.TgZ(1,"span",16)(2,"span",13),r._uU(3),r.qZA(),r.TgZ(4,"span"),r._uU(5),r.ALo(6,"number"),r.qZA()(),r.BQk()),2&n){const e=r.oxw().$implicit,i=r.oxw(2);r.xp6(3),r.hij("",i.screenReaderCurrentLabel," "),r.xp6(2),r.Oqu("..."===e.label?e.label:r.xi3(6,2,e.label,""))}}function wt(n,t){if(1&n&&(r.TgZ(0,"li"),r.YNc(1,xt,6,5,"a",10),r.YNc(2,Ft,7,5,"ng-container",15),r.qZA()),2&n){const e=t.$implicit;r.oxw(2);const i=r.MAs(1);r.ekj("current",i.getCurrent()===e.value)("ellipsis","..."===e.label),r.xp6(1),r.Q6J("ngIf",i.getCurrent()!==e.value),r.xp6(1),r.Q6J("ngIf",i.getCurrent()===e.value)}}function Et(n,t){if(1&n){const e=r.EpF();r.TgZ(0,"a",12),r.NdJ("keyup.enter",function(){r.CHM(e),r.oxw(3);const o=r.MAs(1);return r.KtG(o.next())})("click",function(){r.CHM(e),r.oxw(3);const o=r.MAs(1);return r.KtG(o.next())}),r._uU(1),r.TgZ(2,"span",13),r._uU(3),r.qZA()()}if(2&n){const e=r.oxw(3);r.xp6(1),r.hij(" ",e.nextLabel," "),r.xp6(2),r.Oqu(e.screenReaderPageLabel)}}function Ot(n,t){if(1&n&&(r.TgZ(0,"span",14),r._uU(1),r.TgZ(2,"span",13),r._uU(3),r.qZA()()),2&n){const e=r.oxw(3);r.xp6(1),r.hij(" ",e.nextLabel," "),r.xp6(2),r.Oqu(e.screenReaderPageLabel)}}function Nt(n,t){if(1&n&&(r.TgZ(0,"li",17),r.YNc(1,Et,4,2,"a",10),r.YNc(2,Ot,4,2,"span",11),r.qZA()),2&n){r.oxw(2);const e=r.MAs(1);r.ekj("disabled",e.isLastPage()),r.xp6(1),r.Q6J("ngIf",!e.isLastPage()),r.xp6(1),r.Q6J("ngIf",e.isLastPage())}}function Pt(n,t){if(1&n&&(r.TgZ(0,"ul",4),r.YNc(1,Dt,3,4,"li",5),r.TgZ(2,"li",6),r._uU(3),r.qZA(),r.YNc(4,wt,3,6,"li",7),r.YNc(5,Nt,3,4,"li",8),r.qZA()),2&n){const e=r.oxw(),i=r.MAs(1);r.ekj("responsive",e.responsive),r.xp6(1),r.Q6J("ngIf",e.directionLinks),r.xp6(2),r.AsE(" ",i.getCurrent()," / ",i.getLastPage()," "),r.xp6(1),r.Q6J("ngForOf",i.pages)("ngForTrackBy",e.trackByIndex),r.xp6(1),r.Q6J("ngIf",e.directionLinks)}}class Z{constructor(){this.change=new r.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(t){return null==t.id&&(t.id=this.DEFAULT_ID),this.instances[t.id]?this.updateInstance(t):(this.instances[t.id]=t,!0)}updateInstance(t){let e=!1;for(let i in this.instances[t.id])t[i]!==this.instances[t.id][i]&&(this.instances[t.id][i]=t[i],e=!0);return e}getCurrentPage(t){return this.instances[t]?this.instances[t].currentPage:1}setCurrentPage(t,e){if(this.instances[t]){let i=this.instances[t];e<=Math.ceil(i.totalItems/i.itemsPerPage)&&1<=e&&(this.instances[t].currentPage=e,this.change.emit(t))}}setTotalItems(t,e){this.instances[t]&&0<=e&&(this.instances[t].totalItems=e,this.change.emit(t))}setItemsPerPage(t,e){this.instances[t]&&(this.instances[t].itemsPerPage=e,this.change.emit(t))}getInstance(t=this.DEFAULT_ID){return this.instances[t]?this.clone(this.instances[t]):{}}clone(t){var e={};for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}}const St=Number.MAX_SAFE_INTEGER;let It=(()=>{class n{constructor(e){this.service=e,this.state={}}transform(e,i){if(!(e instanceof Array)){let f=i.id||this.service.defaultId();return this.state[f]?this.state[f].slice:e}let l,u,o=i.totalItems&&i.totalItems!==e.length,s=this.createInstance(e,i),a=s.id,d=s.itemsPerPage,m=this.service.register(s);if(!o&&e instanceof Array){if(d=+d||St,l=(s.currentPage-1)*d,u=l+d,this.stateIsIdentical(a,e,l,u))return this.state[a].slice;{let M=e.slice(l,u);return this.saveState(a,e,M,l,u),this.service.change.emit(a),M}}return m&&this.service.change.emit(a),this.saveState(a,e,e,l,u),e}createInstance(e,i){return this.checkConfig(i),{id:null!=i.id?i.id:this.service.defaultId(),itemsPerPage:+i.itemsPerPage||0,currentPage:+i.currentPage||1,totalItems:+i.totalItems||e.length}}checkConfig(e){const o=["itemsPerPage","currentPage"].filter(s=>!(s in e));if(0<o.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${o.join(", ")}`)}saveState(e,i,o,s,a){this.state[e]={collection:i,size:i.length,slice:o,start:s,end:a}}stateIsIdentical(e,i,o,s){let a=this.state[e];return!(!a||a.size!==i.length||a.start!==o||a.end!==s)&&a.slice.every((u,d)=>u===i[o+d])}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(Z,16))},n.\u0275pipe=r.Yjl({name:"paginate",type:n,pure:!1}),n})(),Tt=(()=>{class n{constructor(e,i){this.service=e,this.changeDetectorRef=i,this.maxSize=7,this.pageChange=new r.vpe,this.pageBoundsCorrection=new r.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(o=>{this.id===o&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(e){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(e){this.pageChange.emit(e)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let e=this.service.getInstance(this.id);return e.totalItems<1?1:Math.ceil(e.totalItems/e.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let e=this.service.getInstance(this.id);const i=this.outOfBoundCorrection(e);i!==e.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(i),this.pages=this.createPageArray(e.currentPage,e.itemsPerPage,e.totalItems,this.maxSize)}):this.pages=this.createPageArray(e.currentPage,e.itemsPerPage,e.totalItems,this.maxSize)}outOfBoundCorrection(e){const i=Math.ceil(e.totalItems/e.itemsPerPage);return i<e.currentPage&&0<i?i:e.currentPage<1?1:e.currentPage}createPageArray(e,i,o,s){s=+s;let a=[];const l=Math.max(Math.ceil(o/i),1),u=Math.ceil(s/2),d=e<=u,m=l-u<e,f=!d&&!m;let M=s<l,D=1;for(;D<=l&&D<=s;){let fe,bt=this.calculatePageNumber(D,e,s,l),tr=2===D&&(f||m),nr=D===s-1&&(f||d);fe=M&&(tr||nr)?"...":bt,a.push({label:fe,value:bt}),D++}return a}calculatePageNumber(e,i,o,s){let a=Math.ceil(o/2);return e===o?s:1===e?e:o<s?s-a<i?s-o+e:a<i?i-a+e:e:e}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(Z),r.Y36(r.sBO))},n.\u0275dir=r.lG2({type:n,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[r.TTD]}),n})();function Y(n){return!!n&&"false"!==n}let kt=(()=>{class n{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new r.vpe,this.pageBoundsCorrection=new r.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(e){this._directionLinks=Y(e)}get autoHide(){return this._autoHide}set autoHide(e){this._autoHide=Y(e)}get responsive(){return this._responsive}set responsive(e){this._responsive=Y(e)}trackByIndex(e){return e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(e,i){if(1&e&&(r.TgZ(0,"pagination-template",0,1),r.NdJ("pageChange",function(s){return i.pageChange.emit(s)})("pageBoundsCorrection",function(s){return i.pageBoundsCorrection.emit(s)}),r.TgZ(2,"nav",2),r.YNc(3,Pt,6,8,"ul",3),r.qZA()()),2&e){const o=r.MAs(1);r.Q6J("id",i.id)("maxSize",i.maxSize),r.xp6(2),r.uIk("aria-label",i.screenReaderPaginationLabel),r.xp6(1),r.Q6J("ngIf",!(i.autoHide&&o.pages.length<=1))}},dependencies:[Tt,_.O5,_.sg,_.JJ],styles:['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],encapsulation:2,changeDetection:0}),n})(),Bt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({providers:[Z],imports:[[_.ez]]}),n})();class N{static#e=this.\u0275fac=function(e){return new(e||N)};static#t=this.\u0275cmp=r.Xpm({type:N,selectors:[["app-sider"]],decls:15,vars:0,consts:[[1,"d-flex","flex-column","bg-light","px-2","py-3","text-center","rounded"],[1,"d-flex","gap-3","flex-column"],[1,"d-flex","align-items-center","justify-content-between","w-100"],["src","./assets/icons/whatsapp_black.png","alt","",1,"icono_sider"],["src","./assets/icons/telefono-movil.png","alt","",1,"icono_sider"],["src","./assets/icons/letra.png","alt","",1,"icono_sider"]],template:function(e,i){1&e&&(r.TgZ(0,"div",0)(1,"h3"),r._uU(2,"\xbfTienes dudas?"),r.qZA(),r.TgZ(3,"p"),r._uU(4," \xa1Podemos ayudar! Nuestros expertos capacitados tienen a\xf1os de experiencia en el montaje de llantas y est\xe1n disponibles para responder tus preguntas. "),r.qZA(),r.TgZ(5,"div",1)(6,"div",2),r._UZ(7,"img",3),r._uU(8," +54 9 115050-4040 "),r.qZA(),r.TgZ(9,"div",2),r._UZ(10,"img",4),r._uU(11," +54 9 115050-4040 "),r.qZA(),r.TgZ(12,"div",2),r._UZ(13,"img",5),r._uU(14," llantas@llantas.com.co "),r.qZA()()())},styles:[".icono_sider[_ngcontent-%COMP%]{height:40px}"],changeDetection:0})}class P{static#e=this.\u0275fac=function(e){return new(e||P)};static#t=this.\u0275cmp=r.Xpm({type:P,selectors:[["app-card-item"]],decls:44,vars:0,consts:[[1,"container-fluid","bg-light","overflow-hidden","px-3","pt-3","rounded","bg-secondary"],[1,"row"],[1,"col-3"],["src",".\\assets\\imgs\\llanta-cortada.jfif","alt","50px",1,"img-fluid"],[1,"col-5","flex-column","d-flex"],[1,"d-flex","gap-2"],[1,"fw-bold"],[1,"text-success","fw-bold"],[1,"text-danger","fw-bold"],["target","_blank","href","https://wa.me/573107695856?text=Hola, estoy interesado en llantas."],[1,"btn","btn-primary","fondo-azul","mb-2"],[1,"col-4","font-black"],[1,"my-1"],[1,""],[1,"fs-5"],[1,"font-card"],[1,"d-flex","align-items-center"],[1,"col-7","d-flex","align-items-center","justify-content-start","gap-1"],[1,"btn","btn-outline-secondary"],["type","number","value","0",1,"form-control",2,"width","50px","text-align","center"],[1,"col-5","d-flex","align-items-center","justify-content-end"],[1,"fs-5","fw-bolder"]],template:function(e,i){1&e&&(r.TgZ(0,"div",0)(1,"div",1)(2,"div",2),r._UZ(3,"img",3),r.qZA(),r.TgZ(4,"div",4)(5,"h5"),r._uU(6,"225/40 R18"),r.qZA(),r.TgZ(7,"h2"),r._uU(8,"YOKOHAMA AD08"),r.qZA(),r.TgZ(9,"p")(10,"strong"),r._uU(11,"USO:"),r.qZA(),r._uU(12," Autopista (H/T)"),r.qZA(),r.TgZ(13,"div",5)(14,"p",6),r._uU(15,"DISPONIBILIDAD"),r.qZA(),r.TgZ(16,"p",7),r._uU(17,"EN STOCK"),r.qZA(),r.TgZ(18,"p",8),r._uU(19,"Consultar"),r.qZA()(),r.TgZ(20,"a",9)(21,"div",10),r._uU(22," Contactarme con un asesor "),r.qZA()()(),r.TgZ(23,"div",11)(24,"p",12),r._uU(25,"PRECIO AHORA"),r.qZA(),r.TgZ(26,"p",13)(27,"strong",14),r._uU(28,"$ 21,500,00"),r.qZA(),r._uU(29," Por unidad"),r.qZA(),r.TgZ(30,"p",15),r._uU(31,"IVA INCLUIDO | NO INCLUYE RIN"),r.qZA(),r.TgZ(32,"p",15),r._uU(33,"ENV\xcdO GRATIS"),r.qZA(),r.TgZ(34,"div",16)(35,"div",17)(36,"button",18),r._uU(37,"-"),r.qZA(),r._UZ(38,"input",19),r.TgZ(39,"button",18),r._uU(40,"+"),r.qZA()(),r.TgZ(41,"div",20)(42,"span",21),r._uU(43,"$10,300"),r.qZA()()()()()())},styles:[".card-neumatico[_ngcontent-%COMP%]{height:175px}.font-card[_ngcontent-%COMP%]{color:#646464;font-size:10px}input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}"]})}function Gt(n,t){1&n&&r._UZ(0,"app-card-item")}const Lt=function(n){return{itemsPerPage:3,currentPage:n}};class S{constructor(){this.someField=!0,this.someField2=!0,this.someField3=!0,this.colecion=[1,2,3,4],this.p=1}ngOnInit(){window.scrollTo(0,0)}static#e=this.\u0275fac=function(e){return new(e||S)};static#t=this.\u0275cmp=r.Xpm({type:S,selectors:[["app-cart"]],hostVars:6,hostBindings:function(e,i){2&e&&r.ekj("flex-grow-1",i.someField)("d-flex",i.someField2)("flex-column",i.someField3)},decls:9,vars:7,consts:[[1,"d-flex","flex-column","minHeight"],[1,"container-xxl","mt-3","pb-3"],[1,"row","flex-grow-1"],[1,"d-none","d-md-block","col-md-2"],[1,"col-12","col-md-8"],[1,"d-flex","flex-column","w-100","gap-4"],[4,"ngFor","ngForOf"],["previousLabel","Anterior","nextLabel","Siguiente",1,"text-center","font-white","my-pagination","disable","hover","mt-auto",3,"autoHide","pageChange"]],template:function(e,i){1&e&&(r.TgZ(0,"div",0)(1,"div",1)(2,"div",2),r._UZ(3,"app-sider",3),r.TgZ(4,"div",4)(5,"div",5),r.YNc(6,Gt,1,0,"app-card-item",6),r.ALo(7,"paginate"),r.qZA()()()(),r.TgZ(8,"pagination-controls",7),r.NdJ("pageChange",function(s){return i.p=s}),r.qZA()()),2&e&&(r.xp6(6),r.Q6J("ngForOf",r.xi3(7,2,i.colecion,r.VKq(5,Lt,i.p))),r.xp6(2),r.Q6J("autoHide",!0))},dependencies:[_.sg,kt,N,P,It],styles:[".my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current{background-color:#2462a4}.disable[_ngcontent-%COMP%]     .ngx-pagination .disabled{opacity:40%;cursor:not-allowed}.hover[_ngcontent-%COMP%]     .ngx-pagination a:hover{background-color:#2462a4;opacity:50%}.minHeight[_ngcontent-%COMP%]{min-height:800px}"]})}const Ut=[{path:"",component:S}];class I{static#e=this.\u0275fac=function(e){return new(e||I)};static#t=this.\u0275mod=r.oAB({type:I});static#n=this.\u0275inj=r.cJS({imports:[_e.Bz.forChild(Ut),_e.Bz]})}p(76),p(751),p(742),p(421),p(669),p(403),p(268),p(810),p(4);const w=new r.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>re}),re="always";let it=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({}),n})(),Kn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[it]}),n})(),Xn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:w,useValue:e.callSetDisabledState??re}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[Kn]}),n})();class j{static#e=this.\u0275fac=function(e){return new(e||j)};static#t=this.\u0275mod=r.oAB({type:j});static#n=this.\u0275inj=r.cJS({imports:[_.ez,I,Bt,Xn]})}}}]);