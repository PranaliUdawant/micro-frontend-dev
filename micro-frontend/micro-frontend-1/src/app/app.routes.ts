import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { HomeComponent } from './home/home.component';
import { MapviewComponent } from './mapview/mapview.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  
  {
    path: 'countryList',
    // loadChildren: () => {
    //   return loadRemoteModule({
    //     remoteEntry: 'http://localhost:3000/remoteEntry.js',
    //     remoteName: 'Microfrontend2',
    //     exposedModule: './CountryList',
    //   })
    //     .then((m) => m.CountryList)
    //     .catch((err) => console.log(err));
    // },
   component : CountryListComponent
  },
  {
    path: "mapview",
    component : MapviewComponent
  }
];
