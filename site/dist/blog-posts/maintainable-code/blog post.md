# Maintainable Code

![Two charts: shipping velocity rising steadily in early days, then bending sharply downward past a threshold](./images/ChatGPT%20Image%20Jun%201%2C%202026%2C%2005_40_41%20PM.png)

## Move fast; don't break things

Facebook's old motto was meant to be liberating. Ship fast, iterate, don't let perfectionism slow you down. But somewhere along the way, many engineering teams internalized only the first half. They moved fast. They broke things. And then they kept breaking things, faster and faster, until the codebase itself became the thing that was broken.

Maintainability isn't a nice-to-have. It isn't something you retrofit after product-market fit. It is the substrate on which your velocity runs, and when it degrades, your velocity degrades with it, not gradually, but exponentially.

---

### Why maintainability matters

#### The slow collapse: why bad code gets worse faster

The insidious thing about an unmaintainable codebase is that the damage is not linear. Engineers don't slow down at a steady, predictable rate as complexity accumulates. The relationship is more like exponential decay: for a while, things feel manageable, friction is low, the team is shipping. Then a threshold is crossed, and the curve bends sharply. Features that used to take a sprint now take a quarter. A one-line change requires understanding six modules. Every fix introduces two new bugs.

The reason is compounding. Complexity doesn't just add; it multiplies. A tangled module makes the next change to it harder. That harder change introduces more tangling. Each layer of debt makes the next layer cheaper to accumulate and more expensive to repay. By the time the collapse feels obvious, you've usually been in it for months.

![A small snowball at the top of a slope casting a shadow showing a much larger snowball at the bottom](./images/ChatGPT%20Image%20Jun%201%2C%202026%2C%2005_40_50%20PM.png)

#### Codebases that cross a threshold require full rebuilds

There is a point, and most engineers who have worked on legacy systems know it viscerally, where a codebase stops being something you can improve incrementally. Refactoring requires understanding, and understanding requires reading code that no longer has a coherent mental model behind it. You can't untangle high coupling without breaking things. You can't redraw abstraction boundaries without rewriting everything that crosses them.

At that point, the honest conversation is about rebuilds, not improvements. Rebuilds are costly in time, focus, and opportunity cost. Teams that reach this point rarely get there in one dramatic decision; they get there through a hundred small ones, each individually defensible, collectively catastrophic.

![Two path diagrams: before the point of no return both refactor and rebuild are viable; after it, only rebuild remains](./images/ChatGPT%20Image%20Jun%201%2C%202026%2C%2006_21_02%20PM.png)

#### Slower time to resolution of incidents

When production breaks, the codebase is either a diagnostic tool or an obstacle. In a maintainable system, logs are meaningful, traces connect cause to effect, and an engineer unfamiliar with a service can reason about it within minutes. In an unmaintainable one, incident response becomes archaeology. You're reading code that no one fully understands, grepping for clues, hoping someone on-call has context that lives only in their head.

Mean time to resolution is a lagging indicator of maintainability. If your incidents are getting harder to resolve even as your monitoring improves, the codebase is telling you something.

![Split screen: a clean system diagram with a failure found in 12 minutes versus a tangled one taking 3 hours 47 minutes](./images/ChatGPT%20Image%20Jun%201%2C%202026%2C%2006_21_57%20PM.png)

---

### How bad is it?

Before you can improve maintainability, you need an honest read on where you are. The most reliable signal isn't code reviews or static analysis; it's your telemetry. A codebase that can't be observed can't be understood, and a codebase that can't be understood can't be maintained.

![Three stacked dashboard panels showing error rate, structured logs, and a distributed trace waterfall](./images/ChatGPT%20Image%20Jun%201%2C%202026%2C%2005_44_58%20PM.png)

#### Telemetry in environments

##### Surface errors

Unhandled exceptions, error rates by service, failure modes under load: these should be visible at a glance. If your error surfacing requires bespoke queries or tribal knowledge to interpret, that's a symptom. Good error telemetry is an extension of your code's legibility.

##### Surface logs

Logs should tell a story. Not a wall of JSON, not a flood of debug noise, but a structured narrative of what your system did and why. If your logs require a specialist to interpret, or if engineers routinely fly blind because log volume is too high to read, you're not getting the signal you need.

