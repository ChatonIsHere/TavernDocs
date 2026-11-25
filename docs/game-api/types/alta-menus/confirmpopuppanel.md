---
title: "ConfirmPopupPanel"
description: "class ConfirmPopupPanel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConfirmPopupPanel

A **class** in `Root.Township`, `Alta.Meta.UI`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`Panel`](/game-api/types/alta-menus/panel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConfirmPopupPanel()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cancelaction" /><code>{"private Action cancelAction"}</code> |  |
| <Link id="m-cancelbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" cancelButton"}</code> |  |
| <Link id="m-confirmaction" /><code>{"private Action confirmAction"}</code> |  |
| <Link id="m-confirmbutton" /><code>{"private "}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" confirmButton"}</code> |  |
| <Link id="m-messagetext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" messageText"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-cancelled" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/confirmpopuppanel">{"ConfirmPopupPanel"}</Link>{"> Cancelled"}</code> |  |
| <Link id="m-confirmed" /><code>{"event Action<"}<Link to="/game-api/types/alta-menus/confirmpopuppanel">{"ConfirmPopupPanel"}</Link>{"> Confirmed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(string message, string confirm = \"Confirm\", string cancel = \"Cancel\", Action confirmAction = null, Action cancelAction = null)"}</code> |  |
| <Link id="m-handlecancelpressed" /><code>{"private void HandleCancelPressed("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> |  |
| <Link id="m-handleconfirmpressed" /><code>{"private void HandleConfirmPressed("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> |  |
| <Link id="m-internalsetstate" /><code>{"protected override void InternalSetState(bool state, Action onFinished = null)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ConfirmPopupPanel`:

[`Window.CloseCurrentPopupCancelled`](/game-api/types/alta-menus/window#m-closecurrentpopupcancelled), [`Window.CloseCurrentPopupConfirmed`](/game-api/types/alta-menus/window#m-closecurrentpopupconfirmed), [`Window.confirmPopup`](/game-api/types/alta-menus/window#m-confirmpopup).
