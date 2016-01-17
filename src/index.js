import reactIntegration from './react-integration';
import nodes from './nodes';
import integrationsManager from './integrations-manager';
import env from './env';

export { reactIntegration as reactIntegration };
export { nodes as nodes };
export { integrationsManager as integrationsManager };
export { env as env };

export default {
  registerComponent: reactIntegration.registerComponent,
  getComponent: reactIntegration.getComponent,
  createComponent: reactIntegration.createComponent,
  renderComponent: reactIntegration.renderComponent,
  unmountComponent: reactIntegration.unmountComponent,
  mountNodes: nodes.mountNodes,
  unmountNodes: nodes.unmountNodes,
};
