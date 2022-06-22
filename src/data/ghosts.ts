import { langs } from "@/locales/index";

export enum GhostEnum {
  SPIRIT = "Spirit",
  WRAITH = "Wraith",
  PHANTOM = "Phantom",
  POLTERGEIST = "Poltergeist",
  BANSHEE = "Banshee",
  JINN = "Jinn",
  MARE = "Mare",
  REVENANT = "Revenant",
  SHADE = "Shade",
  DEMON = "Demon",
  YUREI = "Yurei",
  ONI = "Oni",
  YOKAI = "Yokai",
  HANTU = "Hantu",
  GORYO = "Goryo",
  MYLING = "Myling",
  ONRYO = "Onryo",
  THE_TWINS = "The Twins",
  RAIJU = "Raiju",
  OBAKE = "Obake",
  THE_MIMIC = "The Mimic",
  MOROI = "Moroi",
  DEOGEN = "Deogen",
  THAYE = "Thaye"
}

export enum EvidenceEnum {
  EMF_LEVEL_5 = "EMF Level 5",
  DOTS_PROJECTOR = "D.O.T.S Projector",
  FINGERPRINTS = "Fingerprints",
  GHOST_ORB = "Ghost Orb",
  GHOST_WRITING = "Ghost Writing",
  SPIRIT_BOX = "Spirit Box",
  FREEZING_TEMPERATURES = "Freezing Temperatures"
}

export const evidences = Object.values(EvidenceEnum);

export const ghosts = Object.values(GhostEnum);

type WithTranslationType<T> = { [lng in keyof typeof langs]: T };

