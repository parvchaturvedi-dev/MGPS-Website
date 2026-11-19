import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import useCookieConsent from "../components/useCookieConsent";

const updatedDate = "19 November 2026";

function LegalLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="px-6 pb-20 pt-36">
        <article className="legal-copy mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
            Marigold Secondary School
          </p>
          <h1 className="!mb-2 !text-4xl font-bold tracking-tight text-slate-900">{title}</h1>
          <p className="!mb-10 text-sm text-slate-500">Last updated: {updatedDate}</p>
          {children}
        </article>
      </main>
      <Marquee />
      <Footer />
    </div>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        This notice explains how Marigold Secondary School, Behror handles
        information submitted through this website. It applies to website
        enquiries and admission applications.
      </p>

      <h2>Information we collect</h2>
      <p>
        An admission application may include the student’s name, date of birth,
        gender and requested class, together with a parent or guardian’s name,
        phone number and email address. We also receive the consent declaration
        submitted with the form and basic request information handled by our
        service providers.
      </p>

      <h2>Why we use the information</h2>
      <p>
        We use the information to receive and review admission applications,
        contact the family about the application, and maintain necessary
        admission and school records. We do not use this form to serve
        advertising, and we do not sell applicant information.
      </p>

      <h2>Temporary admission-form draft</h2>
      <p>
        While you complete an admission form, its entries are temporarily
        stored in this browser tab so they can be restored after a refresh.
        The draft stays on your device and is not sent to the school until you
        submit the form. It is cleared after successful submission or when the
        tab session ends. Avoid using a shared device for an application.
      </p>

      <h2>Children and guardian consent</h2>
      <p>
        The admission form must be submitted by a person aged 18 or older, or by
        the student’s parent or legal guardian on the student’s behalf. The
        submitting adult confirms that they are authorised to provide the
        information and consent for the stated admission purposes.
      </p>

      <h2>Service providers and external content</h2>
      <p>
        Admission form submissions are transmitted using EmailJS, a third-party
        email service. EmailJS states that its service infrastructure is hosted
        in the United States and that it processes request activity and
        metadata. Its processing is also governed by its own{" "}
        <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noreferrer">
          Privacy Policy
        </a>
        . Please do not submit information that is not requested by the form.
      </p>
      <p>
        Google Maps embeds are blocked until a visitor allows optional
        third-party content in cookie preferences. If enabled, Google may
        process information when the map loads under Google’s{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
          Privacy Policy
        </a>
        . Other external sites opened by visitors are governed by their own
        privacy notices.
      </p>

      <h2>Retention and safeguards</h2>
      <p>
        Admission information is kept for as long as needed to respond to the
        application and maintain school records, and longer only where required
        by applicable requirements. Access is limited to people who need the
        information for school purposes. Contact the school to ask about a
        particular application or record.
      </p>

      <h2>Your choices and requests</h2>
      <p>
        You may contact the school to request access to or correction of
        information, ask about deletion, or withdraw consent where applicable.
        Withdrawal does not affect processing that took place before the
        request, and some records may need to be retained to meet school or
        legal obligations. Cookie choices can be changed at any time using
        Cookie Settings in the footer.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions or requests, email{" "}
        <a href="mailto:marigoldvijay@gmail.com">marigoldvijay@gmail.com</a> or
        call <a href="tel:+919414638988">+91-9414638988</a>. The school is near
        Bypass Chowk, Hamindpur Road, Behror, Rajasthan 301701.
      </p>
      <p>
        This notice may be updated when website features, service providers or
        applicable requirements change. For cookie details, see the{" "}
        <Link to="/cookie-policy">Cookie Policy</Link>.
      </p>
    </LegalLayout>
  );
}

export function CookiePolicy() {
  const { openPreferences } = useCookieConsent();

  return (
    <LegalLayout title="Cookie Policy">
      <p>
        This policy describes browser storage and third-party content used by
        the Marigold Secondary School website. The website currently does not
        run analytics or advertising services and does not use advertising
        cookies.
      </p>

      <h2>Strictly necessary browser storage</h2>
      <p>
        The site stores your cookie preference in your browser’s local storage
        under <code>marigold-cookie-preferences-v1</code>. This remembers
        whether optional content is allowed so the consent banner does not
        needlessly reappear. This is browser storage, not a tracking cookie, and
        is used only to remember your choice.
      </p>
      <p>
        The Gallery may also read a previously saved gallery list from
        <code> marigold-gallery-items</code> in local storage, if one is
        present. The site does not use this value for analytics or advertising.
      </p>

      <h2>Optional analytics</h2>
      <p>
        No analytics provider is currently installed, so accepting the
        Analytics preference does not activate an analytics tool or set
        analytics cookies. If analytics is introduced later, the school should
        update this policy and obtain any required consent before it runs.
      </p>

      <h2>Google Maps</h2>
      <p>
        Maps on the Contact Us and footer sections are not loaded until you
        enable “Third-party maps” in Manage Preferences. Google may use
        identifiers or cookies and receive technical information when the map
        is loaded. You can leave maps blocked and still use the rest of the
        website.
      </p>

      <h2>EmailJS admission form</h2>
      <p>
        The admission form uses EmailJS only after you submit it. This sends
        the application data to the school and is described in the{" "}
        <Link to="/privacy-policy">Privacy Policy</Link>. This form submission
        is a data-processing service, not an advertising or analytics cookie.
      </p>

      <h2>Change or withdraw your choice</h2>
      <p>
        Use the button below or Cookie Settings in the website footer to reopen
        the preference panel. You can reject optional content or update your
        choices at any time. Clearing this site’s local storage in your
        browser also removes the saved choice, so the banner will appear again.
      </p>
      <button
        type="button"
        onClick={openPreferences}
        className="not-prose rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Manage Cookie Preferences
      </button>
    </LegalLayout>
  );
}

export function TermsOfUse() {
  return (
    <LegalLayout title="Website Terms of Use">
      <p>
        By using this website, visitors agree to use it responsibly and to
        provide accurate information when submitting an enquiry or admission
        application.
      </p>

      <h2>Website information</h2>
      <p>
        Pages about admissions, fees, classes and activities are provided for
        general information and may change between academic sessions. An
        application submitted through the website is not confirmation of
        admission. The school will communicate the current requirements,
        availability and applicable fees directly.
      </p>

      <h2>Admission applications</h2>
      <p>
        The person submitting an application confirms that they are at least
        18 years old or are the student’s parent or legal guardian, and are
        authorised to provide the submitted information. Families should not
        use the form to submit unrelated or unnecessary sensitive information.
      </p>

      <h2>External services and links</h2>
      <p>
        The website may link to or embed third-party services, including
        Google Maps and EmailJS. Those services have their own terms and
        privacy practices. The school does not control external websites.
      </p>

      <h2>Updates and contact</h2>
      <p>
        These terms may be updated when the website or its services change.
        Questions about website information can be sent to{" "}
        <a href="mailto:marigoldvijay@gmail.com">marigoldvijay@gmail.com</a> or
        raised by calling <a href="tel:+919414638988">+91-9414638988</a>.
      </p>
      <p>
        Read the <Link to="/privacy-policy">Privacy Policy</Link> and{" "}
        <Link to="/cookie-policy">Cookie Policy</Link> for more detail about
        personal information and browser preferences.
      </p>
    </LegalLayout>
  );
}
