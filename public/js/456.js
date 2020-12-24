(self.webpackChunk=self.webpackChunk||[]).push([[456],{7801:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});const r={name:"CheckboxGroup",model:{prop:"checkbox_value"},props:{allow_parent_updates:{default:!0,type:Boolean},error_class:{default:"mt-1 text-red-500 text-sm",type:String},error_hide_on_change:{default:!0,type:Boolean},error_message:{default:"",type:String},checkbox_autofocus:{default:!1,type:Boolean},checkbox_class:{default:"cursor-pointer form-checkbox h-5 mr-2 rounded text-theme-primary w-5 focus:border-theme-primary focus:outline-none focus:ring focus:ring-primary",type:String},checkbox_disabled:{default:!1,type:Boolean},checkbox_id:{required:!0,type:String},checkbox_name:{required:!0,type:String},checkbox_required:{default:!1,type:Boolean},checkbox_value:{default:!1,type:String|Number|Boolean},checkbox_value_false:{default:!1,type:String|Number|Boolean},checkbox_value_true:{default:!0,type:String|Number|Boolean},label_class:{default:"cursor-pointer font-medium select-none text-theme-base-contrast text-sm tracking-wider",type:String},label_text:{required:!0,type:String}},data:function(){return{editable_value:!1,hide_error:!1}},computed:{formatted_checkbox_class:function(){return this.is_error?this.checkbox_class+" error":this.checkbox_class},is_checked:function(){return this.editable_value===this.checkbox_value_true},is_error:function(){return!this.hide_error&&this.error_message&&""!==this.error_message}},mounted:function(){this.editable_value=this.checkbox_value,this.autofocus()},methods:{autofocus:function(){var e=this;this.checkbox_autofocus&&this.$refs[this.checkbox_id]&&this.$nextTick((function(){e.$refs[e.checkbox_id].focus()}))},blurCheckbox:function(){var e=this;this.$refs[this.checkbox_id]&&this.$nextTick((function(){e.$refs[e.checkbox_id].blur()}))},onErrorMessageChange:function(){this.hide_error=!1},onCheckboxChange:function(e){this.$emit("input",this.is_checked?this.checkbox_value_true:this.checkbox_value_false),this.error_hide_on_change&&(this.hide_error=!0)}},watch:{error_message:{handler:"onErrorMessageChange"}}};const s=(0,a(1900).Z)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col"},[a("div",{staticClass:"flex-flex-row"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.editable_value,expression:"editable_value"}],ref:e.checkbox_id,class:e.formatted_checkbox_class,attrs:{id:e.checkbox_id,disabled:e.checkbox_disabled,"false-value":e.checkbox_value_false,name:e.checkbox_name,required:e.checkbox_required,"true-value":e.checkbox_value_true,type:"checkbox"},domProps:{checked:Array.isArray(e.editable_value)?e._i(e.editable_value,null)>-1:e._q(e.editable_value,e.checkbox_value_true)},on:{change:[function(t){var a=e.editable_value,r=t.target,s=r.checked?e.checkbox_value_true:e.checkbox_value_false;if(Array.isArray(a)){var i=e._i(a,null);r.checked?i<0&&(e.editable_value=a.concat([null])):i>-1&&(e.editable_value=a.slice(0,i).concat(a.slice(i+1)))}else e.editable_value=s},e.onCheckboxChange],keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.blurCheckbox(t)}}}),e._v(" "),a("label",{class:e.label_class,attrs:{for:e.checkbox_id}},[a("span",{staticClass:"flex flex-row items-baseline"},[a("span",[e._v(e._s(e.label_text))]),e._v(" "),e.checkbox_required?a("sup",{staticClass:"text-theme-danger-contrast"},[e._v("\n                    *\n                ")]):e._e()])])]),e._v(" "),a("div",[a("transition",{attrs:{name:"slide-down-fade"}},[e.is_error?a("p",{class:e.error_class},[e._v("\n                "+e._s(e.error_message)+"\n            ")]):e._e()])],1)])}),[],!1,null,null,null).exports},6715:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});const r={name:"InputGroup",model:{prop:"input_value"},props:{allow_parent_updates:{default:!0,type:Boolean},error_class:{default:"mt-1 text-red-500 text-sm",type:String},error_hide_on_input:{default:!0,type:Boolean},error_message:{default:"",type:String},input_autocomplete:{default:"",type:String},input_autofocus:{default:!1,type:Boolean},input_class:{default:"border border-theme-base-subtle font-medium px-3 py-2 rounded w-full focus:border-theme-primary focus:outline-none focus:ring-0",type:String},input_disabled:{default:!1,type:Boolean},input_id:{required:!0,type:String},input_name:{required:!0,type:String},input_placeholder:{default:"",type:String},input_required:{default:!1,type:Boolean},input_type:{default:"text",type:String},input_value:{default:"",type:String|Number},label_class:{default:"font-medium mb-2 text-theme-base-contrast text-sm tracking-wider",type:String},label_hidden:{default:!1,type:Boolean},label_text:{required:!0,type:String}},data:function(){return{hide_error:!1}},computed:{formatted_input_class:function(){return this.is_error?this.input_class+" error":this.input_class},formatted_label_class:function(){var e=this.label_class;return this.label_hidden&&(e+=" hidden"),e},is_error:function(){return!this.hide_error&&this.error_message&&""!==this.error_message}},mounted:function(){this.autofocus()},methods:{autofocus:function(){var e=this;this.input_autofocus&&this.$refs[this.input_id]&&this.$nextTick((function(){e.$refs[e.input_id].focus()}))},blurInput:function(){var e=this;this.$refs[this.input_id]&&this.$nextTick((function(){e.$refs[e.input_id].blur()}))},onErrorMessageChange:function(){this.hide_error=!1},onInputBlur:function(){this.$emit("blur")},onInputKeyPress:function(){this.$emit("input",this.$refs[this.input_id].value),this.error_hide_on_input&&(this.hide_error=!0)}},watch:{error_message:{handler:"onErrorMessageChange"}}};const s=(0,a(1900).Z)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-col"},[a("label",{class:e.formatted_label_class,attrs:{for:e.input_id}},[e._t("default",[a("span",{staticClass:"flex flex-row items-baseline"},[a("span",[e._v(e._s(e.label_text))]),e._v(" "),e.input_required?a("sup",{staticClass:"text-theme-danger-contrast"},[e._v("\n                    *\n                ")]):e._e()])])],2),e._v(" "),a("input",{ref:e.input_id,class:e.formatted_input_class,attrs:{id:e.input_id,autocomplete:e.input_autocomplete,disabled:e.input_disabled,name:e.input_name,placeholder:e.input_placeholder,required:e.input_required,type:e.input_type},domProps:{value:e.input_value},on:{blur:e.onInputBlur,input:e.onInputKeyPress,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.blurInput(t)}}}),e._v(" "),a("div",[a("transition",{attrs:{name:"slide-down-fade"}},[e.is_error?a("p",{class:e.error_class},[e._v("\n                "+e._s(e.error_message)+"\n            ")]):e._e()])],1)])}),[],!1,null,null,null).exports},1456:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var r=a(6486),s=a.n(r),i=a(7801),n=a(6715);const o={name:"AdminUserCreate",components:{InlineCheckboxGroup:i.Z,InputGroup:n.Z},layout:"admin-layout",props:{selectable_roles:{default:null}},data:function(){return{formData:{email:"",first_name:"",last_name:"",password:"",password_confirmation:"",roles:{}}}},computed:{is_selectable_roles:function(){try{return Object.keys(this.selectable_roles).length>0}catch(e){return!1}}},mounted:function(){this.initialiseRoles()},methods:{initialiseRoles:function(){var e=this;s().forEach(this.selectable_roles,(function(t,a){e.formData.roles.hasOwnProperty(a)||(e.formData.roles[a]=!1)}))},submit:function(){this.$inertia.post(this.$route("admin.users.store"),this.formData)}}};const l=(0,a(1900).Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"max-w-5xl mx-auto",attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[e.userCan("profile.edit")?a("div",{staticClass:"flex flex-row items-center mb-6"},[a("h1",{staticClass:"mr-auto text-lg"},[e._v("\n            Create User\n        ")]),e._v(" "),e.userCan("users.view")?a("inertia-link",{staticClass:"\n                button button-default-responsive button-primary-subtle\n                flex flex-row items-center mr-2\n            ",attrs:{href:e.$route("admin.users.index")}},[a("icon-chevron-left",{staticClass:"w-5 md:mr-2"}),e._v(" "),a("span",{staticClass:"hidden md:inline"},[e._v("\n                Back\n            ")])],1):e._e(),e._v(" "),a("button",{staticClass:"\n                button button-default-responsive button-primary\n                flex flex-row items-center\n            ",attrs:{type:"submit"}},[a("icon-save",{staticClass:"\n                    w-5\n                    md:mr-2\n                "}),e._v(" "),a("span",{staticClass:"hidden md:inline"},[e._v("\n                Create User\n            ")])],1)],1):e._e(),e._v(" "),a("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[a("div",{staticClass:"block px-6 w-full"},[a("input-group",{attrs:{error_message:e.getPageErrorMessage("first_name"),input_autocomplete:"first_name",input_autofocus:!0,input_id:"first_name",input_name:"first_name",input_required:!0,input_type:"text",label_text:"First Name"},model:{value:e.formData.first_name,callback:function(t){e.$set(e.formData,"first_name",t)},expression:"formData.first_name"}}),e._v(" "),a("input-group",{staticClass:"mt-4",attrs:{error_message:e.getPageErrorMessage("last_name"),input_autocomplete:"last_name",input_id:"last_name",input_name:"last_name",input_required:!0,input_type:"text",label_text:"Last Name"},model:{value:e.formData.last_name,callback:function(t){e.$set(e.formData,"last_name",t)},expression:"formData.last_name"}}),e._v(" "),a("input-group",{staticClass:"mt-4",attrs:{error_message:e.getPageErrorMessage("email"),input_autocomplete:"off",input_id:"email",input_name:"email",input_required:!0,input_type:"email",label_text:"Email"},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData.email"}}),e._v(" "),a("input-group",{staticClass:"mt-4",attrs:{error_message:e.getPageErrorMessage("password"),input_autocomplete:"off",input_id:"password",input_name:"password",input_required:!0,input_type:"password",label_text:"Password"},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}}),e._v(" "),a("input-group",{staticClass:"mt-4",attrs:{error_message:e.getPageErrorMessage("password_confirmation"),input_autocomplete:"off",input_id:"password_confirmation",input_name:"password_confirmation",input_required:!0,input_type:"password",label_text:"Confirm Password"},model:{value:e.formData.password_confirmation,callback:function(t){e.$set(e.formData,"password_confirmation",t)},expression:"formData.password_confirmation"}})],1)]),e._v(" "),e.is_selectable_roles?a("div",{staticClass:"bg-white mt-6 py-6 shadow-subtle rounded-lg"},[a("div",{staticClass:"block px-6 w-full"},[a("p",{staticClass:"font-medium mb-4 text-theme-base-contrast tracking-wider"},[e._v("\n                Roles\n            ")]),e._v(" "),a("div",{staticClass:"space-y-2"},e._l(e.selectable_roles,(function(t,r){return a("inline-checkbox-group",{key:"user-role-"+r,attrs:{checkbox_id:"user-role-"+r,checkbox_name:"user-role-"+r,label_text:t},model:{value:e.formData.roles[r],callback:function(t){e.$set(e.formData.roles,r,t)},expression:"formData.roles[role_key]"}})})),1)])]):e._e()])}),[],!1,null,null,null).exports}}]);