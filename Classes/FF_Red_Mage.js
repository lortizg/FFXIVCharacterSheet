/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script add the red mage class from FFXIV
				This is taken from the GM Binder website (https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv)
	Code by:	lortizg
	Year:		2024
*/


// --- global vars ---
var bulletedLine = "\n \u2022 ";
var tabbedLine = "\n   ";

// --- File particular vars ---
var iFileName = "FF_Red_Mage.js";
var className = "redmage";
var classNameTitle = "Red Mage";

var skillsToSelect = "Athletics, Acrobatics, Arcana, History, Insight, Persuasion";
var classArmorProfs = {
	LIGHT: true,
	MEDIUM: true,
	HEAVY: false,
	SHIELD: false
}
var classWeaponProfs = {
	SIMPLE: true,
	MARTIAL: false,
	OTHER: ['Short Sword', 'Rapier']
}

var subclasses = [
	{
		subclassName: 'sworddancer',
		subclassTitle: 'Sword Dancer'
	},
	{
		subclassName: 'spellslinger',
		subclassTitle: 'Spell Slinger'
	},
	{
		subclassName: 'battlerose',
		subclassTitle: 'Battle Rose'
	}
]


RequiredSheetVersion("13.0.6");

// --- Source ---
SourceList["FF:A"] = {
	name: "FFXIV x D&D Compendium: " + classNameTitle,
	abbreviation: "FF:WM",
	group: "Final Fantasy",
	url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
	date: "2020/11/25"
};

