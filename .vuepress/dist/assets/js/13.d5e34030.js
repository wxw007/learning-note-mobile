(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{176:function(e,v,_){"use strict";_.r(v);var t=_(0),a=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"vue面试题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue面试题","aria-hidden":"true"}},[e._v("#")]),e._v(" vue面试题")]),e._v(" "),_("h3",{attrs:{id:"生命周期钩子函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子函数","aria-hidden":"true"}},[e._v("#")]),e._v(" 生命周期钩子函数")]),e._v(" "),_("p",[e._v("在 "),_("code",[e._v("beforeCreate")]),e._v(" 钩子函数调用的时候，是获取不到 "),_("code",[e._v("props")]),e._v(" 或者 "),_("code",[e._v("data")]),e._v(" 中的数据的，因为这些数据的初始化都在 "),_("code",[e._v("initState")]),e._v(" 中。")]),e._v(" "),_("p",[e._v("然后会执行 "),_("code",[e._v("created")]),e._v(" 钩子函数，在这一步的时候已经可以访问到之前不能访问到的数据，但是这时候组件还没被挂载，所以是看不到的。")]),e._v(" "),_("p",[e._v("接下来会先执行 "),_("code",[e._v("beforeMount")]),e._v(" 钩子函数，开始创建 "),_("code",[e._v("VDOM，最后执行")]),e._v(" "),_("code",[e._v("mounted")]),e._v(" 钩子，并将 "),_("code",[e._v("VDOM")]),e._v(" 渲染为真实 "),_("code",[e._v("DOM")]),e._v(" 并且渲染数据。组件中如果有子组件的话，会递归挂载子组件，只有当所有子组件全部挂载完毕，才会执行根组件的挂载钩子。")]),e._v(" "),_("p",[e._v("接下来是数据更新时会调用的钩子函数 "),_("code",[e._v("beforeUpdate")]),e._v(" 和 "),_("code",[e._v("updated")]),e._v("，这两个钩子函数没什么好说的，就是分别在数据更新前和更新后会调用。")]),e._v(" "),_("p",[e._v("另外还有 "),_("code",[e._v("keep-alive")]),e._v(" 独有的生命周期，分别为 "),_("code",[e._v("activated")]),e._v(" 和 "),_("code",[e._v("deactivated")]),e._v(" 。用 "),_("code",[e._v("keep-alive")]),e._v(" 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 "),_("code",[e._v("deactivated")]),e._v(" 钩子函数，命中缓存渲染后会执行 "),_("code",[e._v("actived")]),e._v(" 钩子函数。")]),e._v(" "),_("p",[e._v("最后就是销毁组件的钩子函数 "),_("code",[e._v("beforeDestroy")]),e._v(" 和 "),_("code",[e._v("destroyed")]),e._v("。前者适合移除事件、定时器等等，否则可能会引起内存泄露的问题。然后进行一系列的销毁操作，如果有子组件的话，也会递归销毁子组件，所有子组件都销毁完毕后才会执行根组件的 "),_("code",[e._v("destroyed")]),e._v(" 钩子函数。")]),e._v(" "),_("h3",{attrs:{id:"组件中-data-什么时候可以使用对象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组件中-data-什么时候可以使用对象","aria-hidden":"true"}},[e._v("#")]),e._v(" 组件中 data 什么时候可以使用对象")]),e._v(" "),_("p",[e._v("组件复用时所有组件实例都会共享 "),_("code",[e._v("data")]),e._v("，如果 "),_("code",[e._v("data")]),e._v(" 是对象的话，就会造成一个组件修改 "),_("code",[e._v("data")]),e._v(" 以后会影响到其他所有组件，所以需要将 "),_("code",[e._v("data")]),e._v(" 写成函数，每次用到就调用一次函数获得新的数据。")]),e._v(" "),_("p",[e._v("当我们使用 "),_("code",[e._v("new Vue()")]),e._v(" 的方式的时候，无论我们将 "),_("code",[e._v("data")]),e._v(" 设置为对象还是函数都是可以的，因为 "),_("code",[e._v("new Vue()")]),e._v(" 的方式是生成一个根组件，该组件不会复用，也就不存在共享 "),_("code",[e._v("data")]),e._v(" 的情况了。")])])}],!1,null,null,null);v.default=a.exports}}]);