import * as tslib_1 from "tslib";
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from '../shared/patient.service';
let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            ExploreContainerComponentModule,
            RouterModule.forChild([{ path: '', component: Tab1Page }])
        ],
        declarations: [Tab1Page],
        providers: [PatientService]
    })
], Tab1PageModule);
export { Tab1PageModule };
//# sourceMappingURL=tab1.module.js.map