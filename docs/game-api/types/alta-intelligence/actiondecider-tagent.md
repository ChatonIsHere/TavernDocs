---
title: "ActionDecider<TAgent>"
description: "Scores an AI agent's possible actions and targets and picks the best one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionDecider&lt;TAgent&gt;

A **class** in `Root.Township`, `Alta.Intelligence`.

Scores an AI agent's possible actions and targets and picks the best one. Each agent holds one; it runs where the AI runs (the server).

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`IActionDecider`](/game-api/types/alta-intelligence/iactiondecider)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionDecider(TAgent agent)"}</code> | Creates an `ActionDecider` from `agent`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private TAgent agent"}</code> | The agent this decider works for. |
| <Link id="m-debugger" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/iagentdebugger">{"IAgentDebugger"}</Link>{" debugger"}</code> | The agent as a debugger. |
| <Link id="m-maxpreferredmultiplier" /><code>{"private const float MaxPreferredMultiplier"}</code> | The most the preferred score can multiply an action's weight by (2). The code uses the literal 2 instead. |
| <Link id="m-possibletargethashset" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> possibleTargetHashSet"}</code> | Set copy of `possibleTargets` for quick duplicate checks. |
| <Link id="m-possibletargets" /><code>{"private List<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> possibleTargets"}</code> | Backing list for `PossibleTargets`, best target first. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentaction" /><code><Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TAgent> CurrentAction { get; private set; }"}</code> | The action and target the decider last settled on. |
| <Link id="m-possibilityset" /><code><Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<TAgent> PossibilitySet { get; set; }"}</code> | The set of base and target actions the agent can choose from. Nothing is chosen while it is null. |
| <Link id="m-possibletargets-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> PossibleTargets { get; }"}</code> | The targets the agent is considering. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addtarget" /><code>{"bool AddTarget("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Adds a target the agent can act on. Returns false if it was already there. |
| <Link id="m-getbestaction" /><code><Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TAgent> GetBestAction(int minimumPriority, float minimumWeighting)"}</code> | Drops targets that no longer exist, then returns the best scoring base or target action above the given priority and weight. Moves the chosen target to the front. |
| <Link id="m-removetarget" /><code>{"bool RemoveTarget("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Removes a target. Returns false if it was not there. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatepreferred" /><code>{"private float CalculatePreferred("}<Link to="/game-api/types/alta-intelligence/targetresult-result">{"TargetResult.Result"}</Link>{" result, List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> operations, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Sums each preferred operation's score times its weight. |
| <Link id="m-calculaterequired" /><code>{"private bool CalculateRequired("}<Link to="/game-api/types/alta-intelligence/targetresult-result">{"TargetResult.Result"}</Link>{" result, ref float resultValue, List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> operations, float min, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Multiplies the score by each required operation; fails if any returns below zero or the score drops to the minimum. |
| <Link id="m-getbestbaseaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TAgent> GetBestBaseAction(int minimumPriority, float minimumWeighting)"}</code> | Scores the actions that need no target and returns the best. |
| <Link id="m-getbesttargetaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TAgent> GetBestTargetAction("}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TAgent> best, int minimumPriority, out int bestIndex)"}</code> | Scores each target action against each live target and returns the best, if it beats the given base action. |
| <Link id="m-preferredscoretomultiplier" /><code>{"private float PreferredScoreToMultiplier(float score)"}</code> | Turns a preferred score into a multiplier by adding 1 and clamping to 0..2. |

</details>

## Used in

Members of other types that take, return or hold a `ActionDecider&lt;TAgent>`:

[`Agent<TThis>.ActionDecider`](/game-api/types/alta-intelligence/agent-tthis#m-actiondecider).
