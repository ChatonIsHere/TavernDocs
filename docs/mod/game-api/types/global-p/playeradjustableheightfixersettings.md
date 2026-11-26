---
title: "PlayerAdjustableHeightFixerSettings"
description: "Settings asset for the height assist accessibility option: a list of height offsets and the one the player has picked, saved in game settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerAdjustableHeightFixerSettings

A **class** in `Root.Township`, the global namespace.

Settings asset for the height assist accessibility option: a list of height offsets and the one the player has picked, saved in game settings.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerAdjustableHeightFixerSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentheight" /><code>{"private int currentHeight"}</code> | <span className="api-desc">Index of the selected height, -1 until set up.</span> |
| <Link id="m-heights" /><code>{"private float[] heights"}</code> | <span className="api-desc">The height offset options.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-candecreaseheight" /><code>{"bool CanDecreaseHeight { get; }"}</code> | <span className="api-desc">True if there is a lower height option.</span> |
| <Link id="m-canincreaseheight" /><code>{"bool CanIncreaseHeight { get; }"}</code> | <span className="api-desc">True if there is a higher height option.</span> |
| <Link id="m-height" /><code>{"float Height { get; }"}</code> | <span className="api-desc">The selected height offset.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-decreaseheight" /><code>{"void DecreaseHeight()"}</code> | <span className="api-desc">Moves to the next lower height and saves it, only when accessibility features are on.</span> |
| <Link id="m-increaseheight" /><code>{"void IncreaseHeight()"}</code> | <span className="api-desc">Moves to the next higher height and saves it, only when accessibility features are on.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-saveheight" /><code>{"private void SaveHeight()"}</code> | <span className="api-desc">Writes the selected index to the game settings and saves them.</span> |
| <Link id="m-setupheight" /><code>{"private void SetupHeight()"}</code> | <span className="api-desc">On first use, loads the index from settings or falls back to the zero height option.</span> |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings("}<Link to="/mod/game-api/types/alta-utilities/gamesettings">{"GameSettings"}</Link>{" settings)"}</code> | <span className="api-desc">On settings change, picks the saved index, or the zero height option if accessibility features are off.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerAdjustableHeightFixerSettings`:

<div className="api-used-in">

[`DecreaseHeightMenuAction.settings`](/mod/game-api/types/alta-player/decreaseheightmenuaction#m-settings), [`UpdateHeightMenuAction.settings`](/mod/game-api/types/alta-player/updateheightmenuaction#m-settings), [`PlayerHeightFixer.playerAdjustableHeightFixerSettings`](/mod/game-api/types/global-p/playerheightfixer#m-playeradjustableheightfixersettings).

</div>
