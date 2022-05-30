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
  THE_MIMIC = "The Mimic"
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

export const data: {
  [ghostType in GhostEnum]: {
    description: string;
    strength?: string;
    weakness: string;
    evidence: EvidenceEnum[];
  };
} = {
  [GhostEnum.SPIRIT]: {
    description:
      "Spirits are very common ghosts. They are very powerful, but passive, only attacking when they need to. They defend their place of death to the utmost degree killing anyone that is caught overstaying their welcome.",
    weakness: "Smudge sticks are more effective, preventing a hunt for longer.",
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.WRAITH]: {
    description:
      "Wraiths are one of the most dangerous ghosts you will find. It is also the only known ghost that has the ability of flight and has sometimes been known to travel through walls.",
    strength: "Does not leave UV footprints after stepping in salt",
    weakness: "Will become more active if it steps in salt.",
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.PHANTOM]: {
    description:
      "A Phantom is a ghost that can possess the living, inducing fear into those around it. They are most commonly summoned from Ouija Boards.",
    strength: "Looking at a Phantom will lower the player's sanity considerably",
    weakness: "Taking a photo of the Phantom will cause it to briefly disappear.",
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.POLTERGEIST]: {
    description:
      "One of the most famous ghosts, the Poltergeist. Known to manipulate objects around it to spread fear into its victims.",
    strength: "Capable of throwing multiple objects at once",
    weakness: "Becomes powerless with no throwables nearby.",
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.BANSHEE]: {
    description:
      "The singing siren, known for attracting its Victims through song. It has been known to single out its prey before making a killing blow.",
    strength: "Will target only one player at a time",
    weakness: "Has a distinctive wail on the Parabolic Microphone.",
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FINGERPRINTS
    ]
  },
  [GhostEnum.JINN]: {
    description:
      "A Jim is a territorial ghost that will attack when threatened. It has also been known to be able to travel at significant speed",
    strength: "Travels at faster speeds if its victim is far away",
    weakness: "Cannot use its ability if the site's fuse box is off.",
    evidence: [
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.MARE]: {
    description:
      "A Mare is the source of all nightmares, making it most powerful in the dark.",
    strength: "Has an increased chance to attack in the dark",
    weakness: "Turning the lights on will reduce the chance of an attack.",
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.REVENANT]: {
    description:
      "A Revenant is a violent ghost that will attack indiscriminately. Their speed can be deceiving, as they are slow while dormant: however, as soon as they hunt they can move incredibly fast.",
    strength: "Can travel significantly faster if a player is spotted during a hunt",
    weakness: "Moves very slowly when not chasing a player.",
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.SHADE]: {
    description:
      "A Shade is known to be very shy. There is evidence to suggest that a Shade will stop all paranormal activity if there are multiple people nearby.",
    strength: "Being shy makes it more difficult to locate and obtain evidence",
    weakness: "Less likely to hunt if multiple people are nearby.",
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.DEMON]: {
    description:
      "Demons are the most aggressive ghosts we've ever encountered. Known to attack without reason, they seem to enjoy the thrill of the hunt.",
    strength: "Can initiate hunts more often",
    weakness: "Crucifix effectiveness is increased to 5m against one.",
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.YUREI]: {
    description:
      "A Yurei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred.",
    strength: "Has a stronger effect on sanity",
    weakness: "Smudging the Yurei's ghost room will reduce how often it wanders.",
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.ONI]: {
    description:
      "Onis love to seare their victims as much as possible before attacking. They are often seen in their physical form, guarding their place of death.",
    strength: "Increased activity and ghost events",
    weakness: "An Oni's increased activity makes them easier to find.",
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.YOKAI]: {
    description:
      "Yokai are common ghosts that are attracted to human voices. They can usually be found haunting family homes.",
    strength: "Talking near the Yokai will anger it, increasing the chance to attack",
    weakness: "Can only hear voices close to it during a hunt.",
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.HANTU]: {
    description:
      "A Hante is a care ghost that thrives in the coldest climates. The cold seems to make them more aggressive and empowered.",
    strength: "Lower temperatures allow the Hantu to move faster",
    weakness: "Warmer areas slow the Hantu's movement.",
    evidence: [
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.GORYO]: {
    description:
      "When a Goryo passes through a DOTS projector, using a video camera is the only way to see it.",
    strength:
      "Can only be seen interacting with D.O.T.S. through a camera when nobody is nearby",
    weakness: "Tends to wander away less from its ghost room.",
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FINGERPRINTS
    ]
  },
  [GhostEnum.MYLING]: {
    description:
      "A Myling is a very vocal and active ghost. They are rumoured to be quiet when hunting their prey.",
    strength: "Has quieter footsteps during a hunt",
    weakness: "Produces paranormal sounds more frequently.",
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FINGERPRINTS
    ]
  },
  [GhostEnum.ONRYO]: {
    description:
      'The Orryo is often referred to as "The Wrathful Spirit". It steals souls from dying victims\' bodies to seek revenge. This ghost has been known to fear any form of fire, and will do anything to be far from it.',
    strength: "A flame extinguishing can cause an Onryo to attack",
    weakness: "The presence of flames reduces the Onryo's ability to attack.",
    evidence: [
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FREEZING_TEMPERATURES,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.THE_TWINS]: {
    description:
      "These ghosts have been reported to mimic each other's actions. They alternate their attacks to confuse their prey.",
    strength: "Either Twin may start a hunt, though not at the same time",
    weakness: "Will often interact with the environment at the same time",
    evidence: [
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FREEZING_TEMPERATURES,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.RAIJU]: {
    description:
      "A Raiju is a demon that thrives on electrical current. While generally calm, they can become agitated when overwhelmed with power.",
    strength: "Moves faster near electrical devices",
    weakness: "Disrupts electronic equipment from further away when it hunts.",
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.GHOST_ORB
    ]
  },
  [GhostEnum.OBAKE]: {
    description:
      "Obake are terrifying shape-shifters, capable of taking an many forms. They have been seen taking on humanoid shapes to attract their prey.",
    strength: "May leave fingerprints that disappear quicker",
    weakness: "Has a small chance of leaving six-fingered handprints.",
    evidence: [
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FINGERPRINTS
    ]
  },
  [GhostEnum.THE_MIMIC]: {
    description:
      "The Minnie is an elusive, mysterious, copycat ghost that mirrors traits and behaviours from others, including other ghost types.",
    strength: "Can mimic the abilities and traits of other ghosts",
    weakness: "Will present Ghost Orbs as a secondary evidence.",
    evidence: [
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.FREEZING_TEMPERATURES,
      EvidenceEnum.SPIRIT_BOX
    ]
  }
};
