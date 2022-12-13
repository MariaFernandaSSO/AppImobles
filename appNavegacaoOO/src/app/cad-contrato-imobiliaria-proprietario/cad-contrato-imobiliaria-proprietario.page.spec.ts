import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadContratoImobiliariaProprietarioPage } from './cad-contrato-imobiliaria-proprietario.page';

describe('CadContratoImobiliariaProprietarioPage', () => {
  let component: CadContratoImobiliariaProprietarioPage;
  let fixture: ComponentFixture<CadContratoImobiliariaProprietarioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadContratoImobiliariaProprietarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadContratoImobiliariaProprietarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
