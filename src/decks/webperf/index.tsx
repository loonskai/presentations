import { useDeckRef } from "../../hooks/useDeckRef";
import Banners from "./Banners";
import BlurEffect from "./BlurEffect";
import images from "./images";
import { Quote } from "./Quote";
import { Video } from "./Video";
import videos from "./videos";

export function WebPerf() {
  const { deckDivRef } = useDeckRef();

  return (
    <div className="reveal-container">
      <div className="reveal" ref={deckDivRef}>
        <div className="slides">
          <section id="intro">
            <div>
              <div className="tw:flex! tw:flex-col! tw:items-center!">
                <BlurEffect
                  src={images.warsawJSImg}
                  alt="WarsawJS Logo"
                  className="tw:w-30 tw:h-auto tw:mx-auto tw:my-2"
                />
                <h1 className="tw:mb-1!">The Red Pill</h1>
                <h3 className="tw:mb-1!">of the</h3>
                <h1 className="tw:m-0">Web Application</h1>
                <h2 className="tw:m-0">performance</h2>
              </div>
              <div className="tw:flex tw:flex-col tw:items-center tw:mt-8 tw:text-center">
                <img
                  src={images.avatarImg}
                  alt="Siarhei Lunski"
                  className="tw:w-40 tw:h-40 tw:rounded-full tw:object-cover tw:shadow-lg tw:mb-4"
                />
                <h3>Siarhei Lunski</h3>
                <h4>Software Engineer @ Box</h4>
              </div>
            </div>
          </section>
          <section id="overview">
            <div className="container">
              <h1>Web Performance</h1>
              <div className="content">
                <img
                  src={images.whyWhatHow}
                  alt="Why, What, How"
                  className="screenshot max-h-[600px]!"
                />
              </div>
            </div>
            <aside className="notes">
              Performance is a vast topic that is highly intertwined with
              everything related to product engineering. 20 minutes is
              definitely not enough to explore even smaller parts of it. So
              today I'll try to skim over a so called, "golden circle" of "why",
              "what" and "how" to see, where we are at with the performance
              topic.
            </aside>
          </section>
          <section id="question-1-why">
            <div className="container">
              <h1>Question 1: Why?</h1>
              <div className="content">
                <img
                  src={images.matrixPill}
                  alt="Matrix Pill"
                  className="screenshot"
                />
              </div>
            </div>
            <aside className="notes">
              Without further due, let's take the red pill and start with "Why?"
            </aside>
          </section>
          <section id="psychological-impact">
            <Banners>
              <h1>Psychological Impact</h1>
              <img
                src={images.matrixRageClick}
                alt="Matrix Rage Click"
                className="screenshot"
              />
            </Banners>
            <aside className="notes">
              The psychological impact boils down to user experience. Because
              what is performance by definition? Cambridge dictionary defines
              performance as "how well a person, machine, etc. does a piece of
              work or an activity". TODO: Add screen for "performance"
              definition
              https://dictionary.cambridge.org/dictionary/english/performance
              And we all know that frustrution comes when we expect something to
              work well but later we face the reality. TODO: Add a screen from
              matrix, something funny. Rage clicks, frustration, cognitive
              overload. The more important and unique service - the more users
              are ready to wait TODO: Read a paper around waiting:
              https://www.columbia.edu/~ww2040/4615S13/Psychology_of_Waiting_Lines.pdf
              https://dl.acm.org/doi/pdf/10.1145/1476589.1476628 TODO: Read
            </aside>
          </section>
          <section id="business-impact">
            <h1>Business Impact</h1>
            <aside className="notes">
              Impacts revenue & conversions TODO: Add excerpts from the book
              "Time Is Money: The Business Value of Web Performance"
            </aside>
          </section>
          <section id="case-studies">
            <h1>Case Studies</h1>
            <img
              src={images.caseStudies}
              alt="Case Studies"
              className="screenshot"
            />
            <aside className="notes">
              In 2025 it's obvious that working on performance improvements.
              These example is a sample of efforts that eventually end up to be
              positive for business. And in general I believe there a strong
              correlation between how our applications perform and how much
              revenue do they generate. But would be great for us in seeing the
              splendor of ... is to not fall victim to the survivirship bias
              because it's hard find stories where companies spent a huge effort
              trying to optimise for performance but ended up realising that it
              doesn't bring any value.
            </aside>
          </section>
          <section id="survivorship-bias">
            <h1>Survivorship Bias?</h1>
            <img
              src={images.gitlabCriticalCssImg}
              alt="GitLab Critical CSS case"
              className="screenshot"
            />
            <aside className="notes">
              Here is just a single example of Gitlab, that spent around 2 years
              trying to improve First Contentful Paint for the first-time users
              by adding inline CSS. As any product aspect, similar to SEO,
              accesibility, performance improvements don't make much sence in
              separation from business. Again, I'm not about non-profit or
              personal project, or when we do this for learning purposes. So now
              you may ask yourselves: do we even need to spend the time and
              money trying to improve the performance? No. Unless you the
              relevant data.
              https://gitlab.com/gitlab-org/gitlab/-/merge_requests/124406
            </aside>
          </section>
          <section id="question-2-what">
            <h1>Question 2: What?</h1>
            <aside className="notes"></aside>
          </section>
          <section id="real-user-monitoring">
            <h1>Real User Monitoring</h1>
            <img
              src={images.matrixRUM}
              alt="Matrix RUM"
              className="screenshot"
            />
            <aside className="notes">
              TODO: Add about costs, vendors, noise. How your users experience
              your application
            </aside>
          </section>
          <section id="crux">
            <h1>CrUX</h1>
            <aside className="notes">
              Only Chrome Chrome devtools - compare local with p75 CrUX TODO:
              Add a screenshot. https://www.merriam-webster.com/dictionary/crux
              - in Latin this is a tortue instrument. Pretty descriptive
            </aside>
          </section>
          <section id="core-web-vitals">
            <h1>Core Web Vitals</h1>
            <table className="tw:table-auto tw:w-full">
              <thead>
                <tr>
                  <th className="tw:border-b">
                    <h3>Loading Speed</h3>
                  </th>
                  <th className="tw:border-b">
                    <h3>Interactivity</h3>
                  </th>
                  <th className="tw:border-b">
                    <h3>Stability</h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tw:p-4">
                    <h2>TTFB</h2>
                  </td>
                  <td className="tw:p-4">
                    <h2>INP</h2>
                  </td>
                  <td className="tw:p-4">
                    <h2>CLS</h2>
                  </td>
                </tr>
                <tr>
                  <td className="tw:p-4">
                    <h2>FCP</h2>
                  </td>
                  <td className="tw:p-4">
                    <h2>TBT</h2>
                  </td>
                  <td className="tw:p-4"></td>
                </tr>
                <tr>
                  <td className="tw:p-4">
                    <h2>LCP</h2>
                  </td>
                  <td className="tw:p-4"></td>
                  <td className="tw:p-4"></td>
                </tr>
              </tbody>
            </table>
            <aside className="notes">
              Existence of so many metrics highlights the common need* (read -
              Google) TODO: Add this quote but put google with * to the bottom
            </aside>
          </section>
          <section id="network-compute">
            <h1>Network & Compute</h1>
            <h2>Network vs Compute (c) Cost of Javascript Addy Osmani</h2>
            <aside className="notes"></aside>
          </section>
          <section id="network">
            <h1>Network</h1>
          </section>
          <section id="network-panel">
            <h1>Network Panel</h1>
            <aside className="notes">
              TODO: How to read "Timing" in request
              https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#timing-explanation
            </aside>
          </section>
          <section id="is-it-your-pain-only">
            <h1>Is it your pain only?</h1>
            <aside className="notes">
              Protecting the commons
              https://infrequently.org/2022/05/performance-management-maturity/#protecting-the-commons
            </aside>
          </section>
          <section id="inp">
            <h1>INP</h1>
            <aside className="notes">
              Often misinterpreted as "Interaction to next PAIN". TODO: Display
              with "t" being appended. Add gif from banners interactions. Which
              partially makes sence since high INP causes all sorts of the bad
              psychological effect, e.g., rage clicks. To describe INP we can
              say, that the web application is as slow as the slowest
              interaction which happens on it. It's calculated from 3 stages:{" "}
              <br />
              input delay: how much it takes from actual physical click to event
              handler. <br />
              processing time - how much your event listener function takes time{" "}
              <br />
              frame presented. <br />
            </aside>
          </section>
          <section id="inp-hover">
            <h1>INP 🙅 Hover</h1>
            <div className="flex justify-center h-full">
              <img
                src={images.hoverLessWrong}
                alt="Hover Lesswrong"
                className="screenshot scale-75"
              />
            </div>
            <aside className="notes">
              Hover interactions are not included in INP calculations, but many
              apps leverage hovers for some of their important user behavior.
            </aside>
          </section>
          <section id="inp-scroll">
            <h1>INP 🙅 Scroll</h1>
            <div className="flex justify-center h-full">
              <img
                src={images.scrollPinterest}
                alt="Scroll Pinterest"
                className="screenshot scale-75"
              />
            </div>
            <aside className="notes">
              And what's in my opinion even more important to - INP doesn't
              track scrolling, which means virtual lists, that became so
              pervasive pattern in the modern web, is out of the picture.
              Putting aside these details, this metric attracts the attention
              due to the nature of the modern apps. The data says, that 90% of
              the time on a page is spent after loading (link
              https://web.dev/articles/inp).
            </aside>
          </section>
          <section id="inp-scheduler-yield">
            <h1>INP: scheduler.yield()</h1>
            <aside className="notes">
              There is currently 1 solution to improve this metric for 99% of
              case - yield the main thread. Experimental API called
              scheduler.yield() aims to fix the issue of long tasks. If you're
              interested in more details go check out the wonderful article
              https://calendar.perfplanet.com/2024/breaking-up-with-long-tasks-or-how-i-learned-to-group-loops-and-wield-the-yield/
            </aside>
          </section>
          <section id="inp-loaf-api">
            <h1>INP: LoAF API</h1>
            <aside className="notes"></aside>
          </section>
          <section id="metrics-future">
            <h1>Metrics future</h1>
            <aside className="notes">
              One interesting metric which is currently being discussed in AI
              assistance and Vercel metric. While implementing custom metrics
              it's even more important to take the observer effect into
              consideration. https://github.com/bloomberg/container-timing
            </aside>
          </section>
          <section id="javascript-pain-points">
            <h1>Javascript Pain Points</h1>
            <img
              src={images.stateOfJsPainPointsImg}
              alt="State of JS Pain Points"
              className="screenshot"
            />
            <aside className="notes">
              But let's make a step back and see at Javascript performance. 1
              out of 4 respondents mentioned performance as one of the main pain
              points of the JS. But is Javascript itself slow or does this paint
              point come from the ecosystem around the language?
            </aside>
          </section>
          <section id="react-and-performance">
            <h1>React and Performance</h1>
            <img
              src={images.reactUseMemoText}
              alt="React useMemo Text"
              className="screenshot"
            />
            <aside className="notes">
              I want you to think a bit - does React solves the real issue? I'm
              still have a question - does React Compiler solve the right issue?
              From immutability, to implicit memoisation. This becomes complex.
              TODO: Add concern about where React goes. 2.5 years to release the
              new version (sarcasm alert).
              https://dev.to/matfrana/react-where-are-you-going-5284
            </aside>
          </section>
          <section id="react-vs-others">
            <h1>React vs. Others</h1>
            <aside className="notes">
              There are multiple attempts to solve performance issues. Qwik
              comes with an idea of resumability. If you have a big ping (slow
              connection) it's just unusable. Svelte comes with runes which is
              considered by many as a breakthrough in reactivity. TODO: Add more
              about it TODO: Add that idea of signals is good and such primitive
              implemented on the language level can drastictally simplify
              internal libraries and positively affect performance.
            </aside>
          </section>
          <section id="react-no-signals">
            <img
              src={images.reactNoSignals}
              alt="React No Signals"
              className="screenshot"
            />
            <aside className="notes">
              TODO: Add that we'll see how it will play out.
            </aside>
          </section>
          <section id="matrix-pill-reverse">
            <img
              src={images.matrixPillReverse}
              alt="Matrix Pill Reverse"
              className="screenshot"
            />
            <aside className="notes">
              I feel like the tone of the talk becomes somewhat pessimistic.
            </aside>
          </section>
          <section id="frameworks-performance">
            <h1>Frameworks performance</h1>
            <aside className="notes">
              However, we're making tradeoffs. If we pick vanila JS just because
              it's the fastest in benchmarks, will it be a vise choice beyond
              personal projects? I doubt it will. TODO: Add screenshot with
              benchmark
              https://krausest.github.io/js-framework-benchmark/2024/table_chrome_126.0.6478.55.html
            </aside>
          </section>
          <section id="languages-quote">
            <aside className="notes">
              In the end, let's remember what was said a long time ago: "There
              are only two kinds of languages: the ones people complain about
              and the ones nobody uses." TODO: Add a screen of quote
            </aside>
          </section>
          <section id="microoptimisations">
            <h1>Microoptimisations</h1>
            <aside className="notes">
              But frameworks and libraries choice isn't something we can do when
              we join a big tech company. Always it's already "too big to fail".
              But what we can control is the business logic code. It's the place
              that we need start measuring if we know it's time to get the
              responsibility. for vs forEach etc
              https://www.measurethat.net/Benchmarks/Show/18532/0/jsonstringify-jsonparse-vs-structuredclone#latest_results_block
            </aside>
          </section>
          <section id="how">
            <h1>How?</h1>
            <aside className="notes">FOMO</aside>
          </section>
          <section id="tools">
            <h1>Tools</h1>
            <p>Lighthouse, WebPageTest, RUM tools.</p>
            <aside className="notes">We've already mentioned RUM</aside>
          </section>
          <section id="chrome-devtools">
            <h1>Chrome DevTools</h1>
            <aside className="notes">
              Chrome DevTools are activelly developed. You can label your
              performance trace. Use a separate Chrome profile with no
              extensions. Your laptop is typically much faster than the median
              user's phone. If you run your test without throttling, you'll get
              numbers that are too good. What you can try is also to instruct
              LLM how to treat the specific trace.
              https://x.com/WebTwitr/status/1838571299381055752
            </aside>
          </section>
          <section id="quote-abraham-maslow">
            <Quote
              source="Abraham Maslow"
              quote="If the only tool you have is a hammer, to treat everything as if it
            were a nail"
            />
          </section>
          <section id="case-study-agentic-workflow">
            <h3>Case Study: Agentic Workflow</h3>
          </section>
          <section id="video-did-you-do-that">
            <Video url={videos.didYouDoThat} />
            <aside className="notes">
              But in the end you will come to your upper management to show them
              what you've been working on the last quarter.
            </aside>
          </section>
          <section id="qa">
            <h3>Q&A</h3>
            <p>Let's discuss!</p>
          </section>
        </div>
      </div>
    </div>
  );
}
