import {BrandsComponent} from "@/types";
import Image from "next/image";
import React from "react";

import styles from "./brands.module.scss";

const Brands: React.FC<BrandsComponent> = (props: BrandsComponent) => {
  const brands = props?.brands ?? [];

  return (
    <div className={styles.brandsWrapper}>
        {brands.map((brand) => (
          <Image src={brand.url} alt={brand.title} key={brand.id} height={40} width={0} className={styles.brandImage}/>
        ))}
    </div>
  )
}

export default Brands;