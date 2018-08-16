## 腾讯课堂JavaScript精讲
        本文记录腾讯课堂渡一教育的《JavaScript精讲》课程的笔记、
---

## JS特性
* 特点1：
  * 1.解释性语言：一行一行翻译
  >如：JavaScript php\
  >优点：跨平台\
  >不足：稍微慢
  * 2.编译性语言：通篇翻译，生成翻译完的文件，计算机执行翻译完的文件
  >如：c c++\
  >优点：运行快\
  >缺点：移植性不好，不跨平台
  * 3.特殊：
  >java：.java --》 javac --》 .class --》 jvm（虚拟机，帮助实现跨平台） --》解释执行
* 特点2：单线程，一个执行体一个时间只能做一件事情（同步执行）
  > 多线程：一个执行体一个时间可以做多件事（异步执行）
* ECMA标准：ECMAScript
  > ecmascritp\
  > dom\
  > bom
* js执行队列，轮转时间片
* 主流浏览器及内核
  |浏览器|内核|
  |:---|---:|
  | IE      |trident
  | Chrome  |webkit/blink
  | firefox |Gecko
  | Opera   |presto
  | Safari  |webkit
* js的引入
  > 页面级：`<script>代码</script>`\
  > 外部js文件 `<script src="文件地址"></script>`
* 结构 行为 样式相分离
---

## js基本语法
* 变量声明
  *  声明、赋值相分离
   >var a = 100; //声明一个变量a，并给a赋值为100\
   >单一变量声明：var a;
* 命名规则
  > 以英文字母、_、或者 $ 开头\
  > 变量名可以包含英文字母、\_、$ 、数字\
  > 不可以用系统的关键字、保留字作为变量名
* 数据类型
  > 1、原始值 Number(数字天生浮点型) String() Boolean undefined null  共5种\
  > 2、引用值 array object function date RegExp
* 值类型由值决定
* js是一种动态语言--》解释性语言--》脚本语言
* 错误分成两种
  > 1、语法解析错误\
  > 2、逻辑错误（标准错误） 
---

## 运算符
  * “+”：1、数学运算，字符连接；2、任何数据类型加字符串都等于字符串\
  * “-”，“*”，“/”，“%”，“()”\
  * 优先级，“=”最弱，“()”最高\
  * 赋值的顺序，自右向左；计算的顺序：自左向右
``` js
 // 交换两个数字的值
    function changeValue(num1, num2){
        num1 = num1 + num2;
        num2 = num1 - num2;
        num1 = num1 - num2;
    }
```
* 比较运算符
  > asc码,A65, a97\
  > 字符串比较,从第一位开始一次比较asc码\
  >  '10' < '8' === true\
  > undefined == undefined   true\
  > NaN == NaN   false
* 逻辑运算符  &&  ||  !
  * 本质用法:运算符,用于运算,返回结果
  * && 
  
  > 先看第一个表达式转换成布尔值的结果, 如果结果为真, 那么它会看第二个表达式转换为布尔值的结果;

  > 如果只有两个表达式的话, 只要看到第二个表达式, 就可以返回该表达式的值了,依此类推:    1 && 2 && 3 == > 3

  > 返回第一个转换为布尔值的结果为false的表达式的结果:  1 && 3 && 0 && 2 == > 0
  
  > 短路语句,有中断作用,遇到false后面就中断: data && fn(data), 不关注返回值,只关注能不能读到第二句,能读到后面才继续执行
  > 可用于简化if代码
* || 
  > 返回第一个转换为布尔值的结果为true的表达式的结果\
  > 常用于写兼容代码
``` js
    div.onclick = function(e){
        //非IE浏览器
        var event = e;
        //IE浏览器
        var event = window.event;
        //兼容写法
        var event = e || window.event;
    }
```
---

## typeof,类型转换 初识引用值 数组,对象
* 编程形式的区别
  > 1、面向过程: c\
  > 2、面向对象: \
  > js既面向对象，也面向过程
* typeof，
  > 原始值：number，string，boolean，undefined，null \
  > 引用值：objectfunction，undefined
* 类型转换
  * 显示类型转换：
  > Number()转成数字，如果参数不是数字字符串或者undefined，返回NaN；Number(null)==0Number(false)==0;

  > parseInt()转成整数，先Number再转成整数；parseInt(num， radix),目标进制为基底把nu转换成10进制的数\ 
  > parseInt(10, 2)==2，2进制的10转成10进制为2；parseInt(16, 16)==22;16进制的16转10进制为22\
  > 砍断原则parseInt('213adc')==213，但是parseInt('adf23')==NaN
  
  >parseFloat()
  
  > String()\
  > toString()类似，但是undefined与null不能用toString\
  > var num = 2;num.toString(2)=='10',把数字转换成目标进制的数\
  > num = '2';num.toString(2)=='2';

  >Boolea()
