document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GESTIONE LINGUA & TRADUZIONI ---
    const translations = {
        it: {
            nav_manifesto: "manifesto",
            nav_archivio: "archivio",
            nav_diagnosi: "diagnosi",
            nav_sfoglia: "sfoglia",
            home_status: "[ STATO: ATTIVO ]",
            home_vol: "( inerzia ) — vol. 01",
            manifesto_title: "ANATOMIA DEL RESTO",
            manifesto_p1: "Non c’è gloria nel pezzo intero.",
            manifesto_p2: "La perfezione è un’illusione che non ha nulla da dire.",
            manifesto_p3: "Noi cerchiamo il momento in cui la forma si arrende,",
            manifesto_p4: "l’istante esatto in cui l’azione si fa detrito.",
            manifesto_p5: "SUTURA è l’occhio che guarda la cicatrice, non la ferita.",
            manifesto_p6: "È il segno del bicchiere sul legno,",
            manifesto_p7: "l’impronta del corpo nel letto sfatto,",
            manifesto_p8: "la ruggine che è il respiro lento del ferro.",
            manifesto_p9: "Nulla si crea. Tutto è già qui, stanco e meraviglioso.",
            manifesto_p10: "Nulla si distrugge. La materia cambia solo nome, diventando resto.",
            manifesto_p11: "Tutto lascia una traccia. Siamo figli di ciò che rimane quando la festa è finita,",
            manifesto_p12: "quando l’operaio se n’è andato,",
            manifesto_p13: "quando il respiro si è fermato.",
            manifesto_p14: "Non cerchiamo la luce che illumina, ma l’ombra che definisce.",
            manifesto_p15: "Non cerchiamo l’armonia, ma la sutura:",
            manifesto_p16: "quel filo che tiene insieme i lembi di un mondo che cade a pezzi ma non vuole sparire.",
            manifesto_repert: "[ REPERTO N. 000 — CHI SIAMO ]",
            manifesto_closing: "Siamo l’archivio clinico del banale nobilitato.<br>Siamo l’anatomia di ciò che resta.",
            archive_title: "II. archivio",
            archive_sub: "( blog )",
            archive_empty_sub: "( i reperti sono in fase di catalogazione )",
            diag_title: "III. diagnosi",
            diag_sub: "( submission + contatti )",
            diag_current: "TRIMESTRE IN CORSO",
            diag_vol_title: "( inerzia )",
            diag_code: "[ CODICE: VOL-01 ]",
            diag_text_block: "<p>La materia non dimentica il peso che ha sostenuto.</p><p>Esiste una memoria della forma che sopravvive alla scomparsa dell’oggetto.</p><p>Un’impronta nell’erba schiacciata,</p><p>il contorno di una polvere che ha risparmiato il vuoto,</p><p>la tensione di una superficie che ancora attende il ritorno del movimento.</p><br><p>È in questo scarto, tra ciò che è stato e ciò che non è più, che si apre la sutura.</p><p>Il volume 01 raccoglie queste evidenze dell'immobilità.</p><p>Frammenti di una realtà che oppone resistenza alla cancellazione.</p><br><p style='font-style: italic;'>L'anatomia del resto non è un processo che si compie da soli.</p>",
            diag_deadline: "DEADLINE: 21 MARZO 2026",
            diag_protocol: "PROTOCOLLO DI INVIO",
            diag_list_1: "— Inviare immagini in formato JPG",
            diag_list_2: "— Lato lungo 2500px (72dpi)",
            diag_list_3: "— Nominare i file: Cognome_Nome_01.jpg",
            diag_list_4: "— Se > 15MB usare WeTransfer",
            diag_list_5: "— Includere breve bio e statement del progetto",
            diag_list_6: "— Oggetto mail: SUBMISSION_INERZIA_NOMECOGNOME",
            diag_btn: "INVIA CAMPIONE",
            diag_contacts_title: "CONTATTI GENERALI",
            sfoglia_title: "IV. sfoglia",
            sfoglia_sub: "( magazine )",
            sfoglia_vol01_title: "VOL. 01",
            cookie_text: "Questo sito utilizza cookie tecnici per garantire l'esperienza di navigazione.",
            cookie_btn: "ACCETTA",
            js_loading: "CARICAMENTO...",
            js_error_pdf: "ERRORE CARICAMENTO PDF<br>Assicurati che assets/vol01.pdf esista.",
            msg_coming_soon: "ARRIVERÀ PRESTO"
        },
        en: {
            nav_manifesto: "manifesto",
            nav_archivio: "archive",
            nav_diagnosi: "diagnosis",
            nav_sfoglia: "browse",
            home_status: "[ STATUS: ACTIVE ]",
            home_vol: "( inertia ) — vol. 01",
            manifesto_title: "ANATOMY OF THE REMAINDER",
            manifesto_p1: "There is no glory in the whole piece.",
            manifesto_p2: "Perfection is an illusion with nothing to say.",
            manifesto_p3: "We seek the moment when form surrenders,",
            manifesto_p4: "the exact instant action becomes debris.",
            manifesto_p5: "SUTURA is the eye that looks at the scar, not the wound.",
            manifesto_p6: "It is the ring of the glass on the wood,",
            manifesto_p7: "the imprint of the body in the unmade bed,",
            manifesto_p8: "the rust that is the slow breath of iron.",
            manifesto_p9: "Nothing is created. Everything is already here, tired and wonderful.",
            manifesto_p10: "Nothing is destroyed. Matter only changes its name, becoming remainder.",
            manifesto_p11: "Everything leaves a trace. We are children of what remains when the party is over,",
            manifesto_p12: "when the worker has gone,",
            manifesto_p13: "when the breath has stopped.",
            manifesto_p14: "We do not seek the light that illuminates, but the shadow that defines.",
            manifesto_p15: "We do not seek harmony, but the suture:",
            manifesto_p16: "that thread that holds together the edges of a world falling apart but refusing to disappear.",
            manifesto_repert: "[ EXHIBIT N. 000 — WHO WE ARE ]",
            manifesto_closing: "We are the clinical archive of the ennobled banal.<br>We are the anatomy of what remains.",
            archive_title: "II. archive",
            archive_sub: "( blog )",
            archive_empty_sub: "( exhibits are being cataloged )",
            diag_title: "III. diagnosis",
            diag_sub: "( submission + contacts )",
            diag_current: "CURRENT QUARTER",
            diag_vol_title: "( inertia )",
            diag_code: "[ CODE: VOL-01 ]",
            diag_text_block: "<p>Matter does not forget the weight it has borne.</p><p>There is a memory of form that survives the disappearance of the object.</p><p>An imprint in crushed grass,</p><p>the outline of dust that has spared the void,</p><p>the tension of a surface still awaiting the return of movement.</p><br><p>It is in this gap, between what was and what is no longer, that the suture opens.</p><p>Volume 01 collects these evidences of immobility.</p><p>Fragments of a reality that resists erasure.</p><br><p style='font-style: italic;'>The anatomy of the remainder is not a process accomplished alone.</p>",
            diag_deadline: "DEADLINE: MARCH 21, 2026",
            diag_protocol: "SUBMISSION PROTOCOL",
            diag_list_1: "— Send images in JPG format",
            diag_list_2: "— Long side 2500px (72dpi)",
            diag_list_3: "— Name files: Surname_Name_01.jpg",
            diag_list_4: "— If > 15MB use WeTransfer",
            diag_list_5: "— Include short bio and project statement",
            diag_list_6: "— Email subject: SUBMISSION_INERTIA_SURNAME",
            diag_btn: "SUBMIT SAMPLE",
            diag_contacts_title: "GENERAL CONTACTS",
            sfoglia_title: "IV. browse",
            sfoglia_sub: "( magazine )",
            sfoglia_vol01_title: "VOL. 01",
            cookie_text: "This site uses technical cookies to ensure navigation experience.",
            cookie_btn: "ACCEPT",
            js_loading: "LOADING...",
            js_error_pdf: "ERROR LOADING PDF<br>Ensure assets/vol01.pdf exists.",
            msg_coming_soon: "COMING SOON"
        }
    };

    // Inietta Selettore Lingua
    const langSwitchHTML = `
        <div class="lang-switch">
            <span class="lang-btn" data-lang-set="it">IT</span> / 
            <span class="lang-btn" data-lang-set="en">EN</span>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', langSwitchHTML);

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang-set') === lang);
        });

        localStorage.setItem('sutura_lang', lang);
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang-set')));
    });

    const savedLang = localStorage.getItem('sutura_lang') || 'it';
    setLanguage(savedLang);

    // --- 2. COOKIE BANNER ---
    if (!localStorage.getItem('sutura_cookie_accepted')) {
        const cookieHTML = `
            <div id="cookie-banner">
                <span data-i18n="cookie_text">${translations[savedLang].cookie_text}</span>
                <button id="accept-cookies" data-i18n="cookie_btn">${translations[savedLang].cookie_btn}</button>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', cookieHTML);
        
        setTimeout(() => {
            const banner = document.getElementById('cookie-banner');
            if(banner) banner.classList.add('visible');
        }, 1000);

        document.addEventListener('click', (e) => {
            if(e.target && e.target.id === 'accept-cookies'){
                localStorage.setItem('sutura_cookie_accepted', 'true');
                document.getElementById('cookie-banner').classList.remove('visible');
            }
        });
    }

    const cursor = document.getElementById('custom-cursor');
    const manifestoText = document.querySelector('.manifesto-text');

    // Movimento Cursore Centrato
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        // Aggiorna variabili CSS per effetti globali (Spotlight Manifesto)
        document.documentElement.style.setProperty('--cursor-x', x + 'px');
        document.documentElement.style.setProperty('--cursor-y', y + 'px');

        // Usa translate per centrare la croce e renderla fluida
        cursor.style.transform = `translate(${x - 10}px, ${y - 10}px)`;

        // GESTIONE LUCE MANIFESTO (Coordinate relative all'elemento per allineamento perfetto)
        if (manifestoText) {
            const rect = manifestoText.getBoundingClientRect();
            const localX = x - rect.left;
            const localY = y - rect.top;
            manifestoText.style.setProperty('--light-x', localX + 'px');
            manifestoText.style.setProperty('--light-y', localY + 'px');
        }
    });

    // Punti di sutura al click
    document.addEventListener('mousedown', (e) => {
        const stitch = document.createElement('div');
        stitch.className = 'stitch';
        stitch.style.left = e.pageX + 'px';
        stitch.style.top = e.pageY + 'px';
        document.body.appendChild(stitch);
    });

    // --- 3. GESTIONE MAGAZINE VIEWER (PDF FLIPBOOK) ---
    const issues = document.querySelectorAll('.issue-card');
    const viewer = document.getElementById('magazine-viewer');
    const bookContainer = document.getElementById('book-container');
    
    if (issues.length > 0 && viewer && bookContainer && window.pdfjsLib) {
        // Configura Worker PDF.js
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

        issues.forEach(issue => {
            issue.addEventListener('click', async (e) => {
                e.stopPropagation();
                const pdfUrl = issue.getAttribute('data-pdf');
                if(!pdfUrl) return;

                viewer.classList.add('active');
                const currentLang = localStorage.getItem('sutura_lang') || 'it';
                
                // --- MODIFICA: MESSAGGIO "ARRIVERÀ PRESTO" ---
                bookContainer.innerHTML = `<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; width: 100%;">
                    <p style="font-size: 1.5rem; letter-spacing: 4px; color: #e0e0e0; margin-bottom: 15px;">${translations[currentLang].msg_coming_soon}</p>
                    <p style="font-size: 0.8rem; opacity: 0.6; font-style: italic;">( inerzia ) — vol. 01</p>
                </div>`;

                /* CODICE PDF DISABILITATO TEMPORANEAMENTE
                bookContainer.innerHTML = `<p style="color:white; text-align:center; margin-top:50%;">${translations[currentLang].js_loading}</p>`;
                try {
                    const loadingTask = pdfjsLib.getDocument(pdfUrl);
                    const pdf = await loadingTask.promise;
                    renderFlipbook(pdf);
                } catch (error) {
                    console.error("Errore PDF:", error);
                    const currentLang = localStorage.getItem('sutura_lang') || 'it';
                    bookContainer.innerHTML = `<p style="color:white; text-align:center; margin-top:50%;">${translations[currentLang].js_error_pdf}</p>`;
                }
                */
            });
        });

        async function renderFlipbook(pdf) {
            bookContainer.innerHTML = ''; // Pulisci
            const totalPages = pdf.numPages;
            const sheetCount = Math.ceil(totalPages / 2);
            const sheets = [];

            // Creiamo i fogli (Sheets)
            for (let i = 0; i < sheetCount; i++) {
                const sheet = document.createElement('div');
                sheet.className = 'sheet';
                // Z-Index inverso: il primo foglio è sopra a tutti
                sheet.style.zIndex = sheetCount - i;
                
                const pageNumFront = i * 2 + 1;
                const pageNumBack = i * 2 + 2;

                // Fronte
                const front = document.createElement('div');
                front.className = 'page-face front';
                if (pageNumFront <= totalPages) {
                    await renderPageToCanvas(pdf, pageNumFront, front);
                }
                
                // Retro
                const back = document.createElement('div');
                back.className = 'page-face back';
                if (pageNumBack <= totalPages) {
                    await renderPageToCanvas(pdf, pageNumBack, back);
                }

                sheet.appendChild(front);
                sheet.appendChild(back);
                bookContainer.appendChild(sheet);
                sheets.push(sheet);

                // Evento Click per girare pagina
                sheet.addEventListener('click', (e) => {
                    e.stopPropagation();
                    // Se clicco e non è girato -> gira (vai avanti)
                    // Se è già girato -> torna indietro? No, per tornare indietro clicco sul lato sinistro (che è il retro del foglio precedente)
                    // Ma qui il click è sull'elemento sheet.
                    
                    if (!sheet.classList.contains('flipped')) {
                        sheet.classList.add('flipped');
                    } else {
                        sheet.classList.remove('flipped');
                    }
                });
            }
        }

        async function renderPageToCanvas(pdf, pageNum, container) {
            const page = await pdf.getPage(pageNum);
            const viewport = page.getViewport({ scale: 1.5 }); // Scale per qualità
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            
            container.appendChild(canvas);
            
            await page.render({
                canvasContext: context,
                viewport: viewport
            }).promise;
        }

        // Chiudi viewer cliccando fuori
        viewer.addEventListener('click', (e) => {
            if(e.target === viewer || e.target.classList.contains('book-wrapper'))
                viewer.classList.remove('active');
        });
    }

    // GESTIONE ARCHIVIO (Hover Reveal)
    const archiveItems = document.querySelectorAll('.archive-item');
    const previewImg = document.getElementById('archive-preview');

    if (archiveItems.length > 0 && previewImg) {
        document.addEventListener('mousemove', (e) => {
            // Muovi l'immagine preview seguendo il mouse (con un leggero ritardo/offset se voluto, qui è diretto)
            // Usiamo requestAnimationFrame per performance se necessario, ma per ora semplice:
            if (previewImg.classList.contains('active')) {
                previewImg.style.left = e.clientX + 'px';
                previewImg.style.top = e.clientY + 'px';
            }
        });

        archiveItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const imgSrc = item.getAttribute('data-image');
                previewImg.src = imgSrc;
                previewImg.classList.add('active');
            });
            
            item.addEventListener('mouseleave', () => {
                previewImg.classList.remove('active');
            });
        });
    }
});