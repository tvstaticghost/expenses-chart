const jsonData = [
    { "day": "mon", "amount": 17.45 },
    { "day": "tue", "amount": 34.91 },
    { "day": "wed", "amount": 52.36 },
    { "day": "thu", "amount": 31.07 },
    { "day": "fri", "amount": 23.39 },
    { "day": "sat", "amount": 43.28 },
    { "day": "sun", "amount": 25.48 }
];

const monData = jsonData.find(data => data.day === 'mon');
const tueData = jsonData.find(data => data.day === 'tue');
const wedData = jsonData.find(data => data.day === 'wed');
const thuData = jsonData.find(data => data.day === 'thu');
const friData = jsonData.find(data => data.day === 'fri');
const satData = jsonData.find(data => data.day === 'sat');
const sunData = jsonData.find(data => data.day === 'sun');

function updateBarSize() {
    const monBar = document.getElementById('mon-bar');
    const tueBar = document.getElementById('tue-bar');
    const wedBar = document.getElementById('wed-bar');
    const thuBar = document.getElementById('thu-bar');
    const friBar = document.getElementById('fri-bar');
    const satBar = document.getElementById('sat-bar');
    const sunBar = document.getElementById('sun-bar');

    monBar.style.height = `${monData.amount * 2.5}px`;
    tueBar.style.height = `${tueData.amount * 2.5}px`;
    wedBar.style.height = `${wedData.amount * 2.5}px`;
    thuBar.style.height = `${thuData.amount * 2.5}px`;
    friBar.style.height = `${friData.amount * 2.5}px`;
    satBar.style.height = `${satData.amount * 2.5}px`;
    sunBar.style.height = `${sunData.amount * 2.5}px`;
}

updateBarSize();

let today = new Date();
let dayOfWeek = today.getDay();
let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

let currentDay = daysOfWeek[dayOfWeek];

if (currentDay === 'Sunday') {
    document.getElementById('mon-bar').style.backgroundColor = 'var(--clr-cyan)';
}
else if (currentDay === 'Tuesday') {
    document.getElementById('tue-bar').style.backgroundColor = 'var(--clr-cyan)';
}
else if (currentDay === 'Wednesday') {
    document.getElementById('wed-bar').style.backgroundColor = 'var(--clr-cyan)';
}
else if (currentDay === 'Thursday') {
    document.getElementById('thu-bar').style.backgroundColor = 'var(--clr-cyan)';
}
else if (currentDay === 'Friday') {
    document.getElementById('fri-bar').style.backgroundColor = 'var(--clr-cyan)';
}
else if (currentDay === 'Saturday') {
    document.getElementById('sat-bar').style.backgroundColor = 'var(--clr-cyan)';
}
else if (currentDay === 'Sunday') {
    document.getElementById('sun-bar').style.backgroundColor = 'var(--clr-cyan)';
}

let parentDiv = document.getElementById('bar-parent');
let lastItem = parentDiv.lastElementChild;
let childDivs = parentDiv.querySelectorAll('div');
let newDiv = document.createElement('div');

childDivs.forEach(function(childDiv) {
    childDiv.addEventListener('mouseover', () => {
        childDiv.style.opacity = '0.5';
    })
    childDiv.addEventListener('mouseout', () => {
        childDiv.style.opacity = '1';
    })
})
