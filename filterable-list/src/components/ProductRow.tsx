interface Props {
  name: string;
  price: string;
  inStock: boolean;
}

const ProductRow: React.FC<Props> = ({ name, price, inStock }) => {
  return (
    <>
      {inStock ? (
        <div className="text-left">{name}</div>
      ) : (
        <div className="text-left text-red-500">{name}</div>
      )}
      <div className="col-start-2">{price}</div>
    </>
  );
};

export default ProductRow;
