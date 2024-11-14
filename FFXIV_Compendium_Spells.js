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

const schools = {
	ABJURATION: "Abjur",
	CONJURATION: "Conj",
	DIVINATION: "Div",
	ENCHANTMENT: "Ench",
	EVOCATION: "Evoc",
	ILLUSION: "Illus",
	NECROMANCY: "Necro",
	TRANSMUTATION: "Trans"
}

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
	classes: ["sorcerer", "wizard"], // todo
	level: 0,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "1 crea save or 1d8 Thunder dmg; +1d8 at CL 5, 11 and 17",
	descriptionFull: "You conjure a burst of wind around a creature you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 thunder damage. The target gains no benefit from cover for this saving throw." +
		AtHigherLevels + "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};

SpellsList["aerora"] = {
	name: "Aerora (Aero II)",
	source: ["FFXIV", 175],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All crea in 10ft save or 3d6+1d8/SL Thunder dmg; save halves; disperses gas and extinguishes flames",
	descriptionFull: "You manipulate wind aether to create a ragging vacuum at a point you can see within range. The vacuum is a 10ft. radius sphere that disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them. Any creatures in the area must succeed on a Dexterity saving throw or take 3d6 thunder damage or half as much on a successful save." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 2nd."
};

SpellsList["aeroga"] = {
	name: "Aeroga (Aero III)",
	source: ["FFXIV", 175],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All crea in 20-ft rad save or 6d8+1d8/SL thunder dmg and knocked 20ft; save halves and no effect",
	descriptionFull: "You manipulate wind aether to create a savage burst of wind at a point you can see within range. The ravaging windstorm is a 20ft. radius sphere. All creatures in the area must succeed on a Strength saving throw or take 6d8 thunder damage and be knocked 20ft. straight backwards from the center point. On a success all creatures take half the damage and suffer no other effect." +
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 3rd."
};

SpellsList["aeroja"] = {
	name: "Aeroja (Aero IV)",
	source: ["FFXIV", 175],
	classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Str",
	description: "All crea in 20ft 40ft high save or 3d6+2d6/SL thunder dmg+3d6 slashing dmg; save halves; difficult ter.; bns to move 60ft",
	descriptionFull: "You conjure a swirling vortex of wind aether that tears at all creatures inside. The vortex forms in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. When a creature enters the spell's area for the first time on a turn or starts its turn there, they must succeed on a Strength saving throw or take 3d6 thunder damage plus 3d6 slashing damage, and half as much damage on a success. The area is affected by the vortex is considered difficult terrain." +
		"\n   " + "On each of your turns after you cast this spell, you can use a bonus action to move the vortex 60 feet in any direction." +
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the thunder damage increases by 2d6 for each slot level above 5th."
};

SpellsList["assize"] = {
	name: "Assize",
	source: ["FFXIV", 175],
	classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: schools.EVOCATION,
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.wis,
	description: "Allies in 60ft heal 3d8+1d8/SL; Enemies save or 4d4+1d4/SL Radiant dmg; save halves; can reverse",
	descriptionFull: "An eruption of energy from your body soothes allies and wounds enemies. All allies within 60ft. recover 3d8 hit points and all enemies within 60ft. must make a wisdom saving throw. They take 4d4 radiant damage, and half as much on a successful save. You may reverse which die affect healing and which die deal radiant damage, but must make this distinction before rolling." +
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, increase the number of die for each effect for each slot level above 5th."
};

SpellsList["asylum"] = {
	name: "Asylum",
	source: ["FFXIV", 175],
	classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "All crea in 30ft heal 1d8+1d8/SL at start of their turn; res nonmagical slash, pierc, buldeod and necr dmg",
	descriptionFull: "You create a protective field which provides healing to friendly creatures. You create a globe of holy energy with a radius of 30ft. within range. All allied creatures within the affected area recover 1d8 hit points at the start of their turn. Additionally, allied creatures within the affected creatures gain resistance to nonmagical slashing, piercing, and bludgeoning damage and necrotic damage." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, increase the heal by 1d8 for each slot level above 5th."
};

SpellsList["banish"] = {
	name: "Banish",
	source: ["FFXIV", 176],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "1 crea save or 3d8+1d8/SL radiant dmg; save halves",
	descriptionFull: "A flurry of small daggers of light converge on a creature you can see within range. The creature makes a dexterity saving throw, the creature taking 3d8 radiant damage on a failed save and half as much on a successful save." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 2nd."
};

SpellsList["banishra"] = {
	name: "Banishra (Banish II)",
	source: ["FFXIV", 176],
	classes: ["sorcerer", "wizard"], // todo
	level: 2,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All crea in 15ft rad save or 4d8+1d8/SL radiant dmg; save halves",
	descriptionFull: "You select a point you can see in range. The point bursts with spears of light in a 15ft. sphere. All creatures in the affected area make a Dexterity saving throw against your spell save DC. On a failure they take 4d8 radiant damage and half as much on a success." +
		AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 1st."
};

SpellsList["banishga"] = {
	name: "Banishga (Banish III)",
	source: ["FFXIV", 176],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.EVOCATION,
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All enemies in 30ft rad save or 6d6+1d6/SL Radiant dmg; save halves; +8 if fiend or undead, not halves",
	descriptionFull: "You manipulate aether into blades of light which rain down on all hostile creatures in a 30ft. radius centered on yourself. Each creature must succeed on a Dexterity saving throw, taking 6d6 radiant damage on a failure and half as much on a success. If a creature is a Fiend or Undead, they take an additional 8 radiant damage. This damage is not reduced on a successful saving throw." +
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
};

SpellsList["banishja"] = {
	name: "Banishja (Banish IV)",
	source: ["FFXIV", 176],
	classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: AbilityScores.fields.dex,
	description: "1 crea in 40ft save or 8d6+2d6/SL radiant dmg; save halves; +8 if fiend or undead, not halves",
	descriptionFull: "You select any number of creatures in a 40ft. radius sphere around a location you can see within range and drop a spear of searing light on them. Each creature must make a Dexterity saving throw, taking 8d6 radiant damage on a failure and half as much on a success. If a creature is a Fiend or Undead, they take an additional 8 radiant damage. This damage is not reduced on a successful saving throw." +
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 2d6 for each slot level above 5th."
};

SpellsList["bar-element"] = {
	name: "Bar-Element",
	source: ["FFXIV", 176],
	classes: ["sorcerer", "wizard"], // todo
	level: 4,
	school: schools.ABJURATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "1 crea protected against element (see book): dmg reduced spellcasting mod, attacks disadv, saves adv.",
	descriptionFull: "You choose a creature you can see within range veil them with protective magics to protect them from one of the following damage types: bludgeoning, cold, fire, lightning, necrotic, radiant or thunder. When they are targeted with an attack that deals that kind of damage the attack is made with disadvantage, and any saving throws they make against spells that deal that kind of damage is made with advantage. Any damage they take of the chosen damage type is reduced by your spell casting ability modifier." +
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you may protect one additional creature for each slot level above 3rd or choose an additional element for one creature."
};

SpellsList["bar-element-ra"] = {
	name: "Bar-Element-ra",
	source: ["FFXIV", 176],
	classes: ["sorcerer", "wizard"], // todo
	level: 7,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "1 crea and 20ft creas protected against element (see book): dmg reduced SPL attacks disadv, saves adv.",
	descriptionFull: "You choose a creature you can see within range veil them with a protective aura to protect them and creatures around them from one of the following damage types: bludgeoning, cold, fire, lightning, necrotic, radiant or thunder. The creature and allied creature within a 20ft. radius of the creature gain resistance to the selected damage type. When they are targeted with an attack that deals that kind of damage the attack is made with disadvantage, and any saving throws they make against spells that deal that kind of damage is made with advantage. Any damage they take of the chosen damage type is reduced by your spell casting abilitiy modifier." +
		AtHigherLevels + "When you cast this spell using a spell slot of 8th level or higher, you may protect one additional creature for each slot level above 7th or choose an additional element for one creature."
};