##### Surface distributed traces

In a system with multiple services, a request's journey across the stack is where the interesting failures hide. Distributed tracing surfaces what logs and metrics miss: the slow downstream call, the cascading failure, the unexpected dependency. If you can't trace a request from entry to exit, you can't fully understand your system's behavior.

##### Alert on what matters

Alert fatigue is a maintainability problem. When everything pages, nothing pages. Good alerting requires discipline: alert on user-visible symptoms, not internal implementation details. If your on-call rotation dreads the pager, your alerts are probably measuring the wrong things. Tuning alerts is also a way of forcing clarity about what your system is supposed to do, which is itself a maintainability exercise.

---

### Degrading maintainability

Maintainability doesn't collapse on its own. It degrades through decisions: some made without full information, some never made consciously at all.

#### Edits without foundational understanding

The fastest path to unmaintainable code is making changes without understanding the system being changed. This has always been true, but it's newly urgent in the age of AI-assisted development. Copilots and code generators can produce syntactically correct, superficially reasonable code that violates invariants the tool was never told about. An engineer who accepts a generated change without understanding it has shifted the cost of understanding from now to later, and later always charges interest.

This isn't an argument against AI tooling. It's an argument for using it with the same discipline you'd apply to any powerful tool: understand what it's doing and why before it touches production.

#### Siloed knowledge of the codebase

When only one person understands how the payment service works, that's not expertise; it's a liability. Knowledge silos mean that routine maintenance becomes blocked on availability, incidents become dependent on the right person being on-call, and offboarding a single engineer can leave permanent blind spots. Silos form naturally over time; counteracting them requires deliberate effort.

![Org chart where all service connections radiate from a single highlighted Subject Matter Expert node](./images/ChatGPT%20Image%20Jun%201%2C%202026%2C%2005_46_51%20PM.png)

#### Structural causes

Human decisions cause degradation, but structural patterns accelerate it.

![Two architecture diagrams: a dense web of crossing service connections versus clean clustered boundaries](./images/ChatGPT%20Image%20Jun%201%2C%202026%2C%2005_45_55%20PM.png)

##### High coupling between components

When components know too much about each other's internals, changes propagate unpredictably. A modification to one module requires understanding, and often modifying, several others. The blast radius of any change expands, and engineers start avoiding refactors because the cost of getting it wrong is too high.

##### Poor abstraction boundaries

Good abstractions hide complexity. Bad ones expose it. When the seams of your system are in the wrong places, when a service has to reach into another service's data model, or when a library exposes implementation details that callers have come to depend on, you've traded a short-term convenience for a long-term constraint. Every caller becomes a stakeholder in decisions that should be internal.

##### Dependency drift

Dependencies that aren't actively managed become liabilities. Packages go unmaintained. Security vulnerabilities accumulate. Upgrade paths close as the delta between your version and the current one grows too large to bridge incrementally. Dependency drift is quiet until it isn't, and by the time it's loud, it's expensive.

---

### Improving maintainability

#### Stop the bleed: systematically tackle pieces, don't panic

The first response to a maintainability crisis is almost always the wrong one: a panic-driven rewrite, a sweeping refactor that breaks everything, a grand architecture redesign that never ships. These fail because they require the system to stop while you fix it, and the system rarely stops.

The more durable approach is surgical. Identify the highest-friction areas. Bound the scope of each improvement. Ship incrementally. The goal is not to have the perfect codebase by Thursday; it's to make it measurably better each sprint without making it worse in the process. Slow is smooth. Smooth is fast.

The strangler fig pattern is a useful frame here. Named after the tree that grows around its host and gradually replaces it, the pattern describes replacing a legacy system piece by piece rather than all at once. New functionality is built alongside the old, traffic is shifted incrementally, and the legacy code shrinks until it can be removed entirely. The system keeps running throughout. This is the opposite of the big-bang rewrite, and it's almost always the safer bet.

#### Pay down tech debt

Not all tech debt is equal, and treating it as a monolith is one reason it never gets addressed.

![Two maze paths: intentional debt marked with a sticky note, unintended debt ending at a hidden time bomb](./images/ChatGPT%20Image%20Jun%201%2C%202026%2C%2005_48_24%20PM.png)

