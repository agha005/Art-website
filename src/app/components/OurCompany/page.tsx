import React from "react";
import ContentSection from "../Reusable/TextSection";

const PageThree = () => {
  const heading = "Next-Gen Solutions for a Future Unfolded";
  const text =
    "At Tech Tonic Solutions, we are dedicated to transforming innovative ideas into impactful digital solutions. Our team of skilled developers and problem-solvers work collaboratively to deliver tailored technology solutions that drive business success.";
  const text1 =
    "We excel in understanding complex challenges and providing cutting-edge solutions that enhance operational efficiency and foster growth. Our commitment to excellence ensures that every project we undertake not only meets but exceeds our clients' expectations, making us a trusted partner in their journey toward technological advancement.";
  const imageUrl =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60";

  const imageAlt = "Tech Tonic Solutions Team";

  return (
    <div id="page3" className="relative rounded-xl bg-[#EFEAE3] py-16">
      <div className="mx-3 lg:mx-0">
      <ContentSection
        heading={heading}
        text={text}
        text1={text1}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        imageWidth={800} // Pass as a number
        imageHeight={600} // Pass as a number
      />
      </div>
    </div>
  );
};

export default PageThree;
