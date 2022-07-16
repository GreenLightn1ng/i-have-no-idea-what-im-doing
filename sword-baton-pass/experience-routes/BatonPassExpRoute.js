/* Useful code additions
    { type: "evolve" }, used to change the name to the next evolution stage
    { type: "rare-candy" }, used to increase the level by one
    { type: "exp-candy", experience: 2300 }, used to add a set amount of exp at the point it is used, in this case 2300
    { type: "ev-gain", atk: 130, spd: 20 }, adds the number of EVs to the current total for that stat
    { type: "item-equip", item: "Miracle Seed" }, used to add a held item to the output
    ["7", "8"].indexOf(selectedRoute) !== -1 ? { type: "evolve" } : null, used to apply the action to those specific routes only. i.e. Only initial routes 7 and 8 will evolve at that moment
    { type: "kill", pokemon: "Alolan Wartab", level: 69 }, used to show a Pokemon that has been defeated
    { type: "catch", pokemon: "Alolan Wartab", level: 69 }, used to show a Pokemon that has been caught
    { type: "kill", pokemon: "Flygon", level: 47, expShare: true }, used to gain the correct experience if the Pokemon you're routing for did not appear in battle against this Pokemon but was still in the party alive
    { type: "kill", pokemon: "Flygon", level: 47, skipLevel: true }, used to gain the correct experience if you defeat two Pokemon at the same time
    { type: "kill", pokemon: "Flygon", level: 47, evolutionDue: true }, used to gain the boosted experience if the pokemon is equal or above the level needed to evolve
    and the first Pokemon that is classed as fainted causes you to level up, use this on the second double battle Pokemon
*/

let initialRoutes = {
    "1": [{ type: "init", level: 5, curve: "Medium Slow", name: "Scorbunny"}],
    "2": [{ type: "init", level: 9, curve: "Medium Fast", name: "Ninetales"}],
    "3": [{ type: "init", level: 23, curve: "Medium Fast", tradeExp: true, name: "Whimsicott"}],
    "4": [{ type: "init", level: 22, curve: "Medium Fast", name: "Eldegoss"}],
    "5": [{ type: "init", level: 24, curve: "Medium Fast", name: "Drednaw"}],
    "6": [{ type: "init", level: 30, curve: "Medium Fast", name: "Natu", evolution1Name: "Xatu", evolution1: 25}],
    "7": [{ type: "init", level: 38, curve: "Medium Fast", name: "Morgrem", evolution1Name: "Grimmsnarl", evolution1: 42}],
    "8": [{ type: "init", level: 47, curve: "Medium Fast", name: "Excadrill"}],
    "9": [{ type: "init", level: 46, curve: "Slow", name: "Hippowdon"}],
    "10": [{ type: "init", level: 44, curve: "Medium Fast", name: "Gastrodon"}],
    "11": [{ type: "init", level: 56, curve: "Medium Fast", name: "Aegislash"}],
    "12": [{ type: "init", level: 56, curve: "Slow", name: "Lapras"}],
    "13": [{ type: "init", level: 58, curve: "Medium Slow", name: "Chandelure"}],
    "14": [{ type: "init", level: 58, curve: "Medium Fast", name: "Golurk"}],
    "15": [{ type: "init", level: 58, curve: "Slow", name: "Braviary"}],
    "16": [{ type: "init", level: 56, curve: "Medium Fast", name: "Leafeon"}],
    "17": [{ type: "init", level: 60, curve: "Slow", name: "Gardevoir"}],
    "18": [{ type: "init", level: 60, curve: "Slow", name: "Eternatus"}],
};
/* Set the level, experience curve, name at each evolution stage and optionally put
in if it gains trade experience or any preset items that will be used on it */

let EVsOnly = true; // Sets whether you only want to show the EVs for each level up, useful for if you're making an IV calc
let rangerFormat = true; // Sets whether you want the EVs to show in the format used for the IV calcs on https://ranger.maybreak.com/route

let selectedRoute = "15";

