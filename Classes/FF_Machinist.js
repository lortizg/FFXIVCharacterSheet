/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script add the machinist class from FFXIV
				This is taken from the GM Binder website (https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv)
	Code by:	lortizg
	Year:		2024
*/


// --- global vars ---
var bulletedLine = "\n \u2022 ";
var tabbedLine = "\n   ";

// --- File particular vars ---
var iFileName = "FF_Machinist.js";
var className = "machinist";
var classNameTitle = "Machinist";

var skillsToSelect = "Athletics, Arcana, History, Insight, Intimidation, Perception, Survival";
var classProfs = {
	armorProfs: {
		LIGHT: true,
		MEDIUM: false,
		HEAVY: false,
		SHIELD: false
	},
	weaponProfs: {
		SIMPLE: true,
		MARTIAL: false,
		OTHER: ['Pistol', 'Hunting Rifle', 'Revolver', 'Musket']
	},
	toolProfs: [["Artisan's Tools", 2]],
};

var subclasses = [
	{
		subclassName: 'gaussianmarksman',
		subclassTitle: 'Gaussian Marksman'
	},
	{
		subclassName: 'roboticist',
		subclassTitle: 'Roboticist'
	},
	{
		subclassName: 'inventorslegacy',
		subclassTitle: "Inventor's Legacy"
	}
]


RequiredSheetVersion("13.1.14");

// --- Source ---
SourceList["FF:MCH"] = {
	name: "FFXIV x D&D Compendium: " + classNameTitle,
	abbreviation: "FF:MCH",
	group: "Final Fantasy",
	url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
	date: "2020/11/25"
};

SpellsList['snare trap'] = {
	name: "Snare Trap",
	source: ["FF", 79],
	classes: ["machinist"],
	level: 1,
	time: "Instantaneous",
	range: "5 ft rad",
	rangeMetric: "3 m rad",
	components: "M",
	compMaterial: "Aether Batteries x hour",
	duration: "10 h",
	save: "Dex",
	description: "If crea. triggers, fall prone 3ft above; disadv. to save at end of its turn; Investigation (find); Arcana (help)",
	descriptionFull: desc([
		"The trap is nearly invisible and requires a successful Intelligence (Investigation) check against your spell save DC to be found.",
		"The trap triggers when a Small creature or larger moves into the area protected by the spell. The triggering creature must succeed on a Dexterity saving throw or fall prone and be hoisted into the air until it hangs upside down 3 feet above the trap, where it is restrained.",
		"The restrained creature can make a Dexterity saving throw with disadvantage at the end of each of its turns and ends the restrained effect on a success. Alternatively, another creature that can reach the restrained creature can use an action to make an Intelligence (Arcana) check against your Tech save DC. On a success, the restrained effect also ends."
	]),
	firstCol: "atwill",
}


