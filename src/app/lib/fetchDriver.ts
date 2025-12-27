import { Driver, drivers } from "@/data/driver";

export async function fetchDrivers(): Promise<Driver[]> {
  await new Promise((r) => setTimeout(r, 500));
  return drivers;
}