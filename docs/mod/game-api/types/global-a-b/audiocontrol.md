---
title: "AudioControl"
description: "Plays one Wwise event on a game object and lets you stop, seek or reapply sound properties while it plays."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AudioControl

A **class** in `Root.Township`, the global namespace.

Plays one Wwise event on a game object and lets you stop, seek or reapply sound properties while it plays. Builds on `SimpleAudioControl`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`SimpleAudioControl`](/mod/game-api/types/global-s/simpleaudiocontrol)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AudioControl()"}</code> | <span className="api-desc">Creates an `AudioControl` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isplaying" /><code>{"private bool isPlaying"}</code> | <span className="api-desc">True between `Play` and the sound's end callback.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-akgameobj" /><code>{"AkGameObj AkGameObj { get; private set; }"}</code> | <span className="api-desc">The Wwise game object the sound plays on. Null once it has finished.</span> |
| <Link id="m-isexhausted" /><code>{"bool IsExhausted { get; }"}</code> | <span className="api-desc">True when nothing is playing, so `Stop` and `Seek` do nothing.</span> |
| <Link id="m-soundevent" /><code>{"Event SoundEvent { get; private set; }"}</code> | <span className="api-desc">The Wwise event being played. Null once it has finished.</span> |
| <Link id="m-soundproperties" /><code>{"HashSet<"}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"> soundProperties { get; private set; }"}</code> | <span className="api-desc">Sound properties added by `Play`. They aren't cleared between plays.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-play" /><code>{"override void Play(Event soundEvent, AkGameObj akGameObj, Action endAction = null, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | <span className="api-desc">Stops any sound already playing, then plays the event with the given sound properties and an optional end callback.</span> |
| <Link id="m-reapplysoundproperties" /><code>{"void ReapplySoundProperties()"}</code> | <span className="api-desc">Applies all stored sound properties to the game object again.</span> |
| <Link id="m-seek" /><code>{"bool Seek(float timePercentage)"}</code> | <span className="api-desc">Jumps the playing sound to a point given as a fraction of its length. False if nothing is playing.</span> |
| <Link id="m-stop" /><code>{"bool Stop()"}</code> | <span className="api-desc">Stops the playing sound. False if nothing was playing.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-exhaustsound" /><code>{"private void ExhaustSound()"}</code> | <span className="api-desc">Called when the sound ends: clears `isPlaying`, `AkGameObj` and `SoundEvent` so `IsExhausted` turns true.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AudioControl`:

<div className="api-used-in">

[`Smelter.smelterActiveAudioControl`](/mod/game-api/types/alta-crafting/smelter#m-smelteractiveaudiocontrol), [`CookingLiquid.spawnedAudio`](/mod/game-api/types/alta-crafting/cookingliquid#m-spawnedaudio), [`WaterfallEffectGenerator.sounds`](/mod/game-api/types/alta-world-generation/waterfalleffectgenerator#m-sounds), [`AudioManager.PlayInternal`](/mod/game-api/types/global-a-b/audiomanager#m-playinternal), [`AudioManager.PlayInternalOneShot`](/mod/game-api/types/global-a-b/audiomanager#m-playinternaloneshot), [`AudioManager.PlaySoundEffect`](/mod/game-api/types/global-a-b/audiomanager#m-playsoundeffect-3), [`AudioManager.PlaySoundEffectAt`](/mod/game-api/types/global-a-b/audiomanager#m-playsoundeffectat-2), [`AudioManager.PlaySoundEffectOnObject`](/mod/game-api/types/global-a-b/audiomanager#m-playsoundeffectonobject-2), [`LoopingSoundEffect.loopingSoundAudioControl`](/mod/game-api/types/global-i-l/loopingsoundeffect#m-loopingsoundaudiocontrol), [`SoundSource.audioControl`](/mod/game-api/types/global-s/soundsource#m-audiocontrol).

</div>
