"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const ng_jhipster_1 = require("ng-jhipster");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const course_service_1 = require("./course.service");
const course_delete_dialog_component_1 = require("./course-delete-dialog.component");
let CourseComponent = class CourseComponent {
    constructor(courseService, eventManager, modalService) {
        this.courseService = courseService;
        this.eventManager = eventManager;
        this.modalService = modalService;
    }
    loadAll() {
        this.courseService.query().subscribe((res) => (this.courses = res.body || []));
    }
    ngOnInit() {
        this.loadAll();
        this.registerChangeInCourses();
    }
    ngOnDestroy() {
        if (this.eventSubscriber) {
            this.eventManager.destroy(this.eventSubscriber);
        }
    }
    trackId(index, item) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        return item.id;
    }
    registerChangeInCourses() {
        this.eventSubscriber = this.eventManager.subscribe('courseListModification', () => this.loadAll());
    }
    delete(course) {
        const modalRef = this.modalService.open(course_delete_dialog_component_1.CourseDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.course = course;
    }
};
CourseComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-course',
        template: require('./course.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [course_service_1.CourseService, ng_jhipster_1.JhiEventManager, ng_bootstrap_1.NgbModal])
], CourseComponent);
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUE2RDtBQUc3RCw2Q0FBOEM7QUFDOUMsNkRBQXNEO0FBR3RELHFEQUFpRDtBQUNqRCxxRkFBK0U7QUFNL0UsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUkxQixZQUFzQixhQUE0QixFQUFZLFlBQTZCLEVBQVksWUFBc0I7UUFBdkcsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBWSxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFBWSxpQkFBWSxHQUFaLFlBQVksQ0FBVTtJQUFHLENBQUM7SUFFakksT0FBTztRQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBNEIsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsS0FBYSxFQUFFLElBQWE7UUFDbEMsNEVBQTRFO1FBQzVFLE9BQU8sSUFBSSxDQUFDLEVBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQsdUJBQXVCO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFlO1FBQ3BCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLDREQUEyQixFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6RyxRQUFRLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUM3QyxDQUFDO0NBQ0YsQ0FBQTtBQWxDWSxlQUFlO0lBSjNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixrQkFBYSx5QkFBeUIsQ0FBQTtLQUN2QyxDQUFDOzZDQUtxQyw4QkFBYSxFQUEwQiw2QkFBZSxFQUEwQix1QkFBUTtHQUpsSCxlQUFlLENBa0MzQjtBQWxDWSwwQ0FBZSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvY291cnNlL2NvdXJzZS5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBKaGlFdmVudE1hbmFnZXIgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgSUNvdXJzZSB9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvY291cnNlLm1vZGVsJztcbmltcG9ydCB7IENvdXJzZVNlcnZpY2UgfSBmcm9tICcuL2NvdXJzZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvdXJzZURlbGV0ZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY291cnNlLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamhpLWNvdXJzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb3Vyc2UuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENvdXJzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY291cnNlcz86IElDb3Vyc2VbXTtcbiAgZXZlbnRTdWJzY3JpYmVyPzogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb3Vyc2VTZXJ2aWNlOiBDb3Vyc2VTZXJ2aWNlLCBwcm90ZWN0ZWQgZXZlbnRNYW5hZ2VyOiBKaGlFdmVudE1hbmFnZXIsIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsKSB7fVxuXG4gIGxvYWRBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5jb3Vyc2VTZXJ2aWNlLnF1ZXJ5KCkuc3Vic2NyaWJlKChyZXM6IEh0dHBSZXNwb25zZTxJQ291cnNlW10+KSA9PiAodGhpcy5jb3Vyc2VzID0gcmVzLmJvZHkgfHwgW10pKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZEFsbCgpO1xuICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2VJbkNvdXJzZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV2ZW50U3Vic2NyaWJlcikge1xuICAgICAgdGhpcy5ldmVudE1hbmFnZXIuZGVzdHJveSh0aGlzLmV2ZW50U3Vic2NyaWJlcik7XG4gICAgfVxuICB9XG5cbiAgdHJhY2tJZChpbmRleDogbnVtYmVyLCBpdGVtOiBJQ291cnNlKTogbnVtYmVyIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVubmVjZXNzYXJ5LXR5cGUtYXNzZXJ0aW9uXG4gICAgcmV0dXJuIGl0ZW0uaWQhO1xuICB9XG5cbiAgcmVnaXN0ZXJDaGFuZ2VJbkNvdXJzZXMoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudFN1YnNjcmliZXIgPSB0aGlzLmV2ZW50TWFuYWdlci5zdWJzY3JpYmUoJ2NvdXJzZUxpc3RNb2RpZmljYXRpb24nLCAoKSA9PiB0aGlzLmxvYWRBbGwoKSk7XG4gIH1cblxuICBkZWxldGUoY291cnNlOiBJQ291cnNlKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKENvdXJzZURlbGV0ZURpYWxvZ0NvbXBvbmVudCwgeyBzaXplOiAnbGcnLCBiYWNrZHJvcDogJ3N0YXRpYycgfSk7XG4gICAgbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UuY291cnNlID0gY291cnNlO1xuICB9XG59XG4iXSwidmVyc2lvbiI6M30=