---
title: "IPlayerControllerMultiLockModel"
description: "A lock that many objects can hold at once on a player controller feature."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlayerControllerMultiLockModel

An **interface** in `Root.Township`, no namespace.

A lock that many objects can hold at once on a player controller feature. It stays locked while any holder remains.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`FakePlayerControllerMultiLockModel`](/game-api/types/global-e-h/fakeplayercontrollermultilockmodel), [`PlayerControllerMultiLockModel`](/game-api/types/global-p/playercontrollermultilockmodel)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islocked" /><code>{"bool IsLocked { get; }"}</code> | True while at least one holder has the lock. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlock" /><code>{"void AddLock(object lockerObject)"}</code> | Adds a holder of the lock. |
| <Link id="m-removelock" /><code>{"void RemoveLock(object lockerObject)"}</code> | Removes a holder of the lock. |

## Used in

Members of other types that take, return or hold a `IPlayerControllerMultiLockModel`:

[`PlayerHealth.Inject`](/game-api/types/global-p/playerhealth#m-inject), [`PlayerHealth.playerControllerMultiLockModel`](/game-api/types/global-p/playerhealth#m-playercontrollermultilockmodel), [`PlayerScreenFader.Inject`](/game-api/types/global-p/playerscreenfader#m-inject), [`PlayerScreenFader.playerControllerMultiLockModel`](/game-api/types/global-p/playerscreenfader#m-playercontrollermultilockmodel), [`SmoothLocomotion.Inject`](/game-api/types/global-s/smoothlocomotion#m-inject), [`SmoothLocomotion.playerControllerMultiLockModel`](/game-api/types/global-s/smoothlocomotion#m-playercontrollermultilockmodel).
