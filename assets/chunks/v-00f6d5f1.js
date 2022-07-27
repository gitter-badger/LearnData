"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8065],{6722:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-00f6d5f1","path":"/web/Comments.html","title":"评论插件","lang":"zh-CN","frontmatter":{"article":false,"title":"评论插件","order":3,"summary":"评论插件 giscus：基于 github discussion，近似于论坛。查看 配置方法。; Gitalk：基于 github commit，需配置独立库用于存储评论。; Valine：可匿名评论，因此不适合国内使用。; Gitter：boardgame，regauge; Gitalk Gitalk 是轻量化的评论组件，用户必须登录 github 才能评","head":[["meta",{"property":"og:url","content":"https://newzone.top/web/Comments.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"评论插件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-27T07:13:28.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-27T07:13:28.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"评论插件","slug":"评论插件","children":[]},{"level":2,"title":"Gitalk","slug":"gitalk","children":[]}],"git":{"createdTime":1658906008000,"updatedTime":1658906008000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":1}]},"readingTime":{"minutes":1.21,"words":364},"filePathRelative":"web/Comments.md","localizedDate":"2022年7月27日"}')},2174:(e,t,i)=>{i.r(t),i.d(t,{default:()=>W});var n=i(8e3);const r=(0,n._)("h2",{id:"评论插件",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#评论插件","aria-hidden":"true"},"#"),(0,n.Uk)(" 评论插件")],-1),l={href:"https://github.com/giscus/giscus",target:"_blank",rel:"noopener noreferrer"},a=(0,n.Uk)("giscus"),s=(0,n.Uk)("：基于 github discussion，近似于论坛。查看 "),o={href:"https://blog.csdn.net/duninet/article/details/125280107",target:"_blank",rel:"noopener noreferrer"},c=(0,n.Uk)("配置方法"),d=(0,n.Uk)("。"),u={href:"https://github.com/gitalk/gitalk",target:"_blank",rel:"noopener noreferrer"},m=(0,n.Uk)("Gitalk"),p=(0,n.Uk)("：基于 github commit，需配置独立库用于存储评论。"),g={href:"https://github.com/xCss/Valine",target:"_blank",rel:"noopener noreferrer"},h=(0,n.Uk)("Valine"),b=(0,n.Uk)("：可匿名评论，因此不适合国内使用。"),k={href:"https://gitter.im/",target:"_blank",rel:"noopener noreferrer"},v=(0,n.Uk)("Gitter"),f=(0,n.Uk)("："),_={href:"https://boardgame.io/documentation/#/",target:"_blank",rel:"noopener noreferrer"},y=(0,n.Uk)("boardgame"),U=(0,n.Uk)("，"),G={href:"https://itchef.github.io/regauge/#/",target:"_blank",rel:"noopener noreferrer"},q=(0,n.Uk)("regauge"),w=(0,n.uE)('<h2 id="gitalk" tabindex="-1"><a class="header-anchor" href="#gitalk" aria-hidden="true">#</a> Gitalk</h2><p>Gitalk 是轻量化的评论组件，用户必须登录 github 才能评论，适合项目类使用。</p><p>初次设置时，需要登录 github 初始化评论区。</p><p>Homepage URL 和 Authorization callback URL 需与你的 Gitalk 页面一致，比如：<code>http://localhost:3000/#/</code>。否则页面会报错，提示初始化，无法登录 github。</p><p><code>https://github.com/settings/developers</code> 页面管理已建的应用，获取 Client ID 和 Client secrets，修改应用链接。</p><p>将以下代码放入 docsify 页面中，即可启动 Gitalk：</p><div class="language-HTML ext-HTML line-numbers-mode"><pre class="language-HTML"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.css&quot;&gt;\n\n&lt;script src=&quot;https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/docsify/4.12.2/plugins/gitalk.min.js&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.js&quot;&gt;&lt;/script&gt;\n&lt;script&gt;\n    /* 使用下面的 Javascript 代码生成 gitalk 插件 */\n    const gitalk = new Gitalk({\n        clientID: &#39;2f3da234d27ed9a7c290&#39;,\n        clientSecret: &#39;d64c45594858477fff0c234c3ed3947a53b0a9ac&#39;,\n        repo: &#39;docsifytalk&#39;,        //仓库名称 (GitHub repo)\n        owner: &#39;rockbenben&#39;,        //仓库拥有者 (GitHub repo owner)\n        admin: [&#39;rockbenben&#39;],      //仓库所有者和协作者。（对此存储库具有写访问权的用户）\n        // id: location.pathname,   // Ensure uniqueness and length less than 50\n        distractionFreeMode: false  // Facebook-like distraction free mode\n    })\n&lt;/script&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考资料：</p>',8),C={href:"https://blog.csdn.net/qq_39052513/article/details/108291272",target:"_blank",rel:"noopener noreferrer"},x=(0,n.Uk)("超 Nice 的评论组件 —— Gitalk"),T={},W=(0,i(1935).Z)(T,[["render",function(e,t){const i=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[r,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",l,[a,(0,n.Wm)(i)]),s,(0,n._)("a",o,[c,(0,n.Wm)(i)]),d]),(0,n._)("li",null,[(0,n._)("a",u,[m,(0,n.Wm)(i)]),p]),(0,n._)("li",null,[(0,n._)("a",g,[h,(0,n.Wm)(i)]),b]),(0,n._)("li",null,[(0,n._)("a",k,[v,(0,n.Wm)(i)]),f,(0,n._)("a",_,[y,(0,n.Wm)(i)]),U,(0,n._)("a",G,[q,(0,n.Wm)(i)])])]),w,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",C,[x,(0,n.Wm)(i)])])])])}]])},1935:(e,t)=>{t.Z=(e,t)=>{const i=e.__vccOpts||e;for(const[e,n]of t)i[e]=n;return i}}}]);