---
title: "IPopupBoard"
description: "A popup board with a title and message that can be closed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPopupBoard

An **interface** in `Root.Township`, no namespace.

A popup board with a title and message that can be closed.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`PopupBoard`](/game-api/types/global-p/popupboard)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> | The body text shown on the board. |
| <Link id="m-title" /><code>{"string Title { get; set; }"}</code> | The title shown on the board. |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | The board's transform, for placing it. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-closed" /><code>{"event Action<"}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> Closed"}</code> | Raised when the board closes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> | Closes the board. |

## Used in

Members of other types that take, return or hold a `IPopupBoard`:

[`AccessibilityFeaturesChecker.DecisionMade`](/game-api/types/global-a-b/accessibilityfeatureschecker#m-decisionmade), [`AccessibilityFeaturesChecker.Setup`](/game-api/types/global-a-b/accessibilityfeatureschecker#m-setup), [`PlayTutorialChecker.Setup`](/game-api/types/global-p/playtutorialchecker#m-setup), [`PopupBoard.Closed`](/game-api/types/global-p/popupboard#m-closed), [`PopupManager.CurrentPopup`](/game-api/types/global-p/popupmanager#m-currentpopup), [`PopupManager.OnPopupClosed`](/game-api/types/global-p/popupmanager#m-onpopupclosed), [`PopupManager.Show`](/game-api/types/global-p/popupmanager#m-show), [`PopupManager.IPopupConfig.Prefab`](/game-api/types/global-p/popupmanager-ipopupconfig#m-prefab), [`PopupManager.IPopupConfig.SetPrefab`](/game-api/types/global-p/popupmanager-ipopupconfig#m-setprefab), [`PopupManager.IPopupConfig.Spawn`](/game-api/types/global-p/popupmanager-ipopupconfig#m-spawn), [`PopupManager.PopupConfig.onSpawn`](/game-api/types/global-p/popupmanager-popupconfig#m-onspawn), [`PopupManager.PopupConfig.PopupConfig`](/game-api/types/global-p/popupmanager-popupconfig#m-ctor), [`PopupManager.PopupConfig.Prefab`](/game-api/types/global-p/popupmanager-popupconfig#m-prefab), [`PopupManager.PopupConfig.SetPrefab`](/game-api/types/global-p/popupmanager-popupconfig#m-setprefab), [`PopupManager.PopupConfig.Spawn`](/game-api/types/global-p/popupmanager-popupconfig#m-spawn), [`StoreRotationPopup.CloseBoard`](/game-api/types/global-s/storerotationpopup#m-closeboard).
