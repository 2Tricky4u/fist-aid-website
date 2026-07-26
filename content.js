/* =========================================================================
   Premiers secours en Suisse, contenu

   Conventions
   -----------
   essentiel : puces affichées sur la carte (toujours visibles)
   complet   : procédure complète, niveau cours BLS-AED (SRC)
   pro       : explication médicale, justification des chiffres, suite professionnelle
   sources   : identifiants définis dans sources.js

   Balisage dans les chaînes : **gras**, {144} devient un lien d'appel.

   PLANCHES SOUS LICENCE
   ---------------------
   Les blocs { type: 'image' } pointent vers planches/. Ces fichiers ne sont pas
   fournis avec le site : ils doivent provenir de votre licence (SRC,
   Samaritains, etc.). Si le fichier est absent, la figure se retire toute seule
   et la section reste lisible. Renseignez `credit` avec la mention exacte
   exigée par votre contrat de licence.

   RÈGLE : aucun chiffre (dose, durée, ratio, profondeur, seuil) sans source.
   Alignement : directives ERC / SRC 2025 (publiées le 22.10.2025).
   ========================================================================= */

window.NUMBERS = [
  { num: '144',  label: 'Ambulance',          icon: 'ambulance' },
  { num: '117',  label: 'Police',             icon: 'police' },
  { num: '118',  label: 'Pompiers',           icon: 'flame' },
  { num: '112',  label: 'Urgence européenne', icon: 'euro-stars' },
  { num: '145',  label: 'Tox Info',           icon: 'flask' },
  { num: '1414', label: 'Rega',               icon: 'heli' }
];

window.GROUPS = [
  { id: 'base',      title: 'Réflexes de base',      note: 'À connaître avant tout le reste' },
  { id: 'vitales',   title: 'Urgences vitales',      note: 'Chaque minute compte' },
  { id: 'enfant',    title: 'Enfant & nourrisson',   note: 'Les gestes diffèrent de l’adulte' },
  { id: 'medicales', title: 'Urgences médicales',    note: 'Reconnaître vite, appeler vite' },
  { id: 'trauma',    title: 'Traumatismes',          note: '' },
  { id: 'environ',   title: 'Environnement & intoxications', note: '' },
  { id: 'route',     title: 'Route & tunnel',        note: '' },
  { id: 'preparer',  title: 'Se préparer',           note: 'Avant que ça n’arrive' }
];

