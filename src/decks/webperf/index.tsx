import { useDeckRef } from "../../hooks/useDeckRef";
import Banners from "./Banners";
import BlurEffect from "./BlurEffect";
import images from "./images";

export function WebPerf() {
  const { deckDivRef } = useDeckRef();

  return (
    <div className="reveal-container">
      <div className="reveal" ref={deckDivRef}>
        <div className="slides font-opensans">
          <section id="intro" data-auto-animate>
            <div className="flex flex-col items-center text-center p-6 md:p-12 max-w-4xl mx-auto">
              <div className="font-montserrat flex flex-col items-center">
                <BlurEffect
                  src={images.warsawJSImg}
                  alt="WarsawJS Logo"
                  className="w-46 h-auto mx-auto my-4"
                />
                <h2 className="font-semibold text-5xl">The Red Pill</h2>
                <h3 className="text-2xl">of the</h3>
                <h1 className="font-semibold text-5xl">Web Application</h1>
                <h3 className="text-4xl">performance</h3>
              </div>
              <div className="flex flex-col items-center mt-8 text-center">
                <img
                  src={images.avatarImg}
                  alt="Siarhei Lunski"
                  className="w-20 h-20 rounded-full object-cover shadow-lg mb-4"
                />
                <h2 className="font-montserrat font-semibold text-2xl">
                  Siarhei Lunski
                </h2>
                <p className="font-montserrat text-lg text-gray-700">
                  Software Engineer @ Box
                </p>
              </div>
            </div>
          </section>

          <section id="overview" className="w-full h-full">
            <Banners>
              <h1>Web Performance</h1>
              <h2>Why?</h2>
              <h2>What?</h2>
              <h2>How?</h2>
            </Banners>
            <aside className="notes">Tell something about rage clicks</aside>
          </section>

          <section>
            <h1>RUM</h1>
            "Rum gets you through times of no money better than money gets you
            through times of no rum." ―Jack Sparrow
            <aside>How your users experience your application</aside>
          </section>

          <section>
            <h1>Why?</h1>
            <p>
              Business: Impacts revenue & conversions.
              <br />
              UX: A slow site feels broken.
              <br />• Engineering: Performance debt is technical debt.
            </p>
          </section>
          <section>
            <h3>Psychological Impact</h3>
            <p>Rage clicks, frustration, cognitive overload.</p>
            <p>Example: Multiple popups appearing on site load.</p>
            <aside className="note">
              Psychology of waiting - kolejki w Polsce How people are tolerant.
              TODO: Read a paper around waiting The more important and unique
              service - the more users are ready to wait
            </aside>
          </section>
          <section>
            <h1>Case scenarios</h1>
            <aside className="notes">
              We hear a lot about improved performance As any product apect,
              performance doesn't make sence in separation from business, unless
              it's your personal stuff and you're learning
            </aside>
          </section>
          <section>
            <h3>Survivorship Bias in Performance</h3>
            <p>Example: GitLab spent 2 years on inline styles → removed it.</p>
            <aside className="notes">
              https://gitlab.com/gitlab-org/gitlab/-/merge_requests/124406
            </aside>
          </section>

          <section>
            <h1>What?</h1>
            <h2>Network vs Compute (c) Cost of Javascript Addy Osmani</h2>
          </section>
          <section>
            <h1>Network</h1>
          </section>
          <section>
            <h1>Network Panel</h1>
            <aside className="notes">
              TODO: How to read "Timing" in request
              https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#timing-explanation
            </aside>
          </section>
          <section>
            <h1>Is it your pain only?</h1>
            <aside className="notes">
              Protecting the commons
              https://infrequently.org/2022/05/performance-management-maturity/#protecting-the-commons
            </aside>
          </section>
          <section>
            <h1>Compute</h1>
          </section>
          <section>
            <h1>Javascript Pain Points</h1>
            <img
              src={images.stateOfJsPainPointsImg}
              alt="State of JS Pain Points"
              className="w-full h-auto mt-4"
            />
            <aside className="notes">
              1 out of 4 respondents mentioned performance as one of the main
              pain points of the JS. But is Javascript itself slow or does this
              paint point come from the ecosystem around the language?
            </aside>
          </section>
          <section>
            <h1>React and Performance</h1>
            <aside>
              https://x.com/trashh_dev/status/1809966974052847726 Batching: 1.
              setState pushes into a queue 2. Is it batching? If not - process
              the queue 2.5 years to release the new version (sarcasm alert). Is
              it a problem to solve? I'm still have a question - does React
              Compiler solve the right issue? From immutability, to implicit
              memoisation. This becomes complex.
              https://x.com/acdlite/status/1626590880126889984?t=I2e1Uxtt6tZXuNzvrJS-fQ&s=19
            </aside>
          </section>
          <section>
            <h1>Frameworks performance</h1>
            <aside>
              TODO: Brief overview of runes in Svelte Qwik with its
              resumability? If you have a big ping (slow connection) it's just
              unusable.
              https://krausest.github.io/js-framework-benchmark/2024/table_chrome_126.0.6478.55.html
            </aside>
          </section>
          <section>
            <h1>Microoptimisations</h1>
            <aside className="notes">
              But frameworks and libraries aren't always the thing we can
              control after we make a choice and later the choice becomes "Too
              big to fail". But what we can control is the business logic code.
              for vs forEach etc
              https://www.measurethat.net/Benchmarks/Show/18532/0/jsonstringify-jsonparse-vs-structuredclone#latest_results_block
            </aside>
          </section>
          <section>
            <h1>INP</h1>
            <aside className="notes">
              How quickly users can interact. The trickies and the less
              understood metric. 3 stages: input delay - processing time - frame
              presented. There is 1 solution to fix it 99% of time - yield the
              main thread. What is "Yield"? setTimeout, requestAnimationFrame -
              just before the next paint.
              https://vercel.com/blog/demystifying-inp-new-tools-and-actionable-insights
            </aside>
          </section>
          <section>
            <h3>RUM</h3>
            <aside className="notes">
              "But why RUM has gone?" Real User Monitoring is costly; lab data
              lacks real-world context.
            </aside>
          </section>
          <section>
            <h1>CrUX</h1>
            <aside className="notes">
              Only Chrome Chrome devtools - compare local with p75 CrUX
              https://www.merriam-webster.com/dictionary/crux - in Latin this is
              a tortue instrument. Pretty descriptive
            </aside>
          </section>
          <section>
            <h1>Metrics: Core Web Vitals</h1>
            <p>First Contentful Paint</p>
            <p>Largest Contentful Paint</p>
            <p>Cummulative Layout Shift</p>
            <aside className="notes">
              There are plenty of materials and case studies on how to improve
              these metrics so we want go into this path. Instead we'll try to
              decide how important these metrics are and for whom (Google?) If
              we take our 2 buckets: network and compute, these metrics will
              land this way TODO: Add Vien diagram
            </aside>
          </section>
          <section>
            <h1>Core Web Vitals</h1>
            <p>Interaction to next pain</p>
            <p>Cummulative Layout "Oh Sh*t"</p>
          </section>
          <section>
            <h1>Custom metrics</h1>
            <aside className="notes">AI assistance and Vercel metric.</aside>
          </section>

          <section>
            <h1>How?</h1>
            <aside className="notes">FOMO</aside>
          </section>
          <section>
            <h1>Tools</h1>
            <img src="./" alt="" />
            <h3>Tools for Performance Analysis</h3>
            <p>Lighthouse, WebPageTest, RUM tools.</p>
            <aside className="notes">
              Use a separate Chrome profile with no extensions Your laptop is
              typically much faster than the median user’s phone. If you run
              your test without throttling, you’ll get numbers that are too
              good.
            </aside>
          </section>
          <section>
            <h1>Chrome DevTools Performance</h1>
            <aside className="notes">
              You can label your performance trace. What you can try is also to
              instruct LLM how to treat the specific trace
              https://x.com/WebTwitr/status/1838571299381055752
            </aside>
          </section>

          <section>
            <h3>Case Study: Agentic Workflow</h3>
            <p>
              If the only tool you have is a hammer, to treat everything as if
              it were a nail (c) Abraham Maslow
              <br /> Automating performance investigations using AI & structured
              data.
            </p>
          </section>

          <section>
            <h3>Conclusion</h3>
            <p>
              Performance isn't just about speed - it's about experience,
              business, and maintainability.
            </p>
          </section>

          <section>
            <h3>Q&A</h3>
            <p>Let's discuss!</p>
          </section>
          <section data-auto-animate>
            <div>Sources: https://codepen.io/joshbader/pen/gONVYvN</div>
          </section>
        </div>
      </div>
    </div>
  );
}
