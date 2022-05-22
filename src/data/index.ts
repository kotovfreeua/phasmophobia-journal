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

export const ghostData = {
  [GhostEnum.BANSHEE]: {
    strength: "Will target only one player at a time",
    weakness: "Has a distinctive wail on the Parabolic Microphone.",
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FINGERPRINTS
    ]
  },
  [GhostEnum.DEMON]: {
    strength: "Can initiate hunts more often",
    weakness: "Crucifix effectiveness is increased to 5m against one.",
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.GORYO]: {
    strength:
      "Can only be seen interacting with D.O.T.S. through a camera when nobody is nearby",
    weakness: "Tends to wander away less from its ghost room.",
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FINGERPRINTS
    ]
  },
  [GhostEnum.HANTU]: {
    strength: "Lower temperatures allow the Hantu to move faster",
    weakness: "Warmer areas slow the Hantu's movement.",
    evidence: [
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.JINN]: {
    strength: "Travels at faster speeds if its victim is far away",
    weakness: "Cannot use its ability if the site's fuse box is off.",
    evidence: [
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.MARE]: {
    strength: "Has an increased chance to attack in the dark",
    weakness: "Turning the lights on will reduce the chance of an attack.",
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.MYLING]: {
    strength: "Has quieter footsteps during a hunt",
    weakness: "Produces paranormal sounds more frequently.",
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FINGERPRINTS
    ]
  },
  [GhostEnum.OBAKE]: {
    strength: "May leave fingerprints that disappear quicker",
    weakness: "Has a small chance of leaving six-fingered handprints.",
    evidence: [
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FINGERPRINTS
    ]
  },
  [GhostEnum.ONI]: {
    strength: "Increased activity and ghost events",
    weakness: "An Oni's increased activity makes them easier to find.",
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.ONRYO]: {
    strength: "A flame extinguishing can cause an Onryo to attack",
    weakness: "The presence of flames reduces the Onryo's ability to attack.",
    evidence: [
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FREEZING_TEMPERATURES,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.PHANTOM]: {
    strength: "Looking at a Phantom will lower the player's sanity considerably",
    weakness: "Taking a photo of the Phantom will cause it to briefly disappear.",
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.POLTERGEIST]: {
    strength: "Capable of throwing multiple objects at once",
    weakness: "Becomes powerless with no throwables nearby.",
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.RAIJU]: {
    strength: "Moves faster near electrical devices",
    weakness: "Disrupts electronic equipment from further away when it hunts.",
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.GHOST_ORB
    ]
  },
  [GhostEnum.REVENANT]: {
    strength: "Can travel significantly faster if a player is spotted during a hunt",
    weakness: "Moves very slowly when not chasing a player.",
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.SHADE]: {
    strength: "Being shy makes it more difficult to locate and obtain evidence",
    weakness: "Less likely to hunt if multiple people are nearby.",
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  },
  [GhostEnum.SPIRIT]: {
    strength: "None",
    weakness: "Smudge sticks are more effective, preventing a hunt for longer.",
    evidence: [
      EvidenceEnum.GHOST_WRITING,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.THE_MIMIC]: {
    strength: "Can mimic the abilities and traits of other ghosts",
    weakness: "Will present Ghost Orbs as a secondary evidence.",
    evidence: [
      EvidenceEnum.FINGERPRINTS,
      EvidenceEnum.FREEZING_TEMPERATURES,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.THE_TWINS]: {
    strength: "Either Twin may start a hunt, though not at the same time",
    weakness: "Will often interact with the environment at the same time",
    evidence: [
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.FREEZING_TEMPERATURES,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.WRAITH]: {
    strength: "Does not leave UV footprints after stepping in salt",
    weakness: "Will become more active if it steps in salt.",
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.EMF_LEVEL_5,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.YOKAI]: {
    strength: "Talking near the Yokai will anger it, increasing the chance to attack",
    weakness: "Can only hear voices close to it during a hunt.",
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.SPIRIT_BOX
    ]
  },
  [GhostEnum.YUREI]: {
    strength: "Has a stronger effect on sanity",
    weakness: "Smudging the Yurei's ghost room will reduce how often it wanders.",
    evidence: [
      EvidenceEnum.DOTS_PROJECTOR,
      EvidenceEnum.GHOST_ORB,
      EvidenceEnum.FREEZING_TEMPERATURES
    ]
  }
};