// --- Red Mage class ---
ClassList[className] = {
	name: classNameTitle,
	regExpSearch: /^(?=.*red)(?=.*mage).*$/i,
	source: ["FF", 128],
	primaryAbility: "Charisma",
	prereqs: "Charisma 13 or Dexterity 13",
	die: 8,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: [AbilityScores.fields.dex, AbilityScores.fields.cha],
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
	toolProfs: {
		primary: [["Artisan's Tools", 2]]
	},
	equipment:
		className + " starting equipment:"
		+ bulletedLine + "Leather armour -or- Hide armour;"
		+ bulletedLine + "A rapier;"
		+ bulletedLine + "A light crossbow and 20 bolts -or- a simple weapon;"
		+ bulletedLine + "An spellcasting focus;"
		+ bulletedLine + "An explorer's pack -or- a dungeoneer's pack",
	subclasses: ["Battle with Style", []],
	attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	abilitySave: 5,
	spellcastingFactor: 1,
	spellcastingKnown: {
		cantrips: [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		spells: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15],
		prepared: false,
	},
	spellcastingList: {
		spells: [
			"create bonfire",
			"druidcraft",
			"friends",
			"guidance",
			"gust",
			"infestation",
			"light",
			"mending",
			"mold earth",
			"resistance",
			"sacred flame",
			"shape water",
			"spare the dying",
			"thunderclap",
			"word of radiance",
			//"1st level",
			"bane",
			"ceremony",
			"command",
			"create or destroy water",
			"cure wounds",
			"detect evil and good",
			"detect magic",
			"detect poison and disease",
			"entangle",
			"gift of alacrity",
			"goodberry",
			"guiding bolt",
			"healing word",
			"inflict wounds",
			"mage armor",
			"protection from evil and good",
			"purify food and drink",
			"shield of faith",
			"snare",//
			//"2nd level",
			"aid",
			"augury",
			"barkskin",
			"blindness/deafness",
			"calm emotions",
			"continual flame",
			"dust devil",
			"find traps",
			"gentle repose",
			"gust of wind",
			"hold person",
			"lesser restoration",
			"locate object",
			"prayer of healing",
			"silence",
			"spike growth",
			"spiritual weapon",
			"summon beast",
			"warding bond",
			"warding wind",
			"zone of truth",
			// //"3rd level",
			// "Animate Dead",
			// "Bestow Curse",
			// "Catnap",
			// "Clairvoyance",
			// "Create Food and Water",
			// "Dispel Magic",
			// "Feign Death",
			// "Glyph of Wardning",
			// "Life Transference",
			// "Magic Circle",
			// "Mass Healing Ward",
			// "Meld into Stone",
			// "Plant Growth",
			// "Protection from Energy",
			// "Remove Curse",
			// "Sending",
			// "Speak with Dead",
			// "Spirit Shroud",
			// "Tidal Wave",
			// "Tongues",
			// "Wall of Sand",
			// "Wall of Water",
			// "Water Breathing",
			// "Water Walk",
			// "Wind Wall",
			// //"4th level",
			// "Conjure Minor Elementals",
			// "Conjure Woodland Beings",
			// "Control Water",
			// "Death Ward",
			// "Divination",
			// "Freedom of Movement",
			// "Grasping Vine",
			// "Guardians of Faith",
			// "Guardian of Nature",
			// "Locate Creature",
			// "Sickening Radiance",
			// "Summon Construct",
			// "Summon Elemental",
			// "Stone Shape",
			// //"5th level",
			// "Commune with Nature",
			// "Contagion",
			// "Dawn",
			// "Dispel Evil and Good",
			// "Flame Strike",
			// "Geas",
			// "Greater Restoration",
			// "Holy Weapon",
			// "Insect Plague",
			// "Legend Lore",
			// "Mass Cure Wounds",
			// "Planar Binding",
			// "Raise Dead",
			// "Scrying",
			// "Transmute Rock",
			// "Wall of Stone",
			// "Wrath of Nature",
			// //"6th level",
			// "Blade Barrier",
			// "Bones of the Earth",
			// "Create Undead",
			// "Druid Grove",
			// "Find the Path",
			// "Flesh to Stone",
			// "Forbiddance",
			// "Harm",
			// "Heal",
			// "Heroes' Feast",
			// "Investiture of Stone",
			// "Investiture of Wind",
			// "Move Earth",
			// "Planar Ally",
			// "Sunbeam",
			// "True Seeing",
			// "Wall of Thorns",
			// "Word of Recall",
			// //"7th level",
			// "Conjure Celestial",
			// "Crown of Stars",
			// "Divine Word",
			// "Etherealness",
			// "Fire Storm",
			// "Plane Shift",
			// "Regenerate",
			// "Resurrection",
			// "Symbol",
			// "Tether Essence",
			// "Whirlwind",
			// //"8th level",
			// "Antimagic Field",
			// "Control Weather",
			// "Earthquake",
			// "Holy Aura",
			// "Mighty Fortress",
			// "Sunburst",
			// "Tsunami",
			// //"9th level",
			// "Astral Projection",
			// "Gate",
			// "Mass Heal",
			// "Storm of Vengeance",
			// "True Resurrection",
		],
	},
	features: {
		spellcasting: {
			name: "Spellcasting",
			source: [["FF", 112], ["FF", 300]],
			minlevel: 1,
			description:
				tabbedLine + "I can cast sorcerer cantrips/spells that I know, using Charisma as my spellcasting ability" +
				tabbedLine + "I can use an arcane focus as a spellcasting focus for my sorcerer spells",
			additional: levels.map(function (n, i) {
				return [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6][i] + " cantrips known";
			})
		},

		flair_points: {
			name: "Flair Points",
			source: ["FF", 112],
			minlevel: 1,
			description: "",
			usages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			recovery: "short rest",
			additional: "Flair Points",
			limfeaname: "Flair Points"
		},

		dual_cast: {
			name: "Dual Cast",
			source: ["FF", 112],
			minlevel: 1,
			description: tabbedLine + "I can spend 1 Flair Point to change the casting time from action to bonus for a spell lvl 1-4",
			action: ["bonus action", "Dual Cast"]
		},
	}
};

AddSubClass(className, subclasses[0].subclassName, {
	regExpSearch: /^(?=.*sword)(?=.*dancer).*$/i,
	subname: subclasses[0].subclassName,
	fullname: subclasses[0].subclassTitle,
	source: ["FF", 131],
	features: {
		subclassfeature2: {
			name: "Corps-a-corps",
			source: ["FF", 113],
			minlevel: 2,
			description:
				tabbedLine + "I can expend 1 Flair Point to move 30ft in a direction until I bump into a creature."
				+ tabbedLine + "If I bump into a creature, I can make a weapon attack against it, dealing a bonus of 1d8 piercing dmg"
				+ tabbedLine + "I don't make opportunity attacks from this action.",
			action: ["bonus action", "Corps-a-corps"]
		}
	}
});