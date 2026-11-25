---
title: "TriggerImpactDetector"
description: "class TriggerImpactDetector in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerImpactDetector

A **class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerImpactDetector()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels"}</code> |  |
| <Link id="m-minimumdamage" /><code>{"private float minimumDamage"}</code> |  |
| <Link id="m-minimumeffectiveness" /><code>{"private float minimumEffectiveness"}</code> |  |
| <Link id="m-onhit" /><code>{"private "}<Link to="/game-api/types/alta-items/impacthitevent">{"ImpactHitEvent"}</Link>{" onHit"}</code> |  |
| <Link id="m-trackedrigidbodies" /><code>{"private Dictionary<Rigidbody, HashSet<Collider>> trackedRigidbodies"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onhit-2" /><code><Link to="/game-api/types/alta-items/impacthitevent">{"ImpactHitEvent"}</Link>{" OnHit { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-generatehit" /><code>{"private void GenerateHit("}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool, Collider collider)"}</code> |  |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider collider)"}</code> |  |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider collider)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TriggerImpactDetector`:

[`Phantom.knockbackDetector`](/game-api/types/alta-intelligence/phantom#m-knockbackdetector).
