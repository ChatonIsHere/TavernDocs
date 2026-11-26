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
| <Link id="m-ctor" /><code>{"LiveDataDisplayView()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidonscreentext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" androidOnScreenText"}</code> | <span className="api-desc">Text renderer used on Android.</span> |
| <Link id="m-datadisplays" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/livedatadisplaycollection">{"LiveDataDisplayCollection"}</Link>{" dataDisplays"}</code> | <span className="api-desc">The set of data displays to run and show.</span> |
| <Link id="m-lastdisplay" /><code>{"private string lastDisplay"}</code> | <span className="api-desc">Last text shown, to skip unchanged updates.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger.</span> |
| <Link id="m-pcscreentext" /><code>{"private Text pcScreenText"}</code> | <span className="api-desc">UI text used on PC.</span> |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | <span className="api-desc">The player this view is on; found in a parent.</span> |
| <Link id="m-stringbuilder" /><code>{"private readonly StringBuilder stringBuilder"}</code> | <span className="api-desc">Reused builder for the display text.</span> |
| <Link id="m-textupdateinterval" /><code>{"private float textUpdateInterval"}</code> | <span className="api-desc">Seconds between text refreshes.</span> |
| <Link id="m-textupdatetime" /><code>{"private float textUpdateTime"}</code> | <span className="api-desc">Time since the last text refresh.</span> |
| <Link id="m-updateinterval" /><code>{"private float updateInterval"}</code> | <span className="api-desc">Seconds between data display updates.</span> |
| <Link id="m-updatetime" /><code>{"private float updateTime"}</code> | <span className="api-desc">Time since the last data display update.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-togglefpsdisplay" /><code>{"void ToggleFPSDisplay("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller = null)"}</code> | <span className="api-desc">Turns the readout on or off, if Shift isn't held and the user has the `debug_features` permission.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gettext" /><code>{"private string GetText()"}</code> | <span className="api-desc">Joins the output of every valid data display into one string, one per line.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Calls each data display's disable hook.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Calls each data display's enable hook.</span> |
| <Link id="m-rundataaction" /><code>{"private void RunDataAction(Action<"}<Link to="/mod/game-api/types/alta-utilities/livedatadisplaybase">{"LiveDataDisplayBase"}</Link>{"> action, Predicate<"}<Link to="/mod/game-api/types/alta-utilities/livedatadisplaybase">{"LiveDataDisplayBase"}</Link>{"> predicate = null)"}</code> | <span className="api-desc">Runs an action on every data display that passes an optional filter; warns if no displays are set.</span> |
| <Link id="m-setscreentext" /><code>{"private void SetScreenText(string screenText)"}</code> | <span className="api-desc">Shows text on the Android text renderer or the PC UI text, skipping it if unchanged.</span> |
| <Link id="m-setscreentextactive" /><code>{"private void SetScreenTextActive(bool active)"}</code> | <span className="api-desc">Shows or hides the Android or PC text object.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks the left controller's DisplayFPS action and starts disabled with the text hidden.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Updates the data displays and the shown text on their intervals.</span> |
| <Link id="m-updatedatadisplay" /><code>{"private void UpdateDataDisplay()"}</code> | <span className="api-desc">Rebuilds and shows the text every `textUpdateInterval` seconds.</span> |
| <Link id="m-updatedatainternals" /><code>{"private void UpdateDataInternals()"}</code> | <span className="api-desc">Runs each valid data display's internal update every `updateInterval` seconds.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LiveDataDisplayView`:

<div className="api-used-in">

[`ToggleLiveDataDisplayMenuAction.liveDataDisplay`](/mod/game-api/types/alta-player/togglelivedatadisplaymenuaction#m-livedatadisplay), [`LastCombatHit.InternalUpdate`](/mod/game-api/types/alta-utilities/lastcombathit#m-internalupdate), [`LiveDataDisplayBase.InternalUpdate`](/mod/game-api/types/alta-utilities/livedatadisplaybase#m-internalupdate), [`NetworkBytesDisplay.InternalUpdate`](/mod/game-api/types/alta-utilities/networkbytesdisplay#m-internalupdate), [`NetworkMessagesDisplay.InternalUpdate`](/mod/game-api/types/alta-utilities/networkmessagesdisplay#m-internalupdate), [`NetworkPacketsDisplay.InternalUpdate`](/mod/game-api/types/alta-utilities/networkpacketsdisplay#m-internalupdate), [`PingDisplay.InternalUpdate`](/mod/game-api/types/alta-utilities/pingdisplay#m-internalupdate).

</div>
