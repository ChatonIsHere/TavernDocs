---
title: "KeyboardEventTriggers"
description: "Static registry that calls handlers when keyboard keys are pressed or released, using the Unity Input System."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KeyboardEventTriggers

A **class** in `Root.Township`, no namespace.

Static registry that calls handlers when keyboard keys are pressed or released, using the Unity Input System. One instance in the scene polls the tracked keys each frame and is only enabled while any key is registered.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`KeyBoardTriggerHandler`](/game-api/types/global-i-l/keyboardeventtriggers-keyboardtriggerhandler), [`KeyTracker`](/game-api/types/global-i-l/keyboardeventtriggers-keytracker)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"KeyboardEventTriggers()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentkeys" /><code>{"private static List<Key> currentKeys"}</code> | List of tracked keys, walked by `Update`. |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/global-i-l/keyboardeventtriggers">{"KeyboardEventTriggers"}</Link>{" instance"}</code> | The scene component doing the polling. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-mappedtrackers" /><code>{"private static Dictionary<Key, "}<Link to="/game-api/types/global-i-l/keyboardeventtriggers-keytracker">{"KeyboardEventTriggers.KeyTracker"}</Link>{"> mappedTrackers"}</code> | Tracker holding the down and up handlers for each key. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterkeypressed" /><code>{"static void DeRegisterKeyPressed(ref "}<Link to="/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" triggerHandler)"}</code> | Removes a handler added by `RegisterKeyPressed` and nulls the handle. Stops tracking the key once it has no handlers left. |
| <Link id="m-registerkeypressed" /><code>{"static void RegisterKeyPressed(Key key, bool isDown, "}<Link to="/game-api/types/global-i-l/keyeventhandler">{"KeyEventHandler"}</Link>{" handler, out "}<Link to="/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" triggerHandler)"}</code> | Adds a handler for a key going down or up and returns a handle for removing it. Gives a null handle if there's no keyboard. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Becomes the polling instance and enables itself only if keys are already registered. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Clears the polling instance. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Polls each tracked key and fires its down or up handlers for this frame. |

</details>
