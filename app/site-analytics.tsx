"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const measurementId = "G-7CTGS3QCJS";
const consentKey = "omi-wtf-analytics-consent";

type Consent = "loading" | "pending" | "accepted" | "declined";

export default function SiteAnalytics() {
  const [consent, setConsent] = useState<Consent>("loading");

  useEffect(() => {
    const saved = window.localStorage.getItem(consentKey);
    setConsent(saved === "accepted" || saved === "declined" ? saved : "pending");
  }, []);

  function choose(next: "accepted" | "declined") {
    window.localStorage.setItem(consentKey, next);
    setConsent(next);
  }

  return <>
    {consent === "accepted" ? <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}', { anonymize_ip: true });
      `}</Script>
    </> : null}

    {consent === "pending" ? <aside className="analytics-consent" role="dialog" aria-label="Website statistics choice">
      <div>
        <strong>Can I count your visit?</strong>
        <p>Google Analytics can show which pages people use. It will load only if you allow it.</p>
      </div>
      <div className="analytics-consent-actions">
        <button type="button" onClick={() => choose("accepted")}>Allow statistics</button>
        <button type="button" className="decline" onClick={() => choose("declined")}>No thanks</button>
      </div>
    </aside> : null}
  </>;
}
