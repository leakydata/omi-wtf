import { Footer, Header, PageIntro } from "../site-shell";

const risks = [
  ["Buying the device is only the start", "You pay for the device once. You may still need a plan whose price and features can change when it is time to renew."],
  ["Your saved history makes leaving harder", "Omi says it keeps your conversations, written versions of recordings, summaries, tasks, and memories online. It uses that history to answer questions about your past. After months of fixing and organizing it, starting over somewhere else may be hard."],
  ["Omi says it can change the price later", "Omi’s current sales rules say it may change plan prices, features, or length in the future. If you do not agree, Omi says you must cancel before your plan renews."],
  ["You can cancel, but leaving still has a cost", "Omi says you can delete your data and ask support for a copy. That helps, but the copy cannot give back the time you spent building your searchable history. It may not work the same way in another product."],
];

export default function LockInPage() {
  return <>
    <main>
      <Header />
      <PageIntro kicker="THE PRICE IS NOT THE WHOLE COST" title="Your saved history gives Omi power">
        <p>You can replace a recorder. It is much harder to replace months or years of saved conversations, tasks, and memories. The company holding that history has more power to raise the price.</p>
      </PageIntro>
      <div className="page-body">
        <section className="issue-list">
          {risks.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}
        </section>

        <section className="prose-grid">
          <div>
            <span className="kicker">OMI’S OWN RULES</span>
            <h2>Today’s price can go higher.</h2>
            <p>Omi’s sales rules say: “We may change Subscription pricing, features, or term lengths prospectively.” In plain English, Omi says it can change the price, features, or plan length in the future. If you do not agree, it says you must cancel before your plan ends.</p>
            <a className="text-link" href="https://www.omi.me/pages/terms-of-service" target="_blank" rel="noreferrer">Read Omi’s sales rules ↗</a>
          </div>
          <div>
            <span className="kicker">WHAT BUILDS UP OVER TIME</span>
            <h2>This plan holds part of your life.</h2>
            <p>Omi says it turns recordings into written conversations, memories, and tasks. You can then ask questions about that history. The more useful it becomes, the harder it may be to leave after a price increase.</p>
            <a className="text-link" href="https://help.omi.me/en/articles/13153612-conversations-memories-and-chats" target="_blank" rel="noreferrer">Read how Omi saves memories ↗</a><br />
            <a className="text-link" href="https://help.omi.me/en/articles/13162549-omi-privacy-policy" target="_blank" rel="noreferrer">Read how to copy or delete your data ↗</a>
          </div>
        </section>

        <aside className="editorial-note lockin-discord">
          <strong>What I remember from Discord</strong>
          <p>On Friday, August 21, I challenged the price increase in Omi’s Discord. I remember Nik Shevchenko saying the new price was still lower than he wanted. I also remember him mentioning a price near $40 a month, or about $480 a year. I did not hear him mention customer surveys, customer income, or any other study behind that number. To me, it sounded like one leader naming the price he wanted. I do not have a screenshot yet, so this is not a confirmed quote. I list it as OMI-DISCORD-001 until I can save a copy.</p>
        </aside>

        <section className="share-band inline-share">
          <span className="kicker">THE QUESTION FOR EVERY OMI OWNER</span>
          <h2>How much would it cost you to leave?</h2>
          <p>Count the device, the plan, and the hours spent building a record of your life. If a company can change the price after all of that, “just cancel” is not much of an answer.</p>
          <a className="button light-button" href="/experiences">Tell me how much history you have in Omi →</a>
        </section>
      </div>
    </main>
    <Footer />
  </>;
}
