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
var iFileName = "FF_Hyur.js";
var adultAge = 20;
var livingAge = 75;
var midlanderRaceName = "midlander_hyur";
var midlanderRaceNameTitle = "Midlander";
var midlanderRaceNameTitlePlural = "Midlanders";

var highlanderRaceName = "highlander_hyur";
var highlanderRaceNameTitle = "Highlander";
var highlanderRaceNameTitlePlural = "Highlander";

var padjalRaceName = "padjal_hyur";
var padjalRaceNameTitle = "Padjal";
var padjalRaceNameTitlePlural = "Padjal";

RequiredSheetVersion(13);

SourceList["FF:Hy"] = {
	name: "FFXIV x D&D Compendium: " + 'Hyur',
	abbreviation: "FF:Hy",
	group: "Final Fantasy",
	url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
	date: "2020/11/25"
};

RaceList[midlanderRaceName] = {
	regExpSearch: /^(?=.*midlander)(?=.*hyur).*$/i,
	name: midlanderRaceNameTitle,
	sortname: "Hyur, Midlander",
	source: [["FF", 14]],
	plural: midlanderRaceNameTitlePlural,
	size: 3,
	speed: {
		walk: { spd: 30, enc: 20 }
	},
	languageProfs: ["Common", 2],
	skillstxt: "Choose any two skills",
	age: " reach adulthood at age " + adultAge + " and live up to " + livingAge + " years",
	height: " are from 5 to 6 and half feet tall (5\"-6\"5ft)",
	weight: "",
	heightMetric: " are around 150 and 200 cm tall",
	scorestxt : "+2 Intelligence, +1 Any score",
	scores: [0, 0, 0, 2, 0, 0],
	toolProfs: [["Artisan's tools or Gaming Set or Musical Instrument"], ["Artisan's tools"]],
	trait: midlanderRaceNameTitle + "(+1 My Choice +2 Intelligence)" +
		tabbedLine + "Ability Score Increase. An ability score of your choice increases by 1." +
		tabbedLine + "Spread of Culture. You gain proficiency with a set of artisan's tools, gaming set or musical instrument of your choice."
};

RaceList[highlanderRaceName] = {
	regExpSearch: /^(?=.*highlander)(?=.*hyur).*$/i,
	name: highlanderRaceNameTitle,
	sortname: "Hyur, Highlander",
	source: [["FF", 14]],
	plural: highlanderRaceNameTitlePlural,
	size: 3,
	speed: {
		walk: { spd: 30, enc: 20 }
	},
	languageProfs: ["Common", 2],
	skills: ["Athletics"],
	skillstxt: "Athletics, Choose any two skills",
	age: " reach adulthood at age " + adultAge + " and live up to " + livingAge + " years",
	height: " are from 5 to 6 and half feet tall (5\"-6\"5ft)",
	weight: "",
	heightMetric: " are around 150 and 200 cm tall",
	scorestxt : "+2 Strength, +1 Any score",
	scores: [2, 0, 0, 0, 0, 0],
	toolProfs: [["Artisan's tools or Gaming Set or Musical Instrument"]],
	trait: midlanderRaceNameTitle + "(+1 My Choice +2 Strength)"
};

RaceList[padjalRaceName] = {
	regExpSearch: /^(?=.*padjal)(?=.*hyur).*$/i,
	name: padjalRaceNameTitle,
	sortname: "Hyur, Padjal",
	source: [["FF", 15]],
	plural: padjalRaceNameTitlePlural,
	size: 3,
	speed: {
		walk: { spd: 30, enc: 20 }
	},
	languageProfs: ["Common", 2],
	skills: ["Nature"],
	skillstxt: "Nature, Choose any two skills",
	age: " reach adulthood at age " + adultAge + " and live up to " + livingAge + " years",
	height: " are from 5 to 6 and half feet tall (5\"-6\"5ft)",
	weight: "",
	heightMetric: " are around 150 and 200 cm tall",
	scorestxt : "+2 Wisdom, +1 Any score",
	scores: [0, 0, 0, 0, 2, 0],
	toolProfs: [["Artisan's tools or Gaming Set or Musical Instrument"]],
	trait: midlanderRaceNameTitle + "(+1 My Choice +2 Wisdom)"
};
