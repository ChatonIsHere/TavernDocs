---
title: "TriggerImpactDetector"
description: "A trigger that raises an ImpactHit event when an ImpactTool enters it, for things that react to being hit through a trigger collider rather than a collision."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerImpactDetector

A **class** in `Root.Township`, `Alta.Impact`.

A trigger that raises an `ImpactHit` event when an `ImpactTool` enters it, for things that react to being hit through a trigger collider rather than a collision.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerImpactDetector()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels"}</code> | Impact channels the hit is checked against. |
| <Link id="m-minimumdamage" /><code>{"private float minimumDamage"}</code> | A hit must do more health damage than this to count (default -1). |
| <Link id="m-minimumeffectiveness" /><code>{"private float minimumEffectiveness"}</code> | A hit must be more effective than this to count (default 0.2). |
| <Link id="m-onhit" /><code>{"private "}<Link to="/game-api/types/alta-items/impacthitevent">{"ImpactHitEvent"}</Link>{" onHit"}</code> | Backing field for `OnHit`. |
| <Link id="m-trackedrigidbodies" /><code>{"private Dictionary<Rigidbody, HashSet<Collider>> trackedRigidbodies"}</code> | Rigidbodies inside the trigger and which of their colliders are in. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onhit-2" /><code><Link to="/game-api/types/alta-items/impacthitevent">{"ImpactHitEvent"}</Link>{" OnHit { get; }"}</code> | Event raised with the hit when a tool enters the trigger. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Forgets all rigidbodies inside the trigger, so the next entry counts as a new hit. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generatehit" /><code>{"private void GenerateHit("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, Collider collider)"}</code> | Asks the tool for its best hit on this trigger's channels and raises `onHit` if it is effective and strong enough. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider collider)"}</code> | On the first collider of a rigidbody entering, generates a hit if that rigidbody has an `ImpactTool`. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider collider)"}</code> | Stops tracking a rigidbody once all its colliders have left. |

</details>

## Used in

Members of other types that take, return or hold a `TriggerImpactDetector`:

[`Phantom.knockbackDetector`](/game-api/types/alta-intelligence/phantom#m-knockbackdetector).
