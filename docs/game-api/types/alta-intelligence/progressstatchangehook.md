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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`StatChangeHook`](/game-api/types/alta-intelligence/statchangehook)
- **Nested types** [`TopicProgress`](/game-api/types/alta-intelligence/progressstatchangehook-topicprogress)
- **Documented in** [Actions and decisions](/game-api/creatures/actions-and-decisions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ProgressStatChangeHook()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedvalueovertime" /><code>{"private AnimationCurve addedValueOverTime"}</code> | Curve of the total amount added to the stat over time. |
| <Link id="m-isnormalizedtime" /><code>{"private bool isNormalizedTime"}</code> | If true, curve time runs from 0 to 1 over the action's editor duration instead of in seconds. |
| <Link id="m-progresses" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/progressstatchangehook-topicprogress">{"ProgressStatChangeHook.TopicProgress"}</Link>{"> progresses"}</code> | Running progress per agent; each one updates the stat every frame. |
| <Link id="m-removeonend" /><code>{"private bool removeOnEnd"}</code> | If true, the amount added is taken off the stat again when the action ends. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-valueovertime" /><code>{"float ValueOverTime(float time)"}</code> | Evaluates the added-value curve at a time (seconds, or normalized to the action's duration). |
| <Link id="m-affectonend" /><code>{"protected override void AffectOnEnd("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> | Stops the agent's running progress, removing what it added if `removeOnEnd` is set. |
| <Link id="m-affectonstart" /><code>{"protected override void AffectOnStart("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> | Starts a new progress for the action's agent, replacing any progress already running for it. |

## Used in

Members of other types that take, return or hold a `ProgressStatChangeHook`:

[`ProgressStatChangeHook.TopicProgress.hook`](/game-api/types/alta-intelligence/progressstatchangehook-topicprogress#m-hook), [`ProgressStatChangeHook.TopicProgress.TopicProgress`](/game-api/types/alta-intelligence/progressstatchangehook-topicprogress#m-ctor).
