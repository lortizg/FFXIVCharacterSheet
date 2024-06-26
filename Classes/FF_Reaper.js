/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script add the reaper class from FFXIV
				This is taken from the GM Binder website (https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv)
	Code by:	lortizg
	Year:		2024
*/


// --- global vars ---
var bulletedLine = "\n \u2022 ";
var tabbedLine = "\n   ";

// --- File particular vars ---
var iFileName = "FF_Reaper.js";
var className = "reaper";
var classNameTitle = "Reaper";

var skillsToSelect = "Arcana, Athletics, Insight, Intimidation, Perception, Religion";
var classArmorProfs = {
	LIGHT: true,
	MEDIUM: true,
	HEAVY: false,
	SHIELD: false
}
var classWeaponProfs = {
	SIMPLE: true,
	MARTIAL: true,
	OTHER: ''
}

var subclasses = [
	{
		subclassName: 'lemure',
		subclassTitle: 'Lemure'
	},
	{
		subclassName: 'grimkeeper',
		subclassTitle: 'Grim Keeper'
	},
	{
		subclassName: 'doomsinger',
		subclassTitle: 'Doomsinger'
	}
]


RequiredSheetVersion("13.0.6");

CompanionList["Void Avatar"] = {
	name: "Void Avatar",
	nameTooltip: "Reaper: Void Avatar",
	nameOrigin: "Reaper 1",
	nameMenu: "Void Avatar (2024 Reaper feature)",
	source: [["FF", 103]],
	action: [
		["action", "Rend"]
	],
	notes: [{
		name: "Void Bond",
		description: "I can add my proficency to  any ability check or saving throw that it makes.",
		joinString: " "
	}],
	attributesAdd: {
		header: "Voidsent",
		senses: "Darkvision 60 ft",
		ac: '13+Prof',
		size: 3,
		languages: "understands the languages its creator speaks",
		type: "Fiend",
		attacks: [{
			name: "Rend",
			ability: 4,
			damage: [1, "8+2+Prof", "slashing"],
			range: "5 ft",
			description: ""
		}],
	},
	calcChanges: {
		hp: function (totalHD, HDobj, prefix) {
			if (!classes.known.className) return;
			var creaHP = CurrentCompRace[prefix] && CurrentCompRace[prefix].hp ? CurrentCompRace[prefix].hp : 5;
			var creaName = CurrentCompRace[prefix] && CurrentCompRace[prefix].name ? CurrentCompRace[prefix].name : "the creature";
			var rngrLvl = classes.known.className.level;
			var rngrCompHp = 4 * rngrLvl;
			HDobj.alt.push(Math.max(creaHP, rngrCompHp));
			HDobj.altStr.push(" = the highest of either\n \u2022 " + creaHp + " from " + creaName + "'s normal maximum HP, or\n \u2022 4 \xD7 " + rngrLvl + " from four times my ranger level (" + rngrCompHp + ")");
		},
		setAltHp: true,
	},
}

// --- Source ---
SourceList["FF:RPR"] = {
	name: "FFXIV x D&D Compendium: " + classNameTitle,
	abbreviation: "FF:RPR",
	group: "Final Fantasy",
	url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
	date: "2020/11/25"
};

