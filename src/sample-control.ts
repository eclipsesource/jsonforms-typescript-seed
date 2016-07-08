
import "jsonforms";
import {AbstractControl, ControlRendererTester} from "jsonforms";
import {IPathResolver} from "jsonforms";

class MyDirective implements ng.IDirective {
    template = `This is my customized integer control
    <jsonforms-control>
      <input type="number"
             step="10"
             id="{{vm.id}}"
             style="border: solid #ff6269 3px"
             class="form-control jsf-control-integer"
             ng-model="vm.modelValue[vm.fragment]"
             ng-change='vm.modelChanged()'
             ng-readonly="vm.uiSchema.readOnly"/>
    </jsonforms-control>`;
    controller = SampleControl;
    controllerAs = 'vm';
}



class SampleControl extends AbstractControl {
    static $inject = ['$scope', 'PathResolver'];
    constructor(scope: ng.IScope, pathResolver: IPathResolver) {
        super(scope, pathResolver);
    }
}


export default angular
    .module('my', ['jsonforms.renderers.controls'])
    .directive('myControl', () => new MyDirective())
    .run(['RendererService', RendererService => {
        RendererService.register('my-control', ControlRendererTester('integer', 100))
    }])
    .name;
