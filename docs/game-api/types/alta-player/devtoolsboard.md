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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject), [`IQuickAccessSettingsBoard`](/game-api/types/alta-player/iquickaccesssettingsboard)
- **Nested types** [`SettingTypeScaler`](/game-api/types/alta-player/devtoolsboard-settingtypescaler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DevToolsBoard()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-player/devtoolsboard">{"DevToolsBoard"}</Link>{" Instance"}</code> | The open board, or null once released. |

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activesettings" /><code>{"private readonly List<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeSettings"}</code> | Controls spawned for the current page. |
| <Link id="m-console" /><code>{"private "}<Link to="/game-api/types/global-q-r/runtimeconsole">{"RuntimeConsole"}</Link>{" console"}</code> | The runtime console on the board. |
| <Link id="m-currentpanel" /><code>{"private int currentPanel"}</code> | Index of the shown page. |
| <Link id="m-currentpanelsettingscount" /><code>{"private int currentPanelSettingsCount"}</code> | Number of settings on the shown page. |
| <Link id="m-distancebetweensettings" /><code>{"private float distanceBetweenSettings"}</code> | Vertical gap between controls. |
| <Link id="m-enablebuttonsdelay" /><code>{"private float enableButtonsDelay"}</code> | Seconds the buttons stay off after a press. |
| <Link id="m-hoverpickup" /><code>{"private "}<Link to="/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" hoverPickup"}</code> | Pickup that floats the board in place. |
| <Link id="m-nextpagebutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" nextPageButton"}</code> | Button for the next page. |
| <Link id="m-panelcount" /><code>{"private int panelCount"}</code> | Number of pages. |
| <Link id="m-previouspagebutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" previousPageButton"}</code> | Button for the previous page. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/settingsquickaccessmenu">{"SettingsQuickAccessMenu"}</Link>{" settings"}</code> | The settings menu action that opened the board. |
| <Link id="m-settingsparent" /><code>{"private Transform settingsParent"}</code> | Where the controls are spawned. |
| <Link id="m-settingsperpanel" /><code>{"private int settingsPerPanel"}</code> | Settings per page. |
| <Link id="m-settingstodisplay" /><code>{"private readonly List<"}<Link to="/game-api/types/alta-utilities/settingsfieldaccess">{"SettingsFieldAccess"}</Link>{"> settingsToDisplay"}</code> | The valid settings to show, across all pages. |
| <Link id="m-settingtypescalers" /><code>{"private "}<Link to="/game-api/types/alta-player/devtoolsboard-settingtypescaler">{"DevToolsBoard.SettingTypeScaler"}</Link>{"[] settingTypeScalers"}</code> | Extra scale for controls of each setting type. |
| <Link id="m-showconsolebutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" showConsoleButton"}</code> | Button that toggles the console. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | The board's transform. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-panelsettingsoffset" /><code>{"private int PanelSettingsOffset { get; }"}</code> | Index of the first setting on the current page. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-distancedisabled" /><code>{"event Action DistanceDisabled"}</code> | Event from the board interface; this board never raises it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-nextpanel" /><code>{"void NextPanel("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | Shows the next page of settings, wrapping round. |
| <Link id="m-previouspanel" /><code>{"void PreviousPanel("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | Shows the previous page of settings, wrapping round. |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Clears the page and `Instance` and returns the board to its pool. |
| <Link id="m-setruntimeconsoleactivestate" /><code>{"void SetRuntimeConsoleActiveState(bool activeState, out "}<Link to="/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" user)"}</code> | Shows or hides the console and returns its keyboard user when shown. Used by the assisted spawn command. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-player/settingsquickaccessmenu">{"SettingsQuickAccessMenu"}</Link>{" settings)"}</code> | Loads the valid settings from a settings menu action, splits them into pages and shows the first. |

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the hover pickup so the board floats back to its spot when let go. |
| <Link id="m-clearcurrentpanel" /><code>{"private void ClearCurrentPanel()"}</code> | Releases the setting controls on the current page. |
| <Link id="m-disablebuttons" /><code>{"private void DisableButtons("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | Briefly disables the page and console buttons after a press. |
| <Link id="m-hover" /><code>{"private void Hover("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | After the hover pickup is let go, sets it to float back to the board. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Sets `Instance` to this board. |
| <Link id="m-openpanel" /><code>{"private void OpenPanel()"}</code> | Works out how many settings fit on the current page and shows them. |
| <Link id="m-safesubscribe" /><code>{"private static void SafeSubscribe("}<Link to="/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" button, Action<"}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{"> action)"}</code> | Subscribes a handler to a button's press without adding it twice. |
| <Link id="m-scalecontrol" /><code>{"private void ScaleControl("}<Link to="/game-api/types/alta-utilities/settingtype">{"SettingType"}</Link>{" type, Transform control)"}</code> | Scales a setting control by the scaler set for its setting type. |
| <Link id="m-setbuttonsenabled" /><code>{"private void SetButtonsEnabled(bool activeState)"}</code> | Turns the page and console buttons on or off. |
| <Link id="m-setupbuttons" /><code>{"private void SetupButtons()"}</code> | Hooks the page and console buttons. |
| <Link id="m-showsettingcontrols" /><code>{"private void ShowSettingControls()"}</code> | Spawns pooled controls for the current page's settings, filled from server or game settings. |
| <Link id="m-temporarydisablebuttons" /><code>{"private IEnumerator TemporaryDisableButtons() (iterator)"}</code> | Coroutine that disables the buttons for `enableButtonsDelay` seconds when there are several pages. |
| <Link id="m-toggleconsole" /><code>{"private void ToggleConsole("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> | Shows or hides the runtime console. |

</details>