##### Intentional tech debt should be documented

Sometimes you take a shortcut deliberately. You know the abstraction is wrong, but the deadline is real and the impact is bounded. That's a reasonable call, but only if it's recorded. An undocumented shortcut looks identical to an accident. Document the decision, the constraint that drove it, and the conditions under which it should be revisited. Tech debt with a paper trail is manageable; tech debt that lives only in someone's memory is a time bomb.

##### Unintended tech debt should be surfaced and reviewed

The more dangerous category is the debt nobody knows about: the assumption that was wrong from day one, the pattern that made sense in v1 and calcified into v5, the dependency that quietly became load-bearing. Surfacing this debt requires a culture where engineers feel safe raising concerns without needing to also propose solutions. Regular architectural reviews, code archaeology sessions, and honest retrospectives all help, but only if there's a genuine appetite to hear what they find.

#### Protect yourself with tests

Tests are the only mechanism that makes change safe at scale. Not because they catch every bug (they don't), but because they create a contract between the current behavior and future changes. A codebase with good test coverage can be refactored with confidence. A codebase without it can only be changed with fear.

The distinction between unit tests and integration tests matters here. Unit tests tell you that a function behaves correctly in isolation. Integration tests tell you that the system behaves correctly under realistic conditions. Both are necessary. Teams that only have one type are fooling themselves about the other.

#### Protect yourself with code reviews

Code review has long been treated as a quality gate, a second set of eyes to catch bugs before they merge. But its more important function is knowledge transfer. When a reviewer reads a change carefully, they're not just checking for correctness; they're building a mental model of that part of the system. Review is how understanding spreads.

##### Code review as a knowledge transfer mechanism

This framing matters because it changes what a good review looks like. A review that only checks for style violations or obvious bugs is not doing the hard work. A review that asks "why was this approach chosen over the alternative?" or "what happens if this invariant is violated?" is building shared understanding. The goal is not just to merge good code; it's to ensure that the knowledge behind the code doesn't leave when the author does.

##### AI-generated code breaks the assumption: "if you didn't write it, why should I read it?"

Here's the problem: if an engineer prompts an AI to generate a function and accepts the output without deeply understanding it, the review process inherits that gap. The reviewer reads code that the author didn't fully write and may not fully understand. The knowledge transfer loop is broken at the source. As one engineer put it bluntly: *"if you didn't write it, why should I read it?"*

This isn't a critique of AI-assisted development; it's a recognition that the old review model assumed the author had earned the context that the reviewer was borrowing. When that assumption breaks down, reviewing the output becomes theater.

![Traditional code review loop above, and below it the broken version where the understanding nodes are marked with question marks](./images/ChatGPT%20Image%20Jun%201%2C%202026%2C%2005_49_45%20PM.png)

##### What to do instead

The answer isn't to ban AI tooling or to review AI-generated code more skeptically at the diff level. It's to shift the review conversation upstream. Instead of reviewing the code, review the intent: what problem is this solving, what constraints shaped the approach, what are the failure modes? If the author can't answer those questions confidently, regardless of whether the code was AI-generated or hand-written, the code isn't ready for review.

The knowledge that matters isn't in the diff. It's in the engineer's head.

#### Easily evaluate changes

The last line of defense against maintainability degradation is the ability to know, quickly and confidently, whether a change made things better or worse. This requires good telemetry (which we've already discussed), meaningful tests, and, critically, a deployment process that makes it easy to compare before and after.

![Network of user nodes with a small 5% cluster highlighted in amber receiving a canary deploy, the other 95% untouched](./images/ChatGPT%20Image%20Jun%201%2C%202026%2C%2005_50_52%20PM.png)

Feature flags, canary deployments, and staged rollouts all serve this purpose. They don't prevent bad changes; they limit their blast radius and make them reversible. A team that can evaluate changes quickly is a team that can afford to take risks, which is, ultimately, what moving fast requires.

---

Maintainability is not the opposite of speed. It is the precondition for it. The teams that ship fastest over the long run are the ones that treat their codebase as something worth understanding, not just something to change. The slow collapse is real, but it's also avoidable, if you're paying attention early enough.
