"use server";

import { quotes } from "@/data/quotes";
import { revalidatePath } from "next/cache";

export async function getQuotation() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  revalidatePath("/");
  return randomQuote;
}
