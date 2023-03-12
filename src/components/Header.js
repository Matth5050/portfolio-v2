import { Popover } from "@headlessui/react";

export default function Example() {
  return (
    <Popover className="relative">
      <div className="flex items-center justify-between p-6 md:justify-start md:space-x-10">
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