// --- Machinist class ---
ClassList[className] = {
	name: classNameTitle,
	regExpSearch: /^(?=.*machinist).*$/i,
	source: ["FF", 73],
	primaryAbility: "Intelligence",
	prereqs: "Intelligence 13 or Dexterity 13",
	die: 8,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: [AbilityScores.fields.dex, AbilityScores.fields.int],
	skills: [
		"\n\n" + className + ": Choose two from " + skillsToSelect + ".",
		"\n\n" + className + ""
	],
	armorProfs: {
		primary: [classProfs.armorProfs.LIGHT, classProfs.armorProfs.MEDIUM, classProfs.armorProfs.HEAVY, classProfs.armorProfs.SHIELD]
	},
	weaponProfs: {
		primary: [classProfs.weaponProfs.SIMPLE, classProfs.weaponProfs.MARTIAL, classProfs.weaponProfs.OTHER]
	},
	toolProfs: {
		primary: classProfs.toolProfs
	},
	equipment:
		className + " starting equipment:"
		+ bulletedLine + "Leather armor;"
		+ bulletedLine + "A pistol and 20 bullets -or- A dagger;"
		+ bulletedLine + "A musket and 20 bullets;"
		+ bulletedLine + "A set of artisan's tools;"
		+ bulletedLine + "An aetherconverter;"
		+ bulletedLine + "An explorer's pack -or- a dungeoneer's pack",
	subclasses: ["Magnum Opus", []],
	attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	abilitySave: AbilityScores.intelligence.index + 1,
	features: {
		inventions: {
			name: "Inventions",
			source: ["FF", 75],
			minlevel: 1,
			description: desc([
				"Choose an Invention using the \"Choose Feature\" button above.",
				"After 3 long rests, I can replace one invention with another."
			]),
			additional: levels.map(function (n) {
				return n < 6 ? 2 : (n < 9 ? 3 : n < 13 ? 4 : n < 17 ? 5 : 6) + " inventions";
			}),
			extraname: "Inventions",
			extraTimes: levels.map(function (n) {
				return n < 6 ? 2 : (n < 9 ? 3 : n < 13 ? 4 : n < 17 ? 5 : 6);
			}),
			extrachoices: [
				"Aether Detector", "Bio Blaster", "Chocobo Boots", "Climber's Claws", "Snare Trap",
				"Hawkeye Mask (prereq: level 5 machinist)"
			],
			choicesNotInMenu: false,
			"aether detector": {
				name: "Aether Detector",
				description: desc([
					"Battery Usage: 10 minutes (1 charge per minute of use)",
					"I can cast Detect Magic."
				]),
				source: ["FF", 78],
				spellcastingBonus: [{
					name: "Aether Detector",
					spells: ["detect magic"],
					selection: ["detect magic"],
					firstCol: "atwill"
				}],
				spellChanges: {
					"detect magic": {
						name: "Aether Detector",
						range: "Self",
						components: "M",
						compMaterial: "Aether Batteries x 1min",
						description: "Know presence of magic within 30 ft; 1 a to see an aura around the crea. or obj.",
						changes: "I use Aether Detector invention and Aether Batteries to cast this spell. Instead of knowing the school, I see an aura around visible creatures or objects as an action.",
					}
				}
			},
			"bio blaster": {
				name: "Bio Blaster",
				description: desc([
					"10 attacks (1 charge per attack)",
					"I can cast Bio Blaster."
				]),
				source: ["FF", 78],
				spellcastingBonus: [{
					name: "Bio Blaster",
					spells: ["ray of sickness"],
					selection: ["ray of sickness"],
					firstCol: "atwill"
				}],
				spellChanges: {
					"ray of sickness": {
						name: "Bio Blaster",
						components: "M",
						range: "15ft Cone",
						compMaterial: "Aether Batteries x attack",
						description: "All 4d4 Poison dmg; poisoned and repeat save with disadv. at end of their turn; save half and not poisoned",
						changes: "I use Bio Blaster invention and Aether Batteries to cast this spell. I deal 4d4 dmg and the creature repeats the saving throw with disadvantage at the end of their turns",
					}
				}
			},
			"chocobo boots": {
				name: "Chocobo Boots",
				description: desc([
					"10 hours (1 charge per hour)",
					"I get extra 5ft speed.",
					"I can use my bonus action to get the benefit of the Longstrider or Jump spell until the end of my next turn."
				]),
				action: ["bonus action", ""],
				source: ["FF", 78],
				speed: { allModes: "+5" }
			},
			"climber's claws": {
				name: "Climber's Claws",
				description: desc([
					"10 hours (1 charge per hour)",
					"I get climbing speed. My unarmored strikes deal 1d4 piercing dmg"
				]),
				source: ["FF", 78],
				speed: { climb: { spd: "walk", enc: "walk" } },
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (classes.known.machinist && classes.known.machinist.level && v.baseWeaponName == "unarmed strike") {
								fields.Damage_Die = '1d4';
								fields.Damage_Type = 'Piercing'
							};
						},
						"My unarmored strikes deal 1d4 piercing dmg.",
						5
					]
				}
			},
			"snare trap": {
				name: "Snare Trap",
				description: desc([
					"10 hours (1 charge per hour)",
					"I get Snare Trap spell"
				]),
				source: ["FF", 79],
				spellcastingBonus: [{
					spells: ["snare trap"],
					selection: ["snare trap"]
				}],
			},
			"hawkeye mask (prereq: level 5 machinist)": {
				name: "Hawkeye Mask",
				description: desc([
					"10 hours (1 charge per hour)",
					"I get prof in perception skill. I can use intelligence for the rolls. I can see up to 4 miles.",
					"My ranged weapons have 30ft more range"
				]),
				source: ["FF", 79],
				prereqeval: function (v) { return classes.known.machinist.level >= 5 },
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (classes.known.machinist && classes.known.machinist.level && v.isRangedWeapon) {
								fields.Description += (fields.Description ? '; ' : '') + '30ft more range'
							};
						},
						"My ranged weapons have 30 more ft range.",
						5
					]
				}
			},
		},
		aether_battery: {
			name: "Aether Battery",
			source: ["FF", 75],
			minlevel: 1,
			description: desc([
				"I can use Aether batteries in my inventions. Each has 10 energy charges.",
				"At a short rest, I can recharge my Prof of of batteries. All at long rest."
			]),
			recovery: "long rest",
			usages: "Int mod + Proficiency bonus per ",
			usagescalc: "event.value = Number(What('Int Mod') + What('Proficiency Bonus'))",
		},
		mechanical_turret: {
			name: "Mechanical Turret",
			source: ["FF", 75],
			minlevel: 2,
			description: desc(["I can spend one of my attacks to make Mechanical Turret attack"]),
			recovery: "long rest",
			creaturesAdd: [["Mechanical Turret"]],
			action: ["action", "Mechanical Turret attack"]
		},
		tech_support: {
			name: "Tech Support",
			source: ["FF", 75],
			minlevel: 2,
			description: desc(["I can use Artisan's tools to disarm mech traps."])
		},
		reload: {
			name: "Reload",
			source: ["FF", 76],
			minlevel: 5,
			description: desc(["Ranged weapons lose the loading property."]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (classes.known.machinist && classes.known.machinist.level && !v.isSpell && !v.isDC && (v.isRangedWeapon && (/\bloading\b/i).test(fields.Description))) {
							fields.Description += (fields.Description ? '; ' : '') + 'no loading required';
						};
					},
					"Ranged weapons lose the loading property.",
					700
				]
			}
		},
		eye_for_design: {
			name: "Eye for Design",
			source: ["FF", 76],
			minlevel: 6,
			description: desc([
				"I gain advantage on Investigation checks to understand how a mech system works.",
				"I gain advantage on Survival checks to track a creature within a building, village, town or city"
			])
		},
	}
};

