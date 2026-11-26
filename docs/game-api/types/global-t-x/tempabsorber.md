---
title: "TempAbsorber"
description: "Prototype puzzle condition that is complete while at least one temporary light emitter (such as TempLaser) hits it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TempAbsorber

A **class** in `Root.Township`, no namespace.

Prototype puzzle condition that is complete while at least one temporary light emitter (such as `TempLaser`) hits it.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`PuzzleCondition`](/game-api/types/global-p/puzzlecondition), [`ILightDetectorTemp`](/game-api/types/global-i-l/ilightdetectortemp)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TempAbsorber()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hitcount" /><code>{"private int hitCount"}</code> | Number of emitters hitting it. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-beginhit" /><code>{"void BeginHit("}<Link to="/game-api/types/global-i-l/ilightemittertemp">{"ILightEmitterTemp"}</Link>{" emitter)"}</code> | Counts a new emitter hit and sets the condition complete. |
| <Link id="m-endhit" /><code>{"void EndHit("}<Link to="/game-api/types/global-i-l/ilightemittertemp">{"ILightEmitterTemp"}</Link>{" emitter)"}</code> | Removes a hit; the condition is no longer complete when none are left. |
