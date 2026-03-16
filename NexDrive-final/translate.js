/**
 * NexDrive — translate.js v2
 * ─────────────────────────────────────────────────────────
 * UNE SEULE PAGE — pas besoin de pages séparées en anglais !
 *
 * COMMENT ÇA MARCHE :
 *   1. L'utilisateur choisit FR ou EN sur landing.html
 *      → sauvé dans localStorage('nd_lang')
 *   2. Chaque page inclut <script src="translate.js"></script>
 *   3. Ce script lit la langue et traduit automatiquement
 *      tous les éléments qui ont data-i18n="clé"
 *   4. Un bouton FR/EN est injecté dans la nav automatiquement
 *
 * COMMENT AJOUTER UNE TRADUCTION SUR UNE PAGE :
 *   <h1 data-i18n="apropos.hero.title1">Notre</h1>
 *   → devient "Our" en anglais automatiquement
 * ─────────────────────────────────────────────────────────
 */

(function() {

    var T = {

        // ── NAV PANEL ────────────────────────────────────────────
        'nav.section.navigation': { fr: 'Navigation', en: 'Navigation' },
        'nav.section.espace': { fr: 'Mon espace', en: 'My Account' },
        'nav.section.legal': { fr: 'Légal', en: 'Legal' },
        'nav.accueil': { fr: 'Accueil', en: 'Home' },
        'nav.flotte': { fr: 'Notre flotte', en: 'Our Fleet' },
        'nav.apropos': { fr: 'À propos', en: 'About Us' },
        'nav.partenaires': { fr: 'Partenaires', en: 'Partners' },
        'nav.faq': { fr: 'FAQ', en: 'FAQ' },
        'nav.engagement': { fr: 'Engagement', en: 'Our Promise' },
        'nav.compte': { fr: 'Mon compte', en: 'My Account' },
        'nav.confidentialite': { fr: 'Confidentialité', en: 'Privacy Policy' },
        'nav.copyright': { fr: 'NexDrive — Québec © 2026', en: 'NexDrive — Québec © 2026' },

        // ── FOOTER ──────────────────────────────────────────────
        'footer.desc': { fr: 'Location de véhicules premium au Québec, Canada. Réservation en ligne, contrat automatique.', en: 'Premium vehicle rentals in Québec, Canada. Book online, automatic contract.' },
        'footer.h.nav': { fr: 'Navigation', en: 'Navigation' },
        'footer.h.espace': { fr: 'Mon espace', en: 'My Account' },
        'footer.h.legal': { fr: 'Légal', en: 'Legal' },
        'footer.accueil': { fr: 'Accueil', en: 'Home' },
        'footer.flotte': { fr: 'Flotte', en: 'Fleet' },
        'footer.apropos': { fr: 'À propos', en: 'About' },
        'footer.faq': { fr: 'FAQ', en: 'FAQ' },
        'footer.engagement': { fr: 'Engagement', en: 'Our Promise' },
        'footer.compte': { fr: 'Mon compte', en: 'My Account' },
        'footer.connexion': { fr: 'Connexion', en: 'Sign In' },
        'footer.confidentialite': { fr: 'Confidentialité', en: 'Privacy Policy' },
        'footer.copyright': { fr: '© 2026 NexDrive — Québec, Canada. Tous droits réservés.', en: '© 2026 NexDrive — Québec, Canada. All rights reserved.' },

        // ── BOUTONS COMMUNS ──────────────────────────────────────
        'btn.reserver.turo': { fr: 'Réserver sur Turo', en: 'Book on Turo' },
        'btn.voir.flotte': { fr: 'Voir nos véhicules', en: 'View Our Fleet' },
        'btn.voir.flotte2': { fr: 'Voir la flotte', en: 'View Fleet' },
        'btn.retour': { fr: 'Retour à l\'accueil →', en: 'Back to Home →' },
        'btn.contact': { fr: 'Nous contacter', en: 'Contact Us' },
        'btn.reserver': { fr: 'Réserver', en: 'Book Now' },

        // ── VÉHICULES ────────────────────────────────────────────
        'vehicules.ph.label': { fr: 'Notre Flotte', en: 'Our Fleet' },
        'vehicules.ph.h1': { fr: 'Véhicules premium', en: 'Premium Vehicles' },
        'vehicules.ph.sub': { fr: 'Tous les véhicules disponibles au Québec', en: 'All vehicles available in Québec' },
        'vehicules.filter.dispo': { fr: 'Disponible maintenant', en: 'Available Now' },
        'vehicules.filter.tous': { fr: 'Tous', en: 'All' },
        'vehicules.filter.berline': { fr: 'Berline', en: 'Sedan' },
        'vehicules.filter.vus': { fr: 'VUS', en: 'SUV' },
        'vehicules.filter.sport': { fr: 'Sport', en: 'Sport' },
        'vehicules.filter.elec': { fr: 'Électrique', en: 'Electric' },
        'vehicules.badge.dispo': { fr: 'Disponible', en: 'Available' },
        'vehicules.badge.loue': { fr: 'Loué', en: 'Rented' },
        'vehicules.coming': { fr: 'Bientôt disponible', en: 'Coming Soon' },
        'vehicules.cta.label': { fr: 'Prêt à commencer', en: 'Ready to Start' },
        'vehicules.cta.h': { fr: 'Réservez maintenant', en: 'Book Now' },
        'vehicules.cta.p': { fr: 'Accédez à la meilleure flotte de véhicules premium au Québec.', en: 'Access the best premium vehicle fleet in Québec.' },

        // ── À PROPOS ─────────────────────────────────────────────
        'apropos.badge.txt': { fr: 'Fondée au Québec · 100% Turo', en: 'Founded in Québec · 100% Turo' },
        'apropos.hero.title1': { fr: 'Notre', en: 'Our' },
        'apropos.hero.title2': { fr: 'histoire', en: 'story' },
        'apropos.hero.desc': { fr: 'NexDrive est né d\'une conviction simple : la location de voiture devrait être une expérience agréable, transparente et mémorable. Nous mettons nos véhicules à votre service avec passion.', en: 'NexDrive was born from a simple belief: renting a car should be a pleasant, transparent, and memorable experience. We put our vehicles at your service with passion.' },
        'apropos.hero.btn.ghost': { fr: 'Nos valeurs →', en: 'Our values →' },
        'apropos.hc1.label': { fr: 'Note Turo', en: 'Turo Rating' },
        'apropos.hc1.sub': { fr: 'Évaluation parfaite', en: 'Perfect Score' },
        'apropos.hc2.label': { fr: 'Clients satisfaits', en: 'Happy Clients' },
        'apropos.hc2.sub': { fr: 'Au Québec', en: 'In Québec' },
        'apropos.story.label': { fr: 'Notre histoire', en: 'Our Story' },
        'apropos.story.h1': { fr: 'Une passion pour', en: 'A passion for' },
        'apropos.story.h2': { fr: 'l\'excellence', en: 'excellence' },
        'apropos.story.p1': { fr: 'NexDrive est une entreprise québécoise de location de véhicules via la plateforme Turo. Fondée avec la conviction que louer une voiture peut et devrait être une expérience agréable et sans stress, nous nous sommes donné pour mission de changer la façon dont les gens perçoivent la location entre particuliers.', en: 'NexDrive is a Québec-based vehicle rental company operating through the Turo platform. Founded on the belief that renting a car can and should be a pleasant, stress-free experience, our mission is to change how people perceive peer-to-peer vehicle rentals.' },
        'apropos.story.p2': { fr: 'Chaque véhicule de notre flotte est entretenu avec soin, nettoyé en profondeur avant chaque location, et assuré à 100% via Turo. Nous croyons en la transparence totale — pas de frais cachés, pas de surprises.', en: 'Every vehicle in our fleet is carefully maintained, deep-cleaned before each rental, and 100% insured through Turo. We believe in complete transparency — no hidden fees, no surprises.' },
        'apropos.story.p3': { fr: 'Basés au Québec, nous servons des clients à travers toute la province avec un service rapide, humain et professionnel. Votre satisfaction n\'est pas une option, c\'est notre priorité.', en: 'Based in Québec, we serve clients throughout the province with fast, personal, and professional service. Your satisfaction is not optional — it\'s our priority.' },
        'apropos.story.badge.lbl': { fr: 'Véhicules premium', en: 'Premium Vehicles' },
        'apropos.stat1.lbl': { fr: 'Note Turo', en: 'Turo Rating' },
        'apropos.stat2.lbl': { fr: 'Clients satisfaits', en: 'Happy Clients' },
        'apropos.stat3.lbl': { fr: 'Véhicules disponibles', en: 'Vehicles Available' },
        'apropos.stat4.lbl': { fr: 'Frais cachés', en: 'Hidden Fees' },
        'apropos.values.label': { fr: 'Ce qui nous guide', en: 'What Guides Us' },
        'apropos.values.h': { fr: 'Nos valeurs', en: 'Our Values' },
        'apropos.val1.title': { fr: 'Transparence totale', en: 'Full Transparency' },
        'apropos.val1.desc': { fr: 'Aucun frais caché, aucune mauvaise surprise. Le prix affiché est le prix final.', en: 'No hidden fees, no unpleasant surprises. The displayed price is the final price.' },
        'apropos.val2.title': { fr: 'Sécurité & assurance', en: 'Safety & Insurance' },
        'apropos.val2.desc': { fr: 'Chaque location est couverte à 100% par l\'assurance Turo. Nos véhicules sont inspectés minutieusement avant chaque remise de clés.', en: 'Every rental is 100% covered by Turo insurance. Our vehicles are meticulously inspected before each key handoff.' },
        'apropos.val3.title': { fr: 'Service rapide', en: 'Fast Service' },
        'apropos.val3.desc': { fr: 'Nous répondons rapidement à toutes vos questions. Notre processus de réservation est simple, fluide et adapté à votre rythme de vie.', en: 'We respond quickly to all your questions. Our booking process is simple, smooth, and adapted to your lifestyle.' },
        'apropos.val4.title': { fr: 'Excellence constante', en: 'Consistent Excellence' },
        'apropos.val4.desc': { fr: 'Nos véhicules sont nettoyés en profondeur avant chaque location. Chaque client mérite un véhicule impeccable, sans compromis.', en: 'Our vehicles are deep-cleaned before every rental. Every client deserves an impeccable vehicle, no compromise.' },
        'apropos.val5.title': { fr: 'Relation humaine', en: 'Human Connection' },
        'apropos.val5.desc': { fr: 'Vous n\'êtes pas un numéro de dossier. Chez NexDrive, chaque client est traité avec respect, attention et bienveillance.', en: 'You are not a file number. At NexDrive, every client is treated with respect, care, and kindness.' },
        'apropos.val6.title': { fr: 'Ancrage local', en: 'Local Roots' },
        'apropos.val6.desc': { fr: 'Fièrement québécois, nous connaissons nos routes, nos saisons et nos clients. Nous sommes là pour vous, partout dans la province.', en: 'Proudly Québécois, we know our roads, our seasons, and our clients. We are here for you, throughout the province.' },
        'apropos.tl.label': { fr: 'Notre parcours', en: 'Our Journey' },
        'apropos.tl.h': { fr: 'Comment nous sommes nés', en: 'How We Started' },
        'apropos.tl1.title': { fr: 'L\'idée germe', en: 'The Idea Takes Root' },
        'apropos.tl1.desc': { fr: 'Insatisfaits des expériences de location traditionnelles, les fondateurs imaginent un service différent — centré sur l\'humain et la qualité.', en: 'Unsatisfied with traditional rental experiences, the founders envisioned a different service — centered on people and quality.' },
        'apropos.tl2.title': { fr: 'Lancement sur Turo', en: 'Launch on Turo' },
        'apropos.tl2.desc': { fr: 'NexDrive rejoint la plateforme Turo avec un premier véhicule. Les premières avis 5 étoiles arrivent rapidement, validant notre approche.', en: 'NexDrive joins Turo with its first vehicle. The first 5-star reviews arrive quickly, validating our approach.' },
        'apropos.tl3.title': { fr: 'Croissance de la flotte', en: 'Fleet Growth' },
        'apropos.tl3.desc': { fr: 'Face à la demande croissante, nous agrandissons notre flotte à 3 véhicules et affinons nos processus d\'inspection et d\'entretien.', en: 'Facing growing demand, we expand our fleet to 3 vehicles and refine our inspection and maintenance processes.' },
        'apropos.tl4.title': { fr: '100+ clients satisfaits', en: '100+ Happy Clients' },
        'apropos.tl4.desc': { fr: 'Nous célébrons notre 100ème location avec une note parfaite de 5.0 sur Turo. La communauté NexDrive continue de grandir.', en: 'We celebrate our 100th rental with a perfect 5.0 on Turo. The NexDrive community keeps growing.' },
        'apropos.team.label': { fr: 'L\'équipe', en: 'The Team' },
        'apropos.team.h': { fr: 'Les personnes derrière NexDrive', en: 'The People Behind NexDrive' },
        'apropos.tc1.name': { fr: 'L\'équipe NexDrive', en: 'NexDrive Team' },
        'apropos.tc1.role': { fr: 'Fondateur & Propriétaire', en: 'Founder & Owner' },
        'apropos.tc1.desc': { fr: 'Passionné d\'automobile, il a fondé NexDrive avec la vision d\'un service de location qui respecte vraiment ses clients.', en: 'A car enthusiast, he founded NexDrive with the vision of a rental service that truly respects its clients.' },
        'apropos.tc2.name': { fr: 'Service client', en: 'Customer Service' },
        'apropos.tc2.role': { fr: 'Relations & Réservations', en: 'Relations & Bookings' },
        'apropos.tc2.desc': { fr: 'Toujours disponible pour répondre à vos questions et coordonner les remises de clés.', en: 'Always available to answer your questions and coordinate key handoffs.' },
        'apropos.tc3.name': { fr: 'Entretien & Inspection', en: 'Maintenance & Inspection' },
        'apropos.tc3.role': { fr: 'Préparation des véhicules', en: 'Vehicle Preparation' },
        'apropos.tc3.desc': { fr: 'Garant de l\'impeccabilité de notre flotte, il s\'assure que chaque véhicule soit parfait avant de vous être remis.', en: 'Guardian of our fleet\'s quality, he ensures every vehicle is perfect before being handed over.' },
        'apropos.cta.h': { fr: 'Prêt à vivre l\'expérience NexDrive ?', en: 'Ready for the NexDrive Experience?' },
        'apropos.cta.p': { fr: 'Réservez en quelques minutes sur Turo. Assurance incluse, véhicule impeccable, service 5 étoiles garanti.', en: 'Book in minutes on Turo. Insurance included, spotless vehicle, 5-star service guaranteed.' },

        // ── FAQ ──────────────────────────────────────────────────
        'faq.ph.label': { fr: 'Centre d\'aide', en: 'Help Center' },
        'faq.ph.h1': { fr: 'Questions fréquentes', en: 'Frequently Asked Questions' },
        'faq.ph.sub': { fr: 'Tout ce que vous devez savoir sur la location NexDrive, la réservation Turo et nos services.', en: 'Everything you need to know about NexDrive rentals, Turo bookings, and our services.' },
        'faq.tab.tous': { fr: 'Toutes les questions', en: 'All Questions' },
        'faq.tab.reservation': { fr: '🗓 Réservation', en: '🗓 Booking' },
        'faq.tab.assurance': { fr: '🛡️ Assurance', en: '🛡️ Insurance' },
        'faq.tab.location': { fr: '🚗 Pendant la location', en: '🚗 During Rental' },
        'faq.tab.paiement': { fr: '💳 Paiement', en: '💳 Payment' },
        'faq.tab.vehicules': { fr: '⚡ Véhicules', en: '⚡ Vehicles' },
        'faq.grp1.title': { fr: 'Réservation', en: 'Booking' },
        'faq.grp2.title': { fr: 'Assurance & Sécurité', en: 'Insurance & Safety' },
        'faq.grp3.title': { fr: 'Pendant la location', en: 'During the Rental' },
        'faq.grp4.title': { fr: 'Paiement', en: 'Payment' },
        'faq.grp5.title': { fr: 'Nos véhicules', en: 'Our Vehicles' },
        'faq.contact.title': { fr: 'Vous n\'avez pas trouvé votre réponse ?', en: 'Didn\'t find your answer?' },
        'faq.contact.sub': { fr: 'Notre équipe répond rapidement — NexDrive, Québec · Généralement sous 24h', en: 'Our team responds quickly — NexDrive, Québec · Usually within 24h' },
        'faq.contact.btn': { fr: 'Nous écrire', en: 'Write to Us' },
        'faq.cta.label': { fr: 'Prêt à commencer', en: 'Ready to Start' },
        'faq.cta.h': { fr: 'Réservez maintenant', en: 'Book Now' },
        'faq.cta.p': { fr: 'Accédez à la meilleure flotte de véhicules premium au Québec. Réservation simple, assurance incluse.', en: 'Access the best premium vehicle fleet in Québec. Simple booking, insurance included.' },

        // ── PARTENAIRES ──────────────────────────────────────────
        'partenaires.ph.label': { fr: 'Écosystème NexDrive', en: 'NexDrive Ecosystem' },
        'partenaires.ph.h1': { fr: 'Nos partenaires', en: 'Our Partners' },
        'partenaires.ph.sub': { fr: 'NexDrive s\'appuie sur des partenaires de confiance qui partagent notre engagement envers l\'excellence du service au Québec.', en: 'NexDrive relies on trusted partners who share our commitment to service excellence in Québec.' },
        'partenaires.grid.label': { fr: 'Nos partenaires', en: 'Our Partners' },
        'partenaires.grid.h': { fr: 'Des entreprises qui nous font confiance', en: 'Companies That Trust Us' },
        'partenaires.grid.p': { fr: 'De la réservation à l\'entretien, chaque partenaire renforce l\'expérience NexDrive pour nos clients.', en: 'From booking to maintenance, each partner strengthens the NexDrive experience for our clients.' },
        'partenaires.invest.ey': { fr: 'Rejoignez l\'écosystème', en: 'Join the Ecosystem' },
        'partenaires.invest.h': { fr: 'Vous souhaitez collaborer avec NexDrive ?', en: 'Want to Collaborate with NexDrive?' },
        'partenaires.invest.desc': { fr: 'Que vous soyez un hôtel, une résidence, une compagnie de transport ou toute entreprise complémentaire — parlons-nous.', en: 'Whether you\'re a hotel, residence, transport company, or any complementary business — let\'s talk.' },
        'partenaires.invest.btn': { fr: '📧 Nous contacter', en: '📧 Contact Us' },

        // ── CONFIDENTIALITÉ ──────────────────────────────────────
        'confid.ph.label': { fr: 'Légal', en: 'Legal' },
        'confid.ph.h1': { fr: 'Politique de confidentialité', en: 'Privacy Policy' },
        'confid.ph.sub': { fr: 'Vos données personnelles sont protégées — transparence totale, conformité Loi 25 Québec.', en: 'Your personal data is protected — full transparency, Québec Law 25 compliant.' },
        'confid.ph.meta': { fr: '📅 Dernière mise à jour : Mars 2026 · NexDrive, Québec, Canada', en: '📅 Last updated: March 2026 · NexDrive, Québec, Canada' },
        'confid.contact.title': { fr: 'Une question sur vos données ?', en: 'A Question About Your Data?' },
        'confid.contact.sub': { fr: 'NexDrive — Protection des données · Québec, Canada · Réponse sous 30 jours', en: 'NexDrive — Data Protection · Québec, Canada · Response within 30 days' },
        'confid.cta.h': { fr: 'Réservez maintenant', en: 'Book Now' },
        'confid.cta.p': { fr: 'Accédez à la meilleure flotte de véhicules premium au Québec.', en: 'Access the best premium vehicle fleet in Québec.' },

        // ── ENGAGEMENT ───────────────────────────────────────────
        'engagement.ey': { fr: 'Notre philosophie', en: 'Our Philosophy' },
        'engagement.title1': { fr: 'L\'engagement', en: 'The NexDrive' },
        'engagement.title2': { fr: 'NexDrive', en: 'Promise' },
        'engagement.sub': { fr: 'Louer un véhicule, c\'est une question de confiance. Chaque détail reflète ce que nous sommes. Voici nos engagements envers vous.', en: 'Renting a vehicle is a matter of trust. Every detail reflects who we are. Here are our commitments to you.' },
        'engagement.scroll': { fr: 'Défiler pour découvrir', en: 'Scroll to discover' },
        'engagement.man.label': { fr: 'Notre manifeste', en: 'Our Manifesto' },
        'engagement.man.h': { fr: 'Ce qui nous définit', en: 'What Defines Us' },
        'engagement.man.p': { fr: 'NexDrive n\'est pas une simple plateforme de location. C\'est une promesse renouvelée à chaque réservation.', en: 'NexDrive is not just a rental platform. It is a promise renewed with every booking.' },
        'engagement.ch.label': { fr: 'En chiffres', en: 'By the Numbers' },
        'engagement.ch.h': { fr: 'Des engagements mesurables', en: 'Measurable Commitments' },
        'engagement.stat1.lbl': { fr: 'Note moyenne sur Turo', en: 'Average Turo Rating' },
        'engagement.stat2.lbl': { fr: 'Clients satisfaits', en: 'Happy Clients' },
        'engagement.stat3.lbl': { fr: 'Temps de réponse moyen', en: 'Average Response Time' },
        'engagement.stat4.lbl': { fr: 'Réservations via Turo', en: 'Bookings via Turo' },
        'engagement.prom.label': { fr: 'Nos promesses', en: 'Our Promises' },
        'engagement.prom.h': { fr: 'Ce que vous pouvez attendre', en: 'What You Can Expect' },
        'engagement.prom.p': { fr: 'Six engagements concrets que nous prenons envers chaque locataire, à chaque réservation.', en: 'Six concrete commitments we make to every renter, every booking.' },
        'engagement.sig.ey': { fr: 'Notre parole', en: 'Our Word' },
        'engagement.sig.h': { fr: 'Chaque location est une promesse tenue', en: 'Every rental is a promise kept' },
        'engagement.sig.p': { fr: 'Ces engagements ne sont pas des slogans. Ce sont les standards que nous nous fixons à chaque réservation.', en: 'These commitments are not slogans. They are the standards we hold ourselves to with every booking.' },
        'engagement.sig.role': { fr: 'Drummondville, Québec · 2026', en: 'Drummondville, Québec · 2026' },

        // ── TOGGLE ───────────────────────────────────────────────
        'lang.toggle': { fr: 'EN', en: 'FR' },
    };

    // ════════════════════════════════════════════════════════
    // ENGINE — ne pas modifier sous cette ligne
    // ════════════════════════════════════════════════════════

    var lang = localStorage.getItem('nd_lang') || 'fr';

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
        if (document.getElementById('nd-lang-btn')) return;
        var nav = document.querySelector('nav');
        if (!nav) return;
        var btn = document.createElement('button');
        btn.id = 'nd-lang-btn';
        btn.textContent = lang === 'fr' ? 'EN' : 'FR';
        btn.title = lang === 'fr' ? 'Switch to English' : 'Passer en français';
        btn.style.cssText = 'background:transparent;border:1px solid rgba(255,255,255,0.18);color:rgba(255,255,255,0.6);font-family:inherit;font-size:.72rem;font-weight:500;letter-spacing:1.5px;padding:6px 14px;border-radius:8px;cursor:pointer;transition:all .25s;flex-shrink:0;margin-right:10px;z-index:200;';
        btn.addEventListener('mouseenter', function() { this.style.borderColor = 'rgba(91,159,255,0.5)';
            this.style.color = '#fff';
            this.style.background = 'rgba(41,121,255,0.12)'; });
        btn.addEventListener('mouseleave', function() { this.style.borderColor = 'rgba(255,255,255,0.18)';
            this.style.color = 'rgba(255,255,255,0.6)';
            this.style.background = 'transparent'; });
        btn.addEventListener('click', toggleLang);
        var hbg = nav.querySelector('.hbg');
        if (hbg) nav.insertBefore(btn, hbg);
        else nav.appendChild(btn);
    }

    function toggleLang() {
        lang = (lang === 'fr') ? 'en' : 'fr';
        localStorage.setItem('nd_lang', lang);
        applyAll();
        var btn = document.getElementById('nd-lang-btn');
        if (btn) { btn.textContent = lang === 'fr' ? 'EN' : 'FR';
            btn.title = lang === 'fr' ? 'Switch to English' : 'Passer en français'; }
    }

    function init() { injectToggle();
        applyAll(); }
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
    window.NexDriveLang = { t: t, toggle: toggleLang, get: function() { return lang; } };

})();
