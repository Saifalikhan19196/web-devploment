import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
          Welcome to our website! We are passionate about providing the best service and creating amazing experiences. Our team is dedicated to pushing the boundaries and ensuring every project we work on is of the highest quality.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img className="w-24 h-24 mx-auto rounded-full mb-4" src="https://as1.ftcdn.net/v2/jpg/06/05/11/12/1000_F_605111295_QyQY4Tk7bv8789bFA0TgGKeTM4zzowdo.jpg" alt="Team Member 1" />
            <h3 className="text-xl font-bold text-gray-800">Javed Sir</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img className="w-24 h-24 mx-auto rounded-full mb-4" src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/10/what_is_a_project_manager_-_article_image.jpg" alt="Team Member 2" />
            <h3 className="text-xl font-bold text-gray-800">Ravi sir</h3>
            <p className="text-gray-600">Project Manager</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img className="w-24 h-24 mx-auto rounded-full mb-4" src="https://th.bing.com/th/id/OIP.f7TrEgn_hwikRUEvDU3XtgAAAA?w=474&h=422&rs=1&pid=ImgDetMain" alt="Team Member 3" />
            <h3 className="text-xl font-bold text-gray-800">Gopo sir</h3>
            <p className="text-gray-600">Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
