import { WebView } from "https://deno.land/x/webview/mod.ts";

console.log("STARTING");
// figure out how to get react here( preact?)
const html = Deno.readTextFile("./index.html");
const one = new WebView({
  title: "Deno OS",
  url: `data:text/html,${encodeURIComponent(await html)}`,
  height: 600,
  resizable: true,
  debug: true,
  frameless: false,
});

one.run();
