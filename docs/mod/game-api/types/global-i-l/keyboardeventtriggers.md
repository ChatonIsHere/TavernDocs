---
title: "KeyboardEventTriggers"
description: "Static registry that calls handlers when keyboard keys are pressed or released, using the Unity Input System."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KeyboardEventTriggers

A **class** in `Root.Township`, the global namespace.

Static registry that calls handlers when keyboard keys are pressed or released, using the Unity Input System. One instance in the scene polls the tracked keys each frame and is only enabled while any key is registered.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`KeyBoardTriggerHandler`](/mod/game-api/types/global-i-l/keyboardeventtriggers-keyboardtriggerhandler), [`KeyTracker`](/mod/game-api/types/global-i-l/keyboardeventtriggers-keytracker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KeyboardEventTriggers()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentkeys" /><code>{"private static List<Key> currentKeys"}</code> | <span className="api-desc">List of tracked keys, walked by `Update`.</span> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/keyboardeventtriggers">{"KeyboardEventTriggers"}</Link>{" instance"}</code> | <span className="api-desc">The scene component doing the polling.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-mappedtrackers" /><code>{"private static Dictionary<Key, "}<Link to="/mod/game-api/types/global-i-l/keyboardeventtriggers-keytracker">{"KeyboardEventTriggers.KeyTracker"}</Link>{"> mappedTrackers"}</code> | <span className="api-desc">Tracker holding the down and up handlers for each key.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterkeypressed" /><code>{"static void DeRegisterKeyPressed(ref "}<Link to="/mod/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" triggerHandler)"}</code> | <span className="api-desc">Removes a handler added by `RegisterKeyPressed` and nulls the handle. Stops tracking the key once it has no handlers left.</span> |
| <Link id="m-registerkeypressed" /><code>{"static void RegisterKeyPressed(Key key, bool isDown, "}<Link to="/mod/game-api/types/global-i-l/keyeventhandler">{"KeyEventHandler"}</Link>{" handler, out "}<Link to="/mod/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" triggerHandler)"}</code> | <span className="api-desc">Adds a handler for a key going down or up and returns a handle for removing it. Gives a null handle if there's no keyboard.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Becomes the polling instance and enables itself only if keys are already registered.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Clears the polling instance.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Polls each tracked key and fires its down or up handlers for this frame.</span> |

</details>
