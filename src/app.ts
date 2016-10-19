import {Schema} from  './schema.ts';
import {UISchema} from './ui-schema';
import './main.css';

class MyController {
  schema = Schema;
  uischema = UISchema;
  data = {
    'name': 'Send email to Adriana',
    'description': 'Confirm if you have passed the subject',
    'done': true
  };
}

angular.module('app', ['jsonforms', 'jsonforms-bootstrap', 'ui.bootstrap'])
  .controller('MyController', MyController);
