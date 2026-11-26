---
title: "Window"
description: "Client: a menu screen made of panels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Window

A **class** in `Root.Township`, `Alta.Meta.UI`.

Client: a menu screen made of panels. Shows one panel at a time plus popups (confirm, options, loading).

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Window()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-confirmpopup" /><code>{"private "}<Link to="/game-api/types/alta-menus/confirmpopuppanel">{"ConfirmPopupPanel"}</Link>{" confirmPopup"}</code> | The panel used by `ShowConfirmPopup`. |
| <Link id="m-confirmpopuptask" /><code>{"private TaskCompletionSource<bool> confirmPopupTask"}</code> | Task for the open confirm popup's answer. |
| <Link id="m-isautostarting" /><code>{"private bool isAutoStarting"}</code> | Whether the window opens its starting panel on `Start`. |
| <Link id="m-loadingui" /><code>{"private "}<Link to="/game-api/types/alta-menus/loadingui">{"LoadingUI"}</Link>{" loadingUI"}</code> | Loading indicator toggled by `SetLoadingActive`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for panel switches. |
| <Link id="m-onstarted" /><code>{"private UnityEvent onStarted"}</code> | Inspector event raised when the window starts. |
| <Link id="m-optionspanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/optionspanel">{"OptionsPanel"}</Link>{" optionsPanel"}</code> | Panel used by `ShowOptions`. |
| <Link id="m-simpletextpanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/simpletextpanel">{"SimpleTextPanel"}</Link>{" simpleTextPanel"}</code> | Panel used by `ShowTextPanel`. |
| <Link id="m-startingpanel" /><code>{"private "}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" startingPanel"}</code> | Panel shown when the window starts. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentpanel" /><code><Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" CurrentPanel { get; private set; }"}</code> | The panel being shown. |
| <Link id="m-currentpopup" /><code><Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" CurrentPopup { get; private set; }"}</code> | The popup being shown, such as the confirm popup. Null when none is open. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-started" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/window">{"Window"}</Link>{"> Started"}</code> | Raised when `StartWindow` runs. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-closeallpopups" /><code>{"void CloseAllPopups()"}</code> | Hides the current popup and the options panel. |
| <Link id="m-setloadingactive" /><code>{"void SetLoadingActive(bool loadingState)"}</code> | Shows or hides the loading UI. |
| <Link id="m-showconfirmpopup" /><code>{"Task<bool> ShowConfirmPopup(string message, string confirm = \"Confirm\", string cancel = \"Cancel\", Action confirmAction = null, Action cancelAction = null)"}</code> | Shows a confirm popup with the given text and button labels. The task returns true if confirmed, false if cancelled. |
| <Link id="m-showloadingfortask" /><code>{"async Task<T> ShowLoadingForTask<T>(Task<T> task)"}</code> | Shows the loading UI until the task finishes. Errors are logged, and only rethrown if asked. |
| <Link id="m-showloadingfortask-2" /><code>{"async Task ShowLoadingForTask(Task task, bool propogateErrors = false)"}</code> | Shows the loading UI until the task finishes. Errors are logged, and only rethrown if asked. |
| <Link id="m-showoptions" /><code>{"void ShowOptions(IEnumerable<"}<Link to="/game-api/types/alta-menus/optionsconfig">{"OptionsConfig"}</Link>{"> optionsConfig, string message = null)"}</code> | Shows the options panel with the given choices and an optional message. |
| <Link id="m-showtextpanel" /><code>{"void ShowTextPanel(string text)"}</code> | Sets the text of the simple text panel. |
| <Link id="m-startwindow" /><code>{"void StartWindow()"}</code> | Switches to the starting panel and raises `Started`. Called on Start unless auto start is off. |
| <Link id="m-stopwindow" /><code>{"void StopWindow()"}</code> | Hides the current panel. |
| <Link id="m-switchtopanel" /><code>{"void SwitchToPanel("}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | Closes popups, hides the current panel and shows the new one once the old one has finished hiding. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-closecurrentpopupcancelled" /><code>{"private void CloseCurrentPopupCancelled("}<Link to="/game-api/types/alta-menus/confirmpopuppanel">{"ConfirmPopupPanel"}</Link>{" obj)"}</code> | Clears the popup and completes the confirm task with false. |
| <Link id="m-closecurrentpopupconfirmed" /><code>{"private void CloseCurrentPopupConfirmed("}<Link to="/game-api/types/alta-menus/confirmpopuppanel">{"ConfirmPopupPanel"}</Link>{" obj)"}</code> | Clears the popup and completes the confirm task with true. |
| <Link id="m-finishpopupswitch" /><code>{"private void FinishPopupSwitch("}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | Shows the new popup after the old one has closed. |
| <Link id="m-finishswitch" /><code>{"private void FinishSwitch("}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | Shows the new panel after the old one has closed. |
| <Link id="m-showaspopup" /><code>{"private void ShowAsPopup("}<Link to="/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | Closes the current popup if any, then shows the given panel as the popup. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Starts the window if `isAutoStarting` is set. |

</details>

## Used in

Members of other types that take, return or hold a `Window`:

[`Panel.window`](/game-api/types/alta-menus/panel#m-window), [`Panel.Window`](/game-api/types/alta-menus/panel#m-window-2), [`LoggedInWindow.targetWindow`](/game-api/types/alta-menus/loggedinwindow#m-targetwindow), [`LoggedInWindow.WindowStarted`](/game-api/types/alta-menus/loggedinwindow#m-windowstarted), [`GymnasiumTeleportTablet.window`](/game-api/types/game-other-namespaces/gymnasiumteleporttablet#m-window), [`SocialTablet.window`](/game-api/types/global-s/socialtablet#m-window).
