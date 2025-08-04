import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-DXQE3D4X.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h2 id="文档概述" tabindex="-1"><a class="header-anchor" href="#文档概述"><span>文档概述</span></a></h2><p>本技术文档详细介绍了利用AI图像生成和PPT宏自动化制作微信公众号双封面的全流程解决方案。系统支持1283×383像素的封面生成，完美适配公众号文章内显示（900×383）和分享卡片（383×383）两种场景。</p><h2 id="ai图像生成流程" tabindex="-1"><a class="header-anchor" href="#ai图像生成流程"><span>AI图像生成流程</span></a></h2><h3 id="图像生成指令模板" tabindex="-1"><a class="header-anchor" href="#图像生成指令模板"><span>图像生成指令模板</span></a></h3><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-txt"><span class="line"><span>你是一个图像生成助手，请根据我的简单描述，想象并详细描述两幅关联主图和缩略图，再将你的详细描述翻译成英文，并插入到以下链接的{prompt}部分：</span></span>
<span class="line"><span>![cover-wide-image]https://image.pollinations.ai/prompt/{prompt}?width=900&amp;height=383&amp;enhance=true&amp;private=true</span></span>
<span class="line"><span>![cover-square-image]https://image.pollinations.ai/prompt/{prompt}?width=383&amp;height=383&amp;enhance=true&amp;private=true</span></span>
<span class="line"><span>描述：[在此输入场景描述]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输入示例" tabindex="-1"><a class="header-anchor" href="#输入示例"><span>输入示例</span></a></h3><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-txt"><span class="line"><span>描述：未来科技实验室场景，全息操作界面悬浮空中，机械臂正在处理发光的DNA链，冷蓝色调</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h3><ol><li><p>在DeepSeek或类似AI平台粘贴上述模板</p></li><li><p>替换[在此输入场景描述]为你的创意</p></li><li><p>复制返回的两个图片链接</p></li><li><p>在浏览器打开链接下载图片：</p><ul><li><p>900×383 → 保存为cover-wide.jpg</p></li><li><p>383×383 → 保存为cover-square.jpg</p></li></ul></li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>也可以用coze写个流，或者用豆包/gemini等的图像生成功能。</p></div><h2 id="ppt自动化处理系统" tabindex="-1"><a class="header-anchor" href="#ppt自动化处理系统"><span>PPT自动化处理系统</span></a></h2><h3 id="系统要求" tabindex="-1"><a class="header-anchor" href="#系统要求"><span>系统要求</span></a></h3><table><thead><tr><th>要求</th><th>组件</th></tr></thead><tbody><tr><td>Windows 10/11</td><td>操作系统</td></tr><tr><td>2010或更高版本</td><td>PowerPoint</td></tr><tr><td>4.7.2或更高</td><td>.NET框架</td></tr><tr><td>启用宏执行</td><td>安全设置</td></tr></tbody></table><h3 id="宏安装流程" tabindex="-1"><a class="header-anchor" href="#宏安装流程"><span>宏安装流程</span></a></h3><h4 id="创建启用宏的演示文稿" tabindex="-1"><a class="header-anchor" href="#创建启用宏的演示文稿"><span>创建启用宏的演示文稿</span></a></h4><ul><li>打开PowerPoint → 新建空白演示文稿</li><li>保存为：<code>启用宏的演示文稿 (*.pptm)</code> 格式（建议命名：公众号封面生成器.pptm）</li></ul><h4 id="打开vba编辑器" tabindex="-1"><a class="header-anchor" href="#打开vba编辑器"><span>打开VBA编辑器</span></a></h4><ul><li><code>Alt + F11</code> 打开VBA编辑器</li></ul><h4 id="插入模块" tabindex="-1"><a class="header-anchor" href="#插入模块"><span>插入模块</span></a></h4><ul><li>右键点击左侧&quot;VBAProject (演示文稿名称)&quot; → 插入 → 模块</li><li>将下面的<strong>完整VBA代码</strong>粘贴到空白模块中</li></ul><details class="hint-container details"><summary>完整VBA代码</summary><div class="language-basic line-numbers-mode" data-highlighter="shiki" data-ext="basic" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-basic"><span class="line"><span>Sub MergeCovers()</span></span>
<span class="line"><span>    &#39; 设置幻灯片尺寸 (1283×383 像素)</span></span>
<span class="line"><span>    Const PointsPerInch As Single = 72</span></span>
<span class="line"><span>    Const PixelsPerInch As Single = 96</span></span>
<span class="line"><span>    Const ScaleFactor As Single = PointsPerInch / PixelsPerInch</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    With ActivePresentation.PageSetup</span></span>
<span class="line"><span>        .SlideWidth = 1283 * ScaleFactor</span></span>
<span class="line"><span>        .SlideHeight = 383 * ScaleFactor</span></span>
<span class="line"><span>    End With</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39; 创建文件选择对话框</span></span>
<span class="line"><span>    Dim inputDialog As FileDialog</span></span>
<span class="line"><span>    Set inputDialog = Application.FileDialog(msoFileDialogFilePicker)</span></span>
<span class="line"><span>    Dim wideImagePath As String, squareImagePath As String</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39; 选择横幅图</span></span>
<span class="line"><span>    With inputDialog</span></span>
<span class="line"><span>        .Title = &quot;选择横幅图 (900×383)&quot;</span></span>
<span class="line"><span>        .Filters.Clear</span></span>
<span class="line"><span>        .Filters.Add &quot;图片文件&quot;, &quot;*.jpg;*.jpeg;*.png&quot;</span></span>
<span class="line"><span>        If .Show &lt;&gt; -1 Then Exit Sub</span></span>
<span class="line"><span>        wideImagePath = .SelectedItems(1)</span></span>
<span class="line"><span>    End With</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39; 选择方形图</span></span>
<span class="line"><span>    With inputDialog</span></span>
<span class="line"><span>        .Title = &quot;选择方形图 (383×383)&quot;</span></span>
<span class="line"><span>        .Filters.Clear</span></span>
<span class="line"><span>        .Filters.Add &quot;图片文件&quot;, &quot;*.jpg;*.jpeg;*.png&quot;</span></span>
<span class="line"><span>        If .Show &lt;&gt; -1 Then Exit Sub</span></span>
<span class="line"><span>        squareImagePath = .SelectedItems(1)</span></span>
<span class="line"><span>    End With</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39; 清除幻灯片内容</span></span>
<span class="line"><span>    On Error Resume Next</span></span>
<span class="line"><span>    With ActivePresentation.Slides(1)</span></span>
<span class="line"><span>        .Shapes.SelectAll</span></span>
<span class="line"><span>        Selection.Delete</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39; 插入横幅图</span></span>
<span class="line"><span>        Dim wideImage As Shape</span></span>
<span class="line"><span>        Set wideImage = .Shapes.AddPicture( _</span></span>
<span class="line"><span>            FileName:=wideImagePath, _</span></span>
<span class="line"><span>            LinkToFile:=msoFalse, _</span></span>
<span class="line"><span>            SaveWithDocument:=msoTrue, _</span></span>
<span class="line"><span>            Left:=0, _</span></span>
<span class="line"><span>            Top:=0, _</span></span>
<span class="line"><span>            Width:=900 * ScaleFactor, _</span></span>
<span class="line"><span>            Height:=383 * ScaleFactor)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39; 插入方形图</span></span>
<span class="line"><span>        Dim squareImage As Shape</span></span>
<span class="line"><span>        Set squareImage = .Shapes.AddPicture( _</span></span>
<span class="line"><span>            FileName:=squareImagePath, _</span></span>
<span class="line"><span>            LinkToFile:=msoFalse, _</span></span>
<span class="line"><span>            SaveWithDocument:=msoTrue, _</span></span>
<span class="line"><span>            Left:=wideImage.Width, _</span></span>
<span class="line"><span>            Top:=0, _</span></span>
<span class="line"><span>            Width:=383 * ScaleFactor, _</span></span>
<span class="line"><span>            Height:=383 * ScaleFactor)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        &#39; 组合图片</span></span>
<span class="line"><span>        .Shapes.Range(Array(wideImage.Name, squareImage.Name)).Group</span></span>
<span class="line"><span>    End With</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &#39; 保存对话框设置</span></span>
<span class="line"><span>    Dim saveDialog As FileDialog</span></span>
<span class="line"><span>    Set saveDialog = Application.FileDialog(msoFileDialogSaveAs)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    With saveDialog</span></span>
<span class="line"><span>        .Title = &quot;保存公众号双封面&quot;</span></span>
<span class="line"><span>        .InitialFileName = &quot;公众号封面&quot;</span></span>
<span class="line"><span>        .FilterIndex = 1</span></span>
<span class="line"><span>        .Filters.Clear</span></span>
<span class="line"><span>        .Filters.Add &quot;PNG 图片&quot;, &quot;*.png&quot;</span></span>
<span class="line"><span>        .Filters.Add &quot;JPEG 图片&quot;, &quot;*.jpg&quot;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        If .Show = -1 Then</span></span>
<span class="line"><span>            Dim fullPath As String</span></span>
<span class="line"><span>            fullPath = .SelectedItems(1)</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>            &#39; 扩展名处理</span></span>
<span class="line"><span>            If Right(fullPath, 4) &lt;&gt; &quot;.png&quot; And Right(fullPath, 4) &lt;&gt; &quot;.jpg&quot; Then</span></span>
<span class="line"><span>                fullPath = fullPath &amp; &quot;.png&quot;</span></span>
<span class="line"><span>            End If</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>            &#39; 导出图片</span></span>
<span class="line"><span>            ActivePresentation.Slides(1).Export fullPath, IIf(Right(fullPath, 4) = &quot;.jpg&quot;, &quot;JPG&quot;, &quot;PNG&quot;)</span></span>
<span class="line"><span>            MsgBox &quot;封面已保存到：&quot; &amp; vbCrLf &amp; fullPath, vbInformation, &quot;操作成功&quot;</span></span>
<span class="line"><span>        Else</span></span>
<span class="line"><span>            MsgBox &quot;操作已取消&quot;, vbExclamation, &quot;取消保存&quot;</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>    End With</span></span>
<span class="line"><span>End Sub</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h4 id="保存并关闭编辑器" tabindex="-1"><a class="header-anchor" href="#保存并关闭编辑器"><span>保存并关闭编辑器</span></a></h4><ul><li>返回PPT → 保存文件 → 关闭VBA编辑器</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>提示：可将此宏添加到PPT快速访问工具栏</li><li>方法：文件→选项→快速访问工具栏→选择&quot;宏&quot;→添加→确定</li></ul></div><h3 id="双封面生成操作" tabindex="-1"><a class="header-anchor" href="#双封面生成操作"><span>双封面生成操作</span></a></h3><h4 id="打开宏对话框" tabindex="-1"><a class="header-anchor" href="#打开宏对话框"><span>打开宏对话框</span></a></h4><ul><li><code>Alt + F8</code> → 选择&quot;MergeCovers&quot;宏 → 点击&quot;运行&quot;</li></ul><h4 id="按提示选择图片" tabindex="-1"><a class="header-anchor" href="#按提示选择图片"><span>按提示选择图片</span></a></h4><ul><li>第一步：选择900×383横幅图 → 点击&quot;打开&quot;</li><li>第二步：选择383×383方形图 → 点击&quot;打开&quot;</li></ul><h4 id="保存合成图" tabindex="-1"><a class="header-anchor" href="#保存合成图"><span>保存合成图</span></a></h4><ul><li>弹出保存对话框 → 选择存储位置</li><li>输入文件名（默认扩展名.png自动添加）</li><li>点击&quot;保存&quot;</li></ul><h4 id="完成提示" tabindex="-1"><a class="header-anchor" href="#完成提示"><span>完成提示</span></a></h4><ul><li>出现&quot;双封面已成功保存&quot;的提示框 → 点击&quot;确定&quot;</li></ul><h2 id="文件格式建议" tabindex="-1"><a class="header-anchor" href="#文件格式建议"><span>文件格式建议</span></a></h2><table><thead><tr><th>用途</th><th>推荐格式</th><th>特点</th></tr></thead><tbody><tr><td>普通封面</td><td>PNG</td><td>无损质量，支持透明度</td></tr><tr><td>带照片封面</td><td>JPG</td><td>文件较小，加载快</td></tr><tr><td>带文字封面</td><td>PNG</td><td>文字边缘更清晰</td></tr></tbody></table><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><h3 id="文件命名规范" tabindex="-1"><a class="header-anchor" href="#文件命名规范"><span>文件命名规范</span></a></h3><ul><li><code>日期_文章标题_封面</code>（例：20231120_活动预告_封面）</li><li>避免使用空格和特殊符号</li></ul><h3 id="文件存储建议" tabindex="-1"><a class="header-anchor" href="#文件存储建议"><span>文件存储建议</span></a></h3><ul><li>创建专用文件夹：<code>微信封面素材</code></li><li>按年月建立子文件夹</li></ul><h3 id="图片处理技巧" tabindex="-1"><a class="header-anchor" href="#图片处理技巧"><span>图片处理技巧</span></a></h3><ul><li>图像压缩工具（如<a href="https://tinify.cn" target="_blank" rel="noopener noreferrer">TinyPNG</a>）可减小文件体积</li><li>公众号封面文件大小应&lt;2MB</li></ul>`,42)]))}const c=n(l,[["render",p]]),h=JSON.parse('{"path":"/guide/wechat-articles-thumbnail.html","title":"微信公众号推文双封面图制作文档","lang":"zh-CN","frontmatter":{"title":"微信公众号推文双封面图制作文档","date":"2025-06-11T00:00:00.000Z","icon":"fa-brands fa-weixin","order":5,"category":["攻略"],"tag":["微信文章封面图"],"description":"文档概述 本技术文档详细介绍了利用AI图像生成和PPT宏自动化制作微信公众号双封面的全流程解决方案。系统支持1283×383像素的封面生成，完美适配公众号文章内显示（900×383）和分享卡片（383×383）两种场景。 AI图像生成流程 图像生成指令模板 输入示例 操作步骤 在DeepSeek或类似AI平台粘贴上述模板 替换[在此输入场景描述]为你的...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"微信公众号推文双封面图制作文档\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-06-11T00:00:00.000Z\\",\\"dateModified\\":\\"2025-06-13T09:25:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"诗往哥\\",\\"url\\":\\"/intro.html\\"}]}"],["meta",{"property":"og:url","content":"https:////211777.xyz/guide/wechat-articles-thumbnail.html"}],["meta",{"property":"og:site_name","content":"诗往哥的博客"}],["meta",{"property":"og:title","content":"微信公众号推文双封面图制作文档"}],["meta",{"property":"og:description","content":"文档概述 本技术文档详细介绍了利用AI图像生成和PPT宏自动化制作微信公众号双封面的全流程解决方案。系统支持1283×383像素的封面生成，完美适配公众号文章内显示（900×383）和分享卡片（383×383）两种场景。 AI图像生成流程 图像生成指令模板 输入示例 操作步骤 在DeepSeek或类似AI平台粘贴上述模板 替换[在此输入场景描述]为你的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-13T09:25:13.000Z"}],["meta",{"property":"article:tag","content":"微信文章封面图"}],["meta",{"property":"article:published_time","content":"2025-06-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-06-13T09:25:13.000Z"}]]},"git":{"createdTime":1749633438000,"updatedTime":1749806713000,"contributors":[{"name":"lss53","username":"lss53","email":"2720626504@qq.com","commits":4,"url":"https://github.com/lss53"}]},"readingTime":{"minutes":4.03,"words":1209},"filePathRelative":"guide/wechat-articles-thumbnail.md","excerpt":"<h2>文档概述</h2>\\n<p>本技术文档详细介绍了利用AI图像生成和PPT宏自动化制作微信公众号双封面的全流程解决方案。系统支持1283×383像素的封面生成，完美适配公众号文章内显示（900×383）和分享卡片（383×383）两种场景。</p>\\n<h2>AI图像生成流程</h2>\\n<h3>图像生成指令模板</h3>\\n<div class=\\"language-txt line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"txt\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code class=\\"language-txt\\"><span class=\\"line\\"><span>你是一个图像生成助手，请根据我的简单描述，想象并详细描述两幅关联主图和缩略图，再将你的详细描述翻译成英文，并插入到以下链接的{prompt}部分：</span></span>\\n<span class=\\"line\\"><span>![cover-wide-image]https://image.pollinations.ai/prompt/{prompt}?width=900&amp;height=383&amp;enhance=true&amp;private=true</span></span>\\n<span class=\\"line\\"><span>![cover-square-image]https://image.pollinations.ai/prompt/{prompt}?width=383&amp;height=383&amp;enhance=true&amp;private=true</span></span>\\n<span class=\\"line\\"><span>描述：[在此输入场景描述]</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{c as comp,h as data};
