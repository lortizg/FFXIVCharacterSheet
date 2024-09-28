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
	attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave: AbilityScores.intelligence.index,
	features: {}
};
