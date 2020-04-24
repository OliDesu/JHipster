"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const ng_jhipster_1 = require("ng-jhipster");
const course_service_1 = require("./course.service");
let CourseDeleteDialogComponent = class CourseDeleteDialogComponent {
    constructor(courseService, activeModal, eventManager) {
        this.courseService = courseService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    cancel() {
        this.activeModal.dismiss();
    }
    confirmDelete(id) {
        this.courseService.delete(id).subscribe(() => {
            this.eventManager.broadcast('courseListModification');
            this.activeModal.close();
        });
    }
};
CourseDeleteDialogComponent = tslib_1.__decorate([
    core_1.Component({
        template: require('./course-delete-dialog.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [course_service_1.CourseService, ng_bootstrap_1.NgbActiveModal, ng_jhipster_1.JhiEventManager])
], CourseDeleteDialogComponent);
exports.CourseDeleteDialogComponent = CourseDeleteDialogComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2NvdXJzZS9jb3Vyc2UtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQTBDO0FBQzFDLDZEQUE0RDtBQUM1RCw2Q0FBOEM7QUFHOUMscURBQWlEO0FBS2pELElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0lBR3RDLFlBQXNCLGFBQTRCLEVBQVMsV0FBMkIsRUFBWSxZQUE2QjtRQUF6RyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUFZLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtJQUFHLENBQUM7SUFFbkksTUFBTTtRQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGFBQWEsQ0FBQyxFQUFVO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7QUFmWSwyQkFBMkI7SUFIdkMsZ0JBQVMsQ0FBQztRQUNULGtCQUFhLHVDQUF1QyxDQUFBO0tBQ3JELENBQUM7NkNBSXFDLDhCQUFhLEVBQXNCLDZCQUFjLEVBQTBCLDZCQUFlO0dBSHBILDJCQUEyQixDQWV2QztBQWZZLGtFQUEyQiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvY291cnNlL2NvdXJzZS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgSmhpRXZlbnRNYW5hZ2VyIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBJQ291cnNlIH0gZnJvbSAnYXBwL3NoYXJlZC9tb2RlbC9jb3Vyc2UubW9kZWwnO1xuaW1wb3J0IHsgQ291cnNlU2VydmljZSB9IGZyb20gJy4vY291cnNlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICcuL2NvdXJzZS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDb3Vyc2VEZWxldGVEaWFsb2dDb21wb25lbnQge1xuICBjb3Vyc2U/OiBJQ291cnNlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLCBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLCBwcm90ZWN0ZWQgZXZlbnRNYW5hZ2VyOiBKaGlFdmVudE1hbmFnZXIpIHt9XG5cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygpO1xuICB9XG5cbiAgY29uZmlybURlbGV0ZShpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLmRlbGV0ZShpZCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCgnY291cnNlTGlzdE1vZGlmaWNhdGlvbicpO1xuICAgICAgdGhpcy5hY3RpdmVNb2RhbC5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG59XG4iXSwidmVyc2lvbiI6M30=