"use strict";(self.webpackChunkchime_tts_wiki=self.webpackChunkchime_tts_wiki||[]).push([[2711],{9331:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});s(6540);var r=s(8774),a=s(1312),i=s(1003),c=s(781),n=s(1107),l=s(4848);function h(e){let{year:t,posts:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.A,{as:"h3",id:t,children:t}),(0,l.jsx)("ul",{children:s.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(r.A,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:t}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(h,{...e})},t)))})})})}function o(e){let{archive:t}=e;const s=(0,a.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,a.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const t=e.reduce(((e,t)=>{const s=t.metadata.date.split("-")[0],r=e.get(s)??[];return e.set(s,[t,...r])}),new Map);return Array.from(t,(e=>{let[t,s]=e;return{year:t,posts:s}}))}(t.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.be,{title:s,description:r}),(0,l.jsxs)(c.A,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(n.A,{as:"h1",className:"hero__title",children:s}),(0,l.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,l.jsx)("main",{children:h.length>0&&(0,l.jsx)(d,{years:h})})]})]})}}}]);