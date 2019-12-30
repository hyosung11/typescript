// Boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'brown';
var favoriteQuote = "I don't feel old, I'm only " + age;
// arrray
var pets = ['cat', 'dog', 'pig'];
// another way to declare arrays
var pets2 = ['lion', 'dragon', 'gargoyle'];
// object - lowercase
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum (Enumerable) with capital Name
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
// Any - BE CAREFUL!!!!!!!!!!!!
var whatever = 'aaaaghhhhhh noooooo!!!';
whatever = basket;
// void - for a function that doesn't return anything
var sing = function () {
    console.log('lalalalalal');
};
// never for a function that doesn't return and doesn't have an endpoint.
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT');
};
// fightRobotArmy({count: 1, type: 'dragon'})
// cuts code like below down by using interface
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT');
};
var dog = {};
dog.count;
