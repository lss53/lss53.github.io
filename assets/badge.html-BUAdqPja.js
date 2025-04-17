import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a,o as i}from"./app-DfbzlcnA.js";const d={};function o(n,t){return i(),l("div",null,t[0]||(t[0]=[a('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><ul><li>静态徽章（下图）可以用<code>Shields.io</code>制作。</li></ul><figure><img src="https://img.shields.io/badge/build-passing-brightgreen" alt="静态徽章" tabindex="0" loading="lazy"><figcaption>静态徽章</figcaption></figure><ul><li><p>打开 <a href="https://shields.io/badges" target="_blank" rel="noopener noreferrer">Shields.io</a>，找到网页右侧的<code>badgeContent</code>— path，输入 <code>build-passing-brightgreen</code> （<a href="#%E8%B7%AF%E5%BE%84%E5%8F%82%E6%95%B0">路径参数</a>），点<code>Execute</code>，等待<code>静态徽章</code>出现。</p></li><li><p>复制你需要的格式代码（URL/Markdown/rSt/AsciiDOC/HTML）。</p></li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>什么是路径参数呢？</p></div><h2 id="路径参数" tabindex="-1"><a class="header-anchor" href="#路径参数"><span>路径参数</span></a></h2><ul><li><code>路径参数</code>是必需的，由label(标签)、message(消息)（可选）和color(颜色)组成，中间用<code>英文破折号</code>分隔，例子见<a href="#%E5%89%8D%E8%A8%80">前言</a>。</li></ul><table><thead><tr><th style="text-align:left;">路径参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">例子</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">label(标签)</td><td style="text-align:left;">字符串</td><td style="text-align:left;">build</td><td style="text-align:left;">左侧文本</td></tr><tr><td style="text-align:left;">message(消息)（可选）</td><td style="text-align:left;">字符串</td><td style="text-align:left;">passing</td><td style="text-align:left;">右侧字符</td></tr><tr><td style="text-align:left;">color(颜色)</td><td style="text-align:left;">字符串</td><td style="text-align:left;">brightgreen</td><td style="text-align:left;">右侧部分的背景颜色</td></tr></tbody></table><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>进阶玩法需要了解<a href="#%E6%9F%A5%E8%AF%A2%E5%8F%82%E6%95%B0">查询参数</a>（可选）。 <a href="https://shields.io/badges" target="_blank" rel="noopener noreferrer">Shields.io</a>网页上需要展开 <code>+ Show optional parameters</code> 按需要填写，<br> 一般只需要选择<code>style</code>，填写<code>logo</code>、<code>logoColor</code>、<code>labelColor</code>、<code>color</code>。</p></div><h2 id="查询参数" tabindex="-1"><a class="header-anchor" href="#查询参数"><span>查询参数</span></a></h2><table><thead><tr><th style="text-align:left;">查询参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">例子</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">style</td><td style="text-align:left;">字符串</td><td style="text-align:left;">flat</td><td style="text-align:left;">徽章徽章吃可选值：flat、flat-square、plastic、for-the-badge、social。如果未指定，则默认为 “flat”。</td></tr><tr><td style="text-align:left;">logo</td><td style="text-align:left;">字符串</td><td style="text-align:left;">appveyor</td><td style="text-align:left;">来自 simple-icons 的 icon slug，可单击 <a href="https://simpleicons.org/" target="_blank" rel="noopener noreferrer">simple-icons</a>上面图标标题复制 slug。</td></tr><tr><td style="text-align:left;">logoColor</td><td style="text-align:left;">字符串</td><td style="text-align:left;">violet</td><td style="text-align:left;">徽标的颜色（支持 hex、rgb、rgba、hsl、hsla 和 css 命名颜色）。支持简单图标 logo，但不支持自定义 logo。</td></tr><tr><td style="text-align:left;">logoSize</td><td style="text-align:left;">字符串</td><td style="text-align:left;">auto</td><td style="text-align:left;">通过设置为auto使图标自适应地调整大小。对于一些较宽的 logo（如 amd 和 amg ）很有用。支持简单图标 logo，但不支持自定义 logo。</td></tr><tr><td style="text-align:left;">label</td><td style="text-align:left;">字符串</td><td style="text-align:left;">healthiness</td><td style="text-align:left;">覆盖默认的左侧文本（空格或特殊字符需要 <a href="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding" target="_blank" rel="noopener noreferrer">URL 编码</a>）。</td></tr><tr><td style="text-align:left;">labelColor</td><td style="text-align:left;">字符串</td><td style="text-align:left;">abcdef</td><td style="text-align:left;">左侧部分的背景颜色（支持十六进制、rgb、rgba、hsl、hsla 和 css 命名颜色）。</td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;">字符串</td><td style="text-align:left;">fedcba</td><td style="text-align:left;">右侧部分的背景颜色（支持十六进制、rgb、rgba、hsl、hsla 和 css 命名颜色）。</td></tr><tr><td style="text-align:left;">cacheSecond</td><td style="text-align:left;">字符串</td><td style="text-align:left;">3600</td><td style="text-align:left;">HTTP 缓存生命周期（应用规则以基于每个徽章推断默认值，指定的任何低于默认值的值都将被忽略），单位为秒。</td></tr><tr><td style="text-align:left;">link</td><td style="text-align:left;">字符串</td><td style="text-align:left;"><code>&lt;object&gt;&lt;img&gt;</code></td><td style="text-align:left;">指定单击徽章的左侧/右侧应执行的操作。请注意，这仅在将徽章集成到 HTML 标记中时有效，而不适用于标记或标记语言。</td></tr></tbody></table>',11)]))}const g=e(d,[["render",o],["__file","badge.html.vue"]]),c=JSON.parse('{"path":"/website/badge.html","title":"静态徽章","lang":"zh-CN","frontmatter":{"title":"静态徽章","date":"2024-12-24T00:00:00.000Z","icon":"fas fa-shield","order":2,"category":["建站"],"tag":["徽章"],"description":"前言 静态徽章（下图）可以用Shields.io制作。 静态徽章静态徽章 打开 Shields.io，找到网页右侧的badgeContent— path，输入 build-passing-brightgreen （路径参数），点Execute，等待静态徽章出现。 复制你需要的格式代码（URL/Markdown/rSt/AsciiDOC/HTML）。 相...","head":[["meta",{"property":"og:url","content":"https:////211777.xyz/website/badge.html"}],["meta",{"property":"og:site_name","content":"诗往哥的博客"}],["meta",{"property":"og:title","content":"静态徽章"}],["meta",{"property":"og:description","content":"前言 静态徽章（下图）可以用Shields.io制作。 静态徽章静态徽章 打开 Shields.io，找到网页右侧的badgeContent— path，输入 build-passing-brightgreen （路径参数），点Execute，等待静态徽章出现。 复制你需要的格式代码（URL/Markdown/rSt/AsciiDOC/HTML）。 相..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.shields.io/badge/build-passing-brightgreen"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-12T02:10:00.000Z"}],["meta",{"property":"article:tag","content":"徽章"}],["meta",{"property":"article:published_time","content":"2024-12-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-12T02:10:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"静态徽章\\",\\"image\\":[\\"https://img.shields.io/badge/build-passing-brightgreen\\"],\\"datePublished\\":\\"2024-12-24T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-12T02:10:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"诗往哥\\",\\"url\\":\\"/intro.html\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"路径参数","slug":"路径参数","link":"#路径参数","children":[]},{"level":2,"title":"查询参数","slug":"查询参数","link":"#查询参数","children":[]}],"git":{"createdTime":1735107913000,"updatedTime":1736647800000,"contributors":[{"name":"lss53","username":"lss53","email":"2720626504@qq.com","commits":11,"url":"https://github.com/lss53"}]},"readingTime":{"minutes":2.01,"words":602},"filePathRelative":"website/badge.md","localizedDate":"2024年12月24日","excerpt":"<h2>前言</h2>\\n<ul>\\n<li>静态徽章（下图）可以用<code>Shields.io</code>制作。</li>\\n</ul>\\n<figure><img src=\\"https://img.shields.io/badge/build-passing-brightgreen\\" alt=\\"静态徽章\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>静态徽章</figcaption></figure>\\n<ul>\\n<li>\\n<p>打开 <a href=\\"https://shields.io/badges\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Shields.io</a>，找到网页右侧的<code>badgeContent</code>— path，输入 <code>build-passing-brightgreen</code> （<a href=\\"#%E8%B7%AF%E5%BE%84%E5%8F%82%E6%95%B0\\">路径参数</a>），点<code>Execute</code>，等待<code>静态徽章</code>出现。</p>\\n</li>\\n<li>\\n<p>复制你需要的格式代码（URL/Markdown/rSt/AsciiDOC/HTML）。</p>\\n</li>\\n</ul>","autoDesc":true}');export{g as comp,c as data};
