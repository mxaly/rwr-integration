import ReactComponentIntegration from './react-component-integration';

class IntegrationsManager {
  constructor() {
    this.integrations = {
      'react-component': ReactComponentIntegration,
    };
  }

  get(name) {
    // handle missing one here;
    return this.integrations[name];
  }

  register(name, integration) {
    this.integrations[name] = integration;
  }
};

export default new IntegrationsManager;
