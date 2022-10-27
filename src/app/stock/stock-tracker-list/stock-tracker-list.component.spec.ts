import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTrackerListComponent } from './stock-tracker-list.component';

describe('StockTrackerListComponent', () => {
    let component: StockTrackerListComponent;
    let fixture: ComponentFixture<StockTrackerListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StockTrackerListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StockTrackerListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});