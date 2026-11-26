---
title: "UIActionLock"
description: "A simple global lock so only one UI action runs at a time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UIActionLock

A **static class** in `Root.Township`, `Alta.Meta.UI`.

A simple global lock so only one UI action runs at a time. An object implementing `ILockUIAction` takes the lock and must release it with `Unlock`.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Nested types** [`ILockUIAction`](/mod/game-api/types/alta-menus/uiactionlock-ilockuiaction)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentlocker" /><code>{"private static "}<Link to="/mod/game-api/types/alta-menus/uiactionlock-ilockuiaction">{"UIActionLock.ILockUIAction"}</Link>{" currentLocker"}</code> | <span className="api-desc">The object holding the lock now, or null.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkislocked" /><code>{"static bool CheckIsLocked("}<Link to="/mod/game-api/types/alta-menus/uiactionlock-ilockuiaction">{"UIActionLock.ILockUIAction"}</Link>{" locker, bool isLocking = true)"}</code> | <span className="api-desc">Returns true if something holds the lock. The overload with a locker takes the lock for it when free (unless `isLocking` is false).</span> |
| <Link id="m-checkislocked-2" /><code>{"static bool CheckIsLocked()"}</code> | <span className="api-desc">Returns true if something holds the lock. The overload with a locker takes the lock for it when free (unless `isLocking` is false).</span> |
| <Link id="m-unlock" /><code>{"static void Unlock("}<Link to="/mod/game-api/types/alta-menus/uiactionlock-ilockuiaction">{"UIActionLock.ILockUIAction"}</Link>{" locker)"}</code> | <span className="api-desc">Releases the lock, but only if the given locker holds it.</span> |
