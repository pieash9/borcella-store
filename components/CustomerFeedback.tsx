const CustomerFeedback = () => {
  return (
    <section className="py-12 px-10 md:px-4">
      <div className="container mx-auto flex flex-col items-center pb-6 mb-8 md:px-12">
        <h1 className="text-heading2-bold text-center">
          Hear from Our Satisfied Customers
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-2">
        <div className="flex flex-col items-center mx-6 md:mx-0">
          <div className="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute top-0 left-0 w-8 h-8 text-gray-700 dark:text-gray-300"
            >
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
            </svg>
            <p className="px-6 py-1 text-lg italic">
              I absolutely love the dresses I ordered! The fabric is so soft and
              comfortable, and the fit is perfect. Will definitely be ordering
              again!
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute bottom-0 right-0 w-8 h-8 text-gray-700 dark:text-gray-300"
            >
              <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
              <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
            </svg>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg bg-violet-400 dark:bg-violet-600"></span>
          <p>Emma Smith</p>
        </div>
        <div className="flex flex-col items-center mx-6 md:mx-0">
          <div className="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="absolute top-0 left-0 w-8 h-8 text-gray-700 dark:text-gray-300"
            >
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
            </svg>
            <p className="px-6 py-1 text-lg italic">
              The quality of the shirts I bought from here is outstanding. They
              look even better in person than they do on the website. Highly
              recommend.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute bottom-0 right-0 w-8 h-8 text-gray-700 dark:text-gray-300"
            >
              <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
              <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
            </svg>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg bg-violet-400 dark:bg-violet-600"></span>
          <p>James Johnson</p>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
