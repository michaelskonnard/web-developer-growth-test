import {Alternate, ContentSection, PageParams, Metadata} from "@/types";

export class Page {
  id: number;
  slug: string;
  path: string;
  locale: string;
  alternates: Alternate[];
  metadata: Metadata;
  contentSections: ContentSection[];

  constructor({
    id,
    slug,
    path,
    locale,
    alternates,
    metadata,
    contentSections,

  }: PageParams) {
    this.id = id;
    this.slug = slug;
    this.path = path;
    this.locale = locale;
    this.alternates = alternates;
    this.metadata = metadata;
    this.contentSections = contentSections;
  }
}
