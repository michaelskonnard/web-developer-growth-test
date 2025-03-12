import {FooterMenu, Menu, Socials, Metadata, GlobalParams} from "@/types";

export class Global {
  id: number;
  locale: string;
  siteName: string;
  helpText: string;
  copyright: string;
  metadata: Metadata;
  menu: Menu[];
  social: Socials;
  footerMenu: FooterMenu[];

  constructor({ id, locale, siteName, helpText, copyright, metadata, menu, social, footerMenu }: GlobalParams) {
    this.id = id;
    this.locale = locale;
    this.siteName = siteName;
    this.helpText = helpText;
    this.copyright = copyright;
    this.metadata = metadata;
    this.menu = menu;
    this.social = social;
    this.footerMenu = footerMenu;
  }
}