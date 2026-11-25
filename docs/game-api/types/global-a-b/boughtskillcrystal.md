---
title: "BoughtSkillCrystal"
description: "class BoughtSkillCrystal in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoughtSkillCrystal

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BoughtSkillCrystal()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-color" /><code>{"private static readonly int _Color"}</code> |
| <Link id="m-emission" /><code>{"private static readonly int _Emission"}</code> |
| <Link id="m-activematerial" /><code>{"private Material activeMaterial"}</code> |
| <Link id="m-animation" /><code>{"private Coroutine animation"}</code> |
| <Link id="m-inactivecolor" /><code>{"private Color inactiveColor"}</code> |
| <Link id="m-inactivematerial" /><code>{"private Material inactiveMaterial"}</code> |
| <Link id="m-lerpduration" /><code>{"private float lerpDuration"}</code> |
| <Link id="m-litemmision" /><code>{"private float litEmmision"}</code> |
| <Link id="m-targetrenderer" /><code>{"private Renderer targetRenderer"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-currentpath" /><code><Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" CurrentPath { get; private set; }"}</code> |
| <Link id="m-isdimmed" /><code>{"bool IsDimmed { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-dim" /><code>{"void Dim()"}</code> |
| <Link id="m-setpath" /><code>{"void SetPath("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-fadetocurrentpathcolor" /><code>{"private IEnumerator FadeToCurrentPathColor() (iterator)"}</code> |
| <Link id="m-lerpemmision" /><code>{"private IEnumerator LerpEmmision(int targetDirection) (iterator)"}</code> |

</details>
