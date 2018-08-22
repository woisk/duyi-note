

// 封装type方法， 精确判断类型
function type(obj) {
    if (typeof obj == "object") {
        var toStr = Object.prototype.toString;
        if (toStr.call(obj) == "[object Null]") {
            return "null";
        } else if (toStr.call(obj) == "[object Number]") {
            return "number Object";
        } else if (toStr.call(obj) == "[object String]") {
            return "string Object";
        } else if (toStr.call(obj) == "[object Boolean]") {
            return "boolean Object";
        } else if (toStr.call(obj) == "[object Array]") {
            return "array";
        } else {
            return "object";
        }
    } else {
        return typeof obj;
    }
}

// 数组去重，在原型链上编程  unique
Array.prototype.unique = function () {
    var obj = {};
    for (var i = 0; i < this.length; i++) {
        obj[this[i]] = this[i];
    }
    this.splice(0);
    for (var prop in obj) {
        this.push(obj[prop]);
    }
}

// 找出字符串第一个出现的没有重复的字符
function firstNoRepeatedChar(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]] += 1;
        } else {
            obj[str[i]] = {
                count: 1,
                index: i
            };
        }
    }
    var index = str.length;
    for (var prop in obj) {
        console.log(prop);
        if (obj.hasOwnProperty(prop) && obj[prop].count == 1) {
            index = index > obj[prop].index ? obj[prop].index : index;
        }
    }
    return str[index];
}

// !输入一串低于10位的数字，输出这串数字的中文大写
// TODO:未完成
function chineseCapital(num) {
    var str = '';
    var numStr = num + '';
    if (numStr.length > 8) {
        var hm = parseInt(num / 100000000);
        var n = num % 100000000
        str += chineseCapital(hm) + '亿';
        str += chineseCapital(n);
    } else if (numStr.length > 4) {
        var mm = parseInt(num / 10000);
        var tt = num % 10000;
        str += chineseCapital(mm) + '万';
        str += chineseCapital(tt);
    } else {
        console.log(num);
        var s = '';
        for (var i = numStr.length - 1; i >= 0; i--) {
            if (numStr[i] == '0' && s == '') {
                s = '';
            } else {
                var n = capital(numStr[i], 4 - i);
                // if(5 - numStr.length )
                var t = tally(4 - i);
                // if(n == '零' || ){
                //     t = '';
                // }
                s = n + t + s;
            }
        }
        str += s;
    }
    return str;
}
function capital(char) {
    switch (char) {
        case '1':
            return '壹';
        default:
            return '零';
    }
}
function tally(index) {
    var states = ['', '拾', '佰', '仟', '万'];
    return states[index];
}