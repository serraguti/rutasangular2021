import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//NECESITAMOS IMPORTAR LOS COMPONENTES QUE VAYAMOS A NAVEGAR
import { HomeComponent } from "./components/home/home.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { CineComponent } from "./components/cine/cine.component";
import { TelevisionComponent } from "./components/television/television.component";
import { Error404Component } from "./components/error404/error404.component";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";

//DEFINIMOS EL ARRAY DE RUTAS PARA LA NAVEGACION
//QUE ES DE TIPO Routes
const appRoutes: Routes = [
    //EN path LA BARRA YA ESTA IMPLICITA, NO SE PONE
    {path: "", component: HomeComponent},
    {path: "numerodoble", component: NumerodobleComponent},
    {path: "numerodoble/:numero", component:NumerodobleComponent},
    {path: "home", component: HomeComponent},
    {path: "musica", component: MusicaComponent},
    {path: "television", component: TelevisionComponent},
    {path: "cine", component: CineComponent},
    {path: "**", component: Error404Component}
];

//DE ESTA CLASE SE EXPORTAN DOS ELEMENTOS
//EL PRIMERO ES EL PROVEEDOR DE RUTAS, QUE ES UN ARRAY VACIO
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);


