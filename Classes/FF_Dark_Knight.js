/*
	Copyright @lortizg 2024
*/

// --- global vars ---
var bulletedLine = "\n \u2022 ";
var tabbedLine = "\n   ";

// --- File particular vars ---
var iFileName = "FF_Dark_Knight.js";
var className = "darkknight";
var classNameTitle = "Dark Knight";
var subclass1Name = "abyssknight";
var subclass1Title = "Abyss Knight";
var skillsToSelect = "Athletics, Arcana, History, Insight, Intimidation, Perception, Survival";
var classArmorProfs = {
	LIGHT: true,
	MEDIUM: true,
	HEAVY: true,
	SHIELD: true
}
var classWeaponProfs = {
	SIMPLE: true,
	MARTIAL: true,
	OTHER: ''
}


RequiredSheetVersion("13.0.6");

// --- Source ---
SourceList["FF:DK"] = {
	name: "FFXIV x D&D Compendium: " + classNameTitle,
	abbreviation: "FF:DK",
	group: "Final Fantasy",
	url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
	date: "2020/11/25"
};

// --- Dark Knight class ---
ClassList[className] = {
	name: classNameTitle,
	regExpSearch: /^(?=.*dark)(?=.*knight).*$/i,
	source: ["FF", 63],
	primaryAbility: "Strength",
	prereqs: "Strength 13 or Charisma 13",
	die: 10,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: [AbilityScores.fields.con, AbilityScores.fields.cha],
	skills: [
		"\n\n" + className + ": Choose two from " + skillsToSelect + ".",
		"\n\n" + className + ""
	],
	armorProfs: {
		primary: [classArmorProfs.LIGHT, classArmorProfs.MEDIUM, classArmorProfs.HEAVY, classArmorProfs.SHIELD]
	},
	weaponProfs: {
		primary: [classWeaponProfs.SIMPLE, classWeaponProfs.MARTIAL, classWeaponProfs.OTHER]
	},
	equipment:
		className + " starting equipment:"
		+ bulletedLine + "Chain mail -or- Hide armor;"
		+ bulletedLine + "A martial weapon and a shield -or- Two martial weapons;"
		+ bulletedLine + "A short bow and 20 arrows -or- Two daggers;"
		+ bulletedLine + "An explorer's pack -or- A dungeoneer's pack",
	subclasses: ["Dark Knight Archetype", []],
	attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	abilitySave: 6,
	spellcastingFactor: 3,
	// spellcastingKnown: {
	// 	spells: [0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
	// },
	spellcastingList: {
		spells: ["detect evil and good", "detect thoughts", "cause fear", "compelled duel"]
	},
	features: {
		"well of darkness": {
			name: "Well of Darkness",
			source: ["FF", 65],
			minlevel: 1,
			description: "",
			usages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			recovery: "long rest",
			additional: "Darkness Points",
			limfeaname: "Darkness Points"
		},
		"darkside": {
			name: "Darkside",
			source: ["FF", 65],
			minlevel: 1,
			description: tabbedLine + "[1 Well of Darkness points] When I make a melee weapon attack, I deal extra nectrotic damage for Cha Mod rounds",
			//+ What(AbilityScores.fields.cha + ' Mod') + " rounds",
			additional: ["1d6", "1d6", "1d6", "1d6", "1d8", "1d8", "1d8", "1d8", "1d8", "1d8", "1d10", "1d10", "1d10", "1d10", "1d10", "1d10", "1d12", "1d12", "1d12", "1d12"],
			recovery: "long rest",
			action: ["bonus action", "Darkside"]
		},
		"fighting style": {
			name: "Fighting Style",
			source: ["P", 72],
			minlevel: 2,
			description: tabbedLine + "Choose a Fighting Style using the \"Choose Feature\" button above",
			choices: ["defense", "dueling", "great_weapon", "protection", "two_weapon"],
			choicesNotInMenu: false, //check!! todo
			defense: {
				name: "Defense Fighting Style", //required;
				description: tabbedLine + "While you are wearing armor, you gain +1 bonus to AC",
				extraAC: {
					name: "Defense Fighting Style", // necessary for features referring to fighting style properties directly
					mod: 1,
					text: "I gain a +1 bonus to AC while wearing armor.",
					stopeval: function (v) { return !v.wearingArmor; }
				}
			},
			dueling: {
				name: "Dueling Fighting Style",
				description: tabbedLine + "+2 to damage rolls when wielding a melee weapon in one hand and no other weapons",
				calcChanges: {
					atkCalc: [
						function (fields, v, output) {
							for (var i = 1; i <= FieldNumbers.actions; i++) {
								if ((/off.hand.attack/i).test(What('Bonus Action ' + i))) return;
							};
							if (v.isMeleeWeapon && !v.isNaturalWeapon && !(/((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b/i).test(fields.Description)) output.extraDmg += 2;
						},
						"When I'm wielding a melee weapon in one hand and no weapon in my other hand, I do +2 damage with that melee weapon. This condition will always be false if the bonus action 'Off-hand Attack' exists."
					]
				}
			},
			great_weapon: {
				name: "Great Weapon Fighting Style",
				description: tabbedLine + "Reroll 1 or 2 on damage if wielding two-handed/versatile melee weapon in both hands",
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (v.isMeleeWeapon && (/(\bversatile|((^|[^+-]\b)2|\btwo).?hand(ed)?s?)\b/i).test(fields.Description)) {
								fields.Description += (fields.Description ? '; ' : '') + 'Re-roll 1 or 2 on damage die' + ((/versatile/i).test(fields.Description) ? ' when two-handed' : '');
							}
						},
						"While wielding a two-handed or versatile melee weapon in two hands, I can re-roll a 1 or 2 on any damage die once."
					]
				}
			},
			protection: {
				name: "Protection Fighting Style",
				description: tabbedLine + "As a reaction, I can give disadv. on an attack made vs. someone within 5 ft of me\nI need to be wielding a shield and be able to see the attacker to do this",
				action: ["reaction", ""]
			},
			two_weapon: {
				name: "Two-Weapon Fighting Style",
				description: tabbedLine + "I can add my ability modifier to the damage of my off-hand attacks",
				calcChanges: {
					atkCalc: [
						function (fields, v, output) {
							if (v.isOffHand) output.modToDmg = true;
						},
						"When engaging in two-weapon fighting, I can add my ability modifier to the damage of my off-hand attacks. If a melee weapon includes 'off-hand' or 'secondary' in its name or description, it is considered an off-hand attack."
					]
				}
			},
		},
		"burning blood": {
			name: "Burning Blood",
			source: ["FF", 65],
			minlevel: 2,
			description: tabbedLine + "I spend one hit dice to recover Well of Darkness points. Cannot exceed max",
			action: ["bonus action", "Burning Blood"]
		},

		"the blackest night": {
			name: "The Blackest Night",
			source: ["FF", 66],
			minlevel: 7,
			description: tabbedLine + "I spend a hit dice to give temp hit points to me or a creature of 1d10+cha",
			action: ["bonus action", "The Blackest Night"]
		},

		"fight or flight": {
			name: "Fight or Flight",
			source: ["FF", 66],
			minlevel: 9,
			description: tabbedLine + "[2 Well of Darkness points] I can cast Cause Fear or Compelled Duel",
			action: ["action", "Fight or Flight"]
		},

		"curse of the abyss": {
			name: "Curse of the Abyss",
			source: ["FF", 66],
			minlevel: 10,
			description: tabbedLine + "I can use my bonus action to curse a creature for 1min. It ends if the crea. dies, or I am incapacitated."
				+ tabbedLine + "I can add my prof to damage rolls against the cursed crea."
				+ tabbedLine + "If I roll a nat 19 or 20 against the cursed crea, it is a crit."
				+ tabbedLine + "If the crea dies, I regain Dark Knight lvl + cha hit points and 1 Well of Darkness point",
			action: ["bonus action", "Curse of the Abyss"],
		},
		abyssal_communion: {
			name: "Abyssal Communion",
			source: ["FF", 60],
			minlevel: 13,
			description: "",
			action: ["action", ""],
			spellcastingBonus: [{
				name: "Abyssal Communion",
				spells: ["rary's telepathic bond"],
				atwill: true,
				spellChanges: {
					"rary's telepathic bond": {
						changes: "I can cast this spell with 6 Darkness points."
					}
				}
			}]
		},
		quietus: {
			name: "Quietus",
			source: ["FF", 61],
			minlevel: 14,
			description: tabbedLine + "[2 Darkness points] I can make a melee weapon attack to all creatures in 10ft. I can spend 1 Hit Die to add the roll as necrotic dmg.",
			action: ["action", ""]
		},
		dark_mind: {
			name: "Dark Mind",
			source: ["FF", 61],
			minlevel: 15,
			description: "",
			saves: ["Wis"]
		},
		stalwart_soul: {
			name: "Stalwart Soul",
			source: ["FF", 61],
			minlevel: 18,
			description: tabbedLine + "At the start of my turns, if I have less than half my HP (not 0), I regain 5+Con HP."
		},
		living_dead: {
			name: "Quietus",
			source: ["FF", 61],
			minlevel: 20,
			description: tabbedLine + "If I drop to 0 HP but not killed, I can spend 1 Hit Die to roll it and recover #+Con HP."
		}
	}
};

