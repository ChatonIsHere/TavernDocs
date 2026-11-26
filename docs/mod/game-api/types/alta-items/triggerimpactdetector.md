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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerImpactDetector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels"}</code> | <span className="api-desc">Impact channels the hit is checked against.</span> |
| <Link id="m-minimumdamage" /><code>{"private float minimumDamage"}</code> | <span className="api-desc">A hit must do more health damage than this to count (default -1).</span> |
| <Link id="m-minimumeffectiveness" /><code>{"private float minimumEffectiveness"}</code> | <span className="api-desc">A hit must be more effective than this to count (default 0.2).</span> |
| <Link id="m-onhit" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacthitevent">{"ImpactHitEvent"}</Link>{" onHit"}</code> | <span className="api-desc">Backing field for `OnHit`.</span> |
| <Link id="m-trackedrigidbodies" /><code>{"private Dictionary<Rigidbody, HashSet<Collider>> trackedRigidbodies"}</code> | <span className="api-desc">Rigidbodies inside the trigger and which of their colliders are in.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onhit-2" /><code><Link to="/mod/game-api/types/alta-items/impacthitevent">{"ImpactHitEvent"}</Link>{" OnHit { get; }"}</code> | <span className="api-desc">Event raised with the hit when a tool enters the trigger.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Forgets all rigidbodies inside the trigger, so the next entry counts as a new hit.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generatehit" /><code>{"private void GenerateHit("}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, Collider collider)"}</code> | <span className="api-desc">Asks the tool for its best hit on this trigger's channels and raises `onHit` if it is effective and strong enough.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider collider)"}</code> | <span className="api-desc">On the first collider of a rigidbody entering, generates a hit if that rigidbody has an `ImpactTool`.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider collider)"}</code> | <span className="api-desc">Stops tracking a rigidbody once all its colliders have left.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TriggerImpactDetector`:

<div className="api-used-in">

[`Phantom.knockbackDetector`](/mod/game-api/types/alta-intelligence/phantom#m-knockbackdetector).

</div>
