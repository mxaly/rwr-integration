import reactIntegration from './react-integration';
import nodes from './nodes';
import integrationsManager from './integrations-manager';
import handlers from './handlers';
// import Store from './store';

export { reactIntegration as reactIntegration };
export { nodes as nodes };
export { integrationsManager as integrationsManager };
export { handlers as handlers };

export default {
  registerComponent: reactIntegration.registerComponent,
  getComponent: reactIntegration.getComponent,
  createComponent: reactIntegration.createComponent,
  renderComponent: reactIntegration.renderComponent,
  unmountComponent: reactIntegration.unmountComponent,

  run: () => {
    if (typeof Turbolinks !== 'undefined' && Turbolinks.supported) {
      handlers.handleTurbolinksEvents();
    } else {
      handlers.handleNativeEvents();
    }
  },
};
