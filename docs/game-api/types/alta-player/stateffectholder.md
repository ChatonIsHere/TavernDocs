---
title: "StatEffectHolder"
description: "Pairs a stat with the visual effects shown when it goes up (buff) or down (debuff)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatEffectHolder

A **class** in `Root.Township`, `Alta.PlayerEffects`.

Pairs a stat with the visual effects shown when it goes up (buff) or down (debuff). Listed in `StatEffectsDefinition.StatEffects` and read by `PlayerEffectManager`.

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatEffectHolder()"}</code> | Creates a `StatEffectHolder` from `statDefinition`. |
| <Link id="m-ctor-2" /><code>{"StatEffectHolder("}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition)"}</code> | Creates a `StatEffectHolder` from `statDefinition`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buff" /><code>{"private "}<Link to="/game-api/types/alta-player/statdriveneffect">{"StatDrivenEffect"}</Link>{" buff"}</code> | Backing field for `Buff`. |
| <Link id="m-debuff" /><code>{"private "}<Link to="/game-api/types/alta-player/statdriveneffect">{"StatDrivenEffect"}</Link>{" debuff"}</code> | Backing field for `Debuff`. |
| <Link id="m-statdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition"}</code> | Backing field for `StatDefinition`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buff-2" /><code><Link to="/game-api/types/alta-player/statdriveneffect">{"StatDrivenEffect"}</Link>{" Buff { get; }"}</code> | Effect shown for a buff to the stat. |
| <Link id="m-debuff-2" /><code><Link to="/game-api/types/alta-player/statdriveneffect">{"StatDrivenEffect"}</Link>{" Debuff { get; }"}</code> | Effect shown for a debuff to the stat. |
| <Link id="m-statdefinition-2" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" { get; }"}</code> | The stat these effects belong to. |

## Used in

Members of other types that take, return or hold a `StatEffectHolder`:

[`StatEffectsDefinition.statEffects`](/game-api/types/alta-player/stateffectsdefinition#m-stateffects), [`StatEffectsDefinition.StatEffects`](/game-api/types/alta-player/stateffectsdefinition#m-stateffects-2), [`PlayerEffectManager.StatEffects`](/game-api/types/global-p/playereffectmanager#m-stateffects).
