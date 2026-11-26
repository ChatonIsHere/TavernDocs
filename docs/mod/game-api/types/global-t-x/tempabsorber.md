---
title: "TempAbsorber"
description: "Prototype puzzle condition that is complete while at least one temporary light emitter (such as TempLaser) hits it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TempAbsorber

A **class** in `Root.Township`, the global namespace.

Prototype puzzle condition that is complete while at least one temporary light emitter (such as `TempLaser`) hits it.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`PuzzleCondition`](/mod/game-api/types/global-p/puzzlecondition), [`ILightDetectorTemp`](/mod/game-api/types/global-i-l/ilightdetectortemp)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TempAbsorber()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hitcount" /><code>{"private int hitCount"}</code> | <span className="api-desc">Number of emitters hitting it.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-beginhit" /><code>{"void BeginHit("}<Link to="/mod/game-api/types/global-i-l/ilightemittertemp">{"ILightEmitterTemp"}</Link>{" emitter)"}</code> | <span className="api-desc">Counts a new emitter hit and sets the condition complete.</span> |
| <Link id="m-endhit" /><code>{"void EndHit("}<Link to="/mod/game-api/types/global-i-l/ilightemittertemp">{"ILightEmitterTemp"}</Link>{" emitter)"}</code> | <span className="api-desc">Removes a hit; the condition is no longer complete when none are left.</span> |
