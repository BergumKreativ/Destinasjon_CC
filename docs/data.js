const SECTIONS = {
  servering: {
    kicker: 'Restauranter & servering',
    tabs: [
      { id: 'vicino', label: 'Trattoria Vicino' },
      { id: 'spill', label: 'Spill & chill' },
      { id: 'hoyden', label: 'Høyden Restaurant' }
    ],
    content: {
      vicino: {
        title: 'Velkommen til naboens italienske trattoria',
        lead: 'Et sted å senke skuldrene, dele et måltid og bli litt lenger.',
        paras: [
          'Et varmt og uformelt sted der folk fra nabolaget, Construction City og området rundt møtes over god mat og små øyeblikk som føles nære.',
          'Hos Vicino dufter det av fersk pasta, sprø steinovnspizza og italienske smaker. Stemningen er uformell, hjemmekoselig og folkelig – akkurat slik en trattoria skal være.',
          'Benvenuti – velkommen til nabolagets italienske hjerte.'
        ],
        book: { label: 'Book bord →', href: 'https://www.vicino.no' },
        link: { label: 'Se meny', href: 'https://www.vicino.no' }
      },
      spill: {
        title: 'Fra middag til kveldens neste stopp',
        lead: 'Oppdag en verden av spill og moro.',
        paras: [
          'Start med italiensk mat og noe godt i glasset hos Trattoria Vicino. Bli igjen for en runde golf, dart, shuffleboard, biljard eller brettspill – alt samlet i og rundt det samme sosiale området.',
          'Her kan kollegaer, kunder eller venner samles rundt bordet først, og la kvelden gli naturlig videre med spill og aktivitet etterpå.',
          'Perfekt for afterwork, teambuilding, kundekvelder eller en hyggelig avslutning på dagen.'
        ],
        suitable: ['Afterwork', 'Kollegakveld', 'Teambuilding', 'Kundekveld', 'Uformelle samlinger'],
        book: { label: 'Book bord →', href: 'https://www.vicino.no' },
        ask: 'Book gruppe'
      },
      hoyden: {
        title: 'Velkommen til Høyden Restaurant',
        lead: 'Et bedre måltid, et møte eller en markering – litt over hverdagen.',
        paras: [
          'I 10. etasje, høyt over atriet og pulsen i huset, ligger Høyden Restaurant. Her kan leietakere, gjester og besøkende samles til måltider, møter og markeringer med panoramautsikt over Oslo.',
          'Høyden passer for middager, kundearrangementer, selskaper og anledninger som fortjener litt ekstra. Opplevelsen kan også kombineres med privat lounge, styrerom eller takterrasse etter behov.',
          'Med direkte tilgang til takterrassen kan arrangementet fortsette ute når været tillater det – med byen som bakteppe.'
        ],
        book: { label: 'Åpne Høyden Restaurant ↗', href: 'Hoyden.dc.html' },
        ask: 'Book selskap'
      }
    }
  },
  moterom: {
    kicker: 'Møterom & arrangement',
    tabs: [
      { id: 'styrerom', label: 'Styrerom' },
      { id: 'takterrassen', label: 'Takterrassen' },
      { id: 'glasshallen', label: 'Glasshallen' },
      { id: 'moterom', label: 'Møterom, auditorie & scene' },
      { id: 'studio', label: 'Studio & innholdsproduksjon' }
    ],
    content: {
      styrerom: {
        title: 'Eksklusivt i Høyden',
        lead: 'Eksklusive møter med utsikt, ro og en privat ramme.',
        paras: [
          'I 10. etasje finner du et eksklusivt styrerom med tilhørende privat lounge – perfekt for ledermøter, kundemøter, workshops og samtaler som krever ro, utsikt og en mer personlig atmosfære.',
          'Her kan møtet starte rundt bordet og fortsette i loungen, med servering, gode samtaler og Oslo som bakteppe. Loungen gir rom for både det formelle og det uformelle – før, under eller etter møtet.',
          'Et sted for viktige beslutninger, gode relasjoner og anledninger som trenger litt ekstra.'
        ],
        suitable: ['Ledergruppemøter', 'Kundemøter', 'Workshops', 'Presentasjoner', 'Private middager', 'Markeringer'],
        ask: 'Send forespørsel',
        sticker: 'Ta kontakt for serveringspakke'
      },
      takterrassen: {
        title: 'Ulvens beste utsikt',
        lead: 'En grønn pause, et sommerlig arrangement eller en middag med Oslo som bakteppe.',
        paras: [
          'Her kan du trekke ut i det grønne, samle gjester til mingling eller legge rammen for en sommerlig markering over byen.',
          'Takterrassen passer like godt til uformelle pauser som til arrangementer, mingling, servering og øyeblikk som gjerne kan vare litt lenger. Med kort vei til Høyden Restaurant, lounge og styrerom kan opplevelsen enkelt kombineres med møte, middag eller event.',
          'Et sted for frisk luft, gode smaker og Oslo sett fra en litt annen vinkel.'
        ],
        suitable: ['Mingling', 'Sommerfest', 'Servering ute', 'Markeringer'],
        ask: 'Send forespørsel'
      },
      glasshallen: {
        title: 'Glasshallen, event og større arrangement',
        lead: 'Et levende samlingspunkt for store øyeblikk, faglige arrangementer og opplevelser som skal merkes.',
        paras: [
          'Glasshallen er hjertet i Construction City – et åpent og fleksibelt rom med plass til både mennesker, innhold og aktivitet. Her kan huset fylles med konferanser, lanseringer, stands, mingling, foredrag og arrangementer som samler mange på én gang.',
          'Med sin sentrale plassering, gode synlighet og åpne arkitektur egner Glasshallen seg godt når arrangementet skal skape energi, bygge fellesskap og sette spor.'
        ],
        suitable: ['Konferanser', 'Lanseringer', 'Stands', 'Mingling', 'Faglige samlinger', 'Større arrangementer'],
        ask: 'Send forespørsel'
      },
      moterom: {
        title: 'Møterom, auditorium & scene',
        lead: 'Rom for møter, presentasjoner og faglig påfyll.',
        paras: [
          'Fleksible rom og profesjonelle rammer for møter, presentasjoner og faglig påfyll.',
          'Construction City tilbyr møte- og arrangementsfasiliteter for alt fra mindre møter og workshops til større presentasjoner, kurs og samlinger.',
          'Rom, teknikk og servering kan tilpasses behovet, med kort vei til Foodcourt, kaffebarer og øvrige fasiliteter på huset.'
        ],
        suitable: ['Møter', 'Workshops', 'Kurs', 'Foredrag', 'Panelsamtaler', 'Presentasjoner', 'Kundearrangementer', 'Årsmøter'],
        ask: 'Send forespørsel',
        sticker: 'Se møtemat-menyer her',
        stickerRoute: 'motemat'
      },
      studio: {
        title: 'Studio & innholdsproduksjon',
        lead: 'Profesjonelle rammer for innhold som skal deles videre.',
        paras: [
          'Construction City har studiofasiliteter for film, foto, lyd og digital produksjon. Her kan du spille inn podcast, gjennomføre intervjuer, strømme innhold eller produsere materiale til interne og eksterne kanaler.',
          'Et godt valg når fag, mennesker og historier skal formidles videre – med en mer profesjonell ramme enn et vanlig møterom.'
        ],
        suitable: ['Podcast', 'Video', 'Livestream', 'Intervjuer', 'Foto', 'Digitalt innhold'],
        ask: 'Send forespørsel'
      }
    }
  },
  praktisk: {
    kicker: 'Trening & fasiliteter',
    tabs: [
      { id: 'trening', label: 'Treningssenter' },
      { id: 'praktisk', label: 'Praktisk info' }
    ],
    content: {
      trening: {
        title: 'Treningssenter, sykkelparkering og garderober',
        lead: 'Mer energi inn i arbeidsdagen – før jobb, mellom møter eller på vei hjem.',
        paras: [
          'Med treningssenter, garderober og sykkelparkering gjør Construction City det enklere å kombinere jobb, trening og transport.',
          'Treningstilbudet driftes av Corporis, som står for trenings- og behandlingstilbudet i bygget. Her kan du starte dagen med en økt, ta en aktiv pause eller avslutte arbeidsdagen med ny energi – uten å forlate huset.'
        ],
        suitable: ['Trening', 'Aktive pauser', 'Sykkelpendling', 'Behandling & forebygging']
      },
      praktisk: {
        title: 'Praktisk på huset',
        lead: 'Åpningstider, parkering og adkomst.',
        paras: [
          'Construction City er åpent mandag til fredag 07.00–17.00. Tilgang utenom åpningstid styres via adgangskontroll.',
          'Serveringsstedene har egne åpningstider. Høyden Restaurant er åpen for booking, og bord hos Trattoria Vicino bookes direkte hos restauranten.'
        ],
        info: true
      }
    }
  }
};

