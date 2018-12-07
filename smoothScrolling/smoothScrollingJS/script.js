let index = 0; // link aangeven welke active moet zijn voor de oogjes
let main = document.querySelector('.inhoud');
let links = document.querySelectorAll('.nav__content');
let allLinksArr =[];
links.forEach( (item) => {
    item.addEventListener('click', (e) =>{
        index = allLinksArr.indexOf(item);
        activate(index);
    });
    allLinksArr.push(item);
});

const activate = (num) => {
    // verwijder actieve stutussen de linkjes
    deleteActive();
    // link num activeren
    allLinksArr[num].classList.add('nav--active');
    // num voor schuiven
    main.style.marginLeft = (-100*num) + 'vw';
}

const deleteActive = () => {
    allLinksArr.forEach( (item) => {
        item.classList.remove('nav--active');
    })
}

// bij de start eerste item
activate(index);