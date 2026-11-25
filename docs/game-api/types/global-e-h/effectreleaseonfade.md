---
title: "EffectReleaseOnFade"
description: "class EffectReleaseOnFade in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectReleaseOnFade

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`PlayerEffectParticle`](/game-api/types/global-p/playereffectparticle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectReleaseOnFade()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-audiotofade" /><code>{"private "}<Link to="/game-api/types/global-s/soundsource">{"SoundSource"}</Link>{" audioToFade"}</code> |  |
| <Link id="m-fadecoroutine" /><code>{"private Coroutine fadeCoroutine"}</code> |  |
| <Link id="m-hasaudio" /><code>{"private bool hasAudio"}</code> |  |
| <Link id="m-isreleasing" /><code>{"private bool isReleasing"}</code> |  |
| <Link id="m-systemstofade" /><code>{"private ParticleSystem[] systemsToFade"}</code> |  |
| <Link id="m-unparentingonrelease" /><code>{"private bool unparentingOnRelease"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"virtual void PostBake()"}</code> |  |
| <Link id="m-release" /><code>{"override void Release()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-baserelease" /><code>{"private void BaseRelease()"}</code> |  |
| <Link id="m-fadeandrelease" /><code>{"private IEnumerator FadeAndRelease() (iterator)"}</code> |  |
| <Link id="m-setuprequest" /><code>{"private void SetupRequest("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |  |

## Used in

Members of other types that take, return or hold a `EffectReleaseOnFade`:

[`PaperPageInstance.decayEffect`](/game-api/types/alta-items/paperpageinstance#m-decayeffect), [`ImmediateDecay.decayEffect`](/game-api/types/global-i-l/immediatedecay#m-decayeffect).
