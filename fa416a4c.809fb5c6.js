(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{103:function(e,a,n){"use strict";var t=n(0),r=n.n(t),i=n(98),l=n(89),m=n(49),o=n.n(m),c=37,s=39;a.a=function(e){var a=e.block,n=e.children,m=e.defaultValue,u=e.values,d=e.groupId,g=e.className,h=Object(i.a)(),p=h.tabGroupChoices,v=h.setTabGroupChoices,E=Object(t.useState)(m),f=E[0],b=E[1],j=Object(t.useState)(!1),y=j[0],S=j[1];if(null!=d){var _=p[d];null!=_&&_!==f&&u.some((function(e){return e.value===_}))&&b(_)}var k=function(e){b(e),null!=d&&v(d,e)},w=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||S(!0)},C=function(){S(!1)};return Object(t.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",C)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},g)},u.map((function(e){var a=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===a,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":f===a}),style:y?{}:{outline:"none"},key:a,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,a,n){switch(n.keyCode){case s:!function(e,a){var n=e.indexOf(a)+1;e[n]?e[n].focus():e[0].focus()}(e,a);break;case c:!function(e,a){var n=e.indexOf(a)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,a)}}(w,e.target,e),N(e)},onFocus:function(){return k(a)},onClick:function(){k(a),S(!1)},onPointerDown:function(){return S(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},t.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},104:function(e,a,n){"use strict";var t=n(0),r=n.n(t);a.a=function(e){return r.a.createElement("div",null,e.children)}},84:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=(n(89),n(95)),l=(n(92),n(90),n(93));n(96),n(103),n(104),n(85);a.default=function(){for(var e=[{name:"Prof. David (Dave) Hovemeyer (Sec 1)",email:"daveho /AT/ jhu DOT edu",web:"http://cs.jhu.edu/~daveho/",img:"img/dave.jpg",ohours:"T/Th 1-3pm",zlink:"https://piazza.com/jhu/spring2021/en601220/staff"},{name:"Prof. Michael (Misha) Kazhdan (Sec 2)",email:"misha /AT/ cs DOT jhu DOT edu",web:"http://cs.jhu.edu/~misha/",img:"img/misha.jpg",ohours:"TBA",zlink:"https://piazza.com/jhu/spring2021/en601220/staff"},{name:"Prof. Joanne Selinski (Sec 4)",email:"joanne /AT/ cs DOT jhu DOT edu",web:"http://cs.jhu.edu/~joanne/",img:"img/joanne.jpg",ohours:"http://cs.jhu.edu/~joanne/",zlink:""},{name:"Sing Chun Lee (Sec 5)",email:"singchun DOT lee /AT/ jhu DOT edu",web:"http://cs.jhu.edu/~singchun/",img:"img/singchun.jpg",ohours:"T 9:30-11:30am, Th 8:30-10:30am",zlink:"https://piazza.com/jhu/spring2021/en601220/staff"}],a="https://docs.google.com/spreadsheets/d/1OCSl2UKclPT7asoEoSwNgRdAoJnRbQPbonDbS89JV7Q/edit?usp=sharing",n=[{name:"Kaushik Srinivasan",major:"Applied Math & Statistics Senior",year:"Senior",img:"img/kaushik.png"},{name:"Raghav Sambasivan",major:"Computer Science, Applied Math & Statistics",year:"Junior",img:"img/raghav.jpg"}],t=[{name:"Aaron Rhee",major:"Computer Science",year:"Junior",img:"img/aaron.jpg"},{name:"Mark Tiavises",major:"Electrical Engineering",year:"Sophomore",img:"img/mark.png"},{name:"Justin Winkler",major:"Neuroscience",year:"Junior",img:"img/justin.jpeg"},{name:"Anika Misra",major:"Computer Science, Molecular & Cellular Biology",year:"Sophomore",img:"img/anika.jpg"},{name:"Brian Rui",major:"Computer Science",year:"Sophomore",img:"img/brian.jpg"},{name:"Lambert Kober",major:"Computer Science & Physics",year:"Sophomore",img:"img/lambert.jpg"},{name:"Jeanie Fung",major:"Cognitive Science",year:"Junior",img:"img/jeanie.jpg"},{name:"Lucy Zhang",major:"Molecular & Cellular Biology",year:"Junior",img:"img/lucy.jpg"},{name:"Alexandra Szewc",major:"Biomedical Engineering, Computer Science",year:"Sophomore",img:"img/alexandra.jpg"},{name:"Trisha Karani",major:"Biomedical Engineering, Computer Science",year:"Sophomore",img:"img/trisha.jpg"},{name:"Ben Cillie",major:"Computer Science",year:"Sophomore",img:"img/ben.png"},{name:"Peter Zarakas",major:"Computer Science",year:"Junior",img:"img/peter.jpg"},{name:"Lisa Zhu",major:"Computer Science, Applied Math & Statistics",year:"Junior",img:"img/lisa.jpg"},{name:"Aditya Khandeshi",major:"Biomedical Engineering, Computer Science",year:"Sophomore",img:"img/aditya.jpg"}],m=new Array,o=0;o<e.length;o++){var c=e[o],s=new Array,u=new Array;c.zlink?(u.push(r.a.createElement("div",null,"Office Hours: ",c.ohours)),s.push(r.a.createElement("div",null,"Zoom link: visit ",r.a.createElement("a",{href:c.zlink},r.a.createElement("i",null,"Piazza -> Resources -> Staff"))))):u.push(r.a.createElement("div",null,"Office Hours: ",r.a.createElement("i",null,"see ",r.a.createElement("a",{href:c.ohours,target:"_blank"},"personal webpage")," for times and link"))),m.push(r.a.createElement("div",{className:"card-demo",style:{display:"inline-block",padding:"1% 0 1% 4%"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:Object(l.a)(c.img)}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("h4",{className:"avatar__name"},c.name),r.a.createElement("small",{className:"avatar__subtitle"},"Department of Computer Science",r.a.createElement("br",null),"Email: ",c.email,r.a.createElement("br",null),"Web: ",r.a.createElement("a",{href:c.web,target:"_blank"},c.web),u,s)))))))}var d=new Array;for(o=0;o<n.length;o++){var g=n[o];d.push(r.a.createElement("div",{className:"card-demo",style:{display:"inline-block",padding:"1% 0 1% 4%"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:Object(l.a)(g.img)}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("h4",{className:"avatar__name"},g.name),r.a.createElement("small",{className:"avatar__subtitle"},"Head Course Assistant ",r.a.createElement("br",null),g.major," ",g.year," ",r.a.createElement("br",null),"Office Hours and Zoom Links: ",r.a.createElement("a",{href:a},"here"))))))))}var h=new Array;for(o=0;o<t.length;o++){var p=t[o];h.push(r.a.createElement("div",{className:"card-demo",style:{display:"inline-block",padding:"1% 0 1% 4%"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:Object(l.a)(p.img)}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("h4",{className:"avatar__name"},p.name),r.a.createElement("small",{className:"avatar__subtitle"},"Course Assistant ",r.a.createElement("br",null),p.major," ",p.year," ",r.a.createElement("br",null),"Office Hours and Zoom Links: ",r.a.createElement("a",{href:a},"here"))))))))}return r.a.createElement(i.a,{title:"Course Staff"},r.a.createElement("div",{style:{padding:"2% 0 0% 2%"}},r.a.createElement("h1",{style:{padding:"0% 0 0% 0%"}},"Instructors"),r.a.createElement("br",null),m,r.a.createElement("br",null),r.a.createElement("h2",null,"Head Course Assistants"),r.a.createElement("br",null),d,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"Course Assistants"),r.a.createElement("br",null),h))}}}]);