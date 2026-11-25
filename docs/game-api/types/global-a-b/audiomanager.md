---
title: "AudioManager"
description: "class AudioManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AudioManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`SingletonBehaviour<AudioManager>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`AudioManager`](/game-api/types/global-a-b/audiomanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AudioManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentsoundeffectsmapping" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectsmap">{"SoundEffectsMap"}</Link>{" currentSoundEffectsMapping"}</code> |  |
| <Link id="m-isignoringmultiplecallsinsameframe" /><code>{"private bool isIgnoringMultipleCallsInSameFrame"}</code> |  |
| <Link id="m-ismuted" /><code>{"private bool isMuted"}</code> |  |
| <Link id="m-issounddisabledonserver" /><code>{"private bool isSoundDisabledOnServer"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-soundeffectcallerids" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{", HashSet<int>> soundEffectCallerIds"}</code> |  |
| <Link id="m-staticaudiocontrol" /><code>{"private static "}<Link to="/game-api/types/global-s/simpleaudiocontrol">{"SimpleAudioControl"}</Link>{" staticAudioControl"}</code> |  |
| <Link id="m-tempwwiseaudiodefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" tempWwiseAudioDefinition"}</code> |  |
| <Link id="m-waitforload" /><code>{"private Task waitForLoad"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismuted-2" /><code>{"bool IsMuted { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-audiomutedevent" /><code>{"event "}<Link to="/game-api/types/global-a-b/audiomuteevent">{"AudioMuteEvent"}</Link>{" AudioMutedEvent"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playsoundeffect" /><code>{"void PlaySoundEffect("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject caller, params "}<Link to="/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> |  |
| <Link id="m-playsoundeffect-2" /><code>{"void PlaySoundEffect("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, AkGameObj akGameObj, GameObject caller, params "}<Link to="/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> |  |
| <Link id="m-playsoundeffect-3" /><code>{"void PlaySoundEffect("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject caller, out "}<Link to="/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" audioControl, params "}<Link to="/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> |  |
| <Link id="m-playsoundeffect-4" /><code>{"void PlaySoundEffect("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, AkGameObj akGameObj, GameObject caller, out "}<Link to="/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" audioControl, params "}<Link to="/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> |  |
| <Link id="m-playsoundeffectat" /><code>{"void PlaySoundEffectAt("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, Vector3 position, GameObject caller, params "}<Link to="/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> |  |
| <Link id="m-playsoundeffectat-2" /><code>{"void PlaySoundEffectAt("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, Vector3 position, GameObject caller, out "}<Link to="/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" audioControl, params "}<Link to="/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> |  |
| <Link id="m-playsoundeffectonobject" /><code>{"void PlaySoundEffectOnObject("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject targetObject, GameObject caller, params "}<Link to="/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> |  |
| <Link id="m-playsoundeffectonobject-2" /><code>{"void PlaySoundEffectOnObject("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject targetObject, GameObject caller, out "}<Link to="/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" audioControl, params "}<Link to="/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> |  |
| <Link id="m-resolve" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" Resolve("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" effect, "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" fallback, GameObject caller)"}</code> |  |
| <Link id="m-whenready" /><code>{"async void WhenReady(Action callback)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-disablesound" /><code>{"private void DisableSound()"}</code> |  |
| <Link id="m-enablesound" /><code>{"private void EnableSound()"}</code> |  |
| <Link id="m-getsoundeventobject" /><code>{"private "}<Link to="/game-api/types/global-p/pooledtempwwiseaudio">{"PooledTempWwiseAudio"}</Link>{" GetSoundEventObject("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" set, Vector3 position)"}</code> |  |
| <Link id="m-getsoundeventobject-2" /><code>{"private "}<Link to="/game-api/types/global-p/pooledtempwwiseaudio">{"PooledTempWwiseAudio"}</Link>{" GetSoundEventObject("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" set, Transform transformAttachedTo)"}</code> |  |
| <Link id="m-getsoundeventobject-3" /><code>{"private "}<Link to="/game-api/types/global-p/pooledtempwwiseaudio">{"PooledTempWwiseAudio"}</Link>{" GetSoundEventObject("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" set)"}</code> |  |
| <Link id="m-inputdebugstopaudio" /><code>{"private static bool InputDebugStopAudio()"}</code> |  |
| <Link id="m-isaudiovalid" /><code>{"private bool IsAudioValid("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject caller, out Event soundEvent)"}</code> |  |
| <Link id="m-isvalidsoundcallthisframe" /><code>{"private bool IsValidSoundCallThisFrame("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject caller)"}</code> |  |
| <Link id="m-playinternal" /><code>{"private "}<Link to="/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" PlayInternal("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, AkGameObj akGameObj, GameObject caller, "}<Link to="/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties, bool isControlled, Action endAction = null)"}</code> |  |
| <Link id="m-playinternaloneshot" /><code>{"private "}<Link to="/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" PlayInternalOneShot("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, "}<Link to="/game-api/types/global-p/pooledtempwwiseaudio">{"PooledTempWwiseAudio"}</Link>{" pooledAudio, GameObject caller, "}<Link to="/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties, bool isControlled)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-stopallwwiseaudio" /><code>{"private static void StopAllWwiseAudio()"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
| <Link id="m-waitforload-2" /><code>{"private async Task WaitForLoad()"}</code> |  |
