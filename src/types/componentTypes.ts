export type Metadata = {
  id: number;
  metaTitle: string;
  metaDescription: string;
  robots: string;
  shareImage: string;
}

export type HeroVideoComponent = {
  id: number;
  __component: string;
  theme: string;
  full: boolean;
  preTitle: string;
  title: string;
  description: string;
  buttons: Button[];
  widget: Widget;
  background: Background;
};

export type BrandsComponent = {
  id: number;
  __component: string;
  theme: string;
  brands: Brand[];
};

export type Brand = {
  id: number;
  title: string;
  url: string;
}

export type CardContentGridComponent = {
  id: number;
  __component: string;
  theme: string;
  preTitle: string;
  title: string;
  description: string;
  cards: ContentCard[];
}

export type ContentCard = {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export type ModulesComponent = {
  id: number;
  __component: string;
  theme: string;
  preTitle: string;
  title: string;
  description: string;
  cards: ModulesCard[]
}

export type ModulesCard = {
  id: number;
  title: string;
  description: string;
  button: Button;
}

export type CenteredCtaComponent = {
  id: number;
  __component: string;
  theme: string;
  preTitle: string;
  title: string;
  description: string;
  buttons: Button[];
}

export type Button = {
  id: number;
  appearance?: "solid" | "ghost";
  size?: "sm" | "md" | "lg";
  color?: "blue";
  url: string;
  text: string;
  subText?: string;
  fluid?: boolean;
  newTab?: boolean;
  startIcon?: string;
  endIcon?: string;
}

export type Widget = {
  title: string;
  cta: string;
  url: string;
  format: string;
}

export type Background = {
  id: number;
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}