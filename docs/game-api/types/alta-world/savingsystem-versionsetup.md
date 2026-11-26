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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested in** [`SavingSystem`](/game-api/types/alta-world/savingsystem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VersionSetup(Type type)"}</code> | Creates a `SavingSystem.VersionSetup` from `type`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activator" /><code>{"private "}<Link to="/game-api/types/global-t-x/typeserializationhelper-objectactivator">{"TypeSerializationHelper.ObjectActivator"}</Link>{" activator"}</code> | Cached constructor delegate, built on first `CreateInstance`. |
| <Link id="m-datatype" /><code>{"private Type dataType"}</code> | Backing field for `Type`. |
| <Link id="m-serializer" /><code>{"private Action<"}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{", "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> serializer"}</code> | Cached serializer delegate, built on first `Serialize`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-type" /><code>{"Type Type { get; }"}</code> | The save data class for this version. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createinstance" /><code>{"object CreateInstance()"}</code> | Creates a new instance of the data type through a cached activator. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" topic, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Reads or writes a save topic with this version's generated serializer, building it on first use. |

## Used in

Members of other types that take, return or hold a `VersionSetup`:

[`SavingSystem.SavingSetup.GetSetup`](/game-api/types/alta-world/savingsystem-savingsetup#m-getsetup), [`SavingSystem.SavingSetup.latestSetup`](/game-api/types/alta-world/savingsystem-savingsetup#m-latestsetup), [`SavingSystem.SavingSetup.LatestSetup`](/game-api/types/alta-world/savingsystem-savingsetup#m-latestsetup-2), [`SavingSystem.SavingSetup.versions`](/game-api/types/alta-world/savingsystem-savingsetup#m-versions).
