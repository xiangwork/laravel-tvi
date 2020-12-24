(self.webpackChunk=self.webpackChunk||[]).push([[473],{6715:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const s={name:"InputGroup",model:{prop:"input_value"},props:{allow_parent_updates:{default:!0,type:Boolean},error_class:{default:"mt-1 text-red-500 text-sm",type:String},error_hide_on_input:{default:!0,type:Boolean},error_message:{default:"",type:String},input_autocomplete:{default:"",type:String},input_autofocus:{default:!1,type:Boolean},input_class:{default:"border border-theme-base-subtle font-medium px-3 py-2 rounded w-full focus:border-theme-primary focus:outline-none focus:ring-0",type:String},input_disabled:{default:!1,type:Boolean},input_id:{required:!0,type:String},input_name:{required:!0,type:String},input_placeholder:{default:"",type:String},input_required:{default:!1,type:Boolean},input_type:{default:"text",type:String},input_value:{default:"",type:String|Number},label_class:{default:"font-medium mb-2 text-theme-base-contrast text-sm tracking-wider",type:String},label_hidden:{default:!1,type:Boolean},label_text:{required:!0,type:String}},data:function(){return{hide_error:!1}},computed:{formatted_input_class:function(){return this.is_error?this.input_class+" error":this.input_class},formatted_label_class:function(){var t=this.label_class;return this.label_hidden&&(t+=" hidden"),t},is_error:function(){return!this.hide_error&&this.error_message&&""!==this.error_message}},mounted:function(){this.autofocus()},methods:{autofocus:function(){var t=this;this.input_autofocus&&this.$refs[this.input_id]&&this.$nextTick((function(){t.$refs[t.input_id].focus()}))},blurInput:function(){var t=this;this.$refs[this.input_id]&&this.$nextTick((function(){t.$refs[t.input_id].blur()}))},onErrorMessageChange:function(){this.hide_error=!1},onInputBlur:function(){this.$emit("blur")},onInputKeyPress:function(){this.$emit("input",this.$refs[this.input_id].value),this.error_hide_on_input&&(this.hide_error=!0)}},watch:{error_message:{handler:"onErrorMessageChange"}}};const r=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col"},[n("label",{class:t.formatted_label_class,attrs:{for:t.input_id}},[t._t("default",[n("span",{staticClass:"flex flex-row items-baseline"},[n("span",[t._v(t._s(t.label_text))]),t._v(" "),t.input_required?n("sup",{staticClass:"text-theme-danger-contrast"},[t._v("\n                    *\n                ")]):t._e()])])],2),t._v(" "),n("input",{ref:t.input_id,class:t.formatted_input_class,attrs:{id:t.input_id,autocomplete:t.input_autocomplete,disabled:t.input_disabled,name:t.input_name,placeholder:t.input_placeholder,required:t.input_required,type:t.input_type},domProps:{value:t.input_value},on:{blur:t.onInputBlur,input:t.onInputKeyPress,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.blurInput(e)}}}),t._v(" "),n("div",[n("transition",{attrs:{name:"slide-down-fade"}},[t.is_error?n("p",{class:t.error_class},[t._v("\n                "+t._s(t.error_message)+"\n            ")]):t._e()])],1)])}),[],!1,null,null,null).exports},8473:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const s={name:"AuthPassowrdEmail",components:{InputGroup:n(6715).Z},layout:"auth-layout",data:function(){return{form:{email:""}}},methods:{submit:function(){this.$inertia.post(this.$route("password.email"),this.form)}}};const r=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth-card-container"},[n("div",{staticClass:"auth-card"},[n("h1",{staticClass:"auth-header"},[t._v("\n            Password Reset\n        ")]),t._v(" "),t.$page.props.flash.status?n("p",{staticClass:"pb-8 px-6 text-center text-green-700"},[t._v("\n            "+t._s(t.$page.props.flash.status)+"\n        ")]):n("form",{staticClass:"px-6",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("input-group",{staticClass:"mt-4",attrs:{error_message:t.getPageErrorMessage("email"),input_autocomplete:"email",input_class:"auth-input",input_id:"email",input_name:"email",input_required:!0,input_type:"email",label_text:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),t._m(0)],1)]),t._v(" "),n("div",{staticClass:"flex justify-between mt-4"},[n("inertia-link",{staticClass:"\n                text-gray-300 text-sm tracking-wide\n                hover:text-theme-base-subtle-contrast\n            ",attrs:{href:t.$route("login")}},[t._v("\n            Login\n        ")]),t._v(" "),n("inertia-link",{staticClass:"\n                text-gray-300 text-sm tracking-wide\n                hover:text-theme-base-subtle-contrast\n            ",attrs:{href:t.$route("register")}},[t._v("\n            Register\n        ")])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row items-center justify-between mt-4 py-6"},[n("button",{staticClass:"\n                        bg-theme-primary px-4 py-2 rounded shadow text-theme-primary-contrast\n                        focus:outline-none focus:ring focus:ring-primary\n                        hover:bg-theme-primary-hover hover:shadow-lg\n                        transition-all ease-in-out duration-300\n                    ",attrs:{type:"submit"}},[t._v("\n                    Send Password Reset Link\n                ")])])}],!1,null,null,null).exports}}]);