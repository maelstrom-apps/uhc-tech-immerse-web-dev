(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{99545:function(e){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetChatResponse"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"conversation"}},type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"conversation"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sendPrompt"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}},{kind:"Argument",name:{kind:"Name",value:"conversation"},value:{kind:"Variable",name:{kind:"Name",value:"conversation"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"response"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nextContext"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"robot"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:195}};t.loc.source={body:"query GetChatResponse($input: String! $conversation: [conversation]) {\n  sendPrompt(input: $input conversation: $conversation) {\n    response\n    nextContext {\n      user\n      robot\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&t.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,t)})),e.definitions&&e.definitions.forEach((function(e){n(e,t)}))}var i={};function o(e,t){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==t)return i}}t.definitions.forEach((function(e){if(e.name){var t=new Set;n(e,t),i[e.name.value]=t}})),e.exports=t,e.exports.GetChatResponse=function(e,t){var n={kind:e.kind,definitions:[o(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=i[t]||new Set,a=new Set,s=new Set;for(r.forEach((function(e){s.add(e)}));s.size>0;){var l=s;s=new Set,l.forEach((function(e){a.has(e)||(a.add(e),(i[e]||new Set).forEach((function(e){s.add(e)})))}))}return a.forEach((function(t){var i=o(e,t);i&&n.definitions.push(i)})),n}(t,"GetChatResponse")},85356:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(64141)}])},64141:function(e,t,n){"use strict";e.exports=n(32275).browser},32275:function(e,t,n){"use strict";n.d(t,{browser:function(){return St}});var i,o=n(52322),r=n(2784),a=n(3168),s=n(55416),l=n(10145),d=n(28497),c=n(48009),u=n(45697),p=n.n(u),f=n(70865),h=n(96670),g=n(26297),m=n(65631),x=n(9226),v=n(47842),y=(0,a.styled)("h3",{static:{fontWeight:"$bold",fontSize:"$xl",color:"$primary1",variants:{variant:{sideBarMenu:{color:"$gray8 !important",marginLeft:"-1px !important"},defaultVariants:{variant:"default"}},position:{right:{}}},compoundVariants:[{variant:"sideBarMenu",position:"right",css:{marginRight:"-1px !important"}}]}}),b=(0,a.styled)("div",{static:(i={display:"flex",flexDirection:"column",width:"100%",padding:"0 $lg"},(0,v.Z)(i,y,{fontFamily:"$primary"}),(0,v.Z)(i,"variants",{variant:{sideBarMenu:{paddingLeft:"0px !important"},defaultVariants:{variant:"default"}},position:{right:{paddingRight:"0px !important"}}}),(0,v.Z)(i,"compoundVariants",[{variant:"sideBarMenu",position:"right",css:{alignItems:"flex-end"}}]),i)}),k=(0,a.styled)("p",{color:"$gray8",fontWeight:"$medium",fontSize:"$md",margin:0,padding:0}),j=function(e){var t=e.position,n=e.variant,i=e.title,r=e.subText,a=e.headingLevel,s=(0,g.Z)(e,["position","variant","title","subText","headingLevel"]),l=(0,m.useAbyssProps)(s);return(0,o.jsxs)(b,(0,h.Z)((0,f.Z)({position:t,variant:n},l("sub-navigation-header-container")),{children:[i&&(0,o.jsx)(y,(0,h.Z)((0,f.Z)({variant:n,as:a},l("sub-navigation-header-title")),{children:i})),r&&(0,o.jsx)(k,(0,h.Z)((0,f.Z)({},l("sub-navigation-header-text")),{children:r}))]}))};j.propTypes={headingLevel:p().oneOf(["h1","h2","h3","h4","h5","h6"]).isRequired,title:p().node.isRequired,subText:p().string,position:p().string.isRequired,variant:p().string.isRequired},j.defaultProps={subText:null};var w=n(51344),Z=n(81370),$=(0,a.styled)("a",{display:"flex",justifyContent:"start",color:"$primary1",fontFamily:"$primary",fontSize:"$sm",lineHeight:1,padding:"$sm $md",variant:"custom",width:"100%","&:hover":{backgroundColor:"$gray3",textDecoration:"none",color:"$primary1"},variants:{isActive:{true:{backgroundColor:"$interactive3",borderLeft:"1px solid $primary1","&:hover":{color:"$foreground",backgroundColor:"$interactive3"}}},variant:{sideBarMenu:{},defaultVariants:{variant:"default"}},position:{left:{},right:{}},isDisabled:{true:{cursor:"not-allowed",color:"$gray5",svg:{fill:"$gray5"},"&:hover":{cursor:"not-allowed",textDecoration:"none",color:"$gray5",backgroundColor:"transparent"}}},extraPadding:{true:{paddingLeft:"$lg"}}},compoundVariants:[{variant:"sideBarMenu",position:"left",css:{borderLeft:"1px solid $primary1"}},{variant:"sideBarMenu",position:"right",css:{borderRight:"1px solid $primary1",justifyContent:"end"}}]}),T=function(e){var t=e.depth,n=e.href,i=e.isDisabled,r=e.openNewWindow,a=e.before,s=e.after,l=e.title,d=e.onClick,c=(0,g.Z)(e,["depth","href","isDisabled","openNewWindow","before","after","title","onClick"]),u=(0,m.useAbyssProps)(c),p=(0,w.useLink)((0,h.Z)((0,f.Z)({},c),{onClick:d,href:n,isDisabled:i,openNewWindow:r})).linkProps,x=function(e,t){var n=t||null;return n||(n=window.location.pathname),n.startsWith(e)}(n),v=(0,h.Z)((0,f.Z)({},p),{isDisabled:i}),y={before:a,after:s,space:"$sm",css:{"abyss-insert-element-root":{justifyContent:"start"}}};return(0,o.jsx)($,(0,h.Z)((0,f.Z)({},v,u("sub-navigation-menu-link")),{isActive:x,extraPadding:t<=1,children:(0,o.jsx)(Z.Layout.Insert,(0,h.Z)((0,f.Z)({},y),{children:l}))}))};T.propTypes={depth:p().number.isRequired,title:p().string.isRequired,href:p().string.isRequired,isDisabled:p().bool,openNewWindow:p().bool,before:p().node,after:p().node,onClick:p().func},T.defaultProps={isDisabled:!1,openNewWindow:!1,before:null,after:null,onClick:null};var S=n(7473),C=((0,a.styled)("div",{width:"100%"}),(0,a.styled)("div",{fontFamily:"$primary",fontSize:"$sm",fontWeight:"$medium",color:"$gray8",variants:{isDisabled:{true:{cursor:"not-allowed",color:"$gray5"}},isAction:{true:{textDecoration:"none","-webkit-tap-highlight-color":"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":{textDecoration:"underline",color:"$interactive2"}}}}})),L=(0,a.styled)("div",{lineHeight:0,borderRadius:4,marginRight:"$xs","&:hover":{backgroundColor:"$gray3"},variants:{isDisabled:{true:{cursor:"not-allowed",color:"$gray5","&:hover":{backgroundColor:"transparent"}}}}}),F=(0,a.styled)("ul",{display:"flex",flexDirection:"column",marginLeft:28}),R=(0,a.styled)("div",{display:"flex",alignItems:"center",margin:"$sm $md"}),D=(0,a.styled)(S.IconMaterial,{cursor:"pointer",variants:{isOpen:{true:{transition:"transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",transform:"rotate(90deg)"},false:{transition:"transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",transform:"rotate(0deg)"}},isDisabled:{true:{cursor:"not-allowed"}}}}),I=function(e){var t=e.depth,n=e.isDisabled,i=e.isOpenByDefault,a=e.title,s=(e.after,e.subItems),l=e.href,d=e.onClick,c=(0,g.Z)(e,["depth","isDisabled","isOpenByDefault","title","after","subItems","href","onClick"]),u=(0,r.useState)(i),p=u[0],x=u[1],v=(0,m.useAbyssProps)(c),y=p?"collapse":"expand",b="string"===typeof a?" ".concat(a):"",k={type:"button",as:"button","aria-expanded":p,"aria-label":"".concat(y).concat(b),onClick:function(){x(!p)}};n&&(k=(0,h.Z)((0,f.Z)({},k),{isDisabled:n,"aria-disabled":n,onClick:function(){}}));var j=(0,w.useLink)((0,f.Z)({href:l,isDisabled:n,onClick:d},c)).linkProps,Z={};return!l&&!d||n||(Z=(0,f.Z)({isAction:!0},j)),(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)(R,(0,h.Z)((0,f.Z)({},v("sub-navigation-dropdown-wrapper"),k),{children:[(0,o.jsx)(L,(0,h.Z)((0,f.Z)({},v("sub-navigation-dropdown-button")),{children:(0,o.jsx)(D,(0,f.Z)({icon:"keyboard_arrow_right",isOpen:p,isDisabled:n,color:n?"$gray5":"$gray8"},v("sub-navigation-dropdown-button-chevron")))})),(0,o.jsx)(C,(0,h.Z)((0,f.Z)({isDisabled:n},Z,v("sub-navigation-dropdown-title")),{children:a}))]})),p&&(0,o.jsx)(F,(0,h.Z)((0,f.Z)({},v("sub-navigation-dropdown-list-container")),{children:s.map((function(e,n){return(0,o.jsx)(z,{menuItem:e,depth:t+1})}))}))]})};I.propTypes={depth:p().number.isRequired,isOpenByDefault:p().bool,after:p().node,title:p().string.isRequired,subItems:p().arrayOf(p().shape({})).isRequired,href:p().string,onClick:p().func},I.defaultProps={isOpenByDefault:!1,after:null,href:null,onClick:null};var P=(0,a.styled)("div",{display:"flex",marginBottom:"$sm",marginTop:"$lg",fontSize:"$xs",fontWeight:"$bold",letterSpacing:"0.8px",textTransform:"uppercase",padding:"0 $lg"}),N=function(e){var t=e.title;return(0,o.jsx)(P,{children:t})};N.propTypes={title:p().string.isRequired};var W=(0,a.styled)("ul",{display:"flex",flexDirection:"column",width:"100%"}),B=(0,a.styled)("li",{width:"100%"}),z=function(e){var t=e.menuItem,n=e.index,i=e.depth,a=(0,g.Z)(e,["menuItem","index","depth"]),s=(0,m.useAbyssProps)(a);return t.title?i>0&&t.subItems?(0,o.jsx)(B,(0,h.Z)((0,f.Z)({},s("sub-navigation-menu-item")),{children:(0,o.jsx)(I,(0,h.Z)((0,f.Z)({},t),{depth:i}))}),"menuDropDown_".concat(n)):t.href||t.onClick?(0,o.jsx)(B,(0,h.Z)((0,f.Z)({},s("sub-navigation-menu-item")),{children:(0,o.jsx)(T,(0,h.Z)((0,f.Z)({},t),{depth:i}))}),"menuLink_".concat(n)):(0,o.jsxs)(B,(0,h.Z)((0,f.Z)({},s("sub-navigation-menu-item")),{children:[(0,o.jsx)(N,(0,f.Z)({},t)),t.subItems&&(0,o.jsx)(W,(0,h.Z)((0,f.Z)({},a,s("sub-navigation-menu-items")),{children:t.subItems.map((function(e,t){return(0,r.createElement)(z,(0,h.Z)((0,f.Z)({},a),{key:n,menuItem:e,index:t,depth:i+1}))}))}))]}),"menuHeading_".concat(n)):null};z.propTypes={menuItem:p().shape({href:p().string,isDisabled:p().bool,openNewWindow:p().bool,before:p().node,after:p().node,title:p().string,onClick:p().func,subItems:p().arrayOf(p().shape({}))}).isRequired,index:p().number.isRequired,depth:p().number},z.defaultProps={depth:0};var O=(0,a.styled)("nav",{static:{paddingTop:"$md",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexDirection:"column",width:"100%",overflowY:"auto",variants:{position:{right:{},left:{}},variant:{sideBarMenu:{border:"none !important"},defaultVariants:{variant:"default"}}}},dynamic:function(e){var t=e.cssProps;return{width:t.width,height:t.height}}}),E=(0,a.styled)("ul",{display:"flex",flexDirection:"column",width:"100%",variants:{position:{right:{},left:{}},variant:{sideBarMenu:{marginTop:"5px !important"},defaultVariants:{variant:"default"}}},compoundVariants:[{variant:"sideBarMenu",position:"right"},{variant:"sideBarMenu",position:"left"}]}),q=function(e){var t=e.title,n=e.subText,i=e.navItems,a=e.position,s=e.variant,l=e.headingLevel,d=e.height,c=e.width,u=(0,g.Z)(e,["title","subText","navItems","position","variant","headingLevel","height","width"]),p=(0,m.useAbyssProps)(u),v=(0,x.useCssProps)({height:d,width:c});return(0,o.jsxs)(O,(0,h.Z)((0,f.Z)({position:a,variant:s,cssProps:v},p("sub-navigation-menu-root")),{"aria-label":t,children:[t&&(0,o.jsx)(j,(0,h.Z)((0,f.Z)({},u),{position:a,variant:s,title:t,subText:n,headingLevel:l})),(0,o.jsx)(E,(0,h.Z)((0,f.Z)((0,h.Z)((0,f.Z)({},u),{position:a,variant:s}),p("sub-navigation-menu-items")),{children:i.map((function(e,t){return(0,r.createElement)(z,(0,h.Z)((0,f.Z)({},u),{key:t,menuItem:e,index:t}))}))}))]}))};q.displayName="@abyss/web/ui/SubNavigationMenu",q.propTypes={title:p().node,subText:p().string,height:p().oneOfType([p().number,p().string]),width:p().oneOfType([p().number,p().string]),navItems:p().arrayOf(p().shape({})),position:p().string,variant:p().oneOf(["default","sideBarMenu"]),headingLevel:p().oneOf(["h1","h2","h3","h4","h5","h6"])},q.defaultProps={navItems:[],position:"right",height:"100%",width:"100%",variant:"default",title:null,subText:null,headingLevel:"h3"};var A=(0,a.styled)("aside",{background:"$white",borderRight:"1px solid $gray4",minHeight:"100vh"}),_=(0,a.styled)("div",{overflowX:"hidden",overflowY:"scroll",position:"sticky",top:0,height:"100%",maxHeight:"100vh",width:260}),H=function(e){var t=e.title;return(0,o.jsx)(A,{children:(0,o.jsx)(_,{children:(0,o.jsx)(q,{title:t,navItems:[{title:"Overview",subItems:[{title:"Chat",href:"/chat"}]}]})})})},M=n(66383),V=n(29221),G=(0,a.styled)("footer",{position:"relative"}),U=(0,a.styled)("div",{position:"fixed",bottom:0,"&:before":{content:'""',position:"absolute",pointerEvents:"none",top:0,left:0,width:"100%",height:"100%",boxShadow:"inset rgb(50 50 93 / 25%) 0px 50px 100px -20px,\n      rgb(0 0 0 / 30%) 0px 30px 60px -30px"}}),X=(0,a.styled)("div",{padding:"$md $lg",margin:"0 auto",width:"100%",maxWidth:"$sizes$pageSize",backgroundColor:"$footerBackground",variants:{fullWidth:{true:{maxWidth:"100%"}}}}),Y=(0,a.styled)("nav",{display:"flex",flexWrap:"wrap",justifyContent:"start",color:"$footerText",columnGap:"40px",borderBottom:"1px solid $footerBorder",marginTop:"$lg",marginBottom:"$xs"}),K=(0,a.styled)("div",{display:"flex",justifyContent:"space-evenly"}),Q=(0,a.styled)("div",{marginBottom:"$md"}),J=(0,a.styled)("div",{display:"flex",justifyContent:"space-between",color:"$footerText",fontSize:"$xs",flexWrap:"wrap"}),ee=(0,a.styled)("p",{marginBottom:0}),te=(0,a.styled)("small",{}),ne=(0,a.styled)("nav",{}),ie=(0,a.styled)("ul",{display:"flex",alignItems:"center"}),oe=(0,a.styled)("li",{}),re=(0,a.styled)("a",{fontSize:"80%",color:"$footerText",textUnderlineOffset:4,"&:hover":{color:"$footerLinkHover"}}),ae=(0,a.styled)("span",{borderLeft:"1px solid $footerBorder",display:"inline-block",height:"9px",textAlign:"center",marginLeft:"$sm",marginRight:"$sm"}),se=function(e){var t=e.subFooterLinks,n=e.subFooterTitle,i=e.children,a=e.brandmark,s=e.fullWidth,l=e.bottomFixed,d=(0,g.Z)(e,["subFooterLinks","subFooterTitle","children","brandmark","fullWidth","bottomFixed"]),c=(0,m.useAbyssProps)(d),u=t.length,p=(0,o.jsxs)(X,(0,h.Z)((0,f.Z)({},c("page-footer-container")),{fullWidth:s,children:[i&&(0,o.jsxs)(Y,(0,h.Z)((0,f.Z)({},c("page-footer-links")),{role:"navigation","aria-label":"footer navigation",children:[a&&(0,o.jsx)(Q,(0,h.Z)((0,f.Z)({},c("page-footer-brandmark-wrapper")),{children:(0,o.jsx)(K,(0,h.Z)((0,f.Z)({},c("page-footer-brandmark-container")),{children:a}))})),i]})),(0,o.jsxs)(J,(0,h.Z)((0,f.Z)({},c("page-footer-sub-wrapper")),{children:[(0,o.jsx)(ee,(0,h.Z)((0,f.Z)({},c("page-footer-copyright-container")),{children:(0,o.jsxs)(te,(0,h.Z)((0,f.Z)({},c("page-footer-copyright")),{children:["\xa9 ",(new Date).getFullYear()," ",n]}))})),(0,o.jsx)(ne,(0,h.Z)((0,f.Z)({"aria-label":"sub footer navigation"},c("page-footer-sub-nav")),{children:(0,o.jsx)(ie,(0,h.Z)((0,f.Z)({},c("page-footer-sub-list-container")),{children:null===t||void 0===t?void 0:t.map((function(e,t){return(0,o.jsx)(r.Fragment,{children:(0,o.jsxs)(oe,(0,h.Z)((0,f.Z)({},c("page-footer-sub-list")),{children:[(0,o.jsx)(re,(0,h.Z)((0,f.Z)({},c("page-footer-sub-link")),{href:e.href,target:e.target,children:e.label})),u!==t+1&&(0,o.jsx)(ae,(0,f.Z)({},c("page-footer-sub-divider")))]}))},e.label)}))}))}))]}))]}));if(l){var x=(0,M.Z)((0,V.x)(),2),v=x[0],y=x[1].height,b=(0,M.Z)((0,V.x)(),2),k=b[0],j=b[1].width;return(0,o.jsx)(G,(0,h.Z)((0,f.Z)({ref:k,css:{marginTop:y}},c("page-footer-root")),{children:(0,o.jsx)(U,(0,h.Z)((0,f.Z)({ref:v,css:{width:j}},c("page-footer-fixed",{css:{width:j}})),{children:p}))}))}return(0,o.jsx)(G,(0,h.Z)((0,f.Z)({},c("page-footer-root")),{children:p}))};se.displayName="@abyss/web/ui/PageFooter",se.propTypes={children:p().node,subFooterTitle:p().string,brandmark:p().node,subFooterLinks:p().arrayOf(p().shape({label:p().string,href:p().string})),fullWidth:p().bool,bottomFixed:p().bool},se.defaultProps={children:null,subFooterTitle:null,subFooterLinks:[],brandmark:null,fullWidth:!1,bottomFixed:!1};var le=(0,a.styled)("div",{display:"flex",flexDirection:"column",flexFlow:"column wrap",alignItems:"flex-start",marginBottom:"$lg"}),de=(0,a.styled)("p",{fontSize:"$xl",fontWeight:"$bold",color:"$footerText",marginBottom:"$md"}),ce=(0,a.styled)("ul",{}),ue=function(e){var t=e.title,n=e.children,i=(0,g.Z)(e,["title","children"]),r=(0,m.useAbyssProps)(i);return(0,o.jsxs)(le,(0,h.Z)((0,f.Z)({},r("page-footer-section")),{children:[(0,o.jsx)(de,(0,h.Z)((0,f.Z)({},r("page-footer-section-title")),{children:t})),(0,o.jsx)(ce,(0,h.Z)((0,f.Z)({},r("page-footer-list-container")),{children:n}))]}))};ue.displayName="@abyss/web/ui/PageFooter.Section",ue.propTypes={children:p().node,title:p().string},ue.defaultProps={children:null,title:null};var pe=n(19325),fe=n(53674),he=(0,a.styled)(S.IconMaterial,{transition:"transform 0.3s ease , -webkit-transform 0.3s ease"}),ge=(0,a.styled)("li",{"& + &":{marginTop:"$md !important"},"&:hover":(0,v.Z)({textDecoration:"none",cursor:"pointer"},he,{transform:"translate3d(5px, 0, 0)"})}),me=(0,a.styled)(fe.Link,{color:"$footerText","&:hover":{color:"$footerLinkHover"}}),xe=function(e){var t=e.children,n=e.href,i=e.onClick,r=(0,g.Z)(e,["children","href","onClick"]),a=(0,m.useAbyssProps)(r),s=(0,pe.useAbyssTheme)(),l="optum"!==(null===s||void 0===s?void 0:s.themeName);return(0,o.jsx)(ge,(0,h.Z)((0,f.Z)({},a("page-footer-link-item")),{children:(0,o.jsx)(me,(0,h.Z)((0,f.Z)({},a("page-footer-link")),{href:n,onClick:i,hideIcon:!0,variant:"custom",children:(0,o.jsx)(Z.Layout.Insert,(0,h.Z)((0,f.Z)({},a("page-footer-link-icon-insert")),{after:l&&(0,o.jsx)(he,(0,f.Z)({color:"$footerText",icon:"chevron_right"},a("page-footer-link-icon"))),children:t}))}))}))};xe.displayName="@abyss/web/ui/PageFooter.Link",xe.propTypes={children:p().node,href:p().string,onClick:p().func},xe.defaultProps={children:null,href:null,onClick:null},se.Link=xe,se.Section=ue;var ve=function(){return(0,o.jsx)(se,{fullWidth:!0,bottomFixed:!0,subFooterLinks:[{label:"Github",href:"https://github.com/uhc-tech/immerse",target:"_blank"}],subFooterTitle:"UnitedHealth Group. All rights reserved."})},ye=n(82204),be=(0,a.styled)(ye.m,{minHeight:60}),ke=(0,a.styled)(Z.Layout.Group,{width:"100%"}),je=(0,a.styled)(Z.Layout.Group,{paddingRight:"$lg"}),we=function(){return(0,o.jsx)(be,{fullWidth:!0,hideLogo:!0,children:(0,o.jsx)(ke,{alignLayout:"right",children:(0,o.jsxs)(je,{children:[(0,o.jsx)(S.IconMaterial,{icon:"account_circle"}),"Dev User"]})})})},Ze=(0,a.styled)("img",{height:"32px",marginRight:"$sm"}),$e=(0,a.styled)("div",{display:"inline-block"}),Te=(0,a.styled)(fe.Link,{display:"flex",alignItems:"center",div:{color:"$accent1",fontWeight:"$bold",fontSize:"18px"},"&:hover div":{color:"$interactive1"}}),Se=function(){return(0,o.jsx)($e,{children:(0,o.jsxs)(Te,{href:"/",variant:"custom",children:[(0,o.jsx)(Ze,{src:"/assets/logo.png",alt:"Immerse Logo"}),(0,o.jsx)("div",{children:"Optumus Prime"})]})})},Ce=(0,a.styled)("div",{display:"flex",backgroundColor:"$background",maxHeight:"calc(100vh - 52px)",overflow:"hidden"}),Le=(0,a.styled)("div",{width:"100%",maxHeight:"calc(100vh - 52px)"}),Fe=(0,a.styled)("main",{zIndex:1,backgroundColor:"$background"}),Re=(0,a.styled)("main",{maxWidth:"100vw - 510px",margin:"0"}),De=function(e){var t=e.children;return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)(Ce,{children:[(0,o.jsx)(H,{title:(0,o.jsx)(Se,{})}),(0,o.jsxs)(Le,{children:[(0,o.jsx)(we,{}),(0,o.jsx)(Fe,{children:(0,o.jsx)(Re,{children:t})})]})]}),(0,o.jsx)(ve,{})]})};De.propTypes={children:p().node.isRequired};var Ie=n(50930),Pe=n(76500),Ne=n(11124),We=(n(35022),n(35981)),Be=n(66449),ze=n(99545),Oe=n.n(ze),Ee=(0,a.keyframes)({"0%":{content:".",color:"$gray5"},"16%":{content:".",color:"$gray5"},"33%":{content:"..",color:"$gray6"},"50%":{content:"..",color:"$gray6"},"66%":{content:"...",color:"$gray7"},"83%":{content:"...",color:"$gray7"}}),qe=(0,a.styled)("div",{width:"100px",marginTop:"0px",static:{"&::after":{display:"inline-block",animation:"".concat(Ee," 1.25s infinite"),content:".",width:"30px",textAlign:"left",color:"$gray5",fontSize:"24px",fontWeight:"500",lineHeight:"14px"}},dynamic:function(e){var t=e.size,n=e.text;return{"&::after":{display:"inline-block",animation:"".concat(Ee," 1.25s infinite"),content:".",width:"".concat(t,"px"),textAlign:"left",color:"$gray5",fontSize:"".concat(t,"px"),fontWeight:"500",lineHeight:"".concat(.7*t,"px"),marginTop:"".concat(n?"1px":"0px"),marginLeft:"".concat(n?"7px":"0px")}}}}),Ae=function(){return(0,o.jsx)(qe,{size:30})},_e=n(91159),He=(0,a.styled)("code",{maxWidth:"36vw",overflow:"scroll"}),Me=function(e){return e.trim().replaceAll("  ","").replaceAll("\n\n","\n")},Ve=function(e){var t,i=e.text,a=e.type,s=e.interval,l=e.onFinishedTyping,d=e.whileTyping;t=n(99280);var c=i;"code"===a&&(c=function(e){var t=e;if("\n"!==e[0]){var n=Math.min(t.indexOf(" "),t.indexOf("\n"));t=t.substring(n)}return t}(i),function(e){if("\n"!==e[0]){var t=Math.min(e.indexOf(" "),e.indexOf("\n"));return e.substring(0,t)}}(i));var u=(0,r.useState)(""),p=u[0],f=u[1],h=(0,r.useState)(!1),g=h[0],m=h[1];return(0,r.useEffect)((function(){!function(){var e=0,t="";if(c)var n=setInterval((function(){e<c.length?(f(t+=c[e]),e+=1,d()):(e=0,t="",clearInterval(n),m(!0))}),s)}()}),[c,s]),(0,r.useEffect)((function(){g&&l&&(l(),"code"===a&&document.querySelectorAll("code").forEach((function(e){t.highlightElement(e)})))}),[g]),"markdown"===a?(0,o.jsx)(_e.U,{children:p}):(0,o.jsx)("pre",{children:(0,o.jsx)(He,{children:Me(p)})})};Ve.propTypes={text:p().string,type:p().oneOf(["markdown","code"]),interval:p().number,onFinishedTyping:p().func,whileTyping:p().func},Ve.defaultProps={text:"",type:"markdown",interval:100,onFinishedTyping:function(){},whileTyping:function(){}};var Ge=(0,a.styled)("div",{display:"flex",flexDirection:"column"}),Ue=function(e){var t=e.onFinishedTyping,n=e.whileTyping,i=e.children,a=(0,r.useState)(1),s=a[0],l=a[1],d=i.split("```").map((function(e,t){return{text:e,type:t%2===0?"markdown":"code"}}));return(0,o.jsx)(Ge,{children:d.slice(0,s).map((function(e,i){return(0,o.jsx)(Ve,{text:e.text,type:e.type,interval:25,onFinishedTyping:i===d.length-1?t:function(){l(s+1)},whileTyping:n})}))})};Ue.propTypes={onFinishedTyping:p().func,whileTyping:p().func,children:p().string},Ue.defaultProps={onFinishedTyping:function(){},whileTyping:function(){},children:""};var Xe=(0,a.styled)("div",{display:"flex",justifyContent:"flex-end"}),Ye=(0,a.styled)("div",{display:"flex",justifyContent:"flex-start"}),Ke=(0,a.styled)("div",{position:"relative",display:"flex",padding:"10px 20px",borderRadius:20,marginTop:10,maxWidth:"40vw",width:"max-content",fontSize:16}),Qe=(0,a.styled)(Ke,{backgroundColor:"$primary1",color:"#fff",marginRight:"5%"}),Je=(0,a.styled)(Ke,{backgroundColor:"$interactive3",color:"#000",marginLeft:"5%"}),et=(0,a.styled)("div",{position:"absolute",width:20,height:20,bottom:-2,zIndex:-2}),tt=(0,a.styled)(et,{backgroundColor:"$primary1",borderBottomLeftRadius:25,right:-10}),nt=(0,a.styled)(et,{backgroundColor:"$interactive3",borderBottomRightRadius:25,left:-10}),it=(0,a.styled)("div",{position:"absolute",backgroundColor:"#f4f4f4",width:20,height:35,bottom:-8,zIndex:-1}),ot=(0,a.styled)(it,{borderBottomLeftRadius:35,right:-20}),rt=(0,a.styled)(it,{borderBottomRightRadius:35,left:-20}),at=function(e){var t=e.self,n=e.isLoading,i=e.onFinishedTyping,r=e.whileTyping,a=e.children,s=t?Xe:Ye,l=t?Qe:Je,d=t?tt:nt,c=t?ot:rt;return(0,o.jsx)(s,{children:(0,o.jsxs)(l,{children:[t?a:(0,o.jsx)(Ue,{onFinishedTyping:i,whileTyping:r,children:a}),n?(0,o.jsx)(Ae,{}):null,(0,o.jsx)(d,{}),(0,o.jsx)(c,{})]})})};at.propTypes={self:p().bool,isLoading:p().bool,onFinishedTyping:p().func,whileTyping:p().func,children:p().string},at.defaultProps={self:!1,isLoading:!1,onFinishedTyping:function(){},whileTyping:function(){},children:""};var st=n(2737),lt=(0,a.styled)("div",{minWidth:"73vw",margin:"0 auto",paddingTop:"$sm"}),dt=(0,a.styled)(st.o,{borderRadius:"24px !important",padding:"12px 16px !important",fontSize:"16px !important",".abyss-text-input":{paddingRight:"50px !important"}}),ct=function(e){var t=e.onSubmit,n=(0,r.useState)(""),i=n[0],a=n[1],s=function(e){t(e)};return(0,o.jsx)(r.Fragment,{children:(0,o.jsx)(lt,{children:(0,o.jsx)(dt,{hideLabel:!0,label:"Search",value:i,onChange:function(e){a(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&i&&(s(i),a(""))},inputRightElement:(0,o.jsx)(S.IconMaterial,{icon:"send",size:"24px",color:"$gray6",onClick:function(){i&&(s(i),a(""))}})})})})},ut=(0,a.styled)("div",{position:"sticky",padding:"$lg $xl",top:0,maxHeight:"100vh-112",maxWidth:"100vw - 510px"}),pt=(0,a.styled)("div",{position:"fixed",bottom:30}),ft=(0,a.styled)("div",{width:"100%",overflowY:"scroll",position:"sticky",paddingBottom:"$xl",maxHeight:"70vh",scrollbarColor:"$background"}),ht=function(){var e,t,n=(0,M.Z)((0,We.a)(Oe(),(0,h.Z)((0,f.Z)({},t),{url:(0,Be.config)("GRAPHQL_API_PATH"),dataKey:"sendPrompt"})),2),i=n[0],a=n[1],s=(0,r.useState)([]),l=s[0],d=s[1],c=(0,r.useState)([]),u=c[0],p=c[1],g=(0,r.useState)(!0),m=g[0],x=g[1],v=(0,Pe.t)().getRouteParams(),y=Ne.q.parse(v.id).text,b=function(){document.querySelector(".conversation").scrollTop=document.querySelector(".conversation").scrollHeight},k=function(){document.querySelector(".conversation").scrollTop=document.querySelector(".conversation").scrollHeight};return(0,r.useEffect)((function(){if(y&&m){a({variables:{input:y}});var e=u;e.push({user:y}),p((0,Ie.Z)(e))}}),[y,m]),(0,r.useEffect)((function(){if(i.data&&!i.loading){var e=u;e.push({ai:i.data.response}),p((0,Ie.Z)(e)),d(i.data.nextContext),m&&x(!1)}}),[i]),(0,r.useEffect)((function(){document.querySelector(".conversation").scrollTop=document.querySelector(".conversation").scrollHeight}),[u,null===(e=document.querySelector(".conversation"))||void 0===e?void 0:e.scrollHeight]),(0,o.jsx)(ut,{children:(0,o.jsxs)(Z.Layout.Stack,{width:"100%",alignLayout:"center",children:[(0,o.jsxs)(ft,{className:"conversation",children:[u.map((function(e){return(0,o.jsx)(at,{onFinishedTyping:b,whileTyping:k,self:e.user,children:e.user?e.user:e.ai||""})})),!i.data||i.loading?(0,o.jsx)(at,{isLoading:!0}):null]}),(0,o.jsx)(pt,{children:(0,o.jsx)(ct,{onSubmit:function(e){var t=u;t.push({user:e}),p(t),a({variables:{input:e,conversation:l}})}})})]})})},gt=function(){return(0,o.jsx)(De,{children:(0,o.jsx)(c.F.Routes,{children:(0,o.jsx)(c.F.Route,{path:"/chat/:id",element:(0,o.jsx)(ht,{})})})})},mt=n(55436),xt=n(32277),vt=(0,a.styled)("div",{textAlign:"center"}),yt=(0,a.styled)("div",{position:"relative",zIndex:1,background:"$background",padding:"150px 16px"}),bt=(0,a.styled)(mt.X,{fontSize:"70px !important",marginBottom:"$md"}),kt=(0,a.styled)("div",{maxWidth:"744px",margin:"0 auto",paddingTop:"$sm"}),jt=(0,a.styled)(st.o,{borderRadius:"24px !important",padding:"12px 16px !important",fontSize:"16px !important",".abyss-text-input":{paddingLeft:"50px !important",paddingRight:"50px !important"}}),wt=function(){var e=(0,r.useState)(""),t=e[0],n=e[1],i=(0,Pe.t)(),a=function(){if(t){var e=Ne.q.create({text:t});i.navigate("/chat/".concat(e))}};return(0,o.jsxs)(vt,{children:[(0,o.jsx)(we,{}),(0,o.jsxs)(yt,{children:[(0,o.jsx)(bt,{children:"Optumus Prime"}),(0,o.jsx)(kt,{children:(0,o.jsx)(jt,{hideLabel:!0,label:"Search",value:t,onChange:function(e){n(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&a()},inputLeftElement:(0,o.jsx)(S.IconMaterial,{icon:"search",size:"24px",color:"$gray6"}),inputRightElement:(0,o.jsx)(xt.z,{variant:"ghost",rounded:!0,onClick:a,children:(0,o.jsx)(S.IconMaterial,{icon:"send",size:"24px",color:"$gray6"})})})})]}),(0,o.jsx)(ve,{})]})},Zt=(0,a.globalCss)({body:{background:"$background"}}),$t=(0,s.createTheme)("optum"),Tt=(0,l.p)((function(){return(0,o.jsxs)(c.F.Routes,{children:[(0,o.jsx)(c.F.Route,{path:"/",element:(0,o.jsx)(wt,{})}),(0,o.jsx)(c.F.Route,{path:"/*",element:(0,o.jsx)(gt,{})})]})})),St=function(){return Zt(),(0,o.jsx)(d.n,{theme:$t,router:Tt})}}},function(e){e.O(0,[774,307,888,179],(function(){return t=85356,e(e.s=t);var t}));var t=e.O();_N_E=t}]);