---
title: "AtmosphereSet"
description: "A set of colours, fog and audio. A chunk's Environment.OverrideSet can force one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtmosphereSet

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

A set of colours, fog and audio. A chunk's `Environment.OverrideSet` can force one.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`AtmosphereSet.Create`](/game-api/types/alta-world/atmosphereset-create)
- **Nested types** [`Create`](/game-api/types/alta-world/atmosphereset-create)
- **Attributes** `GlobalSettings`
- **Documented in** [Time and environment](/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AtmosphereSet()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-disabledindices" /><code>{"List<int> disabledIndices"}</code> |  |
| <Link id="m-disableeverythingelse" /><code>{"bool disableEverythingElse"}</code> |  |
| <Link id="m-enabledindices" /><code>{"List<int> enabledIndices"}</code> |  |
| <Link id="m-atmosphereauxbus" /><code>{"private AuxBus atmosphereAuxBus"}</code> |  |
| <Link id="m-targetaudiosource" /><code>{"private int targetAudioSource"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-atmosphereauxbus-2" /><code>{"AuxBus AtmosphereAuxBus { get; }"}</code> |  |
| <Link id="m-hasoverridenambience" /><code>{"bool HasOverridenAmbience { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaudioplayer" /><code><Link to="/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{" GetAudioPlayer(IList<"}<Link to="/game-api/types/alta-world/atmosphereplugin">{"AtmospherePlugin"}</Link>{"> plugins)"}</code> |  |

## Used in

Members of other types that take, return or hold a `AtmosphereSet`:

[`ChunkEnvironment.overrideSet`](/game-api/types/alta-world/chunkenvironment#m-overrideset), [`ChunkEnvironment.OverrideSet`](/game-api/types/alta-world/chunkenvironment#m-overrideset-2), [`AmbienceArea.ambienceSetIn`](/game-api/types/alta-world/ambiencearea#m-ambiencesetin), [`AmbienceArea.ambienceSetOut`](/game-api/types/alta-world/ambiencearea#m-ambiencesetout), [`AmbienceSpacePoint.from`](/game-api/types/alta-world/ambiencespacepoint#m-from), [`AmbienceSpacePoint.From`](/game-api/types/alta-world/ambiencespacepoint#m-from-2), [`AmbienceSpacePoint.to`](/game-api/types/alta-world/ambiencespacepoint#m-to), [`AmbienceSpacePoint.To`](/game-api/types/alta-world/ambiencespacepoint#m-to-2), [`AtmosphereManager.baseSet`](/game-api/types/alta-world/atmospheremanager#m-baseset), [`AtmosphereManager.currentSet`](/game-api/types/alta-world/atmospheremanager#m-currentset), [`AtmosphereManager.CurrentSet`](/game-api/types/alta-world/atmospheremanager#m-currentset-2), [`AtmosphereManager.GetHighestPlugin`](/game-api/types/alta-world/atmospheremanager#m-gethighestplugin), [`AtmosphereManager.ReadAtmosphereSet`](/game-api/types/alta-world/atmospheremanager#m-readatmosphereset), [`AtmosphereManager.SetBackGroundAudioSet`](/game-api/types/alta-world/atmospheremanager#m-setbackgroundaudioset), [`AtmosphereManager.ResolveAtmosphere.BeginInvoke`](/game-api/types/alta-world/atmospheremanager-resolveatmosphere#m-begininvoke), [`AtmosphereManager.ResolveAtmosphere.EndInvoke`](/game-api/types/alta-world/atmospheremanager-resolveatmosphere#m-endinvoke), [`AtmosphereManager.ResolveAtmosphere.Invoke`](/game-api/types/alta-world/atmospheremanager-resolveatmosphere#m-invoke), [`BorderDefinedAtmosphere.insideSet`](/game-api/types/alta-world/borderdefinedatmosphere#m-insideset), [`BorderDefinedAtmosphere.outsideSet`](/game-api/types/alta-world/borderdefinedatmosphere#m-outsideset), [`ForestDefinedAtmosphere.forestSet`](/game-api/types/alta-world/forestdefinedatmosphere#m-forestset), [`ForestDefinedAtmosphere.overworldSet`](/game-api/types/alta-world/forestdefinedatmosphere#m-overworldset), [`ForestDefinedAtmosphere.Resolve`](/game-api/types/alta-world/forestdefinedatmosphere#m-resolve), [`SpaceAtmosphereTrigger.usedSet`](/game-api/types/alta-world/spaceatmospheretrigger#m-usedset), [`PlayerSpecialEffectsController.deadAtmosphereSet`](/game-api/types/global-p/playerspecialeffectscontroller#m-deadatmosphereset).
