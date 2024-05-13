import { FaBahai } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">Testimonials</h2>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <FaBahai className="mx-auto text-2xl h-12 text-black" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “The Merch Mate system's seamless integration into our workflow has empowered our sales team, enabling them to provide detailed reports backed by indisputable evidence of their on-duty presence. We are truly grateful for the expertise and dedication demonstrated by [Your Company Name] in revolutionizing our sales monitoring process.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1602009786436-96b827675d32?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Okeyo</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600"> Sales Person Mash Industries</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Testimonials;