let route = [
    ...initialRoutes[selectedRoute],
    
    // Scorbunny 
    /*
    { type: "kill", pokemon: "Wooloo", level: 3 },
    { type: "kill", pokemon: "Grookey", level: 5 },

    { type: "catch", pokemon: "Skwovet", level: 6 },
    
    { type: "kill", pokemon: "Skwovet", level: 6 },
    { type: "kill", pokemon: "Blipbug", level: 5 },
    { type: "kill", pokemon: "Nickit", level: 7 },

    { type: "kill", pokemon: "Wooloo", level: 6 },
    { type: "kill", pokemon: "Rookidee", level: 5 },
    { type: "kill", pokemon: "Grookey", level: 8 },  
    */
    
    // Vulpix/Ninetales
    /*
    { type: "catch", pokemon: "Minccino", level: 7},

    { type: "kill", pokemon: "Zigzagoon", level: 9 },
    { type: "kill", pokemon: "Nickit", level: 9 },
    { type: "kill", pokemon: "Zigzagoon", level: 9 },
    { type: "kill", pokemon: "Nickit", level: 9 },

    { type: "kill", pokemon: "Wooloo", level: 11 },
    { type: "kill", pokemon: "Rookidee", level: 12 },
    { type: "kill", pokemon: "Grookey", level: 14 },

    { type: "kill", pokemon: "Sizzlipede", level: 13 },
    { type: "kill", pokemon: "Dottler", level: 14 },
    { type: "kill", pokemon: "Diglett", level: 14 },
    { type: "kill", pokemon: "Drilbur", level: 15 },
  
    { type: "kill", pokemon: "Solosis", level: 13 },
    { type: "kill", pokemon: "Hatenna", level: 16 },
    { type: "kill", pokemon: "Gothita", level: 15 },

    { type: "kill", pokemon: "Gossifleur", level: 16 },
    { type: "kill", pokemon: "Gossifleur", level: 19 },
    { type: "kill", pokemon: "Eldegoss", level: 20 },

    { type: "kill", pokemon: "Zigzagoon", level: 17 },
    { type: "kill", pokemon: "Thievul", level: 18 },
    { type: "kill", pokemon: "Sableye", level: 18 },

    { type: "kill", pokemon: "Wooloo", level: 18 },
    { type: "kill", pokemon: "Corvisquire", level: 19 },
    { type: "kill", pokemon: "Thwackey", level: 21 },
    
*/
    // Candyfloss
 /*
    { type: "kill", pokemon: "Tympole", expShare: true, level: 21 },
    { type: "kill", pokemon: "Krabby", expShare: true, level: 20 },
    { type: "kill", pokemon: "Corphish", expShare: true, level: 20 },
    { type: "kill", pokemon: "Goldeen", expShare: true, level: 22 },
    { type: "kill", pokemon: "Arrokuda", expShare: true, level: 23 },
    { type: "kill", pokemon: "Drednaw", expShare: true, level: 24 },

    { type: "kill", pokemon: "Solosis", level: 21 },
    { type: "kill", pokemon: "Ponyta", level: 22 },
    { type: "kill", pokemon: "Hatenna", level: 23 },
    { type: "kill", pokemon: "Gothita", level: 22 },

    { type: "kill", pokemon: "Carkol", level: 21 },
    { type: "kill", pokemon: "Thievul", level: 21 },
    { type: "kill", pokemon: "Linoone", level: 22 },
    { type: "kill", pokemon: "Liepard", level: 22 },
    { type: "kill", pokemon: "Pancham", level: 21 },

    { type: "catch", pokemon: "Drednaw", level: 24 },

    { type: "kill", pokemon: "Croagunk", level: 24 },
    { type: "kill", pokemon: "Scraggy", level: 24 },
    { type: "kill", pokemon: "Morpeko", level: 26 },

    { type: "catch", pokemon: "Vulpix", expShare: true, level: 24 },
    { type: "catch", pokemon: "Litwick", expShare: true, level: 25 },
    { type: "kill", pokemon: "Vulpix", expShare: true, level: 24 },

    { type: "kill", pokemon: "Ninetales", expShare: true, level: 25 },
    { type: "kill", pokemon: "Arcanine", expShare: true, level: 25 },
    { type: "kill", pokemon: "Centiskorch", expShare: true, level: 27 },

    { type: "catch", pokemon: "Natu", level: 28 },

    { type: "kill", pokemon: "Stunky", level: 29 },
    { type: "kill", pokemon: "Linoone", level: 30 },
    { type: "kill", pokemon: "Liepard", level: 30 },
    { type: "kill", pokemon: "Clefairy", level: 29 }, // Anita
    { type: "kill", pokemon: "Clefable", level: 30 }, // Anita

    { type: "kill", pokemon: "Koffing", level: 29 },
    { type: "kill", pokemon: "Sudowoodo", level: 31 },

    { type: "kill", pokemon: "Cramorant", level: 29 },
    { type: "kill", pokemon: "Thwackey", level: 33 },
    { type: "kill", pokemon: "Silicobra", level: 30 },    
    { type: "kill", pokemon: "Toxel", level: 29 },

    { type: "kill", pokemon: "Stufful", level: 31 },
    { type: "kill", pokemon: "Bewear", level: 32 },    
    { type: "kill", pokemon: "Farfetch’d", level: 32 },
    { type: "kill", pokemon: "Hitmonlee", level: 33 },
    { type: "kill", pokemon: "Hitmonchan", level: 33 },

    { type: "kill", pokemon: "Hitmontop", level: 34 },
    { type: "kill", pokemon: "Pangoro", level: 34 },
    { type: "kill", pokemon: "Sirfetch’d", level: 35 },
    { type: "kill", pokemon: "Machamp", level: 35 },

    { type: "kill", pokemon: "Duosion", level: 32 },
    { type: "kill", pokemon: "Hattrem", level: 35 },
    { type: "kill", pokemon: "Ponyta", level: 33 },
    { type: "kill", pokemon: "Gothorita", level: 32 },

    { type: "kill", pokemon: "Indeedee", level: 33 },
    { type: "kill", pokemon: "Indeedee", level: 33 },

    { type: "catch", pokemon: "Morgrem", level: 38 },

    { type: "kill", pokemon: "Spritzee", level: 34 },
    { type: "kill", pokemon: "Slurpuff", level: 34 },
    { type: "kill", pokemon: "Swirlix", level: 34 },
    { type: "kill", pokemon: "Aromatisse", level: 34 },
    { type: "kill", pokemon: "Morgrem", level: 35 },
    { type: "kill", pokemon: "Gardevoir", level: 35 },

    { type: "kill", pokemon: "Weezing", expShare: true, level: 36 },
    { type: "kill", pokemon: "Togekiss", expShare: true, level: 37 },
    { type: "kill", pokemon: "Mawile", expShare: true, level: 36 },
    { type: "kill", pokemon: "Alcremie", expShare: true, level: 38 },
*/
    // Eldegoss
    /*
    { type: "kill", pokemon: "Tympole", level: 21 },
    { type: "kill", pokemon: "Krabby", level: 20 },
    { type: "kill", pokemon: "Corphish", level: 20 },
    { type: "kill", pokemon: "Goldeen", level: 22 },
    { type: "kill", pokemon: "Arrokuda", level: 23 },
    { type: "kill", pokemon: "Drednaw", level: 24 },
   */

// Drednaw
/*
    { type: "catch", pokemon: "Vulpix", level: 24 },
    { type: "catch", pokemon: "Litwick", level: 25 },
    { type: "kill", pokemon: "Vulpix", level: 24 },

    { type: "kill", pokemon: "Ninetales", level: 25 },
    { type: "kill", pokemon: "Arcanine", level: 25 },
    { type: "kill", pokemon: "Centiskorch", level: 27 },
/*
    // Natu
/*
    { type: "kill", pokemon: "Stunky", expShare: true, level: 29 },
    { type: "kill", pokemon: "Linoone", expShare: true, level: 30 },
    { type: "kill", pokemon: "Liepard", expShare: true, level: 30 },
    { type: "kill", pokemon: "Clefairy", expShare: true, level: 29 }, // Anita
    { type: "kill", pokemon: "Clefable", expShare: true, level: 30 }, // Anita
    //{ type: "evolve"},
    { type: "kill", pokemon: "Koffing", expShare: true, level: 29 },
    { type: "kill", pokemon: "Sudowoodo", expShare: true, level: 31 },
    { type: "evolve"},
    { type: "kill", pokemon: "Cramorant", expShare: true, level: 29 },
    { type: "kill", pokemon: "Thwackey", expShare: true, level: 33 },
    { type: "kill", pokemon: "Silicobra", expShare: true, level: 30 },    
    { type: "kill", pokemon: "Toxel", expShare: true, level: 29 },

    { type: "kill", pokemon: "Stufful", expShare: true, level: 31 },
    { type: "kill", pokemon: "Bewear", expShare: true, level: 32 },    
    { type: "kill", pokemon: "Farfetch’d", expShare: true, level: 32 },
    { type: "kill", pokemon: "Hitmonlee", expShare: true, level: 33 },
    { type: "kill", pokemon: "Hitmonchan", expShare: true, level: 33 },

    { type: "kill", pokemon: "Hitmontop", expShare: true, level: 34 },
    { type: "kill", pokemon: "Pangoro", expShare: true, level: 34 },
    { type: "kill", pokemon: "Sirfetch’d", expShare: true, level: 35 },
    { type: "kill", pokemon: "Machamp", expShare: true, level: 35 },

    { type: "kill", pokemon: "Duosion", expShare: true, level: 32 },
    { type: "kill", pokemon: "Hattrem", expShare: true, level: 35 },
    { type: "kill", pokemon: "Ponyta", expShare: true, level: 33 },
    { type: "kill", pokemon: "Gothorita", expShare: true, level: 32 },

    { type: "kill", pokemon: "Spritzee", expShare: true, level: 34 },
    { type: "kill", pokemon: "Slurpuff", expShare: true, level: 34 },
    { type: "kill", pokemon: "Swirlix", expShare: true, level: 34 },
    { type: "kill", pokemon: "Aromatisse", expShare: true, level: 34 },
    { type: "kill", pokemon: "Morgrem", expShare: true, level: 35 },
    { type: "kill", pokemon: "Gardevoir", expShare: true, level: 35 },
    
    { type: "kill", pokemon: "Weezing", level: 36 },
    { type: "kill", pokemon: "Togekiss", level: 37 },
    { type: "kill", pokemon: "Mawile", level: 36 },
    { type: "kill", pokemon: "Alcremie", level: 38 },
*/
    // Morgrem
/*
    { type: "kill", pokemon: "Spritzee", expShare: true, level: 34 },
    { type: "kill", pokemon: "Slurpuff", expShare: true, level: 34 },
    { type: "kill", pokemon: "Swirlix", expShare: true, level: 34 },
    { type: "kill", pokemon: "Aromatisse", expShare: true, level: 34 },
    { type: "kill", pokemon: "Morgrem", expShare: true, level: 35 },
    { type: "kill", pokemon: "Gardevoir", expShare: true, level: 35 },

    { type: "kill", pokemon: "Weezing", expShare: true, level: 36 },
    { type: "kill", pokemon: "Togekiss", expShare: true, level: 37 },
    { type: "kill", pokemon: "Mawile", expShare: true, level: 36 },
    { type: "kill", pokemon: "Alcremie", expShare: true, level: 38 },

    { type: "kill", pokemon: "Trevenant", expShare: true, level: 34 },
    { type: "kill", pokemon: "Heatmor", expShare: true, level: 34 },
    { type: "kill", pokemon: "Snorlax", expShare: true, level: 35 },
    { type: "kill", pokemon: "Boltund", expShare: true, level: 35 },
    { type: "kill", pokemon: "Rillaboom", expShare: true, level: 37 },

    { type: "kill", pokemon: "Roselia", expShare: true, level: 36 },
    { type: "kill", pokemon: "Hattrem", expShare: true, level: 36 },
    
    { type: "kill", pokemon: "Barbaracle", expShare:true, level: 40 },
    { type: "kill", pokemon: "Shuckle", expShare:true, level: 40 },
    { type: "kill", pokemon: "Stonjourner", expShare:true, level: 41 },
    { type: "kill", pokemon: "Coalossal", expShare:true, level: 42 },

    { type: "kill", pokemon: "Dubwool", expShare: true, level: 40 },
    { type: "kill", pokemon: "Snorlax", expShare: true, level: 39 },
    { type: "kill", pokemon: "Corviknight", expShare: true, level: 40 },
    { type: "kill", pokemon: "Rillaboom", expShare: true, level: 41 },    
    { type: "kill", pokemon: "Pincurchin", expShare: true, level: 39 },

    { type: "kill", pokemon: "Linoone", expShare: true, level: 39 },
    { type: "kill", pokemon: "Pangoro", expShare: true, level: 40 },

    { type: "kill", pokemon: "Liepard", expShare: true, level: 42 },
    { type: "kill", pokemon: "Toxicroak", expShare: true, level: 43 },
    { type: "kill", pokemon: "Scrafty", expShare: true, level: 43 },
    { type: "kill", pokemon: "Morpeko", expShare: true, level: 44 },
    { type: "evolve"},
    { type: "kill", pokemon: "Linoone", expShare: true, level: 42 },
    { type: "kill", pokemon: "Thievul", expShare: true, level: 42 },
    { type: "kill", pokemon: "Scrafty", expShare: true, level: 42 },

    { type: "kill", pokemon: "Weavile", expShare: true, level: 43 },
    { type: "kill", pokemon: "Liepard", expShare: true, level: 43 },
    { type: "kill", pokemon: "Drapion", expShare: true, level: 43 },

    { type: "kill", pokemon: "Scrafty", level: 44 },
    { type: "kill", pokemon: "Obstagoon", level: 46 },
    { type: "kill", pokemon: "Malamar", level: 45 },
    { type: "kill", pokemon: "Skuntank", level: 46 },
*/
    // Excadrill
/*
    { type: "kill", pokemon: "Trevenant", level: 34 },
    { type: "kill", pokemon: "Heatmor", level: 34 },
    { type: "kill", pokemon: "Snorlax", level: 35 },
    { type: "kill", pokemon: "Boltund", level: 35 },
    { type: "kill", pokemon: "Rillaboom", level: 37 },

    { type: "kill", pokemon: "Roselia", level: 36 },
    { type: "kill", pokemon: "Hattrem", level: 36 },
    
    { type: "kill", pokemon: "Barbaracle", expShare:true, level: 40 },
    { type: "kill", pokemon: "Shuckle", expShare:true, level: 40 },
    { type: "kill", pokemon: "Stonjourner", expShare:true, level: 41 },
    { type: "kill", pokemon: "Coalossal", expShare:true, level: 42 },

    { type: "kill", pokemon: "Dubwool", level: 40 },
    { type: "kill", pokemon: "Snorlax", level: 39 },
    { type: "kill", pokemon: "Corviknight", level: 40 },
    { type: "kill", pokemon: "Rillaboom", level: 41 },    
    { type: "kill", pokemon: "Pincurchin", level: 39 },

    { type: "catch", pokemon: "Gastrodon", level: 41 },

    { type: "kill", pokemon: "Linoone", level: 39 },
    { type: "kill", pokemon: "Pangoro", level: 40 },

    { type: "kill", pokemon: "Liepard", level: 42 },
    { type: "kill", pokemon: "Toxicroak", level: 43 },
    { type: "kill", pokemon: "Scrafty", level: 43 },
    { type: "kill", pokemon: "Morpeko", level: 44 },

    { type: "kill", pokemon: "Linoone", expShare:true, level: 42 },
    { type: "kill", pokemon: "Thievul", expShare:true, level: 42 },
    { type: "kill", pokemon: "Scrafty", expShare:true, level: 42 },

    { type: "kill", pokemon: "Weavile", expShare:true, level: 43 },
    { type: "kill", pokemon: "Liepard", level: 43 },
    { type: "kill", pokemon: "Drapion", level: 43 },

    { type: "kill", pokemon: "Scrafty", expShare:true, level: 44 },
    { type: "kill", pokemon: "Obstagoon", expShare:true, level: 46 },
    { type: "kill", pokemon: "Malamar", expShare:true, level: 45 },
    { type: "kill", pokemon: "Skuntank", expShare:true, level: 46 },

    { type: "kill", pokemon: "Pelipper", level: 45 },
    { type: "kill", pokemon: "Sliggoo", level: 45 },
    { type: "kill", pokemon: "Ninetales", level: 45 },
    { type: "kill", pokemon: "Turtonator", level: 45 },
    { type: "kill", pokemon: "Abomasnow", level: 45 },
    { type: "kill", pokemon: "Hakamo-o", level: 45 },

    { type: "kill", pokemon: "Gigalith", level: 46 },
    { type: "kill", pokemon: "Sandaconda", level: 46 },
    { type: "kill", pokemon: "Flygon", level: 47},
    //{ type: "kill", pokemon: "Duraludon", level: 48 },

    { type: "catch", pokemon: "Doublade",expShare:true, level: 56 },
    { type: "catch", pokemon: "Lapras",expShare:true, level: 56 },
    { type: "catch", pokemon: "Lampent",expShare:true, level: 55 },
    { type: "catch", pokemon: "Golurk",expShare:true, level: 55 },
    { type: "catch", pokemon: "Braviary",expShare:true, level: 55 },
    { type: "catch", pokemon: "Leafeon",expShare:true, level: 56 },
    { type: "catch", pokemon: "Gardevoir",expShare:true, level: 60 },

    { type: "kill", pokemon: "Gardevoir", level: 45 },
    { type: "kill", pokemon: "Pelipper", level: 46 },
    { type: "kill", pokemon: "Noctowl", level: 46 },

    { type: "kill", pokemon: "Gigalith", level: 46 },
    { type: "kill", pokemon: "Rhydon", level: 46 },
    { type: "kill", pokemon: "Darmanitan", level: 46 },
    { type: "kill", pokemon: "Falinks", level: 46 },
    { type: "kill", pokemon: "Grapploct", level: 46 },

    { type: "kill", pokemon: "Liepard", expShare: true, level: 47 },
    { type: "kill", pokemon: "Scrafty", expShare: true, level: 47 },
    { type: "kill", pokemon: "Toxicroak", expShare: true, level: 47 },
    { type: "kill", pokemon: "Morpeko", expShare: true, level: 48 },
    { type: "kill", pokemon: "Grimmsnarl", expShare: true, level: 49 },

    { type: "kill", pokemon: "Dubwool", expShare: true, level: 48 },
    { type: "kill", pokemon: "Snorlax", expShare: true, level: 47 },
    { type: "kill", pokemon: "Corviknight", expShare: true, level: 48 },
    { type: "kill", pokemon: "Pincurchin", expShare: true, level: 47 },
    { type: "kill", pokemon: "Rillaboom", expShare: true, level: 49 },

    { type: "kill", pokemon: "Meowth", level: 47 },
    { type: "kill", pokemon: "Durant", level: 47 },

    { type: "kill", pokemon: "Mawile", level: 47 },
    { type: "kill", pokemon: "Excadrill", level: 47 },
    { type: "kill", pokemon: "Ferroseed", level: 47 },
    { type: "kill", pokemon: "Steelix", level: 47 },
    { type: "kill", pokemon: "Durant", level: 48 },

    { type: "kill", pokemon: "Cufant", level: 48 },
    { type: "kill", pokemon: "Bronzong", level: 48 },
    { type: "kill", pokemon: "Mawile", level: 48 },
    { type: "kill", pokemon: "Klang", level: 48 },
    { type: "kill", pokemon: "Stunfisk", level: 49 },
    { type: "kill", pokemon: "Steelix", level: 49 },

    { type: "kill", pokemon: "Froslass", expShare: true, level: 50 },
    { type: "kill", pokemon: "Salazzle", expShare: true, level: 50 },
    { type: "kill", pokemon: "Tsareena", expShare: true, level: 50 },
    { type: "kill", pokemon: "Milotic", expShare: true, level: 51 },
    { type: "kill", pokemon: "Garbador", expShare: true, level: 52 },

    { type: "kill", pokemon: "Mawile", level: 51 },
    { type: "kill", pokemon: "Gardevoir", level: 51 },
    { type: "kill", pokemon: "Rapidash", level: 52 },
    { type: "kill", pokemon: "Hatterene", level: 53 },
*/
    // Hippopotas
/*
    { type: "kill", pokemon: "Trevenant", expShare: true, level: 34 },
    { type: "kill", pokemon: "Heatmor", expShare: true, level: 34 },
    { type: "kill", pokemon: "Snorlax", expShare: true, level: 35 },
    { type: "kill", pokemon: "Boltund", expShare: true, level: 35 },
    { type: "kill", pokemon: "Rillaboom", expShare: true, level: 37 },

    { type: "kill", pokemon: "Roselia", expShare: true, level: 36 },
    { type: "kill", pokemon: "Hattrem", expShare: true, level: 36 },
    
    { type: "kill", pokemon: "Barbaracle",level: 40 },
    { type: "kill", pokemon: "Shuckle",level: 40 },
    { type: "kill", pokemon: "Stonjourner",level: 41 },
    { type: "kill", pokemon: "Coalossal", level: 42 },
*/
    // Gastrodon
/*
    { type: "kill", pokemon: "Linoone", expShare: true, level: 39 },
    { type: "kill", pokemon: "Pangoro", expShare: true, level: 40 },

    { type: "kill", pokemon: "Liepard", expShare: true, level: 42 },
    { type: "kill", pokemon: "Toxicroak", expShare: true, level: 43 },
    { type: "kill", pokemon: "Scrafty", expShare: true, level: 43 },
    { type: "kill", pokemon: "Morpeko", expShare: true, level: 44 },

    { type: "kill", pokemon: "Linoone", expShare: true, level: 42 },
    { type: "kill", pokemon: "Thievul", expShare: true, level: 42 },
    { type: "kill", pokemon: "Scrafty", expShare: true, level: 42 },

    { type: "kill", pokemon: "Weavile", expShare: true, level: 43 },
    { type: "kill", pokemon: "Liepard", expShare: true, level: 43 },
    { type: "kill", pokemon: "Drapion", expShare: true, level: 43 },

    { type: "kill", pokemon: "Scrafty", expShare:true, level: 44 },
    { type: "kill", pokemon: "Obstagoon", expShare:true, level: 46 },
    { type: "kill", pokemon: "Malamar", expShare:true, level: 45 },
    { type: "kill", pokemon: "Skuntank", expShare:true, level: 46 },

    { type: "kill", pokemon: "Pelipper", level: 45 },
    { type: "kill", pokemon: "Sliggoo", level: 45 },
    { type: "kill", pokemon: "Ninetales", level: 45 },
    { type: "kill", pokemon: "Turtonator", level: 45 },
    { type: "kill", pokemon: "Abomasnow", level: 45 },
    { type: "kill", pokemon: "Hakamo-o", level: 45 },

    { type: "kill", pokemon: "Gigalith", level: 46 },
    { type: "kill", pokemon: "Flygon", level: 47},
    { type: "kill", pokemon: "Duraludon", level: 48 },
    { type: "kill", pokemon: "Sandaconda", level: 46 },
*/
    // Aegislash
/*
    { type: "catch", pokemon: "Lapras", expShare: true, level: 56 },
    { type: "catch", pokemon: "Lampent", expShare: true, level: 55 },
    { type: "catch", pokemon: "Golurk", expShare: true, level: 55 },
    { type: "catch", pokemon: "Braviary", expShare: true, level: 55 },
    { type: "catch", pokemon: "Leafeon", expShare: true, level: 56 },
    { type: "catch", pokemon: "Gardevoir", expShare: true, level: 60 },

    { type: "kill", pokemon: "Gardevoir", expShare: true, level: 45 },
    { type: "kill", pokemon: "Pelipper", expShare: true, level: 46 },
    { type: "kill", pokemon: "Noctowl", expShare: true, level: 46 },

    { type: "kill", pokemon: "Gigalith", expShare: true, level: 46 },
    { type: "kill", pokemon: "Rhydon", expShare: true, level: 46 },
    { type: "kill", pokemon: "Darmanitan", expShare: true, level: 46 },
    { type: "kill", pokemon: "Falinks", expShare: true, level: 46 },
    { type: "kill", pokemon: "Grapploct", expShare: true, level: 46 },

    { type: "kill", pokemon: "Liepard", level: 47 },
    { type: "kill", pokemon: "Scrafty", level: 47 },
    { type: "kill", pokemon: "Toxicroak", level: 47 },
    { type: "kill", pokemon: "Morpeko", level: 48 },
    { type: "kill", pokemon: "Grimmsnarl", level: 49 },
*/
    // Lapras
/*
    { type: "catch", pokemon: "Lampent", expShare: true, level: 55 },
    { type: "catch", pokemon: "Golurk", expShare: true, level: 55 },
    { type: "catch", pokemon: "Braviary", expShare: true, level: 55 },
    { type: "catch", pokemon: "Leafeon", expShare: true, level: 56 },
    { type: "catch", pokemon: "Gardevoir", expShare: true, level: 60 },

    { type: "kill", pokemon: "Gardevoir", expShare: true, level: 45 },
    { type: "kill", pokemon: "Pelipper", expShare: true, level: 46 },
    { type: "kill", pokemon: "Noctowl", expShare: true, level: 46 },

    { type: "kill", pokemon: "Gigalith", expShare: true, level: 46 },
    { type: "kill", pokemon: "Rhydon", expShare: true, level: 46 },
    { type: "kill", pokemon: "Darmanitan", expShare: true, level: 46 },
    { type: "kill", pokemon: "Falinks", expShare: true, level: 46 },
    { type: "kill", pokemon: "Grapploct", expShare: true, level: 46 },

    { type: "kill", pokemon: "Liepard", expShare: true, level: 47 },
    { type: "kill", pokemon: "Scrafty", expShare: true, level: 47 },
    { type: "kill", pokemon: "Toxicroak", expShare: true, level: 47 },
    { type: "kill", pokemon: "Morpeko", expShare: true, level: 48 },
    { type: "kill", pokemon: "Grimmsnarl", expShare: true, level: 49 },

    { type: "kill", pokemon: "Dubwool", level: 48 },
    { type: "kill", pokemon: "Snorlax", level: 47 },
    { type: "kill", pokemon: "Corviknight", level: 48 },
    { type: "kill", pokemon: "Pincurchin", level: 47 },
    { type: "kill", pokemon: "Rillaboom", level: 49 },
*/
    // Lampent
/*
    { type: "catch", pokemon: "Golurk", expShare: true, level: 55 },
    { type: "catch", pokemon: "Braviary", expShare: true, level: 55 },
    { type: "catch", pokemon: "Leafeon", expShare: true, level: 56 },
    { type: "catch", pokemon: "Gardevoir", expShare: true, level: 60 },

    { type: "kill", pokemon: "Gardevoir", expShare: true, level: 45 },
    { type: "kill", pokemon: "Pelipper", expShare: true, level: 46 },
    { type: "kill", pokemon: "Noctowl", expShare: true, level: 46 },

    { type: "kill", pokemon: "Gigalith", expShare: true, level: 46 },
    { type: "kill", pokemon: "Rhydon", expShare: true, level: 46 },
    { type: "kill", pokemon: "Darmanitan", expShare: true, level: 46 },
    { type: "kill", pokemon: "Falinks", expShare: true, level: 46 },
    { type: "kill", pokemon: "Grapploct", expShare: true, level: 46 },

    { type: "kill", pokemon: "Liepard", expShare: true, level: 47 },
    { type: "kill", pokemon: "Scrafty", expShare: true, level: 47 },
    { type: "kill", pokemon: "Toxicroak", expShare: true, level: 47 },
    { type: "kill", pokemon: "Morpeko", expShare: true, level: 48 },
    { type: "kill", pokemon: "Grimmsnarl", expShare: true, level: 49 },

    { type: "kill", pokemon: "Dubwool", expShare: true, level: 48 },
    { type: "kill", pokemon: "Snorlax", expShare: true, level: 47 },
    { type: "kill", pokemon: "Corviknight", expShare: true, level: 48 },
    { type: "kill", pokemon: "Pincurchin", expShare: true, level: 47 },
    { type: "kill", pokemon: "Rillaboom", expShare: true, level: 49 },

    { type: "kill", pokemon: "Meowth", expShare: true, level: 47 },
    { type: "kill", pokemon: "Durant", expShare: true, level: 47 },

    { type: "kill", pokemon: "Mawile", expShare: true, level: 47 },
    { type: "kill", pokemon: "Excadrill", expShare: true, level: 47 },
    { type: "kill", pokemon: "Ferroseed", expShare: true, level: 47 },
    { type: "kill", pokemon: "Steelix", expShare: true, level: 47 },
    { type: "kill", pokemon: "Durant", expShare: true, level: 48 },

    { type: "kill", pokemon: "Cufant", expShare: true, level: 48 },
    { type: "kill", pokemon: "Bronzong", expShare: true, level: 48 },
    { type: "kill", pokemon: "Mawile", expShare: true, level: 48 },
    { type: "kill", pokemon: "Klang", expShare: true, level: 48 },
    { type: "kill", pokemon: "Stunfisk", expShare: true, level: 49 },
    { type: "kill", pokemon: "Steelix", expShare: true, level: 49 },

    { type: "kill", pokemon: "Froslass", expShare: true, level: 50 },
    { type: "kill", pokemon: "Salazzle", expShare: true, level: 50 },
    { type: "kill", pokemon: "Tsareena", expShare: true, level: 50 },
    { type: "kill", pokemon: "Milotic", expShare: true, level: 51 },
    { type: "kill", pokemon: "Garbador", expShare: true, level: 52 },

    { type: "kill", pokemon: "Mawile", expShare: true, level: 51 },
    { type: "kill", pokemon: "Gardevoir", expShare: true, level: 51 },
    { type: "kill", pokemon: "Rapidash", expShare: true, level: 52 },
    { type: "kill", pokemon: "Hatterene", expShare: true, level: 53 },

    { type: "kill", pokemon: "Golisopod", expShare: true, level: 51 },
    { type: "kill", pokemon: "Seaking", expShare: true, level: 52 },
    { type: "kill", pokemon: "Pelipper", expShare: true, level: 51 },
    { type: "kill", pokemon: "Barraskewda", expShare: true, level: 52 },
    { type: "kill", pokemon: "Drednaw", expShare: true, level: 53 },

    { type: "kill", pokemon: "Hawlucha", expShare: true, level: 52 },
    { type: "kill", pokemon: "Falinks", expShare: true, level: 53 },
    { type: "kill", pokemon: "Grapploct", expShare: true, level: 52 },
    { type: "kill", pokemon: "Sirfetch’d", expShare: true, level: 53 },
    { type: "kill", pokemon: "Machamp", expShare: true, level: 54 },

    { type: "kill", pokemon: "Torkoal", level: 53 },
    { type: "kill", pokemon: "Turtonator", level: 54 },
    { type: "kill", pokemon: "Flygon", level: 54 },
    { type: "kill", pokemon: "Goodra", level: 54 },
    { type: "kill", pokemon: "Duraludon", level: 55 },
*/
    // Golurk
/*
    { type: "catch", pokemon: "Braviary", expShare: true, level: 55 },
    { type: "catch", pokemon: "Leafeon", expShare: true, level: 56 },
    { type: "catch", pokemon: "Gardevoir", expShare: true, level: 60 },

    { type: "kill", pokemon: "Gardevoir", expShare: true, level: 45 },
    { type: "kill", pokemon: "Pelipper", expShare: true, level: 46 },
    { type: "kill", pokemon: "Noctowl", expShare: true, level: 46 },

    { type: "kill", pokemon: "Gigalith", expShare: true, level: 46 },
    { type: "kill", pokemon: "Rhydon", expShare: true, level: 46 },
    { type: "kill", pokemon: "Darmanitan", expShare: true, level: 46 },
    { type: "kill", pokemon: "Falinks", expShare: true, level: 46 },
    { type: "kill", pokemon: "Grapploct", expShare: true, level: 46 },

    { type: "kill", pokemon: "Liepard", expShare: true, level: 47 },
    { type: "kill", pokemon: "Scrafty", expShare: true, level: 47 },
    { type: "kill", pokemon: "Toxicroak", expShare: true, level: 47 },
    { type: "kill", pokemon: "Morpeko", expShare: true, level: 48 },
    { type: "kill", pokemon: "Grimmsnarl", expShare: true, level: 49 },

    { type: "kill", pokemon: "Dubwool", expShare: true, level: 48 },
    { type: "kill", pokemon: "Snorlax", expShare: true, level: 47 },
    { type: "kill", pokemon: "Corviknight", expShare: true, level: 48 },
    { type: "kill", pokemon: "Pincurchin", expShare: true, level: 47 },
    { type: "kill", pokemon: "Rillaboom", expShare: true, level: 49 },

    { type: "kill", pokemon: "Meowth", expShare: true, level: 47 },
    { type: "kill", pokemon: "Durant", expShare: true, level: 47 },

    { type: "kill", pokemon: "Mawile", expShare: true, level: 47 },
    { type: "kill", pokemon: "Excadrill", expShare: true, level: 47 },
    { type: "kill", pokemon: "Ferroseed", expShare: true, level: 47 },
    { type: "kill", pokemon: "Steelix", expShare: true, level: 47 },
    { type: "kill", pokemon: "Durant", expShare: true, level: 48 },

    { type: "kill", pokemon: "Cufant", expShare: true, level: 48 },
    { type: "kill", pokemon: "Bronzong", expShare: true, level: 48 },
    { type: "kill", pokemon: "Mawile", expShare: true, level: 48 },
    { type: "kill", pokemon: "Klang", expShare: true, level: 48 },
    { type: "kill", pokemon: "Stunfisk", expShare: true, level: 49 },
    { type: "kill", pokemon: "Steelix", expShare: true, level: 49 },

    { type: "kill", pokemon: "Froslass", expShare: true, level: 50 },
    { type: "kill", pokemon: "Salazzle", expShare: true, level: 50 },
    { type: "kill", pokemon: "Tsareena", expShare: true, level: 50 },
    { type: "kill", pokemon: "Milotic", expShare: true, level: 51 },
    { type: "kill", pokemon: "Garbador", expShare: true, level: 52 },

    { type: "kill", pokemon: "Mawile", expShare: true, level: 51 },
    { type: "kill", pokemon: "Gardevoir", expShare: true, level: 51 },
    { type: "kill", pokemon: "Rapidash", expShare: true, level: 52 },
    { type: "kill", pokemon: "Hatterene", expShare: true, level: 53 },

    { type: "kill", pokemon: "Golisopod", expShare: true, level: 51 },
    { type: "kill", pokemon: "Seaking", expShare: true, level: 52 },
    { type: "kill", pokemon: "Pelipper", expShare: true, level: 51 },
    { type: "kill", pokemon: "Barraskewda", expShare: true, level: 52 },
    { type: "kill", pokemon: "Drednaw", expShare: true, level: 53 },

    { type: "kill", pokemon: "Hawlucha", expShare: true, level: 52 },
    { type: "kill", pokemon: "Falinks", expShare: true, level: 53 },
    { type: "kill", pokemon: "Grapploct", expShare: true, level: 52 },
    { type: "kill", pokemon: "Sirfetch’d", expShare: true, level: 53 },
    { type: "kill", pokemon: "Machamp", expShare: true, level: 54 },

    { type: "kill", pokemon: "Torkoal", expShare: true, level: 53 },
    { type: "kill", pokemon: "Turtonator", expShare: true, level: 54 },
    { type: "kill", pokemon: "Flygon", expShare: true, level: 54 },
    { type: "kill", pokemon: "Goodra", expShare: true, level: 54 },
    { type: "kill", pokemon: "Duraludon", expShare: true, level: 55 },

    { type: "kill", pokemon: "Escavalier", level: 55 },
    { type: "kill", pokemon: "Ferrothorn", level: 55 },
    { type: "kill", pokemon: "Perrserker", level: 55 },
    { type: "kill", pokemon: "Klinklang", level: 56 },
    { type: "kill", pokemon: "Copperajah", level: 57 },
 */
    // Braviary

    { type: "catch", pokemon: "Leafeon", expShare: true, level: 56 },
    { type: "catch", pokemon: "Gardevoir", expShare: true, level: 60 },

    { type: "kill", pokemon: "Gardevoir", expShare: true, level: 45 },
    { type: "kill", pokemon: "Pelipper", expShare: true, level: 46 },
    { type: "kill", pokemon: "Noctowl", expShare: true, level: 46 },

    { type: "kill", pokemon: "Gigalith", expShare: true, level: 46 },
    { type: "kill", pokemon: "Rhydon", expShare: true, level: 46 },
    { type: "kill", pokemon: "Darmanitan", expShare: true, level: 46 },
    { type: "kill", pokemon: "Falinks", expShare: true, level: 46 },
    { type: "kill", pokemon: "Grapploct", expShare: true, level: 46 },

    { type: "kill", pokemon: "Liepard", expShare: true, level: 47 },
    { type: "kill", pokemon: "Scrafty", expShare: true, level: 47 },
    { type: "kill", pokemon: "Toxicroak", expShare: true, level: 47 },
    { type: "kill", pokemon: "Morpeko", expShare: true, level: 48 },
    { type: "kill", pokemon: "Grimmsnarl", expShare: true, level: 49 },

    { type: "kill", pokemon: "Dubwool", expShare: true, level: 48 },
    { type: "kill", pokemon: "Snorlax", expShare: true, level: 47 },
    { type: "kill", pokemon: "Corviknight", expShare: true, level: 48 },
    { type: "kill", pokemon: "Pincurchin", expShare: true, level: 47 },
    { type: "kill", pokemon: "Rillaboom", expShare: true, level: 49 },

    { type: "kill", pokemon: "Meowth", expShare: true, level: 47 },
    { type: "kill", pokemon: "Durant", expShare: true, level: 47 },

    { type: "kill", pokemon: "Mawile", expShare: true, level: 47 },
    { type: "kill", pokemon: "Excadrill", expShare: true, level: 47 },
    { type: "kill", pokemon: "Ferroseed", expShare: true, level: 47 },
    { type: "kill", pokemon: "Steelix", expShare: true, level: 47 },
    { type: "kill", pokemon: "Durant", expShare: true, level: 48 },

    { type: "kill", pokemon: "Cufant", expShare: true, level: 48 },
    { type: "kill", pokemon: "Bronzong", expShare: true, level: 48 },
    { type: "kill", pokemon: "Mawile", expShare: true, level: 48 },
    { type: "kill", pokemon: "Klang", expShare: true, level: 48 },
    { type: "kill", pokemon: "Stunfisk", expShare: true, level: 49 },
    { type: "kill", pokemon: "Steelix", expShare: true, level: 49 },

    { type: "kill", pokemon: "Froslass", expShare: true, level: 50 },
    { type: "kill", pokemon: "Salazzle", expShare: true, level: 50 },
    { type: "kill", pokemon: "Tsareena", expShare: true, level: 50 },
    { type: "kill", pokemon: "Milotic", expShare: true, level: 51 },
    { type: "kill", pokemon: "Garbador", expShare: true, level: 52 },

    { type: "kill", pokemon: "Mawile", expShare: true, level: 51 },
    { type: "kill", pokemon: "Gardevoir", expShare: true, level: 51 },
    { type: "kill", pokemon: "Rapidash", expShare: true, level: 52 },
    { type: "kill", pokemon: "Hatterene", expShare: true, level: 53 },
    
    { type: "kill", pokemon: "Golisopod", expShare: true, level: 51 },
    { type: "kill", pokemon: "Seaking", expShare: true, level: 52 },
    { type: "kill", pokemon: "Pelipper", expShare: true, level: 51 },
    { type: "kill", pokemon: "Barraskewda", expShare: true, level: 52 },
    { type: "kill", pokemon: "Drednaw", expShare: true, level: 53 },

    { type: "kill", pokemon: "Hawlucha", level: 52 },
    { type: "kill", pokemon: "Falinks", level: 53 },
    { type: "kill", pokemon: "Grapploct", level: 52 },
    { type: "kill", pokemon: "Sirfetch’d", level: 53 },
    { type: "kill", pokemon: "Machamp", level: 54 },

    // Leafeon
/*
    { type: "catch", pokemon: "Gardevoir", expShare: true, level: 60 },

    { type: "kill", pokemon: "Gardevoir", expShare: true, level: 45 },
    { type: "kill", pokemon: "Pelipper", expShare: true, level: 46 },
    { type: "kill", pokemon: "Noctowl", expShare: true, level: 46 },

    { type: "kill", pokemon: "Gigalith", expShare: true, level: 46 },
    { type: "kill", pokemon: "Rhydon", expShare: true, level: 46 },
    { type: "kill", pokemon: "Darmanitan", expShare: true, level: 46 },
    { type: "kill", pokemon: "Falinks", expShare: true, level: 46 },
    { type: "kill", pokemon: "Grapploct", expShare: true, level: 46 },

    { type: "kill", pokemon: "Liepard", expShare: true, level: 47 },
    { type: "kill", pokemon: "Scrafty", expShare: true, level: 47 },
    { type: "kill", pokemon: "Toxicroak", expShare: true, level: 47 },
    { type: "kill", pokemon: "Morpeko", expShare: true, level: 48 },
    { type: "kill", pokemon: "Grimmsnarl", expShare: true, level: 49 },

    { type: "kill", pokemon: "Dubwool", expShare: true, level: 48 },
    { type: "kill", pokemon: "Snorlax", expShare: true, level: 47 },
    { type: "kill", pokemon: "Corviknight", expShare: true, level: 48 },
    { type: "kill", pokemon: "Pincurchin", expShare: true, level: 47 },
    { type: "kill", pokemon: "Rillaboom", expShare: true, level: 49 },

    { type: "kill", pokemon: "Meowth", expShare: true, level: 47 },
    { type: "kill", pokemon: "Durant", expShare: true, level: 47 },

    { type: "kill", pokemon: "Mawile", expShare: true, level: 47 },
    { type: "kill", pokemon: "Excadrill", expShare: true, level: 47 },
    { type: "kill", pokemon: "Ferroseed", expShare: true, level: 47 },
    { type: "kill", pokemon: "Steelix", expShare: true, level: 47 },
    { type: "kill", pokemon: "Durant", expShare: true, level: 48 },

    { type: "kill", pokemon: "Cufant", expShare: true, level: 48 },
    { type: "kill", pokemon: "Bronzong", expShare: true, level: 48 },
    { type: "kill", pokemon: "Mawile", expShare: true, level: 48 },
    { type: "kill", pokemon: "Klang", expShare: true, level: 48 },
    { type: "kill", pokemon: "Stunfisk", expShare: true, level: 49 },
    { type: "kill", pokemon: "Steelix", expShare: true, level: 49 },

    { type: "kill", pokemon: "Froslass", expShare: true, level: 50 },
    { type: "kill", pokemon: "Salazzle", expShare: true, level: 50 },
    { type: "kill", pokemon: "Tsareena", expShare: true, level: 50 },
    { type: "kill", pokemon: "Milotic", expShare: true, level: 51 },
    { type: "kill", pokemon: "Garbador", expShare: true, level: 52 },

    { type: "kill", pokemon: "Mawile", expShare: true, level: 51 },
    { type: "kill", pokemon: "Gardevoir", expShare: true, level: 51 },
    { type: "kill", pokemon: "Rapidash", expShare: true, level: 52 },
    { type: "kill", pokemon: "Hatterene", expShare: true, level: 53 },
    
    { type: "kill", pokemon: "Golisopod", level: 51 },
    { type: "kill", pokemon: "Seaking", level: 52 },
    { type: "kill", pokemon: "Pelipper", level: 51 },
    { type: "kill", pokemon: "Barraskewda",level: 52 },
    { type: "kill", pokemon: "Drednaw", level: 53 },
*/
    // Gardevoir
/*
    { type: "kill", pokemon: "Gardevoir", expShare: true, level: 45 },
    { type: "kill", pokemon: "Pelipper", expShare: true, level: 46 },
    { type: "kill", pokemon: "Noctowl", expShare: true, level: 46 },

    { type: "kill", pokemon: "Gigalith", expShare: true, level: 46 },
    { type: "kill", pokemon: "Rhydon", expShare: true, level: 46 },
    { type: "kill", pokemon: "Darmanitan", expShare: true, level: 46 },
    { type: "kill", pokemon: "Falinks", expShare: true, level: 46 },
    { type: "kill", pokemon: "Grapploct", expShare: true, level: 46 },

    { type: "kill", pokemon: "Liepard", expShare: true, level: 47 },
    { type: "kill", pokemon: "Scrafty", expShare: true, level: 47 },
    { type: "kill", pokemon: "Toxicroak", expShare: true, level: 47 },
    { type: "kill", pokemon: "Morpeko", expShare: true, level: 48 },
    { type: "kill", pokemon: "Grimmsnarl", expShare: true, level: 49 },

    { type: "kill", pokemon: "Dubwool", expShare: true, level: 48 },
    { type: "kill", pokemon: "Snorlax", expShare: true, level: 47 },
    { type: "kill", pokemon: "Corviknight", expShare: true, level: 48 },
    { type: "kill", pokemon: "Pincurchin", expShare: true, level: 47 },
    { type: "kill", pokemon: "Rillaboom", expShare: true, level: 49 },

    { type: "kill", pokemon: "Meowth", expShare: true, level: 47 },
    { type: "kill", pokemon: "Durant", expShare: true, level: 47 },

    { type: "kill", pokemon: "Mawile", expShare: true, level: 47 },
    { type: "kill", pokemon: "Excadrill", expShare: true, level: 47 },
    { type: "kill", pokemon: "Ferroseed", expShare: true, level: 47 },
    { type: "kill", pokemon: "Steelix", expShare: true, level: 47 },
    { type: "kill", pokemon: "Durant", expShare: true, level: 48 },

    { type: "kill", pokemon: "Cufant", expShare: true, level: 48 },
    { type: "kill", pokemon: "Bronzong", expShare: true, level: 48 },
    { type: "kill", pokemon: "Mawile", expShare: true, level: 48 },
    { type: "kill", pokemon: "Klang", expShare: true, level: 48 },
    { type: "kill", pokemon: "Stunfisk", expShare: true, level: 49 },
    { type: "kill", pokemon: "Steelix", expShare: true, level: 49 },

    { type: "kill", pokemon: "Froslass", level: 50 },
    { type: "kill", pokemon: "Salazzle", level: 50 },
    { type: "kill", pokemon: "Tsareena", level: 50 },
    { type: "kill", pokemon: "Milotic", level: 51 },
    { type: "kill", pokemon: "Garbador", level: 52 },
*/
    // Eternatus
/*
    { type: "kill", pokemon: "AegislashBF", level: 62 }, // Blade Form
    //{ type: "kill", pokemon: "AegislashSF", level: 62 }, // Shield Form
    { type: "kill", pokemon: "MrRime", level: 64 },
    { type: "kill", pokemon: "Haxorus", level: 63 },
    { type: "kill", pokemon: "Inteleon", level: 64 },
    { type: "kill", pokemon: "Dragapult", level: 62 },
    { type: "kill", pokemon: "Charizard", level: 65 },
*/
];

