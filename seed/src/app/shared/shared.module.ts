import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { TestComponent } from './test-component/test.component';
import { TitleService } from './services/title.service';

@NgModule({
  imports: [
      CommonModule,
      TranslateModule.forChild()
  ],
  declarations: [
      TestComponent
  ],
  providers: [
      TitleService
  ],
  exports: [
      TestComponent
  ]
})
export class SharedModule { }
