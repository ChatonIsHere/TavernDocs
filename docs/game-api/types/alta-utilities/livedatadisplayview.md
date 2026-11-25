---
title: "LiveDataDisplayView"
description: "class LiveDataDisplayView in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiveDataDisplayView

A **class** in `Root.Township`, `Alta.Utilities.Profiling`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiveDataDisplayView()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-androidonscreentext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" androidOnScreenText"}</code> |  |
| <Link id="m-datadisplays" /><code>{"private "}<Link to="/game-api/types/alta-utilities/livedatadisplaycollection">{"LiveDataDisplayCollection"}</Link>{" dataDisplays"}</code> |  |
| <Link id="m-lastdisplay" /><code>{"private string lastDisplay"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-pcscreentext" /><code>{"private Text pcScreenText"}</code> |  |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> |  |
| <Link id="m-stringbuilder" /><code>{"private readonly StringBuilder stringBuilder"}</code> |  |
| <Link id="m-textupdateinterval" /><code>{"private float textUpdateInterval"}</code> |  |
| <Link id="m-textupdatetime" /><code>{"private float textUpdateTime"}</code> |  |
| <Link id="m-updateinterval" /><code>{"private float updateInterval"}</code> |  |
| <Link id="m-updatetime" /><code>{"private float updateTime"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-togglefpsdisplay" /><code>{"void ToggleFPSDisplay("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller = null)"}</code> |  |
| <Link id="m-gettext" /><code>{"private string GetText()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-rundataaction" /><code>{"private void RunDataAction(Action<"}<Link to="/game-api/types/alta-utilities/livedatadisplaybase">{"LiveDataDisplayBase"}</Link>{"> action, Predicate<"}<Link to="/game-api/types/alta-utilities/livedatadisplaybase">{"LiveDataDisplayBase"}</Link>{"> predicate = null)"}</code> |  |
| <Link id="m-setscreentext" /><code>{"private void SetScreenText(string screenText)"}</code> |  |
| <Link id="m-setscreentextactive" /><code>{"private void SetScreenTextActive(bool active)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
| <Link id="m-updatedatadisplay" /><code>{"private void UpdateDataDisplay()"}</code> |  |
| <Link id="m-updatedatainternals" /><code>{"private void UpdateDataInternals()"}</code> |  |

## Used in

Members of other types that take, return or hold a `LiveDataDisplayView`:

[`ToggleLiveDataDisplayMenuAction.liveDataDisplay`](/game-api/types/alta-player/togglelivedatadisplaymenuaction#m-livedatadisplay), [`LastCombatHit.InternalUpdate`](/game-api/types/alta-utilities/lastcombathit#m-internalupdate), [`LiveDataDisplayBase.InternalUpdate`](/game-api/types/alta-utilities/livedatadisplaybase#m-internalupdate), [`NetworkBytesDisplay.InternalUpdate`](/game-api/types/alta-utilities/networkbytesdisplay#m-internalupdate), [`NetworkMessagesDisplay.InternalUpdate`](/game-api/types/alta-utilities/networkmessagesdisplay#m-internalupdate), [`NetworkPacketsDisplay.InternalUpdate`](/game-api/types/alta-utilities/networkpacketsdisplay#m-internalupdate), [`PingDisplay.InternalUpdate`](/game-api/types/alta-utilities/pingdisplay#m-internalupdate).
