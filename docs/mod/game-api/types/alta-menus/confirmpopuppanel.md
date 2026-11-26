---
title: "ConfirmPopupPanel"
description: "Client: menu popup with a message and confirm and cancel buttons."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConfirmPopupPanel

A **class** in `Root.Township`, `Alta.Meta.UI`.

Client: menu popup with a message and confirm and cancel buttons. Call `Setup` with the text and callbacks, then show it; it hides itself after either button.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`Panel`](/mod/game-api/types/alta-menus/panel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConfirmPopupPanel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelaction" /><code>{"private Action cancelAction"}</code> | Callback run on cancel. Cleared when the cancel button is hidden. |
| <Link id="m-cancelbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" cancelButton"}</code> | The cancel button. |
| <Link id="m-confirmaction" /><code>{"private Action confirmAction"}</code> | Callback run on confirm. |
| <Link id="m-confirmbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" confirmButton"}</code> | The confirm button. |
| <Link id="m-messagetext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" messageText"}</code> | Text showing the popup's message. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-cancelled" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/confirmpopuppanel">{"ConfirmPopupPanel"}</Link>{"> Cancelled"}</code> | Raised after the cancel button runs its callback. |
| <Link id="m-confirmed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/confirmpopuppanel">{"ConfirmPopupPanel"}</Link>{"> Confirmed"}</code> | Raised after the confirm button runs its callback. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(string message, string confirm = \"Confirm\", string cancel = \"Cancel\", Action confirmAction = null, Action cancelAction = null)"}</code> | Sets the message, button labels and callbacks. Passing null for `cancel` hides the cancel button. |
| <Link id="m-internalsetstate" /><code>{"protected override void InternalSetState(bool state, Action onFinished = null)"}</code> | Shows or hides the panel, hooking the button handlers only while shown. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlecancelpressed" /><code>{"private void HandleCancelPressed("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | Runs the cancel callback (logging any exception), raises `Cancelled` and hides the panel. |
| <Link id="m-handleconfirmpressed" /><code>{"private void HandleConfirmPressed("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | Runs the confirm callback (logging any exception), raises `Confirmed` and hides the panel. |

</details>

## Used in

Members of other types that take, return or hold a `ConfirmPopupPanel`:

[`Window.CloseCurrentPopupCancelled`](/mod/game-api/types/alta-menus/window#m-closecurrentpopupcancelled), [`Window.CloseCurrentPopupConfirmed`](/mod/game-api/types/alta-menus/window#m-closecurrentpopupconfirmed), [`Window.confirmPopup`](/mod/game-api/types/alta-menus/window#m-confirmpopup).
