import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReview,
  Subscribe,
  Footer,
} from "./section";
import Nav from "./components/Nav";
const App = () => (
  <main className="relative">
    {/* Nav */}
    <Nav />
    {/* Hero Container  */}
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>

    {/* Popular Product Container */}
    <section className="padding">
      <PopularProducts />
    </section>

    {/* SuperQuality Container */}
    <section className="padding">
      <SuperQuality />
    </section>

    {/* Services Container */}
    <section className="padding-x  py-10">
      <Services />
    </section>

    {/* SpecialOffer Containe */}
    <section className="padding">
      <SpecialOffers />
    </section>

    {/* Customer Review */}
    <section className="bg-pale-blue padding">
      <CustomerReview />
    </section>

    {/* Subscribe Container */}
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>

    {/* Footer Container */}
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
