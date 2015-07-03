var flag = false; //调试开关 
// env 既是所谓的环境 
// 而inner就是所谓的表达式, name即是所谓的自由变量 
function env() {
        //整个env可以看作是一个c<div></div>losure 
        var name = "zhutao";

        function inner() {
            return name + " is a student.";
        }
        return inner; //返回的是一个内部函数 
    } //closure结束 

// 此处是最神奇的地方, 代码执行在此处, inner函数其实已经出了env的body, 
// 而仍然能够被引用, 这就是所谓形成了一个 closure 
var inner_func_ref = env(); // 这时候inner_func_ref引用的就是inner()函数对象 
alert(inner_func_ref()); // zhutao is a student.
