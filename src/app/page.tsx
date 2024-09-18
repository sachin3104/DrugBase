import { Metadata } from "next";

import DefaultLayout from "@/components/layouts/DefaultLayout";
import Index from "@/components/dashboard";

export const metadata: Metadata = {
  title: "DrugBase - Drug Research Platform",
  description: "Discription about Drugbase",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Index />
      </DefaultLayout>
    </>
  );
}
