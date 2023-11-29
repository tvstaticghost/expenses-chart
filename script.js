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