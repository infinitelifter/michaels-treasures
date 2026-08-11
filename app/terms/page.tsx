import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions governing enquiries, purchases and sales of vintage watches through Michael's Treasures.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="legal">
      <div className="legal__inner">
        <a className="legal__back" href="/">
          ← Michael&apos;s Treasures
        </a>
        <h1 className="serif-h legal__title">Terms &amp; Conditions</h1>
        <p className="eyebrow legal__updated">Effective 6 August 2026</p>

        <p>
          These Terms &amp; Conditions govern the use of the {site.name}{" "}
          website and apply to enquiries, purchases and sales of watches
          conducted through this website, Instagram or any other direct
          communication with {site.name}.
        </p>
        <p>
          By using this website or contacting {site.name} regarding a watch,
          you acknowledge that you have read these Terms together with the{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>

        <h2>Nature of the Website</h2>
        <p>
          This website is intended as a presentation of {site.name} and does
          not constitute an online shop. Watches displayed on this website are
          for informational purposes only. Current availability is presented
          primarily through the official Instagram account.
        </p>

        <h2>Definitions</h2>
        <p>
          For the purposes of these Terms &amp; Conditions, the following
          definitions shall apply:
        </p>
        <ul>
          <li>
            <strong>&quot;Website&quot;</strong> means the {site.name} website,
            including all associated pages, content and services available
            under its domain.
          </li>
          <li>
            <strong>&quot;Seller&quot;</strong> means {site.legalName}, IČO:{" "}
            {site.ico}, {site.streetAddress}, {site.postalCode}, {site.city}.
          </li>
          <li>
            <strong>&quot;Buyer&quot; or &quot;customer&quot;</strong> means
            any individual or legal entity enquiring about or purchasing a
            watch from {site.name}.
          </li>
          <li>
            <strong>&quot;Listing&quot;</strong> means a description,
            photograph or presentation of a watch published on the Website,
            Instagram or otherwise provided by the Seller for informational
            purposes. A Listing does not constitute a legally binding offer to
            conclude a contract.
          </li>
          <li>
            <strong>&quot;Watch&quot; or &quot;Product&quot;</strong> means any
            vintage watch or related accessory offered for sale through{" "}
            {site.name}, including offers published on the Website, Instagram
            or communicated directly.
          </li>
          <li>
            <strong>&quot;Vintage Watch&quot;</strong> means a pre-owned watch
            which, due to its age and history, may display signs of use, ageing
            or previous servicing. Such characteristics are considered inherent
            to vintage watches and do not constitute defects unless expressly
            stated otherwise.
          </li>
          <li>
            <strong>&quot;Enquiry&quot;</strong> means any communication
            initiated through the Website, Instagram, email or any other direct
            communication channel regarding the purchase or sale of a Vintage
            Watch.
          </li>
          <li>
            <strong>&quot;Purchase Agreement&quot;</strong> means an individual
            purchase agreement concluded between the Seller and the Buyer
            following mutual confirmation of all essential terms, including the
            watch, purchase price and method of delivery. The Website itself
            does not enable orders or the automatic conclusion of contracts.
          </li>
          <li>
            <strong>&quot;Business Days&quot;</strong> means calendar days
            excluding Saturdays, Sundays and public holidays in the Czech
            Republic.
          </li>
        </ul>

        <h2>Listings</h2>
        <p>
          The Website and the official {site.name} Instagram account serve as
          presentation platforms only and do not constitute an online shop. All
          listings are provided for informational purposes and do not
          constitute a legally binding offer to conclude a contract.
        </p>
        <p>
          Availability of individual watches may change at any time without
          prior notice.
        </p>
        <p>
          Photographs form an integral part of each listing and are intended to
          present the actual condition of the watch as accurately as possible.
          Minor differences in colour or appearance may occur depending on the
          display settings of the device used to view the images.
        </p>
        <p>
          Every effort is made to ensure that all descriptions, specifications
          and photographs are accurate. However, occasional errors or omissions
          may occur. If any material inaccuracy is identified before a purchase
          agreement is concluded, the Buyer will be informed without undue
          delay and provided with the corrected information. The Buyer shall
          then be free to proceed with or decline the purchase.
        </p>

        <h2>Authenticity &amp; Condition</h2>
        <p>
          Every watch offered by {site.name} is individually selected and
          carefully inspected before being offered for sale. Whenever possible,
          watches are offered in their honest, unpolished condition in order to
          preserve their originality and historical character.
        </p>
        <p>
          As vintage watches are often several decades old, signs of age, wear
          and previous use are to be expected and form part of their character.
          Such characteristics are not considered defects unless expressly
          stated otherwise.
        </p>
        <p>
          Whenever possible, preference is given to watches in the most
          original condition available. Any known replaced parts, previous
          repairs, servicing, refinished components or other known deviations
          from originality will be clearly disclosed in the listing or during
          communication prior to the conclusion of the Purchase Agreement.
        </p>
        <p>
          All descriptions and photographs are intended to present the watch as
          accurately as possible. Buyers are encouraged to review the listing
          carefully and request any additional information or photographs
          before completing a purchase.
        </p>
        <p>
          When the rate accuracy of a watch is stated, it is based on
          measurements taken using a professional timegrapher under testing
          conditions. The actual performance of a mechanical watch may vary
          depending on factors including wearing habits, position, temperature,
          power reserve and the age of the movement. Timegrapher results are
          therefore provided for informational purposes only and do not
          constitute a guarantee of future accuracy.
        </p>

        <h2>Enquiries &amp; Communication</h2>
        <p>
          All enquiries are handled directly by the Seller through the Website
          contact form, Instagram, email or other mutually agreed means of
          communication.
        </p>
        <p>
          Any information, photographs, videos or additional details requested
          by the Buyer will be provided where reasonably available in order to
          assist the Buyer in making an informed purchasing decision.
        </p>
        <p>
          No purchase agreement is concluded solely by submitting an enquiry or
          expressing interest in a watch. A purchase agreement is formed only
          after the Seller and the Buyer have mutually agreed on all essential
          terms of the transaction, including the identity of the watch, the
          purchase price, the method of payment and the method of delivery.
        </p>
        <p>
          Unless otherwise expressly agreed, watches are offered on a
          first-paid basis. The Seller reserves the right to offer a watch to
          another buyer if payment is not received within the agreed timeframe.
        </p>

        <h2>Reservation</h2>
        <p>
          A watch may be reserved only upon prior agreement between the Seller
          and the Buyer.
        </p>
        <p>
          Unless otherwise agreed, a reservation becomes effective only upon
          receipt of a Reservation Fee, the amount and reservation period of
          which shall be agreed individually between the parties.
        </p>
        <p>
          During the agreed reservation period, the Seller will not offer the
          reserved watch to other prospective buyers.
        </p>
        <p>
          If the Buyer completes the purchase within the agreed reservation
          period, the Reservation Fee shall be credited towards the purchase
          price.
        </p>
        <p>
          If the Buyer fails to complete the purchase or the agreed reservation
          period expires without full payment of the purchase price, the
          reservation shall automatically terminate and the Reservation Fee
          shall be non-refundable as consideration for the reservation of the
          watch.
        </p>
        <p>
          Following the expiry or termination of the reservation, the Seller
          shall be free to offer the watch for sale to other prospective
          buyers.
        </p>

        <h2>Payment</h2>
        <p>Payment by bank transfer is the preferred method of payment.</p>
        <p>
          Subject to prior agreement, payment may also be made through other
          payment providers, including Wise, Revolut or PayPal.
        </p>
        <p>
          Where payment is made through a third-party payment provider, the
          Buyer shall bear any transaction fees, currency conversion charges or
          other costs associated with the selected payment method, unless
          otherwise agreed.
        </p>
        <p>
          Full payment of the purchase price must be received before the watch
          is dispatched or handed over to the Buyer.
        </p>

        <h2>Shipping &amp; Delivery</h2>
        <p>
          Unless otherwise agreed, watches are dispatched within 24 hours after
          full payment has been received.
        </p>
        <p>
          Every watch is carefully packaged and shipped using a tracked and
          fully insured shipping service, unless the Buyer expressly requests
          an alternative method of delivery.
        </p>
        <p>
          Tracking information will be provided to the Buyer once the shipment
          has been dispatched.
        </p>
        <p>
          Delivery times are estimates only and may vary depending on the
          destination, customs procedures or circumstances beyond the
          Seller&apos;s reasonable control. The Seller shall not be liable for
          delays caused by shipping carriers or customs authorities.
        </p>
        <p>
          Any import duties, taxes or customs charges applicable outside the
          European Union shall be the sole responsibility of the Buyer.
        </p>
        <p>
          Where the Buyer chooses an uninsured or untracked shipping method
          against the Seller&apos;s recommendation, the shipment shall be made
          entirely at the Buyer&apos;s own risk.
        </p>

        <h2>Watch Servicing</h2>
        <p>
          Upon prior agreement, any watch offered by {site.name} may be
          professionally serviced before delivery.
        </p>
        <p>
          Servicing is performed only when requested by the Buyer or when
          otherwise agreed between the parties. Unless expressly agreed,
          watches are sold in the condition described in the listing.
        </p>
        <p>
          The servicing is carried out by: Tuloki Watch Service s.r.o.,
          Slovakia, email: renovebytuloki@gmail.com.
        </p>
        <p>
          The typical servicing time is approximately 4 to 8 weeks. However,
          this timeframe is indicative only and may vary depending on the
          condition of the watch, the scope of the required work, the
          availability of spare parts and other circumstances beyond the
          Seller&apos;s reasonable control.
        </p>
        <p>
          Where servicing has been agreed, dispatch of the watch shall take
          place only after the servicing has been completed.
        </p>
        <p>
          Unless otherwise expressly agreed, the cost of servicing is not
          included in the purchase price of the watch and will be charged
          separately. The Buyer will be informed of the estimated servicing
          costs before any work is carried out.
        </p>

        <h2>Warranty &amp; Liability</h2>
        <p>
          Every watch offered by {site.name} is carefully inspected before sale
          and is guaranteed to be in working condition at the time of delivery,
          unless expressly stated otherwise in the listing or agreed between
          the parties.
        </p>
        <p>
          Vintage watches are unique items that have often been in use for
          several decades. Minor signs of age, wear and previous use, including
          scratches, patina, ageing of luminous material, and other cosmetic
          imperfections consistent with the age of the watch, are considered
          inherent characteristics of vintage watches and do not constitute
          defects.
        </p>
        <p>Unless expressly stated otherwise, no guarantee is given regarding:</p>
        <ul>
          <li>long-term timekeeping accuracy;</li>
          <li>water resistance or moisture protection;</li>
          <li>future performance of mechanical components;</li>
          <li>normal wear and tear resulting from regular use.</li>
        </ul>
        <p>
          Where timekeeping accuracy is stated, it refers solely to
          measurements taken prior to sale under controlled testing conditions
          and does not constitute a guarantee of future performance.
        </p>
        <p>
          The Seller shall not be liable for defects or damage resulting from:
        </p>
        <ul>
          <li>improper handling, misuse, accidents or impact;</li>
          <li>
            exposure to water, moisture, magnetic fields or extreme
            temperatures;
          </li>
          <li>normal wear and tear occurring after delivery;</li>
          <li>
            repairs, modifications or servicing carried out by persons other
            than the Seller or an authorised watchmaker.
          </li>
        </ul>
        <p>
          Any warranty relating to the working condition of the watch shall
          cease where the watch has been opened, modified or repaired by an
          unauthorised third party after delivery.
        </p>
        <p>
          Nothing in these Terms &amp; Conditions excludes or limits any rights
          that cannot be excluded or limited under applicable consumer
          protection legislation.
        </p>
        <p>
          Where a warranty claim is accepted, the Buyer shall bear the cost of
          shipping the watch to the Seller. The Seller shall bear the
          reasonable cost of returning the repaired or replacement watch to the
          Buyer.
        </p>
        <p>
          For Buyers acting in the course of a business or professional
          activity, the watch is sold &quot;as is&quot;. To the maximum extent
          permitted by applicable law, the Seller excludes any warranty and
          liability for defects, except where otherwise expressly agreed in
          writing.
        </p>

        <h2>Warranty on Serviced Watches</h2>
        <p>
          Where a watch has been professionally serviced prior to delivery by
          Tuloki Watch Service s.r.o., a 24-month service warranty is provided.
        </p>
        <p>This warranty covers:</p>
        <ul>
          <li>the proper functioning of the watch under normal use;</li>
          <li>defects resulting from the servicing performed;</li>
          <li>replacement parts installed during the servicing.</li>
        </ul>
        <p>The warranty does not cover:</p>
        <ul>
          <li>
            damage resulting from improper handling, accidents, impact, water,
            moisture, magnetic fields or unauthorised repairs;
          </li>
          <li>normal wear and tear occurring after delivery;</li>
          <li>
            deterioration of components that were not replaced during the
            servicing;
          </li>
          <li>
            deviations in timekeeping resulting from normal use, position,
            temperature or other external influences, provided the watch
            remains within reasonable operating parameters.
          </li>
        </ul>
        <p>
          Any warranty claim shall be assessed by the watchmaker who carried
          out the servicing or by another qualified watchmaker designated by
          the Seller.
        </p>

        <h2>Consumer Rights</h2>
        <p>
          If the Buyer is a consumer and the Purchase Agreement has been
          concluded as a distance contract, the Buyer has the right to withdraw
          from the Purchase Agreement within 14 days of taking possession of
          the watch, without giving any reason.
        </p>
        <p>
          To exercise the right of withdrawal, the Buyer must notify the Seller
          by means of a clear written statement sent by email or another agreed
          form of communication before the expiry of the withdrawal period.
        </p>
        <p>
          The Buyer shall return the watch without undue delay and, in any
          event, no later than 14 days after notifying the Seller of the
          withdrawal.
        </p>
        <p>
          Unless otherwise agreed, the Buyer shall bear the direct costs of
          returning the watch. The watch shall be carefully packaged and
          returned together with all accessories, documentation, certificates,
          presentation boxes and any other items forming part of the original
          purchase.
        </p>
        <p>
          The Buyer is required to use a tracked shipping service and insure
          the shipment for the full purchase value of the watch.
        </p>
        <p>
          The Buyer is entitled to handle and inspect the watch only to the
          extent necessary to establish its nature, characteristics and
          functionality, as would reasonably be possible in a physical retail
          environment.
        </p>
        <p>
          The watch must not be worn in everyday use, exposed to unnecessary
          wear, or handled in a manner exceeding what is reasonably necessary
          for inspection. Where the value of the watch has been diminished as a
          result of such handling, the Buyer shall be liable for the resulting
          diminution in value.
        </p>
        <p>
          The purchase price of the watch will be refunded within 14 days after
          the Seller has received the returned watch.
        </p>
        <p>
          Where servicing has been carried out at the Buyer&apos;s request
          prior to delivery, the agreed servicing fee constitutes payment for a
          separately requested service and is non-refundable in the event of
          withdrawal from the Purchase Agreement.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms &amp; Conditions and any contractual relationship between
          the Seller and the Buyer shall be governed by the laws of the Czech
          Republic.
        </p>
        <p>
          Any disputes arising out of or in connection with these Terms &amp;
          Conditions or any Purchase Agreement shall be subject to the
          jurisdiction of the competent courts of the Czech Republic.
        </p>

        <h2>Final Provisions</h2>
        <p>
          These Terms &amp; Conditions may be amended or updated by the Seller
          at any time. The latest version will always be published on the
          Website and shall become effective on the date specified therein.
        </p>
        <p>
          If any provision of these Terms &amp; Conditions is found to be
          invalid, illegal or unenforceable, such provision shall be deemed
          severable and shall not affect the validity or enforceability of the
          remaining provisions.
        </p>
        <p>
          These Terms &amp; Conditions shall become effective on 6 August 2026.
        </p>
      </div>
    </main>
  );
}