window.SECTIONS = [

/* =========================================================================
   1, RÉFLEXES DE BASE
   ========================================================================= */

{
  id: 'ora', group: 'base', num: 1, title: 'Réflexe ORA', icon: 'eye', accent: 'blue',
  keywords: 'observer réfléchir agir chaîne de survie alarme sécuriser témoin',
  essentiel: [
    'Observer la situation',
    'Réfléchir avant d’agir',
    'Agir de manière adaptée'
  ],
  complet: [
    { type: 'steps', title: 'Observer', items: [
      'Que s’est-il passé ?',
      'Combien de personnes sont impliquées ou blessées ?',
      'Quels dangers subsistent (circulation, feu, électricité, fumée, chute) ?'
    ]},
    { type: 'steps', title: 'Réfléchir', items: [
      'Y a-t-il un danger pour moi, les témoins ou les victimes ?',
      'Comment sécuriser sans créer une victime supplémentaire ?'
    ]},
    { type: 'steps', title: 'Agir', items: [
      'Se protéger soi-même en premier.',
      'Sécuriser la zone.',
      'Donner l’alarme.',
      'Porter secours et surveiller jusqu’à la relève.'
    ]},
    { type: 'note', title: 'Attribuer une tâche précise à une personne précise', text:
      'Dans un groupe, une consigne lancée à la cantonade n’est exécutée par personne. Désignez : ' +
      '« Vous, avec la veste bleue : appelez le {144}, demandez un DAE, et revenez me confirmer. »' },
    { type: 'list', title: 'Chaîne de survie', items: [
      'Reconnaître l’urgence',
      'Alerter le {144}',
      'RCP immédiate',
      'Défibrillation (DAE)',
      'Secours professionnels',
      'Hôpital / soins post-arrêt'
    ]},
    { type: 'myth', title: 'Idée reçue : « 5 à 6 minutes en ville, 10 à 12 à la campagne »', text:
      'Ces chiffres, souvent cités en cours, sont **optimistes**. Les données mesurées du Registre ' +
      'suisse de l’arrêt cardiaque pour le canton de Fribourg (2018–2022, 1127 cas) donnent une ' +
      'médiane de **12 minutes** entre l’appel au 144 et l’arrivée du premier véhicule : ' +
      '**9 minutes en zone urbaine**, **15 en zone rurale**, jusqu’à **19** dans les secteurs les ' +
      'plus isolés. Et il s’agit d’arrêts cardiaques, donc de la priorité d’engagement la plus ' +
      'élevée : ce sont des délais parmi les plus courts du système, pas un plafond.' },
    { type: 'note', title: 'Ce que dit la norme, et ce que disent les mesures', text:
      'Les directives de l’Interassociation de sauvetage (IAS), reprises dans la législation de ' +
      'certains cantons, fixent un délai d’intervention de **15 minutes au maximum**, à réduire à ' +
      '**10 minutes** si possible. C’est un objectif de planification. Les mesures de terrain ' +
      'montrent que la moitié des interventions rurales le dépassent, d’où l’intérêt des ' +
      'premiers répondants, qui arrivaient à Fribourg en **9 minutes** médianes, souvent avant ' +
      'l’ambulance.' },
    { type: 'warn', title: 'Votre sécurité passe avant tout', text:
      'Un secouriste blessé devient une victime de plus et mobilise des moyens au lieu d’en libérer. ' +
      'L’obligation légale suisse de porter secours (art. 128 CP) n’exige jamais de mettre sa propre ' +
      'vie en danger.' }
  ],
  pro: [
    { type: 'prose', title: 'Pourquoi les premières minutes décident de tout', wide: true, text: [
      'Après un arrêt cardiaque, la circulation cérébrale s’effondre en quelques secondes. Les réserves ' +
      'd’oxygène du cerveau sont épuisées très rapidement et les lésions neuronales irréversibles ' +
      'commencent en quelques minutes. La probabilité de survie décroît fortement à chaque minute sans ' +
      'réanimation ni défibrillation.',
      'La réanimation par un témoin ne « redémarre » pas le cœur : elle maintient un débit sanguin ' +
      'résiduel qui préserve le cerveau et le myocarde jusqu’à ce qu’un choc électrique ou les secours ' +
      'puissent rétablir un rythme efficace. C’est un pont, pas un traitement, mais sans ce pont, le ' +
      'traitement arrive trop tard.'
    ]},
    { type: 'prose', title: 'L’effet spectateur, et comment le casser', text: [
      'Plus il y a de témoins, moins chacun se sent responsable d’agir : c’est la diffusion de ' +
      'responsabilité. La parade est la désignation nominative : regarder une personne, la décrire ' +
      '(vêtement, position), lui donner une tâche unique et vérifiable, et exiger un retour.',
      'Le retour d’information (« revenez me confirmer ») a une deuxième fonction : il vous dit si ' +
      'l’alarme est réellement partie, ce que vous ne pouvez pas supposer.'
    ]},
    { type: 'note', title: 'Sur la qualité de ces chiffres', text:
      'Il n’existe pas, à notre connaissance, de statistique **nationale** publiée des délais ' +
      'd’intervention en Suisse : les données disponibles sont cantonales et proviennent surtout des ' +
      'registres d’arrêt cardiaque. Les chiffres ci-dessus concernent un seul canton, de géographie ' +
      'mixte : Genève ou Bâle feraient probablement mieux, un canton alpin moins bien. Ils mesurent ' +
      'l’arrivée du véhicule **sur les lieux**, pas au chevet du patient : étages, ascenseurs et ' +
      'accès ajoutent encore du temps. Dans l’enquête européenne la plus récente sur les systèmes de ' +
      'secours, la Suisse ne figure d’ailleurs pas parmi les pays annonçant une médiane urbaine ' +
      'inférieure à 10 minutes.' },
    { type: 'note', title: 'Cadre légal suisse', text:
      'L’art. 128 du Code pénal punit quiconque ne prête pas secours à une personne en danger de mort ' +
      'imminent alors qu’on pouvait raisonnablement l’exiger de lui, ainsi que celui qui empêche ou ' +
      'entrave un tiers de porter secours. Peine : privative de liberté de **3 ans au plus** ou ' +
      'pécuniaire. Le critère est ce qui est « raisonnablement exigible » : appeler le 144 l’est ' +
      'toujours ; entrer dans un bâtiment en feu ne l’est pas.' }
  ],
  sources: ['ohca-fr', 'ias', 'erc-bls', 'src', 'cp-128']
},

{
  id: 'numeros', group: 'base', num: 2, title: 'Numéros d’urgence', icon: 'phone', accent: 'red',
  keywords: '144 117 118 112 145 1414 appel alarme centrale téléphone rega tox',
  essentiel: [
    'Urgence médicale → {144}',
    'Police {117} · Pompiers {118} · Europe {112}',
    'Intoxication {145} · Rega {1414}',
    'Ne raccrochez que quand la centrale le demande'
  ],
  complet: [
    { type: 'table', title: 'Quel numéro pour quelle situation', wide: true,
      head: ['Numéro', 'Service', 'Quand l’utiliser'],
      rows: [
        ['**144**',  'Ambulance / urgence médicale', 'Toute urgence médicale : inconscience, douleur thoracique, signes d’AVC, hémorragie, brûlure grave, chute grave.'],
        ['**117**',  'Police',      'Accident de circulation, violence, personne disparue, danger public.'],
        ['**118**',  'Pompiers',    'Incendie, fumée, fuite de gaz, produit chimique, désincarcération, inondation.'],
        ['**112**',  'Urgence européenne', 'Numéro unique européen, valable en Suisse. **Attention : en Suisse, il aboutit à la centrale de police**, qui transmet ensuite. Pour une urgence médicale, composez directement le **144**, vous économisez un transfert.'],
        ['**145**',  'Tox Info Suisse', 'Intoxication ou suspicion d’ingestion d’un produit toxique. Gratuit, 24 h/24. Depuis l’étranger : +41 44 251 51 51.'],
        ['**1414**', 'Rega',        'Sauvetage aérien : montagne, zone difficile d’accès, transport héliporté.']
      ]},
    { type: 'image', wide: true, src: 'planches/alerter-144.jpg',
      title: 'Alerter sans quitter la victime',
      alt: 'Photographie vue de dessus : une main compose le 144 sur un téléphone tandis que l’autre main de la secouriste reste posée sur le thorax d’un homme inconscient allongé au sol.',
      caption: 'Alertez **sans quitter la personne**. Mettez le haut-parleur : la centrale vous guide et vous gardez les deux mains libres.',
      credit: '© Swiss Resuscitation Council SRC, reproduit avec autorisation.' },
    { type: 'steps', title: 'Ce que la centrale doit entendre', items: [
      '**Qui** appelle, votre nom et votre numéro de rappel.',
      '**Où**, adresse exacte, commune, étage, point de repère, numéro de borne sur autoroute.',
      '**Quoi** : ce qui s’est passé.',
      '**Combien** de personnes sont concernées.',
      '**État** des victimes : consciente ? respire-t-elle ?',
      '**Dangers** présents sur place : circulation, feu, électricité, produits.'
    ]},
    { type: 'warn', title: 'Ne raccrochez pas', text:
      'La centrale mène l’entretien et vous guide, y compris pour la réanimation, en comptant le ' +
      'rythme avec vous. C’est elle qui met fin à l’appel. Mettez le haut-parleur pour garder les ' +
      'deux mains libres.' },
    { type: 'note', title: 'Depuis un mobile', text:
      'L’appel d’urgence est gratuit et fonctionne avec **n’importe quelle carte SIM**, suisse ou ' +
      'étrangère, y compris une carte prépayée **sans crédit**. L’écran de verrouillage d’un ' +
      'téléphone propose toujours l’appel d’urgence. Mettez le haut-parleur : vous aurez besoin de ' +
      'vos deux mains.' }
  ],
  pro: [
    { type: 'prose', title: 'Régulation et priorisation', text: [
      'Les centrales 144 travaillent selon des protocoles d’interrogatoire structurés : la nature de ' +
      'l’appel détermine un degré d’urgence, qui détermine les moyens engagés (ambulance seule, ' +
      'ambulance + SMUR, hélicoptère) et le mode de déplacement.',
      'Les questions apparemment lentes du régulateur, « est-ce qu’il respire normalement ? », ' +
      '« décrivez sa respiration », ne retardent pas les secours : ceux-ci sont généralement engagés ' +
      'dès la localisation obtenue, pendant que l’interrogatoire continue.'
    ]},
    { type: 'prose', title: 'Pourquoi la Suisse garde des numéros séparés', text: [
      'Le comité de pilotage « Appels d’urgence Suisse » recommande explicitement de communiquer ' +
      '**117 / 118 / 144** plutôt que le 112 seul. La raison tient en un mot : le **triage direct**. ' +
      'Un appel au 144 arrive d’emblée chez des professionnels de la santé, sans étape intermédiaire.',
      'L’exemple qu’ils donnent est parlant : sur un numéro unique, un **infarctus avec danger vital** ' +
      'se retrouve dans la file d’attente **derrière les appels signalant de l’eau dans une cave**, ' +
      'parce que la nature de l’urgence n’est pas visible avant le décrochage. Le risque de saturation ' +
      'est maximal précisément quand la demande explose : orages, catastrophes, accidents majeurs.'
    ]},
    { type: 'note', title: 'RCP guidée par téléphone', text:
      'La réanimation guidée par le régulateur augmente le taux de réanimation par les témoins et la ' +
      'survie. Elle fait partie intégrante des recommandations : c’est une raison de plus de ne pas ' +
      'raccrocher et de passer en haut-parleur.' },
    { type: 'note', title: 'Applications de localisation', text:
      'L’application Rega transmet la position GPS lors de l’alarme, ce qui est décisif en montagne où ' +
      'décrire sa position est difficile. Les smartphones transmettent également une localisation ' +
      'd’urgence automatique aux centrales lors d’un appel.' }
  ],
  sources: ['tox', 'rega', 'notrufe-ch', 'ias', 'erc-bls', 'src']
},

{
  id: 'evaluation', group: 'base', num: 3, title: 'Évaluation d’une victime', icon: 'brain', accent: 'blue',
  keywords: 'conscience respiration pouls pls position latérale sécurité gasps voies respiratoires',
  essentiel: [
    'Elle réagit → position confortable, surveiller',
    'Elle ne réagit pas → ouvrir les voies respiratoires',
    '…et respire normalement → PLS + {144}',
    '…et ne respire pas normalement → RCP'
  ],
  complet: [
    { type: 'tree', title: 'Algorithme d’évaluation', wide: true,
      q: 'Réagit-elle ?',
      branches: [
        { label: 'Oui, elle réagit', tone: 'y', text:
          'Elle est **consciente**, donc elle respire. Laissez-la dans une position confortable et ' +
          '**ne la mettez pas en PLS**. Cherchez saignement, douleur, gêne respiratoire ou autre ' +
          'symptôme. Rassurez-la, protégez-la du froid, surveillez-la. Appelez le {144} en cas de doute.' },
        { label: 'Non, elle ne réagit pas', tone: 'n', text:
          'Appelez à l’aide. Faites appeler le {144} et demander un **DAE**. Ouvrez les voies ' +
          'respiratoires : tête légèrement en arrière, menton relevé. Puis, pendant **10 secondes au ' +
          'maximum** :',
          then: {
            q: 'Respire-t-elle normalement ?',
            branches: [
              { label: 'Respiration normale', tone: 'y', text:
                '**PLS**, appelez le {144}, surveillez la respiration **en continu**. Ne la laissez ' +
                'jamais seule : elle peut cesser de respirer à tout moment.' },
              { label: 'Absente, anormale ou gasps', tone: 'n', text:
                '**RCP immédiate**, et **DAE** dès qu’il arrive. Ne cherchez pas le pouls. En cas de ' +
                'doute sur la respiration, considérez qu’elle est anormale et commencez.' }
            ]
          }
        }
      ]
    },
    { type: 'steps', title: 'Vérifier la conscience', items: [
      'Parlez fort et clairement.',
      'Touchez ou secouez doucement les épaules.',
      'Donnez un ordre simple : « Ouvrez les yeux. Serrez-moi la main. »'
    ]},
    { type: 'steps', title: 'Si la personne répond', items: [
      'Laissez-la dans une position confortable, ne la déplacez pas sans raison.',
      'Recherchez saignement, douleur, difficulté respiratoire ou autre symptôme.',
      'Rassurez-la et protégez-la du froid et du sol.',
      'Surveillez son état : il peut se dégrader.',
      'Appelez le {144} en cas de doute.'
    ]},
    { type: 'steps', title: 'Si la personne ne répond pas', items: [
      'Appelez à l’aide autour de vous.',
      'Faites appeler immédiatement le {144} et demandez un **DAE/AED**.',
      'Ouvrez les voies respiratoires : tête légèrement en arrière, menton relevé.',
      'Vérifiez la respiration pendant **10 secondes au maximum**.',
      'Ne recherchez pas le pouls.'
    ]},
    { type: 'warn', title: 'Une brève convulsion peut annoncer un arrêt cardiaque', text:
      'Le SRC le mentionne explicitement : **une convulsion généralisée brève peut être le premier ' +
      'signe d’un arrêt cardiaque**, et non d’une crise d’épilepsie. Après des secousses de quelques ' +
      'secondes, revenez toujours à la question de base : réagit-elle, respire-t-elle normalement ? ' +
      'Si la respiration est absente ou anormale, c’est une RCP qu’il faut, pas une PLS.' },
    { type: 'warn', title: 'Les gasps ne sont pas une respiration', text:
      'Des mouvements respiratoires rares, bruyants, irréguliers, en « hoquet » ou en « ronflement » ' +
      'sont des **gasps agoniques**. Ils sont fréquents dans les premières minutes d’un arrêt ' +
      'cardiaque et sont régulièrement pris pour un signe de vie. En cas de doute : considérez que la ' +
      'respiration est anormale et **commencez la RCP**.' },
    { type: 'steps', title: 'Position latérale de sécurité (PLS)', items: [
      'Bras de votre côté à angle droit, paume vers le haut.',
      'Bras opposé replié, dos de la main contre la joue de la victime.',
      'Genou opposé fléchi, pied à plat au sol.',
      'Tirez sur le genou pour faire rouler la personne vers vous.',
      'Basculez la tête légèrement en arrière, bouche dirigée vers le sol.',
      'Appelez le {144} et surveillez la respiration **en continu**.'
    ]},
    { type: 'image', wide: true, src: 'planches/voies-aeriennes.jpg',
      title: 'Ouvrir les voies respiratoires',
      alt: 'Photographie : une secouriste agenouillée bascule doucement la tête d’une femme inconsciente vers l’arrière, une main sur le front et deux doigts sous le menton pour le relever.',
      caption: 'Une main sur le front, deux doigts sous le **menton osseux** pour le relever. Chez l’inconscient, c’est la base de langue qui obstrue : ce geste seul rouvre le passage.',
      credit: '© Samaritains Suisse, reproduit avec autorisation.' },
    { type: 'image', wide: true, src: 'planches/pls.jpg',
      title: 'Position latérale de sécurité, position finale',
      alt: 'Illustration : une personne inconsciente couchée sur le côté. Le genou du dessus est fléchi à angle droit, le pied posé au sol pour stabiliser ; la main du dessus est glissée sous la joue ; la tête est basculée en arrière et la bouche dirigée vers le sol.',
      caption: 'Voilà le **résultat** à obtenir : genou du dessus fléchi et pied au sol pour la stabilité, main sous la joue, tête en arrière, **bouche dirigée vers le sol**. Le chemin pour y arriver importe moins que ces quatre points.',
      credit: 'Grummelbacke, Wikimedia Commons, domaine public (CC0).' },
    { type: 'note', title: 'Le but, plus important que la forme exacte', text:
      'Une PLS parfaite n’existe pas. Ce qui compte est le résultat : la personne est **stable sur le ' +
      'côté**, la **bouche dirigée vers le sol** pour que salive, sang ou vomissures s’écoulent au ' +
      'lieu d’être inhalés, et le **cou n’est pas plié**. Si vous obtenez cela, la position est bonne. ' +
      'Un geste imparfait vaut infiniment mieux qu’une personne laissée sur le dos.' },
    { type: 'note', title: 'Ne laissez jamais la personne seule', text:
      'Une personne en PLS peut cesser de respirer à tout moment. La PLS ne dispense pas de ' +
      'surveiller : elle vous oblige à surveiller.' },
    { type: 'warn', title: 'Quand ne PAS mettre en PLS', text:
      'En cas de respiration agonique (gasps) ou de traumatisme, ne déplacez pas la personne en PLS. ' +
      'Gasps = RCP. Traumatisme = immobilité, sauf si les voies respiratoires sont menacées : la ' +
      'liberté des voies respiratoires reste toujours prioritaire.' }
  ],
  pro: [
    { type: 'prose', title: 'Pourquoi on ne cherche plus le pouls', text: [
      'La palpation du pouls carotidien est peu fiable, y compris chez des soignants : elle prend trop ' +
      'de temps et produit à la fois des faux positifs (on croit sentir un pouls absent) et des faux ' +
      'négatifs. Le coût d’un faux positif est majeur : c’est une réanimation non entreprise chez une ' +
      'personne en arrêt.',
      'Le critère retenu pour le grand public est donc binaire et observable : absence de réaction + ' +
      'respiration absente ou anormale = arrêt cardiaque = RCP. Le risque de comprimer le thorax ' +
      'd’une personne qui n’est pas en arrêt est faible et largement acceptable au regard du bénéfice.'
    ]},
    { type: 'prose', title: 'Physiologie des gasps agoniques', text: [
      'Le gasp agonique est un réflexe du tronc cérébral déclenché par l’hypoxie profonde. Il traduit ' +
      'une activité résiduelle du centre respiratoire, pas une ventilation efficace : les échanges ' +
      'gazeux sont négligeables.',
      'Sa présence est en réalité un signe relativement favorable. Elle indique un arrêt récent et ' +
      'est associée à un meilleur pronostic si la RCP est entreprise. D’où l’importance de ne pas la ' +
      'confondre avec une respiration conservée.'
    ]},
    { type: 'note', title: 'Ouverture des voies respiratoires', text:
      'Chez la personne inconsciente, la perte de tonus des muscles pharyngés fait basculer la base de ' +
      'langue contre la paroi postérieure du pharynx. La bascule de la tête en arrière avec élévation ' +
      'du menton dégage mécaniquement cet espace : c’est le geste qui rend la ventilation possible et ' +
      'qui explique la position de la tête en PLS.' }
  ],
  sources: ['erc-bls', 'src', 'rcuk-bls', 'rcuk-fa']
},

/* =========================================================================
   2, URGENCES VITALES
   ========================================================================= */

{
  id: 'rcp-dae', group: 'vitales', num: 4, title: 'RCP et DAE chez l’adulte', icon: 'heart-pulse', accent: 'red',
  keywords: 'réanimation massage cardiaque compressions insufflations défibrillateur aed arrêt cardiaque',
  essentiel: [
    '30 compressions : 2 insufflations',
    '100–120 compressions/min',
    'Profondeur : 5–6 cm',
    'Suivre les instructions du DAE'
  ],
  complet: [
    { type: 'steps', title: 'Massage cardiaque', items: [
      'Victime sur le dos, sur une surface aussi dure que possible, mais **ne sortez pas un adulte de son lit** pour cela : le SRC le déconseille explicitement, le temps perdu coûte plus que le matelas ne fait perdre.',
      'Talon de la main au **milieu de la poitrine**, sur la moitié inférieure du sternum ; seconde main par-dessus, doigts croisés.',
      'Bras tendus, épaules à la verticale des mains, poussée avec le poids du buste.',
      'Rythme : **100 à 120 compressions par minute**.',
      'Profondeur : **5 à 6 cm**, au moins 5, pas plus de 6.',
      'Relâchez **complètement** la poitrine après chaque compression, sans décoller les mains.',
      'Alternez **30 compressions / 2 insufflations**.',
      'Relayez-vous environ **toutes les 2 minutes**, en limitant l’interruption à quelques secondes.'
    ]},
    { type: 'steps', title: 'DAE / AED', items: [
      'Allumez-le dès son arrivée et **suivez ses instructions vocales**.',
      'Dénudez et séchez rapidement la poitrine ; rasez si le DAE fournit un rasoir et que la pilosité empêche le collage. Un soutien-gorge se **déplace** plus vite qu’il ne se retire.',
      'Une électrode **sous la clavicule droite**, l’autre **sous l’aisselle gauche**.',
      'S’il y a plusieurs secouristes, continuez les compressions pendant la pose des électrodes.',
      'Personne ne touche la victime pendant l’analyse et pendant le choc.',
      'Reprenez **immédiatement** les compressions après le choc, sans attendre de vérifier quoi que ce soit.'
    ]},
    { type: 'image', wide: true, src: 'planches/rcp-mains.jpg',
      title: 'Position des mains et posture',
      alt: 'Photographie : une secouriste comprime le thorax d’un homme allongé sur le dos, les mains superposées au milieu de la poitrine, bras tendus et épaules à la verticale des mains. Un défibrillateur est posé à côté de la victime, une électrode déjà collée sur le flanc gauche.',
      caption: 'Bras tendus, épaules au-dessus des mains, poussée avec le poids du buste et non avec les bras. Le DAE reste allumé et connecté pendant les compressions.',
      credit: '© Swiss Resuscitation Council SRC, reproduit avec autorisation.' },
    { type: 'figure', name: 'compression', wide: true, title: 'Point de compression et posture',
      caption: 'Le repère « milieu de la poitrine » suffit : inutile de chercher un point anatomique précis, cela ne fait que retarder le premier appui.' },
    { type: 'image', wide: true, src: 'planches/dae-electrodes.jpg',
      title: 'Pose des électrodes',
      alt: 'Photographie : une secouriste applique une électrode adhésive de défibrillateur sur le flanc gauche d’un homme torse nu allongé sur le dos, sous l’aisselle. L’appareil est posé près de la tête de la victime.',
      caption: 'Collez fermement l’électrode sur une peau nue et sèche. S’il y a plusieurs secouristes, les compressions continuent pendant la pose.',
      credit: '© Swiss Resuscitation Council SRC, reproduit avec autorisation.' },
    { type: 'figure', name: 'dae', wide: true, title: 'Position des électrodes',
      caption: 'Chez l’adulte, sous la clavicule droite et sous l’aisselle gauche. Chez l’enfant de moins de 25 kg ou de moins de 8 ans, une électrode devant et une dans le dos.' },
    { type: 'note', title: 'Si les insufflations sont impossibles ou refusées', text:
      'Effectuez des **compressions continues** sans interruption. Une réanimation par compressions ' +
      'seules est très largement préférable à l’absence de réanimation. La réticence à faire du ' +
      'bouche-à-bouche sur un inconnu ne doit jamais être une raison de ne rien faire.' },
    { type: 'list', title: 'Quand arrêter', items: [
      'À l’arrivée et à la prise en charge par les secours professionnels.',
      'Au retour évident de signes de vie : la personne bouge, ouvre les yeux, respire normalement.',
      'À l’épuisement complet du ou des secouristes.',
      'Si la zone devient dangereuse pour vous.'
    ]},
    { type: 'warn', title: 'Erreurs les plus fréquentes', text:
      'Compressions trop superficielles · relâchement incomplet entre les compressions · ' +
      'interruptions trop longues · insufflations trop fortes ou trop rapides · retard à l’allumage ' +
      'du DAE. Le meilleur massage est celui qui s’arrête le moins souvent.' },
    { type: 'note', title: 'En cas de doute, on réanime : « in dubio pro REA »', text:
      'C’est la règle explicite du SRC. Si vous ignorez ce que la personne aurait voulu, **réanimez**. ' +
      'La seule exception est un refus clairement établi : directives anticipées, statut « réanimation : ' +
      'non », volonté exprimée oralement ou par écrit. Dans ce cas, ce choix se respecte, même si la ' +
      'réanimation aurait eu de bonnes chances de réussir. Non veut dire non. En l’absence d’indice ' +
      'clair, l’absence d’information n’est pas un refus.' },
    { type: 'note', title: 'Les côtes qui cèdent', text:
      'Des craquements costaux ou chondro-costaux sont fréquents et attendus lors d’un massage ' +
      'efficace, surtout chez la personne âgée. Ce n’est pas une raison d’arrêter ni d’appuyer moins ' +
      'fort : une côte se répare, un cerveau privé d’oxygène ne se répare pas.' }
  ],
  pro: [
    { type: 'prose', title: 'Pourquoi 5 à 6 cm et pas « le plus fort possible »', text: [
      'La profondeur détermine le débit cardiaque généré. En dessous de 5 cm, la pression de perfusion ' +
      'coronaire et cérébrale devient insuffisante. Au-delà de 6 cm, les données observationnelles ' +
      'montrent une augmentation des lésions traumatiques (côtes, sternum, organes intrathoraciques) ' +
      'sans gain hémodynamique supplémentaire.',
      'Le message pratique est donc asymétrique : le défaut le plus fréquent et le plus grave reste ' +
      'la compression trop superficielle, pas la compression trop profonde.'
    ]},
    { type: 'prose', title: 'Décompression complète et retour veineux', text: [
      'La phase de relâchement est la phase de remplissage. Un appui résiduel sur le thorax entre les ' +
      'compressions, le « leaning », très fréquent quand le secouriste fatigue, maintient une ' +
      'pression intrathoracique positive, réduit le retour veineux et donc le volume éjecté à la ' +
      'compression suivante.',
      'C’est aussi la raison de la relève toutes les 2 minutes : la qualité des compressions se ' +
      'dégrade mesurablement bien avant que le secouriste ne se sente fatigué.'
    ]},
    { type: 'prose', title: 'Pression de perfusion coronaire et interruptions', text: [
      'La pression de perfusion coronaire monte progressivement au fil d’une série de compressions et ' +
      's’effondre presque instantanément dès l’arrêt. Chaque interruption impose de reconstruire cette ' +
      'pression depuis le début.',
      'C’est pourquoi les directives insistent sur la **fraction de compression**, la proportion de ' +
      'temps réellement passée à comprimer, et sur la reprise immédiate après le choc, sans contrôle ' +
      'du pouls ni du rythme.'
    ]},
    { type: 'prose', title: 'Pourquoi défibriller si tôt', text: [
      'La majorité des arrêts cardiaques extra-hospitaliers d’origine cardiaque débutent en fibrillation ' +
      'ventriculaire, une activité électrique anarchique sans contraction efficace. Seul un choc peut ' +
      'la stopper, et la probabilité de succès diminue rapidement avec le temps.',
      'La RCP ne corrige pas la fibrillation ; elle entretient le myocarde et le cerveau et maintient ' +
      'le rythme dans un état « choquable » plus longtemps. RCP et DAE sont complémentaires, pas ' +
      'alternatifs.'
    ]},
    { type: 'prose', title: 'Le modèle en trois phases, pourquoi le temps change la stratégie', wide: true, text: [
      'La fibrillation ventriculaire ne se comporte pas de la même façon à la minute 2 et à la ' +
      'minute 15. Le modèle de Weisfeldt et Becker distingue trois phases, dont les bornes ont été ' +
      'précisées depuis :',
      '**Phase électrique** (de l’effondrement à environ 7 minutes) : le myocarde est encore riche en ' +
      'substrats. Un choc immédiat suffit souvent à rétablir une circulation : c’est la fenêtre où le ' +
      'DAE fait presque tout le travail. **Phase circulatoire** (environ 7 à 17 minutes) : les ' +
      'réserves énergétiques s’épuisent, le myocarde ischémique répond mal au choc. Des compressions ' +
      'de qualité **avant** la défibrillation améliorent la probabilité de succès du choc : c’est ici ' +
      'que la réanimation par les témoins pèse le plus lourd. **Phase métabolique** (au-delà ' +
      'd’environ 17 minutes) : accumulation de métabolites toxiques, lésions de reperfusion. ' +
      'Compressions et choc ne suffisent généralement plus.',
      'C’est la justification physiologique du message « massez tout de suite » : le témoin ne fait ' +
      'pas qu’attendre l’ambulance, il maintient la victime dans une phase où les secours auront ' +
      'encore quelque chose à traiter.'
    ]},
    { type: 'prose', title: 'Ce que mesurent les professionnels, la capnographie', text: [
      'La pression télé-expiratoire en CO₂ (ETCO₂) est un reflet non invasif du débit cardiaque ' +
      'généré par les compressions : sans circulation, le CO₂ produit par les tissus ne parvient plus ' +
      'aux poumons. C’est le meilleur indicateur objectif de la **qualité** du massage disponible en ' +
      'temps réel.',
      'Deux repères structurent la conduite : une ETCO₂ qui reste **inférieure à 10 mmHg** (1,33 kPa) ' +
      'malgré des compressions de qualité et des voies aériennes protégées est de pronostic très ' +
      'défavorable. Persistante après 20 minutes, elle entre dans les critères d’arrêt de la ' +
      'réanimation ou d’orientation vers une assistance circulatoire. À l’inverse, une **élévation ' +
      'brusque et soutenue** est l’un des signes les plus fiables de reprise d’activité circulatoire, ' +
      'et précède souvent le pouls palpable.'
    ]},
    { type: 'note', title: 'Cas particuliers de la pose des électrodes', text:
      'Pacemaker ou défibrillateur implanté visible sous la peau : décalez l’électrode d’au moins ' +
      '8 cm. Patch médicamenteux : retirez-le et essuyez la peau. Thorax mouillé : séchez, le choc ' +
      'suivrait sinon le film d’eau. Une position antéro-postérieure est une alternative valable si ' +
      'l’appareil la propose.' },
    { type: 'note', title: 'Suite professionnelle', text:
      'À l’arrivée des secours : monitorage, gestion avancée des voies respiratoires, accès ' +
      'vasculaire, adrénaline selon le rythme, recherche et traitement des causes réversibles ' +
      '(hypoxie, hypovolémie, hypo/hyperkaliémie, hypothermie, thrombose, tamponnade, pneumothorax ' +
      'sous tension, toxiques), puis soins post-arrêt avec contrôle ciblé de la température et ' +
      'évaluation neurologique différée.' }
  ],
  sources: ['erc-bls', 'src', 'rcuk-bls', 'erc-exec', 'three-phase', 'capno']
},

{
  id: 'etouffement', group: 'vitales', num: 5, title: 'Étouffement', icon: 'lungs', accent: 'red',
  keywords: 'obstruction voies respiratoires corps étranger claques dorsales heimlich compressions abdominales',
  essentiel: [
    'Toux efficace → encourager à tousser',
    'Plus de toux ni de parole → 5 claques dans le dos',
    'Puis 5 compressions abdominales, en alternance',
    'Perte de connaissance → {144} et RCP'
  ],
  complet: [
    { type: 'steps', title: 'Obstruction partielle, la personne tousse', items: [
      'Encouragez-la à tousser : la toux est le mécanisme le plus efficace pour expulser le corps étranger.',
      'Restez auprès d’elle et surveillez en permanence.',
      'N’intervenez pas tant que la toux reste efficace. Vous risqueriez de déplacer le corps étranger.'
    ]},
    { type: 'steps', title: 'Obstruction complète : elle ne peut plus parler, respirer ni tousser', items: [
      'Penchez la personne en avant, soutenez sa poitrine d’une main.',
      'Donnez jusqu’à **5 claques fermes entre les omoplates** avec le talon de la main.',
      'Si cela ne suffit pas : jusqu’à **5 compressions abdominales**. Placez-vous derrière, poing au creux de l’estomac au-dessus du nombril, saisissez-le avec l’autre main et tirez vers vous et vers le haut.',
      'Alternez **5 claques / 5 compressions** jusqu’à désobstruction ou perte de connaissance.',
      'Faites appeler le {144} si l’obstruction ne cède pas rapidement.'
    ]},
    { type: 'steps', title: 'Si la personne perd connaissance', items: [
      'Accompagnez-la au sol pour éviter la chute.',
      'Appelez ou faites appeler le {144}.',
      'Commencez la **RCP**, en commençant par les compressions.',
      'À chaque ouverture de la bouche pour insuffler, regardez si le corps étranger est visible et accessible.'
    ]},
    { type: 'image', wide: true, src: 'planches/etouffement-dos.jpg',
      title: 'Claques dorsales',
      alt: 'Photographie : un homme se tient penché en avant, une main du secouriste soutenant sa poitrine, pendant que l’autre main frappe fermement entre les omoplates avec le talon de la main.',
      caption: 'Penchez la personne **en avant** et soutenez sa poitrine : la gravité travaille avec vous, sinon le corps étranger redescend.',
      credit: '© Samaritains Suisse, reproduit avec autorisation.' },
    { type: 'image', wide: true, src: 'planches/etouffement-adulte.jpg',
      title: 'Compressions abdominales',
      alt: 'Planche montrant le secouriste placé derrière la victime, poing au creux de l’estomac au-dessus du nombril, saisi par l’autre main, tirant vers lui et vers le haut.',
      caption: 'En seconde intention seulement, si les claques n’ont rien donné.',
      credit: '© Swiss Resuscitation Council SRC, reproduit avec autorisation.' },
    { type: 'warn', title: 'Jamais de balayage digital à l’aveugle', text:
      'Ne passez pas les doigts au fond de la gorge sans voir l’objet : vous risquez de l’enfoncer ' +
      'davantage ou de blesser les tissus. Ne retirez que ce que vous **voyez** et pouvez saisir.' },
    { type: 'note', title: 'Nourrisson : pas de compressions abdominales', text:
      'Chez le nourrisson (moins de 1 an), on remplace les compressions abdominales par des ' +
      '**compressions thoraciques**. Voir la section Étouffement du nourrisson.' },
    { type: 'warn', title: 'Contrôle médical obligatoire après des compressions abdominales', text:
      'Toute personne ayant reçu des compressions abdominales ou thoraciques pour un étouffement doit ' +
      'être **évaluée par un professionnel de santé**, même si tout semble rentré dans l’ordre : ces ' +
      'gestes peuvent provoquer des lésions internes.' }
  ],
  pro: [
    { type: 'prose', title: 'Pourquoi les claques dorsales d’abord', text: [
      'La claque interscapulaire génère une onde de pression brutale et brève dans les voies ' +
      'aériennes, capable de mobiliser un corps étranger, avec un risque lésionnel faible. La ' +
      'position penchée en avant est essentielle : elle utilise la gravité et évite de repousser ' +
      'l’objet vers le bas.',
      'Les compressions abdominales élèvent brutalement la pression sous-diaphragmatique et produisent ' +
      'une « toux artificielle » de plus grande amplitude, mais avec un risque non négligeable de ' +
      'lésions viscérales, d’où leur position en seconde intention et l’exigence de contrôle médical ' +
      'après usage.'
    ]},
    { type: 'prose', title: 'Pourquoi la RCP désobstrue parfois', text:
      'Chez la victime inconsciente, les compressions thoraciques génèrent des pics de pression dans ' +
      'les voies aériennes comparables voire supérieurs à ceux des compressions abdominales. Elles ' +
      'servent donc à la fois de manœuvre de désobstruction et de réanimation, raison pour laquelle ' +
      'on passe directement à la RCP, sans continuer les claques, dès la perte de connaissance.' },
    { type: 'note', title: 'Situations particulières', text:
      'Femme enceinte au dernier trimestre ou personne de très forte corpulence : remplacez les ' +
      'compressions abdominales par des **compressions thoraciques**, au même endroit que pour le ' +
      'massage cardiaque. Personne en fauteuil roulant : les claques dorsales restent réalisables en ' +
      'penchant le buste en avant.' }
  ],
  sources: ['erc-fa', 'rcuk-fa', 'ilcor-fa', 'src']
},

{
  id: 'saignement', group: 'vitales', num: 6, title: 'Hémorragies et plaies', icon: 'drop', accent: 'red',
  keywords: 'saignement hémorragie compression pansement compressif garrot plaie sang tourniquet',
  essentiel: [
    'Compression directe, forte et continue',
    'Pansement compressif si disponible',
    'Objet planté : ne pas retirer, comprimer autour',
    'Appeler le {144} si le sang gicle ou ne s’arrête pas'
  ],
  complet: [
    { type: 'steps', title: 'Hémorragie importante', items: [
      'Protégez-vous : gants, ou à défaut un sac plastique, un tissu épais.',
      'Allongez la victime. Cela limite le malaise et la chute.',
      'Comprimez **directement et fortement** la plaie avec une compresse ou un tissu propre.',
      'Maintenez la pression sans relâcher pour « voir si ça saigne encore ».',
      'Un pansement compressif **complète** votre main, il ne la remplace pas : gardez la pression concentrée sur le point qui saigne.',
      'S’il s’imbibe, ne retirez pas la première couche, renforcez la pression au même endroit plutôt que d’empiler du rembourrage, qui disperse l’appui.',
      'Appelez le {144}.',
      'Surveillez conscience et respiration, rassurez, protégez du froid.'
    ]},
    { type: 'warn', title: 'Objet planté : ne jamais le retirer', text:
      'Un couteau, un morceau de verre ou de métal planté peut comprimer lui-même le vaisseau lésé. ' +
      'Le retirer peut déclencher une hémorragie massive. **Comprimez autour**, stabilisez l’objet ' +
      'avec des tissus roulés de part et d’autre, et laissez les professionnels s’en charger.' },
    { type: 'steps', title: 'Garrot, uniquement si la compression échoue', items: [
      'Réservé aux hémorragies de membre non contrôlables par compression directe, ou en situation de victimes multiples.',
      'Posez-le **5 à 7 cm au-dessus** de la plaie, jamais sur une articulation.',
      'Serrez jusqu’à ce que le saignement **s’arrête**, un garrot mal serré aggrave le saignement.',
      '**Notez l’heure de pose** et écrivez-la sur la victime si possible.',
      'Ne le desserrez jamais : seul un professionnel de santé le retire.'
    ]},
    { type: 'image', wide: true, src: 'planches/compression-plaie.jpg',
      title: 'Comprimer directement la plaie',
      alt: 'Photographie : deux mains superposées pressent fermement un tissu propre replié contre une plaie qui saigne au poignet, la pression étant concentrée sur le point exact du saignement.',
      caption: 'La compression **manuelle** directe est la première ligne. La main concentre la pression sur le point qui saigne, ce qu’un bandage réparti sur la circonférence du membre fait mal. Appuyez fort, et **ne relâchez pas** pour aller voir.',
      credit: '© Samaritains Suisse, reproduit avec autorisation.' },
    { type: 'figure', name: 'garrot', wide: true, title: 'Pose d’un garrot',
      caption: 'Uniquement si la compression directe échoue. **5 à 7 cm au-dessus** de la plaie, jamais sur une articulation, serré jusqu’à l’arrêt du saignement, un garrot mal serré aggrave l’hémorragie en bloquant le retour veineux sans interrompre le flux artériel.' },
    { type: 'steps', title: 'Petite plaie', items: [
      'Lavez-vous les mains, protégez-vous.',
      'Rincez et nettoyez la plaie à l’eau claire ou au sérum physiologique.',
      'Couvrez avec un pansement propre.',
      'Surveillez les signes d’infection dans les jours suivants : rougeur qui s’étend, chaleur, douleur croissante, pus, fièvre.'
    ]},
    { type: 'list', title: 'Faire contrôler la plaie par un médecin si elle est…', items: [
      'profonde, large ou béante (susceptible de nécessiter une suture) ;',
      'très sale, souillée de terre, ou provoquée par un objet rouillé ;',
      'une morsure : animale ou humaine ;',
      'située près d’un œil, sur le visage, ou au-dessus d’une articulation ;',
      'accompagnée d’une perte de sensibilité, de force ou de mobilité ;',
      'chez une personne dont la vaccination antitétanique n’est pas à jour ;',
      'chez une personne sous anticoagulants.'
    ]},
    { type: 'myth', title: 'Idée reçue : « surélever le membre et comprimer les points de pression »', text:
      'Deux gestes longtemps enseignés, aujourd’hui tous deux écartés. Aucune donnée ne montre que ' +
      'la **surélévation** réduise le saignement, et elle peut aggraver la douleur ou la lésion s’il ' +
      'existe une fracture associée. La compression des **points artériels à distance** fait l’objet ' +
      'd’une recommandation explicitement **défavorable** de l’ILCOR. Leur défaut est le même : ils ' +
      'occupent les mains et l’attention, et retardent le seul geste dont l’efficacité est établie, ' +
      'la compression directe, forte et continue. Si le membre se trouve déjà surélevé et que cela ' +
      'ne gêne rien, ce n’est pas une faute ; mais cela ne précède ni ne remplace jamais la ' +
      'compression.' },
    { type: 'note', title: 'Signes d’une hémorragie qui met en jeu le pronostic vital', text:
      'Sang qui gicle en jets rythmés · pâleur, peau froide et moite · soif intense · agitation puis ' +
      'somnolence · respiration rapide · flaque de sang qui s’étend. Appelez le {144} sans attendre.' }
  ],
  pro: [
    { type: 'prose', title: 'Pourquoi la compression directe reste la première ligne', text: [
      'La compression directe ferme mécaniquement la brèche vasculaire et permet la formation du ' +
      'caillot. Son efficacité dépend de deux facteurs constamment sous-estimés : la **force** et la ' +
      '**continuité**. Chaque levée de pression pour inspecter la plaie détruit le caillot en ' +
      'formation et relance le saignement.',
      'La surélévation du membre et la compression des points artériels à distance ont disparu des ' +
      'recommandations, et pas seulement par ordre de priorité. L’ILCOR formule une recommandation ' +
      '**défavorable** aux points de compression par rapport à la compression directe, ' +
      'recommandation forte, sur un niveau de preuve très faible. Pour la surélévation, aucune donnée ' +
      'ne démontre de réduction du saignement, avec un risque de douleur ou de lésion supplémentaire ' +
      'en cas de fracture associée.',
      'La compression **manuelle** directe est par ailleurs préférée aux dispositifs de compression ' +
      'externe et aux pansements compressifs comme geste de première intention : la main permet de ' +
      'concentrer la pression exactement sur le point qui saigne, ce qu’un bandage réparti sur toute ' +
      'la circonférence du membre fait mal.'
    ]},
    { type: 'prose', title: 'Choc hémorragique, la chronologie des signes', text: [
      'La perte sanguine est initialement compensée par la vasoconstriction et la tachycardie : la ' +
      'pression artérielle peut rester normale alors que le volume perdu est déjà important. La ' +
      'pâleur, les extrémités froides, l’allongement du temps de recoloration et l’anxiété précèdent ' +
      'l’effondrement tensionnel.',
      'Une pression artérielle normale ne rassure donc pas. L’altération de la conscience est un ' +
      'signe tardif et grave : elle traduit une hypoperfusion cérébrale déjà installée.'
    ]},
    { type: 'note', title: 'Pansements hémostatiques', text:
      'Les pansements imprégnés d’agents hémostatiques sont recommandés en complément de la ' +
      'compression directe pour les hémorragies non contrôlables, en particulier là où un garrot est ' +
      'impossible (jonctions, cou, tronc). Ils se posent au contact direct de la source du saignement, ' +
      'avec maintien de la compression.' },
    { type: 'prose', title: 'Coagulopathie du traumatisé et acide tranexamique', text: [
      'Le traumatisé grave ne saigne pas seulement par la brèche vasculaire : il développe une ' +
      '**coagulopathie précoce**, présente dès l’admission, entretenue notamment par une ' +
      'hyperfibrinolyse, les caillots formés sont dissous à mesure qu’ils se constituent.',
      'L’acide tranexamique bloque cette fibrinolyse. Les grands essais **CRASH** ont établi qu’il ' +
      'réduit la mortalité lorsqu’il est administré précocement, sans augmentation des événements ' +
      'thrombotiques, le bénéfice étant concentré sur les **premières heures**, ce qui a fait ' +
      'retenir une fenêtre de **3 heures** dans les protocoles. Administré tardivement, il perd tout ' +
      'intérêt. C’est un traitement médicalisé, mais il fait partie des raisons pour lesquelles ' +
      'l’heure de l’accident transmise à la centrale est une information utile.'
    ]},
    { type: 'note', title: 'Triade létale et hypothermie', text:
      'Chez le traumatisé qui saigne, l’hypothermie aggrave les troubles de la coagulation, qui ' +
      'aggravent le saignement, qui aggrave l’acidose : la « triade létale ». Couvrir la victime n’est ' +
      'pas un geste de confort : c’est un geste hémostatique.' }
  ],
  sources: ['erc-fa', 'rcuk-fa', 'ilcor-fa', 'anzcor-bleed', 'crash3']
},

/* =========================================================================
   3, ENFANT & NOURRISSON
   ========================================================================= */

{
  id: 'rcp-enfant', group: 'enfant', num: 7, title: 'RCP chez l’enfant et le nourrisson', icon: 'baby', accent: 'red',
  keywords: 'pédiatrique bébé nourrisson enfant réanimation insufflations 15:2 thumb encircling pbls',
  essentiel: [
    'Commencer par **5 insufflations** initiales',
    'Puis 15:2 si formé au PBLS, sinon 30:2',
    'Nourrisson : 2 pouces encerclant le thorax',
    'Comprimer d’environ 1/3 de l’épaisseur du thorax'
  ],
  complet: [
    { type: 'note', title: 'Pourquoi l’enfant n’est pas un adulte en petit', text:
      'Chez l’enfant, l’arrêt cardiaque est le plus souvent la conséquence d’une **détresse ' +
      'respiratoire ou d’un manque d’oxygène**, et non d’un trouble du rythme d’origine cardiaque. ' +
      'C’est pourquoi la ventilation prend une place beaucoup plus importante que chez l’adulte, et ' +
      'pourquoi on commence par des insufflations.' },
    { type: 'steps', title: 'Séquence', items: [
      'Vérifiez la réaction et la respiration comme chez l’adulte.',
      'Si l’enfant ne réagit pas et ne respire pas normalement : donnez **5 insufflations initiales**.',
      'Poursuivez avec des compressions et des insufflations : **15:2 si vous êtes formé** au niveau PBLS, sinon **30:2**.',
      'Faites appeler le {144} et demandez un DAE. Si vous êtes seul, réalisez environ **1 minute** de RCP avant d’aller chercher de l’aide.',
      'Utilisez un DAE dès qu’il est disponible, avec des électrodes pédiatriques si l’appareil en dispose.'
    ]},
    { type: 'kv', title: 'Technique de compression', items: [
      ['Nourrisson (< 1 an)', 'Les **deux pouces**, mains encerclant le thorax. Cette technique remplace la technique à deux doigts dans les directives 2025.'],
      ['Enfant (1 an – puberté)', 'Le talon d’**une main**, ou les deux mains si l’enfant est grand ou le secouriste peu puissant.'],
      ['Emplacement', 'Moitié inférieure du sternum, comme chez l’adulte.'],
      ['Profondeur', 'Au moins **un tiers de l’épaisseur antéro-postérieure** du thorax, soit environ **4 cm** chez le nourrisson et **5 cm** chez l’enfant.'],
      ['Rythme', '**100 à 120 par minute**, comme chez l’adulte.']
    ]},
    { type: 'image', wide: true, src: 'planches/nourrisson-rcp.jpg',
      title: 'Compressions du nourrisson',
      alt: 'Planche montrant la technique des deux pouces encerclants chez le nourrisson : les mains entourent le thorax, les deux pouces comprimant la moitié inférieure du sternum.',
      caption: 'Les **deux pouces**, mains encerclant le thorax. Cette technique remplace celle à deux doigts depuis 2025.',
      credit: '© Swiss Resuscitation Council SRC, reproduit avec autorisation.' },
    { type: 'warn', title: 'Méfiez-vous des illustrations trouvées en ligne', text:
      'La quasi-totalité des schémas de réanimation du nourrisson disponibles sur internet montrent ' +
      'encore la technique **à deux doigts**, abandonnée par l’ERC et le SRC en 2025 parce qu’elle ' +
      'génère une profondeur de compression insuffisante. Si vous cherchez une illustration, vérifiez ' +
      'qu’elle montre bien les **deux pouces, mains encerclant le thorax**, et écartez-la sinon.' },
    { type: 'steps', title: 'Insufflations', items: [
      'Nourrisson : bouche du secouriste sur **la bouche et le nez** de l’enfant, tête en position neutre.',
      'Enfant : bouche-à-bouche, nez pincé, tête légèrement basculée.',
      'Soufflez pendant environ **1 seconde**, juste assez pour voir la poitrine commencer à se soulever.',
      'Ne soufflez ni trop fort ni trop vite : le risque est de distendre l’estomac.'
    ]},
    { type: 'warn', title: 'Si vous ne pouvez pas ou ne voulez pas insuffler', text:
      'Faites des **compressions seules** et appelez le {144} immédiatement. C’est très nettement ' +
      'préférable à ne rien faire. Le geste imparfait bat l’inaction.' },
    { type: 'kv', title: 'DAE chez l’enfant, repères du SRC', items: [
      ['Seuil', 'Moins de **25 kg**, ou moins de **8 ans** environ.'],
      ['Mode enfant', 'Activez-le si l’appareil en est équipé.'],
      ['Électrodes', 'Collez-les **une sur la poitrine, une dans le dos**.'],
      ['Pas de matériel pédiatrique ?', 'Utilisez le DAE adulte plutôt que rien, en évitant que les électrodes ne se touchent.']
    ]},
    { type: 'note', title: 'Un seul algorithme en Suisse', text:
      'Pour les secouristes en Suisse, il n’existe **qu’un seul algorithme BLS-AED-SRC**, valable pour ' +
      'toutes les classes d’âge. Les particularités pédiatriques ci-dessus s’y ajoutent, elles ne le ' +
      'remplacent pas. La distinction adulte/enfant ne repose d’ailleurs pas sur un âge précis mais sur ' +
      'l’apparence physique : on parle d’un enfant tant que la personne a une allure d’enfant, ' +
      'typiquement jusqu’à la puberté.' }
  ],
  pro: [
    { type: 'prose', title: 'Ce qui a changé en 2025', text: [
      'La technique des **deux pouces encerclants** devient la technique recommandée pour le nourrisson ' +
      'en remplacement de la technique à deux doigts, y compris pour les compressions thoraciques lors ' +
      'de l’étouffement. Elle génère des pressions plus élevées et plus constantes, avec moins de ' +
      'fatigue du secouriste.',
      'Le ratio **15:2 est réservé aux personnes formées au niveau PBLS** (cours ERC pédiatrique ou ' +
      'équivalent). Pour tous les autres, y compris les personnes formées uniquement à la ' +
      'réanimation adulte, le ratio est **30:2**, précédé des 5 insufflations initiales. Les ' +
      'centrales d’appel guident les appelants non formés en 30:2.'
    ]},
    { type: 'prose', title: 'Pourquoi 5 insufflations avant les compressions', text:
      'L’arrêt pédiatrique étant typiquement hypoxique, les réserves en oxygène sont déjà épuisées au ' +
      'moment de l’arrêt, contrairement à l’adulte en fibrillation ventriculaire, dont le sang reste ' +
      'oxygéné plusieurs minutes. Réoxygéner d’emblée corrige la cause plutôt que d’en circuler les ' +
      'conséquences. Les 5 insufflations initiales servent aussi à recruter les alvéoles et à ' +
      'confirmer la liberté des voies aériennes.' },
    { type: 'prose', title: 'Pourquoi « un tiers du thorax » plutôt qu’une valeur en centimètres', text:
      'La taille varie énormément entre un nouveau-né et un enfant proche de la puberté : une ' +
      'consigne en centimètres serait insuffisante à un extrême et dangereuse à l’autre. La fraction ' +
      'du diamètre antéro-postérieur s’adapte automatiquement à la morphologie. Les repères chiffrés ' +
      'd’environ 4 cm chez le nourrisson et 5 cm chez l’enfant sont des ordres de grandeur dérivés de ' +
      'cette règle, pas des cibles indépendantes.' },
    { type: 'note', title: 'ERC et AHA divergent sur un point', text:
      'Si vous êtes **seul** face à un enfant en arrêt, l’ERC, donc le référentiel suisse, demande ' +
      'environ **1 minute** de RCP avant d’aller chercher de l’aide. L’AHA recommande de son côté ' +
      'environ **2 minutes** lorsque l’arrêt n’a pas été vu. Les deux poursuivent la même logique : ' +
      'l’arrêt pédiatrique étant hypoxique, oxygéner d’abord prime sur alerter d’abord. Si un ' +
      'téléphone est à portée, mettez le haut-parleur et ne quittez pas l’enfant.' },
    { type: 'note', title: 'Suite professionnelle', text:
      'Les équipes recherchent en priorité les causes réversibles d’origine respiratoire et ' +
      'circulatoire (obstruction, hypoxie, hypovolémie, sepsis), assurent une ventilation efficace et ' +
      'adaptent les doses au poids. Le pronostic pédiatrique est meilleur que chez l’adulte lorsque ' +
      'la réanimation par les témoins est précoce et ventile réellement.' }
  ],
  sources: ['erc-pls', 'rcuk-pbls', 'src']
},

{
  id: 'etouffement-bebe', group: 'enfant', num: 8, title: 'Étouffement du nourrisson', icon: 'baby', accent: 'red',
  keywords: 'bébé nourrisson étouffement claques dorsales compressions thoraciques corps étranger',
  essentiel: [
    '**Jamais** de compressions abdominales avant 1 an',
    '5 claques dans le dos, tête vers le bas',
    'Puis 5 compressions thoraciques',
    'Perte de connaissance → {144} et RCP'
  ],
  complet: [
    { type: 'steps', title: 'Le bébé tousse et pleure', items: [
      'Laissez-le tousser : une toux efficace vaut mieux que n’importe quelle manœuvre.',
      'Ne mettez pas les doigts dans sa bouche.',
      'Surveillez en permanence, prêt à intervenir si la toux faiblit.'
    ]},
    { type: 'steps', title: 'Le bébé ne peut plus tousser, pleurer ni respirer', items: [
      'Posez-le à plat ventre sur votre avant-bras, **tête plus basse que le corps**, en soutenant sa mâchoire, sans comprimer la gorge.',
      'Donnez jusqu’à **5 claques entre les omoplates** avec le talon de la main.',
      'Retournez-le sur le dos, toujours tête plus basse que le corps.',
      'Donnez jusqu’à **5 compressions thoraciques** : les **deux pouces**, mains encerclant le thorax, sur la moitié inférieure du sternum, plus lentes et plus marquées que celles du massage cardiaque.',
      'Alternez 5 claques / 5 compressions et faites appeler le {144}.'
    ]},
    { type: 'image', wide: true, src: 'planches/nourrisson-etouffement.jpg',
      title: 'Les deux positions',
      alt: 'Planche montrant le nourrisson à plat ventre sur l’avant-bras tête déclive pour les claques dorsales, puis retourné sur le dos pour les compressions thoraciques à deux pouces.',
      caption: 'Tête toujours plus basse que le corps, mâchoire soutenue par l’os sans comprimer les tissus mous de la gorge.',
      credit: '© Swiss Resuscitation Council SRC, reproduit avec autorisation.' },
    { type: 'warn', title: 'Pas de compressions abdominales chez le nourrisson', text:
      'Le foie et la rate du nourrisson sont volumineux, peu protégés par la cage thoracique et très ' +
      'exposés. Les compressions abdominales exposent à des lésions graves : elles sont remplacées par ' +
      'des compressions **thoraciques**.' },
    { type: 'steps', title: 'S’il perd connaissance', items: [
      'Posez-le sur une surface plane et rigide.',
      'Appelez ou faites appeler le {144}.',
      'Ouvrez la bouche : ne retirez le corps étranger que s’il est **visible et saisissable**.',
      'Commencez la RCP : **5 insufflations** puis compressions.'
    ]},
    { type: 'note', title: 'Contrôle médical systématique', text:
      'Après toute manœuvre de désobstruction, ou si vous suspectez qu’une partie du corps étranger ' +
      'est encore présente, l’enfant doit être vu par un médecin.' }
  ],
  pro: [
    { type: 'prose', title: 'Position de drainage', text:
      'La tête déclive utilise la gravité pour éloigner le corps étranger de la trachée pendant que ' +
      'les claques et compressions génèrent la pression expulsive. Le soutien mandibulaire doit se ' +
      'faire par la mâchoire osseuse : une pression sur les tissus mous sous-mentonniers repousse la ' +
      'base de langue et aggrave l’obstruction.' },
    { type: 'prose', title: 'Pourquoi des compressions thoraciques plus lentes', text:
      'Les compressions thoraciques de désobstruction visent un pic de pression intrathoracique élevé ' +
      'plutôt qu’un débit circulatoire. Elles sont donc délivrées plus lentement et plus profondément ' +
      'que celles du massage cardiaque, chaque compression étant conçue comme une toux artificielle ' +
      'isolée.' },
    { type: 'note', title: 'Prévention : c’est là que se joue l’essentiel', text:
      'Les objets les plus en cause avant 3 ans sont les cacahuètes et fruits à coque, les petites ' +
      'billes et pièces, les capuchons de stylo, les piles boutons et les morceaux de ballon de ' +
      'baudruche. Une pile bouton avalée est une urgence même sans étouffement : elle provoque des ' +
      'brûlures œsophagiennes en quelques heures, appelez le {145} ou le {144}.' }
  ],
  sources: ['erc-pls', 'rcuk-pbls', 'erc-fa', 'tox']
},

/* =========================================================================
   4, URGENCES MÉDICALES
   ========================================================================= */

{
  id: 'infarctus', group: 'medicales', num: 9, title: 'Infarctus', icon: 'heart-pulse', accent: 'red',
  keywords: 'crise cardiaque douleur thoracique poitrine oppression bras mâchoire aspirine',
  essentiel: [
    'Oppression ou douleur thoracique qui dure',
    'Irradiation bras, dos, nuque, mâchoire',
    'Sueurs, pâleur, nausées, angoisse',
    'Appeler le {144} immédiatement'
  ],
  complet: [
    { type: 'list', title: 'Signes possibles', items: [
      'Oppression, serrement, brûlure ou douleur dans la poitrine, durant plus de quelques minutes ;',
      'irradiation vers un ou les deux bras, le dos, la nuque, la mâchoire ou l’estomac ;',
      'difficulté respiratoire ;',
      'sueurs froides, pâleur, nausées, vomissements ;',
      'angoisse intense, sensation de mort imminente ;',
      'fatigue inhabituelle et brutale.'
    ]},
    { type: 'steps', title: 'Conduite à tenir', items: [
      'Appelez le {144} **immédiatement**, ne conduisez pas la personne vous-même à l’hôpital.',
      'Installez-la dans une position confortable, le plus souvent **assise, torse légèrement relevé**.',
      'Desserrez col, cravate, ceinture.',
      'Interdisez tout effort, même léger : ne la laissez pas marcher ni monter un escalier.',
      'Rassurez-la et restez auprès d’elle : l’angoisse aggrave le travail du cœur.',
      'Si elle perd connaissance et ne respire pas normalement : **RCP + DAE**.'
    ]},
    { type: 'warn', title: 'Symptômes atypiques, fréquents et trompeurs', text:
      'L’infarctus peut se manifester **sans douleur thoracique**, en particulier chez les femmes, les ' +
      'personnes âgées et les personnes diabétiques : fatigue écrasante, essoufflement, nausées, ' +
      'douleur au dos ou à la mâchoire, malaise inexpliqué. Un tableau atypique chez une personne à ' +
      'risque justifie d’appeler le {144}.' },
    { type: 'note', title: 'Aspirine : seulement sur instruction', text:
      'Les directives internationales prévoient l’administration précoce de **300 mg d’aspirine** ' +
      '(à croquer ou dissoudre) en cas de douleur thoracique évocatrice, chez une personne consciente ' +
      'et sans allergie connue. Ne le faites que si la centrale {144} vous le demande : la ' +
      'régulation dispose d’éléments que vous n’avez pas. Si la personne a sa propre trinitrine ' +
      'prescrite, aidez-la à la prendre.' }
  ],
  pro: [
    { type: 'prose', title: 'Mécanisme', text: [
      'L’infarctus résulte le plus souvent de la rupture ou de l’érosion d’une plaque ' +
      'd’athérosclérose coronaire, suivie d’une thrombose qui occlut l’artère. Le territoire ' +
      'myocardique en aval est privé de perfusion : la nécrose débute en quelques dizaines de minutes ' +
      'et progresse de l’endocarde vers l’épicarde.',
      'D’où la formule « time is muscle » : la quantité de myocarde sauvé dépend directement du délai ' +
      'de reperfusion. Le muscle nécrosé ne se régénère pas. Il cicatrise, avec un retentissement ' +
      'définitif sur la fonction cardiaque.'
    ]},
    { type: 'prose', title: 'Pourquoi appeler plutôt que conduire', text: [
      'Le risque majeur des premières heures est la **fibrillation ventriculaire**, qui peut survenir ' +
      'brutalement, sans aggravation préalable. Elle est traitable immédiatement dans une ambulance ' +
      'équipée, et fatale dans une voiture particulière.',
      'De plus, l’ambulance réalise l’ECG sur place : la centrale peut alors orienter directement vers ' +
      'un centre de cardiologie interventionnelle et l’équipe de coronarographie peut être alertée ' +
      'avant l’arrivée, ce qui supprime plusieurs étapes.'
    ]},
    { type: 'note', title: 'Rationnel de l’aspirine', text:
      'L’aspirine inhibe irréversiblement la cyclo-oxygénase plaquettaire et donc l’agrégation. ' +
      'Administrée précocement dans le syndrome coronarien aigu, elle réduit la mortalité. La forme ' +
      'croquée ou dissoute accélère l’absorption. Contre-indications à connaître : allergie, ' +
      'hémorragie active, et prudence en cas de suspicion de dissection aortique ou d’AVC.' },
    { type: 'note', title: 'Suite hospitalière', text:
      'ECG 12 dérivations, troponines, puis reperfusion : angioplastie primaire dès que possible ' +
      'lorsqu’un centre est accessible dans les délais, sinon fibrinolyse suivie d’un transfert. ' +
      'Traitement antiagrégant, anticoagulant et anti-ischémique associé.' }
  ],
  sources: ['erc-fa', 'rcuk-fa', 'swissheart', 'ilcor-fa']
},

{
  id: 'avc', group: 'medicales', num: 10, title: 'AVC et test FAST', icon: 'brain', accent: 'red',
  keywords: 'accident vasculaire cérébral attaque cérébrale face bras parole visage paralysie aphasie ait',
  essentiel: [
    '**F**ace : visage asymétrique',
    '**A**rms : un bras qui tombe',
    '**S**peech : parole confuse ou impossible',
    '**T**ime : {144} et noter l’heure de début'
  ],
  complet: [
    { type: 'fast', title: 'Le test FAST', wide: true,
      items: [['F', 'Visage'], ['A', 'Bras'], ['S', 'Parole'], ['T', 'Temps']],
      foot: 'Un seul signe positif suffit pour appeler le {144} immédiatement.' },
    { type: 'steps', title: 'Comment tester', items: [
      '**Face**, demandez à la personne de sourire ou de montrer les dents. Cherchez une asymétrie du visage ou de la bouche.',
      '**Arms**, demandez-lui de lever les deux bras devant elle et de les maintenir. Cherchez un bras qui tombe ou ne monte pas.',
      '**Speech**, demandez-lui de répéter une phrase simple. Cherchez une parole confuse, déformée, ou une impossibilité de parler ou de comprendre.',
      '**Time**, appelez le {144} et **notez l’heure exacte** du début des symptômes, ou l’heure à laquelle la personne a été vue normale pour la dernière fois.'
    ]},
    { type: 'list', title: 'Autres signes possibles', items: [
      'Trouble soudain de la vision d’un ou des deux yeux ;',
      'perte d’équilibre, vertige, incoordination, chute inexpliquée ;',
      'engourdissement soudain d’un côté du corps ;',
      'céphalée brutale, intense et inhabituelle, « la pire de ma vie » ;',
      'confusion soudaine.'
    ]},
    { type: 'steps', title: 'En attendant les secours', items: [
      'Allongez la personne, tête et buste légèrement surélevés.',
      'Ne donnez **ni à boire ni à manger** : les troubles de déglutition exposent à la fausse route.',
      'Ne donnez aucun médicament.',
      'Restez auprès d’elle, rassurez-la, surveillez conscience et respiration.',
      'Si elle est inconsciente mais respire normalement : PLS.',
      'Rassemblez la liste de ses médicaments pour les secours.'
    ]},
    { type: 'myth', title: 'Idée reçue : « il y a une fenêtre de deux heures »', text:
      'Il n’existe pas de délai commode qui autoriserait à attendre. Les traitements de reperfusion ' +
      'ont des fenêtres qui dépendent du type d’AVC, de l’imagerie et du patient, et plus on agit ' +
      'tôt, meilleur est le résultat, dans tous les cas. **Appelez immédiatement**, quelle que soit ' +
      'l’heure supposée du début.' },
    { type: 'warn', title: 'Si les symptômes disparaissent, appelez quand même', text:
      'Des signes qui régressent en quelques minutes évoquent un **accident ischémique transitoire ' +
      '(AIT)**. L’AIT n’est pas une fausse alerte : c’est un signal d’alarme majeur, avec un risque ' +
      'élevé d’AVC constitué dans les jours qui suivent. Il justifie une prise en charge urgente.' }
  ],
  pro: [
    { type: 'prose', title: 'Pourquoi l’heure de début est la donnée la plus précieuse', text: [
      'La décision thérapeutique dépend directement du délai depuis le début des symptômes : ' +
      'thrombolyse intraveineuse et thrombectomie mécanique obéissent à des fenêtres temporelles ' +
      'strictes, éventuellement élargies par l’imagerie de perfusion.',
      'Si la personne s’est réveillée avec les symptômes, l’heure de référence est celle où elle a été ' +
      'vue normale pour la dernière fois. C’est souvent un témoin. Vous, qui détient cette ' +
      'information ; personne d’autre ne pourra la reconstituer à l’hôpital.'
    ]},
    { type: 'prose', title: 'Ischémique ou hémorragique : pourquoi vous ne pouvez pas trancher', text:
      'Environ quatre AVC sur cinq sont ischémiques (occlusion artérielle), le reste étant ' +
      'hémorragique. Les deux se présentent de manière indiscernable au chevet du patient : seule ' +
      'l’imagerie cérébrale permet de les distinguer. C’est pourquoi aucun médicament, et surtout ' +
      'pas l’aspirine, ne doit être donné avant l’imagerie : il aggraverait une hémorragie.' },
    { type: 'prose', title: '« Time is brain », chiffré', wide: true, text: [
      'La formule paraît rhétorique ; elle a été quantifiée. Dans un AVC ischémique typique de gros ' +
      'vaisseau, le cerveau perd environ **1,9 million de neurones par minute**, soit 14 milliards de ' +
      'synapses et 12 km de fibres myélinisées, et environ **120 millions de neurones par heure**. ' +
      'Rapporté au vieillissement normal, le cerveau ischémique **vieillit d’environ 3,6 ans par ' +
      'heure** sans traitement.',
      'Ces chiffres expliquent pourquoi la question posée au téléphone n’est pas « faut-il ' +
      'déranger ? » mais « à quelle heure exactement ». Nuance honnête : ce sont des estimations ' +
      'moyennes, et des travaux ultérieurs ont montré une **variabilité individuelle considérable** ' +
      'selon le territoire atteint et la circulation collatérale. L’ordre de grandeur reste juste ; ' +
      'la précision apparente ne doit pas tromper.'
    ]},
    { type: 'prose', title: 'La pénombre ischémique : ce que la reperfusion va chercher', text: [
      'L’occlusion artérielle crée deux territoires. Le **cœur de l’infarctus** est irrémédiablement ' +
      'nécrosé en quelques minutes. Autour, la **pénombre ischémique** est un tissu hypoperfusé mais ' +
      'encore viable, maintenu en survie précaire par la circulation collatérale : il a cessé de ' +
      'fonctionner mais n’est pas encore mort.',
      'Toute la médecine de l’AVC aigu consiste à sauver cette pénombre avant qu’elle ne bascule dans ' +
      'le cœur nécrotique. Sa taille et sa durée de survie varient énormément d’un patient à l’autre, ' +
      'ce qui explique que l’imagerie de perfusion permette aujourd’hui d’élargir les fenêtres ' +
      'thérapeutiques chez certains patients, et pourquoi aucune règle horaire simple ne peut ' +
      'remplacer l’évaluation en centre spécialisé.'
    ]},
    { type: 'note', title: 'Sensibilité de FAST', text:
      'FAST est un outil de dépistage conçu pour être simple et sensible aux AVC de la circulation ' +
      'antérieure. Il détecte moins bien les atteintes de la circulation postérieure, qui se ' +
      'manifestent par vertiges, ataxie, diplopie ou troubles visuels. Un déficit neurologique brutal ' +
      'non couvert par FAST reste un AVC jusqu’à preuve du contraire.' },
    { type: 'note', title: 'Filière hospitalière', text:
      'Le préavis donné par l’ambulance déclenche l’alerte de la filière neurovasculaire : imagerie ' +
      'sans délai, puis thrombolyse et/ou thrombectomie en centre spécialisé. L’organisation en unités ' +
      'neurovasculaires (stroke units) améliore la survie et l’autonomie fonctionnelle.' }
  ],
  sources: ['saver', 'saver-variability', 'erc-fa', 'rcuk-fa', 'swissheart', 'ilcor-fa']
},

{
  id: 'anaphylaxie', group: 'medicales', num: 11, title: 'Anaphylaxie', icon: 'bolt', accent: 'red',
  keywords: 'allergie choc anaphylactique adrénaline epipen auto-injecteur piqûre guêpe arachide œdème',
  essentiel: [
    'Adrénaline **sans attendre**, face externe de la cuisse',
    '**Allonger** la personne, ne jamais l’asseoir ni la lever',
    'Appeler le {144}',
    '2e dose après 5 min si pas d’amélioration'
  ],
  complet: [
    { type: 'list', title: 'Reconnaître', items: [
      'Début rapide après une exposition (aliment, piqûre d’insecte, médicament, latex) ;',
      '**Respiration** : gêne, sifflement, toux, voix rauque, gorge serrée, difficulté à avaler ;',
      '**Circulation** : malaise, pâleur, pouls rapide, chute de tension, perte de connaissance ;',
      '**Peau** : urticaire, rougeur étendue, démangeaisons, gonflement des lèvres, de la langue, du visage ;',
      'souvent aussi : douleurs abdominales, vomissements, sensation de catastrophe imminente.'
    ]},
    { type: 'note', title: 'Peau seule ≠ anaphylaxie', text:
      'Une urticaire isolée n’est pas une anaphylaxie. Ce qui définit l’anaphylaxie, c’est ' +
      'l’atteinte **respiratoire ou circulatoire**. Mais des signes cutanés qui s’étendent vite chez ' +
      'une personne allergique connue justifient une vigilance maximale.' },
    { type: 'steps', title: 'Agir', items: [
      'Interrompez l’exposition si possible (arrêtez la perfusion, retirez le dard en le raclant).',
      'Injectez l’**adrénaline** en intramusculaire dans la **face externe de la cuisse**, au travers des vêtements si nécessaire. Dose adulte usuelle : **0,5 mg**.',
      '**Allongez la personne**, jambes surélevées. Si elle respire mal, position demi-assise **jambes tendues**. Si elle est inconsciente et respire : PLS.',
      'Appelez le {144} en précisant qu’il s’agit d’une anaphylaxie et qu’une adrénaline a été administrée.',
      'Si aucune amélioration après **5 minutes**, injectez une **seconde dose** avec un deuxième auto-injecteur.',
      'Si la respiration s’arrête : RCP.'
    ]},
    { type: 'warn', title: 'Ne jamais mettre debout ni asseoir brusquement', text:
      'Des décès par anaphylaxie sont associés au passage en position assise ou debout. La ' +
      'vasodilatation massive vide le retour veineux : se lever peut provoquer un désamorçage ' +
      'cardiaque brutal. Gardez la personne **allongée**, même si elle se sent mieux et veut se ' +
      'relever, et même pour la transporter.' },
    { type: 'note', title: 'Comment utiliser un auto-injecteur', text:
      'Retirez la sécurité, appliquez fermement l’extrémité contre la face externe de la cuisse, ' +
      'déclenchez, maintenez en place le temps indiqué par le fabricant, puis massez brièvement. ' +
      'Notez l’heure. Conservez le dispositif usagé et donnez-le aux secours.' },
    { type: 'warn', title: 'Hospitalisation systématique', text:
      'Même après amélioration complète, une surveillance hospitalière est nécessaire : une réaction ' +
      '**biphasique** peut survenir plusieurs heures après l’épisode initial, sans nouvelle ' +
      'exposition.' }
  ],
  pro: [
    { type: 'prose', title: 'Pourquoi l’adrénaline, et pourquoi tout de suite', text: [
      'L’adrénaline agit sur les trois mécanismes de l’anaphylaxie simultanément : vasoconstriction ' +
      'alpha-1 qui corrige la vasodilatation et l’hypotension, bronchodilatation bêta-2, et ' +
      'stabilisation des mastocytes qui limite la libération de médiateurs.',
      'Aucun autre médicament ne fait cela. Les antihistaminiques n’agissent que sur les symptômes ' +
      'cutanés et les corticoïdes ont un délai d’action de plusieurs heures : **ni l’un ni l’autre ne ' +
      'traite l’anaphylaxie** et leur administration ne doit jamais retarder l’adrénaline. Le retard à ' +
      'l’injection est le facteur de risque de décès le mieux identifié.'
    ]},
    { type: 'prose', title: 'Pourquoi la cuisse et pourquoi l’intramusculaire', text:
      'Le vaste externe est un muscle volumineux, très vascularisé et facile à atteindre à travers les ' +
      'vêtements. La voie intramusculaire y donne des concentrations plasmatiques plus rapides et plus ' +
      'fiables que la voie sous-cutanée, où la vasoconstriction locale ralentit l’absorption. La voie ' +
      'intraveineuse est réservée au milieu médicalisé, avec titration et monitorage.' },
    { type: 'note', title: 'Réaction biphasique', text:
      'Une minorité de patients présente une récidive des symptômes après une période asymptomatique, ' +
      'typiquement dans les heures suivant l’épisode initial. Ce risque justifie la surveillance ' +
      'hospitalière, dont la durée est adaptée à la sévérité initiale et au nombre de doses ' +
      'd’adrénaline nécessaires.' },
    { type: 'note', title: 'Après l’épisode', text:
      'Bilan allergologique, identification de l’allergène, prescription de **deux** auto-injecteurs ' +
      'et éducation à leur usage, plan d’action écrit, et information de l’entourage, école, ' +
      'employeur, club sportif. Un auto-injecteur qui reste dans un tiroir ne sert à rien.' }
  ],
  sources: ['erc-fa', 'rcuk-fa', 'ilcor-fa']
},

{
  id: 'epilepsie', group: 'medicales', num: 12, title: 'Crise d’épilepsie', icon: 'bolt', accent: 'blue',
  keywords: 'convulsions crise convulsive épileptique tonico-clonique état de mal',
  essentiel: [
    'Protéger la tête, écarter les objets dangereux',
    'Ne **rien** mettre dans la bouche, ne pas retenir',
    'Noter l’heure de début',
    '{144} si > 5 min, répétition, ou 1re crise'
  ],
  complet: [
    { type: 'steps', title: 'Pendant la crise', items: [
      '**Notez l’heure de début**, la durée détermine la conduite à tenir.',
      'Écartez les objets dangereux, meubles à angles, objets chauds.',
      'Protégez la tête avec quelque chose de souple : veste pliée, coussin, vos mains.',
      'Desserrez col et cravate.',
      'Ne retenez **pas** les mouvements et ne tentez pas d’immobiliser la personne.',
      'Ne mettez **rien** dans la bouche.',
      'Restez auprès d’elle et préservez son intimité : écartez les curieux.'
    ]},
    { type: 'steps', title: 'Après la crise', items: [
      'Une fois les convulsions terminées, mettez la personne en **PLS**.',
      'Vérifiez la respiration.',
      'Laissez-la récupérer : la phase post-critique s’accompagne de confusion, de somnolence et parfois d’agitation, et peut durer un long moment.',
      'Parlez calmement, réorientez-la, ne la brusquez pas.',
      'Restez jusqu’à ce qu’elle ait complètement repris ses esprits.'
    ]},
    { type: 'warn', title: 'Appeler le {144}', text:
      'Crise durant **plus de 5 minutes** · crises qui se répètent sans reprise de conscience entre ' +
      'elles · **première crise** connue · crise survenant dans l’eau · blessure pendant la crise · ' +
      'grossesse · diabète · difficulté respiratoire persistante · absence de réveil après la crise.' },
    { type: 'myth', title: 'Idée reçue : « il va avaler sa langue »', text:
      'C’est anatomiquement impossible. En revanche, introduire un objet ou vos doigts dans la bouche ' +
      'provoque des fractures dentaires, des plaies, des morsures graves et un risque de fausse route. ' +
      'La règle est absolue : **rien dans la bouche**, jamais.' },
    { type: 'note', title: 'Traitement d’urgence prescrit', text:
      'Certaines personnes disposent d’un traitement d’urgence prescrit (par voie buccale ou rectale) ' +
      'et d’un protocole écrit. Si ce protocole existe et que vous êtes autorisé et formé, appliquez-le. ' +
      'Sinon, appelez le {144}.' }
  ],
  pro: [
    { type: 'prose', title: 'Déroulement d’une crise tonico-clonique', text: [
      'La phase tonique, contraction généralisée, apnée, cyanose, parfois cri initial, dure ' +
      'typiquement quelques dizaines de secondes. Suit la phase clonique, faite de secousses ' +
      'rythmiques qui s’espacent progressivement. Morsure latérale de langue et perte d’urine sont ' +
      'fréquentes.',
      'La phase post-critique associe confusion, désorientation, amnésie de l’épisode et parfois un ' +
      'déficit moteur transitoire. C’est une phase normale, pas une complication, mais elle exige ' +
      'une surveillance des voies respiratoires, d’où la PLS.'
    ]},
    { type: 'prose', title: 'État de mal épileptique', text:
      'Au-delà de 5 minutes de crise continue, ou en cas de crises répétées sans récupération de la ' +
      'conscience, on parle d’état de mal épileptique. Ce seuil n’est pas arbitraire : la probabilité ' +
      'd’arrêt spontané chute fortement au-delà, tandis que le risque de lésion neuronale et de ' +
      'résistance au traitement augmente. C’est une urgence thérapeutique traitée par ' +
      'benzodiazépines en première intention.' },
    { type: 'prose', title: 'Pourquoi la crise devient de plus en plus difficile à arrêter', wide: true, text: [
      'Le seuil de 5 minutes n’est pas qu’une convention statistique : il correspond à un basculement ' +
      'moléculaire. Une crise prolongée déclenche l’**internalisation des récepteurs GABA-A**, les ' +
      'récepteurs inhibiteurs synaptiques sont physiquement retirés de la membrane et séquestrés à ' +
      'l’intérieur du neurone. L’inhibition, qui est le mécanisme normal d’arrêt d’une crise, se ' +
      'désarme donc au fur et à mesure que la crise dure.',
      'Les conséquences thérapeutiques sont brutales. Les **benzodiazépines**, qui agissent ' +
      'précisément sur ces récepteurs, perdent jusqu’à un facteur **20 de puissance en 30 minutes** ' +
      'et peuvent échouer à arrêter la crise **au-delà de 45 minutes**. En parallèle, les récepteurs ' +
      '**NMDA** excitateurs sont adressés vers la surface, ce qui entretient l’excitation et ajoute ' +
      'une composante excitotoxique.',
      'Autrement dit, l’état de mal épileptique **se rend lui-même résistant à son traitement**. ' +
      'C’est ce qui transforme un chronomètre en geste de secours : noter l’heure de début n’est pas ' +
      'de la paperasse, c’est la donnée qui déterminera la stratégie thérapeutique.'
    ]},
    { type: 'note', title: 'Diagnostics à ne pas manquer', text:
      'Toute convulsion n’est pas une épilepsie. Une syncope convulsivante, une hypoglycémie, une ' +
      'intoxication, un sevrage alcoolique, une éclampsie chez la femme enceinte ou une hypoxie ' +
      'cérébrale, y compris au tout début d’un **arrêt cardiaque**, peuvent produire des ' +
      'mouvements convulsifs. En cas de doute sur la respiration après l’épisode, appliquez ' +
      'l’algorithme BLS.' }
  ],
  sources: ['se-gaba', 'erc-fa', 'rcuk-fa', 'ilcor-fa']
},

{
  id: 'hypoglycemie', group: 'medicales', num: 13, title: 'Hypoglycémie', icon: 'flask', accent: 'blue',
  keywords: 'diabète sucre glycémie malaise sueurs tremblements confusion insuline glucose',
  essentiel: [
    'Diabétique + comportement anormal → penser au sucre',
    'Conscient : **15 à 20 g** de glucose par la bouche',
    'Inconscient : **rien par la bouche**, {144}',
    'Amélioration nette en 10–15 min'
  ],
  complet: [
    { type: 'list', title: 'Reconnaître', items: [
      'Sueurs, pâleur, tremblements, faim brutale ;',
      'palpitations, fatigue soudaine ;',
      'confusion, propos incohérents, comportement inhabituel ou agressif ;',
      'troubles de la coordination : évoquant parfois l’ivresse ;',
      'vision trouble, maux de tête ;',
      'convulsions ou perte de connaissance dans les formes sévères.'
    ]},
    { type: 'note', title: 'Le contexte fait le diagnostic', text:
      'Suspectez une hypoglycémie devant toute altération soudaine du comportement ou de la ' +
      'conscience chez une personne **diabétique** ou en état de dénutrition. Un diabétique confus ' +
      'est hypoglycémique jusqu’à preuve du contraire.' },
    { type: 'steps', title: 'Personne consciente, capable d’avaler', items: [
      'Donnez **15 à 20 g de glucose** par la bouche : comprimés de glucose de préférence.',
      'À défaut : une poignée de bonbons sucrés, ou **50 à 100 ml** de jus de fruit ou de boisson sucrée.',
      'Faites-la s’asseoir et attendez **10 à 15 minutes**.',
      'Si vous disposez d’un lecteur, mesurez la glycémie : traitez si elle est inférieure à **4,0 mmol/l (70 mg/dl)**.',
      'Si aucune amélioration, redonnez la même quantité et appelez le {144}.',
      'Après amélioration, proposez une collation contenant des glucides lents (pain, biscuits) si le prochain repas n’est pas imminent.'
    ]},
    { type: 'warn', title: 'Personne inconsciente ou qui ne peut pas avaler', text:
      'Ne donnez **jamais** rien par la bouche, ni sucre, ni boisson, ni gel : risque de fausse ' +
      'route. Mettez en PLS si elle respire normalement, appelez le {144}. Si un proche formé dispose ' +
      'de **glucagon** prescrit, il peut l’administrer.' },
    { type: 'note', title: 'En cas de doute entre trop et pas assez de sucre', text:
      'Si vous ne savez pas s’il s’agit d’une hypoglycémie ou d’une hyperglycémie, et que la personne ' +
      'est consciente et peut avaler : **donnez du sucre**. Une hypoglycémie non traitée peut tuer en ' +
      'quelques minutes ; quelques grammes de sucre en trop dans une hyperglycémie ne changent rien à ' +
      'court terme.' }
  ],
  pro: [
    { type: 'prose', title: 'Pourquoi le cerveau est la cible', text: [
      'Le cerveau consomme du glucose en continu et ne dispose d’aucune réserve significative ni de ' +
      'voie de synthèse propre. Il dépend entièrement de l’apport sanguin. Une glycémie qui chute ' +
      'produit d’abord une réponse adrénergique, sueurs, tremblements, palpitations, faim, puis des ' +
      'signes de neuroglycopénie : confusion, troubles du comportement, déficit focal, convulsions, ' +
      'coma.',
      'Une hypoglycémie sévère prolongée provoque des lésions neuronales définitives. C’est la raison ' +
      'pour laquelle on traite sur la présomption, sans attendre une confirmation biologique.'
    ]},
    { type: 'note', title: 'Hypoglycémie non ressentie', text:
      'Les patients diabétiques anciens, ou ceux ayant fait des hypoglycémies répétées, peuvent perdre ' +
      'les signes d’alerte adrénergiques : la première manifestation est alors directement ' +
      'neurologique. Les bêtabloquants masquent également ces signes. L’absence de sueurs et de ' +
      'tremblements n’écarte donc pas le diagnostic.' },
    { type: 'note', title: 'Causes fréquentes', text:
      'Dose d’insuline ou de sulfamide inadaptée, repas sauté ou retardé, effort physique inhabituel, ' +
      'consommation d’alcool, qui bloque la néoglucogenèse hépatique et expose à des hypoglycémies ' +
      'retardées et sévères, souvent nocturnes.' }
  ],
  sources: ['erc-fa', 'rcuk-fa', 'ilcor-fa']
},

{
  id: 'asthme', group: 'medicales', num: 14, title: 'Crise d’asthme', icon: 'lungs', accent: 'blue',
  keywords: 'asthme bronches sifflement ventoline bronchodilatateur inhalateur détresse respiratoire',
  essentiel: [
    'Position **assise**, penchée en avant',
    'Aider à prendre son bronchodilatateur',
    'Calmer et rassurer',
    '{144} si pas d’amélioration ou signes de gravité'
  ],
  complet: [
    { type: 'steps', title: 'Conduite à tenir', items: [
      'Installez la personne **assise**, légèrement penchée en avant, bras appuyés sur une table ou sur ses cuisses.',
      'Ne l’allongez pas : la position assise facilite le travail respiratoire.',
      'Aidez-la à prendre son **bronchodilatateur de secours** (inhalateur bleu), selon sa prescription.',
      'Desserrez les vêtements serrés, aérez, écartez la cause si elle est identifiable.',
      'Parlez calmement : l’anxiété augmente la consommation d’oxygène et aggrave la crise.',
      'Réévaluez après quelques minutes.'
    ]},
    { type: 'warn', title: 'Signes de gravité, {144} immédiatement', text:
      'La personne ne peut plus terminer une phrase · elle est épuisée ou somnolente · elle devient ' +
      'confuse · lèvres ou ongles bleutés · le sifflement **disparaît** alors que la détresse persiste ' +
      '· le bronchodilatateur n’a aucun effet ou son effet ne dure pas · c’est la première crise.' },
    { type: 'note', title: 'Un thorax silencieux est un signe d’alarme', text:
      'La disparition du sifflement n’est pas une amélioration : elle peut signifier que le débit ' +
      'd’air est devenu trop faible pour produire un son. Associée à l’épuisement ou à la confusion, ' +
      'c’est un signe de gravité extrême.' },
    { type: 'note', title: 'Utilisation de l’inhalateur', text:
      'Agitez le dispositif, expiration complète, embout entre les lèvres, déclenchez au début d’une ' +
      'inspiration lente et profonde, puis retenez la respiration quelques secondes. Une **chambre ' +
      'd’inhalation** améliore nettement le dépôt pulmonaire, utilisez-la si elle est disponible, ' +
      'surtout chez l’enfant et en cas de crise.' },
    { type: 'note', title: 'Combien de bouffées ?', text:
      'Le schéma communément recommandé en crise, avec chambre d’inhalation : **4 bouffées** de ' +
      'bronchodilatateur pour commencer, **une bouffée à la fois**, puis **2 bouffées ' +
      'supplémentaires toutes les 2 minutes** selon la réponse, jusqu’à un maximum de **10 bouffées**. ' +
      'Si les 10 bouffées ne suffisent pas, ou si l’effet ne tient pas, appelez le {144}. Respectez ' +
      'le plan d’action personnel de la personne s’il en existe un.' }
  ],
  pro: [
    { type: 'prose', title: 'Mécanisme', text:
      'La crise associe un bronchospasme, un œdème de la muqueuse bronchique et une hypersécrétion de ' +
      'mucus. L’obstruction est majoritairement expiratoire : l’air entre plus facilement qu’il ne ' +
      'sort, ce qui provoque une distension thoracique progressive et met le diaphragme dans une ' +
      'position mécaniquement défavorable. L’épuisement musculaire respiratoire qui en résulte est le ' +
      'mécanisme qui tue.' },
    { type: 'prose', title: 'Pourquoi le sifflement peut être trompeur', text:
      'L’intensité du sifflement dépend du débit d’air traversant les bronches rétrécies. Une ' +
      'obstruction très sévère réduit tellement le débit que le bruit s’atténue puis disparaît. ' +
      'L’auscultation d’un thorax devenu silencieux chez un patient en détresse traduit une ' +
      'obstruction critique et non une résolution.' },
    { type: 'note', title: 'Prise en charge médicale', text:
      'Bêta-2-mimétiques inhalés à doses répétées, corticoïdes systémiques précoces, oxygène titré, ' +
      'anticholinergiques inhalés dans les formes sévères, et recours au sulfate de magnésium ou à la ' +
      'ventilation dans les formes réfractaires.' }
  ],
  sources: ['erc-fa', 'rcuk-fa', 'bts-sign']
},

/* =========================================================================
   5, TRAUMATISMES
   ========================================================================= */

{
  id: 'brulures', group: 'trauma', num: 15, title: 'Brûlures', icon: 'flame', accent: 'red',
  keywords: 'brûlure feu eau chaude cloques degré refroidir électrisation chimique',
  essentiel: [
    'Refroidir à l’eau fraîche du robinet',
    'Retirer bagues et vêtements non collés',
    'Couvrir avec un linge propre non adhérent',
    'Ni glace, ni huile, ni percement des cloques'
  ],
  complet: [
    { type: 'kv', title: 'Reconnaître la profondeur', items: [
      ['1er degré', 'Peau rouge, sèche, douloureuse. Type coup de soleil. Guérit seule en quelques jours.'],
      ['2e degré', 'Cloques (phlyctènes), peau rouge ou rosée, suintante, **très douloureuse**.'],
      ['3e degré', 'Peau blanche, cartonnée, brune ou carbonisée. Souvent **peu ou pas douloureuse** au centre, car les terminaisons nerveuses sont détruites, l’absence de douleur est un signe de gravité, jamais un signe rassurant.']
    ]},
    { type: 'steps', title: 'Conduite à tenir', items: [
      'Écartez la source de chaleur **sans vous mettre en danger**.',
      'Retirez bagues, bracelets, montre, ceinture et vêtements **non collés** à la peau, avant que le gonflement ne s’installe.',
      'Refroidissez la zone brûlée sous **l’eau fraîche du robinet**, sans pression forte.',
      'Refroidissez **uniquement la zone brûlée**, pas la personne entière.',
      'Couvrez avec un linge propre ou un pansement **non adhérent**.',
      'Surveillez, réchauffez le reste du corps, et faites boire si la personne est consciente et le souhaite.'
    ]},
    { type: 'warn', title: 'À ne jamais faire', text:
      'Pas de **glace** ni d’eau glacée, vasoconstriction et aggravation de la lésion. Ne **percez ' +
      'pas** les cloques. N’appliquez ni huile, ni beurre, ni dentifrice, ni farine, ni aucun remède ' +
      'maison. Ne retirez pas un vêtement **collé** à la peau.' },
    { type: 'myth', title: 'Idée reçue : la règle « 20 °C, 20 cm, 20 minutes »', text:
      'Cette formule circule beaucoup mais n’est pas une règle suisse universelle. Les directives ' +
      '2025 recommandent le refroidissement actif à l’**eau courante**, sans pouvoir fixer une durée ' +
      'optimale, faute de différence démontrée entre les durées étudiées. Retenez : eau fraîche du ' +
      'robinet, **de l’ordre de 10 à 20 minutes**, en surveillant l’hypothermie, surtout chez le ' +
      'jeune enfant.' },
    { type: 'warn', title: 'Appeler le {144}', text:
      'Brûlure **profonde ou étendue** · du **visage, du cou ou des voies respiratoires** · des ' +
      '**mains**, des **pieds**, des **organes génitaux** ou d’une **grande articulation** · ' +
      'circulaire autour d’un membre ou du thorax · brûlure **électrique** ou **chimique** ' +
      'importante · chez un nourrisson ou une personne âgée · inhalation de fumée.' },
    { type: 'steps', title: 'Brûlure chimique', items: [
      'Protégez-vous : le produit est encore actif.',
      'Retirez les vêtements imprégnés.',
      'Rincez abondamment et longuement à l’eau courante.',
      'Ne cherchez pas à neutraliser le produit par un autre produit.',
      'Appelez le {145} (Tox Info) ou le {144}, et gardez l’emballage.'
    ]},
    { type: 'steps', title: 'Électrisation', items: [
      '**Coupez le courant** avant tout contact : disjoncteur, prise. Ne touchez jamais la personne tant que le courant passe.',
      'Haute tension : n’approchez pas, gardez une large distance et appelez le {118}/{144}.',
      'Vérifiez conscience et respiration ; RCP + DAE si nécessaire.',
      'Recherchez les points d’entrée et de sortie du courant.',
      'Demandez un **contrôle médical même si la personne semble aller bien** : des troubles du rythme peuvent survenir à retardement et les lésions profondes sont invisibles.'
    ]}
  ],
  pro: [
    { type: 'prose', title: 'Pourquoi refroidir, et pourquoi pas trop', text: [
      'La chaleur accumulée dans les tissus continue de léser après la fin de l’exposition. Le ' +
      'refroidissement précoce interrompt cette progression, limite l’extension en profondeur, réduit ' +
      'l’œdème et diminue la douleur.',
      'Mais la surface brûlée a perdu sa barrière cutanée et donc sa capacité de thermorégulation. ' +
      'Refroidir une grande surface, ou refroidir avec de la glace, expose à une **hypothermie** qui ' +
      'aggrave le pronostic, particulièrement chez le nourrisson, dont le rapport surface/masse est ' +
      'très défavorable. D’où la consigne : refroidir la brûlure, couvrir et réchauffer la personne.'
    ]},
    { type: 'prose', title: 'Ce que les directives 2025 disent réellement de la durée', text:
      'Le refroidissement actif à l’eau courante est recommandé chez l’adulte comme chez l’enfant. En ' +
      'revanche, les données comparant les différentes durées ne montrent pas de différence de ' +
      'résultat, et aucune durée précise n’est donc recommandée. La surveillance du refroidissement ' +
      'excessif chez le jeune enfant est explicitement mentionnée. C’est un bon exemple de règle ' +
      'mnémotechnique populaire plus précise que la preuve qui la soutient.' },
    { type: 'prose', title: 'Les trois zones de Jackson, pourquoi le refroidissement change l’issue', wide: true, text: [
      'Une brûlure n’est pas une lésion homogène. Le modèle de Jackson y décrit trois zones ' +
      'concentriques. Au contact de la source : la **zone de coagulation**, nécrose irréversible par ' +
      'dénaturation des protéines : elle est perdue d’emblée. À la périphérie : la **zone ' +
      'd’hyperhémie**, simplement vasodilatée, qui récupère spontanément.',
      'Entre les deux se joue tout l’enjeu : la **zone de stase**, hypoperfusée, **lésée mais encore ' +
      'viable**. Selon la prise en charge, elle récupère ou bascule dans la nécrose, ce qui étend la ' +
      'brûlure en surface et en profondeur pendant les heures qui suivent. Refroidir précocement, ' +
      'éviter l’hypotension, l’hypothermie et la compression de la zone, c’est agir sur cette zone-là ' +
      'et sur elle seule.',
      'C’est aussi pourquoi une brûlure « s’aggrave » dans les 48 premières heures sans que rien de ' +
      'nouveau ne se soit produit : ce n’est pas une erreur d’évaluation initiale, c’est la zone de ' +
      'stase qui a évolué.'
    ]},
    { type: 'note', title: 'Le remplissage vasculaire, formule de Parkland', text:
      'Au-delà d’un certain pourcentage de surface brûlée, la fuite plasmatique impose un remplissage ' +
      'précoce. La formule de référence prescrit **4 ml de Ringer lactate par kilo et par pourcent de ' +
      'surface brûlée** sur les 24 premières heures, dont **la moitié durant les 8 premières heures** ' +
      'et le reste sur les 16 suivantes, le compte partant de **l’heure de la brûlure** et non de ' +
      'l’arrivée à l’hôpital. Ce n’est qu’un point de départ : l’ajustement se fait sur la **diurèse**, ' +
      'maintenue autour de 0,5 à 1 ml/kg/h, meilleur indicateur d’un remplissage adéquat.' },
    { type: 'figure', name: 'jackson', wide: true, title: 'Les trois zones de Jackson',
      caption: 'Tout l’enjeu du refroidissement porte sur la **zone de stase** : lésée mais encore viable, elle récupère ou bascule en nécrose selon la prise en charge des heures qui suivent.' },
    { type: 'note', title: 'Estimer la surface brûlée', text:
      'La paume de la main de la victime, doigts inclus, représente environ **1 %** de sa surface ' +
      'corporelle : c’est le repère le plus simple sur le terrain. La règle des 9 de Wallace ' +
      '(9 % par membre supérieur, 18 % par membre inférieur, 18 % par face du tronc, 9 % pour la ' +
      'tête chez l’adulte) sert au chiffrage médical et guide le remplissage vasculaire.' },
    { type: 'note', title: 'Brûlure des voies respiratoires', text:
      'Suies dans les narines ou la bouche, vibrisses brûlées, voix rauque, toux, stridor, brûlure du ' +
      'visage ou du cou, incendie en espace clos : autant de signes qui font craindre une atteinte ' +
      'inhalatoire. L’œdème des voies aériennes peut se constituer en quelques heures et rendre ' +
      'l’intubation impossible, d’où une prise en charge précoce et une surveillance rapprochée.' },
    { type: 'note', title: 'Particularité de l’électrisation', text:
      'Le courant traverse les tissus selon leur conductivité et lèse en profondeur, notamment les ' +
      'muscles, bien au-delà de ce que suggèrent les marques cutanées. La rhabdomyolyse qui en résulte ' +
      'menace la fonction rénale. Le passage transthoracique peut par ailleurs déclencher des troubles ' +
      'du rythme, y compris différés, ce qui justifie la surveillance systématique.' }
  ],
  sources: ['erc-fa', 'ilcor-fa', 'rcuk-fa', 'burns-path', 'parkland', 'tox']
},

{
  id: 'colonne', group: 'trauma', num: 16, title: 'Blessure à la colonne', icon: 'bone', accent: 'blue',
  keywords: 'rachis colonne vertébrale nuque cervicale paralysie fourmillements immobilisation',
  essentiel: [
    'À suspecter après chute, accident ou choc violent',
    'Ne pas déplacer, sauf danger immédiat',
    'Maintenir la tête dans la position trouvée',
    'Voies respiratoires **toujours** prioritaires'
  ],
  complet: [
    { type: 'list', title: 'Quand suspecter une atteinte du rachis', items: [
      'Accident de circulation, chute d’une hauteur importante, plongeon, accident de ski, choc violent ;',
      'douleur cervicale ou dorsale ;',
      'fourmillements, engourdissement ou perte de sensibilité ;',
      'faiblesse ou paralysie d’un ou plusieurs membres ;',
      'perte de contrôle des urines ou des selles ;',
      'toute victime inconsciente après un traumatisme : le doute suffit.'
    ]},
    { type: 'steps', title: 'Victime consciente', items: [
      'Ne la déplacez **pas**, sauf danger immédiat pour elle ou pour vous.',
      'Demandez-lui de rester parfaitement immobile.',
      'Encouragez-la à maintenir elle-même sa tête dans une position confortable et stable : c’est mieux toléré et plus efficace qu’une immobilisation imposée.',
      'Si vous maintenez la tête, faites-le **dans la position trouvée**, sans forcer ni chercher à réaligner.',
      'Appelez le {144}, couvrez, rassurez, surveillez.'
    ]},
    { type: 'steps', title: 'Victime inconsciente', items: [
      'Respiration normale : **PLS** en limitant au maximum les torsions du rachis, si possible à plusieurs et en bloc.',
      'Respiration absente ou anormale : **RCP immédiate**, sans considération pour le rachis.',
      'Si elle est sur le ventre et que vous devez accéder aux voies respiratoires, retournez-la **en bloc**, tête et corps alignés.'
    ]},
    { type: 'warn', title: 'La règle qui prime sur toutes les autres', text:
      'La liberté des voies respiratoires est **toujours prioritaire** sur l’immobilisation du ' +
      'rachis. Une lésion médullaire est grave ; une asphyxie est mortelle en quelques minutes. Si ' +
      'vous devez choisir, vous choisissez la respiration.' },
    { type: 'note', title: 'Pas de collier cervical improvisé', text:
      'N’essayez pas de fabriquer un collier avec des vêtements ou du carton : mal posé, il gêne la ' +
      'respiration, comprime les jugulaires et donne une fausse sécurité. Le maintien manuel doux, ou ' +
      'l’auto-maintien par la victime, est préférable.' },
    { type: 'note', title: 'Casque de moto ou de vélo', text:
      'Ne retirez pas le casque, sauf si les voies respiratoires sont menacées ou s’il faut réanimer. ' +
      'Si c’est indispensable, faites-le idéalement à deux : l’un maintient la tête et le rachis, ' +
      'l’autre retire le casque doucement.' }
  ],
  pro: [
    { type: 'prose', title: 'Lésion primaire et lésion secondaire', text: [
      'La lésion primaire, celle du traumatisme lui-même, n’est pas modifiable une fois survenue. ' +
      'L’objectif du secouriste porte entièrement sur la **lésion secondaire** : l’aggravation ' +
      'produite par les mobilisations, l’instabilité du foyer, l’hypoxie et l’hypotension, qui ' +
      'compromettent la perfusion médullaire.',
      'Cela explique la logique apparemment contradictoire des consignes : immobilité stricte par ' +
      'défaut, mais mobilisation sans hésitation si elle est nécessaire pour respirer, car l’hypoxie ' +
      'est elle-même un mécanisme majeur de lésion secondaire.'
    ]},
    { type: 'prose', title: 'Évolution des pratiques d’immobilisation', text:
      'L’immobilisation systématique par collier rigide et plan dur a été fortement restreinte. Les ' +
      'données montrent des effets indésirables réels, inconfort, escarres, gêne respiratoire, ' +
      'augmentation de la pression intracrânienne, difficultés de gestion des voies aériennes, pour ' +
      'un bénéfice non démontré chez la majorité des patients. Les recommandations actuelles ' +
      'privilégient la restriction de mouvement, l’auto-maintien par le patient conscient et une ' +
      'sélection des patients à haut risque.' },
    { type: 'note', title: 'Choc neurogénique', text:
      'Une lésion médullaire haute peut interrompre le tonus sympathique et produire une hypotension ' +
      'avec **bradycardie**, association inhabituelle qui contraste avec la tachycardie du choc ' +
      'hémorragique, et qui peut orienter le diagnostic. Peau chaude et sèche sous le niveau lésionnel, ' +
      'priapisme et paralysie flasque complètent le tableau.' }
  ],
  sources: ['erc-fa', 'rcuk-fa', 'ilcor-fa']
},

{
  id: 'fractures', group: 'trauma', num: 17, title: 'Fractures et entorses', icon: 'bone', accent: 'blue',
  keywords: 'fracture entorse luxation immobilisation attelle membre os cassé glace',
  essentiel: [
    'Immobiliser dans la position trouvée',
    'Ne pas tenter de remettre en place',
    'Froid enveloppé, jamais à même la peau',
    'Fracture ouverte ou déformation → {144}'
  ],
  complet: [
    { type: 'list', title: 'Signes', items: [
      'Douleur vive et localisée, majorée au moindre mouvement ;',
      'déformation, angulation anormale, raccourcissement du membre ;',
      'gonflement rapide, hématome ;',
      'impossibilité de bouger ou de prendre appui ;',
      'craquement perçu au moment du traumatisme ;',
      'fracture **ouverte** : plaie en regard du foyer, os parfois visible.'
    ]},
    { type: 'steps', title: 'Conduite à tenir', items: [
      'Faites cesser toute mobilisation du membre.',
      'Immobilisez **dans la position trouvée**, n’essayez jamais de réaligner ou de « remettre en place ».',
      'Soutenez le membre au-dessus et au-dessous de la lésion, ou laissez la victime le soutenir elle-même.',
      'Membre supérieur : écharpe improvisée. Membre inférieur : calez avec des vêtements roulés ou des coussins.',
      'Appliquez du **froid enveloppé dans un linge**, jamais directement sur la peau, environ 15 à 20 minutes.',
      'Retirez bagues et bracelets avant le gonflement.',
      'Ne donnez ni à boire ni à manger : une anesthésie est possible.'
    ]},
    { type: 'warn', title: 'Fracture ouverte', text:
      'Ne rincez pas, ne repoussez pas l’os, ne le recouvrez pas d’un pansement serré. Couvrez ' +
      'largement avec un pansement stérile ou un linge propre, contrôlez le saignement par ' +
      'compression **autour** de la plaie, et appelez le {144}. Le risque infectieux est majeur.' },
    { type: 'warn', title: 'Signes de gravité, {144}', text:
      'Extrémité **froide, pâle ou bleutée** au-delà de la fracture · perte de sensibilité ou de ' +
      'mobilité des doigts ou des orteils · déformation majeure · fracture ouverte · suspicion de ' +
      'fracture du fémur, du bassin, du crâne ou du rachis · douleur intense et croissante malgré ' +
      'l’immobilisation.' },
    { type: 'note', title: 'Entorse : le schéma RGCE', text:
      '**R**epos · **G**lace (enveloppée, 15–20 min) · **C**ompression par un bandage élastique non ' +
      'serré · **É**lévation du membre. Consultez si l’appui est impossible, si la déformation est ' +
      'nette, ou si la douleur ne cède pas.' }
  ],
  pro: [
    { type: 'prose', title: 'Pourquoi ne pas réduire une déformation', text: [
      'La réduction d’un foyer de fracture par une personne non formée expose à léser les structures ' +
      'nerveuses et vasculaires adjacentes, à convertir une fracture fermée en fracture ouverte et à ' +
      'mobiliser des fragments osseux. La douleur provoquée est également considérable.',
      'La seule exception admise concerne un membre dont l’extrémité présente des signes ' +
      'd’ischémie franche, en contexte d’évacuation très prolongée, situation de secours en milieu ' +
      'isolé, avec des personnels formés, et non de premiers secours courants.'
    ]},
    { type: 'note', title: 'Syndrome des loges', text:
      'L’augmentation de pression dans une loge musculaire inextensible compromet la perfusion et ' +
      'aboutit à une nécrose. Les signes d’alerte sont une **douleur disproportionnée** et croissante, ' +
      'majorée à l’étirement passif des muscles concernés, avec tension de la loge. C’est une urgence ' +
      'chirurgicale : un plâtre ou un bandage serré peut la déclencher ou l’aggraver.' },
    { type: 'note', title: 'Fractures à haut risque hémorragique', text:
      'Une fracture fermée du fémur peut séquestrer environ un litre de sang, une fracture du bassin ' +
      'nettement davantage. Ces lésions sont donc autant un problème circulatoire qu’orthopédique et ' +
      'justifient une surveillance de l’état hémodynamique et un transport médicalisé.' },
    { type: 'note', title: 'Le froid : utile, mais brièvement', text:
      'Le froid réduit la douleur et l’œdème initial par vasoconstriction. Appliqué directement ou ' +
      'trop longtemps, il provoque des lésions cutanées et des atteintes nerveuses superficielles. ' +
      'Toujours enveloppé, par périodes limitées, et jamais sur une zone dont la sensibilité est ' +
      'altérée.' }
  ],
  sources: ['erc-fa', 'rcuk-fa', 'ilcor-fa']
},

{
  id: 'crane', group: 'trauma', num: 18, title: 'Traumatisme crânien', icon: 'brain', accent: 'blue',
  keywords: 'tête choc commotion cérébrale perte de connaissance vomissements confusion crâne',
  essentiel: [
    'Arrêter immédiatement toute activité',
    'Surveiller pendant 24 à 48 heures',
    'Vomissements, confusion, somnolence → {144}',
    'Anticoagulants → avis médical systématique'
  ],
  complet: [
    { type: 'list', title: 'Signes d’une commotion', items: [
      'Difficultés de concentration, de mémoire, impression d’être « dans le brouillard » ;',
      'maux de tête, vertiges, nausées ;',
      'troubles de la vision, sensibilité à la lumière ou au bruit ;',
      'lenteur des réponses, réponses inadaptées ;',
      'irritabilité, changement de comportement.'
    ]},
    { type: 'steps', title: 'Conduite à tenir', items: [
      'Arrêtez immédiatement l’activité en cours : sport, travail, conduite.',
      'Ne laissez pas la personne reprendre une activité physique le jour même.',
      'Faites-la examiner par un professionnel de santé.',
      'Surveillez-la pendant **24 à 48 heures**, y compris la nuit, sans la laisser seule.',
      'Pas d’alcool, pas de somnifère, pas de sédatif.',
      'Si elle est inconsciente et respire normalement : PLS, en protégeant le rachis.'
    ]},
    { type: 'warn', title: 'Appeler le {144} sans attendre', text:
      'Perte de connaissance, même brève · **vomissements répétés** · maux de tête violents ou ' +
      'croissants · confusion, propos incohérents, somnolence anormale ou difficulté à réveiller la ' +
      'personne · convulsions · pupilles de taille inégale · faiblesse ou engourdissement d’un côté · ' +
      'troubles de la parole ou de l’équilibre · écoulement de sang ou de liquide clair par le nez ou ' +
      'l’oreille · plaie profonde ou enfoncement du crâne.' },
    { type: 'warn', title: 'Personnes à risque particulier', text:
      'Toute personne sous **anticoagulants** ou antiagrégants doit être vue par un médecin après un ' +
      'traumatisme crânien, même apparemment bénin, même sans symptôme : le risque d’hémorragie ' +
      'intracrânienne retardée est réel. Même prudence chez la personne âgée, l’enfant en bas âge et ' +
      'en cas de consommation d’alcool masquant les signes.' },
    { type: 'note', title: 'Ne jamais reprendre le sport le jour même', text:
      'Un second traumatisme survenant avant récupération complète peut avoir des conséquences ' +
      'disproportionnées. La reprise se fait progressivement, par paliers, après avis médical et ' +
      'disparition des symptômes.' }
  ],
  pro: [
    { type: 'prose', title: 'L’intervalle libre', text:
      'Un hématome extradural typique associe une perte de connaissance initiale, une **récupération ' +
      'apparente** de quelques minutes à quelques heures, l’intervalle libre, puis une dégradation ' +
      'rapide de la conscience. C’est précisément cette phase d’apparente normalité qui rend la ' +
      'surveillance prolongée indispensable : se sentir bien après un choc à la tête n’a jamais ' +
      'constitué une garantie.' },
    { type: 'prose', title: 'Physiopathologie de la commotion', text:
      'La commotion est un trouble fonctionnel lié aux forces d’accélération et de décélération ' +
      'appliquées au tissu cérébral. Elle entraîne une cascade neuro-métabolique transitoire, flux ' +
      'ionique, hyperglycolyse puis dépression du métabolisme du glucose, sans lésion visible en ' +
      'imagerie standard. Une imagerie normale n’exclut donc en rien une commotion.' },
    { type: 'prose', title: 'Doctrine de Monro-Kellie, la boîte qui ne s’agrandit pas', wide: true, text: [
      'Le crâne adulte est un contenant rigide de volume fixe, occupé par trois compartiments : le ' +
      '**parenchyme cérébral**, le **sang** et le **liquide céphalo-rachidien**. Leur somme est ' +
      'constante. Tout volume qui s’ajoute, hématome, œdème, contusion, doit donc être compensé par ' +
      'la réduction d’un autre, essentiellement par chasse du LCR et du sang veineux.',
      'Cette compensation fonctionne bien… jusqu’à épuisement. La courbe pression-volume n’est pas ' +
      'linéaire : longtemps quasi plate, elle devient brutalement verticale. C’est pourquoi un ' +
      'patient peut rester cliniquement stable puis se dégrader en quelques minutes, sans qu’il se ' +
      'soit rien passé de nouveau, le saignement progressait simplement le long de la partie plate ' +
      'de la courbe.'
    ]},
    { type: 'prose', title: 'La formule qui gouverne tout : PPC = PAM − PIC', text: [
      'La pression de perfusion cérébrale est la différence entre la pression artérielle moyenne et ' +
      'la pression intracrânienne. Deux façons d’affamer un cerveau, donc : laisser monter la PIC, ou ' +
      'laisser chuter la PAM. La cible recommandée après traumatisme crânien grave se situe autour de ' +
      '**60 à 70 mmHg** de PPC.',
      'C’est la raison pour laquelle, en préhospitalier, **l’hypotension et l’hypoxie sont les deux ' +
      'ennemis principaux**, bien avant toute considération neurochirurgicale. Un seul épisode ' +
      'd’hypotension chez un traumatisé crânien aggrave nettement le pronostic. Sur le terrain, cela ' +
      'se traduit simplement : maintenir la respiration et la circulation, c’est déjà du traitement ' +
      'neurologique.'
    ]},
    { type: 'note', title: 'Acide tranexamique', text:
      'L’essai **CRASH-3** a montré qu’administré **dans les 3 heures** suivant le traumatisme, ' +
      'l’acide tranexamique réduit la mortalité liée au traumatisme crânien **léger à modéré**, sans ' +
      'bénéfice démontré dans les formes sévères et sans augmentation des événements thrombotiques. ' +
      'C’est un traitement médicalisé, mais la fenêtre de 3 heures explique une partie de l’urgence ' +
      'de l’appel.' },
    { type: 'note', title: 'Hypertension intracrânienne', text:
      'La boîte crânienne est inextensible : tout processus expansif finit par comprimer le tissu ' +
      'cérébral. Céphalées croissantes, vomissements en jet, altération progressive de la conscience, ' +
      'anisocorie et bradycardie avec hypertension artérielle (réflexe de Cushing) signent une ' +
      'situation critique nécessitant une prise en charge neurochirurgicale immédiate.' },
    { type: 'note', title: 'Écoulement clair par le nez ou l’oreille', text:
      'Il peut s’agir de liquide céphalo-rachidien, témoin d’une fracture de la base du crâne. ' +
      'N’obturez pas l’orifice : laissez s’écouler et couvrez sans comprimer. Le risque infectieux ' +
      '(méningite) impose une prise en charge spécialisée.' }
  ],
  sources: ['monro-kellie', 'cpp-tbi', 'crash3', 'erc-fa', 'rcuk-fa', 'ilcor-fa']
},

{
  id: 'oeil-dents', group: 'trauma', num: 19, title: 'Œil et dents', icon: 'eye', accent: 'blue',
  keywords: 'œil oeil dent avulsion projection corps étranger produit chimique rincer lait',
  essentiel: [
    'Produit chimique dans l’œil : rincer **immédiatement**',
    'Objet planté dans l’œil : ne pas retirer',
    'Dent expulsée : la tenir par la couronne',
    'Dent : réimplanter ou conserver dans du lait'
  ],
  complet: [
    { type: 'steps', title: 'Produit chimique dans l’œil', items: [
      'Rincez **immédiatement**, sans attendre : le délai avant le premier rinçage est le principal facteur pronostique.',
      'Rincez **abondamment et longuement**, au minimum 20 à 30 minutes, paupières maintenues écartées de force, la personne tolérant mal l’ouverture.',
      'Sérum physiologique si vous en avez, **sinon de l’eau** : ne retardez jamais le rinçage pour chercher le « bon » liquide.',
      '**Continuez de rincer pendant le transport**, l’irrigation ne s’arrête pas à une durée fixe, mais quand le pH oculaire est redevenu normal, ce qui se contrôle à l’hôpital.',
      'Dirigez l’eau de l’angle interne vers l’extérieur, pour ne pas contaminer l’autre œil.',
      'Retirez les lentilles de contact si elles ne partent pas au rinçage.',
      'Appelez le {145} ou le {144} et gardez l’emballage du produit.',
      'Consultez systématiquement, même si la douleur cède.'
    ]},
    { type: 'steps', title: 'Corps étranger ou objet planté', items: [
      'Poussière ou cil : clignez, laissez couler les larmes, rincez à l’eau ou au sérum physiologique.',
      'Ne frottez **jamais** l’œil.',
      'Objet **planté** ou pénétrant : ne le retirez pas, ne rincez pas, ne comprimez pas le globe.',
      'Couvrez les **deux** yeux sans appuyer, les yeux bougent ensemble, immobiliser le sain immobilise le blessé.',
      'Appelez le {144} et gardez la personne allongée, tête surélevée.'
    ]},
    { type: 'steps', title: 'Dent définitive expulsée', items: [
      'Retrouvez la dent et saisissez-la par la **couronne**, jamais par la racine.',
      'Si elle est sale, rincez-la **brièvement** (une dizaine de secondes) à l’eau froide courante ou au sérum physiologique, **ne la frottez pas**, ne la brossez pas, ne la désinfectez pas.',
      'Si possible, **réimplantez-la immédiatement** dans son alvéole, dans le bon sens, et faites mordre sur une compresse.',
      'Si la réimplantation est impossible, conservez-la **immergée**, par ordre de préférence : **lait** · sérum physiologique · salive de la victime (crachée dans un récipient).',
      'Consultez un dentiste **en urgence**.'
    ]},
    { type: 'warn', title: 'Le vrai ennemi, c’est le dessèchement, pas l’eau', text:
      'Le facteur pronostique décisif est le **temps passé à sec** : au-delà d’environ **60 minutes** ' +
      'hors de la bouche et à l’air libre, les cellules du ligament parodontal ne sont généralement ' +
      'plus viables, quel que soit le milieu utilisé ensuite. L’eau du robinet est un **mauvais** ' +
      'milieu de conservation, mais elle reste **préférable à laisser la dent sécher** : si vous ' +
      'n’avez rien d’autre, immergez. Ne perdez pas de temps à chercher le liquide idéal.' },
    { type: 'warn', title: 'Dent de lait : ne pas réimplanter', text:
      'Une dent de lait expulsée ne se réimplante pas. Cela risquerait de léser le germe de la dent ' +
      'définitive. Consultez tout de même un dentiste.' },
    { type: 'note', title: 'Ce qui justifie un avis ophtalmologique urgent', text:
      'Baisse de la vision · douleur intense persistante · sensation de corps étranger qui ne cède ' +
      'pas · photophobie marquée · déformation de la pupille · saignement visible dans l’œil · toute ' +
      'projection de produit chimique, même après rinçage.' }
  ],
  pro: [
    { type: 'prose', title: 'Brûlures oculaires : l’acide et la base', text:
      'Les brûlures par bases (soude, ammoniaque, chaux, ciment, déboucheurs) sont plus graves que ' +
      'celles par acides : elles provoquent une nécrose de liquéfaction qui dissout les tissus et ' +
      'permet une pénétration profonde et continue. Les acides produisent une nécrose de coagulation ' +
      'qui forme une barrière limitant la pénétration. Dans les deux cas, la précocité et la durée du ' +
      'rinçage sont le déterminant pronostique principal, bien avant tout traitement spécialisé.' },
    { type: 'prose', title: 'Pourquoi le ligament parodontal décide du sort de la dent', text:
      'Les cellules du ligament parodontal restées sur la racine conditionnent la réussite de la ' +
      'réimplantation. Elles se dessèchent en quelques dizaines de minutes à l’air libre, et l’eau ' +
      'pure les détruit par choc osmotique. Le lait offre une osmolarité et un pH acceptables, ce qui ' +
      'en fait le milieu de conservation de dépannage le plus disponible. Frotter la racine arrache ' +
      'mécaniquement ces cellules : d’où l’interdiction formelle.' },
    { type: 'note', title: 'Pourquoi couvrir les deux yeux', text:
      'Les mouvements oculaires sont conjugués : suivre un objet du regard avec l’œil sain entraîne ' +
      'le globe blessé. En cas de plaie perforante, ces mouvements peuvent aggraver l’issue de contenu ' +
      'intraoculaire. Le pansement bilatéral est anxiogène, expliquez ce que vous faites et restez ' +
      'en contact verbal permanent.' }
  ],
  sources: ['iadt', 'erc-fa', 'rcuk-fa', 'tox']
},

/* =========================================================================
   6, ENVIRONNEMENT & INTOXICATIONS
   ========================================================================= */

{
  id: 'hypothermie', group: 'environ', num: 20, title: 'Hypothermie et gelures', icon: 'thermo', accent: 'blue',
  keywords: 'froid hypothermie gelures engelures montagne neige avalanche frissons réchauffement',
  essentiel: [
    'Manipuler **avec douceur**, le froid rend le cœur irritable',
    'Abriter, isoler du sol, retirer le mouillé, couvrir',
    'Conscient : boissons chaudes sucrées, non alcoolisées',
    'Gelures : réchauffer sans frotter, jamais si risque de regel'
  ],
  complet: [
    { type: 'kv', title: 'Reconnaître l’hypothermie', items: [
      ['Légère', 'Frissons intenses, extrémités froides, peau pâle, personne consciente et cohérente.'],
      ['Modérée', 'Les frissons **cessent** : signe d’aggravation, non d’amélioration. Confusion, apathie, troubles de la coordination, élocution difficile.'],
      ['Sévère', 'Rigidité musculaire, conscience très altérée ou coma, respiration et pouls lents et difficiles à percevoir.']
    ]},
    { type: 'steps', title: 'Conduite à tenir', items: [
      'Mettez la personne à l’abri du froid, du vent et de l’humidité.',
      '**Isolez-la du sol**, la perte de chaleur par conduction est majeure.',
      'Retirez les vêtements mouillés en la manipulant le moins possible, et remplacez-les par des vêtements secs.',
      'Enveloppez-la, tête comprise, avec une couverture de survie face argentée vers le corps.',
      'Manipulez-la **avec une extrême douceur** et gardez-la à l’horizontale.',
      'Si elle est consciente et peut avaler : boissons chaudes sucrées, **sans alcool**.',
      'Appelez le {144}, ou le {1414} en montagne.'
    ]},
    { type: 'warn', title: 'Pourquoi la douceur est vitale', text:
      'Un myocarde hypothermique est électriquement instable. Des mouvements brusques, une ' +
      'verticalisation ou une mobilisation rude peuvent déclencher une **fibrillation ventriculaire**. ' +
      'On ne fait ni marcher, ni asseoir, ni frictionner vigoureusement une personne en hypothermie ' +
      'modérée ou sévère.' },
    { type: 'warn', title: 'Pas d’alcool', text:
      'L’alcool provoque une vasodilatation périphérique : la sensation de chaleur est immédiate, ' +
      'mais la déperdition thermique réelle **augmente**. C’est exactement l’inverse de l’effet ' +
      'recherché.' },
    { type: 'steps', title: 'Gelures', items: [
      'Mettez la personne à l’abri et retirez ce qui comprime : bagues, chaussures serrées.',
      'Protégez la zone, ne **frottez pas** et ne massez jamais avec de la neige.',
      'N’utilisez aucune source de chaleur directe : radiateur, feu, sèche-cheveux, la zone est insensible et brûle sans être ressentie.',
      'Ne **percez pas** les cloques.',
      'Protégez par un pansement non serré, séparez les doigts ou orteils, et évacuez.'
    ]},
    { type: 'warn', title: 'Réchauffer sur le terrain : seulement sous deux conditions', text:
      'Le réchauffement actif d’une gelure (bain d’eau tiède contrôlée) ne se justifie sur place que ' +
      'si les soins définitifs sont à **plus de deux heures** **et** que vous pouvez garantir ' +
      'l’absence de **regel**. Si le regel est possible, il est **plus sûr de laisser la zone gelée** : ' +
      'un cycle gel–dégel–regel est nettement plus destructeur qu’un gel prolongé. Dans le doute, ' +
      'protégez et évacuez sans réchauffer.' },
    { type: 'note', title: 'Hypothermie d’abord', text:
      'Une hypothermie **légère** peut être prise en charge en même temps que la gelure. Une ' +
      'hypothermie **modérée ou sévère** doit être traitée **avant** : c’est elle qui met la vie en ' +
      'jeu. Attention, réchauffer les extrémités d’une personne hypotherme aggrave l’afterdrop, ' +
      'raison de plus pour ne pas commencer par les gelures.' }
  ],
  pro: [
    { type: 'prose', title: '« Personne n’est mort tant qu’il n’est pas chaud et mort »', text: [
      'L’hypothermie profonde réduit massivement le métabolisme cérébral et peut protéger le cerveau ' +
      'pendant des durées d’arrêt circulatoire très supérieures à la normale. Des survies ' +
      'neurologiquement favorables ont été documentées après des arrêts prolongés en hypothermie ' +
      'accidentelle, notamment en avalanche et en immersion en eau froide.',
      'La réanimation est donc poursuivie pendant le réchauffement, éventuellement par circulation ' +
      'extracorporelle, et le décès n’est déclaré qu’après réchauffement, sauf lésions manifestement ' +
      'incompatibles avec la vie ou situation le rendant impossible.'
    ]},
    { type: 'prose', title: 'Afterdrop et collapsus de réchauffement', text:
      'Au début du réchauffement, le sang froid stagnant en périphérie retourne vers le cœur et peut ' +
      'faire **baisser** encore la température centrale : c’est l’afterdrop. La vasodilatation ' +
      'associée peut par ailleurs provoquer un collapsus. Ces phénomènes justifient un réchauffement ' +
      'centré sur le tronc, progressif, et le maintien strict de l’horizontalité.' },
    { type: 'table', title: 'Classification suisse de l’hypothermie (HT I–IV)', wide: true,
      head: ['Stade', 'Tableau clinique', 'Température centrale indicative'],
      rows: [
        ['**HT I**',   'Conscient, **frissonne**', '35 – 32 °C'],
        ['**HT II**',  'Conscience altérée, **ne frissonne plus**', '32 – 28 °C'],
        ['**HT III**', 'Inconscient, signes vitaux présents', '28 – 24 °C'],
        ['**HT IV**',  'Mort apparente, **réanimation possible**', 'inférieure à 24 °C']
      ]},
    { type: 'prose', title: 'Ce que cette classification apporte sur le terrain', text: [
      'Développée pour la médecine de montagne et reprise internationalement, elle permet de **stader ' +
      'sans thermomètre central**, à partir du seul examen clinique. Ce qui est précisément la ' +
      'situation du secouriste. Elle donne aussi sa portée au repère le plus contre-intuitif : ' +
      'l’arrêt des frissons marque le passage de HT I à HT II, donc une **aggravation**, jamais une ' +
      'amélioration.',
      'La version révisée par l’ICAR MedCom raisonne désormais en **risque d’arrêt cardiaque** plutôt ' +
      'qu’en température, s’appuie sur le niveau de réactivité (échelle AVPU) et abandonne le frisson ' +
      'comme critère, parce que la réponse physiologique au froid varie fortement d’un individu à ' +
      'l’autre. Les températures ci-dessus restent indicatives et se chevauchent en pratique.'
    ]},
    { type: 'note', title: 'Signes vitaux difficiles à percevoir', text:
      'En hypothermie sévère, la bradycardie extrême et la vasoconstriction rendent le pouls et la ' +
      'respiration très difficiles à détecter. Les recommandations prévoient de prolonger ' +
      'l’évaluation de la respiration avant de conclure à un arrêt, et, en cas de doute, de débuter ' +
      'la réanimation.' },
    { type: 'note', title: 'Mécanisme lésionnel des gelures', text:
      'La cristallisation intra- et extracellulaire lèse directement les membranes, tandis que la ' +
      'vasoconstriction et la thrombose microvasculaire prolongent l’ischémie. Le dégel provoque une ' +
      'lésion d’ischémie-reperfusion. Un nouveau gel après dégel amplifie considérablement les ' +
      'dégâts : d’où la règle de ne pas réchauffer sans pouvoir garantir l’absence de regel.' }
  ],
  sources: ['swiss-ht', 'wms-hypothermia', 'wms-frostbite', 'erc-sc', 'erc-fa', 'rcuk-fa', 'rega']
},

{
  id: 'chaleur', group: 'environ', num: 21, title: 'Coup de chaleur', icon: 'thermo', accent: 'red',
  keywords: 'canicule hyperthermie insolation déshydratation épuisement chaleur refroidir immersion',
  essentiel: [
    'Troubles neurologiques + chaleur = **urgence vitale**',
    'Refroidir **immédiatement**, sur place',
    'Immersion en eau froide si possible',
    'Refroidir d’abord, transporter ensuite'
  ],
  complet: [
    { type: 'kv', title: 'Distinguer les deux tableaux', items: [
      ['Épuisement dû à la chaleur', 'Fatigue, maux de tête, nausées, crampes, sueurs abondantes, soif, étourdissements. **Conscience normale.** Récupération en général rapide au repos, au frais, avec réhydratation.'],
      ['Coup de chaleur', 'Peau très chaude, confusion, agitation, désorientation, comportement anormal, convulsions ou perte de connaissance. **Urgence vitale.** La transpiration peut être présente ou absente.']
    ]},
    { type: 'note', title: 'Le signe qui fait la différence', text:
      'C’est l’**atteinte neurologique**, confusion, agitation, désorientation, convulsions, ' +
      'inconscience, qui distingue le coup de chaleur de l’épuisement. Devant ces signes chez une ' +
      'personne exposée à la chaleur ou en effort, considérez un coup de chaleur.' },
    { type: 'steps', title: 'Coup de chaleur, agir', items: [
      'Appelez le {144}.',
      'Sortez la personne de la chaleur, à l’ombre ou au frais ; retirez l’excès de vêtements.',
      'Refroidissez **immédiatement et agressivement**, sans attendre les secours.',
      'Méthode la plus efficace : **immersion en eau froide** du corps entier, cou compris, baignoire, bassin, ruisseau, en sécurisant les voies respiratoires.',
      'À défaut : aspersion d’eau froide continue + ventilation, linges froids renouvelés, poches de froid sur le cou, les aisselles et les aines.',
      'Si un thermomètre est disponible, refroidissez jusqu’à une température centrale **inférieure à 39 °C**. Sinon, poursuivez environ **15 minutes** ou jusqu’à disparition des signes neurologiques.',
      'Si elle est inconsciente et respire : PLS. Si elle ne respire pas normalement : RCP.'
    ]},
    { type: 'warn', title: 'Refroidir d’abord, transporter ensuite', text:
      'Le pronostic dépend directement de la **durée** pendant laquelle la température centrale reste ' +
      'élevée. Le refroidissement commencé sur place est plus utile qu’un transport rapide sans ' +
      'refroidissement. Ne retardez pas le refroidissement pour attendre l’ambulance.' },
    { type: 'warn', title: 'Rien par la bouche si la conscience est altérée', text:
      'Ne faites pas boire une personne confuse ou somnolente : risque de fausse route. ' +
      'L’hydratation orale ne concerne que l’épuisement dû à la chaleur, chez une personne pleinement ' +
      'consciente.' }
  ],
  pro: [
    { type: 'prose', title: 'Pourquoi la durée compte plus que le pic', text: [
      'Au-delà d’un certain seuil de température centrale, la dénaturation protéique et le ' +
      'dysfonctionnement cellulaire s’installent, avec réponse inflammatoire systémique, atteinte ' +
      'endothéliale, translocation bactérienne digestive et coagulation intravasculaire disséminée.',
      'La mortalité et les séquelles neurologiques sont corrélées à l’**aire sous la courbe** ' +
      'temps-température, c’est-à-dire à la durée d’exposition tissulaire à l’hyperthermie, plus qu’au ' +
      'pic atteint. C’est le fondement du principe « cool first, transfer second ».'
    ]},
    { type: 'prose', title: 'Pourquoi l’immersion en eau froide', text:
      'L’eau a une conductivité thermique bien supérieure à celle de l’air, et l’immersion offre une ' +
      'très grande surface d’échange. Elle procure les vitesses de refroidissement les plus élevées ' +
      'documentées. La crainte d’une vasoconstriction cutanée qui réduirait l’efficacité, ou de ' +
      'frissons contre-productifs, n’est pas confirmée par les données : l’immersion reste la méthode ' +
      'de référence quand elle est réalisable.' },
    { type: 'note', title: 'Coup de chaleur d’exercice', text:
      'Il touche des sujets jeunes et sportifs, souvent bien hydratés, et peut survenir sans canicule. ' +
      'La transpiration est fréquemment conservée, une peau moite n’écarte donc pas le diagnostic. ' +
      'Le refroidissement immédiat sur le lieu de l’effort est la mesure qui détermine le pronostic.' },
    { type: 'note', title: 'Facteurs de risque', text:
      'Âges extrêmes, isolement social, maladies chroniques cardiaques ou neurologiques, obésité, ' +
      'certains médicaments (diurétiques, anticholinergiques, neuroleptiques, bêtabloquants), alcool, ' +
      'et absence d’acclimatation. Les vagues de chaleur affectent d’abord les personnes seules à ' +
      'domicile, vérifier ses voisins fait partie des premiers secours.' }
  ],
  sources: ['erc-fa', 'rcuk-fa', 'ilcor-fa', 'erc-sc']
},

{
  id: 'noyade', group: 'environ', num: 22, title: 'Noyade', icon: 'wave', accent: 'red',
  keywords: 'noyade eau lac rivière piscine sauvetage insufflations immersion submersion',
  essentiel: [
    'Ne vous mettez **jamais** à l’eau sans savoir faire',
    'Tendre, lancer, ramer, n’allez pas nager',
    'Sorti de l’eau et ne respire pas → RCP',
    'La ventilation compte plus que dans un arrêt cardiaque'
  ],
  complet: [
    { type: 'steps', title: 'Le sauvetage, sans devenir la seconde victime', items: [
      'Alertez : {144}, ou {117} et les secours locaux ; en montagne ou zone isolée, {1414}.',
      '**Tendez** une perche, une branche, un vêtement depuis le bord.',
      '**Lancez** une bouée, un bidon fermé, tout objet flottant.',
      '**Ramez**, utilisez une embarcation si elle est disponible.',
      'N’entrez à l’eau qu’en dernier recours, uniquement si vous êtes formé et équipé.',
      'Sortez la victime de l’eau horizontalement si possible.'
    ]},
    { type: 'steps', title: 'Hors de l’eau', items: [
      'Allongez la personne sur le dos, sur une surface ferme.',
      'Vérifiez la conscience et la respiration.',
      'Elle respire normalement : PLS, protection contre le froid, surveillance continue.',
      'Elle ne respire pas normalement : **RCP immédiate**.',
      'Retirez les vêtements mouillés et isolez du sol dès que possible : l’hypothermie est quasi constante.',
      'Utilisez un DAE dès qu’il est disponible, après avoir séché la poitrine.'
    ]},
    { type: 'good', title: 'En Suisse : commencer par 5 insufflations', text:
      'Les directives de cours du **SRC** rangent la noyade avec le nourrisson et l’enfant : si vous ' +
      'êtes capable de ventiler, **commencez par cinq insufflations initiales**, puis alternez ' +
      '30 compressions / 2 insufflations. La noyade provoque un arrêt par **manque d’oxygène**, ' +
      'réoxygéner traite la cause. Si vous ne pouvez pas ou ne voulez pas insuffler, faites des ' +
      '**compressions seules** : c’est très largement préférable à ne rien faire.' },
    { type: 'warn', title: 'Ne cherchez pas à vider l’eau des poumons', text:
      'Aucune manœuvre destinée à évacuer l’eau, compression abdominale, victime tête en bas, ' +
      'retournement : n’est efficace. Elles retardent la réanimation et provoquent des ' +
      'régurgitations avec risque d’inhalation. Passez directement à la réanimation.' },
    { type: 'warn', title: 'Contrôle médical systématique', text:
      'Toute personne ayant fait un épisode de noyade, même brève et même si elle semble bien, doit ' +
      'être examinée : des complications respiratoires peuvent apparaître dans les heures suivantes.' },
    { type: 'note', title: 'Suspicion de traumatisme du rachis', text:
      'Elle est à envisager en cas de plongeon, d’eau peu profonde, de toboggan ou d’accident de ' +
      'sport nautique. Limitez les torsions, mais la respiration reste prioritaire sur tout le ' +
      'reste.' }
  ],
  pro: [
    { type: 'prose', title: 'Séquence physiopathologique', text: [
      'La submersion entraîne une apnée réflexe, puis un laryngospasme, puis, à mesure que ' +
      'l’hypoxie et l’hypercapnie progressent : une inhalation de liquide. L’altération du ' +
      'surfactant, l’atélectasie et l’œdème pulmonaire lésionnel dégradent les échanges gazeux, ' +
      'aboutissant à une bradycardie hypoxique puis à l’arrêt.',
      'L’arrêt étant la conséquence de l’hypoxie et non d’un trouble du rythme primaire, la ' +
      'correction de l’oxygénation traite la cause. Cela explique pourquoi les rythmes non ' +
      'choquables prédominent et pourquoi la ventilation occupe une place que l’arrêt cardiaque ' +
      'classique ne lui donne pas.'
    ]},
    { type: 'prose', title: 'Pourquoi les référentiels ne disent pas tous la même chose', text: [
      'L’ILCOR arbitre entre bénéfice physiologique et simplicité opérationnelle. Sa formulation ' +
      'internationale recommande une stratégie **compression-first (CAB)** pour le grand public, ' +
      'par souci de cohérence avec la formation standard, et invite les professionnels et les ' +
      'sauveteurs aquatiques à envisager les **ventilations d’abord (ABC)** s’ils y sont formés.',
      'Le **SRC**, lui, a tranché plus simplement pour la Suisse : la noyade rejoint le nourrisson et ' +
      'l’enfant dans la catégorie « cinq insufflations initiales » dès lors que le secouriste sait ' +
      'ventiler. C’est ce référentiel qui s’applique ici. Aucune étude humaine directe ne compare les ' +
      'deux séquences ; les travaux sur mannequin montrent que la stratégie compression-first ne ' +
      'retarde la première ventilation que de quelques secondes. Le niveau de preuve est faible dans ' +
      'les deux cas. Ce qui explique que des organismes sérieux aboutissent à des consignes ' +
      'différentes sans que l’un ait tort.'
    ]},
    { type: 'note', title: 'Eau douce et eau salée', text:
      'La distinction, longtemps enseignée pour ses effets osmotiques théoriques, n’a pas de ' +
      'conséquence pratique en réanimation : le volume réellement inhalé est le plus souvent faible. ' +
      'La prise en charge est identique.' },
    { type: 'note', title: 'Facteurs pronostiques', text:
      'La durée de submersion est le facteur le plus déterminant. L’hypothermie associée peut être ' +
      'protectrice, en particulier chez l’enfant en eau très froide, et justifie une réanimation ' +
      'prolongée avec réchauffement avant toute décision d’arrêt.' }
  ],
  sources: ['src', 'ilcor-drown', 'erc-sc', 'erc-bls', 'rcuk-fa']
},

{
  id: 'intoxication', group: 'environ', num: 23, title: 'Intoxications', icon: 'flask', accent: 'red',
  keywords: 'poison intoxication médicaments produits ménagers champignons monoxyde carbone drogue 145',
  essentiel: [
    'Appeler le {145}, Tox Info Suisse, 24 h/24',
    'Ne **jamais** faire vomir',
    'Ne rien donner sans instruction',
    'Inconscient ou respire mal → {144} d’abord'
  ],
  complet: [
    { type: 'steps', title: 'Conduite à tenir', items: [
      'Protégez-vous : gaz, vapeurs, produit sur la peau.',
      'Si la personne est **inconsciente ou respire mal** : appelez le {144} en premier.',
      'Sinon, appelez le {145}, Tox Info Suisse, gratuit, 24 h/24.',
      'Rassemblez les informations : **quel produit**, **quelle quantité**, **quand**, **par quelle voie** (bouche, peau, yeux, inhalation), âge et poids de la personne.',
      'Gardez l’emballage, la notice, la plante ou le champignon, y compris les restes et les vomissements.',
      'Suivez précisément les instructions reçues.',
      'Surveillez conscience et respiration en continu ; PLS si inconsciente et respirant normalement.'
    ]},
    { type: 'warn', title: 'Ne jamais faire vomir', text:
      'Le vomissement provoqué expose à l’inhalation et, pour les produits **corrosifs** (acides, ' +
      'bases, déboucheurs) et **moussants**, à des lésions supplémentaires de l’œsophage lors du ' +
      'second passage. Ne donnez ni lait, ni eau salée, ni charbon, ni « antidote maison » sans ' +
      'instruction du {145}.' },
    { type: 'kv', title: 'Selon la voie d’exposition', items: [
      ['Ingestion', 'Ne rien faire boire ni manger sans instruction. Conservez l’emballage.'],
      ['Inhalation', 'Sortez la personne à l’air libre **sans vous exposer**. Aérez si possible sans risque. Appelez le {144}/{118}.'],
      ['Contact cutané', 'Retirez les vêtements imprégnés avec des gants, rincez abondamment à l’eau courante.'],
      ['Projection oculaire', 'Rincez immédiatement à l’eau, longuement, puis appelez le {145}.']
    ]},
    { type: 'warn', title: 'Monoxyde de carbone, le danger invisible', text:
      'Inodore et incolore. Suspectez-le devant des maux de tête, nausées, vertiges et fatigue ' +
      'touchant **plusieurs personnes ou des animaux au même endroit**, ou s’améliorant à ' +
      'l’extérieur. Sources : chauffage défectueux, groupe électrogène, barbecue ou moteur en local ' +
      'fermé. **Sortez tout le monde immédiatement**, n’actionnez aucun interrupteur, aérez et ' +
      'appelez le {118}/{144}.' },
    { type: 'note', title: 'Piles boutons et capsules de lessive', text:
      'Deux urgences pédiatriques fréquentes. Une **pile bouton** avalée provoque des brûlures ' +
      'électrochimiques de l’œsophage en quelques heures : appelez immédiatement, ne faites ni boire ' +
      'ni vomir. Les **capsules de lessive** concentrée provoquent vomissements, atteinte oculaire et ' +
      'troubles respiratoires rapides.' }
  ],
  pro: [
    { type: 'prose', title: 'Pourquoi le vomissement provoqué a été abandonné', text:
      'L’ipéca et les autres méthodes de vidange gastrique systématique ont disparu des ' +
      'recommandations : l’efficacité d’évacuation est faible et très dépendante du délai, tandis que ' +
      'les complications, inhalation, lésions œsophagiennes lors du second passage d’un corrosif, ' +
      'retard aux traitements réellement utiles : sont fréquentes. La décontamination éventuelle ' +
      'relève du milieu médical, sur indication toxicologique précise.' },
    { type: 'prose', title: 'Le monoxyde de carbone et l’oxymètre trompeur', text:
      'Le CO se lie à l’hémoglobine avec une affinité très supérieure à celle de l’oxygène, formant ' +
      'de la carboxyhémoglobine qui ne transporte pas l’oxygène et déplace la courbe de dissociation. ' +
      'Un oxymètre de pouls standard ne distingue pas la carboxyhémoglobine de l’oxyhémoglobine : il ' +
      'peut afficher une saturation **normale** chez un patient gravement intoxiqué. Le traitement ' +
      'repose sur l’oxygène à haute concentration, voire l’oxygénothérapie hyperbare.' },
    { type: 'table', title: 'Demi-vie de la carboxyhémoglobine, pourquoi l’oxygène est le traitement', wide: true,
      head: ['Situation', 'Demi-vie de la COHb'],
      rows: [
        ['Air ambiant (rien fait)', '**4 à 6 heures**'],
        ['Oxygène à 100 %, pression atmosphérique', '**60 à 90 minutes**'],
        ['Oxygénothérapie hyperbare', '**environ 25 minutes**']
      ]},
    { type: 'prose', title: 'Ce que ce tableau implique sur le terrain', text: [
      'L’oxygène ne « soigne » pas le monoxyde : il le **déplace**. En saturant l’hémoglobine, il ' +
      'accélère massivement la dissociation du CO, divisant la demi-vie par un facteur 4 à 5 dès la ' +
      'pression atmosphérique. C’est pourquoi la première mesure médicale est l’oxygène à haute ' +
      'concentration, débuté sans attendre le dosage.',
      'Cela explique aussi le geste du secouriste : sortir la personne à l’air libre lance déjà ' +
      'l’élimination, même si l’air ambiant est de loin le moins efficace des trois. Chaque minute ' +
      'passée dans l’atmosphère contaminée continue au contraire de charger l’hémoglobine.'
    ]},
    { type: 'note', title: 'Ce que la centrale 145 apporte', text:
      'Tox Info Suisse dispose des compositions de produits commercialisés en Suisse et de bases de ' +
      'données toxicologiques. Elle évalue le risque réel selon la dose, le poids et le délai. Ce qui ' +
      'évite aussi bien les hospitalisations inutiles que les sous-estimations. D’où l’importance de ' +
      'disposer de l’emballage lors de l’appel.' },
    { type: 'note', title: 'Intoxication aux opioïdes', text:
      'Somnolence profonde, respiration lente ou irrégulière, **pupilles en tête d’épingle**. ' +
      'Appelez le {144}, assurez la liberté des voies respiratoires, et débutez la RCP si la ' +
      'respiration est absente ou anormale. La naloxone est administrée par les personnes formées et ' +
      'ne dispense ni de l’appel ni de la surveillance : sa durée d’action peut être plus courte que ' +
      'celle du toxique.' }
  ],
  sources: ['tox', 'co-poisoning', 'erc-fa', 'rcuk-fa', 'ilcor-fa']
},

/* =========================================================================
   7, ROUTE & TUNNEL
   ========================================================================= */

{
  id: 'accident', group: 'route', num: 24, title: 'Accident de circulation', icon: 'shield', accent: 'blue',
  keywords: 'route accident voiture autoroute triangle gilet couloir de secours sécuriser',
  essentiel: [
    'Se protéger : feux de détresse, gilet',
    'Sécuriser la zone, triangle **au moins 100 m** sur autoroute',
    'Alerter : {117} ou {144} selon l’urgence',
    'Former un couloir de secours en cas de bouchon'
  ],
  complet: [
    { type: 'steps', title: 'Sécuriser', items: [
      'Enclenchez les **feux de détresse** avant de vous arrêter.',
      'Garez-vous après le lieu de l’accident si possible, hors de la chaussée.',
      'Enfilez le **gilet de haute visibilité avant** de sortir du véhicule.',
      'Faites sortir les occupants du côté opposé à la circulation et mettez-les en sécurité derrière la glissière.',
      'Placez le **triangle de panne** suffisamment loin en amont, **au moins 100 m sur autoroute**, davantage si la visibilité est réduite ou après un virage.',
      'Coupez le contact des véhicules accidentés ; ne fumez pas.'
    ]},
    { type: 'image', wide: true, src: 'planches/accident-rcp.jpg',
      title: 'Réanimer au bord de la route',
      alt: 'Photographie : une secouriste en gilet de haute visibilité et gants pratique un massage cardiaque sur un homme allongé au bord d’une route ; un masque de poche et son étui sont posés au sol près de la tête de la victime.',
      caption: 'Gilet enfilé **avant** de sortir du véhicule, gants si vous en avez, masque de poche à portée. Se protéger ne retarde pas le secours, cela le rend possible.',
      credit: '© Swiss Resuscitation Council SRC, reproduit avec autorisation.' },
    { type: 'steps', title: 'Alerter et secourir', items: [
      'Appelez le {117} (police) ou le {144} directement s’il y a des blessés.',
      'Indiquez la route, le sens de circulation, le point kilométrique ou la borne, le nombre de véhicules et de blessés.',
      'Portez assistance **sans vous mettre en danger**.',
      'Ne sortez pas un blessé de son véhicule sauf danger immédiat : incendie, immersion, fumée.',
      'Vérifiez conscience et respiration ; appliquez l’algorithme d’évaluation.',
      'Couvrez les blessés, rassurez-les, restez avec eux.'
    ]},
    { type: 'figure', name: 'triangle', wide: true, title: 'Où poser le triangle',
      caption: 'À 120 km/h, un véhicule parcourt environ **33 mètres par seconde** et sa distance d’arrêt dépasse largement 100 m. Davantage encore si la visibilité est réduite ou après un virage.' },
    { type: 'figure', name: 'couloir', wide: true, title: 'Couloir de secours',
      caption: 'La règle est la même quel que soit le nombre de voies : **la voie de gauche serre à gauche, toutes les autres serrent à droite**. Le couloir se forme donc toujours entre la voie de gauche et la suivante, jamais au milieu de la chaussée.' },
    { type: 'note', title: 'Couloir de secours : une obligation, pas une courtoisie', text:
      'Formez le couloir **dès que le trafic roule au pas**, sans attendre de voir ou d’entendre les ' +
      'secours : quand la sirène est audible, il est déjà trop tard pour se réorganiser. En Suisse, ' +
      'c’est une **obligation légale depuis le 1er janvier 2021**, dont le non-respect est sanctionné ' +
      'par une amende de **100 francs**.' },
    { type: 'note', title: 'Obligation de porter secours', text:
      'En Suisse, l’art. 128 du Code pénal punit l’omission de prêter secours à une personne en ' +
      'danger de mort imminent lorsque cela peut raisonnablement être exigé. Cela n’implique jamais ' +
      'de mettre sa propre vie en danger : appeler les secours et sécuriser la zone constituent déjà ' +
      'une assistance.' },
    { type: 'warn', title: 'Casque de moto', text:
      'Ne retirez le casque que si les voies respiratoires sont menacées ou s’il faut réanimer. ' +
      'Réalisez-le idéalement à deux, avec maintien de l’axe tête-cou-tronc.' }
  ],
  pro: [
    { type: 'prose', title: 'Sur-accident : le risque principal des premières minutes', text:
      'Sur autoroute, la principale cause de décès des intervenants et des victimes debout est le ' +
      'sur-accident. À 120 km/h, un véhicule parcourt environ 33 mètres par seconde et la distance ' +
      'd’arrêt dépasse largement 100 mètres. La distance de pose du triangle et l’évacuation des ' +
      'personnes derrière la glissière ne sont pas des formalités administratives : elles ' +
      'conditionnent la survie de tous ceux qui sont sur place.' },
    { type: 'prose', title: 'Pourquoi ne pas extraire un blessé', text:
      'L’extraction non nécessaire mobilise le rachis, peut aggraver des lésions instables et ' +
      'transformer un déficit partiel en déficit complet. Elle interrompt aussi la contention ' +
      'relative offerte par le siège. L’extraction d’urgence n’est justifiée que si le maintien sur ' +
      'place tue plus sûrement que la mobilisation : feu, immersion, fumée, ou nécessité de réanimer.' },
    { type: 'image', wide: true, src: 'planches/rautek.png',
      title: 'Technique en un temps, dite de Rautek',
      alt: 'Illustration : le secouriste se tient derrière la victime assise, passe ses deux bras sous les aisselles de celle-ci et saisit à deux mains un de ses avant-bras ramené en travers de la poitrine, prêt à reculer.',
      caption: 'Les bras passent **sous les aisselles**, les deux mains saisissent **un seul** avant-bras ramené en travers de la poitrine. On recule ensuite dos droit, tête et tronc de la victime alignés. À réserver aux situations où rester sur place est plus dangereux que bouger.',
      credit: 'Baedr-9439, Wikimedia Commons, domaine public (CC0).' },
    { type: 'note', title: 'La technique en un temps, dite de Rautek', text:
      'Passez vos bras sous les aisselles de la victime par l’arrière, saisissez **un** de ses ' +
      'avant-bras à deux mains en le ramenant en travers de sa poitrine, puis reculez en gardant ' +
      'votre dos droit et son tronc aligné avec sa tête. C’est un geste qui **s’apprend en cours** : ' +
      'mal exécuté, il aggrave une lésion du rachis. À réserver aux situations où rester sur place ' +
      'est plus dangereux que bouger.' },
    { type: 'note', title: 'Cinétique et lésions à suspecter', text:
      'Éjection du véhicule, décès d’un occupant du même véhicule, tonneau, intrusion importante dans ' +
      'l’habitacle, chute de plus de trois mètres, piéton ou cycliste projeté : ces éléments de ' +
      'cinétique justifient une suspicion de lésions graves même chez une victime qui paraît indemne, ' +
      'et doivent être transmis à la centrale. Ils orientent le patient vers un centre de traumatologie.' },
    { type: 'note', title: 'Airbags non déclenchés', text:
      'Un airbag non déclenché peut se déployer tardivement. Coupez le contact, évitez de vous placer ' +
      'dans la zone de déploiement et signalez-le aux secours.' }
  ],
  sources: ['cp-128', 'ocr', 'erc-fa', 'rcuk-fa']
},

{
  id: 'tunnel', group: 'route', num: 25, title: 'Tunnel', icon: 'tunnel', accent: 'blue',
  keywords: 'tunnel fumée incendie issue de secours niche SOS distance demi-tour panne',
  essentiel: [
    'Feux de croisement, radio allumée',
    'Distance : **au moins 50 m**',
    'Ne **jamais** faire demi-tour',
    'Fumée ou feu → quitter par une issue de secours'
  ],
  complet: [
    { type: 'steps', title: 'Avant et pendant le passage', items: [
      'Allumez les **feux de croisement** et la **radio** avant d’entrer.',
      'Retirez vos lunettes de soleil.',
      'Roulez à vitesse régulière, en respectant la signalisation.',
      'Gardez **au moins 50 mètres** avec le véhicule qui précède.',
      'Ne dépassez pas si c’est interdit, ne changez pas de voie inutilement.',
      'Ne faites **jamais** demi-tour et ne reculez pas.'
    ]},
    { type: 'steps', title: 'En cas de panne ou d’accident', items: [
      'Rangez-vous le plus à droite possible, ou dans une aire d’arrêt d’urgence.',
      'Enclenchez les **feux de détresse** et coupez le moteur.',
      '**Laissez les clés sur le véhicule**, les secours doivent pouvoir le déplacer.',
      'Faites sortir tous les occupants et éloignez-vous du véhicule.',
      'Utilisez de préférence le **téléphone SOS** : il transmet automatiquement votre localisation exacte.',
      'Suivez les consignes diffusées à la radio et par la signalisation.'
    ]},
    { type: 'warn', title: 'En cas de fumée ou d’incendie', text:
      'Quittez **immédiatement** le tunnel à pied par l’**issue de secours** la plus proche. ' +
      'N’attendez pas dans votre véhicule et ne restez pas près de lui. Suivez le balisage lumineux ' +
      'au sol, la fumée fait perdre tout repère visuel en hauteur. Restez bas si la fumée descend.' },
    { type: 'warn', title: 'Une niche SOS n’est pas un refuge', text:
      'Les niches SOS abritent un téléphone d’urgence et des extincteurs, mais **ne protègent ni de ' +
      'la fumée ni de la chaleur**. Seules les **issues de secours** donnent accès à un espace ' +
      'protégé. Ne vous réfugiez jamais dans une niche SOS en cas d’incendie : gagnez une issue de ' +
      'secours et sortez.' },
    { type: 'figure', name: 'tunnel', wide: true, title: 'Niche SOS ou issue de secours ?',
      caption: 'La confusion entre les deux peut être fatale. La **niche SOS** abrite un téléphone et des extincteurs mais **ne protège ni de la fumée ni de la chaleur**. Seule l’**issue de secours** donne accès à un espace protégé.' },
    { type: 'note', title: 'Repères de distance', text:
      'Les niches SOS avec téléphone d’urgence sont réparties tous les **200 mètres** environ, et les ' +
      'issues de secours à intervalles réguliers, les valeurs exactes varient selon l’âge et la ' +
      'configuration du tunnel. La signalisation indique en permanence la direction et la distance de ' +
      'l’issue la plus proche : prenez l’habitude de la repérer en entrant.' }
  ],
  pro: [
    { type: 'prose', title: 'Pourquoi la fumée tue avant le feu', text: [
      'Dans un incendie en tunnel, la mortalité est due très majoritairement aux fumées : monoxyde de ' +
      'carbone, acide cyanhydrique issu de la combustion des matériaux de synthèse, appauvrissement ' +
      'en oxygène et gaz irritants. Ces effets précèdent largement l’atteinte thermique.',
      'La stratification thermique fait que la fumée chaude occupe d’abord la partie haute, ce qui ' +
      'peut laisser une couche d’air respirable près du sol, jusqu’à ce que le déstockage et la ' +
      'ventilation la fassent descendre. D’où deux consignes : partir tout de suite, et rester bas.'
    ]},
    { type: 'prose', title: 'Pourquoi laisser les clés et abandonner son véhicule', text:
      'Un véhicule immobilisé dans un tunnel bloque l’accès des secours et la ventilation d’un espace ' +
      'confiné. Les exploitants doivent pouvoir le déplacer sans délai. Le réflexe de rester dans sa ' +
      'voiture, très fréquent, est le comportement le plus dangereux : l’habitacle n’offre aucune ' +
      'protection contre les fumées.' },
    { type: 'note', title: 'Ventilation et sens de fuite', text:
      'Les systèmes de ventilation extraient ou poussent les fumées dans un sens déterminé par ' +
      'l’exploitant. Fuir dans le sens du courant d’air revient souvent à suivre la fumée. Les ' +
      'consignes diffusées par haut-parleur et par la signalisation dynamique tiennent compte de ces ' +
      'paramètres : elles priment sur l’intuition.' },
    { type: 'note', title: 'Le téléphone SOS plutôt que le mobile', text:
      'Le poste d’appel d’urgence identifie automatiquement sa position exacte dans le tunnel et ' +
      'aboutit directement au centre d’exploitation, qui peut agir sur la ventilation, la ' +
      'signalisation et la fermeture. Un appel mobile aboutit à une centrale qui devra d’abord ' +
      'localiser l’appelant.' }
  ],
  sources: ['astra-tunnel', 'ocr']
},

/* =========================================================================
   8, SE PRÉPARER
   ========================================================================= */

{
  id: 'kit', group: 'preparer', num: 26, title: 'Kit de premiers secours', icon: 'kit', accent: 'blue',
  keywords: 'trousse pharmacie matériel pansements couverture survie gants voiture maison',
  essentiel: [
    'Un kit à la maison, un dans la voiture',
    'Gants, compresses, bandages, couverture de survie',
    'Vérifier les dates une fois par an',
    'Savoir où il est, et le dire à vos proches'
  ],
  complet: [
    { type: 'list', title: 'Le contenu de base', items: [
      'Gants jetables non stériles : plusieurs paires ;',
      'compresses stériles de différentes tailles ;',
      'bandes de gaze et bandes élastiques ;',
      'pansements adhésifs assortis, pansements pour ampoules ;',
      'pansement compressif (« paquet de pansement ») ;',
      'sparadrap et bande adhésive ;',
      'ciseaux à bouts ronds et pince à échardes ;',
      'couverture de survie ;',
      'désinfectant cutané et sérum physiologique en unidoses ;',
      'masque de poche pour insufflations ;',
      'triangle de tissu (écharpe) ;',
      'liste des numéros d’urgence et carte des allergies ou traitements de la famille.'
    ]},
    { type: 'list', title: 'Dans la voiture, en plus', items: [
      'Gilet de haute visibilité, un **par occupant**, rangé dans l’habitacle et non dans le coffre ;',
      'triangle de panne ;',
      'lampe de poche avec piles chargées ;',
      'couverture de survie supplémentaire ;',
      'de quoi couper une ceinture de sécurité et briser une vitre, à portée du conducteur.'
    ]},
    { type: 'list', title: 'Avec des enfants', items: [
      'Thermomètre ;',
      'sérum physiologique en unidoses ;',
      'pansements de petite taille ;',
      'coordonnées du pédiatre et le numéro {145} bien visible.'
    ]},
    { type: 'note', title: 'Entretien', text:
      'Contrôlez le contenu **une fois par an** : dates de péremption, stérilité des emballages, état ' +
      'des piles. Reconstituez immédiatement ce que vous utilisez. Un kit incomplet découvert au ' +
      'mauvais moment est pire qu’un kit absent, parce qu’on compte dessus.' },
    { type: 'warn', title: 'Le matériel ne remplace pas le geste', text:
      'La quasi-totalité des gestes qui sauvent, alerter, comprimer une hémorragie, mettre en PLS, ' +
      'masser : ne demandent aucun matériel. Un kit bien garni ne compense pas l’absence de ' +
      'formation.' }
  ],
  pro: [
    { type: 'prose', title: 'Improviser efficacement', text:
      'Un tissu propre remplace une compresse, une écharpe ou une cravate fait une écharpe de ' +
      'soutien, un magazine roulé et fixé fait une attelle, un sac plastique protège les mains à ' +
      'défaut de gants. La compression manuelle directe, sans aucun matériel, reste le geste ' +
      'hémostatique le plus efficace. Connaître ces équivalences vaut mieux que posséder un kit ' +
      'que l’on n’a pas sur soi.' },
    { type: 'note', title: 'Garrot et pansement hémostatique', text:
      'Ces dispositifs figurent dans les kits professionnels et sont pertinents dans certains ' +
      'contextes, secours en milieu isolé, activités à risque, situations de victimes multiples. ' +
      'Ils supposent une formation spécifique : un garrot mal posé, trop lâche, aggrave le saignement ' +
      'en bloquant le retour veineux sans interrompre le flux artériel.' },
    { type: 'note', title: 'Documents utiles', text:
      'Une carte listant traitements en cours, allergies, antécédents et personne à prévenir fait ' +
      'gagner un temps réel aux équipes, en particulier si le patient ne peut pas s’exprimer. ' +
      'Les cartes de porteur de pacemaker, de défibrillateur implanté, d’anticoagulant ou ' +
      'd’allergie sévère entrent dans cette catégorie.' }
  ],
  sources: ['samariter', 'erc-fa', 'ocr']
},

{
  id: 'dae-formation', group: 'preparer', num: 27, title: 'Trouver un DAE · se former', icon: 'book', accent: 'red',
  keywords: 'défibrillateur emplacement carte formation cours BLS AED samaritains SRC recyclage',
  essentiel: [
    'Repérez les DAE de vos lieux habituels **maintenant**',
    'Un cours BLS-AED dure environ une demi-journée',
    'Recyclage recommandé tous les 2 ans',
    'Les compétences se perdent vite sans pratique'
  ],
  complet: [
    { type: 'steps', title: 'Repérer les DAE avant d’en avoir besoin', items: [
      'Identifiez les appareils de votre lieu de travail, de votre immeuble, de votre salle de sport et de votre commune.',
      'Cherchez le pictogramme international : cœur vert avec un éclair.',
      'Les emplacements fréquents : gares, aéroports, centres commerciaux, piscines, salles de sport, administrations communales, pharmacies.',
      'Plusieurs applications et cartes cantonales recensent les DAE et alertent les secouristes volontaires à proximité, renseignez-vous sur le dispositif de votre canton.',
      'Ne partez chercher un DAE que si vous n’êtes pas seul : sinon, restez et massez.'
    ]},
    { type: 'warn', title: 'Le problème n’est pas le nombre de DAE', text:
      'Dans le canton de Fribourg entre 2018 et 2022, **549 DAE** étaient enregistrés, et pourtant ' +
      'un défibrillateur n’a été utilisé **avant l’arrivée des secours que dans 19 % des arrêts ' +
      'cardiaques**. Les appareils sont là ; ce qui manque, c’est de savoir où ils sont et d’oser ' +
      's’en servir. D’où l’intérêt de les repérer maintenant, pas le jour où il faudra.' },
    { type: 'note', title: 'Un DAE ne peut pas se tromper', text:
      'L’appareil analyse le rythme et **ne délivre un choc que s’il est indiqué**. Il est ' +
      'impossible de choquer quelqu’un qui ne doit pas l’être. C’est la raison pour laquelle un DAE ' +
      'est conçu pour être utilisé sans formation préalable : il guide vocalement, pas à pas.' },
    { type: 'list', title: 'Se former en Suisse', items: [
      'Cours **BLS-AED** selon les directives du SRC, le standard pour le grand public ;',
      'cours de sauveteur exigé pour le permis de conduire ;',
      'cours des **Samaritains**, largement disponibles dans toutes les régions ;',
      'formations proposées par la Croix-Rouge, les services de sauvetage cantonaux et de nombreuses entreprises ;',
      'modules spécifiques : premiers secours à l’enfant, secourisme en montagne, formation en entreprise.'
    ]},
    { type: 'warn', title: 'Un texte ne remplace pas une démonstration', text:
      'Ce site décrit les gestes ; il ne les **montre** pas. Pour les techniques qui dépendent de la ' +
      'position du corps, PLS, compressions, prise du nourrisson, dégagement d’urgence, un schéma ' +
      'approximatif induit en erreur plus qu’il n’aide. Les planches et vidéos officielles du **SRC** ' +
      'et des **Samaritains** sont conçues pour cela, et un cours en présentiel reste irremplaçable : ' +
      'c’est le seul cadre où quelqu’un corrige votre profondeur de compression et la position de vos ' +
      'mains. Les schémas présents ici se limitent volontairement aux **repères de position** ' +
      '(électrodes, garrot, distances), où être schématique n’induit pas en erreur.' },
    { type: 'note', title: 'Pourquoi se recycler', text:
      'Les compétences pratiques, profondeur des compressions, séquence, utilisation du DAE, se ' +
      'dégradent en quelques mois sans pratique. Un recyclage régulier, de l’ordre de **tous les ' +
      'deux ans**, est recommandé ; une pratique plus brève et plus fréquente est encore plus ' +
      'efficace qu’une longue session espacée.' },
    { type: 'note', title: 'Directives en transition', text:
      'Les directives **ERC/SRC 2025** ont été publiées le 22 octobre 2025. Le SRC prévoit une ' +
      'période de transition durant laquelle des cours peuvent encore être donnés selon la version ' +
      '2021, jusqu’au **31 décembre 2026**. Si vous avez été formé avant, l’essentiel n’a pas changé ' +
      'mais quelques points l’ont fait, notamment chez le nourrisson.' }
  ],
  pro: [
    { type: 'prose', title: 'Défibrillation précoce et accès public', text:
      'Les programmes d’accès public à la défibrillation associent implantation d’appareils dans les ' +
      'lieux à forte fréquentation, signalisation, registre à jour et alerte de secouristes ' +
      'volontaires géolocalisés par la centrale. Leur bénéfice dépend moins du nombre d’appareils ' +
      'installés que du délai réel entre l’effondrement et le premier choc, donc de la capacité à ' +
      'faire venir l’appareil vers la victime, plutôt que l’inverse.' },
    { type: 'prose', title: 'Ce que change réellement la formation', text:
      'Les personnes formées appellent plus vite, entreprennent une réanimation plus souvent, ' +
      'comprimemt plus profondément et interrompent moins. L’effet le plus important est peut-être ' +
      'le plus simple : elles **osent** commencer. La crainte de mal faire ou de causer un dommage ' +
      'est le principal frein documenté à la réanimation par les témoins.' },
    { type: 'note', title: 'Ce qui a changé en 2025, l’essentiel', text:
      'Chez le nourrisson, la technique des **deux pouces encerclants** remplace la technique à deux ' +
      'doigts. Le ratio **15:2** est réservé aux personnes formées au niveau PBLS, les autres ' +
      'utilisant 30:2 après 5 insufflations initiales. En cas de **noyade**, les secouristes formés ' +
      'peuvent débuter par les insufflations. Pour les **brûlures**, aucune durée de refroidissement ' +
      'précise n’est plus recommandée. Les chiffres de la réanimation adulte, 30:2, 100–120/min, ' +
      '5–6 cm : sont **inchangés**.' }
  ],
  sources: ['ohca-fr', 'src-gl', 'src', 'samariter', 'erc-bls', 'erc-pls']
},

{
  id: 'psy', group: 'preparer', num: 28, title: 'Premiers secours psychologiques', icon: 'mind', accent: 'blue',
  keywords: 'psychologique stress soutien secouriste débriefing traumatisme accompagner victime',
  essentiel: [
    'Se présenter, expliquer ce que l’on fait',
    'Écouter sans minimiser ni promettre',
    'Protéger du regard des curieux',
    'Prendre soin de soi après l’intervention'
  ],
  complet: [
    { type: 'steps', title: 'Accompagner une personne en détresse', items: [
      'Présentez-vous et dites ce que vous faites : l’incertitude aggrave l’angoisse.',
      'Placez-vous à sa hauteur, établissez un contact visuel, parlez calmement et lentement.',
      'Protégez son intimité : écartez les curieux, empêchez les photos.',
      'Écoutez sans juger, sans minimiser (« ce n’est rien »), sans promettre ce que vous ne maîtrisez pas (« tout ira bien »).',
      'Ne la poussez **pas** à raconter ce qui s’est passé ni à exprimer ses émotions : écoutez si elle parle, mais ne sollicitez pas le récit.',
      'Dites la vérité simplement : « je ne sais pas, mais les secours arrivent ».',
      'Maintenez le contact physique seulement s’il est accepté et approprié.',
      'Répondez aux besoins concrets : couvrir, boire si autorisé, prévenir un proche, s’occuper des enfants ou d’un animal.',
      'Ne laissez pas la personne seule.'
    ]},
    { type: 'note', title: 'Les proches et les témoins aussi', text:
      'Un témoin choqué, un enfant présent, un conjoint qui assiste à la scène ont aussi besoin ' +
      'd’attention. Confier une tâche simple et utile à quelqu’un qui panique le stabilise souvent, ' +
      'et vous aide.' },
    { type: 'steps', title: 'Après l’intervention, pour vous', items: [
      'Reconnaissez que ce que vous venez de vivre peut vous affecter, y compris si vous avez « bien fait ».',
      'Parlez-en à quelqu’un en qui vous avez confiance, sans attendre d’aller mal.',
      'Des réactions comme les images qui reviennent, les troubles du sommeil, l’irritabilité ou la fatigue sont **normales** dans les jours qui suivent.',
      'Reprenez vos habitudes : sommeil, activité physique, contacts sociaux.',
      'Consultez si ces réactions persistent au-delà de quelques semaines, s’aggravent, ou perturbent votre vie quotidienne.'
    ]},
    { type: 'warn', title: 'Le doute d’avoir mal fait', text:
      'Beaucoup de secouristes occasionnels culpabilisent, en particulier lorsque la personne décède ' +
      'malgré leurs efforts. La réalité est que la survie après un arrêt cardiaque extra-hospitalier ' +
      'reste faible, y compris avec une réanimation parfaite. **Avoir agi est le bon résultat**, ' +
      'quelle que soit l’issue. Le seul geste qui n’a aucune chance de fonctionner est celui qu’on ne ' +
      'tente pas.' }
  ],
  pro: [
    { type: 'prose', title: 'Ce que les premiers secours psychologiques sont, et ne sont pas', text: [
      'Il s’agit d’un soutien humain immédiat : sécurité, information, réconfort, mise en lien avec ' +
      'les proches et les ressources. Ce n’est pas une thérapie ; cela ne nécessite pas de faire ' +
      'raconter l’événement, et cela ne doit rien forcer.',
      'Le **débriefing psychologique** en séance unique, systématiquement proposé après un événement, ' +
      'a longtemps été la norme et n’est aujourd’hui **plus recommandé**. La revue Cochrane ne ' +
      'retrouve aucun bénéfice sur la prévention du trouble de stress post-traumatique ni sur la ' +
      'détresse psychologique, et un essai a même montré un **risque accru** de TSPT à un an. L’OMS ' +
      'ne le recommande pas. L’approche actuelle est le dépistage puis le traitement de ceux qui ne ' +
      'récupèrent pas, pas l’intervention systématique sur tout le monde.',
      'Une différence pratique en découle, souvent mal comprise : les premiers secours ' +
      'psychologiques **n’encouragent pas** la personne à raconter l’événement ni à exprimer ses ' +
      'émotions. On offre sécurité, information et présence ; on écoute si elle parle ; on ne ' +
      'sollicite pas le récit.'
    ]},
    { type: 'prose', title: 'Réaction normale et trouble constitué', text:
      'Les réactions de stress aigu, reviviscences, hypervigilance, évitement, troubles du sommeil, ' +
      'émoussement, sont fréquentes et régressent spontanément dans la majorité des cas. Leur ' +
      'persistance au-delà d’un mois, avec un retentissement fonctionnel, oriente vers un trouble de ' +
      'stress post-traumatique, qui relève d’une prise en charge spécialisée et efficace. Le facteur ' +
      'protecteur le mieux documenté est le **soutien social perçu**.' },
    { type: 'note', title: 'Facteurs de risque de mauvaise évolution', text:
      'Implication personnelle avec la victime, décès d’un enfant, sentiment de responsabilité, ' +
      'isolement social, antécédents psychiatriques ou traumatiques, exposition répétée. Ces ' +
      'situations justifient une attention particulière et une orientation proactive.' },
    { type: 'note', title: 'Cadre suisse', text:
      'Des équipes de **care** et de soutien psychologique d’urgence existent dans tous les cantons ' +
      'et peuvent être engagées par les centrales d’alarme pour les victimes, les proches et les ' +
      'témoins. Vous pouvez le demander lors de l’appel, ou après coup auprès de votre médecin.' }
  ],
  sources: ['cochrane-debrief', 'erc-fa', 'rcuk-fa', 'samariter']
}

];
