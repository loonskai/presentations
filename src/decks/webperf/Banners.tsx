import { PropsWithChildren, useState } from "react";

const Banners = ({ children }: PropsWithChildren) => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showNotificationAlert, setShowNotificationAlert] = useState(false);
  const [showCongratsAlert, setShowCongratsAlert] = useState(false);
  const [showNextPopup, setShowNextPopup] = useState(false);
  const [showAdblockPopup, setShowAdblockPopup] = useState(false);
  const [showAskAIPopup, setShowAskAIPopup] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true); // Overlay visibility
  const [loading, setLoading] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showContent, setShowContent] = useState(false);

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

  const handleAskAiPopup = () => {
    setShowAdblockPopup(false);
    setShowAskAIPopup(true);
  };

  const dismissAll = () => {
    setShowCookieBanner(false);
    setShowNotificationAlert(false);
    setShowCongratsAlert(false);
    setShowNextPopup(false);
    setShowAdblockPopup(false);
    setShowOverlay(false);
    setShowAskAIPopup(false);
    setShowContent(true);
  };

  return (
    <>
      {/* Overlay (Dimming Background) */}
      {showOverlay && (
        <div className="tw:fixed tw:inset-0 tw:bg-black tw:opacity-70 tw:transition-opacity tw:z-30"></div>
      )}
      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="tw:fixed tw:bottom-0 tw:left-0 tw:w-full tw:bg-white tw:shadow-md tw:p-4 tw:flex tw:flex-col tw:items-center tw:justify-center tw:z-40">
          <div className="tw:text-black tw:text-sm md:tw:text-base tw:text-center">
            <strong>Cookie Privacy Statement</strong>
            <p className="tw:mt-1 tw:text-gray-500">
              We use cookies to improve your experience. By clicking "Accept,"
              you agree to our use of cookies.
            </p>
          </div>

          <div className="tw:mt-4 tw:flex tw:gap-4">
            <button className="tw:px-4 tw:py-2 tw:text-sm tw:text-blue-600 tw:border tw:border-blue-600 tw:rounded tw:hover:bg-blue-50">
              Edit cookie preferences
            </button>
            <button
              onClick={handleAccept}
              className="tw:px-4 tw:py-2 tw:text-sm tw:bg-blue-600 tw:text-white tw:rounded hover:tw:bg-blue-700 tw:flex tw:items-center tw:justify-center"
              disabled={loading}
            >
              {loading ? (
                <span className="tw:animate-spin tw:w-5 tw:h-5 tw:border-4 tw:border-white tw:border-t-transparent tw:rounded-full"></span>
              ) : (
                "Accept"
              )}
            </button>
          </div>
        </div>
      )}

      {/* Notification Alert */}
      {showNotificationAlert && (
        <div className="tw:fixed tw:top-1/4 tw:left-1/2 tw:transform tw:-translate-x-1/2 tw:bg-white tw:shadow-lg tw:p-4 tw:rounded-md tw:w-96 tw:z-50 tw:flex tw:flex-col tw:items-center">
          <p className="tw:text-black tw:text-sm md:tw:text-base tw:text-center">
            We'd like to send you notifications with the latest news and updates
            from our site.
          </p>
          {showWarning && (
            <p className="tw:text-red-600 tw:font-bold tw:mt-2 tw:transition-all">
              Are you sure?
            </p>
          )}
          <div className="tw:mt-4 tw:flex tw:flex-col tw:w-full tw:gap-2">
            <button
              onClick={handleAllow}
              className="tw:px-4 tw:py-2 tw:text-sm tw:bg-blue-600 tw:text-white tw:rounded hover:tw:bg-blue-700"
            >
              ALLOW
            </button>
            <button
              onClick={handleNoThanks}
              className="tw:px-4 tw:py-2 tw:text-sm tw:text-gray-600 tw:border tw:border-gray-400 tw:rounded hover:tw:bg-gray-100"
            >
              NO THANKS
            </button>
          </div>
        </div>
      )}

      {/* Congrats Alert */}
      {showCongratsAlert && (
        <div className="tw:fixed tw:top-1/4 tw:left-1/2 tw:transform tw:-translate-x-1/2 tw:bg-white tw:shadow-lg tw:p-4 tw:rounded-md tw:w-96 tw:z-50 tw:flex tw:flex-col tw:items-center">
          <p className="tw:text-green-600 tw:text-lg tw:font-bold tw:text-center">
            🎉 Congrats! You're subscribed! 🎉
          </p>
          <button
            onClick={handleNextPopup}
            className="tw:mt-4 tw:px-4 tw:py-2 tw:text-sm tw:bg-blue-600 tw:text-white tw:rounded hover:tw:bg-blue-700"
          >
            OK
          </button>
        </div>
      )}

      {/* Next Popup */}
      {showNextPopup && (
        <div className="tw:fixed tw:top-4 tw:left-4 tw:bg-white tw:shadow-md tw:p-3 tw:rounded-md tw:w-80 tw:z-50 tw:border tw:border-gray-300 tw:flex tw:flex-col">
          <p className="tw:text-black tw:text-sm tw:font-semibold">
            https://loonskai-decks.netlify.app/ wants to
          </p>
          <p className="tw:text-black tw:text-sm">Show notifications</p>
          <div className="tw:mt-2 tw:flex tw:justify-end tw:gap-2">
            <button
              onClick={handleAdblockPopup}
              className="tw:px-3 tw:py-1 tw:text-sm tw:text-gray-700 tw:border tw:border-gray-400 tw:rounded hover:tw:bg-gray-100"
            >
              Block
            </button>
            <button
              onClick={handleAdblockPopup}
              className="tw:px-3 tw:py-1 tw:text-sm tw:text-blue-600 tw:border tw:border-blue-600 tw:rounded hover:tw:bg-blue-50"
            >
              Allow
            </button>
          </div>
        </div>
      )}

      {/* Adblock Detected Popup */}
      {showAdblockPopup && (
        <div className="tw:fixed tw:top-1/4 tw:left-1/2 tw:transform tw:-translate-x-1/2 tw:bg-white tw:shadow-lg tw:p-4 tw:rounded-md tw:w-96 tw:z-50 tw:flex tw:flex-col tw:items-center">
          <p className="tw:text-red-600 tw:text-lg tw:font-bold tw:text-center">
            🚫 Adblock Detected! 🚫
          </p>
          <p className="tw:text-black tw:text-sm tw:text-center tw:mt-2">
            Please disable your ad blocker to support our website.
          </p>
          <button
            onClick={handleAskAiPopup}
            className="tw:mt-4 tw:px-4 tw:py-2 tw:text-sm tw:bg-blue-600 tw:text-white tw:rounded hover:tw:bg-blue-700"
          >
            OK
          </button>
        </div>
      )}

      {/* Ask AI popup */}
      {showAskAIPopup && (
        <div className="tw:fixed tw:bottom-4 tw:right-4 tw:bg-white tw:shadow-lg tw:p-4 tw:rounded-md tw:w-80 tw:z-50 tw:flex tw:flex-col tw:items-start tw:border tw:border-gray-300">
          <div className="tw:flex tw:justify-between tw:w-full">
            <p className="tw:text-black tw:text-lg tw:font-bold">
              🤖 Ask AI 🤖
            </p>
            <button
              onClick={dismissAll}
              className="tw:text-gray-600 hover:tw:text-gray-900"
            >
              ✖
            </button>
          </div>
          <p className="tw:text-black tw:text-sm tw:text-center tw:mt-2">
            How can I help you?
          </p>
          <input
            type="text"
            placeholder="Type your question..."
            className="tw:mt-2 tw:w-full tw:px-2 tw:py-1 tw:border tw:border-gray-300 tw:rounded-md focus:tw:outline-none focus:tw:ring-2 focus:tw:ring-blue-500"
          />
          <button
            onClick={dismissAll}
            className="tw:mt-2 tw:px-4 tw:py-2 tw:text-sm tw:bg-blue-600 tw:text-white tw:rounded hover:tw:bg-blue-700 tw:w-full"
          >
            Submit
          </button>
        </div>
      )}

      {showContent && children}
    </>
  );
};

export default Banners;
