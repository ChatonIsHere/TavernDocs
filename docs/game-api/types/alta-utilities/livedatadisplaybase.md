---
title: "LiveDataDisplayBase"
description: "abstract class LiveDataDisplayBase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiveDataDisplayBase

An **abstract class** in `Root.Township`, `Alta.Utilities.Profiling`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ChunkDisplay`](/game-api/types/alta-utilities/chunkdisplay), [`FpsDisplay`](/game-api/types/alta-utilities/fpsdisplay), [`GraphicsLevelDisplay`](/game-api/types/alta-utilities/graphicsleveldisplay), [`LastCombatHit`](/game-api/types/alta-utilities/lastcombathit), [`NetworkBytesDisplay`](/game-api/types/alta-utilities/networkbytesdisplay), [`NetworkMessagesDisplay`](/game-api/types/alta-utilities/networkmessagesdisplay), [`NetworkPacketsDisplay`](/game-api/types/alta-utilities/networkpacketsdisplay), [`PingDisplay`](/game-api/types/alta-utilities/pingdisplay), [`PlayerCountDisplay`](/game-api/types/alta-utilities/playercountdisplay), [`ServerDiagnosticsDisplay`](/game-api/types/alta-utilities/serverdiagnosticsdisplay), [`ServerFpsDisplay`](/game-api/types/alta-utilities/serverfpsdisplay), [`TotalDamageDisplay`](/game-api/types/alta-utilities/totaldamagedisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LiveDataDisplayBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-editoronly" /><code>{"private bool editorOnly"}</code> |  |
| <Link id="m-overridetitle" /><code>{"private string overrideTitle"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-editoronly-2" /><code>{"bool EditorOnly { get; }"}</code> |  |
| <Link id="m-output" /><code>{"virtual string Output { get; }"}</code> |  |
| <Link id="m-finaltitle" /><code>{"private string FinalTitle { get; }"}</code> |  |
| <Link id="m-title" /><code>{"protected virtual string Title { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-internalupdate" /><code>{"virtual void InternalUpdate("}<Link to="/game-api/types/alta-utilities/livedatadisplayview">{"LiveDataDisplayView"}</Link>{" view)"}</code> |  |
| <Link id="m-isvalid" /><code>{"virtual bool IsValid()"}</code> |  |
| <Link id="m-runondisable" /><code>{"virtual void RunOnDisable()"}</code> |  |
| <Link id="m-runonenable" /><code>{"virtual void RunOnEnable()"}</code> |  |
| <Link id="m-getdata" /><code>{"protected abstract string GetData()"}</code> |  |

## Used in

Members of other types that take, return or hold a `LiveDataDisplayBase`:

[`LiveDataDisplayCollection.DataDisplays`](/game-api/types/alta-utilities/livedatadisplaycollection#m-datadisplays), [`LiveDataDisplayView.RunDataAction`](/game-api/types/alta-utilities/livedatadisplayview#m-rundataaction).
