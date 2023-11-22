import { ReactNode } from "react";
import { products } from "../assets/products";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface Props {
  search: string;
  inStockOnly: boolean;
}

const ProductTable: React.FC<Props> = ({ search, inStockOnly }) => {
  const productRows: ReactNode[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(search.toLowerCase()) === -1 &&
      product.price.toLowerCase().indexOf(search.toLowerCase()) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      productRows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
      lastCategory = product.category;
    }
    productRows.push(
      <ProductRow
        key={product.name}
        name={product.name}
        price={product.price}
        inStock={product.stocked}
      />
    );
  });

  return (
    <div className="grid grid-cols-2 grid-rows-auto">
      <div className="font-bold">Name</div>
      <div className="font-bold">Price</div>
      {productRows}
    </div>
  );
};

export default ProductTable;
