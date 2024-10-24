import './polyfills.server.mjs';
import{c as L}from"./chunk-IS4WWJOU.mjs";import{A as n,B as l,C as i,D as S,T as k,ca as N,d as p,da as D,ea as w,ha as E,i as a,ia as F,j as m,ja as u,v as x,y as A,z as o}from"./chunk-2YJTWMXA.mjs";var f=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["shared-home-page"]],decls:2,vars:0,template:function(t,d){t&1&&(o(0,"p"),i(1,"home-page works!"),n())},encapsulation:2})};var C=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["shared-about-page"]],decls:2,vars:0,template:function(t,d){t&1&&(o(0,"p"),i(1,"about-page works!"),n())},encapsulation:2})};var v=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["shared-contact-page"]],decls:2,vars:0,template:function(t,d){t&1&&(o(0,"p"),i(1,"contact-page works!"),n())},encapsulation:2})};var R=[{path:"",component:f},{path:"about",component:C},{path:"contact",component:v},{path:"countries",loadChildren:()=>import("./chunk-RS6FJ7LI.mjs").then(e=>e.CountriesModule)},{path:"**",redirectTo:"home"}],b=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=m({type:e});static \u0275inj=p({imports:[u.forRoot(R),u]})};var j=()=>({exact:!0}),y=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["shared-sidebar"]],decls:16,vars:2,consts:[[1,"list-group"],["routerLink","","routerLinkActive","active",1,"list-group-item",3,"routerLinkActiveOptions"],["routerLink","about","routerLinkActive","active",1,"list-group-item"],["routerLink","contact","routerLinkActive","active",1,"list-group-item"],["routerLink","countries/by-capital","routerLinkActive","active",1,"list-group-item"],["routerLink","countries/by-country","routerLinkActive","active",1,"list-group-item"],["routerLink","countries/by-region","routerLinkActive","active",1,"list-group-item"]],template:function(t,d){t&1&&(o(0,"h2"),i(1,"Paises"),n(),l(2,"hr"),o(3,"ul",0)(4,"li",1),i(5," Home Page "),n(),o(6,"li",2),i(7," About Page "),n(),o(8,"li",3),i(9," Contact Page "),n(),o(10,"li",4),i(11," Por Capital "),n(),o(12,"li",5),i(13," Por Pa\xEDs "),n(),o(14,"li",6),i(15," Por Regi\xF3n "),n()()),t&2&&(x(4),A("routerLinkActiveOptions",S(1,j)))},dependencies:[E,F],encapsulation:2})};var c=class e{title="countryApp";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(t,d){t&1&&(o(0,"div",0)(1,"div",1),l(2,"shared-sidebar"),n(),o(3,"div",2),l(4,"router-outlet"),n()())},dependencies:[w,y],encapsulation:2})};var h=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=m({type:e});static \u0275inj=p({imports:[k,u]})};var M=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=m({type:e,bootstrap:[c]});static \u0275inj=p({providers:[D()],imports:[N,b,h]})};var P=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=m({type:e,bootstrap:[c]});static \u0275inj=p({imports:[M,L]})};export{P as a};
