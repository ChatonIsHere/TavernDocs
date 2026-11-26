---
title: "SoundSource"
description: "Plays a sound effect on (or at) its object, optionally when enabled, and stops it when disabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SoundSource

A **class** in `Root.Township`, the global namespace.

Plays a sound effect on (or at) its object, optionally when enabled, and stops it when disabled. Does nothing when headless.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`AmbienceAudio`](/mod/game-api/types/global-a-b/ambienceaudio)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SoundSource()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-audiocontrol" /><code>{"protected "}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" audioControl"}</code> | <span className="api-desc">Handle to the playing sound.</span> |

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isstatic" /><code>{"private bool isStatic"}</code> | <span className="api-desc">When set, plays at a fixed position instead of following the object.</span> |
| <Link id="m-isstopped" /><code>{"private bool isStopped"}</code> | <span className="api-desc">Set by `Stop` so a pending play on enable is skipped.</span> |
| <Link id="m-play" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" play"}</code> | <span className="api-desc">Sound set to play. Filled from the old `soundEffect` value if empty.</span> |
| <Link id="m-playonenable" /><code>{"private bool playOnEnable"}</code> | <span className="api-desc">Backing field for `PlayOnEnable`.</span> |
| <Link id="m-separatestopeffect" /><code>{"private bool separateStopEffect"}</code> | <span className="api-desc">When set, `Stop` plays the stop sound instead of stopping the playing one.</span> |
| <Link id="m-soundeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" soundEffect"}</code> | <span className="api-desc">Old sound effect value, kept for migration to `play`.</span> |
| <Link id="m-stop" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" stop"}</code> | <span className="api-desc">Sound set played on stop when `separateStopEffect` is set.</span> |
| <Link id="m-stopeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" stopEffect"}</code> | <span className="api-desc">Old stop sound value, kept for migration to `stop`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isplaying" /><code>{"bool IsPlaying { get; private set; }"}</code> | <span className="api-desc">True between `Play` and `Stop`.</span> |
| <Link id="m-playonenable-2" /><code>{"bool PlayOnEnable { get; }"}</code> | <span className="api-desc">Whether it plays when enabled.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onplay" /><code>{"event "}<Link to="/mod/game-api/types/global-s/soundsourceevent">{"SoundSourceEvent"}</Link>{" OnPlay"}</code> | <span className="api-desc">Fired when the sound starts.</span> |
| <Link id="m-onstop" /><code>{"event "}<Link to="/mod/game-api/types/global-s/soundsourceevent">{"SoundSourceEvent"}</Link>{" OnStop"}</code> | <span className="api-desc">Fired when the sound stops.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-play-2" /><code>{"virtual void Play()"}</code> | <span className="api-desc">Plays the sound on the object, or at its position if static, unless a sound from this source is still playing.</span> |
| <Link id="m-stop-2" /><code>{"void Stop()"}</code> | <span className="api-desc">Stops the sound, or plays the separate stop effect if one is set.</span> |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> | <span className="api-desc">Stops the sound.</span> |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> | <span className="api-desc">If `PlayOnEnable`, plays once the audio manager and Wwise are ready.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-startafterinitialized" /><code>{"private IEnumerator StartAfterInitialized() (iterator)"}</code> | <span className="api-desc">Waits a frame, and until the audio manager and Wwise are ready, then plays unless stopped meanwhile.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SoundSource`:

<div className="api-used-in">

[`EffectReleaseOnFade.audioToFade`](/mod/game-api/types/global-e-h/effectreleaseonfade#m-audiotofade).

</div>
