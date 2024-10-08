/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script add the dancer class from FFXIV
				This is taken from the GM Binder website (https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv)
	Code by:	lortizg
	Year:		2024
*/


// --- global vars ---
var bulletedLine = "\n \u2022 ";
var tabbedLine = "\n   ";

// --- File particular vars ---
var iFileName = "FF_Dancer.js";
var className = "dancer";
var classNameTitle = "Dancer";

var skillsToSelect = "Acrobatics, Deception, Insight, Perception, Performance, Persuasion";
var classArmorProfs = {
	LIGHT: true,
	MEDIUM: false,
	HEAVY: false,
	SHIELD: false
}
var classWeaponProfs = {
	SIMPLE: true,
	MARTIAL: false,
	OTHER: ['Chakram', 'Rapier', 'Scimitar', 'Short Sword', 'Whip']
}

var subclasses = [
	{
		subclassName: 'paragon',
		subclassTitle: 'Paragon'
	},
	{
		subclassName: 'peacebringer',
		subclassTitle: 'Peace Bringer'
	},
	{
		subclassName: 'exoticwonder',
		subclassTitle: 'Exotic Wonder'
	}
]


RequiredSheetVersion("13.1.14");

// --- Source ---
SourceList["FF:DRG"] = {
	name: "FFXIV x D&D Compendium: " + classNameTitle,
	abbreviation: "FF:DNC",
	group: "Final Fantasy",
	url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
	date: "2020/11/25"
};

