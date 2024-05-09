import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <img
        className="w-full h-full absolute top-0 left-0 object-cover"
        alt=""
        src="/nathanareboucas3ysdtzqnvtqunsplash-1@2x.png"
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Merchandiser.inc</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link to="/login" className="text-white underline text-lg px-6 py-3 bg-blue-500 rounded-full">
            Sign in
          </Link>
          <div className="h-10 w-px bg-white"></div>
          <Link to="/signup" className="text-white underline text-lg px-6 py-3 bg-blue-500 rounded-full">
            Sign up
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mt-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-sm">All rights Reserved.</div>
          <img className="h-8 w-8" loading="lazy" alt="" src="/group.svg" />
          <div className="text-sm">Copyright 2024</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
