---
title: "RenderLock"
description: "Client: static set of reasons rendering is held off, such as no player controller yet or a fade to black."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RenderLock

A **static class** in `Root.Township`, no namespace.

Client: static set of reasons rendering is held off, such as no player controller yet or a fade to black. Starts locked until the player controller spawns.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Nested types** [`RenderLockType`](/game-api/types/global-q-r/renderlock-renderlocktype)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentlocks" /><code>{"private static "}<Link to="/game-api/types/global-q-r/renderlock-renderlocktype">{"RenderLock.RenderLockType"}</Link>{" currentLocks"}</code> | Flags of the lock reasons in effect. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islocked" /><code>{"static bool IsLocked { get; }"}</code> | True while any lock reason is set. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onlockedchanged" /><code>{"static event Action<bool> OnLockedChanged"}</code> | Fired when the lock turns on or off. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lock" /><code>{"static void Lock("}<Link to="/game-api/types/global-q-r/renderlock-renderlocktype">{"RenderLock.RenderLockType"}</Link>{" renderingLock)"}</code> | Adds a lock reason; fires `OnLockedChanged` with true if it was unlocked. |
| <Link id="m-unlock" /><code>{"static void Unlock("}<Link to="/game-api/types/global-q-r/renderlock-renderlocktype">{"RenderLock.RenderLockType"}</Link>{" renderingLock)"}</code> | Removes a lock reason; fires `OnLockedChanged` with false when none remain. |
