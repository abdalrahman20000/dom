


//declarations
let ol_fruit = document.createElement("ul");

let orange_li = document.createElement("li");
let apple_li = document.createElement("li");
let tangerine_li = document.createElement("li");
let watermelon_li = document.createElement("li");
let grape_li = document.createElement("li");


let orange_img = document.createElement("img");
let apple_img = document.createElement("img");
let tangerine_img = document.createElement("img");
let watermelon_img = document.createElement("img");
let grape_img = document.createElement("img");

let fruits = [orange_li, apple_li, tangerine_li, watermelon_li, grape_li];



//styling

orange_img.src = "https://www.fervalle.com/wp-content/uploads/2022/07/transparent-orange-apple5eacfeae85ac29.7815306015883956945475.png";
apple_img.src = "https://www.buildrestfoods.com/wp-content/uploads/2020/08/green-apply.jpg";
tangerine_img.src = "https://www.flavorwest.com/media/catalog/product/cache/ce830ba047c8ee7ece685deeb73bd0ca/n/a/naturaltangerineweb.jpg";
watermelon_img.src = "https://blog-images-1.pharmeasy.in/2020/08/28152823/shutterstock_583745164-1.jpg";
grape_img.src = "https://img.freepik.com/free-psd/grape-fruits-isolated-transparent-background_191095-14703.jpg";


orange_img.style.width = "50px";
apple_img.style.width = "50px";
tangerine_img.style.width = "50px";
watermelon_img.style.width = "50px";
grape_img.style.width = "50px";


orange_li.style.display = "flex";
orange_li.style.flexDirection = "column";

apple_li.style.display = "flex";
apple_li.style.flexDirection = "column";

tangerine_li.style.display = "flex";
tangerine_li.style.flexDirection = "column";

watermelon_li.style.display = "flex";
watermelon_li.style.flexDirection = "column";

grape_li.style.display = "flex";
grape_li.style.flexDirection = "column";


orange_li.textContent = "Orange";
apple_li.textContent = "Apple";
tangerine_li.textContent = "Tangerine";
watermelon_li.textContent = "WaterMelon";
grape_li.textContent = "Grape";

ol_fruit.textContent = "Fruits";

//appending

// for (let i = 0; i <= fruits.length; i++) {
//     ol_fruit.appendChild(fruits[i]);
// }

orange_li.appendChild(orange_img);
apple_li.appendChild(apple_img);
tangerine_li.appendChild(tangerine_img);
watermelon_li.appendChild(watermelon_img);
grape_li.appendChild(grape_img);

ol_fruit.appendChild(fruits[0]);
ol_fruit.appendChild(fruits[1]);
ol_fruit.appendChild(fruits[2]);
ol_fruit.appendChild(fruits[3]);
ol_fruit.appendChild(fruits[4]);


document.body.appendChild(ol_fruit);











//-----------------------Q2-----------------------------

function turn(array_ = [], num) {
    if (num < 0 || num > array_.length - 1) {
        return -1;
    }
    else {
        return num;
    }
}

let test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = prompt("Enter a number");



console.log(turn(test, num)); 5