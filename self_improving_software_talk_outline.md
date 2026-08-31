# Self-Improving Software: Where Does the Engineering Effort Go?

## Core Thesis

> As implementation effort falls, specification and verification absorb more of the engineering effort.

This talk compares the software development process when software is primarily built by human developers versus when software can increasingly observe, modify, test, and improve itself.

The goal is not to argue that engineering effort disappears. The goal is to show how that effort shifts.

---

## Development Process Comparison

| Development Step | Human-Developed Software | Self-Improving Software | Where the Effort Shifts |
|---|---|---|---|
| **1. Define the problem** | Humans interpret business needs, user feedback, and product direction. Ambiguity can often be resolved through conversation. | The system needs explicit goals, optimization targets, and boundaries it can reason about. | More effort goes into making intent explicit and machine-readable. |
| **2. Define requirements** | Requirements can remain partially informal because developers supply missing context. | Requirements need clearer constraints, invariants, success criteria, and forbidden outcomes. | From informal shared understanding to explicit specification. |
| **3. Design architecture** | Architecture is designed to help teams understand, maintain, and evolve the system. | Architecture must also create safe modification boundaries for autonomous or semi-autonomous agents. | More emphasis on modularity, contracts, blast-radius control, and ownership boundaries. |
| **4. Plan implementation** | Developers choose approaches, estimate complexity, sequence work, and make tradeoffs. | Agents can generate and evaluate many possible implementations rapidly. | Less effort on manually planning implementation; more on defining the search space and constraints. |
| **5. Write implementation code** | A large portion of engineering effort is spent writing and modifying code. | Implementation can increasingly be generated, rewritten, or optimized automatically. | Significant reduction in direct implementation effort. |
| **6. Write tests** | Tests verify that developers implemented intended behavior correctly and prevent regressions. | Tests become part of the specification that defines what the system is allowed to change. | Testing becomes closer to executable policy or constitutional law. |
| **7. Define invariants and guardrails** | Important constraints often exist in code review practices, institutional knowledge, or documentation. | Constraints must be explicit enough to automatically reject unsafe or undesirable changes. | Much more effort on security, data boundaries, compatibility, cost limits, and business invariants. |
| **8. Review changes** | Humans inspect implementation details, correctness, readability, and architecture. | Humans increasingly review the process that generated, evaluated, and approved the change. | From reviewing every change toward reviewing the change-generation system. |
| **9. Build and integration** | CI validates that components compile, integrate, and pass automated checks. | CI becomes an evaluation environment in which agents can repeatedly generate, test, and compare alternatives. | CI evolves from a gate into an experimentation platform. |
| **10. Deploy** | Deployment automation moves approved human changes into production. | Systems may deploy validated improvements automatically, often progressively. | Greater effort on safe rollout mechanisms and bounded autonomy. |
| **11. Observe production** | Telemetry primarily helps humans diagnose incidents and understand behavior. | Telemetry becomes a direct input into the software improvement loop. | Observability moves from operational tooling to a core development interface. |
| **12. Diagnose problems** | Engineers examine logs, traces, metrics, and reports to form hypotheses. | Agents can continuously correlate telemetry, identify regressions, and generate hypotheses. | Human effort shifts from initial diagnosis toward supervising models, signals, and escalation paths. |
| **13. Propose improvements** | Product managers and engineers decide what should be improved next. | The system can discover opportunities from errors, performance, cost, usage, and user outcomes. | More effort goes into defining what “better” means and prioritizing competing objectives. |
| **14. Evaluate alternatives** | Teams often select one implementation and validate it. | Agents can generate multiple implementations and compare them through tests, benchmarks, simulations, or traffic replay. | Evaluation infrastructure becomes much more important. |
| **15. Measure outcomes** | Teams manually inspect whether releases improved desired metrics. | Outcome measurement can automatically determine whether a change should be kept, rolled back, or iterated on. | Product metrics become part of the control loop rather than retrospective reporting. |
| **16. Roll back or recover** | Humans respond when deployments cause regressions or incidents. | Automated systems need reliable rollback when an improvement violates constraints or performs worse. | Recovery must be predictable, automatic, and heavily tested. |
| **17. Learn and iterate** | Knowledge is absorbed by individuals, teams, documentation, and future planning. | The system can use production outcomes as feedback for subsequent changes. | The development lifecycle becomes a continuous feedback loop. |

