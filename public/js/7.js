(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/Pwt":function(e,t,s){"use strict";s.r(t);var n=s("LvDl"),i=s.n(n),a=s("Wz0r"),r=s("eMEN"),o=s("5qNN"),l={name:"AdminUserIndex",components:{ConfirmationModal:r.a,InputGroup:o.a},layout:"admin-layout",props:{search_options:Array|Object,users:Object},data:function(){return{editable_search_options:{per_page:15,user_first_name:"",user_last_name:"",user_email:""},is_initialised:!1,is_loading_user_delete:!1,show_delete_modal:!1,user_to_delete:null}},computed:{delete_modal_text:function(){try{return"Do you really want to delete '"+this.user_to_delete.name+"'?"}catch(e){return"Do you really want to delete this user?"}},show_users_actions:function(){return this.userCan("users.edit")||this.userCan("users.delete")},show_pagination:function(){try{return this.users.pagination.last_page>1}catch(e){return!1}},users_data:function(){return!(!this.users||!this.users.data||this.users.data.length<1)&&this.users.data}},mounted:function(){this.setSearchOptions(this.search_options)},methods:{cancelUserDelete:function(){this.is_loading_user_delete||(this.show_delete_modal=!1,this.user_to_delete=null)},checkUserDelete:function(e){this.show_delete_modal=!0,this.user_to_delete=e},confirmUserDelete:function(){if(this.is_loading_user_delete)return this.$errorToast("It's only possible to delete one user at a time.");this.$inertia.delete(this.$route("admin.users.destroy",this.user_to_delete.id),{only:["flash","users"]}),this.user_to_delete=null,this.show_delete_modal=!1},isUserCurrent:function(e){try{return e.id===this.$page.props.auth.user.id}catch(e){return!1}},onSearchOptionsUpdate:i.a.debounce((function(){!this.is_initialised&&(this.is_initialised=!0,this.users_data)||a.Inertia.get(this.$route("admin.users.index"),this.editable_search_options,{only:["users"],preserveState:!0})}),500),setSearchOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={per_page:15,user_first_name:"",user_last_name:"",user_email:""};try{i.a.forEach(e,(function(e,s){t[s]=e}))}catch(e){console.log(e)}this.editable_search_options=i.a.cloneDeep(t)}},watch:{editable_search_options:{deep:!0,handler:"onSearchOptionsUpdate"}}},u=s("KHd+"),c=Object(u.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("div",{staticClass:"flex flex-row items-center mb-6"},[s("h1",{staticClass:"mr-auto text-lg"},[e._v("\n            Users\n        ")]),e._v(" "),e.userCan("users.create")?s("inertia-link",{staticClass:"\n                button button-default-responsive button-primary\n                flex flex-row items-center\n            ",attrs:{href:e.$route("admin.users.create")}},[s("icon-plus",{staticClass:"w-5 md:mr-2"}),e._v(" "),s("span",{staticClass:"hidden md:inline"},[e._v("\n                Create User\n            ")])],1):e._e()],1),e._v(" "),s("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[s("h1",{staticClass:"font-semibold px-6 text-gray-850"},[e._v("\n            Search\n        ")]),e._v(" "),s("div",{staticClass:"\n                flex flex-col items-center mt-4 px-6 space-y-4\n                md:flex-row md:space-y-0 md:space-x-8\n            "},[s("div",{staticClass:"w-full md:w-1/3"},[s("input-group",{attrs:{input_autocomplete:"user_first_name_search",input_class:"form-control form-control-short",input_id:"user_first_name",input_name:"user_first_name",input_placeholder:"First Name",input_type:"text",label_hidden:!0,label_text:"First Name"},model:{value:e.editable_search_options.user_first_name,callback:function(t){e.$set(e.editable_search_options,"user_first_name",t)},expression:"editable_search_options.user_first_name"}})],1),e._v(" "),s("div",{staticClass:"w-full md:w-1/3"},[s("input-group",{attrs:{input_autocomplete:"user_last_name_search",input_class:"form-control form-control-short",input_id:"user_last_name",input_name:"user_last_name",input_placeholder:"Last Name",input_type:"text",label_hidden:!0,label_text:"Last Name"},model:{value:e.editable_search_options.user_last_name,callback:function(t){e.$set(e.editable_search_options,"user_last_name",t)},expression:"editable_search_options.user_last_name"}})],1),e._v(" "),s("div",{staticClass:"w-full md:w-1/3"},[s("input-group",{attrs:{input_autocomplete:"user_email_search",input_class:"form-control form-control-short",input_id:"user_email",input_name:"user_email",input_placeholder:"Email",input_type:"text",label_hidden:!0,label_text:"Email"},model:{value:e.editable_search_options.user_email,callback:function(t){e.$set(e.editable_search_options,"user_email",t)},expression:"editable_search_options.user_email"}})],1)]),e._v(" "),e.users_data?[s("div",{staticClass:"block mt-8 overflow-x-auto w-full"},[s("table",{staticClass:"table table-hover table-striped w-full"},[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Email")]),e._v(" "),e.show_users_actions?s("th"):e._e()])]),e._v(" "),s("tbody",e._l(e.users_data,(function(t,n){return s("tr",{key:"user-"+t.id},[s("td",[e._v("\n                                "+e._s(t.name)+"\n                            ")]),e._v(" "),s("td",[e._v("\n                                "+e._s(t.email)+"\n                            ")]),e._v(" "),e.show_users_actions?s("td",[s("div",{staticClass:"flex flex-row items-center justify-end -mx-1"},[e.userCan("users.edit")?s("inertia-link",{staticClass:"\n                                            flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                            focus:outline-none focus:shadow-outline\n                                            hover:bg-theme-info hover:text-theme-info-contrast\n                                        ",attrs:{href:e.$route("admin.users.edit",t.id),title:"Edit User"}},[s("icon-edit",{staticClass:"w-4"})],1):e._e(),e._v(" "),e.userCan("users.delete")?s("button",{staticClass:"\n                                            flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                            focus:outline-none focus:shadow-outline\n                                            hover:bg-theme-danger hover:text-theme-danger-contrast\n                                        ",attrs:{disabled:e.isUserCurrent(t),title:"Delete User"},on:{click:function(s){return e.checkUserDelete(t)}}},[s("icon-trash",{staticClass:"w-4"})],1):e._e()],1)]):e._e()])})),0)])])]:s("p",{staticClass:"bg-theme-base-subtle mt-6 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"},[e._v("\n            No users\n        ")]),e._v(" "),e.show_pagination?s("div",{staticClass:"flex flex-row justify-center mt-12 px-6"},[s("pagination",{attrs:{pagination:e.users.pagination}})],1):e._e(),e._v(" "),s("confirmation-modal",{attrs:{confirmText:"Delete",confirmType:"danger",showModal:e.show_delete_modal,messageText:e.delete_modal_text},on:{cancelAction:e.cancelUserDelete,closeModal:e.cancelUserDelete,confirmAction:e.confirmUserDelete}})],2)])}),[],!1,null,null,null);t.default=c.exports},"5qNN":function(e,t,s){"use strict";var n={name:"InputGroup",model:{prop:"input_value"},props:{allow_parent_updates:{default:!0,type:Boolean},error_class:{default:"mt-1 text-red-500 text-sm",type:String},error_hide_on_input:{default:!0,type:Boolean},error_message:{default:"",type:String},input_autocomplete:{default:"",type:String},input_autofocus:{default:!1,type:Boolean},input_class:{default:"border border-theme-base-subtle font-medium px-3 py-2 rounded w-full focus:outline-none focus:border-theme-primary",type:String},input_disabled:{default:!1,type:Boolean},input_id:{required:!0,type:String},input_name:{required:!0,type:String},input_placeholder:{default:"",type:String},input_required:{default:!1,type:Boolean},input_type:{default:"text",type:String},input_value:{default:"",type:String|Number},label_class:{default:"font-medium mb-2 text-theme-base-contrast text-sm tracking-wider",type:String},label_hidden:{default:!1,type:Boolean},label_text:{required:!0,type:String}},data:function(){return{hide_error:!1}},computed:{formatted_input_class:function(){return this.is_error?this.input_class+" error":this.input_class},formatted_label_class:function(){var e=this.label_class;return this.label_hidden&&(e+=" hidden"),e},is_error:function(){return!this.hide_error&&this.error_message&&""!==this.error_message}},mounted:function(){this.autofocus()},methods:{autofocus:function(){var e=this;this.input_autofocus&&this.$refs[this.input_id]&&this.$nextTick((function(){e.$refs[e.input_id].focus()}))},blurInput:function(){var e=this;this.$refs[this.input_id]&&this.$nextTick((function(){e.$refs[e.input_id].blur()}))},onErrorMessageChange:function(){this.hide_error=!1},onInputBlur:function(){this.$emit("blur")},onInputKeyPress:function(){this.$emit("input",this.$refs[this.input_id].value),this.error_hide_on_input&&(this.hide_error=!0)}},watch:{error_message:{handler:"onErrorMessageChange"}}},i=s("KHd+"),a=Object(i.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-col"},[s("label",{class:e.formatted_label_class,attrs:{for:e.input_id}},[e._v("\n        "+e._s(e.label_text)+"\n    ")]),e._v(" "),s("input",{ref:e.input_id,class:e.formatted_input_class,attrs:{id:e.input_id,autocomplete:e.input_autocomplete,disabled:e.input_disabled,name:e.input_name,placeholder:e.input_placeholder,required:e.input_required,type:e.input_type},domProps:{value:e.input_value},on:{blur:e.onInputBlur,input:e.onInputKeyPress,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.blurInput(t)}}}),e._v(" "),s("div",[s("transition",{attrs:{name:"slide-down-fade"}},[e.is_error?s("p",{class:e.error_class},[e._v("\n                "+e._s(e.error_message)+"\n            ")]):e._e()])],1)])}),[],!1,null,null,null);t.a=a.exports},eMEN:function(e,t,s){"use strict";var n={name:"ConfirmationModal",mixins:[s("x9sl").mixin],props:{componentName:{default:"confirmation-modal",type:String},cancelText:{default:"Cancel",type:String},confirmText:{default:"Confirm",type:String},confirmType:{default:"primary",type:String},isActionLoading:{default:!1,type:Boolean},messageText:{default:"Do you really want to continue?",type:String},messageTitle:{default:"Are you sure?",type:String},showModal:{default:!0,type:Boolean}},computed:{confirmButtonClass:function(){var e=[];return e.push("bg-theme-"+this.confirmType),e.push("border-theme-"+this.confirmType),e.push("text-theme-"+this.confirmType+"-contrast"),e.push("hover:bg-theme-"+this.confirmType+"-hover"),e.push("hover:border-theme-"+this.confirmType+"-hover"),e.push("hover:text-theme-"+this.confirmType+"-hover-contrast"),e},isMessage:function(){return this.isMessageText&&this.isMessageTitle},isMessageText:function(){return!!this.messageText.length},isMessageTitle:function(){return!!this.messageTitle.length}},methods:{cancelAction:function(){this.$emit("cancelAction")},closeModal:function(){this.$emit("closeModal")},confirmAction:function(){this.$emit("confirmAction")}}},i=s("KHd+"),a=Object(i.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.showModal?s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"absolute bg-gray-800 bg-opacity-75 flex h-full inset-0 items-center justify-center w-full p-4 z-30",class:e.componentName},[s("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.closeModal,expression:"closeModal"}],staticClass:"bg-theme-card max-h-full max-w-full overflow-y-auto relative rounded shadow-md text-theme-card-contrast w-96"},[s("div",{staticClass:"flex flex-row justify-end p-2"},[s("button",{staticClass:"\n                        flex h-5 items-center justify-center rounded text-theme-base-subtle-contrast w-5\n                        ease-in-out duration-300 transition-colors\n                        focus:outline-none focus:shadow-outline-primary\n                        hover:bg-theme-base-subtle\n                    ",attrs:{disabled:e.isActionLoading},on:{click:e.closeModal}},[s("icon-close")],1)]),e._v(" "),e._t("default",[e.isMessage?s("div",{staticClass:"flex flex-col items-center mt-6 px-4 text-center"},[e.messageTitle?s("h2",{staticClass:"font-semibold text-lg"},[e._v("\n                        "+e._s(e.messageTitle)+"\n                    ")]):e._e(),e._v(" "),e.messageText?s("p",{staticClass:"mt-2 text-center text-gray-700"},[e._v("\n                        "+e._s(e.messageText)+"\n                    ")]):e._e()]):e._e()]),e._v(" "),s("div",{staticClass:"\n                    flex flex-col items-center justify-center mb-4 mt-8 px-4 space-y-2\n                    sm:flex-row sm:space-x-3 sm:space-y-0\n                "},[s("button",{staticClass:"\n                        bg-theme-base-subtle min-w-24 px-4 py-2 rounded text-center text-theme-base-subtle-contrast w-full\n                        ease-in-out duration-300 transition-colors\n                        sm:w-auto\n                        focus:outline-none focus:shadow-outline-primary\n                        hover:bg-theme-base-subtle-contrast hover:text-theme-base-subtle\n                    ",attrs:{disabled:e.isActionLoading,type:"button"},on:{click:e.cancelAction}},[e._v("\n                    "+e._s(e.cancelText)+"\n                ")]),e._v(" "),s("button",{staticClass:"\n                        border flex flex-row items-center justify-center px-4 py-2 min-w-24 px-4 py-2 rounded text-center w-full\n                        ease-in-out duration-300 transition-colors\n                        sm:w-auto\n                        focus:outline-none focus:shadow-outline-primary\n                    ",class:e.confirmButtonClass,attrs:{disabled:e.isActionLoading,type:"button"},on:{click:e.confirmAction}},[e.isActionLoading?s("icon-loader-circle",{staticClass:"animate-spin-slow mr-2 w-5"}):s("span",[e._v("\n                        "+e._s(e.confirmText)+"\n                    ")])],1)])],2)])]):e._e()}),[],!1,null,null,null);t.a=a.exports},x9sl:function(e,t,s){"use strict";var n=s("XuX8");n="default"in n?n.default:n;/^2\./.test(n.version)||n.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+n.version);var i="_vue_clickaway_handler";function a(e,t,s){r(e);var n=s.context,a=t.value;if("function"==typeof a){var o=!1;setTimeout((function(){o=!0}),0),e[i]=function(t){var s=t.path||(t.composedPath?t.composedPath():void 0);if(o&&(s?s.indexOf(e)<0:!e.contains(t.target)))return a.call(n,t)},document.documentElement.addEventListener("click",e[i],!1)}}function r(e){document.documentElement.removeEventListener("click",e[i],!1),delete e[i]}var o={bind:a,update:function(e,t){t.value!==t.oldValue&&a(e,t)},unbind:r},l={directives:{onClickaway:o}};t.version="2.2.2",t.directive=o,t.mixin=l}}]);