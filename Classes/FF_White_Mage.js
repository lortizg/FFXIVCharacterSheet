var iFileName = "FF_White_Mage.js";
var className = "whitemage";
var classNameTitle = "White Mage";

RequiredSheetVersion("13.0.6");

// Define the source
SourceList["FF:A"] = {
	name: "FFXIV x D&D Compendium: " + classNameTitle,
	abbreviation: "FF:WM",
	group: "Final Fantasy",
	url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
	date: "2020/11/25"
};

ClassList[className] = {
	name: classNameTitle,
	regExpSearch: /^(?=.*white)(?=.*mage).*$/i,
	source: ["FF", 128],
	primaryAbility: "Wisdom",
	prereqs: "Wisdom 13",
	die: 6,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: ["Wis", "Cha"],
	skills: ["\n\n" + className + ": Choose two from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival.", "\n\n" + className + ": Choose one from Athletics, Intimidation, Perception, and Survival."],
	armorProfs: {
		primary: [true, false, false, false]
	},
	weaponProfs: {
		primary: [true, false]
	},
	equipment: className + " starting equipment:\n \u2022 A dagger -or- a quarter staff;\n \u2022 A light crossbow and 20 bolts -or- a simple weapon;\n \u2022 A spellcasting focus (cane, staff, wand...);\n \u2022 An explorer's pack -or- a scholar's pack",
	subclasses: ["Conjury Discipline", []],
	attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave: 5,
	spellcastingFactor: 1,
	spellcastingKnown: {
		cantrips: [3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		spells: "list",
		prepared: true,
	},
	features: {},
};