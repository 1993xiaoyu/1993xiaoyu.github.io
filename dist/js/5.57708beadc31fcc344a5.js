webpackJsonp([5],{274:function(e,r){e.exports='<hr />\n<h1 id="codemirror">编辑器CodeMirror总结</h1>\n<p>英文太难了，真的太难了（哭），最近使用CodeMirror比较多，所以做如下总结，方便以后查看</p>\n<p>第一步：官网<a href="http://codemirror.net/">下载CodeMirror</a>文件<br>\n<a href="http://codemirror.net/">下载？戳我呀！</a>\n（快速使用：查看下载中demo的文件夹，不看文档也可以快速实现你想要的效果）</p>\n<p>第二步：在使用前必须先引用</p>\n<pre><code>&lt;link rel="stylesheet" href="codemirror-5.12/lib/codemirror.css"&gt;\n&lt;script src="codemirror-5.12/lib/codemirror.js"&gt;&lt;/script&gt;\n</code></pre>\n<p>第三步：根据使用需求引用对应的css和js\n譬如主题：</p>\n<pre><code>&lt;link rel="stylesheet" href="codemirror-5.12/theme/seti.css"&gt;\n</code></pre>\n<p>譬如sql自动补全:</p>\n<pre><code>&lt;link rel="stylesheet" href="codemirror-5.12/addon/hint/show-hint.css"&gt;\n&lt;script src="codemirror-5.12/addon/hint/show-hint.js"&gt;&lt;/script&gt;\n&lt;script src="codemirror-5.12/addon/hint/sql-hint.js"&gt;&lt;/script&gt;\n&lt;script src="codemirror-5.12/mode/sql/sql.js"&gt;&lt;/script&gt;\n</code></pre>\n<p>第四步：构造editor，根据需要对CodeMirror进行参数配置，以下只列出常用参数</p>\n<pre><code>var createSql = $(\'[data-mark="insert_sql"]\')\neditor = CodeMirror.fromTextArea(createSql[0], {\n   &lt;!-- 以什么格式进行高亮 --&gt;\n   mode: "text/x-sql",\n   &lt;!-- 主题 --&gt;\n   theme: \'seti\',\n   &lt;!-- 是否代码折叠 --&gt;\n   lineWrapping: true,\n\n   &lt;!-- 是否在编辑器左侧显示行号 --&gt;\n   lineNumbers: true,\n   &lt;!-- 行号从哪个数开始计数，默认为1 --&gt;\n   firstLineNumber: 1,\n\n   &lt;!-- tab字符的宽度，默认为4 --&gt;\n   indentWithTabs: true,\n   &lt;!-- 自动缩进，设置是否根据上下文自动缩进,默认为true--&gt;\n   smartIndent: true,\n\n   &lt;!-- 括号匹配 --&gt;\n   matchBrackets : true,\n   &lt;!-- 是否在初始化时自动获取焦点 --&gt;\n   autofocus: true,\n   &lt;!-- 智能提示  --&gt;\n   extraKeys: {"Ctrl-Space": "autocomplete"},\n   &lt;!-- 编辑器是否只读,并且不能获得焦点 --&gt;\n   readOnly:\'nocursor\',\n   &lt;!-- 在选择时是否显示光标，默认为false --&gt;\n   showCursorWhenSelecting:true\n\n})\n</code></pre>\n<p>第五步：CodeMirror的取值(getValue)和赋值(setValue)</p>\n<pre><code>editor.getValue()\neditor.setValue("value")\n</code></pre>\n<p>其它：\n1、自定义编辑器大小(在css文件中给.CodeMirror定义即可)</p>\n<pre><code>.CodeMirror{\n  border:1px solid black;\n  font-size:15px;\n  width:600px;\n  height:400px\n}\n</code></pre>\n<p>2、构造editor后，编辑器属性的获取和赋值</p>\n<pre><code>editor.getOption("theme")\neditor.getOption("theme","seti")\n</code></pre>\n<p>3、extraKeys中自定义快捷键</p>\n<pre><code>extraKeys:{\n   "Ctrl-Space":"autocomplete",\n   "Ctrl-F7":function () {console.log("自定义事件");},\n}\n</code></pre>\n<h2 id="">参考</h2>\n<p><a href="https://zhuanlan.zhihu.com/p/22163474">以上入若没有解决问题，可点击这里</a></p>\n<p><a href="http://blog.csdn.net/qq_20389175/article/details/50956296">查看更多参数配置请点击这里</a></p>'}});