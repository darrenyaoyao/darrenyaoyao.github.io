(this.webpackJsonppersonalpage=this.webpackJsonppersonalpage||[]).push([[0],{29:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/avatar.83e15de2.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/milkjobs.a3fb798d.jpeg"},55:function(e,t,a){e.exports=a.p+"static/media/webAnimationClass.44a8006d.jpeg"},56:function(e,t,a){e.exports=a.p+"static/media/medium.191cb17c.jpg"},63:function(e,t,a){e.exports=a(76)},68:function(e,t,a){},69:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(5),r=a.n(i),c=(a(68),a(69),a(10)),l=a(58),s=a(101),m=Object(n.createContext)({changeTheme:function(){},theme:Object(l.a)()}),p=function(e){var t=e.children,a={xs:0,sm:600,md:960,lg:1280,xl:1920},i=Object(l.a)({palette:{primary:{main:"#f3c623",light:"#666666",contrastText:"#484848"},secondary:{main:"#fa6c71",contrastText:"#ffffff"},background:{default:"#ffffff"},text:{primary:"#484848"},type:"light"},breakpoints:{values:a},overrides:{MuiTooltip:{tooltip:{fontSize:"1em"}}}}),r=Object(l.a)({palette:{primary:{main:"#f3c623",light:"#666666",contrastText:"#484848"},secondary:{main:"#FFFFFF"},background:{default:"#111111"},type:"dark"},breakpoints:{values:a}}),p=Object(n.useState)("dark"),d=Object(c.a)(p,2),u=d[0],h=d[1],g=Object(n.useState)(r),f=Object(c.a)(g,2),b=f[0],x=f[1];return o.a.createElement(m.Provider,{value:{changeTheme:function(){"light"===u?(x(r),h("dark")):(x(i),h("light"))},theme:b}},o.a.createElement(s.a,{theme:b},t))},d=a(14),u=a(102),h=a(51),g=a(7),f=a(8),b=a(39),x=a.n(b),E=Object(u.a)((function(e){return{menu:Object(d.a)({flex:1,padding:32,paddingTop:64},e.breakpoints.down("sm"),{display:"none"}),name:{color:e.palette.text.primary,fontSize:20,fontWeight:"bold"},email:{color:e.palette.text.hint,marginTop:8,marginBottom:64},option:{color:e.palette.text.hint,fontSize:24,fontWeight:"bold",marginTop:16,marginBottom:16,cursor:"pointer",textDecoration:"none",display:"block",transition:"0.5s","&:hover":{color:e.palette.text.primary}},optionSelected:{color:e.palette.text.primary,fontSize:24,fontWeight:"bold",marginTop:16,marginBottom:16,cursor:"pointer",textDecoration:"none",display:"block"},avatar:{width:60,height:60,borderRadius:4,marginBottom:8}}})),y=function(){var e=E(),t=Object(g.d)();return o.a.createElement("div",{className:e.menu},o.a.createElement("img",{src:x.a,className:e.avatar}),o.a.createElement("div",{className:e.name},"\u9ec3\u610f\u582f"),o.a.createElement("div",{className:e.email},"darrenyaoyao.huang@gmail.com"),o.a.createElement(f.b,{className:"/introduction"===t.pathname||"/"===t.pathname?e.optionSelected:e.option,to:"/introduction"},"\u4ecb\u7d39"),o.a.createElement(f.b,{className:"/resume"===t.pathname?e.optionSelected:e.option,to:"/resume"},"\u5c65\u6b77"),o.a.createElement(f.b,{className:"/works"===t.pathname?e.optionSelected:e.option,to:"/works"},"\u4f5c\u54c1"),o.a.createElement(f.b,{className:"/courses"===t.pathname?e.optionSelected:e.option,to:"/courses"},"\u8ab2\u7a0b"),o.a.createElement(f.b,{className:"/articles"===t.pathname?e.optionSelected:e.option,to:"/articles"},"\u6587\u7ae0"))},v=a(107),w=a(25),k=a(59),j=Object(u.a)((function(e){return{container:{display:"block",paddingTop:32,paddingBottom:16},title:{fontSize:32,fontWeight:700,position:"relative",letterSpacing:1,textShadow:"3px 3px 5px rgba(0,0,0,.6)",zIndex:1,width:"fit-content",paddingLeft:8,paddingRight:8,color:e.palette.text.primary},titleDesign:{content:'""',zIndex:-1,left:-1,position:"absolute",height:"0.5em",top:"0.8em",width:"100%",transition:"0.5s",background:"linear-gradient(90deg,#ffd31d,#f3c623)","&:hover":{width:"100%"}},"@keyframes slidein":{"0%":{opacity:0},"100%":{opacity:1}},paragraph:{color:e.palette.text.secondary,transition:"0.5s",whiteSpace:"pre-line",fontSize:18,lineHeight:1.8,"&:hover":{color:e.palette.text.primary,transform:"translateX(20px)"}}}})),O=function(e){var t=e.title,a=e.paragraph,i=j(),r=Object(n.useState)(!1),l=Object(c.a)(r,2),s=l[0],m=l[1],p={transition:"width ".concat(200,"ms ease-in-out"),width:0},d={entering:{width:"0%"},entered:{width:"100%"},exiting:{width:"100%"},exited:{width:"0%"},unmounted:{width:"0%"}};return o.a.createElement("div",{className:i.container},o.a.createElement("p",{className:i.title},o.a.createElement(k.a,{in:s,timeout:200},(function(e){return o.a.createElement("div",{className:i.titleDesign,style:Object(w.a)({},p,{},d[e])})})),t),o.a.createElement("p",{className:i.paragraph,onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)}},a))},S=function(){return o.a.createElement("div",null,o.a.createElement(O,{title:"Hello, I am Darren",paragraph:"\u6211\u71b1\u611b\u92b7\u552e\u3001\u89e3\u6c7a\u554f\u984c\u3001\u6253\u9020\u6709\u5275\u610f\u7684\u7522\u54c1\u3002\n\u6211\u662f\u500b\u5de5\u7a0b\u5e2b\uff0c\u4e5f\u662f\u696d\u52d9\u3002\u6253\u9020\u4e00\u500b\u597d\u7684\u7522\u54c1\u4e26\u628a\u5b83\u92b7\u552e\u51fa\u53bb\uff0c\u662f\u6211\u8ffd\u6c42\u7684\u76ee\u6a19\u3002\n\u66fe\u7d93\u7576\u904e AI \u7814\u7a76\u54e1\u3001\u524d\u7aef\u5de5\u7a0b\u5e2b\u3001\u884c\u92b7\u3001\u696d\u52d9\uff0c\u672a\u4f86\u60f3\u5f80\u5546\u696d\u7b56\u7565\u4ee5\u53ca\u66f4\u5168\u9762\u7684\u7db2\u8def\u6280\u8853\u767c\u5c55\u3002"}),o.a.createElement(O,{title:"\u8edf\u9ad4\u5de5\u7a0b\u5e2b",paragraph:"\u6211\u6700\u64c5\u9577 React, React Native \u76f8\u95dc\u7684\u524d\u7aef\u3001App \u958b\u767c\u3002\n\u4e5f\u719f\u6089 Pytorch, tensorflow \u7b49\u81ea\u7136\u8a9e\u8a00\u8655\u7406\u3001\u5f71\u50cf\u8fa8\u8b58\u76f8\u95dc\u7684\u61c9\u7528\u3002\n\u7db2\u9801\u5f8c\u7aef\u7684\u90e8\u5206\uff0c\u6709\u57fa\u790e\u7684\u958b\u767c\u80fd\u529b\uff0c\u9084\u5728\u52aa\u529b\u5b78\u7fd2\u8b8a\u5c08\u696d\u4e2d\u3002"}),o.a.createElement(O,{title:"\u6559\u5b78\u76f8\u9577",paragraph:"\u6211\u5728\u81fa\u5927\u8cc7\u5de5\u7cfb\u7d71\u8a13\u7df4\u73ed\u64d4\u4efb\u517c\u8077\u8b1b\u5e2b\uff0c\n\u4e5f\u6703\u5b9a\u671f\u5beb\u6587\u7ae0\uff0c\u5206\u4eab\u6211\u7684\u60f3\u6cd5\u8207\u7d93\u9a57\u3002\n\u900f\u904e\u8207\u4e0d\u540c\u7684\u4eba\u4e92\u52d5\uff0c\u611f\u53d7\u4e16\u754c\u7684\u7f8e\u597d\u3002"}),o.a.createElement(O,{title:"\u4eba\u751f\u662f\u4e00\u5834\u7121\u9650\u904a\u6232",paragraph:"\u6709\u9650\u904a\u6232\u662f\u4ee5\u7d50\u675f\u904a\u6232\u76ee\u6a19\uff0c\u8d0f\u7684\u904a\u6232\u3001\u53d6\u5f97\u982d\u929c\uff0c\u7686\u662f\u6709\u9650\u904a\u6232\u53c3\u8207\u8005\u6240\u8ffd\u6c42\u7684\u3002\n\u800c\u6211\u8a8d\u70ba\u4eba\u751f\u662f\u4e00\u5834\u7121\u9650\u904a\u6232\uff0c\u9019\u5834\u904a\u6232\u662f\u4ee5\u5ef6\u7e8c\u904a\u6232\u70ba\u76ee\u6a19\u3002\n\u79c9\u6301\u81ea\u5df1\u7684\u6838\u5fc3\uff0c\u7121\u9650\u62d3\u5c55\u81ea\u5df1\u7684\u908a\u754c\u3002\n\u6211\u4e0d\u6703\u62d8\u6ce5\u65bc\u81ea\u5df1\u5df2\u77e5\u7684\u9818\u57df\uff0c\u76f8\u53cd\u7684\u6211\u6703\u760b\u72c2\u7684\u5f80\u6211\u9084\u6c92\u5230\u9054\u904e\u7684\u5730\u65b9\u5b78\u7fd2\u3002\n\u4e0d\u8ad6\u662f\u66f4\u591a\u7684\u60f3\u6cd5\u3001\u66f4\u597d\u7684\u8a2d\u8a08\u3001\u66f4\u5275\u65b0\u7684\u6280\u8853\u3001\u66f4\u591a\u80fd\u6e9d\u901a\u7684\u8a9e\u8a00\uff0c\n\u90fd\u662f\u6211\u6703\u7aae\u6975\u4e00\u751f\u8ffd\u6c42\u7684\u3002"}))},N=a(54),z=a.n(N),T=(a(29),a(103)),B=Object(u.a)((function(e){return{container:{display:"block",paddingTop:32,paddingBottom:16,borderBottomColor:e.palette.divider,borderBottomStyle:"solid",borderBlockWidth:1},title:{fontSize:24,fontWeight:700,position:"relative",letterSpacing:1,textShadow:"3px 3px 5px rgba(0,0,0,.6)",zIndex:1,width:"fit-content",paddingLeft:8,paddingRight:8,color:e.palette.text.primary},titleDesign:{content:'""',zIndex:-1,left:-1,position:"absolute",height:"0.5em",top:"0.8em",width:"100%",transition:"0.5s",background:"linear-gradient(90deg,#ffd31d,#f3c623)","&:hover":{width:"100%"}},"@keyframes slidein":{"0%":{opacity:0},"100%":{opacity:1}},paragraph:{color:e.palette.text.secondary,transition:"0.5s",whiteSpace:"pre-line",fontSize:18,lineHeight:1.8,"&:hover":{color:e.palette.text.primary,transform:"translateX(20px)"}},block:{backgroundColor:"#F2A640",width:200,maxWidth:"100%",height:"auto",borderRadius:8,cursor:"pointer",margin:16,marginRight:32},content:Object(d.a)({display:"flex"},e.breakpoints.down("xs"),{flexDirection:"column"})}}));function C(e){Object.assign(document.createElement("a"),{target:"_blank",href:e}).click()}var W=function(e){var t=e.title,a=e.paragraph,i=e.img,r=e.link,l=B(),s=Object(n.useState)(!1),m=Object(c.a)(s,2),p=m[0],d=m[1],u={transition:"width ".concat(200,"ms ease-in-out"),width:0},h={entering:{width:"0%"},entered:{width:"100%"},exiting:{width:"100%"},exited:{width:"0%"},unmounted:{width:"0%"}};return o.a.createElement("div",{className:l.container},o.a.createElement("p",{className:l.title},o.a.createElement(k.a,{in:p,timeout:200},(function(e){return o.a.createElement("div",{className:l.titleDesign,style:Object(w.a)({},u,{},h[e])})})),t),o.a.createElement("div",{className:l.content,onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)}},o.a.createElement("img",{alt:"\u725b\u5976\u627e\u5de5\u4f5c",className:l.block,src:i,onClick:function(){C("https://milk.jobs")}}),o.a.createElement("p",{className:l.paragraph},a)),o.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"}},o.a.createElement(T.a,{variant:"contained",size:"large",color:"primary",style:{marginLeft:"auto",margin:16},onClick:function(){return C(r)}},"\u524d\u5f80\u7db2\u7ad9")))};var D=Object(u.a)((function(e){return{container:{paddingTop:32},block:{backgroundColor:"#F2A640",width:300,maxWidth:"100%",height:"auto",borderRadius:8,cursor:"pointer",margin:16}}})),I=function(){var e=D();return o.a.createElement("div",{className:e.container},o.a.createElement(W,{title:"\u725b\u5976\u627e\u5de5\u4f5c",paragraph:"\u7db2\u7ad9\u5229\u7528 React + Typescript \u958b\u767c\u3002\nApp \u5229\u7528 React Native + Typescript \u958b\u767c\u3002\n\u53e6\u5916\u6709\u642d\u914d Sendbird \u804a\u5929\u670d\u52d9\u3001Algolia \u641c\u5c0b\u670d\u52d9\u3001Firebase \u6578\u64da\u76e3\u6e2c\u670d\u52d9\u3002\n\u5f8c\u7aef\u7684\u90e8\u5206\uff0c\u4f7f\u7528 C# + Mysql + AWS\u3002",img:z.a,link:"https://milk.jobs"}))},A=Object(u.a)((function(e){return{container:{display:"block",paddingTop:32,paddingBottom:16},titleContainer:Object(d.a)({display:"flex",alignItems:"center"},e.breakpoints.down("xs"),{flexDirection:"column",alignItems:"flex-start"}),title:{fontSize:24,fontWeight:700,position:"relative",letterSpacing:1,textShadow:"3px 3px 5px rgba(0,0,0,.6)",zIndex:1,width:"fit-content",color:e.palette.text.primary},titleDesign:{content:'""',zIndex:-1,left:-1,position:"absolute",height:"0.5em",top:"0.8em",width:"100%",transition:"0.5s",background:"linear-gradient(90deg,#ffd31d,#f3c623)","&:hover":{width:"100%"}},"@keyframes slidein":{"0%":{opacity:0},"100%":{opacity:1}},period:Object(d.a)({color:e.palette.text.secondary,marginLeft:128},e.breakpoints.down("xs"),{marginLeft:0}),paragraph:{color:e.palette.text.secondary,transition:"0.5s",whiteSpace:"pre-line",fontSize:18,lineHeight:1.8,"&:hover":{color:e.palette.text.primary,transform:"translateX(20px)"}}}})),R=function(e){var t=e.title,a=e.paragraph,i=e.period,r=A(),l=Object(n.useState)(!1),s=Object(c.a)(l,2),m=s[0],p=s[1],d={transition:"width ".concat(200,"ms ease-in-out"),width:0},u={entering:{width:"0%"},entered:{width:"100%"},exiting:{width:"100%"},exited:{width:"0%"},unmounted:{width:"0%"}};return o.a.createElement("div",{className:r.container},o.a.createElement("div",{className:r.titleContainer},o.a.createElement("p",{className:r.title},o.a.createElement(k.a,{in:m,timeout:200},(function(e){return o.a.createElement("div",{className:r.titleDesign,style:Object(w.a)({},d,{},u[e])})})),t),o.a.createElement("div",{className:r.period},i)),o.a.createElement("p",{className:r.paragraph,onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)}},a))},L=Object(u.a)((function(e){return{container:{paddingTop:32}}}));var M=function(){var e=L();return o.a.createElement("div",{className:e.container},o.a.createElement(T.a,{color:"primary",variant:"contained",size:"large",onClick:function(){return function(e){var t=window.open(e,"_blank");t&&t.focus()}("https://drive.google.com/file/d/1BrSwAdjdUf_R-tuWtDyzncXyfUYLxEsD/view?usp=sharing")}},"\u5b8c\u6574\u5c65\u66c6\u4e0b\u8f09"),o.a.createElement(R,{title:"\u725b\u5976\u627e\u5de5\u4f5c --- \u5275\u8fa6\u4eba",period:"\u53f0\u5317   2019.03 - 2020.07",paragraph:"\u725b\u5976\u627e\u5de5\u4f5c\u662f\u4e00\u6b3e\u8b93\u4eba\u8cc7\u520a\u767b\u8077\u7f3a\u3001\u6c42\u8077\u8005\u53ef\u4ee5\u5728\u5e73\u53f0\u4e0a\u8207\u4eba\u8cc7\u76f4\u63a5\u804a\u5929\u7684\u6c42\u8077 App\u3001\u7db2\u7ad9\u3002\n\u4e00\u958b\u59cb\u662f\u6211\u7368\u81ea\u4e00\u4eba\u958b\u767c\uff0c\u5f8c\u4f86\u6211\u627e\u4e86\u5169\u4f4d\u5925\u4f34\uff0c\u4e00\u8d77\u8b93 iOS, Android, Web \u8de8\u5e73\u53f0\u4e0a\u7dda\u3002\n\u5275\u9020 1500 \u5bb6\u516c\u53f8\u520a\u767b\u8077\u7f3a\uff0c5000 \u4f4d\u6c42\u8077\u8005\u7684\u6210\u7e3e\uff0c\u8d85\u904e 1 \u842c\u6b21\u804a\u5929\u3002\n\u5f8c\u4f86\u82e6\u65bc\u5e02\u5834\u592a\u5c0f\u3001\u5546\u696d\u6a21\u5f0f\u4e0d\u6e05\u6670\u3001\u4e26\u4e14\u767c\u73fe\u81ea\u5df1\u7684\u4e0d\u8db3\uff0c\u6c7a\u5b9a\u66ab\u505c\u71df\u696d\u3002"}),o.a.createElement(R,{period:"\u5317\u4eac   2018.07 - 2019.03",title:"\u5fae\u4fe1 AI \u7814\u7a76\u9662 --- \u81ea\u7136\u8a9e\u8a00\u8655\u7406\u7814\u7a76\u54e1",paragraph:"\u8ca0\u8cac\u5fae\u4fe1\u5c0d\u8a71\u6a5f\u5668\u4eba\u7684\u7814\u7a76\u8207\u5be6\u4f5c\u3002\n\u5229\u7528 Vue \u642d\u5efa\u958b\u767c\u8005\u5e73\u53f0\uff0c\u5229\u7528 tensorflow \u5f37\u5316\u667a\u80fd\u5c0d\u8a71\u80fd\u529b\u3002\n\u61c9\u7528\u5834\u666f\u6709\u5fae\u4fe1\u652f\u4ed8\u5ba2\u670d\u7cfb\u7d71\u3001\u9a30\u8a0a\u667a\u80fd\u97f3\u7bb1\u3002"}),o.a.createElement(R,{period:"\u53f0\u5317   2013.07 - 2018.01",title:"\u53f0\u7063\u5927\u5b78 --- \u96fb\u6a5f\u5de5\u7a0b\u5b78\u7cfb\u5b78\u58eb\u73ed",paragraph:"\u66fe\u5728\u5927\u5b78\u671f\u9593\u767c\u8868\u4e09\u7bc7\u8ad6\u6587\uff0c\u5169\u7bc7\u81ea\u7136\u8a9e\u8a00\u8655\u7406\u76f8\u95dc\uff0c\u4e00\u7bc7 HCI \u76f8\u95dc\u3002\n\u5e73\u5747 GPA \u70ba 3.98\u3002"}))},F=a(55),H=a.n(F),X=Object(u.a)((function(e){return{container:{paddingTop:32},block:{backgroundColor:"#F2A640",width:300,borderRadius:8,cursor:"pointer"}}})),P=function(){var e=X();return o.a.createElement("div",{className:e.container},o.a.createElement(W,{title:"\u7db2\u9801\u52d5\u756b\u8207\u4e92\u52d5\u8a2d\u8a08\u5165\u9580",paragraph:"\u5728\u53f0\u5927\u8cc7\u5de5\u7cfb\u7d71\u8a13\u7df4\u73ed\u958b\u73ed\u6388\u8ab2\u5594\uff01\n\u4e00\u6b65\u4e00\u6b65\u5e36\u9818\u4f60\u5f9e\u4e0d\u6703\u5beb\u7db2\u9801\uff0c\u5230\u5beb\u51fa\u4e00\u500b\u597d\u7684\u7db2\u9801\u3002\n\u4e0d\u53ea\u5beb\u7a0b\u5f0f\uff0c\u4e00\u8d77\u73a9\u8a2d\u8a08\u8207\u52d5\u756b\u7684\u7f8e\u3002\n\u9069\u5408\u6beb\u7121\u57ce\u5e02\u57fa\u790e\u7684\u5b78\u751f\u4f86\u7a0b\u5f0f\u5594\uff01",img:H.a,link:"https://milk.jobs"}))},_=a(56),J=a.n(_),U=Object(u.a)((function(e){return{container:{paddingTop:32},block:{backgroundColor:"#F2A640",width:300,borderRadius:8,cursor:"pointer"}}})),q=function(){var e=U();return o.a.createElement("div",{className:e.container},o.a.createElement(W,{title:"\u60f3\u6cd5\u96dc\u8ca8\u5e97",paragraph:"\u4ee5\u60f3\u6cd5\u96dc\u8ca8\u5e97\u70ba\u7b46\u540d\uff0c\u5206\u4eab\u751f\u6d3b\u3001\u5546\u696d\u4e0a\u7684\u60f3\u6cd5\u3002\n\u5076\u800c\u4e5f\u6703\u5beb\u7a0b\u5f0f\u3001\u8a2d\u8a08\u76f8\u95dc\u7684\u6587\u7ae0\uff0c\u4e3b\u8981\u7528\u4f86\u8a18\u9304\u81ea\u5df1\u3001\u4ea4\u670b\u53cb\u3002",img:J.a,link:"https://medium.com/moonwrite"}))},G=Object(u.a)((function(e){return{menu:{flex:3,padding:32},introduction:{color:e.palette.text.primary,fontSize:20,fontWeight:"bold",whiteSpace:"pre-line"},email:{color:e.palette.text.hint,marginTop:8,marginBottom:64},option:{color:e.palette.text.hint,fontSize:24,fontWeight:"bold",marginTop:16,marginBottom:16,cursor:"pointer",textDecoration:"none",display:"block"},optionSelected:{color:e.palette.text.primary,fontSize:24,fontWeight:"bold",marginTop:16,marginBottom:16,cursor:"pointer",textDecoration:"none",display:"block"}}})),V=function(){var e=G(),t=Object(g.d)(),a=Object(n.useState)(!1),i=Object(c.a)(a,2),r=i[0],l=i[1],s=Object(n.useState)(!1),m=Object(c.a)(s,2),p=m[0],d=m[1],u=Object(n.useState)(!1),h=Object(c.a)(u,2),f=h[0],b=h[1],x=Object(n.useState)(!1),E=Object(c.a)(x,2),y=E[0],w=E[1],k=Object(n.useState)(!1),j=Object(c.a)(k,2),O=j[0],N=j[1];return Object(n.useEffect)((function(){l(!1),d(!1),b(!1),w(!1),N(!1),setTimeout((function(){switch(t.pathname){case"/":case"/introduction":l(!0);break;case"/works":d(!0);break;case"/resume":b(!0);break;case"/courses":w(!0);break;case"/articles":N(!0)}}),1e3)}),[t.pathname]),o.a.createElement("div",{className:e.menu},o.a.createElement(v.a,{in:r,timeout:1e3,classNames:"alert",unmountOnExit:!0},o.a.createElement(S,null)),o.a.createElement(v.a,{in:p,timeout:1e3,classNames:"alert",unmountOnExit:!0},o.a.createElement(I,null)),o.a.createElement(v.a,{in:f,timeout:1e3,classNames:"alert",unmountOnExit:!0},o.a.createElement(M,null)),o.a.createElement(v.a,{in:y,timeout:1e3,classNames:"alert",unmountOnExit:!0},o.a.createElement(P,null)),o.a.createElement(v.a,{in:O,timeout:1e3,classNames:"alert",unmountOnExit:!0},o.a.createElement(q,null)))},Y=a(105),$=a(106),K=a(57),Q=a.n(K),Z=Object(u.a)((function(e){return{headerBar:Object(d.a)({display:"none"},e.breakpoints.down("sm"),{display:"flex",alignItems:"center",paddingTop:32,padding:16,width:"100%"}),name:{color:e.palette.text.primary,fontSize:20,fontWeight:"bold"},email:{color:e.palette.text.hint,marginTop:8,marginBottom:64},option:{color:e.palette.text.hint,fontSize:18,fontWeight:"bold",margin:16,cursor:"pointer",textDecoration:"none",display:"block",transition:"0.5s","&:hover":{color:e.palette.text.primary}},optionSelected:{color:e.palette.text.primary,fontSize:18,fontWeight:"bold",margin:16,cursor:"pointer",textDecoration:"none",display:"block"},avatar:{marginLeft:24,marginRight:24,width:40,height:40,borderRadius:4},menu:Object(d.a)({marginLeft:"auto",display:"flex"},e.breakpoints.down("xs"),{display:"none"}),sectionMobile:Object(d.a)({display:"flex",marginLeft:"auto"},e.breakpoints.up("sm"),{display:"none"})}})),ee=function(){var e=Z(),t=Object(g.d)(),a=o.a.useState(null),n=Object(c.a)(a,2),i=n[0],r=(n[1],o.a.useState(null)),l=Object(c.a)(r,2),s=l[0],m=l[1],p=(Boolean(i),Boolean(s)),d=function(){m(null)},u=o.a.createElement($.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:d},o.a.createElement(f.b,{className:"/introduction"===t.pathname||"/"===t.pathname?e.optionSelected:e.option,to:"/introduction"},"\u4ecb\u7d39"),o.a.createElement(f.b,{className:"/resume"===t.pathname?e.optionSelected:e.option,to:"/resume"},"\u5c65\u6b77"),o.a.createElement(f.b,{className:"/works"===t.pathname?e.optionSelected:e.option,to:"/works"},"\u4f5c\u54c1"),o.a.createElement(f.b,{className:"/courses"===t.pathname?e.optionSelected:e.option,to:"/courses"},"\u8ab2\u7a0b"),o.a.createElement(f.b,{className:"/articles"===t.pathname?e.optionSelected:e.option,to:"/articles"},"\u6587\u7ae0"));return o.a.createElement("div",{className:e.headerBar},o.a.createElement("img",{src:x.a,className:e.avatar}),o.a.createElement("div",{className:e.name},"\u9ec3\u610f\u582f"),o.a.createElement("div",{className:e.menu},o.a.createElement(f.b,{className:"/introduction"===t.pathname||"/"===t.pathname?e.optionSelected:e.option,to:"/introduction"},"\u4ecb\u7d39"),o.a.createElement(f.b,{className:"/resume"===t.pathname?e.optionSelected:e.option,to:"/resume"},"\u5c65\u6b77"),o.a.createElement(f.b,{className:"/works"===t.pathname?e.optionSelected:e.option,to:"/works"},"\u4f5c\u54c1"),o.a.createElement(f.b,{className:"/courses"===t.pathname?e.optionSelected:e.option,to:"/courses"},"\u8ab2\u7a0b"),o.a.createElement(f.b,{className:"/articles"===t.pathname?e.optionSelected:e.option,to:"/articles"},"\u6587\u7ae0")),o.a.createElement("div",{className:e.sectionMobile},o.a.createElement(Y.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},o.a.createElement(Q.a,{color:"secondary"}))),u)},te=Object(u.a)((function(e){return{root:Object(d.a)({flex:1,height:"100vh",backgroundColor:e.palette.background.default,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}),container:{display:"flex",height:"100%",flexDirection:"row",flex:1,maxWidth:1200}}})),ae=function(){var e=te(),t=Object(n.useContext)(m).theme;return o.a.createElement(f.a,null,o.a.createElement("div",{className:e.root},o.a.createElement(h.a,null,o.a.createElement("style",null,"body { background-color: ".concat(t.palette.background.default,"; }"))),o.a.createElement(ee,null),o.a.createElement("div",{className:e.container},o.a.createElement(y,null),o.a.createElement(V,null))))},ne=function(){return o.a.createElement(p,null,o.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.8f4c0caa.chunk.js.map