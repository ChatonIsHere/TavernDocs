---
title: "PopupManager.IPopupConfig"
description: "Handle to a popup queued with PopupManager.Show. Lets you cancel it or swap its board prefab before it appears."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopupManager.IPopupConfig

An **interface** in `Root.Township`, no namespace.

Handle to a popup queued with `PopupManager.Show`. Lets you cancel it or swap its board prefab before it appears.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PopupManager`](/game-api/types/global-p/popupmanager)
- **Derived types** [`PopupManager.PopupConfig`](/game-api/types/global-p/popupmanager-popupconfig)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscancelled" /><code>{"bool IsCancelled { get; }"}</code> | True after `Cancel`. |
| <Link id="m-prefab" /><code><Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" Prefab { get; }"}</code> | The popup board prefab to spawn, or null to use the manager's default board. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> | Marks the popup cancelled so the queue skips it. Has no effect once shown. |
| <Link id="m-setprefab" /><code>{"void SetPrefab("}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" prefab)"}</code> | Changes the board prefab used when the popup is shown. |
| <Link id="m-spawn" /><code><Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" Spawn(Transform parent, "}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" defaultPrefab, Action<"}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> onClosed)"}</code> | Used by the manager: instantiates the board under the parent, hooks the closed callback and runs the setup action. |

## Used in

Members of other types that take, return or hold a `IPopupConfig`:

[`PlayTutorialChecker.followupPopup`](/game-api/types/global-p/playtutorialchecker#m-followuppopup), [`PopupManager.popupQueue`](/game-api/types/global-p/popupmanager#m-popupqueue), [`PopupManager.Show`](/game-api/types/global-p/popupmanager#m-show), [`PopupManager.ShowPopup`](/game-api/types/global-p/popupmanager#m-showpopup).
