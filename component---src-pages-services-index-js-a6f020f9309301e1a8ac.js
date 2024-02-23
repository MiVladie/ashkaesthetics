"use strict";(self.webpackChunkashk_aesthetics=self.webpackChunkashk_aesthetics||[]).push([[629],{9789:function(e,a,t){t.d(a,{Z:function(){return l}});var i=t(7294),n=t(1883),r=t(8032);var l=e=>{let{image:a,imageAlt:t,main:l,description:o,linkLeftTo:m,linkLeftText:s,linkRightTo:c,linkRightText:d,scrollTo:p}=e;return i.createElement("section",{className:"Banner-module--Banner--b0b1e"},i.createElement("div",{className:"Banner-module--Image--39c9b"},i.createElement(r.G,{image:(0,r.c)(a),alt:t,className:"Banner-module--Photo--4ce4a"})),i.createElement("div",{className:"Banner-module--Wrapper--a8b52"},l&&i.createElement("h1",{className:"Banner-module--Main--df4b4"},l),l&&i.createElement("div",{className:"Banner-module--Line--9212a"}),o&&i.createElement("p",{className:"Banner-module--Description--c21c4"},o)),i.createElement("div",{className:"Banner-module--Links--6b691"},m&&i.createElement(n.Link,{className:"Banner-module--Left--ed265",to:m},s),c&&i.createElement("a",{className:"Banner-module--Right--11b3e",href:c,target:"_blank",rel:"noopener noreferrer"},d)),p&&i.createElement("button",{className:"Banner-module--Scroll--9763c",onClick:function(){document.getElementById(p).scrollIntoView({behavior:"smooth"})},"aria-label":"scroll down"},i.createElement("span",{className:"Banner-module--Circle--c76c9"}),i.createElement("span",{className:"Banner-module--Knob--c832b"})))}},6538:function(e,a,t){t.d(a,{Z:function(){return l}});var i=t(7294),n=t(6072),r="Catalog-module--Description--14c70";var l=e=>{let{data:a,maxVisible:t,expandText:l,collapseText:o,linkTo:m,linkText:s}=e;const{0:c,1:d}=(0,i.useState)(!1);return i.createElement("div",{className:"Catalog-module--Catalog--c1c7f"},i.createElement("ul",{className:"Catalog-module--List--6bb17"},function(){let e=a.map((e=>i.createElement("li",{className:"Catalog-module--Item--94d9c",key:e.name},i.createElement(n.Z,null,i.createElement("div",{className:"Catalog-module--Line--19ad8"},i.createElement("p",{className:"Catalog-module--Name--564b8"},e.name),i.createElement("p",{className:"Catalog-module--Price--89973"},e.oldPrice&&i.createElement("span",{className:"Catalog-module--Discounted--1b1ef"},"£",e.oldPrice)," £",e.price)),e.time&&i.createElement("p",{className:r},function(e){let a="";return Math.trunc(e/60)>0&&(a+=Math.floor(e/60)+" hour"),Math.trunc(e/60)>1&&(a+="s"),""!==a&&(a+=" "),e%60!=0&&(a+=e%60+" min"),a}(e.time)),e.oldPrice&&!e.time&&i.createElement("p",{className:r},"save up to ",100-(100/e.oldPrice*e.price).toFixed(0),"%")))));return e.length=c?a.length:t,e}()),i.createElement(n.Z,null,i.createElement("div",{className:"Catalog-module--Options--48d53"},t&&t<a.length&&i.createElement("button",{className:"Catalog-module--Button--ec075",onClick:()=>d(!c)},c?o:l),m&&i.createElement("a",{className:"Catalog-module--Link--eba46",href:m,target:"_blank",rel:"noopener noreferrer"},s))))}},9142:function(e,a,t){t.d(a,{Z:function(){return r}});var i=t(7294),n=t(6072);var r=e=>{let{data:a}=e;return i.createElement("div",{className:"Descriptive-module--Descriptive--1f701"},a.map((e=>i.createElement("div",{className:"Descriptive-module--Paragraph--1c27a",key:e.description},i.createElement(n.Z,null,i.createElement("h2",{className:"Descriptive-module--Name--97418"},e.name)),i.createElement(n.Z,null,i.createElement("p",{className:"Descriptive-module--Description--9c882"},e.description))))))}},2081:function(e,a,t){t.d(a,{Z:function(){return s}});var i=t(7294),n=t(8032),r=t(902),l=t(747),o=t(6072),m="Informative-module--Informative--d4feb";var s=e=>{let{id:a,image:t,main:s,description:c,linkTo:d,linkText:p,reversed:u,children:h}=e;return i.createElement("div",{className:[m,u?"Informative-module--Reverse--764c8":""].join(" "),id:a},i.createElement("div",{className:"Informative-module--Image--f4e96"},i.createElement(o.Z,{style:{width:"100%",height:"100%"}},i.createElement(n.G,{className:"Informative-module--Photo--dd886",image:(0,n.c)(t),alt:s}))),i.createElement("div",{className:"Informative-module--Info--604ff"},i.createElement("div",{className:"Informative-module--Wrapper--bbbd8"},i.createElement(o.Z,{style:{width:"100%",margin:"0"}},i.createElement("h1",{className:"Informative-module--Main--310a6"},s),i.createElement(r.Z,{color:"#B87332",style:{marginLeft:0,marginRight:0,marginBottom:0}}),c&&i.createElement("p",{className:"Informative-module--Description--d7f20"},c)),h&&i.createElement("div",{className:"Informative-module--Content--4cdd6"},h)),d&&i.createElement(o.Z,null,i.createElement("div",{className:"Informative-module--Button--8e985"},i.createElement(l.Z,{linkTo:d},p)))))}},1113:function(e,a,t){t.r(a),t.d(a,{Head:function(){return u}});var i=t(7294),n=t(1883),r=t(6511),l=t(9789),o=t(5871),m=t(3008),s=t(2081),c=t(9142),d=t(6538),p=t(5053);a.default=()=>{const{bannerImage:e,microbladingImage:a,limuEyesImage:t,profhiloImage:p,lemonBottleImage:u,browsAndLashImage:h,microbladingImage02:g,eyesAndBrowsImage:k,waxingImage:f,mensTreatmentsImage:E,packagesImage:b}=(0,n.useStaticQuery)("2025914273");return i.createElement(r.Z,null,i.createElement(l.Z,{image:e,imageAlt:"Beauty Salon Background",main:"If it makes you feel beautiful, then do it",linkRightTo:"https://fresha.com/ashk-aesthetics-r6gk2ijg",linkRightText:"Book now",scrollTo:"intro"}),i.createElement(o.Z,{id:"intro"},i.createElement(m.Z,{main:"Our services"})),i.createElement(o.Z,{background:"#F8F8F8"},i.createElement(s.Z,{image:a,main:"Microblading",linkTo:"/services/microblading",linkText:"Learn more",reversed:!0},i.createElement(c.Z,{data:[{name:"What is microblading?",description:"Microblading is a semi-permanent makeup procedure that dramatically corrects or fully construct/reconstruct lost eyebrow hairs. It looks so real, it is often referred to as 3D or hairstroke tattoo. It can help define, shape, and create fullness in the eyebrow area."},{name:"Benefits of eyebrow microblading",description:"It gives you long-lasting results. Think of it like a tattoo that gives you the brows of your dreams. You will only need to get your brows microbladed once every one and a half to two years. It is an easy solution for people who have lost their brows due to over plucking, an illness, or chemotherapy."}]}))),i.createElement(o.Z,null,i.createElement(s.Z,{image:t,main:"Lumi Eyes",linkTo:"/services/lumi-eyes",linkText:"Learn more"},i.createElement(c.Z,{data:[{name:"What is Lumi eyes?",description:"Lumi Eyes is a type of tissue stimulator that is specifically designed for use in needle Mesotherapy treatments around the eyes and tear valley area. Unlike other treatments, Lumi Eyes does not cause side effects minimal invasive treatment with fast and anti-agin results and visible changes with in  just one session."},{description:"This high-quality product contains polynucleotides that have a strong tissue-regenerating effect, helping to repair damage to the dermis. The Lumi Eyes Treatment effectively hydrates and rejuvenates the skin tissue while reducing symptoms of fatigue and skin discoloration."}]}))),i.createElement(o.Z,{background:"#F8F8F8"},i.createElement(s.Z,{image:p,main:"Skin Booster Profhilo",linkTo:"/services/profhilo",linkText:"Learn more",reversed:!0},i.createElement(c.Z,{data:[{name:"What is Skin Booster Profhilo?",description:"Profilo is a type skin booster injectable treat treatment. It is designed to stimulate natural production of collagen and elastin, essential proteins that contribute to skin elasticity and firmness."},{description:"Additionally, Profilo has the unique property of attracting water to the treated areas, enhancing skin hydration."}]}))),i.createElement(o.Z,null,i.createElement(s.Z,{image:u,main:"Fat Dissolving Lemon Bottle",linkTo:"/services/lemon-bottle",linkText:"Learn more"},i.createElement(c.Z,{data:[{name:"What is Lemon Bottle?",description:"Lemon bottle is a combination of vitamins and enzymes that break down the subcutaneous layer of the fat cell. There is a high concentration of Vitamin B2 also known as Riboflavin and bromelain, this increases and speeds up the process of breaking down the fat cell and allowing your metabolism get rid of it naturally."},{description:"These injections are becoming increasingly popular as an alternative to surgical procedures such as liposuction. Unlike other fat dissolvers this causes minimal swelling there’s no downtime and it contains natural ingredients."}]}))),i.createElement(o.Z,{background:"#F8F8F8"},i.createElement(s.Z,{image:h,main:"Eyes & Brows",linkTo:"/services/eyes-and-brows",linkText:"Learn more",reversed:!0},i.createElement(c.Z,{data:[{name:"Brow lamination",description:"Brow Lamination is a salon treatment which involves restructuring brow hairs to keep them in their desired shape. Naturally fuller brows which can be tailored to suit any brow preference."},{description:"Brows can be worn brushed up or down depending on your style. Brow Lamination treatments are proving extremely popular thanks to their amazing results which last up to 8 weeks."},{description:"This treatment takes  30- 45 minutes and will give the appearance of thicker brows that are expertly styled into your desired shape."},{name:"Lash Lift",description:"A lash lift is a bit like an eyelash perm and gives the same effect as using an eyelash curler. it lasts 8-12 week and is suitable for clients no matter what their lash length. It’s a very low maintenance lash service. It means you can also use your normal makeup, mascara and makeup remover."}]}))),i.createElement(o.Z,null,i.createElement(m.Z,{main:"Price list",description:""}),i.createElement(s.Z,{id:"microblading",image:g,main:"Microblading",description:""},i.createElement(d.Z,{data:[{name:"Microblading (Inc. Consultation, Patch Test, After Care Ointment)",time:180,price:250},{name:"Annual Touch Up",time:90,price:130}],maxVisible:5,expandText:"View more",collapseText:"View less",linkTo:"https://fresha.com/ashk-aesthetics-r6gk2ijg",linkText:"Book now"})),i.createElement(s.Z,{id:"eyesandbrows",image:k,main:"Eyes & Brows",description:"",reversed:!0},i.createElement(d.Z,{data:[{name:"Brow Lamination",time:45,price:40},{name:"Brow Lamination & Tint",time:60,price:43},{name:"Brow Lamination With Tint & Shape",time:75,price:48},{name:"Lash Lift & Tint",time:60,price:40},{name:"Eyebrow Shape & Tint",time:30,price:13},{name:"Eyebrow & Lash Tint",time:30,price:15},{name:"Eyelash Tint",time:30,price:10},{name:"Eyebrow Tint",time:15,price:8},{name:"Eyebrow Wax (Strip)",time:15,price:8}],maxVisible:5,expandText:"View more",collapseText:"View less",linkTo:"https://fresha.com/ashk-aesthetics-r6gk2ijg",linkText:"Book now"})),i.createElement(s.Z,{id:"waxing",image:f,main:"Waxing",description:""},i.createElement(d.Z,{data:[{name:"Half Leg (Lower)",time:15,price:14},{name:"Half Leg (Upper)",time:30,price:16},{name:"Full Leg Wax",time:45,price:22},{name:"Full Arm Wax",time:30,price:15},{name:"Under Arm Wax (Hot)",time:15,price:12},{name:"Under Arm Wax (Strip)",time:15,price:9},{name:"Half Arm Wax",time:15,price:10},{name:"Hollywood Wax (Hot)",time:30,price:28},{name:"Ext. Bikini Wax (Hot)",time:20,price:23},{name:"Ext. Bikini Wax (Strip)",time:20,price:18},{name:"Bikini Line (Strip) ",time:15,price:10},{name:"Bikini Line Wax (Hot)",time:15,price:13},{name:"Stomach Wax",time:15,price:10},{name:"Back Wax",time:30,price:12},{name:"Upper Lip / Chin (Strip)",time:15,price:5},{name:"Upper Lip / Chin Wax (Hot)",time:15,price:7},{name:"Upper Lip/Chin (Strip) ",time:15,price:5},{name:"Upper Lip/Chin Wax (Hot) ",time:15,price:7},{name:"Side Wax (Hot)",time:15,price:9},{name:"Side Wax (Strip)",time:15,price:7},{name:"Full Face (Strip)(Ex. Brows)",time:30,price:17},{name:"Full Face Wax (Hot)(Ex. Brow)",time:30,price:24}],maxVisible:5,expandText:"View more",collapseText:"View less",linkTo:"https://fresha.com/ashk-aesthetics-r6gk2ijg",linkText:"Book now"})),i.createElement(s.Z,{id:"menstreatments",image:E,main:"Men's Treatments",description:"",reversed:!0},i.createElement(d.Z,{data:[{name:"Brow Lamination",time:60,price:50},{name:"Lash Lift",time:60,price:50},{name:"Eyebrow Shape",time:25,price:10},{name:"Full Leg",time:60,price:30},{name:"Half Leg",time:45,price:18},{name:"Full Arm Wax",time:30,price:20},{name:"Half Arm Wax",time:15,price:15},{name:"Chest & Abs (Hot)",time:60,price:37},{name:"Chest & Abs",time:30,price:25},{name:"Back & Shoulders (Hot)",time:60,price:38},{name:"Back & Shoulder Wax (Strip)",time:30,price:27}],maxVisible:5,expandText:"View more",collapseText:"View less",linkTo:"https://fresha.com/ashk-aesthetics-r6gk2ijg",linkText:"Book now"})),i.createElement(s.Z,{image:b,main:"Packages",description:""},i.createElement(d.Z,{data:[{name:"Lash Lift + Brow Lamination",price:75,oldPrice:105},{name:"Eyebrow Shape & Tint And Eyelash Tint ",price:21},{name:"Full Leg And Hollywood (Hot Wax)",price:47,oldPrice:50},{name:"Full Leg And Bikini (Hot)",price:35},{name:"Full Leg And Bikini (Strip)",price:32},{name:"Full Leg And Extended Bikini (Hot Wax)",price:45},{name:"Full Leg And Extended Bikini (Strip Wax)",price:42},{name:"Full Leg, Extended Bikini And Under Arm (Hot Wax)",price:54,oldPrice:57},{name:"Full Leg, Extended Bikini And Under Arm (Strip Wax)",price:48,oldPrice:49},{name:"Full Leg, Full Arm, Extended Bikini And Under Arm (Hot Wax)",price:64,oldPrice:72},{name:"Full Leg, Full Arm, Extended Bikini And Under Arm (Strip Wax)",price:60,oldPrice:64},{name:"Hollywood, Full leg, Full Arm, Under Arm (Hot Wax)",price:69,oldPrice:77},{name:"Hollywood, Full leg, Full Arm, Under Arm (Strip Wax)",price:67,oldPrice:74},{name:"Full Body Wax (Full Leg, Full Arm, Under Arm, Hollywood, Back And Stomach)",price:80,oldPrice:99}],maxVisible:5,expandText:"View more",collapseText:"View less",linkTo:"https://fresha.com/ashk-aesthetics-r6gk2ijg",linkText:"Book now"}))))};const u=()=>i.createElement(p.Z,{title:"Services"})}}]);
//# sourceMappingURL=component---src-pages-services-index-js-a6f020f9309301e1a8ac.js.map