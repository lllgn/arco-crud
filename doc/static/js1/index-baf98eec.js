import{_ as F,d as S,h as D,i as E,k as w,r as s,o as f,f as P,a,u as i,w as e,e as o,t as B}from"../js2/index-4a7d71d6.js";const g=o("\u8857\u9053\u63D2\u69FD"),v=o("\u8857\u9053\u63D2\u69FD"),W=o("\u8857\u9053\u63D2\u69FD"),A=o("\u8857\u9053\u63D2\u69FD"),L=o("\u67E5\u770B "),C=o("\u7F16\u8F91 "),T=o("\u8BBE\u7F6E\u95E8\u5E97\u7C7B\u578B "),R=o("\u5220\u9664 "),q=S({setup(I){D(null);const m=E({loading:!1,option:{},columns:[{label:"\u6263\u7A0E\u7684\u623F\u4EF7\u80AF\u5B9A\u662F\u4ED8\u6B3E\u8BA1\u5212",prop:"name",type:"title",searchSort:0,desc:"\u6263\u7A0E\u7684\u623F\u4EF7\u80AF\u5B9A\u662F\u4ED8\u6B3E\u8BA1\u5212",hide:!0},{label:"\u59D3\u540D",prop:"name",help:"\u5E2E\u52A9\u63D0\u793A",width:140,type:"input",searchFormShow:!0,searchSort:11,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",rules:[{required:!0,message:"name is required"},{minLength:5,message:"must be greater than 5 characters"}],validateTrigger:["blur"],maxLength:10},{label:"\u7528\u6237\u4FE1\u606F",children:[{label:"\u751F\u65E5",prop:"birthday"},{label:"\u6027\u522B",prop:"sex",type:"radio",searchWidth:"500px",searchFormShow:!0,radioType:"button",width:140,searchSort:9,formItemWidth:"none",showWordLimit:!0,dictData:[{label:"\u7537",value:"1"},{label:"\u5973",value:"0"},{label:"\u672A\u77E5",value:"2"}]},{label:"\u7231\u597D",prop:"hobby",searchSort:6,type:"select",inputValue:"cc",searchFormShow:!0,width:140,showWordLimit:!0,dictData:[{label:"\u8DB3\u7403",value:"1"},{label:"\u821E\u8E48",value:"0"},{label:"\u97F3\u4E50",value:"2"}]},{label:"\u5730\u5740",children:[{label:"\u57CE\u5E02"},{label:"\u8857\u9053",prop:"road"},{label:"\u95E8\u724C",prop:"no"}]},{label:"\u8857\u9053",prop:"road",type:"input",searchFormShow:!0,searchSlot:!0,formSlot:!0}]},{label:"\u4FE1\u606F",children:[{label:"\u7535\u5B50\u90AE\u7BB1",prop:"email"},{label:"\u7535\u8BDD",prop:"phone"}]},{label:"\u85AA\u8D44",type:"input",prop:"salary",searchFormShow:!0,width:120,formItemWidth:"300px"},{label:"\u72B6\u6001",prop:"status",slot:!0,type:"radio",formSort:13,radioType:"button",width:140,formItemWidth:"none",dictData:[{label:"\u542F\u7528",value:"1"},{label:"\u7981\u7528",value:"0"}],rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u72B6\u6001",trigger:"blur"}],value:"1"}],tableData:[{key:"1",name:"Jane Doe",salary:2300,birthday:"1994-04-21",city:"London",road:"Park",hobby:"1",sex:"1",status:"1",no:"34",phone:"12345678",email:"jane.doe@example.com"},{key:"2",name:"Alisa Ross",salary:2500,birthday:"1994-05-21",city:"London",road:"Park",sex:"0",status:"1",hobby:"0",no:"37",phone:"12345678",email:"alisa.ross@example.com"},{key:"3",name:"Kevin Sandra",salary:2200,birthday:"1992-02-11",city:"Paris",road:"Arco",sex:"0",status:"0",hobby:"0",no:"67",phone:"12345678",email:"kevin.sandra@example.com"},{key:"4",name:"Ed Hellen",salary:1700,birthday:"1991-06-21",city:"London",road:"Park",no:"317",sex:"1",hobby:"1",phone:"12345678",email:"ed.hellen@example.com"},{key:"5",name:"William Smith",salary:2700,birthday:"1996-08-21",city:"Paris",road:"Park",sex:"1",no:"114",phone:"12345678",email:"william.smith@example.com"},{key:"5",name:"William Smith",salary:2700,birthday:"1996-08-21",city:"Paris",road:"Park",sex:"1",no:"114",phone:"12345678",email:"william.smith@example.com"},{key:"5",name:"William Smith",salary:2700,birthday:"1996-08-21",city:"Paris",road:"Park",sex:"1",no:"114",phone:"12345678",email:"william.smith@example.com"},{key:"5",name:"William Smith",salary:2700,birthday:"1996-08-21",city:"Paris",road:"Park",sex:"1",no:"114",phone:"12345678",email:"william.smith@example.com"},{key:"5",name:"William Smith",salary:2700,birthday:"1996-08-21",city:"Paris",road:"Park",sex:"1",no:"114",phone:"12345678",email:"william.smith@example.com"},{key:"5",name:"William Smith",salary:2700,birthday:"1996-08-21",city:"Paris",road:"Park",sex:"1",no:"114",phone:"12345678",email:"william.smith@example.com"},{key:"5",name:"William Smith",salary:2700,birthday:"1996-08-21",city:"Paris",road:"Park",sex:"1",no:"114",phone:"12345678",email:"william.smith@example.com"},{key:"5",name:"William Smith",salary:2700,birthday:"1996-08-21",city:"Paris",road:"Park",sex:"1",no:"114",phone:"12345678",email:"william.smith@example.com"},{key:"5",name:"William Smith",salary:2700,birthday:"1996-08-21",city:"Paris",road:"Park",sex:"1",no:"114",phone:"12345678",email:"william.smith@example.com"},{key:"5",name:"William Smith",salary:2700,birthday:"1996-08-21",city:"Paris",road:"Park",sex:"1",no:"114",phone:"12345678",email:"william.smith@example.com"},{key:"5",name:"William Smith",salary:2700,birthday:"1996-08-21",city:"Paris",road:"Park",sex:"1",no:"114",phone:"12345678",email:"william.smith@example.com"}]}),{loading:n,option:d,columns:h,tableData:c}=w(m),p=(t,r)=>{console.log("onSave",r),setTimeout(()=>{t()},2e3)},y=(t,r)=>{console.log("onDel",r),setTimeout(()=>{t()},2e3)},u=(t,r)=>{console.log("onUpdate",r),setTimeout(()=>{t()},2e3)},b=t=>{console.log(t)},x=()=>{};return(t,r)=>{const l=s("a-button"),_=s("arco-crud");return f(),P("div",null,[a(_,{loading:i(n),option:i(d),columns:i(h),"table-data":i(c),beforeAddModalOpen:u,onRefresh:x,onRowUpdate:u,onRowSave:p,onRowDel:y,onSearchChange:b},{roadSearch:e(()=>[a(l,{type:"primary"},{default:e(()=>[g]),_:1})]),roadForm:e(({scope:k})=>[o(B(k)+" ",1),a(l,{type:"primary"},{default:e(()=>[v]),_:1})]),status:e(()=>[a(l,{type:"primary"},{default:e(()=>[W]),_:1})]),menuLeftStart:e(()=>[a(l,{type:"primary"},{default:e(()=>[A]),_:1})]),handleMenuBefore:e(()=>[a(l,{type:"text"},{default:e(()=>[L]),_:1}),a(l,{type:"text"},{default:e(()=>[C]),_:1}),a(l,{type:"text"},{default:e(()=>[T]),_:1}),a(l,{type:"text"},{default:e(()=>[R]),_:1})]),_:1},8,["loading","option","columns","table-data"])])}}});var V=F(q,[["__file","E:/lg/project/arco/github/arco-crud/src/demo/crud_demo/index.vue"]]);export{V as default};
//# sourceMappingURL=index-baf98eec.js.map