let requiredExperience = {
    "Erratic": [0, 15, 52, 122, 237, 406, 637, 942, 1326, 1800, 2369, 3041, 3822, 4719, 5737, 6881, 8155, 9564, 11111, 12800, 14632, 16610, 18737, 21012, 23437, 26012, 28737, 31610, 34632, 37800, 41111, 44564, 48155, 51881, 55737, 59719, 63822, 68041, 72369, 76800, 81326, 85942, 90637, 95406, 100237, 105122, 110052, 115015, 120001, 125000, 131324, 137795, 144410, 151165, 158056, 165079, 172229, 179503, 186894, 194400, 202013, 209728, 217540, 225443, 233431, 241496, 249633, 257834, 267406, 276458, 286328, 296358, 305767, 316074, 326531, 336255, 346965, 357812, 367807, 378880, 390077, 400293, 411686, 423190, 433572, 445239, 457001, 467489, 479378, 491346, 501878, 513934, 526049, 536557, 548720, 560922, 571333, 583539, 591882, 60000],
    "Fast": [0, 6, 21, 51, 100, 172, 274, 409, 583, 800, 1064, 1382, 1757, 2195, 2700, 3276, 3930, 4665, 5487, 6400, 7408, 8518, 9733, 11059, 12500, 14060, 15746, 17561, 19511, 21600, 23832, 26214, 28749, 31443, 34300, 37324, 40522, 43897, 47455, 51200, 55136, 59270, 63605, 68147, 72900, 77868, 83058, 88473, 94119, 100000, 106120, 112486, 119101, 125971, 133100, 140492, 148154, 156089, 164303, 172800, 181584, 190662, 200037, 209715, 219700, 229996, 240610, 251545, 262807, 274400, 286328, 298598, 311213, 324179, 337500, 351180, 365226, 379641, 394431, 409600, 425152, 441094, 457429, 474163, 491300, 508844, 526802, 545177, 563975, 583200, 602856, 622950, 643485, 664467, 685900, 707788, 730138, 752953, 776239, 800000],
    "Medium Fast": [0, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2197, 2744, 3375, 4096, 4913, 5832, 6859, 8000, 9261, 10648, 12167, 13824, 15625, 17576, 19683, 21952, 24389, 27000, 29791, 32768, 35937, 39304, 42875, 46656, 50653, 54872, 59319, 64000, 68921, 74088, 79507, 85184, 91125, 97336, 103823, 110592, 117649, 125000, 132651, 140608, 148877, 157464, 166375, 175616, 185193, 195112, 205379, 216000, 226981, 238328, 250047, 262144, 274625, 287496, 300763, 314432, 328509, 343000, 357911, 373248, 389017, 405224, 421875, 438976, 456533, 474552, 493039, 512000, 531441, 551368, 571787, 592704, 614125, 636056, 658503, 681472, 704969, 729000, 753571, 778688, 804357, 830584, 857375, 884736, 912673, 941192, 970299, 1000000],
    "Medium Slow": [0, 9, 57, 96, 135, 179, 236, 314, 419, 560, 742, 973, 1261, 1612, 2035, 2535, 3120, 3798, 4575, 5460, 6458, 7577, 8825, 10208, 11735, 13411, 15244, 17242, 19411, 21760, 24294, 27021, 29949, 33084, 36435, 40007, 43808, 47846, 52127, 56660, 61450, 66505, 71833, 77440, 83335, 89523, 96012, 102810, 109923, 117360, 125126, 133229, 141677, 150476, 159635, 169159, 179056, 189334, 199999, 211060, 222522, 234393, 246681, 259392, 272535, 286115, 300140, 314618, 329555, 344960, 360838, 377197, 394045, 411388, 429235, 447591, 466464, 485862, 505791, 526260, 547274, 568841, 590969, 613664, 636935, 660787, 685228, 710266, 735907, 762160, 789030, 816525, 844653, 873420, 902835, 932903, 963632, 995030, 1027103, 1059860],
    "Slow": [0, 10, 33, 80, 156, 270, 428, 640, 911, 1250, 1663, 2160, 2746, 3430, 4218, 5120, 6141, 7290, 8573, 10000, 11576, 13310, 15208, 17280, 19531, 21970, 24603, 27440, 30486, 33750, 37238, 40960, 44921, 49130, 53593, 58320, 63316, 68590, 74148, 80000, 86151, 92610, 99383, 106480, 113906, 121670, 129778, 138240, 147061, 156250, 165813, 175760, 186096, 196830, 207968, 219520, 231491, 243890, 256723, 270000, 283726, 297910, 312558, 327680, 343281, 359370, 375953, 393040, 410636, 428750, 447388, 466560, 486271, 506530, 527343, 548720, 570666, 593190, 616298, 640000, 664301, 689210, 714733, 740880, 767656, 795070, 823128, 851840, 881211, 911250, 941963, 973360, 1005446, 1038230, 1071718, 1105920, 1140841, 1176490, 1212873, 1250000],
    "Fluctuating": [0, 4, 13, 32, 65, 112, 178, 276, 393, 540, 745, 967, 1230, 1591, 1957, 2457, 3046, 3732, 4526, 5440, 6482, 7666, 9003, 10506, 12187, 14060, 16140, 18439, 20974, 23760, 26811, 30146, 33780, 37731, 42017, 46656, 50653, 55969, 60505, 66560, 71677, 78533, 84277, 91998, 98415, 107069, 114205, 123863, 131766, 142500, 151222, 163105, 172697, 185807, 196322, 210739, 222231, 238036, 250562, 267840, 281456, 300293, 315059, 335544, 351520, 373744, 390991, 415050, 433631, 459620, 479600, 507617, 529063, 559209, 582187, 614566, 639146, 673863, 700115, 737280, 765275, 804997, 834809, 877201, 908905, 954084, 987754, 1035837, 1071552, 1122660, 1160499, 1214753, 1254796, 1312322, 1354652, 1415577, 1460276, 1524731, 1571884, 1640000],
};

