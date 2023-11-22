interface Props {
  search: string;
  inStockOnly: boolean;
  onSearchChange: (search: string) => void;
  onInStockOnlyChange: (inStockOnly: boolean) => void;
}

const SearchBar: React.FC<Props> = ({
  search,
  inStockOnly,
  onSearchChange,
  onInStockOnlyChange,
}) => {
  return (
    <div className="text-left">
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div>
        <input
          type="checkbox"
          className="mr-4"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        <span>Only show products in stock</span>
      </div>
    </div>
  );
};

export default SearchBar;
