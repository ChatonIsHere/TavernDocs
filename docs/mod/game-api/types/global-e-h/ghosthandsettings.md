---
title: "GhostHandSettings"
description: "Settings asset for ghost hands: whether they fade and how alpha changes with distance from the real hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GhostHandSettings

A **class** in `Root.Township`, the global namespace.

Settings asset for ghost hands: whether they fade and how alpha changes with distance from the real hand.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`GhostHandSettings.Create`](/mod/game-api/types/global-e-h/ghosthandsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/ghosthandsettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GhostHandSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alphabydistance" /><code>{"private AnimationCurve alphaByDistance"}</code> | <span className="api-desc">Backing field for `AlphaByDistance`.</span> |
| <Link id="m-isfadingalpha" /><code>{"private bool isFadingAlpha"}</code> | <span className="api-desc">Backing field for `IsFadingAlpha`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alphabydistance-2" /><code>{"AnimationCurve AlphaByDistance { get; }"}</code> | <span className="api-desc">Curve from distance to ghost hand alpha.</span> |
| <Link id="m-isfadingalpha-2" /><code>{"bool IsFadingAlpha { get; }"}</code> | <span className="api-desc">Whether ghost hand alpha updates with distance. `CharacterIKController` restores this after showing hands fully.</span> |

## Used in

Members of other types that take, return or hold a `GhostHandSettings`:

<div className="api-used-in">

[`GhostHandController.Settings`](/mod/game-api/types/alta-player/ghosthandcontroller#m-settings), [`PlayerControllerSettings.ghostHandSettings`](/mod/game-api/types/alta-player/playercontrollersettings#m-ghosthandsettings), [`PlayerControllerSettings.GhostHandSettings`](/mod/game-api/types/alta-player/playercontrollersettings#m-ghosthandsettings-2).

</div>
