class NflCard extends HTMLElement {
  template = `
<div style="font-family:Roboto, Noto, sans-serif;font-size:14px;">
  <div style="align-items:stretch;cursor:pointer;display:flex;flex-basis:300%;flex-direction:column;flex-grow:3;flex-shrink:1;font-family:Roboto, Noto, sans-serif;font-size:14px;height:86px;line-height:19.6px;min-height:0px;min-width:0px;position:relative;text-size-adjust:100%;user-select:none;width:482.469px;z-index:0;-webkit-box-align:stretch;-webkit-box-direction:normal;-webkit-box-flex 3;-webkit-box-orient:vertical;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);">
    <div style="align-items:center;background-color:rgb(255, 255, 255);cursor:pointer;display:flex;flex-basis:auto;flex-direction:row;flex-shrink:0;font-family:Roboto, Noto, sans-serif;font-size:14px;height:70px;justify-content:space-between;line-height:19.6px;margin-bottom:8px;margin-top:8px;min-height:0px;min-width:0px;padding-bottom:0px;position:relative;text-size-adjust:100%;user-select:none;width:482.469px;z-index:0;-webkit-box-align:center;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-box-pack:justify;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);">
      <div style="align-items: stretch;box-sizing: border-box;color: rgb(51, 51, 51);cursor: pointer;display: flex;flex-basis: 100%;flex-direction: column;flex-grow: 1;flex-shrink: 1;font-family: Roboto, Noto, sans-serif;font-size:14px;height:70px;line-height:19.6px;min-height:0px;min-width:0px;padding-bottom:0px;position:relative;text-size-adjust:100%;user-select:none;width:381.156px;z-index:0;-webkit-box-align:stretch;-webkit-box-direction:normal;-webkit-box-flex:1;-webkit-box-orient:vertical;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);">
        <div style="align-items:center;cursor:pointer;display:flex;flex-basis:auto;flex-direction:row;flex-shrink:0;font-family:Roboto, Noto, sans-serif;font-size:14px;height:35px;line-height:19.6px;min-height:0px;min-width:0px;padding-bottom:0px;position:relative;text-size-adjust:100%;user-select:none;width:381.156px;z-index:0;-webkit-box-align:center;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);">
          <div style="align-items:center;cursor:pointer;display:flex;flex-basis:auto;flex-direction:column;flex-shrink:0;font-family:Roboto, Noto, sans-serif;font-size:14px;height:35px;line-height:19.6px;min-height:0px;min-width:0px;outline-outline-style:none;outline-width:0px;overflow-x:hidden;overflow-y:hidden;padding-bottom:0px;position:relative;text-size-adjust:100%;user-select:none;width:60.9844px;z-index:0;-webkit-box-align:center;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);">
          <div style="align-items:stretch;background-image:url(https://static.www.nfl.com/f_auto,q_auto/league/api/clubs/logos/{v});background-position-x:50%;background-position-y:50%;background-repeat-x:no-repeat;background-repeat-y:no-repeat;background-size:contain;bottom:0px;cursor:pointer;display:flex;flex-basis:auto;flex-direction:column;flex-shrink:0;font-family:Roboto, Noto, sans-serif;font-size:14px;height:35px;left:0px;line-height:19.6px;min-height:0px;min-width:0px;outline-outline-style:none;outline-width:0px;padding-bottom:0px;position:absolute;right:0px;text-size-adjust:100%;top:0px;user-select:none;width:60.9844px;z-index:-1;-webkit-box-align:stretch;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-font-smoothing antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);"></div>
          <img alt="" draggable="false" src="https://static.www.nfl.com/f_auto,q_auto/league/api/clubs/logos/{v}" style="bottom:0px;cursor:pointer;display:block;font-family:Roboto, Noto, sans-serif;font-size:14px;height:35px;left:0px;line-height:19.6px;max-width:100%;opacity:0;position:absolute;right:0px;text-size-adjust:100%;top:0px;user-select:none;width:60.9844px;z-index:-1;-webkit-box-direction:normal;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-user-drag:none;">
        </div>
        <div style="font-family:Roboto, Noto, sans-serif;font-size:14px;align-items:center;cursor:pointer;display:flex;flex-basis:auto;flex-direction:row;flex-grow:1;flex-shrink:1;font-family:Roboto, Noto, sans-serif;font-size:14px;height:19px;line-height:19.6px;min-height:0px;min-width:0px;padding-bottom:0px;position:relative;text-size-adjust:100%;user-select:none;width:268.438px;z-index:0;-webkit-box-align:center;-webkit-box-direction:normal;-webkit-box-flex:1;-webkit-box-orient:horizontal;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);">
          <div dir="auto" style="font-family:Roboto, Noto, sans-serif;font-size:14px;cursor:pointer;display:block;font-size:16px;font-stretch:100%;font-style:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-weight:400;height:19px;line-height:normal;overflow-wrap:break-word;padding-bottom:0px;text-size-adjust:100%;unicode-bidi:isolate;user-select:none;white-space:pre-wrap;width:101.875px;-webkit-box-direction:normal;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);">{vnn}</div>
        </div>
        <div dir="auto" style="font-family:Roboto, Noto, sans-serif;font-size:14px;cursor:pointer;display:block;font-size:18px;font-stretch:100%;font-style:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-weight:400;height:22px;line-height:normal;overflow-wrap:break-word;padding-bottom:0px;text-align:center;text-size-adjust:100%;unicode-bidi:isolate;user-select:none;white-space:pre-wrap;width:45.7344px;-webkit-box-direction:normal;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);">{vs}</div>
      </div>
      <div style="align-items: stretch;box-sizing: border-box;color: rgb(51, 51, 51);cursor: pointer;display: flex;flex-basis: 100%;flex-direction: column;flex-grow: 1;flex-shrink: 1;font-family: Roboto, Noto, sans-serif;font-size:14px;height:70px;line-height:19.6px;min-height:0px;min-width:0px;padding-bottom:0px;position:relative;text-size-adjust:100%;user-select:none;width:381.156px;z-index:0;-webkit-box-align:stretch;-webkit-box-direction:normal;-webkit-box-flex:1;-webkit-box-orient:vertical;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);">
        <div style="align-items:center;cursor:pointer;display:flex;flex-basis:auto;flex-direction:row;flex-shrink:0;font-family:Roboto, Noto, sans-serif;font-size:14px;height:35px;line-height:19.6px;min-height:0px;min-width:0px;padding-bottom:0px;position:relative;text-size-adjust:100%;user-select:none;width:381.156px;z-index:0;-webkit-box-align:center;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);">
          <div style="align-items:center;cursor:pointer;display:flex;flex-basis:auto;flex-direction:column;flex-shrink:0;font-family:Roboto, Noto, sans-serif;font-size:14px;height:35px;line-height:19.6px;min-height:0px;min-width:0px;outline-outline-style:none;outline-width:0px;overflow-x:hidden;overflow-y:hidden;padding-bottom:0px;position:relative;text-size-adjust:100%;user-select:none;width:60.9844px;z-index:0;-webkit-box-align:center;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);">
          <div style="align-items:stretch;background-image:url(https://static.www.nfl.com/f_auto,q_auto/league/api/clubs/logos/{h});background-position-x:50%;background-position-y:50%;background-repeat-x:no-repeat;background-repeat-y:no-repeat;background-size:contain;bottom:0px;cursor:pointer;display:flex;flex-basis:auto;flex-direction:column;flex-shrink:0;font-family:Roboto, Noto, sans-serif;font-size:14px;height:35px;left:0px;line-height:19.6px;min-height:0px;min-width:0px;outline-outline-style:none;outline-width:0px;padding-bottom:0px;position:absolute;right:0px;text-size-adjust:100%;top:0px;user-select:none;width:60.9844px;z-index:-1;-webkit-box-align:stretch;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-font-smoothing antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);"></div>
          <img alt="" draggable="false" src="https://static.www.nfl.com/f_auto,q_auto/league/api/clubs/logos/{h}" style="order-bottom-border-bottom-style:none;border-left-border-left-style:none;border-right-border-right-style:none;border-top-border-top-style:none;bottom:0px;cursor:pointer;display:block;font-family:Roboto, Noto, sans-serif;font-size:14px;height:35px;left:0px;line-height:19.6px;max-width:100%;opacity:0;position:absolute;right:0px;text-size-adjust:100%;top:0px;user-select:none;width:60.9844px;z-index:-1;-webkit-box-direction:normal;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-user-drag:none;">
        </div>
        <div style="font-family:Roboto, Noto, sans-serif;font-size:14px;align-items:center;cursor:pointer;display:flex;flex-basis:auto;flex-direction:row;flex-grow:1;flex-shrink:1;font-family:Roboto, Noto, sans-serif;font-size:14px;height:19px;line-height:19.6px;min-height:0px;min-width:0px;padding-bottom:0px;position:relative;text-size-adjust:100%;user-select:none;width:268.438px;z-index:0;-webkit-box-align:center;-webkit-box-direction:normal;-webkit-box-flex:1;-webkit-box-orient:horizontal;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);">
          <div dir="auto" style="font-family:Roboto, Noto, sans-serif;font-size:14px;cursor:pointer;display:block;font-size:16px;font-stretch:100%;font-style:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-weight:400;height:19px;line-height:normal;overflow-wrap:break-word;padding-bottom:0px;text-size-adjust:100%;unicode-bidi:isolate;user-select:none;white-space:pre-wrap;width:101.875px;-webkit-box-direction:normal;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);">{hnn}</div>
        </div>
        <div dir="auto" style="font-family:Roboto, Noto, sans-serif;font-size:14px;cursor:pointer;display:block;font-size:18px;font-stretch:100%;font-style:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-weight:400;height:22px;line-height:normal;overflow-wrap:break-word;padding-bottom:0px;text-align:center;text-size-adjust:100%;unicode-bidi:isolate;user-select:none;white-space:pre-wrap;width:45.7344px;-webkit-box-direction:normal;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);">{hs}</div>
      </div>
    </div>
  </div>
  <div style="font-family:Roboto, Noto, sans-serif;font-size:14px;align-items:center;cursor:pointer;display:flex;flex-basis:auto;flex-direction:column;flex-shrink:0;font-size:14px;height:70px;justify-content:center;line-height:19.6px;min-height:0px;min-width:0px;padding-bottom:0px;padding-left:24.1094px;position:relative;text-size-adjust:100%;user-select:none;width:101.312px;z-index:0;-webkit-box-align:center;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-box-pack:center;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);">
	  <div dir="auto" style="font-family:Roboto, Noto, sans-serif;font-size:14px;cursor:pointer;display:block;font-size:12px;font-stretch:100%;font-style:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-weight:400;height:16px;line-height:16px;overflow-wrap:break-word;padding-bottom:0px;padding-left:4px;text-align:center;text-size-adjust:100%;unicode-bidi:isolate;user-select:none;white-space:pre-wrap;width:26.6875px;-webkit-box-direction:normal;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);">{q}</div>
  </div>
</div>
  `;

  set hass(hass) {
    if (!this.content) {
      this.card = document.createElement('ha-card');
      this.card.header = 'NFL Games';
      this.content = document.createElement('div');
      this.content.style.padding = '0 16px 16px';
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
            let t = this.template.replace('{vnn}', nfl_data.gms[i].vnn);
            t = t.replace('{hnn}', nfl_data.gms[i].hnn);
            t = t.replace('{v}', nfl_data.gms[i].v);
            t = t.replace('{v}', nfl_data.gms[i].v);
            t = t.replace('{h}', nfl_data.gms[i].h);
            t = t.replace('{h}', nfl_data.gms[i].h);
            t = t.replace('{vs}', nfl_data.gms[i].vs);
            t = t.replace('{hs}', nfl_data.gms[i].hs);
            t = t.replace('{q}', nfl_data.gms[i].q);
            c += t;
          }
          this.content.innerHTML = c;
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