* 隐式类型转换
  >   isNaN(),隐式调用Number；isNaN(NaN)==true；isNaN('asdf')==true； \
  >   ++，--，+,-（一元正负）， \
  >   +（加），任何类型+字符串=字符串 \
  >   -,*,/,%，转换成数字 \
  >   && ||，转成布尔值 \
  >   \>,<,>=,<=，如果数字和字符串相比转成数字（数字优先） \
  >   ==,!=，undefined==null ==> true \

  * 不发生类型转换：===，!== \
  * 没定义的值只有在typeof里面不报错
* 总结：
  > typeof(undefined) = 'undefined'\
  > typeof(null)      = 'object'
---

## 函数，小练习，初始作用域
* 函数
  * 定义：函数声明，函数表达式
* 预编译前奏
  * 预编译发生在函数执行的前一刻
  * 1、imply global 暗示全局变量：即任何变量，如果变量未经声明就赋值，此变量就为全局对所有。
  > eg：a = 123;\
  > eg: var a = b = 123;
  * 2、一切声明的全局变量，全是window的属性。
  > eg: var a = 123; ====> window.a = 123;
* 预编译四部曲：
  > 1、创建AO对象；\
  > 2、找形参和变量声明，将变量和形参名作为AO对象的属性名，值为undefined；\
  > 3、将实参和形参相统一；\
  > 4、在函数体里面找函数声明，值赋予函数体
* 练习：下面函数执行分别打印出什么：
> 1、
 ``` js
    function fn (a){
        console.log(a);
        var a = 123;
        console.log(a);
        function a () {}
        console.log(a);
        var b = function () {}
        console.log(b);
        function d() {};
    }
    fn(1);
    预编译s分析：AO{
        a: funciion () {},
        b: undefined,
        d: function () {}
    }
```
> 2、
``` js
    function test (a, b) {
        console.log(a);
        console.log(b);
        var b = 234;
        console.log(b);
        a = 123;
        console.log(a);
        function a () {}
        var a;
        b = 234;
        var b = function () {}
        console.log(a);
        console.log(b);
    }
    test(1);
    预编译分析：AO{
        a: function a () {},
        b: undefined
    }
    输出：
    function () {}
    undefined
    234
    123
    123
    function () {}
```
> 3、
``` js 
   console.log(test);
   function test (test) {
       console.log(test);
       var test = 123;
       console.log(test);
       function test () {}
   }
   test(1);
   var test = 123;
   console.log(test);
   预编译分析：
   GO{
       test: function test(){}
   }
   AO{
       test: function () {}
   }
   输出：
   function test(){}
   function () {}
   123
   123;  
```
> 4
``` js
    function test () {
        console.log(b);
        if(a){
            var b = 100;
        }
        c = 234;
        console.log(c);
    }   
    var a;
    test();
    a = 10;
    console.log(c);
    预编译分析：
    GO{
        a: undefined
    }
    AO{
        b: undefined
    }
    输出：
    undefined
    234
    234
```
> 5
``` js
   function bar () {
       return foo;
       foo = 10;
       function foo () {}
       var foo = 11;
   }
   console.log(bar()); === > function () {}
```
> 6
``` js
   cosnole.log(bar()); === > 11
   function bar () {
       foo = 10;
       function foo () {}
       var foo = 11;
       return foo;
   }
```
> 7 求：window.foo
``` js
   (window.foo || (window.foo = 'bar'));
   //思路：里面小括号优先级最高，所以先赋值
```
> 8
``` js 
    a = 100;
    function demo (e) {
        function e () {}
        arguments[0] = 2;
        console.log(e);
        if(a){
            var b = 123;
            function c () {
                新的语法不允许if里面进行函数声明
            }
        }
        var c;
        a = 10;
        var a;
        console.log(b);
        f = 123;
        console.log(c);
        console.log(a);
    }
    var a ;
    demo(1);
    console.log(a);
    console.log(b);
    // 预编译分析：
    // GO{
    //     a: undefined,
    //     demo: function () {}
    // }
    // 执行：
    // GO{
    //     a: 100,
    //     demo: ...
    // }
    // AO{
    //     e: undefined, --> 1, --> function(){} --> 2
    //     b: undefined,
    //     c: undefined / fn
    // }
```
> 9 
``` js
    var str = false + 1;
    console.log(str);
    var demo = false == 1;
    console.log(demo);
    if(typeof(a) && -true + (+undefined) + ""){
        console.log('输出1');
    }
    if(11 + '11' * 2 == 33){
        console.log('输出2');
    }
    !!" " + !!"" - !!false || console.log('输出不了');
    // 思路：
    // 1、
    // typeof(undefined)='undefined'
    // -true: '-'为负号，不是减号，隐式类型转换为数字得：NaN
    // 字符串 || NaN ===> 返回 字符串
    // +undefined: '+'为正号，不是加号，隐式类型转换位数字得：NaN
    // 字符串 + NaN ===> 字符串NaN + "" ===> 字符串
    // 所以可以’输出1'

    // 2、
    // '11' * 2，字符串11隐式类型转换为数字11

    // *3、
    // " "，有空格隐式类型转换为true，!!true = true;
    // ""，没空格，转为false，!!false = false;
    // 运算操作符 + - 的优先级比逻辑运算符高  1 - 1 || 2 ===> 2
    // (true + false - false) || console.log('输出不了');
    // ==> (1 + 0 - 0)|| console.log('输出不了');
    // ==> 1 || console.log('输出不了');
```
> 10、求x
``` js
    var x = 1;
    if(function f () {console.log('aa');}){
        x += typeof(f);
    }
    //思路：f不是全局的函数声明，在if的括号里，这是f为函数，隐式转换boolean值为true，后f就被释放
    //if里面的表达式可以继续执行
```
---

