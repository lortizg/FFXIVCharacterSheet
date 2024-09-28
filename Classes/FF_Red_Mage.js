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
		subclassName: 'sworddnc',
		subclassTitle: 'Sworddnc'
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



RequiredSheetVersion("13.1.14");

// --- Source ---
SourceList["FF:RDM"] = {
	name: "FFXIV x D&D Compendium: " + classNameTitle,
	abbreviation: "FF:RDM",
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
	abilitySave: AbilityScores.charisma.index,
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
			"jolt", // From FF
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
			"maximilian's earthen grasp",
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
			// "4th level",
			"charm monster",
			"confusion",
			"dominate beast",
			"elemental bane",
			"fire shield",
			"ice storm",
			"sickening radiance",
			"stoneshape",
			"stoneskin",
			"storm sphere",
			"wall of fire",
			// "5th level",
			"circle of power",
			"control winds",
			"dawn",
			"dominate person",
			"flame strike",
			"geas",
			"holy",
			"immolation",
			"mass cure wounds",
			"steel wind strike",
			"transmute rock",
			"wall of stone",
			// "6th level",
			"bones of the earth",
			"blade barrier",
			"chain lightning",
			"eyebite",
			"flesh to stone",
			"heal",
			"move earth",
			"tasha's otherworldly guide",
			"tenser's transformation",
			"wind walk",
			// "7th level",
			"crown of stars",
			"delayed blast fireball",
			"plane shift",
			"resurrection",
			"whirlwind",
			// "8th level",
			"antimagic field",
			"dominate monster",
			"earthquake",
			"glibness",
			"incendiary cloud",
			// "9th level",
			"blade of disaster",
			"flare",
			"mass heal",
			"meteor swarm",
			"power word heal",
			"true resurrection"
		],
	},
	features: {
		spellcasting: {
			name: "Spellcasting",
			source: [["FF", 109], ["FF", 300]],
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
			source: ["FF", 109],
			minlevel: 1,
			description: "",
			usages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			recovery: "short rest",
			additional: "Flair Points",
			limfeaname: "Flair Points"
		},

		dual_cast: {
			name: "Dual Cast",
			source: ["FF", 109],
			minlevel: 1,
			description: tabbedLine + "I can spend 1 Flair Point to change the casting time from action to bonus for a spell lvl 1-4",
			action: ["bonus action", ""]
		},
		battle_flourish: {
			name: "Battle Flourish",
			source: ["FF", 109],
			minlevel: 18,
			description: tabbedLine + "When I roll initiative, if I have 0 Flair Points, I recover 1d4."
		},
		acceleration: {
			name: "Acceleration",
			source: ["FF", 109],
			minlevel: 20,
			description: tabbedLine + "When using Dual Cast, I can cast two spells instead of a spell and a cantrip.",
			action: ["bonus action", ""],
			usages: 1,
			recovery: "long rest"
		},
	}
};

AddSubClass(className, subclasses[0].subclassName, {
	regExpSearch: /^(?=.*sworddnc).*$/i,
	subname: subclasses[0].subclassTitle,
	fullname: subclasses[0].subclassTitle,
	source: ["FF", 131],
	features: {
		subclassfeature2: {
			name: "Corps-a-corps",
			source: ["FF", 109],
			minlevel: 2,
			description:
				tabbedLine + "[1 Flair Point] I move 30ft in a direction until I bump into a creature."
				+ tabbedLine + "If I bump into a creature, I can make a weapon attack against it, dealing a bonus of 1d8 piercing dmg."
				+ tabbedLine + "I don't make opportunity attacks from this action.",
			action: ["bonus action", "Corps-a-corps"]
		},
		subclassfeature6: {
			name: "Heroic Charm",
			source: ["FF", 110],
			minlevel: 6,
			description: tabbedLine + "I can spend 1 Flair Point to reroll a cha. based ability check.",
			skillstxt: "Choose any charisma skill",
		},
		subclassfeature10: {
			name: "Displacement",
			source: ["FF", 110],
			minlevel: 10,
			description:
				tabbedLine + "[1 Flair Point] After attacking, I leap backwards up to a 30ft line. I can jump over medium or smaller crea. this way, otherwise I bump into it."+
				tabbedLine + "I can make a spell attack to deal 2d8+cha",
			action: ["action", ""]
		},
		subclassfeature14: {
			name: "Enchanted Blade",
			source: ["FF", 110],
			minlevel: 14,
			description:
				tabbedLine + "After attuning to an one-handed weapon (1hr), I am able to summon it.",
			action: ["action", "Invoke Blade"],
			weaponOptions: {
				regExpSearch: /^(?=.*enchanted)(?=.*blade).*$/i,
				name: "Enchanted Blade",
				source: [["FF", 65]],
				ability: 2,
				type: "Natural",
				damage: ["(1FP) 2d8 extra", "", "force"],
				range: "",
				description: "Finesse, one-handed",
				abilitytodamage: false,
				selectNow: true
			},
		},
	}
});

SpellsList["jolt"] = {
	name: "Jolt",
	regExpSearch: /^(?=.*jolt).*$/i,
	source: ["FF", 144],
	description: "I can make a ranged spell attack. On hit it takes 1d8 force damage. 2 shards lvl5; 3 lvl11; 4 lvl17",
	descriptionShorter: "Spell Atk; On hit take 1d8 force dmg",
	descriptionFull: "A shard of crystallized aether streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 force damage." +
		tabbedLine + "The spell creates more than one shard when you reach higher levels: two shards at 5th level, three shards at 11th level, and four shards at 17th level. You can direct the shards at the same target or at different ones. Make a separate attack roll for each shard.",
	classes: [className],
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	rangeMetric: "18m",
	components: "V,S",
	duration: "Instantaneous"
};

// var JoltDamage = 
WeaponsList["jolt"] = {
	regExpSearch: /^(?=.*jolt).*$/i,
	name: "Jolt",
	source: [["FF", 144]],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C \xD7" + 1, 8, "force"],
	range: "60 ft",
	description: "Each d8 is a separate beam requiring separate rolls",
	abilitytodamage: false
};