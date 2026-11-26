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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Nested types** [`ILockUIAction`](/game-api/types/alta-menus/uiactionlock-ilockuiaction)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentlocker" /><code>{"private static "}<Link to="/game-api/types/alta-menus/uiactionlock-ilockuiaction">{"UIActionLock.ILockUIAction"}</Link>{" currentLocker"}</code> | The object holding the lock now, or null. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkislocked" /><code>{"static bool CheckIsLocked("}<Link to="/game-api/types/alta-menus/uiactionlock-ilockuiaction">{"UIActionLock.ILockUIAction"}</Link>{" locker, bool isLocking = true)"}</code> | Returns true if something holds the lock. The overload with a locker takes the lock for it when free (unless `isLocking` is false). |
| <Link id="m-checkislocked-2" /><code>{"static bool CheckIsLocked()"}</code> | Returns true if something holds the lock. The overload with a locker takes the lock for it when free (unless `isLocking` is false). |
| <Link id="m-unlock" /><code>{"static void Unlock("}<Link to="/game-api/types/alta-menus/uiactionlock-ilockuiaction">{"UIActionLock.ILockUIAction"}</Link>{" locker)"}</code> | Releases the lock, but only if the given locker holds it. |
