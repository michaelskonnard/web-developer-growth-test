import {getAllPages, getPageDataFromLanguageAndSlug} from "@/utils/pageUtils";
import {Page} from "@/model/Page";
import cmsToComponentMap from "@/data/cmsToComponentMap";

export async function generateStaticParams() {
  const pages = await getAllPages();

  const paths = pages.map((page: Page) => {
    return ({language: page.locale, slug: page.slug});
  });

  return paths.filter(path => path.language !== "en");
}

export default async function PageContent({ params }: { params: { language: string; slug: string } } ) {
  const { language, slug } = params; // ✅ Destructure inside the function

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