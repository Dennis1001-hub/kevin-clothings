import Link from "next/link";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Okirika | About</title>
      </Head>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center py-10"> {/* Dark background, center content */}
        <div className="bg-gray-800 text-white max-w-3xl mx-auto p-8 rounded-lg shadow-lg"> {/* Lighter background for text */}
          <h1 className="text-4xl font-bold text-center text-white mb-8">About Us</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus
            placeat impedit ipsam nulla reprehenderit quasi velit consequuntur
            harum non eligendi, beatae dignissimos optio aspernatur ab sapiente
            dicta facilis. Ut tempora molestiae doloribus dolore corrupti
            suscipit. Blanditiis eius accusamus illum inventore atque quis ullam
            aspernatur veniam, quia facilis expedita earum dolorum. Tempore non,
            perferendis accusamus minus minima atque excepturi et neque saepe nisi
            quidem optio? Adipisci, ut harum quae dolor blanditiis in consequatur
            enim reiciendis culpa reprehenderit eum. Obcaecati quisquam sit
            eligendi rerum, tenetur nulla facilis! Ullam at possimus quidem nulla
            qui labore dolorum blanditiis voluptate mollitia reprehenderit,
            sapiente commodi voluptates omnis fuga odio dolore exercitationem
            deserunt! Corporis mollitia velit consequuntur quisquam neque
            voluptatem sunt id eum quibusdam amet earum placeat quas dolorum
            ratione, nihil eos maiores blanditiis nostrum officia nulla. Enim
            voluptate, voluptatem cum dolor ab neque architecto facilis nisi
            explicabo tenetur amet earum tempore et, eligendi animi optio.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
