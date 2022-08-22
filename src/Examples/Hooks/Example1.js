import { useEffect, useState } from "react";

async function getData() {
  return {
    id: 1,
    title: "Juice",
    description: "Tasty juice",
  };
}

/**
 * Какая есть потенциальная проблема данного кода?
 */
const App = () => {
  return <Component id={1} />;
};

const Component = ({ id }) => {
  if (!id) {
    return null;
  }

  const [product, setProduct] = useState({
    id: null,
    title: "",
    description: "",
  });

  useEffect(() => {
    const getProduct = async () => {
      const product = await getData("/product/id");
      setProduct(product);
    };

    getProduct();
  }, [id]);

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
};

export default App;
