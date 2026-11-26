---
title: "StatDrivenEffect"
description: "Visuals for one side (buff or debuff) of a stat effect: a pooled effect, a curve from stat value to size, and a shell setting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatDrivenEffect

A **class** in `Root.Township`, `Alta.PlayerEffects`.

Visuals for one side (buff or debuff) of a stat effect: a pooled effect, a curve from stat value to size, and a shell setting.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatDrivenEffect()"}</code> | Creates a `StatDrivenEffect` from `isBuff`. |
| <Link id="m-ctor-2" /><code>{"StatDrivenEffect(bool isBuff)"}</code> | Creates a `StatDrivenEffect` from `isBuff`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectDefinition"}</code> | Backing field for `EffectDefinition`. |
| <Link id="m-shieldeffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/stateffectshellsetting">{"StatEffectShellSetting"}</Link>{" shieldEffect"}</code> | Backing field for `ShieldEffect`. |
| <Link id="m-valuetosizecurve" /><code>{"private AnimationCurve valueToSizeCurve"}</code> | Backing field for `ValueToSizeCurve`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-effectdefinition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" EffectDefinition { get; }"}</code> | Pooled effect spawned for the stat effect. |
| <Link id="m-shieldeffect-2" /><code><Link to="/mod/game-api/types/alta-player/stateffectshellsetting">{"StatEffectShellSetting"}</Link>{" ShieldEffect { get; }"}</code> | Shell setting applied over the player. |
| <Link id="m-valuetosizecurve-2" /><code>{"AnimationCurve ValueToSizeCurve { get; }"}</code> | Maps the stat's value to the effect's size. |

## Used in

Members of other types that take, return or hold a `StatDrivenEffect`:

[`StatEffectHolder.buff`](/mod/game-api/types/alta-player/stateffectholder#m-buff), [`StatEffectHolder.Buff`](/mod/game-api/types/alta-player/stateffectholder#m-buff-2), [`StatEffectHolder.debuff`](/mod/game-api/types/alta-player/stateffectholder#m-debuff), [`StatEffectHolder.Debuff`](/mod/game-api/types/alta-player/stateffectholder#m-debuff-2), [`PlayerEffectManager.StatEffectApplication.statDrive`](/mod/game-api/types/global-p/playereffectmanager-stateffectapplication#m-statdrive), [`PlayerEffectManager.StatEffectApplication.StatEffectApplication`](/mod/game-api/types/global-p/playereffectmanager-stateffectapplication#m-ctor).
