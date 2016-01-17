import IntegrationsManager from './integrations-manager';

const ELEMENT_ATTR = 'data-react-element';
const PAYLOAD_ATTR = 'data-payload';
const INTEGRATION_NAME_ATTR = 'data-integration-name';
const OPTIONS_ATTR = 'data-options';


function _findDOMNodes(searchSelector) {
  const selector = searchSelector || '[' + ELEMENT_ATTR + ']';
  return document.querySelectorAll(selector);
}

function _nodeData(node) {
  const rawPayload = node.getAttribute(PAYLOAD_ATTR);
  const rawOptions = node.getAttribute(OPTIONS_ATTR);

  return {
    payload: rawPayload && JSON.parse(rawPayload),
    options: rawOptions && JSON.parse(rawOptions),
    integrationName: node.getAttribute(INTEGRATION_NAME_ATTR),
  };
}

function _mountNode(node) {
  const data = _nodeData(node);
  const config = {
    node,
    payload: data.payload,
  };
  const integration = IntegrationsManager.get(data.integrationName);
  if (!integration) {
    // console.error(RWR._messages.errors.missingIntegration(data.integrationName))
  } else if (typeof(integration.mount) === 'function') {
    integration.mount(config, data.options);
  }
}

function _unmountNode(node) {
  const data = _nodeData(node);
  const config = {
    node,
    payload: data.payload,
  };

  const unmountFunction = IntegrationsManager.get(data.integrationName).unmount;
  if (typeof(unmountFunction) === 'function') { unmountFunction(config, data.options); }
}

export default {
  mountNodes: function mountNodes(searchSelector) {
    const nodes = _findDOMNodes(searchSelector);
    for (let i = 0; i < nodes.length; ++i) {
      _mountNode(nodes[i]);
    }
  },

  unmountNodes: function unmountNodes(searchSelector) {
    const nodes = _findDOMNodes(searchSelector);
    for (let i = 0; i < nodes.length; ++i) {
      _unmountNode(nodes[i]);
    }
  },
};
