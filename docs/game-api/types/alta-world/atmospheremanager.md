---
title: "AtmosphereManager"
description: "Scene behaviour, static AtmosphereManager instance. Blends AtmospherePlugins into the ambient colour, fog colour and density and ambience audio."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtmosphereManager

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Scene behaviour, `static AtmosphereManager instance`. Blends `AtmospherePlugin`s into the ambient colour, fog colour and density and ambience audio.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`ResolveAtmosphere`](/game-api/types/alta-world/atmospheremanager-resolveatmosphere)
- **Documented in** [Time and environment](/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AtmosphereManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" instance"}</code> |  |
| <Link id="m-ambiencelerptime" /><code>{"private float ambienceLerpTime"}</code> |  |
| <Link id="m-availableplugins" /><code>{"private "}<Link to="/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{"[] availablePlugins"}</code> |  |
| <Link id="m-baseset" /><code>{"private "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" baseSet"}</code> |  |
| <Link id="m-currentpriorityplugin" /><code>{"private int currentPriorityPlugin"}</code> |  |
| <Link id="m-currentset" /><code>{"private "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" currentSet"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-positionlerpspeed" /><code>{"private float positionLerpSpeed"}</code> |  |
| <Link id="m-save" /><code>{"private bool save"}</code> |  |
| <Link id="m-setname" /><code>{"private string setName"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ambienceaudio" /><code><Link to="/game-api/types/alta-utilities/lerpingfloatvalue">{"LerpingFloatValue"}</Link>{" AmbienceAudio { get; private set; }"}</code> |  |
| <Link id="m-ambiencelerptime-2" /><code>{"float AmbienceLerpTime { get; }"}</code> |  |
| <Link id="m-ambientcolor" /><code><Link to="/game-api/types/alta-world/atmospherecolor">{"AtmosphereColor"}</Link>{" AmbientColor { get; private set; }"}</code> |  |
| <Link id="m-atmosphereplugins" /><code><Link to="/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{"[] AtmospherePlugins { get; }"}</code> |  |
| <Link id="m-currentfogcolor" /><code>{"Color CurrentFogColor { get; }"}</code> |  |
| <Link id="m-currentfogdensity" /><code>{"float CurrentFogDensity { get; }"}</code> |  |
| <Link id="m-currentset-2" /><code><Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" CurrentSet { get; }"}</code> |  |
| <Link id="m-fogcolor" /><code><Link to="/game-api/types/alta-world/atmospherecolor">{"AtmosphereColor"}</Link>{" FogColor { get; private set; }"}</code> |  |
| <Link id="m-fogdensity" /><code><Link to="/game-api/types/alta-utilities/lerpingcontrolledfloatvalue">{"LerpingControlledFloatValue"}</Link>{" FogDensity { get; private set; }"}</code> |  |
| <Link id="m-mainaudio" /><code><Link to="/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{" MainAudio { get; private set; }"}</code> |  |
| <Link id="m-positionlerpspeed-2" /><code>{"float PositionLerpSpeed { get; }"}</code> |  |
| <Link id="m-secondaryaudio" /><code><Link to="/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{" SecondaryAudio { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-resolve" /><code>{"event "}<Link to="/game-api/types/alta-world/atmospheremanager-resolveatmosphere">{"AtmosphereManager.ResolveAtmosphere"}</Link>{" Resolve"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkpriority" /><code>{"bool CheckPriority("}<Link to="/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{" plugin)"}</code> |  |
| <Link id="m-clearpriority" /><code>{"void ClearPriority("}<Link to="/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{" plugin)"}</code> |  |
| <Link id="m-gethighestplugin" /><code><Link to="/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{" GetHighestPlugin("}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" set)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-readatmosphereset" /><code>{"void ReadAtmosphereSet("}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" set, Color? overrideAmbience = null)"}</code> |  |
| <Link id="m-returntobase" /><code>{"void ReturnToBase()"}</code> |  |
| <Link id="m-setaudio" /><code>{"void SetAudio("}<Link to="/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{" newAudioPlugin, bool isRegularLerping = true)"}</code> |  |
| <Link id="m-setbackgroundaudioset" /><code>{"void SetBackGroundAudioSet("}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" newBackGroundSet)"}</code> |  |
| <Link id="m-awake" /><code>{"protected void Awake()"}</code> |  |
| <Link id="m-ensureatmosphere" /><code>{"private void EnsureAtmosphere("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-initializeproperties" /><code>{"private void InitializeProperties()"}</code> |  |
| <Link id="m-localplayerset" /><code>{"private void LocalPlayerSet("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-overrideatmosphere" /><code>{"private void OverrideAtmosphere("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-setupnewmainaudio" /><code>{"private void SetupNewMainAudio("}<Link to="/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{" newAudioPlugin, bool isRegularLerping)"}</code> |  |
| <Link id="m-toggleglobalambiencemute" /><code>{"private void ToggleGlobalAmbienceMute(bool isMuted)"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |

## Used in

Members of other types that take, return or hold a `AtmosphereManager`:

[`AmbienceArea.manager`](/game-api/types/alta-world/ambiencearea#m-manager), [`AtmospherePlugin.Initialize`](/game-api/types/alta-world/atmosphereplugin#m-initialize), [`AtmospherePlugin.manager`](/game-api/types/alta-world/atmosphereplugin#m-manager), [`AtmospherePlugin.StartValues`](/game-api/types/alta-world/atmosphereplugin#m-startvalues), [`DayTimeManager.Initialize`](/game-api/types/alta-world/daytimemanager#m-initialize), [`SpaceAtmosphereTrigger.manager`](/game-api/types/alta-world/spaceatmospheretrigger#m-manager).
