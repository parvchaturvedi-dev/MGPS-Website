import useCookieConsent from "./useCookieConsent";

const ConsentAwareMap = ({ title, src, className = "" }) => {
  const { preferences, openPreferences } = useCookieConsent();

  if (!preferences?.externalContent) {
    return (
      <div
        className={`${className} flex flex-col items-center justify-center bg-slate-100 px-6 text-center`}
        role="region"
        aria-label={`${title} map`}
      >
        <p className="max-w-md text-slate-700">
          This map is provided by Google Maps and remains disabled until you allow optional third-party content.
        </p>
        <button
          type="button"
          onClick={openPreferences}
          className="mt-4 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Manage cookie preferences
        </button>
      </div>
    );
  }

  return (
    <iframe
      title={title}
      src={src}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default ConsentAwareMap;
