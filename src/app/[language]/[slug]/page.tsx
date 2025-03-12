import {getAllPages, getPageDataFromLanguageAndSlug} from "@/utils/pageUtils";
import {Page} from "@/model/Page";
import cmsToComponentMap from "@/data/cmsToComponentMap";

export async function generateStaticParams(): Promise<PageProps[]> {
  const pages = await getAllPages();

  const paths = pages.map((page: Page) => {
    return ({language: page.locale, slug: page.slug});
  });

  return paths.filter(path => path.language !== "en");
}

type PageProps = {
  language: string;
  slug: string;
}

type Params = {
  params: PageProps;
}


export default async function PageContent({ params }: Params) {
  const { language, slug } = params;

  const page = new Page(await getPageDataFromLanguageAndSlug(language ?? "", slug ?? ""));
  const { contentSections } = page;

  return (
      <div>
        {contentSections.map(section => {
          const SectionComponent = cmsToComponentMap[section.__component];
          if (!SectionComponent) {return null}
          return (
            <div key={section.id}>
              <SectionComponent {...section}/>
            </div>

          )
        })}
      </div>
  );
}