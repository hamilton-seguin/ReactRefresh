import { useState } from "react";

import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableList: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  return (
    <>
      <SearchBar
        search={search}
        inStockOnly={inStockOnly}
        onSearchChange={setSearch}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable search={search} inStockOnly={inStockOnly} />
    </>
  );
};
export default FilterableList;
