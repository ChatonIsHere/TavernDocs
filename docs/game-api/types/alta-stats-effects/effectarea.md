---
title: "EffectArea"
description: "Trigger volume that applies a liquid's effect to health objects while they are inside it and removes it when they leave."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectArea

A **class** in `Root.Township`, `Alta.Alchemy`.

Trigger volume that applies a liquid's effect to health objects while they are inside it and removes it when they leave. Server only; on clients it turns itself off on the first trigger.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`BreathableArea`](/game-api/types/alta-stats-effects/breathablearea)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectArea()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affecting" /><code>{"private Dictionary<Collider, "}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{"> affecting"}</code> | Colliders inside the area and their effect handlers. |
| <Link id="m-effect" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" effect"}</code> | The `LiquidDefinition` whose effect data is applied. |
| <Link id="m-strength" /><code>{"private float strength"}</code> | Strength to apply on entry (and remove on exit). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enterobject" /><code>{"protected virtual void EnterObject("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | Applies the liquid's effect at `strength` to the handler that entered. |
| <Link id="m-gethandler" /><code>{"protected virtual "}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" GetHandler(Collider other)"}</code> | Finds the `EffectHandler` of the collider's `ImpactDetector` health target, or null. |
| <Link id="m-leaveobject" /><code>{"protected virtual void LeaveObject("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | Applies the effect at negative `strength` to undo it. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Undoes the effect on everything still inside and clears the list. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Server: tracks the collider and applies the effect. Client: disables the component. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Undoes the effect on a tracked collider and stops tracking it. |

</details>
