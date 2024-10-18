import React from "react";
import ContentSection from "../Reusable/TextSection";
import {Genshin} from "@/Assets/images/index";

const PageThree = () => {
  const heading = "Artistic Visions for a Creative Future";
  const text =
    "At Art Tonic Studios, we are passionate about transforming artistic ideas into captivating visual experiences. Our team of visionary artists and creative thinkers work together to deliver tailored art solutions that inspire and resonate with diverse audiences.";
  const text1 =
    "We specialize in understanding artistic challenges and offering innovative solutions that elevate creativity to new heights. Our dedication to artistic excellence ensures that every project not only meets but surpasses the expectations of art lovers, making us a trusted partner in their creative journey.";
  const imageUrl = Genshin.src;

  const imageAlt = "Art Tonic Studios Team";

  return (
    <div id="page3" className="relative rounded-xl bg-[#EFEAE3] py-16">
      <div className="mx-5">
        <ContentSection
          heading={heading}
          text={text}
          text1={text1}
          imageUrl={imageUrl}
          imageAlt={imageAlt}
          imageWidth={300} // Pass as a number
          imageHeight={300} // Pass as a number
        />
      </div>
    </div>
  );
};

export default PageThree;
