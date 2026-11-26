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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveTeleporterPip()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> | <span className="api-desc">Shader property id for the fuel fill.</span> |
| <Link id="m-negativechangeprogress" /><code>{"private static readonly int _NegativeChangeProgress"}</code> | <span className="api-desc">Shader property id driven by whether the target layer is known.</span> |
| <Link id="m-animatingmaterial" /><code>{"private Material animatingMaterial"}</code> | <span className="api-desc">This pip's own copy of the status material.</span> |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | <span className="api-desc">Seconds a select fade takes (0.5 by default).</span> |
| <Link id="m-connection" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{" connection"}</code> | <span className="api-desc">The teleport connection this pip shows.</span> |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> | <span className="api-desc">Current select fade value, 0 to 1.</span> |
| <Link id="m-fade" /><code>{"private Coroutine fade"}</code> | <span className="api-desc">The running fade coroutine.</span> |
| <Link id="m-isselected" /><code>{"private bool isSelected"}</code> | <span className="api-desc">Whether the pip is selected.</span> |
| <Link id="m-selectstrength" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" selectStrength"}</code> | <span className="api-desc">Event called with the fade value, to drive the selected look.</span> |
| <Link id="m-statusrenderer" /><code>{"private Renderer statusRenderer"}</code> | <span className="api-desc">Renderer whose material shows the pip's status.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setselected" /><code>{"void SetSelected(bool isSelected)"}</code> | <span className="api-desc">Selects or deselects the pip and starts the fade if the state changed. No fade on a headless server.</span> |
| <Link id="m-setupconnection" /><code>{"void SetupConnection("}<Link to="/mod/game-api/types/alta-world-generation/caveteleportconnection">{"CaveTeleportConnection"}</Link>{" connection)"}</code> | <span className="api-desc">Binds the pip to a teleport connection, moving its listeners off any old one, and shows the current state.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Client: makes a tracked copy of the status material so this pip can animate on its own.</span> |
| <Link id="m-fade-2" /><code>{"private IEnumerator Fade() (iterator)"}</code> | <span className="api-desc">Coroutine that fades the select strength up or down over `animationDuration`, calling `selectStrength` each frame.</span> |
| <Link id="m-hastochanged" /><code>{"private void HasToChanged(bool hasTo)"}</code> | <span className="api-desc">Sets the shader's negative change value when the target layer becomes known.</span> |
| <Link id="m-ishasfueltochanged" /><code>{"private void IsHasFuelToChanged(bool hasFuelTo)"}</code> | <span className="api-desc">Sets the shader's fill value to show whether the target layer has enough fuel.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CaveTeleporterPip`:

<div className="api-used-in">

[`LevelSelector.pipPrefab`](/mod/game-api/types/alta-world-generation/levelselector#m-pipprefab), [`LevelSelector.Pips`](/mod/game-api/types/alta-world-generation/levelselector#m-pips).

</div>
