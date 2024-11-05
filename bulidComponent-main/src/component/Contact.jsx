const Contact=()=>{
    return (
        <div className="flex flex-col md:flex-row justify-between bg-white p-10 max-w-5xl mx-auto shadow-md rounded-lg">
          {/* Left Section */}
          <div className="flex-2 pr-6">
            <h1 className="text-4xl text-blue-500 font-bold">Profile</h1>
            <p className="text-lg text-gray-700 mb-6">I'm a creative webdeveloper</p>
    
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-2">Details</h3>
              <p className="text-gray-600">
                <strong>Name:</strong> Vicky Acharjee
              </p>
              <p className="text-gray-600">
                <strong>Age:</strong> 22 years
              </p>
              <p className="text-gray-600">
                <strong>Location:</strong> Bangalore,India
              </p>
              <div className="flex space-x-4 mt-4">
                <i className="fa fa-facebook text-gray-700 text-xl"></i>
                <i className="fa fa-twitter text-gray-700 text-xl"></i>
                <i className="fa fa-instagram text-gray-700 text-xl"></i>
              </div>
            </div>
    
            <div>
              <h3 className="text-2xl font-semibold mb-2">About me</h3>
              <p className="text-gray-600 leading-relaxed">
              Hi, I'm a developer passionate about building innovative and impactful projects. I work on exciting, modern web applications, and I'm always eager to collaborate on new challenges. If you have any projects or work inquiries, feel free to get in touch!
              </p>
              
              <button className="mt-6 px-4 py-2 border-2 border-orange-500 text-orange-500 font-bold rounded transition duration-300 hover:bg-orange-500 hover:text-white">
               <a target="_blank" href="https://www.instagram.com/vicky.acharjee/">ContactMe</a>
              </button>
            </div>
          </div>
    
          {/* Right Section */}
          <div className="flex-1 bg-orange-500 text-white p-8 rounded-lg mt-8 md:mt-0 text-center">
            <div className="flex flex-col items-center">
              <img
                src="path-to-image.jpg"
                alt="Vicky"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">HELLO, I'M Vicky</h2>
              <p className="text-sm leading-relaxed mb-6">
                I am a versatile developer who can approach marketing projects from concept to implementation.
              </p>
              <div className="flex space-x-4">
                <i className="fa fa-facebook text-white text-xl"></i>
                <i className="fa fa-twitter text-white text-xl"></i>
                <i className="fa fa-instagram text-white text-xl"></i>
                <i className="fa fa-linkedin text-white text-xl"></i>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      )
}
export default Contact;
