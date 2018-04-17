customElements.define('question-element',
  class extends HTMLElement {
    constructor() {
      super();
      const template = document
        .getElementById('question-template')
        .content
      const shadowRoot = this.attachShadow({mode: 'open'})
      let style = document.createElement('style');
      style.textContent = '::slotted(label) { font-weight: bold;}'
      shadowRoot.appendChild(style)
      shadowRoot.appendChild(template.cloneNode(true))
  }
});
