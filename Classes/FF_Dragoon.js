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
			recovery: "Dragon Trance"
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
		fighting_style: {
			name: "Fighting Style",
			source: ["FF", 65],
			minlevel: 2,
			description: tabbedLine + "Choose a Fighting Style using the \"Choose Feature\" button above",
			choices: ["Archery", "Defense", "Dueling", "Great Weapon Fighting", "Protection", "Two-Weapon Fighting"],
			choicesNotInMenu: false, //check!! todo
			archery: {
				name: "Archery Fighting Style",
				description: desc("+2 bonus to attack rolls I make with ranged weapons"),
				calcChanges: {
					atkCalc: [
						function (fields, v, output) {
							if (v.isRangedWeapon && !v.isNaturalWeapon && !v.isDC) output.extraHit += 2;
						},
						"My ranged weapons get a +2 bonus on the To Hit."
					]
				}
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
			"great weapon fighting": {
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
			protection: {
				name: "Protection Fighting Style",
				description: tabbedLine + "As a reaction, I can give disadv. on an attack made vs. someone within 5 ft of me\nI need to be wielding a shield and be able to see the attacker to do this",
				action: ["reaction", ""]
			},
			"Two-Weapon Fighting": {
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
		lancet: {
			name: "Lancet",
			source: ["FF", 65],
			minlevel: 2,
			description: tabbedLine + "[1 Draconic Blood point] After hitting a melee weapon attack, I recover HP equal to half inflicted dmg (rounded up)."
		},
		stall: {
			name: "Stall",
			source: ["FF", 65],
			minlevel: 6,
			description:
				tabbedLine + "[Dragon Trance] When I jump, I can pause in place until the end of my next turn. I can do actions as normal in this state." +
				tabbedLine + "I must use my movement in the next turn to fall."
		},
		true_thrust: {
			name: "True Thrust",
			source: ["FF", 66],
			minlevel: 6,
			description: tabbedLine + "[1 Draconic Blood point] I can my Wis mod to my attack rolls until the end of my next turn.",
			action: ["bonus action", "True Thrust"]
		},
		// heavy_thrust: {
		// 	name: "Heavy Thrust",
		// 	source: ["FF", 65],
		// 	minlevel: 7,
		// 	description: tabbedLine + "[1 Draconic Blood point] After hitting a melee weapon attack, I recover HP equal to half inflicted dmg (rounded up)."
		// }
		life_of_the_dragon: {
			name: "Life of the Dragon",
			source: ["FF", 66],
			minlevel: 9,
			description: 
				tabbedLine + "I can now permanently jump 30ft and 15ft high" +
				tabbedLine + "While on Dragoon Trance it turns into 90ft and 60ft high and I can use Dash as bonus action."
				//TODO: change abilities of jump on main sheet
		},
		high_jump: {
			name: "High Jump",
			source: ["FF", 65],
			minlevel: 10,
			description: tabbedLine + "If I used Stall in my last turn, if I jump 30ft I can make a melee attack as an action. The creature must succeed a Dex saving throw (disadv.) or be knocked prone and take dmg 4 x Total Damage of the weapon I am wielding; half dmg if succeed and is not knocked.",
			weaponOptions: {
				regExpSearch: /^(?=.*high)(?=.*jump).*$/i,
				name: "High Jump",
				source: [["FF", 65]],
				list: "melee",
				ability: 2,
				type: "Natural",
				damage: [0, 0, ""],
				range: "melee",
				description: "Dex save (disadv.), success - half dmg, not knocked; I land in an unoccupied space next to the creature",
				abilitytodamage: false,
				dc: true,
				tooltip: "I make 4x full damage of my weapon",
				isNotWeapon: true,
				selectNow: true
			},
		},
		wing_clipper: {
			name: "Wing Clipper",
			source: ["FF", 66],
			minlevel: 10,
			description: tabbedLine + "If a creature fails the DC against my jumps and have flying speed, its flying speed drops to 0. As an action, they can repeat the saving throw and restore it on a success."
		},
		fang_and_claw: {
			name: "Fang and Claw",
			source: ["FF", 66],
			minlevel: 13,
			description: tabbedLine + "[Dragon's Trance] I can make a weapon attack in a bonus action.",
			action: ["bonus action", "Fang and Claw"]
		},
		heavy_impact: {
			name: "Heavy Impact",
			source: ["FF", 66],
			minlevel: 14,
			description: tabbedLine + "[1 Draconic Blood point] I can make a jump attack affect all crea. within 10ft of the attacked creature."
		},
		invigorate: {
			name: "Invigorate",
			source: ["FF", 66],
			minlevel: 17,
			description: tabbedLine + "If I miss a saving throw, I can reroll the dice and take the new result.",
			usages: "Wisdom mod per ",
			usagescalc: "event.value = Number(What('Wis Mod'))",
			recovery: "long rest"
		},
		battle_litany: {
			name: "Battle Litany",
			source: ["FF", 66],
			minlevel: 18,
			description: 
				tabbedLine + "[Dragoon's Trance] Me and my allies within 10ft can land a crit on melee weapon attacks on a 19 or 20 roll for STR mod rounds."+
				tabbedLine + "This can be activated once per Dragoon's Trance. It doesn't overwrite other crit range increases."
		},
		dragon_blooded: {
			name: "Dragon Blooded",
			source: ["FF", 66],
			minlevel: 20,
			description: tabbedLine + "When I roll initiative, I recover 2 uses of Dragoon Trance if I don't have any left."
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