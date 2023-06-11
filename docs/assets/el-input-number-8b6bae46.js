import{j as le,u as se,ab as d,ac as I,d as Q,m as oe,n as ie,q as ce,aa as de,y as V,W as E,s as me,R as pe,ad as be,o as b,c as z,T as Y,B as t,G as K,Y as _,b as M,w as $,E as S,V as fe,ae as ve,J as j,L as q,U as Ne,af as Ve,I as P,P as he,ag as Ie,ah as ye,x as H,ai as ge}from"./index-37d41569.js";import{C as X,I as F,U as h,u as we,d as Ee,f as _e,b as Se}from"./el-form-item-efbf7196.js";import{v as J}from"./index-0f335ec0.js";const Pe=le({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:se,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:u=>u===null||d(u)||["min","max"].includes(u),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:u=>u>=0&&u===Number.parseInt(`${u}`,10)},validateEvent:{type:Boolean,default:!0}}),Fe={[X]:(u,k)=>k!==u,blur:u=>u instanceof FocusEvent,focus:u=>u instanceof FocusEvent,[F]:u=>d(u)||I(u),[h]:u=>d(u)||I(u)},ke=["aria-label","onKeydown"],Ae=["aria-label","onKeydown"],xe=Q({name:"ElInputNumber"}),Ce=Q({...xe,props:Pe,emits:Fe,setup(u,{expose:k,emit:c}){const a=u,{t:O}=oe(),m=ie("input-number"),v=ce(),o=de({currentValue:a.modelValue,userInput:null}),{formItem:f}=we(),U=V(()=>d(a.modelValue)&&a.modelValue<=a.min),G=V(()=>d(a.modelValue)&&a.modelValue>=a.max),Z=V(()=>{const e=R(a.step);return E(a.precision)?Math.max(R(a.modelValue),e):(e>a.precision,a.precision)}),A=V(()=>a.controls&&a.controlsPosition==="right"),L=Ee(),N=_e(),x=V(()=>{if(o.userInput!==null)return o.userInput;let e=o.currentValue;if(I(e))return"";if(d(e)){if(Number.isNaN(e))return"";E(a.precision)||(e=e.toFixed(a.precision))}return e}),C=(e,n)=>{if(E(n)&&(n=Z.value),n===0)return Math.round(e);let r=String(e);const l=r.indexOf(".");if(l===-1||!r.replace(".","").split("")[l+n])return e;const g=r.length;return r.charAt(g-1)==="5"&&(r=`${r.slice(0,Math.max(0,g-1))}6`),Number.parseFloat(Number(r).toFixed(n))},R=e=>{if(I(e))return 0;const n=e.toString(),r=n.indexOf(".");let l=0;return r!==-1&&(l=n.length-r-1),l},W=(e,n=1)=>d(e)?C(e+a.step*n):o.currentValue,B=()=>{if(a.readonly||N.value||G.value)return;const e=Number(x.value)||0,n=W(e);y(n),c(F,o.currentValue)},T=()=>{if(a.readonly||N.value||U.value)return;const e=Number(x.value)||0,n=W(e,-1);y(n),c(F,o.currentValue)},D=(e,n)=>{const{max:r,min:l,step:s,precision:p,stepStrictly:g,valueOnClear:w}=a;r<l&&Ie("InputNumber","min should not be greater than max.");let i=Number(e);if(I(e)||Number.isNaN(i))return null;if(e===""){if(w===null)return null;i=ye(w)?{min:l,max:r}[w]:w}return g&&(i=C(Math.round(i/s)*s,p)),E(p)||(i=C(i,p)),(i>r||i<l)&&(i=i>r?r:l,n&&c(h,i)),i},y=(e,n=!0)=>{var r;const l=o.currentValue,s=D(e);if(!n){c(h,s);return}l!==s&&(o.userInput=null,c(h,s),c(X,s,l),a.validateEvent&&((r=f==null?void 0:f.validate)==null||r.call(f,"change").catch(p=>H())),o.currentValue=s)},ee=e=>{o.userInput=e;const n=e===""?null:Number(e);c(F,n),y(n,!1)},ne=e=>{const n=e!==""?Number(e):"";(d(n)&&!Number.isNaN(n)||e==="")&&y(n),o.userInput=null},te=()=>{var e,n;(n=(e=v.value)==null?void 0:e.focus)==null||n.call(e)},re=()=>{var e,n;(n=(e=v.value)==null?void 0:e.blur)==null||n.call(e)},ae=e=>{c("focus",e)},ue=e=>{var n;c("blur",e),a.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"blur").catch(r=>H()))};return me(()=>a.modelValue,e=>{const n=D(o.userInput),r=D(e,!0);!d(n)&&(!n||n!==r)&&(o.currentValue=r,o.userInput=null)},{immediate:!0}),pe(()=>{var e;const{min:n,max:r,modelValue:l}=a,s=(e=v.value)==null?void 0:e.input;if(s.setAttribute("role","spinbutton"),Number.isFinite(r)?s.setAttribute("aria-valuemax",String(r)):s.removeAttribute("aria-valuemax"),Number.isFinite(n)?s.setAttribute("aria-valuemin",String(n)):s.removeAttribute("aria-valuemin"),s.setAttribute("aria-valuenow",String(o.currentValue)),s.setAttribute("aria-disabled",String(N.value)),!d(l)&&l!=null){let p=Number(l);Number.isNaN(p)&&(p=null),c(h,p)}}),be(()=>{var e;const n=(e=v.value)==null?void 0:e.input;n==null||n.setAttribute("aria-valuenow",`${o.currentValue}`)}),k({focus:te,blur:re}),(e,n)=>(b(),z("div",{class:K([t(m).b(),t(m).m(t(L)),t(m).is("disabled",t(N)),t(m).is("without-controls",!e.controls),t(m).is("controls-right",t(A))]),onDragstart:n[1]||(n[1]=P(()=>{},["prevent"]))},[e.controls?Y((b(),z("span",{key:0,role:"button","aria-label":t(O)("el.inputNumber.decrease"),class:K([t(m).e("decrease"),t(m).is("disabled",t(U))]),onKeydown:_(T,["enter"])},[M(t(j),null,{default:$(()=>[t(A)?(b(),S(t(fe),{key:0})):(b(),S(t(ve),{key:1}))]),_:1})],42,ke)),[[t(J),T]]):q("v-if",!0),e.controls?Y((b(),z("span",{key:1,role:"button","aria-label":t(O)("el.inputNumber.increase"),class:K([t(m).e("increase"),t(m).is("disabled",t(G))]),onKeydown:_(B,["enter"])},[M(t(j),null,{default:$(()=>[t(A)?(b(),S(t(Ne),{key:0})):(b(),S(t(Ve),{key:1}))]),_:1})],42,Ae)),[[t(J),B]]):q("v-if",!0),M(t(Se),{id:e.id,ref_key:"input",ref:v,type:"number",step:e.step,"model-value":t(x),placeholder:e.placeholder,readonly:e.readonly,disabled:t(N),size:t(L),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:n[0]||(n[0]=P(()=>{},["prevent"])),onKeydown:[_(P(B,["prevent"]),["up"]),_(P(T,["prevent"]),["down"])],onBlur:ue,onFocus:ae,onInput:ee,onChange:ne},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var Be=he(Ce,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const Ke=ge(Be);export{Ke as E};
