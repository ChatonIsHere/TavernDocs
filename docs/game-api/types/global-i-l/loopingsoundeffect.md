---
title: "LoopingSoundEffect"
description: "Plays a sound effect over and over on a fixed timer until cancelled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoopingSoundEffect

A **class** in `Root.Township`, no namespace.

Plays a sound effect over and over on a fixed timer until cancelled. Stops when disabled.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LoopingSoundEffect()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-islooping" /><code>{"private bool isLooping"}</code> | Backing field for `IsPlaying`. |
| <Link id="m-loopingsfxdurationinmilliseconds" /><code>{"private int loopingSfxDurationInMilliseconds"}</code> | Loop length in milliseconds, from the seconds value. |
| <Link id="m-loopingsfxdurationinseconds" /><code>{"private float loopingSfxDurationInSeconds"}</code> | Time between each replay of the sound. |
| <Link id="m-loopingsoundaudiocontrol" /><code>{"private "}<Link to="/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" loopingSoundAudioControl"}</code> | Audio control of the last play, used to stop it. |
| <Link id="m-loopsoundeffect" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" loopSoundEffect"}</code> | The sound effect to loop. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isplaying" /><code>{"bool IsPlaying { get; }"}</code> | Whether the loop is running. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancelloop" /><code>{"void CancelLoop()"}</code> | Stops looping and stops the playing sound. |
| <Link id="m-startloop" /><code>{"void StartLoop()"}</code> | Starts looping the sound. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Converts the loop length to milliseconds. |
| <Link id="m-loopsound" /><code>{"private async void LoopSound()"}</code> | Plays the sound at this object, waits the loop length, and repeats while looping. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Cancels the loop. |

</details>

## Used in

Members of other types that take, return or hold a `LoopingSoundEffect`:

[`RespawnShrineStaticAudioController.loopingSoundEffect`](/game-api/types/game-other-namespaces/respawnshrinestaticaudiocontroller#m-loopingsoundeffect).
