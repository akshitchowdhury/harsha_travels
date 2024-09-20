export default function QuickConnect() {
    return (
      <div className="bg-gray-800 flex items-center justify-center min-h-[200px] p-4">
        <div className="bg-gray-800 flex flex-col gap-6 p-6 md:p-2 w-full max-w-6xl rounded-lg shadow-lg mx-auto">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 text-center">
            Request A Callback
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-ee-full rounded-ss-full bg-white text-gray-800"
              />
              <input
                type="email"
                placeholder="Your Email ID"
                className="p-3 rounded-ee-full rounded-ss-full bg-white text-gray-800"
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full p-3 rounded-ee-full rounded-ss-full bg-white text-gray-800"
              />
            </div>
            <div className="flex">
              
            </div>
            <textarea
              placeholder="Your Enquiry"
              rows={4}
              className="w-full p-3 rounded-lg bg-white text-gray-800"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full md:w-auto bg-black text-white py-3 px-6 rounded-ee-full rounded-ss-full font-semibold hover:bg-gray-900 transition duration-300"
              >
                SEND REQUEST
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  