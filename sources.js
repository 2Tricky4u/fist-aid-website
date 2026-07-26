/* =========================================================================
   Source registry.
   Every quantity used in content.js (dose, duration, ratio, depth, threshold)
   must be traceable to an entry here. Sections cite by id.

   `checked` = the date the reference was consulted for this site.
   ========================================================================= */

window.LAST_VERIFIED = '2026-07-26';

window.SOURCES = {

  /* ---------- ERC Guidelines 2025 (published 22.10.2025) ---------- */

  'erc-bls': {
    org: 'European Resuscitation Council',
    title: 'Guidelines 2025 — Adult Basic Life Support',
    ref: 'Resuscitation 2025;215(Suppl 1):110771',
    url: 'https://www.resuscitationjournal.com/article/S0300-9572(25)00283-7/fulltext',
    checked: '2026-07-26'
  },

  'erc-pls': {
    org: 'European Resuscitation Council',
    title: 'Guidelines 2025 — Paediatric Life Support',
    ref: 'Resuscitation 2025;215(Suppl 1)',
    url: 'https://www.resuscitationjournal.com/article/S0300-9572(25)00279-5/fulltext',
    checked: '2026-07-26'
  },

  'erc-fa': {
    org: 'European Resuscitation Council',
    title: 'Guidelines 2025 — First Aid',
    ref: 'Resuscitation 2025;215(Suppl 1)',
    url: 'https://www.resuscitationjournal.com/article/S0300-9572(25)00264-3/fulltext',
    checked: '2026-07-26'
  },

  'erc-sc': {
    org: 'European Resuscitation Council',
    title: 'Guidelines 2025 — Special Circumstances in Resuscitation',
    ref: 'Resuscitation 2025;215(Suppl 1)',
    url: 'https://www.resuscitationjournal.com/article/S0300-9572(25)00265-5/fulltext',
    checked: '2026-07-26'
  },

  'erc-exec': {
    org: 'European Resuscitation Council',
    title: 'Guidelines 2025 — Executive Summary',
    ref: 'Resuscitation 2025;215(Suppl 1)',
    url: 'https://www.resuscitationjournal.com/article/S0300-9572(25)00282-5/fulltext',
    checked: '2026-07-26'
  },

  /* ---------- ILCOR consensus on science ---------- */

  'ilcor-fa': {
    org: 'ILCOR',
    title: '2025 International Consensus on First Aid Science with Treatment Recommendations (CoSTR)',
    url: 'https://ilcor.org/uploads/FA-2025-COSTR-Full-Chapter.pdf',
    checked: '2026-07-26'
  },

  'ilcor-drown': {
    org: 'ILCOR',
    title: 'CoSTR — CAB or ABC in drowning (BLS 856, systematic review)',
    url: 'https://costr.ilcor.org/document/cab-or-abc-in-drowning-bls-856-tf-systematic-review',
    checked: '2026-07-26'
  },

  /* ---------- Swiss adaptation ---------- */

  'src': {
    org: 'Swiss Resuscitation Council (SRC)',
    title: 'Directives de cours, version 1.1 du 24.11.2025',
    url: 'https://www.resuscitation.ch/fileadmin/user_upload/Kursinformationen/Kursinformationen_2025/SRC_Directives_de_cours_V1.1_24.11.25.pdf',
    checked: '2026-07-26'
  },

  'src-gl': {
    org: 'Swiss Resuscitation Council (SRC)',
    title: 'Guidelines 2025 — reprise des directives ERC/AHA pour la Suisse',
    ref: 'Période de transition jusqu’au 31.12.2026',
    url: 'https://www.resuscitation.ch/guidelines-2025',
    checked: '2026-07-26'
  },

  /* ---------- Resuscitation Council UK (ERC-aligned, freely readable) ---------- */

  'rcuk-fa': {
    org: 'Resuscitation Council UK',
    title: 'First Aid Guidelines 2025',
    url: 'https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/first-aid-guidelines',
    checked: '2026-07-26'
  },

  'rcuk-bls': {
    org: 'Resuscitation Council UK',
    title: 'Adult Basic Life Support Guidelines 2025',
    url: 'https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/adult-basic-life-support-guidelines',
    checked: '2026-07-26'
  },

  'rcuk-pbls': {
    org: 'Resuscitation Council UK',
    title: 'Paediatric Basic Life Support Guidelines 2025',
    url: 'https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/paediatric-basic-life-support-guidelines',
    checked: '2026-07-26'
  },

  'crash3': {
    org: 'CRASH-3 Collaborators — The Lancet',
    title: 'Effects of tranexamic acid on death, disability and vascular occlusive events in acute traumatic brain injury (CRASH-3)',
    ref: 'Lancet 2019 ; bénéfice dans les 3 heures, traumatisme crânien léger à modéré',
    url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(19)32233-0/fulltext',
    checked: '2026-07-26'
  },

  'se-gaba': {
    org: 'Journal of Neuroscience',
    title: 'Trafficking of GABA-A receptors, loss of inhibition, and a mechanism for pharmacoresistance in status epilepticus',
    ref: 'J Neurosci 2005;25(34):7724',
    url: 'https://www.jneurosci.org/content/25/34/7724',
    checked: '2026-07-26'
  },

  'co-poisoning': {
    org: 'StatPearls / NCBI Bookshelf',
    title: 'Carbon Monoxide Poisoning — demi-vie de la carboxyhémoglobine et oxygénothérapie',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK557888/',
    checked: '2026-07-26'
  },

  'cpp-tbi': {
    org: 'Brain Trauma Foundation / revue Critical Care',
    title: 'Cerebral perfusion pressure targets after traumatic brain injury: a reappraisal',
    ref: 'Cible de PPC recommandée : 60–70 mmHg',
    url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12096506/',
    checked: '2026-07-26'
  },

  'monro-kellie': {
    org: 'Journal of Cerebral Blood Flow & Metabolism',
    title: 'Monro-Kellie 2.0 — the dynamic vascular and venous pathophysiological components of intracranial pressure',
    url: 'https://journals.sagepub.com/doi/pdf/10.1177/0271678x16648711',
    checked: '2026-07-26'
  },

  'swiss-ht': {
    org: 'ICAR MedCom — Commission internationale de médecine d’urgence en montagne',
    title: 'Clinical staging of accidental hypothermia: The Revised Swiss System',
    ref: 'Resuscitation 2021 ; classification suisse HT I–IV, révisée selon le risque d’arrêt cardiaque',
    url: 'https://www.resuscitationjournal.com/article/S0300-9572(21)00096-4/fulltext',
    checked: '2026-07-26'
  },

  'saver': {
    org: 'Saver JL — Stroke (American Heart Association)',
    title: 'Time Is Brain — Quantified',
    ref: 'Stroke 2006;37:263–266',
    url: 'https://www.ahajournals.org/doi/10.1161/01.str.0000196957.55928.ab',
    checked: '2026-07-26'
  },

  'saver-variability': {
    org: 'Stroke (American Heart Association)',
    title: 'High Variability in Neuronal Loss — nuance apportée à l’estimation de Saver',
    url: 'https://www.ahajournals.org/doi/10.1161/STROKEAHA.118.023499',
    checked: '2026-07-26'
  },

  'three-phase': {
    org: 'Resuscitation Plus',
    title: 'Time boundaries of the three-phase time-sensitive model for ventricular fibrillation cardiac arrest',
    ref: 'D’après le modèle de Weisfeldt & Becker (JAMA 2002)',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8244403/',
    checked: '2026-07-26'
  },

  'capno': {
    org: 'Resuscitation',
    title: 'Capnography during cardiac arrest',
    url: 'https://www.cercp.org/wp-content/uploads/2018/11/noviembre_2018_articulo.pdf',
    checked: '2026-07-26'
  },

  'burns-path': {
    org: 'Royal College of Emergency Medicine (RCEMLearning)',
    title: 'Major trauma — Burns : physiopathologie, zones de Jackson, remplissage',
    url: 'https://www.rcemlearning.co.uk/reference/major-trauma-burns/',
    checked: '2026-07-26'
  },

  'parkland': {
    org: 'StatPearls / NCBI Bookshelf',
    title: 'Parkland Formula',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK537190/',
    checked: '2026-07-26'
  },

  'iadt': {
    org: 'International Association of Dental Traumatology (IADT)',
    title: 'Guidelines for the management of traumatic dental injuries — 2. Avulsion of permanent teeth',
    ref: 'Dental Traumatology 2020',
    url: 'https://onlinelibrary.wiley.com/doi/10.1111/edt.12573',
    checked: '2026-07-26'
  },

  'wms-frostbite': {
    org: 'Wilderness Medical Society',
    title: 'Clinical Practice Guidelines for the Prevention and Treatment of Frostbite — 2024 Update',
    url: 'https://journals.sagepub.com/doi/10.1177/10806032231222359',
    checked: '2026-07-26'
  },

  'wms-hypothermia': {
    org: 'Wilderness Medical Society / AAFP',
    title: 'Accidental Hypothermia — Guidelines from the Wilderness Medical Society',
    url: 'https://www.aafp.org/pubs/afp/issues/2020/1101/p571.html',
    checked: '2026-07-26'
  },

  'cochrane-debrief': {
    org: 'Cochrane',
    title: 'Psychological debriefing for preventing post-traumatic stress disorder (PTSD)',
    ref: 'Rose S et al., Cochrane Database Syst Rev, CD000560',
    url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD000560/abstract',
    checked: '2026-07-26'
  },

  'bts-sign': {
    org: 'British Thoracic Society / SIGN',
    title: 'British guideline on the management of asthma',
    url: 'https://www.brit-thoracic.org.uk/document-library/guidelines/asthma/btssign-asthma-guideline-quick-reference-guide-2019/',
    checked: '2026-07-26'
  },

  'anzcor-bleed': {
    org: 'ANZCOR (Australian and New Zealand Committee on Resuscitation)',
    title: 'Guideline 9.1.1 — First Aid for Management of Bleeding',
    url: 'https://www.anzcor.org/home/first-aid-management-of-injuries/guideline-9-1-1-first-aid-for-management-of-bleeding',
    checked: '2026-07-26'
  },

  /* ---------- Swiss institutions ---------- */

  'tox': {
    org: 'Tox Info Suisse',
    title: 'Numéro d’urgence 145 — conseils en cas d’intoxication, 24 h/24',
    ref: 'Depuis l’étranger : +41 44 251 51 51',
    url: 'https://www.toxinfo.ch/notruf-145_fr',
    checked: '2026-07-26'
  },

  'ias': {
    org: 'IAS / IVR — Interassociation de sauvetage',
    title: 'Directives sur les délais d’intervention : au maximum 15 minutes, reprises dans la législation de certains cantons',
    ref: 'Norme d’organisation, et non un temps moyen mesuré',
    url: 'https://www.trisan.org/fr/themes/aide-medicale-urgente/articles/les-secours-durgence-comment-sauve-t-on-de-lautre-cote-de-la-frontiere',
    checked: '2026-07-26'
  },

  'ohca-fr': {
    org: 'Registre suisse de l’arrêt cardiaque / Resuscitation Plus',
    title: 'Geospatial mapping of disparities in out-of-hospital cardiac arrests in the Swiss canton of Fribourg, 2018–2022',
    ref: '1127 arrêts cardiaques extrahospitaliers ; délai de l’appel 144 à l’arrivée du premier véhicule',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12446618/',
    checked: '2026-07-26'
  },

  'notrufe-ch': {
    org: 'Appels d’urgence Suisse / 144.ch',
    title: 'Numéros d’urgence en Suisse — le 112 aboutit à la centrale de police',
    url: 'https://www.144.ch/fr/informationen-des-steuerungsausschuss-der-organisation-notrufe-schweiz-zum-thema-kommunikation-der-europaeischen-notrufnummer-112/',
    checked: '2026-07-26'
  },

  'rega': {
    org: 'Rega — Garde aérienne suisse de sauvetage',
    title: 'Alarme 1414 et application Rega',
    url: 'https://www.rega.ch/fr',
    checked: '2026-07-26'
  },

  'astra-tunnel': {
    org: 'OFROU / ASTRA',
    title: 'Que faire en cas de panne dans un tunnel ?',
    url: 'https://blog.astra.admin.ch/fr/que-faire-en-cas-de-panne-dans-un-tunnel/',
    checked: '2026-07-26'
  },

  'cp-128': {
    org: 'Confédération suisse',
    title: 'Code pénal suisse, art. 128 — Omission de prêter secours',
    ref: 'RS 311.0 ; peine privative de liberté de 3 ans au plus ou peine pécuniaire',
    url: 'https://www.fedlex.admin.ch/eli/cc/54/757_781_799/fr',
    checked: '2026-07-26'
  },

  'ocr': {
    org: 'Confédération suisse',
    title: 'Ordonnance sur les règles de la circulation routière (OCR), RS 741.11',
    ref: 'Signal de panne, couloir de secours',
    url: 'https://www.fedlex.admin.ch/eli/cc/1962/1364_1409_1420/fr',
    checked: '2026-07-26'
  },

  'samariter': {
    org: 'Samaritains Suisse',
    title: 'Cours de premiers secours reconnus',
    url: 'https://www.samariter.ch/fr/cours',
    checked: '2026-07-26'
  },

  'swissheart': {
    org: 'Fondation Suisse de Cardiologie',
    title: 'Reconnaître l’infarctus et l’attaque cérébrale — signes d’alerte',
    url: 'https://www.swissheart.ch/fr',
    checked: '2026-07-26'
  }
};
