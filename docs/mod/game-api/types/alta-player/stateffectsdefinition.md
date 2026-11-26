---
title: "StatEffectsDefinition"
description: "Asset listing the stat effects (StatEffectHolder) the game knows about."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatEffectsDefinition

A **class** in `Root.Township`, `Alta.PlayerEffects`.

Asset listing the stat effects (`StatEffectHolder`) the game knows about. `PlayerEffectManager` holds one.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`StatEffectsDefinition.Create`](/mod/game-api/types/alta-player/stateffectsdefinition-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-player/stateffectsdefinition-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatEffectsDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-stateffects" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/stateffectholder">{"StatEffectHolder"}</Link>{"> statEffects"}</code> | Backing field for `StatEffects`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-stateffects-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-player/stateffectholder">{"StatEffectHolder"}</Link>{"> StatEffects { get; }"}</code> | The stat effect entries. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Empty. |

</details>

## Used in

Members of other types that take, return or hold a `StatEffectsDefinition`:

[`PlayerEffectManager.statEffectsDefinition`](/mod/game-api/types/global-p/playereffectmanager#m-stateffectsdefinition).
