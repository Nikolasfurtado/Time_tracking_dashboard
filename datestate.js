function showresult() {

    const day = document.querySelectorAll('.dayshow');


    day.forEach(element => {
        element.textContent = 'display:none';

    });
    /*

        const day = document.querySelector('.dayshow');

        day.classList.replace('dayshow', 'hide');
    */
}


/*

   test1.innerHTML("fuckinworking");

day.forEach(dayshow => {
    day.style.display = 'none';
});

var day = document.querySelectorAll(".dayshow");
day.forEach(showday);

function showday() {
    day.innerHTML("ola")
}
    day.forEach(dayshow => {
        day.style.display = 'none';
    });

    var sv = document.getElementById("secondscreen");
    day.style.display = 'none';
    sv.style.display = 'grid';
*/