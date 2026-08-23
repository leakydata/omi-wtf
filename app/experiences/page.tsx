"use client";

import { useState } from "react";
import { Footer, Header, PageIntro } from "../site-shell";

const googleFormAction = "https://docs.google.com/forms/d/e/1FAIpQLSc7pyOtgW3Mydydy408qglGP3pj-ehPkJCNwp9zwb4i5L3eSw/formResponse";

export default function ExperiencesPage() {
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "sent">("idle");
  const [purchaseMonth, setPurchaseMonth] = useState("");
  const [moneyLost, setMoneyLost] = useState("");

  return <>
    <main>
      <Header />
      <PageIntro kicker="DID OMI CHANGE THE DEAL ON YOU TOO?" title="Tell me what happened">
        <p>This short form is for Omi customers who saw one deal before buying and something different afterward. It should take about three minutes.</p>
      </PageIntro>
      <div className="page-body form-layout">
        <form
          className="experience-form"
          action={googleFormAction}
          method="POST"
          target="google-form-submit"
          onSubmit={() => setSubmitState("sending")}
        >
          <input type="hidden" name="fvv" value="1" />
          <input type="hidden" name="pageHistory" value="0" />
          <input type="hidden" name="submit" value="Submit" />

          <fieldset>
            <legend>1. Your purchase</legend>
            <div className="form-row">
              <label>Where did you live when you bought it?<input type="text" name="entry.54279433" required placeholder="State and country, e.g. Pennsylvania, USA" /></label>
              <label>When did you buy it?<input type="month" value={purchaseMonth} onChange={event => setPurchaseMonth(event.target.value)} required /></label>
              <input type="hidden" name="entry.619570125" value={purchaseMonth ? `${purchaseMonth}-01` : ""} />
            </div>
            <label>How did you get the hardware?
              <select name="entry.1877601895" required defaultValue="">
                <option value="" disabled>Select one</option>
                <option>I bought it directly from Omi</option>
                <option>I bought it from another seller</option>
                <option>It was a gift</option>
                <option>Something else</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>2. The deal you saw</legend>
            <p className="form-help">Check everything you personally remember seeing before the purchase.</p>
            <label className="check"><input type="checkbox" name="entry.2049776690" value="Unlimited for about $199 a year" /> Unlimited for about $199 a year</label>
            <label className="check"><input type="checkbox" name="entry.2049776690" value="1,200 free minutes each month" /> 1,200 free minutes each month</label>
            <label className="check"><input type="checkbox" name="entry.2049776690" value="A different price or number of free minutes" /> A different price or number of free minutes</label>
            <label className="check"><input type="checkbox" name="entry.2049776690" value="I do not remember" /> I do not remember</label>
            <label>Did that deal affect your decision to buy?
              <select name="entry.218214007" required defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Yes</option>
                <option>It was one reason</option>
                <option>No</option>
                <option value="I'm not sure">I am not sure</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>3. What changed</legend>
            <p className="form-help">Check everything that happened after you ordered or started using Omi.</p>
            <label className="check"><input type="checkbox" name="entry.1288574224" value="I was shown about $269.91 a year" /> I was shown about $269.91 a year</label>
            <label className="check"><input type="checkbox" name="entry.1288574224" value="The free plan dropped to 300 minutes" /> The free plan dropped to 300 minutes</label>
            <label className="check"><input type="checkbox" name="entry.1288574224" value="I saw another price or feature change" /> I saw another price or feature change</label>
            <label className="check"><input type="checkbox" name="entry.1288574224" value="I have not seen a change" /> I have not seen a change</label>
            <div className="form-row">
              <label>How did it end?
                <select name="entry.1501676109" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>I paid the higher price</option>
                  <option>I received a full refund</option>
                  <option>I received a partial refund</option>
                  <option>It is still unresolved</option>
                  <option>I did not lose money</option>
                  <option>Something else</option>
                </select>
              </label>
              <label>Money still lost, if any<input type="number" value={moneyLost} onChange={event => setMoneyLost(event.target.value)} min="0" step="0.01" inputMode="decimal" placeholder="e.g. 69.92 or 0" /></label>
              {Number(moneyLost) > 0 ? <input type="hidden" name="entry.1366267885" value={moneyLost} /> : null}
            </div>
          </fieldset>

          <fieldset>
            <legend>4. Your Omi history</legend>
            <label>How hard would it be to leave Omi now?
              <select name="entry.706878427" required defaultValue="">
                <option value="" disabled>Select one</option>
                <option>I have not started using it</option>
                <option>Easy, I have little or no history in Omi</option>
                <option>I would lose time and useful history</option>
                <option value="Hard I depend on my saved Omi history">Hard, I depend on my saved Omi history</option>
                <option>I am not sure</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>5. What records do you have?</legend>
            <label className="check"><input type="checkbox" name="entry.987889505" value="Order confirmation or receipt" /> Order confirmation or receipt</label>
            <label className="check"><input type="checkbox" name="entry.987889505" value="Pricing, Help Center, or app screenshot" /> Pricing, Help Center, or app screenshot</label>
            <label className="check"><input type="checkbox" name="entry.987889505" value="I attended the Friday, August 21 Discord community meeting and heard the pricing discussion" /> I attended the Friday, August 21 Discord community meeting and heard the pricing discussion</label>
            <label className="check"><input type="checkbox" name="entry.987889505" value="Email or chat with Omi" /> Email or chat with Omi</label>
            <label className="check"><input type="checkbox" name="entry.987889505" value="Payment or refund record" /> Payment or refund record</label>
            <label className="check"><input type="checkbox" name="entry.987889505" value="None of these" /> None of these</label>
          </fieldset>

          <label>Anything important I missed?<textarea name="entry.1144129560" rows={5} placeholder="A few sentences are enough. What did you see, what changed, and what did Omi tell you?" /></label>

          <fieldset>
            <legend>6. How to reach you</legend>
            <div className="form-row">
              <label>Name<input type="text" name="entry.2130220395" required autoComplete="name" /></label>
              <label>Email<input type="email" name="entry.408138251" required autoComplete="email" /></label>
            </div>
            <label className="check"><input type="checkbox" name="entry.203158980" value="You may contact me about this experience. I will keep my original records." required /> You may contact me about this experience. I will keep my original records.</label>
            <label className="check"><input type="checkbox" name="entry.203158980" value="This is my own experience and is accurate to the best of my knowledge." required /> This is my own experience and is accurate to the best of my knowledge.</label>
          </fieldset>

          <button type="submit" className="button primary" disabled={submitState !== "idle"}>
            {submitState === "idle" ? "Send my experience" : submitState === "sending" ? "Sending…" : "Response sent"}
          </button>
          <p className={`form-status ${submitState === "sent" ? "sent" : ""}`} aria-live="polite">
            {submitState === "sent" ? "Thank you. Your answers were sent privately for review." : "Your answers will go privately to the Google Form and Sheet connected by the site owner. You will stay on this page."}
          </p>
          <iframe
            className="form-submit-frame"
            name="google-form-submit"
            title="Google Form submission result"
            onLoad={() => { if (submitState === "sending") setSubmitState("sent"); }}
          />
        </form>

        <aside className="privacy-panel">
          <section>
            <span className="kicker">WHY THESE QUESTIONS?</span>
            <h2>A lawyer needs the pattern, not a novel.</h2>
            <p className="panel-lede">Short answers help show whether many customers had the same experience.</p>
            <ul className="panel-list">
              <li><strong>The purchase</strong><span>When and where people bought</span></li>
              <li><strong>The original deal</strong><span>What Omi showed people before they paid</span></li>
              <li><strong>The decision</strong><span>Whether that deal helped convince them to buy</span></li>
              <li><strong>The change</strong><span>What became different afterward</span></li>
              <li><strong>The harm</strong><span>Money lost or useful Omi history that makes leaving harder</span></li>
              <li><strong>The proof</strong><span>Receipts, screenshots, emails, and payment records</span></li>
            </ul>
            <p className="panel-note">This form helps compare experiences. Filling it out does not create a lawyer-client relationship.</p>
          </section>

          <section className="panel-divider">
            <span className="kicker">PROTECT YOUR PRIVACY</span>
            <h2>Keep your records. Do not upload them yet.</h2>
            <ul className="panel-list privacy-list">
              <li>Do not enter card or bank numbers</li>
              <li>Do not paste private conversations recorded by Omi</li>
              <li>Keep the original files in a safe place</li>
              <li>If records are needed, you will be asked for copies with private details covered or removed</li>
            </ul>
          </section>
        </aside>
      </div>
    </main>
    <Footer />
  </>;
}
