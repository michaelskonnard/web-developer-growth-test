import {Metadata} from "./index";

export type GlobalParams = {
  id: number;
  locale: string;
  siteName: string;
  helpText: string;
  copyright: string;
  metadata: Metadata;
  menu: Menu[];
  social: Socials;
  footerMenu: FooterMenu[];
}

export type Dropdown = {
  id: number;
  title: string;
  link: string;
  openNewWindow: boolean;
}

export type Menu = {
  id: number;
  title: string;
  link: string;
  openNewWindow: boolean;
  dropdown: Dropdown[];
}

export type Socials = {
  facebook: string;
  instagram: string;
  twitter: string;
  youTube: string;
  tikTok: string;
  linkedIn: string;
}

export type FooterMenu = {
  id: number;
  title: string;
  openNewWindow: boolean;
  dropdown: Dropdown[];
}