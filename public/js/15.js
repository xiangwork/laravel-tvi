(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{KSEo:function(t,e,a){"use strict";a.r(e);var s=a("LvDl"),l=a.n(s),i=a("NmYn"),n=a.n(i),r=a("5qNN"),o=a("rO6o"),u=a("SH5L"),p={name:"AdminCmsTemplateEdit",components:{InputGroup:r.a,SelectGroup:o.a,TemplateFieldEditor:u.a},layout:"admin-layout",props:{template:{type:Object,required:!0},template_field_types:{type:Object,required:!0},template_types:{type:Object,required:!0}},data:function(){return{auto_update_slug:!1,form_data:{}}},created:function(){this.form_data=l.a.cloneDeep(this.template)},methods:{onNameInput:function(){this.auto_update_slug&&(this.form_data.slug=this.slugify(this.form_data.name))},onSlugBlur:function(){this.form_data.slug=this.slugify(this.form_data.slug)},slugify:function(t){return t&&t.length?n()(t,{lower:!0}):""},submit:function(){this.$inertia.put(this.$route("admin.cms.templates.update",this.template.id),this.form_data)}}},m=a("KHd+"),d=Object(m.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"max-w-5xl mx-auto",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[t.userCan("cms.edit")?a("div",{staticClass:"flex flex-row items-center mb-6"},[a("h1",{staticClass:"mr-auto text-lg"},[t._v("\n            Edit Template - "+t._s(t.template.name)+"\n        ")]),t._v(" "),t.userCan("cms.view")?a("inertia-link",{staticClass:"\n                button button-default-responsive button-primary-subtle\n                flex flex-row items-center mr-2\n            ",attrs:{href:t.$route("admin.cms.templates.index")}},[a("icon-chevron-left",{staticClass:"w-5 md:mr-2"}),t._v(" "),a("span",{staticClass:"hidden md:inline"},[t._v("\n                Back\n            ")])],1):t._e(),t._v(" "),a("button",{staticClass:"\n                button button-default-responsive button-primary\n                flex flex-row items-center\n            ",attrs:{type:"submit"}},[a("icon-save",{staticClass:"w-5 md:mr-2"}),t._v(" "),a("span",{staticClass:"hidden md:inline"},[t._v("\n                Edit Template\n            ")])],1)],1):t._e(),t._v(" "),a("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[a("div",{staticClass:"block px-6 w-full"},[a("select-group",{attrs:{error_message:t.getPageErrorMessage("type"),label_text:"Template Type",select_any_enabled:!0,select_any_label:"Please select a template type",select_autofocus:!0,select_id:"type",select_name:"type",select_options:t.template_types,select_required:!0,select_type:"text"},model:{value:t.form_data.type,callback:function(e){t.$set(t.form_data,"type",e)},expression:"form_data.type"}}),t._v(" "),a("input-group",{staticClass:"mt-4",attrs:{error_message:t.getPageErrorMessage("name"),input_autocomplete:"template_name",input_id:"name",input_name:"name",input_required:!0,input_type:"text",label_text:"Template Name"},on:{input:t.onNameInput},model:{value:t.form_data.name,callback:function(e){t.$set(t.form_data,"name",e)},expression:"form_data.name"}}),t._v(" "),a("input-group",{staticClass:"mt-4",attrs:{error_message:t.getPageErrorMessage("slug"),input_autocomplete:"template_slug",input_id:"slug",input_name:"slug",input_required:!0,input_type:"text",label_text:"Template Slug"},on:{blur:t.onSlugBlur},model:{value:t.form_data.slug,callback:function(e){t.$set(t.form_data,"slug",e)},expression:"form_data.slug"}}),t._v(" "),a("input-group",{staticClass:"mt-4",attrs:{error_message:t.getPageErrorMessage("description"),input_autocomplete:"template_description",input_id:"description",input_name:"description",input_type:"text",label_text:"Description"},model:{value:t.form_data.description,callback:function(e){t.$set(t.form_data,"description",e)},expression:"form_data.description"}})],1)]),t._v(" "),a("div",{staticClass:"bg-white mt-6 py-6 shadow-subtle rounded-lg"},[a("div",{staticClass:"block px-6 w-full"},[a("template-field-editor",{attrs:{is_editing:!0,template_field_types:t.template_field_types},model:{value:t.form_data.template_fields,callback:function(e){t.$set(t.form_data,"template_fields",e)},expression:"form_data.template_fields"}})],1)])])}),[],!1,null,null,null);e.default=d.exports}}]);