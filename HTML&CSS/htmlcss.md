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
`<div>独占一行</div>` 1、充当容器：结构化；2、绑定操作；  
空格：英文单词分隔符，不代表空格文本，所以多个空格也只分割一次；回车也是；  
html编码   
`&nbsp;`空格 
`&lt;` 左尖括号 less than  
`&gt;` 右尖括号 great than  
`<br>` 换行  
`<hr>` 水平线
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
  
* 主流浏览器  
  >IE              trident  
  >Firefox         Gecko  
  >Google chrome   Webkit/blink  
  >Safari          Webkit  
  >Opera           presto  

 ### CSS
 cascading style sheet  层叠样式表
 * 1、引入css
> 行间样式  
``` html
    <div style="
        width: 100px;
        height: 100px;
        background-color: red;
    "></div>
```
> 页面级css
``` html
    <style type="text/css">
        div{
            width: 100px;
            height: 100px;
            background-color: red;
        }
    </style>
```
> 外部css文件
``` html
    <link rel="stylesheet" type="text/css" href="main.css">
    <!-- css 文件 -->
    <!-- main.css
    div{
        width: 100px;
        height: 100px;
        background-color: red;
    }
    -->
```
> link html 下载一行执行一行  
> link css 开启新线程下载，异步同时下载
* 选择器
> id选择器
``` html
    <div id="onlyname1"></div>
    <div id="onlyname2"></div>
    <!-- css:
        #onlyname1{
            background-col0r: red;
        }
        #onlyname2{
            backround-color: green;
        }
    -->
```
> class选择器
``` html
    <div class="demo demo1">123</div>
    <!-- css:
        .demo{
            background-color: yellow
        }
        .demo1{
            width: 100px
        }
    -->
```
> 标签选择器
``` html
    <div>456</div>
    <!-- css:
        div {
            background-color: red;
        }
    -->
```
> 通配符选择器
``` html
    <span>123</span>
    <div>234</div>
    <strong>111</strong>
    <!-- css:
        * {
            background-color: green;
        }
    -->
```
> 属性选择器
``` html
    <div id="only" class="demo"></div>
    <!-- css []里写属性值 id、class等标签属性
        []/[id]/[class]/[id="only"]
        {
            background-color: red;
        }      
    -->
```
> `!impottant` 加载在特定属性上
``` html
    <div style="background-color: red;"></div>
    <!-- css []里写属性值 id、class等标签属性
        div {
            background-color: red!important;
        }      
    -->
```
> 选择器优先级 权重, 256进制  
!impottant              Infinity    正无穷
行间样式                 1000
id                      100
class、属性、伪类        10
标签、伪元素             1
通配符 `*`               0
``` html
    <div id="only" class="demo">123</div>
    <!-- css:
        #only {
            backrground-color: red;
        }
        .demo {
            background-color: green;
        }
        div {
            background-color: yellow;
        }
    -->
```
> 父子选择器/派生选择器  
> 只要表示父子关系就可以，不一定是标签，可以是类，id
``` html
    <!-- 
    -->
    <div>
        <span>123</span>
    </div>
    <span>234</span>
    <!-- 
    span {  // 会选中所有的span

    }
    div span {  // 只选择div里面的span
        
    } -->

    <div class="wrapper">
        <strong class="box">
            <em>234</em>
        </strong>
    </div>
    <!--
    strong em {

    }  
    .wrapper .box em {
        background-color: red;
    } -->

    <div>
        <em>1</em>
        <strong><em>2</em></strong>
    </div>
    <!--     
    div em {
        background-color: red;
    } -->

```
> 直接子元素选择器
``` css
    div > em {
        background-color: red;
    }
```
> 浏览器排查父子选择器方式：从右向左排查（从子往父排查），避免从父级开始挨个遍历
``` html
    <section>
        <div>
            <p>
                <a href="">
                    <span></span>
                </a>
            </p>
            <ul>
                <li>
                    <a href="">
                        <span>
                            <em>1</em>
                        </span>
                    </a>
                </li>
            </ul>
        </div>

        <a href="">
            <p>
                <em>2</em>
            </p>
            <div></div>
        </a>
    </section>
```
``` css
<!-- 查找顺序
    1、查找到所有em
    2、顺序往根上找
-->
section div ul li a em {
    background-color: red;
}
```
> 并列选择器
> 多个选择条件，中间不加空格
``` html
    <div>1</div>
    <div class="demo">2</div>
    <p class="demo">3</p>
```
``` css
    <!-- 选择中间的div -->
    div.demo {
        background-color: red;
    }
```
> 权重：复杂选择器权重的计算  
``` html
    <div class="classDiv" id="idDiv">
        <p class="classP" id="idP">1</p>
    </div>
```
``` css
<!-- 写在同一排的选择器，权重值相加，比较大小；大小相同，后面覆盖前面；!important 正无穷大，在css里是有限值，Infinity+1 > Infinity -->
/* 100 + 1 */
#idDiv p {
    background-color: red;
}
/* 100 + 1 + 10 */
#idDiv p.classP {
    background-color: red;
}
/* 10 + 10 */
.classDiv .classP{
    background-color: green;
}
/* 1 + 10 + 100 */
div .classP#idP{    
    background-color: yellow;
}
```
> 分组选择器
``` html
    <em>1</em>
    <strong>2</strong>
    <span>3</span>
```
``` css
em strong span{
    background-color: red;
}
```
``` html
    <div class="demo1"></div>
    <div class="demo2"></div>
```
``` css
.demo1 {
    /* width: 100px; */
    /* height: 100px; */
    background-color: red;
}
.demo2 {
    /* width: 100px; */
    /* height: 100px; */
    background-color: green;
}
.demo1,
.demo2 {
    width: 100px;
    height: 100px;
}
```
# CSS 属性
> font
``` html
    <div>举个例子</div>
```
``` css
    div {
        /* 设置的是字体的高 */
        font-size: 14px;
        /* 字体能否加粗，取决于字体包里的样式设置 */
        font-weight: bold;
        /* italic斜体 */
        font-style: italic;
        /* arial 最常用字体，乔布斯发明 */
        font-family: arial;
        /* 边框：粗细 形式 颜色 */
        /* 四个边的框，每个边可以单独设置 */
        border: 1px solid black;
        border-width: 20px;
        border-style: dotted;
        border-color: black;
    }
```