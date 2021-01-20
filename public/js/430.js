(self.webpackChunk=self.webpackChunk||[]).push([[430],{952:(e,t,n)=>{"use strict";n.d(t,{S:()=>a});var a={model:{prop:"inputValue"},props:{errorClass:{default:"mt-1 text-red-500 text-sm",type:String},errorHideOnInput:{default:!0,type:Boolean},errorMessage:{default:"",type:String},inputAutofocus:{default:!1,type:Boolean},inputClass:{default:"border border-theme-base-subtle font-medium px-3 py-2 rounded w-full focus:border-theme-primary focus:outline-none focus:ring-0",type:String},inputDisabled:{default:!1,type:Boolean},inputId:{required:!0,type:String},inputName:{required:!0,type:String},inputRequired:{default:!1,type:Boolean},inputValue:{default:"",type:String|Number},labelClass:{default:"font-medium mb-2 text-theme-base-contrast text-sm tracking-wider",type:String},labelHidden:{default:!1,type:Boolean},labelText:{required:!0,type:String}},data:function(){return{hideError:!1}},computed:{formattedInputClass:function(){return this.isError?this.inputClass+" error":this.inputClass},formattedLabelClass:function(){var e=this.labelClass;return this.labelHidden&&(e+=" hidden"),e},isError:function(){return!(this.hideError||!this.errorMessage||""===this.errorMessage)}},methods:{autofocus:function(){var e=this;this.inputAutofocus&&this.$refs[this.inputId]&&this.$nextTick((function(){e.$refs[e.inputId].focus()}))},blurInput:function(){var e=this;this.$refs[this.inputId]&&this.$nextTick((function(){e.$refs[e.inputId].blur()}))},onErrorMessageChange:function(){this.hideError=!1},onInput:function(){this.$emit("input",this.$refs[this.inputId].value),this.errorHideOnInput&&(this.hideError=!0)},onInputBlur:function(){this.$emit("blur")}},watch:{errorMessage:{handler:"onErrorMessageChange"}}}},4041:(e,t,n)=>{"use strict";n.d(t,{H:()=>a});var a={props:{inputValue:{default:!1,type:String|Number|Boolean},inputValueFalse:{default:!1,type:String|Number|Boolean},inputValueTrue:{default:!0,type:String|Number|Boolean}},data:function(){return{editableValue:!1}},computed:{isChecked:function(){return this.editableValue===this.inputValueTrue}},mounted:function(){this.editableValue=this.inputValue,this.autofocus()},methods:{onInput:function(){this.$emit("input",this.isChecked?this.inputValueTrue:this.inputValueFalse),this.errorHideOnInput&&(this.hideError=!0)}}}},1304:function(e){var t;t=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}'),t=JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue"},"vi":{"Đ":"D","đ":"d"}}');function n(n,a){if("string"!=typeof n)throw new Error("slugify: string argument expected");var i=t[(a="string"==typeof a?{replacement:a}:a||{}).locale]||{},r=void 0===a.replacement?"-":a.replacement,l=n.split("").reduce((function(t,n){return t+(i[n]||e[n]||n).replace(a.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"").trim().replace(new RegExp("[\\s"+r+"]+","g"),r);return a.lower&&(l=l.toLowerCase()),a.strict&&(l=l.replace(new RegExp("[^a-zA-Z0-9"+r+"]","g"),"").replace(new RegExp("[\\s"+r+"]+","g"),r)),l}return n.extend=function(t){for(var n in t)e[n]=t[n]},n},e.exports=t(),e.exports.default=t()},3881:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var a=n(6486),i=n.n(a),r={model:{prop:"content"},props:{content:{required:!0},templateField:{required:!0,type:Object}},data:function(){return{editableContent:""}},computed:{errorMessage:function(){try{return Array.isArray(this.inputErrors)?this.inputErrors[0]:this.inputErrors}catch(e){return!1}},inputErrors:function(){var e=this;try{var t=[];return i().forEach(this.$page.props.errors,(function(n,a){0===a.indexOf(e.inputName)&&(n=i().replace(n,e.inputName+".",""),n=i().replace(n,e.inputName,""),t.push(n))})),t}catch(e){return!1}},inputName:function(){return"content."+this.templateField.id}},created:function(){this.editableContent=i().cloneDeep(this.content)},methods:{onEditableContentUpdate:i().debounce((function(){this.$emit("input",this.editableContent)}),100)},watch:{editableContent:{deep:!0,handler:"onEditableContentUpdate"}}},l=n(6112);const s={name:"ImageField",mixins:[r],components:{InputGroup:l.Z}};var u=n(1900);const o=(0,u.Z)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input-group",{attrs:{"error-message":e.errorMessage,"input-autocomplete":e.inputName,"input-id":e.inputName,"input-name":e.inputName,"input-required":e.templateField.is_required,"input-type":"text","label-text":""},model:{value:e.editableContent,callback:function(t){e.editableContent=t},expression:"editableContent"}},[e._t("default")],2)],1)}),[],!1,null,null,null).exports;const p={name:"NumberField",mixins:[r],components:{InputGroup:l.Z},computed:{inputMax:function(){try{return this.templateField.settings.max}catch(e){return""}},inputMin:function(){try{return this.templateField.settings.min}catch(e){return""}}}};const d=(0,u.Z)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input-group",{attrs:{"error-message":e.errorMessage,"input-autocomplete":e.inputName,"input-id":e.inputName,"input-max":e.inputMax,"input-min":e.inputMin,"input-name":e.inputName,"input-required":e.templateField.is_required,"input-type":"number","label-text":""},model:{value:e.editableContent,callback:function(t){e.editableContent=t},expression:"editableContent"}},[e._t("default")],2)],1)}),[],!1,null,null,null).exports;var c=n(952),m=n(1147);const f={name:"TextAreaGroup",mixins:[c.S],components:{FormFieldError:m.Z},props:{inputAutocomplete:{default:"",type:String},inputMaxLength:{default:"",type:String|Number},inputPlaceholder:{default:"",type:String},inputRows:{default:"",type:String|Number},inputType:{default:"text",type:String}},mounted:function(){this.autofocus()}};const h=(0,u.Z)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[n("label",{class:e.formattedLabelClass,attrs:{for:e.inputId}},[e._t("default",[n("span",{staticClass:"flex flex-row items-baseline"},[n("span",[e._v(e._s(e.labelText))]),e._v(" "),e.inputRequired?n("sup",{staticClass:"text-theme-danger-contrast"},[e._v("\n                    *\n                ")]):e._e()])])],2),e._v(" "),n("textarea",{ref:e.inputId,class:e.formattedInputClass,attrs:{id:e.inputId,autocomplete:e.inputAutocomplete,disabled:e.inputDisabled,maxlength:e.inputMaxLength,name:e.inputName,rows:e.inputRows,placeholder:e.inputPlaceholder,required:e.inputRequired,type:e.inputType},domProps:{value:e.inputValue},on:{blur:e.onInputBlur,input:e.onInput,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.blurInput(t)}}}),e._v(" "),n("form-field-error",{attrs:{"error-class":e.errorClass,"error-message":e.errorMessage,"is-error":e.isError}})],1)}),[],!1,null,null,null).exports,b={name:"TextAreaField",mixins:[r],components:{TextAreaGroup:h},computed:{inputMaxLength:function(){try{return this.templateField.settings.max_length}catch(e){return""}},inputRows:function(){try{return this.templateField.settings.rows}catch(e){return""}}}};const g=(0,u.Z)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("text-area-group",{attrs:{"error-message":e.errorMessage,"input-autocomplete":e.inputName,"input-id":e.inputName,"input-max-length":e.inputMaxLength,"input-name":e.inputName,"input-required":e.templateField.is_required,"input-rows":e.inputRows,"input-type":"text","label-text":""},model:{value:e.editableContent,callback:function(t){e.editableContent=t},expression:"editableContent"}},[e._t("default")],2)],1)}),[],!1,null,null,null).exports;const y={name:"TextField",mixins:[r],components:{InputGroup:l.Z},computed:{inputMaxLength:function(){try{return this.templateField.settings.max_length}catch(e){return""}}}};const _={name:"WysiwygField",mixins:[r],components:{TextAreaGroup:h}};function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}const v={name:"AdminCmsContentEditor",components:{ImageField:o,NumberField:d,TextAreaField:g,TextField:(0,u.Z)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input-group",{attrs:{"error-message":e.errorMessage,"input-autocomplete":e.inputName,"input-id":e.inputName,"input-max-length":e.inputMaxLength,"input-name":e.inputName,"input-required":e.templateField.is_required,"input-type":"text","label-text":""},model:{value:e.editableContent,callback:function(t){e.editableContent=t},expression:"editableContent"}},[e._t("default")],2)],1)}),[],!1,null,null,null).exports,WysiwygField:(0,u.Z)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("text-area-group",{attrs:{"error-message":e.errorMessage,"input-autocomplete":e.inputName,"input-id":e.inputName,"input-name":e.inputName,"input-required":e.templateField.is_required,"input-type":"text","label-text":""},model:{value:e.editableContent,callback:function(t){e.editableContent=t},expression:"editableContent"}},[e._t("default")],2)],1)}),[],!1,null,null,null).exports},model:{prop:"content"},props:{content:{required:!0,type:Array|Object},content_field_slug:{default:"content",type:String},templateFields:{required:!0,type:Array}},data:function(){return{editableContent:{}}},created:function(){"object"===x(this.content)&&Object.keys(this.content).length>0&&(this.editableContent=i().cloneDeep(this.content))},methods:{getContentFieldComponent:function(e){switch(e.type){case"image":return"ImageField";case"number":return"NumberField";case"text":return"TextField";case"textarea":return"TextAreaField";case"wysiwyg":return"WysiwygField";default:return this.$errorToast("Unregistered content field for template field: "+e.type),!1}},onEditableContentUpdate:function(){this.$emit("input",i().cloneDeep(this.editableContent))}}};const C=(0,u.Z)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col space-y-4"},[e.getPageErrorMessage(e.content_field_slug)?n("p",{staticClass:"text-theme-danger-contrast"},[e._v("\n        "+e._s(e.getPageErrorMessage(e.content_field_slug))+"\n    ")]):e._e(),e._v(" "),e._l(e.templateFields,(function(t){return n("div",{key:t.id},[n(e.getContentFieldComponent(t),{tag:"component",attrs:{"template-field":t},on:{input:e.onEditableContentUpdate},model:{value:e.editableContent[t.id].data,callback:function(n){e.$set(e.editableContent[t.id],"data",n)},expression:"editableContent[templateField.id].data"}},[n("div",[n("p",{staticClass:"flex flex-row items-baseline"},[n("span",[e._v(e._s(t.name))]),e._v(" "),t.is_required?n("sup",{staticClass:"text-theme-danger-contrast"},[e._v("\n                        *\n                    ")]):e._e()]),e._v(" "),t.description?n("p",{staticClass:"text-sm text-theme-base-subtle-contrast"},[e._v("\n                    "+e._s(t.description)+"\n                ")]):e._e()])])],1)}))],2)}),[],!1,null,null,null).exports},1184:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var a=n(6486),i=n.n(a),r=n(1304),l=n.n(r),s=n(952),u=n(1147);const o={name:"DateTimePickerGroup",mixins:[s.S],components:{FormFieldError:u.Z},props:{inputClass:{default:"",type:String},inputFormat:{default:"DD/MM/YYYY HH:mm",type:String},inputPlaceholder:{default:"Please select a date",type:String},inputTimeTitleFormat:{default:"DD/MM/YYYY HH:mm",type:String},inputTitleFormat:{default:"DD/MM/YYYY HH:mm",type:String},inputType:{default:"datetime",type:String},inputValueType:{default:"YYYY-MM-DD HH:mm",type:String}},data:function(){return{editableInput:"",isInitialised:!1}},mounted:function(){var e=this;this.editableInput=this.inputValue,this.$nextTick((function(){e.isInitialised=!0}))},methods:{onInput:function(){this.isInitialised&&(this.$emit("input",this.editableInput),this.errorHideOnInput&&(this.hideError=!0))},onInputValueChange:function(){this.inputValue!==this.editableInput&&(this.editableInput=this.inputValue)}},watch:{editableInput:{handler:"onInput"},inputValue:{handler:"onInputValueChange"}}};var p=n(1900);const d=(0,p.Z)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[n("label",{class:e.formattedLabelClass,attrs:{for:e.inputId}},[e._t("default",[n("span",{staticClass:"flex flex-row items-baseline"},[n("span",[e._v(e._s(e.labelText))]),e._v(" "),e.inputRequired?n("sup",{staticClass:"text-theme-danger-contrast"},[e._v("\n                    *\n                ")]):e._e()])])],2),e._v(" "),n("date-picker",{class:e.formattedInputClass,attrs:{id:e.inputId,disabled:e.inputDisabled,format:e.inputFormat,placeholder:e.inputPlaceholder,required:e.inputRequired,"time-title-format":e.inputTimeTitleFormat,"title-format":e.inputTitleFormat,type:e.inputType,"value-type":e.inputValueType},model:{value:e.editableInput,callback:function(t){e.editableInput=t},expression:"editableInput"}}),e._v(" "),n("form-field-error",{attrs:{"error-class":e.errorClass,"error-message":e.errorMessage,"is-error":e.isError}})],1)}),[],!1,null,null,null).exports;var c=n(1274),m=n(6112),f=axios.CancelToken,h=f.source();const b={name:"UrlEditor",components:{DateTimePickerGroup:d,InlineCheckboxGroup:c.Z,InputGroup:m.Z},model:{prop:"urlData"},props:{computedUrl:{default:"",type:String},parentUrl:{default:null,type:null|String},urlData:{required:!0,type:null|Object}},data:function(){return{autoUpdateUrl:!0,editableUrlData:{expired_at:null,is_enabled:!1,published_at:null,url_main:""},isUrlChecked:!1,isUrlCheckLoading:!1,isUrlAvailable:!1,urlInput:""}},computed:{urlFull:function(){var e="";return this.parentUrl&&this.parentUrl.length&&(e+=this.parentUrl),(e+=this.urlInputSlugified).split("//").join("/")},urlInputSlugified:function(){if(!this.urlInput)return"/";var e=this.urlInput;return e.trim(),e.length?(0!==(e=l()(e,{lower:!0})).indexOf("/")&&(e="/"+e),e):"/"}},created:function(){try{var e;if(this.urlData&&Object.keys(this.urlData).length)this.editableUrlData=i().cloneDeep(this.urlData),this.urlInput=null!==(e=this.editableUrlData.url_main)&&void 0!==e?e:"";this.urlInput&&""!==this.urlInput&&(this.autoUpdateUrl=!1)}catch(e){return}},methods:{cancelUrlCheck:function(){this.isUrlCheckLoading&&(h.cancel("URL check cancelled"),h=f.source())},checkUrlIsAvailable:i().debounce((function(){var e=this;if(this.isUrlChecked=!1,this.cancelUrlCheck(),this.isUrlChecked=!1,this.isUrlAvailable=!1,this.urlInput.length){this.isUrlCheckLoading=!0;var t={url:this.urlFull,url_id:this.urlData.id?this.urlData.id:null};axios.get(this.$route("admin.api.cms.urls.available"),{params:t,cancelToken:h.token}).then((function(t){e.isUrlCheckLoading=!1,e.isUrlChecked=!0,e.isUrlAvailable=t.data})).catch((function(t){axios.isCancel(t)||(e.isUrlCheckLoading=!1,e.$errorToast("Failed to check URL availability"))}))}}),500),onComputedUrlUpdate:function(){this.autoUpdateUrl&&this.updateUrl(this.computedUrl)},onEditableUrlUpdate:i().debounce((function(){this.$emit("input",this.editableUrlData)}),100),onIsUrlAvailableUpdate:function(){this.$emit("isAvailable",this.isUrlAvailable)},onUrlInputInput:function(){this.autoUpdateUrl=!1,this.isUrlChecked=!1},onUrlInputUpdate:i().debounce((function(){this.urlInput.length&&this.updateUrl(this.urlInput)}),100),updateUrl:function(e){var t=e,n="/"===t.charAt(0);t=l()(t),n&&(t="/"+t),this.urlInput!==t&&(this.urlInput=t,this.isUrlChecked=!1),this.$set(this.editableUrlData,"url_main",t),this.checkUrlIsAvailable()}},watch:{computedUrl:{handler:"onComputedUrlUpdate"},editableUrlData:{deep:!0,handler:"onEditableUrlUpdate"},isUrlAvailable:{handler:"onIsUrlAvailableUpdate"},urlFull:{handler:"checkUrlIsAvailable"},urlInput:{handler:"onUrlInputUpdate"}}};const g=(0,p.Z)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input-group",{attrs:{"error-message":e.getPageErrorMessage("url.url_main"),"input-id":"url_input","input-name":"url_input","input-required":!0,"input-type":"text","label-text":"URL"},on:{input:e.onUrlInputInput},model:{value:e.urlInput,callback:function(t){e.urlInput=t},expression:"urlInput"}}),e._v(" "),n("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("url.url_full"),"input-disabled":!0,"input-id":"url_full","input-name":"url_full","input-type":"text","label-text":"Formatted URL"},model:{value:e.urlFull,callback:function(t){e.urlFull=t},expression:"urlFull"}},[n("span",{staticClass:"flex flex-row items-center"},[n("span",{staticClass:"flex flex-row items-baseline"},[e._v("\n                Formatted URL\n                "),n("sup",{staticClass:"text-theme-danger-contrast"},[e._v("*")])]),e._v(" "),e.isUrlCheckLoading?n("icon-loader-circle",{staticClass:"animate-spin-slow h-4 ml-3 text-theme-base-subtle-contrast w-4"}):e.isUrlChecked&&this.urlInput.length?n("span",{staticClass:"flex flex-row font-normal items-center ml-3",class:{"text-theme-success-contrast":e.isUrlAvailable,"text-theme-danger-contrast":!e.isUrlAvailable}},[e.isUrlAvailable?[n("icon-check",{staticClass:"h-4 mr-1 w-4"}),e._v(" "),n("span",[e._v("URL is available")])]:e.isUrlAvailable?e._e():[n("icon-x",{staticClass:"h-4 mr-1 w-4"}),e._v(" "),n("span",[e._v("URL is unavailable")])]],2):e._e()],1)]),e._v(" "),n("div",{staticClass:"bg-theme-base-subtle h-px my-6"}),e._v(" "),n("inline-checkbox-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("url.is_enabled"),"input-id":"url_is_enabled","input-name":"url_is_enabled","label-text":"Enabled?"},model:{value:e.editableUrlData.is_enabled,callback:function(t){e.$set(e.editableUrlData,"is_enabled",t)},expression:"editableUrlData.is_enabled"}}),e._v(" "),n("div",{staticClass:"flex flex-col md:flex-row md:mt-2 md:space-x-4"},[n("date-time-picker-group",{staticClass:"mt-4 md:flex-1",attrs:{"error-message":e.getPageErrorMessage("url.published_at"),"input-id":"url_published_at","input-name":"url_published_at","label-text":"Publish Date"},model:{value:e.editableUrlData.published_at,callback:function(t){e.$set(e.editableUrlData,"published_at",t)},expression:"editableUrlData.published_at"}}),e._v(" "),n("date-time-picker-group",{staticClass:"mt-4 md:flex-1",attrs:{"error-message":e.getPageErrorMessage("url.expired_at"),"input-id":"url_expired_at","input-name":"url_expired_at","label-text":"Expiry Date"},model:{value:e.editableUrlData.expired_at,callback:function(t){e.$set(e.editableUrlData,"expired_at",t)},expression:"editableUrlData.expired_at"}})],1)],1)}),[],!1,null,null,null).exports},1274:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(952),i=n(4041),r=n(1147);const l={name:"InlineCheckboxGroup",mixins:[a.S,i.H],components:{FormFieldError:r.Z},props:{inputClass:{default:"cursor-pointer form-checkbox h-5 mr-2 rounded text-theme-primary w-5 focus:border-theme-primary focus:outline-none focus:ring focus:ring-primary",type:String},labelClass:{default:"cursor-pointer flex-1 font-medium select-none text-theme-base-contrast text-sm tracking-wider",type:String}}};const s=(0,n(1900).Z)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"flex flex-row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.editableValue,expression:"editableValue"}],ref:e.inputId,class:e.formattedInputClass,attrs:{id:e.inputId,disabled:e.inputDisabled,"false-value":e.inputValueFalse,name:e.inputName,required:e.inputRequired,"true-value":e.inputValueTrue,type:"checkbox"},domProps:{checked:Array.isArray(e.editableValue)?e._i(e.editableValue,null)>-1:e._q(e.editableValue,e.inputValueTrue)},on:{change:[function(t){var n=e.editableValue,a=t.target,i=a.checked?e.inputValueTrue:e.inputValueFalse;if(Array.isArray(n)){var r=e._i(n,null);a.checked?r<0&&(e.editableValue=n.concat([null])):r>-1&&(e.editableValue=n.slice(0,r).concat(n.slice(r+1)))}else e.editableValue=i},e.onInput],keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.blurInput(t)}}}),e._v(" "),n("label",{class:e.labelClass,attrs:{for:e.inputId}},[n("span",{staticClass:"flex flex-row items-baseline"},[n("span",[e._v(e._s(e.labelText))]),e._v(" "),e.inputRequired?n("sup",{staticClass:"text-theme-danger-contrast"},[e._v("\n                    *\n                ")]):e._e()])])]),e._v(" "),n("form-field-error",{attrs:{"error-class":e.errorClass,"error-message":e.errorMessage,"is-error":e.isError}})],1)}),[],!1,null,null,null).exports},6112:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(952),i=n(1147);const r={name:"InputGroup",mixins:[a.S],components:{FormFieldError:i.Z},props:{inputAutocomplete:{default:"",type:String},inputMax:{default:"",type:String|Number},inputMaxLength:{default:"",type:String|Number},inputMin:{default:"",type:String|Number},inputMinLength:{default:"",type:String|Number},inputPlaceholder:{default:"",type:String},inputType:{default:"text",type:String}},mounted:function(){this.autofocus()}};const l=(0,n(1900).Z)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[n("label",{class:e.formattedLabelClass,attrs:{for:e.inputId}},[e._t("default",[n("span",{staticClass:"flex flex-row items-baseline"},[n("span",[e._v(e._s(e.labelText))]),e._v(" "),e.inputRequired?n("sup",{staticClass:"text-theme-danger-contrast"},[e._v("\n                    *\n                ")]):e._e()])])],2),e._v(" "),n("input",{ref:e.inputId,class:e.formattedInputClass,attrs:{id:e.inputId,autocomplete:e.inputAutocomplete,disabled:e.inputDisabled,max:e.inputMax,maxlength:e.inputMaxLength,min:e.inputMin,minlength:e.inputMinLength,name:e.inputName,placeholder:e.inputPlaceholder,required:e.inputRequired,type:e.inputType},domProps:{value:e.inputValue},on:{blur:e.onInputBlur,input:e.onInput,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.blurInput(t)}}}),e._v(" "),n("form-field-error",{attrs:{"error-class":e.errorClass,"error-message":e.errorMessage,"is-error":e.isError}})],1)}),[],!1,null,null,null).exports},9472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(6486),i=n.n(a),r=n(952),l=n(1147);const s={name:"SelectGroup",mixins:[r.S],components:{FormFieldError:l.Z},props:{inputAnyOptionEnabled:{default:!1,type:Boolean},inputAnyOptionLabel:{default:"Any",type:String},inputAnyOptionClass:{default:"",type:String},inputAnyOptionValue:{default:""},inputClass:{default:"border border-theme-base-subtle cursor-pointer font-medium form-select px-3 py-2 rounded w-full focus:border-theme-primary focus:outline-none focus:ring-0 focus:shadow-none",type:String},inputOptionLabelKey:{default:!1,type:Boolean|String|Number},inputOptionValueKey:{default:!1,type:Boolean|String|Number},inputOptions:{required:!0,type:Object}},computed:{formattedOptions:function(){var e=this,t={};return i().forEach(this.inputOptions,(function(n,a){var i=n,r=a;!1!==e.inputOptionLabelKey&&n.hasOwnProperty(e.inputOptionLabelKey)&&(i=n[e.inputOptionLabelKey]),!1!==e.inputOptionValueKey&&n.hasOwnProperty(e.inputOptionValueKey)&&(r=n[e.inputOptionValueKey]),t[a]={label:i,value:r}})),t},formattedInputClass:function(){var e=this.inputClass;return this.isError&&(e+=" error"),this.isAnyOptionSelected&&(e+=" "+this.inputAnyOptionClass),e},isAnyOptionSelected:function(){return this.inputValue===this.inputAnyOptionValue||null===this.inputValue}},mounted:function(){this.autofocus()},methods:{isOptionDisabled:function(e){return!!this.inputRequired&&""===e},isOptionSelected:function(e){return e===this.inputValue}}};const u=(0,n(1900).Z)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[n("label",{class:e.formattedLabelClass,attrs:{for:e.inputId}},[e._t("default",[n("span",{staticClass:"flex flex-row items-baseline"},[n("span",[e._v(e._s(e.labelText))]),e._v(" "),e.inputRequired?n("sup",{staticClass:"text-theme-danger-contrast"},[e._v("\n                    *\n                ")]):e._e()])])],2),e._v(" "),n("select",{ref:e.inputId,class:e.formattedInputClass,attrs:{id:e.inputId,disabled:e.inputDisabled,name:e.inputName,required:e.inputRequired},on:{change:e.onInput,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.blurInput(t)}}},[e.inputAnyOptionEnabled?n("option",{attrs:{disabled:e.isOptionDisabled(e.inputAnyOptionValue)},domProps:{selected:e.isOptionSelected(e.inputAnyOptionValue),value:e.inputAnyOptionValue}},[e._v("\n            "+e._s(e.inputAnyOptionLabel)+"\n        ")]):e._e(),e._v(" "),e._l(e.formattedOptions,(function(t,a){return n("option",{key:e.inputId+"-option-"+t.value,attrs:{disabled:e.isOptionDisabled(t.value)},domProps:{selected:e.isOptionSelected(t.value),value:t.value}},[e._v("\n            "+e._s(t.label)+"\n        ")])}))],2),e._v(" "),n("form-field-error",{attrs:{"error-class":e.errorClass,"error-message":e.errorMessage,"is-error":e.isError}})],1)}),[],!1,null,null,null).exports},1147:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const a={name:"FormFieldError",props:{errorClass:{required:!0,type:String},errorMessage:{required:!0,type:String},isError:{required:!0,type:Boolean},transitionName:{default:"slide-down-fade",type:String}}};const i=(0,n(1900).Z)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:e.transitionName}},[e.isError?n("p",{class:e.errorClass},[e._v("\n            "+e._s(e.errorMessage)+"\n        ")]):e._e()])],1)}),[],!1,null,null,null).exports},4430:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var a=n(1304),i=n.n(a),r=n(3881),l=n(6112),s=n(9472),u=n(1184),o=axios.CancelToken,p=o.source();const d={name:"AdminCmsPageCreate",components:{ContentEditor:r.Z,InputGroup:l.Z,SelectGroup:s.Z,UrlEditor:u.Z},layout:"admin-layout",props:{layouts:{required:!0,type:Object|Array},parentPages:{required:!0,type:Object|Array|null},templates:{required:!0,type:Object|Array}},data:function(){return{autoUpdateSlug:!0,computedUrl:"",formData:{layout_id:"",name:"",parent_id:"",slug:"",template_id:"",url:{}},isLoadingTemplate:!1,isUrlAvailable:!1,selectedTemplate:null}},computed:{isLayouts:function(){try{return Object.keys(this.layouts).length}catch(e){return!1}},isTemplates:function(){try{return Object.keys(this.templates).length}catch(e){return!1}},parentPagesUrls:function(){try{if(!Object.keys(this.parentPages).length)return null;var e={};return _.forEach(this.parentPages,(function(t,n){e[n]={id:t.id,label:t.name+" => "+t.url.url_full,url_full:t.url.url_full,url_main:t.url.url_main}})),e}catch(e){return null}},parentPagesMap:function(){try{if(!Object.keys(this.parentPages).length)return null;var e={};return _.forEach(this.parentPages,(function(t,n){e[t.id]=n})),e}catch(e){return null}},selectedParentPage:function(){try{return this.formData.parent_id?this.parentPages[this.parentPagesMap[this.formData.parent_id]]:null}catch(e){return null}},selectedParentPageUrl:function(){try{return this.selectedParentPage.url.url_full}catch(e){return null}},selectedTemplateHasFields:function(){try{return!!this.selectedTemplate&&this.selectedTemplate.template_fields.length}catch(e){return!1}},selectedTemplateId:function(){var e;return null!==(e=this.formData.template_id)&&void 0!==e?e:""}},methods:{cancelLoadTemplate:function(){this.isLoadingTemplate&&(p.cancel("Template load cancelled"),p=o.source())},onNameInput:function(){this.autoUpdateSlug&&(this.formData.slug=this.slugify(this.formData.name),this.computedUrl=this.formData.slug)},onSelectedTemplateIdChange:_.debounce((function(){var e=this;this.selectedTemplate=null,this.cancelLoadTemplate(),this.selectedTemplateId&&(this.isLoadingTemplate=!0,axios.get(this.$route("admin.api.cms.templates.index",this.selectedTemplateId)).then((function(t){e.selectedTemplate=_.cloneDeep(t.data.data),e.setNewTemplateContent()})).catch((function(t){axios.isCancel(t)||(e.$errorToast("Failed to load selected template"),console.log(t))})).finally((function(){e.isLoadingTemplate=!1})))}),500),onSlugBlur:function(){this.formData.slug=this.slugify(this.formData.slug)},onSlugInput:function(){this.autoUpdateSlug=!1,this.computedUrl=this.formData.slug},onUrlIsAvailableEvent:function(e){this.isUrlAvailable=e},setNewTemplateContent:function(){this.selectedTemplateHasFields||(this.formData.content={});var e={};_.forEach(this.selectedTemplate.template_fields,(function(t){e[t.id]={data:"",template_field_id:t.id}})),this.$set(this.formData,"content",_.cloneDeep(e))},slugify:function(e){return e&&e.length?i()(e,{lower:!0}):""},submit:function(){this.isUrlAvailable?this.$inertia.post(this.$route("admin.cms.pages.store"),this.formData):this.$errorToast("Unable to create page. URL is unavailable")}},watch:{selectedTemplateId:{handler:"onSelectedTemplateIdChange"}}};const c=(0,n(1900).Z)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"max-w-5xl mx-auto",attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[e.userCan("cms.create")?n("div",{staticClass:"flex flex-row items-center mb-6"},[n("h1",{staticClass:"font-medium mr-auto text-lg"},[e._v("\n            Create Page\n        ")]),e._v(" "),e.userCan("cms.view")?n("inertia-link",{staticClass:"\n                button button-default-responsive button-primary-subtle\n                flex flex-row items-center mr-2\n            ",attrs:{href:e.$route("admin.cms.pages.index")}},[n("icon-chevron-left",{staticClass:"w-5 md:mr-2"}),e._v(" "),n("span",{staticClass:"hidden md:inline"},[e._v("\n                Back\n            ")])],1):e._e(),e._v(" "),n("button",{staticClass:"\n                button button-default-responsive button-primary\n                flex flex-row items-center\n            ",attrs:{type:"submit"}},[n("icon-save",{staticClass:"w-5 md:mr-2"}),e._v(" "),n("span",{staticClass:"hidden md:inline"},[e._v("\n                Create Page\n            ")])],1)],1):e._e(),e._v(" "),n("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[n("div",{staticClass:"block px-6 w-full"},[n("select-group",{attrs:{"error-message":e.getPageErrorMessage("layout_id"),"label-text":"Layout","input-any-option-enabled":!0,"input-any-option-label":"Please select a Layout","input-autofocus":!0,"input-id":"layout_id","input-name":"layout_id","input-options":e.isLayouts?e.layouts:{},"input-option-label-key":"name","input-option-value-key":"id","input-required":!0},model:{value:e.formData.layout_id,callback:function(t){e.$set(e.formData,"layout_id",t)},expression:"formData.layout_id"}}),e._v(" "),n("select-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("template_id"),"label-text":"Template","input-any-option-enabled":!0,"input-any-option-label":"Please select a template","input-id":"template_id","input-name":"template_id","input-options":e.isTemplates?e.templates:{},"input-option-label-key":"name","input-option-value-key":"id","input-required":!0},model:{value:e.formData.template_id,callback:function(t){e.$set(e.formData,"template_id",t)},expression:"formData.template_id"}}),e._v(" "),e.parentPagesUrls?n("select-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("parent_id"),"label-text":"Parent Page","input-any-option-enabled":!0,"input-any-option-label":"Please select a parent (optional)","input-id":"parent_id","input-name":"parent_id","input-options":e.parentPagesUrls,"input-option-label-key":"label","input-option-value-key":"id"},model:{value:e.formData.parent_id,callback:function(t){e.$set(e.formData,"parent_id",t)},expression:"formData.parent_id"}}):e._e(),e._v(" "),n("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("name"),"input-autocomplete":"page_name","input-id":"name","input-name":"name","input-required":!0,"input-type":"text","label-text":"Page Name"},on:{input:e.onNameInput},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}}),e._v(" "),n("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("slug"),"input-autocomplete":"page_slug","input-id":"slug","input-name":"slug","input-required":!0,"input-type":"text","label-text":"Page Slug"},on:{blur:e.onSlugBlur,input:e.onSlugInput},model:{value:e.formData.slug,callback:function(t){e.$set(e.formData,"slug",t)},expression:"formData.slug"}})],1)]),e._v(" "),n("div",{staticClass:"bg-white mt-6 px-6 py-6 shadow-subtle rounded-lg"},[n("url-editor",{attrs:{"computed-url":e.computedUrl,"parent-url":e.selectedParentPageUrl},on:{isAvailable:e.onUrlIsAvailableEvent},model:{value:e.formData.url,callback:function(t){e.$set(e.formData,"url",t)},expression:"formData.url"}})],1),e._v(" "),!this.isLoadingTemplate&&e.selectedTemplateHasFields?n("div",{staticClass:"bg-white mt-6 px-6 py-6 shadow-subtle rounded-lg"},[n("p",{staticClass:"text-lg"},[e._v("Fields")]),e._v(" "),n("content-editor",{attrs:{"template-fields":this.selectedTemplate.template_fields},model:{value:e.formData.content,callback:function(t){e.$set(e.formData,"content",t)},expression:"formData.content"}})],1):e._e()])}),[],!1,null,null,null).exports}}]);