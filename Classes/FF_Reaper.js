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
			ability: 5,
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
	abilitySave: 5,
	spellcastingFactor: 2,
	spellcastingKnown: {
		spells: "list",
		prepared: true,
	},
	spellcastingList: {
		spells: [
			"arcane weapon",
			"armor of agathys",
			"arms of hadar",
			"bane",
			"cause fear",
			"chaos bolt",
			"compelled duel",
			"comprehend languages",
			"cure wounds",
			"dark",
			"detect evil and good",
			"detect magic",
			"drain",
			"false life",
			"find steed",
			"fog cloud",
			"gentle repose",
			"hellish rebuke",
			"hex",
			"hunter's mark",
			"ice knife",
			"identify",
			"inflict wounds",
			"jump",
			"longstrider",
			"protection from evil and good",
			"ray of sickness",
			"shield",
			"silent image",
			"unseen servant",
			"wrathful smite",
			// 2nd level
			"alter self",
			"arcane lock",
			"augury",
			"blindness/deafness",
			"crown of madness",
			"darkness",
			"darkra",
			"darkvision",
			"detect thoughts",
			"enhance ability",
			"enthrall",
			"find traps",
			"hold person",
			"invisibility",
			"levitate",
			"magic weapon",
			"mirror image",
			"misty step",
			"pass without trace",
			"phantasmal force",
			"ray of enfeeblement",
			"see invisibility",
			"shadow blade",
			"silence",
			"spiritual weapon",
			"zone of truth",
			//"3rd level",
			"animate dead",
			"bestow curse",
			"darkga",
			"dispel magic",
			"elemental weapon",
			"fear",
			"feign death",
			"fly",
			"gaseous form",
			"haste",
			"hunger of hadar",
			"hypnotic pattern",
			"life transference",
			"phantom steed",
			"remove curse",
			"speak with dead",
			"spirit guardians",
			"spirit shroud",
			"summon shadowspawn",
			"summon undead",
			"vampiric touch",
			//"4th level",
			"arcane eye",
			"banishment",
			"blight",
			"compulsion",
			"confusions",
			"death ward",
			"dimension door",
			"evard's black tentacles",
			"find greater steed",
			"greater invisibility",
			"phantasmal killer",
			"shadow of moil",
			"staggering smite",
			//"5th level",
			"antilife shell",
			"banishing smite",
			"circle of power",
			"cloudkill",
			"contact other plane",
			"contagion",
			"danse macabre",
			"desctructive wave",
			"enervation",
			"hold monster",
			"negative energy flood",
			"raise dead",
			"scrying",
			"steel wind strike",
			"teleportation circle"
		],
	},
	features: {
		dark_alliance: {
			name: "Dark Alliance",
			source: ["FF", 103],
			minlevel: 1,
			description: "I can spend one of my attacks to make Void Avatar attack",
			recovery: "long rest",
			creaturesAdd: [["Void Avatar"]],
			action: ["action", "Void Avatar attack"]
		},
		fighting_style: {
			name: "Fighting Style",
			source: ["P", 72],
			minlevel: 2,
			description: tabbedLine + "Choose a Fighting Style using the \"Choose Feature\" button above",
			choices: ["Blind Fighting", "Defense", "Dueling", "Great Weapon", "Interception", "Thrown Weapon", "Two Weapon"],
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
			description: tabbedLine + "I can cast See Invisibility and Speak with Dead each once per long rest without requiring a spell slot.",
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
			description: tabbedLine + "After hiting a creature with a melee weapon attack I can spend a lvl1 spell slot to make it take a Charisma saving throw. Take 3d8 necrotic dmg and become frightened; half if saved. 1d8 more per higher spell slot",
			action: ["action", "Death Design"]
		}
	}
};

