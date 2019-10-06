import { MenuItem } from '../framework/services/menu.service';


export let initialMenuItems: Array<MenuItem> =[
    {
        text: 'Dashboard',
        route: '/users',
        submenu: null
    },
    {
        text: 'Add User',
        route: '/user-add',
        submenu: null
    }
];