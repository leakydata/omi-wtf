import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../out/", import.meta.url);
const routes = ["", "timeline", "pricing", "evidence", "correspondence", "omi-position", "experiences", "resources", "legal", "about"];

test("exports every public route", async () => {
  await Promise.all(routes.map(route => access(new URL(`${route ? `${route}/` : ""}index.html`, root))));
});

test("exports crawl and domain assets", async () => {
  await Promise.all(["robots.txt", "sitemap.xml", "CNAME", ".nojekyll", "og.png", "brand/omi-wtf-logo.png", "brand/favicon.ico", "brand/apple-touch-icon.png"].map(file => access(new URL(file, root))));
});

test("home page contains the core record and no starter metadata", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  assert.match(html, /Omi advertised/);
  assert.match(html, /\$269\.91/);
  assert.match(html, /A customer runs this site\. Omi does not\./);
  assert.match(html, /OMI\.WTF/);
  assert.match(html, /https:\/\/omi\.wtf\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|Starter Project|Your site is taking shape/);
});
