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
	"bio",
	"blizzard",
	"blade ward",
	"chill touch",
	"control flames",
	"create bonfire",
	"dancing lights",
	"fire",
	"fire bolt",
	"frostbite",
	"green-flame blade",
	"infestation",
	"light",
	"lightning lure",
	"mage hand",
	"magic stone",
	"produce flame",
	"ray of frost",
	"sapping sting",
	"shocking grasp",
	"thaumaturgy",
	"thunder",
	"toll the dead",
	"vicious mockery",
	//1st level
	"absorb elements",
	"bane",
	"biora",
	"blizzara",
	"break",
	"burning hands",
	"chaos bolt",
	"charm person",
	"dark",
	"detect magic",
	"disguise self",
	"drain",
	"expeditious retreat",
	"false life",
	"feather fall",
	"find familiar",
	"find steed",
	"fira",
	"fog cloud",
	"frost fingers",
	"grease",
	"hellish rebuke",
	"hex",
	"ice knife",
	"illusory script",
	"inflict wounds",
	"jump",
	"longstrider",
	"mage armor",
	"magic missile",
	"osmose",
	"ray of sickness",
	"scathe",
	"shield",
	"silent image",
	"sleep",
	"thundara",
	//2nd level
	"alter self",
	"arcane lock",
	"blindness/deafness",
	"blur",
	"borrowed knowledge",
	"cloud of daggers",
	"crown of madness",
	"darkness",
	"darkra",
	"darkvision",
	"detect thoughts",
	"dragon's breath",
	"find steed",
	"flame blade",
	"flaming sphere",
	"flock of familiars",
	"heat metal",
	"hold person",
	"invisibility",
	"knock",
	"levitate",
	"magic mouth",
	"mirror image",
	"misty step",
	"nathair's mischief",
	"nystul's magic aura",
	"pass without trace",
	"phantasmal force",
	"pyrotechnics",
	"rime's binding ice",
	"rope trick",
	"see invisibility",
	"silence",
	"spider climb",
	"suggestion",
	"tasha's mind whip",
	"vortex warp",
	"web",
	//3rd level
	"animate dead",
	"antagonize",
	"ashardalon's stride",
	"bestow curse",
	"bioga",
	"blink",
	"blizzaga",
	"counterspell",
	"darkga",
	"dispel magic",
	"elemental weapon",
	"en-element",
	"enemies abound",
	"fear",
	"feign death",
	"firaga",
	"fireball",
	"fly",
	"glyph of warding",
	"hypnotic pattern",
	"incite greed",
	"intellect fortress",
	"leomund's tiny hut",
	"lightning bolt",
	"magic circle",
	"major image",
	"nondetection",
	"protection from energy",
	"remove curse",
	"sending",
	"speak with dead",
	"spirit shroud",
	"stinking cloud",
	"summon shadowspawn",
	"summon undead",
	"thundaga",
	"tongues",
	"vampire touch",
	"water breathing",
	"water walk",
	//4th level"
	"arcane eye",
	"comet",
	"compulsion",
	"confusion",
	"conjure minor elementals",
	"de-element",
	"dimension door",
	"elemental bane",
	"evard's black tentacles",
	"fabricate",
	"find greater steed",
	"fire shield",
	"freedom of movement",
	"gate seal",
	"giant insect",
	"greater invisibility",
	"hallucinatory terrain",
	"leomund's secret chest",
	"mordenkainen's faithful hound",
	"mordenkainen's private sanctum",
	"otiluke's resilient sphere",
	"phantasmal killer",
	"polymorph",
	"raulothim's psychic lance",
	"shadow of moil",
	"sickening radiance",
	"spirit of death",
	"summon aberration",
	"summon elemental",
	"wall of fire",
	//5th level
	"animate objects",
	"antilife shell",
	"awaken",
	"bigby's hand",
	"bioja",
	"blizzaja",
	"circle of power",
	"conjure elemental",
	"contagion",
	"danse macabre",
	"darkja",
	"destruction wave",
	"enervation",
	"far step",
	"flame strike",
	"geas",
	"infernal calling",
	"insect plague",
	"mislead",
	"modify memory",
	"passwall",
	"planar binding",
	"raise dead",
	"scrying",
	"seeming",
	"summon draconic spirit",
	"synaptic static",
	"telekinesis",
	"teleportation circle",
	"thundaja",
	"wall of force",
	//6th level
	"arcane gate",
	"chain lightning",
	"circle of death",
	"create homunculus",
	"create undead",
	"disintegrate",
	"drawmij's instant summons",
	"eyebite",
	"flesh to stone",
	"forbiddance",
	"globe of invulnerability",
	"harm",
	"investiture of flame",
	"investiture of ice",
	"magic jar",
	"mass suggestion",
	"mental prison",
	"otiluke's freezing sphere",
	"otto's irresistible dance",
	"planar ally",
	"primordial ward",
	"scatter",
	"soul cage",
	"summon fiend",
	"true seeing",
	"wall of ice",
	"word of recall",
	//7th level
	"delayed blast fireball",
	"doomsday",
	"draconic transformation",
	"electron",
	"etherealness",
	"finger of death",
	"fire storm",
	"flare",
	"forcecage",
	"freeze",
	"imperil",
	"mordenkainen's magnificent mansion",
	"plane shift",
	"power word: pain",
	"prismatic spray",
	"sequester",
	"simulacrum",
	"symbol",
	"teleport",
	//8th level
	"abi-dalzim's horrid wilting",
	"antimagic field",
	"antipathy/sympathy",
	"clone",
	"demiplane",
	"dominate monster",
	"doom",
	"feeblemind",
	"foul",
	"glibness",
	"illusory dragon",
	"incendiary cloud",
	"maddening darkness",
	"maze",
	"meteor",
	"mind blank",
	"power word: stun",
	"telepathy",
	//9th level
	"astral projection",
	"demi-ultima",
	"gate",
	"imprisonment",
	"mass polymorph",
	"meteor swarm",
	"power word: kill",
	"psychic scream",
	"time stop",
	"true polymorph",
	"weird",
	"wish",
	"xenoglossy"
]

