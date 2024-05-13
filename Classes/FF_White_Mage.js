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
var subclass1Name = "elementalist";
var subclass1Title = "Elementalist";
var skillsToSelect = "Arcana, Deception, Insight, Persuasion, History, Religion, Medicine";
var classArmorProfs = {
	LIGHT: false,
	MEDIUM: false,
	HEAVY: false,
	SHIELD: false
}
var classWeaponProfs = {
	SIMPLE: true,
	MARTIAL: false,
	OTHER: ''
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
	spellcastingList : { 
		spells : [
			// "Create Bonfire",
			"druidcraft",
			//"Friends",
			"guidance",
			// "Gust",
			// "Infestation",
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
			"create or Destroy Water",
			"cure Wounds",
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
			"snare",
			//"2nd level",
			"aid",
			"augury",
			"barksin",
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
			recovery: "ESP",
			usages: [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
			action: ["bonus action", "Prayer"]
		},

		reach_of_the_unseen: {
			name: "Reach of the Unseen",
			source: ["FF", 130],
			minlevel: 1,
			description: tabbedLine + "I can spend 1 charge of Confession to convert a touch spell into a ranged spell (30ft)"
		},

		afflatus_solace: {
			name: "Afflatus Solace",
			source: ["FF", 130],
			minlevel: 2,
			description:
				tabbedLine + "I can spend x Confession charges to heal xd4 + my profficency. I cannot heal creatures with 0 hit points"
				+ tabbedLine + "I CANNOT use Prayer until my next turn.",
			action: ["action", "Afflatus Solace"]
		}
	}
};

AddSubClass(className, subclass1Name, {
	regExpSearch: /^(?=.*elementalist).*$/i,
	subname: subclass1Title,
	fullname: subclass1Title,
	source: ["FF", 131],
	features: {
		subclassfeature2: {
			name: "Elemental Blessing",
			source: ["FF", 131],
			minlevel: 2,
			description:
				tabbedLine + "I can expend Confession charges to bless a weapon you can see within 30ft during WisModifier rounds"
				+ tabbedLine + "[1 Charge] - The damage type of the weapon changes to cold, radiant or thunder."
				+ tabbedLine + "[2 Charges] - The weapon gains a +1 bonus on attack rolls."
				+ tabbedLine + "[3 Charges] - The weapon's damage rolls deal bonus damage equal to your proficiency bonus."
		}
	}
});