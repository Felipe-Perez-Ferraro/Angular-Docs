import{a as m,b as a,c as s,d as M,e as x,f as o,g as n,h as c,i,j as A,k,l as N,m as S,n as D,o as L,p as w,q as E,r as l}from"./chunk-OPQ54MIV.js";var d=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["shared-home-page"]],decls:2,vars:0,template:function(t,u){t&1&&(o(0,"p"),i(1,"home-page works!"),n())},encapsulation:2})};var g=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["shared-about-page"]],decls:2,vars:0,template:function(t,u){t&1&&(o(0,"p"),i(1,"about-page works!"),n())},encapsulation:2})};var C=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["shared-contact-page"]],decls:2,vars:0,template:function(t,u){t&1&&(o(0,"p"),i(1,"contact-page works!"),n())},encapsulation:2})};var F=[{path:"",component:d},{path:"about",component:g},{path:"contact",component:C},{path:"countries",loadChildren:()=>import("./chunk-JXRLQ7AU.js").then(e=>e.CountriesModule)},{path:"**",redirectTo:"home"}],b=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=s({type:e});static \u0275inj=m({imports:[l.forRoot(F),l]})};var I=()=>({exact:!0}),v=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["shared-sidebar"]],decls:16,vars:2,consts:[[1,"list-group"],["routerLink","","routerLinkActive","active",1,"list-group-item",3,"routerLinkActiveOptions"],["routerLink","about","routerLinkActive","active",1,"list-group-item"],["routerLink","contact","routerLinkActive","active",1,"list-group-item"],["routerLink","countries/by-capital","routerLinkActive","active",1,"list-group-item"],["routerLink","countries/by-country","routerLinkActive","active",1,"list-group-item"],["routerLink","countries/by-region","routerLinkActive","active",1,"list-group-item"]],template:function(t,u){t&1&&(o(0,"h2"),i(1,"Paises"),n(),c(2,"hr"),o(3,"ul",0)(4,"li",1),i(5," Home Page "),n(),o(6,"li",2),i(7," About Page "),n(),o(8,"li",3),i(9," Contact Page "),n(),o(10,"li",4),i(11," Por Capital "),n(),o(12,"li",5),i(13," Por Pa\xEDs "),n(),o(14,"li",6),i(15," Por Regi\xF3n "),n()()),t&2&&(M(4),x("routerLinkActiveOptions",A(1,I)))},dependencies:[w,E],encapsulation:2})};var h=class e{title="countryApp";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(t,u){t&1&&(o(0,"div",0)(1,"div",1),c(2,"shared-sidebar"),n(),o(3,"div",2),c(4,"router-outlet"),n()())},dependencies:[L,v],encapsulation:2})};var y=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=s({type:e});static \u0275inj=m({imports:[k,l]})};var P=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=s({type:e,bootstrap:[h]});static \u0275inj=m({providers:[D()],imports:[S,b,y]})};N().bootstrapModule(P,{ngZoneEventCoalescing:!0}).catch(e=>console.error(e));
