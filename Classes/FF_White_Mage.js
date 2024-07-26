/*
	Copyright @lortizg 2024
*/

// --- global vars ---
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
SourceList["FF:WHM"] = {
	name: "FFXIV x D&D Compendium: " + classNameTitle,
	abbreviation: "FF:WHM",
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
	saves: [AbilityScores.fields.wis, AbilityScores.fields.cha],
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
			//"3rd level",
			"animate dead",
			"bestow curse",
			"catnap",
			"clairvoyance",
			"create food and water",
			"dispel magic",
			"feign death",
			"glyph of wardning",
			"life transference",
			"magic circle",
			"mass healing ward",
			"meld into stone",
			"plant growth",
			"protection from energy",
			"remove curse",
			"sending",
			"speak with dead",
			"spirit shroud",
			"tidal wave",
			"tongues",
			"wall of sand",
			"wall of water",
			"water breathing",
			"water walk",
			"wind wall",
			//"4th level",
			"conjure minor elementals",
			"conjure woodland beings",
			"control water",
			"death ward",
			"divination",
			"freedom of movement",
			"grasping vine",
			"guardians of faith",
			"guardian of nature",
			"locate creature",
			"sickening radiance",
			"summon construct",
			"summon elemental",
			"stone shape",
			//"5th level",
			"commune with nature",
			"contagion",
			"dawn",
			"dispel evil and good",
			"flame strike",
			"geas",
			"greater restoration",
			"holy weapon",
			"insect plague",
			"legend lore",
			"mass cure wounds",
			"planar binding",
			"raise dead",
			"scrying",
			"transmute rock",
			"wall of stone",
			"wrath of nature",
			//"6th level",
			"blade barrier",
			"bones of the earth",
			"create undead",
			"druid grove",
			"find the path",
			"flesh to stone",
			"forbiddance",
			"harm",
			"heal",
			"heroes' feast",
			"investiture of stone",
			"investiture of wind",
			"move earth",
			"planar ally",
			"sunbeam",
			"true seeing",
			"wall of thorns",
			"word of recall",
			//"7th level",
			"conjure celestial",
			"crown of stars",
			"divine word",
			"etherealness",
			"fire storm",
			"plane shift",
			"regenerate",
			"resurrection",
			"symbol",
			"tether essence",
			"whirlwind",
			//"8th level",
			"antimagic field",
			"control weather",
			"earthquake",
			"holy aura",
			"mighty fortress",
			"sunburst",
			"tsunami",
			//"9th level",
			"astral projection",
			"gate",
			"mass heal",
			"storm of vengeance",
			"true resurrection"
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
			description: tabbedLine + "I can spend 1 charge of Confession to convert a touch spell into a ranged spell (30ft)",
			action: ["action", "Reach of the Unseen"]
		},

		afflatus_solace: {
			name: "Afflatus Solace",
			source: ["FF", 130],
			minlevel: 2,
			description:
				tabbedLine + "I can spend x Confession charges to heal xd4 + my profficency. I cannot heal creatures with 0 hit points"
				+ tabbedLine + "I CANNOT use Prayer until my next turn.",
			action: ["action", "Afflatus Solace"]
		},

		conservation_of_life: {
			name: "Conservation of Life",
			source: ["FF", 145],
			minlevel: 18,
			description:
				tabbedLine + "When I fall to 0 HP, all allies (excluding me) within 30ft are healed 2d8 + WIS HP"
				+ tabbedLine + "This is not affected by Touch of the Padjal.",
			recovery: "long rest"
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
				tabbedLine + "I can expend Confession charges to bless a weapon you can see within 30ft during WIS rounds"
				+ tabbedLine + "[1 Charge] - The damage type of the weapon changes to cold, radiant or thunder."
				+ tabbedLine + "[2 Charges] - The weapon gains a +1 bonus on attack rolls."
				+ tabbedLine + "[3 Charges] - The weapon's damage rolls deal bonus damage equal to your proficiency bonus.",
			action: ["action", "Elemental Blessing"]
		},
		"subclassfeature2.1" : {
			name : "Extended Spells",
			source : ["FF", 131],
			minlevel : 2,
			description : tabbedLine + "My link to the elements gives me with the ability to cast certain spells",
			spellcastingExtra : ["earth tremor", "thunderwave", "earthbind", "maximilian's earthen grasp", "erupting earth", "melf's minute meteors", "stoneskin", "watery sphere", "conjure elemental", "control wind"]
		},
		subclassfeature6: {
			name: "Eyes of the Elementals",
			source: ["FF", 147],
			minlevel: 6,
			description:
				tabbedLine + "I can gain a mental map of the area in 2mile radius around me."
				+ tabbedLine + "I have to meditate during 15 mins for this.",
			vision : ["Darkvision, magical and non magical", 120],
			recovery: "long rest"
		},
		subclassfeature10: {
			name: "Elemental Armour",
			source: ["FF", 147],
			minlevel: 10,
			description:
				tabbedLine + "I can expend 1 Confession charge to grant a creature resistance to cold, radiant OR thunder during WIS rounds.",
			action: ["action", "Elemental Armour"]
		},
		subclassfeature14: {
			name: "Aetherial Conjuration",
			source: ["FF", 147],
			minlevel: 14,
			description:
				tabbedLine + "I can expend Confession charges to cast a spell which level is half the number of expended charge (rounded up).",
			action: ["bonus action", "Aetherial Conjuration"]
		},
	}
});