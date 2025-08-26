// Monochrome geometric background shapes: triangles and squares

export default function HeroShapes() {
  return (
    <>
      {/* Triangles */}
      <div className="absolute top-4 left-4 xs:top-10 xs:left-10 w-16 xs:w-24 sm:w-32 h-16 xs:h-24 sm:h-32 bg-gray-800 opacity-30 z-0 rotate-12" style={{clipPath:'polygon(50%_0%,0%_100%,100%_100%)'}} />
      <div className="absolute top-1/4 right-8 xs:right-24 w-10 xs:w-16 sm:w-20 h-10 xs:h-16 sm:h-20 bg-gray-400 opacity-20 z-0 rotate-6" style={{clipPath:'polygon(50%_0%,0%_100%,100%_100%)'}} />
      <div className="absolute bottom-10 xs:bottom-24 left-1/4 w-8 xs:w-12 sm:w-16 h-8 xs:h-12 sm:h-16 bg-white opacity-10 z-0 rotate-12" style={{clipPath:'polygon(50%_0%,0%_100%,100%_100%)'}} />
      <div className="absolute top-1/2 left-1/2 w-6 xs:w-8 sm:w-12 h-6 xs:h-8 sm:h-12 bg-gray-600 opacity-15 z-0 rotate-45" style={{clipPath:'polygon(50%_0%,0%_100%,100%_100%)'}} />
      {/* Extra Triangles */}
      <div className="absolute top-1/3 left-1/3 w-10 h-10 bg-gray-700 opacity-20 z-0 rotate-3" style={{clipPath:'polygon(50%_0%,0%_100%,100%_100%)'}} />
      <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-gray-500 opacity-10 z-0 rotate-9" style={{clipPath:'polygon(50%_0%,0%_100%,100%_100%)'}} />
      <div className="absolute top-1/5 right-10 w-12 h-12 bg-white opacity-5 z-0 rotate-12" style={{clipPath:'polygon(50%_0%,0%_100%,100%_100%)'}} />
      {/* Squares */}
      <div className="absolute bottom-8 xs:bottom-16 right-8 xs:right-16 w-12 xs:w-16 sm:w-24 h-12 xs:h-16 sm:h-24 bg-gray-700 opacity-20 z-0 rotate-12" style={{clipPath:'polygon(0_0,100%_0,100%_100%,0_100%)'}} />
      <div className="absolute top-12 xs:top-24 right-1/3 w-7 xs:w-10 sm:w-14 h-7 xs:h-10 sm:h-14 bg-gray-300 opacity-10 z-0 rotate-6" style={{clipPath:'polygon(0_0,100%_0,100%_100%,0_100%)'}} />
      <div className="absolute bottom-4 xs:bottom-10 left-1/3 w-5 xs:w-7 sm:w-10 h-5 xs:h-7 sm:h-10 bg-gray-500 opacity-15 z-0 rotate-3" style={{clipPath:'polygon(0_0,100%_0,100%_100%,0_100%)'}} />
      <div className="absolute bottom-1/3 right-1/4 w-6 xs:w-8 sm:w-12 h-6 xs:h-8 sm:h-12 bg-white opacity-5 z-0 rotate-45" style={{clipPath:'polygon(0_0,100%_0,100%_100%,0_100%)'}} />
      <div className="absolute top-6 xs:top-12 left-1/5 w-4 xs:w-6 sm:w-8 h-4 xs:h-6 sm:h-8 bg-gray-400 opacity-15 z-0 rotate-12" style={{clipPath:'polygon(0_0,100%_0,100%_100%,0_100%)'}} />
      {/* Extra Squares */}
      <div className="absolute top-1/2 left-10 w-8 h-8 bg-gray-600 opacity-10 z-0 rotate-6" style={{clipPath:'polygon(0_0,100%_0,100%_100%,0_100%)'}} />
      <div className="absolute bottom-1/5 right-1/5 w-10 h-10 bg-gray-300 opacity-10 z-0 rotate-12" style={{clipPath:'polygon(0_0,100%_0,100%_100%,0_100%)'}} />
      {/* Thin line shapes */}
      <div className="absolute left-1/2 top-0 w-0.5 h-16 xs:h-24 sm:h-32 bg-gray-700 opacity-10 z-0" />
      <div className="absolute right-1/4 bottom-0 w-0.5 h-12 xs:h-16 sm:h-24 bg-gray-400 opacity-10 z-0" />
      {/* Extra Lines */}
      <div className="absolute left-1/4 top-1/4 w-0.5 h-20 bg-gray-500 opacity-10 z-0" />
      <div className="absolute right-1/2 bottom-1/4 w-0.5 h-16 bg-gray-300 opacity-10 z-0" />
    </>
  );
}
