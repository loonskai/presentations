import { PropsWithChildren, useState } from "react";

const Banners = ({ children }: PropsWithChildren) => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showNotificationAlert, setShowNotificationAlert] = useState(false);
  const [showCongratsAlert, setShowCongratsAlert] = useState(false);
  const [showNextPopup, setShowNextPopup] = useState(false);
  const [showAdblockPopup, setShowAdblockPopup] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true); // Overlay visibility
  const [loading, setLoading] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleAccept = () => {
    setLoading(true);
    setTimeout(() => {
      setShowCookieBanner(false);
      setShowNotificationAlert(true);
      setLoading(false);
    }, 2000); // Simulated delay for loading effect
  };

  const handleNoThanks = () => {
    setTimeout(() => {
      setShowWarning(true);
    }, 3000);
  };

  const handleAllow = () => {
    setShowNotificationAlert(false);
    setShowCongratsAlert(true);
  };

  const handleNextPopup = () => {
    setShowCongratsAlert(false);
    setShowNextPopup(true);
  };

  const handleAdblockPopup = () => {
    setShowNextPopup(false);
    setShowAdblockPopup(true);
  };

  const dismissAll = () => {
    setShowCookieBanner(false);
    setShowNotificationAlert(false);
    setShowCongratsAlert(false);
    setShowNextPopup(false);
    setShowAdblockPopup(false);
    setShowOverlay(false);
  };

  return (
    <>
      {/* Overlay (Dimming Background) */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black opacity-70 transition-opacity z-30"></div>
      )}

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center justify-center z-40">
          <div className="text-black text-sm md:text-base text-center">
            <strong>Cookie Privacy Statement</strong>
            <p className="mt-1 text-gray-500">
              We use cookies to improve your experience. By clicking "Accept,"
              you agree to our use of cookies.
            </p>
          </div>

          <div className="mt-4 flex gap-4">
            <button className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
              Edit cookie preferences
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <span className="animate-spin w-5 h-5 border-4 border-white border-t-transparent rounded-full"></span>
              ) : (
                "Accept"
              )}
            </button>
          </div>
        </div>
      )}

      {/* Notification Alert */}
      {showNotificationAlert && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-md w-96 z-50 flex flex-col items-center">
          <p className="text-black text-sm md:text-base text-center">
            We'd like to send you notifications with the latest news and updates
            from our site.
          </p>
          {showWarning && (
            <p className="text-red-600 font-bold mt-2 transition-all">
              Are you sure?
            </p>
          )}
          <div className="mt-4 flex flex-col w-full gap-2">
            <button
              onClick={handleAllow}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              ALLOW
            </button>
            <button
              onClick={handleNoThanks}
              className="px-4 py-2 text-sm text-gray-600 border border-gray-400 rounded hover:bg-gray-100"
            >
              NO THANKS
            </button>
          </div>
        </div>
      )}

      {/* Congrats Alert */}
      {showCongratsAlert && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-md w-96 z-50 flex flex-col items-center">
          <p className="text-green-600 text-lg font-bold text-center">
            🎉 Congrats! You're subscribed! 🎉
          </p>
          <button
            onClick={handleNextPopup}
            className="mt-4 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            OK
          </button>
        </div>
      )}

      {/* Next Popup */}
      {showNextPopup && (
        <div className="fixed top-4 left-4 bg-white shadow-md p-3 rounded-md w-80 z-50 border border-gray-300 flex flex-col">
          <p className="text-black text-sm font-semibold">
            https://loonskai-decks.netlify.app/ wants to
          </p>
          <p className="text-black text-sm">Show notifications</p>
          <div className="mt-2 flex justify-end gap-2">
            <button
              onClick={handleAdblockPopup}
              className="px-3 py-1 text-sm text-gray-700 border border-gray-400 rounded hover:bg-gray-100"
            >
              Block
            </button>
            <button
              onClick={handleAdblockPopup}
              className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
            >
              Allow
            </button>
          </div>
        </div>
      )}

      {/* Adblock Detected Popup */}
      {showAdblockPopup && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-md w-96 z-50 flex flex-col items-center">
          <p className="text-red-600 text-lg font-bold text-center">
            🚫 Adblock Detected! 🚫
          </p>
          <p className="text-black text-sm text-center mt-2">
            Please disable your ad blocker to support our website.
          </p>
          <button
            onClick={dismissAll}
            className="mt-4 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            OK
          </button>
        </div>
      )}

      {children}
    </>
  );
};

export default Banners;
