---
title: "PlayerAdjustableHeightFixerSettings"
description: "class PlayerAdjustableHeightFixerSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerAdjustableHeightFixerSettings

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerAdjustableHeightFixerSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentheight" /><code>{"private int currentHeight"}</code> |  |
| <Link id="m-heights" /><code>{"private float[] heights"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-candecreaseheight" /><code>{"bool CanDecreaseHeight { get; }"}</code> |  |
| <Link id="m-canincreaseheight" /><code>{"bool CanIncreaseHeight { get; }"}</code> |  |
| <Link id="m-height" /><code>{"float Height { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-decreaseheight" /><code>{"void DecreaseHeight()"}</code> |  |
| <Link id="m-increaseheight" /><code>{"void IncreaseHeight()"}</code> |  |
| <Link id="m-saveheight" /><code>{"private void SaveHeight()"}</code> |  |
| <Link id="m-setupheight" /><code>{"private void SetupHeight()"}</code> |  |
| <Link id="m-updatesettings" /><code>{"private void UpdateSettings("}<Link to="/game-api/types/alta-utilities/gamesettings">{"GameSettings"}</Link>{" settings)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerAdjustableHeightFixerSettings`:

[`DecreaseHeightMenuAction.settings`](/game-api/types/alta-player/decreaseheightmenuaction#m-settings), [`UpdateHeightMenuAction.settings`](/game-api/types/alta-player/updateheightmenuaction#m-settings), [`PlayerHeightFixer.playerAdjustableHeightFixerSettings`](/game-api/types/global-p/playerheightfixer#m-playeradjustableheightfixersettings).