CreatureList["mechanical turret"] = {
	name: "Mechanical Turret",
	nameAlt: ["Mechanical Turret"],
	source: ["FF", 75],
	size: 4,
	type: "Construct",
	companion: "familiar",
	companionApply: "mechanicalserv",
	alignment: "Unaligned",
	ac: '13+Prof',
	hp: 5,
	hd: [4, 6],
	hdLinked: ["machinist"],
	speed: "30 ft",
	proficiencyBonus: 2,
	proficiencyBonusLinked: true,
	challengeRating: "",
	scores: [10, 16, 14, 1, 10, 1],
	saves: ["", "", "", "", "", ""],
	senses: "",
	attacksAction: 1,
	attacks: [{
		name: "Point Blank",
		ability: 0,
		damage: [1, "6", "piercing"],
		range: "Melee (5 ft)",
		description: "Default dmg: 8",
		modifiers: ['oInt', 'oProf+2']
	},
	{
		name: "Turret Shot",
		ability: 0,
		damage: [1, "8", "piercing"],
		range: "30 ft",
		description: "Default dmg: 9",
		modifiers: ['oInt', 'oProf+2']
	}],
	skills: {},
	damage_immunities: "poison, psychic",
	condition_immunities: "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
	languages: "Understands languages of its creator. Cannot speak",
	minlevelLinked: ["machinist"],
	addMod: [
		{ type: "skill", field: "all", mod: "Prof", text: "The turret adds its master's proficeency to all its skills checks." },
		{ type: "save", field: "all", mod: "Prof", text: "The turret adds its master's proficeency to all its saving throws." }
	],
	calcChanges: {
		hp: function (totalHD, HDobj, prefix) {
			if (!classes.known.machinist) return;
			var machlvl = classes.known.machinist.level;
			var machlvlhp = 4 * machlvl + 5;
			HDobj.alt.push(machlvlhp);
			HDobj.altStr.push(" = 5 +" + machlvl + " from four times my machinist level (" + machlvlhp + ")");
		},
		setAltHp: true,
	}
}

AddSubClass(className, subclasses[2].subclassName, {
	regExpSearch: /^(?=.*inventor)(?=.*legacy).*$/i,
	subname: subclasses[2].subclassTitle,
	fullname: subclasses[2].subclassTitle,
	source: ["FF", 78],
	features: {
		subclassfeature3: {
			name: "Well Oiled Machines",
			source: ["FF", 78],
			minlevel: 3,
			description: desc(["When I attack with an Invention, it deals extra Int mod dmg."]),
		},
		subclassfeature7: {
			name: "Overnight Success",
			source: ["FF", 67],
			minlevel: 7,
			description: desc(["I can disassemble one of my inventions and replace it with a new one."
			]),
			usages: 1,
			recovery: "long rest"
		},
		subclassfeature11: {
			name: "Battery Stabilizer",
			source: ["FF", 67],
			minlevel: 11,
			description: desc(["My batteries have twice its charges."])
		},
		subclassfeature15: {
			name: "Jerry-Rigged",
			source: ["FF", 67],
			minlevel: 15,
			description: desc(["I can combine inventions that require 1/2 hands into a single one. Should not exceed 5 hands. I hold this new invention using 2 hands."])
		},
		subclassfeature20: {
			name: "Hyper Charger",
			source: ["FF", 67],
			minlevel: 20,
			description: desc([
				"I can charge 2 Aether Batteries.",
				"The bonus dmg of Well Oiled Machines is doubled."
			]),
			action: "action",
			usages: 1,
			recovery: "long rest"
		},
	}
});