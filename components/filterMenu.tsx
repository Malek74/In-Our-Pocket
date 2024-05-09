import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Button, Divider, ScrollShadow } from '@nextui-org/react';
import { FaFilter } from "react-icons/fa6";


export default function FilterMenu(props: any) {
  const items: any[] = props.items || [];
  const icon = props.icon || null;
  return (
    <Popover className="relative rounded-sm">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 rounded-sm">


        <div className="flex flex-row items-center m-2">
            <FaFilter className="m-1" />
            <p className="font-bold">Filters</p>
        </div>

      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-0"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-0"
      >
        <Popover.Panel className="absolute left-1/2  z-10 transform -translate-x-1/2 bg-rose rounded-full  w-[200px] mt-2 ">

          <ScrollShadow size={100} hideScrollBar className=" bg-mint text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 flex justify-center items-center overflow-auto rounded-sm">
                        <div className="flex flex-col items-center " >
                          
                        
              {items.map((item, index) => (
                <div key={index} className="group relative flex p-1">
                  <div>

                    {item}
                    <Divider orientation='horizontal' className='mt-2'></Divider> 
</div>
                </div>
              ))}
              <div className='h-5'></div>
            </div>
          </ScrollShadow>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
