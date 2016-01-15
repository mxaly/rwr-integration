import ReactIntegration from './react-integration';

export default {
  mount(config, options) {
    ReactIntegration.renderComponent(options.name, config.payload, config.node);
  },

  unmount(config) {
    ReactIntegration.unmountComponent(config.node);
  },
};
