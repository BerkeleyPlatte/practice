const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(empireStateBuilding.stories, empireStateBuilding.height, empireStateBuilding.squareFeet,
    empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength);

    const add = "address";
    const con = "constructionDate";
    const cos = "cost";
    const own = "owner";
    const arc = "architect";

// console.log(add, con, cos, own, arc);

console.log(empireStateBuilding["address"], empireStateBuilding["constructionDate"], empireStateBuilding["cost"], empireStateBuilding["owner"], empireStateBuilding["architect"], );

// console.log(empireStateBuilding[]);



const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log(nashvilleSoftwareSchool.instructors.fullTime + "," + nashvilleSoftwareSchool.instructors.partTime);

console.log(nashvilleSoftwareSchool.instructors.fullTime[4] + "," + nashvilleSoftwareSchool.instructors.partTime[0]);