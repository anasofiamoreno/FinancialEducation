import { rendererTypeName } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { setDoc } from 'firebase/firestore';
import { render, screen } from '@testing-library/angular';

import { EdituserinfoComponent } from './edituserinfo.component';

describe('EdituserinfoComponent', () => {
	let component: EdituserinfoComponent;
	let fixture: ComponentFixture<EdituserinfoComponent>;

	test("Bucas nombre de 'Sofia", async () => {
		render(EdituserinfoComponent, {
			componentProperties: {
				name: 'Sofia'
			}
		});

		const screantest = screen.findByText('Sofia');

		console.log('-------------------------------------------------------------------', screantest);
	});

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ EdituserinfoComponent ]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(EdituserinfoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
