console.log("REDUCE STRING")

const cities = [
    "Vancouver",
    "Berlin",
    "Seattle",
    "Toronto"
];

const concatCities = cities.reduce(
    (concatStrings, city) => {
            if (city === "Vancouver") {
                return concatStrings;
            }
        return concatStrings + city + "-";
    }, ""
);

console.log(concatCities);
// Berlin-Seattle-Toronto-


console.log("---");


