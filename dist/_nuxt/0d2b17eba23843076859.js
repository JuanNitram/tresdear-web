(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{274:function(t,e,r){"use strict";var n={props:{title:String,description:String,medias:Array,options:Object},data:function(){return{flickityStatus:!1,flickityOptions:{draggable:!0,prevNextButtons:!0,pageDots:!1,wrapAround:!0,cellSelector:".img-box",cellAlign:"center",adaptiveHeight:!0,imagesLoaded:!0,setGallerySize:!0,autoPlay:5e3,on:{ready:function(){this.resize()}}}}},created:function(){},computed:{}},o=r(21),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.medias.length?r("div",{attrs:{id:"breadcrumb"}},[0==t.options.flickity||1==t.medias.length?r("div",[r("div",{staticClass:"img-box"},[r("img",{attrs:{src:t.medias[0].full_url,alt:""}})])]):r("no-ssr",[r("flickity",{attrs:{options:t.flickityOptions}},[t._l(t.medias,function(t,i){return[r("div",{key:i,staticClass:"img-box"},[r("img",{attrs:{src:t.full_url,alt:""}})])]})],2)],1),t._v(" "),r("div",{staticClass:"breadcrumb-overlay",class:0==t.options.overlay?"disable":""},[r("b-container",[r("b-row",[r("b-col",[r("div",{staticClass:"content-box"},[this.title?r("h1",[t._v(t._s(this.title))]):r("h1",[t._v(t._s(t.$nuxt.$route.name))]),t._v(" "),1==t.medias.length?r("p",[t._v(t._s(this.description))]):t._e()])])],1)],1)],1)],1):t._e()},[],!1,null,null,null);e.a=component.exports},294:function(t,e,r){"use strict";r.r(e);r(10),r(89),r(60);var n=r(16),o=r(0),c=r(274),l=r(87),d={components:{breadcrumb:c.a},computed:Object(o.a)({},Object(l.b)(["projects"])),data:function(){return{window:{width:null},isMobile:null,projectId:null,projectSlug:null,project:null,medias:[],renderBreadcrumb:!1}},methods:{descriptionQuill:function(t){return new QuillDeltaToHtmlConverter(JSON.parse(t).ops).convert()},handleResize:function(){this.window.width=window.innerWidth}},created:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=this.$store.getters.projects.length){t.next=5;break}return t.next=3,this.$store.dispatch("fetch","projects").then(function(t){e.projectId=e.$route.params.id,e.projectSlug=e.$route.params.slug,e.projectId?e.$store.getters.projects.find(function(t){t.id==e.projectId&&(e.project=t)}):e.projects.find(function(t){e.slugify(t.name)==e.projectSlug&&(e.project=t)})});case 3:t.next=8;break;case 5:this.projectId=this.$route.params.id,this.projectSlug=this.$route.params.slug,this.projectId?this.$store.getters.projects.find(function(t){t.id==e.projectId&&(e.project=t)}):this.projects.find(function(t){e.slugify(t.name)==e.projectSlug&&(e.project=t)});case 8:this.project.medias.breadcrumb&&(this.medias=this.project.medias.breadcrumb.original),this.renderBreadcrumb=!0;case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),mounted:function(){var t=this;this.window.width<=768?this.isMobile=!0:this.isMobile=!1,window.addEventListener("resize",function(e){t.handleResize(),t.window.width<=768?t.isMobile=!0:t.isMobile=!1})},destroyed:function(){window.removeEventListener("resize",this.handleResize)}},m=r(21),component=Object(m.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-page-container project-file"},[t.project?r("div",[t.renderBreadcrumb?r("breadcrumb",{attrs:{title:t.project.name,description:t.project.description,medias:t.medias,options:{flickity:!0,overlay:!0}}}):t._e(),t._v(" "),r("b-container",{staticClass:"pt-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-5 pb-3 pb-sm-3 pb-md-4 pb-lg-5 pb-xl-5"},[r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("div",{staticClass:"project-info-header"},[r("h2",[t._v(t._s(t.project.name))]),t._v(" "),t.isMobile?t._e():r("div",{staticClass:"consult-btn"},[r("nuxt-link",{attrs:{to:{name:"contacto",params:{subject:t.project.name}}}},[t._v("\n                                    Consultar\n                            ")])],1)])])],1),t._v(" "),r("b-row",{staticClass:"pt-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-5 pb-0 pb-sm-0 pb-md-4 pb-lg-5 pb-xl-5"},[r("b-col",{attrs:{cols:"12"},domProps:{innerHTML:t._s(t.descriptionQuill(this.project.description_quill))}})],1),t._v(" "),t.isMobile?r("div",{staticClass:"consult-btn mb-4"},[r("nuxt-link",{attrs:{to:{name:"contacto",params:{subject:t.project.name}}}},[t._v("\n                        Consultar\n                ")])],1):t._e(),t._v(" "),r("b-row",{staticClass:"pt-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-5 pb-4 pb-sm-4 pb-md-4 pb-lg-5 pb-xl-5"},[r("b-col",{attrs:{cols:"12"}},[r("div",{staticClass:"iframe-box "},[r("iframe",{attrs:{width:"100%",height:"100%",src:t.project.link,frameborder:"0",allowfullscreen:"",allowvr:""}})])])],1)],1),t._v(" "),r("div",{staticClass:"banner"})],1):t._e()])},[],!1,null,null,null);e.default=component.exports}}]);