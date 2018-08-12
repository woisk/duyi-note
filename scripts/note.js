/** 
 * !1.1
 * *特点1：解释性语言：一行一行翻译 JavaScript php
 *  优点：跨平台
 *  不足：稍微慢
 *      编译性语言：通篇翻译，生成翻译完的文件，计算机执行翻译完的文件 c c++
 *      优点：运行快
 *      缺点：移植性不好，不跨平台
 *          特殊：java：.java --》 javac --》 .class --》 jvm（虚拟机，帮助实现跨平台） --》解释执行
 * *特点2：单线程，一个执行体一个时间只能做一件事情（同步执行）
 *      多线程：一个执行体一个时间可以做多件事（异步执行）
 * 
 * *ECMA标准：ECMAScript
 *  ecmascritp
 *  dom
 *  bom
 * 
 * *js执行队列，轮转时间片
 * 
 * !1.2
 * *主流浏览器及内核
 * IE       trident
 * Chrome   webkit/blink
 * firefox  Gecko
 * Opera    presto
 * Safari   webkit
 * 
 * *js的引入
 * 页面级：<script>代码</script>
 * 外部js文件
 * 
 * *结构 行为 样式相分离
 * 
 * *js基本语法
 * 变量声明
 *  声明、赋值相分离
 *  var a = 100; //声明一个变量a，并给a赋值为100
 *  单一变量声明：var a;
 * 命名规则
 *  以英文字母、_、或者 $ 开头
 *  变量名可以包含英文字母、_、$ 、数字
 *  不可以用系统的关键字、保留字作为变量名
 * 
 * *数据类型
 *  原始值 Number(数字天生浮点型) String() Boolean undefined null  共5种
 *  引用值 array object function date RegExp
 *  值类型由值决定
 * js是一种动态语言--》解释性语言--》脚本语言
 * 
 * *错误分成两种
 *  1、语法解析错误
 *  2、逻辑错误（标准错误）
 * 
 * *运算符
 *  “+”：1、数学运算，字符连接；2、任何数据类型加字符串都等于字符串
 *  “-”，“*”，“/”，“%”，“()”
 *  优先级，“=”最弱，“()”最高
 *  赋值的顺序，自右向左；计算的顺序：自左向右
 * 
 */

 // !2.2
 // ?交换两个数字的值
//  function changeValue(num1, num2){
//      num1 = num1 + num2;
//      num2 = num1 - num2;
//      num1 = num1 - num2;
//  }
/**
 * *asc码,A65, a97
 * 字符串比较,从第一位开始一次比较asc码
 *  '10' < '8' === true
 * undefined == undefined   true
 * NaN == NaN   false
 * 
 * *逻辑运算符  &&  ||  !
 *  本质用法:运算符,用于运算,返回结果
 *  && 先看第一个表达式转换成布尔值的结果, 如果结果为真, 那么它会看第二个表达式转换为布尔值的结果
 *       如果只有两个表达式的话, 只要看到第二个表达式, 就可以返回该表达式的值了,依此类推:    1 && 2 && 3 == > 3
 *       返回第一个转换为布尔值的结果为false的表达式的结果:  1 && 3 && 0 && 2 == > 0
 *       短路语句,有中断作用,遇到false后面就中断: data && fn(data), 不关注返回值,只关注能不能读到第二句,能读到后面才继续执行
 *         可用于简化if代码
 *  ||  返回第一个转换为布尔值的结果为true的表达式的结果
 *      常用于写兼容代码
 */
// div.onclick = function(e){
    // //非IE浏览器
    // var event = e;
    // //IE浏览器
    // var event = window.event;
    // 兼容写法
    // var event = e || window.event;
// }