let experienceYields = {
    "Minccino": 60,
    "Gastrodon": 166,
    "Doublade": 157,
    "Braviary": 179,
    "Natu": 64,
    "Indeedee": 166,
    "Abomasnow": 173,
    "Abra": 62,
    "Absol": 163,
    "AegislashBF": 234,
    "AegislashSF": 234,
    "Alakazam": 225,
    "Alcremie": 173,
    "Alomomola": 165,
    "Araquanid": 159,
    "Arcanine": 194,
    "Archen": 71,
    "Ariados": 140,
    "Aromatisse": 162,
    "Arrokuda": 56,
    "Bagon": 60,
    "Barbaracle": 175,
    "Barraskewda": 172,
    "Bewear": 175,
    "Blipbug": 36,
    "Boldore": 137,
    "Boltund": 172,
    "Bonsly": 58,
    "Bounsweet": 42,
    "Bronzong": 175,
    "Carbink": 100,
    "Carkol": 144,
    "Caterpie": 39,
    "Centiskorch": 184,
    "Chandelure": 234,
    "Charizard": 240,
    "Charjabug": 140,
    "Chewtle": 57,
    "Cinderace": 265,
    "Clefable": 242,
    "Clefairy": 113,
    "Cleffa": 44,
    "Cloyster": 184,
    "Coalossal": 255,
    "Cofagrigus": 169,
    "Comfey": 170,
    "Copperajah": 175,
    "Corphish": 62,
    "Corsola": 144,
    "Corviknight": 248,
    "Corvisquire": 128,
    "Crabrawler": 68,
    "Cramorant": 166,
    "Cranidos": 70,
    "Croagunk": 60,
    "Crobat": 241,
    "Crustle": 170,
    "Cubone": 64,
    "Cufant": 66,
    "Cursola": 179,
    "Cutiefly": 61,
    "Darmanitan": 168,
    "Delibird": 116,
    "Dewpider": 54,
    "Diggersby": 127,
    "Diglett": 53,
    "Dottler": 117,
    "Dragapult": 300,
    "Drapion": 175,
    "Drednaw": 170,
    "Drifblim": 174,
    "Drifloon": 70,
    "Drilbur": 66,
    "Drizzile": 147,
    "Drowzee": 66,
    "Dubwool": 172,
    "Dugtrio": 149,
    "Duosion": 130,
    "Duraludon": 187,
    "Durant": 169,
    "Dusclops": 159,
    "Dusknior": 236,
    "Duskull": 59,
    "Eevee": 65,
    "Eiscue": 165,
    "Ekans": 58,
    "Eldegoss": 161,
    "Elekid": 72,
    "Escavalier": 173,
    "Excadrill": 178,
    "Exeggcute": 65,
    "Falinks": 165,
    "Farfetch’d": 132,
    "Feebas": 40,
    "Ferroseed": 61,
    "Ferrothorn": 171,
    "Fletchinder": 134,
    "Flygon": 260,
    "Fomantis": 50,
    "Froslass": 168,
    "Frosmoth": 168,
    "Furfrou": 165,
    "Gabite": 144,
    "Garbador": 166,
    "Gardevoir": 259,
    "Gastly": 62,
    "Gastrodon": 166,
    "Gengar": 225,
    "Geodude": 60,
    "Gigalith": 258,
    "Glaceon": 184,
    "Golbat": 159,
    "Goldeen": 64,
    "Golduck": 175,
    "Golett": 61,
    "Golisopod": 186,
    "Golurk": 169,
    "Goodra": 300,
    "Goomy": 60,
    "Gossifleur": 50,
    "Gothita": 58,
    "Gothorita": 137,
    "Gourgeist": 173,
    "Granbull": 158,
    "Grapploct": 168,
    "Grimer": 58,
    "Grimmsnarl": 255,
    "Grookey": 62,
    "Growlithe": 70,
    "Grubbin": 60,
    "Gumshoos": 146,
    "Gyarados": 189,
    "Hakamo-o": 147,
    "Hariyama": 166,
    "Hatenna": 53,
    "Hatterene": 255,
    "Hattrem": 130,
    "Haunter": 142,
    "Hawlucha": 175,
    "Haxorus": 243,
    "Heatmor": 169,
    "Herdier": 130,
    "Hitmonchan": 159,
    "Hitmonlee": 159,
    "Hitmontop": 159,
    "Inteleon": 265,
    "Jigglypuff": 95,
    "Kadabra": 140,
    "Kecleon": 154,
    "Klang": 154,
    "Klinklang": 260,
    "Koffing": 68,
    "Komala": 168,
    "Krabby": 65,
    "Krokorok": 123,
    "Lampent": 130,
    "Lanturn": 161,
    "Lapras": 187,
    "Leafeon": 184,
    "Ledian": 137,
    "Liepard": 156,
    "Lillipup": 55,
    "Linoone": 147,
    "Litten": 64,
    "Litwick": 55,
    "Lucario": 184,
    "Lurantis": 168,
    "Luvdisc": 116,
    "Luxio": 127,
    "Luxray": 235,
    "Lycanroc": 170,
    "Machamp": 253,
    "Machop": 61,
    "Magby": 73,
    "Magmar": 173,
    "Magnemite": 65,
    "Magneton": 163,
    "Makuhita": 47,
    "Malamar": 169,
    "Mankey": 61,
    "Mareanie": 61,
    "Mareep": 56,
    "Marowak": 149,
    "Mawile": 133,
    "Meowth": 58,
    "Metang": 147,
    "Metapod": 72,
    "Mienfoo": 70,
    "Mienshao": 179,
    "Milotic": 189,
    "Miltank": 172,
    "Mime Jr.": 62,
    "Mimikyu": 167,
    "Morgrem": 130,
    "Morpeko": 153,
    "MrRime": 182,
    "Mudbray": 77,
    "Mudsdale": 175,
    "Muk": 175,
    "Munchlax": 78,
    "Murkrow": 81,
    "Nickit": 49,
    "NidoranF": 55,
    "Ninetales": 177,
    "Ninjask": 160,
    "Noctowl": 158,
    "Noibat": 49,
    "Nosepass": 75,
    "Nuzleaf": 119,
    "Obstagoon": 260,
    "Onix": 77,
    "Oranguru": 172,
    "Oricorio": 167,
    "Pancham": 70,
    "Pangoro": 173,
    "Passimian": 172,
    "Pawniard": 68,
    "Pelipper": 154,
    "Perrserker": 154,
    "Persian": 154,
    "Petilil": 56,
    "Phantump": 62,
    "Pichu": 41,
    "Pidgey": 50,
    "Pikachu": 112,
    "Pikipek": 53,
    "Pincurchin": 152,
    "Poipole": 189,
    "Poliwhirl": 135,
    "Polteageist": 234,
    "Ponyta": 82,
    "Porygon": 79,
    "Psyduck": 64,
    "Pumpkaboo": 67,
    "Pyukumuku": 144,
    "Raboot": 147,
    "Raichu": 218,
    "Rapidash": 175,
    "Raticate": 145,
    "Rattata": 51,
    "Rhydon": 170,
    "Rhyperior": 241,
    "Ribombee": 162,
    "Rillaboom": 265,
    "Rockruff": 56,
    "Roggenrola": 56,
    "Rolycoly": 49,
    "Rookidee": 49,
    "Roselia": 140,
    "Runerigus": 169,
    "Sableye": 133,
    "Salandit": 64,
    "Salazzle": 168,
    "Sandaconda": 179,
    "Sandshrew": 60,
    "Sandygast": 64,
    "Scolipede": 218,
    "Scorbunny": 62,
    "Scrafty": 171,
    "Scraggy": 70,
    "Seaking": 158,
    "Seedot": 44,
    "Seismitoad": 229,
    "Shieldon": 70,
    "Shiftry": 216,
    "Shiinotic": 142,
    "Shinx": 53,
    "Shuckle": 177,
    "Silicobra": 63,
    "Silvally": 257,
    "Sinistea": 234,
    "Sirfetch’d": 177,
    "Sizzlipede": 61,
    "Skarmory": 163,
    "Skorupi": 66,
    "Skuntank": 168,
    "Skwovet": 55,
    "Sliggoo": 158,
    "Slowbro": 172,
    "Slowpoke": 63,
    "Slurpuff": 168,
    "Smeargle": 88,
    "Sneasel": 86,
    "Snom": 37,
    "Snorlax": 189,
    "Sobble": 62,
    "Solosis": 58,
    "Spearow": 52,
    "Spinarak": 50,
    "Spinda": 126,
    "Spritzee": 68,
    "Staryu": 68,
    "Steelix": 179,
    "Steenee": 102,
    "Stonjourner": 165,
    "Stufful": 68,
    "Stunfisk": 165,
    "Stunky": 66,
    "Sudowoodo": 144,
    "Swirlix": 68,
    "Sylveon": 184,
    "Talonflame": 175,
    "Tauros": 172,
    "Tentacruel": 180,
    "Thievul": 159,
    "Thwackey": 147,
    "Tirtouga": 71,
    "Togedemaru": 152,
    "Togekiss": 273,
    "Torkoal": 165,
    "Torracat": 147,
    "Toxel": 48,
    "Toxicroak": 172,
    "Trevenant": 166,
    "Tropius": 161,
    "Trubbish": 66,
    "Trumbeak": 124,
    "Tsareena": 255,
    "Turtonator": 170,
    "Tympole": 59,
    "Type: Null": 107,
    "Umbreon": 184,
    "Venipede": 52,
    "Vespiquen": 166,
    "Vikavolt": 225,
    "Vulpix": 60,
    "Weavile": 179,
    "Weedle": 39,
    "Weezing": 172,
    "Whirlipede": 126,
    "Whiscash": 164,
    "Wigglytuff": 196,
    "Wimpod": 46,
    "Wishiwashi-School": 217,
    "Wishiwashi": 61,
    "Wooloo": 122,
    "Yamask": 61,
    "Yamper": 54,
    "Yungoos": 51,
    "Zigzagoon": 56,
    "Zoroark": 179,
    "Zorua": 66,
    "Zubat": 49,
    "Combee": 49,
};

