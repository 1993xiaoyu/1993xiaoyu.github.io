---
title:编辑器CodeMirror总结
tag:乱七八糟
---

# 编辑器CodeMirror总结
英文太难了，真的太难了（哭），最近使用CodeMirror比较多，所以做如下总结，方便以后查看

第一步：官网[下载CodeMirror](http://codemirror.net/)文件<br>
不告诉你的小秘密：查看下载中demo的文件夹，不看文档也可以快速实现你想要的效果

第二步：在使用前必须先引用
```
<link rel="stylesheet" href="codemirror-5.12/lib/codemirror.css">
<script src="codemirror-5.12/lib/codemirror.js"></script>
```
第三步：根据使用需求引用对应的css和js
譬如主题：
```
<link rel="stylesheet" href="codemirror-5.12/theme/seti.css">
```
譬如sql自动补全:
```
<link rel="stylesheet" href="codemirror-5.12/addon/hint/show-hint.css">
<script src="codemirror-5.12/addon/hint/show-hint.js"></script>
<script src="codemirror-5.12/addon/hint/sql-hint.js"></script>
<script src="codemirror-5.12/mode/sql/sql.js"></script>
```

第四步：构造editor，根据需要对CodeMirror进行参数配置，以下只列出常用参数
```
var createSql = $('[data-mark="insert_sql"]')
editor = CodeMirror.fromTextArea(createSql[0], {
   <!-- 以什么格式进行高亮 -->
   mode: "text/x-sql",
   <!-- 主题 -->
   theme: 'seti',
   <!-- 是否代码折叠 -->
   lineWrapping: true,

   <!-- 是否在编辑器左侧显示行号 -->
   lineNumbers: true,
   <!-- 行号从哪个数开始计数，默认为1 -->
   firstLineNumber: 1,

   <!-- tab字符的宽度，默认为4 -->
   indentWithTabs: true,
   <!-- 自动缩进，设置是否根据上下文自动缩进,默认为true-->
   smartIndent: true,

   <!-- 括号匹配 -->
   matchBrackets : true,
   <!-- 是否在初始化时自动获取焦点 -->
   autofocus: true,
   <!-- 智能提示  -->
   extraKeys: {"Ctrl-Space": "autocomplete"},
   <!-- 编辑器是否只读,并且不能获得焦点 -->
   readOnly:'nocursor',
   <!-- 在选择时是否显示光标，默认为false -->
   showCursorWhenSelecting:true

})
```
第五步：CodeMirror的取值(getValue)和赋值(setValue)
```
editor.getValue()
editor.setValue("value")
```

其它：
1、自定义编辑器大小(在css文件中给.CodeMirror定义即可)
```
.CodeMirror{
  border:1px solid black;
  font-size:15px;
  width:600px;
  height:400px
}
```
2、构造editor后，编辑器属性的获取和赋值
```
editor.getOption("theme")
editor.getOption("theme","seti")
```
3、extraKeys中自定义快捷键
```
extraKeys:{
   "Ctrl-Space":"autocomplete",
   "Ctrl-F7":function () {console.log("自定义事件");},
}
```

##参考

[以上若没有解决问题，可点击这里](https://zhuanlan.zhihu.com/p/22163474)

[查看更多参数配置请点击这里](http://blog.csdn.net/qq_20389175/article/details/50956296)



