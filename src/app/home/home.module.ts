import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationsComponent } from '../stations/stations.component';
import { UsersComponent } from '../users/users.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, StationsComponent, UsersComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class HomeModule {}
