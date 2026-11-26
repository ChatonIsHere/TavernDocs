---
title: "ProgressionSettings.InputSystemSound"
description: "Pair of sound sets for a skill input turning on and off, set in ProgressionSettings for power strike and raise hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProgressionSettings.InputSystemSound

A **class** in `Root.Township`, the global namespace.

Pair of sound sets for a skill input turning on and off, set in `ProgressionSettings` for power strike and raise hand.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`ProgressionSettings`](/mod/game-api/types/global-p/progressionsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InputSystemSound()"}</code> | Creates a `ProgressionSettings.InputSystemSound` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activated" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" activated"}</code> | Backing field for `Activated`. |
| <Link id="m-deactivated" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" deactivated"}</code> | Backing field for `Deactivated`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activated-2" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" Activated { get; }"}</code> | Sound played when the input turns on. |
| <Link id="m-deactivated-2" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" Deactivated { get; }"}</code> | Sound played when the input turns off. |

## Used in

Members of other types that take, return or hold a `InputSystemSound`:

[`ProgressionSettings.powerStrikeInput`](/mod/game-api/types/global-p/progressionsettings#m-powerstrikeinput), [`ProgressionSettings.raiseHandInput`](/mod/game-api/types/global-p/progressionsettings#m-raisehandinput).
