"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let PasswordStrengthBarComponent = class PasswordStrengthBarComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];
    }
    measureStrength(p) {
        let force = 0;
        const regex = /[$-/:-?{-~!"^_`[\]]/g; // "
        const lowerLetters = /[a-z]+/.test(p);
        const upperLetters = /[A-Z]+/.test(p);
        const numbers = /[0-9]+/.test(p);
        const symbols = regex.test(p);
        const flags = [lowerLetters, upperLetters, numbers, symbols];
        const passedMatches = flags.filter((isMatchedFlag) => {
            return isMatchedFlag === true;
        }).length;
        force += 2 * p.length + (p.length >= 10 ? 1 : 0);
        force += passedMatches * 10;
        // penalty (short password)
        force = p.length <= 6 ? Math.min(force, 10) : force;
        // penalty (poor variety of characters)
        force = passedMatches === 1 ? Math.min(force, 10) : force;
        force = passedMatches === 2 ? Math.min(force, 20) : force;
        force = passedMatches === 3 ? Math.min(force, 40) : force;
        return force;
    }
    getColor(s) {
        let idx = 0;
        if (s <= 10) {
            idx = 0;
        }
        else if (s <= 20) {
            idx = 1;
        }
        else if (s <= 30) {
            idx = 2;
        }
        else if (s <= 40) {
            idx = 3;
        }
        else {
            idx = 4;
        }
        return { idx: idx + 1, color: this.colors[idx] };
    }
    set passwordToCheck(password) {
        if (password) {
            const c = this.getColor(this.measureStrength(password));
            const element = this.elementRef.nativeElement;
            if (element.className) {
                this.renderer.removeClass(element, element.className);
            }
            const lis = element.getElementsByTagName('li');
            for (let i = 0; i < lis.length; i++) {
                if (i < c.idx) {
                    this.renderer.setStyle(lis[i], 'backgroundColor', c.color);
                }
                else {
                    this.renderer.setStyle(lis[i], 'backgroundColor', '#DDD');
                }
            }
        }
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], PasswordStrengthBarComponent.prototype, "passwordToCheck", null);
PasswordStrengthBarComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-password-strength-bar',
        template: `
    <div id="strength">
      <small jhiTranslate="global.messages.validate.newpassword.strength">Password strength:</small>
      <ul id="strengthBar">
        <li class="point"></li>
        <li class="point"></li>
        <li class="point"></li>
        <li class="point"></li>
        <li class="point"></li>
      </ul>
    </div>
  `,
        styleUrls: []
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.Renderer2, core_1.ElementRef])
], PasswordStrengthBarComponent);
exports.PasswordStrengthBarComponent = PasswordStrengthBarComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNvbXBvbmVudC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBd0U7QUFrQnhFLElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0lBR3ZDLFlBQW9CLFFBQW1CLEVBQVUsVUFBc0I7UUFBbkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGdkUsV0FBTSxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXdCLENBQUM7SUFFM0UsZUFBZSxDQUFDLENBQVM7UUFDdkIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsTUFBTSxLQUFLLEdBQUcsc0JBQXNCLENBQUMsQ0FBQyxJQUFJO1FBQzFDLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3RCxNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBc0IsRUFBRSxFQUFFO1lBQzVELE9BQU8sYUFBYSxLQUFLLElBQUksQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFVixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFN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O0FBakVVLDRCQUE0QjtJQWhCeEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO1FBQ0QsU0FBUyxJQUFnQztLQUMxQyxDQUFDOzZDQUk4QixnQkFBUyxFQUFzQixpQkFBVTtHQUg1RCw0QkFBNEIsQ0FrRXhDO0FBbEVZLG9FQUE0QiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC1zdHJlbmd0aC1iYXIuY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqaGktcGFzc3dvcmQtc3RyZW5ndGgtYmFyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGlkPVwic3RyZW5ndGhcIj5cbiAgICAgIDxzbWFsbCBqaGlUcmFuc2xhdGU9XCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQuc3RyZW5ndGhcIj5QYXNzd29yZCBzdHJlbmd0aDo8L3NtYWxsPlxuICAgICAgPHVsIGlkPVwic3RyZW5ndGhCYXJcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwicG9pbnRcIj48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJwb2ludFwiPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cInBvaW50XCI+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwicG9pbnRcIj48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJwb2ludFwiPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsncGFzc3dvcmQtc3RyZW5ndGgtYmFyLnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXNzd29yZFN0cmVuZ3RoQmFyQ29tcG9uZW50IHtcbiAgY29sb3JzID0gWycjRjAwJywgJyNGOTAnLCAnI0ZGMCcsICcjOUYwJywgJyMwRjAnXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBtZWFzdXJlU3RyZW5ndGgocDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgZm9yY2UgPSAwO1xuICAgIGNvbnN0IHJlZ2V4ID0gL1skLS86LT97LX4hXCJeX2BbXFxdXS9nOyAvLyBcIlxuICAgIGNvbnN0IGxvd2VyTGV0dGVycyA9IC9bYS16XSsvLnRlc3QocCk7XG4gICAgY29uc3QgdXBwZXJMZXR0ZXJzID0gL1tBLVpdKy8udGVzdChwKTtcbiAgICBjb25zdCBudW1iZXJzID0gL1swLTldKy8udGVzdChwKTtcbiAgICBjb25zdCBzeW1ib2xzID0gcmVnZXgudGVzdChwKTtcblxuICAgIGNvbnN0IGZsYWdzID0gW2xvd2VyTGV0dGVycywgdXBwZXJMZXR0ZXJzLCBudW1iZXJzLCBzeW1ib2xzXTtcbiAgICBjb25zdCBwYXNzZWRNYXRjaGVzID0gZmxhZ3MuZmlsdGVyKChpc01hdGNoZWRGbGFnOiBib29sZWFuKSA9PiB7XG4gICAgICByZXR1cm4gaXNNYXRjaGVkRmxhZyA9PT0gdHJ1ZTtcbiAgICB9KS5sZW5ndGg7XG5cbiAgICBmb3JjZSArPSAyICogcC5sZW5ndGggKyAocC5sZW5ndGggPj0gMTAgPyAxIDogMCk7XG4gICAgZm9yY2UgKz0gcGFzc2VkTWF0Y2hlcyAqIDEwO1xuXG4gICAgLy8gcGVuYWx0eSAoc2hvcnQgcGFzc3dvcmQpXG4gICAgZm9yY2UgPSBwLmxlbmd0aCA8PSA2ID8gTWF0aC5taW4oZm9yY2UsIDEwKSA6IGZvcmNlO1xuXG4gICAgLy8gcGVuYWx0eSAocG9vciB2YXJpZXR5IG9mIGNoYXJhY3RlcnMpXG4gICAgZm9yY2UgPSBwYXNzZWRNYXRjaGVzID09PSAxID8gTWF0aC5taW4oZm9yY2UsIDEwKSA6IGZvcmNlO1xuICAgIGZvcmNlID0gcGFzc2VkTWF0Y2hlcyA9PT0gMiA/IE1hdGgubWluKGZvcmNlLCAyMCkgOiBmb3JjZTtcbiAgICBmb3JjZSA9IHBhc3NlZE1hdGNoZXMgPT09IDMgPyBNYXRoLm1pbihmb3JjZSwgNDApIDogZm9yY2U7XG5cbiAgICByZXR1cm4gZm9yY2U7XG4gIH1cblxuICBnZXRDb2xvcihzOiBudW1iZXIpOiB7IGlkeDogbnVtYmVyOyBjb2xvcjogc3RyaW5nIH0ge1xuICAgIGxldCBpZHggPSAwO1xuICAgIGlmIChzIDw9IDEwKSB7XG4gICAgICBpZHggPSAwO1xuICAgIH0gZWxzZSBpZiAocyA8PSAyMCkge1xuICAgICAgaWR4ID0gMTtcbiAgICB9IGVsc2UgaWYgKHMgPD0gMzApIHtcbiAgICAgIGlkeCA9IDI7XG4gICAgfSBlbHNlIGlmIChzIDw9IDQwKSB7XG4gICAgICBpZHggPSAzO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZHggPSA0O1xuICAgIH1cbiAgICByZXR1cm4geyBpZHg6IGlkeCArIDEsIGNvbG9yOiB0aGlzLmNvbG9yc1tpZHhdIH07XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcGFzc3dvcmRUb0NoZWNrKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICBpZiAocGFzc3dvcmQpIHtcbiAgICAgIGNvbnN0IGMgPSB0aGlzLmdldENvbG9yKHRoaXMubWVhc3VyZVN0cmVuZ3RoKHBhc3N3b3JkKSk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBlbGVtZW50LmNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgICBjb25zdCBsaXMgPSBlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPCBjLmlkeCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobGlzW2ldLCAnYmFja2dyb3VuZENvbG9yJywgYy5jb2xvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShsaXNbaV0sICdiYWNrZ3JvdW5kQ29sb3InLCAnI0RERCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwidmVyc2lvbiI6M30=