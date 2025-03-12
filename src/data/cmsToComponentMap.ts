import Hero from "@/components/pageSections/Hero";
import Brands from "@/components/pageSections/Brands";
import CardContentGrid from "@/components/pageSections/CardContentGrid";
import CenteredCta from "@/components/pageSections/CenteredCta";
import ModulesSection from "@/components/pageSections/ModulesSection";
import {
  ContentSection
} from "@/types";
import React from "react";

const cmsToComponentMap: Record<string, React.FC<ContentSection>> = {
  "sections.hero-video": Hero,
  "sections.brands": Brands,
  "sections.card-content-grid": CardContentGrid,
  "sections.modules": ModulesSection,
  "sections.centered-cta": CenteredCta,
};

export default cmsToComponentMap;