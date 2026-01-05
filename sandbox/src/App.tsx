import React, { useState } from 'react'
import SearchEngine from './SearchEngine'

export default function App() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <div>
            <h2>Kontrola kvality ovzduší</h2>
            <p>Vítejte v Moje AirAppka. Zadejte adresu nebo město a kontrolujte kvalitu ovzduší v reálném čase.</p>
            <SearchEngine />
          </div>
        )
      case 'about':
        return (
          <div>
            <h2>O aplikaci</h2>
            <p><strong>Moje AirAppka</strong> je vaším důvěryhodným partnerem pro monitoring kvality ovzduší.</p>
            <h3>Naše mise</h3>
            <p>Poskytujeme přesné, jednoduché a přístupné informace o kvalitě ovzduší pro všechny občany České republiky.</p>
            <h3>Klíčové funkce</h3>
            <ul>
              <li>Vyhledávání kvality ovzduší po adrese</li>
              <li>Aktuální data o PM2.5, PM10, NO₂ a dalších polutantech</li>
              <li>Předpověď na 7 dní dopředu</li>
              <li>Zdravotní doporučení podle AQI indexu</li>
              <li>Srovnání s historickými daty</li>
            </ul>
          </div>
        )
      case 'program':
        return (
          <div>
            <h2>Vzdělávací program</h2>
            <h3>Vzdělávání o kvalitě ovzduší</h3>
            <p>Naše vzdělávací iniciativy pomáhají lidem porozumět vlivům znečišťování ovzduší na jejich zdraví.</p>
            <h3>Typy polutantů</h3>
            <ul>
              <li><strong>PM2.5:</strong> Jemné částice - hlavní příčina zhoršení kvality ovzduší</li>
              <li><strong>PM10:</strong> Větší částice - páchají dýchacím cestám</li>
              <li><strong>NO₂:</strong> Oxid dusičitý - pochází z automobilů a průmyslu</li>
              <li><strong>O₃:</strong> Ozon - vytváří se v atmosféře za slunečného počasí</li>
              <li><strong>SO₂:</strong> Oxid siřičitý - z fosilních paliv</li>
            </ul>
            <h3>Zdravotní dopad</h3>
            <p>Znečišťování ovzduší může vést k astmatu, bronchitidě a dalším respiračním onemocněním. Starší osoby a děti jsou zvlášť zranitelné.</p>
          </div>
        )
      case 'team':
        return (
          <div>
            <h2>Náš tým & Kontakt</h2>
            <p><strong>Kontaktní informace:</strong></p>
            <p>
              📧 <a href="mailto:info@moje-airappka.com">info@moje-airappka.com</a><br/>
              📱 +420 123 456 789<br/>
              📍 Staroměstské náměstí 1, 110 00 Praha 1, Česká republika
            </p>
            <p>Jsme tým specialistů zabývajících se monitoringem a analýzou kvality ovzduší. Naše mise je chránit zdraví lidí poskytováním spolehlivých informací.</p>
            <h3>Pracovní doba</h3>
            <ul>
              <li>Pondělí–Pátek: 8:00–18:00 CET</li>
              <li>Sobota–Neděle: Zavřeno</li>
              <li>Svátkový den: Zavřeno</li>
            </ul>
            <h3>Právní informace</h3>
            <p><strong>Společnost:</strong> Moje AirAppka s.r.o.<br/>
            <strong>IČO:</strong> 12345678<br/>
            <strong>DIČ:</strong> CZ12345678</p>
          </div>
        )
      case 'privacy':
        return (
          <div>
            <h2>Zásady ochrany osobních údajů (GDPR)</h2>
            <h3>1. Správce údajů</h3>
            <p>Správcem vašich osobních údajů je Moje AirAppka s.r.o., Staroměstské náměstí 1, 110 00 Praha 1, IČO: 12345678, email: <a href="mailto:privacy@moje-airappka.com">privacy@moje-airappka.com</a>.</p>
            <h3>2. Jaké údaje sbíráme</h3>
            <ul>
              <li>Hledané adresy a místa</li>
              <li>IP adresa a informace o zařízení (přes cookies a analytiku)</li>
              <li>Kontaktní informace (pokud nás kontaktujete)</li>
              <li>Údaje o využívání služby</li>
            </ul>
            <h3>3. Právní základ zpracování</h3>
            <p>Zpracováváme údaje na základě: vašeho souhlasu, plnění smlouvy, splnění právních povinností a našich oprávněných zájmů.</p>
            <h3>4. Jak používáme údaje</h3>
            <ul>
              <li>Poskytování služby</li>
              <li>Vylepšování a analýza služby</li>
              <li>Komunikace s vámi</li>
              <li>Splnění právních povinností</li>
              <li>Bezpečnost a ochrana před zneužitím</li>
            </ul>
            <h3>5. Doba uchovávání</h3>
            <p>Osobní údaje jsou uchovávány po dobu nezbytnou pro plnění smlouvy a splnění právních povinností, nejdéle 3 roky.</p>
            <h3>6. Vaše práva</h3>
            <ul>
              <li>Právo na přístup k vašim údajům</li>
              <li>Právo na opravu nepřesných údajů</li>
              <li>Právo na smazání údajů</li>
              <li>Právo na omezení zpracování</li>
              <li>Právo na přenositelnost údajů</li>
              <li>Právo na námitku proti zpracování</li>
              <li>Právo na stížnost u regulační autority</li>
            </ul>
            <h3>7. Bezpečnost</h3>
            <p>Všechny osobní údaje jsou šifrovány (SSL/TLS) a chráněny nejmodernějšími bezpečnostními standardy. Máme zaveden přísný přístupový režim a pravidelně provádíme bezpečnostní audity.</p>
            <h3>8. Třetí strany</h3>
            <p>Údaje jsou sdíleny pouze s: poskytovateli cloudových služeb, analytickými nástroji (Google Analytics), poskytovateli dat o kvalitě ovzduší. Všichni mají uzavřeny smlouvy na ochranu osobních údajů (DPA).</p>
          </div>
        )
      case 'cookies':
        return (
          <div>
            <h2>Zásady používání cookies</h2>
            <h3>1. Co jsou cookies</h3>
            <p>Cookies jsou malé textové soubory, které se ukládají na vaše zařízení a pomáhají nám poskytovat lepší služby.</p>
            <h3>2. Typy cookies, které používáme</h3>
            <ul>
              <li><strong>Nutné cookies:</strong> Vyžadovány pro fungování webu (session, bezpečnost)</li>
              <li><strong>Analytické cookies:</strong> Pomáhají nám pochopit, jak web používáte (Google Analytics)</li>
              <li><strong>Preferenční cookies:</strong> Pamatují si vaše preference (jazyk, téma)</li>
              <li><strong>Marketingové cookies:</strong> Pomáhají nám zlepšit reklamu a obsah</li>
            </ul>
            <h3>3. Jak spravovat cookies</h3>
            <p>Cookies můžete ve svém prohlížeči zakázat. Upozorňujeme, že některé funkce webu nemusí bez cookies fungovat správně.</p>
            <h3>4. Třetí strany</h3>
            <p>Používáme Google Analytics. Jejich zásady najdete na <a href="https://policies.google.com/privacy" target="_blank">policies.google.com/privacy</a>.</p>
          </div>
        )
      case 'terms':
        return (
          <div>
            <h2>Podmínky používání služby</h2>
            <h3>1. Přijetí podmínek</h3>
            <p>Používáním Moje AirAppka souhlasíte s těmito podmínkami. Pokud nesouhlasíte, prosím nepoužívejte službu.</p>
            <h3>2. Popis služby</h3>
            <p>Moje AirAppka poskytuje informace o kvalitě ovzduší na základě dostupných dat. Služba je poskytována "tak, jak je" bez záruky.</p>
            <h3>3. Řádné použití</h3>
            <p>Souhlasíte, že budete službu používat legálně a nebudete:</p>
            <ul>
              <li>Porušovat zákony a nařízení</li>
              <li>Poškozovat infrastrukturu služby</li>
              <li>Získávat přístup neoprávněně</li>
              <li>Šírit škodlivý obsah</li>
              <li>Porušovat práva duševního vlastnictví</li>
            </ul>
            <h3>4. Odpovědnost a omezení</h3>
            <p>Informace jsou poskytovány na základě veřejně dostupných dat. Nejsme odpovědní za:</p>
            <ul>
              <li>Nepřesnosti způsobené třetími stranami</li>
              <li>Ztráty nebo poškození vlivem použití služby</li>
              <li>Přerušení nebo nedostupnost služby</li>
              <li>Rozhodnutí učiněná na základě našich dat bez dodatečného ověření</li>
            </ul>
            <h3>5. Zpoplatnění a fakturace</h3>
            <p>Základní služba je zdarma. Případné prémiové funkce mohou být zpoplatněny. Ceny se mohou změnit s 30denním upozorněním.</p>
            <h3>6. Duševní vlastnictví</h3>
            <p>Všechen obsah (texty, grafika, data) je chráněn autorským právem. Reprodukce bez souhlasu je zakázána.</p>
            <h3>7. Změny a zrušení služby</h3>
            <p>Vyhrazujeme si právo na změnu nebo zrušení služby se 30denním upozorněním.</p>
            <h3>8. Ukončení účtu</h3>
            <p>Účet lze zrušit kdykoli. Po zrušení nebudete mít přístup k datům.</p>
            <h3>9. Zákonná práva</h3>
            <p>Tyto podmínky se řídí zákony České republiky. Soudní spory budou řešeny českými soudy.</p>
          </div>
        )
      case 'disclaimer':
        return (
          <div>
            <h2>Právní vylučovací klauzule</h2>
            <h3>1. Omezeníhaftnosti</h3>
            <p>Moje AirAppka a její operátoři nejsou odpovědní za:</p>
            <ul>
              <li>Jakékoliv přímé, nepřímé, náhodné nebo následné škody</li>
              <li>Ztrátu dat, výnosů nebo příležitostí</li>
              <li>Škody způsobené třetími stranami</li>
              <li>Používání nebo nemožnost používání služby</li>
            </ul>
            <h3>2. Přesnost informací</h3>
            <p>Ačkoli se snažíme poskytovat přesné informace, nezaručujeme jejich absolutní správnost. Data mohou obsahovat chyby nebo zastarávat informace.</p>
            <h3>3. Zdravotní informace</h3>
            <p><strong>DŮLEŽITÉ:</strong> Informace o kvalitě ovzduší nejsou náhradou za lékařský názor. Pokud máte zdravotní problémy, konzultujte vždy lékaře.</p>
            <h3>4. Externí odkazy</h3>
            <p>Nejsme odpovědní za obsah odkazovaných webů. Použití těchto odkazů je na vaše riziko.</p>
            <h3>5. Dostupnost služby</h3>
            <p>Negarantujeme nepřetržitou dostupnost. Služba se může přechodně nedostupná kvůli údržbě nebo technickým chybám.</p>
            <h3>6. Aktualizace</h3>
            <p>Vylučujeme odpovědnost za zpožděné, nekompletní nebo nepřesné informace.</p>
          </div>
        )
      case 'accessibility':
        return (
          <div>
            <h2>Přístupnost</h2>
            <h3>Naše závazek</h3>
            <p>Jsme zavázáni zajistit, aby byla Moje AirAppka přístupná pro všechny uživatele, včetně osob se zdravotním postižením.</p>
            <h3>Funkcionalita přístupnosti</h3>
            <ul>
              <li>Kompatibilita se čtečkami obrazovky</li>
              <li>Klávesnicová navigace</li>
              <li>Dostatečný kontrast barev</li>
              <li>Responzivní design pro mobilní zařízení</li>
              <li>Alternativní text pro obrázky</li>
            </ul>
            <h3>Hlášení problémů</h3>
            <p>Pokud narazíte na problém s přístupností, kontaktujte nás na <a href="mailto:accessibility@moje-airappka.com">accessibility@moje-airappka.com</a>.</p>
          </div>
        )
      case 'ads':
        return (
          <div>
            <h2>Zásady reklamy a obsahu</h2>
            <h3>1. Přijatelný obsah</h3>
            <p>Naše reklamy a obsah musí splňovat standardy stanovené cloudovými platformami a regulačními orgány.</p>
            <h3>2. Zakázaný obsah</h3>
            <p>Netolerujeme reklamy nebo obsah:</p>
            <ul>
              <li>Násilného, sexuálního nebo nenávistného charakteru</li>
              <li>Zvýhodňující nelegální aktivity</li>
              <li>Obsahující podvody nebo manipulaci</li>
              <li>Porušující autorská práva</li>
              <li>Diskriminační nebo urážlivý</li>
            </ul>
            <h3>3. Moderace obsahu</h3>
            <p>Pravidelně kontrolujeme obsah a reklamy. Porušující obsah je odstraněn bez varování.</p>
            <h3>4. Třetí strany</h3>
            <p>Nejsme odpovědní za obsah reklam podávaných třetími stranami (Google AdSense apod.).</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>🌍 Moje AirAppka</h1>
        <p>Kontrola kvality ovzduší v reálném čase</p>
      </header>

      <nav className="app-nav">
        <button className={page === 'home' ? 'nav-btn active' : 'nav-btn'} onClick={() => setPage('home')}>
          Domů
        </button>
        <button className={page === 'about' ? 'nav-btn active' : 'nav-btn'} onClick={() => setPage('about')}>
          O aplikaci
        </button>
        <button className={page === 'program' ? 'nav-btn active' : 'nav-btn'} onClick={() => setPage('program')}>
          Vzdělání
        </button>
        <button className={page === 'team' ? 'nav-btn active' : 'nav-btn'} onClick={() => setPage('team')}>
          Kontakt
        </button>
      </nav>

      <main className="app-content">
        {renderPage()}
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-col">
            <h4>O nás</h4>
            <p className="footer-company">Moje AirAppka s.r.o.</p>
            <p>Staroměstské náměstí 1<br/>110 00 Praha 1<br/>Česká republika</p>
            <p>IČO: 12345678 | DIČ: CZ12345678</p>
          </div>

          <div className="footer-col">
            <h4>Kontakt</h4>
            <p><a href="mailto:info@moje-airappka.com">info@moje-airappka.com</a></p>
            <p><a href="tel:+420123456789">+420 123 456 789</a></p>
            <p>Pondělí–Pátek: 8:00–18:00 CET<br/>Sobota–Neděle: Zavřeno</p>
          </div>

          <div className="footer-col">
            <h4>Právní</h4>
            <button className="footer-link" onClick={() => setPage('terms')}>Podmínky používání</button>
            <button className="footer-link" onClick={() => setPage('privacy')}>Ochrana osobních údajů</button>
            <button className="footer-link" onClick={() => setPage('cookies')}>Cookies</button>
            <button className="footer-link" onClick={() => setPage('disclaimer')}>Právní vylučovací klauzule</button>
          </div>

          <div className="footer-col">
            <h4>Nápověda & Compliance</h4>
            <button className="footer-link" onClick={() => setPage('accessibility')}>Přístupnost</button>
            <button className="footer-link" onClick={() => setPage('ads')}>Zásady obsahu a reklamy</button>
            <button className="footer-link" onClick={() => setPage('about')}>O aplikaci</button>
            <button className="footer-link" onClick={() => setPage('program')}>Vzdělávací program</button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Moje AirAppka. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </div>
  )
}
