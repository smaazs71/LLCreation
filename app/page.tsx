import { Cart, Catalogue, Hero } from "../components";

const HomePage = ({ searchParams }: any) => {
  return (
    <div>
      <Hero />
      <Catalogue />
      <Cart />
    </div>
  );
};

export default HomePage;