---

## The Traditional Development Loop

```text
Requirements
     ↓
 Developers
     ↓
Implementation
     ↓
 Tests
     ↓
Deployment
     ↓
Production
     ↓
Telemetry
     ↓
 Humans
```

Humans are responsible for interpreting most of the feedback and deciding what happens next.

---

## The Self-Improving Development Loop

```text
                  Goals
                    ↓
              Constraints
                    ↓
             ┌────────────┐
             │   Agent    │
             └─────┬──────┘
                   ↓
                Change
                   ↓
               Evaluate
              ↙    ↓    ↘
          Tests  Metrics  Policies
              \    |    /
               Deploy
                   ↓
              Production
                   ↓
               Telemetry
                   │
                   └──────────────→ Agent
```

The engineering problem shifts from producing each implementation to designing and governing the loop that produces implementations.

---

## Where Engineering Effort Moves

| Area | Human-Developed Software | Self-Improving Software |
|---|---:|---:|
| Implementation | High | Low–Medium |
| Specification | Medium–High | Very High |
| Architecture | High | Very High |
| Testing | High | Extremely High |
| Observability | Medium | Extremely High |
| Evaluation Infrastructure | Medium | Extremely High |
| Guardrails / Policy | Medium | Extremely High |
| Deployment Automation | High | Very High |
| Rollback / Recovery | High | Extremely High |
| Product Measurement | Medium | Very High |
| Human Code Review | Very High | Lower per individual change |
| Review of Agent / Improvement System | Low | Very High |

These weights are illustrative rather than quantitative.

---

## Key Talk Ideas

### 1. Implementation Stops Being the Scarce Resource

Historically, turning an idea into working code consumed a large amount of engineering capacity.

If implementation becomes dramatically cheaper, engineering effort does not disappear. It moves toward deciding:

- what should be built,
- what must never change,
- how success is measured,
- and how changes are proven safe.

---

### 2. Tests Change Their Role

In human-developed systems:

> Tests verify the code developers wrote.

In self-improving systems:

> Tests help define the boundary of what the software is allowed to become.

This expands testing beyond unit and integration tests into:

- security invariants,
- compatibility guarantees,
- performance budgets,
- cost budgets,
- data-access policies,
- regulatory requirements,
- and product outcome metrics.

---

### 3. Observability Becomes an Input, Not Just an Output

Traditional model:

```text
Software → Telemetry → Human
```

Self-improving model:

```text
Software → Telemetry → Agent → Software
```

Logs, metrics, traces, user behavior, cost, and business outcomes become part of the development feedback loop.

---

### 4. Architecture Defines Safe Optimization Surfaces

Good architecture is no longer only about maintainability for humans.

It also determines:

- which parts of the system may change independently,
- what permissions an agent needs,
- what contracts must remain stable,
- and how much damage an incorrect change can cause.

Modularity becomes a mechanism for bounded autonomy.

---

### 5. Code Review Becomes System Review

Today the question is often:

> Is this PR correct?

With self-improving software, the higher-level question becomes:

> Is the system that generated, tested, evaluated, and deployed this change trustworthy?

Humans increasingly review:

- evaluation suites,
- constraints,
- permissions,
- telemetry quality,
- rollback behavior,
- change boundaries,
- and agent decision-making processes.

---

## Possible Closing

> The most important engineering work in a self-improving system may not be writing the next version of the software.

> It may be defining the environment in which the software is allowed to write its next version.

Or:

> As implementation effort falls, specification and verification absorb more of the engineering effort.
