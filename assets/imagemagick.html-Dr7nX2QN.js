import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as n}from"./app-DfbzlcnA.js";const t={};function l(p,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h3 id="获取专业svg图标" tabindex="-1"><a class="header-anchor" href="#获取专业svg图标"><span>获取专业SVG图标</span></a></h3><ol><li><p>打开网站<a href="https://fontawesome.com/search?o=r&amp;m=free" target="_blank" rel="noopener noreferrer">Font Awesome</a>搜索关键词（如 &quot;download&quot;、&quot;cloud&quot;）。</p></li><li><p>筛选 Free 标签，找到心仪图标。</p></li><li><p>点击图标 → 选择 <code>Download SVG file</code> 按钮。</p></li></ol><h3 id="定制专属svg图标" tabindex="-1"><a class="header-anchor" href="#定制专属svg图标"><span>定制专属SVG图标</span></a></h3><ol><li><p>用<code>记事本/VSCode</code>等工具打开下载的 <code>xxx.svg</code> 文件。</p></li><li><p>把<code>步骤1</code>中的源代码喂给 <a href="https://www.deepseek.com" target="_blank" rel="noopener noreferrer">DeepSeek</a>，再写上你的修改要求，提交等待生成。</p></li><li><p>粘贴<code>步骤2</code>DeepSeek生成的源代码，另存为 <code>icon.svg</code> 。</p></li></ol><h3 id="生成多尺寸ico文件" tabindex="-1"><a class="header-anchor" href="#生成多尺寸ico文件"><span>生成多尺寸ICO文件</span></a></h3><ol><li><p>下载并安装<a href="https://imagemagick.org/script/download.php#windows" target="_blank" rel="noopener noreferrer">Windows 二进制文件版本</a>。</p></li><li><p>在终端中执行下面的命令（需先cd到文件目录）</p></li></ol><div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">rem </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">. 生成各尺寸 PNG</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">magick icon.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">svg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">resize</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 256x256 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">256.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">png  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">magick icon.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">svg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">resize</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 128x128 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">128.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">png  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">magick icon.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">svg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">resize</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 64x64 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">64.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">png  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">magick icon.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">svg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">resize</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 48x48 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">48.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">png  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">magick icon.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">svg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">resize</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 32x32 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">32.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">png  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">magick icon.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">svg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">resize</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 16x16 </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">16.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">png  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">rem </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">. 合并为 ICO</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">magick </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">256.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">png </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">128.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">png </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">64.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">png </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">48.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">png </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">32.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">png </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">16.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">png</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">compress</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> none app.ico</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>命令行处理参数 <a href="https://imagemagick.org/script/command-line-processing.php" target="_blank" rel="noopener noreferrer">https://imagemagick.org/script/command-line-processing.php</a> 。</li></ol>`,8)]))}const r=s(t,[["render",l],["__file","imagemagick.html.vue"]]),o=JSON.parse('{"path":"/software/imagemagick.html","title":"ImageMagick：一款 GitHub 上星标 10k+ 的编辑和处理数字图像软件套件","lang":"zh-CN","frontmatter":{"title":"ImageMagick：一款 GitHub 上星标 10k+ 的编辑和处理数字图像软件套件","shortTitle":"ImageMagick","date":"2025-04-17T00:00:00.000Z","icon":"fa-solid fa-image","order":7,"category":["Software"],"tag":["ImageMagick","图像软件"],"description":"获取专业SVG图标 打开网站Font Awesome搜索关键词（如 \\"download\\"、\\"cloud\\"）。 筛选 Free 标签，找到心仪图标。 点击图标 → 选择 Download SVG file 按钮。 定制专属SVG图标 用记事本/VSCode等工具打开下载的 xxx.svg 文件。 把步骤1中的源代码喂给 DeepSeek，再写上你的修改要...","head":[["meta",{"property":"og:url","content":"https:////211777.xyz/software/imagemagick.html"}],["meta",{"property":"og:site_name","content":"诗往哥的博客"}],["meta",{"property":"og:title","content":"ImageMagick：一款 GitHub 上星标 10k+ 的编辑和处理数字图像软件套件"}],["meta",{"property":"og:description","content":"获取专业SVG图标 打开网站Font Awesome搜索关键词（如 \\"download\\"、\\"cloud\\"）。 筛选 Free 标签，找到心仪图标。 点击图标 → 选择 Download SVG file 按钮。 定制专属SVG图标 用记事本/VSCode等工具打开下载的 xxx.svg 文件。 把步骤1中的源代码喂给 DeepSeek，再写上你的修改要..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-17T02:33:04.000Z"}],["meta",{"property":"article:tag","content":"ImageMagick"}],["meta",{"property":"article:tag","content":"图像软件"}],["meta",{"property":"article:published_time","content":"2025-04-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-17T02:33:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ImageMagick：一款 GitHub 上星标 10k+ 的编辑和处理数字图像软件套件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-04-17T00:00:00.000Z\\",\\"dateModified\\":\\"2025-04-17T02:33:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"诗往哥\\",\\"url\\":\\"/intro.html\\"}]}"]]},"headers":[{"level":3,"title":"获取专业SVG图标","slug":"获取专业svg图标","link":"#获取专业svg图标","children":[]},{"level":3,"title":"定制专属SVG图标","slug":"定制专属svg图标","link":"#定制专属svg图标","children":[]},{"level":3,"title":"生成多尺寸ICO文件","slug":"生成多尺寸ico文件","link":"#生成多尺寸ico文件","children":[]}],"git":{"createdTime":1744856615000,"updatedTime":1744857184000,"contributors":[{"name":"lss53","username":"lss53","email":"2720626504@qq.com","commits":2,"url":"https://github.com/lss53"}]},"readingTime":{"minutes":0.93,"words":279},"filePathRelative":"software/imagemagick.md","localizedDate":"2025年4月17日","excerpt":"<h3>获取专业SVG图标</h3>\\n<ol>\\n<li>\\n<p>打开网站<a href=\\"https://fontawesome.com/search?o=r&amp;m=free\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Font Awesome</a>搜索关键词（如 \\"download\\"、\\"cloud\\"）。</p>\\n</li>\\n<li>\\n<p>筛选 Free 标签，找到心仪图标。</p>\\n</li>\\n<li>\\n<p>点击图标 → 选择 <code>Download SVG file</code> 按钮。</p>\\n</li>\\n</ol>\\n<h3>定制专属SVG图标</h3>","autoDesc":true}');export{r as comp,o as data};
