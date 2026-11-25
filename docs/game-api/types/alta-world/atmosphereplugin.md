---
title: "AtmospherePlugin"
description: "abstract class AtmospherePlugin in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtmospherePlugin

An **abstract class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DeadPlugin`](/game-api/types/alta-intelligence/deadplugin), [`IndoorAmbienceBoost`](/game-api/types/alta-intelligence/indoorambienceboost), [`CaveAmbience`](/game-api/types/alta-world/caveambience), [`DayTimeManager`](/game-api/types/alta-world/daytimemanager), [`ForestAmbience`](/game-api/types/alta-world/forestambience), [`InteriorFogAmbience`](/game-api/types/game-other-namespaces/interiorfogambience)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AtmospherePlugin()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentfogcolor" /><code>{"protected Color currentFogColor"}</code> |  |
| <Link id="m-currentfogdensity" /><code>{"protected float currentFogDensity"}</code> |  |
| <Link id="m-mainsource" /><code>{"protected "}<Link to="/game-api/types/global-a-b/ambienceaudio">{"AmbienceAudio"}</Link>{" mainSource"}</code> |  |
| <Link id="m-manager" /><code>{"protected "}<Link to="/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" manager"}</code> |  |
| <Link id="m-pluginhash" /><code>{"private int pluginHash"}</code> |  |
| <Link id="m-priority" /><code>{"private int priority"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ambiencevolume" /><code>{"virtual float AmbienceVolume { get; set; }"}</code> |  |
| <Link id="m-currentambience" /><code>{"abstract Color CurrentAmbience { get; }"}</code> |  |
| <Link id="m-currentfog" /><code>{"abstract Color CurrentFog { get; }"}</code> |  |
| <Link id="m-currentfogdensity-2" /><code>{"abstract float CurrentFogDensity { get; }"}</code> |  |
| <Link id="m-hasaudio" /><code>{"bool HasAudio { get; private set; }"}</code> |  |
| <Link id="m-hash" /><code>{"int Hash { get; }"}</code> |  |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> |  |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; protected set; }"}</code> |  |
| <Link id="m-overrideambience" /><code>{"Color? OverrideAmbience { get; set; }"}</code> |  |
| <Link id="m-priority-2" /><code>{"int Priority { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"virtual void Disable()"}</code> |  |
| <Link id="m-enable" /><code>{"void Enable()"}</code> |  |
| <Link id="m-initialize" /><code>{"virtual void Initialize("}<Link to="/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-mute" /><code>{"virtual void Mute(bool isMuted)"}</code> |  |
| <Link id="m-onconnect" /><code>{"virtual void OnConnect("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-startaudio" /><code>{"virtual void StartAudio()"}</code> |  |
| <Link id="m-startvalues" /><code>{"virtual void StartValues("}<Link to="/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" manager, int hash)"}</code> |  |
| <Link id="m-stopaudio" /><code>{"virtual void StopAudio()"}</code> |  |
| <Link id="m-enabled" /><code>{"protected abstract void Enabled()"}</code> |  |
| <Link id="m-reenabled" /><code>{"protected virtual void Reenabled()"}</code> |  |

## Used in

Members of other types that take, return or hold a `AtmospherePlugin`:

[`AtmosphereManager.AtmospherePlugins`](/game-api/types/alta-world/atmospheremanager#m-atmosphereplugins), [`AtmosphereManager.availablePlugins`](/game-api/types/alta-world/atmospheremanager#m-availableplugins), [`AtmosphereManager.CheckPriority`](/game-api/types/alta-world/atmospheremanager#m-checkpriority), [`AtmosphereManager.ClearPriority`](/game-api/types/alta-world/atmospheremanager#m-clearpriority), [`AtmosphereManager.GetHighestPlugin`](/game-api/types/alta-world/atmospheremanager#m-gethighestplugin), [`AtmosphereManager.MainAudio`](/game-api/types/alta-world/atmospheremanager#m-mainaudio), [`AtmosphereManager.SecondaryAudio`](/game-api/types/alta-world/atmospheremanager#m-secondaryaudio), [`AtmosphereManager.SetAudio`](/game-api/types/alta-world/atmospheremanager#m-setaudio), [`AtmosphereManager.SetupNewMainAudio`](/game-api/types/alta-world/atmospheremanager#m-setupnewmainaudio), [`AtmosphereSet.GetAudioPlayer`](/game-api/types/alta-world/atmosphereset#m-getaudioplayer).
