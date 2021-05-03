// THIS IS FRONT END JAVASCRIPT

const { name } = require("ejs");


const url = window.location.href;
// const edit = document.getElementById('edit');
const editButton = document.querySelectorAll('.editBtn');
const form = document.getElementById('form');

// THIS IS FOR INPUT FEILD AND IT'S REPLACABLE
const cakeName = document.getElementById('cakeName'),
cakeFlavor = document.getElementById('cakeFlavor'),
cakeTopping = document.getElementById('cakeTopping'),
cakeFilling = document.getElementById('cakeFilling'),
cakePrice = document.getElementById('cakePrice');


// THIS IS FOR TABLE NOT REPLACEABLE
const name = document.getElementById('name'),
    flavor = document.getElementById('flavor'),
    topping = document.getElementById('topping'),
    filling = document.getElementById('filling'),
    price = document.getElementById('price');


// console.log(allAttr(name,name.id));


const names = [cakeName, cakeFlavor, cakeTopping, cakeFilling, cakePrice];

let edit_url = url + "edit/";

valueChange();

function valueChange() {
    editButton.forEach(edit => {
        edit.addEventListener('click', e => {
            // e.preventDefault();

            console.log(teamName.textContent);
            cakeName.value = name.textContent;
            cakeFlavor.value = flavor.textContent;
            cakeTopping.value = topping.textContent;
            cakeFilling.value = filling.textContent;
            cakePrice.value = price.textContent;
            console.log(name.value);

            // console.log(e.target.parentNode.parentNode);
            console.log(e.target.parentNode.parentNode);
            // location.reload();
        });
    });
}






// GETTING VALUE 
const setValue=(props)=>{
    this.props = props;
    props.forEach(val => {
        this.props = val.attributes.value.value;
    });
    return this.props;
}