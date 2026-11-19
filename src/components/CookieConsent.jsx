import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import CookieConsentContext from "./CookieConsentContext";

const STORAGE_KEY = "marigold-cookie-preferences-v1";
const defaultPreferences = {
  necessary: true,
  analytics: false,
  externalContent: false,
};

function readSavedPreferences() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored);
    if (
      parsed?.version !== 1 ||
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.externalContent !== "boolean"
    ) {
      return null;
    }

    return {
      necessary: true,
      analytics: parsed.analytics,
      externalContent: parsed.externalContent,
    };
  } catch (error) {
    console.warn("Could not read saved cookie preferences.", error);
    return null;
  }
}

function CookieConsentProvider({ children }) {
  const [savedPreferences] = useState(readSavedPreferences);
  const [preferences, setPreferences] = useState(savedPreferences);
  const [draft, setDraft] = useState(savedPreferences ?? defaultPreferences);
  const [isVisible, setIsVisible] = useState(!savedPreferences);
  const [isManaging, setIsManaging] = useState(false);
  const [storageError, setStorageError] = useState("");

  const savePreferences = useCallback((nextPreferences) => {
    const normalized = {
      necessary: true,
      analytics: nextPreferences.analytics === true,
      externalContent: nextPreferences.externalContent === true,
    };
    setPreferences(normalized);
    setDraft(normalized);
    setIsManaging(false);
    setIsVisible(false);
    setStorageError("");

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ version: 1, ...normalized }),
      );
    } catch (error) {
      console.error("Could not save cookie preferences.", error);
      setStorageError(
        "Your choice could not be saved in this browser. You can still use the site, but this message may appear again.",
      );
      setIsVisible(true);
    }
  }, []);

  const openPreferences = useCallback(() => {
    setDraft(preferences ?? defaultPreferences);
    setIsManaging(true);
    setIsVisible(true);
  }, [preferences]);

  const updateDraft = (key, value) => {
    setDraft((current) => ({ ...current, [key]: value }));
  };

  return (
    <CookieConsentContext.Provider
      value={{ preferences, openPreferences }}
    >
      {children}
      {isVisible && (
        isManaging ? (
          <div className="fixed inset-0 z-[120] flex items-end justify-center bg-slate-950/60 p-3 sm:items-center sm:p-6">
            <section
              aria-labelledby="cookie-preferences-title"
              aria-modal="true"
              className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
              role="dialog"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                Privacy choices
              </p>
              <h2 id="cookie-preferences-title" className="mt-2 text-2xl font-bold text-slate-900">
                Manage cookie preferences
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Choose whether optional analytics or third-party map content may be used.
                No analytics or advertising service is currently active on this website.
              </p>

              <div className="mt-6 space-y-4">
                <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <input checked disabled type="checkbox" className="mt-1 h-4 w-4 accent-blue-600" />
                  <span>
                    <span className="block font-semibold text-slate-900">Strictly necessary storage</span>
                    <span className="text-sm text-slate-600">Always active. Stores your privacy choice and supports basic site functions.</span>
                  </span>
                </label>

                <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <input
                    checked={draft.analytics}
                    onChange={(event) => updateDraft("analytics", event.target.checked)}
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-blue-600"
                  />
                  <span>
                    <span className="block font-semibold text-slate-900">Analytics</span>
                    <span className="text-sm text-slate-600">Optional measurement, if an analytics service is added in the future. None is active now.</span>
                  </span>
                </label>

                <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <input
                    checked={draft.externalContent}
                    onChange={(event) => updateDraft("externalContent", event.target.checked)}
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-blue-600"
                  />
                  <span>
                    <span className="block font-semibold text-slate-900">Third-party maps</span>
                    <span className="text-sm text-slate-600">Allows Google Maps embeds. Google may process information when the map loads.</span>
                  </span>
                </label>
              </div>

              {storageError && (
                <p role="alert" className="mt-4 text-sm text-red-700">{storageError}</p>
              )}

              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => savePreferences(defaultPreferences)}
                  className="min-h-11 rounded-full border border-slate-300 px-5 font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Reject Optional
                </button>
                <button
                  type="button"
                  onClick={() => savePreferences(draft)}
                  className="min-h-11 rounded-full bg-blue-600 px-5 font-semibold text-white hover:bg-blue-700"
                >
                  Save Preferences
                </button>
                <button
                  type="button"
                  onClick={() => savePreferences({ analytics: true, externalContent: true })}
                  className="min-h-11 rounded-full bg-blue-600 px-5 font-semibold text-white hover:bg-blue-700"
                >
                  Accept All
                </button>
              </div>
            </section>
          </div>
        ) : (
          <aside
            aria-label="Cookie consent"
            className="fixed inset-x-0 bottom-0 z-[120] p-3 sm:p-5"
          >
            <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-6">
              <h2 className="text-lg font-bold text-slate-900">Your privacy matters</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Essential storage remembers your choice. Analytics and advertising are not active.
                Google Maps is optional and stays blocked until you allow it. Read our{" "}
                <Link to="/privacy-policy" className="font-semibold text-blue-700 underline">Privacy Policy</Link>
                {" "}and{" "}
                <Link to="/cookie-policy" className="font-semibold text-blue-700 underline">Cookie Policy</Link>.
              </p>
              {storageError && (
                <p role="alert" className="mt-3 text-sm text-red-700">{storageError}</p>
              )}
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => savePreferences({ analytics: true, externalContent: true })}
                  className="min-h-11 flex-1 rounded-full bg-blue-700 px-5 font-semibold text-white hover:bg-blue-800"
                >
                  Accept All
                </button>
                <button
                  type="button"
                  onClick={() => savePreferences(defaultPreferences)}
                  className="min-h-11 flex-1 rounded-full border border-slate-300 px-5 font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Reject Optional
                </button>
                <button
                  type="button"
                  onClick={openPreferences}
                  className="min-h-11 flex-1 rounded-full px-5 font-semibold text-blue-700 hover:bg-blue-50"
                >
                  Manage Preferences
                </button>
              </div>
            </div>
          </aside>
        )
      )}
    </CookieConsentContext.Provider>
  );
}

export default CookieConsentProvider;
