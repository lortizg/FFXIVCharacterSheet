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
var bulletedDot = "\n \u2022 ";

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
		+ bulletedDot + "A dagger -or- a quarter staff;" 
		+ bulletedDot + "A light crossbow and 20 bolts -or- a simple weapon;" 
		+ bulletedDot + "A spellcasting focus (cane, staff, wand...);" 
		+ bulletedDot + "An explorer's pack -or- a scholar's pack",
	subclasses: ["Conjury Discipline", []],
	attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave: 5,
	spellcastingFactor: 1,
	spellcastingKnown: {
		cantrips: [3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		spells: "list",
		prepared: true,
	},
	features: {}
};