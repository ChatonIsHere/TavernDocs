---
title: "PopupManager.PopupConfig"
description: "Private queued popup in PopupManager: the board prefab to use and a callback to set it up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopupManager.PopupConfig

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private queued popup in `PopupManager`: the board prefab to use and a callback to set it up. Returned to callers as `IPopupConfig`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PopupManager`](/mod/game-api/types/global-p/popupmanager)
- **Inherits or implements** [`PopupManager.IPopupConfig`](/mod/game-api/types/global-p/popupmanager-ipopupconfig)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopupConfig("}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" prefab, Action<"}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> onSpawn)"}</code> | <span className="api-desc">Creates a `PopupManager.PopupConfig` from `prefab` and `onSpawn`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onspawn" /><code>{"private readonly Action<"}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> onSpawn"}</code> | <span className="api-desc">Callback run on the new board, for example to set its title and message.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscancelled" /><code>{"bool IsCancelled { get; private set; }"}</code> | <span className="api-desc">Whether `Cancel` was called.</span> |
| <Link id="m-prefab" /><code><Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" Prefab { get; private set; }"}</code> | <span className="api-desc">The board prefab, or null to use the manager's default.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> | <span className="api-desc">Marks the popup cancelled so the queue skips it. Has no effect once shown.</span> |
| <Link id="m-setprefab" /><code>{"void SetPrefab("}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" prefab)"}</code> | <span className="api-desc">Changes the board prefab before it is shown.</span> |
| <Link id="m-spawn" /><code><Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" Spawn(Transform parent, "}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" defaultPrefab, Action<"}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> onClosed)"}</code> | <span className="api-desc">Makes the board under a parent, hooks its `Closed` event and runs the setup callback.</span> |
