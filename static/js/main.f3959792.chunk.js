(this.webpackJsonpfichamedicaiep=this.webpackJsonpfichamedicaiep||[]).push([[0],{28:function(e,t,a){e.exports=a(62)},33:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),o=(a(33),a(6)),m=a.n(o),i=a(10),u=a(12),s=a(14),E=a(9),p=(a(35),a(67)),d=a(64),b=a(65),f=a(66),h=a(11),v=a.n(h);var C=function(){var e="http://fichamedicaiep.orgfree.com/",t=Object(n.useState)([]),a=Object(E.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!1),h=Object(E.a)(o,2),C=h[0],N=h[1],g=Object(n.useState)(!1),y=Object(E.a)(g,2),x=y[0],O=y[1],w=Object(n.useState)(!1),j=Object(E.a)(w,2),k=j[0],D=j[1],T=Object(n.useState)({rut:"",nombres:"",apellidos:"",direccion:"",ciudad:"",telefono:"",email:"",fechaNacto:"",estCivil:"",comentarios:""}),S=Object(E.a)(T,2),F=S[0],A=S[1],P=function(e){var t=e.target,a=t.name,n=t.value;A((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(u.a)({},a,n))})),console.log(F)},M=function(){N(!C)},H=function(){O(!x)},I=function(){D(!k)},q=function(){var t=Object(i.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get(e).then((function(e){c(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),B=function(){var t=Object(i.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new FormData).append("nombres",F.nombres),a.append("apellidos",F.apellidos),a.append("direccion",F.direccion),a.append("ciudad",F.ciudad),a.append("telefono",F.telefono),a.append("email",F.email),a.append("fechaNacto",F.fechaNacto),a.append("estCivil",F.estCivil),a.append("comentarios",F.comentarios),a.append("METHOD","POST"),t.next=13,v.a.post(e,a).then((function(e){c(r.concat(e.data)),M()})).catch((function(e){console.log(e)}));case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),J=function(){var t=Object(i.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new FormData).append("nombres",F.nombres),a.append("apellidos",F.apellidos),a.append("direccion",F.direccion),a.append("ciudad",F.ciudad),a.append("telefono",F.telefono),a.append("email",F.email),a.append("fechaNacto",F.fechaNacto),a.append("estCivil",F.estCivil),a.append("comentarios",F.comentarios),a.append("METHOD","PUT"),t.next=13,v.a.post(e,a,{params:{rut:F.rut}}).then((function(e){var t=r;t.map((function(e){e.rut===F.rut&&(e.nombres=F.nombres,e.apellidos=F.apellidos,e.direccion=F.direccion,e.ciudad=F.ciudad,e.telefono=F.telefono,e.email=F.email,e.fechaNacto=F.fechaNacto,e.estCivil=F.estCivil,e.comentarios=F.comentarios)})),c(t),H()})).catch((function(e){console.log(e)}));case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),U=function(){var t=Object(i.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new FormData).append("METHOD","DELETE"),t.next=4,v.a.post(e,a,{params:{rut:F.rut}}).then((function(e){c(r.filter((function(e){return e.rut!==F.rut}))),I()})).catch((function(e){console.log(e)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),W=function(e,t){A(e),"Editar"===t?H():I()};return Object(n.useEffect)((function(){q()}),[]),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-success",onClick:function(){return M()}},"Insertar"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"RUT"),l.a.createElement("th",null,"Nombres"),l.a.createElement("th",null,"Apellidos"),l.a.createElement("th",null,"Direccion"),l.a.createElement("th",null,"Ciudad"),l.a.createElement("th",null,"Telefono"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Fecha de nacimiento"),l.a.createElement("th",null,"Estado civil"),l.a.createElement("th",null,"Comentarios"))),l.a.createElement("tbody",null,r.map((function(e){return l.a.createElement("tr",{key:e.rut},l.a.createElement("td",null,e.rut),l.a.createElement("td",null,e.nombres),l.a.createElement("td",null,e.apellidos),l.a.createElement("td",null,e.direccion),l.a.createElement("td",null,e.ciudad),l.a.createElement("td",null,e.telefono),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.fechaNacto),l.a.createElement("td",null,e.estCivil),l.a.createElement("td",null,e.comentarios),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return W(e,"Editar")}},"Editar")," ","  ",l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return W(e,"Eliminar")}},"Eliminar")))})))),l.a.createElement(p.a,{isOpen:C},l.a.createElement(d.a,null,"Agregar Paciente"),l.a.createElement(b.a,null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Nombre: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"nombre",onChange:P}),l.a.createElement("br",null),l.a.createElement("label",null,"Apellidos: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"apellidos",onChange:P}),l.a.createElement("br",null),l.a.createElement("label",null,"Direccion: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"direccion",onChange:P}),l.a.createElement("br",null),l.a.createElement("label",null,"Ciudad: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"ciudad",onChange:P}),l.a.createElement("br",null),l.a.createElement("label",null,"Telefono: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"telefono",onChange:P}),l.a.createElement("br",null),l.a.createElement("label",null,"Email: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"email",onChange:P}),l.a.createElement("br",null),l.a.createElement("label",null,"Fecha Nacimiento: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"fechaNacto",onChange:P}),l.a.createElement("br",null),l.a.createElement("label",null,"Estado Civil: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"estCivil",onChange:P}),l.a.createElement("br",null),l.a.createElement("label",null,"Comentarios: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"comentarios",onChange:P}))),l.a.createElement(f.a,null,l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return B()}},"Insertar"),"   ",l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return M()}},"Cancelar"))),l.a.createElement(p.a,{isOpen:x},l.a.createElement(d.a,null,"Editar Paciente"),l.a.createElement(b.a,null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Nombres: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"nombres",onChange:P,value:F&&F.nombres}),l.a.createElement("br",null),l.a.createElement("label",null,"Apellidos: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"apellidos",onChange:P,value:F&&F.apellidos}),l.a.createElement("br",null),l.a.createElement("label",null,"Direccion: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"direccion",onChange:P,value:F&&F.direccion}),l.a.createElement("br",null),l.a.createElement("label",null,"Ciudad: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"ciudad",onChange:P,value:F&&F.ciudad}),l.a.createElement("br",null),l.a.createElement("label",null,"Telefono: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"telefono",onChange:P,value:F&&F.telefono}),l.a.createElement("br",null),l.a.createElement("label",null,"Email: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"email",onChange:P,value:F&&F.email}),l.a.createElement("br",null),l.a.createElement("label",null,"Fecha de nacimiento: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"fechaNacto",onChange:P,value:F&&F.fechaNacto}),l.a.createElement("br",null),l.a.createElement("label",null,"Estado civil: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"estCivil",onChange:P,value:F&&F.estCivil}),l.a.createElement("br",null),l.a.createElement("label",null,"Comentarios: "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",name:"comentarios",onChange:P,value:F&&F.comentarios}),l.a.createElement("br",null))),l.a.createElement(f.a,null,l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return J()}},"Editar"),"   ",l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return H()}},"Cancelar"))),l.a.createElement(p.a,{isOpen:k},l.a.createElement(b.a,null,"\xbfEst\xe1s seguro de que deseas quitar al o la Paciente? ",F&&F.nombre,"?"),l.a.createElement(f.a,null,l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return U()}},"S\xed"),l.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return I()}},"No"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.f3959792.chunk.js.map