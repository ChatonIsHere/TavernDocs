---
title: "SkillOrbHolder"
description: "class SkillOrbHolder in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbHolder

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SkillOrbHolder()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> |
| <Link id="m-colorlerp" /><code>{"private "}<Link to="/game-api/types/global-c-d/colorlerp">{"ColorLerp"}</Link>{" colorLerp"}</code> |
| <Link id="m-hasskill" /><code>{"private bool hasSkill"}</code> |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> |
| <Link id="m-rotators" /><code>{"private "}<Link to="/game-api/types/global-q-r/quaternionrotationslerp">{"QuaternionRotationSlerp"}</Link>{"[] rotators"}</code> |
| <Link id="m-runningcoroutine" /><code>{"private Coroutine runningcoroutine"}</code> |
| <Link id="m-value" /><code>{"private float value"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-close" /><code>{"void Close(bool isFillingSkill)"}</code> |
| <Link id="m-open" /><code>{"void Open()"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-animate" /><code>{"private IEnumerator Animate() (iterator)"}</code> |
| <Link id="m-animatecoloronly" /><code>{"private IEnumerator AnimateColorOnly(bool isLittingUp) (iterator)"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-setvalue" /><code>{"private void SetValue(bool isOpen)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `SkillOrbHolder`:

[`BoughtSkillVisualizer.holderPrefab`](/game-api/types/global-a-b/boughtskillvisualizer#m-holderprefab), [`BoughtSkillVisualizer.OrbHolderHandle.holder`](/game-api/types/global-a-b/boughtskillvisualizer-orbholderhandle#m-holder), [`BoughtSkillVisualizer.OrbHolderHandle.OrbHolderHandle`](/game-api/types/global-a-b/boughtskillvisualizer-orbholderhandle#m-ctor).
