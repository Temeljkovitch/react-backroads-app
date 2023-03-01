import Title from "./Title";
import { toursLink } from "../data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {toursLink.map((link) => {
          return <Tour key={link.id} {...link} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
