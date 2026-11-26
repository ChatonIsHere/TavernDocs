---
title: "ImpactHitThresholdTrigger"
description: "Fires inspector events when an ImpactDetector takes a hit above set effectiveness and damage, with an extra event naming the player who hit it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactHitThresholdTrigger

A **class** in `Root.Township`, `Alta.Impact`.

Fires inspector events when an `ImpactDetector` takes a hit above set effectiveness and damage, with an extra event naming the player who hit it.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactHitThresholdTrigger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checksforplayers" /><code>{"private bool checksForPlayers"}</code> | <span className="api-desc">Whether the player event has listeners, so the hitting player is looked up.</span> |
| <Link id="m-detector" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector"}</code> | <span className="api-desc">The impact detector listened to.</span> |
| <Link id="m-minimumdamage" /><code>{"private float minimumDamage"}</code> | <span className="api-desc">Lowest health damage that counts.</span> |
| <Link id="m-minimumefficiency" /><code>{"private float minimumEfficiency"}</code> | <span className="api-desc">Lowest hit effectiveness that counts.</span> |
| <Link id="m-oneffectivelyhit" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" OnEffectivelyHit"}</code> | <span className="api-desc">Event invoked with the hit point for each hit that passes.</span> |
| <Link id="m-oneffectivelyhitbyplayer" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" onEffectivelyHitByPlayer"}</code> | <span className="api-desc">Event invoked with the player who made a passing hit, from the tool or the wielder.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the detector's `Hit` event and notes whether the player event has listeners.</span> |
| <Link id="m-onhit" /><code>{"private void OnHit("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | <span className="api-desc">Checks the thresholds, then invokes the player event (if used) and the position event.</span> |

</details>
