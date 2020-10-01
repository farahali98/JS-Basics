var shoe_size = prompt("please enter your shoe size");
var birth_year = prompt("plase enter your birth year");


function result() {
    new_product = ((((parseInt(shoe_size) * 2) + 5) * 50) - parseInt(birth_year) + 1766);
    window.alert(new_product);
}
result();