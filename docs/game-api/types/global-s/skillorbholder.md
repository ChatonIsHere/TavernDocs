---
title: "SkillOrbHolder"
description: "Client visual for one orb socket in the bought-skills display: animates rotator pieces open or closed and lerps a colour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbHolder

A **class** in `Root.Township`, no namespace.

Client visual for one orb socket in the bought-skills display: animates rotator pieces open or closed and lerps a colour. Driven by `BoughtSkillVisualizer`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbHolder()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | Seconds an open or close animation takes (0.5 by default). |
| <Link id="m-colorlerp" /><code>{"private "}<Link to="/game-api/types/global-c-d/colorlerp">{"ColorLerp"}</Link>{" colorLerp"}</code> | Colour lerp that lights the holder. |
| <Link id="m-hasskill" /><code>{"private bool hasSkill"}</code> | True when the holder was closed with a skill in it; the colour then stays lit during the animation. |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> | Current open state. |
| <Link id="m-rotators" /><code>{"private "}<Link to="/game-api/types/global-q-r/quaternionrotationslerp">{"QuaternionRotationSlerp"}</Link>{"[] rotators"}</code> | Child pieces that rotate as the holder opens and closes. |
| <Link id="m-runningcoroutine" /><code>{"private Coroutine runningcoroutine"}</code> | The animation coroutine currently running, stopped when a new one starts. |
| <Link id="m-value" /><code>{"private float value"}</code> | Current animation progress, 0 closed to 1 open. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close(bool isFillingSkill)"}</code> | Closes the holder. Pass true when a skill fills it, which keeps the colour lit. |
| <Link id="m-open" /><code>{"void Open()"}</code> | Opens the holder and marks it as having no skill. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private IEnumerator Animate() (iterator)"}</code> | Coroutine that runs the rotators (and the colour, if no skill fills it) towards open or closed over `animationDuration`. |
| <Link id="m-animatecoloronly" /><code>{"private IEnumerator AnimateColorOnly(bool isLittingUp) (iterator)"}</code> | Coroutine that fades only the colour up or down, used when closing a holder that was already closed. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: fills `rotators` from child `QuaternionRotationSlerp` components if the list is empty. |
| <Link id="m-setvalue" /><code>{"private void SetValue(bool isOpen)"}</code> | Sets the open state and starts `Animate` if it changed. Does nothing visible on a headless server. |

</details>

## Used in

Members of other types that take, return or hold a `SkillOrbHolder`:

[`BoughtSkillVisualizer.holderPrefab`](/game-api/types/global-a-b/boughtskillvisualizer#m-holderprefab), [`BoughtSkillVisualizer.OrbHolderHandle.holder`](/game-api/types/global-a-b/boughtskillvisualizer-orbholderhandle#m-holder), [`BoughtSkillVisualizer.OrbHolderHandle.OrbHolderHandle`](/game-api/types/global-a-b/boughtskillvisualizer-orbholderhandle#m-ctor).
