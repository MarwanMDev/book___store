import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePanelComponent } from './home-panel/home-panel.component';
import { EBookComponent } from './ebook/e-book.component';
import { OrderComponent } from './order/order.component';
import { AddEventComponent } from './add-event/add-event.component';
import { MassageComponent } from './massage/massage.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CatageryComponent } from './User/catagery/catagery.component';
import { AllElectronicBooksComponent } from './all-electronic-books/all-electronic-books.component';
import { NewPublisherComponent } from './new-publisher/new-publisher.component';
import { AllPaperBooksComponent } from './all-paper-books/all-paper-books.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { ShowPublishersComponent } from './show-publishers/show-publishers.component';
import { ShowAdminsComponent } from './show-admins/show-admins.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AppComponent } from '../app.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AHeaderComponent } from './a-header/a-header.component';
import { LayerComponent } from './layer/layer.component';




// canActivate:[AuthGuard]
const adminRoutes: Routes = [
  { path: 'home', component: AdminDashboardComponent },
  { path: 'layer', component: LayerComponent },
  {path:'' , redirectTo:'home-panel' , pathMatch:'full'},
  {path:'home-panel'  , component: HomePanelComponent},
  {path:'ebook' , canActivate:[AuthGuard] , component: EBookComponent  },
  {path:'order' , canActivate:[AuthGuard] ,component : OrderComponent},
  {path:'add-event' , canActivate:[AuthGuard] ,component: AddEventComponent},
  {path:'massage',canActivate:[AuthGuard] , component: MassageComponent},
  {path:'AddCategory',canActivate:[AuthGuard] , component: AddCategoryComponent},
  {path:'login' , component: LoginComponent},
  {path:'add-publisher' ,canActivate:[AuthGuard] , component: NewPublisherComponent},
  {path:'cate' , canActivate:[AuthGuard] ,component:CatageryComponent},
  {path:'Electronic_Books' , canActivate:[AuthGuard] ,component:AllElectronicBooksComponent},
  {path:'Paper_Books' ,canActivate:[AuthGuard] , component:AllPaperBooksComponent},
  {path:'Users' , canActivate:[AuthGuard] ,component:ShowUsersComponent},
  {path:'Publisher' ,canActivate:[AuthGuard] , component:ShowPublishersComponent},
  {path:'Admins' , canActivate:[AuthGuard] ,component:ShowAdminsComponent},
];



@NgModule({
  declarations: [
    AdminDashboardComponent,
    CatageryComponent,
    HomePanelComponent,
    OrderComponent,
    AddEventComponent,
    MassageComponent,
    AdminHeaderComponent,
    AHeaderComponent,
    NewPublisherComponent,
    LoginComponent,
    AddCategoryComponent,
    EBookComponent,
    AllElectronicBooksComponent,
    AllPaperBooksComponent,
    ShowAdminsComponent,
    ShowPublishersComponent,
    ShowUsersComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(adminRoutes)],
  exports :[AdminDashboardComponent,
    CatageryComponent,
    HomePanelComponent,
    OrderComponent,
    AddEventComponent,
    MassageComponent,
    AdminHeaderComponent,
    AHeaderComponent,
    NewPublisherComponent,
    LoginComponent,
    AddCategoryComponent,
    EBookComponent,
    AllElectronicBooksComponent,
    AllPaperBooksComponent,
    ShowAdminsComponent,
    ShowPublishersComponent,
    ShowUsersComponent,],
})
export class AdminModule { }
