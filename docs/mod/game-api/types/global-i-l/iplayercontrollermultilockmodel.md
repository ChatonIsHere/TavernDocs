---
title: "IPlayerControllerMultiLockModel"
description: "A lock that many objects can hold at once on a player controller feature."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlayerControllerMultiLockModel

An **interface** in `Root.Township`, the global namespace.

A lock that many objects can hold at once on a player controller feature. It stays locked while any holder remains.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`FakePlayerControllerMultiLockModel`](/mod/game-api/types/global-e-h/fakeplayercontrollermultilockmodel), [`PlayerControllerMultiLockModel`](/mod/game-api/types/global-p/playercontrollermultilockmodel)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islocked" /><code>{"bool IsLocked { get; }"}</code> | <span className="api-desc">True while at least one holder has the lock.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addlock" /><code>{"void AddLock(object lockerObject)"}</code> | <span className="api-desc">Adds a holder of the lock.</span> |
| <Link id="m-removelock" /><code>{"void RemoveLock(object lockerObject)"}</code> | <span className="api-desc">Removes a holder of the lock.</span> |

## Used in

Members of other types that take, return or hold a `IPlayerControllerMultiLockModel`:

<div className="api-used-in">

[`PlayerHealth.Inject`](/mod/game-api/types/global-p/playerhealth#m-inject), [`PlayerHealth.playerControllerMultiLockModel`](/mod/game-api/types/global-p/playerhealth#m-playercontrollermultilockmodel), [`PlayerScreenFader.Inject`](/mod/game-api/types/global-p/playerscreenfader#m-inject), [`PlayerScreenFader.playerControllerMultiLockModel`](/mod/game-api/types/global-p/playerscreenfader#m-playercontrollermultilockmodel), [`SmoothLocomotion.Inject`](/mod/game-api/types/global-s/smoothlocomotion#m-inject), [`SmoothLocomotion.playerControllerMultiLockModel`](/mod/game-api/types/global-s/smoothlocomotion#m-playercontrollermultilockmodel).

</div>
