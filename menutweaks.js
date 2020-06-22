(() => {
  var elementStr = {
    de: {
      aHrefContact: "https://www.tuxedocomputers.com/Kontakt.tuxedo",
      aHrefImprint: "https://www.tuxedocomputers.com/Impressum.tuxedo",
      aHrefPrivacy: "https://www.tuxedocomputers.com/Datenschutz.tuxedo",
      aTextContact: "Kontakt",
      aTextImprint: "Impressum",
      aTextPrivacy: "Datenschutz",
      h3Text01: "Willkommen bei der myTUXEDO Cloud",
      pTextRegister: "Sie haben noch kein Benutzerkonto? ",
      aTitleRegister: "Jetzt registrieren",
      aTextRegister: "Hier registrieren!",
      h3Text02: "Die Vorteile von myTUXEDO auf einen Blick:",
      liText01: "Serverstandorte Deutschland (Falkenstein und Augsburg)",
      liText02: "Verschlüsselte Festplatten (LUKS1, 256bit Keysize)",
      liText03: "Raid-Systeme auf Server & Backups",
      liText04: "Dreifache, dezentrale, GPG verschlüsselte Backups",
      liText05: "Verschlüsselte Verbindung/Datenübertragung (SSL)",
      liText06: "Serverseitiger Virenscan der Dateien (ClamAV)",
      liText07: "Synchronisierungsclients für Linux, Win & Mac",
      liText08: "Zugriffsoftware für Android & iOS",
      liText09: "Zugriff über jeden Browser",
      liText10: "Einbindung als Netzlaufwerk (WebDav)",
      liText11: "Streaming über Browser oder Netzlaufwerk",
      liText12: "Online Bild-, Video- und Dokumentenbetrachtung",
      liText13: "Online Dokumentenbearbeitung",
      liText14: "Dateifreigabe und Gruppenbearbeitung",
      liText15: "Terminplaner mit integriertem Kalender, Aufgabenverwaltung und Adressbuch",
      liText16: "Einbindung Ihrer bestehenden E-Mail-Accounts möglich",
      liText17: "Verschlüsselter Passwortspeicher",
      liText18: "Papierkorbfunktion (max. 30 Tage, bis zu 50% des Speicherplatzes)"
    },
    en: {
      aHrefContact: "https://www.tuxedocomputers.com/en/Contact.tuxedo",
      aHrefImprint: "https://www.tuxedocomputers.com/en/Imprint.tuxedo",
      aHrefPrivacy: "https://www.tuxedocomputers.com/en/Privacy-policy.tuxedo",
      aTextContact: "Contact",
      aTextImprint: "Imprint",
      aTextPrivacy: "Privacy policy",
      h3Text01: "Welcome to myTUXEDO Cloud",
      pTextRegister: "You do not have a user account yet? ",
      aTitleRegister: "Register now",
      aTextRegister: "Register here!",
      h3Text02: "The benefits of myTuxedo at a glance:",
      liText01: "Server locations Germany (Falkenstein and Augsburg)",
      liText02: "Encrypted hard disks (LUKS1, 256bit Keysize)",
      liText03: "Raid-systems on server & backups",
      liText04: "Triple, decentral, GPG encrypted backups",
      liText05: "Secured connection/data-transfer (SSL)",
      liText06: "Server-sided file virus scan (ClamAV)",
      liText07: "Syncronisation clients for Linux, Win & Mac",
      liText08: "Access software for Android & iOS",
      liText09: "Access with each browser",
      liText10: "Embedding as net drive (WebDav)",
      liText11: "Streaming via browser or net drive",
      liText12: "View pictures, videos and documents online",
      liText13: "Online document editing",
      liText14: "Data sharing and user group editing",
      liText15: "Scheduler with integrated calendar, task management and address book",
      liText16: "Integration of your existing mail accounts possible",
      liText17: "Encrypted password storage",
      liText18: "Recycle bin function (max. 30 days, up to 50% of storage capacity)"
    },
//    es:{},
//    fr: {},
//    it: {},
//    ro: {},
//    ru: {},
//    sv: {},
    lang: function() {
      // provide english as default language when browser locale is not an
      // property of elementStr object
      if(typeof this[OC.getLocale().substr(0, 2)] === 'undefined') {
        return this.en;
      } else {
        return this[OC.getLocale().substr(0, 2)];
      }
    }
  };

  const contactLink = document.createElement('a');
  contactLink.classList.add('nc-theming-contrast');
  contactLink.setAttribute('target', '_blank');
  contactLink.setAttribute('href', elementStr.lang().aHrefContact);
  contactLink.innerHTML = elementStr.lang().aTextContact;
  contactLink.style.padding = '0 1em 0 1em';
  contactLink.style.margin = '0 0 0 1em';
  contactLink.style.borderRight = '1px solid currentColor';

  const imprintLink = document.createElement('a');
  imprintLink.classList.add('nc-theming-contrast');
  imprintLink.setAttribute('target', '_blank');
  imprintLink.setAttribute('href', elementStr.lang().aHrefImprint);
  imprintLink.innerHTML = elementStr.lang().aTextImprint;
  imprintLink.style.padding = '0 1em 0 1em';
  imprintLink.style.margin = '0';

  const privacyLink = document.createElement('a');
  privacyLink.classList.add('nc-theming-contrast');
  privacyLink.setAttribute('target', '_blank');
  privacyLink.setAttribute('href', elementStr.lang().aHrefPrivacy);
  privacyLink.innerHTML = elementStr.lang().aTextPrivacy;
  privacyLink.style.padding = '0 1em 0 1em';
  privacyLink.style.margin = '0';

  if(document.body.getAttribute('id') === 'body-login') {
    if(document.getElementById('app') === null) {
      const advertBox = document.createElement('div');
      advertBox.classList.add('tuxedo-text');
      advertBox.style.textAlign = 'left';
      advertBox.style.border = '1px solid #ddd';
      advertBox.style.padding = '1rem';
      advertBox.style.background = '#fff';
      advertBox.style.boxSizing = 'border-box';
      advertBox.style.width = '480px';
      advertBox.style.borderRadius = '5px';

      const head301 = document.createElement('h3');
      head301.style.fontWeight = 'bold';
      head301.style.color = '#ab0000';
      head301.style.textTransform = 'uppercase';
      head301.style.fontSize = '16px';
      head301.style.margin = '20px 0 10px 0';
      head301.appendChild(document.createTextNode(elementStr.lang().h3Text01));
      advertBox.appendChild(head301);

      var regPath = '/apps/tuxedoregister/register';
      var baseUrl = window.location.protocol + '//' + window.location.host;
      var currUrlPath = window.location.pathname.split('/');
      var basePath = '';
      var i;
      for(i in currUrlPath) {
        if(currUrlPath[i] !== '') {
          basePath += '/';
          basePath += currUrlPath[i];
        }
        if(currUrlPath[i] === 'index.php') {
          break;
        }
        i++;
      }
      const regLink = document.createElement('a');
      regLink.style.color = '#606060';
      regLink.setAttribute('href', baseUrl + basePath + regPath);
      regLink.setAttribute('title', elementStr.lang().aTitleRegister);
      regLink.appendChild(document.createTextNode(elementStr.lang().aTextRegister));

      const para = document.createElement('p');
      para.style.color = '#606060';
      para.appendChild(regLink);
      para.insertBefore(document.createTextNode(elementStr.lang().pTextRegister), para.childNodes[0]);
      advertBox.appendChild(para);

      const head302 = document.createElement('h3');
      head302.style.fontWeight = 'bold';
      head302.style.color = '#ab0000';
      head302.style.textTransform = 'uppercase';
      head302.style.fontSize = '16px';
      head302.style.margin = '20px 0 10px 0';
      head302.appendChild(document.createTextNode(elementStr.lang().h3Text02));
      advertBox.appendChild(head302);

      const ulist = document.createElement('ul');
      ulist.style.paddingLeft = '20px';
      ulist.style.listStyle = 'inherit';
      ulist.style.color = '#606060';
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[0].appendChild(document.createTextNode(elementStr.lang().liText01));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[1].appendChild(document.createTextNode(elementStr.lang().liText02));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[2].appendChild(document.createTextNode(elementStr.lang().liText03));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[3].appendChild(document.createTextNode(elementStr.lang().liText04));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[4].appendChild(document.createTextNode(elementStr.lang().liText05));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[5].appendChild(document.createTextNode(elementStr.lang().liText06));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[6].appendChild(document.createTextNode(elementStr.lang().liText07));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[7].appendChild(document.createTextNode(elementStr.lang().liText08));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[8].appendChild(document.createTextNode(elementStr.lang().liText09));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[9].appendChild(document.createTextNode(elementStr.lang().liText10));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[10].appendChild(document.createTextNode(elementStr.lang().liText11));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[11].appendChild(document.createTextNode(elementStr.lang().liText12));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[12].appendChild(document.createTextNode(elementStr.lang().liText13));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[13].appendChild(document.createTextNode(elementStr.lang().liText14));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[14].appendChild(document.createTextNode(elementStr.lang().liText15));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[15].appendChild(document.createTextNode(elementStr.lang().liText16));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[16].appendChild(document.createTextNode(elementStr.lang().liText17));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[17].appendChild(document.createTextNode(elementStr.lang().liText18));
      advertBox.appendChild(ulist);

      const body = document.getElementById('body-login');
      body.insertBefore(advertBox, document.querySelector('footer[role="contentinfo"]'));
    }
    const footer = document.querySelector('footer[role="contentinfo"] p.info');
    contactLink.style.paddingLeft = '1em';
    contactLink.style.marginLeft = '1em';
    contactLink.style.borderLeft = '1px solid currentColor';
    footer.appendChild(contactLink);
    footer.appendChild(imprintLink);
    privacyLink.style.borderLeft = '1px solid currentColor';
    footer.appendChild(privacyLink);
  } else {
    const settings = document.getElementById('settings');
    if(settings) { // Normale App-Seiten
      settings.parentNode.insertBefore(contactLink, settings);
      settings.parentNode.insertBefore(imprintLink, settings);
    } else { // Fallback, z. B. bei Public Link Shares
      const headerRight = document.querySelector('.header-right');
      headerRight.insertBefore(imprintLink, headerRight.firstChild);
      headerRight.insertBefore(contactLink, headerRight.firstChild);
    }
  }
})();