const HOURS = [
  { name: 'Spiren Kaffebar', time: '07.00–17.00' },
  { name: 'Centralen Café', time: '08.00–15.00' },
  { name: 'Foodcourt', time: '10.30–13.30' },
  { name: 'Høyden Restaurant', time: 'Åpen for booking' },
  { name: 'Trattoria Vicino', time: 'Booking via Vicino' }
];

const TILES = [
  { route: 'servering', slot: 'tile-servering', src: 'assets/cc/vicino-mat.webp', kicker: 'Restauranter & servering', title: 'Restauranter og servering', lead: 'Trattoria Vicino, Høyden Restaurant og et sosialt område med spill.', tags: ['Vicino', 'Høyden', 'Spill & chill'] },
  { route: 'foodcourt', slot: 'tile-foodcourt', src: 'assets/cc/foodcourt-hero.jpg', kicker: 'Foodcourt & kaffebarer', title: 'Foodcourt og kaffebarer', lead: 'Lunsj fra flere konsepter, Spiren Kaffebar og Centralen Café.', tags: ['Foodcourt', 'Spiren', 'Centralen'] },
  { route: 'moterom', slot: 'tile-moterom', src: 'assets/cc/glasshallen-publikum.jpg', kicker: 'Møterom & arrangement', title: 'Møterom og arrangement', lead: 'Styrerom, takterrasse, Glasshallen, auditorium og studio.', tags: ['Styrerom', 'Glasshallen', 'Takterrassen'] },
  { route: 'motemat', slot: 'tile-motemat', src: 'assets/mat/Kyllingsalat.jpg', kicker: 'Møtemat', title: 'Møtemat-menyer', lead: 'Wellmade-pakker og à la carte til møtet, lagt rett i forespørselen.', tags: ['Dagpakker', 'Lunsj', 'Pausemat'] },
  { route: 'praktisk', slot: 'tile-trening', src: 'assets/cc/trening-lopemoller.webp', kicker: 'Trening & fasiliteter', title: 'Trening og energi', lead: 'Treningssenter, garderober og sykkelparkering, driftet av Corporis.', tags: ['Trening', 'Garderober', 'Sykkel'] },
  { href: 'Hoyden.dc.html', slot: 'tile-hoyden', src: 'assets/cc/hoyden-sal.jpg', kicker: 'Høyden', title: 'Høyden Restaurant', lead: 'Middager, selskap og markeringer i 10. etasje, med tak­terrassen ved siden av.', tags: ['Middag', 'Selskap', 'Utsikt'] }
];

