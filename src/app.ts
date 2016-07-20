import {Schema} from  "./schema.ts";
import {UISchema} from "./ui-schema";

class MyController {
    schema = Schema;
    uischema = UISchema;
    data = {
        "name": 'John Doe',
        "age": 36,
        "height": 1.85,
        "gender": 'Male'
    };
} 

angular.module('app', ['jsonforms'])
    .controller('MyController', MyController);