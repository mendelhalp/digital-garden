function isLeapYear(year) {
    const restForLeapYears = [0, 3, 6, 8, 11, 14, 17];
    return (restForLeapYears.includes(year % 19));
}

function getHebrewYearName(yearNum) {
    const unitsNames = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];
    const tensNames = ['י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ']

    let yearName;
    let year = yearNum % 1000;
    const taf = parseInt(year / 400);
    year = year % 400;
    const shin = parseInt(year / 300);
    year = year % 300;
    const reish = parseInt(year / 200);
    year = year % 200;
    const kuf = parseInt(year / 100);
    year = year % 100;

    yearName = taf > 1 ? 'תת' : taf === 1 ? 'ת' : '';
    yearName += shin === 1 ? 'ש' : '';
    yearName += reish === 1 ? 'ר' : '';
    if (year !== 0 && year % 10 !== 0) {
        yearName += tensNames[parseInt(year / 10) - 1];
        yearName += '"';
        yearName += unitsNames[year % 10 - 1];
    } else if (year !== 0) {
        yearName += '"';
        yearName += tensNames[parseInt(year / 10) - 1];
    } else {
        yearName += "'";
    }

    return(yearName)
}

function getHebrewDate(dateObj) {
    const hebrewDate = require('hebrew-date');
    const { year, month, date } = hebrewDate(dateObj);
    
    const monthNamesOfNonLeapYear = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
    const monthNamesOfLeapYear = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר א', 'אדר ב', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
    
    const dateNames = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'י"א', 'י"ב', 'י"ג', 'י"ד'
    , 'ט"ו', 'ט"ז', 'י"ז', 'י"ח', 'י"ט', 'כ', 'כ"א', 'כ"ב', 'כ"ג', 'כ"ד', 'כ"ה', 'כ"ו', 'כ"ז', 'כ"ח', 'כ"ט', 'ל'];
    
    const HebrewYearName = getHebrewYearName(year);
    const hebrewMonthName = isLeapYear(year) ? monthNamesOfLeapYear[month -1] : monthNamesOfNonLeapYear[month -1];
    const hebrewDateName = dateNames[date -1];
    const hebrewDateStr = hebrewDateName + ' ' + hebrewMonthName + ' ' + HebrewYearName;

    return (hebrewDateStr);
}

export default getHebrewDate;