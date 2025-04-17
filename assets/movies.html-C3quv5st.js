import{_ as T}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as y,b,d as k,o as n,c as a,e as o,f as l,F as w,g as x,n as E,t as h,h as L,i as C}from"./app-DfbzlcnA.js";const N="https://db.211777.xyz/api",z={__name:"NeoDB",setup(f,{expose:s}){s();const d=["book","movie","tv","music","game"],e=y({type:"movie",status:"complete",finished:!1,paged:1,subjects:[],isLoading:!1}),m=async()=>{if(e.isLoading||e.finished)return;e.isLoading=!0;const r=new URLSearchParams({type:e.status,category:e.type,page:e.paged.toString()}),c=`${N}?${r.toString()}`;console.log("Fetching data from:",c);try{const i=await fetch(c);if(console.log("Response status:",i.status),!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const p=await i.json();if(console.log("Data received:",p),p.length){const D=p.filter(S=>!e.subjects.some(B=>B.item.id===S.item.id));e.subjects=[...e.subjects,...D]}else e.finished=!0}catch(i){console.error("Error fetching data:",i)}finally{e.isLoading=!1}},g=r=>{e.type!==r&&(e.type=r,e.paged=1,e.finished=!1,e.subjects=[],m())},t=r=>{console.error("Image failed to load:",r.item.cover_image_url),r.imageError=!0},_=(r,c)=>{let i;return(...p)=>{clearTimeout(i),i=setTimeout(()=>r(...p),c)}},u=_(()=>{const r=window.scrollY||window.pageYOffset,c=document.querySelector(".block-more");c&&c.offsetTop+c.clientHeight<=r+window.innerHeight&&!e.finished&&!e.isLoading&&(e.paged++,m())},200);b(()=>{m(),window.addEventListener("scroll",u)}),k(()=>{window.removeEventListener("scroll",u)});const v={types:d,baseAPI:N,state:e,fetchData:m,handleTypeClick:g,handleImageError:t,debounce:_,handleScroll:u,reactive:y,onMounted:b,onUnmounted:k};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}},P={class:"neodb-container"},I={class:"neodb-nav"},j=["onClick"],O={key:0,class:"neodb-loading"},V={key:1,class:"neodb-no-data"},q={class:"neodb-list"},F=["src","onError"],H={key:2,class:"neodb-score"},R={class:"neodb-title"},Y=["href"],$={key:2,class:"block-more block-more__centered"};function M(f,s,d,e,m,g){return n(),a("div",P,[o(" 导航栏 "),l("nav",I,[(n(),a(w,null,x(e.types,t=>l("span",{key:t,class:E(["neodb-navItem",{current:e.state.type===t}]),onClick:_=>e.handleTypeClick(t)},h(t),11,j)),64))]),o(" 全局调试信息 "),e.state.isLoading&&e.state.subjects.length===0?(n(),a("div",O," NeoDB 数据加载中，请稍候... ")):o("v-if",!0),o(" 无数据提示 "),!e.state.isLoading&&e.state.subjects.length===0?(n(),a("div",V," 抱歉，暂无数据！ ")):o("v-if",!0),o(" 数据列表 "),l("div",q,[(n(!0),a(w,null,x(e.state.subjects,t=>(n(),a("div",{key:t.item.id,class:"neodb-item"},[o(" 封面图片加载失败时显示提示 "),t.imageError?(n(),a("div",{key:0,class:E(["neodb-image-error",{"image-error-border":t.imageError}])},s[0]||(s[0]=[l("i",{class:"fa-solid fa-face-sad-cry"},null,-1),L("，需和谐上网！ ")]),2)):(n(),a("img",{key:1,src:t.item.cover_image_url,class:"neodb-image",onError:_=>e.handleImageError(t),loading:"lazy"},null,40,F)),o(" 评分 "),t.item.rating?(n(),a("div",H,[s[1]||(s[1]=l("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor"},[l("path",{d:"M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"})],-1)),L(" "+h(t.item.rating),1)])):o("v-if",!0),o(" 标题 "),l("div",R,[l("a",{href:t.item.id,target:"_blank"},h(t.item.title),9,Y)])]))),128))]),o(" 加载更多 "),!e.state.finished&&e.state.subjects.length>0?(n(),a("div",$,s[2]||(s[2]=[l("div",{class:"lds-ripple"},null,-1)]))):o("v-if",!0)])}const U=T(z,[["render",M],["__scopeId","data-v-329708c2"],["__file","NeoDB.vue"]]),W={__name:"movies.html",setup(f,{expose:s}){s();const d={get NeoDB(){return U}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function Z(f,s,d,e,m,g){return n(),a("div",null,[C(e.NeoDB)])}const G=T(W,[["render",Z],["__file","movies.html.vue"]]),K=JSON.parse('{"path":"/movies.html","title":"观影","lang":"zh-CN","frontmatter":{"title":"观影","icon":"fas fa-film","article":false,"index":false,"sidebar":false,"comment":false,"Word":false,"head":[["meta",{"property":"og:url","content":"https:////211777.xyz/movies.html"}],["meta",{"property":"og:site_name","content":"诗往哥的博客"}],["meta",{"property":"og:title","content":"观影"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-02T11:14:08.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-02T11:14:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"观影\\"}"]]},"headers":[],"git":{"createdTime":1735816448000,"updatedTime":1735816448000,"contributors":[{"name":"lss53","username":"lss53","email":"2720626504@qq.com","commits":1,"url":"https://github.com/lss53"}]},"readingTime":{"minutes":0.09,"words":26},"filePathRelative":"movies.md","localizedDate":"2025年1月2日","excerpt":""}');export{G as comp,K as data};
