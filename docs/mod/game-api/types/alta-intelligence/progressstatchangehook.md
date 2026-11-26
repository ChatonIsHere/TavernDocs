---
title: "ProgressStatChangeHook"
description: "A stat change hook that adds to a stat's base value along a curve while an AI action runs, one progress per agent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressStatChangeHook

A **class** in `Root.Township`, `Alta.Intelligence`.

A stat change hook that adds to a stat's base value along a curve while an AI action runs, one progress per agent. Optionally takes the added amount back when the action ends.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`StatChangeHook`](/mod/game-api/types/alta-intelligence/statchangehook)
- **Nested types** [`TopicProgress`](/mod/game-api/types/alta-intelligence/progressstatchangehook-topicprogress)
- **Documented in** [Actions and decisions](/mod/game-api/creatures/actions-and-decisions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProgressStatChangeHook()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedvalueovertime" /><code>{"private AnimationCurve addedValueOverTime"}</code> | <span className="api-desc">Curve of the total amount added to the stat over time.</span> |
| <Link id="m-isnormalizedtime" /><code>{"private bool isNormalizedTime"}</code> | <span className="api-desc">If true, curve time runs from 0 to 1 over the action's editor duration instead of in seconds.</span> |
| <Link id="m-progresses" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/progressstatchangehook-topicprogress">{"ProgressStatChangeHook.TopicProgress"}</Link>{"> progresses"}</code> | <span className="api-desc">Running progress per agent; each one updates the stat every frame.</span> |
| <Link id="m-removeonend" /><code>{"private bool removeOnEnd"}</code> | <span className="api-desc">If true, the amount added is taken off the stat again when the action ends.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-valueovertime" /><code>{"float ValueOverTime(float time)"}</code> | <span className="api-desc">Evaluates the added-value curve at a time (seconds, or normalized to the action's duration).</span> |
| <Link id="m-affectonend" /><code>{"protected override void AffectOnEnd("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | <span className="api-desc">Stops the agent's running progress, removing what it added if `removeOnEnd` is set.</span> |
| <Link id="m-affectonstart" /><code>{"protected override void AffectOnStart("}<Link to="/mod/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | <span className="api-desc">Starts a new progress for the action's agent, replacing any progress already running for it.</span> |

## Used in

Members of other types that take, return or hold a `ProgressStatChangeHook`:

<div className="api-used-in">

[`ProgressStatChangeHook.TopicProgress.hook`](/mod/game-api/types/alta-intelligence/progressstatchangehook-topicprogress#m-hook), [`ProgressStatChangeHook.TopicProgress.TopicProgress`](/mod/game-api/types/alta-intelligence/progressstatchangehook-topicprogress#m-ctor).

</div>
