export default [	{
		fileName:"PWA library"		,
		title:" git配置及命令介绍"		,
		tag:" 杂七乱八"		,
		path:"/article/PWA library"		,
		example:"设置Shell中Git的颜色和当前所在分支: 1. cd ~: 2. vi .bashrc: 3. 设置文件内容如下，并保存: 4. 执行 source ./.bashrc: 5. 如果是mac，再执行如下命令,每次开机才会自动生效: 二、设置Git常用别名: \"1./etc/gitconfig 文件：包含了适用于系统所有用户和所有库的值。如果你传递参数选项’--system’ 给 git config，它将明确的读和写这个文件。 2.~/.gitconfig 文件 ：具体到你的用户。你可以通过传递--global 选项使......"		,
		createTime:""		,
		component:()=>System.import('article/article/PWA library.md')
	},	{
		fileName:"element of javascript style"		,
		title:"JAVASCRIPT 写作指南"		,
		tag:" JQ"		,
		path:"/article/element of javascript style"		,
		example:"<img class=\"progressiveMedia-noscript js-progressiveMedia-inner\" src=\"https://cdn-images-1.medium.com/max/1600/1*7qYONdlJuS0pkUpdav-LQQ.jpeg\"> 1992年，由 William Strunk Jr. 创作的《英文写作指南》（“The Elements of Style”）出版了。这是一本禁受住了时间考验的英文写作风格指南书。由此类推，代码也可以有类似的风格指南。 下面我们讨论的是一......"		,
		createTime:""		,
		component:()=>System.import('article/article/element of javascript style.md')
	},	{
		fileName:"javascript"		,
		title:"深入了解JavaScript"		,
		tag:" JQ"		,
		path:"/article/javascript"		,
		example:"主要讲述了JavaScript语言中基本知识和概念以及平时工作时遇到的一些问题。 为什么需要深入了解JavaScript:   首先，作为前端工程师，无论在学习新的框架和技术，还是工作开发中，都要不断的阅读JavaScript代码，因此越深入JavaScript的基础，就能更好的理解别人的代码，也能更好的创造出自己的写法，提高自己的开发效率。同时在追踪一些bug时，也能根据JavaScript的基础知识来判断问题的原因（比如异步的一些问题），更快速的定位问题。 本文所讲的JavaScript基础的主要内容包括： 变量和作......"		,
		createTime:""		,
		component:()=>System.import('article/article/javascript.md')
	}]