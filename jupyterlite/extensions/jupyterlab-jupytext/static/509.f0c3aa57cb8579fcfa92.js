"use strict";(self.webpackChunkjupyterlab_jupytext=self.webpackChunkjupyterlab_jupytext||[]).push([[509],{523:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.executeMetadataCommand=t.isMetadataCommandEnabled=t.isMetadataCommandToggled=t.executePairCommand=t.isPairCommandEnabled=t.isPairCommandToggled=void 0;const a=o(440),n=o(151);function r(e){let t=e.currentWidget.context.path.split(".").pop();return t?(t=n.LANGUAGE_INDEPENDENT_NOTEBOOK_EXTENSIONS.includes(t)?t:"auto",t):""}function i(e){var t;if(!e.currentWidget)return[];let o=function(e){const t=e.currentWidget.context.model.getMetadata("jupytext");return t?(t.formats?t.formats.split(","):[]).filter((e=>""!==e)):[]}(e);const a=e.currentWidget.context.model.getMetadata("language_info");if(a&&a.file_extension){const e=a.file_extension.substring(1);o=o.map((t=>t===e?"auto:light":t.replace(`${e}:`,"auto:")))}const i=r(e);if(!i)return o;if(o.map((e=>e.split(":")[0])).includes(i))return o;if(n.LANGUAGE_INDEPENDENT_NOTEBOOK_EXTENSIONS.includes(i))o.push(i);else{const a=e.currentWidget.context.model.getMetadata("jupytext"),n=a&&(null===(t=null==a?void 0:a.text_representation)||void 0===t?void 0:t.formatName)||"light";o.push(`auto:${n}`)}return o}t.isPairCommandToggled=function(e,t){if(!t.currentWidget)return!1;const o=i(t);if("custom"===e){for(const e of o)if(!n.JUPYTEXT_FORMATS.includes(e))return!0;return!1}return o.includes(e)},t.isPairCommandEnabled=function(e,t){if(!t.currentWidget)return!1;if(e===t.currentWidget.context.path.split(".").pop())return!1;const o=i(t);return"none"!==e||o.length>1},t.executePairCommand=function(e,t,o,n){if(!o.currentWidget)return;const l=o.currentWidget.context.model;let c=l.getMetadata("jupytext"),s=i(o);if(console.debug("Jupytext: executing command="+e),"custom"===t)return void(0,a.showErrorMessage)(n.__("Error"),n.__("Please edit the notebook metadata directly if you wish a custom configuration."));const d=r(o),m=s.indexOf(t);if("none"===t){for(const e of s)if(e.split(":")[0]===d){s=[e];break}}else if(-1!==m){s.splice(m,1);let e=!1;for(const t of s)if(t.split(":")[0]===d){e=!0;break}if(!e)return}else{const e=[];for(const o of s)o.split(":")[0]!==t.split(":")[0]&&e.push(o);s=e,s.push(t)}if(1===s.length&&("auto"!==d?s=[]:(null==c?void 0:c.text_representation)&&(c.text_representation.formatName=s[0].split(":")[1],s=[])),0===s.length){if(!c)return;return c.formats&&delete c.formats,0===Object.keys(c).length&&l.deleteMetadata("jupytext"),void l.setMetadata("jupytext",c)}c?c.formats=s.join():c={formats:s.join()},l.setMetadata("jupytext",c)},t.isMetadataCommandToggled=function(e){if(!e.currentWidget)return!1;const t=e.currentWidget.context.model.getMetadata("jupytext");return!!t&&"-all"!==t.notebook_metadata_filter},t.isMetadataCommandEnabled=function(e){if(!e.currentWidget)return!1;const t=e.currentWidget.context.model.getMetadata("jupytext");if(!t)return!1;const o=t;return void 0===o.notebook_metadata_filter||"-all"===o.notebook_metadata_filter},t.executeMetadataCommand=function(e){var t;if(console.debug("Jupytext: toggling YAML header"),!e.currentWidget)return;const o=e.currentWidget.context.model,a=o.getMetadata("jupytext");if(!a)return;const n=null!==(t=a)&&void 0!==t?t:{};n.notebook_metadata_filter?(delete n.notebook_metadata_filter,"-all"===n.notebook_metadata_filter&&delete n.notebook_metadata_filter):(n.notebook_metadata_filter="-all",void 0===n.notebook_metadata_filter&&(n.notebook_metadata_filter="-all")),o.setMetadata("jupytext",n)}},631:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createFactory=void 0;const a=o(440),n=o(506),r=o(151);t.createFactory=function(e,t,o,i,l,c,s,d,m,u,p,b){var g,f,N;const k=r.FILE_TYPES.concat(e),T=(0,a.createToolbarFactory)(t,o,"Notebook","@jupyterlab/notebook-extension:panel",u),y=new n.NotebookWidgetFactory({name:r.FACTORY,label:p.__(r.FACTORY),fileTypes:k,modelName:null!==(g=c.modelName)&&void 0!==g?g:"notebook",preferKernel:null===(f=c.preferKernel)||void 0===f||f,canStartKernel:null===(N=c.canStartKernel)||void 0===N||N,rendermime:m,contentFactory:s,editorConfig:c.editorConfig,notebookConfig:c.notebookConfig,mimeTypeService:d.mimeTypeService,toolbarFactory:T,translator:u});i.addWidgetFactory(y);let _=0;const E=i.getFileType("notebook");if(y.widgetCreated.connect(((e,t)=>{var o,a;t.id=t.id||"notebook-jupytext-"+ ++_,t.title.icon=null==E?void 0:E.icon,t.title.iconClass=null!==(o=null==E?void 0:E.iconClass)&&void 0!==o?o:"",t.title.iconLabel=null!==(a=null==E?void 0:E.iconLabel)&&void 0!==a?a:"",t.context.pathChanged.connect((()=>{l.save(t)})),l.add(t)})),b)for(const e of k)b.addFileType(e)}},509:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const a=o(440),n=o(242),r=o(623),i=o(265),l=o(500),c=o(349),s=o(506),d=o(193),m=o(943),u=o(215),p=o(844),b=o(126),g=o(12),f=o(256),N=o(262),k=o(667),T=o(151),y=o(523),_=o(446),E=o(631),x=o(976),h={id:T.JUPYTEXT_EXTENSION_ID,autoStart:!0,optional:[i.ILauncher,u.IMainMenu,m.IDefaultFileBrowser,p.ITranslator,a.ICommandPalette,k.IRisePreviewFactory],requires:[s.NotebookPanel.IContentFactory,c.IEditorServices,n.IDocumentManager,r.IEditorLanguageRegistry,d.IRenderMimeRegistry,s.INotebookWidgetFactory,s.INotebookTracker,l.ISettingRegistry,a.IToolbarWidgetRegistry],activate:async(e,t,o,n,r,i,l,c,s,d,m,u,k,w,v,I)=>{console.log("JupyterLab extension jupytext is activating...");const L=(null!=w?w:p.nullTranslator).load("jupytext"),P=T.TEXT_NOTEBOOKS_LAUNCHER_ICONS;if(s){const e=await s.load(h.id);for(const t of T.JUPYTEXT_FORMATS){const o=e.get(t).composite;o&&!P.includes(t)?P.push(t):!o&&P.includes(t)&&P.splice(P.indexOf(t),1)}}const{commands:C,serviceManager:M,docRegistry:A}=e,S=new f.Menu({commands:e.commands});S.id="jp-mainmenu-jupytext-new-menu",S.title.label=L.__("New Text Notebook"),u.fileMenu.addItem({rank:.97,type:"submenu",submenu:S});const O=new f.Menu({commands:e.commands});u.fileMenu.addItem({rank:.98,type:"submenu",submenu:O}),O.id="jp-mainmenu-jupytext-menu",O.title.label=L.__("Jupytext");let F=0;const R=[];T.JUPYTEXT_PAIR_COMMANDS_FILETYPE_DATA.forEach(((e,t)=>{e.map((e=>{const o=t,a=`jupytext:pair-nb-with-${o}`;C.addCommand(a,{label:t=>{var o,a;return t.isPalette?null!==(o=e.paletteLabel)&&void 0!==o?o:L.__("Pair notebook"):null!==(a=e.caption)&&void 0!==a?a:L.__("Pair notebook")},caption:L.__(e.caption),icon:t=>t.isPalette?void 0:e.iconName?b.LabIcon.resolve({icon:e.iconName}):void 0,isToggled:()=>(0,y.isPairCommandToggled)(o,c),isEnabled:()=>(0,y.isPairCommandEnabled)(o,c),execute:()=>(0,y.executePairCommand)(a,o,c,L)}),console.debug("Registering pairing command="+a+" with rank="+F),null==v||v.addItem({command:a,args:{isPalette:!0},rank:F+1,category:"Jupytext"}),O.addItem({command:a}),e.separator&&R.push(F),F+=1}))})),R.map(((e,t)=>{O.insertItem(e+t+1,{type:"separator"})})),C.addCommand(T.CommandIDs.metadata,{label:L.__("Include Metadata"),icon:e=>e.isPalette?void 0:T.JupytextIcon,isToggled:()=>(0,y.isMetadataCommandToggled)(c),isEnabled:()=>(0,y.isMetadataCommandEnabled)(c),execute:()=>(0,y.executeMetadataCommand)(c)}),null==v||v.addItem({command:T.CommandIDs.metadata,args:{isPalette:!0},rank:98,category:"Jupytext"}),O.addItem({type:"separator"}),O.addItem({command:T.CommandIDs.metadata}),O.addItem({type:"separator"}),C.addCommand(T.CommandIDs.faq,{label:L.__("Jupytext FAQ"),icon:e=>e.isPalette?void 0:T.JupytextIcon,execute:()=>{window.open("https://jupytext.readthedocs.io/en/latest/faq.html")}}),null==v||v.addItem({command:T.CommandIDs.faq,args:{isPalette:!0},rank:99,category:"Jupytext"}),O.addItem({command:T.CommandIDs.faq}),C.addCommand(T.CommandIDs.reference,{label:L.__("Jupytext Reference"),icon:e=>e.isPalette?void 0:T.JupytextIcon,execute:()=>{window.open("https://jupytext.readthedocs.io/en/latest/")}}),null==v||v.addItem({command:T.CommandIDs.reference,args:{isPalette:!0},rank:100,category:"Jupytext"}),O.addItem({command:T.CommandIDs.reference}),C.addCommand(T.CommandIDs.newUntitled,{execute:async e=>{const t=e.error||L.__("Error"),o=void 0===e.path?"":e.path,r={type:e.type,path:o};return r.ext=e.ext||".txt",n.services.contents.newUntitled(r).catch((e=>(0,a.showErrorMessage)(t,e)))},label:e=>e.label||`New ${e.type}`});const D=await(0,x.getAvailableKernelLanguages)(r,M),j=await(0,x.getAvailableCreateTextNotebookCommands)(P,D);(0,_.registerFileTypes)(D,A,L);const U=[];for(const e of D.keys())U.push(e);(0,E.createFactory)(U,d,s,A,c,l,t,o,i,w,L,I),j.forEach(((e,t)=>{e.map((e=>{const t=e.fileExt,o=`jupytext:create-new-text-notebook-${t}`,a=e.iconName,n=e.kernelIcon;C.addCommand(o,{label:t=>t.isLauncher?L.__(e.launcherLabel):L.__(e.paletteLabel),caption:L.__(e.caption),icon:e=>e.isPalette?void 0:a?b.LabIcon.resolve({icon:a}):n||b.LabIcon.resolve({icon:"ui-components:kernel"}),execute:e=>{var o;const a=e.cwd||(null!==(o=null==k?void 0:k.model.path)&&void 0!==o?o:""),n=e.kernelId||"",r=e.kernelName||"";return(0,x.createNewTextNotebook)(a,n,r,t,C)}}),console.debug("Registering create new text notebook command="+o+" with rank="+F),null==v||v.addItem({command:o,args:{isPalette:!0},rank:F,category:"Jupytext"}),P.includes(t)&&(S.addItem({command:o,args:{isMainMenu:!0}}),e.separator&&S.addItem({type:"separator"})),m&&P.includes(t)&&M.ready.then((()=>{let t=null;const a=()=>{var a,n,r;t&&(t.dispose(),t=null);const i=M.kernelspecs.specs;if(!i)return;t=new g.DisposableSet;const l=(null===(a=i.kernelspecs[e.kernelName])||void 0===a?void 0:a.resources["logo-svg"])||(null===(n=i.kernelspecs[e.kernelName])||void 0===n?void 0:n.resources["logo-64x64"]);t.add(m.add({command:o,args:{isLauncher:!0,kernelName:e.kernelName},category:L.__("Jupytext"),rank:F++,kernelIconUrl:l,metadata:{kernel:N.JSONExt.deepCopy((null===(r=i.kernelspecs[e.kernelName])||void 0===r?void 0:r.metadata)||{})}}))};a(),M.kernelspecs.specsChanged.connect(a)})),F+=1}))}))}};t.default=h},446:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.registerFileTypes=void 0;const a=o(126);t.registerFileTypes=function(e,t,o){e.forEach(((e,n)=>{"python"!==n&&e.map((e=>{t.addFileType({name:n,contentType:"file",displayName:o.__(e.paletteLabel.split("New")[1].trim()),extensions:[`.${e.fileExt}`],icon:e.kernelIcon||a.kernelIcon})}))})),t.addFileType({name:"myst",contentType:"notebook",displayName:o.__("MyST Markdown Notebook"),extensions:[".myst",".mystnb",".mnb"],icon:a.markdownIcon},["Notebook"]),t.addFileType({name:"r-markdown",contentType:"notebook",displayName:o.__("R Markdown Notebook"),extensions:[".Rmd"],icon:a.markdownIcon},["Notebook"]),t.addFileType({name:"quarto",contentType:"notebook",displayName:o.__("Quarto Notebook"),extensions:[".qmd"],icon:a.markdownIcon},["Notebook"])}},151:function(e,t,o){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TEXT_NOTEBOOKS_LAUNCHER_ICONS=t.JUPYTEXT_FORMATS=t.JUPYTEXT_CREATE_TEXT_NOTEBOOK_FILETYPE_DATA=t.AUTO_LANGUAGE_FILETYPE_DATA=t.JUPYTEXT_PAIR_COMMANDS_FILETYPE_DATA=t.SERVER_SETTINGS=t.JupytextIcon=t.CommandIDs=t.NS=t.FILE_TYPES=t.LANGUAGE_INDEPENDENT_NOTEBOOK_EXTENSIONS=t.FACTORY=t.JUPYTEXT_EXTENSION_ID=void 0;const n=o(824),r=o(126),i=a(o(786));var l;t.JUPYTEXT_EXTENSION_ID="jupyterlab-jupytext:plugin",t.FACTORY="Jupytext Notebook",t.LANGUAGE_INDEPENDENT_NOTEBOOK_EXTENSIONS=["ipynb","md","Rmd","qmd"],t.FILE_TYPES=["markdown","myst","r-markdown","quarto","julia","python","r"],t.NS="jupytext",(l=t.CommandIDs||(t.CommandIDs={})).metadata=`${t.NS}:metadata`,l.reference=`${t.NS}:reference`,l.faq=`${t.NS}:faq`,l.newUntitled=`${t.NS}:new-untitled-text-notebook`,t.JupytextIcon=new r.LabIcon({name:`${t.NS}:icon:logo`,svgstr:i.default}),t.SERVER_SETTINGS=n.ServerConnection.makeSettings(),t.JUPYTEXT_PAIR_COMMANDS_FILETYPE_DATA=new Map([["ipynb",[{fileExt:"ipynb",paletteLabel:"Pair with ipynb",caption:"Pair Notebook with ipynb document",iconName:"ui-components:notebook",separator:!0}]],["auto:light",[{fileExt:"auto:light",paletteLabel:"Pair with light script",caption:"Pair Notebook with Light Format",iconName:"ui-components:text-editor"}]],["auto:percent",[{fileExt:"auto:percent",paletteLabel:"Pair with percent script",caption:"Pair Notebook with Percent Format",iconName:"ui-components:text-editor"}]],["auto:hydrogen",[{fileExt:"auto:hydrogen",paletteLabel:"Pair with hydrogen script",caption:"Pair Notebook with Hydrogen Format",iconName:"ui-components:text-editor"}]],["auto:nomarker",[{fileExt:"auto:nomarker",paletteLabel:"Pair with nomarker script",caption:"Pair Notebook with Nomarker Format",iconName:"ui-components:text-editor",separator:!0}]],["md",[{fileExt:"md",paletteLabel:"Pair with md",caption:"Pair Notebook with Markdown",iconName:"ui-components:markdown"}]],["md:myst",[{fileExt:"md:myst",paletteLabel:"Pair with myst md",caption:"Pair Notebook with MyST Markdown",iconName:"ui-components:markdown",separator:!0}]],["Rmd",[{fileExt:"Rmd",paletteLabel:"Pair with Rmd",caption:"Pair Notebook with R Markdown",iconName:"ui-components:markdown"}]],["qmd",[{fileExt:"qmd",paletteLabel:"Pair with qmd",caption:"Pair Notebook with Quarto (qmd)",iconName:"ui-components:markdown",separator:!0}]],["custom",[{fileExt:"custom",paletteLabel:"Custom pair",caption:"Custom Pairing",iconName:"ui-components:text-editor"}]],["none",[{fileExt:"none",paletteLabel:"Unpair",caption:"Unpair Current Notebook"}]]]),t.AUTO_LANGUAGE_FILETYPE_DATA=new Map([["python",[{fileExt:"py",paletteLabel:"New Python Text Notebook",caption:"Create a new Python Text Notebook",iconName:"ui-components:python",launcherLabel:"Python",kernelName:"python3"}]],["julia",[{fileExt:"jl",paletteLabel:"New Julia Text Notebook",caption:"Create a new Julia Text Notebook",iconName:"ui-components:julia",launcherLabel:"Julia",kernelName:"julia"}]],["R",[{fileExt:"R",paletteLabel:"New R Text Notebook",caption:"Create a new R Text Notebook",iconName:"ui-components:r-kernel",launcherLabel:"R",kernelName:"ir"}]]]),t.JUPYTEXT_CREATE_TEXT_NOTEBOOK_FILETYPE_DATA=new Map([["auto:light",[{fileExt:"auto:light",paletteLabel:"Light Format",caption:"Light Format",launcherLabel:"Light Format"}]],["auto:percent",[{fileExt:"auto:percent",paletteLabel:"Percent Format",caption:"Percent Format",launcherLabel:"Percent Format"}]],["auto:hydrogen",[{fileExt:"auto:hydrogen",paletteLabel:"Hydrogen Format",caption:"Hydrogen Format",launcherLabel:"Hydrogen Format"}]],["auto:nomarker",[{fileExt:"auto:nomarker",paletteLabel:"Nomarker Format",caption:"Nomarker Format",launcherLabel:"Nomarker Format"}]],["md",[{fileExt:"md",paletteLabel:"New Markdown Text Notebook",caption:"Create a new Markdown Text Notebook",iconName:"ui-components:markdown",launcherLabel:"Markdown"}]],["md:myst",[{fileExt:"md:myst",paletteLabel:"New MyST Markdown Text Notebook",caption:"Create a new MyST Markdown Text Notebook",iconName:"ui-components:markdown",launcherLabel:"MyST Markdown"}]],["Rmd",[{fileExt:"Rmd",paletteLabel:"New R Markdown Text Notebook",caption:"Create a new R Markdown Text Notebook",iconName:"ui-components:markdown",launcherLabel:"R Markdown"}]],["qmd",[{fileExt:"qmd",paletteLabel:"New Quarto Markdown Text Notebook",caption:"Create a new Quarto Markdown Text Notebook",iconName:"ui-components:markdown",launcherLabel:"Quarto Markdown"}]]]),t.JUPYTEXT_FORMATS=Array.from(t.JUPYTEXT_PAIR_COMMANDS_FILETYPE_DATA.keys()).map((e=>e)).filter((e=>!["custom","none"].includes(e))),t.TEXT_NOTEBOOKS_LAUNCHER_ICONS=t.JUPYTEXT_FORMATS.filter((e=>!["ipynb","auto:hydrogen","auto:nomarker","qmd","custom","none"].includes(e)))},976:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createNewTextNotebook=t.getAvailableCreateTextNotebookCommands=t.getAvailableKernelLanguages=void 0;const a=o(824),n=o(126),r=o(655),i=o(865),l=o(151);async function c(e){e=`/kernelspecs${e.split("kernelspecs")[1]}`;const t=r.URLExt.join(l.SERVER_SETTINGS.baseUrl,e),o=await a.ServerConnection.makeRequest(t,{},l.SERVER_SETTINGS),n=await o.arrayBuffer();return`data:${o.headers.get("content-type")};base64,${i.Buffer.from(n).toString("base64")}`}function s(e,t){return`<svg xmlns="http://www.w3.org/2000/svg"\n  xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" viewBox="0 0 ${e} ${e}">\n  <g id="layer1">\n     <image xlink:href="${t}"/>\n  </g>\n</svg>`.replace(/\n/g," ")}async function d(e){if(e.resources["logo-svg"]){const t=await c(e.resources["logo-svg"]);return new n.LabIcon({name:`${l.NS}:icon:${e.name}`,svgstr:t})}if(e.resources["logo-64x64"]){const t=await c(e.resources["logo-64x64"]);return new n.LabIcon({name:`${l.NS}:icon:${e.name}`,svgstr:s(64,t)})}if(e.resources["logo-32x32"]){const t=await c(e.resources["logo-32x32"]);return new n.LabIcon({name:`${l.NS}:icon:${e.name}`,svgstr:s(32,t)})}return n.LabIcon.resolve({icon:"ui-components:kernel"})}t.getAvailableKernelLanguages=async function(e,t){var o,a;const n=t.kernelspecs;await n.ready;const r=new Map,i=null!==(a=null===(o=n.specs)||void 0===o?void 0:o.kernelspecs)&&void 0!==a?a:{};for(const[t,o]of Object.entries(i))if(o){const a=l.AUTO_LANGUAGE_FILETYPE_DATA.get(o.language);if(void 0!==a)r.set(o.language,a);else{const a=e.findByName(o.language);if(a){const e=await d(o),n=a.displayName||o.display_name,i=[{fileExt:a.extensions[0],paletteLabel:`New ${n} Text Notebook`,caption:`Create a new ${n} Text Notebook`,kernelIcon:e,launcherLabel:n,kernelName:t}];r.set(o.language,i)}}}return r},t.getAvailableCreateTextNotebookCommands=async function(e,t){const o=t.size,a=new Map;return l.JUPYTEXT_CREATE_TEXT_NOTEBOOK_FILETYPE_DATA.forEach(((n,r)=>{n.map((n=>{if(r.startsWith("auto")){const i=r.split(":")[1];let l=0;t.forEach(((t,c)=>{const s=`${c}:${i}`;a.set(s,[]),l+=1,t.map((t=>{const c={...t};c.fileExt=`${c.fileExt}:${i}`,c.paletteLabel=`${c.paletteLabel} with ${n.paletteLabel}`,c.caption=`${c.caption} with ${n.caption}`,c.launcherLabel=`${c.launcherLabel} - ${n.launcherLabel}`,o===l&&(c.separator=!0),a.get(s).push(c),e.includes(r)&&e.push(c.fileExt)}))}))}else void 0===a.get(r)&&a.set(r,[]),a.get(r).push(n)}))})),a},t.createNewTextNotebook=async(e,t,o,a,n)=>{const r=await n.execute(l.CommandIDs.newUntitled,{path:e,type:"notebook",ext:a.replace("auto","py")});if(void 0!==r){const e=await n.execute("docmanager:open",{path:r.path,factory:l.FACTORY,kernel:{id:t,name:o}});return e.isUntitled=!0,e}}},786:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 91">\n  <g fill="none" fill-rule="nonzero">\n    <path fill="#FACDAF" d="M.4 21.6v-3.2h15.64v3.2z"/>\n    <path fill="#FA6400" d="M38.64 5.16c-.827 0-1.453-.213-1.88-.64-.427-.427-.64-1.053-.64-1.88 0-.8.22-1.413.66-1.84.44-.427 1.06-.64 1.86-.64s1.413.213 1.84.64c.427.427.64 1.04.64 1.84 0 .827-.213 1.453-.64 1.88-.427.427-1.04.64-1.84.64zm2.04 4.04L40.64 32c0 1.707-.373 3.2-1.12 4.48-.747 1.28-1.72 2.253-2.92 2.92-1.2.667-2.493 1-3.88 1-1.573 0-3.053-.44-4.44-1.32-1.387-.88-2.493-2.213-3.32-4L28 33.72c.48 1.093 1.147 1.92 2 2.48s1.773.84 2.76.84c1.253 0 2.313-.44 3.18-1.32.867-.88 1.3-2.12 1.3-3.72V12l-4.68-.28V9.2h8.12zM66.48 32v-3.28c-.613 1.173-1.547 2.113-2.8 2.82a8.093 8.093 0 01-4.04 1.06c-1.6 0-3.04-.507-4.32-1.52-1.28-1.013-2.28-2.373-3-4.08-.72-1.707-1.08-3.56-1.08-5.56V9.16h3.64v13.12c0 1.28.273 2.48.82 3.6.547 1.12 1.3 2.02 2.26 2.7.96.68 2.053 1.02 3.28 1.02 1.147 0 2.067-.32 2.76-.96.693-.64 1.52-1.747 2.48-3.32V9.2h3.4v20.16c0 1.227.08 2.107.24 2.64h-3.64zM87.64 8.56c3.2 0 5.687 1 7.46 3 1.773 2 2.66 4.8 2.66 8.4 0 2.507-.433 4.713-1.3 6.62s-2.1 3.38-3.7 4.42-3.44 1.56-5.52 1.56c-2.56 0-4.707-.76-6.44-2.28V40l-3.4.24V9.2h4.28c-.213.293-.413.713-.6 1.26A4.777 4.777 0 0080.8 12v.08c.853-1.227 1.827-2.12 2.92-2.68s2.4-.84 3.92-.84zm-.4 20.76c1.36 0 2.58-.4 3.66-1.2 1.08-.8 1.927-1.907 2.54-3.32.613-1.413.92-3.027.92-4.84 0-2.533-.613-4.567-1.84-6.1-1.227-1.533-2.853-2.3-4.88-2.3-1.44 0-2.753.393-3.94 1.18-1.187.787-2.153 1.9-2.9 3.34v9.72c.507 1.227 1.28 2.12 2.32 2.68 1.04.56 2.413.84 4.12.84zM119.6 9.2h3.8l-.136.533c-.655 2.483-1.876 6.146-3.664 10.987-1.92 5.2-3.853 10.04-5.8 14.52-1.28 3.52-3.493 5.28-6.64 5.28-.64 0-1.24-.053-1.8-.16l.56-2.64c.213.053.52.08.92.08 1.813 0 3.16-1.187 4.04-3.56l1.4-3.44h-.04l-.263-.686c-.538-1.384-1.317-3.263-2.337-5.636l-1.22-2.829c-1.266-2.964-2.24-5.348-2.92-7.149-.76-2.013-1.26-3.78-1.5-5.3h3.36c.22 1.418.67 3.037 1.349 4.858l.191.502c.787 2.027 1.94 4.813 3.46 8.36l1.56 3.6a282.728 282.728 0 003.66-10.18l.305-.917c.88-2.685 1.451-4.759 1.715-6.223z"/>\n    <path fill="#BDDD9B" d="M16.04 79.24H9.72v6.24h-3.2v-6.24H.32v-3.2h6.2V69.8h3.2v6.24h6.32z"/>\n    <path fill="#6DD400" d="M44.76 85.28c-.827 1.787-1.933 3.12-3.32 4-1.387.88-2.867 1.32-4.44 1.32a7.861 7.861 0 01-3.88-1c-1.2-.667-2.173-1.64-2.92-2.92-.747-1.28-1.12-2.773-1.12-4.48V70.28H25.4V67.2h3.68v-8.64l3.4.24v8.4h9.72v3.08h-9.72V82.2c0 1.6.433 2.84 1.3 3.72.867.88 1.927 1.32 3.18 1.32.987 0 1.907-.28 2.76-.84.853-.56 1.52-1.387 2-2.48l3.04 1.36zm16.4-18.72c3.227 0 5.66 1.013 7.3 3.04 1.64 2.027 2.393 4.893 2.26 8.6l-.08 1.96-16.24.08c0 1.413.287 2.673.86 3.78.573 1.107 1.38 1.967 2.42 2.58s2.227.92 3.56.92c1.093 0 2.193-.247 3.3-.74 1.107-.493 2.26-1.327 3.46-2.5l2.04 2.48a11.684 11.684 0 01-3.94 2.84c-1.507.667-3.087 1-4.74 1-2 0-3.787-.44-5.36-1.32a9.391 9.391 0 01-3.68-3.68c-.88-1.573-1.32-3.36-1.32-5.36V78.2c.107-3.733 1.02-6.607 2.74-8.62 1.72-2.013 4.193-3.02 7.42-3.02zm5.92 10.6c.133-2.453-.333-4.333-1.4-5.64-1.067-1.307-2.693-1.96-4.88-1.96-2.107 0-3.667.653-4.68 1.96s-1.573 3.187-1.68 5.64h12.64zM93.04 90l-5.6-8.8L81.8 90h-3.64l7.52-11.6-7.12-11.2h3.6l5.32 8.36 5.4-8.36h3.6l-7.2 11.2 7.4 11.6h-3.64zm30.92-4.72c-.827 1.787-1.933 3.12-3.32 4-1.387.88-2.867 1.32-4.44 1.32a7.861 7.861 0 01-3.88-1c-1.2-.667-2.173-1.64-2.92-2.92-.747-1.28-1.12-2.773-1.12-4.48V70.28h-3.68V67.2h3.68v-8.64l3.4.24v8.4h9.72v3.08h-9.72V82.2c0 1.6.433 2.84 1.3 3.72.867.88 1.927 1.32 3.18 1.32.987 0 1.907-.28 2.76-.84.853-.56 1.52-1.387 2-2.48l3.04 1.36z"/>\n  </g>\n</svg>\n'}}]);