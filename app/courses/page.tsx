export default function About() {
  return (
    <section id="courses-overview" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Courses Overview</h2>
        <p className="text-gray-600 mt-2">
          Explore our range of courses designed to help you develop skills and
          grow your career.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Web Development
          </h3>
          <p className="mt-4 text-gray-600">
            Learn to build modern, responsive websites using the latest web
            technologies like HTML, CSS, JavaScript, and more.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Graphic Design
          </h3>
          <p className="mt-4 text-gray-600">
            Master the art of design with tools like Adobe Illustrator and
            Photoshop, and create stunning visuals for any medium.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Digital Marketing
          </h3>
          <p className="mt-4 text-gray-600">
            Become a marketing expert by learning SEO, social media marketing,
            email marketing, and more to boost online presence.
          </p>
        </div>
      </div>
    </section>
  );
}