SpellsList["bio"] = {
	name: "Bio",
	source: ["FFXIV", 177],
	classes: ["sorcerer", "wizard"], // todo
	level: 0,
	school: schools.NECROMANCY,
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.con,
	description: "1 crea save or 1d4 +1d4/rnd Poison dmg and poisoned 1 min; save each rnd; +1d4 at CL 5, 11 and 17",
	descriptionFull: "You attempt to infect the target creature they can see within range with the effects of a serious illness. The target must succeed on a Constitution saving throw or take 1d4 poison damage and become poisoned for 1 minute. A poisoned creature takes an additional 1d4 poison damage at the start of their turn and repeats the saving throw at the end of their turn, ending the poison effect on a success." +
		AtHigherLevels + "This spell's intial damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
};

SpellsList["biora"] = {
	name: "Biora (Bio II)",
	source: ["FFXIV", 177],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.NECROMANCY,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.con,
	description: "All crea in 10ft save or 4d4+2d4/SL Poison dmg & poison 1 min; save halves & no effect; save each rnd",
	descriptionFull: "You create a cloud of toxic mist in a 10ft. radius sphere at a location you can see within range. Each creature in the affected area must succeed on a Constitution saving throw or take 4d4 poison damage and become poisoned for 1 minute. On a success creatures take half as much much and suffer no other consequences. At the end of a poisoned creatuers turn they reattempt the saving throw, ending the poison on a successful saving throw." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot level above 1st."
};

SpellsList["bioga"] = {
	name: "Bioga (Bio III)",
	source: ["FFXIV", 177],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.NECROMANCY,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: AbilityScores.fields.con,
	description: "All crea in 15ft cube save or 6d4+2d4/SL Poison dmg & poison; creas in 15ft also affected; save halves and no effect; save each rnd",
	descriptionFull: "You create a virulent outbreak in a 15ft. cube at a location you can see wtihin range. Each creature in the affected area must succeed on a Constitution saving throw or take 6d4 poison damage and become poisoned. On a success creatures take half as much much and suffer no other consequences. While you are concentrating on the spell, you may use your action to cause the disease to spread. Any creatures who have not been affected by the spell that are within 15ft. of an affected creature must succeed on the saving throw or they also take the damage and become poisoned as well. At the end of a poisoned creatuers turn they reattempt the saving throw, ending the poison on a successful saving throw." +
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 2d4 for each slot level above 3rd."
};

SpellsList["bioja"] = {
	name: "Bioja (Bio IV)",
	source: ["FFXIV", 177],
	classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: schools.NECROMANCY,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.con,
	description: "All crea in 60ft cone save or 4d8 poison + 4d8 necrotic dmg and poisoned 1 min; save halves and no effect; save each rnd", // todo: missing escalate, ambiguous
	descriptionFull: "A blast of virulent air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 4d8 poison damage and 4d8 necrotic damage and become poisoned for 1 minute on a failed save, or half as much damage on a successful one. At the end of a poisoned creature's turn they reattempt the saving throw, ending the poison on a successful saving throw." +
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the initial damage increases by 2d8 for each slot level above 5th."
};

SpellsList["biolysis"] = {
	name: "Biolysis",
	source: ["FFXIV", 177],
	classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: schools.NECROMANCY,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: AbilityScores.fields.con,
	description: "1 crea I can see save or 6d10+2d10/SL + 1d10 each rnd Necrotic dmg; save halves and no effect; save each rnd",
	descriptionFull: "You attempt to make a creature you can see within range violently ill instantaneously. The creature must succeed on a Constitution saving throw or take 6d10 necrotic damage and become poisoned and on a success creatures take half as much much and suffer no other consequences. At the start of each of the affected creature's turns, they take 1d10 necrotic damage and they must succeed on a Constitution saving throw or spend their action retching in pain. The affected creature reattempts the saving throw at the end of each of their turns, ending the spell effect on a successful saving throw." +
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the initial damage increases by 2d10 for each slot level above 5th."
};

SpellsList["blizzard"] = {
	name: "Blizzard",
	source: ["FFXIV", 177],
	classes: ["sorcerer", "wizard"], // todo
	level: 0,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "1 crea save or 1d8 Cold dmg; spd -5ft; no benefit from cover; +1d8 +5ft at CL 5, 11 and 17",
	descriptionFull: "You conjure a burst of ice aspected aether around the target creature. The target must succeed on a Dexterity saving throw or it takes 1d8 cold damage and its speed is reduced by 5 feet until the start of your next turn. The target gains no benefit from cover for this saving throw." +
		AtHigherLevels + "The spell's damage increases by 1d8 and speed is reduced by an additional 5 feet when you reach 5th Level (2d8, speed reduced by 10 feet), 11th level (3d8 speed reduced by 15 feet), and 17th level (4d8 speed reduced by 20 feet)."
};

SpellsList["blizzara"] = {
	name: "Blizzara (Blizzard II)",
	source: ["FFXIV", 178],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.EVOCATION,
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Conc, 1 min",
	save: AbilityScores.fields.con,
	description: "All crea in 10ft save or 3d6+1d6/SL and restrained; save halves and no effect; str save as action to free",
	descriptionFull: "You release a burst of ice aspected aether around yourself in a 10ft. radius circle. Each creature in range must succeed on a Dexterity saving throw or take 3d6 cold damage and become restrained. On a success creatures take half as much damage and are not restrained. A creature restrained by the ice can use its action to make a Strength check against your spell save DC. On a success, it frees itself." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};

SpellsList["blizzaga"] = {
	name: "Blizzaga (Blizzard III)",
	source: ["FFXIV", 178],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.con,
	description: "All crea in 20ft rad save or 6d6+1d6/SL Cold dmg; save halves; acrobatics check (15) to cross area or fall prone.",
	descriptionFull: "You manipulate ice aether to create a localized blizzard at a point you can see within range. Each creature in a 20-foot-radius sphere centered on that point must make a Constitution saving throw. A target takes 6d6 cold damage on a failed save, or half as much damage on a successful one. The ground within the blizzard becomes coated in slick ice for 1 minute or until melted. A creature traversing the slick ice at more than half speed is required to make a DC 15 Acrobatic check at the start of the movement. Failure causes the creature to fall prone at the start of the movement." +
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
};

SpellsList["blizzaja"] = {
	name: "Blizzaja (Blizzard IV)",
	source: ["FFXIV", 178],
	classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All crea in 20ft rad save or 8d8+1d8/SL Cold dmg; difficult terrain 1 min",
	descriptionFull: "You manipulate ice aether to create a massive shard of ice which falls at a location you can see within range. The shard explodes and each creature within a 30 feet radius sphere of it must succeed on a Dexterity saving throw or take 8d8 cold damage. The ground within the affected area becomes difficult terrain for 1 minute or until melted." +
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
};

SpellsList["bravery"] = {
	name: "Bravery",
	source: ["FFXIV", 178],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.TRANSMUTATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "1+1/SL crea extra wapon dmg of their Proficency and immune to frightened",
	descriptionFull: "You choose a creature you can see within range and fill them with vigor. Weapon attacks they made deal bonus damage equal to their proficiency bonus and is immune to being frightened." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, you may empower one creature for each slot level above 1st."
};

SpellsList["break"] = {
	name: "Break",
	source: ["FFXIV", 178],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.ENCHANTMENT,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.cha,
	description: "1 crea I can see save or 3d4+1d4/SL Force dmg and spd -30ft 1 min; save halves and no effect; save each rnd",
	descriptionFull: "You cast a hex on a creature you can see within range. The creature must succeed on a Charisma saving throw, taking 3d4 force damage on a failure and their speed is reduced by 30ft. for 1 minute. The creature takes half the damage and suffers no additional effects on a success. At the end of the creature's turn, they may reattempt the saving throw, removing the hex on a success." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d4 for each slot level above 1st and you target an additional creature for each spell level above 1st."
};

