import{_ as B,d as g,h as t,i as f,k as v,r as l,o as b,f as _,a as n,u as a,m as h,w as C,e as y}from"../js2/index-4a7d71d6.js";const x=y("\u4E0B\u4E00\u6B65"),T=g({setup(q){const e=t({validate:()=>null});t(null);const s=f({form:{},option:{width:"500px",padding:"4px",showButton:!1},columns:[{label:"\u7EC4\u7EC7",prop:"gz",type:"cascader",dictData:[],placeholder:"\u8BF7\u8F93\u9009\u62E92\u53F7\u4EBA\u4E8B\u90E8\u7EC4\u7EC7",rules:[{required:!0,message:"\u8BF7\u8F93\u9009\u62E92\u53F7\u4EBA\u4E8B\u90E8\u7EC4\u7EC7"}],validateTrigger:["blur","change"]},{label:"\u95E8\u5E97\u540D\u79F0",prop:"name",type:"input",placeholder:"\u8BF7\u8F93\u5165\u7C7B\u578B\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7C7B\u578B\u540D\u79F0"}],validateTrigger:["blur"]},{label:"\u5F00\u4E1A\u65F6\u95F4",prop:"opentime",type:"date",placeholder:"\u8BF7\u9009\u62E9\u5F00\u4E1A\u65F6\u95F4",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5F00\u4E1A\u65F6\u95F4"}],validateTrigger:["blur","change"]},{label:"\u751F\u6548\u65F6\u95F4",prop:"opentime",type:"date",placeholder:"\u8BF7\u9009\u62E9\u751F\u6548\u65F6\u95F4",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u751F\u6548\u65F6\u95F4"}],validateTrigger:["blur","change"]},{label:"\u95E8\u5E97\u7C7B\u578B",prop:"type",type:"radio",radioType:"button",required:!0,dictData:[{label:"A",value:"1"},{label:"B",value:"0"}],rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u95E8\u5E97\u7C7B\u578B"}],validateTrigger:["blur","change"]},{label:"\u72B6\u6001",prop:"status",type:"radio",align:"center",radioType:"button",formItemWidth:"none",dictData:[{label:"\u4E0A\u67B6",value:"1"},{label:"\u4E0B\u67B6",value:"0"}],rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u95E8\u5E97\u7C7B\u578B"}],validateTrigger:["blur","change"],value:"1"}]}),{form:r,option:i,columns:p}=v(s),d=()=>{console.log("formRef",e),e.value.validate().then(u=>{console.log("res",u)})},c=u=>{console.log("valvalvalval",u)};return(u,o)=>{const m=l("arco-form"),E=l("a-button");return b(),_("div",null,[n(m,{ref_key:"formRef",ref:e,form:a(r),"onUpdate:form":o[0]||(o[0]=F=>h(r)?r.value=F:null),model:"normal",columns:a(p),option:a(i),onFormColumnInput:c},null,8,["form","columns","option"]),n(E,{type:"primary",onClick:d},{default:C(()=>[x]),_:1})])}}});var D=B(T,[["__file","E:/lg/project/arco/github/arco-crud/src/demo/form_demo/index.vue"]]);export{D as default};
//# sourceMappingURL=index-301feff7.js.map
