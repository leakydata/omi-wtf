import { Footer, Header, PageIntro } from "../site-shell";

const answers = [
  ["Your Omi keeps working", "The device you already bought connects to it. You do not need different hardware, and you do not need to give the device up."],
  ["The recordings land on your computer", "Audio, written versions, and the names of who spoke are files on a disk you own. Nothing is stored on someone else's server, so nobody can raise the price of getting to it."],
  ["Nothing renews", "There is no account and no plan. If you stop using it, nothing expires and nothing is taken away."],
  ["You can read the whole thing", "It is open source. Anyone can check what it does with the audio, which is a claim you can verify instead of a promise you have to accept."],
];

const costs = [
  ["It runs on a computer you leave on", "A desktop or a small always-on machine at home. Not a phone. A laptop that sleeps will miss recordings while it is asleep."],
  ["Transcribing needs a graphics card, or a paid key", "With an NVIDIA graphics card it keeps up easily. Without one it can send the audio to OpenAI or Deepgram instead, which costs money per hour of audio."],
  ["With neither, it falls behind", "On an ordinary processor it works out about two and a half times slower than the recordings arrive. That is fine for catching up overnight. It is not fine for wearing all day."],
  ["You set it up yourself", "There is no installer and no support desk. It is a project, not a product. If that sounds like a bad afternoon, this is not for you yet."],
];

export default function KeepYourOwnPage() {
  return <>
    <main>
      <Header />
      <PageIntro kicker="ONE WAY OUT" title="Keep your own recordings">
        <p>The problem on the rest of this site is that a company holds your history and can change what it charges for it. One answer is to hold the history yourself. Boswell is free software that records from your Omi onto your own computer, transcribes it, works out who was speaking, and lets you search all of it. This page is honest about what that costs you, because it is not free of effort.</p>
      </PageIntro>
      <div className="page-body">
        <section className="issue-list">
          {answers.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}
        </section>

        <section className="prose-grid">
          <div>
            <span className="kicker">WHAT IT ACTUALLY DOES</span>
            <h2>The same job, on your side of the wire.</h2>
            <p>It records continuously, writes down what was said, tells voices apart and remembers them, so a person you name once is recognised in later conversations. It groups clips into conversations, searches every line by word or by meaning, and can have a model read a conversation and write down the facts and tasks in it. That model can run on your computer too.</p>
            <a className="text-link" href="https://github.com/leakydata/boswell" target="_blank" rel="noreferrer">Read the code and the setup notes ↗</a>
          </div>
          <div>
            <span className="kicker">WHAT IT IS NOT</span>
            <h2>It is not a replacement product.</h2>
            <p>There is no phone app, no cloud account, and nobody to email when it breaks. It is software that a person wrote for their own recorder and then wrote down carefully enough that other people can run it. Judge it as that. If you want something that works the moment it arrives, this is not that.</p>
          </div>
        </section>

        <div className="section-heading section-space">
          <span className="kicker">WHAT IT COSTS YOU</span>
          <h2>None of this is free of effort.</h2>
          <p>Holding your own history means running the thing that holds it. Here is what that actually asks of you, so you can decide before you spend an evening on it rather than after.</p>
        </div>

        <section className="issue-list">
          {costs.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}
        </section>

        <aside className="editorial-note">
          <strong>Who wrote this</strong>
          <p>I did. The same person who kept the receipts on the rest of this site also wrote the software on this page, and you should know that before you weigh either one. It is not sold, there is nothing to buy, and I do not gain anything if you use it. I am naming it here because the rest of this site describes a problem and it would be strange to have an answer and not say so.</p>
        </aside>

        <section className="share-band inline-share">
          <span className="kicker">BEFORE YOU BUILD ANYTHING</span>
          <h2>Copy your history out first.</h2>
          <p>Whatever you decide to run later, ask Omi for a copy of your conversations now, while your plan is active. Leaving is easier when the record is already in your hands, and that is true even if you never install anything.</p>
          <a className="button light-button" href="/lock-in">Why leaving gets harder the longer you wait →</a>
        </section>
      </div>
    </main>
    <Footer />
  </>;
}