## 闭包
* 概念：两个或多个函数嵌套，内部函数保存到外部会形成闭包，外部保存的函数执行是可以访问函数外部的变量
* 闭包的作用
> 1、实现共有变量，如：累加器(函数每次执行，不依赖外部变量)
``` js
    function add(){
        var num = 0;
        function a (){
            console.log(++num);
        }
        return a;
    }
    var myAdd = add();
    myAdd(); ---> 1
    myAdd(); ---> 2
    myAdd(); ---> 3
```
> 2、可以做缓存（存储结构）
``` js
    function test(){
        var food = 'apple';
        var obj = {
            eatFood: function () {
                if(food != ''){
                    console.log('I am eating ' + food);
                    food = '';
                } else {
                    console.log('There is nothing');
                }
            },
            pushFood: function (myFood){
                food = myFood;
            }
        }
        return obj;
    }
    var person = test();
    person.eatFood();   
    person.eatFood();
    person.pushFood('banana');
    person.eatFood();
```
> 3、可以实现封装，属性私有化

> 4、模块化开发，防止全局变量污染
  ---

## 立即执行函数
* 只有表达式才能被执行符号‘()’执行
* 被执行符号执行的函数定义马上被释放，函数的引用不被保存
> 练习：
``` js
    function test(){
        var arr = [];
        for(var i = 0; i < 10; i++){
            arr[i] = function(){
                console.log(i);
            }
        }
        return arr;
    }
    var myArr = test();
    for(var j = 0; j < myArr.length; j++){
        myArr[j]();
    }
    // 输出：10101010101010101010，因为i是最后函数执行的时候才取值，此时test()行毕，i为10
    //arr[i] = function(){console.log(i)}
    //把一个函数的引用赋值给数组的当前位，数组的当前位要被马上索取出来，arr[i]一执行语句，跟后面的函数内容没有关系，所以函数里面的内容不会马上求i的值，函数里面的容只有在函数执行的时候才会执行。
    //输出 1 ~ 9：
    function test(){
        var arr = [];
        for(var i = 0; i < 10; i++){
            (function(j){
                arr[j] = function(){
                    console.log(j);
                }
            }(i));
        }
        return arr;
    }
```
* 闭包的产生会引起原来的作用域链不释放，内存空间被占用过多，造成内存泄漏
> 1、计算一个字符串的字节长度
``` js
    function retByteslen(target){
        var count = target.length;
        for(var i = 0; i < target.length; i++){
            if(target.charCodeAt(i) > 255){
                count += 1;
            }
        }
        console.log(count);
    }
```
> 2、
``` js
    var f = {
        function f () {
            return '1';
        },
        funtion g () {
            return 2;
        }
    }();
    cosnoel.log(typeof (f));
    // 思路：f 对象的花括号里有','逗号运算符，返回最后一个，所以 f=function g ()return 2;}();
    //     打印结果为"number"
```
> 3、
``` js
    var x = 1;
    if(function f () {}){
        x += typeof (f);
    }
    console.log(x); --> 1undefined
    // 解析：
    // if的括号把function f () {} 变成表达式，不再是函数声明，f就立刻释放了
```
* 包装类
  > 原始值没有属性，对原始类型数据进行操作的时候JS引擎会先对原始类型数据进行包装 \
  > 如: var str = 'abc';\
  > str.length --> new String('abc').length --> 3, 然后立刻把new出来的象销毁;
