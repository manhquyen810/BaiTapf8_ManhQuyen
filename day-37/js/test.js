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