const HOYDEN_CARDS = [
  { slot: 'hoyden-terrasse', src: 'assets/cc/takterrassen-panorama.jpg', title: 'Takterrassen', text: 'Direkte tilgang fra restauranten. Arrangementet kan fortsette ute når været tillater det.', cta: 'Se takterrassen', route: 'moterom', tab: 'takterrassen' },
  { slot: 'hoyden-styrerom', src: 'assets/cc/styrerom-lounge.jpg', title: 'Styrerom & lounge', text: 'Eksklusivt styrerom med privat lounge i samme etasje. Kan kombineres med middag.', cta: 'Se styrerommet', route: 'moterom', tab: 'styrerom' },
  { slot: 'hoyden-selskap', src: 'assets/cc/hoyden-terrassekrakk.jpg', title: 'Selskap og markeringer', text: 'Middager, kundearrangementer og anledninger som fortjener litt ekstra.', cta: 'Send forespørsel', route: 'booking' }
];

const CONCEPTS = [
  { slot: 'fc-smoky', src: 'assets/cc/logo-smoky.png', name: 'Smoky Flavours', text: 'Burgere og grill.' },
  { slot: 'fc-kojachi', src: 'assets/cc/logo-kojachi.png', name: 'Kojachi', text: 'Tiger style street food.' },
  { slot: 'fc-stack', src: 'assets/cc/logo-stack.png', name: 'Stack Sandwichery', text: 'Sandwicher, laget på stedet.' },
  { slot: 'fc-chickpea', src: 'assets/cc/logo-chickpea.png', name: 'The Chick Pea', text: 'Grønt og plantebasert.' },
  { slot: 'fc-krisp', src: 'assets/cc/logo-krisp.png', name: 'Krisp', text: 'Ferske og sprø salater.' },
  { slot: 'fc-lokal', src: 'assets/cc/logo-lokal.png', name: 'Lokal', text: 'Bare norske råvarer.' }
];

