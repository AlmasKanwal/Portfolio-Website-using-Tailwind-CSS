import React from 'react';

const Heading = ({ title }: { title: string }) => {
  return (
    <div className='text-[#080808] text-[32px] font-medium flex items-center gap-4 py-16'>
      {title}
      <div className='bg-[#074436] h-[2px] w-[50px] translate-y-1'></div>
    </div>
  );
}

export default Heading;
