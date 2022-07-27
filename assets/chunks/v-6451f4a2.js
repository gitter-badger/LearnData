"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2777],{6615:(e,l,t)=>{t.r(l),t.d(l,{data:()=>n});const n=JSON.parse('{"key":"v-6451f4a2","path":"/windows/NewSystem.html","title":"系统重装","lang":"zh-CN","frontmatter":{"article":false,"title":"系统重装","order":3,"summary":"重装准备 备份 必备应用，油猴脚本，输入法配置，UMP 版微信聊天记录 C:\\\\Users\\\\Benson\\\\AppData\\\\Local\\\\Packages\\\\TencentWeChatLimited.forWindows10_sdtnhv12zgd7a\\\\LocalCache\\\\Roaming\\\\Tencent\\\\WeChatAppStore。; 核对群晖已同步到最新备份。","head":[["meta",{"property":"og:url","content":"https://newzone.top/windows/NewSystem.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"系统重装"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-27T07:13:28.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-27T07:13:28.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"重装准备","slug":"重装准备","children":[]},{"level":2,"title":"安装系统","slug":"安装系统","children":[]},{"level":2,"title":"系统配置","slug":"系统配置","children":[]},{"level":2,"title":"安装应用","slug":"安装应用","children":[]},{"level":2,"title":"修改按键","slug":"修改按键","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","children":[]}],"git":{"createdTime":1658906008000,"updatedTime":1658906008000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":1}]},"readingTime":{"minutes":2.56,"words":767},"filePathRelative":"windows/NewSystem.md","localizedDate":"2022年7月27日"}')},3219:(e,l,t)=>{t.r(l),t.d(l,{default:()=>oe});var n=t(8e3);const r=(0,n._)("h2",{id:"重装准备",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#重装准备","aria-hidden":"true"},"#"),(0,n.Uk)(" 重装准备")],-1),o=(0,n.Uk)("备份 "),a=(0,n.Uk)("必备应用"),i=(0,n.Uk)("，油猴脚本，输入法配置，UMP 版微信聊天记录 "),u=(0,n._)("code",null,"C:\\Users\\Benson\\AppData\\Local\\Packages\\TencentWeChatLimited.forWindows10_sdtnhv12zgd7a\\LocalCache\\Roaming\\Tencent\\WeChatAppStore",-1),s=(0,n.Uk)("。"),d=(0,n._)("li",null,"核对群晖已同步到最新备份。",-1),c=(0,n._)("li",null,"反激活已购软件，如：Eagle、MoneyWiz、妙笔。",-1),h=(0,n.Uk)("更新 "),_={href:"https://www.microsoft.com/zh-cn/software-download/windows11",target:"_blank",rel:"noopener noreferrer"},p=(0,n.Uk)("原版镜像"),k=(0,n.Uk)("。"),m=(0,n._)("h2",{id:"安装系统",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#安装系统","aria-hidden":"true"},"#"),(0,n.Uk)(" 安装系统")],-1),g=(0,n.Uk)("系统重装/维修前，在 "),U=(0,n._)("strong",null,"exFAT",-1),w=(0,n.Uk)(" 格式的 U 盘上安装 "),f={href:"http://www.wepe.com.cn/",target:"_blank",rel:"noopener noreferrer"},y=(0,n.Uk)("微 PE 工具箱"),E=(0,n.Uk)("。Windows 10/11 镜像超过 4GB，已经不再支持 FAT32 格式的 U 盘。"),b=(0,n._)("p",null,"使用 U 盘引导安装系统：",-1),v=(0,n._)("ul",null,[(0,n._)("li",null,"本地安装：右键 ISO 文件，选择挂载；在新出现的驱动器中，找到 setup.exe，直接运行；选择「现在安装」。"),(0,n._)("li",null,[(0,n.Uk)("引导安装：采用 UEFI+GPT。如果是自定义安装清空系统盘所有分区后，一定要用 "),(0,n._)("strong",null,"GPT"),(0,n.Uk)(" 对系统盘分区。")])],-1),W=(0,n._)("h2",{id:"系统配置",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#系统配置","aria-hidden":"true"},"#"),(0,n.Uk)(" 系统配置")],-1),C=(0,n._)("li",null,"将电脑调整到高性能/卓越模式。",-1),S=(0,n._)("li",null,"将 Documents、Desktop 转移到 D 盘。",-1),T=(0,n._)("li",null,"任务栏：在任务栏底部右键单击，选择「任务栏设置」-「通知区域 - 选择哪些图标显示在任务栏上」；在同页面的「多显示器设置」中，取消「在所有显示器上显示任务栏」。",-1),A={href:"https://zhuanlan.zhihu.com/p/25942015",target:"_blank",rel:"noopener noreferrer"},D=(0,n.Uk)("清理导航栏"),x=(0,n.Uk)("。"),z={href:"https://newzone.top/_posts/2017-09-02-forced_shutdown.html",target:"_blank",rel:"noopener noreferrer"},P=(0,n.Uk)("设置系统强制关机"),L=(0,n.Uk)("，防止系统关机不成功。"),N=(0,n.uE)("<li>Everything 注册右键搜索当前路径；右键清除。 <ul><li>win+r，regedit 打开注册表，打开路径 <code>HKEY_CLASSES_ROOT\\Directory\\Background\\shell</code>。</li><li>新建项，命名随意（即右键菜单显示的文字）-「Everything 搜索当前路径」。</li><li>右键再次新建项，命名 Command，打开修改右侧默认值为 <code>&quot;D:\\Everything\\Everything.exe&quot; -path &quot;.&quot;</code>。</li></ul></li><li>显示屏参数：屏幕换线或换主机，参数可能会变动。 <ul><li>左侧：自定义颜色，红 70 绿 75 蓝 50；亮度 66，对比 75。</li><li>右侧 0020：自定义颜色，红 70 绿 75 蓝 50；亮度 50，对比 80。</li></ul></li>",2),R=(0,n._)("h2",{id:"安装应用",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#安装应用","aria-hidden":"true"},"#"),(0,n.Uk)(" 安装应用")],-1),O={href:"https://newzone.top/_posts/2022-03-21-winget_the_strongest_software_manager_for_windows.html",target:"_blank",rel:"noopener noreferrer"},q=(0,n.Uk)("winstall"),B=(0,n.Uk)(" 批量安装应用；"),F=(0,n._)("li",null,"Synology Drive：设置 NAS 本地备份；",-1),M=(0,n._)("li",null,"Mircrosoft Store：Snipaste、微信 For Windows；",-1),H=(0,n._)("li",null,"绿色开机：Keepass、Ditto、RunAny、天若 OCR；WPS 安装宏；",-1),I=(0,n._)("li",null,"配置：Eagle、RIME、Picgo、wonderpen；",-1),K=(0,n._)("li",null,[(0,n.Uk)("firefox-about:config 修改原值 18 的 "),(0,n._)("code",null,"ui.key.menuAccessKey"),(0,n.Uk)(" 为 0，以屏蔽 alt 键防止热键冲突；关闭 "),(0,n._)("code",null,"options - Network Settings - DNS over HTTPS"),(0,n.Uk)("；")],-1),Z=(0,n.Uk)("火绒－安全设置－高级防护－导入隐私规则，增加 "),G={href:"https://github.com/tutugreen/Huorong-Rules/tree/main/Tencent",target:"_blank",rel:"noopener noreferrer"},J=(0,n.Uk)("腾讯屏蔽规则"),Y=(0,n.Uk)("。"),j=(0,n._)("h2",{id:"修改按键",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#修改按键","aria-hidden":"true"},"#"),(0,n.Uk)(" 修改按键")],-1),Q=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Uk)("Powertoys："),(0,n._)("code",null,"insert"),(0,n.Uk)(" 键改为 backspace；")]),(0,n._)("li",null,"Option：计算器改为「上一个桌面」；右键菜单改为「下一个桌面」。")],-1),V=(0,n._)("h2",{id:"常见问题",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#常见问题","aria-hidden":"true"},"#"),(0,n.Uk)(" 常见问题")],-1),X=(0,n._)("li",null,[(0,n.Uk)("Win11 本地账户也被提示需要登录密码，但设置密码后，无法直接开机登录。设置新密码后，进入 "),(0,n._)("code",null,"设置 - 账户 - 登录选项 - 密码"),(0,n.Uk)("，可以重新设置空密码，实现自动登录。")],-1),$=(0,n._)("li",null,"英语键盘删不掉：添加英语语言包，然后再删除，英语键盘也会一起删除。",-1),ee=(0,n._)("li",null,"右键更改前先备份注册表，有几率会影响系统稳定性。",-1),le=(0,n.Uk)("开机用 "),te=(0,n.Uk)("管理员权限启动脚本"),ne=(0,n.Uk)("。"),re={},oe=(0,t(1935).Z)(re,[["render",function(e,l){const t=(0,n.up)("RouterLink"),re=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[r,(0,n._)("ul",null,[(0,n._)("li",null,[o,(0,n.Wm)(t,{to:"/apps/index.html"},{default:(0,n.w5)((()=>[a])),_:1}),i,u,s]),d,c,(0,n._)("li",null,[h,(0,n._)("a",_,[p,(0,n.Wm)(re)]),k])]),m,(0,n._)("p",null,[g,U,w,(0,n._)("a",f,[y,(0,n.Wm)(re)]),E]),b,v,W,(0,n._)("ul",null,[C,S,T,(0,n._)("li",null,[(0,n._)("a",A,[D,(0,n.Wm)(re)]),x]),(0,n._)("li",null,[(0,n._)("a",z,[P,(0,n.Wm)(re)]),L]),N]),R,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",O,[q,(0,n.Wm)(re)]),B]),F,M,H,I,K,(0,n._)("li",null,[Z,(0,n._)("a",G,[J,(0,n.Wm)(re)]),Y])]),j,Q,V,(0,n._)("ul",null,[X,$,ee,(0,n._)("li",null,[le,(0,n.Wm)(t,{to:"/code/AutoHotKey.html#%E7%AE%A1%E7%90%86%E5%91%98%E6%9D%83%E9%99%90%E8%BF%90%E8%A1%8C%E8%84%9A%E6%9C%AC"},{default:(0,n.w5)((()=>[te])),_:1}),ne])])])}]])},1935:(e,l)=>{l.Z=(e,l)=>{const t=e.__vccOpts||e;for(const[e,n]of l)t[e]=n;return t}}}]);