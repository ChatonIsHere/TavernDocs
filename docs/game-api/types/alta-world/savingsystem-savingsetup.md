---
title: "SavingSystem.SavingSetup"
description: "How one savable type is saved: its hash, every save data version registered with SaveStructure, and its parent type's setup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SavingSystem.SavingSetup

A **class** in `Root.Township`, `Alta.Saving`.

How one savable type is saved: its hash, every save data version registered with `SaveStructure`, and its parent type's setup. Built by `SavingSystem` at startup.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested in** [`SavingSystem`](/game-api/types/alta-world/savingsystem)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SavingSetup(Type topic)"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-latestsetup" /><code>{"private "}<Link to="/game-api/types/alta-world/savingsystem-versionsetup">{"SavingSystem.VersionSetup"}</Link>{" latestSetup"}</code> | Setup for the newest save format version. Exposed as `LatestSetup`. |
| <Link id="m-latestversion" /><code>{"private uint latestVersion"}</code> | The newest save format version number. Exposed as `LatestVersion`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger. |
| <Link id="m-savemethod" /><code>{"private static MethodInfo saveMethod"}</code> | Reflection handle to `SaveInternal`. |
| <Link id="m-typetoversion" /><code>{"private Dictionary<Type, uint> typeToVersion"}</code> | Version number for each save data type. |
| <Link id="m-versions" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/alta-world/savingsystem-versionsetup">{"SavingSystem.VersionSetup"}</Link>{"> versions"}</code> | Setup for each save format version. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; private set; }"}</code> | The type's save hash, from `SavingInfo` or the hash of its class name. |
| <Link id="m-iscomponent" /><code>{"bool IsComponent { get; private set; }"}</code> | Whether the type is a Unity component. |
| <Link id="m-istag" /><code>{"bool IsTag { get; private set; }"}</code> | Whether the type is a tag, added to the entity on load if missing. |
| <Link id="m-latestsetup-2" /><code><Link to="/game-api/types/alta-world/savingsystem-versionsetup">{"SavingSystem.VersionSetup"}</Link>{" LatestSetup { get; }"}</code> | The version setup for the latest version. |
| <Link id="m-latestversion-2" /><code>{"uint LatestVersion { get; }"}</code> | The highest registered version. |
| <Link id="m-parent" /><code><Link to="/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{" Parent { get; private set; }"}</code> | The setup of the nearest base type that is also saved, written after this one. |
| <Link id="m-save" /><code>{"Func<object, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{", "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{"> Save { get; private set; }"}</code> | Calls the target's `ISavable.Save` for the latest data type. |
| <Link id="m-topic" /><code>{"Type Topic { get; }"}</code> | The savable type this setup is for. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(uint version, Type dataType)"}</code> | Registers a save data type for a version. The highest version becomes the latest. |
| <Link id="m-finishinitialization" /><code>{"void FinishInitialization(Dictionary<Type, "}<Link to="/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{"> map)"}</code> | Links the parent setup and builds `Save`. Logs an error if the type doesn't implement `ISavable` for its latest data type. |
| <Link id="m-getsetup" /><code><Link to="/game-api/types/alta-world/savingsystem-versionsetup">{"SavingSystem.VersionSetup"}</Link>{" GetSetup(uint version)"}</code> | The version setup for a version number, or null. |
| <Link id="m-getversion" /><code>{"uint GetVersion("}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" data)"}</code> | The version number of a save data object's type, or 0. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cast" /><code>{"private static T Cast<T>(object value)"}</code> | Casts an object to a type. Not called in this class. |
| <Link id="m-processinfo" /><code>{"private void ProcessInfo()"}</code> | Reads the hash and tag flag from `SavingInfoAttribute`, or hashes the type name if there is no hash. |
| <Link id="m-saveinternal" /><code>{"private static "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" SaveInternal<T>(object target, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" children)"}</code> | Calls the type's `ISavable` `Save` for a given save data type; bound into `Save` by reflection. |

</details>

## Used in

Members of other types that take, return or hold a `SavingSetup`:

[`SavingSystem.GetSetupOfData`](/game-api/types/alta-world/savingsystem#m-getsetupofdata), [`SavingSystem.Migrate`](/game-api/types/alta-world/savingsystem#m-migrate), [`SavingSystem.Read`](/game-api/types/alta-world/savingsystem#m-read), [`SavingSystem.savingSetups`](/game-api/types/alta-world/savingsystem#m-savingsetups), [`SavingSystem.savingTypes`](/game-api/types/alta-world/savingsystem#m-savingtypes), [`SavingSystem.Write`](/game-api/types/alta-world/savingsystem#m-write).
