---
title: "DevToolsBoard"
description: "class DevToolsBoard in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DevToolsBoard

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject), [`IQuickAccessSettingsBoard`](/game-api/types/alta-player/iquickaccesssettingsboard)
- **Nested types** [`SettingTypeScaler`](/game-api/types/alta-player/devtoolsboard-settingtypescaler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DevToolsBoard()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-player/devtoolsboard">{"DevToolsBoard"}</Link>{" Instance"}</code> |  |
| <Link id="m-activesettings" /><code>{"private readonly List<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"> activeSettings"}</code> |  |
| <Link id="m-console" /><code>{"private "}<Link to="/game-api/types/global-q-r/runtimeconsole">{"RuntimeConsole"}</Link>{" console"}</code> |  |
| <Link id="m-currentpanel" /><code>{"private int currentPanel"}</code> |  |
| <Link id="m-currentpanelsettingscount" /><code>{"private int currentPanelSettingsCount"}</code> |  |
| <Link id="m-distancebetweensettings" /><code>{"private float distanceBetweenSettings"}</code> |  |
| <Link id="m-enablebuttonsdelay" /><code>{"private float enableButtonsDelay"}</code> |  |
| <Link id="m-hoverpickup" /><code>{"private "}<Link to="/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" hoverPickup"}</code> |  |
| <Link id="m-nextpagebutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" nextPageButton"}</code> |  |
| <Link id="m-panelcount" /><code>{"private int panelCount"}</code> |  |
| <Link id="m-previouspagebutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" previousPageButton"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/settingsquickaccessmenu">{"SettingsQuickAccessMenu"}</Link>{" settings"}</code> |  |
| <Link id="m-settingsparent" /><code>{"private Transform settingsParent"}</code> |  |
| <Link id="m-settingsperpanel" /><code>{"private int settingsPerPanel"}</code> |  |
| <Link id="m-settingstodisplay" /><code>{"private readonly List<"}<Link to="/game-api/types/alta-utilities/settingsfieldaccess">{"SettingsFieldAccess"}</Link>{"> settingsToDisplay"}</code> |  |
| <Link id="m-settingtypescalers" /><code>{"private "}<Link to="/game-api/types/alta-player/devtoolsboard-settingtypescaler">{"DevToolsBoard.SettingTypeScaler"}</Link>{"[] settingTypeScalers"}</code> |  |
| <Link id="m-showconsolebutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" showConsoleButton"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> |  |
| <Link id="m-panelsettingsoffset" /><code>{"private int PanelSettingsOffset { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-distancedisabled" /><code>{"event Action DistanceDisabled"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-nextpanel" /><code>{"void NextPanel("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> |  |
| <Link id="m-previouspanel" /><code>{"void PreviousPanel("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> |  |
| <Link id="m-release" /><code>{"override void Release()"}</code> |  |
| <Link id="m-setruntimeconsoleactivestate" /><code>{"void SetRuntimeConsoleActiveState(bool activeState, out "}<Link to="/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" user)"}</code> |  |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-player/settingsquickaccessmenu">{"SettingsQuickAccessMenu"}</Link>{" settings)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-clearcurrentpanel" /><code>{"private void ClearCurrentPanel()"}</code> |  |
| <Link id="m-disablebuttons" /><code>{"private void DisableButtons("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> |  |
| <Link id="m-hover" /><code>{"private void Hover("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-openpanel" /><code>{"private void OpenPanel()"}</code> |  |
| <Link id="m-safesubscribe" /><code>{"private static void SafeSubscribe("}<Link to="/game-api/types/alta-menus/textbutton">{"TextButton"}</Link>{" button, Action<"}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{"> action)"}</code> |  |
| <Link id="m-scalecontrol" /><code>{"private void ScaleControl("}<Link to="/game-api/types/alta-utilities/settingtype">{"SettingType"}</Link>{" type, Transform control)"}</code> |  |
| <Link id="m-setbuttonsenabled" /><code>{"private void SetButtonsEnabled(bool activeState)"}</code> |  |
| <Link id="m-setupbuttons" /><code>{"private void SetupButtons()"}</code> |  |
| <Link id="m-showsettingcontrols" /><code>{"private void ShowSettingControls()"}</code> |  |
| <Link id="m-temporarydisablebuttons" /><code>{"private IEnumerator TemporaryDisableButtons() (iterator)"}</code> |  |
| <Link id="m-toggleconsole" /><code>{"private void ToggleConsole("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" button)"}</code> |  |
