---
title: "SkillOrbOperator"
description: "class SkillOrbOperator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbOperator

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbOperator()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private readonly int _FillProgress"}</code> |  |
| <Link id="m-animatingrenderer" /><code>{"private Renderer animatingRenderer"}</code> |  |
| <Link id="m-currentjoint" /><code>{"private FixedJoint currentJoint"}</code> |  |
| <Link id="m-currentreplacer" /><code>{"private "}<Link to="/game-api/types/global-s/skillorbreplacer">{"SkillOrbReplacer"}</Link>{" currentReplacer"}</code> |  |
| <Link id="m-fadeanimation" /><code>{"private Coroutine fadeAnimation"}</code> |  |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> |  |
| <Link id="m-fillvisualizer" /><code>{"private "}<Link to="/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" fillVisualizer"}</code> |  |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidBody"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-rigidbody-2" /><code>{"Rigidbody Rigidbody { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-breakjoint" /><code>{"void BreakJoint(bool confirmBuy)"}</code> |  |
| <Link id="m-createjoint" /><code>{"void CreateJoint("}<Link to="/game-api/types/global-s/skillorbreplacer">{"SkillOrbReplacer"}</Link>{" replacer)"}</code> |  |
| <Link id="m-setinternalprogress" /><code>{"void SetInternalProgress(float progress)"}</code> |  |
| <Link id="m-fadeprogress" /><code>{"private IEnumerator FadeProgress() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SkillOrbOperator`:

[`SkillShrine.skillOrbOperator`](/game-api/types/global-s/skillshrine#m-skillorboperator), [`SkillShrine.SkillOrbOperator`](/game-api/types/global-s/skillshrine#m-skillorboperator-2).
