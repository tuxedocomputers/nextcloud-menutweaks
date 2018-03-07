(() => {
  const kontaktLink = document.createElement('a');
  kontaktLink.setAttribute('target', '_blank');
  kontaktLink.setAttribute('href', 'https://www.tuxedocomputers.com/Kontakt.geek');
  kontaktLink.classList.add('nc-theming-contrast');
  kontaktLink.style.paddingLeft = '35px';
  kontaktLink.innerHTML = 'Kontakt';

  const impressumLink = document.createElement('a');
  impressumLink.setAttribute('target', '_blank');
  impressumLink.setAttribute('href', 'https://www.tuxedocomputers.com/Impressum.geek');
  impressumLink.innerHTML = 'Impressum';
  impressumLink.classList.add('nc-theming-contrast');
  impressumLink.style.paddingLeft = '35px';

  if(document.body.getAttribute('id') === 'body-login') { // Login-Seite
    const footer = document.querySelector('footer[role="contentinfo"] p.info');
    footer.appendChild(kontaktLink);
    footer.appendChild(impressumLink);
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