---     


## 原型，原型链
* 1、原型是function对象的一个属性，它定义了构造函数制造出的对象的公共祖先。通该构造函数产生的对象，科尔以继承该圆形的属性和方法。原型也是对象。
  >  Person.prototype --- 原型，在函数声明的时候就定义好了 \
  >  Person.prototype = {} --- 是祖先 \
  >  function Person(){} \
  >  var person = new Person(); \
  >  构造函数funcion Person () {}，可以构造出原型为Person.prototype的对象 \
  >  换句话说：原型Person.prototype，通过构造函数function Person(){} 构造出己的对象 \
* 2、利用原型特点和概念，可以提取共有属性
  > 通过原型提取公有属性，不在构造函数中去执行生成，提高效率
* 3、对象如何查看原型 --> 隐式属性：__proto__
  > \_\_proto__ 相当于一个连接器，连接对象和它的原型
* 4、对象如何查看构造函数：--> constructor

* this: 谁调用的方法，this就指向谁
``` js
    // 1
    Person.prototype = {
        name: 'a',
        sayName: function(){consoel.log(this.name);}
    }
    function Person () {this.name = 'b';}
    var person = new Person();
    person.sayName(); -- > b 谁调用的方法，this就指向谁
    person.prototype.sayName(); -- > a
    // 2
    Person.prototype = {height:100;}
    function Person () {this.eat = function () {this.height ++;}}
    var person = new Person();
    person.eat();  -- > person.height == 101;
    Person.prototype == 100;
```
* 绝大多数对象最终都会继承自Object.prototype
  > var obj = { } --> 原型为Object \
  > obj.\_\_proto__ === Object.prototype
* 对象原型不是Object.prototype特例：由Object.create(null) 创建的对象
  > var obj = Object.create(null); \
  > obj == > {}  : No properties  \
  > obj.__proto__ === undefined \

  > 引申：null 和 undefined 没有toString()方法 ，因为没有经过包装类，没Object.prototype原型 \

  > 123.toString() --> 报错 \
  > 首先，'.'点运算符这里是数学运算符，优先级最高，程序先将123.识别为一个浮点，浮点 > '.'后面只能是数字 \
  > var num = 123; \
  > num.toString(); --- > new Number(num).toString(); \
  > Number.prototype.toString() = function(){}，重写Object.toString() 方法

* js的可正常计算的数字范围：小数点前16位，后16位
---

## call / apply 
* 功能: 改变this指向
* 区别：传参列表不同，call 依次传参，apply 数组传参(传arguments))
> 可以借助Person函数来构造obj，借助别人的方法来实现自己对象的封装（当己的需求完全涵盖别人方法的功能）
``` js
   function Person (name, age){
       this.name = name;
       this.age = age;
   }
   var person = new Person('deng', 100);
   var obj = {};
   Person.call(obj); // undefined  call改变了this的指向
   Person.call(obj, 'cheng', 300); // obj === {name:'cheng',age:300}
```
> Person.call() === Person() call没穿参数，与普通调用没有区别
>1、
``` js
   function Person(name, age, sex){
       this.name = name;
       this.age = age;
       this.sex = sex;
   }
   function Student(name, age, sex, tel, grade){
       //this.name = name;
       //this.age = age;
       //this.sex = sex;
       Person.call(this, name, age, sex);
       this.tel = tel;
       this.grade = grade;
   }
   var student = new Student('sunny', 15, 'male', 123, 1);
```
> 2、
``` js
    //造车工厂不自己生产零件，只做装配，调用车间的方法生产零件就可以
   function Wheel(wheelSize, style){
       this.wheelSize = wheelSize;
       this.style = style;
   }
   function Sit(c, sitCole){
       this.c = c;
       this.sitColer = sitColor;
   }
   function Model(height, width, len){
       this.height = height;
       this.width = width;
       this.len = len;
   }
   function Car(wheelSize, style, c, sitColor, height, width, len){
       Wheel.call(this, wheelSize, style);
       Sit.call(this, c, sitColor);
       Model.call(this, height, width, len);
 
       Wheel.apple(this, [wheelSize, style]);
       Sit.apple(this, [c, sitCole]);
       Model.apple(this, [height, width, len]);
   }
   var car = new Car(18, '炫', '舒服', '蓝色', 100, 100, 100);
```
---