/**
 * !3.2 typeof,类型转换
 * *初识引用值 数组,对象
 * *编程形式的区别
 *  1、面向过程: c
 *  2、面向对象: 
 *  js即面向对象，也面向过程
 * 
 * *typeof，原始值：number，string，boolean，undefined，null 引用值：object，function，undefined
 * *类型转换
 *  显示类型转换：
 *   Number()转成数字，如果参数不是数字字符串或者undefined，返回NaN；Number(null)==0；Number(false)==0;
 *   parseInt()转成整数，先Number再转成整数；parseInt(num， radix),目标进制为基底把num转换成10进制的数
 *    parseInt(10, 2)==2，2进制的10转成10进制为2；parseInt(16, 16)==22;16进制的16转成10进制为22
 *    砍断原则parseInt('213adc')==213，但是parseInt('adf23')==NaN
 *   parseFloat()
 *   String()
 *    toString()类似，但是undefined与null不能用toString
 *    var num = 2;num.toString(2)=='10',把数字转换成目标进制的数
 *    num = '2';num.toString(2)=='2';
 *   Boolea()
 *  隐式类型转换
 *   isNaN(),隐式调用Number；isNaN(NaN)==true；isNaN('asdf')==true；
 *   ++，--，+,-（一元正负），
 *   +（加），任何类型+字符串=字符串
 *   -,*,/,%，转换成数字
 *   && ||，转成布尔值
 *   >,<,>=,<=，如果数字和字符串比转成数字（数字优先）
 *   ==,!=，undefined==null ==> true
 *  不发生类型转换：===，!==
 *  没定义的值只有在typeof里面不报错
 * 
 *  !总结：
 *  typeof(undefined) = 'undefined'
 *  typeof(null)      = 'object'
 */

 /**
  * !4.1函数，小练习，初始作用域
  * *函数
  *  定义：函数声明，函数表达式
  * *预编译前奏
  *  1、imply global 暗示全局变量：即任何变量，如果变量未经声明就赋值，此变量就为全局对象所有。
  *     eg：a = 123;
  *     eg: var a = b = 123;
  *  2、一切声明的全局变量，全是window的属性。
  *     eg: var a = 123; ====> window.a = 123;
  * *预编译四部曲：
  *     1、创建AO对象；
  *     2、找形参和变量声明，将变量和形参名作为AO对象的属性名，值为undefined；
  *     3、将实参和形参相统一；
  *     4、在函数体里面找函数声明，值赋予函数体
  *  *预编译发生在函数执行的前一刻
  *     ?练习：下面函数执行分别打印出什么：
  *     ?1、
  *     function fn (a){
  *         console.log(a);
  *         var a = 123;
  *         console.log(a);
  *         function a () {}
  *         console.log(a);
  *         var b = function () {}
  *         console.log(b);
  *         function d() {};
  *     }
  *     fn(1);
  *     预编译s分析：AO{
  *         a: funciion () {},
  *         b: undefined,
  *         d: function () {}
  *     }
  *     ?2、
  *     function test (a, b) {
  *         console.log(a);
  *         console.log(b);
  *         var b = 234;
  *         console.log(b);
  *         a = 123;
  *         console.log(a);
  *         function a () {}
  *         var a;
  *         b = 234;
  *         var b = function () {}
  *         console.log(a);
  *         console.log(b);
  *     }
  *     test(1);
  *     预编译分析：AO{
  *         a: function a () {},
  *         b: undefined
  *     }
  *     function () {}
  *     undefined
  *     234
  *     123
  *     123
  *     function () {}
  *     ?3、
  *     console.log(test);
  *     function test (test) {
  *         console.log(test);
  *         var test = 123;
  *         console.log(test);
  *         function test () {}
  *     }
  *     test(1);
  *     var test = 123;
  *     console.log(test);
  *     预编译分析：
  *     GO{
  *         test: function test(){}
  *     }
  *     AO{
  *         test: function () {}
  *     }
  *     输出：
  *     function test(){}
  *     function () {}
  *     123
  *     123;  
  *     ?4
  *     function test () {
  *         console.log(b);
  *         if(a){
  *             var b = 100;
  *         }
  *         c = 234;
  *         console.log(c);
  *     }   
  *     var a;
  *     test();
  *     a = 10;
  *     console.log(c);
  *     预编译分析：
  *     GO{
  *         a: undefined
  *     }
  *     AO{
  *         b: undefined
  *     }
  *     输出：
  *     undefined
  *     234
  *     234
  *     ?5
  *     function bar () {
  *         return foo;
  *         foo = 10;
  *         function foo () {}
  *         var foo = 11;
  *     }
  *     console.log(bar()); === > function () {}
  *     ?6
  *     cosnole.log(bar()); === > 11
  *     function bar () {
  *         foo = 10;
  *         function foo () {}
  *         var foo = 11;
  *         return foo;
  *     }
  *     ?7 求：window.foo
  *     (window.foo || (window.foo = 'bar'));
  *     思路：里面小括号优先级最高，所以先赋值
  *     ?8
  *     a = 100;
  *     function demo (e) {
  *         function e () {}
  *         arguments[0] = 2;
  *         console.log(e);
  *         if(a){
  *             var b = 123;
  *             function c () {
  *                 新的语法不允许if里面进行函数声明
  *             }
  *         }
  *         var c;
  *         a = 10;
  *         var a;
  *         console.log(b);
  *         f = 123;
  *         console.log(c);
  *         console.log(a);
  *     }
  *     var a ;
  *     demo(1);
  *     console.log(a);
  *     console.log(b);
  *     预编译分析：
  *     GO{
  *         a: undefined,
  *         demo: function () {}
  *     }
  *     执行：
  *     GO{
  *         a: 100,
  *         demo: ...
  *     }
  *     AO{
  *         e: undefined, --> 1, --> function(){} --> 2
  *         b: undefined,
  *         c: undefined / fn
  *     }
  *     ?8 
  *     var str = false + 1;
  *     console.log(str);
  *     var demo = false == 1;
  *     console.log(demo);
  *     if(typeof(a) && -true + (+undefined) + ""){
  *         console.log('输出1');
  *     }
  *     if(11 + '11' * 2 == 33){
  *         console.log('输出2');
  *     }
  *     !!" " + !!"" - !!false || console.log('输出不了');
  *     思路：
  *         *1、
  *         typeof(undefined)='undefined'
  *         -true: '-'为负号，不是减号，隐式类型转换为数字得：NaN
  *         字符串 || NaN ===> 返回 字符串
  *         +undefined: '+'为正号，不是加号，隐式类型转换位数字得：NaN
  *         字符串 + NaN ===> 字符串NaN + "" ===> 字符串
  *         所以可以’输出1'
  *         *2、
  *         '11' * 2，字符串11隐式类型转换为数字11
  *         *3、
  *         " "，有空格隐式类型转换为true，!!true = true;
  *         ""，没空格，转为false，!!false = false;
  *         运算操作符 + - 的优先级比逻辑运算符高  1 - 1 || 2 ===> 2
  *         (true + false - false) || console.log('输出不了');
  *         ==> (1 + 0 - 0)|| console.log('输出不了');
  *         ==> 1 || console.log('输出不了');
  *     ?9：求x
  *     var x = 1;
  *     if(function f () {console.log('aa');}){
  *         x += typeof(f);
  *     }
  *     思路：f不是全局的函数声明，在if的括号里，这是f为函数，隐式转换boolean值为true，然后f就被释放
  *     if里面的表达式可以继续执行
  *     
  */

  /**
   * !7 闭包
   * *两个或多个函数嵌套，内部函数保存到外部会形成闭包，外部保存的函数执行是可以访问到函数外部的变量
   * *闭包的作用
   *    ?1、实现共有变量，如：累加器(函数每次执行，不依赖外部变量)
   *    function add(){
   *        var num = 0;
   *        function a (){
   *            console.log(++num);
   *        }
   *        return a;
   *    }
   *    var myAdd = add();
   *    myAdd(); ---> 1
   *    myAdd(); ---> 2
   *    myAdd(); ---> 3
   *    ?2、可以做缓存（存储结构）
   *    function test(){
   *        var food = 'apple';
   *        var obj = {
   *            eatFood: function () {
   *                if(food != ''){
   *                    console.log('I am eating ' + food);
   *                    food = '';
   *                } else {
   *                    console.log('There is nothing');
   *                }
   *            },
   *            pushFood: function (myFood){
   *                food = myFood;
   *            }
   *        }
   *        return obj;
   *    }
   *    var person = test();
   *    person.eatFood();   
   *    person.eatFood();
   *    person.pushFood('banana');
   *    person.eatFood();
   *    ?3、可以实现封装，属性私有化
   *    ?4、模块化开发，防止全局变量污染
   * *只有表达式才能被执行符号‘()’执行
   * *被执行符号执行的函数定义马上被释放，函数的引用不被保存
   *  ?练习：
   *    function test(){
   *        var arr = [];
   *        for(var i = 0; i < 10; i++){
   *            arr[i] = function(){
   *                console.log(i);
   *            }
   *        }
   *        return arr;
   *    }
   *    var myArr = test();
   *    for(var j = 0; j < myArr.length; j++){
   *        myArr[j]();
   *    }
   *    输出：10101010101010101010，因为i是最后函数执行的时候才取值，此时test()执行完毕，i为10
   *    *arr[i] = function(){console.log(i)}
   *    *把一个函数的引用赋值给数组的当前位，数组的当前位要被马上索取出来，arr[i]是一个执行语句，跟后面的函数内容没有关系，所以函数里面的内容不会马上求i的值，函数体里面的内容只有在函数执行的时候才会执行。
   *    输出 1 ~ 9：
   *    function test(){
   *        var arr = [];
   *        for(var i = 0; i < 10; i++){
   *            (function(j){
   *                arr[j] = function(){
   *                    console.log(j);
   *                }
   *            }(i));
   *        }
   *        return arr;
   *    }
   * *闭包的产生会引起原来的作用域链不释放，内存空间被占用过多，造成内存泄漏
   *  ?1、计算一个字符串的字节长度
   *    function retByteslen(target){
   *        var count = target.length;
   *        for(var i = 0; i < target.length; i++){
   *            if(target.charCodeAt(i) > 255){
   *                count += 1;
   *            }
   *        }
   *        console.log(count);
   *    }
   *  ?2、
   *    var f = {
   *        function f () {
   *            return '1';
   *        },
   *        funtion g () {
   *            return 2;
   *        }
   *    }();
   *    cosnoel.log(typeof (f));
   *    思路：f 对象的花括号里有','逗号运算符，返回最后一个，所以 f=function g () {return 2;}();
   *        打印结果为"number"
   *  ?3、
   *    var x = 1;
   *    if(function f () {}){
   *        x += typeof (f);
   *    }
   *    console.log(x); --> 1undefined
   *    解析：
   *    if的括号把function f () {} 变成表达式，不再是函数声明，f就立刻释放了
   * *包装类
   *  *原始值没有属性，对原始类型数据进行操作的时候JS引擎会先对原始类型数据进行包装
   *   如: var str = 'abc';
   *       str.length --> new String('abc').length --> 3, 然后立刻把new出来的对象销毁;
   */

   /**
    * !9 原型，原型链
    * *1、原型是function对象的一个属性，它定义了构造函数制造出的对象的公共祖先。通过该构造函数产生的对象，科尔以继承该圆形的属性和方法。原型也是对象。
    *  Person.prototype --- 原型，在函数声明的时候就定义好了
    *  Person.prototype = {} --- 是祖先
    *  function Person(){}
    *  var person = new Person();
    *  构造函数funcion Person () {}，可以构造出原型为Person.prototype的对象
    *  换句话说：原型Person.prototype，通过构造函数function Person(){} 构造出自己的对象
    * *2、利用原型特点和概念，可以提取共有属性
    *   通过原型提取公有属性，不在构造函数中去执行生成，提高效率
    * *3、对象如何查看原型 --> 隐式属性：__proto__
    *   __proto__ 相当于一个连接器，连接对象和它的原型
    * *4、对象如何查看构造函数：--> constructor
    * 
    * *绝大多数对象最终都会继承自Object.prototype
    * ?1、
    *   Person.prototype = {
    *     name: 'a',
    *     sayName: function(){consoel.log(this.name);}
    *   }
    *   function Person () {this.name = 'b';}
    *   var person = new Person();
    *   person.sayName(); -- > b 谁调用的方法，this就指向谁
    *   person.prototype.sayName(); -- > a
    * ?2、
    *   Person.prototype = {height:100;}
    *   function Person () {this.eat = function () {this.height ++;}}
    *   var person = new Person();
    *   person.eat();  -- > person.height == 101;
    *   Person.prototype == 100;
    * ?3、
    *   var obj = {} --> 原型为Object
    *   obj.__proto__ === Object.prototype
    * *Object.create() 原型不是Object.prototype特例：var obj = Object.create(null); --> obj.prototype === null
    *  所以，null 和 undefined 没有toString()方法 ，因为没有经过包装类，没有Object.prototype原型
    * *123.toString() --> 报错
    *   首先，'.'点运算符这里是数学运算符，优先级最高，程序先将123.识别为一个浮点数，浮点'.'后面只能是数字
    *   var num = 123;
    *   num.toString(); --- > new Number(num).toString();
    *   Number.prototype.toString() = function(){}，重写Object.toString() 方法
    * 
    * !js的可正常计算的数字范围：小数点前16位，后16位
    * 
    * !call / apply 改变this指向
    *  *区别：传参列表不同，call 依次传参，apply 数组传参(传arguments))
    *   function Person (name, age){
    *       this.name = name;
    *       this.age = age;
    *   }
    *   var person = new Person('deng', 100);
    *   var obj = {};
    *   Person.call(obj); ---> undefined  call改变了this的指向
    *   Person.call(obj, 'cheng', 300); --- > obj === {name:'cheng',age:300}
    *   Person.call() === Person() call没穿参数，与普通调用没有区别
    *   这样，可以借助Person函数来构造obj，借助别人的方法来实现自己对象的封装（当自己的需求完全涵盖别人方法的功能）
    *  ?1、
    *   function Person(name, age, sex){
    *       this.name = name;
    *       this.age = age;
    *       this.sex = sex;
    *   }
    *   function Student(name, age, sex, tel, grade){
    *       //this.name = name;
    *       //this.age = age;
    *       //this.sex = sex;
    *       Person.call(this, name, age, sex);
    *       this.tel = tel;
    *       this.grade = grade;
    *   }
    *   var student = new Student('sunny', 15, 'male', 123, 1);
    *  ?2、
    *   function Wheel(wheelSize, style){
    *       this.wheelSize = wheelSize;
    *       this.style = style;
    *   }
    *   function Sit(c, sitCole){
    *       this.c = c;
    *       this.sitColer = sitColor;
    *   }
    *   function Model(height, width, len){
    *       this.height = height;
    *       this.width = width;
    *       this.len = len;
    *   }
    *   function Car(wheelSize, style, c, sitColor, height, width, len){
    *       Wheel.call(this, wheelSize, style);
    *       Sit.call(this, c, sitColor);
    *       Model.call(this, height, width, len);
    * 
    *       Wheel.apple(this, [wheelSize, style]);
    *       Sit.apple(this, [c, sitCole]);
    *       Model.apple(this, [height, width, len]);
    *   }
    *   var car = new Car(18, '炫', '舒服', '蓝色', 100, 100, 100);
    *   *造车工厂不自己生产零件，只做装配，调用车间的方法生产零件就可以
    */