const CAFES = [
  { slot: 'cafe-spiren', src: 'assets/cc/spiren-disk.jpg', name: 'Spiren Kaffebar', text: 'Første stopp på vei inn. Kaffe, småretter og noe søtt gjennom hele arbeidsdagen.', time: 'Man–fre 07.00–17.00' },
  { slot: 'cafe-centralen', src: 'assets/cc/centralen-gjest.jpg', name: 'Centralen Café', text: 'Pausen mellom møter. Et sted å sette seg ned en liten stund.', time: 'Man–fre 08.00–15.00' }
];

const PACKAGES = [
  { name: 'Frokostpakke', price: 200, lead: 'Et godt valg for morgenmøter og større samlinger. Serveres med påsmurt, kaldt, snacks og drikke.', text: 'Inneholder blant annet: Husets rundstykker, gresk yoghurt, kald byggrynsgrøt, frukt, cookie, smoothie, juice og kaffe/te.' },
  { name: 'Halvdagspakke – alternativ 1', price: 245, lead: 'For møter som varer gjennom deler av dagen, med drikke, pause og lunsj.', text: 'Kaffe/te, limonade, gresk yoghurt, sesongens frukt og lunsjbong til Foodcourt.' },
  { name: 'Halvdagspakke – alternativ 2', price: 275, lead: 'For møter som varer gjennom deler av dagen, med drikke, pause og lunsj.', text: 'Kaffe/te, limonade, lunsjbong til Foodcourt, cookie, frukt og spicy mandler.' },
  { name: 'Heldagspakke', price: 369, lead: 'En komplett løsning for heldagsmøter og arrangementer.', text: 'Kaffe, te, limonade og isvann gjennom dagen, mat til to pauser og lunsj i Foodcourt. Pakken inkluderer blant annet gresk yoghurt, frukt, cookie, spicy mandler og lunsjbong til Foodcourt.' }
];

