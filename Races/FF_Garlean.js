/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script add 1 subrace of the garlean race from FFXIV
				This is taken from the GM Binder website (https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv)
	Code by:	lortizg
	Year:		2024
*/

// --- global vars ---
var bulletedLine = "\n \u2022 ";
var tabbedLine = "\n   ";

// --- File particular vars ---
var iFileName = "FF_Garlean.js";

RequiredSheetVersion(13);

SourceList["FF:El"] = {
	name: "FFXIV x D&D Compendium: Garlean",
	abbreviation: "FF:El",
	group: "Final Fantasy",
	url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
	date: "2020/11/25"
};

RaceList['garlean'] = {
	regExpSearch: /^(?=.*garlean).*$/i,
	name: "Garlean",
	sortname: "Garlean",
	source: [["FF", 11]],
	plural: "Garleans",
	size: 3,
	speed: {
		walk: { spd: 30 }
	},
	languageProfs: ["Common", "Garlean", 1],
	toolProfs: [["Artisan's tools"]],
	skills: ["Investigation", "Perception"],
	skillstxt: "Investigation, Perception, Choose any skill",
	vision: ["Ranged weapon attacks + 10ft range."],
	age: " reach adulthood at age 18 and live up to 80 years",
	height: " men are from 6 to 7 (6-7ft) and women from 5.5 to 6 (5\"5-6\"ft)",
	weight: "",
	heightMetric: " are around 150 and 200 cm tall", //todo
	scores: [2, 0, 0, 1, 0, 0],
	trait: "Garlean (+2 Strength +1 Intelligence)" +
		tabbedLine + "Third Eye. The normal range of your ranged weapon is increased by 10ft."
};