### 继承模式、命名空间、对象枚举
* 继承发展史
> 1、传统形式 -- > 原型链 \
过多的继承了没用的属性
``` js
Grand.prototype.lastName = 'Ji';
function Grand(){

}
var grand = new Grand();

Father.prototype = grand;
function Father() {
    this.name = 'hehe';
}
var father = new Father();

Son.prototype = father;
function Son(){

}
var son = new Son();
```
> 2、借用构造函数 \
不能继承借用构造函数的原型 \
每次构造函数都要多走一个函数
``` js
    function Person(name, age, sex){
        this.name = name;
        this.age = age;
        this.sex;
    }
    function Student(name, age, sex, grade){
        Person.call(this, name, age, sex);
        this.grade = grade;
    }
    var student = new Student();
```
> 3、共享原型 \
不能随便改动自己的原型
``` js
    Father.prototype.lastName = 'Deng';
    function Father(){

    }

    function Son(){

    }
    Son.prototype = Father.prototype;

    //抽象出方法
    /**
     * 传入两个构造函数
     */
    function inherit(Target, Origin){
        Traget.prototype = Origin.prototype;
    }
    inherit(Son, Father);
    var son = new Son();
    var father = new Father();
    //Son不能再个性化自己的原型，改一个另一个也改了
    Son.prototype.sex = 'male';
    // son.sex -- > 'male';
    // father.sex -- > 'male';
```
> 4、圣杯模式
``` js
    function inherit(Target, Origin){
        function F() {}     //做中间层
        F.prototype = Origin.prototype; //F的原型指向Origin的原型
        Target.prototype = new F();     //Target
        //到这一步，指向紊乱 new Traget().constructor -- > Origin
        //new Target().__proto__ --> new F().__proto__ --> Origin.prototype
        Target.prototype.constructor = Target;
        //如果有需要，能找回自己的超类
        Target.prototype.uber = Origin.prototype;
    }
    // 雅虎方法 YUI3 库
    var inherit = (function (){
        var F = function () {};
        return function(Target, Orign){
            F.prototype = Origin.prototype; 
            Target.prototype = new F();    
            Target.prototype.constructor = Target;
            Target.prototype.uber = Origin.prototype;
        }
    })();

```
### 对象、变量、属性
* 命名空间: 管理全局变量，防止全局变量污染，适用于模块化开发
> webpack

> 利用闭包
``` js
    //形成闭包，变量私有化，特用的功能写到立即闭包里面，留出接口方便启动，而且变量名互相不污染
    var name = 'bcd';
    var init = (function(){
        var name = 'abc';
        function callName(){
            console.log(name);
        }
        return function(){
            callName();
        }
    }());
```
* 链式调用
``` js
    // $('div').css('background-color', 'red').width(100).height(100);
    var deng = {
        smoke: function(){
            console.log('Somking is xuan cool!');
            //不写return，隐式 return undefined
            return this;
        },
        drink: function(){
            console.log('drinking, ye cool!');
            return this;
        },
        perm: function(){
            console.log('preming, cool!');
            return this;
        }
    }
    deng.somke().drink().perm();
```
* 访问属性
``` js
    var deng = {
        wife1 : {name : 'xiaoliu'},
        wife2 : {name : 'xiaowang'}
    }
    deng.wife1;
    deng['wife'+1];
```
* 对象的枚举(遍历)
``` js
    //数组
    var arr = [1, 2, 3, 4, 5, 6];
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    //对象
    var obj = {
        name : '123',
        age ：12,
        sex : 'male',
        height : 100,
        width ：14,
        __proto__ : {
            lastName : 'deng'
        }
    }
    for(var prop in obj){
        //排除原型链上的属性，但是不会延展到Object的属性，只会延展自己定义的属性
        if(obj.hasOwnProperty(prop)){       
            console.log(obj[porp]);
        }
        console.log(prop + ' ' + typeof(prop));
    }
```
* in操作符
``` js
    'height' in obj;    //true: 'height' 必须是字符串
    'lastName' in obj;  //true: in 可以访问到原型链上的属性
```
* instanceof
> A instanceof B : A是不是B构造函数构造出来的  
> 看A对象的原型链上有没有B的原型
``` js
    function Person(){

    }
    var person = new Person();
    person instanceof Person;   //true:
    person instanceof Object;   //true: 
    [] instanceof Array;        //true:
    [] instanceof Object;       //true:

    //看A对象的原型链上有没有B的原型
    Person.prototype.lastName = 'deng';
    function Person() {

    }
    var person = new Person();
    Student.prototype.lastName = 'liu';
    function Student() {

    }
    var student = new Student();
    student instanceof Student;     //true
    student.__proto__ = person;
    student instanceof Student;     //false
    student instanceof Person;      //true
```
* 判断类型
``` js
    var a = {};
    //1、constructor
    [].constructor; //ƒ Array() { [native code] }
    a.constructor;  //ƒ Object() { [native code] }
    //2、instanceof
    [] instanceof Array;    //true
    a instanceof Object;    //true
    a instanceof Array;     //false
    //3、toString
    Object.prototype.toString.call([]); //"[object Array]"
    Object.prototype.toString.call({}); //"[object Object]"
    //原理：
    // Object.prototype.toString = function(){
    //     //识别this
    //     //返回相应的结果
    // }
```
* 克隆
``` js
    var 
    //浅克隆

    //深克隆
```

