const convertMiToKm = (miles) => Math.floor(miles * 1.60934);

const total = (arr, prop) =>
    arr.reduce((num, obj) =>
        typeof num === "number" ? num + parseInt(obj[prop]) : 0
    );

const filterByYear = (arr, prop, year) =>
    arr.filter((elem) => new Date(elem[prop]).getFullYear() === year);
