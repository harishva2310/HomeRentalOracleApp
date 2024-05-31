"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
let myShape = new Circle_1.Circle(30, 50, 20);
let circle1 = new Circle_1.Circle(30, 50, 10);
let theShapes = [];
theShapes.push(myShape);
theShapes.push(circle1);
for (let shape of theShapes) {
    console.log(shape.calculateArea());
}
//console.log(circle1.getInfo());
