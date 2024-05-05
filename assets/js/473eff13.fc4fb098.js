"use strict";(self.webpackChunkdiscord4j_documentation=self.webpackChunkdiscord4j_documentation||[]).push([[764],{4706:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var s=r(4848),o=r(8453);const t={id:"using-the-bom",title:"Using the BOM",sidebar_label:"Using the BOM",slug:"/using-the-bom"},i=void 0,d={id:"How-to Guides/using-the-bom",title:"Using the BOM",description:"Discord4J v3 uses a BOM or Bill of Materials as a way to coordinate dependencies that work well together, therefore providing faster and safer ways to migrate across versions.",source:"@site/docs/04-How-to Guides/using-the-BOM.mdx",sourceDirName:"04-How-to Guides",slug:"/using-the-bom",permalink:"/using-the-bom",draft:!1,unlisted:!1,editUrl:"https://github.com/Discord4J/documentation/edit/master/docs/04-How-to Guides/using-the-BOM.mdx",tags:[],version:"current",lastUpdatedAt:1631899753e3,frontMatter:{id:"using-the-bom",title:"Using the BOM",sidebar_label:"Using the BOM",slug:"/using-the-bom"},sidebar:"mySidebar",previous:{title:"Using Snapshots",permalink:"/using-snapshots"},next:{title:"Examples",permalink:"/examples"}},a={},l=[{value:"Usage",id:"usage",level:2},{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"Development builds",id:"development-builds",level:2},{value:"Maven",id:"maven-1",level:3},{value:"Gradle",id:"gradle-1",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Discord4J v3 uses a BOM or Bill of Materials as a way to coordinate dependencies that work well together, therefore providing faster and safer ways to migrate across versions."}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["To check available versions make sure you go to the ",(0,s.jsx)(n.a,{href:"https://github.com/Discord4J/BOM",children:"BOM"})," repo and then replace ",(0,s.jsx)(n.code,{children:"3.0.x"})," below with the adequate version."]}),"\n",(0,s.jsx)(n.h3,{id:"maven",children:"Maven"}),"\n",(0,s.jsxs)(n.p,{children:["Maven supports BOM through the ",(0,s.jsx)(n.code,{children:"dependencyManagement"})," entry. You should first add this snippet to your ",(0,s.jsx)(n.strong,{children:"pom.xml"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<dependencyManagement>\r\n    <dependencies>\r\n        <dependency>\r\n            <groupId>com.discord4j</groupId>\r\n            <artifactId>bom</artifactId>\r\n            <version>3.x.x</version>\r\n            <type>pom</type>\r\n            <scope>import</scope>\r\n        </dependency>\r\n    </dependencies>\r\n</dependencyManagement>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then you are able to add dependencies just like normal ones, but without specifying the ",(0,s.jsx)(n.code,{children:"<version>"})," attribute."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<dependencies>\r\n    <dependency>\r\n        <groupId>com.discord4j</groupId>\r\n        <artifactId>discord4j-core</artifactId>\r\n    </dependency>\r\n    <dependency>\r\n        <groupId>com.discord4j</groupId>\r\n        <artifactId>stores-caffeine</artifactId>\r\n    </dependency>\r\n</dependencies>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"gradle",children:"Gradle"}),"\n",(0,s.jsxs)(n.p,{children:["Add the following to your ",(0,s.jsx)(n.strong,{children:"build.gradle"})," file to import the BOM, making sure replacing the version with the one you wish to use:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-groovy",children:'dependencies {\r\n    implementation platform("com.discord4j:bom:3.x.x")\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Finally, add the dependency as normal, without needing to specify the version:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-groovy",children:'dependencies {\r\n    compile "com.discord4j:discord4j-core"\r\n    compile "com.discord4j:stores-caffeine"\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"development-builds",children:"Development builds"}),"\n",(0,s.jsx)(n.p,{children:"You can also use SNAPSHOT and development builds from Jitpack with this BOM. You just have to also make sure you include the proper repository to pull the right dependencies:"}),"\n",(0,s.jsx)(n.h3,{id:"maven-1",children:"Maven"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<repositories>\r\n    <repository>\r\n        <id>snapshots</id>\r\n        <url>https://oss.sonatype.org/content/repositories/snapshots</url>\r\n        <snapshots><enabled>true</enabled></snapshots>\r\n    </repository>\r\n    <repository>\r\n        <id>jitpack.io</id>\r\n        <url>https://jitpack.io</url>\r\n    </repository>\r\n</repositories>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"gradle-1",children:"Gradle"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-groovy",children:"repositories {\r\n    // This repository is for SNAPSHOTs\r\n    maven { url 'https://oss.sonatype.org/content/repositories/snapshots' }\r\n    // This repository is for pulling dependencies from Jitpack\r\n    maven { url 'https://jitpack.io' }\r\n    // This repository is for releases\r\n    mavenCentral()\r\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var s=r(6540);const o={},t=s.createContext(o);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);