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
| <Link id="m-ctor" /><code>{"ConfirmPopupPanel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelaction" /><code>{"private Action cancelAction"}</code> | <span className="api-desc">Callback run on cancel. Cleared when the cancel button is hidden.</span> |
| <Link id="m-cancelbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" cancelButton"}</code> | <span className="api-desc">The cancel button.</span> |
| <Link id="m-confirmaction" /><code>{"private Action confirmAction"}</code> | <span className="api-desc">Callback run on confirm.</span> |
| <Link id="m-confirmbutton" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" confirmButton"}</code> | <span className="api-desc">The confirm button.</span> |
| <Link id="m-messagetext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" messageText"}</code> | <span className="api-desc">Text showing the popup's message.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-cancelled" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/confirmpopuppanel">{"ConfirmPopupPanel"}</Link>{"> Cancelled"}</code> | <span className="api-desc">Raised after the cancel button runs its callback.</span> |
| <Link id="m-confirmed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-menus/confirmpopuppanel">{"ConfirmPopupPanel"}</Link>{"> Confirmed"}</code> | <span className="api-desc">Raised after the confirm button runs its callback.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(string message, string confirm = \"Confirm\", string cancel = \"Cancel\", Action confirmAction = null, Action cancelAction = null)"}</code> | <span className="api-desc">Sets the message, button labels and callbacks. Passing null for `cancel` hides the cancel button.</span> |
| <Link id="m-internalsetstate" /><code>{"protected override void InternalSetState(bool state, Action onFinished = null)"}</code> | <span className="api-desc">Shows or hides the panel, hooking the button handlers only while shown.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlecancelpressed" /><code>{"private void HandleCancelPressed("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | <span className="api-desc">Runs the cancel callback (logging any exception), raises `Cancelled` and hides the panel.</span> |
| <Link id="m-handleconfirmpressed" /><code>{"private void HandleConfirmPressed("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | <span className="api-desc">Runs the confirm callback (logging any exception), raises `Confirmed` and hides the panel.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ConfirmPopupPanel`:

<div className="api-used-in">

[`Window.CloseCurrentPopupCancelled`](/mod/game-api/types/alta-menus/window#m-closecurrentpopupcancelled), [`Window.CloseCurrentPopupConfirmed`](/mod/game-api/types/alta-menus/window#m-closecurrentpopupconfirmed), [`Window.confirmPopup`](/mod/game-api/types/alta-menus/window#m-confirmpopup).

</div>
