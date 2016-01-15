import React from 'react';
import ReactDOM from 'react-dom';

class ReactIntegration {
  constructor(store) {
    this.components = {};
    this.registerComponent = this.registerComponent.bind(this);
    this.getComponent = this.getComponent.bind(this);
    this.createComponent = this.createComponent.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
    this.unmountComponent = this.unmountComponent.bind(this);
  }

  registerComponent(name, component) {
    this.components[name] = component;
  }

  getComponent(name) {
    return this.components[name];
  }

  createComponent(name, props) {
    var constructor = this.getComponent(name);
    return React.createElement(constructor, props);
  }

  renderComponent(name, props, node) {
    var component = this.createComponent(name, props);
    ReactDOM.render(component, node);
  }

  unmountComponent(node) {
    ReactDOM.unmountComponentAtNode(node);
  }
}


export default new ReactIntegration;
