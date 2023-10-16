import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const userRoutes: Routes = [
  { path: '', component: UserDashboardComponent },
];

@NgModule({
  declarations: [UserDashboardComponent,  ],
  imports: [CommonModule, RouterModule.forChild(userRoutes)   ],
  
  providers: [],
  
})

export class UserModule { }
