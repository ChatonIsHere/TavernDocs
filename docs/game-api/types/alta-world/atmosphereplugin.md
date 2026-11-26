---
title: "AtmospherePlugin"
description: "Base for an atmosphere source (such as a zone or weather) that supplies ambient light, fog and ambience audio."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtmospherePlugin

An **abstract class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Base for an atmosphere source (such as a zone or weather) that supplies ambient light, fog and ambience audio. The `AtmosphereManager` initializes plugins and probably uses the enabled one with the highest `Priority`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DeadPlugin`](/game-api/types/alta-intelligence/deadplugin), [`IndoorAmbienceBoost`](/game-api/types/alta-intelligence/indoorambienceboost), [`CaveAmbience`](/game-api/types/alta-world/caveambience), [`DayTimeManager`](/game-api/types/alta-world/daytimemanager), [`ForestAmbience`](/game-api/types/alta-world/forestambience), [`InteriorFogAmbience`](/game-api/types/game-other-namespaces/interiorfogambience)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected AtmospherePlugin()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentfogcolor" /><code>{"protected Color currentFogColor"}</code> | Fog colour field for subclasses. |
| <Link id="m-currentfogdensity" /><code>{"protected float currentFogDensity"}</code> | Fog density field for subclasses. |
| <Link id="m-mainsource" /><code>{"protected "}<Link to="/game-api/types/global-a-b/ambienceaudio">{"AmbienceAudio"}</Link>{" mainSource"}</code> | The ambience audio source. |
| <Link id="m-manager" /><code>{"protected "}<Link to="/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" manager"}</code> | The atmosphere manager that owns this plugin. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pluginhash" /><code>{"private int pluginHash"}</code> | Backing field for `Hash`, set by `StartValues`. The manager and atmosphere sets use it to find the plugin. |
| <Link id="m-priority" /><code>{"private int priority"}</code> | Backing field for `Priority`; higher wins when several plugins are enabled. Default 5. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ambiencevolume" /><code>{"virtual float AmbienceVolume { get; set; }"}</code> | Volume of the ambience audio source. 0 and ignored when there is no audio. |
| <Link id="m-currentambience" /><code>{"abstract Color CurrentAmbience { get; }"}</code> | Ambient light colour this plugin wants now. |
| <Link id="m-currentfog" /><code>{"abstract Color CurrentFog { get; }"}</code> | Fog colour this plugin wants now. |
| <Link id="m-currentfogdensity-2" /><code>{"abstract float CurrentFogDensity { get; }"}</code> | Fog density this plugin wants now. |
| <Link id="m-hasaudio" /><code>{"bool HasAudio { get; private set; }"}</code> | True if there is an ambience source. Always false on a headless server, where the source is destroyed. |
| <Link id="m-hash" /><code>{"int Hash { get; }"}</code> | Identifier the manager gives this plugin in `StartValues`. |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> | True between `Enable` and `Disable`. |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; protected set; }"}</code> | True once `Initialize` has run. |
| <Link id="m-overrideambience" /><code>{"Color? OverrideAmbience { get; set; }"}</code> | Optional colour that replaces the ambient colour when set. |
| <Link id="m-priority-2" /><code>{"int Priority { get; }"}</code> | Higher priority plugins win over lower ones. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"virtual void Disable()"}</code> | Turns the plugin off and asks the manager to drop it from the priority list. |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | Turns the plugin on and hands its audio to the manager. If already on, calls `Reenabled` instead. |
| <Link id="m-initialize" /><code>{"virtual void Initialize("}<Link to="/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" manager)"}</code> | Stores the manager and sets up audio. On a headless server it destroys the audio source. |
| <Link id="m-mute" /><code>{"virtual void Mute(bool isMuted)"}</code> | Mutes or unmutes the ambience source. |
| <Link id="m-onconnect" /><code>{"virtual void OnConnect("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Hook called for a connecting player. Does nothing by default. |
| <Link id="m-startaudio" /><code>{"virtual void StartAudio()"}</code> | Starts the ambience source if it is not already playing. |
| <Link id="m-startvalues" /><code>{"virtual void StartValues("}<Link to="/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" manager, int hash)"}</code> | Stores the manager and the hash the manager assigned. |
| <Link id="m-stopaudio" /><code>{"virtual void StopAudio()"}</code> | Stops the ambience source. |
| <Link id="m-enabled" /><code>{"protected abstract void Enabled()"}</code> | Subclass hook called by `Enable` when the plugin turns on. |
| <Link id="m-reenabled" /><code>{"protected virtual void Reenabled()"}</code> | Called when `Enable` is called on an already enabled plugin. |

## Used in

Members of other types that take, return or hold a `AtmospherePlugin`:

[`AtmosphereManager.AtmospherePlugins`](/game-api/types/alta-world/atmospheremanager#m-atmosphereplugins), [`AtmosphereManager.availablePlugins`](/game-api/types/alta-world/atmospheremanager#m-availableplugins), [`AtmosphereManager.CheckPriority`](/game-api/types/alta-world/atmospheremanager#m-checkpriority), [`AtmosphereManager.ClearPriority`](/game-api/types/alta-world/atmospheremanager#m-clearpriority), [`AtmosphereManager.GetHighestPlugin`](/game-api/types/alta-world/atmospheremanager#m-gethighestplugin), [`AtmosphereManager.MainAudio`](/game-api/types/alta-world/atmospheremanager#m-mainaudio), [`AtmosphereManager.SecondaryAudio`](/game-api/types/alta-world/atmospheremanager#m-secondaryaudio), [`AtmosphereManager.SetAudio`](/game-api/types/alta-world/atmospheremanager#m-setaudio), [`AtmosphereManager.SetupNewMainAudio`](/game-api/types/alta-world/atmospheremanager#m-setupnewmainaudio), [`AtmosphereSet.GetAudioPlayer`](/game-api/types/alta-world/atmosphereset#m-getaudioplayer).
