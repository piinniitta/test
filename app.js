"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge_1 = require("./merge");
var collection1 = [1, 3, 5, 7, 9];
var collection2 = [2, 4, 6, 8, 10];
var result = (0, merge_1.merge)(collection1, collection2);
console.log(result);
