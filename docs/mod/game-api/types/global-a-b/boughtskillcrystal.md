---
title: "BoughtSkillCrystal"
description: "Client visual for a bought skill crystal: glows in its progression path's colour, can be dimmed, and cross-fades its emission when the path changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoughtSkillCrystal

A **class** in `Root.Township`, the global namespace.

Client visual for a bought skill crystal: glows in its progression path's colour, can be dimmed, and cross-fades its emission when the path changes.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoughtSkillCrystal()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private static readonly int _Color"}</code> | <span className="api-desc">Shader property id for the colour.</span> |
| <Link id="m-emission" /><code>{"private static readonly int _Emission"}</code> | <span className="api-desc">Shader property id for the emission strength.</span> |
| <Link id="m-activematerial" /><code>{"private Material activeMaterial"}</code> | <span className="api-desc">Material instance used while lit.</span> |
| <Link id="m-animation" /><code>{"private Coroutine animation"}</code> | <span className="api-desc">The running fade coroutine.</span> |
| <Link id="m-inactivecolor" /><code>{"private Color inactiveColor"}</code> | <span className="api-desc">Serialized colour for the inactive state. Not read in this class.</span> |
| <Link id="m-inactivematerial" /><code>{"private Material inactiveMaterial"}</code> | <span className="api-desc">The renderer's original material, used while dimmed.</span> |
| <Link id="m-lerpduration" /><code>{"private float lerpDuration"}</code> | <span className="api-desc">Seconds a fade takes.</span> |
| <Link id="m-litemmision" /><code>{"private float litEmmision"}</code> | <span className="api-desc">Emission strength when fully lit.</span> |
| <Link id="m-targetrenderer" /><code>{"private Renderer targetRenderer"}</code> | <span className="api-desc">Renderer of the crystal.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentpath" /><code><Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" CurrentPath { get; private set; }"}</code> | <span className="api-desc">The progression path whose colour it shows.</span> |
| <Link id="m-isdimmed" /><code>{"bool IsDimmed { get; private set; }"}</code> | <span className="api-desc">Whether the crystal is dimmed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dim" /><code>{"void Dim()"}</code> | <span className="api-desc">Fades the glow out and switches to the inactive material.</span> |
| <Link id="m-setpath" /><code>{"void SetPath("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Shows the given path's colour, lighting up from dim or cross-fading from the old colour.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Keeps the original material as the inactive one and makes an instance for the lit state.</span> |
| <Link id="m-fadetocurrentpathcolor" /><code>{"private IEnumerator FadeToCurrentPathColor() (iterator)"}</code> | <span className="api-desc">Coroutine: fades the glow out, changes to the new path's colour, then fades it back in.</span> |
| <Link id="m-lerpemmision" /><code>{"private IEnumerator LerpEmmision(int targetDirection) (iterator)"}</code> | <span className="api-desc">Coroutine: fades emission towards 0 or `litEmmision`; switches to the inactive material when it ends dimmed.</span> |

</details>
