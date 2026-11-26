---
title: "SkillOrbHolder"
description: "Client visual for one orb socket in the bought-skills display: animates rotator pieces open or closed and lerps a colour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbHolder

A **class** in `Root.Township`, the global namespace.

Client visual for one orb socket in the bought-skills display: animates rotator pieces open or closed and lerps a colour. Driven by `BoughtSkillVisualizer`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbHolder()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | <span className="api-desc">Seconds an open or close animation takes (0.5 by default).</span> |
| <Link id="m-colorlerp" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/colorlerp">{"ColorLerp"}</Link>{" colorLerp"}</code> | <span className="api-desc">Colour lerp that lights the holder.</span> |
| <Link id="m-hasskill" /><code>{"private bool hasSkill"}</code> | <span className="api-desc">True when the holder was closed with a skill in it; the colour then stays lit during the animation.</span> |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> | <span className="api-desc">Current open state.</span> |
| <Link id="m-rotators" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/quaternionrotationslerp">{"QuaternionRotationSlerp"}</Link>{"[] rotators"}</code> | <span className="api-desc">Child pieces that rotate as the holder opens and closes.</span> |
| <Link id="m-runningcoroutine" /><code>{"private Coroutine runningcoroutine"}</code> | <span className="api-desc">The animation coroutine currently running, stopped when a new one starts.</span> |
| <Link id="m-value" /><code>{"private float value"}</code> | <span className="api-desc">Current animation progress, 0 closed to 1 open.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close(bool isFillingSkill)"}</code> | <span className="api-desc">Closes the holder. Pass true when a skill fills it, which keeps the colour lit.</span> |
| <Link id="m-open" /><code>{"void Open()"}</code> | <span className="api-desc">Opens the holder and marks it as having no skill.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private IEnumerator Animate() (iterator)"}</code> | <span className="api-desc">Coroutine that runs the rotators (and the colour, if no skill fills it) towards open or closed over `animationDuration`.</span> |
| <Link id="m-animatecoloronly" /><code>{"private IEnumerator AnimateColorOnly(bool isLittingUp) (iterator)"}</code> | <span className="api-desc">Coroutine that fades only the colour up or down, used when closing a holder that was already closed.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: fills `rotators` from child `QuaternionRotationSlerp` components if the list is empty.</span> |
| <Link id="m-setvalue" /><code>{"private void SetValue(bool isOpen)"}</code> | <span className="api-desc">Sets the open state and starts `Animate` if it changed. Does nothing visible on a headless server.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SkillOrbHolder`:

<div className="api-used-in">

[`BoughtSkillVisualizer.holderPrefab`](/mod/game-api/types/global-a-b/boughtskillvisualizer#m-holderprefab), [`BoughtSkillVisualizer.OrbHolderHandle.holder`](/mod/game-api/types/global-a-b/boughtskillvisualizer-orbholderhandle#m-holder), [`BoughtSkillVisualizer.OrbHolderHandle.OrbHolderHandle`](/mod/game-api/types/global-a-b/boughtskillvisualizer-orbholderhandle#m-ctor).

</div>
