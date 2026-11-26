---
title: "SkillOrbEffect"
description: "Pooled visual of a skill orb dissolving: copies an orb's look, plays a shader progress animation, then returns to the pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbEffect

A **class** in `Root.Township`, the global namespace.

Pooled visual of a skill orb dissolving: copies an orb's look, plays a shader progress animation, then returns to the pool. Client visuals.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)
- **Derived types** [`SkillOrbDestroyEffect`](/mod/game-api/types/global-s/skillorbdestroyeffect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-destroycoroutine" /><code>{"protected "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" destroyCoroutine"}</code> | <span className="api-desc">The running destroy animation.</span> |

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maintex" /><code>{"private readonly int _MainTex"}</code> | <span className="api-desc">Shader ID of `_MainTex`.</span> |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | <span className="api-desc">Shader ID of `_Progress`.</span> |
| <Link id="m-centerrenderer" /><code>{"private Renderer centerRenderer"}</code> | <span className="api-desc">Centre renderer, hidden once the model is destroyed.</span> |
| <Link id="m-destroymodelatprogress" /><code>{"private float destroyModelAtProgress"}</code> | <span className="api-desc">Normalized time at which the model and centre are hidden.</span> |
| <Link id="m-destroytime" /><code>{"private float destroyTime"}</code> | <span className="api-desc">Length of the destroy animation in seconds.</span> |
| <Link id="m-hasmodel" /><code>{"private bool hasModel"}</code> | <span className="api-desc">True when the slot has an icon to show.</span> |
| <Link id="m-internalmodelblock" /><code>{"private MaterialPropertyBlock internalModelBlock"}</code> | <span className="api-desc">Property block holding the slot icon texture.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">This effect's own copy of the shell material.</span> |
| <Link id="m-materialprogressoverpoolednormalizedtime" /><code>{"private AnimationCurve materialProgressOverPooledNormalizedTime"}</code> | <span className="api-desc">Curve of shader progress over the animation's normalized time.</span> |
| <Link id="m-modelrenderer" /><code>{"private Renderer modelRenderer"}</code> | <span className="api-desc">Renderer of the inner model showing the slot icon.</span> |
| <Link id="m-targetrenderer" /><code>{"private Renderer targetRenderer"}</code> | <span className="api-desc">Shell renderer whose material is animated.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Clears the running coroutine and returns the effect to the pool.</span> |
| <Link id="m-resetrun" /><code>{"override void ResetRun()"}</code> | <span className="api-desc">Restarts the destroy animation.</span> |
| <Link id="m-setoriginalorb" /><code>{"void SetOriginalOrb("}<Link to="/mod/game-api/types/global-i-l/iskillorb">{"ISkillOrb"}</Link>{" orb)"}</code> | <span className="api-desc">Copies the shell material and inner model transform from a real orb, then applies its slot.</span> |
| <Link id="m-setslot" /><code>{"void SetSlot("}<Link to="/mod/game-api/types/global-p/progressionslot">{"ProgressionSlot"}</Link>{" slot)"}</code> | <span className="api-desc">Resets progress and shows the slot's icon on the inner model, or hides it if there is none.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Makes a private copy of the shell material and a property block for the inner model.</span> |
| <Link id="m-destroy" /><code>{"protected IEnumerator Destroy() (iterator)"}</code> | <span className="api-desc">Coroutine that animates `_Progress` over `destroyTime`, hides the model partway, then releases the effect.</span> |
| <Link id="m-startruning" /><code>{"protected void StartRuning("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Stops any running destroy animation and starts a new one.</span> |
