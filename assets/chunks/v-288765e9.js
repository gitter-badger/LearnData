"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8818],{9824:(e,t,o)=>{o.r(t),o.d(t,{data:()=>c});const c=JSON.parse('{"key":"v-288765e9","path":"/_posts/2017-07-28-office_2016_installer_error.html","title":"office 2016 安装程序报错解决办法","lang":"zh-CN","frontmatter":{"title":"office 2016 安装程序报错解决办法","date":"2017-07-28T11:02:00.000Z","category":["系统"],"tag":["office 2016"],"order":-3,"summary":"重新安装 Office 系统或更改安装组件时，经常提示：「找不到有效的安装源」，但实际这些文件都能在安装包内找到。 解决方法 1. 打开 regedit.exe，在注册表中找到路径 计算机\\\\HKEYLOCALMACHINE\\\\SOFTWARE\\\\Microsoft\\\\Office\\\\Delivery\\\\SourceEngine\\\\Downloads\\\\{90160000-","head":[["meta",{"property":"og:url","content":"https://newzone.top/_posts/2017-07-28-office_2016_installer_error.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"office 2016 安装程序报错解决办法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-27T07:13:28.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"office 2016"}],["meta",{"property":"article:published_time","content":"2017-07-28T11:02:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-27T07:13:28.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"解决方法","slug":"解决方法","children":[]}],"git":{"createdTime":1658906008000,"updatedTime":1658906008000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":1}]},"readingTime":{"minutes":1.47,"words":440},"filePathRelative":"_posts/2017-07-28-office_2016_installer_error.md","localizedDate":"2017年7月28日"}')},4036:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});var c=o(8e3);const i=[(0,c.uE)('<p>重新安装 Office 系统或更改安装组件时，经常提示：「找不到有效的安装源」，但实际这些文件都能在安装包内找到。</p><p><img src="https://pic3.zhimg.com/v2-85bd2a49a47ee6d0c8eade7b3c249516_r.jpg" alt="" loading="lazy"></p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><ol><li><p>打开 regedit.exe，在注册表中找到路径 <code>计算机\\HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Office\\Delivery\\SourceEngine\\Downloads\\{90160000-00BA-0804-1000-0000000FF1CE}-C\\Sources\\PROPLUS16(RG)-6186D162</code>。</p></li><li><p>修改 Path 数据，改为安装包位置，比如 <code>F:\\5.软件资源\\系统重装\\SW_DVD5_Office_Professional_Plus_2016_64Bit_ChnSimp_MLF_X20-42426\\groove.zh-cn</code>。</p><p><img src="https://pic3.zhimg.com/v2-650ede86dd191a8f0a1cd6e9b815377a_r.jpg" alt="" loading="lazy"></p></li><li><p>在 C 盘建立安装组件：</p><ul><li>把安装包路径 <code>\\groove.zh-cn\\</code> 下的文件复制到 <code>C:\\MSOCache\\All Users\\{90160000-00BA-0804-1000-0000000FF1CE}-C</code> 目录下 (如果没有这个目录就自己建立)。</li><li>把安装包路径 <code>\\proplus.ww\\</code> 下的文件复制到 <code>C:\\MSOCache\\All Users\\{90160000-0011-0000-1000-0000000FF1CE}-C</code>。</li></ul></li><li><p>将需要的程序文件放入 MSOCache 路径 MSOCache 其它的目录下内容同样根据注册表的内容把它指示的光盘中的安装文件复制到相应的目录下。如果没有那个目录就要自己建立，类似的目录一共有 12 个。 如果不想全装可以只选择需要的软件，下面以 Onenote 和 Access 为例。</p><ul><li><strong>Onenote</strong> 把安装包路径 <code>\\onenote.zh-cn\\</code> 下的文件复制到 <code>C:\\MSOCache\\All Users\\{90160000-00A1-0804-1000-0000000FF1CE}-CC</code>。</li><li><strong>Access</strong> 把安装包路径 <code>\\access.zh-cn\\</code> 下的文件复制到 <code>C:\\MSOCache\\All Users\\{90160000-0015-0804-1000-0000000FF1CE}-C</code>。</li></ul></li><li><p>最后进入安装包运行 setup.exe 安装正常。</p></li></ol><p>Office 组件报错大都是由于 MSOCache 目录被删，建议安装 Office 后不要删除该目录。使用优化工具时，要注意保留 MSOCache 目录及其下的文件。</p>',5)],r={},a=(0,o(1935).Z)(r,[["render",function(e,t){return(0,c.wg)(),(0,c.iD)("div",null,i)}]])},1935:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,c]of t)o[e]=c;return o}}}]);