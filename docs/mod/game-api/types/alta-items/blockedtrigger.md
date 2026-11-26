---
title: "BlockedTrigger"
description: "Fires an inspector event when its ImpactTool blocks a hit with enough effectiveness, optionally only once."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BlockedTrigger

A **class** in `Root.Township`, `Alta.Impact`.

Fires an inspector event when its `ImpactTool` blocks a hit with enough effectiveness, optionally only once.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BlockedTrigger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disableafterblock" /><code>{"private bool disableAfterBlock"}</code> | <span className="api-desc">When set, `IsActive` turns off after one block.</span> |
| <Link id="m-minimumeffectiveness" /><code>{"private float minimumEffectiveness"}</code> | <span className="api-desc">Lowest hit effectiveness that counts as a block.</span> |
| <Link id="m-onblocked" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" onBlocked"}</code> | <span className="api-desc">Event invoked with the hit's effectiveness.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | <span className="api-desc">Whether blocks currently fire the event. Starts false, so something must turn it on.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the impact tool's `OnBlocked` event.</span> |
| <Link id="m-blocked" /><code>{"private void Blocked("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">If active and the hit's effectiveness is high enough, invokes `onBlocked` and maybe deactivates.</span> |

</details>
