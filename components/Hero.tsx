import { useBehaviorTracking } from "@uniformdev/optimize-tracker-react";
import { HeroData } from "../lib/types";
import Splitter from "./Splitter";
import { useRouter } from "next/router";

export const Hero = ({
  id,
  title,
  description,
  image,
  intentTag,
}: HeroData) => {
  const { query } = useRouter();

  if (!query.preview) {
    useBehaviorTracking(intentTag);
  }
  return (
    <>
      <div className="pt-24">
        <div
          className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
          data-kontent-component-id={id}
          data-kontent-add-button
          data-kontent-add-button-render-position="bottom"
          data-kontent-add-button-insert-position="after"
        >
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500">
            <p className="uppercase tracking-loose w-full">Uniform demo</p>
            <h1
              className="my-4 text-5xl font-bold leading-tight"
              data-kontent-element-codename="title"
            >
              {title}
            </h1>
            <div
              className="leading-normal text-2xl mb-8"
              data-kontent-element-codename="description"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>

          <div className="w-full md:w-3/5 py-6 text-center">
            {image && (
              <img
                data-kontent-element-codename="image"
                className="w-full md:w-4/5 z-50 min-h-500 max-h-500"
                height={500}
                src={image}
                alt={title}
              />
            )}
          </div>
        </div>
      </div>
      <Splitter />
    </>
  );
};
