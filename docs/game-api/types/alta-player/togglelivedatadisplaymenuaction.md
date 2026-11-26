---
title: "ToggleLiveDataDisplayMenuAction"
description: "Quick access action that toggles the FPS readout on the player camera's LiveDataDisplayView."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToggleLiveDataDisplayMenuAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Quick access action that toggles the FPS readout on the player camera's `LiveDataDisplayView`. Client only.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ToggleLiveDataDisplayMenuAction()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-livedatadisplay" /><code>{"private "}<Link to="/game-api/types/alta-utilities/livedatadisplayview">{"LiveDataDisplayView"}</Link>{" liveDataDisplay"}</code> | The display found on the player camera. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | True while the live data display is enabled. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | Always true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Finds the display on the camera the first time, then toggles its FPS readout. |
