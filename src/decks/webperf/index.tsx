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
              Performance is a vast topic that is highly intertwined with
              everything related to product engineering. 20 minutes is
              definitely not enough to explore even smaller parts of it. So
              today I'll try to skim over the "golden circle" of "why", "what"
              and "how".
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
              We'll try to see what is the real picture of the web performance
              today. It will be a performance review - web performance review,
              not the one you're thinking about.
            </aside>
          </section>
          <section id="question-1-why">
            <div className="container tw:mt-0! tw:flex tw:flex-col tw:items-center tw:justify-center tw:h-full">
              <h3>Question 1</h3>
              <h1 className="tw:font-bold! tw:text-8xl!">Why?</h1>
            </div>
            <aside className="notes">
              Without further due, let's take the red pill and start with "Why"
              and ask why anyone should bother. Let's go to the next slide and
              see how the web looks like today.
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
                <QR value="https://dictionary.cambridge.org/dictionary/english/performance" />
              </div>
            </Banners>
            <aside className="notes">
              You just witnessed the psychological impact of bad UX and
              performance is a big part of it. Because what is performance in
              general? It is "how well a person, machine, etc. does a piece of
              work or an activity". And we all know that frustrution comes when
              we expect something to work well but later we face the reality.
              You'll notice that every time you catch yourself on rage clicking
              some irresponsive interface. Because we're all people - when we
              submit a request, we expect at least an instant acknowledgment,
              because unexplained waits are more frustrating than explained
              ones. Thought people are ready to tolerate longer for high-value
              services, like medical or bank apps. I clicked through all these
              banners because it was important to me. I would already closed the
              tab in the real life scenario. By 2025 the expectation to UX and
              how the web pages must perform has grown, unfortunately, with the
              pace of growing Javascript bundles.
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
              There are multiple studies around how performance affects the
              number of page views, bounce rate as well as conversion rate.
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
              These examples can be easily found online. However all of them is
              just a sample of efforts that eventually end up to be positive for
              the businesses. There is definitely a strong correlation between
              how our applications perform and how much revenue do they
              generate. What I think what we also miss in seeing the splendor of
              such successes is how many initiatives to improve the performance
              failed. Right now it's easy to fall victim to the survivirship
              bias because it's hard find stories where companies spent a huge
              effort trying to optimise for performance but ended up realising
              that it doesn't bring any value.
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
              Here is just a single example of Gitlab, that spent around 2 years
              trying to improve First Contentful Paint for the first-time users
              by adding inline CSS. At the end they removed around 10K of code
              that introduced this optimization because there was no positive
              effect.
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
              As any product aspect, similar to SEO, accesibility, performance
              improvements don't make much sence in separation from business.
              I'm not talking about non-profit or personal projects, where we go
              deep into the topic to learn something new. I'm talking about real
              world products. Before going into the rabit hole of the
              performance optimisations, the business needs to ask the question:
              do I need to spend the time and money trying to to improve the
              performance?
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
              My answer is - No. Unless you have the relevant data.
            </aside>
          </section>
          <section id="question-2-what">
            <div className="container tw:mt-0! tw:flex tw:flex-col tw:items-center tw:justify-center tw:h-full">
              <h3>Question 2</h3>
              <h1 className="tw:font-bold! tw:text-8xl!">What?</h1>
            </div>
            <aside className="notes">
              Here arises the next question about web performance - "what" data
              do we need to have?
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
              Performance data boils down into 2 categories: field and lab data.
              What is the difference? Todd Gardner, performance expert, defined
              it the following way: lab data is diagnostic, field data is
              experience. And if someone would ask me: hey, I don't have ANY
              data, what should I start with? I would say: start collecting
              field data. And the best way to do it is to enable real user
              monitoring.
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
              The lab data - Lighthouse. Should be used only during development
              or in CI to run some sanity check on your application performance.
              Since it's not based on real user experiencem the value of the
              green Lighthouse for business is close to zero.
            </aside>
          </section>
          <section id="rum">
            <div className="container">
              <h1>Field: Real User Monitoring</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.matrixRUM}
                  alt="Matrix RUM"
                  className="screenshot"
                />
              </div>
            </div>
            <aside className="notes">
              In 2025 there is a vast amount of solutions of different cost and
              functionality and the topic of real user monitoring is big enough
              to have a separate talk. In one sentense - RUM gives you the data
              about your users' environments, how they navigate your app, how
              performance changes over time in real time. Because there is a lot
              of data there is also a lot of noise. If you have big traffic
              there is a big cost as well so sampling may help here to save some
              money. TODO: Finish watching RUM and noise and add some details
              about RUM. Anyway, RUM is a process by itself, but what are the
              signals?
            </aside>
          </section>
          <section id="core-web-vitals">
            <div className="container">
              <h1>Core Web Vitals</h1>
              <h4>this is what everyone* needs</h4>
              <div className="tw:h-full tw:w-full tw:mt-4">
                <CWVTable />
              </div>
              <h4>*Google</h4>
            </div>
            <aside className="notes">
              The signals are core web vitals. Something that everyone needs to
              collect. These metrics are evolving with time and I think the best
              way not to get lost with them is to split them into 3 categories:
              loading speed (network time), interactivity (compute time) and
              stability.
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
              If you work in a frontend team you can still make your
              contribution to the network part of the performance by making sure
              your bundle size doesn't blow up. However, this effort is only a
              small part of the whole network story. You know this feeling, when
              you're trying to wipe out all package duplicates, you're spending
              days on bundlephobia trying to find the smallest alternative for
              lodash and eventually implementing your own. This is great, but if
              your devops team forgot to enable gzip compression this effort
              will look like this:
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
              So we must to understand - performance, like security, privacy and
              UX, is an aggregate result and it must be managed as a commons.
              And this is a part of performance management discipline. Let's now
              dive a little bit into something that we, frontend engineers, are
              most responsible for. And we'll do it by reviewing INP.
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
              Often misinterpreted as "Interaction to next PAIN". Which
              partially makes sence since high INP causes all sorts of the bad
              psychological effect, e.g., already discussed rage clicks. To
              describe INP we can say, that the web application is as slow as
              the slowest interaction which happens on it.
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
              Hover interactions are not included in INP calculations, but many
              apps leverage hovers for some of their important user behavior.
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
            <div className="container">
              <h1>scheduler.yield()</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.schedulerYield}
                  alt="Scheduler Yield"
                  className="screenshot tw:h-[460px]"
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
              This is just one of the metrics. But imagine coming to your
              designer or product manager and trying to explain them why we need
              to optimize for TTFB, INP or any other abbreviature? And this
              misunderstanding is mutual - these metrics are generic and they
              don't take into accound the specifics of your product.
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
              If your application has an AI assistant maybe you need something
              like "time to first input" which is used by Vercel. Or you need
              something that is related solely to your domain, something like
              "time to first tweet" which Twitter has been using for a long
              time. Or Pinterest with their "time to first pin" which measures
              the time between initiated action (like tapping a pin) until the
              action is completed from the user perspective.
            </aside>
          </section>
          <section id="time-to-meaningful-content">
            <div className="container">
              <h1>Time to Meaningful Content</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.timeToMeaningfulContent}
                  alt="Time to Meaningful Content"
                  className="screenshot"
                />
              </div>
            </div>
            <aside className="notes">
              At Box for example we're looking at "time to meaningful content" -
              this is the duration from when a user start a request either by
              going to URL or clicking a link to when meaningful content (like a
              minimal folder list) is rendered. Fortunately, there are plenty of
              native and external APIs to build custom measurements.
            </aside>
          </section>
          <section id="element-timing-api" data-visibility="hidden">
            <div className="container">
              <h1>Element Timing API</h1>
              <QR value="https://developer.mozilla.org/en-US/docs/Web/API/Element_timing_API" />
            </div>
            <aside className="notes">
              Element Timing API - it let's you to define explicitly what images
              or text nodes you care about as opposed to what default LCP
              captures for you.
            </aside>
          </section>
          <section id="container-timing-api" data-visibility="hidden">
            <h1>Container Timing API</h1>
            <aside className="notes">
              Another interesting API which is not yet available in browsers but
              being actively developed by Bloomberg is Container Timing API. It
              allows you to track when specific sections of DOM are first
              displayed and fully painted, will all their children elements. You
              can try it out with a polyfill and some experimental flags.
              https://github.com/bloomberg/container-timing
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
              But let's make a step back and see at Javascript performance. 1
              out of 4 respondents mentioned performance as one of the main pain
              points of the JS. But is Javascript itself slow or does this paint
              point come from the ecosystem around the language?
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
              <QR value="https://dev.to/matfrana/react-where-are-you-going-5284" />
            </div>
            <aside className="notes">
              One question to ask - does React Compiler solve the right issue by
              putting React Compiler on top of all memoisation methods? There
              are concerns about growing complexity of the React, with Server
              Components, React Compiler, Suspense, etc.
            </aside>
          </section>
          <section id="react-no-signals">
            <div className="container">
              <h1>React and (no) Signals</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.reactNoSignals}
                  alt="React No Signals"
                  className="screenshot"
                />
              </div>
              <QR value="https://x.com/cramforce/status/1855312496137298116" />
            </div>
            <aside className="notes">
              Someone may recall this conversation from the early 2023 about
              signals in React.
            </aside>
          </section>
          <section id="react-vs-others">
            <div className="container">
              <h1>If Not React, Then What?</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.reactAndrewAnswer2}
                  alt="React Andrew Answer"
                  className="screenshot"
                />
              </div>
            </div>
            <aside className="notes">
              There are multiple attempts to solve performance issues. Qwik
              comes with an idea of resumability. But if you have a big ping
              (slow connection) it's just unusable. Also Svelte comes with runes
              which is considered by many as a breakthrough in reactivity.
            </aside>
          </section>
          <section id="frameworks-performance">
            <div className="container">
              <h1>Frameworks performance</h1>
              <img
                src={images.frameworkBenchmark}
                alt="Frameworks Benchmark"
                className="screenshot"
              />
              <QR value="https://krausest.github.io/js-framework-benchmark/2024/table_chrome_126.0.6478.55.html" />
            </div>
            <aside className="notes">
              But building apps that real people use is often about tradeoffs.
              Right now React is definitely not the fastest UI library out
              there. If we pick vanila JS just because it's the fastest in
              benchmarks, will it be a vise choice beyond personal projects.
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
              In the end, let's remember what was said a long time ago: "There
              are only two kinds of languages: the ones people complain about
              and the ones nobody uses."
            </aside>
          </section>
          <section id="microoptimisations" data-visibility="hidden">
            <h1>Microoptimisations</h1>
            <aside className="notes">
              But frameworks and libraries choice isn't something we can do when
              we join a big tech company. Always it's already "too big to fail".
              But what we can control is the business logic code. It's the place
              that we need start measuring if we know it's time to get the
              responsibility. TODO: Add examples like for vs forEach, let vs
              var, reduce etc
              https://www.measurethat.net/Benchmarks/Show/18532/0/jsonstringify-jsonparse-vs-structuredclone#latest_results_block
            </aside>
          </section>
          <section id="how">
            <div className="container tw:mt-0! tw:flex tw:flex-col tw:items-center tw:justify-center tw:h-full">
              <h3>Question 3</h3>
              <h1 className="tw:font-bold! tw:text-8xl!">How?</h1>
            </div>
            <aside className="notes"></aside>
          </section>
          <section id="tools">
            <div className="container">
              <h1>Tools</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img src={images.toolsGif} alt="Tools" className="screenshot" />
              </div>
            </div>
            <aside className="notes">
              We've already mentioned RUM as the best way to measure field data.
              But we still need to diagnose the performance of our app with the
              lab data and the most advanced tool for that is of course Chrome
              DevTools.
            </aside>
          </section>
          <section id="chrome-devtools">
            <div className="container">
              <h1>Chrome DevTools</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.devtoolsPanel}
                  alt="DevTools Panel"
                  className="screenshot"
                />
              </div>
            </div>
            <aside className="notes">
              Your laptop is typically much faster than the median user's phone.
              If you run your test without throttling, you'll get numbers that
              are too good. What you can try is also to instruct LLM how to
              treat the specific trace.
            </aside>
          </section>
          <section id="chrome-devtools-custom-metrics">
            <div className="container">
              <div className="container">
                <h1>Custom Track</h1>
                <img
                  src={images.perfTimelineToDevtoolsProfile}
                  alt="Perf Timeline to DevTools Profile"
                  className="screenshot tw:h-[480px]"
                />
                <QR value="https://github.com/andydavies/perf-timeline-to-devtools-profile/" />
              </div>
            </div>
            <aside className="notes">
              When it comes to custom measurements, Chrome DevTools already has
              a way to display them in the Performance panel. There are even
              some ready-to-use Chrome Extensions, for example this one injects
              Long Animation Frames mesurements and allows us to see how
              multiple render-blocking tasks may affect frame rendering. The
              last thing I would like to mention is something probably only few
              people have heard about.
            </aside>
          </section>
          <section id="devtools-annotations">
            <div className="container">
              <h1>Trace Annotations</h1>
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <img
                  src={images.devtoolsAnnotations}
                  alt="DevTools Annotations"
                  className="screenshot tw:h-[400px]"
                />
              </div>
              <QR value="https://developer.chrome.com/docs/devtools/console/console-reference#trace" />
            </div>
            <aside className="notes">
              Another feature that looks extremely helpful, at least on paper,
              is trace annotations. You can add put whatever comments or
              questions you have, export the profile as a json blob and share it
              with your teammates. By the way, WarsawJS, this was recorded with
              Slow 4G network and 20x CPU slowdown, no worries here.
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
                <img
                  src={images.devtoolsAi}
                  alt="DevTools AI"
                  className="screenshot"
                />
              </div>
              <QR value="https://developer.chrome.com/docs/devtools/ai-assistance" />
            </div>
            <aside className="notes">
              From the latest versions Chrome DevTools has an integrated AI
              assistant with Gemini model under the hood. You must be logged in
              in Chrome to start using it and being signed in with your personal
              account while doing performance profiling is not the best idea
              since we usually have a lot of extensions enabled. You don't want
              your extensions to get on your way when you record your traces,
              don't you? So at the time you'll need a separate account to have a
              clean environment and to be able to use AI assistant. Also you'll
              need it to be enabled by your machine administrator if you use
              your working laptop and your company is fine with Google privacy
              policy.
            </aside>
          </section>
          <section id="vibe-debugging">
            <h1>Vibe Debugging</h1>
            <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
              <img
                src={images.agentSmith}
                alt="Agent Smith"
                className="screenshot"
              />
            </div>
            <aside className="notes">
              We are on the verge of a new era of debugging, when we leave this
              overwhelming flowcharts to AI agents, seet back and relax. I call
              it "vibe debugging".
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
              I also thought: there are so many powerful frontier models so why
              to limit yourself with Gemini? If I can annotate and export
              profile as a json blob, can I feed it into an LLM to get some
              meaningful insides? I have this big hammer called generative AI
              and performance analysis looks definitely like a nail. TODO: Leave
              a link to the gist with jupyter notebook.
            </aside>
          </section>
          <section id="video-did-you-do-that">
            <div className="container">
              <div className="tw:flex-1 tw:flex-col tw:flex tw:justify-center">
                <Video url={videos.didYouDoThat} />
              </div>
            </div>
            <aside className="notes">
              But in the end you will come to your upper management or even
              better to your performance review to show, how the "real
              performance review" looks like.
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
