
	export default [	{
		fileName:"CodeMirror"		,
		title:"编辑器CodeMirror总结"		,
		tag:"乱七八糟"		,
		path:"/article/CodeMirror"		,
		example:"器CodeMirror总结: 英文太难了，真的太难了（哭），最近使用CodeMirror比较多，所以做如下总结，方便以后查看 第一步：官网下载CodeMirror文件<br>\n不告诉你的小秘密：查看下载中demo的文件夹，不看文档也可以快速实现你想要的效果 第二步：在使用前必须先引用 第三步：根据使用需求引用对应的css和js\n譬如主题： 譬如sql自动补全: 第四步：构造editor，根据需要对CodeMirror进行参数配置，以下只列出常用参数 第五步：CodeMirror的取值(getValue)和赋值(set......"		,
		createTime:""		,
		component:()=>System.import('article/article/CodeMirror.md')
	},	{
		fileName:"css"		,
		title:"css变量"		,
		tag:"CSS"		,
		path:"/article/css"		,
		example:"：: Web开发人员一直希望，可以在css开发中能够使用强大的变量。现在，CSS变量终于来了。在这篇文章中，我们会追忆CSS变量的历史，重要性以及应用，在这里你能够了解到如何利用CSS变量，来使CSS的开发和维护变得更快更容易 CSS变量的历史是坎坷的。该功能最初是由W3C在2012年提出，但是只有Chrome和Firefox对该特性进行了实现。 当该规范在2014年得到了显著的语法改进后，Firefox仍然更新并修改了它的实现，而Chrome则决定在特性被确定后，再对它的实现进行修改。微软对此漠不关心，他们使用了另一种方式。 在2015......"		,
		createTime:""		,
		component:()=>System.import('article/article/css.md')
	},	{
		fileName:"git"		,
		title:"git简介"		,
		tag:"杂七乱八"		,
		path:"/article/git"		,
		example:"设置Shell中Git的颜色和当前所在分支: 1. cd ~: 2. vi .bashrc: 3. 设置文件内容如下，并保存: 4. 执行 source ./.bashrc: 5. 如果是mac，再执行如下命令,每次开机才会自动生效: 二、设置Git常用别名: \"1./etc/gitconfig 文件：包含了适用于系统所有用户和所有库的值。如果你传递参数选项’--system’ 给 git config，它将明确的读和写这个文件。 2.~/.gitconfig 文件 ：具体到你的用户。你可以通过传递--global 选项使Git 读或写......"		,
		createTime:""		,
		component:()=>System.import('article/article/git.md')
	},	{
		fileName:"mac"		,
		title:"Mac快捷键"		,
		tag:"杂七乱八"		,
		path:"/article/mac"		,
		example:"（command）、⌥（option）、⇧（shift）、⇪（caps lock）、⌃（control）、↩（return）、⌅（enter）\" Command+M:最小化窗口 Command+T: 在浏览器中打开新的选项卡 Command+W: 关闭窗口 Command+Q: 退出程序 Command+Option+I 快捷键打开开发人员工具 Command+Option+J 直接进入 JavaScript 控制台 command+R： 刷新页面 Command+~ 用于同一个应用程序的多窗口切换 command+tab用于多应用程......"		,
		createTime:""		,
		component:()=>System.import('article/article/mac.md')
	}]
	