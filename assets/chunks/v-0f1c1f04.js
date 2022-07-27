"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1971],{924:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-0f1c1f04","path":"/_posts/2017-04-22-rss_feed43_feedex.html","title":"RSS 入门篇：Feed43&FeedEx-为静态网页定制 RSS 源","lang":"zh-CN","frontmatter":{"title":"RSS 入门篇：Feed43&FeedEx-为静态网页定制 RSS 源","date":"2017-04-22T12:54:00.000Z","category":["自动化"],"tag":["rss","Feed43","FeedEx"],"order":-2,"summary":"迷上 IFTTT 后急需 RSS 来监测网页，找到免费的 FEED43。网上有很多教程，但对新手都不够友好，就重新整理了一份。 ► 开始烧制属于自己的 feed 1. 进入网页 FEED43 无需注册，点击 Create your own feed 直接使用。 2. 选定 RSS 网页 将目标网址添入 Step1. Specify source page a","head":[["meta",{"property":"og:url","content":"https://newzone.top/_posts/2017-04-22-rss_feed43_feedex.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"RSS 入门篇：Feed43&FeedEx-为静态网页定制 RSS 源"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-27T07:13:28.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"rss"}],["meta",{"property":"article:tag","content":"Feed43"}],["meta",{"property":"article:tag","content":"FeedEx"}],["meta",{"property":"article:published_time","content":"2017-04-22T12:54:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-27T07:13:28.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. 进入网页","slug":"_1-进入网页","children":[]},{"level":2,"title":"2. 选定 RSS 网页","slug":"_2-选定-rss-网页","children":[]},{"level":2,"title":"3. 定制 RSS 抓取规则","slug":"_3-定制-rss-抓取规则","children":[]},{"level":2,"title":"4. 整理 rss 输入格式","slug":"_4-整理-rss-输入格式","children":[]},{"level":2,"title":"5. 获取 RSS 地址","slug":"_5-获取-rss-地址","children":[]},{"level":2,"title":"6. 全文抓取","slug":"_6-全文抓取","children":[]},{"level":2,"title":"RSS 合集","slug":"rss-合集","children":[]}],"git":{"createdTime":1658906008000,"updatedTime":1658906008000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":1}]},"readingTime":{"minutes":2.97,"words":892},"filePathRelative":"_posts/2017-04-22-rss_feed43_feedex.md","localizedDate":"2017年4月22日"}')},6646:(n,a,s)=>{s.r(a),s.d(a,{default:()=>A});var t=s(8e3);const e=(0,t._)("p",null,"迷上 IFTTT 后急需 RSS 来监测网页，找到免费的 FEED43。网上有很多教程，但对新手都不够友好，就重新整理了一份。",-1),p=(0,t._)("p",null,[(0,t._)("strong",null,"► 开始烧制属于自己的 feed")],-1),l=(0,t._)("h2",{id:"_1-进入网页",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_1-进入网页","aria-hidden":"true"},"#"),(0,t.Uk)(" 1. 进入网页")],-1),o={href:"http://www.feed43.com/",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("FEED43"),r=(0,t.Uk)(" 无需注册，点击 Create your own feed 直接使用。"),i=(0,t.uE)('<p><img src="https://pic1.zhimg.com/v2-b5da0b08f632376fad3925a779e373b4_r.jpg" alt="" loading="lazy"></p><h2 id="_2-选定-rss-网页" tabindex="-1"><a class="header-anchor" href="#_2-选定-rss-网页" aria-hidden="true">#</a> 2. 选定 RSS 网页</h2><p>将目标网址添入 Step1. Specify source page address (URL)，将输入的源代码复制到 txt 文档中（方便之后写抓取规则）</p><p><img src="https://pic1.zhimg.com/v2-1b687a5b1c325ba6d04fbdcc13b95668_r.jpg" alt="" loading="lazy"></p><p>如果 Page Source 显示为乱码，Encoding 可设为 <strong>UTF-8</strong> 。</p><h2 id="_3-定制-rss-抓取规则" tabindex="-1"><a class="header-anchor" href="#_3-定制-rss-抓取规则" aria-hidden="true">#</a> 3. 定制 RSS 抓取规则</h2><p>Global Search Pattern 是选择你要搜索的范围。可以不填，这样会搜索整个页面，一般新手都选择整个页面，即空白。Item (repeatable) Search Pattern 这部分最重要，是我们要抓取的内容。</p><p><img src="https://pic1.zhimg.com/v2-b1fa90c59739bddc0c27134cd36ba6bc_r.jpg" alt="" loading="lazy"></p><p>仔细查看 Step1 中的源代码，找到区需要抓取的部分，输入到 Item (repeatable) Search Pattern。</p><p>测试网址：<code>http://news.163.com/special/0001386F/rank_whole.html</code>。</p><p>需要抓取的源代码：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span>\n    <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>更时尚更运动 车展实拍解析红旗 H5<span class="token punctuation">&quot;</span></span>\n      <span class="token punctuation">&gt;</span></span>更时尚更运动 车展实拍解析红旗 H5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span>\n    <span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cBlue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>11211615<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://pic2.zhimg.com/v2-cf6dbf2c09189f7517ec63abdc80c50d_r.jpg" alt="" loading="lazy"></p><p><strong>抓取规则</strong>：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>\n  {*}\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{*}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{*}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{%}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{%}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>\n  {*}\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cBlue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{*}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>\n  {*}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击 Extract，进行抓取。</p><p><img src="https://pic4.zhimg.com/v2-e9486741a6229ab258a95147f584571b_r.jpg" alt="" loading="lazy"></p><h2 id="_4-整理-rss-输入格式" tabindex="-1"><a class="header-anchor" href="#_4-整理-rss-输入格式" aria-hidden="true">#</a> 4. 整理 rss 输入格式</h2><p>Define output format，一般情况下前面三个会已经写好，后三个就将前面得出的 item 里面的元素填入即可，我这里{%1}对应的是链接所以填入 Link，{%2}对于标题就填入 Title。</p><p><img src="https://pic1.zhimg.com/v2-b4614f5c46090f2eb762aac87d604350_r.jpg" alt="" loading="lazy"></p><p>然后点击 preview，完成制作，同时出现预览。</p><p><img src="https://pic2.zhimg.com/v2-498bf1f1c0b14da172498b58f59e39b9_r.jpg" alt="" loading="lazy"></p><p>如果注册了 FEED43 的账号，可以修改 rss 地址，但不能改为中文，否则会 rss 出错。</p><h2 id="_5-获取-rss-地址" tabindex="-1"><a class="header-anchor" href="#_5-获取-rss-地址" aria-hidden="true">#</a> 5. 获取 RSS 地址</h2>',24),u=(0,t.Uk)("点击 Feed URL 可得 rss 地址，我这里是 "),d={href:"https://www.feed43.com/dianji.xml",target:"_blank",rel:"noopener noreferrer"},g=(0,t.Uk)("https://www.feed43.com/dianji.xml"),k=(0,t._)("p",null,[(0,t._)("img",{src:"https://pic1.zhimg.com/v2-f3b00e876d8df136f7d354b4fc22f900_r.jpg",alt:"",loading:"lazy"})],-1),h=(0,t._)("p",null,"在 RSS reader 中展示为",-1),_=(0,t._)("p",null,[(0,t._)("img",{src:"https://pic4.zhimg.com/v2-6d8f503ff3da16eb985ca1d3ae2de98f_r.jpg",alt:"",loading:"lazy"})],-1),m=(0,t._)("h2",{id:"_6-全文抓取",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_6-全文抓取","aria-hidden":"true"},"#"),(0,t.Uk)(" 6. 全文抓取")],-1),f=(0,t._)("p",null,[(0,t.Uk)("feed43 导出的条目必须点击链接才能看到内容。在 rss 展示全文，需要通过 FeedEx 再转一次。注意：feed43 免费用户过多，"),(0,t._)("strong",null,"需在浏览器中打开一次才能得到真实链接"),(0,t.Uk)(" (一般为 "),(0,t._)("code",null,"http://node2.feed43.com"),(0,t.Uk)(")，FeedEx 需使用真实链接，一般 3 分钟内转换好。")],-1),b=(0,t.Uk)("FeedEx："),S={href:"https://feedex.net/",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("https://feedex.net/"),R=(0,t._)("p",null,[(0,t._)("img",{src:"https://pic4.zhimg.com/v2-8e3701adffa1d6fb4ea10dda2704988b_r.jpg",alt:"",loading:"lazy"})],-1),w=(0,t._)("p",null,"feeds43 免费版每 6 小时抓取一次，显示最新的 20 条内容。",-1),x=(0,t._)("p",null,"如果网页源更新较频繁的话，可使用 RSSHub 和 Huginn。",-1),y=(0,t._)("h2",{id:"rss-合集",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#rss-合集","aria-hidden":"true"},"#"),(0,t.Uk)(" RSS 合集")],-1),z=(0,t._)("p",null,"汇总的 RSS 永久订阅 feeds，均通过 RSSHub 和 Huginn 制作。如果有兴趣自制 RSS，可参考以下教程。",-1),E={href:"https://newzone.top/_posts/2017-04-22-rss_feed43_feedex.html",target:"_blank",rel:"noopener noreferrer"},F=(0,t.Uk)("RSS 入门篇：FEED43&FeedEx-为静态网页定制 RSS 源"),U={href:"https://newzone.top/_posts/2018-10-07-huginn_scraping_any_website.html",target:"_blank",rel:"noopener noreferrer"},q=(0,t.Uk)("RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）"),T={href:"https://newzone.top/_posts/2019-04-01-rsshub_noob.html",target:"_blank",rel:"noopener noreferrer"},j=(0,t.Uk)("RSS 速成篇：RSSHub 捡现成的轮子"),D={href:"https://newzone.top/_posts/2020-03-25-rsshub_on_vps.html",target:"_blank",rel:"noopener noreferrer"},H=(0,t.Uk)("RSS 速成篇 2：RSSHub 自部署"),W={href:"https://newzone.top/_posts/2021-10-23-nas_with_rsshub_and_huginn.html",target:"_blank",rel:"noopener noreferrer"},C=(0,t.Uk)("RSS 完结篇：节省千元服务费，RSSHub、Huginn 转移 NAS"),P={href:"https://newzone.top/_posts/2022-03-17-rss_persistent_link_collection.html",target:"_blank",rel:"noopener noreferrer"},Z=(0,t.Uk)("RSS 汇总篇：RSS 永久链接合集，拒绝 RSS 失效"),I=(0,t._)("p",null,[(0,t._)("strong",null,"参考资料"),(0,t.Uk)("：")],-1),L={href:"http://www.appinn.com/feed43/",target:"_blank",rel:"noopener noreferrer"},N=(0,t.Uk)("FEED43 – 为没有 Feed 的网页生成 RSS 格式订阅源 [教程]"),B={href:"https://www.douban.com/note/199431341/",target:"_blank",rel:"noopener noreferrer"},J=(0,t.Uk)("喜欢的网站，没有 rss 怎么办，自己做！！用 FEED43 自己烧制喜欢网页 rss 教程 -- 小佑 (其实内附双教程)"),O={},A=(0,s(1935).Z)(O,[["render",function(n,a){const s=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[e,p,l,(0,t._)("p",null,[(0,t._)("a",o,[c,(0,t.Wm)(s)]),r]),i,(0,t._)("p",null,[u,(0,t._)("a",d,[g,(0,t.Wm)(s)])]),k,h,_,m,f,(0,t._)("p",null,[b,(0,t._)("a",S,[v,(0,t.Wm)(s)])]),R,w,x,y,z,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",E,[F,(0,t.Wm)(s)])])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",U,[q,(0,t.Wm)(s)])])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",T,[j,(0,t.Wm)(s)])])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",D,[H,(0,t.Wm)(s)])])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",W,[C,(0,t.Wm)(s)])])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",P,[Z,(0,t.Wm)(s)])])])]),I,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",L,[N,(0,t.Wm)(s)])])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",B,[J,(0,t.Wm)(s)])])])])])}]])},1935:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}}}]);