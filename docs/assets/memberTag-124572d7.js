import{i as d,_ as C,d as w,o as y,c as E,a as h,b as t,w as l,F as k,e as r}from"./index-37d41569.js";import{c as O,E as s,a as F,b as v,d as I,e as M}from"./el-table-column-66116ad2.js";import{E as P,a as $,b as z,c as A}from"./el-form-item-efbf7196.js";import{E as U}from"./el-input-number-8b6bae46.js";/* empty css                   */import"./index-0f335ec0.js";function B(e){return d({url:"/mall/ums-member-tag/page",method:"post",data:e})}function L(e){return d({url:`/mall/ums-member-tag/one/${e}`,method:"get"})}function N(e){return d({url:`/mall/ums-member-tag/del/${e}`,method:"get"})}function W(e){return d({url:"/mall/ums-member-tag/add",method:"post",data:e})}function D(e){return d({url:"/mall/ums-member-tag/edit",method:"post",data:e})}const j=w({data(){return{memberTags:[],page:{total:0,current:1,size:10},searchId:null,dialogFormVisible:!1,memberTag:{finishOrderAmount:0,finishOrderCount:0,id:0,name:""},formLabelWidth:80}},mounted(){this.getMemberTagsPage(1)},methods:{search(){if(this.searchId==null||this.searchId==""){alert("请输入标签编号后查询");return}L(this.searchId).then(e=>{e.data==null?this.memberTags=[]:(this.memberTags=[],this.memberTags.push(e.data.help))}).catch(e=>{console.log(e)})},research(){this.searchId=null,this.getMemberTagsPage(1)},toEdit(e){this.dialogFormVisible=!0,this.memberTag=O(e)},getMemberTagsPage(e){B({current:e,size:10}).then(i=>{console.log(i);const g=i.data.page;this.memberTags=g.records,this.page=g}).catch(i=>{console.log(i)})},currentchange(e){this.getMemberTagsPage(e),this.page.current=e},del(e){confirm("是否删除")==!0&&console.log(e),console.log(e),N(e).then(a=>{if(a.success)this.getMemberTagsPage(this.page.current);else return!1}).catch(a=>{})},toAdd(){this.dialogFormVisible=!0,this.memberTag={finishOrderAmount:0,finishOrderCount:0,id:0,name:""}},save(){const e=this.memberTag;e.id==0?W(e).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getMemberTagsPage(this.page.current),s(a.msg);else return s(a.msg),!1}).catch(a=>{s("网络错误联系管理员")}):D(e).then(a=>{if(a.success)this.dialogFormVisible=!1,this.getMemberTagsPage(this.page.current),s(a.msg);else return s(a.msg),!1}).catch(a=>{s("网络错误联系管理员")})}}}),q={style:{"margin-top":"10px"}},G={style:{width:"95%",margin:"0 auto"}},H={class:"dialog-footer"};function J(e,a,i,g,K,Q){const p=z,u=P,n=$,m=M,c=F,f=v,b=U,_=A,T=I;return y(),E(k,null,[h("div",q,[h("div",G,[t(u,{label:"标签编号","label-width":80,style:{display:"inline-flex","margin-right":"10px"}},{default:l(()=>[t(p,{modelValue:e.searchId,"onUpdate:modelValue":a[0]||(a[0]=o=>e.searchId=o),placeholder:"请输入标签编号"},null,8,["modelValue"])]),_:1}),t(n,{type:"primary",onClick:e.search},{default:l(()=>[r("查询")]),_:1},8,["onClick"]),t(n,{type:"info",onClick:e.research},{default:l(()=>[r("重置")]),_:1},8,["onClick"]),t(n,{type:"success",onClick:e.toAdd},{default:l(()=>[r("添加 ")]),_:1},8,["onClick"])]),t(c,{data:e.memberTags,style:{width:"95%",margin:"0 auto"}},{default:l(()=>[t(m,{prop:"id",label:"编号",width:"100"}),t(m,{prop:"name",label:"标签名称",width:"200"}),t(m,{prop:"finishOrderCount",label:"自动打标签完成订单数量",width:"200"}),t(m,{prop:"finishOrderAmount",label:"自动打标签完成订单金额",width:"200"}),t(m,{fixed:"right",label:"功能管理",width:"140"},{default:l(o=>[t(n,{type:"warning",size:"small",onClick:V=>e.toEdit(o.row)},{default:l(()=>[r("更新")]),_:2},1032,["onClick"]),t(n,{type:"danger",size:"small",onClick:V=>e.del(o.row.id)},{default:l(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),t(f,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,style:{width:"95%",margin:"0 auto"},onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),t(T,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":a[5]||(a[5]=o=>e.dialogFormVisible=o),title:"标签编辑"},{footer:l(()=>[h("span",H,[t(n,{onClick:a[4]||(a[4]=o=>e.dialogFormVisible=!1)},{default:l(()=>[r("取消")]),_:1}),t(n,{type:"primary",onClick:e.save},{default:l(()=>[r("保存 ")]),_:1},8,["onClick"])])]),default:l(()=>[t(_,{model:e.memberTag},{default:l(()=>[t(u,{label:"标签名称","label-width":e.formLabelWidth},{default:l(()=>[t(p,{modelValue:e.memberTag.name,"onUpdate:modelValue":a[1]||(a[1]=o=>e.memberTag.name=o),placeholder:"请输入标签名称",style:{width:"80%"}},null,8,["modelValue"])]),_:1},8,["label-width"]),t(u,{label:"订单数量","label-width":e.formLabelWidth},{default:l(()=>[t(b,{modelValue:e.memberTag.finishOrderCount,"onUpdate:modelValue":a[2]||(a[2]=o=>e.memberTag.finishOrderCount=o),placeholder:"请输入订单数量",style:{width:"80%"}},null,8,["modelValue"])]),_:1},8,["label-width"]),t(u,{label:"订单金额","label-width":e.formLabelWidth},{default:l(()=>[t(b,{modelValue:e.memberTag.finishOrderAmount,"onUpdate:modelValue":a[3]||(a[3]=o=>e.memberTag.finishOrderAmount=o),placeholder:"请输入订单金额",style:{width:"80%"}},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const ee=C(j,[["render",J],["__scopeId","data-v-c93d9707"]]);export{ee as default};
