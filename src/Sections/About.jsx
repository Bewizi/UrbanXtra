import { KunmiPearl } from "../assets/img";

const About = () => {
  return (
    <section id="about-us" className="grid grid-cols-2">
      <div className="px-12 ">
        <h3 className="text-4xl font-medium">
          We Provide You Super Quality Bags
        </h3>
        <p className="mb-5 spacing-y-5">
          Each piece is meticulously crafted with an emphasis on style,
          durability, and functionality. Our bags are made from the finest
          materials, ensuring they stand the test of time. We believe in quality
          over quantity, and that's why each bag undergoes rigorous quality
          checks to ensure you're getting the best. But it's not just about
          durability. Our bags are designed with you in mind, blending timeless
          elegance with modern trends. Whether you're heading to work, a social
          event, or travelling, our bags are your perfect companion. Experience
          the blend of style, sophistication, and durability with our
          collection. Stay stylish, stay fabulous!
        </p>
      </div>

      <div>
        <img src={KunmiPearl} alt="" width={500} />
      </div>
    </section>
  );
};

export default About;
