import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Michael's Treasures collects, uses and protects personal data, in accordance with the GDPR.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="legal">
      <div className="legal__inner">
        <a className="legal__back" href="/">
          ← Michael&apos;s Treasures
        </a>
        <h1 className="serif-h legal__title">Privacy Policy</h1>
        <p className="eyebrow legal__updated">Updated 6 August 2026</p>

        <p>
          At {site.name}, I value your privacy and am committed to protecting
          your personal data. This Privacy Policy explains how your personal
          information is collected, used and protected when you contact me
          through this website, in accordance with the General Data Protection
          Regulation (EU) 2016/679 (&quot;GDPR&quot;).
        </p>

        <h2>1. Data Controller</h2>
        <p>
          {site.legalName}
          <br />
          IČO: {site.ico}
          <br />
          {site.streetAddress}, {site.postalCode}, {site.city}
          <br />
          {site.email}
        </p>

        <h2>2. What Data Are Collected</h2>
        <p>
          Depending on your enquiry, the following categories of personal data
          may be collected:
        </p>
        <ul>
          <li>
            <strong>Contact Information</strong> (such as your name, email
            address and, if provided, your phone number)
          </li>
          <li>
            <strong>Communication Data</strong> (the content of messages and
            enquiries you send through the contact form or by email)
          </li>
          <li>
            <strong>Transaction Data</strong> (information necessary to
            complete a purchase or sale, such as billing or shipping details)
          </li>
          <li>
            <strong>Photographs and Related Metadata</strong> (photographs you
            voluntarily provide, including any metadata contained within the
            files)
          </li>
        </ul>

        <h2>3. How Is Your Data Used</h2>
        <p>
          Your personal data are processed only to the extent necessary to
          respond to your enquiry, provide advice, arrange the purchase or sale
          of a watch, complete a transaction, and fulfil our legal obligations.
        </p>
        <p>
          Personal data are never used for marketing purposes without your
          prior consent.
        </p>
        <p>
          Where necessary for the provision of our services, certain personal
          data may be shared with trusted third-party service providers. In
          particular, information relating to a watch or its owner may be
          shared with:
        </p>
        <p>
          Tuloki Watch Service s.r.o.
          <br />
          Jesenského 98/74, 943 01 Štúrovo, Slovakia
          <br />
          Email: renovebytuloki@gmail.com
        </p>
        <p>
          Such information is shared only where necessary for the inspection,
          servicing or repair of a watch and only to the extent required for
          those purposes.
        </p>

        <h2>4. Legal Bases for Processing</h2>
        <p>
          Personal data are processed only where there is a lawful basis under
          the General Data Protection Regulation (GDPR). Depending on the
          circumstances, processing is based on:
        </p>
        <ul>
          <li>
            <strong>Performance of a Contract</strong> — where processing is
            necessary to respond to an enquiry or to provide the requested
            services, including the purchase or sale of a watch.
          </li>
          <li>
            <strong>Legal Obligation</strong> — where certain information must
            be retained to comply with applicable legal, tax or accounting
            obligations.
          </li>
          <li>
            <strong>Consent</strong> — where explicit consent has been
            provided, for example for receiving newsletters, marketing
            communications or for the use of non-essential cookies. Consent may
            be withdrawn at any time without affecting the lawfulness of
            processing carried out before its withdrawal.
          </li>
        </ul>

        <h2>5. Data Retention</h2>
        <p>
          Your personal data are kept only as long as necessary for the
          purposes explained above or as required by law. Where no legal
          obligation requires longer retention, personal data will be securely
          deleted or anonymised.
        </p>

        <h2>6. Cookies</h2>
        <p>
          This website does not currently use analytics, advertising or other
          non-essential cookies. Only cookies that are strictly necessary for
          the operation and security of the website may be used.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          Under the GDPR, data subjects are entitled to exercise the following
          rights, subject to the conditions and limitations set out in
          applicable law:
        </p>
        <ul>
          <li>
            <strong>Right of Access</strong> — to obtain confirmation as to
            whether personal data are being processed and, where that is the
            case, to access such data.
          </li>
          <li>
            <strong>Right to Rectification</strong> — to request the correction
            of inaccurate or incomplete personal data.
          </li>
          <li>
            <strong>Right to Erasure</strong> — to request the deletion of
            personal data where the legal requirements are met.
          </li>
          <li>
            <strong>Right to Restriction of Processing</strong> — to request
            that the processing of personal data be restricted in certain
            circumstances.
          </li>
          <li>
            <strong>Right to Object</strong> — to object to the processing of
            personal data where processing is based on legitimate interests.
          </li>
          <li>
            <strong>Right to Data Portability</strong> — to receive personal
            data in a structured, commonly used and machine-readable format,
            where applicable.
          </li>
          <li>
            <strong>Right to Withdraw Consent</strong> — to withdraw consent at
            any time where processing is based on consent, without affecting
            the lawfulness of processing carried out before its withdrawal.
          </li>
          <li>
            <strong>Right to Lodge a Complaint</strong> — to lodge a complaint
            with the competent supervisory authority if it is believed that the
            processing of personal data infringes applicable data protection
            laws. In the Czech Republic, the competent supervisory authority is
            the Office for Personal Data Protection (Úřad pro ochranu osobních
            údajů — ÚOOÚ), Pplk. Sochora 27, 170 00 Prague 7, Czech Republic.
          </li>
        </ul>

        <h2>8. Data Security</h2>
        <p>
          Appropriate technical and organisational measures are implemented to
          protect personal data against accidental or unlawful destruction,
          loss, alteration, unauthorised disclosure, or unauthorised access.
        </p>
        <p>
          Although reasonable safeguards are maintained, no method of
          electronic transmission or storage can be guaranteed to be completely
          secure.
        </p>

        <h2>9. International Data Transfers</h2>
        <p>
          Where personal data are processed by service providers located
          outside the European Economic Area (EEA), appropriate safeguards are
          implemented in accordance with Chapter V of the GDPR, including the
          use of the European Commission&apos;s Standard Contractual Clauses
          where applicable.
        </p>

        <h2>10. Changes to this Privacy Policy</h2>
        <p>
          This Privacy Policy may be updated from time to time to reflect
          changes in applicable legal requirements, business practices or the
          operation of this website. The latest version will always be
          published on this page together with the date of the last update.
        </p>

        <h2>11. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy or your rights,
          please contact me at: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
    </main>
  );
}
