import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
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
    <Footer/>
    </div>
  );
}
