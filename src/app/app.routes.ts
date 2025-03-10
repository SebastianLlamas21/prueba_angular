import { Routes } from '@angular/router';
import { Pagina1Component } from './modules/pagina1/pagina1.component';
import { Pagina2Component } from './modules/pagina2/pagina2.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'pagina1', component: Pagina1Component},
    {path: 'pagina2', component: Pagina2Component},
    {path: '', redirectTo: '/pagina1', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
