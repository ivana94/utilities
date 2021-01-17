// checks if date is weekday. returns true if yes
const isWeekday = (d) => d.getDay() % 6 !== 0;

const addDaysToDate = (date, daysToAdd) => {
    date.setDate(date.getDate() + daysToAdd);
    return date.toLocaleString();
};

const timeFromDate = (date) => date.toTimeString().slice(0, 8);

const determineDayOfWeek = (date) =>
    [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ][date.getDay()];
