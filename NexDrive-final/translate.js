
Copier

/**
 * NexDrive — translate.js v3 (cookies)
 */
 
(function() {
 
    function setCookie(name, value, days) {
        var expires = '';
        if (days) {
            var d = new Date();
            d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + d.toUTCString();
        }
        document.cookie = name + '=' + value + expires + '; path=/; SameSite=Lax';
    }
 
    function getCookie(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }
 
    var T = {
 
        // ── NAV PANEL ────────────────────────────────────────────
        'nav.section.navigation': { fr: 'Navigation', en: 'Navigation' },
        'nav.section.espace':     { fr: 'Mon espace', en: 'My Account' },
        'nav.section.legal':      { fr: 'Légal', en: 'Legal' },
        'nav.accueil':            { fr: 'Accueil', en: 'Home' },
        'nav.flotte':             { fr: 'Notre flotte', en: 'Our Fleet' },
        'nav.apropos':            { fr: 'À propos', en: 'About Us' },
        'nav.partenaires':        { fr: 'Partenaires', en: 'Partners' },
        'nav.faq':                { fr: 'FAQ', en: 'FAQ' },
        'nav.engagement':         { fr: 'Engagement', en: 'Our Promise' },
        'nav.compte':             { fr: 'Mon compte', en: 'My Account' },
        'nav.confidentialite':    { fr: 'Confidentialité', en: 'Privacy Policy' },
        'nav.copyright':          { fr: 'NexDrive — Québec © 2026', en: 'NexDrive — Québec © 2026' },
 
        // ── FOOTER ──────────────────────────────────────────────
        'footer.desc':            { fr: 'Location de véhicules premium au Québec, Canada. Réservation en ligne, contrat automatique.', en: 'Premium vehicle rentals in Québec, Canada. Book online, automatic contract.' },
        'footer.h.nav':           { fr: 'Navigation', en: 'Navigation' },
        'footer.h.espace':        { fr: 'Mon espace', en: 'My Account' },
        'footer.h.legal':         { fr: 'Légal', en: 'Legal' },
        'footer.accueil':         { fr: 'Accueil', en: 'Home' },
        'footer.flotte':          { fr: 'Flotte', en: 'Fleet' },
        'footer.apropos':         { fr: 'À propos', en: 'About' },
        'footer.faq':             { fr: 'FAQ', en: 'FAQ' },
        'footer.engagement':      { fr: 'Engagement', en: 'Our Promise' },
        'footer.compte':          { fr: 'Mon compte', en: 'My Account' },
        'footer.connexion':       { fr: 'Connexion', en: 'Sign In' },
        'footer.confidentialite': { fr: 'Confidentialité', en: 'Privacy Policy' },
        'footer.copyright':       { fr: '© 2026 NexDrive — Québec, Canada. Tous droits réservés.', en: '© 2026 NexDrive — Québec, Canada. All rights reserved.' },
 
        // ── BOUTONS COMMUNS ──────────────────────────────────────
        'btn.reserver.turo': { fr: 'Réserver sur Turo', en: 'Book on Turo' },
        'btn.voir.flotte':   { fr: 'Voir nos véhicules', en: 'View Our Fleet' },
        'btn.voir.flotte2':  { fr: 'Voir la flotte', en: 'View Fleet' },
        'btn.retour':        { fr: 'Retour à l\'accueil →', en: 'Back to Home →' },
        'btn.contact':       { fr: 'Nous contacter', en: 'Contact Us' },
        'btn.reserver':      { fr: 'Réserver', en: 'Book Now' },
 
        // ── VÉHICULES ────────────────────────────────────────────
        'vehicules.ph.label':           { fr: 'Notre Flotte', en: 'Our Fleet' },
        'vehicules.ph.h1':              { fr: 'Véhicules', en: 'Premium' },
        'vehicules.ph.h1.em':           { fr: 'premium', en: 'Vehicles' },
        'vehicules.ph.sub':             { fr: 'Tous les véhicules disponibles au Québec', en: 'All vehicles available in Québec' },
        'vehicules.filter.dispo.label': { fr: 'Dispo', en: 'Avail.' },
        'vehicules.filter.dispo':       { fr: 'Disponible maintenant', en: 'Available Now' },
        'vehicules.filter.type':        { fr: 'Type', en: 'Type' },
        'vehicules.filter.tous':        { fr: 'Tous', en: 'All' },
        'vehicules.filter.berline':     { fr: 'Berline', en: 'Sedan' },
        'vehicules.filter.vus':         { fr: 'VUS', en: 'SUV' },
        'vehicules.filter.sport':       { fr: 'Sport', en: 'Sport' },
        'vehicules.filter.elec':        { fr: 'Électrique', en: 'Electric' },
        'vehicules.proc.label':         { fr: 'Flotte / Fleet', en: 'Fleet / Flotte' },
        'vehicules.badge.dispo':        { fr: 'Disponible', en: 'Available' },
        'vehicules.badge.loue':         { fr: 'Loué', en: 'Rented' },
        'vehicules.coming':             { fr: 'Bientôt disponible', en: 'Coming Soon' },
        'vehicules.cta.label':          { fr: 'Prêt à commencer', en: 'Ready to Start' },
        'vehicules.cta.h':              { fr: 'Réservez', en: 'Book' },
        'vehicules.cta.h.em':           { fr: 'maintenant', en: 'now' },
        'vehicules.cta.p':              { fr: 'Accédez à la meilleure flotte de véhicules premium au Québec.<br>Réservation en ligne, contrat automatique.', en: 'Access the best premium vehicle fleet in Québec.<br>Online booking, automatic contract.' },
        'vehicules.cta.btn.home':       { fr: 'Retour à l\'accueil →', en: 'Back to Home →' },
 
        // ── À PROPOS ─────────────────────────────────────────────
        'apropos.badge.txt':    { fr: 'Fondée au Québec · 100% Turo', en: 'Founded in Québec · 100% Turo' },
        'apropos.hero.title1':  { fr: 'Notre', en: 'Our' },
        'apropos.hero.title2':  { fr: 'histoire', en: 'story' },
        'apropos.hero.desc':    { fr: 'NexDrive est né d\'une conviction simple : la location de voiture devrait être une expérience agréable, transparente et mémorable.', en: 'NexDrive was born from a simple belief: renting a car should be a pleasant, transparent, and memorable experience.' },
        'apropos.story.label':  { fr: 'Notre histoire', en: 'Our Story' },
        'apropos.story.h1':     { fr: 'Une passion pour', en: 'A passion for' },
        'apropos.story.h2':     { fr: 'l\'excellence', en: 'excellence' },
        'apropos.story.p1':     { fr: 'NexDrive est une entreprise québécoise de location de véhicules via la plateforme Turo.', en: 'NexDrive is a Québec-based vehicle rental company operating through the Turo platform.' },
        'apropos.story.p2':     { fr: 'Chaque véhicule est entretenu avec soin, nettoyé en profondeur et assuré à 100% via Turo.', en: 'Every vehicle is carefully maintained, deep-cleaned and 100% insured through Turo.' },
        'apropos.story.p3':     { fr: 'Basés au Québec, nous servons des clients à travers toute la province.', en: 'Based in Québec, we serve clients throughout the province.' },
        'apropos.stat1.lbl':    { fr: 'Note Turo', en: 'Turo Rating' },
        'apropos.stat2.lbl':    { fr: 'Clients satisfaits', en: 'Happy Clients' },
        'apropos.stat3.lbl':    { fr: 'Véhicules disponibles', en: 'Vehicles Available' },
        'apropos.values.label': { fr: 'Ce qui nous guide', en: 'What Guides Us' },
        'apropos.values.h':     { fr: 'Nos valeurs', en: 'Our Values' },
        'apropos.val1.title':   { fr: 'Transparence totale', en: 'Full Transparency' },
        'apropos.val1.desc':    { fr: 'Aucun frais caché, aucune mauvaise surprise. Le prix affiché est le prix final.', en: 'No hidden fees, no surprises. The displayed price is the final price.' },
        'apropos.val2.title':   { fr: 'Sécurité & assurance', en: 'Safety & Insurance' },
        'apropos.val2.desc':    { fr: 'Chaque location est couverte à 100% par l\'assurance Turo.', en: 'Every rental is 100% covered by Turo insurance.' },
        'apropos.val3.title':   { fr: 'Service rapide', en: 'Fast Service' },
        'apropos.val3.desc':    { fr: 'Nous répondons rapidement à toutes vos questions.', en: 'We respond quickly to all your questions.' },
        'apropos.val4.title':   { fr: 'Excellence constante', en: 'Consistent Excellence' },
        'apropos.val4.desc':    { fr: 'Nos véhicules sont nettoyés en profondeur avant chaque location.', en: 'Our vehicles are deep-cleaned before every rental.' },
        'apropos.val5.title':   { fr: 'Relation humaine', en: 'Human Connection' },
        'apropos.val5.desc':    { fr: 'Chez NexDrive, chaque client est traité avec respect et bienveillance.', en: 'At NexDrive, every client is treated with respect and kindness.' },
        'apropos.val6.title':   { fr: 'Ancrage local', en: 'Local Roots' },
        'apropos.val6.desc':    { fr: 'Fièrement québécois, nous connaissons nos routes, nos saisons et nos clients.', en: 'Proudly Québécois, we know our roads, our seasons, and our clients.' },
        'apropos.team.label':   { fr: 'L\'équipe', en: 'The Team' },
        'apropos.team.h':       { fr: 'Les personnes derrière NexDrive', en: 'The People Behind NexDrive' },
        'apropos.tc1.name':     { fr: 'L\'équipe NexDrive', en: 'NexDrive Team' },
        'apropos.tc1.role':     { fr: 'Fondateur & Propriétaire', en: 'Founder & Owner' },
        'apropos.tc2.name':     { fr: 'Service client', en: 'Customer Service' },
        'apropos.tc2.role':     { fr: 'Relations & Réservations', en: 'Relations & Bookings' },
        'apropos.tc3.name':     { fr: 'Entretien & Inspection', en: 'Maintenance & Inspection' },
        'apropos.tc3.role':     { fr: 'Préparation des véhicules', en: 'Vehicle Preparation' },
        'apropos.cta.h':        { fr: 'Prêt à vivre l\'expérience NexDrive ?', en: 'Ready for the NexDrive Experience?' },
        'apropos.cta.p':        { fr: 'Réservez en quelques minutes sur Turo. Assurance incluse, véhicule impeccable, service 5 étoiles garanti.', en: 'Book in minutes on Turo. Insurance included, spotless vehicle, 5-star service guaranteed.' },
 
        // ── FAQ ──────────────────────────────────────────────────
        'faq.ph.label':       { fr: 'Centre d\'aide', en: 'Help Center' },
        'faq.ph.h1':          { fr: 'Questions fréquentes', en: 'Frequently Asked Questions' },
        'faq.ph.sub':         { fr: 'Tout ce que vous devez savoir sur la location NexDrive, la réservation Turo et nos services.', en: 'Everything you need to know about NexDrive rentals, Turo bookings, and our services.' },
        'faq.contact.title':  { fr: 'Vous n\'avez pas trouvé votre réponse ?', en: 'Didn\'t find your answer?' },
        'faq.contact.sub':    { fr: 'Notre équipe répond rapidement — NexDrive, Québec · Généralement sous 24h', en: 'Our team responds quickly — NexDrive, Québec · Usually within 24h' },
        'faq.contact.btn':    { fr: 'Nous écrire', en: 'Write to Us' },
        'faq.cta.label':      { fr: 'Prêt à commencer', en: 'Ready to Start' },
        'faq.cta.h':          { fr: 'Réservez maintenant', en: 'Book Now' },
        'faq.cta.p':          { fr: 'Accédez à la meilleure flotte de véhicules premium au Québec. Réservation simple, assurance incluse.', en: 'Access the best premium vehicle fleet in Québec. Simple booking, insurance included.' },
 
        // ── PARTENAIRES ──────────────────────────────────────────
        'partenaires.ph.label':   { fr: 'Écosystème NexDrive', en: 'NexDrive Ecosystem' },
        'partenaires.ph.h1':      { fr: 'Nos partenaires', en: 'Our Partners' },
        'partenaires.ph.sub':     { fr: 'NexDrive s\'appuie sur des partenaires de confiance.', en: 'NexDrive relies on trusted partners.' },
        'partenaires.invest.h':   { fr: 'Vous souhaitez collaborer avec NexDrive ?', en: 'Want to Collaborate with NexDrive?' },
        'partenaires.invest.btn': { fr: '📧 Nous contacter', en: '📧 Contact Us' },
 
        // ── CONFIDENTIALITÉ ──────────────────────────────────────
        'confid.ph.label':      { fr: 'Légal', en: 'Legal' },
        'confid.ph.h1':         { fr: 'Politique de confidentialité', en: 'Privacy Policy' },
        'confid.ph.sub':        { fr: 'Vos données personnelles sont protégées — transparence totale, conformité Loi 25 Québec.', en: 'Your personal data is protected — full transparency, Québec Law 25 compliant.' },
        'confid.ph.meta':       { fr: '📅 Dernière mise à jour : Mars 2026 · NexDrive, Québec, Canada', en: '📅 Last updated: March 2026 · NexDrive, Québec, Canada' },
        'confid.contact.title': { fr: 'Une question sur vos données ?', en: 'A Question About Your Data?' },
        'confid.contact.sub':   { fr: 'NexDrive — Protection des données · Québec, Canada · Réponse sous 30 jours', en: 'NexDrive — Data Protection · Québec, Canada · Response within 30 days' },
        'confid.cta.h':         { fr: 'Réservez maintenant', en: 'Book Now' },
        'confid.cta.p':         { fr: 'Accédez à la meilleure flotte de véhicules premium au Québec.', en: 'Access the best premium vehicle fleet in Québec.' },
 
        // ── ENGAGEMENT ───────────────────────────────────────────
        'engagement.ey':         { fr: 'Notre philosophie', en: 'Our Philosophy' },
        'engagement.title1':     { fr: 'L\'engagement', en: 'The NexDrive' },
        'engagement.title2':     { fr: 'NexDrive', en: 'Promise' },
        'engagement.sub':        { fr: 'Louer un véhicule, c\'est une question de confiance.', en: 'Renting a vehicle is a matter of trust.' },
        'engagement.man.p':      { fr: 'NexDrive n\'est pas une simple plateforme de location.', en: 'NexDrive is not just a rental platform.' },
        'engagement.prom.label': { fr: 'Nos promesses', en: 'Our Promises' },
        'engagement.prom.h':     { fr: 'Ce que vous pouvez attendre', en: 'What You Can Expect' },
        'engagement.sig.h':      { fr: 'Chaque location est une promesse tenue', en: 'Every rental is a promise kept' },
        'engagement.sig.role':   { fr: 'Drummondville, Québec · 2026', en: 'Drummondville, Québec · 2026' },
 
        // ── INDEX ────────────────────────────────────────────────
        'hero.eyebrow':  { fr: 'Location de véhicules premium — Québec, Canada', en: 'Premium vehicle rentals — Québec, Canada' },
        'hero.title1':   { fr: 'L\'excellence', en: 'Excellence' },
        'hero.title2':   { fr: 'automobile.', en: 'on the road.' },
        'hero.subtitle': { fr: 'Une flotte de véhicules haut de gamme, une réservation en quelques clics, un contrat envoyé automatiquement.', en: 'A fleet of premium vehicles, booking in a few clicks, contract sent automatically.' },
        'hero.btn.fleet':   { fr: 'Voir la flotte', en: 'View Fleet' },
        'hero.btn.account': { fr: 'Mon compte →', en: 'My Account →' },
        'stat1.label': { fr: 'Véhicules premium', en: 'Premium Vehicles' },
        'stat2.label': { fr: 'Contrat automatique', en: 'Automatic Contract' },
        'stat3.label': { fr: 'Disponible', en: 'Available' },
        'stat4.label': { fr: 'Tout le Québec', en: 'All of Québec' },
        'process.label': { fr: 'Processus / Process', en: 'Process / Processus' },
        'process.title': { fr: 'Comment ça <em>fonctionne</em>', en: 'How it <em>works</em>' },
        'step1.title': { fr: 'Choisissez votre véhicule', en: 'Choose your vehicle' },
        'step1.desc':  { fr: 'Parcourez notre flotte et sélectionnez le véhicule qui correspond à vos besoins et votre budget.', en: 'Browse our fleet and select the vehicle that fits your needs and budget.' },
        'step2.title': { fr: 'Réservez en ligne', en: 'Book online' },
        'step2.desc':  { fr: 'Remplissez le formulaire, choisissez vos dates et votre point de rendez-vous le plus proche de chez vous.', en: 'Fill out the form, choose your dates and the pickup point closest to you.' },
        'step3.title': { fr: 'Recevez votre contrat', en: 'Receive your contract' },
        'step3.desc':  { fr: 'Un contrat complet est généré automatiquement et envoyé à votre adresse email en quelques secondes.', en: 'A complete contract is automatically generated and sent to your email in seconds.' },
        'reviews.label':  { fr: 'Témoignages', en: 'Testimonials' },
        'reviews.title':  { fr: 'Ce que disent <em>nos clients</em>', en: 'What our <em>clients say</em>' },
        'reviews.score':  { fr: '5.0', en: '5.0' },
        'reviews.source': { fr: 'Avis vérifiés via Turo', en: 'Verified reviews via Turo' },
        'cta.label':     { fr: 'Prêt à commencer', en: 'Ready to start' },
        'cta.title':     { fr: 'Réservez', en: 'Book' },
        'cta.title.em':  { fr: 'maintenant', en: 'now' },
        'cta.desc':      { fr: 'Accédez à la meilleure flotte de véhicules premium au Québec. Réservation en ligne, contrat automatique.', en: 'Access the best premium vehicle fleet in Québec. Online booking, automatic contract.' },
        'cta.btn.fleet':   { fr: 'Voir la flotte', en: 'View Fleet' },
        'cta.btn.account': { fr: 'Mon compte →', en: 'My Account →' },
        'cta.btn.home':    { fr: 'Retour à l\'accueil →', en: 'Back to Home →' },
 
        // ── AVIS CLIENTS ─────────────────────────────────────────
        'rv1.txt': { fr: 'Véhicule impeccable, remise ponctuelle et proprio super sympa. Je recommande sans hésiter !', en: 'Impeccable vehicle, on-time handoff and super friendly owner. Highly recommend!' },
        'rv2.txt': { fr: 'Communication rapide et professionnelle. Voiture en parfait état. Je reviendrai assurément.', en: 'Fast and professional communication. Car in perfect condition. Will definitely be back.' },
        'rv3.txt': { fr: 'Parfait pour notre voyage en famille. Propre, spacieux, aucun problème.', en: 'Perfect for our family trip. Clean, spacious, no issues.' },
        'rv4.txt': { fr: 'Expérience au-delà de mes attentes. Le véhicule était comme neuf.', en: 'Experience beyond my expectations. The vehicle was like new.' },
        'rv5.txt': { fr: 'Super proprio, très réactif aux messages. La voiture était propre et bien équipée. Merci NexDrive !', en: 'Great host, very responsive. The car was clean and well-equipped. Thanks NexDrive!' },
        'rv6.txt': { fr: 'Deuxième fois que je loue chez NexDrive. Toujours aussi professionnel.', en: 'Second time renting from NexDrive. Always professional.' },
        'rv7.txt': { fr: 'Livraison à l\'aéroport impeccable. Tout s\'est passé exactement comme prévu. 5 étoiles mérités !', en: 'Airport delivery was flawless. Everything went exactly as planned. 5 stars well earned!' },
        'rv8.txt': { fr: 'Très bonne expérience du début à la fin. Le proprio est disponible et de bonne humeur. Voiture top !', en: 'Very good experience from start to finish. The host is available and cheerful. Great car!' },
        'rv.verified': { fr: '✓ Avis vérifié via Turo', en: '✓ Verified review via Turo' },
    };
 
    // ════════════════════════════════════════════════════════
    // ENGINE
    // ════════════════════════════════════════════════════════
 
    var lang = getCookie('nd_lang') || 'fr';
 
    function t(key) { return (T[key] && T[key][lang]) || null; }
 
    function applyAll() {
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            var val = t(key);
            if (val !== null) {
                if (val.indexOf('<') !== -1) { el.innerHTML = val; } else { el.textContent = val; }
            }
        });
        document.documentElement.lang = lang === 'en' ? 'en' : 'fr';
    }
 
    function injectToggle() {
        if (document.getElementById('nd-lang-wrap')) return;
        var nav = document.querySelector('nav');
        if (!nav) return;
 
        var wrap = document.createElement('div');
        wrap.id = 'nd-lang-wrap';
        wrap.style.cssText = 'display:flex;align-items:center;gap:4px;margin-right:10px;flex-shrink:0;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:3px;';
 
        function makeBtn(code) {
            var b = document.createElement('button');
            b.id = 'nd-btn-' + code;
            b.textContent = code.toUpperCase();
            b.style.cssText = 'background:transparent;border:none;color:rgba(255,255,255,0.45);font-family:inherit;font-size:.7rem;font-weight:600;letter-spacing:1.5px;padding:5px 12px;border-radius:7px;cursor:pointer;transition:all .22s;flex-shrink:0;';
            b.addEventListener('mouseenter', function() { if (lang !== code) this.style.color = 'rgba(255,255,255,0.8)'; });
            b.addEventListener('mouseleave', function() { if (lang !== code) this.style.color = 'rgba(255,255,255,0.45)'; });
            b.addEventListener('click', function() {
                if (lang !== code) {
                    lang = code;
                    setCookie('nd_lang', lang, 365);
                    applyAll();
                    updateBtns();
                }
            });
            return b;
        }
 
        wrap.appendChild(makeBtn('fr'));
        wrap.appendChild(makeBtn('en'));
 
        var hbg = nav.querySelector('.hbg');
        if (hbg) hbg.parentNode.insertBefore(wrap, hbg);
        else nav.appendChild(wrap);
 
        updateBtns();
    }
 
    function updateBtns() {
        ['fr', 'en'].forEach(function(code) {
            var b = document.getElementById('nd-btn-' + code);
            if (!b) return;
            if (lang === code) {
                b.style.background = 'rgba(34,197,94,0.18)';
                b.style.color = '#4ade80';
                b.style.boxShadow = '0 0 10px rgba(34,197,94,0.2)';
            } else {
                b.style.background = 'transparent';
                b.style.color = 'rgba(255,255,255,0.45)';
                b.style.boxShadow = 'none';
            }
        });
    }
 
    function toggleLang() {
        lang = (lang === 'fr') ? 'en' : 'fr';
        setCookie('nd_lang', lang, 365);
        applyAll();
        updateBtns();
    }
 
    function init() {
        injectToggle();
        applyAll();
    }
 
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
 
    window.NexDriveLang = {
        t: t,
        toggle: toggleLang,
        get: function() { return lang; },
        set: function(l) { lang = l; setCookie('nd_lang', l, 365); applyAll(); updateBtns(); }
    };
 
})();
