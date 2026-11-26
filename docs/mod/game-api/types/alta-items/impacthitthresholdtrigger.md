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
| <Link id="m-ctor" /><code>{"ImpactHitThresholdTrigger()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checksforplayers" /><code>{"private bool checksForPlayers"}</code> | Whether the player event has listeners, so the hitting player is looked up. |
| <Link id="m-detector" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" detector"}</code> | The impact detector listened to. |
| <Link id="m-minimumdamage" /><code>{"private float minimumDamage"}</code> | Lowest health damage that counts. |
| <Link id="m-minimumefficiency" /><code>{"private float minimumEfficiency"}</code> | Lowest hit effectiveness that counts. |
| <Link id="m-oneffectivelyhit" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" OnEffectivelyHit"}</code> | Event invoked with the hit point for each hit that passes. |
| <Link id="m-oneffectivelyhitbyplayer" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerevent">{"PlayerEvent"}</Link>{" onEffectivelyHitByPlayer"}</code> | Event invoked with the player who made a passing hit, from the tool or the wielder. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the detector's `Hit` event and notes whether the player event has listeners. |
| <Link id="m-onhit" /><code>{"private void OnHit("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Checks the thresholds, then invokes the player event (if used) and the position event. |

</details>
