
export const metadata = {
  title: 'Contact | Kevin-Clothings',
}

export default function Contact () {
  return (
    <>
      
      <div className="min-h-screen bg-gray-900 pb-60 px-4 text-white flex items-center justify-center">
        <div className="w-full max-w-md text-center">
          <h1 className="text-4xl font-bold mb-6 text-teal-400">Get In Touch</h1>
          <div className="bg-gray-800  rounded-lg shadow-lg">
            <p className="text-xl mb-4">Feel free to reach out to us through the following channels:</p>
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold">WhatsApp:</h3>
                <p className="text-lg mt-1">
                  <a href="https://wa.me/2347025313949" className="text-teal-400 hover:underline">+234-7025313949</a> |{" "}
                  <a href="https://wa.me/2349022894767" className="text-teal-400 hover:underline">+234-9022894767</a>
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Email:</h3>
                <p className="text-lg mt-1">
                  <a href="mailto:dennisokelekwe0@gmail.com" className="text-teal-400 hover:underline">dennisokelekwe0@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



