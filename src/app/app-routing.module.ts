import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as paths } from '@constants/routes';

// const routes: Routes = paths
//   .filter((path: any) => !path.isExternal)
//   .map((route: any) => {
//     return {
//       path: route.path,
//       component: route.component,
//     };
//   });

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
