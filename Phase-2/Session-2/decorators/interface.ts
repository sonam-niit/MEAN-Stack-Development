interface Color{
    color:string;
}

interface Length extends Color{
    length:number;
}

var shape = <Length>{};
shape.color="blue";
shape.length=20;

console.log("Color of the shape: "+shape.color);
console.log("Length of the shape: "+shape.length);

var square = <Length>{};
square.length=10;
square.color="green";

console.log("Color of the Square: "+square.color);
console.log("Length of the square: "+square.length);