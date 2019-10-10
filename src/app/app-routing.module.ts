import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  {path: 'stores', component: StoreListComponent},
  {path: 'stores/:store', component: ItemListComponent},
  {path: '', pathMatch: 'full', redirectTo: '/stores'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
