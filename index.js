// Code your solution here








function findMatching(drivers, name){   //iterates through an array and returns drivers matching a particular name
    const matchingDriver = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return matchingDriver;
}

function fuzzyMatch(drivers, ch){  //returns drivers match the argument passed
    const matchingNames = drivers.filter(driver => driver.slice(0, 2).toLowerCase() === ch.toLowerCase());
    return matchingNames;
}

function matchName(drivers, str){ //returns an array of drivers that match the given argument
    const matchingNames = drivers.filter(driver => driver.name.toLowerCase() === str.toLowerCase());
    return matchingNames;
}




//const result = words.filter(word => word.length > 6);
