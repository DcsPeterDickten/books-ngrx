import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";

export const modules = [ StoreDevtoolsModule.instrument({
  maxAge: 25,
  logOnly: environment.production
})];
