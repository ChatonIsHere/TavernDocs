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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Nested in** [`SavingSystem`](/mod/game-api/types/alta-world/savingsystem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SavingSetup(Type topic)"}</code> | <span className="api-desc">Creates a `SavingSystem.SavingSetup` from `topic`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-latestsetup" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/savingsystem-versionsetup">{"SavingSystem.VersionSetup"}</Link>{" latestSetup"}</code> | <span className="api-desc">Setup for the newest save format version. Exposed as `LatestSetup`.</span> |
| <Link id="m-latestversion" /><code>{"private uint latestVersion"}</code> | <span className="api-desc">The newest save format version number. Exposed as `LatestVersion`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger.</span> |
| <Link id="m-savemethod" /><code>{"private static MethodInfo saveMethod"}</code> | <span className="api-desc">Reflection handle to `SaveInternal`.</span> |
| <Link id="m-typetoversion" /><code>{"private Dictionary<Type, uint> typeToVersion"}</code> | <span className="api-desc">Version number for each save data type.</span> |
| <Link id="m-versions" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/alta-world/savingsystem-versionsetup">{"SavingSystem.VersionSetup"}</Link>{"> versions"}</code> | <span className="api-desc">Setup for each save format version.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; private set; }"}</code> | <span className="api-desc">The type's save hash, from `SavingInfo` or the hash of its class name.</span> |
| <Link id="m-iscomponent" /><code>{"bool IsComponent { get; private set; }"}</code> | <span className="api-desc">Whether the type is a Unity component.</span> |
| <Link id="m-istag" /><code>{"bool IsTag { get; private set; }"}</code> | <span className="api-desc">Whether the type is a tag, added to the entity on load if missing.</span> |
| <Link id="m-latestsetup-2" /><code><Link to="/mod/game-api/types/alta-world/savingsystem-versionsetup">{"SavingSystem.VersionSetup"}</Link>{" LatestSetup { get; }"}</code> | <span className="api-desc">The version setup for the latest version.</span> |
| <Link id="m-latestversion-2" /><code>{"uint LatestVersion { get; }"}</code> | <span className="api-desc">The highest registered version.</span> |
| <Link id="m-parent" /><code><Link to="/mod/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{" Parent { get; private set; }"}</code> | <span className="api-desc">The setup of the nearest base type that is also saved, written after this one.</span> |
| <Link id="m-save" /><code>{"Func<object, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{"> Save { get; private set; }"}</code> | <span className="api-desc">Calls the target's `ISavable.Save` for the latest data type.</span> |
| <Link id="m-topic" /><code>{"Type Topic { get; }"}</code> | <span className="api-desc">The savable type this setup is for.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(uint version, Type dataType)"}</code> | <span className="api-desc">Registers a save data type for a version. The highest version becomes the latest.</span> |
| <Link id="m-finishinitialization" /><code>{"void FinishInitialization(Dictionary<Type, "}<Link to="/mod/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{"> map)"}</code> | <span className="api-desc">Links the parent setup and builds `Save`. Logs an error if the type doesn't implement `ISavable` for its latest data type.</span> |
| <Link id="m-getsetup" /><code><Link to="/mod/game-api/types/alta-world/savingsystem-versionsetup">{"SavingSystem.VersionSetup"}</Link>{" GetSetup(uint version)"}</code> | <span className="api-desc">The version setup for a version number, or null.</span> |
| <Link id="m-getversion" /><code>{"uint GetVersion("}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" data)"}</code> | <span className="api-desc">The version number of a save data object's type, or 0.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cast" /><code>{"private static T Cast<T>(object value)"}</code> | <span className="api-desc">Casts an object to a type. Not called in this class.</span> |
| <Link id="m-processinfo" /><code>{"private void ProcessInfo()"}</code> | <span className="api-desc">Reads the hash and tag flag from `SavingInfoAttribute`, or hashes the type name if there is no hash.</span> |
| <Link id="m-saveinternal" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" SaveInternal<T>(object target, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" children)"}</code> | <span className="api-desc">Calls the type's `ISavable` `Save` for a given save data type; bound into `Save` by reflection.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SavingSetup`:

<div className="api-used-in">

[`SavingSystem.GetSetupOfData`](/mod/game-api/types/alta-world/savingsystem#m-getsetupofdata), [`SavingSystem.Migrate`](/mod/game-api/types/alta-world/savingsystem#m-migrate), [`SavingSystem.Read`](/mod/game-api/types/alta-world/savingsystem#m-read), [`SavingSystem.savingSetups`](/mod/game-api/types/alta-world/savingsystem#m-savingsetups), [`SavingSystem.savingTypes`](/mod/game-api/types/alta-world/savingsystem#m-savingtypes), [`SavingSystem.Write`](/mod/game-api/types/alta-world/savingsystem#m-write).

</div>
