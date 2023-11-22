interface Props {
  category: string;
}

const ProductCategoryRow: React.FC<Props> = ({ category }) => {
  return (
    <div className="font-bold col-span-2 mt-4">
      {category}
    </div>
  );
}

export default ProductCategoryRow;