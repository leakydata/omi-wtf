import { Footer, Header, PageIntro } from "../site-shell";

const unknown = "Select one";

export default function ExperiencesPage() {
  return <>
    <main>
      <Header />
      <PageIntro kicker="DID OMI CHANGE THE DEAL ON YOU TOO?" title="Tell me what you saw">
        <p>If you bought Omi hardware after seeing $199 a year, 1,200 free minutes, or another promise that changed later, your story may match this one. The questions below help separate a shared pattern from a one-off mess.</p>
      </PageIntro>
      <div className="page-body form-layout">
        <form className="experience-form">
          <fieldset className="screening-fieldset">
            <legend>Does your story match?</legend>
            <p className="form-help">There is no automatic score and no magic answer. These details show whether buyers saw the same promises, hit the same change, and ended up in the same position. A lawyer and a court would decide any actual class.</p>

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

            <div className="form-row">
              <label>How long have you used Omi?
                <select name="time_using_omi" defaultValue="">
                  <option value="" disabled>{unknown}</option>
                  <option value="not-activated">Hardware not activated yet</option>
                  <option value="under-month">Less than one month</option>
                  <option value="one-to-six-months">One to six months</option>
                  <option value="six-to-twelve-months">Six to twelve months</option>
                  <option value="over-year">More than one year</option>
                </select>
              </label>
              <label>How much history have you built?<input type="text" name="archive_size" placeholder="e.g. 400 conversations, 200 hours, 800 memories" /></label>
            </div>

            <div className="form-row">
              <label>Have you requested a full data export?
                <select name="export_status" defaultValue="">
                  <option value="" disabled>{unknown}</option>
                  <option value="no">No</option>
                  <option value="received">Yes, and I received it</option>
                  <option value="pending">Yes, and I am still waiting</option>
                  <option value="unavailable">I tried but could not get one</option>
                  <option value="unaware">I did not know that was possible</option>
                </select>
              </label>
              <label>How hard would it be to leave Omi now?
                <select name="switching_difficulty" defaultValue="">
                  <option value="" disabled>{unknown}</option>
                  <option value="easy">Easy</option>
                  <option value="moderate">Manageable, but I would lose time or useful history</option>
                  <option value="hard">Hard; I depend on the archive</option>
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
            <legend>What can you prove?</legend>
            <label className="check"><input type="checkbox" name="has_order_record" /> Order confirmation, receipt, or shipping record</label>
            <label className="check"><input type="checkbox" name="has_pricing_capture" /> Screenshot or recording of pricing or service allowances</label>
            <label className="check"><input type="checkbox" name="has_app_capture" /> Screenshot of the app or account page</label>
            <label className="check"><input type="checkbox" name="has_correspondence" /> Emails, chats, or other correspondence with Omi</label>
            <label className="check"><input type="checkbox" name="has_discord_capture" /> Discord message or screenshot about pricing</label>
            <label className="check"><input type="checkbox" name="has_payment_record" /> Redactable payment or refund record</label>
          </fieldset>

          <label>Tell the story in your own words<textarea name="experience" rows={7} placeholder="What did you see, when did you buy, when did the deal change, what did Omi say, and did you lose any money? Stick to what you personally saw or experienced." /></label>

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
            <label className="check"><input type="checkbox" required /> I understand that this form does not decide class membership or create an attorney-client relationship.</label>
          </fieldset>
          <button type="button" className="button primary" disabled>Private intake coming soon</button>
          <p className="form-status">Nothing you type is sent anywhere yet. The form will stay closed until there is secure storage, a deletion policy, and clear permission rules for any attorney referral.</p>
        </form>

        <aside className="privacy-panel">
          <span className="kicker">DOES YOUR STORY LINE UP?</span>
          <h2>The pattern matters.</h2>
          <p>The strongest match is not simply “I am mad at Omi.” It is a buyer who can show the same basic sequence:</p>
          <ul>
            <li>whether people bought the same hardware;</li>
            <li>whether they saw the same price or allowance before buying;</li>
            <li>whether that representation affected the purchase;</li>
            <li>whether different terms appeared afterward;</li>
            <li>whether the company responded similarly;</li>
            <li>whether consumers experienced a similar unreimbursed loss;</li>
            <li>how much history and curation they built inside Omi; and</li>
            <li>whether that history can be exported and used somewhere else.</li>
          </ul>
          <p>Location, timing, refunds, releases, and the checkout terms can change the answer for each person. Federal class rules also look at how many people are involved, what facts they share, and whether the proposed representatives actually match the group. <a href="https://www.law.cornell.edu/rules/frcp/rule_23" target="_blank" rel="noreferrer">Read Federal Rule 23 ↗</a></p>

          <span className="kicker panel-divider">BEFORE YOU SUBMIT</span>
          <h2>Protect private information.</h2>
          <ul>
            <li>Do not include full card or bank numbers.</li>
            <li>Remove home addresses and phone numbers.</li>
            <li>Do not submit privileged communications with your lawyer.</li>
            <li>Keep original files; submit copies for redaction.</li>
            <li>Nothing will be shared with an attorney without permission.</li>
          </ul>
          <p>This form does not make me your lawyer, create an attorney-client relationship, or stop a legal deadline.</p>
        </aside>
      </div>
    </main>
    <Footer />
  </>;
}
