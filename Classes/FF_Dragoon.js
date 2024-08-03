/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script add the dragoon class from FFXIV
				This is taken from the GM Binder website (https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv)
	Code by:	lortizg
	Year:		2024
*/


// --- global vars ---
var bulletedLine = "\n \u2022 ";
var tabbedLine = "\n   ";

// --- File particular vars ---
var iFileName = "FF_Dragoon.js";
var className = "dragoon";
var classNameTitle = "Dragoon";

var skillsToSelect = "Animal Handling, Athletics, Acrobatics, History, Nature, Perception, Religion, Survival";
var classArmorProfs = {
	LIGHT: true,
	MEDIUM: true,
	HEAVY: false,
	SHIELD: true
}
var classWeaponProfs = {
	SIMPLE: true,
	MARTIAL: true,
	OTHER: ''
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


RequiredSheetVersion("13.1.14");

// --- Source ---
SourceList["FF:DRG"] = {
	name: "FFXIV x D&D Compendium: " + classNameTitle,
	abbreviation: "FF:DRG",
	group: "Final Fantasy",
	url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
	date: "2020/11/25"
};

// --- Red Mage class ---
ClassList[className] = {
	name: classNameTitle,
	regExpSearch: /^(?=.*dragoon).*$/i,
	source: ["FF", 128],
	primaryAbility: "Strength",
	prereqs: "Charisma 13 or Dexterity 13",
	die: 10,
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
		+ bulletedLine + "Scale mail -or- Leather armor;"
		+ bulletedLine + "A martial weapon -or- Two spears;"
		+ bulletedLine + "A short bow and 20 arrows -or- two handaxes;"
		+ bulletedLine + "A blessed Dragoon's Stone;"
		+ bulletedLine + "An explorer's pack -or- a dungeoneer's pack",
	subclasses: ["Aerial Warriors", []],
	attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	abilitySave: 1,
	features: {
		dragoon_trance: {
			name: "Dragoon Trance",
			source: ["FF", 65],
			minlevel: 1,
			description:
				tabbedLine + "I can fall into a trance and get 30ft long jump and 15ft high jump. I don't get fall damage from this." +
				tabbedLine + "If my racial base movement speed is below 30ft, it is set to 30ft while under the effect." +
				tabbedLine + "I get WIS+Prof Draconic Blood charges until I activate this again or complete a long rest." +
				tabbedLine + "The trance lasts for 10min, but can end early if I fall unconscious or end it as bonus action. Some Dragoon abilities can end it early. If I have a Dragoon Blood charge while dragoon trance is inactive, as a bonus action I can gain the effect again until the end of my turn.",
			duration: '10min',
			usages: [2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6],
			recovery: "ESP"
		},
		draconic_blood: {
			name: "Draconic Blood",
			source: ["FF", 65],
			minlevel: 1,
			description: "",
			usages: "Wis mod + Proficiency bonus per ",
			usagescalc: "event.value = Number(What('Wis Mod') + What('Proficiency Bonus'))",
			recovery: "ESP"
		},
		jump: {
			name: "Jump",
			source: ["FF", 65],
			minlevel: 1,
			description: tabbedLine + "If I jump 15ft+, I can use my action to make a jump attack on a creature. It must take a Dex saving throw or be knocked prone and take full damage of my weapon; half if saved and it is not knocked. I land in an unoccupied space next to the creature.",
			// usages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			additional: "Double dmg at lvl 5",
			// action: ["action", "Jump"],
			weaponOptions: {
				regExpSearch: /^(?=.*jump).*$/i,
				name: "Jump",
				source: [["FF", 65]],
				list: "melee",
				ability: 2,
				type: "Natural",
				damage: [0, 0, ""],
				range: "melee",
				description: "Dex save, success - half dmg, not knocked; I land in an unoccupied space next to the creature",
				abilitytodamage: false,
				dc: true,
				tooltip: "I make full damage of my weapon",
				isNotWeapon: true,
				selectNow: true
			},
		},

		// dual_cast: {
		// 	name: "Dual Cast",
		// 	source: ["FF", 112],
		// 	minlevel: 1,
		// 	description: tabbedLine + "I can spend 1 Flair Point to change the casting time from action to bonus for a spell lvl 1-4",
		// 	action: ["bonus action", "Dual Cast"]
		// },
	}
};

AddSubClass(className, subclasses[0].subclassName, {
	regExpSearch: /^(?=.*sword)(?=.*dancer).*$/i,
	subname: subclasses[0].subclassTitle,
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

// SpellsList["jolt"] = {
// 	name: "Jolt",
// 	regExpSearch: /^(?=.*jolt).*$/i,
// 	source: ["FF", 144],
// 	description: "I can make a ranged spell attack. On hit it takes 1d8 force damage. 2 shards lvl5; 3 lvl11; 4 lvl17",
// 	descriptionShorter: "Spell Atk; On hit take 1d8 force dmg",
// 	descriptionFull: "A shard of crystallized aether streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 force damage." +
// 		tabbedLine + "The spell creates more than one shard when you reach higher levels: two shards at 5th level, three shards at 11th level, and four shards at 17th level. You can direct the shards at the same target or at different ones. Make a separate attack roll for each shard.",
// 	classes: [className],
// 	level: 0,
// 	school: "Evoc",
// 	time: "1 a",
// 	range: "60 ft",
// 	rangeMetric: "18m",
// 	components: "V,S",
// 	duration: "Instantaneous"
// };

// var JoltDamage =
// WeaponsList["jump"] = {
// 	regExpSearch: /^(?=.*jump).*$/i,
// 	name: "Jump",
// 	source: [["FF", 65]],
// 	list: "spell",
// 	ability: 6,
// 	type: "Cantrip",
// 	damage: ["C \xD7" + 1, 8, "force"],
// 	range: "60 ft",
// 	description: "Each d8 is a separate beam requiring separate rolls",
// 	abilitytodamage: false
// };