SpellsList["celestial opposition"] = {
	name: "Celestial Opposition",
	source: ["FFXIV", 178],
	classes: ["sorcerer", "wizard"], // todo
	level: 8,
	school: schools.EVOCATION,
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Conc, 1 min",
	save: AbilityScores.fields.con,
	description: "I am covered in 30ft globe dim light; enemies in area save or 6d8 Force dmg and stunned 1d4 rnds; save halves and no effect",
	descriptionFull: "You release a massive amount of astral energy in a 30ft. radius globe centered on you. The inside of the globe is dimly lit, and filled with softly glowing lights which map the starry sky. On this release, all enemies coming in contact with the sphere are star struck and must make a wisdom saving throw. Enemies take 6d8 force damage and are stunned for 1d4 rounds on a failed saved, and half the damage is taken and they resist becoming stunned on a success."
};

SpellsList["collective unconscious"] = {
	name: "Collective Unconscious",
	source: ["FFXIV", 179],
	classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: schools.EVOCATION,
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "Allies in 10ft heal 3d8; Allies in 30ft AC +1 and at start of turn heal 1d6+1d6/SL",
	descriptionFull: "You create a magical barrier around yourself. The barrier is 30ft. in radius and spherical. All allies within 10ft. of you are healed immediately for 3d8. As long as they remain in the barrier, their AC receives a +1 bonus and each time they start their turn within the barrier they are healed for 1d6 hit points." +
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the heal increases by 1d6 for each slot level above 5th."
};

SpellsList["comet"] = {
	name: "Comet",
	source: ["FFXIV", 179],
	classes: ["sorcerer", "wizard"], // todo
	level: 4,
	school: schools.CONJURATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All crea in 20ft save or 2d12 Force dmg; save halves; additional comet / SL",
	descriptionFull: "You concentrate three large shards of pure aether and direct them to crash down at locations you can see within range. The shards of aether explode in a 20ft. radius explosion. Each creature in an affected area must make a Dexterity saving throw taking 2d12 force damage on a failure, or half as much on a success. A creature who is hit by multiple comets makes this saving throw once, but does take damage from each comet explosion's affected area." +
		AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, an additional comet is created."
};

SpellsList["cure"] = {
	name: "Cure",
	source: ["FFXIV", 179],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "1 crea I can see heals 1d6+1d6/SL+spellcasting ability modifier HP",
	descriptionFull: "A creature you can see in range regains a number of hit points equal to 1d6 + your spellcasting ability modifier. This spell has no effect on undead or constructs." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the Healing increases by 1d6 for each slot level above 1st."
};

SpellsList["cura"] = {
	name: "Cura (Medica)",
	source: ["FFXIV", 179],
	classes: ["sorcerer", "wizard"], // todo
	level: 2,
	school: schools.EVOCATION,
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Instantaneous",
	description: "Allies in 20ft heal 1d6+1d6/SL+spellcasting ability modifier HP; no effect on undead or constructs",
	descriptionFull: "You release a pulse of curative energy in a 20ft. radius sphere around you. Each allied creature in the affected area regains a number of hit points equal to 1d6 + your spellcasting ability modifier. This spell has no effect on undead or constructs." +
		AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the Healing increases by 1d6 for each slot level above 3rd."
};

SpellsList["curada"] = {
	name: "Curada (Cure II)",
	source: ["FFXIV", 179],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "1 crea I can see heals 3d8+spellcasting ability modifier and 1d6+1d6/SL temporary HP; no effect on undead or constructs",
	descriptionFull: "A creature you can see in range regains a number of hit points equal to 3d8 + your spellcasting ability modifier and gains 1d6 temporary hit points. This spell has no effect on undead or constructs." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the temporary hit points increases by 1d6 for each slot level above 1st."
};

SpellsList["curaga"] = {
	name: "Curaga (Cure III)",
	source: ["FFXIV", 179],
	classes: ["sorcerer", "wizard"], // todo
	level: 4,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "1 crea I can see and allies in 20ft of it heals 3d6+1d6/SL+spellcasting ability modifier; no effect on undead or constructs",
	descriptionFull: "A creature you can see in range and each allied creature in a 20ft. radius around it regains a number of hit points equal to 3d6 + your spellcasting ability modifier. This spell has no effect on undead or constructs." +
		AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the healing increases by 2d6 for each slot level above 4th."
};

SpellsList["curaja"] = {
	name: "Curaja (Cure IV)",
	source: ["FFXIV", 179],
	classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "1 crea I can see and allies in 20ft of it heals 3d6+1d6/SL+spellcasting ability modifier at start of their turn; no effect on undead or constructs",
	descriptionFull: "A creature you can see in range and each allied creature in a 20ft. radius around it regains a number of hit points equal to 3d6 + your spellcasting ability modifier. While you maintain concentration on this spell, the creatures healed receive a lingering healing effect, recovering 1d6 hit points at the start of their turn. This spell has no effect on undead or constructs." +
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the initial healing increases by 1d6 for each slot level above 5th."
};

SpellsList["dark"] = {
	name: "Dark",
	source: ["FFXIV", 179],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.EVOCATION,
	time: "1 a",
	range: "90 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Ranged spell attack for 3d8+1d8/SL Necrotic dmg",
	descriptionFull: "You form an orb of necrotic energy in the palm of your hand and fire it at a target within range, making a ranged spell attack. If the attack hits, the creature takes 3d8 necrotic damage." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};

SpellsList["darkra"] = {
	name: "Darkra (Dark II)",
	source: ["FFXIV", 180],
	classes: ["sorcerer", "wizard"], // todo
	level: 2,
	school: schools.EVOCATION,
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All crea in 30ft cone save or 3d8+1d8/SL Necrotic dmg; save halves",
	descriptionFull: "You fill your limb with necrotic energy and swing it out in an arcing motion, causing a wave of energy to burst out towards in a con. All creatures in a 30ft. cone originating on you make a Dexterity saving throw against your spell save DC. On a failure they take 3d8 necrotic damage and half as much on a success." +
		AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 1st."
};

SpellsList["darkga"] = {
	name: "Darkga (Dark III)",
	source: ["FFXIV", 180],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All crea in 20ft save or 8d6+1d6/SL Necrotic dmg; save halves",
	descriptionFull: "You concentrate necrotic energy in the earth beneath a target creature in range you can see. All creatures within a 20ft. radius of the creature must make a Dexterity saving throw against your spell save DC, taking 8d6 necrotic damage on a failure and half as much on a success." +
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
};

SpellsList["darkja"] = {
	name: "Darkja (Dark IV)",
	source: ["FFXIV", 180],
	classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: schools.NECROMANCY,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.cha,
	description: "All crea in 40ft rad save or 8d6+1d6/SL Necrotic dmg; save halves",
	descriptionFull: "You release a flood of necrotic energy in a sphere around you, attempting to overwhelm all creatures in range with negative energy. All creatures within a 40ft. radius of You must make a Charisma saving throw against your spell save DC, taking 8d6 necrotic damage on a failure and half as much on a success." +
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
};

SpellsList["de-element"] = {
	name: "De-element",
	source: ["FFXIV", 180],
	classes: ["sorcerer", "wizard"], // todo
	level: 4,
	school: schools.TRANSMUTATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: AbilityScores.fields.wis,
	description: "1+1/SL crea I can see save or gain vulnerability to buldgeodging, cold, fire, lightning, necrotic, radiant or thunder dmg; if immune, resistant",
	descriptionFull: "You choose a creature you can see within range and and they must make a Wisdom saving throw. On a failure, they gain a damage vulnerability to one of the following damage types: bludgeoning, cold, fire, lightning, necrotic, radiant or thunder. If the creature is immune to the damage type, it instead becomes resistant to the damage type instead." +
		AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you may enfeeble one additional creature for each slot level above 4th."
};

