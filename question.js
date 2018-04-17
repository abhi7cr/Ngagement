customElements.define('question-element',
  class extends HTMLElement {
    constructor() {
      super();
      const template = document
        .getElementById('question-template')
        .content;
      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(template.cloneNode(true));
  }
});
