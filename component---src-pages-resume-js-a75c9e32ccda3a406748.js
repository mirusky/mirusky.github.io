(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{F2CN:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var n=a("q1tI"),r=a.n(n),i=a("R/WZ"),o=a("viY9"),l=a("bWLx"),c=a("5CWz"),s=a("/MKj"),d=a("N8+Z"),m=a("IlqZ"),u=a("Q2AE"),g=(a("f3/d"),a("tRbT")),p=a("ofer");function b(e){var t=e.data,a=Object(i.a)((function(e){return{root:{flexGrow:1},section:{margin:e.spacing(2,2)}}}))(),n=[];return n.push(t.basics.location.city,t.basics.location.region,t.basics.location.address),n=n.filter((function(e){return e})).join(", "),r.a.createElement("div",{className:a.section},r.a.createElement(g.a,{container:!0,alignItems:"center"},r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(p.a,{gutterBottom:!0,variant:"h4"},t.basics.name)),r.a.createElement(g.a,{item:!0},r.a.createElement(p.a,{gutterBottom:!0,align:"right",variant:"subtitle1"},n,r.a.createElement("br",null),t.basics.location.postalCode," ",t.basics.location.countryCode,r.a.createElement("br",null),t.basics.phone.length>0?t.basics.phone:null))))}var f=a("LYUY"),v=Object(f.a)(r.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home"),h=Object(f.a)(r.a.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"}),"MailOutline"),E=a("Mz7R"),x=a("kmrj"),w=a("egtg"),y=a("yz9a"),j=a("wb2y"),k=a("NrVZ"),O=a("Z3vd");function S(e){var t=e.data,a=Object(i.a)((function(e){return{root:{flexGrow:1},chip:{margin:e.spacing(.5)}}}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"middle"}),r.a.createElement("div",{className:a.chip,align:"center"},r.a.createElement(k.a,{color:"default","aria-label":"outlined primary button group",orientation:"horizontal"},t.basics.website.length>0&&r.a.createElement(O.a,{href:"https://"+t.basics.website,variant:"text",color:"inherit",className:a.button,startIcon:r.a.createElement(v,null)},t.basics.website),t.basics.email.length>0&&r.a.createElement(O.a,{href:"mailto:"+t.basics.email,variant:"text",color:"inherit",className:a.button,startIcon:r.a.createElement(h,null)},t.basics.email),t.basics.profiles.map((function(e){var t="twitter"===e.network.toLowerCase()?r.a.createElement(E.a,null):"linkedin"===e.network.toLowerCase()?r.a.createElement(x.a,null):"github"===e.network.toLowerCase()?r.a.createElement(w.a,null):r.a.createElement(y.a,null);return r.a.createElement(O.a,{key:e.network,href:e.url,variant:"text",color:"inherit",className:a.button,startIcon:t},e.username)})))))}function C(e){var t=e.data,a=Object(i.a)((function(e){return{root:{flexGrow:1},section:{margin:e.spacing(2,2)}}}))();return t.interests.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"middle"}),r.a.createElement("div",{className:a.section},r.a.createElement(g.a,{container:!0,alignItems:"center"},r.a.createElement(g.a,{item:!0,xs:4,sm:3,md:2},r.a.createElement(p.a,{gutterBottom:!0,variant:"h5"},"Interests")),r.a.createElement(p.a,{gutterBottom:!0,align:"left",variant:"subtitle2"},t.interests.map((function(e){var t=e.keywords.join(", ");return e.name+" "+(t.length>0?"( "+t+" )":null)})).join(", ")))))}function I(e){var t=e.data,a=Object(i.a)((function(e){return{root:{flexGrow:1},section:{margin:e.spacing(2,2)},grid:{padding:e.spacing(1)}}}))();return t.skills.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"middle"}),r.a.createElement("div",{className:a.section},r.a.createElement(g.a,{container:!0,alignItems:"center"},r.a.createElement(g.a,{item:!0,xs:4,sm:3,md:2},r.a.createElement(p.a,{gutterBottom:!0,variant:"h5"},"Skills")),r.a.createElement(p.a,{variant:"subtitle2"},t.skills.map((function(e){var t=e.name+(e.level.length>0?" ("+e.level+"):":": "),a=e.keywords.join(", ");return r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement("b",null,t),a,r.a.createElement("br",null))}))))))}function R(e){var t=e.data,a=Object(i.a)((function(e){return{root:{flexGrow:1},section:{margin:e.spacing(2,2)},grid:{padding:e.spacing(1)}}}))();return t.education.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"middle"}),r.a.createElement("div",{className:a.section},r.a.createElement(g.a,{container:!0,alignItems:"center"},r.a.createElement(g.a,{item:!0,xs:4,sm:3,md:2},r.a.createElement(p.a,{gutterBottom:!0,variant:"h5"},"Education")),r.a.createElement(p.a,{variant:"subtitle2"},t.education.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.institution},r.a.createElement("b",null,e.institution)," ","( ",e.startDate.substring(0,4)+" - "+e.endDate.substring(0,4)+" )",r.a.createElement("br",null),e.studyType+", "+e.area,r.a.createElement("br",null))}))))))}function N(e){var t=e.data,a=Object(i.a)((function(e){return{root:{flexGrow:1},section:{margin:e.spacing(2,2)},grid:{padding:e.spacing(1)}}}))();return t.languages.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"middle"}),r.a.createElement("div",{className:a.section},r.a.createElement(g.a,{container:!0,alignItems:"center"},r.a.createElement(g.a,{item:!0,xs:5,sm:3,md:2},r.a.createElement(p.a,{gutterBottom:!0,variant:"h5"},"Languages")),r.a.createElement(p.a,{variant:"subtitle2"},t.languages.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.language},r.a.createElement("b",null,e.language)," ","( "+e.fluency+" )",r.a.createElement("br",null))}))))))}function z(e){var t=e.data,a=Object(i.a)((function(e){return{root:{flexGrow:1},section:{margin:e.spacing(2,2)},grid:{padding:e.spacing(1)}}}))();return t.work.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"middle"}),r.a.createElement("div",{className:a.section},r.a.createElement(g.a,{container:!0,alignItems:"center"},r.a.createElement(g.a,{item:!0,xs:4,sm:3,md:2},r.a.createElement(p.a,{gutterBottom:!0,variant:"h5"},"Work")),r.a.createElement(p.a,{variant:"subtitle2"},t.work.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.position+e.startDate},r.a.createElement("b",null,e.position)," - "+e.company+" ( "+e.startDate.substring(0,4)+" - "+e.endDate.substring(0,4)+" )",r.a.createElement("br",null),e.summary,r.a.createElement("br",null))}))))))}function W(e){var t=e.data,a=Object(i.a)((function(e){return{root:{flexGrow:1},section:{margin:e.spacing(2,2)},grid:{padding:e.spacing(1)}}}))();return t.references.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"middle"}),r.a.createElement("div",{className:a.section},r.a.createElement(g.a,{container:!0,alignItems:"center"},r.a.createElement(g.a,{item:!0,xs:8,sm:3,md:2},r.a.createElement(p.a,{gutterBottom:!0,variant:"h5"},"References")),r.a.createElement(p.a,{variant:"subtitle2"},t.references.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.reference},r.a.createElement("b",null,e.name)," ",e.reference,r.a.createElement("br",null))}))))))}function D(){var e=Object(n.useState)(u.a.getState().dark),t=e[0],a=e[1],g=Object(i.a)((function(e){return{root:{flexGrow:1}}}))();u.a.subscribe((function(){a(u.a.getState().dark)}));var p=r.a.useMemo((function(){return Object(o.a)({palette:{type:t?"dark":"light",primary:{main:"#3d3d45"},secondary:{main:"#1b1b26"}}})}),[t]);return r.a.createElement(s.a,{store:u.a},r.a.createElement("div",{className:g.root},r.a.createElement(l.a,{theme:p},r.a.createElement(c.a,null),r.a.createElement(d.a,null),r.a.createElement("br",null),r.a.createElement(b,{data:m}),r.a.createElement(S,{data:m}),r.a.createElement(C,{data:m}),r.a.createElement(I,{data:m}),r.a.createElement(R,{data:m}),r.a.createElement(N,{data:m}),r.a.createElement(z,{data:m}),r.a.createElement(W,{data:m}))))}},IlqZ:function(e){e.exports=JSON.parse('{"basics":{"name":"João Victor Santos da Silva","label":"Programmer","picture":"https://mirusky.github.io/images/me.jpg","email":"profissional.joaovss@gmail.com","phone":"+55 11 95892-4449","website":"mirusky.github.io","summary":"I\'m studying technology in Software Analysis and Development, at the FIAP institution. I hope to graduate in June 2022.","location":{"address":"Francesco Usper 65","postalCode":"03928-235","city":"São Paulo","countryCode":"BR","region":"São Paulo"},"profiles":[{"network":"Twitter","username":"Mirusky_","url":"http://twitter.com/mirusky_"},{"network":"Github","username":"Mirusky","url":"http://github.com/mirusky"},{"network":"linkedin","username":"Mirusky","url":"https://www.linkedin.com/in/mirusky"}]},"work":[{"company":"HS Prevent","position":"Web Developer","website":"","startDate":"2018-09-03","endDate":"2020-03-12","summary":"Development and maintenance of internal systems","highlights":[]}],"volunteer":[{"organization":"Organization","position":"Volunteer","website":"http://organization.com/","startDate":"2012-01-01","endDate":"2013-01-01","summary":"Description...","highlights":["Awarded \'Volunteer of the Month\'"]}],"education":[{"institution":"FIAP - Faculdade de Informática e Administração Paulista","area":"Analysis and systems development","studyType":"Technologist","startDate":"2020-01-01","endDate":"2022-06-01","gpa":"","courses":[]},{"institution":"ETEC de Sapopemba","area":"Information technology","studyType":"Associate degree","startDate":"2015-01-01","endDate":"2017-12-01","gpa":"","courses":[]}],"awards":[{"title":"Award","date":"2014-11-01","awarder":"Company","summary":"There is no spoon."}],"publications":[{"name":"Publication","publisher":"Company","releaseDate":"2014-10-01","website":"http://publication.com","summary":"Description..."}],"skills":[{"name":"Programming Languages","level":"","keywords":["Golang","Python","C#","SQL - Structured Query Language","Bash / Shell","JavaScript / TypeScript","Rust"]},{"name":"Frameworks","level":"","keywords":["Gin Web Framework",".NET / Dot NET","ExpressJS","NestJS"]},{"name":"OS","level":"","keywords":["Linux","Windows","Docker","WSL"]},{"name":"Toolsets","level":"","keywords":["Git","Docker","Visual Studio","Visual Studio Code","Pandas","Matplotlib"]},{"name":"Cloud","level":"","keywords":["AWS - Amazon Web Services","Google Cloud Platform","Microsoft Azure"]},{"name":"Extras","level":"","keywords":["Tesseract OCR","NATS","NSQ","Redis","MongoDB","SQL-Server","PostgreSQL"]}],"languages":[{"language":"Portuguese","fluency":"Native speaker"},{"language":"English","fluency":"B2 - Upper intermediate"}],"interests":[{"name":"Wildlife","keywords":["Ferrets","Unicorns"]},{"name":"Wildlife","keywords":["Ferrets","Unicorns"]}],"references":[{"name":"","reference":"Available upon request"}]}')},LYUY:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("wx14"),r=a("q1tI"),i=a.n(r),o=a("HR5l");function l(e,t){var a=i.a.memo(i.a.forwardRef((function(t,a){return i.a.createElement(o.a,Object(n.a)({ref:a},t),e)})));return a.muiName=o.a.muiName,a}},Mz7R:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("LYUY");t.a=Object(i.a)(r.a.createElement("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter")},NrVZ:function(e,t,a){"use strict";a("bWfx");var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),o=(a("TOwV"),a("iuhU")),l=a("NqtD"),c=a("ye/S"),s=a("H2TA");a("Z3vd").a.styles;var d=i.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,d=e.color,m=void 0===d?"default":d,u=e.component,g=void 0===u?"div":u,p=e.disabled,b=void 0!==p&&p,f=e.disableElevation,v=void 0!==f&&f,h=e.disableFocusRipple,E=void 0!==h&&h,x=e.disableRipple,w=void 0!==x&&x,y=e.fullWidth,j=void 0!==y&&y,k=e.orientation,O=void 0===k?"horizontal":k,S=e.size,C=void 0===S?"medium":S,I=e.variant,R=void 0===I?"outlined":I,N=Object(r.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"]),z=Object(o.a)(c.grouped,c["grouped".concat(Object(l.a)(O))],c["grouped".concat(Object(l.a)(R))],c["grouped".concat(Object(l.a)(R)).concat(Object(l.a)(O))],c["grouped".concat(Object(l.a)(R)).concat("default"!==m?Object(l.a)(m):"")],b&&c.disabled);return i.createElement(g,Object(n.a)({role:"group",className:Object(o.a)(c.root,s,j&&c.fullWidth,v&&c.disableElevation,"contained"===R&&c.contained,"vertical"===O&&c.vertical),ref:t},N),i.Children.map(a,(function(e){return i.isValidElement(e)?i.cloneElement(e,{className:Object(o.a)(z,e.props.className),color:e.props.color||m,disabled:e.props.disabled||b,disableElevation:e.props.disableElevation||v,disableFocusRipple:E,disableRipple:w,fullWidth:j,size:e.props.size||C,variant:e.props.variant||R}):null})))}));t.a=Object(s.a)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},contained:{boxShadow:e.shadows[2]},disableElevation:{boxShadow:"none"},disabled:{},fullWidth:{width:"100%"},vertical:{flexDirection:"column"},grouped:{minWidth:40},groupedHorizontal:{"&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{borderTopRightRadius:0,borderTopLeftRadius:0},"&:not(:last-child)":{borderBottomRightRadius:0,borderBottomLeftRadius:0}},groupedText:{},groupedTextHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextPrimary:{"&:not(:last-child)":{borderColor:Object(c.b)(e.palette.primary.main,.5)}},groupedTextSecondary:{"&:not(:last-child)":{borderColor:Object(c.b)(e.palette.secondary.main,.5)}},groupedOutlined:{},groupedOutlinedHorizontal:{"&:not(:first-child)":{marginLeft:-1},"&:not(:last-child)":{borderRightColor:"transparent"}},groupedOutlinedVertical:{"&:not(:first-child)":{marginTop:-1},"&:not(:last-child)":{borderBottomColor:"transparent"}},groupedOutlinedPrimary:{"&:hover":{borderColor:e.palette.primary.main}},groupedOutlinedSecondary:{"&:hover":{borderColor:e.palette.secondary.main}},groupedContained:{boxShadow:"none"},groupedContainedHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderRight:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderBottom:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedPrimary:{"&:not(:last-child)":{borderColor:e.palette.primary.dark}},groupedContainedSecondary:{"&:not(:last-child)":{borderColor:e.palette.secondary.dark}}}}),{name:"MuiButtonGroup"})(d)},egtg:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("LYUY");t.a=Object(i.a)(r.a.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub")},kmrj:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("LYUY");t.a=Object(i.a)(r.a.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn")},tRbT:function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("DNiP"),a("pIFo"),a("8+KV");var n=a("Ff2n"),r=a("wx14"),i=a("q1tI"),o=a("iuhU"),l=a("H2TA"),c=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var m=i.forwardRef((function(e,t){var a=e.alignContent,l=void 0===a?"stretch":a,c=e.alignItems,s=void 0===c?"stretch":c,d=e.classes,m=e.className,u=e.component,g=void 0===u?"div":u,p=e.container,b=void 0!==p&&p,f=e.direction,v=void 0===f?"row":f,h=e.item,E=void 0!==h&&h,x=e.justify,w=void 0===x?"flex-start":x,y=e.lg,j=void 0!==y&&y,k=e.md,O=void 0!==k&&k,S=e.sm,C=void 0!==S&&S,I=e.spacing,R=void 0===I?0:I,N=e.wrap,z=void 0===N?"wrap":N,W=e.xl,D=void 0!==W&&W,T=e.xs,F=void 0!==T&&T,L=e.zeroMinWidth,B=void 0!==L&&L,M=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(o.a)(d.root,m,b&&[d.container,0!==R&&d["spacing-xs-".concat(String(R))]],E&&d.item,B&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==z&&d["wrap-xs-".concat(String(z))],"stretch"!==s&&d["align-items-xs-".concat(String(s))],"stretch"!==l&&d["align-content-xs-".concat(String(l))],"flex-start"!==w&&d["justify-xs-".concat(String(w))],!1!==F&&d["grid-xs-".concat(String(F))],!1!==C&&d["grid-sm-".concat(String(C))],!1!==O&&d["grid-md-".concat(String(O))],!1!==j&&d["grid-lg-".concat(String(j))],!1!==D&&d["grid-xl-".concat(String(D))]);return i.createElement(g,Object(r.a)({className:G,ref:t},M))})),u=Object(l.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return c.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),a}(e,"xs"),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};s.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(m);t.a=u},wb2y:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),o=a("iuhU"),l=a("H2TA"),c=a("ye/S"),s=i.forwardRef((function(e,t){var a=e.absolute,l=void 0!==a&&a,c=e.classes,s=e.className,d=e.component,m=void 0===d?"hr":d,u=e.flexItem,g=void 0!==u&&u,p=e.light,b=void 0!==p&&p,f=e.orientation,v=void 0===f?"horizontal":f,h=e.role,E=void 0===h?"hr"!==m?"separator":void 0:h,x=e.variant,w=void 0===x?"fullWidth":x,y=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(m,Object(n.a)({className:Object(o.a)(c.root,s,"fullWidth"!==w&&c[w],l&&c.absolute,g&&c.flexItem,b&&c.light,"vertical"===v&&c.vertical),role:E,ref:t},y))}));t.a=Object(l.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},yz9a:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("LYUY");t.a=Object(i.a)(r.a.createElement("path",{d:"M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"}),"AccountBox")}}]);
//# sourceMappingURL=component---src-pages-resume-js-a75c9e32ccda3a406748.js.map