"use client";
import dynamic from "next/dynamic";
import React from "react";

import CTACard from "./components/CTACard";
import { AtomIcon, MessageCircle, Network, SearchIcon } from "lucide-react";

const DashboardCardMap = dynamic(
  () => import("@/components/dashboard/components/DashboardCardMap"),
  {
    ssr: false,
  },
);

const DashboardCardChat = dynamic(
  () => import("@/components/dashboard/components/DashboardCardChat"),
  {
    ssr: false,
  },
);

const Index: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CTACard
          subtitle="get access to more molecules"
          title="Molecule Bank"
          link="/molecule-bank"
        >
          <AtomIcon />
        </CTACard>
        <CTACard
          subtitle="get access to more molecules"
          title="Generate Molecule"
          link="/model"
        >
          <Network />
        </CTACard>
        <CTACard
          subtitle="get access to more molecules"
          title="Search Compounds"
          link="/research"
        >
          <SearchIcon />
        </CTACard>
        <CTACard
          subtitle="get access to more molecules"
          title="Collaborative Research"
          link="/message"
        >
          <MessageCircle />
        </CTACard>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <DashboardCardChat />
        <DashboardCardMap />
      </div>
    </>
  );
};

export default Index;
