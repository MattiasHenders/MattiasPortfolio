/*! For license information please see 952.bundle.js.LICENSE.txt */
(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[952,683],{114:function(e,t,r){"use strict";r(7294);var s,o=r(6025),a=r(5005),n=r(7516),i=r(5893);e=r.hmd(e),(s="undefined"!==typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e);"undefined"!==typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function c(e){return(0,i.jsxs)(o.Z,{className:"project-card-view",children:[(0,i.jsx)(o.Z.Img,{className:"projectImg",variant:"top",src:e.imgPath,alt:"card-img"}),(0,i.jsxs)(o.Z.Body,{children:[(0,i.jsx)(o.Z.Title,{children:e.title}),(0,i.jsx)(o.Z.Text,{style:{textAlign:"center"},children:e.description}),(0,i.jsxs)(a.Z,{variant:"primary",href:e.link,target:"_blank",children:[(0,i.jsx)(n.rpH,{})," \xa0","View Project"]})]})]})}var l,d,p=c;t.Z=p,(l="undefined"!==typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(c,"ProjectCards","C:\\Users\\hende\\Documents\\Personal Projects\\MattiasPortfolio\\src\\components\\Projects\\ProjectCards.js"),l.register(p,"default","C:\\Users\\hende\\Documents\\Personal Projects\\MattiasPortfolio\\src\\components\\Projects\\ProjectCards.js")),(d="undefined"!==typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)},7952:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});r(7294);var s,o=r(682),a=r(4051),n=r(1555),i=r(114),c=r.p+"assets/plentyOfPhish.webp?00ecb0d90c875440da99763e325467ec",l=r.p+"assets/springOut.webp?6a75d6a3ab6b82d3807ac203b55e8030",d=r.p+"assets/voip.webp?d2dfa30620cabb92ec6b37e33c7ceb63",p=r(5893);e=r.hmd(e),(s="undefined"!==typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e);"undefined"!==typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function u(){return(0,p.jsx)(o.Z,{fluid:!0,id:"project",className:"project-section",children:(0,p.jsxs)(o.Z,{children:[(0,p.jsxs)("h1",{className:"project-heading",children:["My Recent ",(0,p.jsx)("strong",{className:"red",children:"Projects "})]}),(0,p.jsx)("p",{style:{color:"white"},children:"Here are a few projects I've worked on recently."}),(0,p.jsxs)(a.Z,{style:{justifyContent:"center",paddingBottom:"10px"},children:[(0,p.jsx)(n.Z,{md:4,className:"project-card",children:(0,p.jsx)(i.Z,{imgPath:c,title:"PlentyOfPhish",description:"PlentyOfPhish\u201d is a web app designed to help its users recognize and avoid phishing\r attempts from suspicious emails, phone numbers, and websites. Users register an account with the app and\r login to input either an email, phone number, or website. Users can also report emails, phone numbers, and \r websites that they believe are suspicious.",link:"https://plenty-of-phish.vercel.app/"})}),(0,p.jsx)(n.Z,{md:4,className:"project-card",children:(0,p.jsx)(i.Z,{imgPath:l,title:"Spring Out",description:"Spring Out provides a discrete solution for employees suffering from new \r (and old) domestic abuse situations across Canada as a result of being isolated/quarantined, \r WFH to find resources and connect discreetly. Winner of the 2020 Together Vs. Hackathon. Received \r the BCIT Excellence in Data Analytics Award.",link:"https://devpost.com/software/springout"})}),(0,p.jsx)(n.Z,{md:4,className:"project-card",children:(0,p.jsx)(i.Z,{imgPath:d,title:"Panda VoIP",description:"A voice over IP server created for the Panda app in production in British Columbia.\r USing Linux, Docker, Asterisk, and a custom firewall to prevent attacks. Demonstrates a deep knowledge of\r UDP protocol and packet handling.",link:"https://www.piccolosoft.com/"})})]})]})})}var f,h,m=u,j=m;(f="undefined"!==typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(u,"Projects","C:\\Users\\hende\\Documents\\Personal Projects\\MattiasPortfolio\\src\\components\\Projects\\Projects.js"),f.register(m,"default","C:\\Users\\hende\\Documents\\Personal Projects\\MattiasPortfolio\\src\\components\\Projects\\Projects.js")),(h="undefined"!==typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)},4184:function(e,t){var r;!function(){"use strict";var s={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var n=o.apply(null,r);n&&e.push(n)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var i in r)s.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},1555:function(e,t,r){"use strict";var s=r(4184),o=r.n(s),a=r(7294),n=r(6792),i=r(5893);const c=a.forwardRef(((e,t)=>{const[{className:r,...s},{as:a="div",bsPrefix:c,spans:l}]=function({as:e,bsPrefix:t,className:r,...s}){t=(0,n.vE)(t,"col");const a=(0,n.pi)(),i=[],c=[];return a.forEach((e=>{const r=s[e];let o,a,n;delete s[e],"object"===typeof r&&null!=r?({span:o,offset:a,order:n}=r):o=r;const l="xs"!==e?`-${e}`:"";o&&i.push(!0===o?`${t}${l}`:`${t}${l}-${o}`),null!=n&&c.push(`order${l}-${n}`),null!=a&&c.push(`offset${l}-${a}`)})),[{...s,className:o()(r,...i,...c)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,i.jsx)(a,{...s,ref:t,className:o()(r,!l.length&&c)})}));c.displayName="Col",t.Z=c},682:function(e,t,r){"use strict";var s=r(4184),o=r.n(s),a=r(7294),n=r(6792),i=r(5893);const c=a.forwardRef((({bsPrefix:e,fluid:t,as:r="div",className:s,...a},c)=>{const l=(0,n.vE)(e,"container"),d="string"===typeof t?`-${t}`:"-fluid";return(0,i.jsx)(r,{ref:c,...a,className:o()(s,t?`${l}${d}`:l)})}));c.displayName="Container",c.defaultProps={fluid:!1},t.Z=c},4051:function(e,t,r){"use strict";var s=r(4184),o=r.n(s),a=r(7294),n=r(6792),i=r(5893);const c=a.forwardRef((({bsPrefix:e,className:t,as:r="div",...s},a)=>{const c=(0,n.vE)(e,"row"),l=(0,n.pi)(),d=`${c}-cols`,p=[];return l.forEach((e=>{const t=s[e];let r;delete s[e],null!=t&&"object"===typeof t?({cols:r}=t):r=t;const o="xs"!==e?`-${e}`:"";null!=r&&p.push(`${d}${o}-${r}`)})),(0,i.jsx)(r,{ref:a,...s,className:o()(t,c,...p)})}));c.displayName="Row",t.Z=c},6792:function(e,t,r){"use strict";r.d(t,{pi:function(){return l},vE:function(){return c}});var s=r(7294);r(5893);const o=["xxl","xl","lg","md","sm","xs"],a=s.createContext({prefixes:{},breakpoints:o}),{Consumer:n,Provider:i}=a;function c(e,t){const{prefixes:r}=(0,s.useContext)(a);return e||r[t]||t}function l(){const{breakpoints:e}=(0,s.useContext)(a);return e}}}]);