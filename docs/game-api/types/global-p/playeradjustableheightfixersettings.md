---
title: "PlayerAdjustableHeightFixerSettings"
description: "Settings asset for the height assist accessibility option: a list of height offsets and the one the player has picked, saved in game settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerAdjustableHeightFixerSettings

A **class** in `Root.Township`, no namespace.

Settings asset for the height assist accessibility option: a list of height offsets and the one the player has picked, saved in game settings.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerAdjustableHeightFixerSettings()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentheight" /><code>{"private int currentHeight"}</code> | Index of the selected height, -1 until set up. |
| <Link id="m-heights" /><code>{"private float[] heights"}</code> | The height offset options. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-candecreaseheight" /><code>{"bool CanDecreaseHeight { get; }"}</code> | True if there is a lower height option. |
| <Link id="m-canincreaseheight" /><code>{"bool CanIncreaseHeight { get; }"}</code> | True if there is a higher height option. |
| <Link id="m-height" /><code>{"float Height { get; }"}</code> | The selected height offset. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-decreaseheight" /><code>{"void DecreaseHeight()"}</code> | Moves to the next lower height and saves it, only when accessibility features are on. |
| <Link id="m-increaseheight" /><code>{"void IncreaseHeight()"}</code> | Moves to the next higher height and saves it, only when accessibility features are on. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-saveheight" /><code>{"private void SaveHeight()"}</code> | Writes the selected index to the game settings and saves them. |
| <Link id="m-setupheight" /><code>{"private void SetupHeight()"}</code> | On first use, loads the index from settings or falls back to the zero height option. |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings("}<Link to="/game-api/types/alta-utilities/gamesettings">{"GameSettings"}</Link>{" settings)"}</code> | On settings change, picks the saved index, or the zero height option if accessibility features are off. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerAdjustableHeightFixerSettings`:

[`DecreaseHeightMenuAction.settings`](/game-api/types/alta-player/decreaseheightmenuaction#m-settings), [`UpdateHeightMenuAction.settings`](/game-api/types/alta-player/updateheightmenuaction#m-settings), [`PlayerHeightFixer.playerAdjustableHeightFixerSettings`](/game-api/types/global-p/playerheightfixer#m-playeradjustableheightfixersettings).
