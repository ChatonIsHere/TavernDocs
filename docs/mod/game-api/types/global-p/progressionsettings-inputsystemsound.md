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
| <Link id="m-ctor" /><code>{"InputSystemSound()"}</code> | <span className="api-desc">Creates a `ProgressionSettings.InputSystemSound` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activated" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" activated"}</code> | <span className="api-desc">Backing field for `Activated`.</span> |
| <Link id="m-deactivated" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" deactivated"}</code> | <span className="api-desc">Backing field for `Deactivated`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activated-2" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" Activated { get; }"}</code> | <span className="api-desc">Sound played when the input turns on.</span> |
| <Link id="m-deactivated-2" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" Deactivated { get; }"}</code> | <span className="api-desc">Sound played when the input turns off.</span> |

## Used in

Members of other types that take, return or hold a `InputSystemSound`:

<div className="api-used-in">

[`ProgressionSettings.powerStrikeInput`](/mod/game-api/types/global-p/progressionsettings#m-powerstrikeinput), [`ProgressionSettings.raiseHandInput`](/mod/game-api/types/global-p/progressionsettings#m-raisehandinput).

</div>
