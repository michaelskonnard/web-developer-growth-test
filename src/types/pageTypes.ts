import {
  BrandsComponent,
  CardContentGridComponent,
  CenteredCtaComponent,
  HeroVideoComponent,
  Metadata,
  ModulesComponent
} from "./index";

export type PageParams = {
  id: number;
  slug: string;
  path: string;
  locale: string;
  alternates: Alternate[]
  metadata: Metadata;
  contentSections: ContentSection[];
};

export type Alternate = {
  locale: string;
  path: string;
}

export type ContentSection = HeroVideoComponent | BrandsComponent | CardContentGridComponent | ModulesComponent | CenteredCtaComponent;