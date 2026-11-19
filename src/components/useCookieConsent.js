import { useContext } from "react";
import CookieConsentContext from "./CookieConsentContext";

export default function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider.");
  }
  return context;
}
