
function getGreeting() {
    const date = new Date();
    const hour = date.getHours();
    
    let greeting;
    if (hour >=4 && hour <=10) {                // setting the greeting according to the day part
        greeting = 'בוקר טוב';
    } else if (hour >= 11 && hour <=16) {
        greeting = 'צהריים טובים';
    } else if (hour >= 17 && hour <=20) {
        greeting = 'ערב טוב';
    } else {
        greeting = 'לילה טוב';
    }
    
    return greeting;
}

export default getGreeting;