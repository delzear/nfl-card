class NflCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
      const card = document.createElement('ha-card');
      card.header = 'NFL Games of th day';
      this.content = document.createElement('div');
      this.content.style.padding = '0 16px 16px';
      card.appendChild(this.content);
      this.appendChild(card);
    }
    // https://static.nfl.com/liveupdate/scorestrip/ss.json

    this.content.innerHTML = `Yo! Patate!`;
    this.render();
  }

  render() {
    fetch('https://static.nfl.com/liveupdate/scorestrip/ss.json')
      .then((response) => {
        response.json().then((nfl_data) => {
          this.content.innerHTML = "There is " + nfl_data.gms.length + " games this week!"
        }).catch((error) => {
          console.error("Could not parse NFL Data!")
        });;
      }).catch((error) => {
        console.error("Could not load NFL Data!")
      });
      // JSON result in `data` variable
  }
  setConfig(e) {
    this.config = {}
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
