/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script add the machinist class from FFXIV
				This is taken from the GM Binder website (https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv)
	Code by:	lortizg
	Year:		2024
*/


// --- global vars ---
var bulletedLine = "\n \u2022 ";
var tabbedLine = "\n   ";

// --- File particular vars ---
var iFileName = "FF_Machinist.js";
var className = "machinist";
var classNameTitle = "Machinist";

var skillsToSelect = "Athletics, Arcana, History, Insight, Intimidation, Perception, Survival";
var classProfs = {
	armorProfs: {
		LIGHT: true,
		MEDIUM: false,
		HEAVY: false,
		SHIELD: false
	},
	weaponProfs: {
		SIMPLE: true,
		MARTIAL: false,
		OTHER: ['Pistol', 'Hunting Rifle', 'Revolver', 'Musket']
	},
	toolProfs: [["Artisan's Tools", 2]],
};

var subclasses = [
	{
		subclassName: 'gaussianmarksman',
		subclassTitle: 'Gaussian Marksman'
	},
	{
		subclassName: 'roboticist',
		subclassTitle: 'Roboticist'
	},
	{
		subclassName: 'inventorslegacy',
		subclassTitle: "Inventor's Legacy"
	}
]


RequiredSheetVersion("13.1.14");

// --- Source ---
SourceList["FF:MCH"] = {
	name: "FFXIV x D&D Compendium: " + classNameTitle,
	abbreviation: "FF:MCH",
	group: "Final Fantasy",
	url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
	date: "2020/11/25"
};

// --- Machinist class ---
ClassList[className] = {
	name: classNameTitle,
	regExpSearch: /^(?=.*machinist).*$/i,
	source: ["FF", 73],
	primaryAbility: "Intelligence",
	prereqs: "Intelligence 13 or Dexterity 13",
	die: 8,
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves: [AbilityScores.fields.dex, AbilityScores.fields.int],
	skills: [
		"\n\n" + className + ": Choose two from " + skillsToSelect + ".",
		"\n\n" + className + ""
	],
	armorProfs: {
		primary: [classProfs.armorProfs.LIGHT, classProfs.armorProfs.MEDIUM, classProfs.armorProfs.HEAVY, classProfs.armorProfs.SHIELD]
	},
	weaponProfs: {
		primary: [classProfs.weaponProfs.SIMPLE, classProfs.weaponProfs.MARTIAL, classProfs.weaponProfs.OTHER]
	},
	toolProfs: {
		primary: classProfs.toolProfs
	},
	equipment:
		className + " starting equipment:"
		+ bulletedLine + "Leather armor;"
		+ bulletedLine + "A pistol and 20 bullets -or- A dagger;"
		+ bulletedLine + "A musket and 20 bullets;"
		+ bulletedLine + "A set of artisan's tools;"
		+ bulletedLine + "An aetherconverter;"
		+ bulletedLine + "An explorer's pack -or- a dungeoneer's pack",
	subclasses: ["Magnum Opus", []],
	attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	abilitySave: AbilityScores.intelligence.index,
	features: {
		aether_battery: {
			name: "Aether Battery",
			source: ["FF", 75],
			minlevel: 1,
			description: desc([
				"I can use Aether batteries in my inventions. Each has 10 energy charges.",
				"At a short rest, I can recharge my Prof of of batteries. All at long rest."
			]),
			recovery: "long rest",
			usages: "Int mod + Proficiency bonus per ",
			usagescalc: "event.value = Number(What('Int Mod') + What('Proficiency Bonus'))",
		},
		mechanical_turret: {
			name: "Mechanical Turret",
			source: ["FF", 75],
			minlevel: 2,
			description: desc(["I can spend one of my attacks to make Mechanical Turret attack"]),
			recovery: "long rest",
			creaturesAdd: [["Mechanical Turret"]],
			action: ["action", "Mechanical Turret attack"]
		},
		tech_support: {
			name: "Tech Support",
			source: ["FF", 75],
			minlevel: 2,
			description: desc(["I can use Artisan's tools to disarm mech traps."])
		},
		reload: {
			name: "Reload",
			source: ["FF", 76],
			minlevel: 5,
			description: desc(["Ranged weapons lose the loading property."]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (classes.known.machinist && classes.known.machinist.level && !v.isSpell && !v.isDC && (v.isRangedWeapon && (/\bloading\b/i).test(fields.Description))) {
							fields.Description += (fields.Description ? '; ' : '') + 'no loading required';
						};
					},
					"Ranged weapons lose the loading property.",
					700
				]
			}
		},
		eye_for_design: {
			name: "Eye for Design",
			source: ["FF", 76],
			minlevel: 6,
			description: desc([
				"I gain advantage on Investigation checks to understand how a mech system works.",
				"I gain advantage on Survival checks to track a creature within a building, village, town or city"
			])
		},
	}
};