const ITEMS = {
  frokost: [
    { name: 'Frukt', price: 48, text: 'Sesongens frukt servert i porsjonsbeger.' },
    { name: 'Smoothie', price: 48, text: 'Vår friske smoothie laget med sesongens frukt eller bær.' },
    { name: 'Gresk yoghurt', price: 48, text: 'Gresk yoghurt toppet med rørte bær og glutenfri granola.', allergens: 'Allergener: havre, melk' },
    { name: 'Nylaget byggrynsgrøt', price: 48, text: 'Kald byggrynsgrøt med rørte bær og glutenfri granola.', allergens: 'Allergener: gluten (bygg, havre), melk' },
    { name: 'Sprø croissant', price: 48, text: 'Nystekte croissanter servert med pisket smør og rørte bær.', allergens: 'Allergener: gluten (hvete), egg, melk' },
    { name: 'Husets rundstykke med ost & skinke', price: 48, text: 'Våre nybakte rundstykker med pisket smør, Østavind, kokt skinke og salat.', allergens: 'Allergener: gluten (hvete, spelt), melk. Vi har glutenfritt alternativ.' },
    { name: 'Husets rundstykke med kremost', price: 48, text: 'Våre nybakte rundstykker fylt med bakt paprika, kremost og salat.', allergens: 'Allergener: gluten (hvete, spelt), melk, sesamfrø. Vi har glutenfritt alternativ.' }
  ],
  lunsj: [
    { name: 'Gresk salat', price: 118, text: 'Klassisk gresk salat med kalamataoliven og oreganomarinert fetaost.', allergens: 'Allergener: melk' },
    { name: 'Kyllingsalat med parmesan', price: 124, text: 'Sprø salat med kylling, urtekrutonger, ferskrevet parmesan og cæsardressing.', allergens: 'Allergener: gluten (hvete, bygg, havre), melk, egg, sennep, sulfitt og fisk' },
    { name: 'Kyllingwrap', price: 124, text: 'Tortillawraps med curry-kylling og sprø spinat.', allergens: 'Allergener: gluten (hvete), egg, sennep' },
    { name: 'Vegetarwrap', price: 118, text: 'Tortillawraps med bakte grønnsaker, sprø spinat og fetaost.', allergens: 'Allergener: gluten (hvete, havre), melk, sesamfrø' },
    { name: 'Focaccia med fetaost', price: 107, text: 'Focaccia med bakt aubergine, pesto av soltørket tomat og fetaost.', allergens: 'Allergener: gluten (hvete, bygg, rug), melk. Vi har glutenfritt alternativ.' },
    { name: 'Focaccia med spekeskinke', price: 118, text: 'Focaccia med aioli, modnet spekeskinke og ferskrevet parmesan.', allergens: 'Allergener: gluten (hvete, bygg, rug), egg, melk, sennep. Vi har glutenfritt alternativ.' },
    { name: 'Husets rundstykke med ost & skinke', price: 48, text: 'Våre nybakte rundstykker med pisket smør, Østavind, kokt skinke og salat.', allergens: 'Allergener: gluten (hvete, spelt), melk. Vi har glutenfritt alternativ.' }
  ],
  pausemat: [
    { name: 'Frisk frukt', price: 48, text: 'Sesongens frukt servert i porsjonsbeger. Bestilles per porsjon.' },
    { name: 'Fruktboks', price: 48, text: 'Fruktboks med sesongens oppskårede frukt. Bestilles per porsjon, 150 g.' },
    { name: 'Husets kanelknute', price: 36, text: 'Bestilles per porsjon.', allergens: 'Allergener: gluten (hvete), melk, egg. Vi har glutenfritt alternativ.' },
    { name: 'Vanilje- og bringebærbolle', price: 36, text: 'Bestilles per porsjon.', allergens: 'Allergener: gluten (hvete), melk' },
    { name: 'Husets sjokolade- og peanøttcookie', price: 38, text: 'Bestilles per porsjon.', allergens: 'Allergener: gluten (hvete), melk, nøtter (peanøtter), egg' },
    { name: 'Flapjack med rosiner', price: 42, text: 'Bestilles per porsjon.', allergens: 'Allergener: gluten (havre, hvete), melk, egg, soya' },
    { name: 'Gulrotkake', price: 38, text: 'Saftig gulrotkake med kremosttopping.', allergens: 'Allergener: gluten (hvete), melk, egg' },
    { name: 'Brownie med cashewnøtter', price: 48, text: 'Vår glutenfrie brownie med cashewnøtter.', allergens: 'Allergener: nøtter (cashewnøtter)' },
    { name: 'Spicy mandler', price: 36, text: 'Sriracha-ristede mandler.', allergens: 'Allergener: nøtter (mandel)' },
    { name: 'Nystekte vafler', price: 36, text: 'Med rørte bær og rømme.', allergens: 'Allergener: gluten (hvete), melk, egg' }
  ],
  drikke: [
    { name: 'Drikkepakke', price: 48, text: 'Nytraktet kaffe, et utvalg te, friskt vann og hjemmelaget limonade med smak av sitrus. Bestilles per porsjon.' },
    { name: 'Kaffe', price: 22, text: 'Vår nytraktede kaffe. Serveres i kanne. Bestilles per porsjon.' },
    { name: 'Te', price: 22, text: 'Serveres i kanne. Bestilles per porsjon.' },
    { name: 'Juice', price: 88, text: 'Husets eplejuice eller appelsinjuice. Serveres i flasker à 1 liter. Bestilles per flaske.' },
    { name: 'Limonade', price: 120, text: 'Husets limonade med smak av sitrus. Serveres i flasker à 1 liter. Bestilles per flaske.' },
    { name: 'Telemark mineralvann', price: 29, text: 'Et assortert utvalg mineralvann: naturell, sitron eller eple. Bestilles per porsjon.' },
    { name: 'Mineralvann', price: 29, text: 'Et assortert utvalg mineralvann fra Coca-Cola. Bestilles per porsjon.' },
    { name: 'Wellmade smoothie', price: 180, text: 'Vår friske smoothie laget med sesongens frukt eller bær. Serveres i flasker à 1 liter. Bestilles per flaske.' }
  ]
};

