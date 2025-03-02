import BlurEffect from "../BlurEffect";
import avatarImg from "../images/avatar.jpg";
import warsawJSImg from "../images/warsawjs-logo.png";

export function Front() {
  return (
    <section data-auto-animate>
      <div className="flex flex-col items-center text-center p-6 md:p-12 max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <BlurEffect
            src={warsawJSImg}
            alt="WarsawJS Logo"
            className="w-46 h-auto mx-auto my-4"
          />
          <h2 className="font-montserrat font-semibold text-5xl">
            The Red Pill
          </h2>
          <h3 className="font-montserrat text-2xl">of the</h3>
          <h1 className="font-montserrat font-black text-4xl">
            Web Application
          </h1>
          <h3 className="font-montserrat text-2xl">performance</h3>
        </div>
        <div className="flex flex-col items-center mt-8 text-center">
          <img
            src={avatarImg}
            alt="Siarhei Lunski"
            className="w-20 h-20 rounded-full object-cover shadow-lg mb-4"
          />
          <h2 className="font-montserrat font-semibold text-2xl">
            Siarhei Lunski
          </h2>
          <p className="font-montserrat text-lg text-gray-700">
            Software Engineer @ Box
          </p>
        </div>
      </div>
    </section>
  );
}
