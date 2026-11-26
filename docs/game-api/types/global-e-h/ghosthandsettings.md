---
title: "GhostHandSettings"
description: "Settings asset for ghost hands: whether they fade and how alpha changes with distance from the real hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GhostHandSettings

A **class** in `Root.Township`, no namespace.

Settings asset for ghost hands: whether they fade and how alpha changes with distance from the real hand.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`GhostHandSettings.Create`](/game-api/types/global-e-h/ghosthandsettings-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/ghosthandsettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GhostHandSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alphabydistance" /><code>{"private AnimationCurve alphaByDistance"}</code> | Backing field for `AlphaByDistance`. |
| <Link id="m-isfadingalpha" /><code>{"private bool isFadingAlpha"}</code> | Backing field for `IsFadingAlpha`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alphabydistance-2" /><code>{"AnimationCurve AlphaByDistance { get; }"}</code> | Curve from distance to ghost hand alpha. |
| <Link id="m-isfadingalpha-2" /><code>{"bool IsFadingAlpha { get; }"}</code> | Whether ghost hand alpha updates with distance. `CharacterIKController` restores this after showing hands fully. |

## Used in

Members of other types that take, return or hold a `GhostHandSettings`:

[`GhostHandController.Settings`](/game-api/types/alta-player/ghosthandcontroller#m-settings), [`PlayerControllerSettings.ghostHandSettings`](/game-api/types/alta-player/playercontrollersettings#m-ghosthandsettings), [`PlayerControllerSettings.GhostHandSettings`](/game-api/types/alta-player/playercontrollersettings#m-ghosthandsettings-2).