const MENU_TABS = [
  { id: 'pakker', label: 'Dagpakker', title: 'Møtemat – pakker' },
  { id: 'frokost', label: 'Frokost', title: 'à la carte – frokost' },
  { id: 'lunsj', label: 'Lunsj', title: 'à la carte – lunsj' },
  { id: 'pausemat', label: 'Pausemat', title: 'à la carte – pausemat & snacks' },
  { id: 'drikke', label: 'Drikke', title: 'à la carte – drikke' }
];

const CONTACTS = [
  { role: 'Alle bookingforespørsler', name: 'Amanda Bakke', email: 'booking@constructioncity.no' },
  { role: 'Høyden & taket', name: 'Mari Hexeberg', email: 'hoyden@compass-group.no' },
  { role: 'Møte & konferanse', name: 'Marlene Bentsen', email: 'marlene.bentsen@compass-group.no' },
  { role: 'Kommersielle event og arrangement', name: 'Alexander Keith Jones', email: 'alexander.jones@compass-group.no' },
  { role: 'Community & experience', name: 'Emilie Louise Holme', email: 'emilie.louise.holme@obos.no' }
];

const NAV = [
  { route: 'servering', label: 'Restauranter & servering' },
  { route: 'foodcourt', label: 'Foodcourt & kaffebarer' },
  { route: 'moterom', label: 'Møterom & arrangement' },
  { route: 'motemat', label: 'Møtemat' },
  { route: 'praktisk', label: 'Trening & fasiliteter' }
];

const TYPER = ['Lokale eller arrangement', 'Selskap på Høyden', 'Møterom', 'Møtemat', 'Annet'];

