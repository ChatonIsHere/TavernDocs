---
title: "AudioControl"
description: "class AudioControl in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AudioControl

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`SimpleAudioControl`](/game-api/types/global-s/simpleaudiocontrol)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AudioControl()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isplaying" /><code>{"private bool isPlaying"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-akgameobj" /><code>{"AkGameObj AkGameObj { get; private set; }"}</code> |  |
| <Link id="m-isexhausted" /><code>{"bool IsExhausted { get; }"}</code> |  |
| <Link id="m-soundevent" /><code>{"Event SoundEvent { get; private set; }"}</code> |  |
| <Link id="m-soundproperties" /><code>{"HashSet<"}<Link to="/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"> soundProperties { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-play" /><code>{"override void Play(Event soundEvent, AkGameObj akGameObj, Action endAction = null, params "}<Link to="/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> |  |
| <Link id="m-reapplysoundproperties" /><code>{"void ReapplySoundProperties()"}</code> |  |
| <Link id="m-seek" /><code>{"bool Seek(float timePercentage)"}</code> |  |
| <Link id="m-stop" /><code>{"bool Stop()"}</code> |  |
| <Link id="m-exhaustsound" /><code>{"private void ExhaustSound()"}</code> |  |

## Used in

Members of other types that take, return or hold a `AudioControl`:

[`Smelter.smelterActiveAudioControl`](/game-api/types/alta-crafting/smelter#m-smelteractiveaudiocontrol), [`CookingLiquid.spawnedAudio`](/game-api/types/alta-crafting/cookingliquid#m-spawnedaudio), [`WaterfallEffectGenerator.sounds`](/game-api/types/alta-world-generation/waterfalleffectgenerator#m-sounds), [`AudioManager.PlayInternal`](/game-api/types/global-a-b/audiomanager#m-playinternal), [`AudioManager.PlayInternalOneShot`](/game-api/types/global-a-b/audiomanager#m-playinternaloneshot), [`AudioManager.PlaySoundEffect`](/game-api/types/global-a-b/audiomanager#m-playsoundeffect-3), [`AudioManager.PlaySoundEffectAt`](/game-api/types/global-a-b/audiomanager#m-playsoundeffectat-2), [`AudioManager.PlaySoundEffectOnObject`](/game-api/types/global-a-b/audiomanager#m-playsoundeffectonobject-2), [`LoopingSoundEffect.loopingSoundAudioControl`](/game-api/types/global-i-l/loopingsoundeffect#m-loopingsoundaudiocontrol), [`SoundSource.audioControl`](/game-api/types/global-s/soundsource#m-audiocontrol).
