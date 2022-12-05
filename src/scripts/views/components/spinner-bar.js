class SpinnerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="spinner-border text-warning" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>`;
  }
}

customElements.define('spinner-bar', SpinnerBar);
