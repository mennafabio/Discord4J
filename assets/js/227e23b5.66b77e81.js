"use strict";(self.webpackChunkdiscord4j_documentation=self.webpackChunkdiscord4j_documentation||[]).push([[753],{9429:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=n(4848),o=n(8453);const i={id:"using-snapshots",title:"Using Snapshots",sidebar_label:"Using Snapshots",slug:"/using-snapshots"},r=void 0,a={id:"How-to Guides/using-snapshots",title:"Using Snapshots",description:"Discord4J is under continuous development on its main master branch. Regular releases establish a point of stability within the project, but as new features are implemented you might want to try the latest changes, or some important bug fixes that can help, even before a stable release. Therefore, we publish SNAPSHOT versions on each commit, giving you the option of choosing a stable version, or the latest one in a given branch.",source:"@site/docs/04-How-to Guides/using-latest-snapshots.mdx",sourceDirName:"04-How-to Guides",slug:"/using-snapshots",permalink:"/using-snapshots",draft:!1,unlisted:!1,editUrl:"https://github.com/Discord4J/documentation/edit/master/docs/04-How-to Guides/using-latest-snapshots.mdx",tags:[],version:"current",lastUpdatedAt:1681105518e3,frontMatter:{id:"using-snapshots",title:"Using Snapshots",sidebar_label:"Using Snapshots",slug:"/using-snapshots"},sidebar:"mySidebar",previous:{title:"Threading",permalink:"/threading"},next:{title:"Using the BOM",permalink:"/using-the-bom"}},d={},l=[{value:"Using the latest snapshots in Gradle",id:"using-the-latest-snapshots-in-gradle",level:3},{value:"Using the latest snapshots in Gradle (Kotlin DSL)",id:"using-the-latest-snapshots-in-gradle-kotlin-dsl",level:3},{value:"Using the latest snapshots in Maven",id:"using-the-latest-snapshots-in-maven",level:3}];function h(e){const s={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Discord4J is under continuous development on its main ",(0,t.jsx)(s.code,{children:"master"})," branch. Regular releases establish a point of stability within the project, but as new features are implemented you might want to try the latest changes, or some important bug fixes that can help, even before a stable release. Therefore, we publish SNAPSHOT versions on each commit, giving you the option of choosing a stable version, or the latest one in a given branch."]}),"\n",(0,t.jsxs)(s.p,{children:["To work with SNAPSHOTs, you only need to add the required repository and then set the version to use. The ",(0,t.jsx)(s.code,{children:"VERSION"})," depends on the next version to be released, adding ",(0,t.jsx)(s.code,{children:"-SNAPSHOT"})," as suffix. For example, for the latest development towards ",(0,t.jsx)(s.code,{children:"3.2.5"})," version, you'll use ",(0,t.jsx)(s.code,{children:"3.2.5-SNAPSHOT"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"using-the-latest-snapshots-in-gradle",children:"Using the latest snapshots in Gradle"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-groovy",children:"repositories {\r\n  maven { url 'https://oss.sonatype.org/content/repositories/snapshots' }\r\n  mavenCentral()\r\n}\r\n\r\ndependencies {\r\n  implementation 'com.discord4j:discord4j-core:VERSION'\r\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"using-the-latest-snapshots-in-gradle-kotlin-dsl",children:"Using the latest snapshots in Gradle (Kotlin DSL)"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-kotlin",children:'repositories {\r\n  maven(url = "https://oss.sonatype.org/content/repositories/snapshots")\r\n  mavenCentral()\r\n}\r\n\r\ndependencies {\r\n  implementation("com.discord4j:discord4j-core:VERSION")\r\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"using-the-latest-snapshots-in-maven",children:"Using the latest snapshots in Maven"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:"<repositories>\r\n    <repository>\r\n        <id>oss.sonatype.org-snapshot</id>\r\n        <url>https://oss.sonatype.org/content/repositories/snapshots</url>\r\n        <snapshots>\r\n            <enabled>true</enabled>\r\n        </snapshots>\r\n    </repository>\r\n</repositories>\r\n\r\n<dependencies>\r\n    <dependency>\r\n        <groupId>com.discord4j</groupId>\r\n        <artifactId>discord4j-core</artifactId>\r\n        <version>VERSION</version>\r\n    </dependency>\r\n</dependencies>\n"})})]})}function c(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>a});var t=n(6540);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);