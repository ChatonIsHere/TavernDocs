---
title: "EffectReleaseOnFade"
description: "Pooled effect that, when released, stops its particle systems and sound and waits for the longest particle duration before going back to the pool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectReleaseOnFade

A **class** in `Root.Township`, no namespace.

Pooled effect that, when released, stops its particle systems and sound and waits for the longest particle duration before going back to the pool.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`PlayerEffectParticle`](/game-api/types/global-p/playereffectparticle)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EffectReleaseOnFade()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-audiotofade" /><code>{"private "}<Link to="/game-api/types/global-s/soundsource">{"SoundSource"}</Link>{" audioToFade"}</code> | Sound source played on request and stopped on release. |
| <Link id="m-fadecoroutine" /><code>{"private Coroutine fadeCoroutine"}</code> | The fade coroutine in progress. If a fade is cut short, a later `Release` only stops the old handle and does not release. |
| <Link id="m-hasaudio" /><code>{"private bool hasAudio"}</code> | Serialized flag that nothing reads in this build. |
| <Link id="m-isreleasing" /><code>{"private bool isReleasing"}</code> | True while the fade-out is running. |
| <Link id="m-systemstofade" /><code>{"private ParticleSystem[] systemsToFade"}</code> | Particle systems stopped on release. |
| <Link id="m-unparentingonrelease" /><code>{"private bool unparentingOnRelease"}</code> | Detaches the effect from its parent when released, so it can finish fading in place. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"virtual void PostBake()"}</code> | Build step: removes null entries from `systemsToFade`. |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Starts the fade-out instead of releasing at once. Does nothing if already releasing or inactive. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks `SetupRequest` to the pool's request event. |
| <Link id="m-baserelease" /><code>{"private void BaseRelease()"}</code> | Returns the object to the pool and clears the fade state. |
| <Link id="m-fadeandrelease" /><code>{"private IEnumerator FadeAndRelease() (iterator)"}</code> | Coroutine that stops the particles and audio, waits for the longest particle system duration, then releases. |
| <Link id="m-setuprequest" /><code>{"private void SetupRequest("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | When taken from the pool, clears the releasing flag and starts the audio. |

</details>

## Used in

Members of other types that take, return or hold a `EffectReleaseOnFade`:

[`PaperPageInstance.decayEffect`](/game-api/types/alta-items/paperpageinstance#m-decayeffect), [`ImmediateDecay.decayEffect`](/game-api/types/global-i-l/immediatedecay#m-decayeffect).
