import {getPageDataFromLanguageAndSlug} from "@/utils/pageUtils";
import {Page} from "@/model/Page";
import cmsToComponentMap from "@/data/cmsToComponentMap";
import {ContentSection} from "@/types";
import React from "react";

export default async function Home() {
  const page = new Page(await getPageDataFromLanguageAndSlug("en", "home"));
  const { contentSections } = page;

  return (
    <div>
      {contentSections.map(section => {
        const SectionComponent: React.FC<ContentSection> = cmsToComponentMap[section.__component];
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