const IMG = {
  'servering-vicino': ['assets/cc/vicino-folk.webp', 'assets/cc/vicino-interior.png', 'assets/cc/vicino-selskap.png'],
  'servering-spill': ['assets/cc/spill-lounge.webp', 'assets/cc/spill-golf.jpg', 'assets/cc/spill-shuffleboard.jpg'],
  'servering-hoyden': ['assets/cc/hoyden-glass.jpg', 'assets/cc/hoyden-buffet.jpg', 'assets/cc/hoyden-terrassebord.jpg'],
  'moterom-styrerom': ['assets/cc/styrerom-bord.jpg', 'assets/cc/handklaer.jpg', 'assets/cc/takterrassen-utsikt.jpg'],
  'moterom-takterrassen': ['assets/cc/forside-sommerhage.jpg', 'assets/cc/takterrassen-utsikt.jpg', 'assets/cc/hoyden-terrassebord.jpg'],
  'moterom-glasshallen': ['assets/cc/glasshallen-publikum.jpg', 'assets/cc/glasshallen-hopprenn.png', 'assets/cc/atriet.jpg'],
  'moterom-moterom': ['assets/pdf/p11_2.jpg', 'assets/pdf/p11_3.jpg', 'assets/pdf/p11_4.jpg'],
  'moterom-studio': ['assets/cc/studio-presentasjon.jpg', 'assets/cc/studio-mikser.jpg', 'assets/cc/studio-kamera.jpg'],
  'praktisk-trening': ['assets/cc/corporis-behandling.jpg', 'assets/cc/handklaer.jpg', 'assets/pdf/p13_3.jpg'],
  'praktisk-praktisk': ['assets/cc/cc-skilt.jpg', 'assets/cc/atriet-folk.jpg', 'assets/cc/cc-bygget.jpg']
};

const HERO = {
  hjem: 'assets/cc/forside-sommerhage.jpg',
  hoyden: 'assets/cc/hoyden-sal.jpg',
  foodcourt: 'assets/cc/foodcourt-hero.jpg',
  servering: 'assets/cc/vicino-mat.webp',
  moterom: 'assets/cc/styrerom-lounge.jpg',
  praktisk: 'assets/cc/trening-lopemoller.webp',
  motemat: 'assets/pdf/p17_2.jpg',
  booking: 'assets/cc/cc-bygget.jpg'
};

const CAPTION = {
  'servering-vicino': 'Start med italiensk mat og noe godt i glasset. Bli igjen for golf, dart, biljard eller shuffleboard. Hos Vicino er det kort vei fra middag til kveldens neste stopp.',
  'servering-hoyden': 'Med direkte tilgang til takterrassen kan arrangementet fortsette ute når været tillater det – med byen som bakteppe.',
  'moterom-styrerom': 'Her kan møtet starte rundt bordet og fortsette i loungen, med servering, gode samtaler og Oslo som bakteppe.',
  'moterom-takterrassen': 'Med kort vei til Høyden Restaurant, lounge og styrerom kan opplevelsen enkelt kombineres med møte, middag eller event.'
};



const HOYDEN_MENYER = [
  { id: 'restaurant', label: 'Restaurant', title: 'Høstmeny / Lokal', src: 'assets/meny/hoyden-hostmeny.png', note: 'Tre retter · 960,- / 875,- eks. mva' },
  { id: 'selskap', label: 'Selskap', title: 'Sommermeny / Lokal', src: 'assets/meny/hoyden-sommermeny.png', note: 'Tre retter · 960,- / 875,- eks. mva' },
  { id: 'grill', label: 'Grill', title: 'Grillmeny', src: 'assets/meny/hoyden-grillmeny.png', note: '825,- eks. mva' },
  { id: 'storgrill', label: 'Stor grill', title: 'Stor grillmeny', src: 'assets/meny/hoyden-stor-grillmeny.png', note: '930,- eks. mva' }
];
const HOYDEN_MENY_LENKE = '';

