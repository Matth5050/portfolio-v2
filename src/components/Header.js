import { Popover } from "@headlessui/react";

export default function Example() {
  return (
    <Popover className="relative">
      <div className="flex items-center justify-between p-6 md:justify-start md:space-x-10">
        {/* <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div> */}
        {/* <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div> */}
        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
          <a
            href="#"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Docs
          </a>
        </Popover.Group>
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0"></div>
      </div>

      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
              </div>
            </div>
          </div>
          {/* <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>
              </div>
            </div> */}
        </div>
      </Popover.Panel>
    </Popover>
  );
}
