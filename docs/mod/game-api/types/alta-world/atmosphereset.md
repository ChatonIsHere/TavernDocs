---
title: "AtmosphereSet"
description: "An asset listing which atmosphere plugins (sky, fog, ambient audio) to turn on or off for an area."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtmosphereSet

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

An asset listing which atmosphere plugins (sky, fog, ambient audio) to turn on or off for an area. Applied by `AtmosphereManager.ReadAtmosphereSet`.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`AtmosphereSet.Create`](/mod/game-api/types/alta-world/atmosphereset-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world/atmosphereset-create)
- **Attributes** `GlobalSettings`
- **Documented in** [Time and environment](/mod/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AtmosphereSet()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-disabledindices" /><code>{"List<int> disabledIndices"}</code> | Plugin indexes to turn off when `disableEverythingElse` is off. |
| <Link id="m-disableeverythingelse" /><code>{"bool disableEverythingElse"}</code> | Turns off every plugin not in `enabledIndices`. |
| <Link id="m-enabledindices" /><code>{"List<int> enabledIndices"}</code> | Plugin indexes to turn on. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-atmosphereauxbus" /><code>{"private AuxBus atmosphereAuxBus"}</code> | Backing field for `AtmosphereAuxBus`, a Wwise aux bus. |
| <Link id="m-targetaudiosource" /><code>{"private int targetAudioSource"}</code> | Hash of the atmosphere plugin that plays audio. -1 means the first enabled plugin. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-atmosphereauxbus-2" /><code>{"AuxBus AtmosphereAuxBus { get; }"}</code> | Wwise aux bus for this atmosphere. |
| <Link id="m-hasoverridenambience" /><code>{"bool HasOverridenAmbience { get; set; }"}</code> | Set by the manager when this set was applied with an ambient colour override. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaudioplayer" /><code><Link to="/mod/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{" GetAudioPlayer(IList<"}<Link to="/mod/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{"> plugins)"}</code> | The plugin to play ambient audio from: the target one if set, else the first enabled one. Null on headless. |

## Used in

Members of other types that take, return or hold a `AtmosphereSet`:

[`ChunkEnvironment.overrideSet`](/mod/game-api/types/alta-world/chunkenvironment#m-overrideset), [`ChunkEnvironment.OverrideSet`](/mod/game-api/types/alta-world/chunkenvironment#m-overrideset-2), [`AmbienceArea.ambienceSetIn`](/mod/game-api/types/alta-world/ambiencearea#m-ambiencesetin), [`AmbienceArea.ambienceSetOut`](/mod/game-api/types/alta-world/ambiencearea#m-ambiencesetout), [`AmbienceSpacePoint.from`](/mod/game-api/types/alta-world/ambiencespacepoint#m-from), [`AmbienceSpacePoint.From`](/mod/game-api/types/alta-world/ambiencespacepoint#m-from-2), [`AmbienceSpacePoint.to`](/mod/game-api/types/alta-world/ambiencespacepoint#m-to), [`AmbienceSpacePoint.To`](/mod/game-api/types/alta-world/ambiencespacepoint#m-to-2), [`AtmosphereManager.baseSet`](/mod/game-api/types/alta-world/atmospheremanager#m-baseset), [`AtmosphereManager.currentSet`](/mod/game-api/types/alta-world/atmospheremanager#m-currentset), [`AtmosphereManager.CurrentSet`](/mod/game-api/types/alta-world/atmospheremanager#m-currentset-2), [`AtmosphereManager.GetHighestPlugin`](/mod/game-api/types/alta-world/atmospheremanager#m-gethighestplugin), [`AtmosphereManager.ReadAtmosphereSet`](/mod/game-api/types/alta-world/atmospheremanager#m-readatmosphereset), [`AtmosphereManager.SetBackGroundAudioSet`](/mod/game-api/types/alta-world/atmospheremanager#m-setbackgroundaudioset), [`AtmosphereManager.ResolveAtmosphere.BeginInvoke`](/mod/game-api/types/alta-world/atmospheremanager-resolveatmosphere#m-begininvoke), [`AtmosphereManager.ResolveAtmosphere.EndInvoke`](/mod/game-api/types/alta-world/atmospheremanager-resolveatmosphere#m-endinvoke), [`AtmosphereManager.ResolveAtmosphere.Invoke`](/mod/game-api/types/alta-world/atmospheremanager-resolveatmosphere#m-invoke), [`BorderDefinedAtmosphere.insideSet`](/mod/game-api/types/alta-world/borderdefinedatmosphere#m-insideset), [`BorderDefinedAtmosphere.outsideSet`](/mod/game-api/types/alta-world/borderdefinedatmosphere#m-outsideset), [`ForestDefinedAtmosphere.forestSet`](/mod/game-api/types/alta-world/forestdefinedatmosphere#m-forestset), [`ForestDefinedAtmosphere.overworldSet`](/mod/game-api/types/alta-world/forestdefinedatmosphere#m-overworldset), [`ForestDefinedAtmosphere.Resolve`](/mod/game-api/types/alta-world/forestdefinedatmosphere#m-resolve), [`SpaceAtmosphereTrigger.usedSet`](/mod/game-api/types/alta-world/spaceatmospheretrigger#m-usedset), [`PlayerSpecialEffectsController.deadAtmosphereSet`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-deadatmosphereset).