let evYields = {
    "Gastrodon": {hp: 2},
    "Doublade": {def: 2},
    "Golurk": {atk: 2},
    "Braviary": {atk: 2},
    "Leafeon": {def: 2},
    "Natu": {spAtk: 1},
    "Indeedee": {spAtk: 2},
    "Minccino": {spd: 1},
    "Abomasnow": {atk: 1, spAtk: 1},
    "AegislashBF": {atk: 2, spAtk: 1},
    "AegislashSF": {def: 2, spDef: 1},
    "Alcremie": {spDef: 2},
    "Arcanine": {atk: 2},
    "Aromatisse": {hp: 2},
    "Arrokuda": {spd: 1},
    "Barbaracle": {atk: 2},
    "Barraskewda": {spd: 2},
    "Bewear": {atk: 2},
    "Blipbug": {spDef: 1},
    "Boldore": {atk: 1, def: 1},
    "Boltund": {spd: 2},
    "Bronzong": {def: 1, spDef: 1},
    "Carkol": {def: 2},
    "Centiskorch": {atk: 2},
    "Chandelure": {spAtk: 3},
    "Charizard": {spAtk: 3},
    "Chewtle": {atk: 1},
    "Cinderace": {spd: 3},
    "Clefable": {hp: 3},
    "Clefairy": {hp: 2},
    "Coalossal": {def: 3},
    "Cofagrigus": {def: 2},
    "Copperajah": {atk: 2},
    "Corphish": {atk: 1},
    "Corsola": {def: 1, spDef: 1},
    "Corviknight": {def: 3},
    "Corvisquire": {spd: 2},
    "Cramorant": {spDef: 2},
    "Croagunk": {atk: 1},
    "Crustle": {def: 2},
    "Cufant": {atk: 1},
    "Cursola": {spAtk: 2},
    "Darmanitan": {atk: 2},
    "Diggersby": {hp: 2},
    "Diglett": {spd: 1},
    "Dottler": {spDef: 2},
    "Dragapult": {spd: 3},
    "Drapion": {def: 2},
    "Drednaw": {atk: 2},
    "Drifblim": {hp: 2},
    "Drifloon": {hp: 1},
    "Drilbur": {atk: 1},
    "Drizzile": {spAtk: 2},
    "Dubwool": {def: 2},
    "Duosion": {spAtk: 2},
    "Duraludon": {spAtk: 2},
    "Durant": {def: 2},
    "Dusclops": {def: 1, spDef: 1},
    "Dusknior": {def: 1, spDef: 2},
    "Duskull": {spDef: 1},
    "Eiscue": {def: 2},
    "Eldegoss": {spDef: 2},
    "Escavalier": {atk: 2},
    "Excadrill": {atk: 2},
    "Falinks": {atk: 2, spDef: 1},
    "Farfetch’d": {atk: 1},
    "Ferroseed": {def: 1},
    "Ferrothorn": {def: 2},
    "Flygon": {atk: 1, spd: 2},
    "Froslass": {spd: 2},
    "Frosmoth": {spAtk: 2},
    "Garbador": {atk: 2},
    "Gardevoir": {spAtk: 3},
    "Gastly": {spAtk: 1},
    "Gengar": {spAtk: 3},
    "Gigalith": {atk: 3},
    "Goldeen": {atk: 1},
    "Golett": {atk: 1},
    "Golisopod": {def: 2},
    "Goodra": {spDef: 3},
    "Gossifleur": {spDef: 1},
    "Gothita": {spDef: 1},
    "Gothorita": {spDef: 2},
    "Gourgeist": {def: 2},
    "Grapploct": {atk: 2},
    "Grimmsnarl": {atk: 3},
    "Grookey": {atk: 1},
    "Hakamo-o": {def: 2},
    "Hatenna": {spAtk: 1},
    "Hatterene": {spAtk: 3},
    "Hattrem": {spAtk: 2},
    "Haunter": {spAtk: 2},
    "Hawlucha": {atk: 2},
    "Haxorus": {atk: 3},
    "Heatmor": {spAtk: 2},
    "Hitmonchan": {spDef: 2},
    "Hitmonlee": {atk: 2},
    "Hitmontop": {spDef: 2},
    "Inteleon": {spd: 3},
    "Klang": {def: 2},
    "Klinklang": {def: 3},
    "Koffing": {def: 1},
    "Krabby": {atk: 1},
    "Lampent": {spAtk: 2},
    "Lapras": {hp: 2},
    "Liepard": {spd: 2},
    "Linoone": {spd: 2},
    "Litwick": {spAtk: 1},
    "Luxio": {atk: 2},
    "Luxray": {atk: 3},
    "Machamp": {atk: 3},
    "Malamar": {atk: 2},
    "Mawile": {atk: 1, def: 1},
    "Meowth": {def: 1},
    "Mienfoo": {atk: 1},
    "Mienshao": {atk: 2},
    "Milotic": {spDef: 2},
    "Mimikyu": {spDef: 2},
    "Morgrem": {spAtk: 2},
    "Morpeko": {spd: 2},
    "MrRime": {spAtk: 3},
    "Mudbray": {atk: 1},
    "Nickit": {spDef: 1},
    "Ninetales": {spDef: 1, spd: 1},
    "Ninjask": {spd: 2},
    "Noctowl": {hp: 2},
    "Nuzleaf": {atk: 2},
    "Obstagoon": {def: 3},
    "Onix": {def: 1},
    "Pancham": {atk: 1},
    "Pangoro": {atk: 2},
    "Pawniard": {atk: 1},
    "Pelipper": {def: 2},
    "Perrserker": {atk: 2},
    "Phantump": {atk: 1},
    "Pincurchin": {atk: 2},
    "Polteageist": {spAtk: 2},
    "Ponyta": {spd: 1},
    "Pumpkaboo": {def: 1},
    "Raboot": {spd: 2},
    "Rapidash": {spd: 2},
    "Rhydon": {atk: 2},
    "Rhyperior": {atk: 3},
    "Rillaboom": {atk: 3},
    "Rolycoly": {def: 1},
    "Rookidee": {spd: 1},
    "Roselia": {spAtk: 2},
    "Runerigus": {def: 2},
    "Sableye": {atk: 1, def: 1},
    "Salazzle": {spd: 2},
    "Sandaconda": {def: 2},
    "Scolipede": {def: 3},
    "Scorbunny": {spd: 1},
    "Scrafty": {def: 1, spDef: 1},
    "Scraggy": {atk: 1},
    "Seaking": {atk: 2},
    "Seedot": {atk: 1},
    "Seismitoad": {hp: 3},
    "Shiftry": {atk: 3},
    "Shinx": {atk: 1},
    "Shuckle": {def: 1, spDef: 1},
    "Silicobra": {def: 1},
    "Sinistea": {spAtk: 1},
    "Sirfetch’d": {atk: 2},
    "Sizzlipede": {atk: 1},
    "Skorupi": {def: 1},
    "Skuntank": {hp: 2},
    "Skwovet": {hp: 1},
    "Sliggoo": {spDef: 2},
    "Slowbro": {def: 2},
    "Slowpoke": {hp: 1},
    "Slurpuff": {def: 2},
    "Snom": {spAtk: 1},
    "Snorlax": {hp: 2},
    "Sobble": {spDef: 1, spd: 1},
    "Solosis": {spAtk: 1},
    "Spritzee": {hp: 1},
    "Steelix": {def: 2},
    "Stonjourner": {def: 2},
    "Stufful": {atk: 1},
    "Stunfisk": {hp: 2},
    "Stunky": {spd: 1},
    "Sudowoodo": {def: 2},
    "Swirlix": {def: 1},
    "Thievul": {spDef: 2},
    "Thwackey": {atk: 2},
    "Togekiss": {spAtk: 2, spDef: 1},
    "Torkoal": {def: 2},
    "Toxel": {spAtk: 1},
    "Toxicroak": {atk: 2},
    "Trevenant": {atk: 2},
    "Tsareena": {atk: 3},
    "Turtonator": {def: 2},
    "Tympole": {spd: 1},
    "Venipede": {def: 1},
    "Vespiquen": {def: 1, spDef: 1},
    "Vulpix": {spd: 1},
    "Weavile": {atk: 1, spd: 1},
    "Weezing": {def: 2},
    "Whirlipede": {def: 2},
    "Wooloo": {def: 1},
    "Yamask": {def: 1},
    "Yamper": {hp: 1},
    "Zigzagoon": {spd: 1},
    "Combee": {spd: 1},
};