AddSubClass(className, subclass1Name, {
	regExpSearch: /^(?=.*abyss)(?=.*knight).*$/i,
	subname: subclass1Title,
	fullname: subclass1Title,
	source: ["FF", 64],
	features: {
		"subclassfeature3": {
			name: "Dark Burst",
			source: [["FF", 64]],
			minlevel: 3,
			description: tabbedLine + "I can spend 2d4 +1d4 per lev (cha max) to cast Burning Hands. It deals necrotic damage.", //TODO ADD DC (well of dsrkness),
			action: ["action", "Dark Burst"],
			spellcastingBonus: [{
				name: "Dark Burst",
				spells: ["burning hands"],
				atwill: true
			}],
		},
		"subclassfeature3.1": {
			name: "Adversity",
			source: [["FF", 64]],
			minlevel: 6,
			description:
				tabbedLine + "For every 20 hit points missing, I gain +1 to attack and dmg rolls (cha max)"
				+ tabbedLine + "I gain resistance to necrotic dmg" //TODO check if it can be calculated
		},
		"subclassfeature3.2": {
			name: "Supernatural Sense",
			minlevel: 11,
			description: tabbedLine + "I can cast Detect Good and Evil at will."
				+ tabbedLine + "I can cast Detect Thoughts at a willing crea or spend 2 Well of Darkness points to cast it on an unwilling creature"
		}
	}
});

WeaponsList["dark_burst"] = {
	regExpSearch: /^(?=.*dark)(?=.*burst).*$/i,
	name: "Dark Burst",
	source: [["FF", 64]],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["3", "6+1d6/SL", "necrotic"],
	range: "15 ft cone",
	description: "All in area 3d6+1d6/SL; Max CHA Necrotic dmg; save halves",
	abilitytodamage: false,
	dc: true
};