/* =========================================================================
   Schémas : SVG originaux.

   IMPORTANT : ces illustrations sont des dessins ORIGINAUX. Elles ne
   reproduisent aucune planche de l'ERC, du SRC, de la Croix-Rouge ni d'aucun
   autre éditeur. Ces documents sont protégés par le droit d'auteur.
   Ce qui provient des directives, c'est le CONTENU représenté (position des
   électrodes, hauteur du garrot, etc.), vérifié dans sources.js ; le tracé est
   propre à ce site.

   Conventions de style (voir styles.css) :
     .s   trait principal        .sa  trait accentué (rouge)
     .f   remplissage doux       .fa  remplissage accentué
     .t   étiquette              .tn  numéro de panneau
     .d   trait de repère (tireté)
   ========================================================================= */

window.FIGURES = {

/* ---------- Point de compression et posture ---------- */
'compression': {
  title: 'Repère anatomique du point de compression thoracique',
  viewBox: '0 0 420 150',
  svg: `
  <g>
    <text class="t" x="10" y="18">Où appuyer, moitié inférieure du sternum</text>
    <path class="s f" d="M100 46 Q150 40 200 46 L206 128 Q150 156 94 128 Z"/>
    <path class="s" d="M150 44 L150 132"/>
    <path class="s" d="M112 62 Q150 70 188 62"/>
    <path class="s" d="M106 82 Q150 92 194 82"/>
    <path class="s" d="M104 102 Q150 112 196 102"/>
    <circle class="sa fa" cx="150" cy="106" r="17"/>
    <path class="sa" d="M150 96 L150 116 M140 106 L160 106"/>
    <path class="d" d="M150 106 L232 106"/>
    <text class="t" x="238" y="102">Talon de la main ici,</text>
    <text class="t" x="238" y="118">seconde main par-dessus</text>
  </g>`
},

/* ---------- Électrodes du DAE ---------- */
'dae': {
  title: 'Position des électrodes du défibrillateur, adulte et enfant',
  viewBox: '0 0 420 255',
  svg: `
  <g>
    <text class="t" x="14" y="18">Adulte, et enfant de plus de 25 kg</text>
    <path class="s f" d="M52 52 Q110 44 168 52 L174 150 Q110 180 46 150 Z"/>
    <path class="s" d="M110 50 L110 154"/>
    <path class="s" d="M66 72 Q110 80 154 72"/>
    <path class="s" d="M60 96 Q110 106 160 96"/>
    <rect class="sa fa" x="60" y="60" width="34" height="26" rx="5"/>
    <rect class="sa fa" x="140" y="106" width="34" height="26" rx="5"/>
    <text class="t" x="14" y="200">1 · sous la clavicule droite</text>
    <text class="t" x="14" y="218">2 · sous l’aisselle gauche</text>
    <text class="tn" x="72" y="78">1</text>
    <text class="tn" x="152" y="124">2</text>
  </g>
  <g transform="translate(228,0)">
    <text class="t" x="6" y="18">Enfant &lt; 25 kg ou &lt; 8 ans</text>
    <path class="s f" d="M14 58 Q48 52 82 58 L86 126 Q48 146 10 126 Z"/>
    <path class="s" d="M48 56 L48 130"/>
    <rect class="sa fa" x="34" y="78" width="28" height="22" rx="5"/>
    <text class="t2" x="26" y="160">Poitrine</text>
    <path class="s f" d="M108 58 Q142 52 176 58 L180 126 Q142 146 104 126 Z"/>
    <path class="s" d="M142 64 L142 120"/>
    <rect class="sa fa" x="128" y="78" width="28" height="22" rx="5"/>
    <text class="t2" x="128" y="160">Dos</text>
    <text class="t" x="6" y="200">Une devant, une dans le dos.</text>
    <text class="t" x="6" y="218">Mode enfant si l’appareil</text>
    <text class="t" x="6" y="236">en est équipé.</text>
  </g>`
},

/* ---------- Garrot ---------- */
'garrot': {
  title: 'Pose d’un garrot sur un membre',
  viewBox: '0 0 420 200',
  svg: `
  <g>
    <path class="s f" d="M40 62 Q40 46 58 46 L330 46 Q352 46 352 66 L352 104 Q352 124 330 124 L58 124 Q40 124 40 108 Z"/>
    <circle class="s" cx="196" cy="85" r="16"/>
    <text class="t" x="176" y="146">articulation</text>
    <circle class="sa fa" cx="304" cy="85" r="13"/>
    <path class="sa" d="M296 77 L312 93 M312 77 L296 93"/>
    <text class="t" x="272" y="160">plaie</text>
    <rect class="sa fa" x="112" y="38" width="20" height="94" rx="6"/>
    <path class="d" d="M132 30 L304 30"/>
    <path class="s" d="M132 24 L132 36 M304 24 L304 36"/>
    <text class="t" x="164" y="20">5 à 7 cm au-dessus</text>
    <g transform="translate(178,60)">
      <circle class="sa" cx="18" cy="25" r="20" fill="none"/>
      <path class="sa" d="M5 12 L31 38"/>
    </g>
    <text class="t2" x="14" y="180">Jamais sur une articulation · serrer jusqu’à l’arrêt</text>
    <text class="t2" x="14" y="195">du saignement · noter l’heure de pose</text>
  </g>`
},

/* ---------- Zones de Jackson ---------- */
'jackson': {
  title: 'Les trois zones de Jackson dans une brûlure',
  viewBox: '0 0 420 220',
  svg: `
  <g>
    <ellipse class="s f2" cx="150" cy="110" rx="118" ry="80"/>
    <ellipse class="s f3" cx="150" cy="110" rx="80" ry="52"/>
    <ellipse class="sa fa2" cx="150" cy="110" rx="40" ry="25"/>
    <path class="d" d="M150 110 L296 66"/>
    <path class="d" d="M204 92 L296 118"/>
    <path class="d" d="M246 150 L296 170"/>
    <text class="t" x="302" y="62">Coagulation</text>
    <text class="t2" x="302" y="78">nécrose irréversible</text>
    <text class="t" x="302" y="114">Stase</text>
    <text class="t2" x="302" y="130">lésée mais récupérable</text>
    <text class="t" x="302" y="166">Hyperhémie</text>
    <text class="t2" x="302" y="182">réversible</text>
  </g>`
},

/* ---------- Couloir de secours ---------- */
'couloir': {
  title: 'Formation du couloir de secours sur autoroute',
  viewBox: '0 0 420 296',
  svg: `
  <defs>
    <g id="car">
      <rect x="0" y="0" width="30" height="14" rx="4"/>
      <path d="M21 1 L21 13" fill="none"/>
    </g>
    <g id="amb">
      <rect x="0" y="0" width="38" height="15" rx="4"/>
      <path d="M26 1 L26 14" fill="none"/>
      <path d="M7 7.5 L15 7.5 M11 3.5 L11 11.5" fill="none"/>
    </g>
  </defs>

  <text class="t" x="12" y="16">Trois voies</text>
  <rect class="s froad" x="12" y="26" width="396" height="104" rx="3"/>
  <rect class="fv" x="13" y="60" width="394" height="30"/>
  <path class="d" d="M12 60 L408 60 M12 90 L408 90"/>
  <use class="car" href="#car" x="40" y="32"/><use class="car" href="#car" x="128" y="32"/>
  <use class="car" href="#car" x="216" y="32"/><use class="car" href="#car" x="316" y="32"/>
  <use class="car" href="#car" x="34" y="96"/><use class="car" href="#car" x="122" y="96"/>
  <use class="car" href="#car" x="228" y="96"/><use class="car" href="#car" x="330" y="96"/>
  <use class="car" href="#car" x="72" y="113"/><use class="car" href="#car" x="180" y="113"/><use class="car" href="#car" x="292" y="113"/>
  <use class="amb" href="#amb" x="150" y="67"/>
  <path class="sa" d="M198 74 L240 74"/><path class="sa" d="M232 68 L240 74 L232 80"/>
  <path class="s" d="M22 52 L22 36 M18 41 L22 35 L26 41"/>
  <path class="s" d="M22 98 L22 116 M18 111 L22 117 L26 111"/>
  <text class="t2" x="12" y="148">Voie de gauche vers la gauche, voies du milieu et de droite vers la droite.</text>

  <text class="t" x="12" y="184">Deux voies</text>
  <rect class="s froad" x="12" y="194" width="396" height="76" rx="3"/>
  <rect class="fv" x="13" y="222" width="394" height="28"/>
  <path class="d" d="M12 232 L408 232"/>
  <use class="car" href="#car" x="40" y="200"/><use class="car" href="#car" x="136" y="200"/>
  <use class="car" href="#car" x="240" y="200"/><use class="car" href="#car" x="336" y="200"/>
  <use class="car" href="#car" x="56" y="252"/><use class="car" href="#car" x="164" y="252"/><use class="car" href="#car" x="286" y="252"/>
  <use class="amb" href="#amb" x="150" y="228"/>
  <path class="sa" d="M198 235 L240 235"/><path class="sa" d="M232 229 L240 235 L232 241"/>
  <text class="t2" x="12" y="288">Le couloir se forme toujours entre la voie de gauche et la suivante.</text>`
},

/* ---------- Triangle de panne sur autoroute ---------- */
'triangle': {
  title: 'Placement du triangle de panne sur autoroute',
  viewBox: '0 0 420 170',
  svg: `
  <g>
    <path class="s" d="M10 40 L410 40"/>
    <path class="d" d="M10 78 L410 78"/>
    <path class="s" d="M10 116 L410 116"/>
    <rect class="s f" x="300" y="86" width="62" height="26" rx="6"/>
    <circle class="s" cx="314" cy="114" r="5"/><circle class="s" cx="350" cy="114" r="5"/>
    <path class="sa" d="M126 106 L140 82 L154 106 Z"/>
    <path class="d" d="M140 130 L300 130"/>
    <path class="s" d="M140 124 L140 136 M300 124 L300 136"/>
    <text class="t" x="168" y="152">au moins 100 m sur autoroute</text>
    <path class="sa" d="M30 78 L74 78"/>
    <path class="sa" d="M62 68 L74 78 L62 88"/>
    <text class="t" x="10" y="30">Sens de circulation</text>
  </g>`
},

/* ---------- Tunnel : niche SOS vs issue de secours ---------- */
'tunnel': {
  title: 'Tunnel : différence entre niche SOS et issue de secours',
  viewBox: '0 0 420 200',
  svg: `
  <g>
    <path class="s" d="M20 150 L400 150"/>
    <path class="s" d="M20 46 Q210 16 400 46"/>
    <rect class="s f" x="70" y="96" width="52" height="54" rx="4"/>
    <circle class="sa" cx="96" cy="118" r="10"/>
    <path class="sa" d="M92 114 Q96 122 100 114"/>
    <text class="t" x="58" y="172">Niche SOS</text>
    <text class="t2" x="42" y="188">téléphone · PAS un refuge</text>
    <rect class="s f" x="268" y="88" width="58" height="62" rx="4"/>
    <path class="sa fa" d="M282 100 L312 100 L312 150 L282 150 Z"/>
    <circle class="sa" cx="306" cy="126" r="3"/>
    <text class="t" x="252" y="172">Issue de secours</text>
    <text class="t2" x="244" y="188">espace protégé des fumées</text>
    <path class="d" d="M122 74 L268 74"/>
    <path class="s" d="M122 68 L122 80 M268 68 L268 80"/>
    <text class="t" x="150" y="64">niches SOS ≈ tous les 200 m</text>
  </g>`
}

};
