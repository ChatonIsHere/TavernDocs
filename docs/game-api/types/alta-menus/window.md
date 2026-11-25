---
title: "Window"
description: "class Window in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Window

A **class** in `Root.Township`, `Alta.Meta.UI`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Window()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-confirmpopup" /><code>{"private "}<Link to="/game-api/types/alta-menus/confirmpopuppanel">{"ConfirmPopupPanel"}</Link>{" confirmPopup"}</code> |  |
| <Link id="m-confirmpopuptask" /><code>{"private TaskCompletionSource<bool> confirmPopupTask"}</code> |  |
| <Link id="m-isautostarting" /><code>{"private bool isAutoStarting"}</code> |  |
| <Link id="m-loadingui" /><code>{"private "}<Link to="/game-api/types/alta-menus/loadingui">{"LoadingUI"}</Link>{" loadingUI"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-onstarted" /><code>{"private UnityEvent onStarted"}</code> |  |
| <Link id="m-optionspanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/optionspanel">{"OptionsPanel"}</Link>{" optionsPanel"}</code> |  |
| <Link id="m-simpletextpanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/simpletextpanel">{"SimpleTextPanel"}</Link>{" simpleTextPanel"}</code> |  |
| <Link id="m-startingpanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" startingPanel"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentpanel" /><code><Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" CurrentPanel { get; private set; }"}</code> |  |
| <Link id="m-currentpopup" /><code><Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" CurrentPopup { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-started" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/window">{"Window"}</Link>{"> Started"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-closeallpopups" /><code>{"void CloseAllPopups()"}</code> |  |
| <Link id="m-setloadingactive" /><code>{"void SetLoadingActive(bool loadingState)"}</code> |  |
| <Link id="m-showconfirmpopup" /><code>{"Task<bool> ShowConfirmPopup(string message, string confirm = \"Confirm\", string cancel = \"Cancel\", Action confirmAction = null, Action cancelAction = null)"}</code> |  |
| <Link id="m-showloadingfortask" /><code>{"async Task<T> ShowLoadingForTask<T>(Task<T> task)"}</code> |  |
| <Link id="m-showloadingfortask-2" /><code>{"async Task ShowLoadingForTask(Task task, bool propogateErrors = false)"}</code> |  |
| <Link id="m-showoptions" /><code>{"void ShowOptions(IEnumerable<"}<Link to="/game-api/types/alta-menus/optionsconfig">{"OptionsConfig"}</Link>{"> optionsConfig, string message = null)"}</code> |  |
| <Link id="m-showtextpanel" /><code>{"void ShowTextPanel(string text)"}</code> |  |
| <Link id="m-startwindow" /><code>{"void StartWindow()"}</code> |  |
| <Link id="m-stopwindow" /><code>{"void StopWindow()"}</code> |  |
| <Link id="m-switchtopanel" /><code>{"void SwitchToPanel("}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> |  |
| <Link id="m-closecurrentpopupcancelled" /><code>{"private void CloseCurrentPopupCancelled("}<Link to="/game-api/types/alta-menus/confirmpopuppanel">{"ConfirmPopupPanel"}</Link>{" obj)"}</code> |  |
| <Link id="m-closecurrentpopupconfirmed" /><code>{"private void CloseCurrentPopupConfirmed("}<Link to="/game-api/types/alta-menus/confirmpopuppanel">{"ConfirmPopupPanel"}</Link>{" obj)"}</code> |  |
| <Link id="m-finishpopupswitch" /><code>{"private void FinishPopupSwitch("}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> |  |
| <Link id="m-finishswitch" /><code>{"private void FinishSwitch("}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> |  |
| <Link id="m-showaspopup" /><code>{"private void ShowAsPopup("}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Window`:

[`Panel.window`](/game-api/types/alta-menus/panel#m-window), [`Panel.Window`](/game-api/types/alta-menus/panel#m-window-2), [`LoggedInWindow.targetWindow`](/game-api/types/alta-menus/loggedinwindow#m-targetwindow), [`LoggedInWindow.WindowStarted`](/game-api/types/alta-menus/loggedinwindow#m-windowstarted), [`GymnasiumTeleportTablet.window`](/game-api/types/game-other-namespaces/gymnasiumteleporttablet#m-window), [`SocialTablet.window`](/game-api/types/global-s/socialtablet#m-window).
