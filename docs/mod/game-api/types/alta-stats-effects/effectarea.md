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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`BreathableArea`](/mod/game-api/types/alta-stats-effects/breathablearea)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectArea()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affecting" /><code>{"private Dictionary<Collider, "}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{"> affecting"}</code> | <span className="api-desc">Colliders inside the area and their effect handlers.</span> |
| <Link id="m-effect" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" effect"}</code> | <span className="api-desc">The `LiquidDefinition` whose effect data is applied.</span> |
| <Link id="m-strength" /><code>{"private float strength"}</code> | <span className="api-desc">Strength to apply on entry (and remove on exit).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enterobject" /><code>{"protected virtual void EnterObject("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Applies the liquid's effect at `strength` to the handler that entered.</span> |
| <Link id="m-gethandler" /><code>{"protected virtual "}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" GetHandler(Collider other)"}</code> | <span className="api-desc">Finds the `EffectHandler` of the collider's `ImpactDetector` health target, or null.</span> |
| <Link id="m-leaveobject" /><code>{"protected virtual void LeaveObject("}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Applies the effect at negative `strength` to undo it.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Undoes the effect on everything still inside and clears the list.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Server: tracks the collider and applies the effect. Client: disables the component.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Undoes the effect on a tracked collider and stops tracking it.</span> |

</details>
