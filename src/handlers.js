import nodes from './nodes';

function mountNodes() {
  nodes.mountNodes();
}

function unmountNodes() {
  nodes.unmountNodes();
}

function handleEvent(eventName, callback) {
  document.addEventListener(eventName, callback);
}

export default {
  handleTurbolinksEvents: function handleTurbolinksEvents() {
    let unmountEvent;

    if (Turbolinks.EVENTS) {
      unmountEvent = Turbolinks.EVENTS.BEFORE_UNLOAD;
    } else {
      unmountEvent = 'page:receive';
      Turbolinks.pagesCached(0);

      // if (RWR.RAILS_ENV === 'development') {
      //  console.warn(RWR._messages.warnings.turbolinksVersion); need logger here
      // }
    }
    handleEvent('page:change', mountNodes);
    handleEvent(unmountEvent, unmountNodes);
  },

  handleNativeEvents: function handleNativeEvents() {
    document.addEventListener('DOMContentLoaded', mountNodes);
  },
};
