---
title: "LiveDataDisplayView"
description: "Client: the on-screen debug readout (FPS and similar stats) on the player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiveDataDisplayView

A **class** in `Root.Township`, `Alta.Utilities.Profiling`.

Client: the on-screen debug readout (FPS and similar stats) on the player. Toggled by the DisplayFPS controller action for users with the `debug_features` permission.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiveDataDisplayView()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidonscreentext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" androidOnScreenText"}</code> | Text renderer used on Android. |
| <Link id="m-datadisplays" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/livedatadisplaycollection">{"LiveDataDisplayCollection"}</Link>{" dataDisplays"}</code> | The set of data displays to run and show. |
| <Link id="m-lastdisplay" /><code>{"private string lastDisplay"}</code> | Last text shown, to skip unchanged updates. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger. |
| <Link id="m-pcscreentext" /><code>{"private Text pcScreenText"}</code> | UI text used on PC. |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | The player this view is on; found in a parent. |
| <Link id="m-stringbuilder" /><code>{"private readonly StringBuilder stringBuilder"}</code> | Reused builder for the display text. |
| <Link id="m-textupdateinterval" /><code>{"private float textUpdateInterval"}</code> | Seconds between text refreshes. |
| <Link id="m-textupdatetime" /><code>{"private float textUpdateTime"}</code> | Time since the last text refresh. |
| <Link id="m-updateinterval" /><code>{"private float updateInterval"}</code> | Seconds between data display updates. |
| <Link id="m-updatetime" /><code>{"private float updateTime"}</code> | Time since the last data display update. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-togglefpsdisplay" /><code>{"void ToggleFPSDisplay("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller = null)"}</code> | Turns the readout on or off, if Shift isn't held and the user has the `debug_features` permission. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gettext" /><code>{"private string GetText()"}</code> | Joins the output of every valid data display into one string, one per line. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Calls each data display's disable hook. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Calls each data display's enable hook. |
| <Link id="m-rundataaction" /><code>{"private void RunDataAction(Action<"}<Link to="/mod/game-api/types/alta-utilities/livedatadisplaybase">{"LiveDataDisplayBase"}</Link>{"> action, Predicate<"}<Link to="/mod/game-api/types/alta-utilities/livedatadisplaybase">{"LiveDataDisplayBase"}</Link>{"> predicate = null)"}</code> | Runs an action on every data display that passes an optional filter; warns if no displays are set. |
| <Link id="m-setscreentext" /><code>{"private void SetScreenText(string screenText)"}</code> | Shows text on the Android text renderer or the PC UI text, skipping it if unchanged. |
| <Link id="m-setscreentextactive" /><code>{"private void SetScreenTextActive(bool active)"}</code> | Shows or hides the Android or PC text object. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks the left controller's DisplayFPS action and starts disabled with the text hidden. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Updates the data displays and the shown text on their intervals. |
| <Link id="m-updatedatadisplay" /><code>{"private void UpdateDataDisplay()"}</code> | Rebuilds and shows the text every `textUpdateInterval` seconds. |
| <Link id="m-updatedatainternals" /><code>{"private void UpdateDataInternals()"}</code> | Runs each valid data display's internal update every `updateInterval` seconds. |

</details>

## Used in

Members of other types that take, return or hold a `LiveDataDisplayView`:

[`ToggleLiveDataDisplayMenuAction.liveDataDisplay`](/mod/game-api/types/alta-player/togglelivedatadisplaymenuaction#m-livedatadisplay), [`LastCombatHit.InternalUpdate`](/mod/game-api/types/alta-utilities/lastcombathit#m-internalupdate), [`LiveDataDisplayBase.InternalUpdate`](/mod/game-api/types/alta-utilities/livedatadisplaybase#m-internalupdate), [`NetworkBytesDisplay.InternalUpdate`](/mod/game-api/types/alta-utilities/networkbytesdisplay#m-internalupdate), [`NetworkMessagesDisplay.InternalUpdate`](/mod/game-api/types/alta-utilities/networkmessagesdisplay#m-internalupdate), [`NetworkPacketsDisplay.InternalUpdate`](/mod/game-api/types/alta-utilities/networkpacketsdisplay#m-internalupdate), [`PingDisplay.InternalUpdate`](/mod/game-api/types/alta-utilities/pingdisplay#m-internalupdate).
