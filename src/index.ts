import "angular";
import "jsonforms";
import "./sample-control.ts";

import "bootstrap/dist/css/bootstrap.css";

angular.module("app", ["jsonforms", "my"]);
angular.bootstrap(document, ["app"], {
    strictDi: true
});