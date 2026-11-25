---
title: "ProgressStatChangeHook"
description: "class ProgressStatChangeHook in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressStatChangeHook

A **class** in `Root.Township`, `Alta.Intelligence`.

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

| Member |
| --- |
| <Link id="m-addedvalueovertime" /><code>{"private AnimationCurve addedValueOverTime"}</code> |
| <Link id="m-isnormalizedtime" /><code>{"private bool isNormalizedTime"}</code> |
| <Link id="m-progresses" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/progressstatchangehook-topicprogress">{"ProgressStatChangeHook.TopicProgress"}</Link>{"> progresses"}</code> |
| <Link id="m-removeonend" /><code>{"private bool removeOnEnd"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-valueovertime" /><code>{"float ValueOverTime(float time)"}</code> |
| <Link id="m-affectonend" /><code>{"protected override void AffectOnEnd("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" finished)"}</code> |
| <Link id="m-affectonstart" /><code>{"protected override void AffectOnStart("}<Link to="/game-api/types/alta-intelligence/iactiveaction">{"IActiveAction"}</Link>{" active)"}</code> |

## Used in

Members of other types that take, return or hold a `ProgressStatChangeHook`:

[`ProgressStatChangeHook.TopicProgress.hook`](/game-api/types/alta-intelligence/progressstatchangehook-topicprogress#m-hook), [`ProgressStatChangeHook.TopicProgress.TopicProgress`](/game-api/types/alta-intelligence/progressstatchangehook-topicprogress#m-ctor).
