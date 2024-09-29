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