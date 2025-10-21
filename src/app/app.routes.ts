import { Routes } from '@angular/router';
import { Home } from './navbar/home/home';
import { Login } from './navbar/login/login';
import { Admin } from './navbar/admin/admin';
import { Auth } from './auth';
import { ManageBus } from './navbar/admin/manage-bus/manage-bus';
import { Dashboard } from './navbar/admin/dashboard/dashboard';
import { ManageRoute } from './navbar/admin/manage-route/manage-route';
import { ManageSchedule } from './navbar/admin/manage-schedule/manage-schedule';
import { Search } from './navbar/home/search/search';
import { ManageCustomer } from './navbar/admin/manage-customer/manage-customer';
import { Seats } from './navbar/home/seats/seats';


export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'search',
        component: Search
    },
    {
        path: 'seats',
        component: Seats
    },
    {
        path: 'admin',
        component: Admin,
        canActivate: [Auth],
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'bus',
                component: ManageBus
            },
            {
                path: 'route',
                component: ManageRoute
            },
            {
                path: 'schedule',
                component: ManageSchedule
            },
            {
                path: 'customer',
                component: ManageCustomer
            }
        ]
    }
];
