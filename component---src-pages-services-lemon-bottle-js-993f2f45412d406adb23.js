"use strict";(self.webpackChunkashk_aesthetics=self.webpackChunkashk_aesthetics||[]).push([[700],{6538:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(6072),r="Catalog-module--Description--14c70";var i=e=>{let{data:t,maxVisible:a,expandText:i,collapseText:m,linkTo:s,linkText:o}=e;const{0:c,1:d}=(0,n.useState)(!1);return n.createElement("div",{className:"Catalog-module--Catalog--c1c7f"},n.createElement("ul",{className:"Catalog-module--List--6bb17"},function(){let e=t.map((e=>n.createElement("li",{className:"Catalog-module--Item--94d9c",key:e.name},n.createElement(l.Z,null,n.createElement("div",{className:"Catalog-module--Line--19ad8"},n.createElement("p",{className:"Catalog-module--Name--564b8"},e.name),n.createElement("p",{className:"Catalog-module--Price--89973"},e.oldPrice&&n.createElement("span",{className:"Catalog-module--Discounted--1b1ef"},"£",e.oldPrice)," £",e.price)),(e.time||e.meta)&&n.createElement("p",{className:r},e.meta||function(e){let t="";return Math.trunc(e/60)>0&&(t+=Math.floor(e/60)+" hour"),Math.trunc(e/60)>1&&(t+="s"),""!==t&&(t+=" "),e%60!=0&&(t+=e%60+" min"),t}(e.time)),e.oldPrice&&!e.time&&n.createElement("p",{className:r},"save up to ",100-(100/e.oldPrice*e.price).toFixed(0),"%")))));return e.length=c?t.length:a,e}()),n.createElement(l.Z,null,n.createElement("div",{className:"Catalog-module--Options--48d53"},a&&a<t.length&&n.createElement("button",{className:"Catalog-module--Button--ec075",onClick:()=>d(!c)},c?m:i),s&&n.createElement("a",{className:"Catalog-module--Link--eba46",href:s,target:"_blank",rel:"noopener noreferrer"},o))))}},9142:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(6072);var r=e=>{let{data:t}=e;return n.createElement("div",{className:"Descriptive-module--Descriptive--1f701"},t.map((e=>n.createElement("div",{className:"Descriptive-module--Paragraph--1c27a",key:e.description},n.createElement(l.Z,null,n.createElement("h2",{className:"Descriptive-module--Name--97418"},e.name)),n.createElement(l.Z,null,n.createElement("p",{className:"Descriptive-module--Description--9c882"},e.description))))))}},2081:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(8032),r=a(902),i=a(747),m=a(6072),s="Informative-module--Informative--d4feb";var o=e=>{let{id:t,image:a,main:o,description:c,linkTo:d,linkText:u,reversed:h,children:p}=e;return n.createElement("div",{className:[s,h?"Informative-module--Reverse--764c8":""].join(" "),id:t},n.createElement("div",{className:"Informative-module--Image--f4e96"},n.createElement(m.Z,{style:{width:"100%",height:"100%"}},n.createElement(l.G,{className:"Informative-module--Photo--dd886",image:(0,l.c)(a),alt:o}))),n.createElement("div",{className:"Informative-module--Info--604ff"},n.createElement("div",{className:"Informative-module--Wrapper--bbbd8"},n.createElement(m.Z,{style:{width:"100%",margin:"0"}},n.createElement("h1",{className:"Informative-module--Main--310a6"},o),n.createElement(r.Z,{color:"#B87332",style:{marginLeft:0,marginRight:0,marginBottom:0}}),c&&n.createElement("p",{className:"Informative-module--Description--d7f20"},c)),p&&n.createElement("div",{className:"Informative-module--Content--4cdd6"},p)),d&&n.createElement(m.Z,null,n.createElement("div",{className:"Informative-module--Button--8e985"},n.createElement(i.Z,{linkTo:d},u)))))}},678:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(8032),r=a(6072);var i=e=>{let{image:t,main:a}=e;return n.createElement("div",{className:"Preface-module--Preface--0a343"},n.createElement(l.G,{className:"Preface-module--Image--58427",image:(0,l.c)(t),alt:a}),n.createElement(r.Z,null,n.createElement("h1",{className:"Preface-module--Main--6dbb8"},a)))}},7083:function(e,t,a){a.r(t),a.d(t,{Head:function(){return h}});var n=a(7294),l=a(1883),r=a(6511),i=a(678),m=a(5871),s=a(3008),o=a(2081),c=a(6538),d=a(9142),u=a(5053);t.default=()=>{const{lemonBottleImage:e,lemonBottleTreatmentAreas:t}=(0,l.useStaticQuery)("1997360257");return n.createElement(r.Z,null,n.createElement(i.Z,{image:e,main:"Lemon Bottle"}),n.createElement(m.Z,null,n.createElement(s.Z,{main:"Fat Dissolving Lemon Bottle",description:["Lemon bottle is a combination of vitamins and enzymes that break down the subcutaneous layer of the fat cell. There is a high concentration of Vitamin B2 also known as Riboflavin and bromelain, this increases and speeds up the process of breaking down the fat cell and allowing your metabolism get rid of it naturally.","These injections are becoming increasingly popular as an alternative to surgical procedures such as liposuction. Unlike other fat dissolvers this causes minimal swelling there’s no downtime and it contains natural ingredients."]})),n.createElement(m.Z,{background:"#F8F8F8"},n.createElement(o.Z,{image:t,main:"Areas that can be treated using lemon bottle",reversed:!0},n.createElement(d.Z,{data:[{description:"Jaw"},{description:"Chin"},{description:"Arms"},{description:"Love handles"},{description:"Abdomen"},{description:"Inner thigs"}]}))),n.createElement(m.Z,null,n.createElement(s.Z,{main:"When can you see result?",description:["When the solution is injected in to the fat cell, the fat cells start to break down immediately, you will notice the weight loss via inches. It is recommended to drink 2 litres of water to transport the fat cells out of the body. It can take up to 3-12 weeks for optimal results."]})),n.createElement(m.Z,{background:"#F8F8F8",reversed:!0},n.createElement(s.Z,{main:"Price list"}),n.createElement(o.Z,{image:e,main:"Face & Neck"},n.createElement(c.Z,{data:[{name:"Small Area [1 session]",meta:"Chin Fat, Jaw, Neck, Bra Bulge",price:85},{name:"Small Area [2 sessions]",meta:"Chin Fat, Jaw, Neck, Bra Bulge",price:160}],maxVisible:6}),n.createElement(c.Z,{data:[{name:"Medium Area [1 session]",meta:"Arms, Back, Lower Stomach",price:170},{name:"Medium Area [2 sessions]",meta:"Arms, Back, Lower Stomach",price:310},{name:"Medium Area [3 sessions]",meta:"Arms, Back, Lower Stomach",price:460}],maxVisible:6}),n.createElement(c.Z,{data:[{name:"Large Area [1 session]",meta:"Stomach, Inner Thigh, Outer Thigh, Love Handles",price:340},{name:"Large Area [2 sessions]",meta:"Stomach, Inner Thigh, Outer Thigh, Love Handles",price:630},{name:"Large Area [3 sessions]",meta:"Stomach, Inner Thigh, Outer Thigh, Love Handles",price:900}],maxVisible:6,expandText:"View more",collapseText:"View less",linkTo:"https://fresha.com/ashk-aesthetics-r6gk2ijg",linkText:"Book now"}))))};const h=()=>n.createElement(u.Z,{title:"Lemon Bottle"})}}]);
//# sourceMappingURL=component---src-pages-services-lemon-bottle-js-993f2f45412d406adb23.js.map