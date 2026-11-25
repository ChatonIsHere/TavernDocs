---
title: "CaveTeleporterPip"
description: "class CaveTeleporterPip in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleporterPip

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CaveTeleporterPip()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> |
| <Link id="m-negativechangeprogress" /><code>{"private static readonly int _NegativeChangeProgress"}</code> |
| <Link id="m-animatingmaterial" /><code>{"private Material animatingMaterial"}</code> |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> |
| <Link id="m-connection" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{" connection"}</code> |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> |
| <Link id="m-fade" /><code>{"private Coroutine fade"}</code> |
| <Link id="m-isselected" /><code>{"private bool isSelected"}</code> |
| <Link id="m-selectstrength" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" selectStrength"}</code> |
| <Link id="m-statusrenderer" /><code>{"private Renderer statusRenderer"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-setselected" /><code>{"void SetSelected(bool isSelected)"}</code> |
| <Link id="m-setupconnection" /><code>{"void SetupConnection("}<Link to="/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{" connection)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-fade-2" /><code>{"private IEnumerator Fade() (iterator)"}</code> |
| <Link id="m-hastochanged" /><code>{"private void HasToChanged(bool hasTo)"}</code> |
| <Link id="m-ishasfueltochanged" /><code>{"private void IsHasFuelToChanged(bool hasFuelTo)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CaveTeleporterPip`:

[`LevelSelector.pipPrefab`](/game-api/types/alta-world-generation/levelselector#m-pipprefab), [`LevelSelector.Pips`](/game-api/types/alta-world-generation/levelselector#m-pips).
