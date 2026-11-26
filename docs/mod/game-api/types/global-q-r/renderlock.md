---
title: "RenderLock"
description: "Client: static set of reasons rendering is held off, such as no player controller yet or a fade to black."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RenderLock

A **static class** in `Root.Township`, the global namespace.

Client: static set of reasons rendering is held off, such as no player controller yet or a fade to black. Starts locked until the player controller spawns.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Nested types** [`RenderLockType`](/mod/game-api/types/global-q-r/renderlock-renderlocktype)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentlocks" /><code>{"private static "}<Link to="/mod/game-api/types/global-q-r/renderlock-renderlocktype">{"RenderLock.RenderLockType"}</Link>{" currentLocks"}</code> | <span className="api-desc">Flags of the lock reasons in effect.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islocked" /><code>{"static bool IsLocked { get; }"}</code> | <span className="api-desc">True while any lock reason is set.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onlockedchanged" /><code>{"static event Action<bool> OnLockedChanged"}</code> | <span className="api-desc">Fired when the lock turns on or off.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lock" /><code>{"static void Lock("}<Link to="/mod/game-api/types/global-q-r/renderlock-renderlocktype">{"RenderLock.RenderLockType"}</Link>{" renderingLock)"}</code> | <span className="api-desc">Adds a lock reason; fires `OnLockedChanged` with true if it was unlocked.</span> |
| <Link id="m-unlock" /><code>{"static void Unlock("}<Link to="/mod/game-api/types/global-q-r/renderlock-renderlocktype">{"RenderLock.RenderLockType"}</Link>{" renderingLock)"}</code> | <span className="api-desc">Removes a lock reason; fires `OnLockedChanged` with false when none remain.</span> |
