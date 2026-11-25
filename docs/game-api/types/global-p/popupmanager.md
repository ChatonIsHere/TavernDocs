---
title: "PopupManager"
description: "class PopupManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopupManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`SingletonBehaviour<PopupManager>`](/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`PopupManager`](/game-api/types/global-p/popupmanager)
- **Nested types** [`IPopupConfig`](/game-api/types/global-p/popupmanager-ipopupconfig), [`PopupConfig`](/game-api/types/global-p/popupmanager-popupconfig)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopupManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-controlparent" /><code>{"private Transform controlParent"}</code> |  |
| <Link id="m-defaultboard" /><code>{"private "}<Link to="/game-api/types/global-p/popupboard">{"PopupBoard"}</Link>{" defaultBoard"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-popupqueue" /><code>{"private static readonly Queue<"}<Link to="/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{"> popupQueue"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentpopup" /><code><Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" CurrentPopup { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-show" /><code>{"static "}<Link to="/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" Show("}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" popup)"}</code> |  |
| <Link id="m-show-2" /><code>{"static "}<Link to="/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" Show(string title, string message)"}</code> |  |
| <Link id="m-show-3" /><code>{"static "}<Link to="/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" Show("}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" popup, string title, string message)"}</code> |  |
| <Link id="m-show-4" /><code>{"static "}<Link to="/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" Show(Action<"}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> onSpawn)"}</code> |  |
| <Link id="m-show-5" /><code>{"static "}<Link to="/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" Show("}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" popup, Action<"}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> onSpawn)"}</code> |  |
| <Link id="m-onpopupclosed" /><code>{"private void OnPopupClosed("}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" popup)"}</code> |  |
| <Link id="m-processqueue" /><code>{"private void ProcessQueue()"}</code> |  |
| <Link id="m-showpopup" /><code>{"private void ShowPopup("}<Link to="/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" popupConfig)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