processActions(route);

function computeExperienceForLevel(level, curve) {
    return requiredExperience[curve][level - 1];
}

function gamefreakSqrt(n) {
    let actualSqrt = Math.sqrt(n);
    let lowerBound = Math.floor(actualSqrt);
    if (lowerBound * lowerBound === n) {
        return lowerBound * 4096;
    }

    let bestCoeff = 0;
    let bestDistance = actualSqrt - lowerBound;
    for (let i = 1; i <= 4096; i++) {
        let check = lowerBound + i / 4096;
        let distance = Math.abs(actualSqrt - check);
        if (distance < bestDistance) {
            bestCoeff = i;
            bestDistance = distance;
        }
    }
    return lowerBound * 4096 + bestCoeff;
}

function getExperienceForKill(foeName, foeLevel, level, luckyEgg, affection, rotoExp, expShare, tradeExp, evolutionDue) {
    let expYield = experienceYields[foeName];

    if (typeof expYield === "undefined") {
        throw new Error("Unknown Pokémon: " + foeName);
    }

    let x = foeLevel + foeLevel + 10;
    let y = foeLevel + level + 10;

    let x2 = x * x;
    let y2 = y * y;

    let z = Math.floor(expYield * foeLevel / 5);
    if (expShare) {
        z = Math.floor(z / 2);
    }

    let exp = Math.floor(((gamefreakSqrt(x) * x2) * z) / ((gamefreakSqrt(y) * y2))) + 1;

    // console.log(exp);

    if (tradeExp) {
        exp = Math.floor(exp * 1.5);
    }

    if (luckyEgg) {
        exp = Math.floor(exp * 1.5);
    }

    if (affection) {
        exp = exp * 4915;
        exp = Math.round(exp / 4096)
    }

    if (evolutionDue) {
        exp = exp * 4915;
        exp = Math.round(exp / 4096)
    }

    if (rotoExp) {
        exp = exp * 150;
        exp = Math.floor(exp / 100);
    }

    return Math.floor(exp);
}

