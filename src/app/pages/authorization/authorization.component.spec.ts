import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationComponent } from './authorization.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

describe('AuthorizationComponent', () => {
  let component: AuthorizationComponent;
  let fixture: ComponentFixture<AuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorizationComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: Auth, useValue: {} },
        { provide: Firestore, useValue: {} },
        { provide: ToastrService, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
