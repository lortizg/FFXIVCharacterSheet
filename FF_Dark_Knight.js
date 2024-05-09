var iFileName = "FF_Dark_Knight.js";
var className = "Dark Knight";
RequiredSheetVersion("13.1.0");
// This file adds the content from the FFXIV: Dark Knight article to MPMB's Character Record Sheet

// Define the source
SourceList["FF:A"] = {
	name: `FFXIV x D&D Compendium: ${className}`,
	abbreviation: "FF:DK",
	group: "Final Fantasy",
	url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
	date: "2020/11/25"
};

// Adds a new class, the Dark Knight, with 3 subclasses
ClassList['dark-knight-ff'] = {
	regExpSearch: /^(?=.*dark)(?=.*knight).*$/i,
	name: `${className}`,
	source: [["FF", 64]],
	primaryAbility: `\n \u2022 ${className}: Strength;`,
	abilitySave: 6, //SPell, charisma
	prereqs: `\n \u2022 ${className}: Strength 13; Charisma 13`,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], //TODO
	die: 10,
	saves: ["Con", "Cha"],
	skills: [
		`\n\n ${className}: Choose two from Athletics, Arcana, History, Insight, Intimidation, Perception, Survival`,
		`\n\n ${className}: Choose two from Athletics, Arcana, History, Insight, Intimidation, Perception, Survival`
	],
	armor: [
		[true, true, true, true], //as first class
		[true, true, false, true] //as multiclass TODO
	],
	weapons: [
		[true, true],
		[true, true]
	],
	equipment: `${className} starting equipment:\n \u2022 Chain mail -or- Hide armor;\n \u2022 A martial weapon and a shield -or- Two martial weapons;\n \u2022 A short bow and 20 arrows -or- Two daggers;\n \u2022 An explorer's pack -or- A dungeoneer's pack`,
	subclasses: [`${className} Archetype`, []], // empty because addsubclass adds it
	attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	spellcastingFactor: 3, // todo 
	// spellcastingKnown: {
	// 	spells: [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13]
	// },
	features: { //required;  the class features. Each works the same way, so only a couple of example are given. You can add as many as you want
		"well of darkness": {
			name: "Well of Darkness",
			source: ["FF", 65],
			minlevel: 1,
			description: "",
			usages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			recovery: "long rest",
			action: ["bonus action", "Font of Magic"],
			additional: "Darkness Points",
			limfeaname: "Darkness Points"
		},
		"darkside": {
			name: "Darkside",
			source: ["FF", 65],
			minlevel: 1,
			description: "When I make a melee weapon attack, I deal extra nectrotic damage for -cha- rounds",
			additional: ["1d6", "1d6", "1d6", "1d6", "1d8", "1d8", "1d8", "1d8", "1d8", "1d8", "1d10", "1d10", "1d10", "1d10", "1d10", "1d10", "1d12", "1d12", "1d12", "1d12"],
			recovery: "long rest",
			action: ["bonus action", "Darkside"]
		},
		"fighting style": {
			name: "Fighting Style",
			source: ["P", 72],
			minlevel: 2,
			description: "\n   " + "Choose a Fighting Style using the \"Choose Feature\" button above",
			choices: ["defense", "dueling", "great_weapon", "protection", "two_weapon"],
			choicesNotInMenu: true, //check!! todo
			defense: {
				name: "Defense Fighting Style", //required;
				description: "\n   " + "While you are wearing armor, you gain +1 bonus to AC",
				extraAC: {
					name: "Defense Fighting Style", // necessary for features referring to fighting style properties directly
					mod: 1,
					text: "I gain a +1 bonus to AC while wearing armor.",
					stopeval: function (v) { return !v.wearingArmor; }
				}
			},
			dueling: {
				name: "Dueling Fighting Style",
				description: desc("+2 to damage rolls when wielding a melee weapon in one hand and no other weapons"),
				calcChanges: {
					atkCalc: [
						function (fields, v, output) {
							for (let i = 1; i <= FieldNumbers.actions; i++) {
								if ((/off.hand.attack/i).test(What('Bonus Action ' + i))) return;
							};
							if (v.isMeleeWeapon && !v.isNaturalWeapon && !(/((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b/i).test(fields.Description)) output.extraDmg += 2;
						},
						"When I'm wielding a melee weapon in one hand and no weapon in my other hand, I do +2 damage with that melee weapon. This condition will always be false if the bonus action 'Off-hand Attack' exists."
					]
				}
			},
			great_weapon: {
				name: "Great Weapon Fighting Style",
				description: desc("Reroll 1 or 2 on damage if wielding two-handed/versatile melee weapon in both hands"),
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
				description: desc([
					"As a reaction, I can give disadv. on an attack made vs. someone within 5 ft of me",
					"I need to be wielding a shield and be able to see the attacker to do this"
				]),
				action: ["reaction", ""]
			},
			two_weapon: {
				name: "Two-Weapon Fighting Style",
				description: desc("I can add my ability modifier to the damage of my off-hand attacks"),
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
		"burning blood": {
			name: "Burning Blood",
			source: ["FF", 65],
			minlevel: 2,
			description: "I spend one hit dice to recover Well of Darkness points. Cannot exceed max",
			action: ["bonus action", "Burning Blood"]
		},
		"subclassfeature3": {
			name: "Dark Knight Archetype",
			source: ["FF", 66],
			minlevel: 3,
			description: desc('Choose a Dark Knight Archetype you strive to emulate and put it in the "Class" field ')
		},

		"the blackest night": {
			name: "The Blackest Night",
			source: ["FF", 66],
			minlevel: 7,
			description: "I spend a hit dice to give temp hit points to me or a creature of 1d10+cha",
			action: ["bonus action", "The Blackest Night"]
		},

		"fight or flight": {
			name: "Fight or Flight",
			source: ["FF", 66],
			minlevel: 9,
			description: "[2 Well of Darkness points] I can cast Cause Fear or Compelled Duel",
			action: ["action", "Fight or Flight"]
		},

		"curse of the abyss": {
			name: "Curse of the Abyss",
			source: ["FF", 66],
			minlevel: 10,
			description: `I can use my bonus action to curse a creature for 1min. It ends if the crea. dies, or I am incapacitated.\n I can add my prof to damage rolls against the cursed crea. \nIf I roll a nat 19 or 20 against the cursed crea, it is a crit.\nIf the crea dies, I regain ${classname} lvl + cha hit points and 1 Well of Darkness point`,
			action: ["bonus action", "Curse of the Abyss"],
		}

	}
};
