/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script add 1 subrace of the miqo'te race from FFXIV
				This is taken from the GM Binder website (https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv)
	Code by:	lortizg
	Year:		2024
*/

// --- global vars ---
var bulletedLine = "\n \u2022 ";
var tabbedLine = "\n   ";

// --- File particular vars ---
var iFileName = "FF_Miqote.js";
var adultAge = 16;
var livingAge = 80;
var moonRaceName = "moon_miqote";
var moonRaceNameTitle = "Seeker of the Moon Miqo\'te";
var moonRaceNameTitlePlural = "Seekers of the Moon Miqo\'te";

RequiredSheetVersion(13);

SourceList["FF:A"] = {
	name: "FFXIV x D&D Compendium: " + 'Miqo\'te',
	abbreviation: "FF:Mq",
	group: "Final Fantasy",
	url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
	date: "2020/11/25"
};

RaceList[moonRaceName] = {
	regExpSearch: /^(?=.*moon)(?=.*miqote).*$/i,
	name: moonRaceNameTitle,
	sortname: "Miqote, Moon",
	source: [["A876:AS", 0]],
	plural: moonRaceNameTitlePlural,
	size: 3,
	speed: {
		walk: { spd: 30, enc: 20 },
		climb: { spd: 30, enc: 20 }
	},
	languageProfs: ["Common", 1],
	skills: ["Perception"],
	vision: [["Darkvision", 120]],
	age: " reach adulthood at age " + adultAge + " and live up to " + livingAge + " years",
	height: " are between 5 and 5 and a half feet tall (5\" + 2d4\")",
	weight: "",
	heightMetric: " are between 150 and 167 cm tall (150 + 5d4 cm)",
	scores: [0, 0, 0, 0, 1, 0],
	trait: moonRaceNameTitle + "(+1 Wisdom)" +
		tabbedLine + "Superior Darkvision. Your darkvision has a radius of 120 ft." +
		tabbedLine + "Tenacity. When reduced to 0HP but not killed I drop to 1HP instead.",
	features: {
		tenacity: {
			name: "Tenacity",
			minlevel: 1,
			usages: 1,
			recovery: "long rest",
		}
	}
};

