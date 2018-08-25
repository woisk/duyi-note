### 基础标签
* html: hyperText markup language  
* 超文本标记语言  
html语言由一对一对的标签组成，每一对标签都有一个对应的特殊的功能，许多标签拼一起形成语言  
标签：头标签 与 尾标签 组成
头标签：左尖括号 + 标签名称 + 右尖括号  
尾标签：左尖括号 + 结束符`/` + 标签名称 + 右尖括号  
根标签`<html></html>`，一个html文件只能有一个跟标签，只能在根标签里面编程  
根标签里面分为两个结构化标签：  `<head></head>` `<body></body>`
常用编码字符集：gb2312, gbk, unicode, uft-8  
`<html lang="en">` 告诉搜索引擎爬虫我们的网站是关于什么内容的，en表示英文内容，zh表示中文内容；SEO技术；  
`<p>段落</p>` 让内容成段展示  
`<h1></h1>` h1~h6 标题标签，成段展示，更改字体大小，加粗字体  
`<strong>加粗</strong>`  
`<em>斜体</em>`  
`<del>中划线</del>`  
`<address>地址</address>` 成段斜体  
`<div>独占一行</div>` 1、充当容器：结构化；2、绑定操作  
`<span>没有效果</span>` 1、充当容器：结构化；2、绑定操作  
`ol li`有序列表，type排序方式，5种，1/a/A/i/I；reversed逆转；start从第几位开始  
`ul li`无序列表，type="disc"实心圆，square方形，circle圈  
`<img src="" alt="" title="">` src：1、网上的url；2、本地的相对路径、绝对路径；alt：容错信息，图片占位符；title：图片提示符；  
`<a href="地址">文本</a>` 超文本引用，超链接；锚点；  
`<a href="tel:1212312"></a>`打电话  
`<a href="mailto:dasd@www.com"></a>`发邮件  
`<a href="javascript:">可以写javascript代码</a>`协议限定符，可以强制运行里面的代码  
`<form method="" action=""></form>`表单，从前端往后端发送数据；method方法；action接收方地址  
`<input type="" name="" value="">`type：类型；name数据的名；value数据的值  