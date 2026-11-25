---
title: "SavingSystem.VersionSetup"
description: "class SavingSystem.VersionSetup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SavingSystem.VersionSetup

A **class** in `Root.Township`, `Alta.Saving`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested in** [`SavingSystem`](/game-api/types/alta-world/savingsystem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VersionSetup(Type type)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activator" /><code>{"private "}<Link to="/game-api/types/global-t-x/typeserializationhelper-objectactivator">{"TypeSerializationHelper.ObjectActivator"}</Link>{" activator"}</code> |  |
| <Link id="m-datatype" /><code>{"private Type dataType"}</code> |  |
| <Link id="m-serializer" /><code>{"private Action<"}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{", "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{", "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{"> serializer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-type" /><code>{"Type Type { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createinstance" /><code>{"object CreateInstance()"}</code> |  |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" topic, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> |  |

## Used in

Members of other types that take, return or hold a `VersionSetup`:

[`SavingSystem.SavingSetup.GetSetup`](/game-api/types/alta-world/savingsystem-savingsetup#m-getsetup), [`SavingSystem.SavingSetup.latestSetup`](/game-api/types/alta-world/savingsystem-savingsetup#m-latestsetup), [`SavingSystem.SavingSetup.LatestSetup`](/game-api/types/alta-world/savingsystem-savingsetup#m-latestsetup-2), [`SavingSystem.SavingSetup.versions`](/game-api/types/alta-world/savingsystem-savingsetup#m-versions).
