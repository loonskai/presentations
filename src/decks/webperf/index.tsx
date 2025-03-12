import { useDeckRef } from "../../hooks/useDeckRef";
import Banners from "./Banners";
import BlurEffect from "./BlurEffect";
import { CWVTable } from "./CWVTable";
import images from "./images";
import { QR } from "./QR";
import { Quote } from "./Quote";
import { Video } from "./Video";
import videos from "./videos";

export function WebPerf() {
  const { deckDivRef } = useDeckRef({
    transition: "slide",
    controls: false,
    autoAnimateEasing: "ease-out",
    autoAnimateDuration: 1.5,
    autoAnimateUnmatched: true,
    hash: true,
    touch: true,
    slideNumber: true,
  });

  return (
    <div className="reveal-container">
      <div
        className="reveal tw:bg-[linear-gradient(333deg,#ffe9d0_0%,#fff9f4_43%,rgb(255,255,255)_100%)]"
        ref={deckDivRef}
      >
        <div className="slides">
          <section id="intro">
            <div className="container tw:flex-row!">
              <div className="tw:flex tw:flex-col tw:items-center tw:flex-1">
                <BlurEffect
                  src={images.warsawJSImg}
                  alt="WarsawJS Logo"
                  className="tw:w-30 tw:h-auto tw:mx-auto"
                />
                <h4 className="">The Red Pill of the Web Application</h4>
                <h1 className="">Performance</h1>
              </div>
              <div className="tw:flex tw:flex-1 tw:flex-col tw:items-center tw:text-center">
                <img
                  src={images.avatarImg}
                  alt="Siarhei Lunski"
                  className="tw:w-40 tw:h-40 tw:rounded-full tw:object-cover tw:shadow-lg tw:mb-4"
                />
                <h1>Siarhei Lunski</h1>
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
              <ul>
                <li>
                  Performance is a big topic that is highly intertwined with
                  everything related to product engineering.
                </li>
                <li>
                  20 minutes is definitely not enough to explore even small
                  parts of it.
                </li>
                <li>
                  Today I'll skim over the "golden circle" of "why" performance
                  matters, "what" data matters and "how" to deal with all of
                  this.
                </li>
              </ul>
            </aside>
          </section>
          <section id="matrix-pill">
            <div className="container">
              <h1>Performance Review</h1>
              <h3>* no, the other one</h3>
              <img
                src={images.matrixPill}
                alt="Matrix Pill"
                className="screenshot"
              />
            </div>
            <aside className="notes">
              <ul>
                <li>It will be some kind of performance review</li>
                <li>
                  But not the one you're anxiously waiting for every year.
                </li>
                <li>So relax, take a red pill and let's see what we have.</li>
              </ul>
            </aside>
          </section>
          <section id="question-1-why">
            <div className="container tw:mt-0! tw:flex tw:flex-col tw:items-center tw:justify-center tw:h-full">
              <h3>Question 1</h3>
              <h1 className="tw:font-bold! tw:text-8xl!">Why?</h1>
            </div>
            <aside className="notes">
              <ul>
                <li>We'll start with "why" anyone should bother.</li>
                <li>
                  Next I want to remind you how the modern web looks like today.
                </li>
              </ul>
            </aside>
          </section>
          <section id="psychological-impact">
            <Banners>
              <div className="container">
                <h1>Psychological Impact</h1>
                <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                  <img
                    src={images.matrixRageClick}
                    alt="Matrix Rage Click"
                    className="screenshot"
                  />
                </div>
                <QR value="https://www.lukew.com/ff/entry.asp?1963" />
              </div>
            </Banners>
            <aside className="notes">
              <ul>
                <li>
                  You witnessed the psychological impact of bad UX. Performance
                  is a big part of it.
                </li>
                <li>What is performance in general?</li>
                <li>
                  It is "how well a person or machine does a piece of work or an
                  activity".
                </li>
                <li>
                  People don't like waiting. Neither in real life nor online .
                </li>
                <li>But waiting can also be different.</li>
                <li>
                  When we submit a request, we expect at least an instant
                  acknowledgment. Unexplained waits are more frustrating than
                  explained ones.
                </li>
                <li>
                  People are ready to tolerate longer for high-value services,
                  like medical or bank apps.
                </li>
                <li>
                  I didn't close the tab with all these banners because it was
                  important to me to open this slide right know.
                </li>
                <li>Expectations to the web pages speed grow.</li>
              </ul>
            </aside>
          </section>
          <section id="unused-javascript">
            <div className="container">
              <h1>Unused JavaScript</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.unusedJs}
                  alt="Unused JavaScript"
                  className="screenshot tw:h-[400px]"
                />
              </div>
              <QR value="https://almanac.httparchive.org/en/2024/javascript#how-much-javascript-do-we-load" />
            </div>
            <aside className="notes">
              <ul>
                <li>
                  Unfortunately, the amount of Javascript, particularly unused
                  Javascript, grows as well.
                </li>
              </ul>
            </aside>
          </section>
          <section id="business-impact">
            <div className="container">
              <h1>Business Impact</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.speedToConversion}
                  alt="Speed to Conversion"
                  className="screenshot tw:bg-white tw:p-4 tw:h-2/3"
                />
              </div>
              <QR value="https://www.cloudflare.com/learning/performance/more/website-performance-conversion-rates/" />
            </div>
            <aside className="notes">
              <ul>
                <li>
                  There are multiple studies how performance affects bussiness.
                </li>
                <li>Page views, bounce rate, conversion rate.</li>
              </ul>
            </aside>
          </section>
          <section id="case-studies">
            <div className="container">
              <h1>Case Studies</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.caseStudies}
                  alt="Case Studies"
                  className="screenshot tw:h-[400px]"
                />
              </div>
              <QR value="https://web.dev/case-studies" />
            </div>
            <aside className="notes">
              <ul>
                <li>
                  There are many case studies of how performance improvements
                  helped businesses.
                </li>
                <li>
                  However - this is a sample of efforts that were successful.
                </li>
                <li>
                  No question - these are well planned and well executed
                  initiatives inside the companies.
                </li>
                <li>
                  However it's easy to fall victim to the survivorship bias.
                </li>
                <li>
                  It's hard to find the case studies where companies tried to
                  improve performance but ended up realising that it didn't
                  bring any value.
                </li>
              </ul>
            </aside>
          </section>
          <section id="survivorship-bias">
            <div className="container">
              <h1>Survivorship Bias?</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.gitlabCriticalCssImg}
                  alt="GitLab Critical CSS case"
                  className="screenshot tw:h-[400px]"
                />
              </div>
              <QR value="https://gitlab.com/gitlab-org/gitlab/-/merge_requests/124406" />
            </div>
            <aside className="notes">
              <ul>
                <li>Example from Gitlab I found because it's open-source</li>
                <li>
                  They spent around 2 years trying to improve First Contentful
                  Paint for the first-time users by adding inline CSS.
                </li>
                <li>
                  In the end they removed around 10 thousands lines of code that
                  introduced this optimization because there was no positive
                  effect.
                </li>
              </ul>
            </aside>
          </section>
          <section id="matrix-pill-reverse">
            <div className="container">
              <h1>Is it worth it?</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.matrixPillReverse}
                  alt="Matrix Pill"
                  className="screenshot"
                />
              </div>
            </div>
            <aside className="notes">
              <li>Is trying even worth it?</li>
              <li>
                As any product aspect, like UX or A11Y, performance improvements
                don't make much sence in separation from the business.
              </li>
              <li>
                I'm not talking about personal projects where try things to
                learn something new. I'm talking about real world products and
                users.
              </li>
              <li>
                Engineers and business need to collaborate by asking: do we need
                to spend the time and money trying to improve the performance?
              </li>
            </aside>
          </section>
          <section id="no">
            <div className="container">
              <div className="container tw:mt-0! tw:flex tw:flex-col tw:items-center tw:justify-center tw:h-full">
                <h1 className="tw:font-bold! tw:text-8xl!">No.</h1>
                <h3>Unless you have data.</h3>
              </div>
            </div>
            <aside className="notes">
              <ul>
                <li>My answer is - No. Unless you have the relevant data.</li>
              </ul>
            </aside>
          </section>
          <section id="question-2-what">
            <div className="container tw:mt-0! tw:flex tw:flex-col tw:items-center tw:justify-center tw:h-full">
              <h3>Question 2</h3>
              <h1 className="tw:font-bold! tw:text-8xl!">What?</h1>
            </div>
            <aside className="notes">
              <ul>
                <li>Here comes the 2nd question - "what" data do we need?</li>
              </ul>
            </aside>
          </section>
          <section id="field-vs-lab">
            <div className="container">
              <h1>Field vs Lab</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <div className="container tw:mt-0! tw:flex tw:flex-col tw:items-center tw:justify-center tw:h-full">
                  <h3>Lab Data is</h3>
                  <h1 className="tw:font-bold! tw:text-8xl! tw:mb-8!">
                    diagnostic
                  </h1>
                  <h3>Field Data is</h3>
                  <h1 className="tw:font-bold! tw:text-8xl!">experience</h1>
                </div>
              </div>
              <QR value="https://frontendmasters.com/courses/web-perf-v2/" />
            </div>
            <aside className="notes">
              <ul>
                <li>
                  Performance data consists of 2 categories: field and lab data.
                </li>
                <li>
                  I like this explanation of the difference between them: lab
                  data is diagnostic, field data is experience.
                </li>
              </ul>
            </aside>
          </section>
          <section id="lighthouse">
            <div className="container">
              <h1>Lab: Lighthouse</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.lighthouse}
                  alt="Lighthouse"
                  className="screenshot tw:h-[300px]"
                />
              </div>
              <QR value="https://web.dev/articles/vitals-tools#when_not_to_use_lighthouse" />
            </div>
            <aside className="notes">
              <ul>
                <li>The lab data - Lighthouse.</li>
                <li>Should be used only during development or in CI</li>
                <li>
                  To run some sanity check on application performance state
                  before it gets to your users.
                </li>
                <li>
                  Since it's not based on real user experience, the value of the
                  green Lighthouse for business is close to zero.
                </li>
              </ul>
            </aside>
          </section>
          <section id="rum">
            <div className="container">
              <h1>
                Field: <b className="tw:font-extrabold">R</b>
                <span className="tw:font-light">eal</span>{" "}
                <b className="tw:font-extrabold">U</b>
                <span className="tw:font-light">ser</span>{" "}
                <b className="tw:font-extrabold">M</b>
                <span className="tw:font-light">onitoring</span>
              </h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.matrixRUM}
                  alt="Matrix RUM"
                  className="screenshot"
                />
              </div>
              <QR value="https://www.youtube.com/watch?v=_z5DOOq5Qlw" />
            </div>
            <aside className="notes">
              <ul>
                <li>
                  RUM gives you the data about your users' environments, how
                  they navigate your app, how performance changes over time in
                  real time.
                </li>
                <li>
                  If you have big traffic there is a big cost as well, so
                  sampling can reduce the cost.
                </li>
                <li>There is a lot of data there is also a lot of noise.</li>
                <li>
                  There are many solutions on the market of different cost and
                  functionalities.
                </li>
                <li>
                  If you don't have ANY data, you should start with collecting
                  the field data using RUM.
                </li>
                <li>
                  RUM is not API or data, it is a process of collecting field
                  data.
                </li>
              </ul>
            </aside>
          </section>
          <section id="how">
            <div className="container tw:mt-0! tw:flex tw:flex-col tw:items-center tw:justify-center tw:h-full">
              <h3>Question 3</h3>
              <h1 className="tw:font-bold! tw:text-8xl!">How?</h1>
            </div>
            <aside className="notes">
              <ul>
                <li>
                  We move to the 3rd question - how to collect the field data?
                </li>
              </ul>
            </aside>
          </section>
          <section id="core-web-vitals">
            <div className="container">
              <h1>Web Vitals</h1>
              <h4>what everyone* needs to be successful</h4>
              <div className="tw:h-full tw:w-full tw:mt-4">
                <CWVTable />
              </div>
              <h4>*Google</h4>
            </div>
            <aside className="notes">
              <ul>
                <li>The industry standard - Web Vitals</li>
                <li>
                  3 of them are called "Core Web Vitals". These metrics are
                  evolving with the time.
                </li>
                <li>
                  To not get lost with them: split into 3 categories: loading
                  speed (network time), interactivity (compute time) and
                  stability.
                </li>
              </ul>
            </aside>
          </section>
          <section id="network">
            <div className="container">
              <h1>Network</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.navigationTiming}
                  alt="Navigation Timing"
                  className="screenshot tw:bg-white tw:p-4 tw:h-[400px]"
                />
              </div>
              <QR value="http://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Navigation_timing/" />
            </div>
            <aside className="notes">
              <ul>
                <li>
                  Network performance isn't something frontend-focused teams can
                  control in a full manner.
                </li>
                <li>
                  What they can do - is to make sure that the bundle size
                  doesn't blow up.
                </li>
              </ul>
            </aside>
          </section>
          <section id="bundlesize-optimization">
            <div className="container">
              <h1>Bundle Size Optimization</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.agentsBundlesize}
                  alt="Fighting bundle size"
                  className="screenshot"
                />
              </div>
            </div>
            <aside className="notes">
              <ul>
                <li>
                  But you know this feeling, when you're:
                  <ul>
                    <li>trying to wipe out all package duplicates</li>
                    <li>spending days on bundlephobia</li>
                    <li>putting bundlesize gates everywhere around</li>
                  </ul>
                </li>
                <li>
                  But then realise that your devops team forgot to enable gzip
                  compression.
                </li>
                <li>
                  So remember: performance, like security, privacy or UX, is an
                  aggregate result and it must be managed as a commons.
                </li>
                <li>For a moment let's take a look at one metric: INP</li>
              </ul>
            </aside>
          </section>
          <section id="inp">
            <div className="container">
              <div className="tw:text-left tw:flex tw:flex-col tw:justify-center tw:h-full tw:gap-4">
                <h1 className="tw:font-extrabold!">Interaction to</h1>
                <h1 className="tw:font-extrabold!">Next</h1>
                <h1 className="tw:font-extrabold!">
                  Pain
                  <span className="tw:font-extralight! tw:opacity-40">t</span>
                </h1>
              </div>
            </div>
            <aside className="notes">
              <ul>
                <li>Often misinterpreted as "Interaction to next PAIN".</li>
                <li>
                  Makes sence: dropped frames and clunky interaction behavior
                  causes all sorts of the bad psychological effect we've
                  mentioned before
                </li>
                <li>
                  INP is basically calculated based on the slowest interaction
                  on the page. It's not an average value.
                </li>
                <li>
                  Interaction is something highly complex and unpredictable.
                </li>
                <li>
                  We can't rely on INP for all interactions that happen on the
                  page.
                </li>
              </ul>
            </aside>
          </section>
          <section id="inp-hover">
            <div className="container">
              <h1>INP 🙅 Hover</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.hoverLessWrong}
                  alt="Hover Lesswrong"
                  className="screenshot"
                />
              </div>
            </div>
            <aside className="notes">
              <ul>
                <li>Hover interactions are not included in INP calculations</li>
                <li>
                  Many apps use hovers in some of their important user
                  scenarios, like displaying some extra details or previews.
                </li>
              </ul>
            </aside>
          </section>
          <section id="inp-scroll">
            <div className="container">
              <h1>INP 🙅 Scroll</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.scrollPinterest}
                  alt="Scroll Pinterest"
                  className="screenshot"
                />
              </div>
            </div>
            <aside className="notes">
              <ul>
                <li>Scrolling is not included in INP calculations</li>
                <li>
                  Which means virtual lists, that became so pervasive pattern in
                  the modern web, is out of the picture.
                </li>
                <li>
                  INP is just one of the metrics and it's already many details
                  in how it works.
                </li>
              </ul>
            </aside>
          </section>
          <section id="inp-scheduler-yield" data-visibility="hidden">
            <div className="container">
              <h1>scheduler.yield()</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.schedulerYield}
                  alt="Scheduler Yield"
                  className="screenshot tw:h-[400px]"
                />
              </div>
              <QR value="https://web.dev/articles/optimize-long-tasks#scheduler-yield/" />
            </div>
            <aside className="notes">
              There is currently 1 solution to improve this metric for 99% of
              case - yield the main thread. Experimental API called
              scheduler.yield() aims to fix the issue of long tasks. If you're
              interested in more details go check out the wonderful article
              https://calendar.perfplanet.com/2024/breaking-up-with-long-tasks-or-how-i-learned-to-group-loops-and-wield-the-yield/
            </aside>
          </section>
          <section id="core-web-vitals-challenges">
            <div className="container">
              <h1>CWV: WFT?</h1>
              <div className="tw:h-full tw:w-full tw:mt-20">
                <CWVTable noHeader />
              </div>
            </div>
            <aside className="notes">
              <ul>
                <li>
                  But there more of them, and how to explain your product
                  manager that you need to optimise your TTFB, or INP, or XYZ?
                </li>
                <li>Instead of working on a new product feature</li>
                <li>
                  Problem: that misunderstanding between product and Core Web
                  Vitals is mutual - these metrics are pretty generic and they
                  don't take into accound the specifics of our products.
                </li>
              </ul>
            </aside>
          </section>
          <section id="custom-metrics">
            <div className="container">
              <h1>Custom Metrics</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.timeToFocusedInput}
                  alt="Time to Focused Input"
                  className="screenshot tw:h-[400px]"
                />
              </div>
              <QR value="https://x.com/cramforce/status/1855312496137298116" />
            </div>
            <aside className="notes">
              <ul>
                <li>Custom metrics for the rescue.</li>
                <li>
                  Something like "time to focused input" if your app has an AI
                  assistant, Vercel use such metric in v0.
                </li>
                <li>
                  Twitter, currently X, use "time to first tweet" probably since
                  the days of their beginning
                </li>
                <li>
                  Pinterest measure "time to first pin" - the time between
                  tapping a pin and when it appears as pinned for the user.
                </li>
              </ul>
            </aside>
          </section>
          <section id="time-to-meaningful-content">
            <div className="container">
              <h1>Time To Meaningful Content</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.timeToMeaningfulContent}
                  alt="Time to Meaningful Content"
                  className="screenshot"
                />
              </div>
            </div>
            <aside className="notes">
              <ul>
                <li>
                  At Box - "time to meaningful content"
                  <ul>
                    <li>
                      From the time user starts navigation to the files page
                    </li>
                    <li>
                      To the time when meaningful content (like a minimal folder
                      list) is rendered.
                    </li>
                  </ul>
                </li>
                <li>
                  We use User Timing API to manually add performance markers.
                </li>
                <li>
                  For the static websites with a lot of images and text
                  Performance Element Timing API can be used for automatic
                  tracking.
                </li>
                <li>
                  It let's you to define explicitly what images or text nodes
                  you care about as opposed to what default LCP captures for
                  you.
                </li>
              </ul>
            </aside>
          </section>
          <section id="javascript-pain-points">
            <div className="container">
              <h1>Javascript Pain Points</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.stateOfJsPainPointsImg}
                  alt="State of JS Pain Points"
                  className="screenshot tw:h-[400px]"
                />
              </div>
              <QR value="https://2024.stateofjs.com/en-us/javascript-pain-points/" />
            </div>
            <aside className="notes">
              <ul>
                <li>
                  There are many guides available on how to use these API. Let's
                  switch to Javascript performance for now.
                </li>
                <li>
                  Not sure how representative this report is: 1 out of 4
                  respondents of the State of JS 2024 mentioned performance as
                  one of the main pain points in JS.
                </li>
                <li>
                  Is it Javascript that slow? Or the slowness comes from the
                  ecosystem around the language?
                </li>
              </ul>
            </aside>
          </section>
          <section id="react-and-performance">
            <div className="container">
              <h1>React and Performance</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.reactUseMemoText}
                  alt="React useMemo Text"
                  className="screenshot tw:h-[400px]"
                />
              </div>
              <QR value="https://krausest.github.io/js-framework-benchmark/2024/table_chrome_126.0.6478.55.html" />
            </div>
            <aside className="notes">
              <ul>
                <li>
                  React since it's often mentioned in conversations about
                  performance
                </li>
                <li>
                  Why do we need Virtual DOM? Why not using signals? Does React
                  Compiler solve the real issues?
                </li>
                <li>The time will answer these questions.</li>
              </ul>
            </aside>
          </section>
          <section id="react-no-signals">
            <div className="container">
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.frameworkBenchmark}
                  alt="Frameworks Benchmark"
                  className="screenshot tw:h-[400px]"
                />
              </div>
            </div>
            <aside className="notes">
              <ul>
                <li>As always - it's all about tradeoffs.</li>
                <li>
                  React today is definitely not the fastest UI library
                  available.
                </li>
                <li>
                  Should we pick vanila JS just because it's the fastest on
                  benchmarks and will it be a vise choice beyond personal
                  projects? I don't think so.
                </li>
                <li>
                  We only need to remember - there are alternatives out there.
                </li>
                <li>Experiment until it's too big to fail.</li>
              </ul>
            </aside>
          </section>
          <section id="languages-quote">
            <div className="container">
              <Quote
                img={images.bjarneStroustrup}
                source="Bjarne Stroustrup"
                quote="There are only two kinds of languages: the ones people complain about and the ones nobody uses."
              />
            </div>
            <aside className="notes">
              <ul>
                <li>
                  To summarise this part, let's rephrase this famous quote:
                </li>
                <li>
                  "There are only two kinds of UI libraries: the ones people
                  complain about and the ones nobody uses."
                </li>
              </ul>
            </aside>
          </section>
          <section id="tools">
            <div className="container">
              <h1>Tools</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img src={images.toolsGif} alt="Tools" className="screenshot" />
              </div>
            </div>
            <aside className="notes">
              <ul>
                <li>
                  From ranting about frameworks let's switch to how we can
                  diagnose app performance.
                </li>
                <li>We mentioned RUM as the way to measure the field data.</li>
              </ul>
            </aside>
          </section>
          <section id="chrome-devtools">
            <div className="container">
              <h1>Chrome DevTools</h1>
              <img
                src={images.devtoolsPanel}
                alt="DevTools Panel"
                className="screenshot tw:h-[400px]"
              />
            </div>
            <aside className="notes">
              <ul>
                <li>
                  Let's quickly review Chrome Devtools and some new feature I
                  particularly find interesting.
                </li>
              </ul>
            </aside>
          </section>
          <section id="chrome-devtools-custom-metrics">
            <div className="container">
              <div className="container">
                <h1>Custom Track</h1>
                <img
                  src={images.perfTimelineToDevtoolsProfile}
                  alt="Perf Timeline to DevTools Profile"
                  className="screenshot tw:h-[400px]"
                />
                <QR value="https://github.com/andydavies/perf-timeline-to-devtools-profile/" />
              </div>
            </div>
            <aside className="notes">
              <ul>
                <li>
                  Custom Track - the way see your custom measurements inside
                  performance profile.
                </li>
                <li>This is an example of Chrome Extension</li>
                <li>
                  Add Long Animation Frames mesurements and allows us to see how
                  multiple render-blocking tasks may affect frame rendering.
                </li>
              </ul>
            </aside>
          </section>
          <section id="devtools-annotations">
            <div className="container">
              <h1>Trace Annotations</h1>
              <img
                src={images.devtoolsAnnotations}
                alt="DevTools Annotations"
                className="screenshot tw:h-[400px]"
              />
              <QR value="https://developer.chrome.com/docs/devtools/console/console-reference#trace" />
            </div>
            <aside className="notes">
              <ul>
                <li>
                  Trace annotations - looks extremely helpful, at least on paper
                </li>
                <li>Put comments, questions and send to your teammate.</li>
              </ul>
            </aside>
          </section>
          <section id="ai">
            <div className="container tw:mt-0! tw:flex tw:flex-col tw:items-center tw:justify-center tw:h-full">
              <h1 className="tw:font-bold! tw:text-8xl!">AI</h1>
            </div>
            <aside className="notes">AI</aside>
          </section>
          <section id="chrome-devtools-ai">
            <div className="container">
              <h1>AI Assistant</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <h4>Tip: start Chrome with --disable-extensions</h4>
                <img
                  src={images.devtoolsAi}
                  alt="DevTools AI"
                  className="screenshot tw:h-[400px]"
                />
              </div>
              <QR value="https://developer.chrome.com/docs/devtools/ai-assistance" />
            </div>
            <aside className="notes">
              <ul>
                <li>
                  You have probably seen: an integrated AI assistant in Chrome
                  Devtools with the Gemini model under the hood.
                </li>
                <li>
                  Just make sure to start Chrome with --disable-extensions flag.
                  You don't want your extensions to get in your way when you
                  record your traces.
                </li>
                <li>
                  But what if you can't use AI in Chrome for the privacy
                  reasons?
                </li>
              </ul>
            </aside>
          </section>
          <section id="quote-abraham-maslow">
            <div className="container tw:mt-0! tw:flex tw:flex-col tw:items-center tw:justify-center tw:h-full">
              <Quote
                img={images.screwWithHammer}
                source="Abraham Maslow"
                quote="If the only tool you have is a hammer, to treat everything as if it
                were a nail"
              />
            </div>
            <aside className="notes">
              <ul>
                <li>Remember traces annotations? Just an idea for you:</li>
                <li>Add prompts inside the recorded profile.</li>
                <li>Export the profile as a json blob.</li>
                <li>
                  Give it to your favorite frontier model. Maybe you will get
                  some interesting insights.
                </li>
              </ul>
            </aside>
          </section>
          <section id="vibe-debugging">
            <div className="container">
              <h1>Vibe Debugging</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.agentSmith}
                  alt="Agent Smith"
                  className="screenshot"
                />
              </div>
            </div>
            <aside className="notes">
              <ul>
                <li>
                  If you do: please tell everyone that now everything you do is
                  "vibe debugging"
                </li>
              </ul>
            </aside>
          </section>
          <section id="video-did-you-do-that">
            <div className="container">
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <Video url={videos.didYouDoThat} />
              </div>
            </div>
            <aside className="notes">
              <ul>
                <li>
                  And if it will help you to improve your users experience
                </li>
                <li>
                  Because in the end that's the thing which matters the most
                </li>
                <li>
                  You can safely say: "I successfully completed my performance
                  review"
                </li>
              </ul>
            </aside>
          </section>
          <section id="thank-you">
            <div className="container tw:mt-0! tw:flex tw:flex-col tw:items-center tw:justify-center tw:h-full">
              <h3>Thank you!</h3>
              <h1 className="tw:font-bold! tw:text-8xl!">Q&A</h1>
              <div className="tw:mt-10">
                <h3>Slides:</h3>
                <QR value="https://loonskai-decks.netlify.app/webperf/" />
              </div>
            </div>
            <aside className="notes"></aside>
          </section>
        </div>
      </div>
    </div>
  );
}
