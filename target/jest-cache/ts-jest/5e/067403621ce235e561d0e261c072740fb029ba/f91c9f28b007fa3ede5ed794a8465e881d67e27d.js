"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const ng_jhipster_1 = require("ng-jhipster");
const basket_service_1 = require("./basket.service");
let BasketDeleteDialogComponent = class BasketDeleteDialogComponent {
    constructor(basketService, activeModal, eventManager) {
        this.basketService = basketService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    cancel() {
        this.activeModal.dismiss();
    }
    confirmDelete(id) {
        this.basketService.delete(id).subscribe(() => {
            this.eventManager.broadcast('basketListModification');
            this.activeModal.close();
        });
    }
};
BasketDeleteDialogComponent = tslib_1.__decorate([
    core_1.Component({
        template: require('./basket-delete-dialog.component.html')
    }),
    tslib_1.__metadata("design:paramtypes", [basket_service_1.BasketService, ng_bootstrap_1.NgbActiveModal, ng_jhipster_1.JhiEventManager])
], BasketDeleteDialogComponent);
exports.BasketDeleteDialogComponent = BasketDeleteDialogComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2Jhc2tldC9iYXNrZXQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQTBDO0FBQzFDLDZEQUE0RDtBQUM1RCw2Q0FBOEM7QUFHOUMscURBQWlEO0FBS2pELElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0lBR3RDLFlBQXNCLGFBQTRCLEVBQVMsV0FBMkIsRUFBWSxZQUE2QjtRQUF6RyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUFZLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtJQUFHLENBQUM7SUFFbkksTUFBTTtRQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGFBQWEsQ0FBQyxFQUFVO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7QUFmWSwyQkFBMkI7SUFIdkMsZ0JBQVMsQ0FBQztRQUNULGtCQUFhLHVDQUF1QyxDQUFBO0tBQ3JELENBQUM7NkNBSXFDLDhCQUFhLEVBQXNCLDZCQUFjLEVBQTBCLDZCQUFlO0dBSHBILDJCQUEyQixDQWV2QztBQWZZLGtFQUEyQiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9hbGkvZXhlbXBsZS1qaGlwc3Rlci90ZXN0YmVkL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvYmFza2V0L2Jhc2tldC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgSmhpRXZlbnRNYW5hZ2VyIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBJQmFza2V0IH0gZnJvbSAnYXBwL3NoYXJlZC9tb2RlbC9iYXNrZXQubW9kZWwnO1xuaW1wb3J0IHsgQmFza2V0U2VydmljZSB9IGZyb20gJy4vYmFza2V0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhc2tldC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCYXNrZXREZWxldGVEaWFsb2dDb21wb25lbnQge1xuICBiYXNrZXQ/OiBJQmFza2V0O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBiYXNrZXRTZXJ2aWNlOiBCYXNrZXRTZXJ2aWNlLCBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLCBwcm90ZWN0ZWQgZXZlbnRNYW5hZ2VyOiBKaGlFdmVudE1hbmFnZXIpIHt9XG5cbiAgY2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygpO1xuICB9XG5cbiAgY29uZmlybURlbGV0ZShpZDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5iYXNrZXRTZXJ2aWNlLmRlbGV0ZShpZCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCgnYmFza2V0TGlzdE1vZGlmaWNhdGlvbicpO1xuICAgICAgdGhpcy5hY3RpdmVNb2RhbC5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG59XG4iXSwidmVyc2lvbiI6M30=