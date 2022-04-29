import { Track, UniformContext, useScores, useUniformContext } from "@uniformdev/context-react";
import { HeroData } from "../lib/types";
import { convertHero } from "../lib/utils";
import Splitter from "./Splitter";
import { Context } from '@uniformdev/context';

export const Hero = ({ image }: any) => {
  var props = convertHero(image);
  console.log(props)
  let context = useUniformContext();

  return (
    <>
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500">
            <p className="uppercase tracking-loose w-full">Uniform demo</p>
            <h1 className="my-4 text-5xl font-bold leading-tight">{props.title}</h1>
            <div
              className="leading-normal text-2xl mb-8"
              dangerouslySetInnerHTML={{ __html: props.description }}
            ></div>
          </div>

          <div className="w-full md:w-3/5 py-6 text-center">
            {props.image && (
              <img
                className="w-full md:w-4/5 z-50 min-h-500 max-h-500"
                height={500}
                src={props.image}
                alt={props.title}
              />
            )}
          </div>
        </div>
      </div>
      <Splitter />
    </>
  );
};
