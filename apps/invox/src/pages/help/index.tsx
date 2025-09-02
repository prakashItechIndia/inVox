import { cn } from 'shared';
import { Contact } from './contact';
import { FAQ } from './faq';

export const Help = () => {

  return (
    <>
      <div
        className={cn(
          'max-h-screen-minus-64 h-full w-full overflow-auto md:pl-8 md:pr-4 ',
        )}>
        <div className="grid h-full grid-cols-[55%_3%_40%] gap-4">
          <FAQ debouncedSearch={''} />
          <div className="grid h-full grid-rows-[8%_92%]">
            <span className="bg-grayMediumColor sticky top-0 z-50 w-full"></span>
            <div className=" bg-dividerWhiteColor sticky w-[2px] "></div>
          </div>
          <Contact />
        </div> 
      </div>
    </>
  );
};
