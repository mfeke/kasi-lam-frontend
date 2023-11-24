import { ShopProfileComponent } from './components/shop-profile/shop-profile.component';
import { UpdateComponent } from './components/update/update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ShopMenuComponent } from './components/shop-menu/shop-menu.component';
import { FormCheckoutComponent } from './components/form-checkout/form-checkout.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop-details/:id', component: ShopMenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:"formCheckout", component:FormCheckoutComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'profiledit', component: EditprofileComponent },

  { path: 'user', component: BoardUserComponent },
  { path: 'product/:id', component: UpdateComponent},
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'cart', component: CartComponent },
  {path:"shopProfile", component:ShopProfileComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
