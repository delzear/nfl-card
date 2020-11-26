class NflCard extends HTMLElement {
    set hass(hass) {
        if (!this.content) {
          const card = document.createElement('ha-card');
          card.header = 'Example card';
          this.content = document.createElement('div');
          this.content.style.padding = '0 16px 16px';
          card.appendChild(this.content);
          this.appendChild(card);
        }
    
        const entityId = this.config.entity;
        const state = hass.states[entityId];
        const stateStr = state ? state.state : 'unavailable';
    
        this.content.innerHTML = `
        The state of ${entityId} is ${stateStr}!
        <br><br>
        <img src="http://via.placeholder.com/350x150">
        `;
    }
    
    setConfig(config) {
        this.config = config;
    }
    
    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    getCardSize() {
        return 3;
    }
}

customElements.define('nfl-card', NflCard);

console.info(
    '\n %c NFL Card %c v0.0.1 %c \n',
    'background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 3px 0 0 3px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)',
    'background-color: #bc81e0;background-image: linear-gradient(90deg, #b65cff, #11cbfa);color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 3px 3px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)',
    'background-color: transparent'
);
