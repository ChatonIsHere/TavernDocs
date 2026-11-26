---
title: "AdjustHeight"
description: "Client: moves target transforms to a fraction of the local player's head height."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AdjustHeight

A **class** in `Root.Township`, the global namespace.

Client: moves target transforms to a fraction of the local player's head height.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AdjustHeight()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-issettinglocalposition" /><code>{"private bool isSettingLocalPosition"}</code> | Whether to set the local height instead of the world height. |
| <Link id="m-minimumheight" /><code>{"private float minimumHeight"}</code> | Lowest height allowed. Defaults to 1. |
| <Link id="m-percentageofplayersheight" /><code>{"private float percentageOfPlayersHeight"}</code> | Fraction of the head height, 0 to 1. Defaults to 0.5. |
| <Link id="m-targets" /><code>{"private Transform[] targets"}</code> | Transforms to move. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updateheight" /><code>{"void UpdateHeight()"}</code> | Starts the height adjustment. |
| <Link id="m-updatepercentage" /><code>{"void UpdatePercentage(float newPercentage)"}</code> | Changes the fraction of the player's height used. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delayadjust" /><code>{"private IEnumerator DelayAdjust() (iterator)"}</code> | At the end of the frame, sets each target's height to the player's head offset times the fraction, at least `minimumHeight`. |

</details>
