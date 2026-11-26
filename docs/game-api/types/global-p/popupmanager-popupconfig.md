---
title: "PopupManager.PopupConfig"
description: "Private queued popup in PopupManager: the board prefab to use and a callback to set it up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopupManager.PopupConfig

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private queued popup in `PopupManager`: the board prefab to use and a callback to set it up. Returned to callers as `IPopupConfig`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PopupManager`](/game-api/types/global-p/popupmanager)
- **Inherits or implements** [`PopupManager.IPopupConfig`](/game-api/types/global-p/popupmanager-ipopupconfig)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PopupConfig("}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" prefab, Action<"}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> onSpawn)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onspawn" /><code>{"private readonly Action<"}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> onSpawn"}</code> | Callback run on the new board, for example to set its title and message. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscancelled" /><code>{"bool IsCancelled { get; private set; }"}</code> | Whether `Cancel` was called. |
| <Link id="m-prefab" /><code><Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" Prefab { get; private set; }"}</code> | The board prefab, or null to use the manager's default. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> | Marks the popup cancelled so the queue skips it. Has no effect once shown. |
| <Link id="m-setprefab" /><code>{"void SetPrefab("}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" prefab)"}</code> | Changes the board prefab before it is shown. |
| <Link id="m-spawn" /><code><Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" Spawn(Transform parent, "}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" defaultPrefab, Action<"}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> onClosed)"}</code> | Makes the board under a parent, hooks its `Closed` event and runs the setup callback. |
