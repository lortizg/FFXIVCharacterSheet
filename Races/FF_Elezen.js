/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script add 1 subrace of the viera race from FFXIV
				This is taken from the GM Binder website (https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv)
	Code by:	lortizg
	Year:		2024
*/

// --- global vars ---
var bulletedLine = "\n \u2022 ";
var tabbedLine = "\n   ";

// --- File particular vars ---
var iFileName = "FF_Elezen.js";
var adultAge = 20;
var livingAge = 75;
var size = 3;
var mainRace = 'elezen';
var mainRaceCap = 'Elezen';

var firstKey = 'wildwood_elezen';
var firstRaceName = 'wildwood',
	firstRaceNameTitle = 'Wildwood',
	firstRaceNameTitlePlural = 'Wildwoods',
	firstSource = 9;

var secondKey = 'duskwight_elezen',
	secondRaceName = 'duskwight',
	secondRaceNameTitle = 'Duskwight',
	secondRaceNameTitlePlural = 'Duskwights',
	secondSource = 9;

var thirdKey = 'ishgardian_elezen',
	thirdRaceName = 'ishgardian',
	thirdRaceNameTitle = 'Ishgardian',
	thirdRaceNameTitlePlural = 'Ishgardians',
	thirdSource = 9;

RequiredSheetVersion(13);

SourceList["FF:El"] = {
	name: "FFXIV x D&D Compendium: " + mainRaceCap,
	abbreviation: "FF:El",
	group: "Final Fantasy",
	url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
	date: "2020/11/25"
};

RaceList[firstKey] = {
	regExpSearch: /^(?=.*wildwood)(?=.*elezen).*$/i,
	name: firstRaceNameTitle,
	sortname: mainRaceCap + ", " + firstRaceNameTitle,
	source: [["FF", firstSource]],
	plural: firstRaceNameTitlePlural,
	size: size,
	speed: {
		walk: { spd: 30, enc: 20 }
	},
	languageProfs: ["Common", 1],
	skills: ["Insight"],
	vision : [["Adv. on Perception with hearing", 0]],
	age: " reach adulthood at age " + adultAge + " and live up to " + livingAge + " years",
	height: " men are from 6.3 to 6.8 (6\"3-6\"8ft) and women from 6 to 6 and half (6\"3-6\"5ft)",
	weight: "",
	heightMetric: " are around 150 and 200 cm tall", //todo
	scores: [0, 1, 0, 2, 0, 0],
	trait: firstRaceNameTitle + "(+1 Dexterity +2 Intelligence)" +
		tabbedLine + "Hawk Sight. The normal range of your ranged weapon is increased by 20ft. This cannot exceed the max range of the weapon." +
		tabbedLine + "Spread of Culture. You gain proficiency with a set of artisan's tools, gaming set or musical instrument of your choice."
};

RaceList[secondKey] = {
	regExpSearch: /^(?=.*duskwight)(?=.*elezen).*$/i,
	name: secondRaceNameTitle,
	sortname: mainRaceCap + ", " + secondRaceNameTitle,
	source: [["FF", secondSource]],
	plural: secondRaceNameTitlePlural,
	size: size,
	speed: {
		walk: { spd: 30, enc: 20 }
	},
	languageProfs: ["Common", 1],
	skillstxt : "Advantage when making Stealth checks in caves or dim and dark lighting conditions",
	vision : [["Darkvision", 60]],
	age: " reach adulthood at age " + adultAge + " and live up to " + livingAge + " years",
	height: " men are from 6.3 to 6.8 (6\"3-6\"8ft) and women from 6 to 6 and half (6\"3-6\"5ft)",
	weight: "",
	heightMetric: " are around 150 and 200 cm tall", //todo
	scores: [0, 0, 1, 2, 0, 0],
	trait: secondRaceNameTitle + "(+1 Constitution +2 Intelligence)" +
		tabbedLine + "Cave Dweller. You gain advantage when making Stealth checks in caves or dim and dark lighting conditions." +
		tabbedLine + "Spread of Culture. You gain proficiency with a set of artisan's tools, gaming set or musical instrument of your choice."
};

RaceList[thirdKey] = {
	regExpSearch: /^(?=.*ishgardian)(?=.*elezen).*$/i,
	name: thirdRaceNameTitle,
	sortname: mainRaceCap + ", " + thirdRaceNameTitle,
	source: [["FF", thirdSource]],
	plural: thirdRaceNameTitlePlural,
	size: size,
	speed: {
		walk: { spd: 30, enc: 20 }
	},
	languageProfs: ["Common", 1],
	skills: ["Religion"],
    weaponProfs:[false, false, ["Shortbow", "Spear"]],
	age: " reach adulthood at age " + adultAge + " and live up to " + livingAge + " years",
	height: " men are from 6.3 to 6.8 (6\"3-6\"8ft) and women from 6 to 6 and half (6\"3-6\"5ft)",
	weight: "",
	heightMetric: " are around 150 and 200 cm tall", //todo
	scores: [1, 0, 0, 2, 0, 0],
	trait: thirdRaceNameTitle + "(+1 Strength +2 Intelligence)"
};
