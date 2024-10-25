export default function Registration() {
  return (
    <section
      id="course-registration"
      className="max-w-xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-center mb-6">
        Course Registration
      </h2>
      <form className="space-y-4">
        <div className="form-group">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor="course"
            className="block text-sm font-medium text-gray-700"
          >
            Select Course:
          </label>
          <select
            id="course"
            name="course"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">--Select a Course--</option>
            <option value="web-development">Web Development</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="digital-marketing">Digital Marketing</option>                                                 
          </select>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="w-full p-2 bg-gray-600 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