const HERO_TAB = {
  'servering-vicino': 'assets/cc/vicino-mat.webp',
  'servering-spill': 'assets/cc/vicino-mat.webp',
  'servering-hoyden': 'assets/cc/hoyden-sal.jpg',
  'moterom-styrerom': 'assets/cc/styrerom-lounge.jpg',
  'moterom-takterrassen': 'assets/cc/takterrassen-panorama.jpg',
  'moterom-glasshallen': 'assets/cc/glasshallen-hall.jpg',
  'moterom-moterom': 'assets/pdf/p11_1.jpg',
  'moterom-studio': 'assets/cc/studio-kontrollrom.jpg',
  'praktisk-trening': 'assets/cc/trening-lopemoller.webp',
  'praktisk-praktisk': 'assets/cc/atriet.jpg'
};

window.DCDATA = { SECTIONS, HERO_TAB, HOYDEN_MENYER, HOYDEN_MENY_LENKE, HOURS, TILES, HOYDEN_CARDS, CONCEPTS, CAFES, PACKAGES, ITEMS, MENU_TABS, CONTACTS, NAV, TYPER, IMG, HERO, CAPTION };

const DISH_IMG = {
  "Frokostpakke": "assets/mat/Frokostpakke.jpg",
  "Halvdagspakke – alternativ 1": "assets/mat/Lunsjpakke.jpg",
  "Halvdagspakke – alternativ 2": "assets/mat/Pausepakke.jpg",
  "Heldagspakke": "assets/mat/Miljobilde.jpg",
  "Frukt": "assets/mat/Frukt_01.jpg",
  "Smoothie": "assets/mat/Smoothie_01.jpg",
  "Gresk yoghurt": "assets/mat/YogurtRorteBaerGranola.jpg",
  "Nylaget byggrynsgrøt": "assets/mat/KaldByggrynsGrot.jpg",
  "Sprø croissant": "assets/mat/CroissantRorteBaerPisketSmor.jpg",
  "Husets rundstykke med ost & skinke": "assets/mat/LandbrorundstykkeOstSkinke.jpg",
  "Husets rundstykke med kremost": "assets/mat/LandbrorundstykkeBaktPaprika.jpg",
  "Gresk salat": "assets/mat/GreskSalat.jpg",
  "Kyllingsalat med parmesan": "assets/mat/Kyllingsalat.jpg",
  "Kyllingwrap": "assets/mat/TortillawrapKyllingTikka.jpg",
  "Vegetarwrap": "assets/mat/TortillawrapBakteGronnsaker.jpg",
  "Focaccia med fetaost": "assets/mat/FocacciaBaktAubergine.jpg",
  "Focaccia med spekeskinke": "assets/mat/FocacciaSpekeskinkeParmesan.jpg",
  "Frisk frukt": "assets/mat/Frukt_02.jpg",
  "Fruktboks": "assets/mat/Frukt_03.jpg",
  "Husets kanelknute": "assets/mat/Kanelbolle.jpg",
  "Vanilje- og bringebærbolle": "assets/mat/Bringebarbolle.jpg",
  "Husets sjokolade- og peanøttcookie": "assets/mat/SjokoladePeanottCookie.jpg",
  "Flapjack med rosiner": "assets/mat/Havrecookie.jpg",
  "Gulrotkake": "assets/mat/Gulrotkake.jpg",
  "Brownie med cashewnøtter": "assets/mat/GlutenfriBrownie.jpg",
  "Spicy mandler": "assets/mat/Srirachamandler.jpg",
  "Nystekte vafler": "assets/mat/VaflerRorteBaerRomme.jpg",
  "Drikkepakke": "assets/mat/Drikkepakke.jpg",
  "Kaffe": "assets/mat/Kaffe.jpg",
  "Te": "assets/mat/Te.jpg",
  "Juice": "assets/mat/Juice.jpg",
  "Limonade": "assets/mat/Drikkepakke.jpg",
  "Telemark mineralvann": "assets/mat/MineralvannTelemark.jpg",
  "Mineralvann": "assets/mat/MineralvannSamlebilde.jpg",
  "Wellmade smoothie": "assets/mat/Smoothie_02.jpg"
};
window.DCDATA.DISH_IMG = DISH_IMG;
