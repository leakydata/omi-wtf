import { Footer, Header, PageIntro } from "../site-shell";

const risks = [
  ["The hardware is only the entry ticket", "A customer can pay for the device once and still depend on a subscription whose price and features can change at renewal. The ongoing leverage sits in the service, not the plastic."],
  ["Your archive gets harder to leave behind", "Omi says it stores conversations, transcripts, summaries, tasks, and extracted memories in its cloud. It uses that history to answer questions about your past. Months of organizing and correcting that record create a real switching cost."],
  ["Omi reserves the right to move the price", "Omi’s current Terms of Sale say it may change subscription pricing, features, or term lengths prospectively. The stated choice for a customer who objects is to cancel before renewal."],
  ["Canceling is possible. Walking away still costs something", "Omi says users can delete their data and request a full export through support. That matters. An export still does not recreate the time spent building a searchable memory system or make another product understand it the same way."],
];

export default function LockInPage() {
  return <>
    <main>
      <Header />
      <PageIntro kicker="THE PRICE IS NOT THE WHOLE COST" title="Your memories become leverage">
        <p>A recorder can be replaced. A personal archive built from months or years of conversations, summaries, tasks, and memories is much harder to abandon. That gives whoever controls the subscription a dangerous amount of pricing power.</p>
      </PageIntro>
      <div className="page-body">
        <section className="issue-list">
          {risks.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}
        </section>

        <section className="prose-grid">
          <div>
            <span className="kicker">OMI’S OWN TERMS</span>
            <h2>Today’s price is not a ceiling.</h2>
            <p>Omi’s Terms of Sale say: “We may change Subscription pricing, features, or term lengths prospectively.” They also say customers who reject a change must cancel before the current term ends.</p>
            <a className="text-link" href="https://www.omi.me/pages/terms-of-service" target="_blank" rel="noreferrer">Read Omi’s Terms of Sale ↗</a>
          </div>
          <div>
            <span className="kicker">WHAT BUILDS UP OVER TIME</span>
            <h2>This is not an ordinary subscription.</h2>
            <p>Omi describes a system that turns raw audio into conversations, extracts memories and tasks, and lets people chat with that history. The more useful it becomes, the more painful it may be to leave after a price increase.</p>
            <a className="text-link" href="https://help.omi.me/en/articles/13153612-conversations-memories-and-chats" target="_blank" rel="noreferrer">Read Omi’s memory documentation ↗</a><br />
            <a className="text-link" href="https://help.omi.me/en/articles/13162549-omi-privacy-policy" target="_blank" rel="noreferrer">Read Omi’s export and deletion information ↗</a>
          </div>
        </section>

        <aside className="editorial-note lockin-discord">
          <strong>The Discord warning, currently a first-person account</strong>
          <p>On Friday, August 21, I challenged the price increase in Omi’s Discord. I recall Nik Shevchenko responding that even the new price was lower than he wanted and mentioning a possible price around $40 per month, which would be roughly $480 per year. I did not hear any reference to market research, customer incomes, or a formal pricing process. To me, it sounded less like research and more like one executive’s appetite. I do not yet have the Discord screenshot in the public archive, so I am not presenting any of this as a verified quotation. The account is listed as OMI-DISCORD-001 until a source copy is preserved.</p>
        </aside>

        <section className="share-band inline-share">
          <span className="kicker">THE QUESTION FOR EVERY OMI OWNER</span>
          <h2>How much would it cost you to leave?</h2>
          <p>Count the hardware, the subscription, and the hours spent building a record of your life. If a company can change the price after all of that, “just cancel” is not much of an answer.</p>
          <a className="button light-button" href="/experiences">Tell me how much history you have in Omi →</a>
        </section>
      </div>
    </main>
    <Footer />
  </>;
}