CreatureList["mechanical turret"] = {
	name: "Mechanical Turret",
	nameAlt: ["Mechanical Turret"],
	source: ["FF", 75],
	size: 4,
	type: "Construct",
	companion: "familiar",
	companionApply: "mechanicalserv",
	alignment: "Unaligned",
	ac: 13,
	hp: 5,
	hd: [4, 6],
	hdLinked: ["machinist"],
	speed: "30 ft",
	proficiencyBonus: 2,
	proficiencyBonusLinked: true,
	challengeRating: "",
	scores: [15, 13, 12, 2, 13, 8],
	saves: ["", 3, "", "", "", ""],
	savesLinked: true,
	senses: "Darkvision 60 ft",
	attacksAction: 2,
	attacks: [{
		name: "Claws",
		ability: 1,
		damage: [2, 6, "slashing"],
		range: "Melee (5 ft)",
		description: "Two claws attacks as an Attack action"
	}],
	skills: {
		"Athletics": 4,
		"Perception": 5
	},
	damage_vulnerabilities: "cold",
	damage_resistances: "lightning; thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
	damage_immunities: "poison",
	condition_immunities: "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
	languages: "Terran",
	features: [{
		name: "False Appearance",
		description: "While the purple crawler remains motionless, it is indistinguishable from an ordinary purple flower.",
		joinString: "\n   "
	}],
	actions: [{
		name: "Invisibility",
		minlevel: 5,
		description: "As an action, the purple crawler magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell).",
		addMod: [{ type: "skill", field: "all", mod: "max(oCha|1)", text: "The purple crawler adds its master's Charisma modifier (min 1) to all its skill checks." }]
	}],
	traits: [{
		name: "Keen Sight",
		minlevel: 8,
		description: "The purple crawler has advantage on Wisdom (Perception) checks that rely on sight. It size increases to Large.",
		eval: function (prefix, lvl) {
			// Increase size to Large
			PickDropdown(prefix + "Comp.Desc.Size", 2);
		},
		removeeval: function (prefix, lvl) {
			// Change size back to Medium
			PickDropdown(prefix + "Comp.Desc.Size", 3);
		}
	}],
	notes: [{
		name: "Lila Laser Light (Purplemancer 13)",
		minlevel: 13,
		description: desc([
			"The purple companion gains the ability to shine in a bright purple color",
			"Once per long rest, it can cast Hypnotic Pattern without requiring components"
		]),
		joinString: ""
	}],
	// >>>>>>>>>>>>>>>>>>>>>>>>>>> //
	// >>> Companion Page Only >>> //
	// >>>>>>>>>>>>>>>>>>>>>>>>>>> //
	/*
		The below attributes won't affect anything when the creature is select as a wild shape,
		but they will work on a Companion page.
	*/

	/*	minlevel // OPTIONAL //
		(Part of `features`, `traits`, `actions`, or `notes` object, see above)
		TYPE:	number
		USE:	the level at which to add the feature, trait, or action
		ADDED:	v13.0.6
	
		This attribute is part of an object in the `features`, `traits`, `actions`, or `notes` arrays, see above.
		Use this if an entry in that array is only supposed to be displayed
		once the main character (the character on the 1st page) reaches a certain level.
		If the main character goes below this level, the entry is removed again.
		The level checked against can be different than the main character level if the
		attribute `minlevelLinked` exists, see below.
	
		Setting this attribute to 1 is the same as not including it.
	*/

	/*	eval & removeeval & addMod // OPTIONAL //
		(Part of `features`, `traits`, `actions`, or `notes` object, see above)
		TYPE:	variable, see the entries for `eval`, `removeeval`, or `addMod`
		USE:	variable, see the entries for `eval`, `removeeval`, or `addMod`
		ADDED:	v13.0.6
	
		These attributes are part of an object in the `features`, `traits`, `actions`, or `notes` arrays, see above.
		These optional attributes function identical to those that share their name.
		They function exactly as described for the main object, but they will only be called when the
		`features`, `traits`, `actions`, or `notes` object is processed, which can be influenced
		using the `minlevel` attribute, see above.
	*/

	minlevelLinked: ["machinist"],
	addMod: [
		{ type: "skill", field: "Init", mod: "Int", text: "The purple crawler adds its Intelligence modifier to initiative rolls." },
		{ type: "save", field: "all", mod: "max(oCha|1)", text: "The purple crawler adds its master's Charisma modifier (min 1) to all its saving throws." }
	],
	/*	addMod // OPTIONAL //
		TYPE:	array of objects (variable length)
		USE:	add value to a modifier field
		ADDED:	v13.0.6
	
		This attribute works identical to the `addMod` attribute found in the
		"_common attributes.js" file.
		Please look there for a complete explanation.
	*/
	calcChanges: {
		/*	calcChanges // OPTIONAL //
			TYPE:	object (optional attributes)
			USE:	change how the hit points automation works
					This will only affect hit points on the companion page, not wild shapes
			ADDED:	v13.0.6
		
			The attributes of this object can be `hp` and `setAltHp`.
		
			Note that `calcChanges` also appears in the list of common attributes,
			but only its `hp` attribute is shared with the object here.
		*/
		hp: function (totalHD, HDobj, prefix) {
			if (!classes.known.ranger) return;
			var creaHP = CurrentCompRace[prefix] && CurrentCompRace[prefix].hp ? CurrentCompRace[prefix].hp : 0;
			var creaName = CurrentCompRace[prefix] && CurrentCompRace[prefix].name ? CurrentCompRace[prefix].name : "the creature";
			var rngrLvl = classes.known.ranger.level;
			var rngrCompHp = 4 * rngrLvl;
			HDobj.alt.push(Math.max(creaHP, rngrCompHp));
			HDobj.altStr.push(" = the highest of either\n \u2022 " + creaHp + " from " + creaName + "'s normal maximum HP, or\n \u2022 4 \xD7 " + rngrLvl + " from four times my ranger level (" + rngrCompHp + ")");
		},
		/*	hp // OPTIONAL //
			TYPE:	function
			USE:	change how Hit Points are calculated and what the Hit Points tooltip says
	
			This function works identical to the `calcChanges.hp` function found in the
			"_common attributes.js" file.
			Please look there for a complete explanation.
		*/
		setAltHp: true,
	},

	eval: function (prefix, lvl) {
		var fldName = prefix + "Comp.Use.Speed";
		var newSpeed = "40 ft, fly 60 ft, swim 40 ft";
		if (What("Unit System") === "metric") newSpeed = ConvertToMetric(newSpeed, 0.5);
		Value(fldName, newSpeed);
	},
	/*	eval // OPTIONAL //
		TYPE:	function
		USE:	runs a piece of code when the creature is selected on the Companion page
	
		The function is passed two variables:
		1) The first variable is a string: the prefix of the Companion page this creature was selected on
			You can use this variable to call on fields on that page. The example above uses it to set
			the speed to something else.
		2) The second variable is an array with 2 numbers: the old level and the new level
			e.g. lvl = [0,5] when the creature gets added and the character is 5th level
			The first entry, the old level, is the level that was passed as the second entry the last time
			this function was called.
			The first entry will be zero (0) as this is only called when the creature is added for the first time.
			The second entry, the new level, is the current main character level.
			The new level passed can be different than the main character level if the attribute
			`minlevelLinked` exists, see above.
	
		This can be any JavaScript you want to have run whenever this creature is selected on a Companion page.
		This attribute is processed last, after all other attributes are processed.
	*/

	removeeval: function (prefix, lvl) {
		var fldName = prefix + "Comp.Use.Speed";
		var newSpeed = "30 ft, fly 45 ft, swim 30 ft";
		if (What("Unit System") === "metric") newSpeed = ConvertToMetric(newSpeed, 0.5);
		Value(fldName, newSpeed);
	},
	/*	removeeval // OPTIONAL //
		TYPE:	function
		USE:	runs a piece of code when the creature is removed from the Companion page
	
		The function is passed two variables:
		1) The first variable is a string: the prefix of the Companion page this creature was selected on
			You can use this variable to call on fields on that page. The example above uses it to set
			the speed to something else.
		2) The second variable is an array with 2 numbers: the old level and the new level
			e.g. lvl = [0,5] when the creature gets added and the character is 5th level
			The first entry, the old level, is the level that the creature had before being removed.
			The second entry, the new level, will be zero (0) as this is only called when the creature is being removed.
	
		This can be any JavaScript you want to have run whenever the creature is removed from a Companion page.
		This attribute is processed last, after all other attributes are processed.
	*/

	changeeval: function (prefix, lvl) {
		Value(prefix + "Comp.Use.HD.Die", lvl[1] < 15 ? 8 : 10);
	},
	/*	changeeval // OPTIONAL //
		TYPE:	function
		USE:	runs a piece of code every time the main character's level changes
		ADDED:	v13.0.6
	
		"Main character" refers to the character on the first page.
		A companion doesn't have its own 'level' that is used for the automation.
	
		The function is passed two variables:
		1) The first variable is a string: the prefix of the Companion page this creature was selected on
			You can use this variable to call on fields on that page. The example above uses it to set the
			creature's hit dice size depending on the character's level (d8 or d10, if level 15 or higher).
		2) The second variable is an array with 2 numbers: the old level and the new level
			e.g. lvl = [0,5] when the creature gets added and the character is 5th level
			The first entry, the old level, is the level that was passed as the second entry the last time
			this function was called.
			The first entry will be zero (0) if the creature is added for the first time.
			The second entry, the new level, is the current main character level.
			The new level will be zero (0) if the creature is being removed.
			The new level passed can be different than the main character level if the attribute
			`minlevelLinked` exists, see above.
	
		This can be any JavaScript you want to have run whenever the level changes.
		This attribute is processed last, after all other attributes have been processed.
		It is processed both when the creature is first added to the companion page and
		when the main character's level changes, but not when the creature is removed.
	*/

}