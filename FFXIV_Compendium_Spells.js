/*	-INFORMATION-

	Subject:	Spell

	Effect:		This script adds the spells registered in 
				5th Edition D&D x Final Fantasy XIV - Classes and Races Compendium
				(https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv)


	Code by:	lortizg (Ypsis on Discord)

	Sheet:		v13.1.0 and newer

*/

var iFileName = "FFXIV_Compendium_Spells.js";
RequiredSheetVersion(13);

SourceList["FFXIV:175"] = {
	name: "5th Edition D&D x Final Fantasy XIV - Classes and Races Compendium [175]",
	abbreviation: "FFXIV:175",
	group: "Final Fantasy",
	url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
	date: "2016/10/24" //todo
};

SpellsList["aero"] = {
	name: "Aero",
	source: ["FFXIV", 175],
	// classes: ["sorcerer", "wizard"], // todo
	level: 0,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Dex",
	description: "1 crea save or 1d8 Thunder dmg; +1d8 at CL 5, 11 and 17",
	descriptionFull: "You conjure a burst of wind around a creature you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 thunder damage. The target gains no benefit from cover for this saving throw." +
		+ "\n   " + "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};

SpellsList["aerora"] = {
	name: "Aerora (Aero II)",
	source: ["FFXIV", 175],
	// classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: "Evoc",
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Dex",
	description: "10-ft rad disperses gas and extinguishes unprotected flames, 50% chance if protected; Any crea save or 3d6+1d8/SL Thunder dmg; save halves",
	descriptionFull: "You manipulate wind aether to create a ragging vacuum at a point you can see within range. The vacuum is a 10ft. radius sphere that disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them. Any creatures in the area must succeed on a Dexterity saving throw or take 3d6 thunder damage or half as much on a successful save." +
		+ "\n   " + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 2nd."
};

SpellsList["aeroga"] = {
	name: "Aeroga (Aero III)",
	source: ["FFXIV", 175],
	// classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: "Evoc",
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Dex",
	description: "All crea in 20-ft rad save or 6d8+1d8/SL thunder dmg and knocked 20ft; save halves and no effect",
	descriptionFull: "You manipulate wind aether to create a savage burst of wind at a point you can see within range. The ravaging windstorm is a 20ft. radius sphere. All creatures in the area must succeed on a Strength saving throw or take 6d8 thunder damage and be knocked 20ft. straight backwards from the center point. On a success all creatures take half the damage and suffer no other effect." +
		+ "\n   " + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 3rd."
};

SpellsList["aeroja"] = {
	name: "Aeroja (Aero IV)",
	source: ["FFXIV", 175],
	// classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: "Evoc",
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Str",
	description: "20-ft rad 40-ft high; All crea in 20-ft rad save or 3d6+2d6/SL thunder dmg + 3d6 slashing dmg; save halves; difficult ter.; bns a to move 60-ft",
	descriptionFull: "You conjure a swirling vortex of wind aether that tears at all creatures inside. The vortex forms in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. When a creature enters the spell's area for the first time on a turn or starts its turn there, they must succeed on a Strength saving throw or take 3d6 thunder damage plus 3d6 slashing damage, and half as much damage on a success. The area is affected by the vortex is considered difficult terrain. " +
		+ "\n   " + "On each of your turns after you cast this spell, you can use a bonus action to move the vortex 60 feet in any direction." +
		+ "\n   " + "When you cast this spell using a spell slot of 6th level or higher, the thunder damage increases by 2d6 for each slot level above 5th."
};

SpellsList["assize"] = {
	name: "Assize",
	source: ["FFXIV", 175],
	// classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: "Evoc",
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Instantaneous",
	save: "Dex",
	description: "Allies in 60ft heal 3d8+1d8/SL; Enemies save or 4d4+1d4/SL Radiant dmg; save halves; can reverse",
	descriptionFull: "An eruption of energy from your body soothes allies and wounds enemies. All allies within 60ft. recover 3d8 hit points and all enemies within 60ft. must make a wisdom saving throw. They take 4d4 radiant damage, and half as much on a successful save. You may reverse which die affect healing and which die deal radiant damage, but must make this distinction before rolling." +
		+ "\n   " + "When you cast this spell using a spell slot of 6th level or higher, increase the number of die for each effect for each slot level above 5th."
};

SpellsList["asylum"] = {
	name: "Asylum",
	source: ["FFXIV", 175],
	// classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: "Evoc",
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "All crea in 30ft rad heal 1d8+1d8/SL at start of their turn; res nonmagical slashing, piercing, buldeodging and necr. dmg",
	descriptionFull: "You create a protective field which provides healing to friendly creatures. You create a globe of holy energy with a radius of 30ft. within range. All allied creatures within the affected area recover 1d8 hit points at the start of their turn. Additionally, allied creatures within the affected creatures gain resistance to nonmagical slashing, piercing, and bludgeoning damage and necrotic damage." +
		+ "\n   " + "When you cast this spell using a spell slot of 6th level or higher, increase the heal by 1d8 for each slot level above 5th."
};