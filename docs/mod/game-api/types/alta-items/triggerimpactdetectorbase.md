---
title: "TriggerImpactDetectorBase"
description: "Base for a trigger that reacts when an ImpactTool passes through it with enough effectiveness on the chosen channels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerImpactDetectorBase

An **abstract class** in `Root.Township`, `Alta.Impact`.

Base for a trigger that reacts when an `ImpactTool` passes through it with enough effectiveness on the chosen channels.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CutableObject`](/mod/game-api/types/alta-items/cutableobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected TriggerImpactDetectorBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels"}</code> | <span className="api-desc">Impact channels checked.</span> |
| <Link id="m-impacttype" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" impactType"}</code> | <span className="api-desc">Impact type used for the trigger hit.</span> |
| <Link id="m-minefficiencytoeffect" /><code>{"private float minEfficiencyToEffect"}</code> | <span className="api-desc">Lowest efficiency that runs `HitEffect`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hiteffect" /><code>{"protected abstract void HitEffect("}<Link to="/mod/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contact)"}</code> | <span className="api-desc">Subclasses do their effect for the contact.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">For a collider on layer 0 with an `ImpactTool` rigidbody, works out a trigger hit and calls `HitEffect` if effective enough.</span> |

</details>
