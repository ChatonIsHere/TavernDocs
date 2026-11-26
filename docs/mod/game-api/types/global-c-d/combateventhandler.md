---
title: "CombatEventHandler"
description: "Handler for CausedCombat on PlayerController and PlayerEventsManager: who attacked, what was hit, the squared distance ratio between them, and the damage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CombatEventHandler

A **delegate** in `Root.Township`, the global namespace.

Handler for `CausedCombat` on `PlayerController` and `PlayerEventsManager`: who attacked, what was hit, the squared distance ratio between them, and the damage.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CombatEventHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" attacker, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" attackee, float distanceRatioBetweenCombatantsSquared, float damage, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" attacker, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" attackee, float distanceRatioBetweenCombatantsSquared, float damage)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `CombatEventHandler`:

<div className="api-used-in">

[`PlayerController.CausedCombat`](/mod/game-api/types/global-p/playercontroller#m-causedcombat), [`PlayerEventsManager.CausedCombat`](/mod/game-api/types/global-p/playereventsmanager#m-causedcombat).

</div>
