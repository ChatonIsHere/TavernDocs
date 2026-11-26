---
title: "SpiritStateSettings"
description: "Settings asset for spirit mode (SpiritState), the state used during unlock challenges."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpiritStateSettings

A **class** in `Root.Township`, `Alta.PlayerStates`.

Settings asset for spirit mode (`SpiritState`), the state used during unlock challenges.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateSettings`](/mod/game-api/types/alta-player/playerstatesettings)
- **Derived types** [`SpiritStateSettings.Create`](/mod/game-api/types/alta-player/spiritstatesettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-player/spiritstatesettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpiritStateSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enterspiritmodesfx" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" enterSpiritModeSfx"}</code> | <span className="api-desc">Backing field for `EnterSpiritModeSfx`.</span> |
| <Link id="m-exitspiritmodesfx" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" exitSpiritModeSfx"}</code> | <span className="api-desc">Backing field for `ExitSpiritModeSfx`.</span> |
| <Link id="m-falldamagesnapthreshold" /><code>{"private float fallDamageSnapThreshold"}</code> | <span className="api-desc">Backing field for `FallDamageSnapThreshold`.</span> |
| <Link id="m-hungerstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" hungerStat"}</code> | <span className="api-desc">Backing field for `HungerStat`.</span> |
| <Link id="m-snapdistance" /><code>{"private float snapDistance"}</code> | <span className="api-desc">Backing field for `SnapDistance`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enterspiritmodesfx-2" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" EnterSpiritModeSfx { get; }"}</code> | <span className="api-desc">Sound played on entering spirit mode.</span> |
| <Link id="m-exitspiritmodesfx-2" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" ExitSpiritModeSfx { get; }"}</code> | <span className="api-desc">Sound played on leaving spirit mode.</span> |
| <Link id="m-falldamagesnapthreshold-2" /><code>{"float FallDamageSnapThreshold { get; }"}</code> | <span className="api-desc">Fall or command damage at or above this ends spirit mode, or sends the player back to the checkpoint during an unlock (default 2).</span> |
| <Link id="m-hungerstat-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" HungerStat { get; }"}</code> | <span className="api-desc">Stat turned off while in spirit mode and back on after.</span> |
| <Link id="m-snapdistance-2" /><code>{"float SnapDistance { get; }"}</code> | <span className="api-desc">Server: moving further than this from the unlock checkpoint cancels the unlock (default 300).</span> |
| <Link id="m-statetype" /><code>{"override Type StateType { get; }"}</code> | <span className="api-desc">`SpiritState`.</span> |

## Used in

Members of other types that take, return or hold a `SpiritStateSettings`:

<div className="api-used-in">

[`SpiritState.Settings`](/mod/game-api/types/alta-player/spiritstate#m-settings).

</div>