SpellsList["demi ultima"] = {
	name: "Demi Ultima",
	source: ["FFXIV", 180],
	classes: ["sorcerer", "wizard"], // todo
	level: 9,
	school: schools.EVOCATION,
	time: "1 a",
	range: "200 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All crea in 60ft save or 40d6 Force dmg; save halves; if 0HP, disintegrates; items Large or smaller disintegrates; magic items are not affected",
	descriptionFull: "You let loose an incredible burst of aether in a 60ft. radius sphere you can see within range. All creatures in the area must succeed on a Dexterity saving throw or take 40d6 force damage or half as much on a successful save." +
		"\n   " + "If this damage reduces the target to 0 hit points, it is disintegrated.A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust.The creature can be restored to life only by means of a true resurrection or a wish spell.This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force.If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot - cube portion of it.A magic item is unaffected by this spell."
};

SpellsList["doomsday"] = {
	name: "Doomsday",
	source: ["FFXIV", 180],
	classes: ["sorcerer", "wizard"], // todo
	level: 7,
	school: schools.NECROMANCY,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.con,
	description: "All crea in 20ft rad 80ft high save or 6d6 Necrotic + 6d6+2d6/SL Force dmg; 2d4 penalty attack rolls and saves; save halves and no effect",
	descriptionFull: "You conjure a surging storm of negative energy in a 20ft. radius, 80 foot high cylinder. All creatures in the affected area must make a Constitution saving throw, taking 6d6 necrotic damage plus 6d6 force damage and receive a 2d4 penalty on all attack rolls and saving throws they make until the end of their next turn on a failure, and half as much damage and no additional penalties to rolls on a successful one." +
		AtHigherLevels + "When you cast this spell using a spell slot of 8th level or higher, the force damage increases by 2d6 for each slot level above 7th."
};

SpellsList["demi"] = {
	name: "Demi",
	source: ["FFXIV", 181],
	classes: ["sorcerer", "wizard"], // todo
	level: 0,
	school: schools.TRANSMUTATION,
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.str,
	description: "1 crea save or 1d4 Force dmg and fall prone; +1d4 +5ft at CL 5, 11 and 17",
	descriptionFull: "You manipulate the gravity around a creature they can see within range. The target must succeed on a Strength saving throw or take 1d4 force damage and fall prone." +
		AtHigherLevels + "This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
};

SpellsList["demira"] = {
	name: "Demira (Demi II)",
	source: ["FFXIV", 181],
	classes: ["sorcerer", "wizard"], // todo
	level: 2,
	school: schools.TRANSMUTATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.con,
	description: "All crea in 20ft save or 2d6 Force dmg and are launched 20ft+10ft/SL high; take Force dmg (1d10 buldg./10ft)",
	descriptionFull: "You forcefully manipulate the gravity in a 20ft. radius circle at a location you can see within range. All creatures in the affected area must succeed on a Constitution saving throw or take 2d6 force damage and be launched 20ft. straight up into the air and fall back to the ground. On a success, a creature takes half the force damage and is not launched. The creature takes falling damage as normal when they land (this is 1d10 bludgeon per 10ft. fallen)." +
		AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the spell launches creatures 10ft. higher for each slot level above 2nd."
};

SpellsList["doom"] = {
	name: "Doom",
	source: ["FFXIV", 181],
	classes: ["sorcerer", "wizard"], // todo
	level: 8,
	school: schools.NECROMANCY,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.wis,
	description: "1 crea save or 3d6 necrotic dmg at start of turn and disdv on attack rolls and checks",
	descriptionFull: "You place a death curse on a creature you can see within range. The creature must make a Wisdom saving throw or begin to rapidly decay, taking 3d6 necrotic damage at the start of each of their turns and have disadvantage on attack rolls and ability checks. The only way to end the death curse is to outright kill or knock out the caster of the spell unconscious, or be on a different plane of existence to the caster, or use of one of the following spells: Remove Curse, Greater Restoration or Wish."
};

SpellsList["drain"] = {
	name: "Drain",
	source: ["FFXIV", 181],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.NECROMANCY,
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.cha,
	description: "1 crea save or 1d8+1d8/SL necrotic dmg; save halves; I recover half the dmg dealt HP",
	descriptionFull: "Forcefully draw the life force from a creature you can see within range. The target creature makes a Charisma saving throw against your spell save DC, taking 1d8 necrotic damage on a failure and half as much on a success. You recover hit points equal to half the damage dealt." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};

SpellsList["electron"] = {
	name: "Demira (Demi II)",
	source: ["FFXIV", 181],
	classes: ["sorcerer", "wizard"], // todo
	level: 7,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: AbilityScores.fields.dex,
	description: "All crea save in 40ft rad 80ft high save or 6d6 lightning dmg + 6d6+3d6/SL Force dmg; save halves; while in area, 3d6 lightning at start of turn",
	descriptionFull: "You rain a storm of lightning bolts that electrify an 40ft radius, 80 foot high cylinder. All creatures in the affected area must make a Dexterity saving throw, taking 6d6 lightning damage and 6d6 force damage on a failure, or half as much damage on a success. The surfaces in the affected area become electrified for one minute. When a creature begins their turn in the area they take 3d6 lightning damage." +
		AtHigherLevels + "When you cast this spell using a spell slot of 8th level or higher, the force damage increases by 3d6 for each slot level above 7th."
};

SpellsList["en-element"] = {
	name: "En-Element",
	source: ["FFXIV", 181],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.TRANSMUTATION,
	time: "1 a",
	range: "Touch",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "1+1/SL weapon becomes magical and bonus spellcasting mod dmg of element (see book); spellcasting ability for attack and dmg roll (optional)",
	descriptionFull: "You empower a weapon with an damage type of your choosing from the following list: bludgeoning, cold, fire, lightning, necrotic, radiant or thunder. All damage the weapon deals is considered magical. When the weapon hits a creature, it deals bonus damage of the selected damage type equal to your spell casting ability modifier." +
		"\n   " + "Additionally, attacks made with the chosen weapon may use your spell casting ability modifier for its weapon attack and damage rolls." +
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you may empower one additional weapon within 5ft. of the weapon you touch for each slot level above 3rd."
};

SpellsList["esuna"] = {
	name: "Esuna",
	source: ["FFXIV", 182],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.ABJURATION,
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "1 crea cured from blindness, deafened, paralyzed OR poisoned",
	descriptionFull: "You magically cleanse a creature you can see within 30ft. of you. The creature is cured of the following conditions: blindness, deafened, paralyzed and poisoned." +
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you may cleanse an additional creature for each spell level above 3rd."
};

SpellsList["faith"] = {
	name: "Faith",
	source: ["FFXIV", 182],
	classes: ["sorcerer", "wizard"], // todo
	level: 2,
	school: schools.TRANSMUTATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "1+1/SL crea extra dmg on spells of their proficency bonus; adv. on wisdom saves",
	descriptionFull: "You choose a creature you can see within range and reinforce their mental fortitude. Damage from their spells deal bonus damage equal to their proficiency bonus and they have advantage on wisdom saving throws." +
		AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you may empower one creature for each slot level above 2nd."
};

SpellsList["fire"] = {
	name: "Fire",
	source: ["FFXIV", 182],
	classes: ["sorcerer", "wizard"], // todo
	level: 0,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Spell attack for 2d4 Fire dmg; non-worn flamable object ignites; +2d4 at CL 5, 11, 17",
	descriptionFull: "You gather fire aspected aether into an orb and shoots it toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 2d4 fire damage. A flammable object hit by this spell ignites if it isn’t being worn or carried." +
		AtHigherLevels + "The spell's damage increases by 2d4 when you reach 5th Level (4d4), 11th level (6d4), and 17th level (8d4)."
};

SpellsList["fira"] = {
	name: "Fira (Fire II)",
	source: ["FFXIV", 182],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "Spell attack for 1d10 Fire dmg; on 5ft of target, save or 2d6 Fire dmg",
	descriptionFull: "You gather a small globe of unstable fire aether and launch it towards a target creature you can see within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. Hit or miss, the globe then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 2d6 fire damage." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the secondary fire damage increases by 1d6 for each slot level above 1st."
};

