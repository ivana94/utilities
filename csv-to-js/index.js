const app = require("express")();
const fs = require("fs");

const input = require("./input");

const split = (on) => (value) => value.split(on);
const splitOnBlankLine = split("\n");
const splitOnComma = split(",");
const trim = (item) => item.trim();

const columnNamesToProperties = (arr) => {
    const initialValue = {};
    return arr[0].reduce((obj, item, index) => {
        return {
            ...obj,
            [index]: item,
        };
    }, initialValue);
};

const arrOfDataToObj = (arr, legend) => {
    const initialValue = {};
    return arr.reduce((obj, item, index) => {
        return {
            ...obj,
            [legend[index]]: arr[index],
        };
    }, initialValue);
};

const arrOfStrToArrOfObj = (arr) =>
    arr.map((elem) => arrOfDataToObj(elem, legend));

const data = splitOnBlankLine(input("./steps.csv")).map(trim).map(splitOnComma);
const legend = columnNamesToProperties(data);

module.exports = arrOfStrToArrOfObj(data);
