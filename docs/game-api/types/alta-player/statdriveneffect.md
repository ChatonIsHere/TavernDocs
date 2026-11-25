---
title: "StatDrivenEffect"
description: "class StatDrivenEffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatDrivenEffect

A **class** in `Root.Township`, `Alta.PlayerEffects`.

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatDrivenEffect()"}</code> |
| <Link id="m-ctor-2" /><code>{"StatDrivenEffect(bool isBuff)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-effectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectDefinition"}</code> |
| <Link id="m-shieldeffect" /><code>{"private "}<Link to="/game-api/types/alta-player/stateffectshellsetting">{"StatEffectShellSetting"}</Link>{" shieldEffect"}</code> |
| <Link id="m-valuetosizecurve" /><code>{"private AnimationCurve valueToSizeCurve"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-effectdefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" EffectDefinition { get; }"}</code> |
| <Link id="m-shieldeffect-2" /><code><Link to="/game-api/types/alta-player/stateffectshellsetting">{"StatEffectShellSetting"}</Link>{" ShieldEffect { get; }"}</code> |
| <Link id="m-valuetosizecurve-2" /><code>{"AnimationCurve ValueToSizeCurve { get; }"}</code> |

## Used in

Members of other types that take, return or hold a `StatDrivenEffect`:

[`StatEffectHolder.buff`](/game-api/types/alta-player/stateffectholder#m-buff), [`StatEffectHolder.Buff`](/game-api/types/alta-player/stateffectholder#m-buff-2), [`StatEffectHolder.debuff`](/game-api/types/alta-player/stateffectholder#m-debuff), [`StatEffectHolder.Debuff`](/game-api/types/alta-player/stateffectholder#m-debuff-2), [`PlayerEffectManager.StatEffectApplication.statDrive`](/game-api/types/global-p/playereffectmanager-stateffectapplication#m-statdrive), [`PlayerEffectManager.StatEffectApplication.StatEffectApplication`](/game-api/types/global-p/playereffectmanager-stateffectapplication#m-ctor).
