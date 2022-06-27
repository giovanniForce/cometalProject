import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './pages/dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './pages/card/card.component';
import { DemandesChartComponent } from './pages/charts/demandes-chart/demandes-chart.component';
import { DemandeResolvedTrafficChartComponent } from './pages/charts/demande-resolved-traffic-chart/demande-resolved-traffic-chart.component';
import { AnnualDemandeResolvedChartComponent } from './pages/charts/annual-demande-resolved-chart/annual-demande-resolved-chart.component';
import { EquipementAttSessionsChartComponent } from './pages/charts/equipement-att-sessions-chart/equipement-att-sessions-chart.component';
import { DemandeInterventionComponent } from './pages/demande-intervention/demande-intervention.component';
import { OrdersTableComponent } from './pages/orders-table/orders-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { StockageComponent } from './pages/stockage/stockage.component';
import { StockComponent } from './pages/stock/stock.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    DemandesChartComponent,
    DemandeResolvedTrafficChartComponent,
    AnnualDemandeResolvedChartComponent,
    EquipementAttSessionsChartComponent,
    DemandeInterventionComponent,
    OrdersTableComponent,
    StockageComponent,
    StockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
