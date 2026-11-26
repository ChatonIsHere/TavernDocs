---
title: "KeyEventHandler"
description: "Callback for a keyboard key going down or up, used by KeyboardEventTriggers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KeyEventHandler

A **delegate** in `Root.Township`, the global namespace.

Callback for a keyboard key going down or up, used by `KeyboardEventTriggers`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KeyEventHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(Key key, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(Key key)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `KeyEventHandler`:

[`KeyboardEventTriggers.RegisterKeyPressed`](/mod/game-api/types/global-i-l/keyboardeventtriggers#m-registerkeypressed), [`KeyboardEventTriggers.KeyBoardTriggerHandler.Handler`](/mod/game-api/types/global-i-l/keyboardeventtriggers-keyboardtriggerhandler#m-handler), [`KeyboardEventTriggers.KeyBoardTriggerHandler.KeyBoardTriggerHandler`](/mod/game-api/types/global-i-l/keyboardeventtriggers-keyboardtriggerhandler#m-ctor), [`KeyboardEventTriggers.KeyTracker.KeyPressedDown`](/mod/game-api/types/global-i-l/keyboardeventtriggers-keytracker#m-keypresseddown), [`KeyboardEventTriggers.KeyTracker.KeyPressedUp`](/mod/game-api/types/global-i-l/keyboardeventtriggers-keytracker#m-keypressedup).
