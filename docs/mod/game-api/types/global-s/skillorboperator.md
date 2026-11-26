---
title: "SkillOrbOperator"
description: "The point on a skill shrine where a player holds a skill orb to buy or swap it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbOperator

A **class** in `Root.Township`, the global namespace.

The point on a skill shrine where a player holds a skill orb to buy or swap it. `SkillOrbReplacer` joins to it, drives the fill and breaks the joint when done.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbOperator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private readonly int _FillProgress"}</code> | Shader property ID for `_FillProgress`. |
| <Link id="m-animatingrenderer" /><code>{"private Renderer animatingRenderer"}</code> | Renderer whose material shows the fill. |
| <Link id="m-currentjoint" /><code>{"private FixedJoint currentJoint"}</code> | Fixed joint to the replacer now in use, or null. |
| <Link id="m-currentreplacer" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillorbreplacer">{"SkillOrbReplacer"}</Link>{" currentReplacer"}</code> | Replacer now joined, or null. |
| <Link id="m-fadeanimation" /><code>{"private Coroutine fadeAnimation"}</code> | Running fade coroutine, or null. |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> | Seconds to fade the fill out. |
| <Link id="m-fillvisualizer" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" fillVisualizer"}</code> | Experience fill visual updated with buy progress. |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidBody"}</code> | Backing field for `Rigidbody`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-rigidbody-2" /><code>{"Rigidbody Rigidbody { get; }"}</code> | Rigidbody the replacer is joined to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-breakjoint" /><code>{"void BreakJoint(bool confirmBuy)"}</code> | Removes the joint, tells the replacer and fill visual it's done (bought or not), and fades the fill out. |
| <Link id="m-createjoint" /><code>{"void CreateJoint("}<Link to="/mod/game-api/types/global-s/skillorbreplacer">{"SkillOrbReplacer"}</Link>{" replacer)"}</code> | Snaps the replacer to the operator and joins it with a fixed joint, replacing any existing one and resetting the fill. |
| <Link id="m-setinternalprogress" /><code>{"void SetInternalProgress(float progress)"}</code> | Sets the hold progress on the fill shader and the experience fill visual. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadeprogress" /><code>{"private IEnumerator FadeProgress() (iterator)"}</code> | Coroutine that fades the fill shader value back to 0 over `fadeDuration`. |

</details>

## Used in

Members of other types that take, return or hold a `SkillOrbOperator`:

[`SkillShrine.skillOrbOperator`](/mod/game-api/types/global-s/skillshrine#m-skillorboperator), [`SkillShrine.SkillOrbOperator`](/mod/game-api/types/global-s/skillshrine#m-skillorboperator-2).
