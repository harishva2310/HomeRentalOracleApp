import { Shape } from "./Shape";
import { Circle } from "./Circle";

let myShape=new Circle(30,50,20);
let circle1=new Circle(30,50,10);

let theShapes: Circle[]=[];
theShapes.push(myShape);
theShapes.push(circle1);

for(let shape of theShapes){
    console.log(shape.calculateArea());
}

//console.log(circle1.getInfo());

