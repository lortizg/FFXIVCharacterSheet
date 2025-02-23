/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script add the black mage class from FFXIV
				This is taken from the GM Binder website (https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv)
	Code by:	lortizg
	Year:		2025
*/


// --- global vars ---
const bulletedLine = "\n \u2022 ";
const tabbedLine = "\n   ";

// --- File particular vars ---
const iFileName = "FF_Black_Mage.js";
const className = "blackmage";
const classNameTitle = "Black Mage";

const skillsToSelect = "Arcana, Deception, History, Insight, Intimidation, Persuasion, Religion";
const classArmorProfs = {
	LIGHT: false,
	MEDIUM: false,
	HEAVY: false,
	SHIELD: false
}
const classWeaponProfs = {
	SIMPLE: false,
	MARTIAL: false,
	OTHER: ['Dagger', 'Dart', 'Sling', 'Quarterstaff', 'Mace', 'Light Crossbow']
}

const subclasses = [
	{
		subclassName: 'mhachi',
		subclassTitle: 'Mhachi'
	},
	{
		subclassName: 'enchanter',
		subclassTitle: 'Enchanter'
	},
	{
		subclassName: 'voidmage',
		subclassTitle: 'Void Mage'
	}
]


RequiredSheetVersion("13.1.14");

// --- Source ---
SourceList["FF:BLM"] = {
	name: "FFXIV x D&D Compendium: " + classNameTitle,
	abbreviation: "FF:BLM",
	group: "Final Fantasy",
	url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
	date: "2020/11/25"
};

// Spell list
const blackMageSpellList = [
	// 1st level
	"aerora",
	"bane",
	"bless",
	"bravery",
	"cause fear",
	"compelled duel",
	"cure wounds",
	"cure",
	"detect evil and good",
	"detect magic",
	"detect poison and disease",
	"ensnaring strike",
	"entangle",
	"expeditious retreat",
	"faerie fire",
	"fira",
	"fog cloud",
	"healing word",
	"heroism",
	"hex",
	"hunter's mark",
	"mage armor",
	"protection from evil and good",
	"shield of faith",
	"silent image",
	"tasha's caustic brew",
	"tasha's hideous laughter",
	"witch bolt",
	"zephyr strike",
	// 2nd level
	"alter self",
	"barkskin",
	"blur",
	"calm emotions",
	"charm person",
	"crown of madness",
	"cura",
	"dragon's breath",
	"dust devil",
	"earthbind",
	"enhance ability",
	"enlarge/reduce",
	"faith",
	"flame blade",
	"flock of familiars",
	"gust of wind",
	"healing spirit",
	"hold person",
	"invisibility",
	"kinetic jaunt",
	"lesser restoration",
	"levitate",
	"magic weapon",
	"maximilian's earthen grasp",
	"mind spike",
	"moonbeam",
	"nathair's mischief",
	"pass without trace",
	"phantasmal force",
	"refresh",
	"shadow blade",
	"skywrite",
	"spike growth",
	"warding wind",
	"web",
	// 3rd level
	"aeroga",
	"ashardalon's stride",
	"aura of vitality",
	"beacon of hope",
	"bestow curse",
	"blink",
	"call lightning",
	"clairvoyance",
	"curada",
	"dispel magic",
	"elemental weapon",
	"en-element",
	"enemies abound",
	"esuna",
	"fear",
	"firaga",
	"fly",
	"gaesous form",
	"haste",
	"hypnotic pattern",
	"incite greed",
	"intellect fortress",
	"major image",
	"mass healing word",
	"melf's minute meteors",
	"mass healing word",
	"remove curse",
	"revivify",
	"sleet storm",
	"slow",
	"spirit shroud",
	"wall of sand",
	"water breathing",
	"water walk",
	"wind wall",
	// 4th level
	"arcane eye",
	"aura of life",
	"aura of purity",
	"banishment",
	"bar-element",
	"compulsion",
	"confusion",
	"control water",
	"curaga",
	"de-element",
	"dominate beast",
	"greater invisibility",
	"otiluke's resilient sphere",
	"phantasmal killer",
	"polymorph",
	"protection",
	"shell",
	"stone shape",
	"stoneskin",
	"storm sphere",
	"5th level",
	"aeroja",
	"animate objects",
	"antilife shell",
	"circle of power",
	"control winds",
	"danse macabre",
	"dawn",
	"dispel evil and good",
	"dominate person",
	"far step",
	"firaja",
	"greater restoration",
	"hold monster",
	"immolation",
	"mass cure wounds",
	"mislead",
	"raise dead",
	"skill empowerment",
	"telekinesis",
	"tree stride",
	"wall of stone"
]

