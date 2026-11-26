---
title: "LiveDataDisplayBase"
description: "Base asset for one line of the live debug data display (a title and a value)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiveDataDisplayBase

An **abstract class** in `Root.Township`, `Alta.Utilities.Profiling`.

Base asset for one line of the live debug data display (a title and a value). Subclasses supply the value text.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ChunkDisplay`](/mod/game-api/types/alta-utilities/chunkdisplay), [`FpsDisplay`](/mod/game-api/types/alta-utilities/fpsdisplay), [`GraphicsLevelDisplay`](/mod/game-api/types/alta-utilities/graphicsleveldisplay), [`LastCombatHit`](/mod/game-api/types/alta-utilities/lastcombathit), [`NetworkBytesDisplay`](/mod/game-api/types/alta-utilities/networkbytesdisplay), [`NetworkMessagesDisplay`](/mod/game-api/types/alta-utilities/networkmessagesdisplay), [`NetworkPacketsDisplay`](/mod/game-api/types/alta-utilities/networkpacketsdisplay), [`PingDisplay`](/mod/game-api/types/alta-utilities/pingdisplay), [`PlayerCountDisplay`](/mod/game-api/types/alta-utilities/playercountdisplay), [`ServerDiagnosticsDisplay`](/mod/game-api/types/alta-utilities/serverdiagnosticsdisplay), [`ServerFpsDisplay`](/mod/game-api/types/alta-utilities/serverfpsdisplay), [`TotalDamageDisplay`](/mod/game-api/types/alta-utilities/totaldamagedisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LiveDataDisplayBase()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-editoronly" /><code>{"private bool editorOnly"}</code> | <span className="api-desc">Backing field for `EditorOnly`. When set, `IsValid` is false outside the editor.</span> |
| <Link id="m-overridetitle" /><code>{"private string overrideTitle"}</code> | <span className="api-desc">Optional title shown instead of the subclass's `Title`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-editoronly-2" /><code>{"bool EditorOnly { get; }"}</code> | <span className="api-desc">If true, the line is only valid in the Unity editor.</span> |
| <Link id="m-output" /><code>{"virtual string Output { get; }"}</code> | <span className="api-desc">The title (or override title), a colon and the value.</span> |
| <Link id="m-title" /><code>{"protected virtual string Title { get; }"}</code> | <span className="api-desc">Default title, used when no override is set.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finaltitle" /><code>{"private string FinalTitle { get; }"}</code> | <span className="api-desc">`overrideTitle` if it is set, otherwise the subclass's `Title`. Used as the prefix of `Output`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-internalupdate" /><code>{"virtual void InternalUpdate("}<Link to="/mod/game-api/types/alta-utilities/livedatadisplayview">{"LiveDataDisplayView"}</Link>{" view)"}</code> | <span className="api-desc">Per-update hook with the display view. Does nothing by default.</span> |
| <Link id="m-isvalid" /><code>{"virtual bool IsValid()"}</code> | <span className="api-desc">Whether the line should show. False outside the editor for editor-only lines.</span> |
| <Link id="m-runondisable" /><code>{"virtual void RunOnDisable()"}</code> | <span className="api-desc">Hook called when the display is turned off.</span> |
| <Link id="m-runonenable" /><code>{"virtual void RunOnEnable()"}</code> | <span className="api-desc">Hook called when the display is turned on.</span> |
| <Link id="m-getdata" /><code>{"protected abstract string GetData()"}</code> | <span className="api-desc">Returns the value text.</span> |

## Used in

Members of other types that take, return or hold a `LiveDataDisplayBase`:

<div className="api-used-in">

[`LiveDataDisplayCollection.DataDisplays`](/mod/game-api/types/alta-utilities/livedatadisplaycollection#m-datadisplays), [`LiveDataDisplayView.RunDataAction`](/mod/game-api/types/alta-utilities/livedatadisplayview#m-rundataaction).

</div>
