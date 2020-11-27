class NflCard extends HTMLElement {
  card_template = `
<style>
.nfl-card-content{font-family:Roboto, Noto, sans-serif;font-size:14px;display: flex;flex-flow: row wrap; width:100%;}
.nfl-card-match-container{flex: auto auto; margin:0 4px 4px 0;background: var( --ha-card-background, var(--card-background-color, white) );border-radius: var(--ha-card-border-radius, 4px);box-shadow: var( --ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) );}
.nfl-card-match{display: flex;flex-flow: row wrap;height:70px;min-width:146px;margin:1px;padding:5px;}
.nfl-card-teams{flex: 1 1;}
.nfl-card-team{display: flex;flex-flow: row;}
.nfl-card-team-image{background-size:contain;height:35px;width:35px;}
.nfl-card-team-name{flex: 2 1;vertical-align:middle;line-height:35px;padding-left:5px;}
.nfl-card-team-score{flex: 1 1;vertical-align:middle;line-height:35px;padding-right:5px;text-align:right;}
.nfl-card-quarter{width:25px;line-height:70px;vertical-align:middle;padding-right:5px;text-align:right;font-size:12px;}
</style>
<div class="nfl-card-content">{nfl-card}</div>
  `;

  match_template = `
	<div class="nfl-card-match-container">
		<div class="nfl-card-match">
			<div class="nfl-card-teams">
				<div class="nfl-card-team">
					<div class="nfl-card-team-image" style="background-image:url(https://static.www.nfl.com/f_auto,q_auto/league/api/clubs/logos/{v});"></div>
					<div class="nfl-card-team-name">{vnn}</div>
					<div class="nfl-card-team-score">{vs}</div>
				</div>
				<div class="nfl-card-team">
					<div class="nfl-card-team-image" style="background-image:url(https://static.www.nfl.com/f_auto,q_auto/league/api/clubs/logos/{h});"></div>
					<div class="nfl-card-team-name">{hnn}</div>
					<div class="nfl-card-team-score">{hs}</div>
				</div>
			</div>
			<div class="nfl-card-quarter">{q}</div>
		</div>
	</div>
  `;

  set hass(hass) {
    if (!this.content) {
      this.card = document.createElement('ha-card');
      this.card.header = 'NFL Games';
      this.content = document.createElement('div');
      this.content.className = 'card-content';
      this.card.appendChild(this.content);
      this.appendChild(this.card);
    }
    this.render();
  }

  render() {
    fetch('https://static.nfl.com/liveupdate/scorestrip/ss.json')
      .then((response) => {
        response.json().then((nfl_data) => {
          this.card.header = 'NFL Games of Week ' + nfl_data.w;
          let c = '';
          for (let i = 0; i < nfl_data.gms.length;i++) {
            let t = this.match_template.replace('{vnn}', nfl_data.gms[i].vnn);
            t = t.replace('{hnn}', nfl_data.gms[i].hnn);
            t = t.replace('{v}', nfl_data.gms[i].v);
            t = t.replace('{h}', nfl_data.gms[i].h);
            t = t.replace('{vs}', nfl_data.gms[i].vs);
            t = t.replace('{hs}', nfl_data.gms[i].hs);
            t = t.replace('{q}', nfl_data.gms[i].q);
            c += t;
          }
          this.content.innerHTML = this.card_template.replace('{nfl-card}', c);
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
