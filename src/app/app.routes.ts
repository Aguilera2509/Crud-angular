import { Routes } from '@angular/router';
import { FriendsFormComponent } from './components/friends-form/friends-form.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';

export const routes: Routes = [
    {path: "", component: FriendsListComponent},
    {path: "addFriend", component: FriendsFormComponent},
    {path: "updateFriend/:id", component: FriendsFormComponent},
];
