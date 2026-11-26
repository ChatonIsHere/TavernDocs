---
title: "KeyboardEventTriggers.KeyBoardTriggerHandler"
description: "Handle returned by KeyboardEventTriggers.RegisterKeyPressed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KeyboardEventTriggers.KeyBoardTriggerHandler

A **class** in `Root.Township`, the global namespace.

Handle returned by `KeyboardEventTriggers.RegisterKeyPressed`. Pass it to `DeRegisterKeyPressed` to remove the handler.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`KeyboardEventTriggers`](/mod/game-api/types/global-i-l/keyboardeventtriggers)
- **Inherits or implements** [`IKeyBoardTriggerHandler`](/mod/game-api/types/global-i-l/ikeyboardtriggerhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KeyBoardTriggerHandler(Key key, bool isDown, "}<Link to="/mod/game-api/types/global-i-l/keyeventhandler">{"KeyEventHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Creates a `KeyboardEventTriggers.KeyBoardTriggerHandler` from `key`, `isDown` and `handler`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code><Link to="/mod/game-api/types/global-i-l/keyeventhandler">{"KeyEventHandler"}</Link>{" Handler { get; }"}</code> | <span className="api-desc">The registered callback.</span> |
| <Link id="m-isdown" /><code>{"bool IsDown { get; }"}</code> | <span className="api-desc">True for a key down handler, false for key up.</span> |
| <Link id="m-key" /><code>{"Key Key { get; }"}</code> | <span className="api-desc">The key the handler is for.</span> |
