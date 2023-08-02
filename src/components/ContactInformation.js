import { Icon } from "@/components/Icon";
import { getItemData } from "@/lib/getItems";

export const ContactInformation = () => {
  const contact = getItemData("contact", "global");

  return (
    <section className="relative w-full px-4 pt-56 bg-white -mb-52 -translate-y-52 sm:pt-64 lg:pt-72 sm:px-6 lg:px-8">
      {/* Contact information container */}
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        {/* Section header */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-32">
          <div className="flex items-center">
            <h2 className="max-w-4xl text-purple-900 h2">
              Contact information
            </h2>
          </div>
          <div className="flex items-center mt-3 sm:mt-4 lg:mt-0">
            <p className="text-lg text-purple-800 sm:text-xl text-opacity-90">
              Dictum urna sed consectetur neque tristique pellentesque. Blandit
              amet, sed aenean erat arcu morbi.
            </p>
          </div>
        </div>
        {/* Contact information cards */}
        <div className="grid grid-cols-1 gap-4 mt-12 sm:mt-14 lg:mt-20 sm:grid-cols-4 lg:grid-cols-3 sm:gap-6 xl:gap-12">
          {/* Address card */}
          <div className="px-4 py-8 bg-yellow-200 sm:col-span-2 lg:col-span-1 sm:p-8 rounded-3xl">
            <div className="flex sm:flex-col lg:flex-row">
              <div>
                <span className="flex items-center justify-center bg-yellow-400 rounded-2xl w-14 h-14">
                  <Icon icon="mapPin" className="w-8 h-8 text-purple-700" />
                </span>
              </div>
              <div className="flex-1 ml-6 sm:mt-3 lg:mt-0 sm:ml-0 lg:ml-6">
                <h5 className="flex items-center text-xl font-semibold text-purple-900">
                  Address
                </h5>
                <p className="mt-1.5 text-base text-purple-800 leading-relaxed">
                  {contact.address}
                </p>
              </div>
            </div>
          </div>
          {/* Email card */}
          <div className="px-4 py-8 sm:col-span-2 lg:col-span-1 sm:p-8 sm:py-10 rounded-3xl bg-purple-50">
            <div className="flex sm:flex-col lg:flex-row">
              <div>
                <span className="flex items-center justify-center bg-purple-200 rounded-2xl w-14 h-14">
                  <Icon icon="mail" className="w-8 h-8 text-purple-700" />
                </span>
              </div>
              <div className="flex-1 ml-6 sm:mt-3 lg:mt-0 sm:ml-0 lg:ml-6">
                <h5 className="flex items-center text-xl font-semibold text-purple-900">
                  Email us
                </h5>
                <p className="mt-1.5 text-base text-purple-800 leading-relaxed">
                  {contact.email}
                </p>
              </div>
            </div>
          </div>
          {/* Phone number card */}
          <div className="px-4 py-8 sm:col-start-2 sm:col-span-2 lg:col-start-3 lg:col-span-1 sm:p-8 sm:py-10 rounded-3xl bg-rose-50">
            <div className="flex sm:flex-col lg:flex-row">
              <div>
                <span className="flex items-center justify-center rounded-2xl w-14 h-14 bg-rose-200">
                  <Icon icon="phone" className="w-8 h-8 text-purple-700" />
                </span>
              </div>
              <div className="flex-1 ml-6 sm:mt-3 lg:mt-0 sm:ml-0 lg:ml-6">
                <h5 className="flex items-center text-xl font-semibold text-purple-900">
                  Call us
                </h5>
                <p className="mt-1.5 text-base text-purple-800 leading-relaxed">
                  {contact.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Google map widget */}
      <div className="mt-16 lg:mx-auto lg:mt-24 rounded-3xl lg:max-w-screen-xl">
        <iframe
          className="w-full rounded-3xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.1624232420972!2d-76.62270638437457!3d39.329905428938126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c804df8502f88d%3A0x303d58494fa04c66!2sJohns%20Hopkins%20University!5e0!3m2!1sen!2sus!4v1629758627091!5m2!1sen!2sus"
          height={600}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
};