// --- Dancer class ---
ClassList[className] = {
	name: classNameTitle,
	regExpSearch: /^(?=.*dancer).*$/i,
	source: ["FF", 56],
	primaryAbility: "Charisma",
	prereqs: "Charisma 13",
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
	equipment:
		className + " starting equipment:"
		+ bulletedLine + "Two daggers -or- Two chakrams;"
		+ bulletedLine + "A whip -or- A scimitar;"
		+ bulletedLine + "A set of bracelets and anklets for spellcasting;"
		+ bulletedLine + "A set of clothes;"
		+ bulletedLine + "A costume -or- Light Armour;"
		+ bulletedLine + "An explorer's pack -or- a entertainer's pack",
	subclasses: ["The World Stage", []],
	attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave: 6,
	spellcastingFactor: 2,
	spellcastingKnown: {
		spells: "list",
		prepared: true,
	},
	spellcastingList: {
		spells: [
			//"1st level",
			"bane",
			"bless",
			"cause fear",
			"compelled duel",
			"cure wounds",
			"detect evil and good",
			"detect magic",
			"detect poison and disease",
			"ensnaring strike",
			"entangle",
			"expeditious retreat",
			"faerie fire",
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
			//"2nd level",
			"alter self",
			"barkskin",
			"blur",
			"calm emotions",
			"charm person",
			"crown of madness",
			"dragon's breath",
			"dust devil",
			"earthbind",
			"enhance ability",
			"enlarge/reduce",
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
			"shadow blade",
			"skywrite",
			"spike growth",
			"warding wind",
			"web",
			//"3rd level",
			"ashardalon's stride",
			"aura of vitality",
			"beacon of hope",
			"bestow curse",
			"blink",
			"call lightning",
			"clairvoyance",
			"dispel magic",
			"elemental weapon",
			"enemies abound",
			"fear",
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
			//"4th level",
			"arcane eye",
			"aura of life",
			"aura of purity",
			"banishment",
			"compulsion",
			"confusion",
			"control water",
			"dominate beast",
			"greater invisibility",
			"otiluke's resilient sphere",
			"phantasmal killer",
			"polymorph",
			"stone shape",
			"stoneskin",
			"storm sphere",
			//"5th level",
			"animate objects",
			"antilife shell",
			"circle of power",
			"control winds",
			"danse macabre",
			"dawn",
			"dispel evil and good",
			"dominate person",
			"far step",
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
		],
	},
	features: {
		dazzling_dance: {
			name: "Dazzling Dance",
			source: ["FF", 55],
			minlevel: 1,
			description: "When I attack, I get 1 charge of Dazzling Dance. They dissipate 1min after the combat ends.",
			usages: "Charisma mod + Proficiency bonus per ",
			usagescalc: "event.value = Number(What('Cha Mod'))",
			recovery: "ESP",
			additional: "Dazzling Dance",
			limfeaname: "Dazzling Dance"
		},
		flourish: {
			name: "Flourish",
			source: ["FF", 55],
			minlevel: 1,
			description: desc([
				"Once per turn, I can add damage to a finesse, ranged weapon attack if I have advantage",
				"I don't need adv. if the target has a conscious enemy within 5 ft and I don't have disadv."
			]),
			additional: levels.map(function (n) {
				return Math.ceil(n / 2) + "d6";
			}),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (classes.known.dancer && classes.known.dancer.level && !v.isSpell && !v.isDC && (v.isRangedWeapon && (/\bfinesse\b/i).test(fields.Description))) {
							v.sneakAtk = Math.ceil(classes.known.dancer.level / 2);
							fields.Description += (fields.Description ? '; ' : '') + 'Flourish ' + v.sneakAtk + 'd6';
						};
					},
					"Once per turn, when I attack with a ranged, finesse weapon while I have advantage or an conscious ally is within 5 ft of the target, I can add my sneak attack damage to the attack.",
					700
				]
			}
		},
		unarmoured_defense: {
			name: "Unarmoured Defense",
			source: ["FF", 55],
			minlevel: 1,
			description: tabbedLine + "Without armor, my AC is 10 + Dexterity modifier + Charisma modifier + shield",
			armorOptions: [{
				regExpSearch: /justToAddToDropDownAndEffectWildShape/,
				name: "Unarmored Defense (Cha)",
				source: [["SRD", 8], ["P", 48]],
				ac: "10+Cha",
				affectsWildShape: true,
				selectNow: true
			}]
		},
		spellcasting: {
			name: "Spellcasting",
			source: ["FF", 55],
			minlevel: 2,
			description:
				tabbedLine + "I can cast prepared dancer spells, using Charisma as my spellcasting ability."
				+ tabbedLine + "I can use a bangles, anklets or jewlery with gemstones as a spellcasting focus."
				+ tabbedLine + "I can spend 10ft of movement to not fulfill the Verbal component of a spell.",
		},
		whirling_steel: {
			name: "Whirling Steel",
			source: ["FF", 55],
			minlevel: 2,
			description: tabbedLine + "I can spend 1h attuning two finesse throwing weapons. These wepons return to my hand magically after the attack."
		},
		uncanny_dodge: {
			name: "Uncanny Dodge",
			source: ["FF", 55],
			minlevel: 5,
			description: tabbedLine + "When I am attacked by a crea. I see, I can halve the attack damage as a reaction.",
			action: ["reaction", ""]
		},
		evasion: {
			name: "Evasion",
			source: ["FF", 56],
			minlevel: 7,
			description: tabbedLine + "I take half dmg from failed dex saves, none if succeeded."
		},
		motivating_mambo: {
			name: "Motivating Mambo",
			source: ["FF", 56],
			minlevel: 10,
			description:
				tabbedLine + "[1 Dazzling Dance charge] When using Help action, I can add my Cha mod to their roll." +
				tabbedLine + "[1 Dazzling Dance charge] I can use Help as a bonus action",
			action: ["bonus action", ""]
		}
	}
};

