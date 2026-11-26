---
title: "LoopingSoundEffect"
description: "Plays a sound effect over and over on a fixed timer until cancelled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoopingSoundEffect

A **class** in `Root.Township`, the global namespace.

Plays a sound effect over and over on a fixed timer until cancelled. Stops when disabled.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoopingSoundEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-islooping" /><code>{"private bool isLooping"}</code> | <span className="api-desc">Backing field for `IsPlaying`.</span> |
| <Link id="m-loopingsfxdurationinmilliseconds" /><code>{"private int loopingSfxDurationInMilliseconds"}</code> | <span className="api-desc">Loop length in milliseconds, from the seconds value.</span> |
| <Link id="m-loopingsfxdurationinseconds" /><code>{"private float loopingSfxDurationInSeconds"}</code> | <span className="api-desc">Time between each replay of the sound.</span> |
| <Link id="m-loopingsoundaudiocontrol" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" loopingSoundAudioControl"}</code> | <span className="api-desc">Audio control of the last play, used to stop it.</span> |
| <Link id="m-loopsoundeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" loopSoundEffect"}</code> | <span className="api-desc">The sound effect to loop.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isplaying" /><code>{"bool IsPlaying { get; }"}</code> | <span className="api-desc">Whether the loop is running.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancelloop" /><code>{"void CancelLoop()"}</code> | <span className="api-desc">Stops looping and stops the playing sound.</span> |
| <Link id="m-startloop" /><code>{"void StartLoop()"}</code> | <span className="api-desc">Starts looping the sound.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Converts the loop length to milliseconds.</span> |
| <Link id="m-loopsound" /><code>{"private async void LoopSound()"}</code> | <span className="api-desc">Plays the sound at this object, waits the loop length, and repeats while looping.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Cancels the loop.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LoopingSoundEffect`:

<div className="api-used-in">

[`RespawnShrineStaticAudioController.loopingSoundEffect`](/mod/game-api/types/game-other-namespaces/respawnshrinestaticaudiocontroller#m-loopingsoundeffect).

</div>
