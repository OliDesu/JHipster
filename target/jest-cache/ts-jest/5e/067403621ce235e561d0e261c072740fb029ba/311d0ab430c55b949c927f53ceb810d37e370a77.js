"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const moment = require("moment");
const input_constants_1 = require("app/shared/constants/input.constants");
const course_model_1 = require("app/shared/model/course.model");
const course_service_1 = require("./course.service");
const restaurant_service_1 = require("app/entities/restaurant/restaurant.service");
let CourseUpdateComponent = class CourseUpdateComponent {
    constructor(courseService, restaurantService, activatedRoute, fb) {
        this.courseService = courseService;
        this.restaurantService = restaurantService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.isSaving = false;
        this.restaurants = [];
        this.editForm = this.fb.group({
            id: [],
            state: [null, [forms_1.Validators.required]],
            deliveryTime: [null, [forms_1.Validators.required]],
            restaurant: []
        });
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ course }) => {
            if (!course.id) {
                const today = moment().startOf('day');
                course.deliveryTime = today;
            }
            this.updateForm(course);
            this.restaurantService.query().subscribe((res) => (this.restaurants = res.body || []));
        });
    }
    updateForm(course) {
        this.editForm.patchValue({
            id: course.id,
            state: course.state,
            deliveryTime: course.deliveryTime ? course.deliveryTime.format(input_constants_1.DATE_TIME_FORMAT) : null,
            restaurant: course.restaurant
        });
    }
    previousState() {
        window.history.back();
    }
    save() {
        this.isSaving = true;
        const course = this.createFromForm();
        if (course.id !== undefined) {
            this.subscribeToSaveResponse(this.courseService.update(course));
        }
        else {
            this.subscribeToSaveResponse(this.courseService.create(course));
        }
    }
    createFromForm() {
        return Object.assign(Object.assign({}, new course_model_1.Course()), { id: this.editForm.get(['id']).value, state: this.editForm.get(['state']).value, deliveryTime: this.editForm.get(['deliveryTime']).value
                ? moment(this.editForm.get(['deliveryTime']).value, input_constants_1.DATE_TIME_FORMAT)
                : undefined, restaurant: this.editForm.get(['restaurant']).value });
    }
    subscribeToSaveResponse(result) {
        result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
    }
    onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }
    onSaveError() {
        this.isSaving = false;
    }
    trackById(index, item) {
        return item.id;
    }
};
CourseUpdateComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-course-update',
        template: require('./course-update.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [course_service_1.CourseService,
        restaurant_service_1.RestaurantService,
        router_1.ActivatedRoute,
        forms_1.FormBuilder])
], CourseUpdateComponent);
exports.CourseUpdateComponent = CourseUpdateComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2NvdXJzZS9jb3Vyc2UtdXBkYXRlLmNvbXBvbmVudC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBa0Q7QUFFbEQsNkRBQTZEO0FBQzdELDBDQUF5RDtBQUN6RCw0Q0FBaUQ7QUFFakQsaUNBQWlDO0FBQ2pDLDBFQUF3RTtBQUV4RSxnRUFBZ0U7QUFDaEUscURBQWlEO0FBRWpELG1GQUErRTtBQU0vRSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQVdoQyxZQUNZLGFBQTRCLEVBQzVCLGlCQUFvQyxFQUNwQyxjQUE4QixFQUNoQyxFQUFlO1FBSGIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDaEMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQWR6QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUVoQyxhQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdkIsRUFBRSxFQUFFLEVBQUU7WUFDTixLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0MsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDLENBQUM7SUFPQSxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtnQkFDZCxNQUFNLEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FB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QyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixrQkFBYSxnQ0FBZ0MsQ0FBQTtLQUM5QyxDQUFDOzZDQWEyQiw4QkFBYTtRQUNULHNDQUFpQjtRQUNwQix1QkFBYztRQUM1QixtQkFBVztHQWZkLHFCQUFxQixDQXFGakM7QUFyRlksc0RBQXFCIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL2FsaS9leGVtcGxlLWpoaXBzdGVyL3Rlc3RiZWQvc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9jb3Vyc2UvY291cnNlLXVwZGF0ZS5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBEQVRFX1RJTUVfRk9STUFUIH0gZnJvbSAnYXBwL3NoYXJlZC9jb25zdGFudHMvaW5wdXQuY29uc3RhbnRzJztcblxuaW1wb3J0IHsgSUNvdXJzZSwgQ291cnNlIH0gZnJvbSAnYXBwL3NoYXJlZC9tb2RlbC9jb3Vyc2UubW9kZWwnO1xuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4vY291cnNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSVJlc3RhdXJhbnQgfSBmcm9tICdhcHAvc2hhcmVkL21vZGVsL3Jlc3RhdXJhbnQubW9kZWwnO1xuaW1wb3J0IHsgUmVzdGF1cmFudFNlcnZpY2UgfSBmcm9tICdhcHAvZW50aXRpZXMvcmVzdGF1cmFudC9yZXN0YXVyYW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqaGktY291cnNlLXVwZGF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb3Vyc2UtdXBkYXRlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDb3Vyc2VVcGRhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc1NhdmluZyA9IGZhbHNlO1xuICByZXN0YXVyYW50czogSVJlc3RhdXJhbnRbXSA9IFtdO1xuXG4gIGVkaXRGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgaWQ6IFtdLFxuICAgIHN0YXRlOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICBkZWxpdmVyeVRpbWU6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgIHJlc3RhdXJhbnQ6IFtdXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZXN0YXVyYW50U2VydmljZTogUmVzdGF1cmFudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZSgoeyBjb3Vyc2UgfSkgPT4ge1xuICAgICAgaWYgKCFjb3Vyc2UuaWQpIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBtb21lbnQoKS5zdGFydE9mKCdkYXknKTtcbiAgICAgICAgY291cnNlLmRlbGl2ZXJ5VGltZSA9IHRvZGF5O1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZUZvcm0oY291cnNlKTtcblxuICAgICAgdGhpcy5yZXN0YXVyYW50U2VydmljZS5xdWVyeSgpLnN1YnNjcmliZSgocmVzOiBIdHRwUmVzcG9uc2U8SVJlc3RhdXJhbnRbXT4pID0+ICh0aGlzLnJlc3RhdXJhbnRzID0gcmVzLmJvZHkgfHwgW10pKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUZvcm0oY291cnNlOiBJQ291cnNlKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0Rm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIGlkOiBjb3Vyc2UuaWQsXG4gICAgICBzdGF0ZTogY291cnNlLnN0YXRlLFxuICAgICAgZGVsaXZlcnlUaW1lOiBjb3Vyc2UuZGVsaXZlcnlUaW1lID8gY291cnNlLmRlbGl2ZXJ5VGltZS5mb3JtYXQoREFURV9USU1FX0ZPUk1BVCkgOiBudWxsLFxuICAgICAgcmVzdGF1cmFudDogY291cnNlLnJlc3RhdXJhbnRcbiAgICB9KTtcbiAgfVxuXG4gIHByZXZpb3VzU3RhdGUoKTogdm9pZCB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgc2F2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzU2F2aW5nID0gdHJ1ZTtcbiAgICBjb25zdCBjb3Vyc2UgPSB0aGlzLmNyZWF0ZUZyb21Gb3JtKCk7XG4gICAgaWYgKGNvdXJzZS5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZVRvU2F2ZVJlc3BvbnNlKHRoaXMuY291cnNlU2VydmljZS51cGRhdGUoY291cnNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9TYXZlUmVzcG9uc2UodGhpcy5jb3Vyc2VTZXJ2aWNlLmNyZWF0ZShjb3Vyc2UpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUZyb21Gb3JtKCk6IElDb3Vyc2Uge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5uZXcgQ291cnNlKCksXG4gICAgICBpZDogdGhpcy5lZGl0Rm9ybS5nZXQoWydpZCddKSEudmFsdWUsXG4gICAgICBzdGF0ZTogdGhpcy5lZGl0Rm9ybS5nZXQoWydzdGF0ZSddKSEudmFsdWUsXG4gICAgICBkZWxpdmVyeVRpbWU6IHRoaXMuZWRpdEZvcm0uZ2V0KFsnZGVsaXZlcnlUaW1lJ10pIS52YWx1ZVxuICAgICAgICA/IG1vbWVudCh0aGlzLmVkaXRGb3JtLmdldChbJ2RlbGl2ZXJ5VGltZSddKSEudmFsdWUsIERBVEVfVElNRV9GT1JNQVQpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgcmVzdGF1cmFudDogdGhpcy5lZGl0Rm9ybS5nZXQoWydyZXN0YXVyYW50J10pIS52YWx1ZVxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlVG9TYXZlUmVzcG9uc2UocmVzdWx0OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxJQ291cnNlPj4pOiB2b2lkIHtcbiAgICByZXN1bHQuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4gdGhpcy5vblNhdmVTdWNjZXNzKCksXG4gICAgICAoKSA9PiB0aGlzLm9uU2F2ZUVycm9yKClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uU2F2ZVN1Y2Nlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNTdGF0ZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uU2F2ZUVycm9yKCk6IHZvaWQge1xuICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHRyYWNrQnlJZChpbmRleDogbnVtYmVyLCBpdGVtOiBJUmVzdGF1cmFudCk6IGFueSB7XG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==