### 笔试题讲解
``` js
    //1、
    var x = 1, y = z = 0;
    function add(n){
        return n = n + ;
    }
    y = add(x);
    function add(n){
        return n = n + 3;
    }
    z = add(x);
    //考点：1、数字类型是原始值，不是引用值，n = n + 1 不会改变 x 的值
    //2、add 函数声明后面会覆盖前面，所以最后 y z 值相等
```
``` js
    //2、输出结果是{1,2,3}的是：
    function foo(x){
        console.log(arguments);
    }
    foo(1,2,3);     
    //正确

    function foo(x){
        console.log(arguments);
    }(1,2,3)    
    //没有输出，但是不报错，函数声明和小括号被分开识别
    //function foo(x){} 和表达式 (1,2,3)
    function foo(x){}() 
    //小括号没传参，只能识别为要执行一个函数声明，所以报错，只有表达式能被执行

    (function foo(x){
        cosnole.log(arguments);
    })(1,2,3)
    //正确

    function foo() { bar.apply(null, arguments);}
    function bar() {console.log(arguments);}
    foo(1,2,3);
    //正确
```
``` js
    //3、以下表达式的结果是什么
    parseInt(3, 8); // 3
    parseInt(3, 2); // NaN 2进制数只有1和0，没有3
    parseInt(3, 0); // 3 参数0默认10进制，有的老浏览器会报错
```
``` js
    //4、以下哪些是js语言typeof可能返回的结果
    // string   1
    // array    0
    // object   1
    // null     0
```
``` js
    //5、结果
    function b (x, y, a){
        arguments[2] = 10;
        console.log(a);
    }
    b(1, 2, 3);
    function bb(x, y, a){
        a = 10;
        console.log(arguments[2]);
    }
    bb(1, 2, 3);
    bb(1, 2);   //形参a没有对应的实参，不能与arguments[2]形成映射关系
```
``` js
    //6、结果
    var f = ({
        function f () {return '1';},
        function g () {return 2;}
    })();
    typeof(f);
    //','逗号操作符，返回后面的
    var num = (1, 2, 3);   // num --- > 3
```
``` js
    //7、
    var x = 1;
    if(function f () {}){
        x += typeof (f);
    }
    console.log(x);
    // function 被 () 变成表达式，function可以立即执行也会自动忽略它的引用
```
``` js
    //8、
    undefined === null      //false
    undefined == null       //true
    isNaN("100")            //false
    //NaN 有隐式类型转换也什么都不相等
    //NaN == 任何值  --- > false
    //NaN === 任何值 --- > false
    function isNaN(num){
        var ret == Number(num);
        ret += '';
        if(ret == 'NaN'){
            return true;
        }
        return false;
    }
    parseInt('1a') === 1    //true
    //{} == {} --> false  对象比较的是地址
```
``` js
    //9、
    var foo = '123';
    function print(){
        var foo = '456';
        this.foo = '789';   //this.foo -- > window.foo (预编译)
        console.log(foo);
        //如果没有var foo，输出789
        //如果没有var foo，new print()， 输出456
    }
    print(); --> 456
```
``` js
    //10、
    var name = '222';
    var a = {
        name : '111'
        say : function(){
            console.log(this.name);
        }
    }
    var fun = a.say;
    fun();              // 222
    a.say();            // 111
    var b = {
        name : '333',
        say : function(fun){
            fun();
        }
    }
    b.say(a.say);      // 222 fun()并没有任何对象调用
    b.say = a.say;
    b.say();            // 333
```
``` js
    // 11、test() 和 new test() 分别输出什么
    var a = 5;
    function test(){
        a = 0;
        console.log(a);
        console.log(this.a);
        var a ;
        console.log(a);
    }
    test();     // 0, 5, 0
    new test(); // 0, undefined, 0
```
``` js
    function print(){
        console.log(foo);       //undefined
        var foo = 2;
        console.log(foo);       //2
        console.log(hello);     //报错, hello is not defined
    }
    print();
```
``` js
    function print(){
        var test;
        test();
        function test(){
            console.log(1);
        }
    }
    print();        //1
```
``` js
    function print(){
        var x = 1;
        if(x == '1') console.log('One!');   //One!
        if(x === '1') console.log('Two!');  //不输出
    }
    print();
```
``` js
    function print(){
        var marty = {
            name : 'marty',
            printName : function(){
                console.log(this.name);
            }
        }
        var test1 = {name:'test1'};
        var test2 = {name:'test2'};
        var test3 = {name:'test3'};
        test3.printName = marty.printName;
        var printName2 = marty.printName.bind({name:123});
        marty.printName.call(test1);    //test1
        marty.printName.apply(test2);   //test2
        printName2();                   //123
        test3.printName();              //test3
    }
    print();
```
``` js
    var bar = {a:'002'};
    function print(){
        bar.a = 'a';
        Object.prototype.b = 'b';
        return function inner(){
            console.log(bar.a);     //a
            console.log(bar.b);     //b
        }
    }
    print()();
```
* typeof 返回是字符串类型
> 3个基础类型：string number boolean  
> undefined  
> object (null)  
> function
``` js
typeof 1;           //number

typeof NaN;         //number

typeof Number.MIN_VALUE;    //number

typeof Infinity;    //number Infinity代表了超出JavaScript处理范围的数值
//数字类型: 整数，浮点数，进制数，指数，NaN 和 Infinity

typeof "123";       //number

typeof true;        //boolean

typeof window;      //object

typeof document;    //object

typeof null;        //object

typeof eval;        //function

typeof Date;        //function

typeof sss;         //undefined

typeof undefined;   //undefined
```
* 6个转换成false 的表达式
> false, '', 0, undefined, null, NaN

