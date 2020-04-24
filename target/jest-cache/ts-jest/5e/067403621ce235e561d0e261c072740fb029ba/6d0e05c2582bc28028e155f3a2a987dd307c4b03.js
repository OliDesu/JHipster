"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const core_2 = require("@ngx-translate/core");
const account_service_1 = require("app/core/auth/account.service");
let MainComponent = class MainComponent {
    constructor(accountService, titleService, router, translateService, rootRenderer) {
        this.accountService = accountService;
        this.titleService = titleService;
        this.router = router;
        this.translateService = translateService;
        this.renderer = rootRenderer.createRenderer(document.querySelector('html'), null);
    }
    ngOnInit() {
        // try to log in automatically
        this.accountService.identity().subscribe();
        this.router.events.subscribe(event => {
            if (event instanceof router_1.NavigationEnd) {
                this.updateTitle();
            }
            if (event instanceof router_1.NavigationError && event.error.status === 404) {
                this.router.navigate(['/404']);
            }
        });
        this.translateService.onLangChange.subscribe((langChangeEvent) => {
            this.updateTitle();
            this.renderer.setAttribute(document.querySelector('html'), 'lang', langChangeEvent.lang);
        });
    }
    getPageTitle(routeSnapshot) {
        let title = routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : '';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }
    updateTitle() {
        let pageTitle = this.getPageTitle(this.router.routerState.snapshot.root);
        if (!pageTitle) {
            pageTitle = 'global.title';
        }
        this.translateService.get(pageTitle).subscribe(title => this.titleService.setTitle(title));
    }
};
MainComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-main',
        template: require('./main.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService,
        platform_browser_1.Title,
        router_1.Router,
        core_2.TranslateService,
        core_1.RendererFactory2])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbWFpbi9tYWluLmNvbXBvbmVudC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBK0U7QUFDL0UsZ0VBQWtEO0FBQ2xELDRDQUFpRztBQUNqRyw4Q0FBd0U7QUFFeEUsbUVBQStEO0FBTS9ELElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFHeEIsWUFDVSxjQUE4QixFQUM5QixZQUFtQixFQUNuQixNQUFjLEVBQ2QsZ0JBQWtDLEVBQzFDLFlBQThCO1FBSnRCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixpQkFBWSxHQUFaLFlBQVksQ0FBTztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUcxQyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsUUFBUTtRQUNOLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRTNDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxJQUFJLEtBQUssWUFBWSxzQkFBYSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDcEI7WUFDRCxJQUFJLEtBQUssWUFBWSx3QkFBZSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGVBQWdDLEVBQUUsRUFBRTtZQUNoRixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFlBQVksQ0FBQyxhQUFxQztRQUN4RCxJQUFJLEtBQUssR0FBVyxhQUFhLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNqSCxJQUFJLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDNUIsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQztTQUM5RDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLFNBQVMsR0FBRyxjQUFjLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztDQUNGLENBQUE7QUFoRFksYUFBYTtJQUp6QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsa0JBQWEsdUJBQXVCLENBQUE7S0FDckMsQ0FBQzs2Q0FLMEIsZ0NBQWM7UUFDaEIsd0JBQUs7UUFDWCxlQUFNO1FBQ0ksdUJBQWdCO1FBQzVCLHVCQUFnQjtHQVJyQixhQUFhLENBZ0R6QjtBQWhEWSxzQ0FBYSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9tYWluL21haW4uY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBSZW5kZXJlckZhY3RvcnkyLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25FcnJvciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBMYW5nQ2hhbmdlRXZlbnQgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICdhcHAvY29yZS9hdXRoL2FjY291bnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1tYWluJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21haW4uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHJvb3RSZW5kZXJlcjogUmVuZGVyZXJGYWN0b3J5MlxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gcm9vdFJlbmRlcmVyLmNyZWF0ZVJlbmRlcmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSwgbnVsbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyB0cnkgdG8gbG9nIGluIGF1dG9tYXRpY2FsbHlcbiAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmlkZW50aXR5KCkuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVUaXRsZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yICYmIGV2ZW50LmVycm9yLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLzQwNCddKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChsYW5nQ2hhbmdlRXZlbnQ6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVUaXRsZSgpO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyksICdsYW5nJywgbGFuZ0NoYW5nZUV2ZW50LmxhbmcpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYWdlVGl0bGUocm91dGVTbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHN0cmluZyB7XG4gICAgbGV0IHRpdGxlOiBzdHJpbmcgPSByb3V0ZVNuYXBzaG90LmRhdGEgJiYgcm91dGVTbmFwc2hvdC5kYXRhWydwYWdlVGl0bGUnXSA/IHJvdXRlU25hcHNob3QuZGF0YVsncGFnZVRpdGxlJ10gOiAnJztcbiAgICBpZiAocm91dGVTbmFwc2hvdC5maXJzdENoaWxkKSB7XG4gICAgICB0aXRsZSA9IHRoaXMuZ2V0UGFnZVRpdGxlKHJvdXRlU25hcHNob3QuZmlyc3RDaGlsZCkgfHwgdGl0bGU7XG4gICAgfVxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVGl0bGUoKTogdm9pZCB7XG4gICAgbGV0IHBhZ2VUaXRsZSA9IHRoaXMuZ2V0UGFnZVRpdGxlKHRoaXMucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnJvb3QpO1xuICAgIGlmICghcGFnZVRpdGxlKSB7XG4gICAgICBwYWdlVGl0bGUgPSAnZ2xvYmFsLnRpdGxlJztcbiAgICB9XG4gICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldChwYWdlVGl0bGUpLnN1YnNjcmliZSh0aXRsZSA9PiB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZSh0aXRsZSkpO1xuICB9XG59XG4iXSwidmVyc2lvbiI6M30=