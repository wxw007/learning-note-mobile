(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{167:function(t,a,e){t.exports=e.p+"assets/img/1.4fd85c39.jpg"},171:function(t,a,e){"use strict";e.r(a);var n=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"js基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js基础","aria-hidden":"true"}},[t._v("#")]),t._v(" js基础")]),t._v(" "),n("h3",{attrs:{id:"js数据数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js数据数据类型","aria-hidden":"true"}},[t._v("#")]),t._v(" js数据数据类型")]),t._v(" "),n("ol",[n("li",[t._v("原始类型 "),n("strong",[t._v("(6个)")])])]),t._v(" "),n("ul",[n("li",[t._v("boolean")]),t._v(" "),n("li",[t._v("null")]),t._v(" "),n("li",[t._v("undefined")]),t._v(" "),n("li",[t._v("string")]),t._v(" "),n("li",[t._v("number")]),t._v(" "),n("li",[t._v("symbol")])]),t._v(" "),n("blockquote",[n("p",[t._v("原始类型都是按值传递")])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("引用类型")])]),t._v(" "),n("ul",[n("li",[t._v("object")])]),t._v(" "),n("h3",{attrs:{id:"判断数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#判断数据类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 判断数据类型")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("typeof")]),t._v(" 对于原始类型来说，除了 "),n("code",[t._v("null")]),t._v(" 都可以显示正确的类型")]),t._v(" "),n("li",[n("code",[t._v("typeof")]),t._v(" 对于对象来说，除了函数都会显示 "),n("code",[t._v("object")]),t._v("，所以说 "),n("code",[t._v("typeof")]),t._v(" 并不能准确判断变量到底是什么类型")])]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("typeof")]),t._v(" 只能判断原始类型")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("instanceof")]),t._v("用来判断A是否为B的实例，表达式为：A "),n("code",[t._v("instanceof")]),t._v(" B，如果A是B的实例，则返回true，否则返回false。"),n("code",[t._v("instanceof")]),t._v("检测的是原型，内部机制是通过判断对象的原型链中是否有类型的原型。")])]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("instanceof")]),t._v(" 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("constructor")]),t._v(": ' '.constructor === String")])]),t._v(" "),n("blockquote",[n("p",[t._v("null 和 undefined 无constructor，这种方法判断不了。 如果自定义对象，开发者重写prototype之后，原有的constructor会丢失。")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("Object.prototype.toString()")]),t._v("   toString()是Object的原型方法，调用该方法，默认返回当前对象的[[Class]]。这是一个内部属性，其格式为[object Xxx],其中Xxx就是对象的类型。对于"),n("code",[t._v("Object")]),t._v("对象，直接调用toString()就能返回[object Object],而对于其他对象，则需要通过call、apply来调用才能返回正确的类型信息。")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Object.prototype.toString.call('') // [object String]\n")])])]),n("p",[n("code",[t._v("Object.prototype.toString()")]),t._v(" 是最推荐的")]),t._v(" "),n("h3",{attrs:{id:"this"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#this","aria-hidden":"true"}},[t._v("#")]),t._v(" this")]),t._v(" "),n("h4",{attrs:{id:"普通函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#普通函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 普通函数")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function foo() {\n  console.log(this.a)\n}\nvar a = 1\nfoo()\n\nconst obj = {\n  a: 2,\n  foo: foo\n}\nobj.foo()\n\nconst c = new foo()\n")])])]),n("ul",[n("li",[t._v("对于直接调用 foo 来说，不管 foo 函数被放在了什么地方，this 一定是 window")]),t._v(" "),n("li",[t._v("对于 obj.foo() 来说，我们只需要记住，谁调用了函数，谁就是 this，所以在这个场景下 foo 函数中的 this 就是 obj 对象")]),t._v(" "),n("li",[t._v("对于 new 的方式来说，this 被永远绑定在了 c 上面，不会被任何方式改变 this")])]),t._v(" "),n("h4",{attrs:{id:"箭头函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 箭头函数")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function a() {\n  return () => {\n    return () => {\n      console.log(this)\n    }\n  }\n}\nconsole.log(a()()())\n")])])]),n("p",[t._v("首先箭头函数其实是没有 this 的，箭头函数中的 this 只取决包裹箭头函数的第一个普通函数的 this。在这个例子中，因为包裹箭头函数的第一个普通函数是 a，所以此时的 this 是 window。另外对箭头函数使用 bind 这类函数是无效的。\nå\n最后种情况也就是 bind 这些改变上下文的 API 了，对于这些函数来说，this 取决于第一个参数，如果第一个参数为空，那么就是 window。")]),t._v(" "),n("p",[t._v("如果对一个函数进行多次 bind，那么上下文会是什么呢？")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let a = {}\nlet fn = function () { console.log(this) }\nfn.bind().bind(a)() // => ?\n")])])]),n("p",[t._v("不管我们给函数 bind 几次，fn 中的 this 永远由第一次 bind 决定")]),t._v(" "),n("h4",{attrs:{id:"this的优先级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#this的优先级","aria-hidden":"true"}},[t._v("#")]),t._v(" this的优先级")]),t._v(" "),n("p",[t._v("首先，new 的方式优先级最高，接下来是 bind 这些函数，然后是 obj.foo() 这种调用方式，最后是 foo 这种调用方式，同时，箭头函数的 this 一旦被绑定，就不会再被任何方式所改变。")]),t._v(" "),n("p",[n("img",{attrs:{src:e(167),alt:"this流程图"}})]),t._v(" "),n("h3",{attrs:{id:"闭包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#闭包","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),n("h4",{attrs:{id:"什么是闭包？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是闭包？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是闭包？")]),t._v(" "),n("p",[t._v("闭包就是指有权访问另一个函数作用域中的变量的函数。外部函数调用之后其变量对象本应该被销毁，但闭包的存在使我们仍然可以访问外部函数的变量对象")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("例子: 闭包实现一个函数，每次调用返回值加1\nfunction a(){\n    var n = 1;\n    return function(){\n       return n++\n    }\n}\nvar b = a()\n\nb() // 1\nb() // 2\nb() // 3\n")])])])])}],s=e(0),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);a.default=o.exports}}]);