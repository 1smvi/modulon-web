import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 sm:p-20">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center">
          <img src='/modulon-png.png' width={80} alt="Modulon Logo" />
        </div>
        <p className="text-gray-500 font-medium text-sm mt-4">MODULON - 2024</p>
        <h1 className="text-4xl font-semibold mt-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Setup
          </span>{' '}
          your roleplay server in{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500">
            seconds
          </span>
        </h1>
        <p className="mt-4 text-lg">
          Modulon allows you to set up various roleplay prompts for your communities.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 border rounded-md border-green-500 hover:bg-green-500 hover:text-white transition duration-300 transform hover:scale-105">
          Utility Commands
        </div>
        <div className="p-4 border rounded-md border-pink-500 hover:bg-pink-500 hover:text-white transition duration-300 transform hover:scale-105">
          Roleplay Commands
        </div>
        <div className="p-4 border rounded-md border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 transform hover:scale-105">
          Moderation Commands
        </div>
        <div className="p-4 border rounded-md border-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 transform hover:scale-105">
          Economy Commands
        </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold">A bot like no other</h2>
        <p className="mt-4 text-lg">
          Modulon is the first all-in-one bot, perfect for small, growing, and large communities.
        </p>
      </div>
      <a
        href="#"
        className="mt-8 flex items-center justify-center px-6 py-3 border rounded-full text-white mb-1 hover:bg-purple-600 transition duration-300 transform hover:scale-105"
      >
        <img src='/discordlogo.svg' width={20} alt="Discord Logo" className="text-black mr-2" />
        Join Our Discord
      </a>
      <p className='mb-10 text-xs text-gray-500 hover:text-white transition'>currently unavailable</p>
      <p className='text-xs text-gray-500 hover:text-white transition'>a really bad looking website to be fixed soon, also discord soon to be released</p>
    </main>
  );
}