export const data: {
  [ghostType in GhostEnum]: {
    description: WithTranslationType<string>;
    strength?: WithTranslationType<string>;
    weakness: WithTranslationType<string>;
    evidence: EvidenceEnum[];
  };
} = {
  [GhostEnum.SPIRIT]: {
    description: {
      en: "Spirits are very common ghosts. They are very powerful, but passive, only attacking when they need to. They defend their place of death to the utmost degree killing anyone that is caught overstaying their welcome.",
      ru: "Дух — очень часто встречающийся вид призрака. Духи сильны, но пассивны, и атакуют только в случае необходимости. Дух воинственно защищает своё место смерти, убивая любого, кто посмеет задержаться дольше приличного.",
      uk: "Дух (Spirit) — це найбільш поширений вид привидів, однак він теж сильний і небезпечний. Духів можна виявити там, де недавно при дивних обставинах загинули люди."
    },
    weakness: {
      en: "Smudge sticks are more effective, preventing a hunt for longer.",
      ru: "Дым от благовония обезоруживает Духа на некоторое время.",
      uk: "Дим від Пахощів знесилює Духів на деякий час."
    },
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.WRAITH]: {
    description: {
      en: "Wraiths are one of the most dangerous ghosts you will find. It is also the only known ghost that has the ability of flight and has sometimes been known to travel through walls.",
      ru: "Мираж — один из самых опасных видов призраков. Это единственный вид, который способен парить или проходить сквозь стены.",
      uk: "Спектр (Wraith) — це один з найнебезпечніших видів привидів. Єдиний вид, який здатний парити, а також проходити крізь стіни."
    },
    strength: {
      en: "Does not leave UV footprints after stepping in salt",
      ru: "Мираж практически никогда не касается земли, а следовательно, его невозможно отследить по шагам.",
      uk: "Спектр практично ніколи не торкається землі, а отже, він не видає ніяких звуків при пересуванні."
    },
    weakness: {
      en: "Will become more active if it steps in salt.",
      ru: "Соль токсична для этого вида призраков",
      uk: "Сіль токсична для даного виду привидів."
    },
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.PHANTOM]: {
    description: {
      en: "A Phantom is a ghost that can possess the living, inducing fear into those around it. They are most commonly summoned from Ouija Boards.",
      ru: "Фантом — призрак, способный вселяться в живых людеи и приводить всех поблизости в ужас. Обычно появление фантома связано с неосторожным использованием доски Уиджи.",
      uk: "Фантом (Phantom) — привид, здатний вселятися в живих людей і зазвичай з'являється в результаті необережного використання дошки Віджа. Він вселяє страх у вах, хто знаходиться поруч з ним,"
    },
    strength: {
      en: "Looking at a Phantom will lower the player's sanity considerably",
      ru: "Один лишь вид Фантома заметно снижает ваш уровень рассудка.",
      uk: "Один лише вигляд Фантома помітно знижує ваш рівень глузду."
    },
    weakness: {
      en: "Taking a photo of the Phantom will cause it to briefly disappear.",
      ru: "Если вам удастся сфотографировать Фантома, он на время исчезнет.",
      uk: "Якщо вам вдасться сфотографувати Фантома, Він на деякий час зникне."
    },
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.POLTERGEIST]: {
    description: {
      en: "One of the most famous ghosts, the Poltergeist. Known to manipulate objects around it to spread fear into its victims.",
      ru: "Полтергейст — один из самых известных призраков. Он может взаимодеиствовать с окружающими объектами, чтобы вселять ужас в своих жертв.",
      uk: "Полтергейст (Poltergeist) — один з найвідоміших привидів. Він може шуміти и взаємодіяти з навколишніми об'єктами, щоб вселяти жах у своїх жертв."
    },
    strength: {
      en: "Capable of throwing multiple objects at once",
      ru: "Полтергейст может швырять несколько предметов одновременно.",
      uk: "Полтергейст здатний жбурляти велике число предметів одночасно."
    },
    weakness: {
      en: "Becomes powerless with no throwables nearby.",
      ru: "Полтергейст практически безоружен, если ему нечем бросаться.",
      uk: "Полтергейст практично безсилий в порожній кімнаті."
    },
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.BANSHEE]: {
    description: {
      en: "The singing siren, known for attracting its Victims through song. It has been known to single out its prey before making a killing blow.",
      ru: "Сирена-обольстительница, завлекающая своих жертв при помощи песни. Известно, что банши будет целенаправленно преследовать избранную жертву, прежде чем нанести смертельный удар.",
      uk: "Банші (Banshee) — сирена, яка спокушає своїх жертв за допомогою співу. Відомо, що Банші цілеспрямовано переслідуватиме обрану жертву, перш ніж завдати смертельного удару."
    },
    strength: {
      en: "Will target only one player at a time",
      ru: "Банши будет ослаблять свою жертву перед атакой на нее.",
      uk: "Банші знесилює свою жертву, перш ніж напасти на неї."
    },
    weakness: {
      en: "Has a distinctive wail on the Parabolic Microphone.",
      ru: "Направленный микрофон может засечь крик Банши.",
      uk: "Іноді крик Банші можна почути за допомогою спрямованого мікрофона."
    },
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FINGERPRINTS
    ]
  },
  [GhostEnum.JINN]: {
    description: {
      en: "A Jinn is a territorial ghost that will attack when threatened. It has also been known to be able to travel at significant speed",
      ru: "Джинн — призрак, ревниво относящийся к своей территории и атакующии в случае опасности. Известно, что Джинны могут перемещаться с очень высокой скоростью.",
      uk: "Джин (Jinn) — привид, який ревниво ставиться до своєї території й атакує у разі небезпеки. Відомо, що Джини можуть переміщатися з дуже високою швидкістю."
    },
    strength: {
      en: "Travels at faster speeds if its victim is far away",
      ru: "Джинн будет перемещаться быстрее, если жертва находится далеко.",
      uk: "Джин буде переміщатися швидше, якщо жертва знаходиться далеко."
    },
    weakness: {
      en: "Cannot use its ability if the site's fuse box is off.",
      ru: "В отсутствие электричества, Джинн не может использовать свои умения.",
      uk: "За відсутності електрики, Джин не може використовувати свої вміння."
    },
    evidence: [
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.MARE]: {
    description: {
      en: "A Mare is the source of all nightmares, making it most powerful in the dark.",
      ru: "Мара — источник всех кошмарных сновидений и наиболее сильна в темноте.",
      uk: "Мара (Mare) — джерело вах кошмарних сновидінь і є надзвичайно сильною у темряві."
    },
    strength: {
      en: "Has an increased chance to attack in the dark",
      ru: "Мара будет более агрессивна под покровом темноты.",
      uk: "Мара буде агресивніша під покровом темряви."
    },
    weakness: {
      en: "Turning the lights on will reduce the chance of an attack.",
      ru: "В освещённых помещениях, вероятность быть атакованным Марой меньше.",
      uk: "В освітлених приміщеннях, ймовірність бути атакованим Марою набагато менша."
    },
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.REVENANT]: {
    description: {
      en: "A Revenant is a violent ghost that will attack indiscriminately. Their speed can be deceiving, as they are slow while dormant: however, as soon as they hunt they can move incredibly fast.",
      ru: "Ревенант — жестокий призрак, который будет атаковать всех без разбору. Не позволяйте ему ввести вас в заблуждение: Ревенант медлителен пока дремлет, однако может передвигаться с невероятно высокой скоростью во время охоты.",
      uk: "Ревенант (Revenant) — повільний, але жорстокий привид, який буде атакувати вах без розбору. Кажуть, він рухається набагато швидше, коли виходить на полювання."
    },
    strength: {
      en: "Can travel significantly faster if a player is spotted during a hunt",
      ru: "Ревенант будет передвигаться значительно быстрее, преследуя свою жертву.",
      uk: "Ревенант буде пересуватися значно швидше, переслідуючи свою жертву."
    },
    weakness: {
      en: "Moves very slowly when not chasing a player.",
      ru: "Пока вы прячетесь от Ревенанта, он будет передвигаться очень медленно.",
      uk: "Якщо сховатися від Ревенанта, він буде пересуватися дуже повільно."
    },
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.SHADE]: {
    description: {
      en: "A Shade is known to be very shy. There is evidence to suggest that a Shade will stop all paranormal activity if there are multiple people nearby.",
      ru: "Тень — застенчивый призрак. Похоже, что Тень прекращает любую деятельность если рядом находятся сразу несколько человек.",
      uk: "Тінь (Shade) — сором'язливий привид, як відомо, Тінь припиняє будь-яку діяльність, якщо поруч знаходяться відразу кілька людей."
    },
    strength: {
      en: "Being shy makes it more difficult to locate and obtain evidence",
      ru: "Поскольку Тень застенчива, найти её будет нелегко.",
      uk: "Оскільки Тінь соромлива, знайти її буде важче."
    },
    weakness: {
      en: "Less likely to hunt if multiple people are nearby.",
      ru: "Если рядом сразу несколько человек, Тень не станет охотиться.",
      uk: "Якщо поруч відразу кілька людей, Тінь не стане полювати."
    },
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.DEMON]: {
    description: {
      en: "Demons are the most aggressive ghosts we've ever encountered. Known to attack without reason, they seem to enjoy the thrill of the hunt.",
      ru: "Демон — самый агрессивный из всех видов призраков, с которыми мы когда-либо столкнулись. Демон склонен атаковать совершенно беспричинно — похоже, он наслаждается азартом охоты.",
      uk: "Демон (Demon) — найагресивніший вид привида, з яким ми коли-небудь стикалися. Відомо, що вони нападають без причини та схоже, що вони отримують особливе задоволення полюючи на свою жертву."
    },
    strength: {
      en: "Can initiate hunts more often",
      ru: "Демоны охотятся чаще всех остальных видов.",
      uk: "Демони будуть розпочинати полювання частіше, ніж інші види привидів."
    },
    weakness: {
      en: "Crucifix effectiveness is increased to 5m against one.",
      ru: "Демоны боятся распятия и будут менее агрессивны, если оно оставлено поблизости.",
      uk: "Демони бояться Розп'яття і будуть менш агресивними, якщо воно поруч."
    },
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.YUREI]: {
    description: {
      en: "A Yurei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred.",
      ru: "Как правило, Юрэи возвращаются в наш мир ради мести или из-за ненависти к людям",
      uk: "Юрей (Yurei) — привид, який зазвичай повертається у світ живих заради помсти або через ненависть до людей."
    },
    strength: {
      en: "Has a stronger effect on sanity",
      ru: "Юрэй оказывают более сильное влияние на рассудок, чем другие виды призраков.",
      uk: "Юрей впливають на рівень вашого глузду сильніше звичайного."
    },
    weakness: {
      en: "Smudging the Yurei's ghost room will reduce how often it wanders.",
      ru: "Если освятить место смерти Юрей при помощи благовония, передвижения призрака будут временно ограничены.",
      uk: "Якщо запалити пахощі в кімнаті з Юрей, привид не зможе переміщатися по локації досить довгий час."
    },
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.ONI]: {
    description: {
      en: "Onis love to seare their victims as much as possible before attacking. They are often seen in their physical form guarding their place of death.",
      ru: "Этот призрак обожает приводить свою жертву в настоящии ужас, перед тем как наброситься на неё. Зачастую Они сторожит место своей смерти, принимая для этого физическое обличие.",
      uk: "Оні (Опі) — привид, який полюбляє наводити страх на свою жертву, перед тим як накинутися на неї. Найчастіше Оні оберігає місце своєї смерті, приймаючи для цього фізичну подобу."
    },
    strength: {
      en: "Increased activity and ghost events",
      ru: "Они более активны в присутствии людей и могут перемещать предметы с высокой скоростью.",
      uk: "Оні більш активні в присутності людей і здатні переміщати предмети з високою швидкістю."
    },
    weakness: {
      en: "An Oni's increased activity makes them easier to find.",
      ru: "Поскольку Они предпочитают активные деиствия, их легко наити и распознать.",
      uk: "Оскільки Оні полюбляють активні дії, їх дегко знайти та розпізнати."
    },
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.YOKAI]: {
    description: {
      en: "Yokai are common ghosts that are attracted to human voices. They can usually be found haunting family homes.",
      ru: "Екай — призрак, которого манит человеческий голос. Данный вид обычно обитает в домах, где раньше жили семьи.",
      uk: "Йокай (Yokai) — привид, якого приваблює людський голос. Даний вид доволі поширений. Зазвичай його можна зустріти в будинку, де раніше мешкала родина."
    },
    strength: {
      en: "Talking near the Yokai will anger it, increasing the chance to attack",
      ru: "Если Екай близко, звук вашего голоса разозлит его и повысит вероятность нападения на вас.",
      uk: "Розмова біля Йокая розлютить його і збільшить шанс напасти на вас."
    },
    weakness: {
      en: "Can only hear voices close to it during a hunt.",
      ru: "Во время охоты, Екай слышит только тех, кто находится рядом с ним.",
      uk: "Під час полювання, Йокай чує голос гравців лише поряд із собою."
    },
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.HANTU]: {
    description: {
      en: "A Hantu is a care ghost that thrives in the coldest climates. The cold seems to make them more aggressive and empowered.",
      ru: "Ханту — редкий вид призраков, чувствительный к повышению температуры. Похоже, что холод делает их сильнее и агрессивнее.",
      uk: "Ханту (Hantu) — рідкісний вид привидів, який чутливий до підвищення температури. Схоже, що холод може зробити його сильнішим і агресивнішим."
    },
    strength: {
      en: "Lower temperatures allow the Hantu to move faster",
      ru: "На холоде, Ханту может передвигаться быстрее",
      uk: "Ханту перебуваючи на холоді здатний пересуватися набагато швидше"
    },
    weakness: {
      en: "Warmer areas slow the Hantu's movement.",
      ru: "Ханту будет двигаться медленнее, когда в помещении тепло.",
      uk: "Ханту буде рухатися повільніше, якщо в приміщенні тепло."
    },
    evidence: [
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.GORYO]: {
    description: {
      en: "When a Goryo passes through a D.O.T.S projector, using a video camera is the only way to see it.",
      ru: "Когда Горё проходит вблизи лазерного проектора, его присутствие можно заметить только при наблюдении через видеокамеру.",
      uk: "Горьо (Goryo) — таємничий привид, якого можна виявити завдяки лазерної астки проєктора D.O.T.S при перегляді через відеокамеру."
    },
    strength: {
      en: "Can only be seen interacting with D.O.T.S. through a camera when nobody is nearby",
      ru: "Горё будет прятаться от камер, если рядом кто-то есть.",
      uk: "Зазвичай Горьо показує себе, лише якщо поряд нікого немає."
    },
    weakness: {
      en: "Tends to wander away less from its ghost room.",
      ru: "Горё редко уходит далеко от своего места смерти.",
      uk: "Горьо рідко покидає місце своєї смерті."
    },
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FINGERPRINTS
    ]
  },
  [GhostEnum.MYLING]: {
    description: {
      en: "A Myling is a very vocal and active ghost. They are rumoured to be quiet when hunting their prey.",
      ru: "Мюлинг — очень разговорчивый и активный вид призрака. Говорят, они притихают во время охоты за жертвой.",
      uk: "Майлінг (Myling) — дуже балакучий і активний вид привида. Кажуть, що вони притихають під час полювання за жертвою."
    },
    strength: {
      en: "Has quieter footsteps during a hunt",
      ru: "Мюлинг будет вести себя тише во время охоты.",
      uk: "Майлінг буде поводитися тихіше під час полювання."
    },
    weakness: {
      en: "Produces paranormal sounds more frequently.",
      ru: "Мюлинги издают звуки чаще других видов призраков.",
      uk: "Майлінг видає звуки частіше, ніж інші види привидів."
    },
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FINGERPRINTS
    ]
  },
  [GhostEnum.ONRYO]: {
    description: {
      en: "The Oryo is often referred to as “The Wrathful Spirit“. It steals souls from dying victims' bodies to seek revenge. This ghost has been known to fear any form of fire, and will do anything to be far from it.",
      ru: "Онрё часто называют “Гневным духом“. Он похищает души из тел умирающих жертв, чтобы отомстить. Известно, что этот призрак боится огня и сделает все, чтобы держаться от него подальше.",
      uk: "Онрйо (Oryo) — привид, якого часто називають “Гнівним духом“, адже він використовує душу жертви, що помирає задля помсти. Відомо, що цей привид боїться будь-якої форми вогню і зробить все, щоб бути якомога далі від нього."
    },
    strength: {
      en: "A flame extinguishing can cause an Onryo to attack",
      ru: "Когда огонь потухнет, Онрё может напасть на вас.",
      uk: "Погашення полум'я може викликати атаку Онрио"
    },
    weakness: {
      en: "The presence of flames reduces the Onryo's ability to attack.",
      ru: "Когда ему угрожает опасность, этот призрак охотится реже.",
      uk: "Полум'я буде стримувати Онрио і він буде рідше полювати."
    },
    evidence: [
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FREEZING_TEMPERATURES,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.THE_TWINS]: {
    description: {
      en: "These ghosts have been reported to mimic each other's actions. They alternate their attacks to confuse their prey.",
      ru: "Сообщается, что эти призраки любят повторять друг за другом. Они атакуют поочерёдно, чтобы запутать добычу.",
      uk: "Близнюки (The Twins) — привиди, які імітують дії один одного. Вони чергують свої атаки, щоб заплутати свою здобич."
    },
    strength: {
      en: "Either Twin may start a hunt, though not at the same time",
      ru: "Любой из Близнецов может разозлиться и начать охоту.",
      uk: "Кожен з Близнюків може розлютитися і розпочати полювання на свою здобич."
    },
    weakness: {
      en: "Will often interact with the environment at the same time",
      ru: "Близнецы часто взаимодействуют с окружающей средой одновременно.",
      uk: "Близнюки зчаста одночасно взаємодіють з навколишнім середовищем."
    },
    evidence: [
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FREEZING_TEMPERATURES,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.RAIJU]: {
    description: {
      en: "A Raiju is a demon that thrives on electrical current. While generally calm, they can become agitated when overwhelmed with power.",
      ru: "Райдзю — демон, который питается электрическим током. Хотя в целом Райдзю спокойны, они могут приходить в волнение, когда переполнены силой.",
      uk: "Райдзю (Raiju) — демон, який процвітає під дією електричного струму. Хоч вони в цілому спокійні, але вони можуть розсердитися, коли перевантажені силою."
    },
    strength: {
      en: "Moves faster near electrical devices",
      ru: "Райдзю могут перемещаться быстрее, поглощая энергию из близлежащих электроприборов.",
      uk: "Райджу живиться найближчим електричним обладнанням, що робить його швидшим."
    },
    weakness: {
      en: "Disrupts electronic equipment from further away when it hunts.",
      ru: "Райдзю постоянно выводят из строя электроприборы, благодаря чему этого призрака проще обнаружить во время атаки.",
      uk: "Райджу постійно виводить з ладу електричне обладнання, щополегшує передбачити атаку."
    },
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.GHOST_ORB
    ]
  },
  [GhostEnum.OBAKE]: {
    description: {
      en: "Obake are terrifying shape-shifters, capable of taking an many forms. They have been seen taking on humanoid shapes to attract their prey.",
      ru: "Обакэ — жуткие оборотни, способные принимать самые различные формы. Они иногда принимают человекоподобное обличие, чтобы привлечь свою добычу.",
      uk: "Обаке (Obake) — це жахливі перевертні, які здатні приймати різні форми. Помічали, що вони набували гуманоїдних форм, щоб заманити свою здобич."
    },
    strength: {
      en: "May leave fingerprints that disappear quicker",
      ru: "Обакз редко оставляет следы при взаимодеиствии с окружающеи средой.",
      uk: "При взаємодії з навколишнім середовищем Обаке рідко залишає сліди."
    },
    weakness: {
      en: "Has a small chance of leaving six-fingered handprints.",
      ru: "Иногда этот призрак меняет обличие, в процессе оставляя уникальные следы.",
      uk: "Іноді цей привид може перетворюватися, залишаючи за собою унікальні докази."
    },
    evidence: [
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FINGERPRINTS
    ]
  },
  [GhostEnum.THE_MIMIC]: {
    description: {
      en: "The Mimic is an elusive, mysterious, copycat ghost that mirrors traits and behaviours from others, including other ghost types.",
      ru: "Мимик — изворотливый и загадочный призрак-подражатель, которыи копирует черты и поведение других. Мимик может имитировать даже другие виды призраков.",
      uk: "Мімік (The Mimic) — невловний, таємничий привид-копіювальник, який копіює особливість та поведінку інших, включаючи інших видів привидів."
    },
    strength: {
      en: "Can mimic the abilities and traits of other ghosts",
      ru: "Мы не знаем, на что ещё способен этот призрак. Будьте осторожны.",
      uk: "Ми не знаємо, на що здатний цей привид. Будьте обережними."
    },
    weakness: {
      en: "Will present Ghost Orbs as a secondary evidence.",
      ru: "Было неоднократно замечено, что рядом с Мимиками появляются призрачные огни.",
      uk: "У кількох звітах відзначається, що біля них можна помітити примарний вогник."
    },
    evidence: [
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.FREEZING_TEMPERATURES,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.MOROI]: {
    description: {
      en: "Moroi have risen from the grave to drain energy from the living. They have been known to place curses on their victims, curable only by antidotes or moving very far away.",
      ru: "Морой восстают из могилы ради того, чтобы питаться энергией ещё живых существ. Они могут проклинать своих жертв, а снять их чары можно только использовав антидот, либо уйдя как можно дальше от призрака.",
      uk: "Морой (Moroi) — привид, що постає з могили заради того, щоб поживитись енергією живих істот. Вони були відомі тим, що проклинали своїх жертв, а зняти їх чари можна Лише використавши антидот або переїздом якнайдалі."
    },
    strength: {
      en: "The weaker their victims, the stranger the Moroi becomes",
      ru: "Чем слабее их жертвы, тем сильнее Морой.",
      uk: "Чим слабша жертва, тим сильніший Морой."
    },
    weakness: {
      en: "Moroi suffer from hyperosmia, weakening them for longer periods",
      ru: "Морои страдают от гиперосмии. Используйте это, чтобы надолго вывести призрака из строя.",
      uk: "Морой страждає від гіперосмії, яка послаблює його на тривалий час"
    },
    evidence: [
      EvidenceEnum.SPIRIT_BOX,
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.DEOGEN]: {
    description: {
      en: "Sometimes surrounded by an endless fog, Deogen have been eluding ghost hunters for years. These ghosts have been reported to find even the most hidden prey before stalking them into exhaustion.",
      ru: "Порой окутанный бесконечным туманом, Деоген много лет является загадкой для охотников за привидениями.",
      uk: "Ховаючись під покровом нескінченного туману, Деоген впродовж багатьох років залишається загадкою для мисливців за привидами."
    },
    strength: {
      en: "Deogen constantly sense the living. You can run but you can't hide.",
      ru: "Деоген мастерски улавливает присутствие живых. Вы можете сбежать от него, но спрятаться вам не удастся.",
      uk: "Деоген завжди відчуває присутність живих Ви можете втекти від нього, але сховатись вам не вдасться."
    },
    weakness: {
      en: "Deogen require a lot of energy to form and will move very slowly.",
      ru: "Деоген тратит много энергии на материализацию в нашем мире и будет передвигаться очень медленно.",
      uk: "Деоген витрачає багато енергії на матеріалізацію в нашому світі через що він пересувається дуже повільно."
    },
    evidence: [
      EvidenceEnum.SPIRIT_BOX,
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.DOTS_PROJECTOR
    ]
  },
  [GhostEnum.THAYE]: {
    description: {
      en: "Thaye have been known to rapidly age over time, even in the afterlife. From what we're learned, they seem to deteriorate faster while within the presence of the living.",
      ru: "Тайэ подвержены постоянному и стремительному старению, даже в загробном мире. По нашей информации, они ветшают заметно быстрее в присутствии живых. ",
      uk: "Тхає (Thaye) — привид, який відомий завдяки своєму старінню, яке з часом стрімко пришвидшується, навіть у потойбічному світі. Вивчаючи, ми дізналися, що вони старіють помітно швидше у присутності живих."
    },
    strength: {
      en: "Upon entering the location, Thaye will become active, defensive and agile",
      ru: "Тайэ проворно реагирует на ваше прибытие, начиная активно защищаться",
      uk: "Як тільки ви увійдете в місце його перебування, Тхає стане оборонятись, будучи водночас активним і спритним"
    },
    weakness: {
      en: "Thaye will weaken over time, making them weaker, slower and less aggressive",
      ru: "Тайэ слабнет со временем, становясь более медленным и менее агрессивным",
      uk: "Тхає з часом слабшає, стаючи слабкішим, повільнішим та менш агресивним"
    },
    evidence: [
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.DOTS_PROJECTOR
    ]
  }
};
