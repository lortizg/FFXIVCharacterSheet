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
			"blade ward",
			"booming blade",
			"dancing lights",
			"fire bolt",
			"green-flame blade",
			"gust",
			"jolt",
			"lightning lure",
			"mage hand",
			"magic stone",
			"mold earth",
			"prestidigitation",
			"ray of frost",
			"shocking grasp",
			"sword burst",
			"thunderclap",
			"true strike",
			"word of radiance",
			// "1st Level",
			"absorb elements",
			"burning hands",
			"charm person",
			"chromatic orb",
			"cure wounds",
			"detect magic",
			"disguise self",
			"earth tremor",
			"feather fall",
			"frost fingers",
			"healing word",
			"hellish rebuke",
			"jump",
			"mage armor",
			"magic missile",
			"shield",
			"thunderwave",
			"witch bolt",
			"zephyr strike",
			// "2nd Level",
			"aganazzar's scorcher",
			"calm emotions",
			"cloud of daggers",
			"dragon's breath",
			"dust devil",
			"earthbind",
			"enhance ability",
			"enthrall",
			"flame blade",
			"flaming sphere",
			"gust of wind",
			"lesser restoration",
			"levitate",
			"magic mouth",
			"magic Weapon",
			"maximillian's earthen grasp",
			"misty step",
			"pyrotechnics",
			"scorching ray",
			"shatter",
			"ppike growth",
			"warding wind",
			"zone of truth",
			// "3rd Level",
			"blink",
			"catnap",
			"counterspell",
			"dispel magic",
			"elemental weapon",
			"erupting earth",
			"fireball",
			"fly",
			"haste",
			"lightning bolt",
			"magic circle",
			"mass healing word",
			"melf's minute meteors",
			"revivify",
			"thunder step",
			"wall of sand",
			"wind wall",
			// // "4th Level",
			// "Charm Monster",
			// "Confusion",
			// "Dominate Beast",
			// "Elemental Bane",
			// "Fire Shield",
			// "Ice Storm",
			// "Sickening Radiance",
			// "Stoneshape",
			// "Stoneskin",
			// "Storm Sphere",
			// "Wall of Fire",
			// // "5th Level",
			// "Circle of Power",
			// "Control Winds",
			// "Dawn",
			// "Dominate Person",
			// "Flame Strike",
			// "Geas",
			// "Holy",
			// "Immolation",
			// "Mass Cure Wounds",
			// "Steel Wind Strike",
			// "Transmute Rock",
			// "Wall of Stone",
			// // "6th Level",
			// "Bones of the Earth",
			// "Blade Barrier",
			// "Chain Lightning",
			// "Eyebite",
			// "Flesh to Stone",
			// "Heal",
			// "Move Earth",
			// "Tasha's Otherworldly Guide",
			// "Tenser's Transformation",
			// "Wind Walk",
			// "7th Level",
			// "Crown of Stars",
			// "Delayed Blast Fireball",
			// "Plane Shift",
			// "Resurrection",
			// "Whirlwind",
			// // "8th Level",
			// "Antimagic Field",
			// "Dominate Monster",
			// "Earthquake",
			// "Glibness",
			// "Incendiary Cloud",
			// // "9th Level",
			// "Blade of Disaster",
			// "Flare",
			// "Mass Heal",
			// "Meteor Swarm",
			// "Power Word Heal",
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