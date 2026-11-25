---
title: "TriggerImpactDetectorBase"
description: "abstract class TriggerImpactDetectorBase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerImpactDetectorBase

An **abstract class** in `Root.Township`, `Alta.Impact`.

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

| Member |
| --- |
| <Link id="m-channels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] channels"}</code> |
| <Link id="m-impacttype" /><code>{"private "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" impactType"}</code> |
| <Link id="m-minefficiencytoeffect" /><code>{"private float minEfficiencyToEffect"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-hiteffect" /><code>{"protected abstract void HitEffect("}<Link to="/game-api/types/alta-items/contactpointstructure">{"ContactPointStructure"}</Link>{" contact)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |

</details>
