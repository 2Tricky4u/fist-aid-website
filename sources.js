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
