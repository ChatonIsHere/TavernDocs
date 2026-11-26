---
title: "JointBreakDetector"
description: "Raises an event when a Unity joint on this object breaks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JointBreakDetector

A **class** in `Root.Township`, the global namespace.

Raises an event when a Unity joint on this object breaks. Add it next to the joint to listen from elsewhere.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JointBreakDetector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-jointbreak" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/jointbreakhandler">{"JointBreakHandler"}</Link>{" JointBreak"}</code> | <span className="api-desc">Raised with this component and the break force when a joint breaks.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onjointbreak" /><code>{"private void OnJointBreak(float force)"}</code> | <span className="api-desc">Unity callback that raises `JointBreak`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `JointBreakDetector`:

<div className="api-used-in">

[`Interactor.jointBreakDetector`](/mod/game-api/types/global-i-l/interactor#m-jointbreakdetector), [`Interactor.JointBroken`](/mod/game-api/types/global-i-l/interactor#m-jointbroken), [`JointBreakHandler.BeginInvoke`](/mod/game-api/types/global-i-l/jointbreakhandler#m-begininvoke), [`JointBreakHandler.Invoke`](/mod/game-api/types/global-i-l/jointbreakhandler#m-invoke).

</div>
