---
title: "DevToolsBoard"
description: "Pooled developer board showing pages of settings controls plus a runtime console toggle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DevToolsBoard

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Pooled developer board showing pages of settings controls plus a runtime console toggle. `Instance` is set while one is enabled.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject), [`IQuickAccessSettingsBoard`](/mod/game-api/types/alta-player/iquickaccesssettingsboard)
- **Nested types** [`SettingTypeScaler`](/mod/game-api/types/alta-player/devtoolsboard-settingtypescaler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DevToolsBoard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-player/devtoolsboard">{"DevToolsBoard"}</Link>{" Instance"}</code> | <span className="api-desc">The open board, or null once released.</span> |

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activesettings" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeSettings"}</code> | <span className="api-desc">Controls spawned for the current page.</span> |
| <Link id="m-console" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/runtimeconsole">{"RuntimeConsole"}</Link>{" console"}</code> | <span className="api-desc">The runtime console on the board.</span> |
| <Link id="m-currentpanel" /><code>{"private int currentPanel"}</code> | <span className="api-desc">Index of the shown page.</span> |
| <Link id="m-currentpanelsettingscount" /><code>{"private int currentPanelSettingsCount"}</code> | <span className="api-desc">Number of settings on the shown page.</span> |
| <Link id="m-distancebetweensettings" /><code>{"private float distanceBetweenSettings"}</code> | <span className="api-desc">Vertical gap between controls.</span> |
| <Link id="m-enablebuttonsdelay" /><code>{"private float enableButtonsDelay"}</code> | <span className="api-desc">Seconds the buttons stay off after a press.</span> |
| <Link id="m-hoverpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" hoverPickup"}</code> | <span className="api-desc">Pickup that floats the board in place.</span> |
| <Link id="m-nextpagebutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" nextPageButton"}</code> | <span className="api-desc">Button for the next page.</span> |
| <Link id="m-panelcount" /><code>{"private int panelCount"}</code> | <span className="api-desc">Number of pages.</span> |
| <Link id="m-previouspagebutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" previousPageButton"}</code> | <span className="api-desc">Button for the previous page.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/settingsquickaccessmenu">{"SettingsQuickAccessMenu"}</Link>{" settings"}</code> | <span className="api-desc">The settings menu action that opened the board.</span> |
| <Link id="m-settingsparent" /><code>{"private Transform settingsParent"}</code> | <span className="api-desc">Where the controls are spawned.</span> |
| <Link id="m-settingsperpanel" /><code>{"private int settingsPerPanel"}</code> | <span className="api-desc">Settings per page.</span> |
| <Link id="m-settingstodisplay" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/alta-utilities/settingsfieldaccess">{"SettingsFieldAccess"}</Link>{"> settingsToDisplay"}</code> | <span className="api-desc">The valid settings to show, across all pages.</span> |
| <Link id="m-settingtypescalers" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/devtoolsboard-settingtypescaler">{"DevToolsBoard.SettingTypeScaler"}</Link>{"[] settingTypeScalers"}</code> | <span className="api-desc">Extra scale for controls of each setting type.</span> |
| <Link id="m-showconsolebutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" showConsoleButton"}</code> | <span className="api-desc">Button that toggles the console.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | <span className="api-desc">The board's transform.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-panelsettingsoffset" /><code>{"private int PanelSettingsOffset { get; }"}</code> | <span className="api-desc">Index of the first setting on the current page.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-distancedisabled" /><code>{"event Action DistanceDisabled"}</code> | <span className="api-desc">Event from the board interface; this board never raises it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-nextpanel" /><code>{"void NextPanel("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | <span className="api-desc">Shows the next page of settings, wrapping round.</span> |
| <Link id="m-previouspanel" /><code>{"void PreviousPanel("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | <span className="api-desc">Shows the previous page of settings, wrapping round.</span> |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Clears the page and `Instance` and returns the board to its pool.</span> |
| <Link id="m-setruntimeconsoleactivestate" /><code>{"void SetRuntimeConsoleActiveState(bool activeState, out "}<Link to="/mod/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" user)"}</code> | <span className="api-desc">Shows or hides the console and returns its keyboard user when shown. Used by the assisted spawn command.</span> |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/alta-player/settingsquickaccessmenu">{"SettingsQuickAccessMenu"}</Link>{" settings)"}</code> | <span className="api-desc">Loads the valid settings from a settings menu action, splits them into pages and shows the first.</span> |

<details className="api-private">
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the hover pickup so the board floats back to its spot when let go.</span> |
| <Link id="m-clearcurrentpanel" /><code>{"private void ClearCurrentPanel()"}</code> | <span className="api-desc">Releases the setting controls on the current page.</span> |
| <Link id="m-disablebuttons" /><code>{"private void DisableButtons("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | <span className="api-desc">Briefly disables the page and console buttons after a press.</span> |
| <Link id="m-hover" /><code>{"private void Hover("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">After the hover pickup is let go, sets it to float back to the board.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Sets `Instance` to this board.</span> |
| <Link id="m-openpanel" /><code>{"private void OpenPanel()"}</code> | <span className="api-desc">Works out how many settings fit on the current page and shows them.</span> |
| <Link id="m-safesubscribe" /><code>{"private static void SafeSubscribe("}<Link to="/mod/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" button, Action<"}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{"> action)"}</code> | <span className="api-desc">Subscribes a handler to a button's press without adding it twice.</span> |
| <Link id="m-scalecontrol" /><code>{"private void ScaleControl("}<Link to="/mod/game-api/types/alta-utilities/settingtype">{"SettingType"}</Link>{" type, Transform control)"}</code> | <span className="api-desc">Scales a setting control by the scaler set for its setting type.</span> |
| <Link id="m-setbuttonsenabled" /><code>{"private void SetButtonsEnabled(bool activeState)"}</code> | <span className="api-desc">Turns the page and console buttons on or off.</span> |
| <Link id="m-setupbuttons" /><code>{"private void SetupButtons()"}</code> | <span className="api-desc">Hooks the page and console buttons.</span> |
| <Link id="m-showsettingcontrols" /><code>{"private void ShowSettingControls()"}</code> | <span className="api-desc">Spawns pooled controls for the current page's settings, filled from server or game settings.</span> |
| <Link id="m-temporarydisablebuttons" /><code>{"private IEnumerator TemporaryDisableButtons() (iterator)"}</code> | <span className="api-desc">Coroutine that disables the buttons for `enableButtonsDelay` seconds when there are several pages.</span> |
| <Link id="m-toggleconsole" /><code>{"private void ToggleConsole("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | <span className="api-desc">Shows or hides the runtime console.</span> |

</details>
