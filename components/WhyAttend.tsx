import React from 'react';
import { WhyAttend as IWhyAttend } from '../lib/contentTypes/why_attend';
import { KontentRichText } from './KontentRichText';

export const WhyAttendLoading = () => {
  return <div className="container mx-auto flex flex-wrap pt-4 pb-12" style={{ minHeight: 515 }}></div>;
};

export type WhyAttendProps = IWhyAttend;

export const WhyAttend = ({ elements: { title, description, image } }: WhyAttendProps) => (
  <section className="bg-white border-b py-8">
    <div
      className="container mx-auto flex flex-wrap pt-4 pb-12"
      style={{
        flexDirection: 'row',
      }}
    >
      {image ? (
        <div className="w-1/2">
          <img
            src={image.value[0].url}
            alt={title.value}
            width={400}
            height={400}
            loading="lazy"
            className="p-10"
          />
        </div>
      ) : null}
      <div className="w-1/2">
        <div className="p-10">
          <h2 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
            {title.value}
          </h2>
          <hr />
          <KontentRichText className="text-gray-800 p-10 whitespace-pre-line" field={description} />
        </div>
      </div>
    </div>
  </section>
);
