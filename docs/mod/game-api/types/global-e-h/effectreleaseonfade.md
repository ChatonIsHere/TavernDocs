---
title: "EffectReleaseOnFade"
description: "Pooled effect that, when released, stops its particle systems and sound and waits for the longest particle duration before going back to the pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectReleaseOnFade

A **class** in `Root.Township`, the global namespace.

Pooled effect that, when released, stops its particle systems and sound and waits for the longest particle duration before going back to the pool.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`PlayerEffectParticle`](/mod/game-api/types/global-p/playereffectparticle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectReleaseOnFade()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-audiotofade" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundsource">{"SoundSource"}</Link>{" audioToFade"}</code> | <span className="api-desc">Sound source played on request and stopped on release.</span> |
| <Link id="m-fadecoroutine" /><code>{"private Coroutine fadeCoroutine"}</code> | <span className="api-desc">The fade coroutine in progress. If a fade is cut short, a later `Release` only stops the old handle and does not release.</span> |
| <Link id="m-hasaudio" /><code>{"private bool hasAudio"}</code> | <span className="api-desc">Serialized flag that nothing reads in this build.</span> |
| <Link id="m-isreleasing" /><code>{"private bool isReleasing"}</code> | <span className="api-desc">True while the fade-out is running.</span> |
| <Link id="m-systemstofade" /><code>{"private ParticleSystem[] systemsToFade"}</code> | <span className="api-desc">Particle systems stopped on release.</span> |
| <Link id="m-unparentingonrelease" /><code>{"private bool unparentingOnRelease"}</code> | <span className="api-desc">Detaches the effect from its parent when released, so it can finish fading in place.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"virtual void PostBake()"}</code> | <span className="api-desc">Build step: removes null entries from `systemsToFade`.</span> |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Starts the fade-out instead of releasing at once. Does nothing if already releasing or inactive.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks `SetupRequest` to the pool's request event.</span> |
| <Link id="m-baserelease" /><code>{"private void BaseRelease()"}</code> | <span className="api-desc">Returns the object to the pool and clears the fade state.</span> |
| <Link id="m-fadeandrelease" /><code>{"private IEnumerator FadeAndRelease() (iterator)"}</code> | <span className="api-desc">Coroutine that stops the particles and audio, waits for the longest particle system duration, then releases.</span> |
| <Link id="m-setuprequest" /><code>{"private void SetupRequest("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">When taken from the pool, clears the releasing flag and starts the audio.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EffectReleaseOnFade`:

<div className="api-used-in">

[`PaperPageInstance.decayEffect`](/mod/game-api/types/alta-items/paperpageinstance#m-decayeffect), [`ImmediateDecay.decayEffect`](/mod/game-api/types/global-i-l/immediatedecay#m-decayeffect).

</div>
