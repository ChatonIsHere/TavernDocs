---
title: "AtmosphereManager"
description: "Runs the scene's atmosphere plugins (ambient light, fog, sky, ambient audio) and blends between atmosphere sets as the local player moves between chunks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtmosphereManager

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Runs the scene's atmosphere plugins (ambient light, fog, sky, ambient audio) and blends between atmosphere sets as the local player moves between chunks. A single instance in `AtmosphereManager.instance`; does its visible work on clients.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`ResolveAtmosphere`](/mod/game-api/types/alta-world/atmospheremanager-resolveatmosphere)
- **Documented in** [Time and environment](/mod/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AtmosphereManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" instance"}</code> | <span className="api-desc">The current manager, set on `Awake` and `Initialize`.</span> |

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ambiencelerptime" /><code>{"private float ambienceLerpTime"}</code> | <span className="api-desc">Backing field for `AmbienceLerpTime`.</span> |
| <Link id="m-availableplugins" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{"[] availablePlugins"}</code> | <span className="api-desc">The child atmosphere plugins; sets enable or disable them by index.</span> |
| <Link id="m-baseset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" baseSet"}</code> | <span className="api-desc">The default atmosphere set used when the chunk has no override.</span> |
| <Link id="m-currentpriorityplugin" /><code>{"private int currentPriorityPlugin"}</code> | <span className="api-desc">Index of the plugin that currently has priority, or -1 when none.</span> |
| <Link id="m-currentset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" currentSet"}</code> | <span className="api-desc">Backing field for `CurrentSet`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-positionlerpspeed" /><code>{"private float positionLerpSpeed"}</code> | <span className="api-desc">Backing field for `PositionLerpSpeed`.</span> |
| <Link id="m-save" /><code>{"private bool save"}</code> | <span className="api-desc">Editor toggle for saving a new set; it only resets itself in this build.</span> |
| <Link id="m-setname" /><code>{"private string setName"}</code> | <span className="api-desc">Editor name for a new atmosphere set.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ambienceaudio" /><code><Link to="/mod/game-api/types/alta-utilities/lerpingfloatvalue">{"LerpingFloatValue"}</Link>{" AmbienceAudio { get; private set; }"}</code> | <span className="api-desc">Blend value between main (1) and secondary (0) ambient audio.</span> |
| <Link id="m-ambiencelerptime-2" /><code>{"float AmbienceLerpTime { get; }"}</code> | <span className="api-desc">Seconds to blend ambience when changing sets.</span> |
| <Link id="m-ambientcolor" /><code><Link to="/mod/game-api/types/alta-world/atmospherecolor">{"AtmosphereColor"}</Link>{" AmbientColor { get; private set; }"}</code> | <span className="api-desc">Blended ambient light colour, written to `RenderSettings.ambientLight`.</span> |
| <Link id="m-atmosphereplugins" /><code><Link to="/mod/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{"[] AtmospherePlugins { get; }"}</code> | <span className="api-desc">The plugin components under the manager.</span> |
| <Link id="m-currentfogcolor" /><code>{"Color CurrentFogColor { get; }"}</code> | <span className="api-desc">The current `RenderSettings.fogColor`.</span> |
| <Link id="m-currentfogdensity" /><code>{"float CurrentFogDensity { get; }"}</code> | <span className="api-desc">The current `RenderSettings.fogDensity`.</span> |
| <Link id="m-currentset-2" /><code><Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" CurrentSet { get; }"}</code> | <span className="api-desc">The atmosphere set last applied.</span> |
| <Link id="m-fogcolor" /><code><Link to="/mod/game-api/types/alta-world/atmospherecolor">{"AtmosphereColor"}</Link>{" FogColor { get; private set; }"}</code> | <span className="api-desc">Blended fog colour, also pushed to the global fog shader colour.</span> |
| <Link id="m-fogdensity" /><code><Link to="/mod/game-api/types/alta-utilities/lerpingcontrolledfloatvalue">{"LerpingControlledFloatValue"}</Link>{" FogDensity { get; private set; }"}</code> | <span className="api-desc">Blended fog density.</span> |
| <Link id="m-mainaudio" /><code><Link to="/mod/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{" MainAudio { get; private set; }"}</code> | <span className="api-desc">Plugin playing the main ambient audio.</span> |
| <Link id="m-positionlerpspeed-2" /><code>{"float PositionLerpSpeed { get; }"}</code> | <span className="api-desc">Speed plugins use to follow positions.</span> |
| <Link id="m-secondaryaudio" /><code><Link to="/mod/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{" SecondaryAudio { get; private set; }"}</code> | <span className="api-desc">Plugin whose ambient audio is fading out.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-resolve" /><code>{"event "}<Link to="/mod/game-api/types/alta-world/atmospheremanager-resolveatmosphere">{"AtmosphereManager.ResolveAtmosphere"}</Link>{" Resolve"}</code> | <span className="api-desc">Lets you replace the set chosen for a chunk before it is applied. Pass the set by `ref`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkpriority" /><code>{"bool CheckPriority("}<Link to="/mod/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{" plugin)"}</code> | <span className="api-desc">Makes a plugin the priority one if it ranks at least as high as the current; returns whether it is.</span> |
| <Link id="m-clearpriority" /><code>{"void ClearPriority("}<Link to="/mod/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{" plugin)"}</code> | <span className="api-desc">Clears priority if the given plugin had it.</span> |
| <Link id="m-gethighestplugin" /><code><Link to="/mod/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{" GetHighestPlugin("}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" set)"}</code> | <span className="api-desc">Meant to return the highest priority enabled plugin in a set; in this build it returns the last enabled one.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up all plugins and blended values and applies the base set.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Passes a new player on to every plugin.</span> |
| <Link id="m-readatmosphereset" /><code>{"void ReadAtmosphereSet("}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" set, Color? overrideAmbience = null)"}</code> | <span className="api-desc">Applies a set: turns plugins on or off and blends ambience, optionally with an ambient colour override.</span> |
| <Link id="m-returntobase" /><code>{"void ReturnToBase()"}</code> | <span className="api-desc">Applies the local player's chunk override set, or the base set.</span> |
| <Link id="m-setaudio" /><code>{"void SetAudio("}<Link to="/mod/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{" newAudioPlugin, bool isRegularLerping = true)"}</code> | <span className="api-desc">Makes a plugin the main audio and fades the old one out.</span> |
| <Link id="m-setbackgroundaudioset" /><code>{"void SetBackGroundAudioSet("}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" newBackGroundSet)"}</code> | <span className="api-desc">Starts a set's audio plugin as the secondary (background) audio.</span> |
| <Link id="m-awake" /><code>{"protected void Awake()"}</code> | <span className="api-desc">Sets the instance and hooks the local player's spawn and chunk changes.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ensureatmosphere" /><code>{"private void EnsureAtmosphere("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Applies the chunk's override atmosphere set (after `Resolve` handlers can change it) when the local player changes chunk.</span> |
| <Link id="m-initializeproperties" /><code>{"private void InitializeProperties()"}</code> | <span className="api-desc">Creates the lerping ambient colour, fog colour, fog density and ambience volume values that drive render settings, and hooks audio muting.</span> |
| <Link id="m-localplayerset" /><code>{"private void LocalPlayerSet("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Hooks the local player's chunk changes so the atmosphere follows them.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the local player events.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Collects the child `AtmospherePlugin` components into `availablePlugins`.</span> |
| <Link id="m-overrideatmosphere" /><code>{"private void OverrideAtmosphere("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">When the local player controller spawns, finds the chunk containing it and applies that chunk's atmosphere.</span> |
| <Link id="m-setupnewmainaudio" /><code>{"private void SetupNewMainAudio("}<Link to="/mod/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{" newAudioPlugin, bool isRegularLerping)"}</code> | <span className="api-desc">Makes a plugin the main ambience audio, moves the old one to secondary and crossfades between them.</span> |
| <Link id="m-toggleglobalambiencemute" /><code>{"private void ToggleGlobalAmbienceMute(bool isMuted)"}</code> | <span className="api-desc">Mutes or unmutes the main ambience audio when the audio manager's mute changes.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Steps the ambient colour, fog and ambience volume lerps each frame.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AtmosphereManager`:

<div className="api-used-in">

[`AmbienceArea.manager`](/mod/game-api/types/alta-world/ambiencearea#m-manager), [`AtmospherePlugin.Initialize`](/mod/game-api/types/alta-world/atmosphereplugin#m-initialize), [`AtmospherePlugin.manager`](/mod/game-api/types/alta-world/atmosphereplugin#m-manager), [`AtmospherePlugin.StartValues`](/mod/game-api/types/alta-world/atmosphereplugin#m-startvalues), [`DayTimeManager.Initialize`](/mod/game-api/types/alta-world/daytimemanager#m-initialize), [`SpaceAtmosphereTrigger.manager`](/mod/game-api/types/alta-world/spaceatmospheretrigger#m-manager).

</div>
