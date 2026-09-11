import { es } from "./es";
import { en } from "./en";

export type Messages = typeof es;
export type Locale = "es" | "en";

export const dictionaries: Record<Locale, Messages> = { es, en };