import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,a as i,o as t}from"./app-DmJRNP_A.js";const a={};function d(c,e){return t(),r("div",null,e[0]||(e[0]=[i(`<p><a href="https://www.proxifier.com" target="_blank" rel="noopener noreferrer">Proxifier</a> 可以让不支持通过代理服务器工作的网络程序能通过 SOCKS 或 HTTPS 代理或代理链。强烈建议尽可能使用<a href="https://www.proxifier.com/download" target="_blank" rel="noopener noreferrer">最新版本</a>。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>在 Windows 系统中有 <code>Proxifier Standard Edition</code> (标准版即安装版)和 <code>Proxifier Portable Editio</code> (便携版即免安装版)，因此不要混淆<code>标准版注册码</code>和<code>便携版注册码</code>。</p></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p>安装时，按需勾选<code>Start Proxifier automatically on Windows startup</code>(开机启动)、<code>Check for product updates on Proxifier startup </code>(自动检查更新)和<code>Create a desktop shortcut </code>(创建快捷方式)。最后点<code>Finish</code>启动Proxifier。</p><h3 id="注册" tabindex="-1"><a class="header-anchor" href="#注册"><span>注册</span></a></h3><p>点<code>Enter Registration Key...</code>进入注册界面，<code>Your name or company name</code>(用户名)下面输入任意字符，<code>Your registration key</code>(注册码)下面输入<code>standard</code>(标准版)注册码，<code>Current user only</code>(当前用户)和<code>All users on this computer(require administrator)</code>(所有用户)按需选择，之后点击OK，出现：</p><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Thank you for choosing Proxifier!  </span></span>
<span class="line"><span>Program is successfully registered.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>表示注册成功，点<code>确定</code>。</p><h3 id="配置代理服务器" tabindex="-1"><a class="header-anchor" href="#配置代理服务器"><span>配置代理服务器</span></a></h3><p>目的是配置 Proxifier 连上代理服务器。</p><p>点菜单栏<code>Profile</code>(配置文件)中的<code>Proxy Servers</code>(代理服务器)，在弹出的 Proxy Servers 窗口中点<code>Add</code>(添加)，在弹出的<code>Proxy Server</code>窗口中的服务器<code>Address</code>(地址)后面输入<code>127.0.0.1</code>(本地代理服务)、<code>Port</code>(端口)后面输入<code>代理服务器的端口</code>，<code>Protocol</code>(协议)选中<code>SOCKS Version 5</code>，点<code>Check</code>。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>问：代理服务器的端口在哪里找？<br> 答：打开代理软件v2rayN，左下角找到<code>本地:[socks:10808]| [http:10809]</code>，<code>10808</code>就是端口。</p></div><p>弹窗 Proxy Checker 中出现：<code>Test passed</code>(测试已通过) 和 <code>Proxy is ready to work with Proxifier!</code>(代理可以在 Proxifer 中工作!)，表示代理可用，点OK。</p><p>在弹窗 Proxy Server 中点 OK。出现 <code>Proxifier</code> 选择窗口，提示如下：</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>Do you want Proxifier to use this proxy by default?<br> 您希望 Proxifier 默认使用该代理吗？<br> You can change this later at Profile-&gt;Proxification Rules<br> 您可以稍后在<code>配置文件</code>-&gt;<code>代理规则</code>中进行更改。</p></div><p>选择<code>否</code>，再点 OK ，出现 <code>Proxifier</code> 选择窗口，提示如下：</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>You do not have any proxy servers enabled in Profile-&gt;Proxification Rules.<br> 您没有在<code>配置文件</code>-&gt;<code>代理规则</code>中启用任何代理服务器。<br> Do you want to edit Proxifcation Rules now?<br> 现在要编辑<code>代理规则</code>吗？</p></div><p>选择<code>否</code>。</p><h3 id="配置代理规则" tabindex="-1"><a class="header-anchor" href="#配置代理规则"><span>配置代理规则</span></a></h3><p>目的是让指定程序强制走代理服务器。</p><p>菜单栏<code>Profile</code>(配置文件)中的<code>Proxification Rules</code>(代理规则)，在弹出的 Proxification Rules 窗口中点<code>Add</code>(添加)，在弹出的<code>Proxification Rule</code>窗口中<code>Name</code>(名称)后面输入<code>Mangayomi</code>、<code>Applications</code>(应用程序)处点<code>Browse</code>(浏览)，选择应用程序<code>Mangayomi</code>的路径，<code>Action</code>(动作)处，选择<code>Proxy SOCKS5 127.0.0.1</code>，点OK。关闭窗口<code>Proxification Rules</code>。</p><h3 id="profile-汉化包等下载" tabindex="-1"><a class="header-anchor" href="#profile-汉化包等下载"><span>Profile 汉化包等下载</span></a></h3><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><a href="https://wwqm.lanzouj.com/b00g2rh76h" target="_blank" rel="noopener noreferrer">https://wwqm.lanzouj.com/b00g2rh76h</a> 密码:424v<br><a href="https://www.alipan.com/s/HgG5zdg1hyk" target="_blank" rel="noopener noreferrer">https://www.alipan.com/s/HgG5zdg1hyk</a></p></div>`,23)]))}const l=o(a,[["render",d],["__file","proxifier.html.vue"]]),p=JSON.parse('{"path":"/software/proxifier.html","title":"Proxifier：一款可以为每个应用程序设置专属代理的神器，渗透必备！","lang":"zh-CN","frontmatter":{"title":"Proxifier：一款可以为每个应用程序设置专属代理的神器，渗透必备！","shortTitle":"Proxifier","icon":"globe","order":2,"date":"2024-11-24T00:00:00.000Z","category":["Windows 软件"],"tag":["Proxifier"],"description":"Proxifier 可以让不支持通过代理服务器工作的网络程序能通过 SOCKS 或 HTTPS 代理或代理链。强烈建议尽可能使用最新版本。 相关信息 在 Windows 系统中有 Proxifier Standard Edition (标准版即安装版)和 Proxifier Portable Editio (便携版即免安装版)，因此不要混淆标准版注册码...","head":[["meta",{"property":"og:url","content":"https:////211777.xyz/software/proxifier.html"}],["meta",{"property":"og:site_name","content":"诗往哥的博客"}],["meta",{"property":"og:title","content":"Proxifier：一款可以为每个应用程序设置专属代理的神器，渗透必备！"}],["meta",{"property":"og:description","content":"Proxifier 可以让不支持通过代理服务器工作的网络程序能通过 SOCKS 或 HTTPS 代理或代理链。强烈建议尽可能使用最新版本。 相关信息 在 Windows 系统中有 Proxifier Standard Edition (标准版即安装版)和 Proxifier Portable Editio (便携版即免安装版)，因此不要混淆标准版注册码..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-04T05:08:43.000Z"}],["meta",{"property":"article:tag","content":"Proxifier"}],["meta",{"property":"article:published_time","content":"2024-11-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-04T05:08:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Proxifier：一款可以为每个应用程序设置专属代理的神器，渗透必备！\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-24T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-04T05:08:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"诗往哥\\",\\"url\\":\\"/intro.html\\"}]}"]]},"headers":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"注册","slug":"注册","link":"#注册","children":[]},{"level":3,"title":"配置代理服务器","slug":"配置代理服务器","link":"#配置代理服务器","children":[]},{"level":3,"title":"配置代理规则","slug":"配置代理规则","link":"#配置代理规则","children":[]},{"level":3,"title":"Profile 汉化包等下载","slug":"profile-汉化包等下载","link":"#profile-汉化包等下载","children":[]}],"git":{"createdTime":1735107913000,"updatedTime":1735967323000,"contributors":[{"name":"lss53","username":"lss53","email":"2720626504@qq.com","commits":6,"url":"https://github.com/lss53"}]},"readingTime":{"minutes":2.42,"words":727},"filePathRelative":"software/proxifier.md","localizedDate":"2024年11月24日","excerpt":"<p><a href=\\"https://www.proxifier.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Proxifier</a> 可以让不支持通过代理服务器工作的网络程序能通过 SOCKS 或 HTTPS 代理或代理链。强烈建议尽可能使用<a href=\\"https://www.proxifier.com/download\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">最新版本</a>。</p>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p>在 Windows 系统中有 <code>Proxifier Standard Edition</code> (标准版即安装版)和 <code>Proxifier Portable Editio</code> (便携版即免安装版)，因此不要混淆<code>标准版注册码</code>和<code>便携版注册码</code>。</p>\\n</div>","autoDesc":true}');export{l as comp,p as data};