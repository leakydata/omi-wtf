import { Footer, Header, PageIntro } from "../site-shell";

const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc7pyOtgW3Mydydy408qglGP3pj-ehPkJCNwp9zwb4i5L3eSw/viewform?embedded=true";

export default function ExperiencesPage() {
  return <>
    <main>
      <Header />
      <PageIntro kicker="DID OMI CHANGE THE DEAL ON YOU TOO?" title="Tell me what happened">
        <p>This short form is for Omi customers who saw one deal before buying and something different afterward. It should take about three minutes.</p>
      </PageIntro>
      <div className="page-body form-layout">
        <section className="form-embed" aria-labelledby="live-form-heading">
          <div className="form-live-note">
            <strong id="live-form-heading">The intake form is live.</strong>
            <p>Your answers go into a private Google Form for review. Nothing will be published without your permission.</p>
          </div>
          <iframe
            className="google-form-frame"
            src={googleFormUrl}
            title="Omi customer experience form"
            loading="eager"
          >
            Loading the customer intake form…
          </iframe>
          <p className="form-fallback">If the form does not load, <a href={googleFormUrl.replace("?embedded=true", "?usp=publish-editor")} target="_blank" rel="noreferrer">open it in a new tab ↗</a></p>
        </section>

        <aside className="privacy-panel">
          <span className="kicker">WHY THESE QUESTIONS?</span>
          <h2>A lawyer needs the pattern, not a novel.</h2>
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
          <p>This form helps compare experiences. Filling it out does not make any lawyer your lawyer.</p>

          <span className="kicker panel-divider">KEEP PRIVATE DETAILS OUT</span>
          <h2>Do not send sensitive records yet.</h2>
          <ul>
            <li>Do not enter card or bank numbers.</li>
            <li>Do not paste private conversations recorded by Omi.</li>
            <li>Keep the original files in a safe place.</li>
            <li>If I need records, I will ask for copies with private details covered or removed.</li>
          </ul>
        </aside>
      </div>
    </main>
    <Footer />
  </>;
}
