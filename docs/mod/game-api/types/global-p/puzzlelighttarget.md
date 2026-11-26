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
| <Link id="m-ctor" /><code>{"PuzzleLightTarget()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hitcount" /><code>{"private int hitCount"}</code> | <span className="api-desc">Number of beams hitting the target.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-beginhit" /><code>{"void BeginHit("}<Link to="/mod/game-api/types/global-a-b/beam">{"Beam"}</Link>{" input)"}</code> | <span className="api-desc">Counts the beam, marks complete and turns green.</span> |
| <Link id="m-endhit" /><code>{"void EndHit("}<Link to="/mod/game-api/types/global-a-b/beam">{"Beam"}</Link>{" input)"}</code> | <span className="api-desc">Uncounts the beam; when none are left, marks incomplete and turns red.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Starts red.</span> |
| <Link id="m-turngreen" /><code>{"private void TurnGreen()"}</code> | <span className="api-desc">Sets the renderer colour to green.</span> |
| <Link id="m-turnred" /><code>{"private void TurnRed()"}</code> | <span className="api-desc">Sets the renderer colour to red.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Empty.</span> |

</details>