### this
* 函数预编译过程，this --> window，函数执行前预编译
* 全局作用域里, this --> window
* call/apply可以改变函数运行时this指向
* obj.func(); func()里面的this指向obj
``` js
    // 函数执行，预编译
    function test(c){
        var a = 123;
        function b () {}
        //return undefined;
    }
    test(1);
    AO : {
        arguments : [1],
        this : window,
        c : 1,
        b : function
    }
    
    //构造函数预编译
    function test(c){
        //var this = Object.create(test.prototype);
        // {
        //     __proto__ : test.prototype;
        // }
        var a = 123;
        function b () {}
        //return this;
    }
    new test(1);
    AO : {
        arguments : [1],
        this : new的对象,   // window被覆盖
        c : 1,
        b : function
    }
```
---
### arguments
* arguments.callee
> 指向函数自己的引用
``` js
    function test (){
        console.log(arguments.callee == test);  // true
    }
```
``` js
    // 在立即执行函数中递归调用自己（没有函数名）
    var num = (function(n){
        if(n == 1){
            return 1;
        }
        // return n * 阶乘(n-1);
        return n * arguments.callee(n-1);
    }(10));
```
``` js
    // 在哪个函数里就指向哪个函数
    function test (){
        console.log(arguments.callee);
        function demo(){
            console.log(arguments.callee);
        }
    }
```
* function.caller
> 严格模式下不能使用 `use strict`  
> 函数被调用的环境
``` js
    function test(){
        demo();
    }
    function demo(){
        console.log(demo.caller); 
    }
    test();     //test
```
---
### 深度克隆
``` js
    // 浅拷贝，只适用于属性值是原始值的类型
    function clone(origin, target){
        var target = target || {};
        for(var prop in origin){
            target[prop] = origin[prop];
        }
        return target;
    }
    // 深拷贝
    function clone(origin, target) {
        var target = target || {};
        if (origin == null || origin == undefined) {
            target = origin;
        } else if (typeof origin == 'object') {
            for (var prop in origin) {
                if (origin.hasOwnProperty(prop)) {
                    var toStr = Object.prototype.toString.call(origin[prop]);
                    if (toStr == '[object Array]') {
                        var arr = [];
                        for (var i = 0; i < origin[prop].length; i++) {
                            arr[i] = clone(origin[prop][i]);
                        }
                        target[prop] = arr;
                    } else if (toStr == '[object Object]') {
                        target[prop] = clone(origin[prop]);
                    } else {
                        target[prop] = origin[prop];
                    }
                }
            }
        } else {
            target = origin;
        }
        return target;
    }
    var origin = {
        name : 'liuqiang',
        arr : [
            obj : {
                sex : 'male'
            },
            car : {
                size : 100
            },
            123
        ],
        work : {
            language : 'js'
        }
    }
    var target = clone(origin);
    console.log(target);

    // 12节 第1课
    ///标准答案
    function deepClone(origin, target) {
        //1、判断是不是原始值       typeof() object
        //2、判断是数组还是对象     arr.instanceof, toString, constructor 
        //3、建立相应的数组或对象
        // for in 也可以遍历数组
        var target = target || {},  //容错
            toStr = Object.prototype.toString,
            arrStr = '[object Array]';

        for(var prop in origin){
            if(origin.hasOwnProperty(prop)){
                if(originp[prop] !== null && typeof(origin[prop]) == 'object'){
                    if(toStr.call(origin[prop]) == arrStr){
                        target[prop] = [];
                    } else {
                        target[prop] = {};
                    }
                    /// 标准答案简化
                    target[prop] = toStr.call(origin[prop]) == arrStr ? [] : {};

                    deepClone(origin[prop], target[prop]);
                } else {
                    target[prop] = origin[prop];
                }
            }
        }
        return target;
    }
    var obj = {
        name : 'abc',
        age : 123,
        card : ['visa', 'master'],
        wife : {
            name : 'bcd',
            son : {
                name : 'aaa'
            }
        }
    }
```
###数组
* js的数组基于对象，越界取值赋值不会报错，除非调用数组没有的方法
> 定义方式：  
> 字面量形式：`var arr = [1,2,3,4];` 
> 构造函数形式：`var arr = new Array(1,2,3,4);`  

