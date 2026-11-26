---
title: "SkillOrbEffect"
description: "class SkillOrbEffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbEffect

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)
- **Derived types** [`SkillOrbDestroyEffect`](/game-api/types/global-s/skillorbdestroyeffect)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SkillOrbEffect()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-destroycoroutine" /><code>{"protected "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" destroyCoroutine"}</code> |

<details>
<summary>11 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-maintex" /><code>{"private readonly int _MainTex"}</code> |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> |
| <Link id="m-centerrenderer" /><code>{"private Renderer centerRenderer"}</code> |
| <Link id="m-destroymodelatprogress" /><code>{"private float destroyModelAtProgress"}</code> |
| <Link id="m-destroytime" /><code>{"private float destroyTime"}</code> |
| <Link id="m-hasmodel" /><code>{"private bool hasModel"}</code> |
| <Link id="m-internalmodelblock" /><code>{"private MaterialPropertyBlock internalModelBlock"}</code> |
| <Link id="m-material" /><code>{"private Material material"}</code> |
| <Link id="m-materialprogressoverpoolednormalizedtime" /><code>{"private AnimationCurve materialProgressOverPooledNormalizedTime"}</code> |
| <Link id="m-modelrenderer" /><code>{"private Renderer modelRenderer"}</code> |
| <Link id="m-targetrenderer" /><code>{"private Renderer targetRenderer"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> |
| <Link id="m-resetrun" /><code>{"override void ResetRun()"}</code> |
| <Link id="m-setoriginalorb" /><code>{"void SetOriginalOrb("}<Link to="/game-api/types/global-i-l/iskillorb">{"ISkillOrb"}</Link>{" orb)"}</code> |
| <Link id="m-setslot" /><code>{"void SetSlot("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |
| <Link id="m-destroy" /><code>{"protected IEnumerator Destroy() (iterator)"}</code> |
| <Link id="m-startruning" /><code>{"protected void StartRuning("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |
