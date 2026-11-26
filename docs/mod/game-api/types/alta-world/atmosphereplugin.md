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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DeadPlugin`](/mod/game-api/types/alta-intelligence/deadplugin), [`IndoorAmbienceBoost`](/mod/game-api/types/alta-intelligence/indoorambienceboost), [`CaveAmbience`](/mod/game-api/types/alta-world/caveambience), [`DayTimeManager`](/mod/game-api/types/alta-world/daytimemanager), [`ForestAmbience`](/mod/game-api/types/alta-world/forestambience), [`InteriorFogAmbience`](/mod/game-api/types/game-other-namespaces/interiorfogambience)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AtmospherePlugin()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentfogcolor" /><code>{"protected Color currentFogColor"}</code> | <span className="api-desc">Fog colour field for subclasses.</span> |
| <Link id="m-currentfogdensity" /><code>{"protected float currentFogDensity"}</code> | <span className="api-desc">Fog density field for subclasses.</span> |
| <Link id="m-mainsource" /><code>{"protected "}<Link to="/mod/game-api/types/global-a-b/ambienceaudio">{"AmbienceAudio"}</Link>{" mainSource"}</code> | <span className="api-desc">The ambience audio source.</span> |
| <Link id="m-manager" /><code>{"protected "}<Link to="/mod/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" manager"}</code> | <span className="api-desc">The atmosphere manager that owns this plugin.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pluginhash" /><code>{"private int pluginHash"}</code> | <span className="api-desc">Backing field for `Hash`, set by `StartValues`. The manager and atmosphere sets use it to find the plugin.</span> |
| <Link id="m-priority" /><code>{"private int priority"}</code> | <span className="api-desc">Backing field for `Priority`; higher wins when several plugins are enabled. Default 5.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ambiencevolume" /><code>{"virtual float AmbienceVolume { get; set; }"}</code> | <span className="api-desc">Volume of the ambience audio source. 0 and ignored when there is no audio.</span> |
| <Link id="m-currentambience" /><code>{"abstract Color CurrentAmbience { get; }"}</code> | <span className="api-desc">Ambient light colour this plugin wants now.</span> |
| <Link id="m-currentfog" /><code>{"abstract Color CurrentFog { get; }"}</code> | <span className="api-desc">Fog colour this plugin wants now.</span> |
| <Link id="m-currentfogdensity-2" /><code>{"abstract float CurrentFogDensity { get; }"}</code> | <span className="api-desc">Fog density this plugin wants now.</span> |
| <Link id="m-hasaudio" /><code>{"bool HasAudio { get; private set; }"}</code> | <span className="api-desc">True if there is an ambience source. Always false on a headless server, where the source is destroyed.</span> |
| <Link id="m-hash" /><code>{"int Hash { get; }"}</code> | <span className="api-desc">Identifier the manager gives this plugin in `StartValues`.</span> |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> | <span className="api-desc">True between `Enable` and `Disable`.</span> |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; protected set; }"}</code> | <span className="api-desc">True once `Initialize` has run.</span> |
| <Link id="m-overrideambience" /><code>{"Color? OverrideAmbience { get; set; }"}</code> | <span className="api-desc">Optional colour that replaces the ambient colour when set.</span> |
| <Link id="m-priority-2" /><code>{"int Priority { get; }"}</code> | <span className="api-desc">Higher priority plugins win over lower ones.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"virtual void Disable()"}</code> | <span className="api-desc">Turns the plugin off and asks the manager to drop it from the priority list.</span> |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | <span className="api-desc">Turns the plugin on and hands its audio to the manager. If already on, calls `Reenabled` instead.</span> |
| <Link id="m-initialize" /><code>{"virtual void Initialize("}<Link to="/mod/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" manager)"}</code> | <span className="api-desc">Stores the manager and sets up audio. On a headless server it destroys the audio source.</span> |
| <Link id="m-mute" /><code>{"virtual void Mute(bool isMuted)"}</code> | <span className="api-desc">Mutes or unmutes the ambience source.</span> |
| <Link id="m-onconnect" /><code>{"virtual void OnConnect("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Hook called for a connecting player. Does nothing by default.</span> |
| <Link id="m-startaudio" /><code>{"virtual void StartAudio()"}</code> | <span className="api-desc">Starts the ambience source if it is not already playing.</span> |
| <Link id="m-startvalues" /><code>{"virtual void StartValues("}<Link to="/mod/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" manager, int hash)"}</code> | <span className="api-desc">Stores the manager and the hash the manager assigned.</span> |
| <Link id="m-stopaudio" /><code>{"virtual void StopAudio()"}</code> | <span className="api-desc">Stops the ambience source.</span> |
| <Link id="m-enabled" /><code>{"protected abstract void Enabled()"}</code> | <span className="api-desc">Subclass hook called by `Enable` when the plugin turns on.</span> |
| <Link id="m-reenabled" /><code>{"protected virtual void Reenabled()"}</code> | <span className="api-desc">Called when `Enable` is called on an already enabled plugin.</span> |

## Used in

Members of other types that take, return or hold a `AtmospherePlugin`:

<div className="api-used-in">

[`AtmosphereManager.AtmospherePlugins`](/mod/game-api/types/alta-world/atmospheremanager#m-atmosphereplugins), [`AtmosphereManager.availablePlugins`](/mod/game-api/types/alta-world/atmospheremanager#m-availableplugins), [`AtmosphereManager.CheckPriority`](/mod/game-api/types/alta-world/atmospheremanager#m-checkpriority), [`AtmosphereManager.ClearPriority`](/mod/game-api/types/alta-world/atmospheremanager#m-clearpriority), [`AtmosphereManager.GetHighestPlugin`](/mod/game-api/types/alta-world/atmospheremanager#m-gethighestplugin), [`AtmosphereManager.MainAudio`](/mod/game-api/types/alta-world/atmospheremanager#m-mainaudio), [`AtmosphereManager.SecondaryAudio`](/mod/game-api/types/alta-world/atmospheremanager#m-secondaryaudio), [`AtmosphereManager.SetAudio`](/mod/game-api/types/alta-world/atmospheremanager#m-setaudio), [`AtmosphereManager.SetupNewMainAudio`](/mod/game-api/types/alta-world/atmospheremanager#m-setupnewmainaudio), [`AtmosphereSet.GetAudioPlayer`](/mod/game-api/types/alta-world/atmosphereset#m-getaudioplayer).

</div>
