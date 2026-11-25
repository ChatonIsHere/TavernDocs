---
title: "EffectArea"
description: "class EffectArea in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectArea

A **class** in `Root.Township`, `Alta.Alchemy`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`BreathableArea`](/game-api/types/alta-stats-effects/breathablearea)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EffectArea()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-affecting" /><code>{"private Dictionary<Collider, "}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{"> affecting"}</code> |
| <Link id="m-effect" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" effect"}</code> |
| <Link id="m-strength" /><code>{"private float strength"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-enterobject" /><code>{"protected virtual void EnterObject("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> |
| <Link id="m-gethandler" /><code>{"protected virtual "}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" GetHandler(Collider other)"}</code> |
| <Link id="m-leaveobject" /><code>{"protected virtual void LeaveObject("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |

</details>
