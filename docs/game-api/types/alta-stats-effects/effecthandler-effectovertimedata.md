---
title: "EffectHandler.EffectOverTimeData"
description: "class EffectHandler.EffectOverTimeData in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectHandler.EffectOverTimeData

A **class** in `Root.Township`, `Alta.Alchemy`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`EffectHandler`](/game-api/types/alta-stats-effects/effecthandler)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EffectOverTimeData(float strength, int duration, "}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effectToModify, Action<"}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{", "}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> handleUpdate)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-effectdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{" effectDefinition"}</code> |
| <Link id="m-handleupdate" /><code>{"private Action<"}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{", "}<Link to="/game-api/types/alta-stats-effects/effectdefinition">{"EffectDefinition"}</Link>{", float> handleUpdate"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-duration" /><code>{"int Duration { get; private set; }"}</code> |
| <Link id="m-strength" /><code>{"float Strength { get; private set; }"}</code> |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-handleupdate-2" /><code>{"internal void HandleUpdate("}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" effectHandler, float healthPerTime)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `EffectOverTimeData`:

[`EffectHandler.EffectOverTimeLoop`](/game-api/types/alta-stats-effects/effecthandler#m-effectovertimeloop), [`EffectHandler.unitsToRegen`](/game-api/types/alta-stats-effects/effecthandler#m-unitstoregen).
