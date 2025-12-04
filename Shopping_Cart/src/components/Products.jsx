import { products } from "../data/products";
import Product from "./Product";
import Container from "./UI/Container";

function Products() {
  return (
    <div className="my-6">
      <Container>
        <h1 className="mb-6 text-2xl font-semibold">Best of ARC</h1>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4.5 sm:gap-6">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Products;
