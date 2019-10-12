let cars = {

    car1: {
        model: 'Land Rover Discovery',
        nagd: 60000,
        kredit: 20000,
        il: '2015',
        yuruw: '27000 km',
        tarix: '27.07.2019'
        
    },
    car2: {
        model: 'Land Rover Discovery',
        nagd: 60000,
        kredit: 20000,
        il: '2015',
        yuruw: '27000 km',
        tarix: '27.07.2019'
    },
    car3: {
        model: 'Land Rover Discovery',
        nagd: 60000,
        kredit: 20000,
        il: 2015,
        yuruw: '27000 km',
        tarix: '27.07.2019'
    },
    car4: {
        model: 'Land Rover Discovery',
        nagd: 60000,
        kredit: 20000,
        il: 2015,
        yuruw: '27000 km',
        tarix: '27.07.2019'
    }
}


let container = create('div', ['container'], 'body');
let row = create('div', ['row'], container);

function create(element, klas, location) {
    element = document.createElement(element);
    for (let i of klas) {
        element.classList.add(i);
    }
    
    if (location == 'body') {
        document.body.appendChild(element);
    }
    else {
        location.appendChild(element);
    }
    return element;
}

for (let f in cars) {
    let card = create('div', ['card', 'col-3'], row);

    let img = create('img', ['card-img-top'], card);
    img.src = 'image/Без названия.jpg';

    let cardBody = create('div', ['card-body'], card);

    let h5 = create('h5', ['card-title'], cardBody);
    h5.innerText = cars[f].model;

    let price = create('span', ['price', 'badge', 'badge-secondary', 'bg-primary', 'text-white'], cardBody);
    price.innerText = cars[f].nagd;

    let credit = create('span', ['credit', 'badge', 'badge-secondary', 'bg-danger', 'text-white'], cardBody);
    credit.innerText = cars[f].kredit;

    let div = create('div', '', cardBody);

    let il = create('span', ['d-block'], div);
    il.innerText = cars[f].il;

    let yuruw = create('span', '', div);
    yuruw.innerText = cars[f].yuruw;

    let tarix = create('span', '', div);
    tarix.innerText = cars[f].tarix;


    card.addEventListener('click', function () {
        localStorage.clear();
        let z = JSON.stringify(cars[f]);
        localStorage.setItem('cars', z);
        document.location = 'text.html';
    });

}


// function createUl(tag,klas,text,link,location){
//     tag=document.createElement('tag');
//     for (let i of klas) {
//         tag.classList.add(i);
//     }
//     tag.innerText=text;
//     tag.location.href='#';

//     if (location == 'body') {
//         document.body.appendChild(tag);
//     }
//     else {
//         location.appendChild(tag);
//     }
//     return tag;
// }

// let ul=createUl('ul',['pagination'],'','',container);