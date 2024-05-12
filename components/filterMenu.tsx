import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Button, Divider, ScrollShadow } from '@nextui-org/react';
import { FaFilter } from "react-icons/fa6";


export default function FilterMenu(props: any) {
  const items: any[] = props.items || [];
  const icon = props.icon || null;
  
  
  switch(props.variant) {
    case "regular":
      return <FilterMenueOption1 items={items} icon={icon} />;
    case "large":
      return <FilterMenueOption2 items={items} icon={icon} />;

    default:
      return <FilterMenueOption1 items={items} icon={icon} />;
  }
}

function FilterMenueOption1(props: any) {
    const items: any[] = props.items || [];
  const icon = props.icon || null;  

  return(
  <Popover className="relative rounded-sm">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 rounded-sm rounded-xl hover:bg-cyanDark">


        <div className="flex flex-row items-center m-2 ">
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
        <Popover.Panel className="absolute left-1/2  z-10 transform -translate-x-1/2 bg-cyan rounded-xl  w-[200px] mt-2 ">

          <ScrollShadow size={100} hideScrollBar className=" bg-cyan text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 flex justify-center items-center overflow-auto rounded-xl">
                        <div className="flex flex-col items-center " >
                          
                      <div className='m-1'></div>  
              {items.map((item, index) => (
                <div key={index} className="group relative flex p-1">
                  <div>

                    {item}
</div>
                </div>
              ))}
              <div className='h-5'></div>
            </div>
          </ScrollShadow>
        </Popover.Panel>
      </Transition>
    </Popover>);
}

function FilterMenueOption2(props: any) {
  const items: any[] = props.items || [];
const icon = props.icon || null;  

return(
<Popover className="relative rounded-sm">
    <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 rounded-sm rounded-xl hover:bg-cyanDark">


      <div className="flex flex-row items-center m-2 ">
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
      <Popover.Panel className="absolute left-1/2  z-10 transform -translate-x-1/2 bg-cyan rounded-xl  w-[300px] mt-2 ">

        <ScrollShadow size={100} hideScrollBar className=" bg-cyan text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 flex justify-center items-center overflow-auto rounded-xl">
                      <div className="flex flex-col items-center " >
                        
                    <div className='m-1'></div>  
            {items.map((item, index) => (
              <div key={index} className="group relative flex p-1">
                <div>

                  {item}
</div>
              </div>
            ))}
            <div className='h-5'></div>
          </div>
        </ScrollShadow>
      </Popover.Panel>
    </Transition>
  </Popover>);
}
