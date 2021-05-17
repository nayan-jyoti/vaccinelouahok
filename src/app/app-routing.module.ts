import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompHomeComponent } from './comp-home/comp-home.component';
import { CompInvalidUrlComponent } from './comp-invalid-url/comp-invalid-url.component';

const routes: Routes = [
  { path: '', component: CompHomeComponent },
  { path: '**', component: CompInvalidUrlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
