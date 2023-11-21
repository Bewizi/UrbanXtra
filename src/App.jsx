import Nav from "./Component/Nav";
import {Hero, About, Products} from "./Sections/Index";



const App = () => {
  return (
    <main>
    <Nav/>
      <section className="sm:px-0 md:px-0 lg:px-0 xl:px-0">
        <Hero />
      </section>
      <section className="">
        <Products/>
      </section>
      <section>
      <About/>
      </section>
      
    </main>
  );
};

export default App;
