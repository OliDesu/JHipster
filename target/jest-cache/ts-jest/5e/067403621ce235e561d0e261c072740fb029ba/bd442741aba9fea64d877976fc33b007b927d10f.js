"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const core_2 = require("@ngx-translate/core");
const ng_jhipster_1 = require("ng-jhipster");
let AlertErrorComponent = class AlertErrorComponent {
    constructor(alertService, eventManager, translateService) {
        this.alertService = alertService;
        this.eventManager = eventManager;
        this.alerts = [];
        this.errorListener = eventManager.subscribe('coopcycleApp.error', (response) => {
            const errorResponse = response.content;
            this.addErrorAlert(errorResponse.message, errorResponse.key, errorResponse.params);
        });
        this.httpErrorListener = eventManager.subscribe('coopcycleApp.httpError', (response) => {
            const httpErrorResponse = response.content;
            switch (httpErrorResponse.status) {
                // connection refused, server not reachable
                case 0:
                    this.addErrorAlert('Server not reachable', 'error.server.not.reachable');
                    break;
                case 400: {
                    const arr = httpErrorResponse.headers.keys();
                    let errorHeader = null;
                    let entityKey = null;
                    arr.forEach(entry => {
                        if (entry.toLowerCase().endsWith('app-error')) {
                            errorHeader = httpErrorResponse.headers.get(entry);
                        }
                        else if (entry.toLowerCase().endsWith('app-params')) {
                            entityKey = httpErrorResponse.headers.get(entry);
                        }
                    });
                    if (errorHeader) {
                        const entityName = translateService.instant('global.menu.entities.' + entityKey);
                        this.addErrorAlert(errorHeader, errorHeader, { entityName });
                    }
                    else if (httpErrorResponse.error !== '' && httpErrorResponse.error.fieldErrors) {
                        const fieldErrors = httpErrorResponse.error.fieldErrors;
                        for (const fieldError of fieldErrors) {
                            if (['Min', 'Max', 'DecimalMin', 'DecimalMax'].includes(fieldError.message)) {
                                fieldError.message = 'Size';
                            }
                            // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
                            const convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
                            const fieldName = translateService.instant('coopcycleApp.' + fieldError.objectName + '.' + convertedField);
                            this.addErrorAlert('Error on field "' + fieldName + '"', 'error.' + fieldError.message, { fieldName });
                        }
                    }
                    else if (httpErrorResponse.error !== '' && httpErrorResponse.error.message) {
                        this.addErrorAlert(httpErrorResponse.error.message, httpErrorResponse.error.message, httpErrorResponse.error.params);
                    }
                    else {
                        this.addErrorAlert(httpErrorResponse.error);
                    }
                    break;
                }
                case 404:
                    this.addErrorAlert('Not found', 'error.url.not.found');
                    break;
                default:
                    if (httpErrorResponse.error !== '' && httpErrorResponse.error.message) {
                        this.addErrorAlert(httpErrorResponse.error.message);
                    }
                    else {
                        this.addErrorAlert(httpErrorResponse.error);
                    }
            }
        });
    }
    setClasses(alert) {
        const classes = { 'jhi-toast': Boolean(alert.toast) };
        if (alert.position) {
            return Object.assign(Object.assign({}, classes), { [alert.position]: true });
        }
        return classes;
    }
    ngOnDestroy() {
        if (this.errorListener) {
            this.eventManager.destroy(this.errorListener);
        }
        if (this.httpErrorListener) {
            this.eventManager.destroy(this.httpErrorListener);
        }
    }
    addErrorAlert(message, key, data) {
        message = key && key !== null ? key : message;
        const newAlert = {
            type: 'danger',
            msg: message,
            params: data,
            timeout: 5000,
            toast: this.alertService.isToast(),
            scoped: true
        };
        this.alerts.push(this.alertService.addAlert(newAlert, this.alerts));
    }
};
AlertErrorComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'jhi-alert-error',
        template: `
    <div class="alerts" role="alert">
      <div *ngFor="let alert of alerts" [ngClass]="setClasses(alert)">
        <ngb-alert *ngIf="alert && alert.type && alert.msg" [type]="alert.type" (close)="alert.close(alerts)">
          <pre [innerHTML]="alert.msg"></pre>
        </ngb-alert>
      </div>
    </div>
  `
    }),
    tslib_1.__metadata("design:paramtypes", [ng_jhipster_1.JhiAlertService, ng_jhipster_1.JhiEventManager, core_2.TranslateService])
], AlertErrorComponent);
exports.AlertErrorComponent = AlertErrorComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hbGVydC9hbGVydC1lcnJvci5jb21wb25lbnQudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQXFEO0FBRXJELDhDQUF1RDtBQUN2RCw2Q0FBOEY7QUFpQjlGLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBSzlCLFlBQW9CLFlBQTZCLEVBQVUsWUFBNkIsRUFBRSxnQkFBa0M7UUFBeEcsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBSnhGLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFLdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBeUMsRUFBRSxFQUFFO1lBQzlHLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDdkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JGLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxRQUFnRCxFQUFFLEVBQUU7WUFDN0gsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQzNDLFFBQVEsaUJBQWlCLENBQUMsTUFBTSxFQUFFO2dCQUNoQywyQ0FBMkM7Z0JBQzNDLEtBQUssQ0FBQztvQkFDSixJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixFQUFFLDRCQUE0QixDQUFDLENBQUM7b0JBQ3pFLE1BQU07Z0JBRVIsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDUixNQUFNLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzdDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDdkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUNyQixHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUNsQixJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7NEJBQzdDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUNwRDs2QkFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7NEJBQ3JELFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUNsRDtvQkFDSCxDQUFDLENBQUMsQ0FBQztvQkFDSCxJQUFJLFdBQVcsRUFBRTt3QkFDZixNQUFNLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDLENBQUM7d0JBQ2pGLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7cUJBQzlEO3lCQUFNLElBQUksaUJBQWlCLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO3dCQUNoRixNQUFNLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO3dCQUN4RCxLQUFLLE1BQU0sVUFBVSxJQUFJLFdBQVcsRUFBRTs0QkFDcEMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0NBQzNFLFVBQVUsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzZCQUM3Qjs0QkFDRCx1R0FBdUc7NEJBQ3ZHLE1BQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQzs0QkFDbEUsTUFBTSxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxjQUFjLENBQUMsQ0FBQzs0QkFDM0csSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLEdBQUcsR0FBRyxFQUFFLFFBQVEsR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQzt5QkFDeEc7cUJBQ0Y7eUJBQU0sSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7d0JBQzVFLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDdEg7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDN0M7b0JBQ0QsTUFBTTtpQkFDUDtnQkFFRCxLQUFLLEdBQUc7b0JBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUscUJBQXFCLENBQUMsQ0FBQztvQkFDdkQsTUFBTTtnQkFFUjtvQkFDRSxJQUFJLGlCQUFpQixDQUFDLEtBQUssS0FBSyxFQUFFLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTt3QkFDckUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3JEO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzdDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBZTtRQUN4QixNQUFNLE9BQU8sR0FBRyxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDdEQsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2xCLHVDQUFZLE9BQU8sS0FBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLElBQUc7U0FDL0M7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZSxFQUFFLEdBQVksRUFBRSxJQUFVO1FBQ3JELE9BQU8sR0FBRyxHQUFHLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFFOUMsTUFBTSxRQUFRLEdBQWE7WUFDekIsSUFBSSxFQUFFLFFBQVE7WUFDZCxHQUFHLEVBQUUsT0FBTztZQUNaLE1BQU0sRUFBRSxJQUFJO1lBQ1osT0FBTyxFQUFFLElBQUk7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7WUFDbEMsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Q0FDRixDQUFBO0FBakdZLG1CQUFtQjtJQVovQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7S0FDRixDQUFDOzZDQU1rQyw2QkFBZSxFQUF3Qiw2QkFBZSxFQUFvQix1QkFBZ0I7R0FMakgsbUJBQW1CLENBaUcvQjtBQWpHWSxrREFBbUIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hbGVydC9hbGVydC1lcnJvci5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgSmhpRXZlbnRNYW5hZ2VyLCBKaGlBbGVydCwgSmhpQWxlcnRTZXJ2aWNlLCBKaGlFdmVudFdpdGhDb250ZW50IH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFsZXJ0RXJyb3IgfSBmcm9tICcuL2FsZXJ0LWVycm9yLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamhpLWFsZXJ0LWVycm9yJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYWxlcnRzXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBhbGVydCBvZiBhbGVydHNcIiBbbmdDbGFzc109XCJzZXRDbGFzc2VzKGFsZXJ0KVwiPlxuICAgICAgICA8bmdiLWFsZXJ0ICpuZ0lmPVwiYWxlcnQgJiYgYWxlcnQudHlwZSAmJiBhbGVydC5tc2dcIiBbdHlwZV09XCJhbGVydC50eXBlXCIgKGNsb3NlKT1cImFsZXJ0LmNsb3NlKGFsZXJ0cylcIj5cbiAgICAgICAgICA8cHJlIFtpbm5lckhUTUxdPVwiYWxlcnQubXNnXCI+PC9wcmU+XG4gICAgICAgIDwvbmdiLWFsZXJ0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRFcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGFsZXJ0czogSmhpQWxlcnRbXSA9IFtdO1xuICBlcnJvckxpc3RlbmVyOiBTdWJzY3JpcHRpb247XG4gIGh0dHBFcnJvckxpc3RlbmVyOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEpoaUFsZXJ0U2VydmljZSwgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEpoaUV2ZW50TWFuYWdlciwgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkge1xuICAgIHRoaXMuZXJyb3JMaXN0ZW5lciA9IGV2ZW50TWFuYWdlci5zdWJzY3JpYmUoJ2Nvb3BjeWNsZUFwcC5lcnJvcicsIChyZXNwb25zZTogSmhpRXZlbnRXaXRoQ29udGVudDxBbGVydEVycm9yPikgPT4ge1xuICAgICAgY29uc3QgZXJyb3JSZXNwb25zZSA9IHJlc3BvbnNlLmNvbnRlbnQ7XG4gICAgICB0aGlzLmFkZEVycm9yQWxlcnQoZXJyb3JSZXNwb25zZS5tZXNzYWdlLCBlcnJvclJlc3BvbnNlLmtleSwgZXJyb3JSZXNwb25zZS5wYXJhbXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5odHRwRXJyb3JMaXN0ZW5lciA9IGV2ZW50TWFuYWdlci5zdWJzY3JpYmUoJ2Nvb3BjeWNsZUFwcC5odHRwRXJyb3InLCAocmVzcG9uc2U6IEpoaUV2ZW50V2l0aENvbnRlbnQ8SHR0cEVycm9yUmVzcG9uc2U+KSA9PiB7XG4gICAgICBjb25zdCBodHRwRXJyb3JSZXNwb25zZSA9IHJlc3BvbnNlLmNvbnRlbnQ7XG4gICAgICBzd2l0Y2ggKGh0dHBFcnJvclJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICAvLyBjb25uZWN0aW9uIHJlZnVzZWQsIHNlcnZlciBub3QgcmVhY2hhYmxlXG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoJ1NlcnZlciBub3QgcmVhY2hhYmxlJywgJ2Vycm9yLnNlcnZlci5ub3QucmVhY2hhYmxlJyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0MDA6IHtcbiAgICAgICAgICBjb25zdCBhcnIgPSBodHRwRXJyb3JSZXNwb25zZS5oZWFkZXJzLmtleXMoKTtcbiAgICAgICAgICBsZXQgZXJyb3JIZWFkZXIgPSBudWxsO1xuICAgICAgICAgIGxldCBlbnRpdHlLZXkgPSBudWxsO1xuICAgICAgICAgIGFyci5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCdhcHAtZXJyb3InKSkge1xuICAgICAgICAgICAgICBlcnJvckhlYWRlciA9IGh0dHBFcnJvclJlc3BvbnNlLmhlYWRlcnMuZ2V0KGVudHJ5KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnkudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnYXBwLXBhcmFtcycpKSB7XG4gICAgICAgICAgICAgIGVudGl0eUtleSA9IGh0dHBFcnJvclJlc3BvbnNlLmhlYWRlcnMuZ2V0KGVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoZXJyb3JIZWFkZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eU5hbWUgPSB0cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ2dsb2JhbC5tZW51LmVudGl0aWVzLicgKyBlbnRpdHlLZXkpO1xuICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KGVycm9ySGVhZGVyLCBlcnJvckhlYWRlciwgeyBlbnRpdHlOYW1lIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaHR0cEVycm9yUmVzcG9uc2UuZXJyb3IgIT09ICcnICYmIGh0dHBFcnJvclJlc3BvbnNlLmVycm9yLmZpZWxkRXJyb3JzKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZEVycm9ycyA9IGh0dHBFcnJvclJlc3BvbnNlLmVycm9yLmZpZWxkRXJyb3JzO1xuICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZEVycm9yIG9mIGZpZWxkRXJyb3JzKSB7XG4gICAgICAgICAgICAgIGlmIChbJ01pbicsICdNYXgnLCAnRGVjaW1hbE1pbicsICdEZWNpbWFsTWF4J10uaW5jbHVkZXMoZmllbGRFcnJvci5tZXNzYWdlKSkge1xuICAgICAgICAgICAgICAgIGZpZWxkRXJyb3IubWVzc2FnZSA9ICdTaXplJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBjb252ZXJ0ICdzb21ldGhpbmdbMTRdLm90aGVyWzRdLmlkJyB0byAnc29tZXRoaW5nW10ub3RoZXJbXS5pZCcgc28gdHJhbnNsYXRpb25zIGNhbiBiZSB3cml0dGVuIHRvIGl0XG4gICAgICAgICAgICAgIGNvbnN0IGNvbnZlcnRlZEZpZWxkID0gZmllbGRFcnJvci5maWVsZC5yZXBsYWNlKC9cXFtcXGQqXFxdL2csICdbXScpO1xuICAgICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSB0cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ2Nvb3BjeWNsZUFwcC4nICsgZmllbGRFcnJvci5vYmplY3ROYW1lICsgJy4nICsgY29udmVydGVkRmllbGQpO1xuICAgICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoJ0Vycm9yIG9uIGZpZWxkIFwiJyArIGZpZWxkTmFtZSArICdcIicsICdlcnJvci4nICsgZmllbGRFcnJvci5tZXNzYWdlLCB7IGZpZWxkTmFtZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGh0dHBFcnJvclJlc3BvbnNlLmVycm9yICE9PSAnJyAmJiBodHRwRXJyb3JSZXNwb25zZS5lcnJvci5tZXNzYWdlKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoaHR0cEVycm9yUmVzcG9uc2UuZXJyb3IubWVzc2FnZSwgaHR0cEVycm9yUmVzcG9uc2UuZXJyb3IubWVzc2FnZSwgaHR0cEVycm9yUmVzcG9uc2UuZXJyb3IucGFyYW1zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KGh0dHBFcnJvclJlc3BvbnNlLmVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIDQwNDpcbiAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoJ05vdCBmb3VuZCcsICdlcnJvci51cmwubm90LmZvdW5kJyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoaHR0cEVycm9yUmVzcG9uc2UuZXJyb3IgIT09ICcnICYmIGh0dHBFcnJvclJlc3BvbnNlLmVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChodHRwRXJyb3JSZXNwb25zZS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KGh0dHBFcnJvclJlc3BvbnNlLmVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRDbGFzc2VzKGFsZXJ0OiBKaGlBbGVydCk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IHtcbiAgICBjb25zdCBjbGFzc2VzID0geyAnamhpLXRvYXN0JzogQm9vbGVhbihhbGVydC50b2FzdCkgfTtcbiAgICBpZiAoYWxlcnQucG9zaXRpb24pIHtcbiAgICAgIHJldHVybiB7IC4uLmNsYXNzZXMsIFthbGVydC5wb3NpdGlvbl06IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lcnJvckxpc3RlbmVyKSB7XG4gICAgICB0aGlzLmV2ZW50TWFuYWdlci5kZXN0cm95KHRoaXMuZXJyb3JMaXN0ZW5lcik7XG4gICAgfVxuICAgIGlmICh0aGlzLmh0dHBFcnJvckxpc3RlbmVyKSB7XG4gICAgICB0aGlzLmV2ZW50TWFuYWdlci5kZXN0cm95KHRoaXMuaHR0cEVycm9yTGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVycm9yQWxlcnQobWVzc2FnZTogc3RyaW5nLCBrZXk/OiBzdHJpbmcsIGRhdGE/OiBhbnkpOiB2b2lkIHtcbiAgICBtZXNzYWdlID0ga2V5ICYmIGtleSAhPT0gbnVsbCA/IGtleSA6IG1lc3NhZ2U7XG5cbiAgICBjb25zdCBuZXdBbGVydDogSmhpQWxlcnQgPSB7XG4gICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgIG1zZzogbWVzc2FnZSxcbiAgICAgIHBhcmFtczogZGF0YSxcbiAgICAgIHRpbWVvdXQ6IDUwMDAsXG4gICAgICB0b2FzdDogdGhpcy5hbGVydFNlcnZpY2UuaXNUb2FzdCgpLFxuICAgICAgc2NvcGVkOiB0cnVlXG4gICAgfTtcblxuICAgIHRoaXMuYWxlcnRzLnB1c2godGhpcy5hbGVydFNlcnZpY2UuYWRkQWxlcnQobmV3QWxlcnQsIHRoaXMuYWxlcnRzKSk7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==