---
title: "KeyboardEventTriggers"
description: "class KeyboardEventTriggers in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KeyboardEventTriggers

A **class** in `Root.Township`, no namespace.

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

| Member |
| --- |
| <Link id="m-currentkeys" /><code>{"private static List<Key> currentKeys"}</code> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/global-i-l/keyboardeventtriggers">{"KeyboardEventTriggers"}</Link>{" instance"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-mappedtrackers" /><code>{"private static Dictionary<Key, "}<Link to="/game-api/types/global-i-l/keyboardeventtriggers-keytracker">{"KeyboardEventTriggers.KeyTracker"}</Link>{"> mappedTrackers"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-deregisterkeypressed" /><code>{"static void DeRegisterKeyPressed(ref "}<Link to="/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" triggerHandler)"}</code> |
| <Link id="m-registerkeypressed" /><code>{"static void RegisterKeyPressed(Key key, bool isDown, "}<Link to="/game-api/types/global-i-l/keyeventhandler">{"KeyEventHandler"}</Link>{" handler, out "}<Link to="/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" triggerHandler)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |

</details>
