---
title: "AudioManager"
description: "Plays Wwise sound effects, one shot at a point, on an object, or on a given Wwise game object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AudioManager

A **class** in `Root.Township`, the global namespace.

Plays Wwise sound effects, one shot at a point, on an object, or on a given Wwise game object. Muted and disabled on a headless server. Get it with `SingletonBehaviour<AudioManager>.Instance`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`SingletonBehaviour<AudioManager>`](/mod/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`AudioManager`](/mod/game-api/types/global-a-b/audiomanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AudioManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentsoundeffectsmapping" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectsmap">{"SoundEffectsMap"}</Link>{" currentSoundEffectsMapping"}</code> | Map from old `SoundEffect` enum values to sound sets, used by `Resolve` as a fallback. |
| <Link id="m-isignoringmultiplecallsinsameframe" /><code>{"private bool isIgnoringMultipleCallsInSameFrame"}</code> | If true, the same caller can play a given sound set only once per frame. |
| <Link id="m-ismuted" /><code>{"private bool isMuted"}</code> | Backing field for `IsMuted`. |
| <Link id="m-issounddisabledonserver" /><code>{"private bool isSoundDisabledOnServer"}</code> | If true, starting a server suspends Wwise and mutes. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-soundeffectcallerids" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{", HashSet<int>> soundEffectCallerIds"}</code> | Per sound set, the caller instance ids that played it this frame. |
| <Link id="m-staticaudiocontrol" /><code>{"private static "}<Link to="/mod/game-api/types/global-s/simpleaudiocontrol">{"SimpleAudioControl"}</Link>{" staticAudioControl"}</code> | Shared control object reused for uncontrolled plays. |
| <Link id="m-tempwwiseaudiodefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" tempWwiseAudioDefinition"}</code> | Pooled object definition for temporary Wwise emitters used by one-shot sounds. |
| <Link id="m-waitforload" /><code>{"private Task waitForLoad"}</code> | Task that completes once Wwise is ready. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismuted-2" /><code>{"bool IsMuted { get; private set; }"}</code> | True while sound is suspended, for example after the server starts. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-audiomutedevent" /><code>{"event "}<Link to="/mod/game-api/types/global-a-b/audiomuteevent">{"AudioMuteEvent"}</Link>{" AudioMutedEvent"}</code> | Raised when `IsMuted` changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playsoundeffect" /><code>{"void PlaySoundEffect("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject caller, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | Plays a sound effect set on a pooled temporary emitter or a given Wwise object. The `out` overloads return an `AudioControl` to stop or change it. |
| <Link id="m-playsoundeffect-2" /><code>{"void PlaySoundEffect("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, AkGameObj akGameObj, GameObject caller, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | Plays a sound effect set on a pooled temporary emitter or a given Wwise object. The `out` overloads return an `AudioControl` to stop or change it. |
| <Link id="m-playsoundeffect-3" /><code>{"void PlaySoundEffect("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject caller, out "}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" audioControl, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | Plays a sound effect set on a pooled temporary emitter or a given Wwise object. The `out` overloads return an `AudioControl` to stop or change it. |
| <Link id="m-playsoundeffect-4" /><code>{"void PlaySoundEffect("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, AkGameObj akGameObj, GameObject caller, out "}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" audioControl, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | Plays a sound effect set on a pooled temporary emitter or a given Wwise object. The `out` overloads return an `AudioControl` to stop or change it. |
| <Link id="m-playsoundeffectat" /><code>{"void PlaySoundEffectAt("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, Vector3 position, GameObject caller, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | Plays a sound effect set at a world position. The same caller can only trigger each sound once per frame. |
| <Link id="m-playsoundeffectat-2" /><code>{"void PlaySoundEffectAt("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, Vector3 position, GameObject caller, out "}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" audioControl, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | Plays a sound effect set at a world position. The same caller can only trigger each sound once per frame. |
| <Link id="m-playsoundeffectonobject" /><code>{"void PlaySoundEffectOnObject("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject targetObject, GameObject caller, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | Plays a sound effect set attached to an object's transform, so it follows the object. |
| <Link id="m-playsoundeffectonobject-2" /><code>{"void PlaySoundEffectOnObject("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject targetObject, GameObject caller, out "}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" audioControl, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | Plays a sound effect set attached to an object's transform, so it follows the object. |
| <Link id="m-resolve" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" Resolve("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" effect, "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" fallback, GameObject caller)"}</code> | Returns the sound effect set, or falls back to the old `SoundEffect` enum mapping (with a warning) when it is null. |
| <Link id="m-whenready" /><code>{"async void WhenReady(Action callback)"}</code> | Runs the callback once Wwise has started. Never runs on a headless build. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | On a headless build, suspends sound and disables the component. Otherwise waits for Wwise to start. |

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disablesound" /><code>{"private void DisableSound()"}</code> | Suspends Wwise and mutes if `isSoundDisabledOnServer`; when headless also drops the sound map and unloads assets. Runs on server start. |
| <Link id="m-enablesound" /><code>{"private void EnableSound()"}</code> | Wakes Wwise from suspend and unmutes. Runs on client start. |
| <Link id="m-getsoundeventobject" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledtempwwiseaudio">{"PooledTempWwiseAudio"}</Link>{" GetSoundEventObject("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" set, Vector3 position)"}</code> | Gets a pooled temporary Wwise object for a sound, optionally placed at a position or attached to a transform. Null if the set has no event. |
| <Link id="m-getsoundeventobject-2" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledtempwwiseaudio">{"PooledTempWwiseAudio"}</Link>{" GetSoundEventObject("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" set, Transform transformAttachedTo)"}</code> | Gets a pooled temporary Wwise object for a sound, optionally placed at a position or attached to a transform. Null if the set has no event. |
| <Link id="m-getsoundeventobject-3" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledtempwwiseaudio">{"PooledTempWwiseAudio"}</Link>{" GetSoundEventObject("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" set)"}</code> | Gets a pooled temporary Wwise object for a sound, optionally placed at a position or attached to a transform. Null if the set has no event. |
| <Link id="m-inputdebugstopaudio" /><code>{"private static bool InputDebugStopAudio()"}</code> | True on the frame S is pressed while Shift and W are held. |
| <Link id="m-isaudiovalid" /><code>{"private bool IsAudioValid("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject caller, out Event soundEvent)"}</code> | Checks a sound can play: not headless or muted, has a valid event, and not a repeat call this frame. |
| <Link id="m-isvalidsoundcallthisframe" /><code>{"private bool IsValidSoundCallThisFrame("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject caller)"}</code> | Blocks the same caller from playing the same sound set twice in one frame, when that option is on. |
| <Link id="m-playinternal" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" PlayInternal("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, AkGameObj akGameObj, GameObject caller, "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties, bool isControlled, Action endAction = null)"}</code> | Plays the sound's event on a Wwise object and returns an `AudioControl` only when a controlled play was asked for. |
| <Link id="m-playinternaloneshot" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" PlayInternalOneShot("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, "}<Link to="/mod/game-api/types/global-p/pooledtempwwiseaudio">{"PooledTempWwiseAudio"}</Link>{" pooledAudio, GameObject caller, "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties, bool isControlled)"}</code> | Registers a pooled temporary Wwise object and plays on it, releasing it back to the pool when the sound ends. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Subscribes to server and client start to disable or enable sound. |
| <Link id="m-stopallwwiseaudio" /><code>{"private static void StopAllWwiseAudio()"}</code> | Stops all Wwise audio, only in a debug editor build. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Clears the per-frame caller list and checks the debug stop-audio keys. |
| <Link id="m-waitforload-2" /><code>{"private async Task WaitForLoad()"}</code> | Waits until Wwise is initialised, then sets the game name. Awaited by `WhenReady`. |

</details>
