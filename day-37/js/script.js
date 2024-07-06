class F8 {
  static components = {};
  static component(name, obj) {
    // console.log(name, option);
    this.components[name] = obj;
    class Component extends HTMLElement {
      constructor() {
        //Khởi tạo customEl
        super();
        this.attachShadow({ mode: "open" });
        if (obj.data) {
          this.state = obj.data();
        }
      }
      connectedCallback() {
        var _this = this;
        _this.render();
        _this.addEventListener();
      }
      render() {
        let template = obj.template;
        console.log(template);
      }
    }
    customElements.define(name, Component);
  }
}

F8.component("counter-app", {
  data: () => {
    return {
      count: 0,
      title: "Counter App",
    };
  },
  template: `
    <h1>{{ title }}</h1>
    <h2>Đã đếm: {{ count }}</h2>
    <button v-on:click="count--">-</button>
    <button v-on:click="count++">+</button>
    <button v-on:dblclick="Xin chào F8">Change</button>
    `,
});

F8.component("header-component", {
  template: `<h1>Header</h1>`,
});
