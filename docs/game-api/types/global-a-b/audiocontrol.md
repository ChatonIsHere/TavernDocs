---
title: "AudioControl"
description: "Plays one Wwise event on a game object and lets you stop, seek or reapply sound properties while it plays."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AudioControl

A **class** in `Root.Township`, no namespace.

Plays one Wwise event on a game object and lets you stop, seek or reapply sound properties while it plays. Builds on `SimpleAudioControl`.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`SimpleAudioControl`](/game-api/types/global-s/simpleaudiocontrol)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AudioControl()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isplaying" /><code>{"private bool isPlaying"}</code> | True between `Play` and the sound's end callback. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-akgameobj" /><code>{"AkGameObj AkGameObj { get; private set; }"}</code> | The Wwise game object the sound plays on. Null once it has finished. |
| <Link id="m-isexhausted" /><code>{"bool IsExhausted { get; }"}</code> | True when nothing is playing, so `Stop` and `Seek` do nothing. |
| <Link id="m-soundevent" /><code>{"Event SoundEvent { get; private set; }"}</code> | The Wwise event being played. Null once it has finished. |
| <Link id="m-soundproperties" /><code>{"HashSet<"}<Link to="/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"> soundProperties { get; private set; }"}</code> | Sound properties added by `Play`. They aren't cleared between plays. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-play" /><code>{"override void Play(Event soundEvent, AkGameObj akGameObj, Action endAction = null, params "}<Link to="/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | Stops any sound already playing, then plays the event with the given sound properties and an optional end callback. |
| <Link id="m-reapplysoundproperties" /><code>{"void ReapplySoundProperties()"}</code> | Applies all stored sound properties to the game object again. |
| <Link id="m-seek" /><code>{"bool Seek(float timePercentage)"}</code> | Jumps the playing sound to a point given as a fraction of its length. False if nothing is playing. |
| <Link id="m-stop" /><code>{"bool Stop()"}</code> | Stops the playing sound. False if nothing was playing. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-exhaustsound" /><code>{"private void ExhaustSound()"}</code> | Called when the sound ends: clears `isPlaying`, `AkGameObj` and `SoundEvent` so `IsExhausted` turns true. |

</details>

## Used in

Members of other types that take, return or hold a `AudioControl`:

[`Smelter.smelterActiveAudioControl`](/game-api/types/alta-crafting/smelter#m-smelteractiveaudiocontrol), [`CookingLiquid.spawnedAudio`](/game-api/types/alta-crafting/cookingliquid#m-spawnedaudio), [`WaterfallEffectGenerator.sounds`](/game-api/types/alta-world-generation/waterfalleffectgenerator#m-sounds), [`AudioManager.PlayInternal`](/game-api/types/global-a-b/audiomanager#m-playinternal), [`AudioManager.PlayInternalOneShot`](/game-api/types/global-a-b/audiomanager#m-playinternaloneshot), [`AudioManager.PlaySoundEffect`](/game-api/types/global-a-b/audiomanager#m-playsoundeffect-3), [`AudioManager.PlaySoundEffectAt`](/game-api/types/global-a-b/audiomanager#m-playsoundeffectat-2), [`AudioManager.PlaySoundEffectOnObject`](/game-api/types/global-a-b/audiomanager#m-playsoundeffectonobject-2), [`LoopingSoundEffect.loopingSoundAudioControl`](/game-api/types/global-i-l/loopingsoundeffect#m-loopingsoundaudiocontrol), [`SoundSource.audioControl`](/game-api/types/global-s/soundsource#m-audiocontrol).
