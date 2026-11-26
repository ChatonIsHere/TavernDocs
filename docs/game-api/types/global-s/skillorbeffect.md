---
title: "SkillOrbEffect"
description: "Pooled visual of a skill orb dissolving: copies an orb's look, plays a shader progress animation, then returns to the pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbEffect

A **class** in `Root.Township`, no namespace.

Pooled visual of a skill orb dissolving: copies an orb's look, plays a shader progress animation, then returns to the pool. Client visuals.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)
- **Derived types** [`SkillOrbDestroyEffect`](/game-api/types/global-s/skillorbdestroyeffect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbEffect()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-destroycoroutine" /><code>{"protected "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" destroyCoroutine"}</code> | The running destroy animation. |

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maintex" /><code>{"private readonly int _MainTex"}</code> | Shader ID of `_MainTex`. |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | Shader ID of `_Progress`. |
| <Link id="m-centerrenderer" /><code>{"private Renderer centerRenderer"}</code> | Centre renderer, hidden once the model is destroyed. |
| <Link id="m-destroymodelatprogress" /><code>{"private float destroyModelAtProgress"}</code> | Normalized time at which the model and centre are hidden. |
| <Link id="m-destroytime" /><code>{"private float destroyTime"}</code> | Length of the destroy animation in seconds. |
| <Link id="m-hasmodel" /><code>{"private bool hasModel"}</code> | True when the slot has an icon to show. |
| <Link id="m-internalmodelblock" /><code>{"private MaterialPropertyBlock internalModelBlock"}</code> | Property block holding the slot icon texture. |
| <Link id="m-material" /><code>{"private Material material"}</code> | This effect's own copy of the shell material. |
| <Link id="m-materialprogressoverpoolednormalizedtime" /><code>{"private AnimationCurve materialProgressOverPooledNormalizedTime"}</code> | Curve of shader progress over the animation's normalized time. |
| <Link id="m-modelrenderer" /><code>{"private Renderer modelRenderer"}</code> | Renderer of the inner model showing the slot icon. |
| <Link id="m-targetrenderer" /><code>{"private Renderer targetRenderer"}</code> | Shell renderer whose material is animated. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Clears the running coroutine and returns the effect to the pool. |
| <Link id="m-resetrun" /><code>{"override void ResetRun()"}</code> | Restarts the destroy animation. |
| <Link id="m-setoriginalorb" /><code>{"void SetOriginalOrb("}<Link to="/game-api/types/global-i-l/iskillorb">{"ISkillOrb"}</Link>{" orb)"}</code> | Copies the shell material and inner model transform from a real orb, then applies its slot. |
| <Link id="m-setslot" /><code>{"void SetSlot("}<Link to="/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | Resets progress and shows the slot's icon on the inner model, or hides it if there is none. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Makes a private copy of the shell material and a property block for the inner model. |
| <Link id="m-destroy" /><code>{"protected IEnumerator Destroy() (iterator)"}</code> | Coroutine that animates `_Progress` over `destroyTime`, hides the model partway, then releases the effect. |
| <Link id="m-startruning" /><code>{"protected void StartRuning("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Stops any running destroy animation and starts a new one. |
