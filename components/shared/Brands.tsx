import React from 'react';

import Image from 'next/image';

const Brands: React.FunctionComponent = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h3 className="h3 text-center mb-16">
          Worked with the world’s most innovative companies
        </h3>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 h-12">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 relative">
            <Image
              src="/assets/epam_logo_light.svg"
              alt="StaticKit"
              fill
              className="object-contain"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 relative">
            <Image
              className=" object-contain"
              src="https://www.libertymutualgroup.com/themes/custom/zurb_foundation_lmg/images/LibertyMutualVerticalLogoWhite-01.svg"
              alt="Mirage"
              fill
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 relative">
            <Image
              src="/assets/logo-brand-stacked.svg"
              alt="StaticKit"
              fill
              className="object-contain "
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1 relative">
            <Image
              className=" object-contain"
              src="/assets/melt.svg"
              alt="Transistor"
              fill
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1 relative">
            <Image
              className=" object-contain"
              src="/assets/litlingo.svg"
              alt="Workcation"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