// --- Red Mage class ---
ClassList[className] = {
	name: classNameTitle,
	regExpSearch: /^(?=.*reaper).*$/i,
	source: ["FF", 101],
	primaryAbility: "Wisdom",
	prereqs: "Wisdom 13",
	die: 10,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: [AbilityScores.fields.str, AbilityScores.fields.wis],
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
		+ bulletedLine + "Battle Scythe -or- one martial melee weapon;"
		+ bulletedLine + "Two Handaxes -or- a Light Crossbow and 20 bolts;"
		+ bulletedLine + "scale mail -or- leather armor"
		+ bulletedLine + "A dungeoneer's Pack -or- an explorer's Pack"
		+ bulletedLine + "A Momento bestowed to the reaper by the voidsent",
	subclasses: ["The Grim Harvester", []],
	attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	abilitySave: 4,
	spellcastingFactor: 3,
	spellcastingKnown: {
		spells: "list",
		prepared: true,
	},
	// spellcastingList: {
	// 	spells: [
	// 		"blade ward",
	// 		"booming blade",
	// 		"dancing lights",
	// 		"fire bolt",
	// 		"green-flame blade",
	// 		"gust",
	// 		"jolt", // From FF
	// 		"lightning lure",
	// 		"mage hand",
	// 		"magic stone",
	// 		"mold earth",
	// 		"prestidigitation",
	// 		"ray of frost",
	// 		"shocking grasp",
	// 		"sword burst",
	// 		"thunderclap",
	// 		"true strike",
	// 		"word of radiance",
	// 		// "1st Level",
	// 		"absorb elements",
	// 		"burning hands",
	// 		"charm person",
	// 		"chromatic orb",
	// 		"cure wounds",
	// 		"detect magic",
	// 		"disguise self",
	// 		"earth tremor",
	// 		"feather fall",
	// 		"frost fingers",
	// 		"healing word",
	// 		"hellish rebuke",
	// 		"jump",
	// 		"mage armor",
	// 		"magic missile",
	// 		"shield",
	// 		"thunderwave",
	// 		"witch bolt",
	// 		"zephyr strike",
	// 		// "2nd Level",
	// 		"aganazzar's scorcher",
	// 		"calm emotions",
	// 		"cloud of daggers",
	// 		"dragon's breath",
	// 		"dust devil",
	// 		"earthbind",
	// 		"enhance ability",
	// 		"enthrall",
	// 		"flame blade",
	// 		"flaming sphere",
	// 		"gust of wind",
	// 		"lesser restoration",
	// 		"levitate",
	// 		"magic mouth",
	// 		"magic Weapon",
	// 		"maximilian's earthen grasp",
	// 		"misty step",
	// 		"pyrotechnics",
	// 		"scorching ray",
	// 		"shatter",
	// 		"ppike growth",
	// 		"warding wind",
	// 		"zone of truth",
	// 		// "3rd Level",
	// 		"blink",
	// 		"catnap",
	// 		"counterspell",
	// 		"dispel magic",
	// 		"elemental weapon",
	// 		"erupting earth",
	// 		"fireball",
	// 		"fly",
	// 		"haste",
	// 		"lightning bolt",
	// 		"magic circle",
	// 		"mass healing word",
	// 		"melf's minute meteors",
	// 		"revivify",
	// 		"thunder step",
	// 		"wall of sand",
	// 		"wind wall",
	// 		// // "4th Level",
	// 		// "Charm Monster",
	// 		// "Confusion",
	// 		// "Dominate Beast",
	// 		// "Elemental Bane",
	// 		// "Fire Shield",
	// 		// "Ice Storm",
	// 		// "Sickening Radiance",
	// 		// "Stoneshape",
	// 		// "Stoneskin",
	// 		// "Storm Sphere",
	// 		// "Wall of Fire",
	// 		// // "5th Level",
	// 		// "Circle of Power",
	// 		// "Control Winds",
	// 		// "Dawn",
	// 		// "Dominate Person",
	// 		// "Flame Strike",
	// 		// "Geas",
	// 		// "Holy",
	// 		// "Immolation",
	// 		// "Mass Cure Wounds",
	// 		// "Steel Wind Strike",
	// 		// "Transmute Rock",
	// 		// "Wall of Stone",
	// 		// // "6th Level",
	// 		// "Bones of the Earth",
	// 		// "Blade Barrier",
	// 		// "Chain Lightning",
	// 		// "Eyebite",
	// 		// "Flesh to Stone",
	// 		// "Heal",
	// 		// "Move Earth",
	// 		// "Tasha's Otherworldly Guide",
	// 		// "Tenser's Transformation",
	// 		// "Wind Walk",
	// 		// "7th Level",
	// 		// "Crown of Stars",
	// 		// "Delayed Blast Fireball",
	// 		// "Plane Shift",
	// 		// "Resurrection",
	// 		// "Whirlwind",
	// 		// // "8th Level",
	// 		// "Antimagic Field",
	// 		// "Dominate Monster",
	// 		// "Earthquake",
	// 		// "Glibness",
	// 		// "Incendiary Cloud",
	// 		// // "9th Level",
	// 		// "Blade of Disaster",
	// 		// "Flare",
	// 		// "Mass Heal",
	// 		// "Meteor Swarm",
	// 		// "Power Word Heal",
	// 		// "True Resurrection",
	// 	],
	// },
	features: {
		dark_alliance: {
			name: "Dark Alliance",
			source: ["FF", 103],
			minlevel: 1,
			description: "",
			recovery: "long rest",
			creaturesAdd: [["Void Avatar"]]
		},
		fighting_style: {
			name: "Fighting Style",
			source: ["P", 72],
			minlevel: 2,
			description: tabbedLine + "Choose a Fighting Style using the \"Choose Feature\" button above",
			choices: ["Blind Fighting","Defense", "Dueling", "Great Weapon", "Interception", "Thrown Weapon","Two Weapon"],
			choicesNotInMenu: false, //check!! todo
			"blind fighting": {
				name: "Blind Fighting Style",
				description: tabbedLine + "I have blindsight of 10ft. I can hit every creature that is not behind total cover.\n I can see an invisible creature unless it successfully hides from me",
				senses: "Blindsight 10ft"
			},
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
			"great weapon": {
				name: "Great Weapon Fighting Style",
				description: tabbedLine + "Reroll 1 or 2 on damage if wielding two-handed/versatile melee weapon in both hands",
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (v.isMeleeWeapon && (/(\bversatile|((^|[^+-]\b)2|\btwo).?hand(ed)?s?)\b/i).test(fields.Description)) {
								fields.Description += (fields.Description ? '; ' : '') + 'Re-roll 1 or 2 on damage die' + ((/versatile/i).test(fields.Description) ? ' when two-handed' : '');
							}
						},
						"While wielding a two-handed or versatile melee weapon in two hands, I can re-roll a 1 or 2 on any damage die once."
					]
				}
			},
			interception: {
				name: "Interception Fighting Style",
				description: tabbedLine + "As a reaction, I can reduce the damage taken by a creature at 5ft by 1d10+Prof \nI need to be wielding a shield or a weapon to do this",
				action: ["reaction", ""]
			},
			"thrown weapon": {
				name: "Thrown Weapon Fighting Style",
				description: tabbedLine + "I can draw a throwable weapon and attack with it as the same action. I deal +2 dmg with this weapon",
				action: ["action", ""]
			},
			"two weapon": {
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
		sixth_sense: {
			name: "Sixth Sense",
			source: ["FF", 104],
			minlevel: 6,
			description: "I can cast See Invisibility and Speak with Dead each once per long rest without requiring a spell slot.",
			spellcastingBonus: {
				name: "Sixth Sense",
				spells: ["see invisibility", "speak with dead"],
				selection: ["see invisibility", "speak with dead"],
				firstCol: "oncelr",
				times: 2
			},
		},
		death_design: {
			name: "Death Design",
			source: ["FF", 104],
			minlevel: 10,
			description: "After hiting a creature with a melee weapon attack I can spend a lvl1 spell slot to make it take a Charisma saving throw. Take 3d8 necrotic dmg and become frightened; half if saved. 1d8 more per higher spell slot",
			action: ["bonus action", "Death Design"]
		}
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
