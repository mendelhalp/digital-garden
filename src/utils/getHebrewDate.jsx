const unitsNames = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];       // setting array of units for GIMATRIA
const tensNames = ['י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];        // setting array of tens for GIMATRIA


// this function checking if the hebrew year is leap year
function isLeapYear(year) {
    const restForLeapYears = [0, 3, 6, 8, 11, 14, 17];
    return (restForLeapYears.includes(year % 19));
}

// this function returns the hebrew year in hebrew letters
function getHebrewYearName(yearNum) {

    let year = yearNum % 1000;                                  // droping the thousands
    let yearArr = [];
    const taf = parseInt(year / 400);                           // dividing the Hundreds by 400, 300, 200, 100 and push the correct letter to the array
    for (let i = 0; i < taf ; i++) {
    yearArr.push('ת');
    }
    year = year % 400;
    parseInt(year / 300) !== 0 && yearArr.push('ש');
    year = year % 300;
    parseInt(year / 200) !== 0 && yearArr.push('ר');
    year = year % 200;
    parseInt(year / 100) !== 0 && yearArr.push('ק');
    year = year % 100;
    
    parseInt(year / 10) !== 0 && yearArr.push(tensNames[parseInt(year / 10) - 1]);      // calculating the tens & untits GIMATRIA
    (year % 10) !== 0 && yearArr.push(unitsNames[year % 10 - 1]);

    yearArr.length > 1 ? yearArr.splice(-1, 0, '"') : yearArr.push("'");    // adding QUOTATION MARK before the last letter, or APOSTROPHE when only 1 letter

    const yearName = yearArr.join('');                                      // convertin the array to string

    return(yearName)
}

function getHebrewMonthName(monthNum, yearNum) {
    // setting array of hebrew months names for normal and leap year
    const monthNamesOfNormalYear = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
    const monthNamesOfLeapYear = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר א', 'אדר ב', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
    const monthName = isLeapYear(yearNum) ? monthNamesOfLeapYear[monthNum -1] : monthNamesOfNormalYear[monthNum -1];

    return monthName;
}

function getHebrewDateName(dateNum) {
    let dateArr = [];
    parseInt(dateNum / 10) !== 0 && dateArr.push(tensNames[parseInt(dateNum / 10) - 1]);      // calculating the tens & untits GIMATRIA
    (dateNum % 10) !== 0 && dateArr.push(unitsNames[dateNum % 10 - 1]);

    dateArr.length > 1 ? dateArr.splice(-1, 0, '"') : dateArr.push("'");    // adding QUOTATION MARK before the last letter, or APOSTROPHE when only 1 letter

    let dateName = dateArr.join('');                                        // convertin the array to string

    if (dateName === 'י"ה') {                                               // handling exeptions for ט"ו & ט"ז
        dateName = 'ט"ו'
    } else if (dateName === 'י"ו') {
        dateName = 'ט"ז'
    }

    return(dateName)
}

function getHebrewDate(dateObj) {
    const hebrewDate = require('hebrew-date');
    const { year, month, date } = hebrewDate(dateObj);
    
    const HebrewYearName = getHebrewYearName(year);
    const hebrewMonthName = getHebrewMonthName(month, year);
    const hebrewDateName = getHebrewDateName(date);
    const hebrewDateStr = hebrewDateName + ' ' + hebrewMonthName + ' ' + HebrewYearName;

    return (hebrewDateStr);
}

export default getHebrewDate;