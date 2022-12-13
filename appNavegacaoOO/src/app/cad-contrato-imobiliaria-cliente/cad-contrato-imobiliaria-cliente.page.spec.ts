import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadContratoImobiliariaClientePage } from './cad-contrato-imobiliaria-cliente.page';

describe('CadContratoImobiliariaClientePage', () => {
  let component: CadContratoImobiliariaClientePage;
  let fixture: ComponentFixture<CadContratoImobiliariaClientePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadContratoImobiliariaClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadContratoImobiliariaClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
