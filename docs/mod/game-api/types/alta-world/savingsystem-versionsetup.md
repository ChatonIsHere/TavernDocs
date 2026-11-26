---
title: "SavingSystem.VersionSetup"
description: "One save data version of a saved type: the data class and its lazily built serializer and activator."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SavingSystem.VersionSetup

A **class** in `Root.Township`, `Alta.Saving`.

One save data version of a saved type: the data class and its lazily built serializer and activator. Kept per version number by `SavingSystem.SavingSetup`.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Nested in** [`SavingSystem`](/mod/game-api/types/alta-world/savingsystem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VersionSetup(Type type)"}</code> | <span className="api-desc">Creates a `SavingSystem.VersionSetup` from `type`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activator" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/typeserializationhelper-objectactivator">{"TypeSerializationHelper.ObjectActivator"}</Link>{" activator"}</code> | <span className="api-desc">Cached constructor delegate, built on first `CreateInstance`.</span> |
| <Link id="m-datatype" /><code>{"private Type dataType"}</code> | <span className="api-desc">Backing field for `Type`.</span> |
| <Link id="m-serializer" /><code>{"private Action<"}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{", "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> serializer"}</code> | <span className="api-desc">Cached serializer delegate, built on first `Serialize`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-type" /><code>{"Type Type { get; }"}</code> | <span className="api-desc">The save data class for this version.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createinstance" /><code>{"object CreateInstance()"}</code> | <span className="api-desc">Creates a new instance of the data type through a cached activator.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" topic, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | <span className="api-desc">Reads or writes a save topic with this version's generated serializer, building it on first use.</span> |

## Used in

Members of other types that take, return or hold a `VersionSetup`:

<div className="api-used-in">

[`SavingSystem.SavingSetup.GetSetup`](/mod/game-api/types/alta-world/savingsystem-savingsetup#m-getsetup), [`SavingSystem.SavingSetup.latestSetup`](/mod/game-api/types/alta-world/savingsystem-savingsetup#m-latestsetup), [`SavingSystem.SavingSetup.LatestSetup`](/mod/game-api/types/alta-world/savingsystem-savingsetup#m-latestsetup-2), [`SavingSystem.SavingSetup.versions`](/mod/game-api/types/alta-world/savingsystem-savingsetup#m-versions).

</div>
