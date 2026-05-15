const fs = require('fs');
let content = fs.readFileSync('i18n.ts', 'utf8');

const swedish = `    footer: {\n      supportText: "Om ni gillar vårt projekt och vill att det ska fortsätta vara gratis, stötta oss gärna med en gåva genom att scanna QR-koden.",`;

const english = `    footer: {\n      supportText: "If you like our project and want it to continue being free, please support us with a gift by scanning the QR code.",`;

const spanish = `    footer: {\n      supportText: "Si te gusta nuestro proyecto y quieres que siga siendo gratuito, apóyanos con un regalo escaneando el código QR.",`;

const norwegian = `    footer: {\n      supportText: "Hvis du liker prosjektet vårt og vil at det skal fortsette å være gratis, støtt oss gjerne med en gave ved å skanne QR-koden.",`;

const danish = `    footer: {\n      supportText: "Hvis du kan lide vores projekt og ønsker, at det fortsat skal være gratis, så støt os gerne med en gave ved at scanne QR-koden.",`;

const german = `    footer: {\n      supportText: "Wenn Ihnen unser Projekt gefällt und Sie möchten, dass es weiterhin kostenlos bleibt, unterstützen Sie uns bitte mit einem Geschenk, indem Sie den QR-Code scannen.",`;

const french = `    footer: {\n      supportText: "Si vous aimez notre projet et souhaitez qu'il reste gratuit, soutenez-nous avec un don en scannant le code QR.",`;

// Replace based on language index or simple string replace
let parts = content.split('footer: {');
if (parts.length === 9) { // 1 before, 8 after
  content = parts[0] + 
    swedish + parts[1] +
    english + parts[2] +
    english + parts[3] +
    spanish + parts[4] +
    norwegian + parts[5] +
    danish + parts[6] +
    german + parts[7] +
    french + parts[8];
}

fs.writeFileSync('i18n.ts', content, 'utf8');
