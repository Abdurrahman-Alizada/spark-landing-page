export default function PlatformSection() {
  return (
    <div className="w-full mx-auto px-4  lg:px-8">
      <div className="h-20 w-full mx-auto"></div>

      <div className="text-left w-full mx-auto  px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-xl sm:text-lg lg:text-3xl font-bold tracking-normal leading-8 lg:leading-9 mt-6 mb-4 lg:mb-6">
          Supported Platforms and Devices
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-6 lg:leading-7 my-4 lg:my-6">
          Spark is currently available for{" "}
          <a
            href=""
            className="font-semibold text-[#21262e] hover:underline"
          >
            Android
          </a>
          {' '} and {' '}
            <a
            href=""
            className="font-semibold text-[#21262e] hover:underline"
          >
            iOS
          </a> 
          {' '} devices.
        </p>

        {/* Tinder Lite */}
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-6 lg:leading-7 my-4 lg:my-6">
          We also offer a lightweight version of Spark you can take anywhere
          and everywhere - download spark Lite from the{" "}
          <a
            href=""
            className="font-semibold text-[#21262e] hover:underline"
          >
            Google Play store
          </a>
          .
        </p>

       
      </div>
    </div>
  );
}