>`new Array()` 如果只传1个整数参数，这个参数只代表数组长度，如: `new Array(4)` 表示定义一个长度为4的数组，所以只有一个参数也不能是浮点数，因为长度不能是浮点数

* 数组的常用方法：es3.0 es5.0 es6.0 的版本
> ECMAScript, DOM,  BOM
* 1、改变原数组
``` js 
    //push:在数组后面添加，返回数组长度，原理：
    Array.prototype.push = function(){
        for(var i = 0; i < arguments.length; i++){
            this[this.length] = arguments[i];
        }
        return this.length;
    }
    // pop：删除，把数组的最后一个剪切并返回
    // shift 删除，把数组的第一个剪切并返回
    // unshift 在数组的前面添加，返回数组长度
    // reverse 逆转数组
    // splice(index, length, data)  从index位开始，截取length长度，在切口出添加新数据，返回截取的数组
    //  arr.splice(index, length, data) 
        //  -->arr.splice(index, length); --> arr.push(data);
        //  arr.splice(-1, length)
        //  --> -1表示倒数第一位：index= -1 + arr.length
    // sort()  升序排序
    // sort(1, 4, 6, 2, 10) --> [1, 10, 2, 4, 6]: 转字符串按ASC码比骄傲
    var arr = [1, 3, 5, 4, 10];
    arr.sort(function(a,b){
        // 从0位开始，按冒泡排序的规则传入
        //1、必须写两个形参
        //2、看返回值 1）当返回值为负数时，那么前面的数放在前面
        //           2）当返回值位整数，那么后面的数放在前面
        //           3）为0，不动
        // 例如：
        return a - b;   // 降序
        return b - a;   // 升序
        return Math.random() - 0.5;     //乱序
    });
```
* 2、不改变原数组
``` js
    // concat 连接两个数组并返回新数组
    // join('') 参数最好传字符串，按照传的参数把值连接成一个字符串
    // split('') 按照参数把字符串拆分成数组
    // join不传参按','逗号连接
    var arr = [1,2,3];
    var str = arr.join('-');    // "1-2-3"
    var newArr = str.split('-');    //  ["1", "2", "3"]
    // 例子：连接字符串
    var str0 = '123';
    var str1 = '234';
    var str2 = '432';
    var str = str0 + str1 + str2;   //方法1
    var arr = [str0, str1, str2];   //方法2，数组，for循环
    var str = arr.join('');         //方法3，数组，join
    // 方法1、2效率低，字符串在栈空间，先进后出每次取值很费
    // 方法3效率高，数组是堆空间，散列...(不懂)
    
    // toString 转字符串
    // slice(index) 从index位开始截取到末尾，index可为负数
    
```