(self.webpackChunk=self.webpackChunk||[]).push([[315],{3315:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>B});var o=r(5166),a={class:"w-full h-screen font-sans bg-cover bg-landscape"},s={class:"container flex items-center justify-center flex-1 h-full mx-auto"},n={class:"w-full max-w-lg"},l={class:"leading-loose"},c=(0,o.createVNode)("p",{class:"mb-8 text-2xl font-light text-center text-white"}," Say Something Kind? ",-1),i={key:0,class:"text-l text-red-500 bg-black font-light text-center"},d={key:1,class:"rounded-lg border-transparent border mb-2 text-l text-green-500 bg-green-200 font-light text-center"},p={key:2,class:"text-l text-purple-500 bg-purple-200 font-light text-center"},u={class:"mb-2"},m={class:" relative "},f={key:0,class:"text-red-500 text-xs"},g={class:"mb-2"},x={class:" relative "},b={key:0,class:"text-red-500 text-xs"},h={class:"mb-2"},y={class:" relative "},v={key:0,class:"text-red-500 text-xs"},V={class:"flex items-center justify-between mt-4"},w={type:"submit",class:"py-2 px-4  bg-purple-600 hover:bg-purple-800 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "};var k=r(9680);const N={components:{},props:["phone","email","resumeUrl","submitButtonText"],setup:function(){var e=(0,o.reactive)({name:null,contact:null,message:null});return{form:e,submit:function(){k.Inertia.post("/contacts",e)}}},render:function(e,t,r,k,N,B){return(0,o.openBlock)(),(0,o.createBlock)("div",a,[(0,o.createVNode)("div",s,[(0,o.createVNode)("div",n,[(0,o.createVNode)("div",l,[(0,o.createVNode)("form",{id:"note-form",class:"max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl",onSubmit:t[4]||(t[4]=(0,o.withModifiers)((function(){return k.submit&&k.submit.apply(k,arguments)}),["prevent"]))},[c,e.$page.props.flash.message?((0,o.openBlock)(),(0,o.createBlock)("div",i,[(0,o.createVNode)("b",null,(0,o.toDisplayString)(e.$page.props.flash.message),1)])):(0,o.createCommentVNode)("",!0),e.$page.props.flash.success?((0,o.openBlock)(),(0,o.createBlock)("div",d,[(0,o.createVNode)("b",null,(0,o.toDisplayString)(e.$page.props.flash.success),1)])):(0,o.createCommentVNode)("",!0),e.$page.props.flash.info?((0,o.openBlock)(),(0,o.createBlock)("div",p,[(0,o.createVNode)("b",null,(0,o.toDisplayString)(e.$page.props.flash.info),1)])):(0,o.createCommentVNode)("",!0),(0,o.createVNode)("div",u,[(0,o.createVNode)("div",m,[(0,o.withDirectives)((0,o.createVNode)("input",{type:"text",required:"",id:"email",class:" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",placeholder:"email or phone",name:"contact","onUpdate:modelValue":t[1]||(t[1]=function(e){return k.form.contact=e})},null,512),[[o.vModelText,k.form.contact]]),e.$attrs.errors.contact?((0,o.openBlock)(),(0,o.createBlock)("p",f,(0,o.toDisplayString)(e.$attrs.errors.contact),1)):(0,o.createCommentVNode)("",!0)])]),(0,o.createVNode)("div",g,[(0,o.createVNode)("div",x,[(0,o.withDirectives)((0,o.createVNode)("input",{type:"text",id:"name",class:" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",placeholder:"name",name:"name","onUpdate:modelValue":t[2]||(t[2]=function(e){return k.form.name=e})},null,512),[[o.vModelText,k.form.name]]),e.$attrs.errors.name?((0,o.openBlock)(),(0,o.createBlock)("p",b,(0,o.toDisplayString)(e.$attrs.errors.name),1)):(0,o.createCommentVNode)("",!0)])]),(0,o.createVNode)("div",h,[(0,o.createVNode)("div",y,[(0,o.withDirectives)((0,o.createVNode)("textarea",{form:"note-form",type:"text",id:"message",class:" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent",placeholder:"...",name:"message","onUpdate:modelValue":t[3]||(t[3]=function(e){return k.form.message=e})},null,512),[[o.vModelText,k.form.message]]),e.$attrs.errors.message?((0,o.openBlock)(),(0,o.createBlock)("p",v,(0,o.toDisplayString)(e.$attrs.errors.message),1)):(0,o.createCommentVNode)("",!0)])]),(0,o.createVNode)("div",V,[(0,o.createVNode)("button",w,(0,o.toDisplayString)(r.submitButtonText),1)])],32)])])])])}},B=N}}]);