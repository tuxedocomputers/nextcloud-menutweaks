(() => {
  const kontaktLink = document.createElement('a');
  kontaktLink.setAttribute('target', '_blank');
  kontaktLink.setAttribute('href', 'https://www.tuxedocomputers.com/Kontakt.tuxedo');
  kontaktLink.classList.add('nc-theming-contrast');
  kontaktLink.style.padding = '0 1em 0 1em';
  kontaktLink.style.margin = '0 0 0 1em';
  kontaktLink.style.borderRight = '1px solid currentColor';
  kontaktLink.innerHTML = 'Kontakt';

  const impressumLink = document.createElement('a');
  impressumLink.setAttribute('target', '_blank');
  impressumLink.setAttribute('href', 'https://www.tuxedocomputers.com/Impressum.tuxedo');
  impressumLink.innerHTML = 'Impressum';
  impressumLink.classList.add('nc-theming-contrast');
  impressumLink.style.padding = '0 1em 0 1em';
  impressumLink.style.margin = '0';

  const privacyLink = document.createElement('a');
  privacyLink.setAttribute('target', '_blank');
  privacyLink.setAttribute('href', 'https://www.tuxedocomputers.com/Datenschutz.tuxedo');
  privacyLink.innerHTML = 'Datenschutz';
  privacyLink.classList.add('nc-theming-contrast');
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

      const head3 = document.createElement('h3');
      head3.style.fontWeight = 'bold';
      head3.style.color = '#ab0000';
      head3.style.textTransform = 'uppercase';
      head3.style.fontSize = '16px';
      head3.style.margin = '20px 0 10px 0';
      head3.appendChild(document.createTextNode('Willkommen bei der myTUXEDO Cloud'));
      advertBox.appendChild(head3);

      var regPath = '/apps/tuxedoregister/register';
      var baseUrl = window.location.protocol + '//' + window.location.host;
      var currUrlPath = window.location.pathname.split('/');
      var basePath = '';
      var i;
      for(i in currUrlPath) {
        if(currUrlPath[i] != '') {
          basePath += '/';
          basePath += currUrlPath[i];
        }
        if(currUrlPath[i] == 'index.php') {
          break;
        }
        i++;
      }
      const regLink = document.createElement('a');
      regLink.style.color = '#606060';
      regLink.setAttribute('href', baseUrl + basePath + regPath);
      regLink.setAttribute('title', 'Jetzt registrieren');
      regLink.appendChild(document.createTextNode('Hier registrieren!'));

      const para = document.createElement('p');
      para.style.color = '#606060';
      para.appendChild(regLink);
      para.insertBefore(document.createTextNode('Sie haben noch kein Benutzerkonto? '), para.childNodes[0]);
      advertBox.appendChild(para);

      const head31 = document.createElement('h3');
      head31.style.fontWeight = 'bold';
      head31.style.color = '#ab0000';
      head31.style.textTransform = 'uppercase';
      head31.style.fontSize = '16px';
      head31.style.margin = '20px 0 10px 0';
      head31.appendChild(document.createTextNode('Die Vorteile von myTUXEDO auf einen Blick:'));
      advertBox.appendChild(head31);

      const ulist = document.createElement('ul');
      ulist.style.paddingLeft = '20px';
      ulist.style.listStyle = 'inherit';
      ulist.style.color = '#606060';

      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[0].appendChild(document.createTextNode('Serverstandorte Deutschland (Falkenstein und Königsbrunn)'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[1].appendChild(document.createTextNode('Verschlüsselte Festplatten (LUKS1, 256bit Keysize)'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[2].appendChild(document.createTextNode('Raid-Systeme auf Server & Backups'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[3].appendChild(document.createTextNode('Dreifache, dezentrale, GPG verschlüsselte Backups'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[4].appendChild(document.createTextNode('Verschlüsselte Verbindung/Datenübertragung (SSL)'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[5].appendChild(document.createTextNode('Serverseitiger Virenscan der Dateien (ClamAV)'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[6].appendChild(document.createTextNode('Synchronisierungsclients für Linux, Win & Mac'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[7].appendChild(document.createTextNode('Zugriffsoftware für Android & iOS'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[8].appendChild(document.createTextNode('Zugriff über jeden Browser'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[9].appendChild(document.createTextNode('Einbindung als Netzlaufwerk (webdav)'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[10].appendChild(document.createTextNode('Streaming über Browser oder Netzlaufwerk'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[11].appendChild(document.createTextNode('Online Bild-, Video- und Dokumentenbetrachtung'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[12].appendChild(document.createTextNode('Online Dokumentenbearbeitung'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[13].appendChild(document.createTextNode('Dateifreigabe und Gruppenbearbeitung'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[14].appendChild(document.createTextNode('Terminplaner mit integriertem Kalender, Aufgabenverwaltung und Adressbuch'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[15].appendChild(document.createTextNode('Einbindung Ihrer bestehenden E-Mail-Accounts möglich'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[16].appendChild(document.createTextNode('Verschlüsselter Passwortspeicher'));
      ulist.appendChild(document.createElement('li'));
      ulist.childNodes[17].appendChild(document.createTextNode('Papierkorbfunktion (max. 30 Tage, bis zu 50% des Speicherplatzes)'));
      advertBox.appendChild(ulist);

      const body = document.getElementById('body-login');
      body.insertBefore(advertBox, document.querySelector('footer[role="contentinfo"]'));
    }
    const footer = document.querySelector('footer[role="contentinfo"] p.info');
    kontaktLink.style.paddingLeft = '1em';
    kontaktLink.style.marginLeft = '1em';
    kontaktLink.style.borderLeft = '1px solid currentColor';
    footer.appendChild(kontaktLink);
    footer.appendChild(impressumLink);
    privacyLink.style.borderLeft = '1px solid currentColor';
    footer.appendChild(privacyLink);
  } else {
    const settings = document.getElementById('settings');
    if(settings) { // Normale App-Seiten
      settings.parentNode.insertBefore(kontaktLink, settings);
      settings.parentNode.insertBefore(impressumLink, settings);
    } else { // Fallback, z. B. bei Public Link Shares
      const headerRight = document.querySelector('.header-right');
      headerRight.insertBefore(impressumLink, headerRight.firstChild);
      headerRight.insertBefore(kontaktLink, headerRight.firstChild);
    }
  }
})();
