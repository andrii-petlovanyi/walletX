"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[420],{2423:function(n,t,e){var i=e(9165),r=e(184);t.Z=function(n){var t=n.children,e=n.delay,o=void 0===e?0:e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.E.div,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:o},mb:6,children:t})})}},1760:function(n,t,e){e.d(t,{Z:function(){return u}});var i,r,o,a,c=e(2231),l=(e(2791),e(9434)),d=e(9869),s=e(168),p=e(4313),x=e(8420),f={BalanceWrap:p.ZP.div(i||(i=(0,s.Z)(["\n  padding-top: 8px;\n  padding-left: 40px;\n  padding-bottom: 11px;\n  background-color: var(--main-bg-cl);\n  border-radius: 30px;\n  max-width: 280px;\n  margin: 0 auto;\n  margin-top: 12px;\n  margin-bottom: 32px;\n\n  @media "," {\n    min-width: 336px;\n    margin: 0;\n  }\n  @media "," {\n    min-width: 395px;\n    margin-bottom: 32px;\n  }\n"])),x.U.tablet,x.U.desktop),Title:p.ZP.p(r||(r=(0,s.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n  text-transform: uppercase;\n  color: #a6a6a6;\n"]))),CurrentBalance:p.ZP.div(o||(o=(0,s.Z)(["\n  display: flex;\n  gap: 3px;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 30px;\n  line-height: 1.5;\n  color: var(--main-text-cl);\n"]))),Text:p.ZP.p(a||(a=(0,s.Z)(["\n  font-weight: 700;\n"])))},h=e(184),u=function(){var n=f.BalanceWrap,t=f.Title,e=f.Text,i=f.CurrentBalance,r=(0,l.v9)(d.Z.getUserBalance);return(0,h.jsxs)(n,{children:[(0,h.jsx)(t,{children:"your balance"}),(0,h.jsxs)(i,{children:[(0,h.jsx)("span",{children:"\u20b4"}),(0,h.jsx)(e,{children:(0,c.z)(r)})]})]})}},8420:function(n,t,e){e.d(t,{U:function(){return s}});var i,r,o=e(168),a=e(4313),c="480px",l="768px",d="1280px",s={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(c,")"),tablet:"(min-width: ".concat(l,")"),desktop:"(min-width: ".concat(d,")")},p={LayoutStyled:a.ZP.div(i||(i=(0,o.Z)(["\n  position: relative;\n"]))),Wrapper:a.ZP.div(r||(r=(0,o.Z)(["\n  width: 100%;\n  min-height: calc(100vh - 70px);\n  margin: 0 auto;\n  padding: 12px 20px 0 20px;\n  display: block;\n  @media "," {\n    width: 480px;\n  }\n\n  @media "," {\n    width: 768px;\n    min-height: calc(100vh - 85px);\n    padding: 32px 32px 84px 32px;\n  }\n\n  @media "," {\n    width: 1280px;\n    padding: 40px 16px 63px 16px;\n    display: flex;\n  }\n"])),s.mobileM,s.tablet,s.desktop)};t.Z=p},6215:function(n,t,e){var i=e(9085);t.Z=function(n){return i.Am.error(n,{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},2231:function(n,t,e){e.d(t,{z:function(){return i}});var i=function(n){if(!n)return"0.00";var t=n.toFixed(2).toString().slice(-6),e=n.toFixed(2).toString().slice(-9,-6),i=n.toFixed(2).toString().slice(-12,-9),r=n.toFixed(2).toString().slice(-15,-12),o=n.toFixed(2).toString().slice(-18,-15);return o?"".concat(o," ").concat(r," ").concat(i," ").concat(e," ").concat(t):r?"".concat(r," ").concat(i," ").concat(e," ").concat(t):i?"".concat(i," ").concat(e," ").concat(t):e?"".concat(e," ").concat(t):t}},494:function(n,t,e){e.r(t),e.d(t,{default:function(){return Dt}});var i,r,o,a,c,l,d=e(9085),s=(e(5462),e(1413)),p=e(5861),x=e(9439),f=e(4687),h=e.n(f),u=e(2791),g=e(9434),m=e(4323),b=e(3479),Z=e(71),y=e(8880),v=e(9335),j=function(n){return n.category.category},w=e(9869),C=function(n){return n.transaction.error},P=e(2142),k=e(168),E=e(4313),z=E.ZP.div(i||(i=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n"]))),S=E.ZP.label(r||(r=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n"]))),D=E.ZP.div(o||(o=(0,k.Z)(["\n  position: relative;\n  width: 80px;\n  height: 40px;\n  margin-right: 24px;\n  margin-left: 24px;\n  background: var(--main-bg-cl);\n  border: 1px solid #e0e0e0;\n  border-radius: 30px;\n  transition: 300ms all;\n  &:before {\n    transition: 300ms all;\n    content: '';\n    /* display: flex;\n    align-items: center;\n    justify-content: center; */\n    position: absolute;\n    top: 50%;\n    width: 44px;\n    height: 44px;\n    background: ",";\n    background-image: ",";\n    background-repeat: no-repeat;\n    background-size: 50%;\n    background-position: 50% 50%;\n    box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);\n    border-radius: 50px;\n    transform: translate(0, -50%);\n  }\n"])),(function(n){return n.switchColor}),(function(n){return n.backgroundImage})),F=E.ZP.input(a||(a=(0,k.Z)(["\n  display: none;\n  opacity: 0;\n  position: absolute;\n  width: 80px;\n  height: 40px;\n  margin-right: 24px;\n  margin-left: 24px;\n  border: 1px solid #e0e0e0;\n  border-radius: 30px;\n\n  &:checked + "," {\n    background-color: var(--main-bg-cl);\n    &:before {\n      transform: translate(40px, -50%);\n    }\n  }\n"])),D),I=E.ZP.p(c||(c=(0,k.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.5;\n  text-align: right;\n  color: ",";\n"])),(function(n){return n.incomeColor})),N=E.ZP.p(l||(l=(0,k.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.5;\n  text-align: right;\n  color: ",";\n"])),(function(n){return n.expenseColor}));var M=e.p+"static/media/plus.6194a661e88e1e5113d28da2398b6404.svg";var U=e.p+"static/media/minus.e0cb843d1ff381a83ce6550df5260e39.svg",B=e(184),_=function(n){var t=n.checked,e=n.setChecked,i=t?"#e0e0e0":"#24cca7",r=t?"#ff6596":"#e0e0e0";return(0,B.jsxs)(z,{children:[(0,B.jsx)(I,{incomeColor:i,children:"Income"}),(0,B.jsxs)(S,{htmlFor:"checkbox",children:[(0,B.jsx)(F,{id:"checkbox",name:"checkbox",checked:t,type:"checkbox",onChange:function(n){return e(n.target.checked)}}),(0,B.jsx)(D,{switchColor:t?"#ff6596":"#24cca7",backgroundImage:"url(".concat(t?U:M,")")})]}),(0,B.jsx)(N,{expenseColor:r,children:"Expense"})]})},A=(e(1778),e(1799)),Y=e.n(A),T=e(2426),O=e.n(T);var L,W,R,q,H,X,V,G,J,K,Q,$,nn,tn,en,rn,on,an,cn,ln,dn,sn,pn,xn,fn,hn,un,gn,mn,bn,Zn,yn,vn,jn,wn,Cn,Pn,kn,En,zn,Sn,Dn=e.p+"static/media/symbol-defs.832d5eba262413daf836621053910f07.svg",Fn=e(8420),In=E.ZP.label(L||(L=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: '32px';\n  @media "," {\n    width: 181px;\n  }\n\n  & .rdt {\n    width: 100%;\n    height: 32px;\n    @media "," {\n      width: 181px;\n    }\n  }\n  & .form-control {\n    width: 100%;\n    height: 32px;\n    padding: 8px 20px;\n    border-top: none;\n    border-right: none;\n    border-left: none;\n    border-bottom: 1px solid #e0e0e0;\n    font-family: 'Circe';\n    font-style: 'normal';\n    font-weight: '400';\n    font-size: '18px';\n    line-height: '1.5';\n    color: 'var(--main-text-cl)';\n    @media "," {\n      width: 157px;\n      margin-right: 0;\n    }\n  }\n"])),Fn.U.tablet,Fn.U.tablet,Fn.U.tablet),Nn=E.ZP.svg(W||(W=(0,k.Z)(["\n  width: 24px;\n  height: 24px;\n  fill: var(--accent-active-cl);\n"]))),Mn=function(n){var t=n.date,e=n.setDate,i=n.setError,r=O()().subtract(0,"day"),o=O()().subtract(1,"year"),a=(0,u.useRef)(null);return(0,B.jsxs)(In,{children:[(0,B.jsx)(Y(),{name:"date",dateFormat:"DD.MM.YYYY",timeFormat:!1,value:t,isValidDate:function(n){return n.isBefore(r)&&n.isAfter(o)},onChange:function(n){e(n._d),i((function(n){return(0,s.Z)((0,s.Z)({},n),{},{datePick:null})})),setTimeout((function(){return a.current._closeCalendar()}),0)},closeOnSelect:!0,ref:a}),(0,B.jsx)(Nn,{children:(0,B.jsx)("use",{href:Dn+"#icon-date"})})]})},Un=(E.ZP.img(R||(R=(0,k.Z)(["\n  width: 20px;\n  height: 20px;\n  color: white;\n  margin: auto;\n"]))),E.ZP.button(q||(q=(0,k.Z)(["\n  cursor: pointer;\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  width: 44px;\n  height: 44px;\n  background-color: #24cca7;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & svg {\n    font-size: 30px;\n    color: white;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: #04ac97;\n  }\n  @media screen and (min-width: 1280px) {\n    right: 40px;\n    bottom: 40px;\n\n    [data-scroll-lock] & {\n      right: 57px;\n    }\n  }\n"])))),Bn=E.ZP.div(H||(H=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 62%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: '100vw';\n  height: '100vh';\n  padding: 20px;\n  background-color: var(--main-bg-cl);\n  @media "," {\n    top: 50%;\n    width: 540px;\n    height: 603px;\n    border-radius: 20px;\n    padding: 0;\n  }\n"])),Fn.U.tablet),_n=E.ZP.h1(X||(X=(0,k.Z)(["\n  margin-bottom: 40px;\n  font-family: 'Poppins';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 1.5;\n  text-align: center;\n  color: var(--main-text-cl);\n  @media "," {\n    font-size: 30px;\n    line-height: 1.5;\n  }\n"])),Fn.U.tablet),An=E.ZP.input(V||(V=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  width: 100%;\n  height: 32px;\n  padding: 8px 20px;\n  font-family: 'Circe';\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.5;\n  color: 'var(--main-text-cl)';\n  border-top: inherit;\n  border-right: inherit;\n  border-left: inherit;\n  border-bottom: 1px solid #e0e0e0;\n  cursor: pointer;\n  &::placeholder {\n    color: var(--secondary-text-cl);\n  }\n  @media "," {\n    width: 190px;\n    margin: 0;\n    margin-right: 30px;\n  }\n"])),Fn.U.tablet),Yn=E.ZP.div(G||(G=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  @media "," {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    width: 394px;\n    margin-top: 40px;\n  }\n"])),Fn.U.tablet),Tn=E.ZP.div(J||(J=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 40px;\n"]))),On=E.ZP.p(K||(K=(0,k.Z)(["\n  padding: 5px 20px;\n  color: red;\n"]))),Ln=E.ZP.textarea(Q||(Q=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin: 0 auto;\n  margin-bottom: 40px;\n  width: 100%;\n  height: 84px;\n  resize: none;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.5;\n  color: var(--main-text-cl);\n  border-top: inherit;\n  border-right: inherit;\n  border-left: inherit;\n  border-bottom: 1px solid #e0e0e0;\n  cursor: pointer;\n  &::placeholder {\n    color: var(--secondary-text-cl);\n  }\n  @media "," {\n    max-width: 394px;\n    max-height: 32px;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n"])),Fn.U.tablet),Wn=E.ZP.div($||($=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Rn=E.ZP.button(nn||(nn=(0,k.Z)(["\n  width: 300px;\n  height: 50px;\n  border: 1px solid var(--accent-active-cl);\n  border-radius: 20px;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.5;\n  text-align: center;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  background-color: ",";\n  color: ",";\n  border-color: ",";\n  &:hover,\n  &:focus,\n  &:active {\n    background-color: ",";\n    color: ",";\n    border-color: ",";\n  }\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"])),(function(n){return"button__add"===n.className?"#24cca7":"#ffffff"}),(function(n){return"button__add"===n.className?"#ffffff":"#4a56e2"}),(function(n){return"button__add"===n.className?"#24cca7":"#4a56e2"}),(function(n){return"button__add"===n.className?"#14BC97":"#ffffff"}),(function(n){return"button__add"!==n.className?"#14BC97":"#ffffff"}),(function(n){return n.className,"#14BC97"})),qn=E.ZP.div(tn||(tn=(0,k.Z)(["\n  @media "," {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.25);\n  }\n"])),Fn.U.tablet),Hn=E.ZP.button(en||(en=(0,k.Z)(["\n  position: absolute;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  top: 15px;\n  right: 15px;\n  width: 20px;\n  height: 20px;\n  background: none;\n  font-size: 20px;\n  border: none;\n  @media "," {\n    top: 20px;\n    right: 20px;\n    width: 30px;\n    height: 30px;\n    font-size: 25px;\n  }\n"])),Fn.U.tablet),Xn=E.ZP.div(rn||(rn=(0,k.Z)(["\n  height: 48px;\n"]))),Vn={container:function(n){return(0,s.Z)({},n)},control:function(n){return(0,s.Z)((0,s.Z)({},n),{},{width:"100%",borderColor:"#ffffff",borderBottom:"1px solid #E0E0E0",cursor:"pointer"})},valueContainer:function(n){return(0,s.Z)((0,s.Z)({},n),{},{padding:"8px 20px",margin:0})},input:function(n){return(0,s.Z)((0,s.Z)({},n),{},{padding:0,margin:0})},menu:function(n){return(0,s.Z)((0,s.Z)({},n),{},{overflow:"hidden",backgroundColor:"rgba(255, 255, 255, 0.7)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(25px)",borderRadius:20,outline:0})},placeholder:function(n){return(0,s.Z)((0,s.Z)({},n),{},{padding:0,margin:0,color:"#bdbdbd"})},option:function(n,t){var e=t.isFocused,i=t.isSelected;return(0,s.Z)((0,s.Z)({},n),{},{color:e||i?"#FF6596":void 0,backgroundColor:e||i?"#ffffff":void 0,cursor:"pointer",borderRadius:e||i?"0":void 0,fontFamily:"Circe",fontWeight:e||i?"700":"400",fontSize:18,lineHeight:1.5,display:"flex",alignItems:"center"})}},Gn=e(6215),Jn=function(n){var t=n.className,e=void 0===t?"":t,i=(0,u.useState)(!0),r=(0,x.Z)(i,2),o=r[0],a=r[1],c=(0,u.useState)(),l=(0,x.Z)(c,2),f=l[0],k=l[1],E=(0,u.useState)(""),z=(0,x.Z)(E,2),S=z[0],D=z[1],F=(0,u.useState)(""),I=(0,x.Z)(F,2),N=I[0],M=I[1],U=(0,u.useState)(new Date),A=(0,x.Z)(U,2),Y=A[0],T=A[1],O=(0,u.useState)(!1),L=(0,x.Z)(O,2),W=L[0],R=L[1],q=(0,u.useState)({select:!1,balance:!1,datePick:!1}),H=(0,x.Z)(q,2),X=H[0],V=H[1],G=(0,g.v9)(j),J=(0,g.v9)(w.Z.getIsLoggedIn),K=(0,g.v9)(C),Q=(0,g.v9)(w.Z.getUserBalance),$=(0,g.I0)(),nn=G.filter((function(n){return"EXPENSE"===n.type})).map((function(n){return{value:n.name,label:n.name}})),tn=function(n){return G.find((function(t){return t.name===n}))};(0,u.useEffect)((function(){J&&$((0,v.Z)())}),[$,J]);var en=function(){var n=(0,p.Z)(h().mark((function n(){var t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t={select:!1,balance:!1,datePick:!1},!o||f){n.next=5;break}return n.next=4,V((function(n){return(0,s.Z)((0,s.Z)({},n),{},{select:"Select a category, please"})}));case 4:t.select=!0;case 5:if(!1!==((e=Y)instanceof Date&&!isNaN(e))){n.next=9;break}return n.next=8,V((function(n){return(0,s.Z)((0,s.Z)({},n),{},{datePick:"Date format DD.MM.YYYY"})}));case 8:t.datePick=!0;case 9:if(!(o&&S>Q)){n.next=13;break}return n.next=12,V((function(n){return(0,s.Z)((0,s.Z)({},n),{},{balance:"Unavailable amount "})}));case 12:t.datePick=!0;case 13:return n.abrupt("return",t);case 14:case"end":return n.stop()}var e}),n)})));return function(){return n.apply(this,arguments)}}(),rn=function(){var n=(0,p.Z)(h().mark((function n(t){var e,i,r,a;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,en();case 3:if(!((e=n.sent).select||e.datePick||e.balance)){n.next=6;break}return n.abrupt("return");case 6:i=tn(o?f.value:"Income"),r=Number(S).toFixed(2),a={amount:"EXPENSE"===i.type?-1*r:r,transactionDate:Y,type:i.type,categoryId:i.id,comment:N},$(y.Z.createTransaction(a)),on(),R(!1);case 12:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),on=function(){k(),D(""),M(""),T(new Date),a(!0),V({select:!1,balance:!1,datePick:!1})},an=(0,u.useCallback)((function(n){"Escape"===n.code&&(on(),R(!W))}),[W]);return(0,u.useEffect)((function(){return window.addEventListener("keydown",an),function(){window.removeEventListener("keydown",an)}}),[an]),(0,B.jsxs)(B.Fragment,{children:[K&&(0,d.Am)("Error!"),!W&&(0,B.jsx)(Un,{"aria-label":"add transaction",onClick:function(){$((0,P.Y)()),R(!W)},children:(0,B.jsx)(b.b9W,{})}),W&&(0,B.jsx)(qn,{onClick:function(n){n.currentTarget===n.target&&(on(),R(!W))},children:(0,B.jsxs)(Bn,{children:[(0,B.jsx)(Hn,{type:"button",onClick:function(){on(),R(!W)},children:(0,B.jsx)(Z.Lp2,{})}),(0,B.jsxs)("form",{onSubmit:rn,children:[(0,B.jsx)(_n,{children:"Add transaction"}),(0,B.jsx)(_,{checked:o,setChecked:a}),o?(0,B.jsxs)(Tn,{children:[(0,B.jsx)(m.ZP,{placeholder:"Select a category",styles:Vn,options:nn,value:f||"",onChange:function(n){k(n),V((function(n){return(0,s.Z)((0,s.Z)({},n),{},{select:null})}))},required:!0}),(0,B.jsx)(On,{children:X.select})]}):(0,B.jsx)(Xn,{}),(0,B.jsxs)(Yn,{htmlFor:"balance",children:[(0,B.jsxs)(Tn,{children:[(0,B.jsx)(An,{type:"text",name:"balance",id:"balance",placeholder:"0.00",value:S,required:!0,onChange:function(n){return function(n){var t=n.target.value.replace(/[a-zA-Z]/g,"");D(t)}(n)}}),(0,B.jsx)(On,{children:X.balance})]}),(0,B.jsxs)(Tn,{children:[(0,B.jsx)(Mn,{date:Y,setDate:T,setError:V}),(0,B.jsx)(On,{children:X.datePick})]})]}),(0,B.jsx)(Ln,{placeholder:"Comment",name:"comment",value:N,onChange:function(n){return function(n){var t=n.target,e=t.name,i=t.value;if(i.length>150)return(0,Gn.Z)("Comment must be max length 150 symbols");"comment"===e&&M((function(){return i}))}(n)}}),(0,B.jsxs)(Wn,{children:[(0,B.jsx)(Rn,{type:"submit",className:"button__add",children:"Add"}),(0,B.jsx)(Rn,{type:"button",className:e,onClick:function(){on()},children:"Clear"})]})]})]})})]})},Kn=e(3433),Qn=function(n,t){return(0,Kn.Z)(n).sort((function(n,t){return O()(t.transactionDate)-O()(n.transactionDate)}))},$n=E.ZP.table(on||(on=(0,k.Z)(["\n  width: 704px;\n  /* height: 250px; */\n  border-collapse: collapse;\n  overflow: auto;\n"]))),nt=E.ZP.tr(an||(an=(0,k.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  text-align: center;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.5;\n  color: #000000;\n  background: #ffffff;\n  border-width: 0;\n  border-color: white;\n"]))),tt=E.ZP.th(cn||(cn=(0,k.Z)(["\n  width: 75px;\n  border-top-left-radius: 30px;\n  border-bottom-left-radius: 30px;\n  padding-top: 15px;\n  padding-bottom: 16px;\n"]))),et=E.ZP.th(ln||(ln=(0,k.Z)(["\n  width: 90px;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 16px;\n"]))),it=E.ZP.th(dn||(dn=(0,k.Z)(["\n  width: 139px;\n  text-align: left;\n  padding-top: 15px;\n  padding-bottom: 16px;\n"]))),rt=E.ZP.th(sn||(sn=(0,k.Z)(["\n  width: 117px;\n  text-align: left;\n  padding-top: 15px;\n  padding-bottom: 16px;\n"]))),ot=E.ZP.th(pn||(pn=(0,k.Z)(["\n  width: 101px;\n  text-align: right;\n  padding-top: 15px;\n  padding-bottom: 16px;\n"]))),at=E.ZP.th(xn||(xn=(0,k.Z)(["\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 30px;\n  border-color: #ffffff;\n  min-width: 141px;\n  text-align: right;\n  padding-right: 20px;\n  padding-top: 15px;\n  padding-bottom: 16px;\n"]))),ct=E.ZP.tr(fn||(fn=(0,k.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #000000;\n  border-bottom: 1px solid #dcdcdf;\n\n  :not(:last-child) {\n    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);\n  }\n  :last-child {\n    border-bottom: 0;\n  }\n"]))),lt=E.ZP.td(hn||(hn=(0,k.Z)(["\n  text-align: right;\n"]))),dt=E.ZP.td(un||(un=(0,k.Z)(["\n  text-align: center;\n"]))),st=E.ZP.td(gn||(gn=(0,k.Z)(["\n  text-align: left;\n"]))),pt=E.ZP.td(mn||(mn=(0,k.Z)(["\n  text-align: left;\n  position: relative;\n"]))),xt=E.ZP.td(bn||(bn=(0,k.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.5;\n  text-align: right;\n\n  color: ",";\n"])),(function(n){return"INCOME"===n.type?"#24CCA7":"#ff6596"})),ft=E.ZP.td(Zn||(Zn=(0,k.Z)(["\n  text-align: right;\n  padding-right: 28px;\n"]))),ht=e(2271),ut=(e(4992),function(){var n=(0,g.I0)(),t=(0,g.v9)((function(n){return n.transaction.transactions})),e=(0,g.v9)((function(n){return n.category.category}));if((0,u.useEffect)((function(){n(y.Z.getTransactions())}),[n]),0!==e.length&&0!==t.length){var i=Qn(t);return(0,B.jsxs)($n,{children:[(0,B.jsx)("thead",{children:(0,B.jsxs)(nt,{children:[(0,B.jsx)(tt,{children:"Date"}),(0,B.jsx)(et,{children:"Type"}),(0,B.jsx)(it,{children:"Category"}),(0,B.jsx)(rt,{children:"Comment"}),(0,B.jsx)(ot,{children:"Sum"}),(0,B.jsx)(at,{children:"Balance"})]})}),(0,B.jsx)("tbody",{children:null===i||void 0===i?void 0:i.map((function(n){var t;return(0,B.jsxs)(ct,{children:[(0,B.jsx)(lt,{children:O()(n.transactionDate).format("DD.MM.YY")}),(0,B.jsx)(dt,{children:"INCOME"===n.type?"+":"-"}),(0,B.jsx)(st,{children:null===e||void 0===e?void 0:e.find((function(t){return t.id===n.categoryId})).name}),(null===n||void 0===n||null===(t=n.comment)||void 0===t?void 0:t.length)>14?(0,B.jsx)(ht.ZP,{content:n.comment,children:(0,B.jsx)(pt,{children:n.comment.substr(0,14)+"..."})}):(0,B.jsx)(pt,{children:n.comment}),(0,B.jsx)(xt,{type:n.type,children:n.amount.toFixed(2)}),(0,B.jsx)(ft,{children:n.balanceAfter.toFixed(2)})]},n.id)}))})]})}}),gt=E.ZP.table(yn||(yn=(0,k.Z)(["\n  width: 280px;\n  height: 282px;\n  background: #ffffff;\n  border-collapse: collapse;\n  margin-bottom: 8px;\n\n  border-radius: 10px;\n"]))),mt=E.ZP.tr(vn||(vn=(0,k.Z)(["\n  :not(:last-child) {\n    border-bottom: 1px solid #dcdcdf;\n  }\n"]))),bt=E.ZP.td(jn||(jn=(0,k.Z)(["\n  --trans-color: ",";\n  width: 5px;\n  background-color: var(--trans-color);\n"])),(function(n){return"INCOME"===n.type?"#24CCA7":"#ff6596"})),Zt=E.ZP.td(wn||(wn=(0,k.Z)(["\n  --trans-color: ",";\n  width: 5px;\n  background-color: var(--trans-color);\n  border-top-left: 1px solid var(--trans-color);\n  border-top-left-radius: 10px;\n"])),(function(n){return"INCOME"===n.type?"#24CCA7":"#ff6596"})),yt=E.ZP.td(Cn||(Cn=(0,k.Z)(["\n  --trans-color: ",";\n  width: 5px;\n  background-color: var(--trans-color);\n  border-bottom-left: 1px solid var(--trans-color);\n  border-bottom-left-radius: 10px;\n"])),(function(n){return"INCOME"===n.type?"#24CCA7":"#ff6596"})),vt=E.ZP.td(Pn||(Pn=(0,k.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.5;\n  color: #000000;\n  padding-left: 15px;\n  text-align: left;\n"]))),jt=E.ZP.td(kn||(kn=(0,k.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  text-align: right;\n  padding-right: 20px;\n  color: #000000;\n"]))),wt=E.ZP.td(En||(En=(0,k.Z)(["\n  position: relative;\n\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  text-align: right;\n  padding-right: 20px;\n  color: #000000;\n"]))),Ct=E.ZP.td(zn||(zn=(0,k.Z)(["\n  --trans-color: ",";\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.5;\n  text-align: right;\n  padding-right: 20px;\n  color: var(--trans-color);\n"])),(function(n){return"INCOME"===n.type?"#24CCA7":"#ff6596"})),Pt=function(){var n=(0,g.I0)(),t=(0,g.v9)((function(n){return n.transaction.transactions})),e=(0,g.v9)((function(n){return n.category.category}));if((0,u.useEffect)((function(){n(y.Z.getTransactions())}),[n]),0!==e.length&&0!==t.length)return Qn(t).map((function(n){var t;return(0,B.jsx)(gt,{children:(0,B.jsxs)("tbody",{children:[(0,B.jsxs)(mt,{children:[(0,B.jsx)(Zt,{type:n.type}),(0,B.jsx)(vt,{children:"Date"}),(0,B.jsx)(jt,{children:O()(n.transactionDate).format("DD.MM.YY")})]}),(0,B.jsxs)(mt,{children:[(0,B.jsx)(bt,{type:n.type}),(0,B.jsx)(vt,{children:"Type"}),(0,B.jsx)(jt,{children:"INCOME"===n.type?"+":"-"})]}),(0,B.jsxs)(mt,{children:[(0,B.jsx)(bt,{type:n.type}),(0,B.jsx)(vt,{children:"Category"}),(0,B.jsx)(jt,{children:null===e||void 0===e?void 0:e.find((function(t){return t.id===n.categoryId})).name})]}),(0,B.jsxs)(mt,{children:[(0,B.jsx)(bt,{type:n.type}),(0,B.jsx)(vt,{children:"Comment"}),(null===n||void 0===n||null===(t=n.comment)||void 0===t?void 0:t.length)>14?(0,B.jsx)(ht.ZP,{content:n.comment,children:(0,B.jsx)(wt,{children:"".concat(n.comment.substr(0,14),"...")})}):(0,B.jsx)(wt,{children:n.comment})]}),(0,B.jsxs)(mt,{children:[(0,B.jsx)(bt,{type:n.type}),(0,B.jsx)(vt,{children:"Sum"}),(0,B.jsx)(Ct,{type:n.type,children:n.amount.toFixed(2)})]}),(0,B.jsxs)(mt,{children:[(0,B.jsx)(yt,{type:n.type}),(0,B.jsx)(vt,{children:"Balance"}),(0,B.jsx)(jt,{children:n.balanceAfter.toFixed(2)})]})]})},n.id)}))},kt=e(5716),Et=E.ZP.div(Sn||(Sn=(0,k.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  height: 65vh;\n  overflow-y: scroll;\n\n  @media screen and (min-width: 768px) {\n    width: 100%;\n    height: 45vh;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-left: 39px;\n    display: flex;\n    height: 70vh;\n  }\n"]))),zt=e(1760),St=e(2423),Dt=function(){var n=(0,kt.Z)("(min-width: 768px)"),t=(0,kt.Z)("(max-width: 767px)");return(0,B.jsxs)(B.Fragment,{children:[t&&(0,B.jsx)(St.Z,{delay:.2,children:(0,B.jsx)(zt.Z,{})}),(0,B.jsx)(St.Z,{delay:.3,children:(0,B.jsx)(Et,{children:n?(0,B.jsx)(ut,{}):(0,B.jsx)(Pt,{})})}),(0,B.jsx)(Jn,{}),(0,B.jsx)(d.Ix,{})]})}}}]);
//# sourceMappingURL=420.4a6f7415.chunk.js.map