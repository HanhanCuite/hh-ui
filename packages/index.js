import Button from "./button";
// 存储组件列表
const components = [Button];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 遍历注册全局组件
  components.forEach((item)=> {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export { Button };
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  version: "0.1.0",
  install
};
