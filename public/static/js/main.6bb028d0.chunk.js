(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{242:function(e,t,r){},243:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(34),s=r.n(a),i=r(42),o=r(14),l=r(13),j=r(324),d=r(326),u=r(310),b=r(317),h=r(330),p=r(18),m=r(325),x=r(332),O=r(97),g=r.n(O),f=r(329),v=r(331),y=r(160),C=r(328),w=r(2);function k(){return Object(w.jsxs)(f.a,{variant:"body2",color:"text.secondary",align:"center",children:["No Copyright \xa9 ",Object(w.jsx)(h.a,{color:"inherit",href:"https://mui.com/",children:"Store"})," ",(new Date).getFullYear(),"."]})}var S=Object(y.a)();function I(e){var t=e.setCurrentUser,r=(e.currentUser,Object(p.g)()),c=Object(n.useState)(""),a=Object(l.a)(c,2),s=a[0],i=a[1],o=Object(n.useState)(""),O=Object(l.a)(o,2),y=O[0],I=O[1],U=Object(n.useState)(""),T=Object(l.a)(U,2),N=T[0],P=T[1],D=Object(n.useState)(""),F=Object(l.a)(D,2),E=F[0],W=F[1],_=Object(n.useState)(""),z=Object(l.a)(_,2),A=(z[0],z[1]);return Object(w.jsx)(C.a,{theme:S,children:Object(w.jsxs)(v.a,{component:"main",maxWidth:"xs",children:[Object(w.jsx)(u.a,{}),Object(w.jsxs)(x.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(w.jsx)(j.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(w.jsx)(g.a,{})}),Object(w.jsx)(f.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(w.jsxs)(x.a,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault(),fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:s,last_name:y,email:N,password:E})}).then((function(e){e.ok?(console.log(e),t({first_name:s,last_name:y,email:N,password:E}),r.push("/products")):e.json().then((function(e){return A(Object.entries(e.error).flat())}))}))},sx:{mt:3},children:[Object(w.jsxs)(m.a,{container:!0,spacing:2,children:[Object(w.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(w.jsx)(b.a,{onChange:function(e){return i(e.target.value)},value:s,autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),Object(w.jsx)(m.a,{item:!0,xs:12,sm:6,children:Object(w.jsx)(b.a,{onChange:function(e){return I(e.target.value)},value:y,required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})}),Object(w.jsx)(m.a,{item:!0,xs:12,children:Object(w.jsx)(b.a,{onChange:function(e){return P(e.target.value)},value:N,required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(w.jsx)(m.a,{item:!0,xs:12,children:Object(w.jsx)(b.a,{onChange:function(e){return W(e.target.value)},value:E,required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),Object(w.jsx)(d.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(w.jsx)(m.a,{container:!0,justifyContent:"center",children:Object(w.jsx)(m.a,{item:!0,children:Object(w.jsx)(h.a,{href:"/log-in",variant:"body2",children:"Already have an account? Sign in"})})}),Object(w.jsx)(m.a,{container:!0,justifyContent:"center",children:Object(w.jsx)(h.a,{href:"/home",variant:"body2",children:"Continue as Guest"})})]})]}),Object(w.jsx)(k,{sx:{mt:5}})]})})}var U=r(37),T=r(342),N=r(345),P=r(344),D=r(343),F=r(346);function E(e){var t=e.product,r=e.currentUser,n=e.cartItems,c=e.updateCart;return Object(w.jsxs)(T.a,{sx:{maxWidth:345},children:[Object(w.jsxs)(D.a,{children:[Object(w.jsx)(h.a,{href:"/products/".concat(null===t||void 0===t?void 0:t.id),variant:"body2",children:Object(w.jsx)(P.a,{component:"img",height:"140",image:null===t||void 0===t?void 0:t.primary_image,alt:"green iguana"})}),Object(w.jsxs)(N.a,{children:[Object(w.jsx)(f.a,{gutterBottom:!0,variant:"h5",component:"div",children:null===t||void 0===t?void 0:t.name}),Object(w.jsx)(f.a,{variant:"body2",color:"text.secondary",children:null===t||void 0===t?void 0:t.description})]})]}),Object(w.jsxs)(F.a,{children:[Object(w.jsx)(d.a,{onClick:function(){var e={user_id:r.id,product_id:t.id,quantity:1};fetch("/api/product_instances",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),c(e),console.log(n)},size:"small",color:"primary",children:"Add To Cart"}),Object(w.jsx)(d.a,{href:"/products/".concat(null===t||void 0===t?void 0:t.id),size:"small",color:"primary",children:"Learn More"})]})]})}var W=function(e){var t=e.currentUser,r=e.products,n=e.setProducts,c=e.setCartItems,a=e.cartItems,s=e.updateCart;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{style:{height:"100px"}}),Object(w.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:"1rem",margin:"auto",width:"90%"},children:r&&r.map((function(e){return Object(w.jsx)(E,{currentUser:t,product:e,products:r,setProducts:n,cartItems:a,setCartItems:c,updateCart:s},e.id)}))})]})},_=r(335),z=r(319),A=r(333);function L(e){return Object(w.jsxs)(f.a,Object(U.a)(Object(U.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(w.jsx)(h.a,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]}))}var B=Object(y.a)();function R(e){var t=e.setCurrentUser,r=(e.currentUser,Object(p.g)()),c=Object(n.useState)(""),a=Object(l.a)(c,2),s=a[0],i=a[1],o=Object(n.useState)(""),O=Object(l.a)(o,2),v=O[0],y=O[1],k=Object(n.useState)([]),S=Object(l.a)(k,2),I=(S[0],S[1]),U=Object(n.useState)(!1),T=Object(l.a)(U,2),N=(T[0],T[1]);return Object(w.jsx)(C.a,{theme:B,children:Object(w.jsxs)(m.a,{container:!0,component:"main",sx:{height:"100vh"},children:[Object(w.jsx)(u.a,{}),Object(w.jsx)(m.a,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random/?shoe)",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),Object(w.jsx)(m.a,{item:!0,xs:12,sm:8,md:5,component:A.a,elevation:6,square:!0,children:Object(w.jsxs)(x.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(w.jsx)(j.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(w.jsx)(g.a,{})}),Object(w.jsx)(f.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(w.jsxs)(x.a,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault(),N(!0),fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:v})}).then((function(e){N(!1),e.ok?e.json().then((function(e){t(e),r.push("/products")})):e.json().then((function(e){return I(e.errors)}))}))},sx:{mt:1},children:[Object(w.jsx)(b.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",onChange:function(e){return i(e.target.value)},value:s,name:"email",autoComplete:"email",autoFocus:!0}),Object(w.jsx)(b.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:v,onChange:function(e){return y(e.target.value)},autoComplete:"current-password"}),Object(w.jsx)(_.a,{control:Object(w.jsx)(z.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(w.jsx)(d.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),Object(w.jsxs)(m.a,{container:!0,children:[Object(w.jsx)(m.a,{item:!0,xs:!0,children:Object(w.jsx)(h.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(w.jsx)(m.a,{item:!0,children:Object(w.jsx)(h.a,{href:"/sign-up",variant:"body2",children:"Don't have an account? Sign Up"})})]}),Object(w.jsx)(L,{sx:{mt:5}})]})]})})]})})}var q=r(4),M=r(5),Y=r(315),J=r(316),G=r(322),V=r(154),H=r.n(V),K=r(153),$=r.n(K),Q=r(150),X=r.n(Q),Z=r(151),ee=r.n(Z),te=r(152),re=[{id:1,title:"Huarache",subtitle:"Gripp",image:"https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-huarache-gripp.png?alt=media"},{id:2,title:"Air Max",subtitle:"270 P",image:"https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-270.png?alt=media"},{id:3,title:"Air Max",subtitle:"Deluxe",image:"https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-deluxe.png?alt=media"}],ne=Object(Y.a)((function(e){var t,r,n,c,a=e.palette,s=e.breakpoints,i=e.spacing;return{root:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -40%)",width:"70vw"},slide:(t={perspective:1e3,overflow:"hidden",position:"relative",paddingTop:i(8)},Object(q.a)(t,s.up("sm"),{paddingTop:i(10)}),Object(q.a)(t,s.up("md"),{paddingTop:i(14)}),t),imageContainer:{display:"block",position:"relative",zIndex:2,paddingBottom:"56.25%"},image:Object(q.a)({display:"block",position:"absolute",zIndex:10,width:"100%",height:"100%",objectFit:"cover",marginLeft:"12%"},s.up("sm"),{marginLeft:"4%"}),arrow:Object(q.a)({display:"none",position:"absolute",top:"50%",transform:"translateY(-50%)"},s.up("sm"),{display:"inline-flex"}),arrowLeft:Object(q.a)({left:0},s.up("lg"),{left:-64}),arrowRight:Object(q.a)({right:0},s.up("lg"),{right:-64}),text:(r={fontFamily:"Poppins, san-serif",fontWeight:900,position:"absolute",color:a.common.white,padding:"0 8px",transform:"rotateY(45deg)",lineHeight:1.2},Object(q.a)(r,s.up("sm"),{padding:"0 16px"}),Object(q.a)(r,s.up("md"),{padding:"0 24px"}),r),title:(n={top:20,left:"20%",height:"40%",fontSize:400,zIndex:1,background:"linear-gradient(0deg, rgba(255,255,255,0) 0%, #9c9c9c 100%)"},Object(q.a)(n,s.up("sm"),{top:40,fontSize:72}),Object(q.a)(n,s.up("md"),{top:52,fontSize:72}),n),subtitle:(c={top:60,left:"0%",height:"52%",fontSize:56,zIndex:2,background:"linear-gradient(0deg, rgba(255,255,255,0) 0%, #888888 100%)"},Object(q.a)(c,s.up("sm"),{top:112,left:"6%",fontSize:96}),Object(q.a)(c,s.up("md"),{top:128,fontSize:104}),c),indicatorContainer:{textAlign:"center"}}})),ce=function(){var e=ne();console.log(e);var t=Object(te.useArrowDarkButtonStyles)();console.log(t);var r=function(e,t){var r=e-t;return Math.abs(r)>1?{}:{transform:"rotateY(".concat(45*(1-r),"deg)")}};return Object(w.jsx)("div",{className:e.root,children:Object(w.jsx)(X.a,{renderElements:function(r){var n=r.index,c=r.onChangeIndex;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(G.a,{className:Object(M.default)(e.arrow,e.arrowLeft),classes:t,disabled:0===n,onClick:function(){return c(n-1)},children:Object(w.jsx)($.a,{})}),Object(w.jsx)(G.a,{className:Object(M.default)(e.arrow,e.arrowRight),classes:t,disabled:n===re.length-1,onClick:function(){return c(n+1)},children:Object(w.jsx)(H.a,{})}),Object(w.jsx)("div",{className:e.indicatorContainer,children:re.map((function(e,t){var r=e.id;return Object(w.jsx)(ee.a,{active:t===n,onClick:function(){return c(t)}},r)}))})]})},children:function(t){var n=t.injectStyle,c=t.fineIndex;return re.map((function(t,a){var s=t.id,i=t.title,o=t.subtitle,l=t.image;return Object(w.jsxs)("div",{className:e.slide,children:[Object(w.jsx)(J.a,{noWrap:!0,className:Object(M.default)(e.text,e.title),style:Object(U.a)(Object(U.a)({},n(a,60)),r(a,c)),children:i}),Object(w.jsx)(J.a,{noWrap:!0,className:Object(M.default)(e.text,e.subtitle),style:Object(U.a)(Object(U.a)({},n(a,40)),r(a,c)),children:o}),Object(w.jsx)("div",{className:e.imageContainer,children:Object(w.jsx)("img",{className:e.image,src:l,alt:"slide"})})]},s)}))}})})},ae=r(327),se=r(334),ie=r(338),oe=r(321),le=r(336),je=r(337),de=r(156),ue=r.n(de),be=r(155),he=r.n(be),pe=r(122),me=r.n(pe),xe=r(123),Oe=r.n(xe),ge=r(339),fe=r(340),ve=r(341),ye=r(157),Ce=r.n(ye),we=r(6),ke=r(306),Se=r(25),Ie=r(158),Ue=r.n(Ie),Te=Object(we.a)("div")((function(e){var t=e.theme;return Object(q.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(ke.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(ke.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(2),width:"auto"})}));function Ne(e){var t,r=0;for(t=0;t<e.length;t+=1)r=e.charCodeAt(t)+((r<<5)-r);var n="#";for(t=0;t<3;t+=1){n+="00".concat((r>>8*t&255).toString(16)).substr(-2)}return n}var Pe=Object(we.a)(Se.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(q.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),De=Object(we.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}));function Fe(e){var t=e.currentUser,r=e.setCurrentUser,c=e.cartItems,a=e.products,s=t?"block":"hidden";var o=Object(p.g)(),d=n.useState({top:!1,left:!1,bottom:!1,right:!1}),u=Object(l.a)(d,2),b=u[0],h=u[1],m=function(e,t){return function(r){("keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&h(Object(U.a)(Object(U.a)({},b),{},Object(q.a)({},e,t)))}};function O(){fetch("/api/logout",{method:"DELETE"}).then((function(e){e.ok&&(r(null),o.push("/log-in"))}))}var g,v;return Object(w.jsx)(x.a,{sx:{flexGrow:1},children:Object(w.jsx)(ge.a,{style:{width:"100vw",zIndex:"10",display:{showNav:s}},children:Object(w.jsxs)(fe.a,{children:[Object(w.jsx)(j.a,Object(U.a)({},(v="".concat(t.first_name," ").concat(t.last_name),{sx:{bgcolor:Ne(v)},children:"".concat(v.split(" ")[0][0]).concat(v.split(" ")[1][0])}))),Object(w.jsx)(ve.a,{size:"large",edge:"end",color:"inherit","aria-label":"open drawer",sx:{mr:2},style:{padding:"20px"},children:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Ce.a,{variant:"outlined",style:{left:"5vw",top:"0px"},onClick:m("left",!0)}),Object(w.jsx)(ae.a,{anchor:"left",open:b.left,onClose:m("left",!1),children:(g="left",Object(w.jsxs)(x.a,{sx:{width:"top"===g||"bottom"===g?"auto":250},role:"presentation",onClick:m(g,!1),onKeyDown:m(g,!1),children:[Object(w.jsxs)(se.a,{children:[Object(w.jsxs)(oe.a,{button:!0,component:i.b,to:"/products",children:[Object(w.jsx)(le.a,{children:Object(w.jsx)(he.a,{})}),Object(w.jsx)(je.a,{primary:"Products"})]}),Object(w.jsxs)(oe.a,{button:!0,component:i.b,to:"/cart",children:[Object(w.jsx)(le.a,{children:Object(w.jsx)(me.a,{})}),Object(w.jsx)(je.a,{primary:"Cart"})]}),Object(w.jsxs)(oe.a,{button:!0,children:[Object(w.jsx)(le.a,{children:Object(w.jsx)(ue.a,{})}),Object(w.jsx)(je.a,{primary:"Checkout"})]},"Checkout")]}),Object(w.jsx)(ie.a,{}),Object(w.jsxs)(se.a,{children:[Object(w.jsxs)(oe.a,{button:!0,onClick:O,children:[Object(w.jsx)(le.a,{children:Object(w.jsx)(Oe.a,{})}),Object(w.jsx)(je.a,{primary:"Sign Out"})]},"Sign Out"),Object(w.jsxs)(oe.a,{button:!0,onClick:O,children:[Object(w.jsx)(le.a,{children:Object(w.jsx)(Oe.a,{})}),Object(w.jsx)(je.a,{primary:"Create Account"})]},"Sign Up")]})]}))})]})}),Object(w.jsx)(f.a,{children:"Dan's Store: A Place to Buy Things"}),Object(w.jsxs)(Te,{style:{position:"absolute",right:"100px"},children:[Object(w.jsx)(De,{children:Object(w.jsx)(Ue.a,{})}),Object(w.jsx)(Pe,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]}),Object(w.jsxs)(ve.a,{size:"large",edge:"end",color:"inherit","aria-label":"open drawer",sx:{mr:2},style:{position:"absolute",right:"20px"},children:[Object(w.jsx)(me.a,{onClick:m("right",!0)}),Object(w.jsx)(ae.a,{anchor:"right",open:b.right,onClose:m("right",!1),children:function(e){return Object(w.jsx)(x.a,{sx:{width:"top"===e||"bottom"===e?"auto":250},role:"presentation",onClick:m(e,!1),onKeyDown:m(e,!1),children:c?c.map((function(e){var t,r=(t=e.product_id,a.filter((function(e){return t===e.id})));return Object(w.jsxs)("p",{children:[r[0].name," ",r[0].price]})})):Object(w.jsx)("h1",{children:"nothing in cart"})})}("right")})]})]})})})}var Ee=function(){return Object(w.jsx)("div",{children:Object(w.jsx)(ce,{})})},We=r(84),_e=r.p+"static/media/photo.c791112d.jpeg",ze={fontFamily:"sans-serif",textAlign:"center",marginTop:"15vh",width:"100%",marginLeft:"15vw",display:"flex"},Ae={background:"white",borderRadius:"10px",position:"absolute",top:"70%",left:"50%",transform:"translate(-50%,-50%)"};var Le=function(e){e.currentUser;var t=Object(p.h)().product,r=Object(n.useState)({}),c=Object(l.a)(r,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){fetch("/api/products/".concat(t)).then((function(e){return e.json()})).then((function(e){return s(e)}))}),[t]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{children:Object(w.jsxs)("div",{style:ze,children:[Object(w.jsx)(We.Parallax,{bgImage:a.primary_image,strength:500,style:{borderRadius:"10%"},children:Object(w.jsx)("div",{style:{height:500,width:"30vw"},children:Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:a.name}),Object(w.jsxs)(d.a,{style:Ae,variant:"outlined",children:["Add ",a.name," to Cart"]})]})})}),Object(w.jsxs)("div",{style:{marginLeft:"10vw",marginTop:"10%",width:"20vw"},children:[Object(w.jsx)("h2",{children:a.name}),Object(w.jsx)("p",{style:{marginTop:"30px"},children:"Description:"}),Object(w.jsx)("p",{style:{},children:a.description}),Object(w.jsx)("p",{style:{marginTop:"10px"},children:"Price:"}),Object(w.jsxs)("p",{style:{},children:["$",a.price]})]})]})}),Object(w.jsxs)("div",{style:{fontFamily:"sans-serif",textAlign:"center",marginTop:"10vh",width:"auto",height:"100vh"},children:[Object(w.jsx)(We.Parallax,{bgImage:[_e],strength:200,renderLayer:function(e){return Object(w.jsx)("div",{children:Object(w.jsx)("div",{style:{position:"absolute",background:"rgba(255, 125, 0, ".concat(1.2*e,")"),left:"50%",top:"50%",borderRadius:"50%",transform:"translate(-50%,-50%)",width:"20%",height:100}})})},children:Object(w.jsx)("div",{style:{height:500},children:Object(w.jsx)("div",{style:Ae,children:"Back To Store"})})}),Object(w.jsx)(We.Parallax,{strength:500,children:Object(w.jsx)(We.Background,{className:"custom-bg",children:Object(w.jsx)("div",{style:{height:2e3,width:2e3,backgroundImage:"url('https://i.imgur.com/8CV5WAB.png')"}})})}),Object(w.jsx)("div",{style:{height:500}})]})]})},Be=r(348),Re=r(352),qe=r(351),Me=r(347),Ye=r(349),Je=r(350),Ge=r(159),Ve=r.n(Ge);function He(e){var t=e.cartItems,r=(e.setCartItems,e.products,e.getProductDetails);e.handleDelete;return Object(w.jsx)(Me.a,{style:{marginTop:"80px",maxWidth:500,marginLeft:"10vw"},component:A.a,children:Object(w.jsxs)(Be.a,{sx:{maxWidth:500},"aria-label":"simple table",children:[Object(w.jsx)(Ye.a,{children:Object(w.jsxs)(Je.a,{children:[Object(w.jsx)(qe.a,{children:"Product"}),Object(w.jsx)(qe.a,{children:"Price"}),Object(w.jsx)(qe.a,{children:"Remove"})]})}),Object(w.jsx)(Re.a,{children:t.map((function(e){console.log(e.id);var t=r(e.product_id);return console.log(t),Object(w.jsxs)(Je.a,{children:[Object(w.jsx)(qe.a,{component:"th",scope:"row",children:t[0].name}),Object(w.jsx)(qe.a,{children:t[0].price}),Object(w.jsx)(qe.a,{children:Object(w.jsx)(ve.a,{onClick:function(){fetch("/api/product_instances/".concat(e.id),{method:"DELETE"}).then((function(e){e.ok&&console.log("deleted")}))},id:e.id,value:e,"aria-label":"delete",children:Object(w.jsx)(Ve.a,{sx:{color:"red"}})})})]})}))})]})})}var Ke=function(e){var t=e.currentUser,r=e.products,c=e.cartItems,a=e.setCartItems,s=e.cartTotal,i=e.handleDelete;return Object(n.useEffect)((function(){fetch("/api/me").then((function(e){e.ok&&e.json().then((function(e){return a(e.product_instances)}))}))}),[t,a]),Object(w.jsxs)("div",{style:{display:"flex"},children:[Object(w.jsx)("div",{children:Object(w.jsx)(He,{getProductDetails:function(e){return r.filter((function(t){return e===t.id}))},products:r,cartItems:c,setCartItems:a,handleDelete:i})}),Object(w.jsxs)("div",{style:{marginTop:"40vh",marginLeft:"35vw"},children:[Object(w.jsxs)("h1",{style:{},children:["Total $",s,".00"]}),Object(w.jsx)("h1",{children:"Checkout Button"})]})]})};r(242);var $e=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)([]),s=Object(l.a)(a,2),i=s[0],j=s[1],d=Object(n.useState)([]),u=Object(l.a)(d,2),b=u[0],h=u[1],m=Object(n.useState)(0),x=Object(l.a)(m,2),O=x[0],g=x[1];function f(e){return i.filter((function(t){return e===t.id}))}return Object(n.useEffect)((function(){r&&fetch("/api/products").then((function(e){return e.json()})).then((function(e){return j(e)}))}),[r]),Object(n.useEffect)((function(){r&&fetch("/api/me").then((function(e){e.ok&&e.json().then((function(e){return h(e.product_instances)}))}))}),[r]),Object(n.useEffect)((function(){fetch("/api/me").then((function(e){e.ok&&e.json().then((function(e){return c(e)}))}))}),[]),Object(n.useEffect)((function(){var e,t=[];b.map((function(r){var n=f(r.product_id);return t.push(n[0].price),e=t.reduce((function(e,t){return e+t}),0)})),g(e)}),[b,f]),console.log(O),r?r?Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)(p.d,{children:[Object(w.jsxs)(p.b,{exact:!0,path:"/",children:[Object(w.jsx)(Fe,{setCurrentUser:c,cartItems:b,currentUser:r,setCartItems:h,products:i}),Object(w.jsx)(p.a,{to:"/products",setProducts:j,products:i,currentUser:r})]}),Object(w.jsxs)(p.b,{exact:!0,path:"/home",children:[Object(w.jsx)(Fe,{setCurrentUser:c,cartItems:b,currentUser:r,setCartItems:h,products:i}),Object(w.jsx)(Ee,{})]}),Object(w.jsx)(p.b,{exact:!0,path:"/sign-up",children:Object(w.jsx)(I,{currentUser:r,cartItems:b,setCurrentUser:c,setCartItems:h})}),Object(w.jsx)(p.b,{path:"/log-in",children:Object(w.jsx)(R,{currentUser:r,cartItems:b,setCurrentUser:c})}),Object(w.jsxs)(p.b,{exact:!0,path:"/products",children:[Object(w.jsx)(Fe,{setCurrentUser:c,cartItems:b,currentUser:r,setCartItems:h,products:i}),Object(w.jsx)(W,{products:i,currentUser:r,setProducts:j,cartItems:b,setCartItems:h,updateCart:function(e){h([e].concat(Object(o.a)(b)))}})]}),Object(w.jsxs)(p.b,{exact:!0,currentUser:r,path:"/products/:product",children:[Object(w.jsx)(Fe,{setCurrentUser:c,cartItems:b,currentUser:r,setCartItems:h,products:i}),Object(w.jsx)(Le,{})]}),Object(w.jsxs)(p.b,{exact:!0,path:"/cart",children:[Object(w.jsx)(Fe,{setCurrentUser:c,cartItems:b,currentUser:r,setCartItems:h,products:i}),Object(w.jsx)(Ke,{products:i,cartItems:b,setCartItems:h,currentUser:r,cartTotal:O,handleDelete:function(e){h(b.filter((function(t){return t!==e})))}})]})]})}):void 0:Object(w.jsxs)(p.d,{children:[Object(w.jsx)(p.b,{exact:!0,path:"/sign-up",children:Object(w.jsx)(I,{currentUser:r,setCurrentUser:c})}),Object(w.jsx)(p.b,{path:"/log-in",children:Object(w.jsx)(R,{currentUser:r,setCurrentUser:c})})]})};s.a.render(Object(w.jsx)(i.a,{children:Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)($e,{})})}),document.getElementById("root"))}},[[243,1,2]]]);
//# sourceMappingURL=main.6bb028d0.chunk.js.map