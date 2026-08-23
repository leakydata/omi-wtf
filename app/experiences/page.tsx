import { Footer, Header, PageIntro } from "../site-shell";

const unknown = "Select one";

export default function ExperiencesPage() {
  return <>
    <main>
      <Header />
      <PageIntro kicker="PRIVATE INTAKE" title="Share your Omi experience">
        <p>This questionnaire gathers facts that a consumer attorney could use to assess a possible class and individual class membership. It does not determine whether anyone legally qualifies. Nothing is published automatically.</p>
      </PageIntro>
      <div className="page-body form-layout">
        <form className="experience-form">
          <fieldset className="screening-fieldset">
            <legend>Preliminary class-fit screening</legend>
            <p className="form-help">These questions look for substantially similar purchases, representations, timing, and harm. A lawyer and ultimately a court—not this website—would define and certify any class.</p>

            <div className="form-row">
              <label>Country at time of purchase<input type="text" name="purchase_country" autoComplete="country-name" placeholder="e.g. United States" /></label>
              <label>State, province, or territory<input type="text" name="purchase_region" autoComplete="address-level1" placeholder="e.g. Pennsylvania" /></label>
            </div>

            <div className="form-row">
              <label>Your relationship to Omi
                <select name="relationship" defaultValue="">
                  <option value="" disabled>{unknown}</option>
                  <option value="consumer">Consumer purchaser</option>
                  <option value="business">Business purchaser</option>
                  <option value="gift-recipient">Gift recipient</option>
                  <option value="employee">Current or former Omi employee, contractor, or owner</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label>Did you order or buy Omi hardware?
                <select name="purchased_hardware" defaultValue="">
                  <option value="" disabled>{unknown}</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="gift">Someone bought it for me</option>
                  <option value="unsure">Unsure</option>
                </select>
              </label>
            </div>

            <div className="form-row">
              <label>Approximate purchase date<input type="date" name="purchase_date" /></label>
              <label>Device ordered<input type="text" name="device" placeholder="e.g. Omi wearable" /></label>
            </div>

            <fieldset className="nested-fieldset">
              <legend>What did you personally see before buying?</legend>
              <label className="check"><input type="checkbox" name="saw_199_annual" /> Annual Unlimited at about $199 or $199.99</label>
              <label className="check"><input type="checkbox" name="saw_1200_minutes" /> A free allowance of 1,200 minutes per month</label>
              <label className="check"><input type="checkbox" name="saw_other_representation" /> Another specific price or service allowance</label>
              <label className="check"><input type="checkbox" name="saw_no_representation" /> I do not remember seeing a price or allowance before buying</label>
            </fieldset>

            <div className="form-row">
              <label>Did that representation affect your decision to buy?
                <select name="purchase_reliance" defaultValue="">
                  <option value="" disabled>{unknown}</option>
                  <option value="yes-major">Yes, it was an important reason</option>
                  <option value="yes-partial">Yes, it was one of several reasons</option>
                  <option value="no">No</option>
                  <option value="unsure">Unsure</option>
                </select>
              </label>
              <label>When did you first discover different terms?
                <select name="discovery_timing" defaultValue="">
                  <option value="" disabled>{unknown}</option>
                  <option value="before-order">Before placing the order</option>
                  <option value="after-order-before-delivery">After ordering, before delivery</option>
                  <option value="delivery-activation">At delivery or activation</option>
                  <option value="after-use">After beginning to use the device</option>
                  <option value="never">I did not see different terms</option>
                  <option value="unsure">Unsure</option>
                </select>
              </label>
            </div>

            <div className="form-row">
              <label>Did Omi honor the earlier representation?
                <select name="honored_representation" defaultValue="">
                  <option value="" disabled>{unknown}</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="refund-only">No; Omi offered or issued a refund instead</option>
                  <option value="not-asked">I did not ask</option>
                  <option value="pending">Still unresolved</option>
                </select>
              </label>
              <label>Refund status
                <select name="refund_status" defaultValue="">
                  <option value="" disabled>{unknown}</option>
                  <option value="none">No refund received or offered</option>
                  <option value="offered">Refund offered but not accepted</option>
                  <option value="partial">Partial refund received</option>
                  <option value="full">Full refund received</option>
                  <option value="pending">Refund pending</option>
                  <option value="not-applicable">Not applicable</option>
                </select>
              </label>
            </div>

            <div className="form-row">
              <label>Did you pay the later subscription price?
                <select name="paid_later_price" defaultValue="">
                  <option value="" disabled>{unknown}</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="trial">No; I used only the free or trial plan</option>
                  <option value="unsure">Unsure</option>
                </select>
              </label>
              <label>Unreimbursed amount, if known<input type="text" name="unreimbursed_amount" inputMode="decimal" placeholder="e.g. $69.92, $15 shipping, or $0" /></label>
            </div>

            <div className="form-row">
              <label>How were Omi’s terms presented at checkout?
                <select name="terms_presentation" defaultValue="">
                  <option value="" disabled>{unknown}</option>
                  <option value="checkbox">I checked a box agreeing to terms</option>
                  <option value="button-notice">Text near the purchase button referred to terms</option>
                  <option value="footer-link">I remember only a footer or separate link</option>
                  <option value="not-seen">I did not see terms or an agreement notice</option>
                  <option value="unsure">I do not remember</option>
                </select>
              </label>
              <label>Did you sign a release or settlement?
                <select name="release_status" defaultValue="">
                  <option value="" disabled>{unknown}</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="unsure">Unsure</option>
                </select>
              </label>
            </div>
          </fieldset>

          <div className="form-row">
            <label>Price you remember seeing<input type="text" name="advertised_price" placeholder="e.g. $199 annually" /></label>
            <label>Price shown later<input type="text" name="later_price" placeholder="e.g. $269.91 annually" /></label>
          </div>
          <div className="form-row">
            <label>Free allowance represented<input type="text" name="advertised_minutes" placeholder="e.g. 1,200 minutes" /></label>
            <label>Allowance received or later listed<input type="text" name="later_minutes" placeholder="e.g. 300 minutes" /></label>
          </div>

          <fieldset>
            <legend>Evidence you still have</legend>
            <label className="check"><input type="checkbox" name="has_order_record" /> Order confirmation, receipt, or shipping record</label>
            <label className="check"><input type="checkbox" name="has_pricing_capture" /> Screenshot or recording of pricing or service allowances</label>
            <label className="check"><input type="checkbox" name="has_app_capture" /> Screenshot of the app or account page</label>
            <label className="check"><input type="checkbox" name="has_correspondence" /> Emails, chats, or other correspondence with Omi</label>
            <label className="check"><input type="checkbox" name="has_payment_record" /> Redactable payment or refund record</label>
          </fieldset>

          <label>What happened?<textarea name="experience" rows={7} placeholder="Describe only what you personally saw or experienced. Include approximate dates, where each representation appeared, what Omi said, and any money you did not recover." /></label>

          <div className="form-row">
            <label>Would you preserve evidence and speak with a consumer attorney?
              <select name="attorney_participation" defaultValue="">
                <option value="" disabled>{unknown}</option>
                <option value="yes">Yes</option>
                <option value="maybe">Maybe; I would like more information</option>
                <option value="no">No; documentation only</option>
              </select>
            </label>
            <label>May the site operator contact you privately?
              <select name="contact_permission" defaultValue="">
                <option value="" disabled>{unknown}</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          </div>

          <div className="form-row">
            <label>Optional public display name<input type="text" name="display_name" placeholder="Leave blank to remain unnamed" /></label>
            <label>Private contact email<input type="email" name="email" autoComplete="email" placeholder="Never published by default" /></label>
          </div>

          <fieldset>
            <legend>Required confirmations</legend>
            <label className="check"><input type="checkbox" required /> I certify that this submission accurately describes my own experience to the best of my knowledge.</label>
            <label className="check"><input type="checkbox" required /> I authorize publication only of information I have specifically marked as public.</label>
            <label className="check"><input type="checkbox" required /> I understand that this screening does not determine class membership or create an attorney-client relationship.</label>
          </fieldset>
          <button type="button" className="button primary" disabled>Secure intake opening soon</button>
          <p className="form-status">Transmission remains disabled until a private intake endpoint, retention policy, deletion process, and consent-based attorney referral procedure are configured.</p>
        </form>

        <aside className="privacy-panel">
          <span className="kicker">POTENTIAL CLASS FIT</span>
          <h2>Facts that may matter.</h2>
          <p>A similar experience does not automatically make someone a class member. The most useful responses will help counsel compare:</p>
          <ul>
            <li>whether people bought the same hardware;</li>
            <li>whether they saw the same price or allowance before buying;</li>
            <li>whether that representation affected the purchase;</li>
            <li>whether different terms appeared afterward;</li>
            <li>whether the company responded similarly; and</li>
            <li>whether consumers experienced a similar unreimbursed loss.</li>
          </ul>
          <p>Location, purchase timing, refunds, releases, and how terms were presented may require individual review. Federal class certification also examines numerosity, commonality, typicality, adequacy, and—often—predominance and superiority. <a href="https://www.law.cornell.edu/rules/frcp/rule_23" target="_blank" rel="noreferrer">Read Federal Rule 23 ↗</a></p>

          <span className="kicker panel-divider">BEFORE YOU SUBMIT</span>
          <h2>Protect private information.</h2>
          <ul>
            <li>Do not include full card or bank numbers.</li>
            <li>Remove home addresses and phone numbers.</li>
            <li>Do not submit privileged communications with your lawyer.</li>
            <li>Keep original files; submit copies for redaction.</li>
            <li>Nothing will be shared with an attorney without permission.</li>
          </ul>
          <p>Submitting information does not create an attorney-client relationship or stop any legal deadline.</p>
        </aside>
      </div>
    </main>
    <Footer />
  </>;
}
