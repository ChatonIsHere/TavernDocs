---
title: "SavingSystem.SavingSetup"
description: "class SavingSystem.SavingSetup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SavingSystem.SavingSetup

A **class** in `Root.Township`, `Alta.Saving`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested in** [`SavingSystem`](/game-api/types/alta-world/savingsystem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SavingSetup(Type topic)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-latestsetup" /><code>{"private "}<Link to="/game-api/types/alta-world/savingsystem-versionsetup">{"SavingSystem.VersionSetup"}</Link>{" latestSetup"}</code> |  |
| <Link id="m-latestversion" /><code>{"private uint latestVersion"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-savemethod" /><code>{"private static MethodInfo saveMethod"}</code> |  |
| <Link id="m-typetoversion" /><code>{"private Dictionary<Type, uint> typeToVersion"}</code> |  |
| <Link id="m-versions" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/alta-world/savingsystem-versionsetup">{"SavingSystem.VersionSetup"}</Link>{"> versions"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; private set; }"}</code> |  |
| <Link id="m-iscomponent" /><code>{"bool IsComponent { get; private set; }"}</code> |  |
| <Link id="m-istag" /><code>{"bool IsTag { get; private set; }"}</code> |  |
| <Link id="m-latestsetup-2" /><code><Link to="/game-api/types/alta-world/savingsystem-versionsetup">{"SavingSystem.VersionSetup"}</Link>{" LatestSetup { get; }"}</code> |  |
| <Link id="m-latestversion-2" /><code>{"uint LatestVersion { get; }"}</code> |  |
| <Link id="m-parent" /><code><Link to="/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{" Parent { get; private set; }"}</code> |  |
| <Link id="m-save" /><code>{"Func<object, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{", "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{"> Save { get; private set; }"}</code> |  |
| <Link id="m-topic" /><code>{"Type Topic { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(uint version, Type dataType)"}</code> |  |
| <Link id="m-finishinitialization" /><code>{"void FinishInitialization(Dictionary<Type, "}<Link to="/game-api/types/alta-world/savingsystem-savingsetup">{"SavingSystem.SavingSetup"}</Link>{"> map)"}</code> |  |
| <Link id="m-getsetup" /><code><Link to="/game-api/types/alta-world/savingsystem-versionsetup">{"SavingSystem.VersionSetup"}</Link>{" GetSetup(uint version)"}</code> |  |
| <Link id="m-getversion" /><code>{"uint GetVersion("}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" data)"}</code> |  |
| <Link id="m-cast" /><code>{"private static T Cast<T>(object value)"}</code> |  |
| <Link id="m-processinfo" /><code>{"private void ProcessInfo()"}</code> |  |
| <Link id="m-saveinternal" /><code>{"private static "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" SaveInternal<T>(object target, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" children)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SavingSetup`:

[`SavingSystem.GetSetupOfData`](/game-api/types/alta-world/savingsystem#m-getsetupofdata), [`SavingSystem.Migrate`](/game-api/types/alta-world/savingsystem#m-migrate), [`SavingSystem.Read`](/game-api/types/alta-world/savingsystem#m-read), [`SavingSystem.savingSetups`](/game-api/types/alta-world/savingsystem#m-savingsetups), [`SavingSystem.savingTypes`](/game-api/types/alta-world/savingsystem#m-savingtypes), [`SavingSystem.Write`](/game-api/types/alta-world/savingsystem#m-write).
