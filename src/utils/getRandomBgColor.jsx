
function getRandomBgColor(props) {
    
    const bgColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
    const randomBgColor = bgColors[Math.floor(Math.random() * bgColors.length)];

    return randomBgColor;
}

export default getRandomBgColor;