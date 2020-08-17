import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeriodictableComponent } from './periodictable/periodictable.component';
import { HttpClientModule } from '@angular/common/http'
import { ElementsService } from './elements.service';
import { ElementComponent } from './element/element.component';
import { ElementPageComponent } from './element-page/element-page.component';

const appRoutes: Routes = [
  { path: 'element/:id', component: ElementPageComponent },
  { path: 'table', component: PeriodictableComponent },
  { path: '',
    redirectTo: '/table',
    pathMatch: 'full'
  },
];

//<app-periodictable></app-periodictable>
@NgModule({
  declarations: [
    AppComponent,
    PeriodictableComponent,
    ElementComponent,
    ElementPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    RouterModule
  ],
  providers: [ElementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
