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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Window()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-confirmpopup" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/confirmpopuppanel">{"ConfirmPopupPanel"}</Link>{" confirmPopup"}</code> | <span className="api-desc">The panel used by `ShowConfirmPopup`.</span> |
| <Link id="m-confirmpopuptask" /><code>{"private TaskCompletionSource<bool> confirmPopupTask"}</code> | <span className="api-desc">Task for the open confirm popup's answer.</span> |
| <Link id="m-isautostarting" /><code>{"private bool isAutoStarting"}</code> | <span className="api-desc">Whether the window opens its starting panel on `Start`.</span> |
| <Link id="m-loadingui" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/loadingui">{"LoadingUI"}</Link>{" loadingUI"}</code> | <span className="api-desc">Loading indicator toggled by `SetLoadingActive`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for panel switches.</span> |
| <Link id="m-onstarted" /><code>{"private UnityEvent onStarted"}</code> | <span className="api-desc">Inspector event raised when the window starts.</span> |
| <Link id="m-optionspanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/optionspanel">{"OptionsPanel"}</Link>{" optionsPanel"}</code> | <span className="api-desc">Panel used by `ShowOptions`.</span> |
| <Link id="m-simpletextpanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/simpletextpanel">{"SimpleTextPanel"}</Link>{" simpleTextPanel"}</code> | <span className="api-desc">Panel used by `ShowTextPanel`.</span> |
| <Link id="m-startingpanel" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" startingPanel"}</code> | <span className="api-desc">Panel shown when the window starts.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentpanel" /><code><Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" CurrentPanel { get; private set; }"}</code> | <span className="api-desc">The panel being shown.</span> |
| <Link id="m-currentpopup" /><code><Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" CurrentPopup { get; private set; }"}</code> | <span className="api-desc">The popup being shown, such as the confirm popup. Null when none is open.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-started" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/window">{"Window"}</Link>{"> Started"}</code> | <span className="api-desc">Raised when `StartWindow` runs.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-closeallpopups" /><code>{"void CloseAllPopups()"}</code> | <span className="api-desc">Hides the current popup and the options panel.</span> |
| <Link id="m-setloadingactive" /><code>{"void SetLoadingActive(bool loadingState)"}</code> | <span className="api-desc">Shows or hides the loading UI.</span> |
| <Link id="m-showconfirmpopup" /><code>{"Task<bool> ShowConfirmPopup(string message, string confirm = \"Confirm\", string cancel = \"Cancel\", Action confirmAction = null, Action cancelAction = null)"}</code> | <span className="api-desc">Shows a confirm popup with the given text and button labels. The task returns true if confirmed, false if cancelled.</span> |
| <Link id="m-showloadingfortask" /><code>{"async Task<T> ShowLoadingForTask<T>(Task<T> task)"}</code> | <span className="api-desc">Shows the loading UI until the task finishes. Errors are logged, and only rethrown if asked.</span> |
| <Link id="m-showloadingfortask-2" /><code>{"async Task ShowLoadingForTask(Task task, bool propogateErrors = false)"}</code> | <span className="api-desc">Shows the loading UI until the task finishes. Errors are logged, and only rethrown if asked.</span> |
| <Link id="m-showoptions" /><code>{"void ShowOptions(IEnumerable<"}<Link to="/mod/game-api/types/alta-menus/optionsconfig">{"OptionsConfig"}</Link>{"> optionsConfig, string message = null)"}</code> | <span className="api-desc">Shows the options panel with the given choices and an optional message.</span> |
| <Link id="m-showtextpanel" /><code>{"void ShowTextPanel(string text)"}</code> | <span className="api-desc">Sets the text of the simple text panel.</span> |
| <Link id="m-startwindow" /><code>{"void StartWindow()"}</code> | <span className="api-desc">Switches to the starting panel and raises `Started`. Called on Start unless auto start is off.</span> |
| <Link id="m-stopwindow" /><code>{"void StopWindow()"}</code> | <span className="api-desc">Hides the current panel.</span> |
| <Link id="m-switchtopanel" /><code>{"void SwitchToPanel("}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | <span className="api-desc">Closes popups, hides the current panel and shows the new one once the old one has finished hiding.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-closecurrentpopupcancelled" /><code>{"private void CloseCurrentPopupCancelled("}<Link to="/mod/game-api/types/alta-menus/confirmpopuppanel">{"ConfirmPopupPanel"}</Link>{" obj)"}</code> | <span className="api-desc">Clears the popup and completes the confirm task with false.</span> |
| <Link id="m-closecurrentpopupconfirmed" /><code>{"private void CloseCurrentPopupConfirmed("}<Link to="/mod/game-api/types/alta-menus/confirmpopuppanel">{"ConfirmPopupPanel"}</Link>{" obj)"}</code> | <span className="api-desc">Clears the popup and completes the confirm task with true.</span> |
| <Link id="m-finishpopupswitch" /><code>{"private void FinishPopupSwitch("}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | <span className="api-desc">Shows the new popup after the old one has closed.</span> |
| <Link id="m-finishswitch" /><code>{"private void FinishSwitch("}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | <span className="api-desc">Shows the new panel after the old one has closed.</span> |
| <Link id="m-showaspopup" /><code>{"private void ShowAsPopup("}<Link to="/mod/game-api/types/alta-menus/panel">{"Panel"}</Link>{" panel)"}</code> | <span className="api-desc">Closes the current popup if any, then shows the given panel as the popup.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Starts the window if `isAutoStarting` is set.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Window`:

<div className="api-used-in">

[`Panel.window`](/mod/game-api/types/alta-menus/panel#m-window), [`Panel.Window`](/mod/game-api/types/alta-menus/panel#m-window-2), [`LoggedInWindow.targetWindow`](/mod/game-api/types/alta-menus/loggedinwindow#m-targetwindow), [`LoggedInWindow.WindowStarted`](/mod/game-api/types/alta-menus/loggedinwindow#m-windowstarted), [`GymnasiumTeleportTablet.window`](/mod/game-api/types/game-other-namespaces/gymnasiumteleporttablet#m-window), [`SocialTablet.window`](/mod/game-api/types/global-s/socialtablet#m-window).

</div>