// --- Black Mage class ---
ClassList[className] = {
	name: classNameTitle,
	regExpSearch: /^(?=.*black)(?=.*mage).*$/i,
	source: ["FF", 41],
	primaryAbility: "Intelligence",
	prereqs: "Intelligence 13",
	die: 6,
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
	spellcastingExtra: [
		"chromatic orb", "witch bolt",
		"aganazzar's scorcher", "snilloc's snowball swarm",
		"call lightning", "sleet storm",
		"ice storm", "storm sphere",
		"cone of cold", "immolation"
	],
	source: ["FF", 42],
	features: {
		subclassfeature2: {
			name: "Unstable Aether",
			source: ["FF", 42],
			minlevel: 2,
			description: desc(["[1 Mana Point] I can reroll any dmg die resulting in a 1 or 2, use new result."])
		},
		subclassfeature6: {
			name: "Polyglot",
			source: ["FF", 42],
			minlevel: 6,
			description: desc[("I can read all writing.")],
			languageProfs: ["All written"]
		},
		subclassfeature10: {
			name: "Aetherial Manipulation",
			source: ["FF", 42],
			minlevel: 10,
			description: desc([
				"I can now use my movement and consume Mana Points.",
				"As ba, If I casted a spell using SL, I can teleport back to the location."
			]),
			action: ["bonus action", ""]
		},
		subclassfeature14: {
			name: "Devastating Force",
			source: ["FF", 43],
			minlevel: 14,
			description: desc(["If I roll highest dmg, I can reroll and add that dmg"]),
			usagescalc: "event.value = Math.max(1, What('Int Mod'));",
			recovery: "long rest"
		},
	}
});
