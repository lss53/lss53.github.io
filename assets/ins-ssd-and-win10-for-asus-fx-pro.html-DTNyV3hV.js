import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as s,o as t}from"./app-DfbzlcnA.js";const d={};function n(a,e){return t(),i("div",null,e[0]||(e[0]=[s(`<h2 id="安装固态硬盘-ssd" tabindex="-1"><a class="header-anchor" href="#安装固态硬盘-ssd"><span>安装固态硬盘(SSD)</span></a></h2><p>暑假期间有小朋友的华硕(ASUS)FX - Pro笔记本启动慢，想请我帮忙重装下系统。</p><p>查看FX - Pro外观时，发现后盖上写着「M.2 2280 SLOT SUPPORT SATA SSD ONLY」，大意仅支持M.2 2280 SATA接口的固态硬盘；致电华硕官方，确认其主板固态硬盘接口类型为M.2，建议机主某东购买「三星（SAMSUNG） 860 EVO 250G M.2 2280 SATA协议固态硬盘」和某宝购买<code>M.2螺丝</code>。</p><p>固态硬盘和螺丝到货后，卸下FX - Pro后盖中间的两颗螺丝，取下盖板，主板固态硬盘插槽插上固态硬盘并用M.2螺丝将其固定，卡好后盖，拧紧后盖螺丝。</p><h2 id="设置-bios" tabindex="-1"><a class="header-anchor" href="#设置-bios"><span>设置 Bios</span></a></h2><p>本步骤目的仅为备忘；不建议操作，保持FX - Pro默认纯UEFI启动即可。</p><p>如何开启开启Launch CSM（兼容性支持模块）呢？</p><blockquote><ul><li>CSM全名Compatibility Support Module即兼容性支持模块，是UEFI的一个特殊模块，对于不支持UEFI的系统提供兼容性支持。</li><li>Launch CSM是bios里Boot菜单里的一个子项目（一些老的主板上没有此选项），与Secure Boot（安全启动）是并列项。</li><li>CSM开启使得可以支持UEFI启动和非UEFI启动。若是需要启动传统MBR设备，则需开启（Enabled）CSM。关闭（Disabled）CSM则变成纯UEFI启动，且完全支持安全启动。</li><li>bios里，← →方向键切换菜单（左右选择）；↑↓方向键选择项目（左右选择）；Enter键（回车，选择并确认）。</li></ul></blockquote><ol><li><p>开机或重启，狂按<code>ESC</code>键，调出<code>Please Select Boot Device</code>（启动项选择界面），按<code>↓</code>方向键选择<code>Enter Setup</code>，再按<code>Enter</code>键，进入Bios设置界面；按<code>F2</code>键可以直接进入Bios设置界面。</p></li><li><p>按<code>→</code>方向键切换到<code>Security</code>菜单，按<code>↓</code>方向键选择<code>Secure Boot menu</code>并<code>回车</code>，按<code>↓</code>方向键选择<code>Secure Boot Control</code>并<code>回车</code>，按<code>↓</code>方向键选择<code>Disabled</code>（关闭）并<code>回车</code>。</p></li><li><p>按<code>ESC</code>键，再按<code>←</code>方向键切换到<code>Boot</code>菜单，按<code>↓</code>方向键选择<code>Launch CSM</code>并按<code>回车</code>，按<code>↓</code>方向键选择<code>Enabled</code>（打开）并<code>回车</code>。</p></li><li><p>按<code>F10</code>保存设置。</p></li></ol><h2 id="安装系统" tabindex="-1"><a class="header-anchor" href="#安装系统"><span>安装系统</span></a></h2><p>自备uefi win10 pe启动U盘。开机狂按<code>ESC</code>键，调出<code>Please Select Boot Device</code>（启动项选择界面），按<code>↓</code>方向键选择带<code>UEFI</code>字样的U盘并<code>回车</code>；或者直接按<code>F2</code>。</p><h3 id="guid-分区" tabindex="-1"><a class="header-anchor" href="#guid-分区"><span>GUID 分区</span></a></h3><blockquote><p>GUID分区表(简称GPT。使用GUID分区表的磁盘称为GPT磁盘)是源自EFI标准的一种较新的磁盘分区表结构的标准。</p></blockquote><p>进入PE后，双击桌面上的「DG分区工具」，DiskGenius分区工具里右键选择硬盘，单击「快速分区」；分区表类型选择「GUID」也就是GPT，分区数目建议只「自定义1个分区」，固态硬盘还需勾选【对齐分区到此扇区】，扇区数默认<code>2048</code>即可，确定；会提醒你现有分区会被删除，如果有重要数据备份好了就点击是；之后软件自动执行硬盘分区以及格式化过程，分区之后，gpt分区表会有ESP、MSR两个额外分区；</p><h3 id="setup-安装" tabindex="-1"><a class="header-anchor" href="#setup-安装"><span>Setup 安装</span></a></h3><p>PE系统里，右键单击「Windows 10系统镜像」，左键单击「装载」，双击「sources\\setup.exe」，按提示选择「需要安装的版本」、勾选「我接受许可条款」、选择「自定义：仅安装Windows（高级）」、选择「系统要安装的分区」一般在MSR (保留)分区下面，不要选到其他分区上了；点击下一步安装。</p><h3 id="winntsetup-安装" tabindex="-1"><a class="header-anchor" href="#winntsetup-安装"><span>WinNTSetup 安装</span></a></h3><p>双击PE桌面上的WinNTSetup，依次单击搜索或选择按钮「选择Windows安装文件的位置」为Windows 10系统镜像，「选择引导驱动器的位置」软件会自动加载无需要选择，「选择安装驱动器的位置」一般选择C盘。后面的为笔者常用，「无人值守」选择自制的「启用Administrator用户.xml」，「调整」选择「禁用UAC和Defender」</p><h3 id="efi-shell-安装" tabindex="-1"><a class="header-anchor" href="#efi-shell-安装"><span>EFI shell 安装</span></a></h3><p>EFI_SHELL64.zip：<a href="https://wwa.lanzoui.com/b04bsaxre#g6x4" target="_blank" rel="noopener noreferrer">https://wwa.lanzoui.com/b04bsaxre#g6x4</a> 密码:g6x4</p><p>准备一个U盘至少8GB，格式化为FAT32分区，把「Windows 10系统镜像」解压到U盘根目录，把EFI_SHELL64.zip解压到U盘根目录。开机按F2进入bios，在EXIT菜单中有选项「Launch EFI shell from filesystem device」，按↓方向键选择并回车。启动EFI shell后，会有提示：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fs0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :..........</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fs1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :..........</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fs<code>数字</code>：指的就是硬盘上的FAT32分区，类似于windows下的<code>c:</code>，<code>d:</code>盘符。</p><p>在<code>Shell&gt;</code>光标后，输入<code>fs0:</code>回车，进入该分区。命令<code>ls</code>可列出当前目录下的文件，如果能看到win10安装文件，就对了，如果没有，则切换为其它分区如<code>fs1:</code>，直到看到win10安装文件，再输入<code>bootmgfw.efi</code>，启动win10安装程序。</p>`,24)]))}const r=o(d,[["render",n],["__file","ins-ssd-and-win10-for-asus-fx-pro.html.vue"]]),p=JSON.parse('{"path":"/windows/ins-ssd-and-win10-for-asus-fx-pro.html","title":"为华硕 FX - Pro 安装固态硬盘和 Windows 10 系统","lang":"zh-CN","frontmatter":{"title":"为华硕 FX - Pro 安装固态硬盘和 Windows 10 系统","date":"2021-08-12T00:00:00.000Z","icon":"fas fa-laptop","order":1,"category":["Windows"],"tag":["SSD"],"description":"安装固态硬盘(SSD) 暑假期间有小朋友的华硕(ASUS)FX - Pro笔记本启动慢，想请我帮忙重装下系统。 查看FX - Pro外观时，发现后盖上写着「M.2 2280 SLOT SUPPORT SATA SSD ONLY」，大意仅支持M.2 2280 SATA接口的固态硬盘；致电华硕官方，确认其主板固态硬盘接口类型为M.2，建议机主某东购买「三星...","head":[["meta",{"property":"og:url","content":"https:////211777.xyz/windows/ins-ssd-and-win10-for-asus-fx-pro.html"}],["meta",{"property":"og:site_name","content":"诗往哥的博客"}],["meta",{"property":"og:title","content":"为华硕 FX - Pro 安装固态硬盘和 Windows 10 系统"}],["meta",{"property":"og:description","content":"安装固态硬盘(SSD) 暑假期间有小朋友的华硕(ASUS)FX - Pro笔记本启动慢，想请我帮忙重装下系统。 查看FX - Pro外观时，发现后盖上写着「M.2 2280 SLOT SUPPORT SATA SSD ONLY」，大意仅支持M.2 2280 SATA接口的固态硬盘；致电华硕官方，确认其主板固态硬盘接口类型为M.2，建议机主某东购买「三星..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-07T09:25:18.000Z"}],["meta",{"property":"article:tag","content":"SSD"}],["meta",{"property":"article:published_time","content":"2021-08-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-07T09:25:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"为华硕 FX - Pro 安装固态硬盘和 Windows 10 系统\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-08-12T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-07T09:25:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"诗往哥\\",\\"url\\":\\"/intro.html\\"}]}"]]},"headers":[{"level":2,"title":"安装固态硬盘(SSD)","slug":"安装固态硬盘-ssd","link":"#安装固态硬盘-ssd","children":[]},{"level":2,"title":"设置 Bios","slug":"设置-bios","link":"#设置-bios","children":[]},{"level":2,"title":"安装系统","slug":"安装系统","link":"#安装系统","children":[{"level":3,"title":"GUID 分区","slug":"guid-分区","link":"#guid-分区","children":[]},{"level":3,"title":"Setup 安装","slug":"setup-安装","link":"#setup-安装","children":[]},{"level":3,"title":"WinNTSetup 安装","slug":"winntsetup-安装","link":"#winntsetup-安装","children":[]},{"level":3,"title":"EFI shell 安装","slug":"efi-shell-安装","link":"#efi-shell-安装","children":[]}]}],"git":{"createdTime":1735868601000,"updatedTime":1736241918000,"contributors":[{"name":"lss53","username":"lss53","email":"2720626504@qq.com","commits":2,"url":"https://github.com/lss53"}]},"readingTime":{"minutes":4.08,"words":1225},"filePathRelative":"windows/ins-ssd-and-win10-for-asus-fx-pro.md","localizedDate":"2021年8月12日","excerpt":"<h2>安装固态硬盘(SSD)</h2>\\n<p>暑假期间有小朋友的华硕(ASUS)FX - Pro笔记本启动慢，想请我帮忙重装下系统。</p>\\n<p>查看FX - Pro外观时，发现后盖上写着「M.2 2280 SLOT SUPPORT SATA SSD ONLY」，大意仅支持M.2 2280 SATA接口的固态硬盘；致电华硕官方，确认其主板固态硬盘接口类型为M.2，建议机主某东购买「三星（SAMSUNG） 860 EVO 250G M.2 2280 SATA协议固态硬盘」和某宝购买<code>M.2螺丝</code>。</p>\\n<p>固态硬盘和螺丝到货后，卸下FX - Pro后盖中间的两颗螺丝，取下盖板，主板固态硬盘插槽插上固态硬盘并用M.2螺丝将其固定，卡好后盖，拧紧后盖螺丝。</p>","autoDesc":true}');export{r as comp,p as data};
