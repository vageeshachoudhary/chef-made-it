import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { AgmCoreModule } from '@agm/core';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { AboutComponent } from './about/about.component';
import { VarietyComponent } from './variety/variety.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SearchPipe } from '../pipes/search-pipes';

// Subscriptions
import { SubscriptionsComponent } from '../subscriptions/subscriptions/subscriptions.component';
import { SubscriptionsCarouselComponent } from '../subscriptions/subscriptions-carousel/subscriptions-carousel.component';

// Services
import { ServiceCarouselComponent } from '../services-category/services-carousel/services-carousel.component';
import { PersonalChefComponent } from '../services-category/personal-chef/personal-chef.component';
import { ChefRoomsComponent } from '../services-category/chef-rooms/chef-rooms.component';
import { ServicesComponent } from '../services/services.component';

// Login
import { LoginComponent } from '../login/login.component';

const homeRoute: Routes = [
  	{ path: '', component: HomeComponent },
    { path: 'subscriptions', 
      children: [
        { path: '', component: SubscriptionsComponent }
      ] 
    },
    { path: 'services', 
      children: [
        { path: '', component: ServicesComponent },
        { path: 'personal-chef', component: PersonalChefComponent },
        { path: 'chef-rooms', component: ChefRoomsComponent }
      ] 
    },
    { path: 'login', 
      children: [
        { path: '', component: LoginComponent }
      ] 
    }
];

@NgModule({
  imports: [
    SharedModule,
    AgmCoreModule,
  	RouterModule.forRoot(homeRoute)
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    SubscriptionsComponent,
    SubscriptionsCarouselComponent,
    ServiceCarouselComponent,
    PersonalChefComponent,
    ChefRoomsComponent,
    ServicesComponent,
    HeaderCarouselComponent,
    AboutComponent,
    LoginComponent,
    VarietyComponent,
    ContactUsComponent,
    SearchPipe
  ],
  providers: []
})

export class HomeRoutingModule { }