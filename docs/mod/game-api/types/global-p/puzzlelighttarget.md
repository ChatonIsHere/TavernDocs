---
title: "PuzzleLightTarget"
description: "Light puzzle target: a puzzle condition that is complete while at least one beam hits it, shown by turning green or red."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PuzzleLightTarget

A **class** in `Root.Township`, the global namespace.

Light puzzle target: a puzzle condition that is complete while at least one beam hits it, shown by turning green or red.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PuzzleCondition`](/mod/game-api/types/global-p/puzzlecondition), [`ILightDetector`](/mod/game-api/types/global-i-l/ilightdetector)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PuzzleLightTarget()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hitcount" /><code>{"private int hitCount"}</code> | Number of beams hitting the target. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-beginhit" /><code>{"void BeginHit("}<Link to="/mod/game-api/types/global-a-b/beam">{"Beam"}</Link>{" input)"}</code> | Counts the beam, marks complete and turns green. |
| <Link id="m-endhit" /><code>{"void EndHit("}<Link to="/mod/game-api/types/global-a-b/beam">{"Beam"}</Link>{" input)"}</code> | Uncounts the beam; when none are left, marks incomplete and turns red. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Starts red. |
| <Link id="m-turngreen" /><code>{"private void TurnGreen()"}</code> | Sets the renderer colour to green. |
| <Link id="m-turnred" /><code>{"private void TurnRed()"}</code> | Sets the renderer colour to red. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Empty. |

</details>
