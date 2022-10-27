import {Quote} from "./quote";

export interface Stock {
  id: string,
  name: string,
  quote: Quote | null
}
