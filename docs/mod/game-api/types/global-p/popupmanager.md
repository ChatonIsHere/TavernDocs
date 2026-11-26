---
title: "PopupManager"
description: "Client: singleton that shows popup boards one at a time from a static queue."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopupManager

A **class** in `Root.Township`, the global namespace.

Client: singleton that shows popup boards one at a time from a static queue. Call a static `Show` overload from anywhere; it queues until the manager exists and the current popup closes.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`SingletonBehaviour<PopupManager>`](/mod/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`PopupManager`](/mod/game-api/types/global-p/popupmanager)
- **Nested types** [`IPopupConfig`](/mod/game-api/types/global-p/popupmanager-ipopupconfig), [`PopupConfig`](/mod/game-api/types/global-p/popupmanager-popupconfig)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopupManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controlparent" /><code>{"private Transform controlParent"}</code> | Transform popups are spawned under. |
| <Link id="m-defaultboard" /><code>{"private "}<Link to="/mod/game-api/types/global-p/popupboard">{"PopupBoard"}</Link>{" defaultBoard"}</code> | Board prefab used when a popup has none of its own. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for popup activity. |
| <Link id="m-popupqueue" /><code>{"private static readonly Queue<"}<Link to="/mod/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{"> popupQueue"}</code> | Static queue of popups waiting to show. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentpopup" /><code><Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" CurrentPopup { get; private set; }"}</code> | The popup on screen, or null. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-show" /><code>{"static "}<Link to="/mod/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" Show("}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" popup)"}</code> | Queues a popup (a given board, or the default one with a title and message or a setup callback) and returns its config, which can cancel it. |
| <Link id="m-show-2" /><code>{"static "}<Link to="/mod/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" Show(string title, string message)"}</code> | Queues a popup (a given board, or the default one with a title and message or a setup callback) and returns its config, which can cancel it. |
| <Link id="m-show-3" /><code>{"static "}<Link to="/mod/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" Show("}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" popup, string title, string message)"}</code> | Queues a popup (a given board, or the default one with a title and message or a setup callback) and returns its config, which can cancel it. |
| <Link id="m-show-4" /><code>{"static "}<Link to="/mod/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" Show(Action<"}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> onSpawn)"}</code> | Queues a popup (a given board, or the default one with a title and message or a setup callback) and returns its config, which can cancel it. |
| <Link id="m-show-5" /><code>{"static "}<Link to="/mod/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" Show("}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" popup, Action<"}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> onSpawn)"}</code> | Queues a popup (a given board, or the default one with a title and message or a setup callback) and returns its config, which can cancel it. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onpopupclosed" /><code>{"private void OnPopupClosed("}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" popup)"}</code> | When the current popup closes, clears it and shows the next queued one. |
| <Link id="m-processqueue" /><code>{"private void ProcessQueue()"}</code> | Shows the next queued popup that hasn't been cancelled. |
| <Link id="m-showpopup" /><code>{"private void ShowPopup("}<Link to="/mod/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" popupConfig)"}</code> | Spawns a popup under `controlParent` and makes it current. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Shows anything queued before the manager existed. |

</details>
