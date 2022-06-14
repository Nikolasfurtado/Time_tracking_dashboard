function showday() {

    const week = document.querySelectorAll('.weekshow');
    const month = document.querySelectorAll('.monthshow');
    const color = document.getElementById('container');

    color.style.color = "white";

    week.forEach(element => {
        element.textContent = '';
    });
    month.forEach(element => {
        element.textContent = '';
    });

}

function showweek() {

    const week = document.querySelectorAll('.dayshow');
    const month = document.querySelectorAll('.monthshow');

    week.forEach(element => {
        element.textContent = '';
    });
    month.forEach(element => {
        element.textContent = '';
    });
}

function showmonth() {

    const week = document.querySelectorAll('.dayshow');
    const month = document.querySelectorAll('.weekshow');

    week.forEach(element => {
        element.textContent = '';
    });
    month.forEach(element => {
        element.textContent = '';
    });

}

function reload() {
    document.location.reload(true);

}