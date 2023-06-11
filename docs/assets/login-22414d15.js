import{aJ as B,al as _e,j as fe,k as oe,bj as me,ab as ue,d as U,bA as ce,bB as he,bC as ke,m as pe,n as ve,b2 as Ie,q as h,bD as Ee,bb as Le,y as C,s as le,v as ge,R as be,o as y,E as re,b as l,w as f,a as v,G as m,B as t,H as ie,I as Ce,L as $,J as N,aY as ze,c as z,F as Q,a5 as $e,a6 as Se,bE as Te,bF as Fe,K as Ne,bG as Oe,bH as Re,S as Ve,T as xe,a3 as Ae,M as Z,X as Be,ba as Me,P as we,aP as M,Q as A,bI as Ye,ai as ye,$ as Xe,N as De,aS as He,ah as Pe,t as je,bJ as Ue,_ as We,bK as qe,bL as Ge,e as de}from"./index-37d41569.js";import{e as Je,F as Ke,G as Ze,c as Qe,b as et,E as tt,a as st}from"./el-form-item-efbf7196.js";import{u as at}from"./index-028b5d9c.js";const nt=(a,i)=>{if(!B||!a||!i)return!1;const o=a.getBoundingClientRect();let n;return i instanceof Element?n=i.getBoundingClientRect():n={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},o.top<n.bottom&&o.bottom>n.top&&o.right>n.left&&o.left<n.right};var ot="Expected a function";function ne(a,i,o){var n=!0,c=!0;if(typeof a!="function")throw new TypeError(ot);return _e(o)&&(n="leading"in o?!!o.leading:n,c="trailing"in o?!!o.trailing:c),Je(a,i,{leading:n,maxWait:i,trailing:c})}const lt=fe({urlList:{type:oe(Array),default:()=>me([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),rt={close:()=>!0,switch:a=>ue(a)},it=["src"],ut=U({name:"ElImageViewer"}),ct=U({...ut,props:lt,emits:rt,setup(a,{expose:i,emit:o}){const n=a,c={CONTAIN:{name:"contain",icon:ce(he)},ORIGINAL:{name:"original",icon:ce(ke)}},{t:g}=pe(),u=ve("image-viewer"),{nextZIndex:O}=Ie(),k=h(),I=h([]),E=Ee(),p=h(!0),b=h(n.initialIndex),w=Le(c.CONTAIN),d=h({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Y=C(()=>{const{urlList:e}=n;return e.length<=1}),R=C(()=>b.value===0),W=C(()=>b.value===n.urlList.length-1),ee=C(()=>n.urlList[b.value]),X=C(()=>{const{scale:e,deg:s,offsetX:r,offsetY:_,enableTransition:T}=d.value;let L=r/e,F=_/e;switch(s%360){case 90:case-270:[L,F]=[F,-L];break;case 180:case-180:[L,F]=[-L,-F];break;case 270:case-90:[L,F]=[-F,L];break}const x={transform:`scale(${e}) rotate(${s}deg) translate(${L}px, ${F}px)`,transition:T?"transform .3s":""};return w.value.name===c.CONTAIN.name&&(x.maxWidth=x.maxHeight="100%"),x}),te=C(()=>ue(n.zIndex)?n.zIndex:O());function V(){se(),o("close")}function D(){const e=ne(r=>{switch(r.code){case A.esc:n.closeOnPressEscape&&V();break;case A.space:P();break;case A.left:J();break;case A.up:S("zoomIn");break;case A.right:K();break;case A.down:S("zoomOut");break}}),s=ne(r=>{const _=r.deltaY||r.deltaX;S(_<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})});E.run(()=>{M(document,"keydown",e),M(document,"wheel",s)})}function se(){E.stop()}function ae(){p.value=!1}function q(e){p.value=!1,e.target.alt=g("el.image.error")}function G(e){if(p.value||e.button!==0||!k.value)return;d.value.enableTransition=!1;const{offsetX:s,offsetY:r}=d.value,_=e.pageX,T=e.pageY,L=ne(x=>{d.value={...d.value,offsetX:s+x.pageX-_,offsetY:r+x.pageY-T}}),F=M(document,"mousemove",L);M(document,"mouseup",()=>{F()}),e.preventDefault()}function H(){d.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function P(){if(p.value)return;const e=Ye(c),s=Object.values(c),r=w.value.name,T=(s.findIndex(L=>L.name===r)+1)%e.length;w.value=c[e[T]],H()}function j(e){const s=n.urlList.length;b.value=(e+s)%s}function J(){R.value&&!n.infinite||j(b.value-1)}function K(){W.value&&!n.infinite||j(b.value+1)}function S(e,s={}){if(p.value)return;const{zoomRate:r,rotateDeg:_,enableTransition:T}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...s};switch(e){case"zoomOut":d.value.scale>.2&&(d.value.scale=Number.parseFloat((d.value.scale/r).toFixed(3)));break;case"zoomIn":d.value.scale<7&&(d.value.scale=Number.parseFloat((d.value.scale*r).toFixed(3)));break;case"clockwise":d.value.deg+=_;break;case"anticlockwise":d.value.deg-=_;break}d.value.enableTransition=T}return le(ee,()=>{ge(()=>{const e=I.value[0];e!=null&&e.complete||(p.value=!0)})}),le(b,e=>{H(),o("switch",e)}),be(()=>{var e,s;D(),(s=(e=k.value)==null?void 0:e.focus)==null||s.call(e)}),i({setActiveItem:j}),(e,s)=>(y(),re(Me,{to:"body",disabled:!e.teleported},[l(Be,{name:"viewer-fade",appear:""},{default:f(()=>[v("div",{ref_key:"wrapper",ref:k,tabindex:-1,class:m(t(u).e("wrapper")),style:ie({zIndex:t(te)})},[v("div",{class:m(t(u).e("mask")),onClick:s[0]||(s[0]=Ce(r=>e.hideOnClickModal&&V(),["self"]))},null,2),$(" CLOSE "),v("span",{class:m([t(u).e("btn"),t(u).e("close")]),onClick:V},[l(t(N),null,{default:f(()=>[l(t(ze))]),_:1})],2),$(" ARROW "),t(Y)?$("v-if",!0):(y(),z(Q,{key:0},[v("span",{class:m([t(u).e("btn"),t(u).e("prev"),t(u).is("disabled",!e.infinite&&t(R))]),onClick:J},[l(t(N),null,{default:f(()=>[l(t($e))]),_:1})],2),v("span",{class:m([t(u).e("btn"),t(u).e("next"),t(u).is("disabled",!e.infinite&&t(W))]),onClick:K},[l(t(N),null,{default:f(()=>[l(t(Se))]),_:1})],2)],64)),$(" ACTIONS "),v("div",{class:m([t(u).e("btn"),t(u).e("actions")])},[v("div",{class:m(t(u).e("actions__inner"))},[l(t(N),{onClick:s[1]||(s[1]=r=>S("zoomOut"))},{default:f(()=>[l(t(Te))]),_:1}),l(t(N),{onClick:s[2]||(s[2]=r=>S("zoomIn"))},{default:f(()=>[l(t(Fe))]),_:1}),v("i",{class:m(t(u).e("actions__divider"))},null,2),l(t(N),{onClick:P},{default:f(()=>[(y(),re(Ne(t(w).icon)))]),_:1}),v("i",{class:m(t(u).e("actions__divider"))},null,2),l(t(N),{onClick:s[3]||(s[3]=r=>S("anticlockwise"))},{default:f(()=>[l(t(Oe))]),_:1}),l(t(N),{onClick:s[4]||(s[4]=r=>S("clockwise"))},{default:f(()=>[l(t(Re))]),_:1})],2)],2),$(" CANVAS "),v("div",{class:m(t(u).e("canvas"))},[(y(!0),z(Q,null,Ve(e.urlList,(r,_)=>xe((y(),z("img",{ref_for:!0,ref:T=>I.value[_]=T,key:r,src:r,style:ie(t(X)),class:m(t(u).e("img")),onLoad:ae,onError:q,onMousedown:G},null,46,it)),[[Ae,_===b.value]])),128))],2),Z(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var dt=we(ct,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const ft=ye(dt),mt=fe({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:oe([String,Object])},previewSrcList:{type:oe(Array),default:()=>me([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),pt={load:a=>a instanceof Event,error:a=>a instanceof Event,switch:a=>ue(a),close:()=>!0,show:()=>!0},vt=["src","loading"],gt={key:0},bt=U({name:"ElImage",inheritAttrs:!1}),wt=U({...bt,props:mt,emits:pt,setup(a,{emit:i}){const o=a;let n="";const{t:c}=pe(),g=ve("image"),u=Xe(),O=Ke(),k=h(),I=h(!1),E=h(!0),p=h(!1),b=h(),w=h(),d=B&&"loading"in HTMLImageElement.prototype;let Y,R;const W=C(()=>u.style),ee=C(()=>{const{fit:e}=o;return B&&e?{objectFit:e}:{}}),X=C(()=>{const{previewSrcList:e}=o;return Array.isArray(e)&&e.length>0}),te=C(()=>{const{previewSrcList:e,initialIndex:s}=o;let r=s;return s>e.length-1&&(r=0),r}),V=C(()=>o.loading==="eager"?!1:!d&&o.loading==="lazy"||o.lazy),D=()=>{B&&(E.value=!0,I.value=!1,k.value=o.src)};function se(e){E.value=!1,I.value=!1,i("load",e)}function ae(e){E.value=!1,I.value=!0,i("error",e)}function q(){nt(b.value,w.value)&&(D(),P())}const G=Ue(q,200,!0);async function H(){var e;if(!B)return;await ge();const{scrollContainer:s}=o;He(s)?w.value=s:Pe(s)&&s!==""?w.value=(e=document.querySelector(s))!=null?e:void 0:b.value&&(w.value=Ze(b.value)),w.value&&(Y=M(w,"scroll",G),setTimeout(()=>q(),100))}function P(){!B||!w.value||!G||(Y==null||Y(),w.value=void 0)}function j(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function J(){X.value&&(R=M("wheel",j,{passive:!1}),n=document.body.style.overflow,document.body.style.overflow="hidden",p.value=!0,i("show"))}function K(){R==null||R(),document.body.style.overflow=n,p.value=!1,i("close")}function S(e){i("switch",e)}return le(()=>o.src,()=>{V.value?(E.value=!0,I.value=!1,P(),H()):D()}),be(()=>{V.value?H():D()}),(e,s)=>(y(),z("div",{ref_key:"container",ref:b,class:m([t(g).b(),e.$attrs.class]),style:ie(t(W))},[I.value?Z(e.$slots,"error",{key:0},()=>[v("div",{class:m(t(g).e("error"))},je(t(c)("el.image.error")),3)]):(y(),z(Q,{key:1},[k.value!==void 0?(y(),z("img",De({key:0},t(O),{src:k.value,loading:e.loading,style:t(ee),class:[t(g).e("inner"),t(X)&&t(g).e("preview"),E.value&&t(g).is("loading")],onClick:J,onLoad:se,onError:ae}),null,16,vt)):$("v-if",!0),E.value?(y(),z("div",{key:1,class:m(t(g).e("wrapper"))},[Z(e.$slots,"placeholder",{},()=>[v("div",{class:m(t(g).e("placeholder"))},null,2)])],2)):$("v-if",!0)],64)),t(X)?(y(),z(Q,{key:2},[p.value?(y(),re(t(ft),{key:0,"z-index":e.zIndex,"initial-index":t(te),infinite:e.infinite,"zoom-rate":e.zoomRate,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:K,onSwitch:S},{default:f(()=>[e.$slots.viewer?(y(),z("div",gt,[Z(e.$slots,"viewer")])):$("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):$("v-if",!0)],64)):$("v-if",!0)],6))}});var yt=we(wt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const _t=ye(yt);const ht=U({setup(){return{src:h("../../src/assets/logo.png")}},data(){return{n:30,userForm:{email:"",password:""},rules:{email:[{required:!0,message:"请输入正确的电子邮箱",trigger:"blur"},{type:"email",message:"电子邮箱格式错误",trigger:"blur"}],password:[{required:!0,message:"请输入正确的用户密码",trigger:"blur"},{min:8,message:"密码长度不得小于8个字符",trigger:"blur"}]}}},mounted(){},methods:{...qe(Ge,["setToken","fillUserinfo"]),btnLogin(){const a=this,i=a.$refs.ruleFormRef;i&&i.validate(o=>{if(o)at(a.userForm).then(c=>{if(c.success){const g=c.data.userinfo;console.log(a),a.setToken(g.token),a.fillUserinfo(g),a.$router.push("/")}else return!1}).catch(c=>{console.log(c)});else return console.log("error submit!"),!1})},resetForm(){this.$refs.ruleFormRef.resetFields()}}}),kt={class:"login"},It={class:"login-form"},Et={class:"login-form-logo"};function Lt(a,i,o,n,c,g){const u=_t,O=et,k=tt,I=st,E=Qe;return y(),z("div",kt,[v("div",It,[v("div",Et,[l(u,{src:a.src,fit:"fill",lazy:!0},null,8,["src"])]),l(E,{ref:"ruleFormRef",model:a.userForm,"status-icon":"",rules:a.rules,class:"login-ruleForm"},{default:f(()=>[l(k,{prop:"email"},{default:f(()=>[l(O,{modelValue:a.userForm.email,"onUpdate:modelValue":i[0]||(i[0]=p=>a.userForm.email=p),autocomplete:"off",placeholder:"请输入你的用户邮箱","suffix-icon":"Message"},null,8,["modelValue"])]),_:1}),l(k,{prop:"password"},{default:f(()=>[l(O,{modelValue:a.userForm.password,"onUpdate:modelValue":i[1]||(i[1]=p=>a.userForm.password=p),type:"password",autocomplete:"off",placeholder:"请输入你的用户密码","suffix-icon":"Lock"},null,8,["modelValue"])]),_:1}),l(k,{class:"login-form-btns"},{default:f(()=>[l(I,{type:"primary",onClick:a.btnLogin},{default:f(()=>[de("用户登录")]),_:1},8,["onClick"]),l(I,{onClick:a.resetForm},{default:f(()=>[de("Reset")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])])}const St=We(ht,[["render",Lt],["__scopeId","data-v-b201dbe1"]]);export{St as default};
