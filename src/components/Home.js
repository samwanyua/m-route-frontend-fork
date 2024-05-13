import { useState } from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Testimonials from './Testimonials';
import OurClients from './OurClients';

const Home = ({ authorized }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white pt-14 lg:pt-20">

      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Enhance accountability and efficiency with our merchandiser tracking microservice.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to our innovative merchandiser tracking microservice, where accountability meets efficiency. With our cutting-edge solution, you can effortlessly monitor the movements of your sales team in real-time, ensuring that every action is accounted for. Say goodbye to uncertainties and hello to streamlined operations. Let us help you elevate your sales force's performance to new heights.
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              {!authorized && (
                <Link
                  to="/login"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get started
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <AboutUs /> */}
      <ContactUs />
      <Testimonials />
      <OurClients />

    </div>
  );
}

export default Home;
