import{o,c as h,a as l,v as g,k as u,b as r,l as a,x as c,t as i,C as p,E as m,m as st,G as B,Y as U,h as O}from"./js/runtime-dom.esm-bundler.DKw-RQqs.js";import{l as it}from"./js/index.9ItM203B.js";import{l as ot}from"./js/index.Olu2afa7.js";import{l as nt}from"./js/index.3BJ3ZnWB.js";import{a as H,u as Z,f as lt,r as j,B as I,e as D,t as F,l as G}from"./js/index.ByF2aI-G.js";import{a as rt}from"./js/allowed.DPI64kEG.js";import{u as Q}from"./js/TruSeoScore.D1tEO-2v.js";import{l as z}from"./js/license.4E_gI5OR.js";import{k as at,t as ct}from"./js/postSlug.Bl0Z6T8y.js";import{_ as X,b as Y,f as q}from"./js/Caret.DMa7g0j7.js";import{C as J}from"./js/HtmlTagsEditor.CJg9npyw.js";import{_ as dt}from"./js/ScoreButton.B8teUyeU.js";import{C as K}from"./js/Tooltip.B0brI66q.js";import{_ as pt}from"./js/IndexStatus.BqUQaN__.js";import{S as ut}from"./js/LogoGear.Cp4EitBg.js";import{_ as P}from"./js/_plugin-vue_export-helper.BN1snXvA.js";import"./js/translations.Ur07Kmot.js";import{_ as y}from"./js/default-i18n.DvLqo3S3.js";/* empty css                */import"./js/helpers.yjC6K_2A.js";import"./js/upperFirst.BjBqmCj-.js";import"./js/_stringToArray.DnK4tKcY.js";import"./js/toString.Dc7QMRQR.js";import"./js/metabox.SRNlGbGk.js";import"./js/cleanForSlug.DaL6KzBn.js";import"./js/_baseTrim.BYZhh0MR.js";import"./js/_baseSet.Bbqt6CgN.js";import"./js/Editor.Bq1LihFR.js";import"./js/isEqual.DPyFnjxk.js";import"./js/_baseIsEqual.BLPD4oRg.js";import"./js/_getTag.KnvRqur7.js";import"./js/_baseClone.B3PqkIxk.js";import"./js/_arrayEach.Fgt6pfHj.js";import"./js/UnfilteredHtml.CeQlPW48.js";import"./js/constants.DfsCWbZk.js";import"./js/CheckSolid.CdaM6PrP.js";const mt={},ht={viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-headline-analyzer"},gt=l("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.5448 1.76771H14.6665V1.79272L10.5448 4.61008V1.76771ZM5.46515 8.08232V1.76779H1.34351V4.8899L1.34378 4.71192L5.42731 8.10819L5.46515 8.08232ZM1.34351 11.4568L5.46515 14.2652V15.0999H1.34351V11.4568ZM10.5448 10.8851L14.6665 8.14027V15.0982H10.5448V10.8851Z",fill:"currentColor"},null,-1),_t=l("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.46515 8.05739L5.42731 8.08325L1.34378 4.68698L1.34351 4.86412V1.76779H5.46515V8.05739ZM5.46515 14.2083L1.34351 11.3998V15.0999H5.46515V14.2083ZM10.5448 10.8281L14.6665 8.08332V15.0982H10.5448V10.8281ZM14.6665 1.76778L10.5448 4.58515V1.76771H14.6665V1.76778Z",fill:"currentColor"},null,-1),ft=l("path",{d:"M5.42725 9.45857L14.6665 3.14303V6.76487L5.46703 12.8912L1.33325 10.0745L1.34372 6.06231L5.42725 9.45857Z",fill:"currentColor"},null,-1),wt=[gt,_t,ft];function yt(e,s){return o(),h("svg",ht,wt)}const vt=P(mt,[["render",yt]]),b="all-in-one-seo-pack",Tt={setup(){const{runAnalysis:e,strings:s}=Q();return{composableStrings:s,optionsStore:H(),rootStore:Z(),runAnalysis:e,searchStatisticsStore:lt()}},components:{BaseButton:X,CoreHtmlTagsEditor:J,CoreLoader:Y,CoreScoreButton:dt,CoreTooltip:K,IndexStatus:pt,SvgAioseoLogoGear:ut,SvgHeadlineAnalyzer:vt,SvgPencil:q},props:{post:Object,posts:Array},data(){return{allowed:rt,postId:null,columnName:null,value:null,title:null,titleParsed:null,postDescription:null,descriptionParsed:null,imageTitle:null,imageAltTag:null,showEditTitle:!1,showEditDescription:!1,showEditImageTitle:!1,showEditImageAltTag:!1,showTruSeo:!1,isSpecialPage:!1,inspectionResult:!1,inspectionResultLoading:!0,postLoading:!1,strings:j(this.composableStrings,{title:y("Title",b),description:y("Description",b),imageTitle:y("Image Title",b),imageAltTag:y("Image Alt Tag",b),saveChanges:y("Save Changes",b),discardChanges:y("Discard Changes",b),truSeoScore:y("TruSEO Score",b),headlineScore:y("Headline Score",b)}),license:z}},computed:{showIndexStatus(){var f,t,n;if(!this.rootStore.isPro||!z.hasCoreFeature("search-statistics","index-status"))return!1;const e=!this.searchStatisticsStore.unverifiedSite,s=typeof((n=(t=(f=this.optionsStore.internalOptions.internal)==null?void 0:f.searchStatistics)==null?void 0:t.profile)==null?void 0:n.key)=="string",d=this.allowed("aioseo_search_statistics_settings");return e&&s&&d},showHeadlineAnalyzer(){return this.post.postType==="product"?!1:this.optionsStore.options.advanced.headlineAnalyzer}},methods:{save(){this.showEditTitle=!1,this.showEditDescription=!1,this.post.title=this.title,this.post.description=this.postDescription,this.postLoading=!0,I.post(D.restUrl("posts-list/update-details-column")).send({postId:this.post.id,title:this.post.title,description:this.post.description}).then(e=>{this.titleParsed=e.body.title,this.descriptionParsed=e.body.description,this.post.titleParsed=e.body.title,this.post.descriptionParsed=e.body.description,this.$root.$data.screen.base!=="upload"&&this.runAnalysis(this.post.id)}).catch(e=>{console.error(`Unable to update post with ID ${this.post.id}: ${e}`)}).finally(()=>{this.postLoading=!1})},saveImage(){this.showEditImageTitle=!1,this.showEditImageAltTag=!1,this.post.title=this.title,this.post.description=this.postDescription,this.post.imageTitle=this.imageTitle,this.post.imageAltTag=this.imageAltTag,I.post(D.restUrl("posts-list/update-details-column")).send({postId:this.post.id,isMedia:!0,title:this.post.title,description:this.post.description,imageTitle:this.post.imageTitle,imageAltTag:this.post.imageAltTag}).then(()=>{}).catch(e=>{console.error(`Unable to update attachment with ID ${this.post.id}: ${e}`)})},cancel(){this.value=this.post.value,this.showEditTitle=!1,this.showEditDescription=!1,this.showEditImageTitle=!1,this.showEditImageAltTag=!1},editTitle(){this.showEditTitle=!0},editDescription(){this.showEditDescription=!0},editImageTitle(){this.showEditImageTitle=!0},editImageAlt(){this.showEditImageAltTag=!0},truncate:F,updatePostTitle(e,s){const d=document.getElementById(`post-${e}`);if(!d)return;const f=d.getElementsByClassName("title")[0].getElementsByTagName("a")[0];if(!f)return;const t=f.getElementsByTagName("span")[0];f.innerText=s,f.prepend(t)},updateInspectionResult(e){const{inspectionResult:s,inspectionResultLoading:d}=e;this.inspectionResult=s,this.inspectionResultLoading=d}},mounted(){this.postId=this.post.id,this.columnName=this.post.columnName,this.value=this.post.value,this.imageTitle=this.post.imageTitle,this.imageAltTag=this.post.imageAltTag,this.isSpecialPage=this.post.isSpecialPage,this.title=this.post.title||this.post.defaultTitle,this.titleParsed=this.post.titleParsed,this.postDescription=this.post.description||this.post.defaultDescription,this.descriptionParsed=this.post.descriptionParsed,this.inspectionResult=this.post.inspectionResult,this.inspectionResultLoading=this.post.inspectionResultLoading,this.post.reload&&this.save(),window.aioseoBus.$on("updateInspectionResult"+this.postId,this.updateInspectionResult)},beforeUnmount(){window.aioseoBus.$off("updateInspectionResult"+this.postId,this.updateInspectionResult)},async created(){this.showTruSeo=at()}},Ct={key:0,class:"edit-row scores"},kt={class:"edit-row edit-title"},bt={key:0},St=l("strong",null,":",-1),Et={key:1,class:"edit-row"},It={class:"edit-row edit-description"},Dt=["id"],Pt=l("strong",null,":",-1),At={key:2,class:"edit-row"},Lt={class:"edit-row edit-image-title"},Vt=["id"],xt=l("strong",null,":",-1),Nt={key:3,class:"edit-row"},Rt={class:"edit-row edit-image-alt"},zt=["id"],Mt=l("strong",null,":",-1),Bt={key:4,class:"edit-row"};function Ut(e,s,d,f,t,n){var N,R;const v=g("index-status"),C=g("svg-headline-analyzer"),T=g("core-score-button"),_=g("core-tooltip"),w=g("svg-aioseo-logo-gear"),E=g("core-loader"),A=g("svg-pencil"),L=g("core-html-tags-editor"),k=g("base-button");return o(),h("div",{class:B(["aioseo-details-column",{editing:t.showEditTitle||t.showEditDescription||t.showEditImageTitle||t.showEditImageAltTag}])},[l("div",null,[e.$root.$data.screen.base==="edit"&&!t.isSpecialPage?(o(),h("div",Ct,[n.showIndexStatus?(o(),u(v,{key:0,result:(N=t.inspectionResult)==null?void 0:N.indexStatusResult,"result-link":(R=t.inspectionResult)==null?void 0:R.inspectionResultLink,loading:t.inspectionResultLoading,viewable:d.post.isPostVisible,"tooltip-offset":"-150px,0"},null,8,["result","result-link","loading","viewable"])):r("",!0),n.showHeadlineAnalyzer?(o(),u(_,{key:1,type:"action"},{tooltip:a(()=>[c(i(t.strings.headlineScore),1)]),default:a(()=>[p(T,{score:d.post.headlineScore,postId:t.postId},{icon:a(()=>[p(C)]),_:1},8,["score","postId"])]),_:1})):r("",!0),t.showTruSeo&&t.allowed("aioseo_page_analysis")?(o(),u(_,{key:2,type:"action"},{tooltip:a(()=>[c(i(t.strings.truSeoScore),1)]),default:a(()=>[p(T,{score:d.post.value,postId:t.postId},{icon:a(()=>[p(w)]),_:1},8,["score","postId"])]),_:1})):r("",!0)])):r("",!0),l("div",null,[t.allowed("aioseo_page_general_settings")?(o(),u(_,{key:0,class:"aioseo-details-column__tooltip",disabled:t.showEditTitle},{tooltip:a(()=>[l("strong",null,i(t.strings.title)+":",1),c(" "+i(t.titleParsed),1)]),default:a(()=>[l("div",kt,[l("strong",null,i(t.strings.title),1),t.showEditTitle?r("",!0):(o(),h("span",bt,[St,c(" "+i(n.truncate(t.titleParsed,100)),1)])),t.postLoading?(o(),u(E,{key:1,dark:""})):r("",!0),t.showEditTitle?r("",!0):(o(),u(A,{key:2,class:"pencil-icon",onClick:m(n.editTitle,["prevent"])},null,8,["onClick"]))])]),_:1},8,["disabled"])):r("",!0)]),t.showEditTitle?(o(),h("div",Et,[p(L,{modelValue:t.title,"onUpdate:modelValue":s[0]||(s[0]=S=>t.title=S),"line-numbers":!1,single:"","tags-context":"postTitle",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["post_title"]},null,8,["modelValue"]),p(k,{type:"gray",size:"small",onClick:m(n.cancel,["prevent"])},{default:a(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),p(k,{type:"blue",size:"small",onClick:m(n.save,["prevent"])},{default:a(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):r("",!0),l("div",null,[t.allowed("aioseo_page_general_settings")?(o(),u(_,{key:0,class:"aioseo-details-column__tooltip",disabled:t.showEditDescription},{tooltip:a(()=>[l("strong",null,i(t.strings.description)+":",1),c(" "+i(n.truncate(t.descriptionParsed)),1)]),default:a(()=>[l("div",It,[l("strong",null,i(t.strings.description),1),t.showEditDescription?r("",!0):(o(),h("span",{key:0,id:`aioseo-${t.columnName}-${t.postId}-value`},[Pt,c(" "+i(n.truncate(t.descriptionParsed)),1)],8,Dt)),t.postLoading?(o(),u(E,{key:1,dark:""})):r("",!0),t.showEditDescription?r("",!0):(o(),u(A,{key:2,class:"pencil-icon",onClick:m(n.editDescription,["prevent"])},null,8,["onClick"]))])]),_:1},8,["disabled"])):r("",!0)]),t.showEditDescription?(o(),h("div",At,[p(L,{modelValue:t.postDescription,"onUpdate:modelValue":s[1]||(s[1]=S=>t.postDescription=S),"line-numbers":!1,"tags-context":"postDescription",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["post_excerpt"]},null,8,["modelValue"]),p(k,{type:"gray",size:"small",onClick:m(n.cancel,["prevent"])},{default:a(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),p(k,{type:"blue",size:"small",onClick:m(n.save,["prevent"])},{default:a(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):r("",!0),st(e.$slots,"default"),l("div",null,[e.$root.$data.screen.base==="upload"&&d.post.showMedia?(o(),u(_,{key:0,class:"aioseo-details-column__tooltip",disabled:t.showEditImageTitle},{tooltip:a(()=>[l("strong",null,i(t.strings.imageTitle)+":",1),c(" "+i(t.imageTitle),1)]),default:a(()=>[l("div",Lt,[l("strong",null,i(t.strings.imageTitle),1),t.showEditImageTitle?r("",!0):(o(),h("span",{key:0,id:`aioseo-${t.columnName}-${t.postId}-value`},[xt,c(" "+i(t.imageTitle),1)],8,Vt)),t.showEditImageTitle?r("",!0):(o(),u(A,{key:1,class:"pencil-icon",onClick:m(n.editImageTitle,["prevent"])},null,8,["onClick"]))])]),_:1},8,["disabled"])):r("",!0)]),t.showEditImageTitle?(o(),h("div",Nt,[p(L,{modelValue:t.imageTitle,"onUpdate:modelValue":s[2]||(s[2]=S=>t.imageTitle=S),"line-numbers":!1,single:"","tags-context":"attachmentTitle",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["image_title"]},null,8,["modelValue"]),p(k,{type:"gray",size:"small",onClick:m(n.cancel,["prevent"])},{default:a(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),p(k,{type:"blue",size:"small",onClick:m(n.saveImage,["prevent"])},{default:a(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):r("",!0),l("div",null,[e.$root.$data.screen.base==="upload"&&d.post.showMedia?(o(),u(_,{key:0,class:"aioseo-details-column__tooltip",disabled:t.showEditImageAltTag},{tooltip:a(()=>[l("strong",null,i(t.strings.imageAltTag)+":",1),c(" "+i(t.imageAltTag),1)]),default:a(()=>[l("div",Rt,[l("strong",null,i(t.strings.imageAltTag),1),t.showEditImageAltTag?r("",!0):(o(),h("span",{key:0,id:`aioseo-${t.columnName}-${t.postId}-value`},[Mt,c(" "+i(t.imageAltTag),1)],8,zt)),t.showEditImageAltTag?r("",!0):(o(),u(A,{key:1,class:"pencil-icon",onClick:m(n.editImageAlt,["prevent"])},null,8,["onClick"]))])]),_:1},8,["disabled"])):r("",!0)]),t.showEditImageAltTag?(o(),h("div",Bt,[p(L,{modelValue:t.imageAltTag,"onUpdate:modelValue":s[3]||(s[3]=S=>t.imageAltTag=S),"line-numbers":!1,single:"","tags-context":"attachmentDescription",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["alt_tag"]},null,8,["modelValue"]),p(k,{type:"gray",size:"small",onClick:m(n.cancel,["prevent"])},{default:a(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),p(k,{type:"blue",size:"small",onClick:m(n.saveImage,["prevent"])},{default:a(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):r("",!0)])],2)}const Ot=P(Tt,[["render",Ut]]),Ht={components:{CorePostColumn:Ot},props:{post:Object}};function Zt(e,s,d,f,t,n){const v=g("core-post-column");return o(),u(v,{post:d.post},null,8,["post"])}const M=P(Ht,[["render",Zt]]),jt={setup(){return{rootStore:Z()}},components:{PostColumn:M,PostColumnLite:M},props:{post:Object}},Ft={class:"aioseo-app"};function Gt(e,s,d,f,t,n){const v=g("PostColumn"),C=g("PostColumnLite");return o(),h("div",Ft,[f.rootStore.isPro?(o(),u(v,{key:0,post:d.post},null,8,["post"])):r("",!0),f.rootStore.isPro?r("",!0):(o(),u(C,{key:1,post:d.post},null,8,["post"]))])}const Qt=P(jt,[["render",Gt]]),V="all-in-one-seo-pack",Xt={setup(){const{strings:e}=Q();return{composableStrings:e}},components:{BaseButton:X,CoreHtmlTagsEditor:J,CoreLoader:Y,CoreTooltip:K,SvgPencil:q},props:{term:Object,terms:Array,index:Number},data(){return{termId:null,columnName:null,title:null,titleParsed:null,termDescription:null,descriptionParsed:null,showEditTitle:!1,showEditDescription:!1,showTruSeo:!1,termLoading:!1,strings:j(this.composableStrings,{title:y("Title",V),description:y("Description",V),saveChanges:y("Save Changes",V),discardChanges:y("Discard Changes",V)})}},methods:{save(){this.showEditTitle=!1,this.showEditDescription=!1,this.term.title=this.title,this.term.description=this.termDescription,this.termLoading=!0,I.post(D.restUrl("terms-list/update-details-column")).send({termId:this.term.id,title:this.term.title,description:this.term.description}).then(e=>{this.titleParsed=e.body.title,this.descriptionParsed=e.body.description,this.term.titleParsed=e.body.title,this.term.descriptionParsed=e.body.description}).catch(e=>{console.error(`Unable to update term with ID ${this.term.id}: ${e}`)}).finally(()=>{this.termLoading=!1})},cancel(){this.showEditTitle=!1,this.showEditDescription=!1},editTitle(){this.showEditTitle=!0},editDescription(){this.showEditDescription=!0},truncate:F},mounted(){this.termId=this.term.id,this.columnName=this.term.columnName,this.title=this.term.title,this.titleParsed=this.term.titleParsed,this.termDescription=this.term.description,this.descriptionParsed=this.term.descriptionParsed,this.term.reload&&this.save()},async created(){this.showTruSeo=ct()}},Yt={class:"aioseo-app"},qt={class:"edit-row edit-title"},Jt={key:0},Kt=l("strong",null,":",-1),Wt={key:0,class:"edit-row"},$t={class:"edit-row edit-description"},te={key:0},ee=l("strong",null,":",-1),se={key:1,class:"edit-row"};function ie(e,s,d,f,t,n){const v=g("core-loader"),C=g("svg-pencil"),T=g("core-tooltip"),_=g("core-html-tags-editor"),w=g("base-button");return o(),h("div",Yt,[l("div",{class:B(["aioseo-details-column",{editing:t.showEditTitle||t.showEditDescription}])},[l("div",null,[l("div",null,[p(T,{class:"aioseo-details-column__tooltip"},{tooltip:a(()=>[l("strong",null,i(t.strings.title)+":",1),c(" "+i(t.titleParsed),1)]),default:a(()=>[l("div",qt,[l("strong",null,i(t.strings.title),1),t.showEditTitle?r("",!0):(o(),h("span",Jt,[Kt,c(" "+i(n.truncate(t.titleParsed,100)),1)])),t.termLoading?(o(),u(v,{key:1,dark:""})):r("",!0),t.showEditTitle?r("",!0):(o(),u(C,{key:2,class:"pencil-icon",onClick:m(n.editTitle,["prevent"])},null,8,["onClick"]))])]),_:1})]),t.showEditTitle?(o(),h("div",Wt,[p(_,{modelValue:t.title,"onUpdate:modelValue":s[0]||(s[0]=E=>t.title=E),"line-numbers":!1,single:"","tags-context":"taxonomyTitle",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["taxonomy_title"]},null,8,["modelValue"]),p(w,{type:"gray",size:"small",onClick:m(n.cancel,["prevent"])},{default:a(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),p(w,{type:"blue",size:"small",onClick:m(n.save,["prevent"])},{default:a(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):r("",!0),l("div",null,[p(T,{class:"aioseo-details-column__tooltip"},{tooltip:a(()=>[l("strong",null,i(t.strings.description)+":",1),c(" "+i(t.descriptionParsed),1)]),default:a(()=>[l("div",$t,[l("strong",null,i(t.strings.description),1),t.showEditDescription?r("",!0):(o(),h("span",te,[ee,c(" "+i(n.truncate(t.descriptionParsed)),1)])),t.termLoading?(o(),u(v,{key:1,dark:""})):r("",!0),t.showEditDescription?r("",!0):(o(),u(C,{key:2,class:"pencil-icon",onClick:m(n.editDescription,["prevent"])},null,8,["onClick"]))])]),_:1})]),t.showEditDescription?(o(),h("div",se,[p(_,{modelValue:t.termDescription,"onUpdate:modelValue":s[1]||(s[1]=E=>t.termDescription=E),"line-numbers":!1,"tags-context":"taxonomyDescription",defaultMenuOrientation:"bottom",tagsDescription:"","default-tags":["taxonomy_description"]},null,8,["modelValue"]),p(w,{type:"gray",size:"small",onClick:m(n.cancel,["prevent"])},{default:a(()=>[c(i(t.strings.discardChanges),1)]),_:1},8,["onClick"]),p(w,{type:"blue",size:"small",onClick:m(n.save,["prevent"])},{default:a(()=>[c(i(t.strings.saveChanges),1)]),_:1},8,["onClick"])])):r("",!0)])],2)])}const oe=P(Xt,[["render",ie]]);G();const W=e=>(e=it(e),e=ot(e),e=nt(e),G(e),e),$=e=>{const s=document.getElementById(e);s!=null&&s.__vue_app__&&s.__vue_app__.unmount()},tt=e=>{$(`${e.columnName}-${e.id}`),W(U({name:"Standalone/PostsTable/"+e.id,data(){return{screen:window.aioseo.screen}},render:()=>O(Qt)},{post:e})).mount(`#${e.columnName}-${e.id}`)},et=e=>{if(!e)return;const s=document.createElement("input");s.setAttribute("type","hidden"),s.setAttribute("name","aioseo-has-details-column"),s.setAttribute("value",!0),e.append(s)};window.aioseo.posts&&0<window.aioseo.posts.length&&I.post(D.restUrl("posts-list/load-details-column")).send({ids:window.aioseo.posts.map(e=>e.id)}).then(e=>{window.aioseo.posts=window.aioseo.posts.map(s=>({...s,...e.body.posts.find(d=>d.id===s.id)})),window.aioseo.posts.forEach(s=>{tt(s)})});const x=e=>{$(`${e.columnName}-${e.id}`),W(U({name:"Standalone/TermsTable/"+e.id,data(){return{screen:window.aioseo.screen}},render:()=>O(oe)},{term:e})).mount(`#${e.columnName}-${e.id}`)};window.aioseo.terms&&0<window.aioseo.terms.length&&window.aioseo.posts.length===0&&I.post(D.restUrl("terms-list/load-details-column")).send({ids:window.aioseo.terms.map(e=>e.id)}).then(e=>{window.aioseo.terms=window.aioseo.terms.map(s=>({...s,...e.body.terms.find(d=>d.id===s.id)})),window.aioseo.terms.forEach(s=>{x(s)})});et(document.querySelector("#inline-edit div"));et(document.getElementById("addtag"));(function(e){e(document).on("ajaxComplete",(s,d,f)=>{var v,C;const t=new URLSearchParams(f.data),n=t==null?void 0:t.get("action");if(!(!t||!n)){if(n==="inline-save"){const{post_ID:T}=Object.fromEntries(t.entries()),_=window.aioseo.posts.find(w=>w.id===parseInt(T));tt({..._,reload:!0})}if(n==="inline-save-tax"){const{tax_ID:T}=Object.fromEntries(t.entries()),_=window.aioseo.terms.find(w=>w.id===parseInt(T));x({..._,reload:!0})}if(n==="add-tag"){const T=e(d.responseXML).find("term_id").text(),_=e(d.responseXML).find("term taxonomy").text(),w=H();x({id:parseInt(T),columnName:"aioseo-details",title:(v=w.dynamicOptions.searchAppearance.taxonomies[_])==null?void 0:v.title,description:(C=w.dynamicOptions.searchAppearance.taxonomies[_])==null?void 0:C.metaDescription,reload:!0})}}})})(window.jQuery);
