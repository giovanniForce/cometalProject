import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { DashComponent } from './pages/dash/dash.component';
import { DemandeInterventionComponent } from './pages/demande-intervention/demande-intervention.component';
import { OrdersTableComponent } from './pages/orders-table/orders-table.component';
import { StockageComponent } from './pages/stockage/stockage.component';

const routes: Routes = [
  { path: 'dashboard', component: DashComponent },
  { path: 'stockage', component: StockageComponent },
  { path: 'demandeIntervention', component: DemandeInterventionComponent },
  { path: 'odersTableau', component: OrdersTableComponent },
  { path: 'nav', component: NavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