SpellsList["firaga"] = {
	name: "Firaga (Fire III)",
	source: ["FFXIV", 182],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: AbilityScores.fields.dex,
	description: "1 crea save or 6d8 Fire dmg and burns, extra 1d6+1d6/SL Fire dmg at end of turn; save halves and no burn; save each rnd",
	descriptionFull: "You ignite the area around a target creature you can see within range. The target creature must succeed on a Dexterity saving throw or take 6d8 fire damage and also burns for the spell’s duration, or take half as much damage and are not burned on a successful one. At the end of each of its turns, the target repeats the saving throw. It takes 1d8 fire damage on a failed save, and the spell ends on a successful one." +
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the burning fire damage increases by 1d6 for each slot level above 3rd."
};

SpellsList["firaja"] = {
	name: "Firaja (Fire IV)",
	source: ["FFXIV", 182],
	classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: AbilityScores.fields.dex,
	description: "All crea in 20ft save or 6d8+1d8/SL Fire dmg;save halves; extra 3d8 Fire dmg at end of turn if inside the area; 2d8 Fire dmg when leaving the area",
	descriptionFull: "You create a spherical cage of fire with a radius of 20ft. that instantly incinerates all those trapped inside at a location you can see within range. All creatures in the affected area must succeed on a Dexterity saving throw or take 6d8 fire damage, or take half as much damage on a successful one. The cage persists after the initial damage, as an action you can make all creatures inside the cage repeat the saving throw, dealing 3d8 fire damage on a failure and half as much on a success. A creature who leaves the cage by walking through the flames takes 2d8 fire damage." +
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the initial fire damage increases by 1d8 for each slot level above 5th."
};

SpellsList["flare"] = {
	name: "Flare",
	source: ["FFXIV", 182],
	classes: ["sorcerer", "wizard"], // todo
	level: 7,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All crea in 40ft save or 6d6 Fire dmg and 6d6+3d6/SL Force dmg; save halves; if 0HP, disintegrates",
	descriptionFull: "You create a massive, fiery explosion at a point you can see within range. All creatures within 40ft. of the location must succeed on a Dexterity saving or take 6d6 fire damage and 6d6 force damage, and take half as much damage on a success. If this damage reduces the target to 0 hit points, it is disintegrated. A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only by means of a true resurrection or a wish spell. This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot-cube portion of it. A magic item is unaffected by this spell." +
		AtHigherLevels + "When you cast this spell using a spell slot of 8th level or higher, the force damage increases by 3d6 for each slot level above 7th."
};

SpellsList["flood"] = {
	name: "Flood",
	source: ["FFXIV", 183],
	classes: ["sorcerer", "wizard"], // todo
	level: 7,
	school: schools.CONJURATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.str,
	description: "All crea in 40ft save or 4d6 Cold dmg + 4d6 Bludgeon dmg + 4d6+3d6/SL Force dmg and knocked 40ft; save halves and knocked 10ft",
	descriptionFull: "You select a point you can see within range and cause an instantaneous flood to burst through a 40ft. radius sphere around the point. Each creature in the affected area must make a Strength saving throw, taking 4d6 cold, 4d6 bludgeoning and 4d6 force damage and are knocked back 40ft. from the point of the flood, or half as much damage and are knocked back 10ft. on a successful one." +
		AtHigherLevels + "When you cast this spell using a spell slot of 8th level or higher, the force damage increases by 3d6 for each slot level above 7th."
};


SpellsList["freeze"] = {
	name: "Freeze",
	source: ["FFXIV", 183],
	classes: ["sorcerer", "wizard"], // todo
	level: 7,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.con,
	description: "All crea in 40ft save or 6d6 Cold dmg + 6d6+2d6/SL Force dmg and restrained until end of their next turn; save halves and no effect; action to save again; area affected 1 min Acrobatics check (15) or fall prone",
	descriptionFull: "You manipulate ice aether to cause a flash freezing storm at a location you can see in a 40ft. radius sphere. All creatures in the area must make a Constitution saving throw, taking 6d6 cold damage and 6d6 force damage and become restrained until the end of their next turn on a failure or take half as much damage and not be restrained on a successful one. A creature may use their action to make a strength saving throw, losing the restrained condition on a success." +
		"\n   " + "All surfaces in the affected area becomes coated in slick ice for 1 minute or until melted. A creature traversing the slick ice at more than half speed is required to make a DC 15 Acrobatic check at the start of the movement. Failure causes the creature to fall prone at the start of the movement." +
		AtHigherLevels + "When you cast this spell using a spell slot of 8th level or higher, the force damage increases by 2d6 for each slot level above 7th."
};


SpellsList["foul"] = {
	name: "Foul",
	source: ["FFXIV", 183],
	classes: ["sorcerer", "wizard"], // todo
	level: 8,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.cha,
	description: "All crea in 40ft save or 4d10 necrotic dmg + 4d10+3d10/SL Force dmg; save halves",
	descriptionFull: "You tear a small hole in reality allowing the powers of the void to ravage a 40ft. radius sphere at a point you can see within range. All creatures within 40ft. of the location must succeed on a Charisma saving or take 4d10 necrotic damage and 4d10 force damage, and take half as much damage on a success." +
		AtHigherLevels + "When you cast this spell using a spell slot of 9th level, the damage increases by 3d10 for each slot level above 8th."
};

SpellsList["gravity"] = {
	name: "Gravity",
	source: ["FFXIV", 183],
	classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: schools.EVOCATION,
	time: "1 a",
	range: "150 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All crea in 20ft save or 10d6+1d6/SL Force dmg; save halves",
	descriptionFull: "You conjure the energies of the stars through your arcane focus to temporarily create a small, dense celestial body at a point in space within range. A spherical gravitational field appears around the body with 20ft. radius and produces a pulsing sound. Each creature within the field must make a Dexterity saving throw. A target takes 10d6 force damage on a failed save, and half as much on a successful one." +
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d6 for each slot level above 5th."
};

SpellsList["holy"] = {
	name: "Holy",
	source: ["FFXIV", 183],
	classes: ["sorcerer", "wizard"], // todo
	level: 7,
	school: schools.EVOCATION,
	time: "1 a",
	range: "Self",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.con,
	description: "All crea in 40ft save or 5d8 radiant dmg + 5d8+2d8/SL Force dmg and stunned untl start of my next turn; save halves and no effect",
	descriptionFull: "You let loose an orb of radiant energy which floats above you for a moment before exploding with great force. You and creatures you designate as allies are immune to this effect. All creatures within a 40ft. radius sphere must make a Constitution saving throw. Creatures take 5d8 radiant damage and 5d8 force damage and are stunned until the start of your next turn on a failed save, and take half as much and resist the stun effect on a successful save." +
		AtHigherLevels + "When you cast this spell using a spell slot of 8th level or higher, the force damage increases by 2d8 for each slot level above 7th."
};

SpellsList["imperil"] = {
	name: "Imperil",
	source: ["FFXIV", 183],
	classes: ["sorcerer", "wizard"], // todo
	level: 7,
	school: schools.TRANSMUTATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: AbilityScores.fields.wis,
	description: "1 crea save or vulnerability to bludgeoning, cold, fire, lightning, necrotic, radiant or thunder; if immune, normal dmg",
	descriptionFull: "You choose a creature you can see within range and and they must make a Wisdom saving throw. On a failure, they gain a damage vulnerability to the following damage types: bludgeoning, cold, fire, lightning, necrotic, radiant or thunder. If the creature is immune to the damage type, it takes normal damage from the damage type instead."
};

SpellsList["jolt"] = {
	name: "Jolt",
	source: ["FFXIV", 184],
	description: "Spell attack; 1d8 force damage. +1 shard CL 5, 11, 17",
	descriptionFull: "A shard of crystallized aether streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 force damage." +
		"\n   " + "The spell creates more than one shard when you reach higher levels: two shards at 5th level, three shards at 11th level, and four shards at 17th level. You can direct the shards at the same target or at different ones. Make a separate attack roll for each shard.",
	classes: ["sorcerer", "wizard"], //todo
	level: 0,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	rangeMetric: "18m",
	components: "V,S",
	duration: "Instantaneous"
};

