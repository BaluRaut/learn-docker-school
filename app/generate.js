// "Build step" for the multi-stage lesson (07): generates a static page.
// In real projects this is `npm run build`, `go build`, webpack, etc. —
// tools you need in the KITCHEN but never in the lunchbox.
const built = new Date().toISOString();
console.log(`<!doctype html>
<h1>🍱 hello-school — static edition</h1>
<p>Built at ${built} inside the BUILDER stage.</p>
<p>This page is served by nginx; node never made it into the final image.</p>`);
