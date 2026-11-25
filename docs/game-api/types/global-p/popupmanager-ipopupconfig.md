---
title: "PopupManager.IPopupConfig"
description: "interface PopupManager.IPopupConfig in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopupManager.IPopupConfig

An **interface** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PopupManager`](/game-api/types/global-p/popupmanager)
- **Derived types** [`PopupManager.PopupConfig`](/game-api/types/global-p/popupmanager-popupconfig)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscancelled" /><code>{"bool IsCancelled { get; }"}</code> |  |
| <Link id="m-prefab" /><code><Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" Prefab { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> |  |
| <Link id="m-setprefab" /><code>{"void SetPrefab("}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" prefab)"}</code> |  |
| <Link id="m-spawn" /><code><Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" Spawn(Transform parent, "}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" defaultPrefab, Action<"}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> onClosed)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IPopupConfig`:

[`PlayTutorialChecker.followupPopup`](/game-api/types/global-p/playtutorialchecker#m-followuppopup), [`PopupManager.popupQueue`](/game-api/types/global-p/popupmanager#m-popupqueue), [`PopupManager.Show`](/game-api/types/global-p/popupmanager#m-show), [`PopupManager.ShowPopup`](/game-api/types/global-p/popupmanager#m-showpopup).
