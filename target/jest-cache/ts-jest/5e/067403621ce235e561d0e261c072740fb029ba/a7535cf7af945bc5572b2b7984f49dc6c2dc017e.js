"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const test_module_1 = require("../../../test.module");
const basket_detail_component_1 = require("app/entities/basket/basket-detail.component");
const basket_model_1 = require("app/shared/model/basket.model");
describe('Component Tests', () => {
    describe('Basket Management Detail Component', () => {
        let comp;
        let fixture;
        const route = { data: rxjs_1.of({ basket: new basket_model_1.Basket(123) }) };
        beforeEach(() => {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.CoopcycleTestModule],
                declarations: [basket_detail_component_1.BasketDetailComponent],
                providers: [{ provide: router_1.ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(basket_detail_component_1.BasketDetailComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(basket_detail_component_1.BasketDetailComponent);
            comp = fixture.componentInstance;
        });
        describe('OnInit', () => {
            it('Should load basket on init', () => {
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(comp.basket).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL2Jhc2tldC9iYXNrZXQtZGV0YWlsLmNvbXBvbmVudC5zcGVjLnRzIiwibWFwcGluZ3MiOiI7O0FBQUEsbURBQWtFO0FBQ2xFLDRDQUFpRDtBQUNqRCwrQkFBMEI7QUFFMUIsc0RBQTJEO0FBQzNELHlGQUFvRjtBQUNwRixnRUFBdUQ7QUFFdkQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUMvQixRQUFRLENBQUMsb0NBQW9DLEVBQUUsR0FBRyxFQUFFO1FBQ2xELElBQUksSUFBMkIsQ0FBQztRQUNoQyxJQUFJLE9BQWdELENBQUM7UUFDckQsTUFBTSxLQUFLLEdBQUksRUFBRSxJQUFJLEVBQUUsU0FBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUkscUJBQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQTRCLENBQUM7UUFFbkYsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLGlDQUFtQixDQUFDO2dCQUM5QixZQUFZLEVBQUUsQ0FBQywrQ0FBcUIsQ0FBQztnQkFDckMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsdUJBQWMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7YUFDMUQsQ0FBQztpQkFDQyxnQkFBZ0IsQ0FBQywrQ0FBcUIsRUFBRSxFQUFFLENBQUM7aUJBQzNDLGlCQUFpQixFQUFFLENBQUM7WUFDdkIsT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLCtDQUFxQixDQUFDLENBQUM7WUFDekQsSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ3RCLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLEVBQUU7Z0JBQ3BDLE9BQU87Z0JBQ1AsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUVoQixPQUFPO2dCQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckUsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvYWxpL2V4ZW1wbGUtamhpcHN0ZXIvdGVzdGJlZC9zcmMvdGVzdC9qYXZhc2NyaXB0L3NwZWMvYXBwL2VudGl0aWVzL2Jhc2tldC9iYXNrZXQtZGV0YWlsLmNvbXBvbmVudC5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29vcGN5Y2xlVGVzdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3Rlc3QubW9kdWxlJztcbmltcG9ydCB7IEJhc2tldERldGFpbENvbXBvbmVudCB9IGZyb20gJ2FwcC9lbnRpdGllcy9iYXNrZXQvYmFza2V0LWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFza2V0IH0gZnJvbSAnYXBwL3NoYXJlZC9tb2RlbC9iYXNrZXQubW9kZWwnO1xuXG5kZXNjcmliZSgnQ29tcG9uZW50IFRlc3RzJywgKCkgPT4ge1xuICBkZXNjcmliZSgnQmFza2V0IE1hbmFnZW1lbnQgRGV0YWlsIENvbXBvbmVudCcsICgpID0+IHtcbiAgICBsZXQgY29tcDogQmFza2V0RGV0YWlsQ29tcG9uZW50O1xuICAgIGxldCBmaXh0dXJlOiBDb21wb25lbnRGaXh0dXJlPEJhc2tldERldGFpbENvbXBvbmVudD47XG4gICAgY29uc3Qgcm91dGUgPSAoeyBkYXRhOiBvZih7IGJhc2tldDogbmV3IEJhc2tldCgxMjMpIH0pIH0gYXMgYW55KSBhcyBBY3RpdmF0ZWRSb3V0ZTtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgaW1wb3J0czogW0Nvb3BjeWNsZVRlc3RNb2R1bGVdLFxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtCYXNrZXREZXRhaWxDb21wb25lbnRdLFxuICAgICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEFjdGl2YXRlZFJvdXRlLCB1c2VWYWx1ZTogcm91dGUgfV1cbiAgICAgIH0pXG4gICAgICAgIC5vdmVycmlkZVRlbXBsYXRlKEJhc2tldERldGFpbENvbXBvbmVudCwgJycpXG4gICAgICAgIC5jb21waWxlQ29tcG9uZW50cygpO1xuICAgICAgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KEJhc2tldERldGFpbENvbXBvbmVudCk7XG4gICAgICBjb21wID0gZml4dHVyZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdPbkluaXQnLCAoKSA9PiB7XG4gICAgICBpdCgnU2hvdWxkIGxvYWQgYmFza2V0IG9uIGluaXQnLCAoKSA9PiB7XG4gICAgICAgIC8vIFdIRU5cbiAgICAgICAgY29tcC5uZ09uSW5pdCgpO1xuXG4gICAgICAgIC8vIFRIRU5cbiAgICAgICAgZXhwZWN0KGNvbXAuYmFza2V0KS50b0VxdWFsKGphc21pbmUub2JqZWN0Q29udGFpbmluZyh7IGlkOiAxMjMgfSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwidmVyc2lvbiI6M30=