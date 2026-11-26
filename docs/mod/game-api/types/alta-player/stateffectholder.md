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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatEffectHolder()"}</code> | <span className="api-desc">Creates a `StatEffectHolder` from `statDefinition`.</span> |
| <Link id="m-ctor-2" /><code>{"StatEffectHolder("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition)"}</code> | <span className="api-desc">Creates a `StatEffectHolder` from `statDefinition`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buff" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/statdriveneffect">{"StatDrivenEffect"}</Link>{" buff"}</code> | <span className="api-desc">Backing field for `Buff`.</span> |
| <Link id="m-debuff" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/statdriveneffect">{"StatDrivenEffect"}</Link>{" debuff"}</code> | <span className="api-desc">Backing field for `Debuff`.</span> |
| <Link id="m-statdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition"}</code> | <span className="api-desc">Backing field for `StatDefinition`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buff-2" /><code><Link to="/mod/game-api/types/alta-player/statdriveneffect">{"StatDrivenEffect"}</Link>{" Buff { get; }"}</code> | <span className="api-desc">Effect shown for a buff to the stat.</span> |
| <Link id="m-debuff-2" /><code><Link to="/mod/game-api/types/alta-player/statdriveneffect">{"StatDrivenEffect"}</Link>{" Debuff { get; }"}</code> | <span className="api-desc">Effect shown for a debuff to the stat.</span> |
| <Link id="m-statdefinition-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" { get; }"}</code> | <span className="api-desc">The stat these effects belong to.</span> |

## Used in

Members of other types that take, return or hold a `StatEffectHolder`:

<div className="api-used-in">

[`StatEffectsDefinition.statEffects`](/mod/game-api/types/alta-player/stateffectsdefinition#m-stateffects), [`StatEffectsDefinition.StatEffects`](/mod/game-api/types/alta-player/stateffectsdefinition#m-stateffects-2), [`PlayerEffectManager.StatEffects`](/mod/game-api/types/global-p/playereffectmanager#m-stateffects).

</div>
