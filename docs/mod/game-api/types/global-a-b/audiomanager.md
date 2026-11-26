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
| <Link id="m-ctor" /><code>{"AudioManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentsoundeffectsmapping" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectsmap">{"SoundEffectsMap"}</Link>{" currentSoundEffectsMapping"}</code> | <span className="api-desc">Map from old `SoundEffect` enum values to sound sets, used by `Resolve` as a fallback.</span> |
| <Link id="m-isignoringmultiplecallsinsameframe" /><code>{"private bool isIgnoringMultipleCallsInSameFrame"}</code> | <span className="api-desc">If true, the same caller can play a given sound set only once per frame.</span> |
| <Link id="m-ismuted" /><code>{"private bool isMuted"}</code> | <span className="api-desc">Backing field for `IsMuted`.</span> |
| <Link id="m-issounddisabledonserver" /><code>{"private bool isSoundDisabledOnServer"}</code> | <span className="api-desc">If true, starting a server suspends Wwise and mutes.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-soundeffectcallerids" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{", HashSet<int>> soundEffectCallerIds"}</code> | <span className="api-desc">Per sound set, the caller instance ids that played it this frame.</span> |
| <Link id="m-staticaudiocontrol" /><code>{"private static "}<Link to="/mod/game-api/types/global-s/simpleaudiocontrol">{"SimpleAudioControl"}</Link>{" staticAudioControl"}</code> | <span className="api-desc">Shared control object reused for uncontrolled plays.</span> |
| <Link id="m-tempwwiseaudiodefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" tempWwiseAudioDefinition"}</code> | <span className="api-desc">Pooled object definition for temporary Wwise emitters used by one-shot sounds.</span> |
| <Link id="m-waitforload" /><code>{"private Task waitForLoad"}</code> | <span className="api-desc">Task that completes once Wwise is ready.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismuted-2" /><code>{"bool IsMuted { get; private set; }"}</code> | <span className="api-desc">True while sound is suspended, for example after the server starts.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-audiomutedevent" /><code>{"event "}<Link to="/mod/game-api/types/global-a-b/audiomuteevent">{"AudioMuteEvent"}</Link>{" AudioMutedEvent"}</code> | <span className="api-desc">Raised when `IsMuted` changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playsoundeffect" /><code>{"void PlaySoundEffect("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject caller, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | <span className="api-desc">Plays a sound effect set on a pooled temporary emitter or a given Wwise object. The `out` overloads return an `AudioControl` to stop or change it.</span> |
| <Link id="m-playsoundeffect-2" /><code>{"void PlaySoundEffect("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, AkGameObj akGameObj, GameObject caller, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | <span className="api-desc">Plays a sound effect set on a pooled temporary emitter or a given Wwise object. The `out` overloads return an `AudioControl` to stop or change it.</span> |
| <Link id="m-playsoundeffect-3" /><code>{"void PlaySoundEffect("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject caller, out "}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" audioControl, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | <span className="api-desc">Plays a sound effect set on a pooled temporary emitter or a given Wwise object. The `out` overloads return an `AudioControl` to stop or change it.</span> |
| <Link id="m-playsoundeffect-4" /><code>{"void PlaySoundEffect("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, AkGameObj akGameObj, GameObject caller, out "}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" audioControl, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | <span className="api-desc">Plays a sound effect set on a pooled temporary emitter or a given Wwise object. The `out` overloads return an `AudioControl` to stop or change it.</span> |
| <Link id="m-playsoundeffectat" /><code>{"void PlaySoundEffectAt("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, Vector3 position, GameObject caller, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | <span className="api-desc">Plays a sound effect set at a world position. The same caller can only trigger each sound once per frame.</span> |
| <Link id="m-playsoundeffectat-2" /><code>{"void PlaySoundEffectAt("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, Vector3 position, GameObject caller, out "}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" audioControl, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | <span className="api-desc">Plays a sound effect set at a world position. The same caller can only trigger each sound once per frame.</span> |
| <Link id="m-playsoundeffectonobject" /><code>{"void PlaySoundEffectOnObject("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject targetObject, GameObject caller, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | <span className="api-desc">Plays a sound effect set attached to an object's transform, so it follows the object.</span> |
| <Link id="m-playsoundeffectonobject-2" /><code>{"void PlaySoundEffectOnObject("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject targetObject, GameObject caller, out "}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" audioControl, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | <span className="api-desc">Plays a sound effect set attached to an object's transform, so it follows the object.</span> |
| <Link id="m-resolve" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" Resolve("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" effect, "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" fallback, GameObject caller)"}</code> | <span className="api-desc">Returns the sound effect set, or falls back to the old `SoundEffect` enum mapping (with a warning) when it is null.</span> |
| <Link id="m-whenready" /><code>{"async void WhenReady(Action callback)"}</code> | <span className="api-desc">Runs the callback once Wwise has started. Never runs on a headless build.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">On a headless build, suspends sound and disables the component. Otherwise waits for Wwise to start.</span> |

<details className="api-private">
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disablesound" /><code>{"private void DisableSound()"}</code> | <span className="api-desc">Suspends Wwise and mutes if `isSoundDisabledOnServer`; when headless also drops the sound map and unloads assets. Runs on server start.</span> |
| <Link id="m-enablesound" /><code>{"private void EnableSound()"}</code> | <span className="api-desc">Wakes Wwise from suspend and unmutes. Runs on client start.</span> |
| <Link id="m-getsoundeventobject" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledtempwwiseaudio">{"PooledTempWwiseAudio"}</Link>{" GetSoundEventObject("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" set, Vector3 position)"}</code> | <span className="api-desc">Gets a pooled temporary Wwise object for a sound, optionally placed at a position or attached to a transform. Null if the set has no event.</span> |
| <Link id="m-getsoundeventobject-2" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledtempwwiseaudio">{"PooledTempWwiseAudio"}</Link>{" GetSoundEventObject("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" set, Transform transformAttachedTo)"}</code> | <span className="api-desc">Gets a pooled temporary Wwise object for a sound, optionally placed at a position or attached to a transform. Null if the set has no event.</span> |
| <Link id="m-getsoundeventobject-3" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledtempwwiseaudio">{"PooledTempWwiseAudio"}</Link>{" GetSoundEventObject("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" set)"}</code> | <span className="api-desc">Gets a pooled temporary Wwise object for a sound, optionally placed at a position or attached to a transform. Null if the set has no event.</span> |
| <Link id="m-inputdebugstopaudio" /><code>{"private static bool InputDebugStopAudio()"}</code> | <span className="api-desc">True on the frame S is pressed while Shift and W are held.</span> |
| <Link id="m-isaudiovalid" /><code>{"private bool IsAudioValid("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject caller, out Event soundEvent)"}</code> | <span className="api-desc">Checks a sound can play: not headless or muted, has a valid event, and not a repeat call this frame.</span> |
| <Link id="m-isvalidsoundcallthisframe" /><code>{"private bool IsValidSoundCallThisFrame("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, GameObject caller)"}</code> | <span className="api-desc">Blocks the same caller from playing the same sound set twice in one frame, when that option is on.</span> |
| <Link id="m-playinternal" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" PlayInternal("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, AkGameObj akGameObj, GameObject caller, "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties, bool isControlled, Action endAction = null)"}</code> | <span className="api-desc">Plays the sound's event on a Wwise object and returns an `AudioControl` only when a controlled play was asked for.</span> |
| <Link id="m-playinternaloneshot" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" PlayInternalOneShot("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect, "}<Link to="/mod/game-api/types/global-p/pooledtempwwiseaudio">{"PooledTempWwiseAudio"}</Link>{" pooledAudio, GameObject caller, "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties, bool isControlled)"}</code> | <span className="api-desc">Registers a pooled temporary Wwise object and plays on it, releasing it back to the pool when the sound ends.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Subscribes to server and client start to disable or enable sound.</span> |
| <Link id="m-stopallwwiseaudio" /><code>{"private static void StopAllWwiseAudio()"}</code> | <span className="api-desc">Stops all Wwise audio, only in a debug editor build.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Clears the per-frame caller list and checks the debug stop-audio keys.</span> |
| <Link id="m-waitforload-2" /><code>{"private async Task WaitForLoad()"}</code> | <span className="api-desc">Waits until Wwise is initialised, then sets the game name. Awaited by `WhenReady`.</span> |

</details>
