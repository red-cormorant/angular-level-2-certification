import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTrackerDetailComponent } from './stock-tracker-detail.component';

describe('StockTrackerDetailComponent', () => {
    let component: StockTrackerDetailComponent;
    let fixture: ComponentFixture<StockTrackerDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StockTrackerDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StockTrackerDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});