AddSubClass(className, subclasses[0].subclassName, {
	regExpSearch: /^(?=.*lemure).*$/i,
	subname: subclasses[0].subclassTitle,
	fullname: subclasses[0].subclassTitle,
	source: ["FF", 131],
	features: {
		subclassfeature3: {
			name: "Soul Slice",
			source: ["FF", 113],
			minlevel: 3,
			description: tabbedLine + "After hiting a creature with a melee weapon attack I can spend a lvl1 spell slot to make it and every creature within 5ft take a Dexterity saving throw. Take 2d6 necrotic dmg; half if saved. 1d6 more per higher spell slot"
				+ tabbedLine + "If Void Avatar is invoked, the range increases to 15ft cone from the target",
			action: ["action", "Soul Slice"]
		},
		"subclassfeature3.1": {
			name: "Wraith Walk",
			source: ["FF", 113],
			minlevel: 7,
			description: tabbedLine + "I can spend a lvl1 spell slot to hover and increase my speed by 5ft; additional 5ft per higher spell slot",
			action: ["action", "Soul Slice"]
		},
	}
});

AddSubClass(className, subclasses[1].subclassName, {
	regExpSearch: /^(?=.*grim)(?=.*keeper).*$/i,
	subname: subclasses[1].subclassTitle,
	fullname: subclasses[1].subclassTitle,
	source: ["FF", 105],
	features: {
		subclassfeature3: {
			name: "Shared Presence",
			source: ["FF", 105],
			minlevel: 3,
			description: tabbedLine + "I can cast spells centered from Void Avatar instead of me",
			usages: 3,
			recovery: "long rest",
			action: ["action", "Soul Slice"]
		},
		"subclassfeature3.1": {
			name: "Death Perception",
			source: ["FF", 105],
			minlevel: 7,
			description: tabbedLine + "I can communicate telepathically with Void Avatar within 100ft"
				+ tabbedLine + "I can see and hear through Void Avatar until the start of my next turn. I gain any Special Senses it has and I become blind and deaf from my own senses",
			action: ["action", "Death Perception"]
		},
	}
});

AddSubClass(className, subclasses[2].subclassName, {
	regExpSearch: /^(?=.*doomsinger).*$/i,
	subname: subclasses[2].subclassTitle,
	fullname: subclasses[2].subclassTitle,
	source: ["FF", 106],
	features: {
		subclassfeature3: {
			name: "Soulsow",
			source: ["FF", 106],
			minlevel: 3,
			description: tabbedLine + "I can cast a spell spending twice the souls of a spell slot lvl."
				+ tabbedLine + "I gain these souls when a hostile crea. dies within 30ft. They vanish after long rest"
				+ tabbedLine + "Range increases to 60ft if Void Avatar is invoked",
			usages: [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
			recovery: "long rest",
			action: ["action", "Soul Slice"],
			additional: "Souls",
			limfeaname: "Souls"
		},
		"subclassfeature3.1": {
			name: "Bonus Cantrip",
			source: ["FF", 106],
			minlevel: 3,
			description: "",
			spellcastingBonus: {
				spells: ["toll the dead"],
				spells: ["toll the dead"]
			},
		},
		"subclassfeature3.2": function () {
			var a = {
				name: "Keeper of Shadowy Secrets",
				source: ["FF", 106],
				minlevel: 7,
				description: tabbedLine + "I gain proficency on a skill or expertise if I'm already proficent on it.",
				skillstxt: "Choose one from Arcana, History, Insight, Medicine, Religion. Gain proficency or expertise if already proficent.",
				// additional: 1,
				extraname: "Keeper of Shadowy Secrets",
				choices: ["Arcana", "History", "Insight", "Medicine", "Religion"]
			}
			for (var i = 0; i < a.choices.length; i++) {
				var attr = a.choices[i].toLowerCase();
				a[attr] = {
					name: a.choices[i] + " Knowledge",
					description: "",
					source: a.source,
					skills: [[a.choices[i], "increment"]]
				}
			}
			return a;
		}(),
	}
});