AddSubClass(className, subclasses[2].subclassName, {
	regExpSearch: /^(?=.*exotic)(?=.*wonder).*$/i,
	subname: subclasses[2].subclassTitle,
	fullname: subclasses[2].subclassTitle,
	source: ["FF", 67],
	features: {
		subclassfeature3: {
			name: "Flourishing Swing",
			source: ["FF", 57],
			minlevel: 3,
			description: tabbedLine + "My melee finesse weapon attacks also activate Flourish",
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (classes.known.dancer && classes.known.dancer.level && !v.isSpell && !v.isDC && (v.isMeleeWeapon && (/\bfinesse\b/i).test(fields.Description))) {
							v.sneakAtk = Math.ceil(classes.known.dancer.level / 2);
							fields.Description += (fields.Description ? '; ' : '') + 'Flourish ' + v.sneakAtk + 'd6';
						};
					},
					"Once per turn, when I attack with a melee, finesse weapon while I have advantage or an conscious ally is within 5 ft of the target, I can add my sneak attack damage to the attack.",
					700
				]
			}
		},
		"subclassfeature3.1": {
			name: "Fighting Style",
			source: ["FF", 57],
			minlevel: 3,
			description: tabbedLine + "Choose a Fighting Style using the \"Choose Feature\" button above",
			choices: ["Defense", "Dueling", "Fleet Foot", "Two-Weapon Fighting"],
			choicesNotInMenu: false,
			defense: {
				name: "Defense Fighting Style", //required;
				description: tabbedLine + "While you are wearing armor, you gain +1 bonus to AC",
				extraAC: {
					name: "Defense Fighting Style", // necessary for features referring to fighting style properties directly
					mod: 1,
					text: "I gain a +1 bonus to AC while wearing armor.",
					stopeval: function (v) { return !v.wearingArmor; }
				}
			},
			dueling: {
				name: "Dueling Fighting Style",
				description: tabbedLine + "+2 to damage rolls when wielding a melee weapon in one hand and no other weapons",
				calcChanges: {
					atkCalc: [
						function (fields, v, output) {
							for (var i = 1; i <= FieldNumbers.actions; i++) {
								if ((/off.hand.attack/i).test(What('Bonus Action ' + i))) return;
							};
							if (v.isMeleeWeapon && !v.isNaturalWeapon && !(/((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b/i).test(fields.Description)) output.extraDmg += 2;
						},
						"When I'm wielding a melee weapon in one hand and no weapon in my other hand, I do +2 damage with that melee weapon. This condition will always be false if the bonus action 'Off-hand Attack' exists."
					]
				}
			},
			"fleet foot": {
				name: "Fleet Foot Style", //required;
				description: tabbedLine + "My movement speed increases by 5ft",
				speed: {
					walk: { spd: "+5", enc: "+5" },
					burrow: { spd: "+5", enc: "+5" },
				}
			},
			"two-weapon fighting": {
				name: "Two-Weapon Fighting Style",
				description: tabbedLine + "I can add my ability modifier to the damage of my off-hand attacks",
				calcChanges: {
					atkCalc: [
						function (fields, v, output) {
							if (v.isOffHand) output.modToDmg = true;
						},
						"When engaging in two-weapon fighting, I can add my ability modifier to the damage of my off-hand attacks. If a melee weapon includes 'off-hand' or 'secondary' in its name or description, it is considered an off-hand attack."
					]
				}
			},
		},
		subclassfeature6: {
			name: "Double Step",
			source: ["FF", 57],
			minlevel: 6,
			description: tabbedLine + "[1 Dazzling Dance charge] I can make an extra melee weapon attack",
		},
		subclassfeature11: {
			name: "Flawless Flow",
			source: ["FF", 57],
			minlevel: 11,
			description: tabbedLine + "After casting a spell, I can make a melee weapon attack",
			action: ["bonus action", ""]
		},
		subclassfeature15: {
			name: "Lamia Bite",
			source: ["FF", 57],
			minlevel: 15,
			description: tabbedLine+ "[4 Dazzling Dance charges] My range to make a crit hit is reduced by 4",
		},
	}
});

// As suggested, this is based on the Handaxe
WeaponsList["chakram"] = {
	regExpSearch: /^(?=.*chakram).*$/i,
	name: "Chakram",
	source: [["FF", 56]],
	list: "melee",
	ability: 1,
	type: "Simple",
	damage: [1, 6, "slashing"],
	range: "Melee, 20/60 ft",
	weight: 2,
	description: "Finesse, light, thrown",
	abilitytodamage: true
};