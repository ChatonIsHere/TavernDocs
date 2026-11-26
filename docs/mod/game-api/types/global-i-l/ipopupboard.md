---
title: "IPopupBoard"
description: "A popup board with a title and message that can be closed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPopupBoard

An **interface** in `Root.Township`, the global namespace.

A popup board with a title and message that can be closed.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`PopupBoard`](/mod/game-api/types/global-p/popupboard)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> | <span className="api-desc">The body text shown on the board.</span> |
| <Link id="m-title" /><code>{"string Title { get; set; }"}</code> | <span className="api-desc">The title shown on the board.</span> |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | <span className="api-desc">The board's transform, for placing it.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-closed" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> Closed"}</code> | <span className="api-desc">Raised when the board closes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> | <span className="api-desc">Closes the board.</span> |

## Used in

Members of other types that take, return or hold a `IPopupBoard`:

<div className="api-used-in">

[`AccessibilityFeaturesChecker.DecisionMade`](/mod/game-api/types/global-a-b/accessibilityfeatureschecker#m-decisionmade), [`AccessibilityFeaturesChecker.Setup`](/mod/game-api/types/global-a-b/accessibilityfeatureschecker#m-setup), [`PlayTutorialChecker.Setup`](/mod/game-api/types/global-p/playtutorialchecker#m-setup), [`PopupBoard.Closed`](/mod/game-api/types/global-p/popupboard#m-closed), [`PopupManager.CurrentPopup`](/mod/game-api/types/global-p/popupmanager#m-currentpopup), [`PopupManager.OnPopupClosed`](/mod/game-api/types/global-p/popupmanager#m-onpopupclosed), [`PopupManager.Show`](/mod/game-api/types/global-p/popupmanager#m-show), [`PopupManager.IPopupConfig.Prefab`](/mod/game-api/types/global-p/popupmanager-ipopupconfig#m-prefab), [`PopupManager.IPopupConfig.SetPrefab`](/mod/game-api/types/global-p/popupmanager-ipopupconfig#m-setprefab), [`PopupManager.IPopupConfig.Spawn`](/mod/game-api/types/global-p/popupmanager-ipopupconfig#m-spawn), [`PopupManager.PopupConfig.onSpawn`](/mod/game-api/types/global-p/popupmanager-popupconfig#m-onspawn), [`PopupManager.PopupConfig.PopupConfig`](/mod/game-api/types/global-p/popupmanager-popupconfig#m-ctor), [`PopupManager.PopupConfig.Prefab`](/mod/game-api/types/global-p/popupmanager-popupconfig#m-prefab), [`PopupManager.PopupConfig.SetPrefab`](/mod/game-api/types/global-p/popupmanager-popupconfig#m-setprefab), [`PopupManager.PopupConfig.Spawn`](/mod/game-api/types/global-p/popupmanager-popupconfig#m-spawn), [`StoreRotationPopup.CloseBoard`](/mod/game-api/types/global-s/storerotationpopup#m-closeboard).

</div>
