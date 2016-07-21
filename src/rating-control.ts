import "jsonforms";
import {AbstractControl, Testers, schemaTypeIs, schemaPropertyName, PathResolver} from "jsonforms";

class RatingControlDirective implements ng.IDirective {
  template = `
    <jsonforms-control>
      <uib-rating
        id=""
        readonly="vm.uiSchema.readOnly"
        ng-model="vm.modelValue[vm.fragment]"
        max="vm.max()"></uib-rating>
      </uib-rating>
    </jsonforms-control>`;
  controller = RatingControl;
  controllerAs = 'vm';
}

class RatingControl extends AbstractControl {
  static $inject = ['$scope'];
  constructor(scope: ng.IScope) {
    super(scope);
  }

  max(): number {
    var schemaElement = PathResolver.resolveSchema(this.schema, this.schemaPath);
    if (schemaElement['maximum'] !== undefined) {
      return <number>schemaElement['maximum'];
    } else {
      return 5;
    }
  }
}

export default angular
  .module('app')
  .directive('ratingControl', () => new RatingControlDirective())
  .run(['RendererService', RendererService =>
  RendererService.register('rating-control',
    Testers.and(
      schemaTypeIs('integer'),
      schemaPropertyName('rating')
      ), 101)
]).name;
