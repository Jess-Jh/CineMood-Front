import { Routes } from '@angular/router';
import { BookingLayoutComponent } from './layouts/booking-layout/booking-layout.component';
import { BillboardPageComponent } from './pages/billboard-page/billboard-page.component';
import { RoomPageComponent } from './pages/room-page/room-page.component';
import { ConfectioneryPageComponent } from './pages/confectionery-page/confectionery-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MembershipPageComponent } from './pages/membership-page/membership-page.component';
import { PqrsPageComponent } from './pages/pqrs-page/pqrs-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

export const bookingRoutes: Routes = [
  {
    path: '',
    component: BookingLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: BillboardPageComponent,
      },
      {
        path: 'room/:idRoom',
        component: RoomPageComponent,
      },
      {
        path: 'confectionery',
        component: ConfectioneryPageComponent,
      },
      {
        path: 'membership',
        component: MembershipPageComponent,
      },
      {
        path: 'pqrs',
        component: PqrsPageComponent,
      },
      {
        path: 'user/:idUser',
        component: UserPageComponent,
      },
      {
        path: '**',
        component: NotFoundPageComponent,
      },
    ],
  },
];

export default bookingRoutes;
