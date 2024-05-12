import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Divider, ScrollShadow } from '@nextui-org/react';

export default function MyDropdown(props: any) {
  const items: any[] = props.items || [];
  const icon = props.icon || null;
  return (
    <Popover className="relative rounded-sm">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 rounded-sm">
        {icon}
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
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 transform -translate-x-1/2 bg-cyanDark rounded-sm">

          <ScrollShadow size={100} hideScrollBar className="w-[300px] h-[400px] bg-cyanDark text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 flex justify-center items-center overflow-auto rounded-sm">
                        <div className="flex flex-col items-center mt-[350px] " >
                          
                        
              {items.map((item, index) => (
                <div key={index} className="group relative flex p-1">
                  <div>

                  {item}
                  <Divider orientation='horizontal' className='mt-2'></Divider> 
                  </div>
                </div>
                             

              ))}
              <div className='h-7'></div>
            </div>
          </ScrollShadow>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
