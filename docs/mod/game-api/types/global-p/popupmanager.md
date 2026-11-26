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
| <Link id="m-ctor" /><code>{"PopupManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-controlparent" /><code>{"private Transform controlParent"}</code> | <span className="api-desc">Transform popups are spawned under.</span> |
| <Link id="m-defaultboard" /><code>{"private "}<Link to="/mod/game-api/types/global-p/popupboard">{"PopupBoard"}</Link>{" defaultBoard"}</code> | <span className="api-desc">Board prefab used when a popup has none of its own.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for popup activity.</span> |
| <Link id="m-popupqueue" /><code>{"private static readonly Queue<"}<Link to="/mod/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{"> popupQueue"}</code> | <span className="api-desc">Static queue of popups waiting to show.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentpopup" /><code><Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" CurrentPopup { get; private set; }"}</code> | <span className="api-desc">The popup on screen, or null.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-show" /><code>{"static "}<Link to="/mod/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" Show("}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" popup)"}</code> | <span className="api-desc">Queues a popup (a given board, or the default one with a title and message or a setup callback) and returns its config, which can cancel it.</span> |
| <Link id="m-show-2" /><code>{"static "}<Link to="/mod/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" Show(string title, string message)"}</code> | <span className="api-desc">Queues a popup (a given board, or the default one with a title and message or a setup callback) and returns its config, which can cancel it.</span> |
| <Link id="m-show-3" /><code>{"static "}<Link to="/mod/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" Show("}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" popup, string title, string message)"}</code> | <span className="api-desc">Queues a popup (a given board, or the default one with a title and message or a setup callback) and returns its config, which can cancel it.</span> |
| <Link id="m-show-4" /><code>{"static "}<Link to="/mod/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" Show(Action<"}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> onSpawn)"}</code> | <span className="api-desc">Queues a popup (a given board, or the default one with a title and message or a setup callback) and returns its config, which can cancel it.</span> |
| <Link id="m-show-5" /><code>{"static "}<Link to="/mod/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" Show("}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" popup, Action<"}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> onSpawn)"}</code> | <span className="api-desc">Queues a popup (a given board, or the default one with a title and message or a setup callback) and returns its config, which can cancel it.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onpopupclosed" /><code>{"private void OnPopupClosed("}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" popup)"}</code> | <span className="api-desc">When the current popup closes, clears it and shows the next queued one.</span> |
| <Link id="m-processqueue" /><code>{"private void ProcessQueue()"}</code> | <span className="api-desc">Shows the next queued popup that hasn't been cancelled.</span> |
| <Link id="m-showpopup" /><code>{"private void ShowPopup("}<Link to="/mod/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" popupConfig)"}</code> | <span className="api-desc">Spawns a popup under `controlParent` and makes it current.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Shows anything queued before the manager existed.</span> |

</details>
