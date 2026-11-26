---
title: "BoughtSkillCrystal"
description: "Client visual for a bought skill crystal: glows in its progression path's colour, can be dimmed, and cross-fades its emission when the path changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoughtSkillCrystal

A **class** in `Root.Township`, no namespace.

Client visual for a bought skill crystal: glows in its progression path's colour, can be dimmed, and cross-fades its emission when the path changes.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoughtSkillCrystal()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private static readonly int _Color"}</code> | Shader property id for the colour. |
| <Link id="m-emission" /><code>{"private static readonly int _Emission"}</code> | Shader property id for the emission strength. |
| <Link id="m-activematerial" /><code>{"private Material activeMaterial"}</code> | Material instance used while lit. |
| <Link id="m-animation" /><code>{"private Coroutine animation"}</code> | The running fade coroutine. |
| <Link id="m-inactivecolor" /><code>{"private Color inactiveColor"}</code> | Serialized colour for the inactive state. Not read in this class. |
| <Link id="m-inactivematerial" /><code>{"private Material inactiveMaterial"}</code> | The renderer's original material, used while dimmed. |
| <Link id="m-lerpduration" /><code>{"private float lerpDuration"}</code> | Seconds a fade takes. |
| <Link id="m-litemmision" /><code>{"private float litEmmision"}</code> | Emission strength when fully lit. |
| <Link id="m-targetrenderer" /><code>{"private Renderer targetRenderer"}</code> | Renderer of the crystal. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentpath" /><code><Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" CurrentPath { get; private set; }"}</code> | The progression path whose colour it shows. |
| <Link id="m-isdimmed" /><code>{"bool IsDimmed { get; private set; }"}</code> | Whether the crystal is dimmed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dim" /><code>{"void Dim()"}</code> | Fades the glow out and switches to the inactive material. |
| <Link id="m-setpath" /><code>{"void SetPath("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Shows the given path's colour, lighting up from dim or cross-fading from the old colour. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Keeps the original material as the inactive one and makes an instance for the lit state. |
| <Link id="m-fadetocurrentpathcolor" /><code>{"private IEnumerator FadeToCurrentPathColor() (iterator)"}</code> | Coroutine: fades the glow out, changes to the new path's colour, then fades it back in. |
| <Link id="m-lerpemmision" /><code>{"private IEnumerator LerpEmmision(int targetDirection) (iterator)"}</code> | Coroutine: fades emission towards 0 or `litEmmision`; switches to the inactive material when it ends dimmed. |

</details>
