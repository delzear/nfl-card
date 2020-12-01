class NflCard extends HTMLElement {
  card_template = `
<style>
.nfl-card-content{font-family:Roboto, Noto, sans-serif;font-size:14px;display: grid;grid-template-columns: repeat(auto-fill, minmax(200px, auto)); width:100%;}
.nfl-card-match-container{margin:0 4px 4px;padding:5px; 0;background: var( --ha-card-background, var(--card-background-color, white) );border-radius: var(--ha-card-border-radius, 4px);box-shadow: var( --ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) );}
.nfl-card-match{display: flex;flex-flow: row wrap;height:70px;min-width:190px;margin:1px;}
.nfl-card-teams{flex: 1 1;}
.nfl-card-team{display: flex;flex-flow: row;}
.nfl-card-team-image{background-size:contain;height:35px;width:35px;}
.nfl-card-team-name{flex: 1 auto;vertical-align:middle;line-height:35px;padding-left:5px;white-space:nowrap;overflow:hidden;}
.nfl-card-team-score{width:40px;vertical-align:middle;line-height:35px;padding-right:5px;text-align:right;}
.nfl-card-quarter{width:25px;line-height:70px;vertical-align:middle;padding-right:5px;text-align:right;font-size:12px;}
.nfl-card-bold{font-weight:bold;}
</style>
<div class="nfl-card-content">{nfl-card}</div>
  `;

  match_template = `
	<div class="nfl-card-match-container">
		<div>{date} at {time}</div>
		<div class="nfl-card-match">
			<div class="nfl-card-teams">
				<div class="nfl-card-team">
					<div class="nfl-card-team-image" style="background-image:url(https://static.www.nfl.com/f_auto,q_auto/league/api/clubs/logos/{v});"></div>
					<div class="nfl-card-team-name{myteamv}">{vnn}</div>
					<div class="nfl-card-team-score{myteamv}">{vs}</div>
				</div>
				<div class="nfl-card-team">
					<div class="nfl-card-team-image" style="background-image:url(https://static.www.nfl.com/f_auto,q_auto/league/api/clubs/logos/{h});"></div>
					<div class="nfl-card-team-name{myteamh}">{hnn}</div>
					<div class="nfl-card-team-score{myteamh}">{hs}</div>
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
          for (let i = 0; i < nfl_data.gms.length; i++) {
            if (this.getShowMatch(nfl_data.gms[i])) {
              let t = this.match_template.replace('{vnn}', nfl_data.gms[i].vnn);
              t = t.replace('{hnn}', nfl_data.gms[i].hnn);
              t = t.replace('{v}', nfl_data.gms[i].v);
              t = t.replace('{h}', nfl_data.gms[i].h);
              t = t.replace('{vs}', nfl_data.gms[i].vs);
              t = t.replace('{hs}', nfl_data.gms[i].hs);
              t = t.replace('{q}', nfl_data.gms[i].q);
              t = t.replace('{date}', this.getDayOfWeek(nfl_data.gms[i].d));
              t = t.replace('{time}', nfl_data.gms[i].t + 'PM EST');
              if (this.config.my_team == nfl_data.gms[i].v) {
                t = t.replace('{myteamv}', " nfl-card-bold");
                t = t.replace('{myteamv}', " nfl-card-bold");
                t = t.replace('{myteamh}', "");
                t = t.replace('{myteamh}', "");
              }
              else if (this.config.my_team == nfl_data.gms[i].h) {
                t = t.replace('{myteamv}', "");
                t = t.replace('{myteamv}', "");
                t = t.replace('{myteamh}', " nfl-card-bold");
                t = t.replace('{myteamh}', " nfl-card-bold");
              }
              else {
                t = t.replace('{myteamh}', "");
                t = t.replace('{myteamh}', "");
                t = t.replace('{myteamv}', "");
                t = t.replace('{myteamv}', "");
              }
              c += t;
            }
          }
          if (c == '' && this.config.only_today) {
            c = 'No games today';
          }
          else if (c == '' && !this.config.only_today) {
            c = 'No games this week';
          }
          this.content.innerHTML = this.card_template.replace('{nfl-card}', c);
        }).catch((error) => {
          console.error("Could not parse NFL Data!")
        });;
      }).catch((error) => {
        console.error("Could not load NFL Data!")
      });
  }
  setConfig(config) {
    this.config = {}
    if (config.only_today) {
      this.config.only_today = true;
    }
    else {
      this.config.only_today = false;
    }
    if (config.only_today_debug) {
      this.config.only_today_debug = config.only_today_debug;
    }

    if (config.my_team) {
      this.config.my_team = config.my_team;
    }
    else {
      this.config.my_team = '';
    }
    if (config.only_my_team) {
      this.config.only_my_team = config.only_my_team;
    }
    else {
      this.config.only_my_team = false;
    }

  }

  getShowMatch(match) {
    let i_today;
    if (this.config.only_today_debug) {
      i_today = this.config.only_today_debug
    }
    else {
      let today = new Date();
      i_today = parseInt('' + today.getFullYear() + (today.getMonth() + 1) + today.getDate() + '00');
    }

    let is_today = (match.eid >= i_today && match.eid <= (i_today + 99));

    let has_my_team = (match.v == this.config.my_team || match.h == this.config.my_team)

    if (this.config.only_today && this.config.only_my_team) {
      return (is_today && has_my_team);
    }
    else if (this.config.only_today && !this.config.only_my_team) {
      return is_today;
    }
    else if (!this.config.only_today && this.config.only_my_team) {
      return only_my_team;
    }
    else { // (!this.config.only_today && !this.config.only_my_team)
      return true;
    }
  }

  getDayOfWeek(abbv) {
    switch (abbv) {
      case 'Mon':
        return "Monday";
        break;
      case 'Tue':
        return "Tuesday";
        break;
      case 'Wed':
        return "Wednesday";
        break;
      case 'Thu':
        return "Thursday";
        break;
      case 'Fri':
        return "Friday";
        break;
      case 'Sat':
        return "Saturday";
        break;
      case 'Sun':
        return "Sunday";
        break;
    }
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
