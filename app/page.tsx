import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ITWorld.io</h1>
          <nav>
            <ul className=" text-base flex space-x-4">
              <li>
                <Link className="hover:text-gray-400" href="/courses">
                  Courses
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" href="/registration">
                  Registration
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Empowering Your Digital Future
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Learn, Grow, and Achieve Your Goals with Our Expert IT Training
              Programs
            </p>

            <p className="text-lg text-gray-700 mb-8">
              At ITWorld.io, we are dedicated to providing high-quality IT
              education that prepares you for the rapidly evolving tech
              industry. Our courses are designed to cater to beginners as well
              as professionals looking to upskill. Whether you are interested in
              web development, graphic design, or digital marketing, we have got
              the right course for you.
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="/courses"
                className="bg-blue-600  text-base text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Explore Courses
              </a>
              <a
                href="/registration"
                className="bg-green-600 text-base  text-white py-2 px-6 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
              >
                Register Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-6">
        <div className=" container mx-auto text-center">
          <p className="text-lg">
            &copy; 2024 ITWorld.io. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}