---
title: "SoundSource"
description: "Plays a sound effect on (or at) its object, optionally when enabled, and stops it when disabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SoundSource

A **class** in `Root.Township`, no namespace.

Plays a sound effect on (or at) its object, optionally when enabled, and stops it when disabled. Does nothing when headless.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`AmbienceAudio`](/game-api/types/global-a-b/ambienceaudio)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SoundSource()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-audiocontrol" /><code>{"protected "}<Link to="/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" audioControl"}</code> | Handle to the playing sound. |
| <Link id="m-isstatic" /><code>{"private bool isStatic"}</code> |  |
| <Link id="m-isstopped" /><code>{"private bool isStopped"}</code> |  |
| <Link id="m-play" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" play"}</code> |  |
| <Link id="m-playonenable" /><code>{"private bool playOnEnable"}</code> |  |
| <Link id="m-separatestopeffect" /><code>{"private bool separateStopEffect"}</code> |  |
| <Link id="m-soundeffect" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" soundEffect"}</code> |  |
| <Link id="m-stop" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" stop"}</code> |  |
| <Link id="m-stopeffect" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" stopEffect"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isplaying" /><code>{"bool IsPlaying { get; private set; }"}</code> | True between `Play` and `Stop`. |
| <Link id="m-playonenable-2" /><code>{"bool PlayOnEnable { get; }"}</code> | Whether it plays when enabled. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onplay" /><code>{"event "}<Link to="/game-api/types/global-s/soundsourceevent">{"SoundSourceEvent"}</Link>{" OnPlay"}</code> | Fired when the sound starts. |
| <Link id="m-onstop" /><code>{"event "}<Link to="/game-api/types/global-s/soundsourceevent">{"SoundSourceEvent"}</Link>{" OnStop"}</code> | Fired when the sound stops. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-play-2" /><code>{"virtual void Play()"}</code> | Plays the sound on the object, or at its position if static, unless a sound from this source is still playing. |
| <Link id="m-stop-2" /><code>{"void Stop()"}</code> | Stops the sound, or plays the separate stop effect if one is set. |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> | Stops the sound. |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> | If `PlayOnEnable`, plays once the audio manager and Wwise are ready. |
| <Link id="m-startafterinitialized" /><code>{"private IEnumerator StartAfterInitialized() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SoundSource`:

[`EffectReleaseOnFade.audioToFade`](/game-api/types/global-e-h/effectreleaseonfade#m-audiotofade).
