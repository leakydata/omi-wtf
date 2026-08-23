import { Footer, Header, PageIntro } from "../site-shell";

const endpoint = process.env.NEXT_PUBLIC_INTAKE_FORM_ENDPOINT;
const formIsLive = Boolean(endpoint);

export default function ExperiencesPage() {
  return <>
    <main>
      <Header />
      <PageIntro kicker="DID OMI CHANGE THE DEAL ON YOU TOO?" title="Tell me what happened">
        <p>This short form is for Omi customers who saw one deal before buying and something different afterward. It should take about three minutes.</p>
      </PageIntro>
      <div className="page-body form-layout">
        <form className="experience-form" action={endpoint} method="POST">
          <input type="hidden" name="_subject" value="New omi.wtf customer intake" />
          <input className="form-trap" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <fieldset>
            <legend>1. Your purchase</legend>
            <div className="form-row">
              <label>Where did you live when you bought it?<input type="text" name="purchase_location" required placeholder="State and country, e.g. Pennsylvania, USA" /></label>
              <label>When did you buy it?<input type="month" name="purchase_month" required /></label>
            </div>
            <label>How did you get the hardware?
              <select name="purchase_source" required defaultValue="">
                <option value="" disabled>Select one</option>
                <option value="direct">I bought it directly from Omi</option>
                <option value="retailer">I bought it from another seller</option>
                <option value="gift">It was a gift</option>
                <option value="other">Something else</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>2. The deal you saw</legend>
            <p className="form-help">Check everything you personally remember seeing before the purchase.</p>
            <label className="check"><input type="checkbox" name="saw_199_annual" /> Unlimited for about $199 a year</label>
            <label className="check"><input type="checkbox" name="saw_1200_minutes" /> 1,200 free minutes each month</label>
            <label className="check"><input type="checkbox" name="saw_other_promise" /> A different price or allowance</label>
            <label className="check"><input type="checkbox" name="cannot_remember_promise" /> I do not remember</label>
            <label>Did that deal affect your decision to buy?
              <select name="deal_affected_purchase" required defaultValue="">
                <option value="" disabled>Select one</option>
                <option value="yes">Yes</option>
                <option value="partly">It was one reason</option>
                <option value="no">No</option>
                <option value="unsure">I am not sure</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>3. What changed</legend>
            <p className="form-help">Check everything that happened after you ordered or started using Omi.</p>
            <label className="check"><input type="checkbox" name="later_269_annual" /> I was shown about $269.91 a year</label>
            <label className="check"><input type="checkbox" name="later_300_minutes" /> The free plan dropped to 300 minutes</label>
            <label className="check"><input type="checkbox" name="later_other_change" /> I saw another price or feature change</label>
            <label className="check"><input type="checkbox" name="no_change_seen" /> I have not seen a change</label>
            <div className="form-row">
              <label>How did it end?
                <select name="outcome" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="paid-more">I paid the higher price</option>
                  <option value="full-refund">I received a full refund</option>
                  <option value="partial-refund">I received a partial refund</option>
                  <option value="unresolved">It is still unresolved</option>
                  <option value="no-loss">I did not lose money</option>
                  <option value="other">Something else</option>
                </select>
              </label>
              <label>Money still lost, if any<input type="text" name="money_lost" inputMode="decimal" placeholder="e.g. $69.92 or $0" /></label>
            </div>
          </fieldset>

          <fieldset>
            <legend>4. Your Omi history</legend>
            <label>How hard would it be to leave Omi now?
              <select name="switching_cost" required defaultValue="">
                <option value="" disabled>Select one</option>
                <option value="not-used">I have not started using it</option>
                <option value="easy">Easy, I have little or no history in Omi</option>
                <option value="some-loss">I would lose time or useful history</option>
                <option value="hard">Hard, I depend on my Omi archive</option>
                <option value="unsure">I am not sure</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>5. What records do you have?</legend>
            <label className="check"><input type="checkbox" name="evidence_order" /> Order confirmation or receipt</label>
            <label className="check"><input type="checkbox" name="evidence_screenshot" /> Pricing, Help Center, app, or Discord screenshot</label>
            <label className="check"><input type="checkbox" name="evidence_messages" /> Email or chat with Omi</label>
            <label className="check"><input type="checkbox" name="evidence_payment" /> Payment or refund record</label>
            <label className="check"><input type="checkbox" name="evidence_none" /> None of these</label>
          </fieldset>

          <label>Anything important I missed?<textarea name="story" rows={5} placeholder="A few sentences are enough. What did you see, what changed, and what did Omi tell you?" /></label>

          <fieldset>
            <legend>6. How to reach you</legend>
            <div className="form-row">
              <label>Name<input type="text" name="name" required autoComplete="name" /></label>
              <label>Email<input type="email" name="email" required autoComplete="email" /></label>
            </div>
            <label className="check"><input type="checkbox" name="contact_and_preserve_consent" required /> You may contact me about this experience. I will keep my original records.</label>
            <label className="check"><input type="checkbox" name="accuracy_confirmation" required /> This is my own experience and is accurate to the best of my knowledge.</label>
          </fieldset>

          <button type="submit" className="button primary" disabled={!formIsLive}>{formIsLive ? "Send my experience" : "Private intake coming soon"}</button>
          <p className="form-status">{formIsLive ? "Your answers will be sent privately. Nothing will be published without separate permission." : "Nothing you type is sent anywhere yet. The form will open after a secure submission address and privacy notice are connected."}</p>
        </form>

        <aside className="privacy-panel">
          <span className="kicker">WHY THESE QUESTIONS?</span>
          <h2>An attorney needs the pattern, not a novel.</h2>
          <p>The useful comparison is simple:</p>
          <ul>
            <li>where and when people bought;</li>
            <li>what Omi showed them before buying;</li>
            <li>whether the promise mattered to the purchase;</li>
            <li>what changed afterward;</li>
            <li>whether anyone lost money;</li>
            <li>what proof still exists; and</li>
            <li>how much Omi history makes leaving harder.</li>
          </ul>
          <p>This form helps compare experiences. It does not decide who belongs in a lawsuit or create an attorney-client relationship.</p>

          <span className="kicker panel-divider">KEEP PRIVATE DETAILS OUT</span>
          <h2>Do not send sensitive records yet.</h2>
          <ul>
            <li>Do not enter card or bank numbers.</li>
            <li>Do not paste private conversations recorded by Omi.</li>
            <li>Keep the original files in a safe place.</li>
            <li>If records are needed, I will ask for redacted copies later.</li>
          </ul>
        </aside>
      </div>
    </main>
    <Footer />
  </>;
}
