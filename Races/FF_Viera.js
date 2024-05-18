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
var iFileName = "FF_Viera.js";
var adultAge = 18;
var livingAge = 240;
var veenaRaceName = "veena_viera";
var veenaRaceNameTitle = "Veena";
var veenaRaceNameTitlePlural = "Veena";

RequiredSheetVersion(13);

SourceList["FF:Vi"] = {
    name: "FFXIV x D&D Compendium: " + 'Viera',
    abbreviation: "FF:Vi",
    group: "Final Fantasy",
    url: "https://www.gmbinder.com/share/-LsDqsNbupzeLhkTIcPv",
    date: "2020/11/25"
};

RaceList[veenaRaceName] = {
    regExpSearch: /^(?=.*veena)(?=.*viera).*$/i,
    name: veenaRaceNameTitle,
    sortname: "Viera, Veena",
    source: [["FF", 23]],
    plural: veenaRaceNameTitlePlural,
    size: 3,
    speed: {
        walk: { spd: 35, enc: 25 }
    },
    languageProfs: ["Common", "Viera"],
    skills: ["Persuasion"],
    age: " reach adulthood at age " + adultAge + " and live up to " + livingAge + " years",
    height: " are around 6 half feet tall (6\")",
    weight: "",
    heightMetric: " are around 180 cm tall",
    scores: [0, 2, 0, 1, 0, 0],
    trait: veenaRaceNameTitle + "(+2 Dexterity +1 Intelligence)" +
        tabbedLine + "Lapine Hop. Your maximum high jump and long jump distances are 10ft. higher." +
        tabbedLine + "Lucky. I can reroll a 1 in a check, attack or saving throw. Must use the new one" +
        tabbedLine + "Mask of the Wild. You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena." +
        tabbedLine + "Speak with Small Beasts. Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts.",
    features: {
        lucky: {
            name: "Lucky",
            minlevel: 1,
            usages: 3,
            recovery: "long rest",
        }
    }
};

