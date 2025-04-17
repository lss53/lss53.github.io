import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as o,o as s}from"./app-DfbzlcnA.js";const a="/assets/ins-choco-G0Wb29I1.png",l={};function n(c,e){return s(),t("div",null,e[0]||(e[0]=[o(`<h3 id="传统安装方式" tabindex="-1"><a class="header-anchor" href="#传统安装方式"><span>传统安装方式</span></a></h3><p>在不晓得 <a href="#Chocolatey">Chocolatey</a> 之前，我是这样安装软件和配置环境变量的：</p><p>按 <code>Windows 键 + E</code> 打开文件资源管理器，输入 <code>%HOMEPATH%</code> 回车打开用户名目录，新建路径为 <code>%HOMEPATH%\\Me\\bin\\script</code> ，下载<a href="https://nodejs.org/zh-cn/download/prebuilt-binaries" target="_blank" rel="noopener noreferrer">Node.js的预构建二进制文件</a>，如 <code>node-v22.12.0-win-x64.zip</code>，右键单击它，选择<code>用 WinRAR 打开</code>，把 <code>node-v22.12.0-win-x64</code> 文件夹拖到 <code>%HOMEPATH%\\Me\\bin\\script</code> 里面。</p><p>点击任务栏上的搜索图标，输入<code>高级系统设置</code>按回车，在新窗口<code>系统属性</code>中点击<code>环境变量</code>，在<code>系统变量</code>下，找到变量<code>Path</code>，选择并单击<code>编辑</code>（提示：如果没有变量<code>Path</code>，请单击<code>新建</code>）。在新窗口<code>编辑环境变量</code>中点击<code>新建</code>，输入<code>%HOMEPATH%\\Me\\bin\\script</code>并按<code>确定</code>。如果有cmd或shell终端（命令）窗口，请重新启动它们。</p><p>点击任务栏上的搜索图标，输入 <code>cmd</code> ，点击出现的选项<code>以管理员身份运行</code>，输入命令 <code>node -v</code> 按回车，显示 <code>v22.12.0</code> 表示配置成功。</p><p>传统的安装方式非常耗时且非常低效，用 <code>Chocolatey</code> 在命令窗口安装软件，一条命令搞定程序安装和配置环境变量。</p><h3 id="chocolatey" tabindex="-1"><a class="header-anchor" href="#chocolatey"><span>Chocolatey</span></a></h3><ol><li>安装 Chocolatey</li></ol><blockquote><p>The biggest challenge is reducing duplication of effort, so users turn to Chocolatey for simplicity</p><ul><li>官方地址：<a href="https://chocolatey.org/" target="_blank" rel="noopener noreferrer">https://chocolatey.org/</a></li><li>安装文档：<a href="https://chocolatey.org/install#individual" target="_blank" rel="noopener noreferrer">https://chocolatey.org/install#individual</a></li></ul></blockquote><p>阅读官方安装文档，总结如下：</p><p>方法一，以管理员的身份打开 cmd 命令窗口：点击任务栏上的搜索图标，输入命令 <code>cmd</code> ，点击出现的选项 “以管理员身份运行” ，再执行下面的命令：</p><div class="language-bat line-numbers-mode" data-highlighter="shiki" data-ext="bat" data-title="bat" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">SystemRoot</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\\System32\\WindowsPowerShell\\v1.0\\powershell.exe&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString(&#39;https://community.chocolatey.org/install.ps1&#39;))&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PATH</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">;</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ALLUSERSPROFILE</span><span style="--shiki-light:#50A14F;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\\chocolatey\\bin&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>方法二，以管理员的身份打开 Windows PowerShell 命令窗口。右键点击开始菜单，选择 <code>Windows PowerShell(管理员)(A)</code> ，再执行下面的命令：</p><div class="language-bat line-numbers-mode" data-highlighter="shiki" data-ext="bat" data-title="bat" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString(&#39;https://community.chocolatey.org/install.ps1&#39;))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检验是否安装成功的方法：在相应的命令窗口，输入 <code>choco</code> ，回显如下就安装成功。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Chocolatey v2.4.1</span></span>
<span class="line"><span>Please run &#39;choco -?&#39; or &#39;choco &lt;command&gt; -?&#39; for help menu.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+a+'" alt="安装Choco" tabindex="0" loading="lazy"><figcaption>安装Choco</figcaption></figure><div class="hint-container important"><p class="hint-container-title">重要</p><p>这几个非常高效的操作命令必须推荐：</p><ul><li><code>choco search xxx</code>，查找 xxx 安装包</li><li><code>choco info xxx</code>，查看 xxx 安装包信息</li><li><code>choco install xxx</code>，安装 xxx 软件</li><li><code>choco upgrade xxx</code>，升级 xxx 软件</li><li><code>choco uninstall xxx</code>， 卸载 xxx 软件</li></ul></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Q: 如何知道 chocolatey 仓库中都有哪些安装包可用呢？<br> A: 可以通过上面提到的命令 <code>choco search xxx</code> ，也可以访问<a href="https://community.chocolatey.org/packages" target="_blank" rel="noopener noreferrer">官方仓库</a>进行筛选。</p></div><ol start="2"><li>安装 Node.js</li></ol><p>安装 Node.js 最新的长期维护版（LTS） ：通过查找得知，安装命令是 <code>choco install nodejs-lts</code> 粘贴到命令行或 Windows PowerShell 命令窗口中，按回车执行。</p><ol start="3"><li>安装 Git</li></ol><p>请从命令行或 PowerShell 运行以下命令：</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">choco</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',24)]))}const h=i(l,[["render",n],["__file","chocolatey.html.vue"]]),p=JSON.parse('{"path":"/software/chocolatey.html","title":"Chocolatey：一款 GitHub 上星标 10k+ 的 Windows 命令行软件管理器","lang":"zh-CN","frontmatter":{"title":"Chocolatey：一款 GitHub 上星标 10k+ 的 Windows 命令行软件管理器","shortTitle":"Chocolatey","date":"2024-12-22T00:00:00.000Z","icon":"fa-solid fa-toolbox","order":6,"category":["Software"],"tag":["Chocolatey","系统软件"],"description":"传统安装方式 在不晓得 Chocolatey 之前，我是这样安装软件和配置环境变量的： 按 Windows 键 + E 打开文件资源管理器，输入 %HOMEPATH% 回车打开用户名目录，新建路径为 %HOMEPATH%\\\\Me\\\\bin\\\\script ，下载Node.js的预构建二进制文件，如 node-v22.12.0-win-x64.zip，右键单击...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https:////211777.xyz/en/software/chocolatey.html"}],["meta",{"property":"og:url","content":"https:////211777.xyz/software/chocolatey.html"}],["meta",{"property":"og:site_name","content":"诗往哥的博客"}],["meta",{"property":"og:title","content":"Chocolatey：一款 GitHub 上星标 10k+ 的 Windows 命令行软件管理器"}],["meta",{"property":"og:description","content":"传统安装方式 在不晓得 Chocolatey 之前，我是这样安装软件和配置环境变量的： 按 Windows 键 + E 打开文件资源管理器，输入 %HOMEPATH% 回车打开用户名目录，新建路径为 %HOMEPATH%\\\\Me\\\\bin\\\\script ，下载Node.js的预构建二进制文件，如 node-v22.12.0-win-x64.zip，右键单击..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-12T01:40:27.000Z"}],["meta",{"property":"article:tag","content":"Chocolatey"}],["meta",{"property":"article:tag","content":"系统软件"}],["meta",{"property":"article:published_time","content":"2024-12-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-12T01:40:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Chocolatey：一款 GitHub 上星标 10k+ 的 Windows 命令行软件管理器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-22T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-12T01:40:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"诗往哥\\",\\"url\\":\\"/intro.html\\"}]}"]]},"headers":[{"level":3,"title":"传统安装方式","slug":"传统安装方式","link":"#传统安装方式","children":[]},{"level":3,"title":"Chocolatey","slug":"chocolatey","link":"#chocolatey","children":[]}],"git":{"createdTime":1735107913000,"updatedTime":1736646027000,"contributors":[{"name":"lss53","username":"lss53","email":"2720626504@qq.com","commits":11,"url":"https://github.com/lss53"}]},"readingTime":{"minutes":2.59,"words":777},"filePathRelative":"software/chocolatey.md","localizedDate":"2024年12月22日","excerpt":"<h3>传统安装方式</h3>\\n<p>在不晓得 <a href=\\"#Chocolatey\\">Chocolatey</a> 之前，我是这样安装软件和配置环境变量的：</p>\\n<p>按 <code>Windows 键 + E</code> 打开文件资源管理器，输入 <code>%HOMEPATH%</code> 回车打开用户名目录，新建路径为 <code>%HOMEPATH%\\\\Me\\\\bin\\\\script</code> ，下载<a href=\\"https://nodejs.org/zh-cn/download/prebuilt-binaries\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Node.js的预构建二进制文件</a>，如 <code>node-v22.12.0-win-x64.zip</code>，右键单击它，选择<code>用 WinRAR 打开</code>，把 <code>node-v22.12.0-win-x64</code> 文件夹拖到 <code>%HOMEPATH%\\\\Me\\\\bin\\\\script</code> 里面。</p>","autoDesc":true}');export{h as comp,p as data};
