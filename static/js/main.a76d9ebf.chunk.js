(this["webpackJsonpdigital-garden"]=this["webpackJsonpdigital-garden"]||[]).push([[0],{370:function(e,t,n){},372:function(e,t,n){},373:function(e,t,n){},606:function(e,t){},608:function(e,t){},618:function(e,t){},620:function(e,t){},646:function(e,t){},648:function(e,t){},649:function(e,t){},654:function(e,t){},656:function(e,t){},675:function(e,t){},687:function(e,t){},690:function(e,t){},740:function(e,t,n){},741:function(e,t,n){},742:function(e,t,n){},744:function(e,t,n){},745:function(e,t,n){},746:function(e,t,n){},747:function(e,t,n){},748:function(e,t,n){},749:function(e,t,n){},750:function(e,t,n){},751:function(e,t,n){},752:function(e,t,n){},753:function(e,t,n){},754:function(e,t,n){},755:function(e,t,n){},756:function(e,t,n){},757:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(86),i=n.n(s),l=(n(370),n(10)),o=(n(371),n(372),n(31)),j=n(25),u=(n(373),n.p+"static/media/logo192.f73b2edd.png"),d=n(760),b=n(8),h=n.n(b),O=n(15),x=n(765),f=n(766),p=n(759),m=n(9),g=n.n(m),v=n(361),y=function e(t){Object(v.a)(this,e),this.id=t.id,this.email=t.get("username"),this.fname=t.get("fname"),this.lname=t.get("lname"),this.gardenId=t.get("gan").id,this.role=t.get("role")},w=function(e){return"Enter"===e.key};var k=function(e){return/.+@.+\..+/.test(e)};var C=function(e){var t=e.showModal,n=e.handleCloseLogin,r=e.onLogin,s=Object(c.useState)(""),i=Object(l.a)(s,2),j=i[0],u=i[1],b=Object(c.useState)(""),m=Object(l.a)(b,2),v=m[0],C=m[1],N=Object(c.useState)(!1),S=Object(l.a)(N,2),T=S[0],D=S[1],I=Object(c.useState)(!1),L=Object(l.a)(I,2),E=L[0],G=L[1];function M(){u(""),C(""),D(!1)}function K(){return U.apply(this,arguments)}function U(){return(U=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.User.logIn(j,v);case 3:t=e.sent,r(new y(t)),n(),M(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),C(""),D(!0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function F(){n(),M()}function Q(e){w(e)&&j&&K()}return Object(c.useEffect)((function(){""!==v&&D(!1)}),[v]),Object(c.useEffect)((function(){D(!1),k(j)||""===j?k(j)&&G(!1):G(!0)}),[j]),Object(a.jsx)("div",{className:"c-login-modal",children:Object(a.jsxs)(x.a,{size:"md",show:t,onHide:F,centered:!0,children:[Object(a.jsx)(x.a.Header,{children:Object(a.jsx)(x.a.Title,{children:"\u05db\u05e0\u05d9\u05e1\u05d4"})}),Object(a.jsxs)(x.a.Body,{children:[Object(a.jsxs)(f.a,{children:[Object(a.jsxs)(f.a.Group,{controlId:"loginUserName",children:[Object(a.jsx)(f.a.Label,{children:"\u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9"}),Object(a.jsx)(f.a.Control,{type:"email",placeholder:"\u05d3\u05d5\u05d0\u05e8 \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9",value:j,className:E?"is-invalid":null,onChange:function(e){u(e.target.value)},onKeyPress:Q}),Object(a.jsx)(f.a.Control.Feedback,{type:"invalid",children:"\u05db\u05ea\u05d5\u05d1\u05ea \u05de\u05d9\u05d9\u05dc \u05dc\u05d0 \u05ea\u05e7\u05d9\u05e0\u05d4"})]}),Object(a.jsxs)(f.a.Group,{controlId:"loginPwd",children:[Object(a.jsx)(f.a.Label,{children:"\u05e1\u05d9\u05e1\u05de\u05d4"}),Object(a.jsx)(f.a.Control,{type:"password",placeholder:"\u05e1\u05d9\u05e1\u05de\u05d4",value:v,onChange:function(e){C(e.target.value)},onKeyPress:Q})]})]}),T?Object(a.jsx)(p.a,{variant:"danger",children:"\u05de\u05d9\u05d9\u05dc \u05d0\u05d5 \u05e1\u05d9\u05e1\u05de\u05d4 \u05e9\u05d2\u05d5\u05d9\u05d9\u05dd"}):null]}),Object(a.jsxs)(x.a.Footer,{children:[Object(a.jsx)(d.a,{as:"a",variant:"link",className:"ml-auto",children:Object(a.jsx)(o.b,{to:"/signup",children:"\u05e2\u05d3\u05d9\u05d9\u05df \u05dc\u05d0 \u05e8\u05e9\u05d5\u05de\u05d9\u05dd?"})}),Object(a.jsx)(d.a,{variant:"secondary",onClick:F,children:"\u05e1\u05d2\u05d9\u05e8\u05d4"}),Object(a.jsx)(d.a,{variant:"warning",onClick:K,children:"\u05db\u05e0\u05d9\u05e1\u05d4"})]})]})})},N=Object(c.createContext)(null),S=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),r=n[0],s=n[1],i=Object(c.useContext)(N),o=Object(c.useState)(!!i),b=Object(l.a)(o,2),h=b[0],O=b[1],x=e.onLogin;return h?Object(a.jsx)(j.a,{to:"my-garden"}):Object(a.jsxs)("div",{className:"p-home",children:[Object(a.jsxs)("div",{className:"main-content",children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("img",{className:"logo-img",src:u,alt:"logo"})}),Object(a.jsx)("div",{className:"main-text",children:Object(a.jsxs)("div",{className:"text",children:[Object(a.jsx)("h2",{children:"\u05d4\u05d2\u05df \u05d4\u05d3\u05d9\u05d2\u05d9\u05d8\u05dc\u05d9"}),Object(a.jsx)("h5",{children:"\u05d4\u05e7\u05e9\u05e8 \u05e9\u05dc\u05da \u05e2\u05dd \u05d4\u05d4\u05d5\u05e8\u05d9\u05dd"}),Object(a.jsx)("h5",{children:"\u05e0\u05e8\u05d0\u05d4 \u05d0\u05d7\u05e8\u05ea!"})]})})]}),Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)(d.a,{variant:"outline-warning",size:"lg",onClick:function(){s(!0)},children:"\u05db\u05e0\u05d9\u05e1\u05d4"})," ",Object(a.jsx)(d.a,{variant:"warning",size:"lg",children:"\u05d4\u05e8\u05e9\u05de\u05d4"})]}),Object(a.jsx)(C,{showModal:r,handleCloseLogin:function(){s(!1)},onLogin:function(e){x(e),O(!0)}})]})},T=(n(740),function(){return Object(c.useContext)(N)?Object(a.jsx)("div",{className:"p-my-gan",children:"my gan page"}):Object(a.jsx)(j.a,{to:"/"})}),D=n(363),I=n(761),L=n(762),E=(n(741),n(769)),G=n(70),M=n(71),K=function(e){var t=e.dafKesher,n=e.handleEdit,c=e.handleDeleteClick,r=e.activeUser,s=t.id,i=t.title,l=t.hebDate;return r?Object(a.jsx)("div",{className:"c-daf-kesher-card",children:Object(a.jsxs)(E.a,{children:[Object(a.jsxs)(o.b,{to:"/dapey-kesher/"+s,children:[Object(a.jsx)(E.a.Title,{className:"text-center",children:i}),Object(a.jsx)(E.a.Text,{className:"text-center",children:l})]}),r&&"manager"===r.role&&Object(a.jsxs)(E.a.Footer,{children:[Object(a.jsx)(G.a,{className:"edit-icon",onClick:function(){n(t)},icon:M.a}),Object(a.jsx)(G.a,{className:"delete-icon",onClick:function(){c(t)},icon:M.b})]})]})}):Object(a.jsx)(j.a,{to:"/"})};n(742);var U=function(e){var t=n(743)(e),a=t.year,c=t.month,r=t.date,s=function(e){var t,n=["\u05d9","\u05db","\u05dc","\u05de","\u05e0","\u05e1","\u05e2","\u05e4","\u05e6"],a=e%1e3,c=parseInt(a/400);a%=400;var r=parseInt(a/300);a%=300;var s=parseInt(a/200);return a%=200,t=c>1?"\u05ea\u05ea":1===c?"\u05ea":"",t+=1===r?"\u05e9":"",t+=1===s?"\u05e8":"",t+=1===parseInt(a/100)?"\u05e7":"",0!==(a%=100)&&a%10!==0?(t+=n[parseInt(a/10)-1],t+='"',t+=["\u05d0","\u05d1","\u05d2","\u05d3","\u05d4","\u05d5","\u05d6","\u05d7","\u05d8"][a%10-1]):0!==a?(t+='"',t+=n[parseInt(a/10)-1]):t+="'",t}(a),i=function(e){return[0,3,6,8,11,14,17].includes(e%19)}(a)?["\u05ea\u05e9\u05e8\u05d9","\u05d7\u05e9\u05d5\u05df","\u05db\u05e1\u05dc\u05d5","\u05d8\u05d1\u05ea","\u05e9\u05d1\u05d8","\u05d0\u05d3\u05e8 \u05d0","\u05d0\u05d3\u05e8 \u05d1","\u05e0\u05d9\u05e1\u05df","\u05d0\u05d9\u05d9\u05e8","\u05e1\u05d9\u05d5\u05df","\u05ea\u05de\u05d5\u05d6","\u05d0\u05d1","\u05d0\u05dc\u05d5\u05dc"][c-1]:["\u05ea\u05e9\u05e8\u05d9","\u05d7\u05e9\u05d5\u05df","\u05db\u05e1\u05dc\u05d5","\u05d8\u05d1\u05ea","\u05e9\u05d1\u05d8","\u05d0\u05d3\u05e8","\u05e0\u05d9\u05e1\u05df","\u05d0\u05d9\u05d9\u05e8","\u05e1\u05d9\u05d5\u05df","\u05ea\u05de\u05d5\u05d6","\u05d0\u05d1","\u05d0\u05dc\u05d5\u05dc"][c-1];return["\u05d0","\u05d1","\u05d2","\u05d3","\u05d4","\u05d5","\u05d6","\u05d7","\u05d8","\u05d9",'\u05d9"\u05d0','\u05d9"\u05d1','\u05d9"\u05d2','\u05d9"\u05d3','\u05d8"\u05d5','\u05d8"\u05d6','\u05d9"\u05d6','\u05d9"\u05d7','\u05d9"\u05d8',"\u05db",'\u05db"\u05d0','\u05db"\u05d1','\u05db"\u05d2','\u05db"\u05d3','\u05db"\u05d4','\u05db"\u05d5','\u05db"\u05d6','\u05db"\u05d7','\u05db"\u05d8',"\u05dc"][r-1]+" "+i+" "+s};function F(){return(F=Object(O.a)(h.a.mark((function e(t){var n,a,c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new g.a.Query(new g.a.Object.extend("Gan")).get(t);case 2:return n=e.sent,(a=new g.a.Query(g.a.Object.extend("DafKesher"))).equalTo("gan",n),a.descending("date"),e.next=8,a.find();case 8:return c=e.sent,r=c.map((function(e){return{id:e.id,title:e.get("title"),date:e.get("date"),hebDate:U(e.get("date"))}})),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=function(e){return F.apply(this,arguments)};function H(){return(H=Object(O.a)(h.a.mark((function e(t){var n,a,c,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new g.a.Query(new g.a.User).get(t.id);case 2:return n=e.sent,e.next=5,new g.a.Query(new g.a.Object.extend("Gan")).get(n.get("gan").id);case 5:return a=e.sent,c=a.get("name"),r=a.get("logo")._url,s={parseGarden:a,id:a.id,name:c,logo:r},e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(e){return H.apply(this,arguments)},z=(n(744),function(e){var t=e.onClick;return Object(a.jsx)("div",{className:"c-add-daf-kesher-card",children:Object(a.jsx)(E.a,{onClick:t,children:Object(a.jsx)(E.a.Title,{className:"text-center",children:"+"})})})});function q(){return(q=Object(O.a)(h.a.mark((function e(t,n,a){var c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=g.a.Object.extend("DafKesher"),(r=new c).set("title",n),r.set("gan",t),r.set("date",new Date(a)),r.set("data",{studyTopics:[],messages:[]}),r.save().then((function(e){console.log("DafKesher created",e)}),(function(e){console.error("Error while creating DafKesher: ",e)})),e.abrupt("return","");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(e,t,n){return q.apply(this,arguments)};function _(){return(_=Object(O.a)(h.a.mark((function e(t,n,a){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=g.a.Object.extend("DafKesher"),new g.a.Query(c).get(t).then((function(e){e.set("title",n),e.set("date",new Date(a)),e.save().then((function(e){}),(function(e){}))})),e.abrupt("return","");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(e,t,n){return _.apply(this,arguments)},X=function(e){var t=e.data,n=e.parseGarden,r=e.showModal,s=e.closeModal,i=e.cleanDataToEdit,o=Object(c.useState)(""),j=Object(l.a)(o,2),u=j[0],b=j[1],h=Object(c.useState)(""),O=Object(l.a)(h,2),m=O[0],g=O[1],v=Object(c.useState)(!1),y=Object(l.a)(v,2),k=y[0],C=y[1];function N(){s(),C(!1),i()}function S(){u&&m?t?(J(t.id,u,m),N()):(P(n,u,m),N()):C(!0)}Object(c.useEffect)((function(){if(t){b(t.title);var e=t.date.toLocaleString().split("."),n="".concat(e[2].split(",")[0],"-").concat(1===e[1].length?"0"+e[1]:e[1],"-").concat(1===e[0].length?"0"+e[0]:e[0]);g(n)}else b(""),g("")}),[t]);var T=t?"\u05e2\u05e8\u05d9\u05db\u05ea \u05e4\u05e8\u05d8\u05d9 \u05d3\u05e3 \u05e7\u05e9\u05e8":"\u05d9\u05e6\u05d9\u05e8\u05ea \u05d3\u05e3 \u05e7\u05e9\u05e8 \u05d7\u05d3\u05e9";return Object(a.jsx)("div",{className:"c-daf-kesher-card-editor-modal",children:Object(a.jsxs)(x.a,{size:"sm",show:r,onHide:N,centered:!0,children:[Object(a.jsx)(x.a.Header,{children:Object(a.jsx)(x.a.Title,{children:T})}),Object(a.jsxs)(x.a.Body,{children:[Object(a.jsxs)(f.a,{children:[Object(a.jsxs)(f.a.Group,{controlId:"title",children:[Object(a.jsx)(f.a.Label,{children:"\u05db\u05d5\u05ea\u05e8\u05ea"}),Object(a.jsx)(f.a.Control,{type:"text",value:u,onChange:function(e){b(e.target.value)}})]}),Object(a.jsxs)(f.a.Group,{controlId:"date",children:[Object(a.jsx)(f.a.Label,{children:"\u05ea\u05d0\u05e8\u05d9\u05da"}),Object(a.jsx)(f.a.Control,{type:"date",value:m,onChange:function(e){g(e.target.value)},onKeyPress:function(e){w(e)&&u&&m&&S()}})]})]}),k?Object(a.jsx)(p.a,{variant:"danger",children:"\u05e0\u05d0 \u05dc\u05de\u05dc\u05d0 \u05d0\u05ea \u05db\u05dc \u05d4\u05e9\u05d3\u05d5\u05ea"}):null]}),Object(a.jsxs)(x.a.Footer,{children:[Object(a.jsx)(d.a,{variant:"secondary",onClick:N,children:"\u05e1\u05d2\u05d9\u05e8\u05d4"}),Object(a.jsx)(d.a,{variant:"warning",onClick:S,children:"\u05e9\u05de\u05d9\u05e8\u05d4"})]})]})})};function Y(){return(Y=Object(O.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g.a.Object.extend("DafKesher"),new g.a.Query(n).get(t).then((function(e){e.destroy().then((function(e){console.log("DafKesher destroyed")}),(function(e){console.error("Error while destroying DafKesher: ",e)}))})),e.abrupt("return","");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=function(e){return Y.apply(this,arguments)};function R(){return(R=Object(O.a)(h.a.mark((function e(t,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=g.a.Object.extend("DafKesher"),new g.a.Query(a).get(t).then((function(e){e.set("data",n),e.save().then((function(e){}),(function(e){}))})),e.abrupt("return","");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=function(e,t){return R.apply(this,arguments)};var Z=function(e){var t=e.fullData,n=e.data,c=e.dafKesherId,r=e.objectType,s=e.showModal,i=e.closeModal,l=e.cleanDataToEdit;function o(){i(),l()}return Object(a.jsx)("div",{className:"c-delete-warning-modal",children:Object(a.jsxs)(x.a,{size:"sm",show:s,onHide:o,backdrop:"static",keyboard:!1,centered:!0,children:[Object(a.jsx)(x.a.Header,{children:Object(a.jsxs)(x.a.Title,{children:["\u05de\u05d7\u05d9\u05e7\u05ea ",r]})}),Object(a.jsxs)(x.a.Body,{children:["\u05d4\u05e0\u05da \u05de\u05e0\u05e1\u05d4 \u05dc\u05de\u05d7\u05d5\u05e7 ",r," ",n.title,", \u05e4\u05e2\u05d5\u05dc\u05d4 \u05d6\u05d5 \u05d0\u05d9\u05e0\u05e0\u05d4 \u05e0\u05d9\u05ea\u05e0\u05ea \u05dc\u05d1\u05d9\u05d8\u05d5\u05dc"]}),Object(a.jsxs)(x.a.Footer,{children:[Object(a.jsx)(d.a,{variant:"secondary",onClick:o,children:"\u05d1\u05d9\u05d8\u05d5\u05dc"}),Object(a.jsx)(d.a,{variant:"warning",onClick:function(){"\u05d3\u05e3 \u05e7\u05e9\u05e8"===r?(A(n.id),o()):"\u05d2\u05dc\u05e8\u05d9\u05d4"===r?(o(),console.log("delete gallery")):"\u05d7\u05d5\u05de\u05e8 \u05dc\u05d9\u05de\u05d5\u05d3\u05d9"!==r&&"\u05d4\u05d5\u05d3\u05e2\u05d4"!==r||(t[n.type].splice(n.index,1),V(c,t),console.log(t),o())},children:"\u05de\u05d7\u05d9\u05e7\u05d4"})]})]})})},W=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useContext)(N),i=Object(c.useState)(""),o=Object(l.a)(i,2),u=o[0],d=o[1],b=Object(c.useState)(!1),x=Object(l.a)(b,2),f=x[0],p=x[1],m=Object(c.useState)(!1),g=Object(l.a)(m,2),v=g[0],y=g[1],w=Object(c.useState)(""),k=Object(l.a)(w,2),C=k[0],S=k[1];if(Object(c.useEffect)((function(){function e(){return(e=Object(O.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(s);case 2:return t=e.sent,d(t),e.next=6,Q(t.id);case 6:n=e.sent,r(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f,v]),!s)return Object(a.jsx)(j.a,{to:"/"});function T(e){S(e),p(!0)}function E(e){S(e),y(!0)}var G=s&&"manager"===s.role?Object(a.jsx)(D.a,{className:"py-2",md:6,lg:3,children:Object(a.jsx)(z,{onClick:function(){p(!0)}})}):null,M=n?n.map((function(e){return Object(a.jsx)(D.a,{className:"py-2",md:6,lg:3,children:Object(a.jsx)(K,{dafKesher:e,handleEdit:T,handleDeleteClick:E,activeUser:s})},e.id)})):null;return Object(a.jsxs)("div",{className:"p-dapey-kesher",children:[Object(a.jsxs)(I.a,{children:[Object(a.jsxs)(L.a,{className:"mx-0 header",children:[Object(a.jsxs)(D.a,{sm:9,children:[Object(a.jsx)("div",{className:"name",children:u.name}),Object(a.jsx)("h2",{children:"\u05d3\u05e4\u05d9 \u05d4\u05e7\u05e9\u05e8 \u05e9\u05dc\u05e0\u05d5"})]}),Object(a.jsx)(D.a,{sm:3,className:"p-0",children:u?Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("img",{src:u.logo,alt:"logo"})}):null})]}),Object(a.jsxs)(L.a,{className:"align-items-stretch",children:[G,M]})]}),Object(a.jsx)(X,{data:C,parseGarden:u.parseGarden,showModal:f,closeModal:function(){p(!1)},cleanDataToEdit:function(){S("")}}),Object(a.jsx)(Z,{data:C,objectType:"\u05d3\u05e3 \u05e7\u05e9\u05e8",showModal:v,closeModal:function(){return y(!1)},cleanDataToEdit:function(){S("")}})]})};n(745),n(746);function $(){return($=Object(O.a)(h.a.mark((function e(t){var n,a,c,r,s,i,l,o,j;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new g.a.Query(g.a.Object.extend("Gallery")),e.next=3,n.get(t);case 3:return a=e.sent,(c=new g.a.Query(g.a.Object.extend("Image"))).equalTo("gallery",a),e.next=8,c.count();case 8:return r=e.sent,e.next=11,c.find();case 11:return s=e.sent,c.equalTo("isPrimary",!0),e.next=15,c.find();case 15:return(i=e.sent)[0]?l=i[0].get("file")._url:s&&r>0?l=s[Math.floor(Math.random()*r)].get("file")._url:(o=a.get("gan"),j=o.get("logo")._url,l=j),e.abrupt("return",l);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ee=function(e){return $.apply(this,arguments)},te=function(e){var t=e.gallery,n=t.id,r=t.name,s=Object(c.useState)(""),i=Object(l.a)(s,2),j=i[0],u=i[1];return Object(c.useEffect)((function(){function e(){return(e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(n);case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(a.jsx)("div",{className:"c-gallery-card",children:Object(a.jsx)(E.a,{children:Object(a.jsxs)(o.b,{to:"/galleries/"+n,children:[j?Object(a.jsx)(E.a.Img,{variant:"top",src:j}):null,Object(a.jsx)(E.a.Title,{className:"text-center",children:r})]})})})};function ne(){return(ne=Object(O.a)(h.a.mark((function e(t){var n,a,c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new g.a.Query(new g.a.Object.extend("Gan")).get(t);case 2:return n=e.sent,(a=new g.a.Query(g.a.Object.extend("Gallery"))).equalTo("gan",n),e.next=7,a.find();case 7:return c=e.sent,r=c.map((function(e){return{id:e.id,name:e.get("title")}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ae=function(e){return ne.apply(this,arguments)},ce=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useContext)(N),i=Object(c.useState)(""),o=Object(l.a)(i,2),u=o[0],d=o[1];Object(c.useEffect)((function(){function e(){return(e=Object(O.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(s);case 2:return t=e.sent,d(t),e.next=6,ae(t.id);case 6:n=e.sent,r(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var b=n?n.map((function(e){return Object(a.jsx)(D.a,{className:"py-2",md:6,lg:3,children:Object(a.jsx)(te,{gallery:e})},e.id)})):null;return s?Object(a.jsx)("div",{className:"p-galleries",children:Object(a.jsxs)(I.a,{children:[Object(a.jsxs)(L.a,{className:"mx-0 header",children:[Object(a.jsxs)(D.a,{sm:9,children:[u?Object(a.jsx)("div",{className:"name",children:u.name}):null,Object(a.jsx)("h2",{children:"\u05d4\u05d2\u05dc\u05e8\u05d9\u05d5\u05ea \u05e9\u05dc\u05e0\u05d5"})]}),Object(a.jsx)(D.a,{sm:3,className:"p-0",children:u?Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("img",{src:u.logo,alt:"logo"})}):null})]}),Object(a.jsx)(L.a,{children:b})]})}):Object(a.jsx)(j.a,{to:"/"})},re=(n(747),function(){var e=Object(c.useContext)(N),t=Object(c.useState)(e?"".concat(e.fname," ").concat(e.lname):""),n=Object(l.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(e?e.email:""),o=Object(l.a)(i,2),j=o[0],u=o[1],b=Object(c.useState)(""),h=Object(l.a)(b,2),O=h[0],x=h[1],p=Object(c.useState)(""),m=Object(l.a)(p,2),g=m[0],v=m[1],y=Object(c.useState)(!!e),w=Object(l.a)(y,2),C=w[0],S=w[1],T=Object(c.useState)({}),D=Object(l.a)(T,2),I=D[0],L=D[1],E=Object(c.useState)(!1),G=Object(l.a)(E,2),M=G[0],K=G[1],U=Object(c.useState)(!1),F=Object(l.a)(U,2),Q=F[0],H=F[1],B=Object(c.useState)(!1),z=Object(l.a)(B,2),q=z[0],P=z[1];Object(c.useEffect)((function(){r&&k(j)&&O&&g?(H(!0),K(!1)):k(j)||""===j?k(j)&&(K(!1),Q&&H(!1)):(K(!0),Q&&H(!1))}));var _="";if(I)for(var J=0;J<I.length;J++)_+=0===J?I[J].name.split(".")[0]:", ".concat(I[J].name.split(".")[0]);var X=I?I.length:0;return q?Object(a.jsxs)("div",{className:"p-contact-us success",children:[Object(a.jsx)("h2",{children:"\u05e4\u05e0\u05d9\u05d9\u05ea\u05da \u05e0\u05e9\u05dc\u05d7\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4"}),Object(a.jsx)(d.a,{variant:"info",onClick:function(){P(!1)},children:"\u05e4\u05e0\u05d9\u05d9\u05d4 \u05e0\u05d5\u05e1\u05e4\u05ea"})]}):Object(a.jsxs)("div",{className:"p-contact-us",children:[Object(a.jsx)("h2",{children:"\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8"}),Object(a.jsxs)(f.a,{children:[Object(a.jsxs)(f.a.Group,{controlId:"formContactUsName",children:[Object(a.jsx)(f.a.Label,{children:"\u05e9\u05dd"}),e?Object(a.jsx)(f.a.Check,{type:"switch",variant:"warning",id:"formContactUsFileSwitch",label:C?"\u05de\u05e9\u05ea\u05de\u05e9 \u05d1\u05e4\u05e8\u05d8\u05d9\u05dd \u05e9\u05dc\u05d9":"\u05d4\u05e9\u05ea\u05de\u05e9 \u05d1\u05e4\u05e8\u05d8\u05d9\u05dd \u05e9\u05dc\u05d9",checked:C,onChange:function(){C?(s(""),u(""),S(!C)):(s("".concat(e.fname," ").concat(e.lname)),u(e.email),S(!C))}}):null,Object(a.jsx)(f.a.Control,{type:"text",value:r,onChange:function(e){s(e.target.value)}})]}),Object(a.jsxs)(f.a.Group,{controlId:"formContactUsEmail",children:[Object(a.jsx)(f.a.Label,{children:"\u05d3\u05d5\u05d0\u05e8 \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9"}),Object(a.jsx)(f.a.Control,{type:"email",value:j,className:M?"is-invalid":null,onChange:function(e){u(e.target.value)}}),Object(a.jsx)(f.a.Control.Feedback,{type:"invalid",children:"\u05db\u05ea\u05d5\u05d1\u05ea \u05de\u05d9\u05d9\u05dc \u05dc\u05d0 \u05ea\u05e7\u05d9\u05e0\u05d4"})]}),Object(a.jsxs)(f.a.Group,{controlId:"formContactUsSubject",children:[Object(a.jsx)(f.a.Label,{children:"\u05e0\u05d5\u05e9\u05d0"}),Object(a.jsx)(f.a.Control,{type:"text",value:O,onChange:function(e){x(e.target.value)}})]}),Object(a.jsxs)(f.a.Group,{controlId:"formContactUsRequest",children:[Object(a.jsx)(f.a.Label,{children:"\u05ea\u05d5\u05db\u05df \u05d4\u05e4\u05e0\u05d9\u05d4"}),Object(a.jsx)(f.a.Control,{as:"textarea",value:g,onChange:function(e){v(e.target.value)}})]}),Object(a.jsxs)(f.a.Group,{children:[Object(a.jsx)(f.a.File,{id:"formContactUsFile",label:I?_:"\u05d1\u05d7\u05d9\u05e8\u05ea \u05e7\u05d1\u05e6\u05d9\u05dd","data-browse":"\u05d1\u05d7\u05d9\u05e8\u05ea \u05e7\u05d1\u05e6\u05d9\u05dd",custom:!0,multiple:!0,onChange:function(e){L(e.target.files)}}),Object(a.jsx)(f.a.Text,{className:"text-muted",children:X>0?"\u05e0\u05d1\u05d7\u05e8\u05d5 ".concat(X," \u05e7\u05d1\u05e6\u05d9\u05dd"):"\u05e0\u05d9\u05ea\u05df \u05dc\u05d1\u05d7\u05d5\u05e8 \u05de\u05e1\u05e4\u05e8 \u05e7\u05d1\u05e6\u05d9\u05dd \u05d9\u05d7\u05d3"})]}),Object(a.jsx)(d.a,{variant:"warning",type:"button",className:"w-100",disabled:!Q,onClick:function(){x(""),v(""),L({}),P(!0)},children:"\u05e9\u05dc\u05d9\u05d7\u05d4"})]})]})}),se=n(764),ie=(n(748),n(749),function(e){var t=e.image,n=e.onClick;return Object(a.jsx)("div",{className:"c-image-card",children:Object(a.jsxs)(E.a,{onClick:n,children:[t?Object(a.jsx)(E.a.Img,{variant:"top",src:t.url}):null,t.desc?Object(a.jsx)(E.a.Footer,{children:Object(a.jsx)("small",{className:"text-muted text-center d-block",children:t.desc})}):null]})})}),le=n(763),oe=(n(750),function(e){var t=e.images,n=e.showModal,c=e.selectedImage,r=e.close,s=e.onImageChange;return Object(a.jsx)("div",{className:"c-image-modal",children:Object(a.jsx)(x.a,{size:"md",show:n,onHide:r,centered:!0,children:Object(a.jsxs)(x.a.Body,{className:"p-0 row",children:[Object(a.jsx)(D.a,{xs:1,className:"prev",children:Object(a.jsx)("a",{className:"prev",variant:"dark",onClick:function(){s(0===c?t.length-1:c-1)},children:"\u276e"})}),Object(a.jsxs)(D.a,{xs:10,className:"p-0",children:[Object(a.jsx)(le.a,{src:t[c].url}),Object(a.jsx)(d.a,{onClick:r,className:"modal-x-button",variant:"outline-warning",children:"X"}),Object(a.jsx)("div",{className:"modal-image-desc",children:t[c].desc})]}),Object(a.jsx)(D.a,{xs:1,className:"next",children:Object(a.jsx)("a",{className:"next",variant:"dark",onClick:function(){c===t.length-1?s(0):s(c+1)},children:"\u276f"})})]})})})});function je(){return(je=Object(O.a)(h.a.mark((function e(t){var n,a,c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new g.a.Query(new g.a.Object.extend("Gallery")).get(t);case 2:return n=e.sent,(a=new g.a.Query(g.a.Object.extend("Image"))).equalTo("gallery",n),e.next=7,a.find();case 7:return c=e.sent,r=c.map((function(e){var t=e.get("desc")?e.get("desc"):"",n=e.get("file")._url;return{id:e.id,desc:t,url:n}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ue=function(e){return je.apply(this,arguments)};function de(){return(de=Object(O.a)(h.a.mark((function e(t){var n,a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new g.a.Query(new g.a.Object.extend("Gallery")).get(t);case 2:return n=e.sent,a=n.get("title"),e.next=6,ee(t);case 6:return c=e.sent,e.abrupt("return",{parseGallery:n,name:a,mainImg:c});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be=function(e){return de.apply(this,arguments)},he=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),o=i[0],u=i[1],d=Object(c.useState)(!1),b=Object(l.a)(d,2),x=b[0],f=b[1],p=Object(c.useState)(null),m=Object(l.a)(p,2),g=m[0],v=m[1],y=Object(j.h)().id;Object(c.useState)((function(){function e(){return(e=Object(O.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue(y);case 2:return t=e.sent,e.next=5,be(y);case 5:n=e.sent.name,r(t),u(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var w=n?n.map((function(e,t){return Object(a.jsx)(ie,{image:e,onClick:function(){return function(e){f(!0),v(e)}(t)}},e.id)})):null,k=null!==g?Object(a.jsx)(oe,{images:n,showModal:x,selectedImage:g,close:function(){f(!1)},onImageChange:function(e){v(e)}}):null;return Object(a.jsxs)("div",{className:"p-gallery",children:[Object(a.jsx)("h2",{children:o}),Object(a.jsx)(I.a,{children:Object(a.jsx)(se.a,{children:w})}),k]})},Oe=(n(751),n(752),function(e){var t=e.topic,n=e.activeUser,c=e.onDeleteClick,r=e.onEditClick,s=t.headline,i=t.content;if(!n)return Object(a.jsx)(j.a,{to:"/"});var l=null,o=null;return n&&"manager"===n.role&&(l=Object(a.jsx)(G.a,{className:"edit-icon",icon:M.a,onClick:r}),o=Object(a.jsx)(G.a,{className:"edit-icon",icon:M.b,onClick:c})),Object(a.jsxs)("div",{className:"c-study-topic-box mb-4",children:[o,l,Object(a.jsx)(E.a.Title,{children:s}),Object(a.jsx)(E.a.Text,{children:i})]})});function xe(){return(xe=Object(O.a)(h.a.mark((function e(t){var n,a,c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new g.a.Query(new g.a.Object.extend("DafKesher")).get(t);case 2:return n=e.sent,a=n.get("data"),c=n.get("title"),r=U(n.get("date")),e.abrupt("return",{parseDafKesher:n,data:a,title:c,hebDate:r});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var fe=function(e){return xe.apply(this,arguments)},pe=n.p+"static/media/book-icon.38b0a9d3.png",me=n.p+"static/media/message-icon.12cbb3d2.png";n(753);var ge=function(e){var t=["primary","secondary","success","danger","warning","info","light","dark"];return t[Math.floor(Math.random()*t.length)]},ve=function(e){var t=e.topic,n=e.activeUser,c=e.onDeleteClick,r=e.onEditClick,s=t.headline,i=t.content,l=ge();if(!n)return Object(a.jsx)(j.a,{to:"/"});var o=null,u=null;return n&&"manager"===n.role&&(o=Object(a.jsx)(G.a,{className:"edit-icon",icon:M.a,onClick:r}),u=Object(a.jsx)(G.a,{className:"edit-icon",icon:M.b,onClick:c})),Object(a.jsx)(E.a,{className:"c-message-box m-2",bg:l,text:"light"===l?"dark":"white",children:Object(a.jsxs)(E.a.Body,{children:[u,o,Object(a.jsx)(E.a.Title,{children:s}),Object(a.jsx)(E.a.Text,{children:i})]})})},ye=(n(754),function(e){var t=e.onClick;return Object(c.useContext)(N)?Object(a.jsx)(E.a,{className:"c-add-message-box m-2 text-center",bg:"light",text:"dark",onClick:t,children:Object(a.jsx)(E.a.Body,{children:Object(a.jsx)(E.a.Title,{children:"+"})})}):Object(a.jsx)(j.a,{to:"/"})}),we=(n(755),function(e){var t=e.onClick;return Object(c.useContext)(N)?Object(a.jsx)("div",{className:"c-add-study-topic-box text-center",onClick:t,children:Object(a.jsx)(E.a.Title,{children:"+"})}):Object(a.jsx)(j.a,{to:"/"})}),ke=n(235),Ce=function(e){var t=e.dafKesherId,n=e.fullData,r=e.data,s=e.showModal,i=e.closeModal,o=e.cleanDataToEdit,j=Object(c.useState)(),u=Object(l.a)(j,2),b=u[0],h=u[1],O=Object(c.useState)(),m=Object(l.a)(O,2),g=m[0],v=m[1],y=Object(c.useState)(!1),w=Object(l.a)(y,2),k=w[0],C=w[1];function N(){i(),C(!1),o()}Object(c.useEffect)((function(){"object"===typeof r?(h(n[r.type][r.index].headline),v(n[r.type][r.index].content)):(h(""),v(""))}),[r]);var S="object"===typeof r?"\u05e2\u05e8\u05d9\u05db\u05ea \u05ea\u05d5\u05db\u05df \u05d3\u05e3 \u05e7\u05e9\u05e8":"\u05d4\u05d5\u05e1\u05e4\u05ea \u05ea\u05d5\u05db\u05df \u05d7\u05d3\u05e9";return Object(a.jsx)("div",{className:"c-daf-kesher-editor-modal",children:Object(a.jsxs)(x.a,{size:"md",show:s,onHide:N,centered:!0,children:[Object(a.jsx)(x.a.Header,{children:Object(a.jsx)(x.a.Title,{children:S})}),Object(a.jsxs)(x.a.Body,{children:[Object(a.jsxs)(f.a,{children:[Object(a.jsxs)(f.a.Group,{controlId:"headline",children:[Object(a.jsx)(f.a.Label,{children:"\u05db\u05d5\u05ea\u05e8\u05ea"}),Object(a.jsx)(f.a.Control,{type:"text",value:b,onChange:function(e){h(e.target.value)}})]}),Object(a.jsxs)(f.a.Group,{controlId:"content",children:[Object(a.jsx)(f.a.Label,{children:"\u05ea\u05d5\u05db\u05df"}),Object(a.jsx)(f.a.Control,{type:"text",value:g,onChange:function(e){v(e.target.value)}})]})]}),k?Object(a.jsx)(p.a,{variant:"danger",children:"\u05e0\u05d0 \u05dc\u05de\u05dc\u05d0 \u05d0\u05ea \u05db\u05dc \u05d4\u05e9\u05d3\u05d5\u05ea"}):null]}),Object(a.jsxs)(x.a.Footer,{children:[Object(a.jsx)(d.a,{variant:"secondary",onClick:N,children:"\u05e1\u05d2\u05d9\u05e8\u05d4"}),Object(a.jsx)(d.a,{variant:"warning",onClick:function(){if(b&&g)if("object"!==typeof r){var e=Object(ke.a)({},n);e[r].push({headline:b,content:g}),V(t,e),N()}else{var a=Object(ke.a)({},n);a[r.type][r.index].headline=b,a[r.type][r.index].content=g,V(t,a),N()}else C(!0)},children:"\u05e9\u05de\u05d9\u05e8\u05d4"})]})]})})};var Ne=function(){var e=Object(c.useContext)(N),t=Object(c.useState)({}),n=Object(l.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)({}),o=Object(l.a)(i,2),u=o[0],d=o[1],b=Object(c.useState)(!1),x=Object(l.a)(b,2),f=x[0],p=x[1],m=Object(c.useState)(!1),g=Object(l.a)(m,2),v=g[0],y=g[1],w=Object(c.useState)(""),k=Object(l.a)(w,2),C=k[0],S=k[1],T=Object(j.h)().id;if(Object(c.useEffect)((function(){function t(){return(t=Object(O.a)(h.a.mark((function t(){var n,a,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fe(T);case 2:return n=t.sent,t.next=5,B(e);case 5:a=t.sent,c={title:n.title,hebDate:n.hebDate,logo:a.logo,name:a.name},d(c),s(n.data);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),!e)return Object(a.jsx)(j.a,{to:"/"});function G(e){S(e),y(!0)}function M(e){S(e),y(!0)}function K(e){S(e),p(!0)}var U=r.studyTopics?r.studyTopics.map((function(t,n){return Object(a.jsx)("div",{children:Object(a.jsx)(Oe,{topic:{headline:t.headline,content:t.content},activeUser:e,onEditClick:function(){M({type:"studyTopics",index:n})},onDeleteClick:function(){K({type:"studyTopics",index:n})}})},n)})):null,F=e&&"manager"===e.role&&Object(a.jsx)(we,{onClick:function(){G("studyTopics")}}),Q=r.messages?r.messages.map((function(t,n){return Object(a.jsx)("div",{children:Object(a.jsx)(ve,{topic:{headline:t.headline,content:t.content},activeUser:e,onEditClick:function(){M({type:"messages",index:n})},onDeleteClick:function(){K({type:"messages",index:n})}})},n)})):null,H=e&&"manager"===e.role&&Object(a.jsx)(ye,{onClick:function(){G("messages")}});return Object(a.jsxs)("div",{className:"p-daf-kesher",children:[Object(a.jsxs)(I.a,{children:[Object(a.jsxs)(L.a,{className:"mx-0 header",children:[Object(a.jsxs)(D.a,{sm:9,children:[Object(a.jsx)("div",{className:"name",children:u.name}),Object(a.jsx)("h2",{children:"\u05d3\u05e3 \u05e7\u05e9\u05e8 ".concat(u.title)}),Object(a.jsx)("div",{className:"date",children:u.hebDate})]}),Object(a.jsx)(D.a,{sm:3,className:"p-0",children:u.logo?Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("img",{src:u.logo,alt:"logo"})}):null})]}),Object(a.jsxs)(L.a,{children:[Object(a.jsx)(D.a,{md:8,className:"mb-3",children:Object(a.jsxs)(E.a,{children:[Object(a.jsxs)(E.a.Header,{as:"h5",children:[Object(a.jsx)("span",{children:"\u05de\u05d4 \u05dc\u05de\u05d3\u05e0\u05d5 \u05d4\u05e9\u05d1\u05d5\u05e2?"}),Object(a.jsx)("img",{src:pe,alt:"book icon"})]}),Object(a.jsxs)(E.a.Body,{children:[U,F]})]})}),Object(a.jsx)(D.a,{md:4,children:Object(a.jsxs)(E.a,{children:[Object(a.jsxs)(E.a.Header,{as:"h5",children:[Object(a.jsx)("div",{children:"\u05d4\u05d5\u05d3\u05e2\u05d5\u05ea"}),Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:me,alt:"message icon"})})]}),Q,H]})})]})]}),Object(a.jsx)(Ce,{dafKesherId:T,fullData:r,data:C,showModal:v,closeModal:function(){return y(!1)},cleanDataToEdit:function(){S("")}}),Object(a.jsx)(Z,{dafKesherId:T,fullData:r,data:C,objectType:"studyTopics"===C.type?"\u05d7\u05d5\u05de\u05e8 \u05dc\u05d9\u05de\u05d5\u05d3\u05d9":"\u05d4\u05d5\u05d3\u05e2\u05d4",showModal:f,closeModal:function(){return p(!1)},cleanDataToEdit:function(){S("")}})]})},Se=n(768),Te=n(767);n(756);var De=function(){var e=(new Date).getHours();return e>=4&&e<=10?"\u05d1\u05d5\u05e7\u05e8 \u05d8\u05d5\u05d1":e>=11&&e<=16?"\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd \u05d8\u05d5\u05d1\u05d9\u05dd":e>=17&&e<=20?"\u05e2\u05e8\u05d1 \u05d8\u05d5\u05d1":"\u05dc\u05d9\u05dc\u05d4 \u05d8\u05d5\u05d1"},Ie=function(e){var t=e.onLogout,n=Object(c.useContext)(N),r=Object(j.g)().pathname.split("/")[1],s=De();return Object(a.jsxs)(Se.a,{collapseOnSelect:!0,expand:"lg",children:[Object(a.jsx)(Se.a.Brand,{href:"#/",className:"ml-2",children:Object(a.jsx)("img",{src:u,alt:"Digital Garden logo",className:"d-inline-block align-top"})}),Object(a.jsx)(Se.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsxs)(Se.a.Collapse,{id:"responsive-navbar-nav",children:[Object(a.jsxs)(Te.a,{className:n?"ml-auto":"mr-auto",children:[n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Te.a.Link,{href:"#/my-garden",active:"my-garden"===r,children:"\u05d4\u05d2\u05df \u05e9\u05dc\u05d9"}),Object(a.jsx)(Te.a.Link,{href:"#/dapey-kesher",active:"dapey-kesher"===r,children:"\u05d3\u05e4\u05d9 \u05e7\u05e9\u05e8"}),Object(a.jsx)(Te.a.Link,{href:"#/galleries",active:"galleries"===r,children:"\u05d2\u05dc\u05e8\u05d9\u05d5\u05ea"})]}):null,Object(a.jsx)(Te.a.Link,{href:"#/contact-us",active:"contact-us"===r,children:"\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8"})]}),n?Object(a.jsxs)(Te.a,{children:[Object(a.jsx)(Se.a.Text,{children:"".concat(s,", ").concat(n.fname)}),Object(a.jsx)(d.a,{as:"a",variant:"",onClick:t,children:"\u05d4\u05ea\u05e0\u05ea\u05e7"})]}):null]})]})};var Le=function(){var e=Object(c.useState)(g.a.User.current()?new y(g.a.User.current()):null),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(j.d,{children:Object(a.jsxs)(N.Provider,{value:n,children:[Object(a.jsx)(Ie,{onLogout:function(){r(null),g.a.User.logOut()}}),Object(a.jsx)(j.b,{exact:!0,path:"/",children:Object(a.jsx)(S,{onLogin:function(e){r(e)}})}),Object(a.jsx)(j.b,{exact:!0,path:"/my-garden",children:Object(a.jsx)(T,{})}),Object(a.jsx)(j.b,{exact:!0,path:"/dapey-kesher",children:Object(a.jsx)(W,{})}),Object(a.jsx)(j.b,{exact:!0,path:"/dapey-kesher/:id",children:Object(a.jsx)(Ne,{})}),Object(a.jsx)(j.b,{exact:!0,path:"/galleries",children:Object(a.jsx)(ce,{})}),Object(a.jsx)(j.b,{exact:!0,path:"/galleries/:id",children:Object(a.jsx)(he,{})}),Object(a.jsx)(j.b,{exact:!0,path:"/contact-us",children:Object(a.jsx)(re,{})})]})})})})},Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,770)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};g.a.serverURL="https://parseapi.back4app.com",g.a.initialize("YjX6kib1y4ZL0wYCCXagO161JHCAZNLF8vz04iNh","YYhfXbq4guVCOl4BhV5Jcvfh43NNbDbIpAqI2LzG"),i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Le,{})}),document.getElementById("root")),Ee()}},[[757,1,2]]]);
//# sourceMappingURL=main.a76d9ebf.chunk.js.map