SpellsList["lustrate"] = {
	name: "Lustrate",
	source: ["FFXIV", 184],
	classes: ["sorcerer", "wizard"], // todo
	level: 4,
	school: schools.EVOCATION,
	time: "1 a/rea",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.cha,
	description: "1 crea recover 5d8+1d8/SL HP",
	descriptionFull: "You may cast this spell as an action or as a reaction when a creature takes damage. This spell cannot be used in tandem with Adloqiuem (Nymian Scholar feature). A target you can see within range is invigorated by a burst of soothing magic. They recover hit points equal to 5d8." +
		AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the hit points recovered increases by 1d8 for each slot level above 4th."
};

SpellsList["malefic"] = {
	name: "Malefic",
	source: ["FFXIV", 184],
	classes: ["sorcerer", "wizard"], // todo
	level: 0,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Spell attack for 1d8 Force dmg; +1d8 at CL 5, 11, 17",
	descriptionFull: "You gather astral energy and launches it toward a creature they can see within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 force damage." +
		AtHigherLevels + "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};

SpellsList["meteor"] = {
	name: "Meteor",
	source: ["FFXIV", 184],
	classes: ["sorcerer", "wizard"], // todo
	level: 8,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All crea in 50ft save or 10d8+3d6/SL Force dmg; save halves",
	descriptionFull: "You create a massive shard of crystalized aether and drop it at a location you can see within range. The shard explodes in a 50ft. radius sphere. Each creature in the affected area must make a Dexterity saving throw, taking 10d8 force damage on a failure, and half as much on a success." +
		AtHigherLevels + "When you cast this spell using a spell slot of 9th level or higher, the force damage increases by 3d6 for each slot level above 8th."
};

SpellsList["osmose"] = {
	name: "Osmose",
	source: ["FFXIV", 184],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.NECROMANCY,
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.cha,
	description: "1 crea save or lose 1 spell slot of level 1+1/SL(util 5th) and I don't spend spell slot",
	descriptionFull: "You attempt to drain the magic energy from a creature you can see within 30ft. of you to maintain your own magical strength. The creature makes a Charisma saving throw, on a failure they lose a spell slot of first level and you do not expend the spell slot." +
		AtHigherLevels + "When you cast this spell using a spell slot of 1st level or higher, the creature loses a spell slot of equal level on a failed saving throw. The spell slot recovery effect does not work on spell levels higher than 5th level."
};

SpellsList["quake"] = {
	name: "Quake",
	source: ["FFXIV", 184],
	classes: ["sorcerer", "wizard"], // todo
	level: 7,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All crea in 40ft save or 6d8 bludgeon. dmg + 6d8+2d8/SL Force dmg and knocked prone; save halves and no effect; difficult terrain",
	descriptionFull: "You cause an burst of raw energy from the early that pulverizes the a 40ft. radius circle on the ground. All creatures in the affected area must makes a Dexterity saving throw or take 6d8 bludgeoning damage and 6d8 force damage and are knocked prone, or take half as much damage and are not knocked prone on a successful one. The affected area becomes difficult terrain." +
		AtHigherLevels + "When you cast this spell using a spell slot of 8th level or higher, the force damage increases by 2d8 for each slot level above 7th."
};

SpellsList["refresh"] = {
	name: "Refresh",
	source: ["FFXIV", 184],
	classes: ["sorcerer", "wizard"], // todo
	level: 2,
	school: schools.TRANSMUTATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "1 crea regains lvl1+1/SL spell slot",
	descriptionFull: "Through magical means you share your pool of aetheric power with another creature. A creature you can see within range has one of their expended 1st level slots recovered." +
		AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the target creature recovers a spell slot one level lower than the one used to cast Refresh."
};

SpellsList["regen"] = {
	name: "Regen",
	source: ["FFXIV", 184],
	classes: ["sorcerer", "wizard"], // todo
	level: 4,
	school: schools.ENCHANTMENT,
	time: "1 a",
	range: "30 ft",
	components: "V,S",
	duration: "1 min",
	save: AbilityScores.fields.cha,
	description: "1 crea regains 1d6+1d6/SL HP at start of turn",
	descriptionFull: "The target's body is enchanted with a blessing which repairs damage to their body over time. For the duration, the creature regains 1d6 hit points at the start of its turn." +
		AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the hit points recovered increases by 1d6 for each slot level above 4th."
};

SpellsList["ruin"] = {
	name: "Ruin",
	source: ["FFXIV", 185],
	classes: ["sorcerer", "wizard"], // todo
	level: 0,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Spell attack to make 1d10 Force dmg; +1d10 CL 5, 11, 17",
	descriptionFull: "You gather unaspected aether and throws it toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d10 force damage." +
		AtHigherLevels + "The spell's damage increases by 1d10 when you reach 5th Level (2d10), 11th level (3d10), and 17th level (4d10)."
};

SpellsList["ruinra"] = {
	name: "Ruinra (Ruin II)",
	source: ["FFXIV", 185],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Spell attack to make 1d10+1d8/SL Force dmg",
	descriptionFull: "You cause a burst of unaspected aether to ravage a 10ft. radius sphere at a location you can see within range. Make a ranged spell attack against the target. On a hit, it takes 1d10 force damage." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage dealt increases by 1d8 for each slot level above 1st."
};

SpellsList["ruinga"] = {
	name: "Ruinga (Ruin III)",
	source: ["FFXIV", 185],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Spell attack to make 2d8 Force dmg; 4+1/SL bolts",
	descriptionFull: "You conjure 4 shining bolts of pure energy. You make a ranged spell attack against a target in range for each bolt. On a hit, a takes 2d8 force damage." +
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you create one additional bolt for each slot level above 3rd."
};

SpellsList["ruinja"] = {
	name: "Ruinja (Ruin IV)",
	source: ["FFXIV", 185],
	classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "All crea in 20ft save or 6d8+1d8/SL Force dmg; save halves; action to move area",
	descriptionFull: "You release a barrage of raining bolts of energy in a 20ft. radius circle at a location within range. All creatures within the affected area succeed on a Dexterity saving throw or take 6d8 force damage, taking half as much on a success. While maintaining your concentration, as an action you may continue to rain this barrage down on the area, all creatures repeating the Dexterity saving throw." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage dealt increases by 1d8 for each slot level above 1st."
};

SpellsList["protection"] = {
	name: "Protection",
	source: ["FFXIV", 185],
	classes: ["sorcerer", "wizard"], // todo
	level: 4,
	school: schools.ABJURATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "Dmg of bludgeoning, piercing, slashing is reduced by spellcasting ab modifier for 1+1/SL creature",
	descriptionFull: "You choose a creature you can see within range and cover their body in a protective barrier. Damage from bludgeoning, piercing and slashing sources is reduced by your spell casting ability modifier." +
		AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you may protect one creature for each slot level above 4th."
};

SpellsList["sacred soil"] = {
	name: "Sacred Soil",
	source: ["FFXIV", 185],
	classes: ["sorcerer", "wizard"], // todo
	level: 4,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "Allies in 10ft area reduces 1d6+1d6/SL dmg",
	descriptionFull: "You create a 10ft. radius dome of protective magic to shield your allies from harm centered on a location within range. When an ally within the dome takes damage, the damage is reduced by 1d6." +
		AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the damage reduction increases by 1d6 for each slot level above 4th."
};

SpellsList["scathe"] = {
	name: "Scathe",
	source: ["FFXIV", 185],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.EVOCATION,
	time: "1 ba",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "1 crea save or 4d6+1d6/SL Force dmg; save halves",
	descriptionFull: "You cause an aethertic disruption at the location of a creature it can see within range. The creature makes a Dexterity Saving throw, taking 4d6 force damage on a failure and half as much on a success." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage dealt increases by 1d6 for each slot level above 1st."
};

SpellsList["shell"] = {
	name: "Shell",
	source: ["FFXIV", 185],
	classes: ["sorcerer", "wizard"], // todo
	level: 4,
	school: schools.ABJURATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "1+1/SL crea has all dmg (except bludgeoning, piercing, slashing) reduced by my spellcasting ability modifier",
	descriptionFull: "You choose a creature you can see within range and cover their body in a protective shell. Damage from all damage types except bludgeoning, piercing and slashing sources is reduced by your spell casting ability modifier." +
		AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you may protect one creature for each slot level above 4th."
};

SpellsList["stone"] = {
	name: "Stone",
	source: ["FFXIV", 186],
	classes: ["sorcerer", "wizard"], // todo
	level: 0,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Spell attack; 1d8 buldeoding dmg; spd -10ft until my next turn; +1d8 Cl 5, 11, 17",
	descriptionFull: "You conjure a cluster of aetheric stones and fires them toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 bludgeoning damage, and its speed is reduced by 10 feet until the start of your next turn." +
		AtHigherLevels + "The spell's damage increases by 1d8 when you reach 5th Level (2d8), 11th level (3d8), and 17th level (4d8)."
};

SpellsList["stonra"] = {
	name: "Stonra (Stone II)",
	source: ["FFXIV", 186],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.TRANSMUTATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All crea in 5ft save or 3d8+1d8/SL bludgeoning dmg and knocked prone; save halves and no effect",
	descriptionFull: "You manipulate earth aspected aether in the land at a location within range causing a cluster of stalagmites to burst upwards at the location. All creatures in a 5ft. radius circle must succeed on a Dexterity saving throw or take 3d8 bludgeoning damage and are knocked prone. On a success, an affected creature takes half the damage and is not knocked prone." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage dealt increases by 1d8 for each slot level above 1st."
};

SpellsList["stonga"] = {
	name: "Stonga (Stone III)",
	source: ["FFXIV", 186],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "1 crea in line with the path saves or 2d6 bludgeoning dmg; save halves; 4+1/SL spears",
	descriptionFull: "You manipulate earth aspected aether to create 4 spears of stone anywhere you can see within range. The 4 spears travel in a straight line converging on a point within range. Any creature between the a stone spear and the convergence point must succeed on a Dexterity saving throw or take 2d6 Bludgeoning damage, taking half as much on a success." +
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you create one additional stone spear for each slot level above 3rd."
};

SpellsList["stonja"] = {
	name: "Stonra (Stone IV)",
	source: ["FFXIV", 186],
	classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: AbilityScores.fields.con,
	description: "20ft terrain rises 20ft high slowly or quickly; if quickly save or 6d6+2d6/SL bludgeoning dmg and knocked prone; save halves and no effect",
	descriptionFull: "You manipulate earth aspected aether cause the land in a 20ft. square to raise 20ft. into the air. You can select the speed of the ascension to change the effect of the spell. If you choose to raise the area slowly, creatures in the area are harmlessly raised to the platform's height. If you choose to raise the area quickly, all creatures in the affected area must succeed on a Constitution saving throw or take 6d6 bludgeoning damage and be knocked prone, or take half as much damage and suffer no other effects on a success. You may maintain concentration to keep the platform raised, or return the ground to its original state afterwards." +
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the quick ascension deals an additional 2d6 bludegoning damage for each slot level above 5th."
};

SpellsList["tetragammaton"] = {
	name: "Tetragammaton",
	source: ["FFXIV", 186],
	classes: ["sorcerer", "wizard"], // todo
	level: 4,
	school: schools.EVOCATION,
	time: "1 a/rea",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "1 crea heals 5d8+1d8/SL HP",
	descriptionFull: "You may cast this spell as an action or a reaction when a creature takes damage. A creature within range you can see is healed for 5d8 hit points instantaneously." +
		AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the hit points recovered increases by 1d8 for each slot level above 4th."
};

SpellsList["thunder"] = {
	name: "Thunder ",
	source: ["FFXIV", 186],
	classes: ["sorcerer", "wizard"], // todo
	level: 0,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Spell attack; 2d6 lightning dmg; +1d6 CL 5, 11, 17",
	descriptionFull: "You conjures a mote of lightning aether and shoots it toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 2d6 lightning damage." +
		AtHigherLevels + "The spell's damage increases by 1d6 when you reach 5th Level (3d6), 11th level (4d6), and 17th level (5d6)."
};

SpellsList["thundara"] = {
	name: "Thundara (Thunder II)",
	source: ["FFXIV", 186],
	classes: ["sorcerer", "wizard"], // todo
	level: 2,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "Target and up to 3+1/SL creas within 30ft save or 2d8 lightning dmg; save halves",
	descriptionFull: "You launch of bolt of lightning aspected aether at a target of your choice you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts. A target must make a Dexterity saving throw. The target takes 2d8 lightning damage on a failed save, or half as much damage on a successful one." +
		AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, one additional bolt leaps from the first target to another target for each slot level above 2nd."
};

SpellsList["thundaga"] = {
	name: "Thundaga (Thunder III)",
	source: ["FFXIV", 187],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "Spell attack; 4d8 lightning dmg; all crea in 10ft save or 3d8+1d8/SL lightning dmg",
	descriptionFull: "You launch an unstable sphere of lightning aspected aether at a target of your choice you can see within range. Make a ranged spell attack. On a hit, the sphere deals 4d8 lightning damage. The sphere then explodes in a 10ft. radius sphere. All creatures in range must succeed on a Dexterity saving throw or take 3d8 lightning damage, and half as much on a success." +
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage dealt by the explosion increases by 1d8 for each slot level above 3rd."
};

SpellsList["thundaja"] = {
	name: "Thundaja (Thunder IV)",
	source: ["FFXIV", 187],
	classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All enemies within 20ft of the orb save or 20 lightning dmg; save halves; orbs destroys at 80+20/SL dealt dmg",
	descriptionFull: "You manipulate lightning aether to create a mass orb of electrical energy at a location you can see within range that hovers in place for the duration. Any creature hostile to you that moves to a space within 20 feet of the orb for the first time on a turn must succeed on a Dexterity saving throw. The creature takes 20 lightning damage on a failed save and half as much on a successful one. The orb vanishes when it has dealt a total of 80 damage." +
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the maximum total damage of the orb increases by 20 for each slot level above 5th."
};

SpellsList["tornado"] = {
	name: "Tornado",
	source: ["FFXIV", 187],
	classes: ["sorcerer", "wizard"], // todo
	level: 7,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.con,
	description: "All crea in 40ft rad 80ft high save or 5d6 thunder dmg + 5d6+3d6/SL Force dmg and stunned until end of their next turn; save halves and no effect",
	descriptionFull: "You unleash a powerful gale at a location within range that you can see in a 40ft. radius, 80 feet tall cylinder. Each creature in the affected area must make a Constitution saving throw, taking 5d6 thunder damage and 5d6 force damage and become stunned until the end of their next turn on a failure, or half as much damage and not be stunned on a success." +
		AtHigherLevels + "When you cast this spell using a spell slot of 8th level or higher, the force damage increases by 3d6 for each slot level above 7th."
};

SpellsList["veraero"] = {
	name: "Veraero",
	source: ["FFXIV", 187],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.EVOCATION,
	time: "1 ba",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "1 crea save or 2d8+1d8/SL thunder dmg + 2d6 Force dmg if already damaged",
	descriptionFull: "You fill your spell casting focus with wind aspected aether and cause the area around a creature you can see within range to burst. The creature must succeed on a Dexterity saving throw or take 2d8 thunder damage. If the target creature has already taken damage during your turn, it take an additional 2d6 force damage." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};

SpellsList["veraeroga"] = {
	name: "Veraeroga (Veraero II)",
	source: ["FFXIV", 187],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.str,
	description: "All crea in 20ft save or 6d8+1d8/SL thunder and knocked 20ft backwards; save halves and no effect",
	descriptionFull: "You manipulate wind aether to create a savage burst of wind at a point you can see within range. The ravaging windstorm is a 20ft. radius sphere. All creatures in the area must succeed on a Strength saving throw or take 6d8 thunder damage and be knocked 20ft. straight backwards from the center point. On a success all creatures take half the damage and suffer no other effect." +
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 3rd."
};

SpellsList["verfire"] = {
	name: "Verfire",
	source: ["FFXIV", 187],
	classes: ["sorcerer", "wizard"], // todo
	level: 2,
	school: schools.EVOCATION,
	time: "1 ba",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Spell attack; 3d8+1d8/SL Fire dmg + 2d6 Force dmg if already damaged",
	descriptionFull: "You fill your spell casting focus with fire aspected aether and let loose a streaking bolt of fire at a creature you can see within range. Make a ranged spell attack against the target. On a hit, the target takes 3d8 fire damage. If the target creature has already taken damage during your turn, it take an additional 2d6 force damage." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};

SpellsList["verflare"] = {
	name: "Verflare",
	source: ["FFXIV", 188],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.EVOCATION,
	time: "1 ba",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All crea in 10ft save or 6d8+1d8/SL Fire dmg + 2d8 Force dmg if already damaged",
	descriptionFull: "You recklessly manipulate aether and cause a localized explosion of fire aether in a 10ft. radius sphere at a location you can see within range. All creatures within the area must succeed on a Dexterity saving throw or take 6d8 fire damage. If any of the creatures have already taken damage this turn, it take an additional 2d8 force damage." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};

SpellsList["verholy"] = {
	name: "Verholy",
	source: ["FFXIV", 188],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.EVOCATION,
	time: "1 ba",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All crea in 10ft rad 30ft high save or 6d8+1d8/SL radiant dmg + 2d8 Force dmg if already damaged",
	descriptionFull: "You hastily manipulate light aspected aether to cause an eruption of light beneath an enemy within range. All creatures in a cylinder with a radius of 10ft. and 30ft. high must succeed on a Dexterity saving throw or take 6d8 radiant damage. If any of the creatures have already taken damage this turn, they take an additional 2d8 force damage." +
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
};

SpellsList["verstone"] = {
	name: "Verstone",
	source: ["FFXIV", 188],
	classes: ["sorcerer", "wizard"], // todo
	level: 2,
	school: schools.EVOCATION,
	time: "1 ba",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All creature in a straight line save or 1d10 bludgeoning dmg; 2+1/Sl spears; if all for 1 crea, 1 save and save halves",
	descriptionFull: "You create two stone spears at two unoccupied locations within range. The spears then travel in a straight line toward a point within range. All creatures in the path of a stone spear must succeed on a Dexterity saving throw or take 1d10 bludgeoning damage." +
		"\n   " + "If a creature is at the destination of the stone spears, they attempt one Dexterity saving throw for all of the stone spears but take damage from all stone spears you created. They take half the damage on a successful saving throw." +
		AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you create an additional spear for each slot level above 1st."
};

SpellsList["verthunder"] = {
	name: "Verthunder",
	source: ["FFXIV", 188],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.EVOCATION,
	time: "1 ba",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "All crea in 5ft rad 30ft high save or 3d6+1d8/SL lightning dmg; save halves; extra 2d6 Force dmg if already damaged",
	descriptionFull: "You hastily rain lightning aether down in a cylinder with a height of 30ft. and 5ft. radius you can see within range. All creatures in the affected area must succeed on a Dexterity saving throw or take 3d6 lightning damage, taking half as much on a succeed. If a creature has already taken damage on your turn, they take an additional 2d6 force damage." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};

SpellsList["verthundaga"] = {
	name: "Verthundaga (Verthunder II)",
	source: ["FFXIV", 188],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "Spell attack; 4d8+1d8/SL lightning dmg; 10ft save or 3d8 lightning dmg; save halves",
	descriptionFull: "You launch an unstable sphere of lightning aspected aether at a target of your choice you can see within range. Make a ranged spell attack. On a hit, the sphere deals 4d8 lightning damage. The sphere then explodes in a 10ft. radius sphere. All creatures in range must succeed on a Dexterity saving throw or take 3d8 lightning damage, and half as much on a success." +
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage dealt by the explosion increases by 1d8 for each slot level above 3rd."
};

SpellsList["water"] = {
	name: "Water",
	source: ["FFXIV", 188],
	classes: ["sorcerer", "wizard"], // todo
	level: 0,
	school: schools.EVOCATION,
	time: "1 a",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.dex,
	description: "max 2 crea at 5ft save or 1d6 bludgeoning dmg; +1d6 CL 5, 11, 17",
	descriptionFull: "You conjure a globe of water and throws it towards a creature you can see within range. Choose one or two creatures you can see within range. If you choose two, they must be within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 bludgeoning damage." +
		AtHigherLevels + "This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};

SpellsList["watera"] = {
	name: "Watera (Water II)",
	source: ["FFXIV", 189],
	classes: ["sorcerer", "wizard"], // todo
	level: 1,
	school: schools.EVOCATION,
	time: "1 ba",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.str,
	description: "1 crea or object under 200pounds save or 3d6+1d8/SL bludgeoning dmg and fall prone or pushed 30ft",
	descriptionFull: "You release a focused burst of water at a creature you can see within range. The target must succeed on a Strength saving throw or take 3d6 bludgeoning damage and fall prone or be pushed back 30ft (your choice). Instead of a creature, you can target an object that isn't being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 30 feet away from you." +
		AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};

SpellsList["watega"] = {
	name: "Waterga (Water III)",
	source: ["FFXIV", 189],
	classes: ["sorcerer", "wizard"], // todo
	level: 3,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: AbilityScores.fields.dex,
	description: "1 crea save or 3d10+1d10/SL Cold dmg and imprisoned; save halves and no effect; action to save (strength)",
	descriptionFull: "You create an aquatic prison around a large or smaller creature you can see within range. The target creature must succeed on a Dexterity saving throw or take 3d10 cold damage and be engulfed in a bubble which acts as a prison of water, taking half damage and suffering no other effects on a success. The engulfed creature can't breathe, is restrained, and takes 3d10 cold damage at the start of each of their turns." +
		"\n   " + "An engulfed creature can try to escape by taking an action to attempt a Strength saving throw against your Spell save DC. On a success, the creature manages to pop the bubble, freeing itself." +
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the initial damage increases by 1d10 for each slot level above 3rd."
};

SpellsList["waterja"] = {
	name: "Waterja (Water IV)",
	source: ["FFXIV", 189],
	classes: ["sorcerer", "wizard"], // todo
	level: 5,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.str,
	description: "All crea in 20ft rad 40ft high save or 6d8+1d8/SL bludgeon dmg and pushed 20ft; save halves and no effect",
	descriptionFull: "You conjure a powerful geyser at a location you can see within range. The area is a 20ft. radius cylinder which stands 40ft. high. All creatures in the affected area must succeed on a Strength saving throw or take 6d8 bludgeoning damage and be thrown 20ft. straight back, from the closest edge of the geyser, and take half as much damage and suffer no other effects on a success." +
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
};

SpellsList["xenoglossy"] = {
	name: "Xenoglossy",
	source: ["FFXIV", 189],
	classes: ["sorcerer", "wizard"], // todo
	level: 9,
	school: schools.EVOCATION,
	time: "1 a",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: AbilityScores.fields.cha,
	description: "1 crea save or 30d10 Force dmg; save halves; if 0HP, soul destroyed",
	descriptionFull: "You use forbidden magicks to ravage the a creature's body and soul you can see within range. The creature must succeed on a Charisma saving throw or take 30d10 force damage or half as much on a successful save." +
		"\n   " + "If this damage reduces the target to 0 hit points, the creature dies and its soul is destroyed and cannot be restored by any means except by a Wish spell."
};
