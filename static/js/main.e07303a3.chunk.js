(this.webpackJsonpimwebreact=this.webpackJsonpimwebreact||[]).push([[0],{36:function(e,t,c){},46:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(37),s=c.n(i),r=(c(46),c(4)),j=c(5),l=c(7),o=c(6),b=c(0);var d=function(e){return Object(b.jsxs)("div",{className:"services__container",id:e.id,children:[Object(b.jsx)("div",{className:"services__logo",children:Object(b.jsx)("p",{children:Object(b.jsx)("i",{className:e.logo})})}),Object(b.jsx)("div",{className:"services__title",children:Object(b.jsx)("p",{children:e.title})}),Object(b.jsx)("div",{className:"services__info",children:Object(b.jsx)("p",{children:e.info})})]})},h=c(13),m=c.n(h),O=(c(66),function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).state={servicesData:[]},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;m.a.get("json/services.json").then((function(t){e.setState({servicesData:t.data})}))}},{key:"servicesFiller",value:function(){return this.state.servicesData.map((function(e){return Object(b.jsx)(d,{logo:e.logo,title:e.title,info:e.info,id:e.id},e.id)}))}},{key:"render",value:function(){return Object(b.jsx)("section",{id:"services",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"midLine"}),Object(b.jsx)("h1",{className:"titleFontSize",children:"Our Services"}),Object(b.jsx)("p",{className:"normalFontSize",children:"If no one hates it, no one really loves it."}),this.servicesFiller()]})})}}]),c}(n.Component)),u=c(8),x=c.n(u);var f=function(e){return Object(n.useEffect)((function(){var e=document.getElementsByClassName("projects__container"),t=function(e){var t=document.querySelector("#".concat(e.currentTarget.id," .projects__infoAndLink"));x()(t).fadeIn(300),x()(t).css("display","grid")};x()(document).on("touchstart",(function(e){x()(e.target).closest(".projects__container").length||x()(".projects__infoAndLink").fadeOut(300)}));for(var c=function(e){var t=document.querySelector("#".concat(e.currentTarget.id," .projects__infoAndLink"));x()(t).fadeOut(300)},n=0;n<e.length;n++)e[n].addEventListener("click",t,!1),e[n].addEventListener("mouseenter",t,!1),e[n].addEventListener("mouseleave",c,!1)}),[]),Object(b.jsxs)("div",{className:"projects__container",id:e.id,children:[Object(b.jsxs)("div",{className:"projects__infoAndLink",children:[Object(b.jsx)("h1",{children:e.info}),Object(b.jsx)("a",{className:"btn",href:e.link,rel:"noreferrer",target:"_blank",children:"Visit"})]}),Object(b.jsx)("img",{src:e.img,alt:"project"})]})},v=(c(67),function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).state={projectsData:[]},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;m.a.get("json/projects.json").then((function(t){e.setState({projectsData:t.data})}))}},{key:"projectsFiller",value:function(){return this.state.projectsData.map((function(e){return Object(b.jsx)(f,{img:e.img,id:e.id,info:e.info,link:e.link},e.id)}))}},{key:"render",value:function(){return Object(b.jsx)("section",{id:"projects",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"midLine"}),Object(b.jsx)("h1",{className:"titleFontSize",children:"Selected Projects"}),Object(b.jsx)("p",{className:"normalFontSize",children:"Digital design is like painting, except the paint never dries."}),this.projectsFiller()]})})}}]),c}(n.Component));var p=function(e){return Object(n.useEffect)((function(){var e=document.getElementsByClassName("team__container"),t=function(e){var t=document.querySelector("#".concat(e.currentTarget.id," .team_info"));x()(t).fadeIn(300),x()(t).css("display","grid")},c=function(e){var t=document.querySelector("#".concat(e.currentTarget.id," .team_info"));x()(t).fadeOut(300)};x()(document).on("touchstart",(function(e){x()(e.target).closest(".team__container").length||x()(".team_info").fadeOut(300)}));for(var n=0;n<e.length;n++)e[n].addEventListener("click",t,!1),e[n].addEventListener("mouseenter",t,!1),e[n].addEventListener("mouseleave",c,!1)}),[]),Object(b.jsxs)("div",{className:"team__container",id:e.id,children:[Object(b.jsxs)("div",{className:"team_info",children:[Object(b.jsx)("h3",{className:"team_name",children:e.name}),Object(b.jsx)("h6",{className:"team_job",children:e.job}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{rel:"noreferrer",target:"_blank",className:"team_socialLink",href:e.facebook,children:Object(b.jsx)("i",{className:e.facebookLogo})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{rel:"noreferrer",target:"_blank",className:"team_socialLink",href:e.behance,children:Object(b.jsx)("i",{className:e.behanceLogo})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{rel:"noreferrer",target:"_blank",className:"team_socialLink",href:e.instagram,children:Object(b.jsx)("i",{className:e.instagramLogo})})})]})]}),Object(b.jsx)("img",{src:e.img,alt:"team",className:"team__img"})]})},g=(c(68),function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).state={teamData:[]},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;m.a.get("json/team.json").then((function(t){e.setState({teamData:t.data})}))}},{key:"teamFiller",value:function(){return this.state.teamData.map((function(e){if(""!==e.facebook&&void 0!==e.facebook)var t="bx bxl-facebook";if(""!==e.instagram&&void 0!==e.instagram)var c="bx bxl-instagram";if(""!==e.behance&&void 0!==e.behance)var n="bx bxl-behance";return Object(b.jsx)(p,{img:e.img,id:e.id,name:e.name,job:e.job,facebookLogo:t,instagramLogo:c,behanceLogo:n,facebook:e.facebook,instagram:e.instagram,behance:e.behance},e.id)}))}},{key:"render",value:function(){return Object(b.jsx)("section",{id:"team",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"midLine"}),Object(b.jsx)("h1",{className:"titleFontSize",children:"Meet Our Team"}),Object(b.jsx)("p",{className:"normalFontSize",children:"Good design is not free, and free design is not good."}),this.teamFiller(),Object(b.jsx)("div",{className:"midLine"})]})})}}]),c}(n.Component));var _,N,k=function(e){return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsx)("li",{children:Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.link,children:Object(b.jsx)("i",{className:e.icon})})})})},y=(c(69),function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).state={smlData:[]},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;m.a.get("json/sml.json").then((function(t){e.setState({smlData:t.data})}))}},{key:"smlFiller",value:function(){return this.state.smlData.map((function(e){return Object(b.jsx)(k,{link:e.link,icon:e.icon,id:e.id},e.id)}))}},{key:"render",value:function(){return Object(b.jsx)("section",{id:"contact",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"contact__left",children:[Object(b.jsx)("h1",{className:"titleFontSize",children:"Let's Talk"}),Object(b.jsx)("h5",{className:"email",children:"mail-us@gmail.com"}),Object(b.jsx)("p",{className:"normalFontSize",children:"I wiil very happy if you told me what you love in my site and what you hate. thanks for visit."}),Object(b.jsx)("ul",{className:"sml__list",children:this.smlFiller()})]}),Object(b.jsx)("div",{className:"contact__right",children:Object(b.jsxs)("form",{id:"contact__form",children:[Object(b.jsx)("input",{id:"contact__name",placeholder:"Your name here",type:"text"}),Object(b.jsx)("input",{id:"contact__email",placeholder:"Your email here",type:"email"}),Object(b.jsx)("input",{id:"contact__subject",placeholder:"Your subject here",type:"text"}),Object(b.jsx)("textarea",{id:"contact__message",cols:"30",rows:"2",placeholder:"Your message here"}),Object(b.jsx)("button",{type:"submit",className:"btn",children:"Send"})]})})]})})}}]),c}(n.Component)),w=(c(70),function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(b.jsx)("footer",{id:"footer",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"copyright",children:Object(b.jsxs)("h6",{children:["2021 \xa9 ",Object(b.jsx)("span",{children:"Ibrahim Maded"})," , All rights reserved."]})}),Object(b.jsx)("div",{className:"footer__links",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"//imweb.netlify.app",children:"Terms of use"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"//imweb.netlify.app",children:"Privacy Policy"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"//imweb.netlify.app",children:"Cookies Policy"})})]})})]})})}}]),c}(n.Component)),S=c(19),F=c(14),C=(c(36),c(71),c(23)),L=c(24),D=L.a.section(_||(_=Object(C.a)(["\n@media (max-width:1024px){\n    background-image: url('","/images/hero.jpeg');\nbackground-size: cover;\nbackground-repeat: no-repeat;\n}\n"])),""),E=L.a.header(N||(N=Object(C.a)(["\n@media (min-width:1025px){\n    background-image: url('","/images/hero.jpeg');\nbackground-size: cover;\nbackground-repeat: no-repeat;\n}\n"])),""),M=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(b.jsx)(D,{id:"hero",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h1",{className:"titleFontSize",children:"Say welcome to the creative world !"}),Object(b.jsx)("p",{className:"normalFontSize",children:"Good design's not about what meduim you're working in. It's about thinking hard about what you want to do and what you have to work with before you start."}),Object(b.jsx)("button",{className:"btn",children:"Getting Started Today"})]})})}}]),c}(n.Component);c(73);var z=function(e){return Object(b.jsxs)("div",{className:"NavMobOpen",children:[Object(b.jsx)("div",{className:"navMobClose",onClick:function(){return e.setChanged()},children:Object(b.jsx)("i",{className:"bx bx-x"})}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(F.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#services",children:"Services"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#projects",children:"Projects"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#team",children:"Team"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#contact",children:"Contact"})})]})]})},I=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).setChanged=function(){n.setState({navMobOpen:!1})},n.setChanged=n.setChanged.bind(Object(S.a)(n)),n.state={navMobOpen:!1},n}return Object(j.a)(c,[{key:"render",value:function(){var e=this;return!1===this.state.navMobOpen?Object(b.jsx)(E,{id:"navbar",children:Object(b.jsxs)("div",{className:"row navAndHero",children:[Object(b.jsxs)("nav",{className:"navbar__pc",children:[Object(b.jsx)("div",{className:"navbar__logo",children:Object(b.jsx)("a",{href:"//imweb.netlify.app",children:"IM WEB"})}),Object(b.jsx)("div",{className:"navbar__links",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(F.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#services",children:"Services"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#projects",children:"Projects"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#team",children:"Team"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"#contact",children:"Contact"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"//facebook.com",children:Object(b.jsx)("i",{className:"bx bxl-facebook"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"//instagram.com",children:Object(b.jsx)("i",{className:"bx bxl-instagram"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://behance.net/ibrahimmaded",children:Object(b.jsx)("i",{className:"bx bxl-behance"})})})]})})]}),Object(b.jsxs)("nav",{className:"navbar__mobile",children:[Object(b.jsx)("div",{className:"navbar__logo",children:Object(b.jsx)("a",{href:"//imweb.netlify.app",children:"IM WEB"})}),Object(b.jsx)("div",{className:"navbar__mobile--menu",onClick:function(){return e.setState({navMobOpen:!0})},children:Object(b.jsx)("a",{href:"/#",children:Object(b.jsx)("i",{className:"bx bx-menu"})})})]}),Object(b.jsx)(M,{})]})}):Object(b.jsx)(z,{setChanged:this.setChanged})}}]),c}(n.Component),T=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(I,{}),Object(b.jsxs)("main",{children:[Object(b.jsx)(O,{}),Object(b.jsx)(v,{}),Object(b.jsx)(g,{}),Object(b.jsx)(y,{})]}),Object(b.jsx)(w,{})]})}}]),c}(n.Component),B=c(2),P=(c(78),function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(b.jsx)("header",{id:"navbar",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("nav",{className:"navbar__pc",children:[Object(b.jsx)("div",{className:"navbar__logo",children:Object(b.jsx)("a",{href:"//imweb.netlify.app",children:"IM WEB"})}),Object(b.jsx)("div",{className:"navbar__links",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(F.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"//imweb.netlify.app/#services",children:"Services"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"//imweb.netlify.app/#work",children:"Work"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"//imweb.netlify.app/#team",children:"Team"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"//imweb.netlify.app/#contact",children:"Contact"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"//facebook.com",children:Object(b.jsx)("i",{className:"bx bxl-facebook"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"//instagram.com",children:Object(b.jsx)("i",{className:"bx bxl-instagram"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://behance.net/ibrahimmaded",children:Object(b.jsx)("i",{className:"bx bxl-behance"})})})]})})]}),Object(b.jsxs)("nav",{className:"navbar__mobile",children:[Object(b.jsx)("div",{className:"navbar__logo",children:Object(b.jsx)("a",{href:"//imweb.netlify.app",children:"IM WEB"})}),Object(b.jsx)("div",{className:"navbar__mobile--menu",children:Object(b.jsx)("a",{href:"/#",children:Object(b.jsx)("i",{className:"bx bx-menu"})})})]})]})})}}]),c}(n.Component));c(79);var A=function(){return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(P,{}),Object(b.jsxs)("div",{id:"pageNotFound",children:[Object(b.jsx)("img",{alt:"page not found",className:"pageNotFound__img",src:"images/error404.svg"}),Object(b.jsx)("h1",{children:"ERROR 404"}),Object(b.jsx)("h5",{children:"Page Not Found"})]}),Object(b.jsx)(w,{})]})};var W=function(){return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsx)(F.a,{children:Object(b.jsxs)(B.c,{children:[Object(b.jsx)(B.a,{exact:!0,path:"/",component:T}),Object(b.jsx)(B.a,{component:A})]})})})};s.a.render(Object(b.jsx)(W,{}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.e07303a3.chunk.js.map