// --- Black Mage class ---
ClassList[className] = {
	name: classNameTitle,
	regExpSearch: /^(?=.*blackmage)(?!.*(sword|blade)).*$/i,
	source: ["FF", 56],
	primaryAbility: "Intelligence",
	prereqs: "Intelligence 13",
	die: 8,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: [AbilityScores.fields.int, AbilityScores.fields.wis],
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
		+ bulletedLine + "A dagger -or- A quarter staff;"
		+ bulletedLine + "A light crossbow and 20 bolts -or- A simple weapon;"
		+ bulletedLine + "A spellcasting focus (a cane, staff, wand or similar object);"
		+ bulletedLine + "A spellbook;"
		+ bulletedLine + "An explorer's pack -or- a scholar's pack",
	subclasses: ["Bringers of the end", []],
	attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave: 4,
	spellcastingFactor: 1,
	spellcastingKnown: {
		cantrips: [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
		spells: "book",
		prepared: true
	},
	spellcastingList: {
		spells: blackMageSpellList
	},
	features: {
		spellcasting: {
			name: "Spellcasting",
			source: ["FF", 41],
			minlevel: 1,
			description: desc([
				"I can cast prepared wizard cantrips/spells, using Intelligence as my spellcasting ability",
				"I can use an arcane focus as a spellcasting focus for my wizard spells",
				"I can cast all wizard spells in my spellbook as rituals if they have the ritual tag"
			]),
			additional: levels.map(function (n, idx) {
				return [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5][idx] + " cantrips known";
			})
		},
		manafont: {
			name: "Manafont",
			source: ["FF", 42],
			minlevel: 1,
			description: "",
			usages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			recovery: "long rest",
			additional: "Mana Points",
			limfeaname: "Mana Points"
		},
		leylines: {
			name: "Leylines",
			source: ["FF", 42],
			minlevel: 1,
			description: desc(["I can cast a lvl 1-5 spell using SplLvl Leylines points instead of the spell slot if I have not moved or taken another action in my turn."]),
			action: ["action", ""]
		},
		surecaster: {
			name: "Surecaster",
			source: ["FF", 42],
			minlevel: 18,
			description: desc(["[5 Mana points] I pass all conc. checks for 10 min."]),
			action: ["bonus action", ""]
		},
		resonating_aether: {
			name: "Resonating Aether",
			source: ["FF", 42],
			minlevel: 20,
			description: desc(["I regain half my missing mana points when I roll initiative."])
		}
	}
};

AddSubClass(className, subclasses[0].subclassName, {
	regExpSearch: /^(?=.*mhachi).*$/i,
	subname: subclasses[0].subclassTitle,
	fullname: subclasses[0].subclassTitle,
	source: ["FF", 67],
	features: {
		subclassfeature2: {
			name: "",
			source: ["FF", 42],
			minlevel: 2,
			description: "",
			spellcastingExtra: [
				"chromatic orb", "witch bolt",
				"aganazzar's scorcher", "snilloc's snowball swarm",
				"call lightning", "sleet storm",
				"ice storm", "storm sphere",
				"cone of cold", "immolation"
			],
			//You can also have the list be added to the known spells of a class by making the 101th entry in the array read "AddToKnown" (i.e. spellcastingExtra[100] = "AddToKnown");
		},
		"subclassfeature2.1": {
			name: "Unstable Aether",
			source: ["FF", 42],
			minlevel: 2,
			description: "[1 Mana Point] I can reroll any dmg die resulting in a 1 or 2, use new result."
		},
		subclassfeature6: {
			name: "Polyglot",
			source: ["FF", 42],
			minlevel: 6,
			description: "I can read all writing",
			languageProfs: ["All written"]
		},
		subclassfeature10: {
			name: "Aetherial Manipulation",
			source: ["FF", 42],
			minlevel: 10,
			description: desc([
				"I can now use my movement and consume Mana Points",
				"As ba, If I casted a spell using SL, I can teleport back to the location"
			]),
			action: ["bonus action", ""]
		},
		subclassfeature14: {
			name: "Devastating Force",
			source: ["FF", 43],
			minlevel: 14,
			description: desc(["If I roll highest dmg, I can reroll and add that dmg"]),
			usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
			recovery: "long rest"
		},
	}
});
