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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CutableObject`](/game-api/types/alta-items/cutableobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected TriggerImpactDetectorBase()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels"}</code> | Impact channels checked. |
| <Link id="m-impacttype" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" impactType"}</code> | Impact type used for the trigger hit. |
| <Link id="m-minefficiencytoeffect" /><code>{"private float minEfficiencyToEffect"}</code> | Lowest efficiency that runs `HitEffect`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hiteffect" /><code>{"protected abstract void HitEffect("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contact)"}</code> | Subclasses do their effect for the contact. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | For a collider on layer 0 with an `ImpactTool` rigidbody, works out a trigger hit and calls `HitEffect` if effective enough. |

</details>
