/*
	Copyright @lortizg 2024
*/

// --- global vars ---
var ABILITIES_ABBR = {
	STRENGTH: "Str",
	DEXTERITY: "Dex",
	CONSTITUTION: "Con",
	INTELLIGENCE: "Int",
	WISDOM: "Wis",
	CHARISMA: "Cha",
}
var bulletedLine = "\n \u2022 ";
var tabbedLine = "\n   ";

// --- File particular vars ---
var iFileName = "FF_White_Mage.js";
var className = "whitemage";
var classNameTitle = "White Mage";
var skillsToSelect = "Arcana, Deception, Insight, Persuasion, History, Religion, Medicine";
var classArmorProfs = {
	LIGHT: true,
	MEDIUM: false,
	HEAVY: false,
	SHIELD: false
}
var classWeaponProfs = {
	SIMPLE: true,
	MARTIAL: false,
	OTHER: []
}


RequiredSheetVersion("13.0.6");

// --- Source ---
SourceList["FF:A"] = {
	name: "FFXIV x D&D Compendium: " + classNameTitle,
	abbreviation: "FF:WM",
	group: "Final Fantasy",
	url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
	date: "2020/11/25"
};

// --- White Mage class ---
ClassList[className] = {
	name: classNameTitle,
	regExpSearch: /^(?=.*white)(?=.*mage).*$/i,
	source: ["FF", 128],
	primaryAbility: "Wisdom",
	prereqs: "Wisdom 13",
	die: 6,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: [ABILITIES_ABBR.WISDOM, ABILITIES_ABBR.CHARISMA],
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
		+ bulletedLine + "A dagger -or- a quarter staff;"
		+ bulletedLine + "A light crossbow and 20 bolts -or- a simple weapon;"
		+ bulletedLine + "A spellcasting focus (cane, staff, wand...);"
		+ bulletedLine + "An explorer's pack -or- a scholar's pack",
	subclasses: ["Conjury Discipline", []],
	attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave: 5,
	spellcastingFactor: 1,
	spellcastingKnown: {
		cantrips: [3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		spells: "list",
		prepared: true,
	},
	// spellcastingList : { 
	// 	class : "wizard",
	// 	school : ["Evoc", "Abjur"],
	// 	level : [0, 4],
	// 	ritual : false, 
	// 	spells : ["light", "mending"],
	// 	notspells : ["antipathy/sympathy", "tsunami"], 
	// },
	// spellcastingExtra:[],
	features: {
		spellcasting: {
			name: "Spellcasting",
			source: [["FF", 130], ["FF", 300]],
			minlevel: 1,
			description:
				tabbedLine + "I can cast prepared white mage cantrips/spells, using Wisdom as my spellcasting ability"
				+ tabbedLine + "I can use an arcane focus as a spellcasting focus"
				+ tabbedLine + "I can cast all white mage spells in my spellbook as rituals if they have the ritual tag",
			additional: levels.map(function (n, i) {
				return [3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5][i] + " cantrips known";
			})
		},

		confession: {
			name: "Confession",
			source: ["FF", 130],
			minlevel: 1,
			description:
				tabbedLine + "I can cast Prayer to have 1 charge of Confession"
				+ tabbedLine + "I can cast it again have x2 charges + 1",
			recovery: "long rest",
			action: ["bonus action", "Prayer"]
		},
		reach_of_the_unseen: {
			name: "Reach of the Unseen",
			source: ["FF", 130],
			minlevel: 1,
			description: tabbedLine + "I can spend 1 charge of Confession to convert a touch spell into a ranged spell (30ft)"
		}

	}
};