import { Routes } from '@angular/router';
import { Home } from './navbar/home/home';
import { Login } from './navbar/login/login';
import { Admin } from './navbar/admin/admin';
import { Auth } from './auth';
import { ManageBus } from './navbar/admin/manage-bus/manage-bus';
import { Dashboard } from './navbar/admin/dashboard/dashboard';
import { ManageRoute } from './navbar/admin/manage-route/manage-route';
import { ManageSchedule } from './navbar/admin/manage-schedule/manage-schedule';


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
        path: 'admin',
        component: Admin,
        canActivate: [Auth],
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'manage-bus',
                component: ManageBus
            },
            {
                path: 'manage-route',
                component: ManageRoute
            },
            {
                path: 'manage-schedule',
                component: ManageSchedule
            }
        ]
    }

];