function processActions(actions) {

    if (!actions || !actions[0] || actions[0].type !== "init") {
        throw new Error("First action must be init");
    }

    let affectionBoost = false;
    let luckyEgg = false;
    let rotoExp = false;
    let tradeExp = !!actions[0].tradeExp;

    let pokemonName = actions[0].name;
    let currentLevel = actions[0].level;
    let curve = actions[0].curve;
    let stage = 1;
    let evolution1 = actions[0].evolution1;
    let evolution2 = actions[0].evolution2;
    let evolution1Name = actions[0].evolution1Name;
    let evolution2Name = actions[0].evolution2Name;
    let currentExp = computeExperienceForLevel(currentLevel, curve);
    let currentHpEvs = 0;
    let currentAtkEvs = 0;
    let currentDefEvs = 0;
    let currentSpAtkEvs = 0;
    let currentSpDefEvs = 0;
    let currentSpdEvs = 0;
    let currentItem = "";

    function printDumpFormat() {
        if (currentItem) {
            console.log(`${pokemonName} (Lv. ${currentLevel}) @${currentItem} (Nature: Rash) (Moves: (None)/(None)/(None)/(None)) IVs: 31/31/31/31/31/31 EVs: ${currentHpEvs}/${currentAtkEvs}/${currentDefEvs}/${currentSpAtkEvs}/${currentSpDefEvs}/${currentSpdEvs}`);
        } else {
            console.log(`${pokemonName} (Lv. ${currentLevel})  (Nature: Hardy) (Moves: (None)/(None)/(None)/(None)) IVs: 31/31/31/31/31/31 EVs: ${currentHpEvs}/${currentAtkEvs}/${currentDefEvs}/${currentSpAtkEvs}/${currentSpDefEvs}/${currentSpdEvs}`);
        }
    }

    function printIvCalcFormat() {
        if (rangerFormat) {
            console.log(`${currentLevel} -> ${currentHpEvs}, ${currentAtkEvs}, ${currentDefEvs}, ${currentSpAtkEvs}, ${currentSpDefEvs}, ${currentSpdEvs}`);
        } else {
            console.log(`${currentLevel}\t${currentHpEvs}\t${currentAtkEvs}\t${currentDefEvs}\t${currentSpAtkEvs}\t${currentSpDefEvs}\t${currentSpdEvs}`);
        }
    }

    for (let i = 1; i < actions.length; ++i) {
        let action = actions[i];
        if (!action) {
            continue;
        }
        switch (action.type) {
            case "kill":
            case "catch":
                let evolutionDue = false;
                if ((stage === 1 && evolution1 && evolution1 <= currentLevel) || (stage <= 2 && evolution2 && evolution2 <= currentLevel)) {
                    evolutionDue = true;
                    if (!EVsOnly) {
                        console.log("[LEVEL BONUS]");
                    }
                }

                let receivedExp = action.overrideExperience;
                if (typeof receivedExp === "undefined") {
                    receivedExp = getExperienceForKill(action.pokemon, action.level, currentLevel, luckyEgg, affectionBoost, rotoExp, !!action.expShare, tradeExp, evolutionDue);
                }
                if (!EVsOnly) {
                    if (action.type === "kill") {
                        console.log(`[KILL]: Got ${receivedExp} Exp for killing Lv. ${action.level} ${action.pokemon}`);
                    } else {
                        console.log(`[CATCH]: Got ${receivedExp} Exp for catching Lv. ${action.level} ${action.pokemon}`);
                    }
                }

                if (evYields[action.pokemon]) {
                    for (let stat in evYields[action.pokemon]) {
                        if (evYields[action.pokemon].hasOwnProperty(stat)) {
                            switch (stat) {
                                case "hp": currentHpEvs += evYields[action.pokemon][stat]; break;
                                case "atk": currentAtkEvs += evYields[action.pokemon][stat]; break;
                                case "def": currentDefEvs += evYields[action.pokemon][stat]; break;
                                case "spAtk": currentSpAtkEvs += evYields[action.pokemon][stat]; break;
                                case "spDef": currentSpDefEvs += evYields[action.pokemon][stat]; break;
                                case "spd": currentSpdEvs += evYields[action.pokemon][stat]; break;
                            }
                        }
                    }
                    if (!EVsOnly) {
                        console.log("EV yield: " + JSON.stringify(evYields[action.pokemon]));
                    }
                } else {
                    console.warn("Could not find EV Yield for: " + action.pokemon);
                }

                currentExp += receivedExp;

                if (!action.skipLevel) {
                    while (currentLevel < 100 && computeExperienceForLevel(currentLevel + 1, curve) <= currentExp) {
                        ++currentLevel;
                        if (!EVsOnly) {
                            console.log(`[LEVELUP] Now level ${currentLevel}`);
                        }
                        printIvCalcFormat();
                    }
                }
                if (!EVsOnly) {
                    printDumpFormat();
                }

                break;
            case "evolve":
                ++stage;
                if (stage === 2) {
                    pokemonName = evolution1Name;
                } else if (stage === 3) {
                    pokemonName = evolution2Name;
                }
                if (!EVsOnly) {
                    console.log(`[EVOLUTION]`);
                    printDumpFormat();
                }
                break;

            case "affection-boost":
                affectionBoost = !!action.value;
                if (!EVsOnly) {
                    console.log(`[AFFECTION BOOST] ${affectionBoost}`);
                }
                break;

            case "roto-exp":
                rotoExp = !!action.value;
                if (!EVsOnly) {
                    console.log(`[ROTO EXP] ${rotoExp}`);
                }
                break;

            case "rare-candy":
                currentExp = computeExperienceForLevel(currentLevel + 1, curve);
                ++currentLevel;
                if (!EVsOnly) {
                    console.log(`[RARE CANDY] Now level ${currentLevel}`);
                }
                printIvCalcFormat();
                if (!EVsOnly) {
                    printDumpFormat();
                }
                break;

            case "exp-candy":
                currentExp += action.experience;

                if (!EVsOnly) {
                    console.log(`[EXP CANDY] Added ${action.experience} Exp`);
                }

                while (currentLevel < 100 && computeExperienceForLevel(currentLevel + 1, curve) <= currentExp) {
                    ++currentLevel;
                    if (!EVsOnly) {
                        console.log(`[LEVELUP] Now level ${currentLevel}`);
                    }
                    printIvCalcFormat();
                }
                if (!EVsOnly) {
                    printDumpFormat();
                }
                break;

            case "item-equip":
                if (currentItem === "Lucky Egg" && action.item !== "Lucky Egg") {
                    luckyEgg = false;
                }

                currentItem = action.item || "";
                if (!EVsOnly) {
                    console.log("[ITEM EQUIP] " + (currentItem || "(none)"));
                }

                if (currentItem === "Lucky Egg") {
                    luckyEgg = true;
                }
                break;

            case "ev-gain":
                currentHpEvs+= action.hp || 0;
                currentAtkEvs+= action.atk || 0;
                currentDefEvs+= action.def || 0;
                currentSpAtkEvs+= action.spAtk || 0;
                currentSpDefEvs+= action.spDef || 0;
                currentSpdEvs+= action.spd || 0;
                printIvCalcFormat();
                if (!EVsOnly) {
                    printDumpFormat();
                }
                break;
        }

        let addendum = "";
        if (currentLevel < 100) {
            let currentLevelExp = computeExperienceForLevel(currentLevel, curve);
            let nextLevelExp = computeExperienceForLevel(currentLevel + 1, curve);

            let percentage = (currentExp - currentLevelExp) / (nextLevelExp - currentLevelExp);
            addendum = " (" + (percentage * 100).toFixed(2) + "%)";
        }
        if (!EVsOnly) {
            console.log("Current Exp: " + currentExp + addendum);
            console.log();
        }
    }

    return currentExp;
}