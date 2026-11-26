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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerStateSettings`](/game-api/types/alta-player/playerstatesettings)
- **Derived types** [`SpiritStateSettings.Create`](/game-api/types/alta-player/spiritstatesettings-create)
- **Nested types** [`Create`](/game-api/types/alta-player/spiritstatesettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpiritStateSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enterspiritmodesfx" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" enterSpiritModeSfx"}</code> | Backing field for `EnterSpiritModeSfx`. |
| <Link id="m-exitspiritmodesfx" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" exitSpiritModeSfx"}</code> | Backing field for `ExitSpiritModeSfx`. |
| <Link id="m-falldamagesnapthreshold" /><code>{"private float fallDamageSnapThreshold"}</code> | Backing field for `FallDamageSnapThreshold`. |
| <Link id="m-hungerstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" hungerStat"}</code> | Backing field for `HungerStat`. |
| <Link id="m-snapdistance" /><code>{"private float snapDistance"}</code> | Backing field for `SnapDistance`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enterspiritmodesfx-2" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" EnterSpiritModeSfx { get; }"}</code> | Sound played on entering spirit mode. |
| <Link id="m-exitspiritmodesfx-2" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" ExitSpiritModeSfx { get; }"}</code> | Sound played on leaving spirit mode. |
| <Link id="m-falldamagesnapthreshold-2" /><code>{"float FallDamageSnapThreshold { get; }"}</code> | Fall or command damage at or above this ends spirit mode, or sends the player back to the checkpoint during an unlock (default 2). |
| <Link id="m-hungerstat-2" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" HungerStat { get; }"}</code> | Stat turned off while in spirit mode and back on after. |
| <Link id="m-snapdistance-2" /><code>{"float SnapDistance { get; }"}</code> | Server: moving further than this from the unlock checkpoint cancels the unlock (default 300). |
| <Link id="m-statetype" /><code>{"override Type StateType { get; }"}</code> | `SpiritState`. |

## Used in

Members of other types that take, return or hold a `SpiritStateSettings`:

[`SpiritState.Settings`](/game-api/types/alta-player/spiritstate#m-settings).
