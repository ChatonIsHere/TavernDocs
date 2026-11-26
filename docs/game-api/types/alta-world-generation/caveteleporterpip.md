---
title: "CaveTeleporterPip"
description: "Client visual for one cave layer in the cave teleporter's level selector: shows whether the target layer is known and fuelled, and fades in when selected."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveTeleporterPip

A **class** in `Root.Township`, `Alta.Caves`.

Client visual for one cave layer in the cave teleporter's level selector: shows whether the target layer is known and fuelled, and fades in when selected. Spawned by `LevelSelector`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleporterPip()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> | Shader property id for the fuel fill. |
| <Link id="m-negativechangeprogress" /><code>{"private static readonly int _NegativeChangeProgress"}</code> | Shader property id driven by whether the target layer is known. |
| <Link id="m-animatingmaterial" /><code>{"private Material animatingMaterial"}</code> | This pip's own copy of the status material. |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | Seconds a select fade takes (0.5 by default). |
| <Link id="m-connection" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{" connection"}</code> | The teleport connection this pip shows. |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> | Current select fade value, 0 to 1. |
| <Link id="m-fade" /><code>{"private Coroutine fade"}</code> | The running fade coroutine. |
| <Link id="m-isselected" /><code>{"private bool isSelected"}</code> | Whether the pip is selected. |
| <Link id="m-selectstrength" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" selectStrength"}</code> | Event called with the fade value, to drive the selected look. |
| <Link id="m-statusrenderer" /><code>{"private Renderer statusRenderer"}</code> | Renderer whose material shows the pip's status. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setselected" /><code>{"void SetSelected(bool isSelected)"}</code> | Selects or deselects the pip and starts the fade if the state changed. No fade on a headless server. |
| <Link id="m-setupconnection" /><code>{"void SetupConnection("}<Link to="/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{" connection)"}</code> | Binds the pip to a teleport connection, moving its listeners off any old one, and shows the current state. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Client: makes a tracked copy of the status material so this pip can animate on its own. |
| <Link id="m-fade-2" /><code>{"private IEnumerator Fade() (iterator)"}</code> | Coroutine that fades the select strength up or down over `animationDuration`, calling `selectStrength` each frame. |
| <Link id="m-hastochanged" /><code>{"private void HasToChanged(bool hasTo)"}</code> | Sets the shader's negative change value when the target layer becomes known. |
| <Link id="m-ishasfueltochanged" /><code>{"private void IsHasFuelToChanged(bool hasFuelTo)"}</code> | Sets the shader's fill value to show whether the target layer has enough fuel. |

</details>

## Used in

Members of other types that take, return or hold a `CaveTeleporterPip`:

[`LevelSelector.pipPrefab`](/game-api/types/alta-world-generation/levelselector#m-pipprefab), [`LevelSelector.Pips`](/game-api/types/alta-world-generation/levelselector#m-pips).
