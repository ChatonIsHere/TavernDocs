---
title: "ActionDecider<TAgent>"
description: "Holds the possible targets and the current set (PossibilitySet), and picks the best action."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionDecider&lt;TAgent&gt;

A **class** in `Root.Township`, `Alta.Intelligence`.

Holds the possible targets and the current set (`PossibilitySet`), and picks the best action.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`IActionDecider`](/game-api/types/alta-intelligence/iactiondecider)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionDecider(TAgent agent)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private TAgent agent"}</code> |  |
| <Link id="m-debugger" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/iagentdebugger">{"IAgentDebugger"}</Link>{" debugger"}</code> |  |
| <Link id="m-maxpreferredmultiplier" /><code>{"private const float MaxPreferredMultiplier"}</code> |  |
| <Link id="m-possibletargethashset" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> possibleTargetHashSet"}</code> |  |
| <Link id="m-possibletargets" /><code>{"private List<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> possibleTargets"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentaction" /><code><Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TAgent> CurrentAction { get; private set; }"}</code> |  |
| <Link id="m-possibilityset" /><code><Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<TAgent> PossibilitySet { get; set; }"}</code> |  |
| <Link id="m-possibletargets-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{"> PossibleTargets { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addtarget" /><code>{"bool AddTarget("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |  |
| <Link id="m-getbestaction" /><code><Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TAgent> GetBestAction(int minimumPriority, float minimumWeighting)"}</code> |  |
| <Link id="m-removetarget" /><code>{"bool RemoveTarget("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |  |
| <Link id="m-calculatepreferred" /><code>{"private float CalculatePreferred("}<Link to="/game-api/types/alta-intelligence/targetresult-result">{"TargetResult.Result"}</Link>{" result, List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> operations, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |  |
| <Link id="m-calculaterequired" /><code>{"private bool CalculateRequired("}<Link to="/game-api/types/alta-intelligence/targetresult-result">{"TargetResult.Result"}</Link>{" result, ref float resultValue, List<"}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{"> operations, float min, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |  |
| <Link id="m-getbestbaseaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TAgent> GetBestBaseAction(int minimumPriority, float minimumWeighting)"}</code> |  |
| <Link id="m-getbesttargetaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TAgent> GetBestTargetAction("}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<TAgent> best, int minimumPriority, out int bestIndex)"}</code> |  |
| <Link id="m-preferredscoretomultiplier" /><code>{"private float PreferredScoreToMultiplier(float score)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ActionDecider&lt;TAgent>`:

[`Agent<TThis>.ActionDecider`](/game-api/types/alta-intelligence/agent-tthis#m-actiondecider).
