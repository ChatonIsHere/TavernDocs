---
title: "LoopingSoundEffect"
description: "class LoopingSoundEffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoopingSoundEffect

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LoopingSoundEffect()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-islooping" /><code>{"private bool isLooping"}</code> |
| <Link id="m-loopingsfxdurationinmilliseconds" /><code>{"private int loopingSfxDurationInMilliseconds"}</code> |
| <Link id="m-loopingsfxdurationinseconds" /><code>{"private float loopingSfxDurationInSeconds"}</code> |
| <Link id="m-loopingsoundaudiocontrol" /><code>{"private "}<Link to="/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" loopingSoundAudioControl"}</code> |
| <Link id="m-loopsoundeffect" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" loopSoundEffect"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isplaying" /><code>{"bool IsPlaying { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-cancelloop" /><code>{"void CancelLoop()"}</code> |
| <Link id="m-startloop" /><code>{"void StartLoop()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-loopsound" /><code>{"private async void LoopSound()"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `LoopingSoundEffect`:

[`RespawnShrineStaticAudioController.loopingSoundEffect`](/game-api/types/game-other-namespaces/respawnshrinestaticaudiocontroller#m-loopingsoundeffect).
