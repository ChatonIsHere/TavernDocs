---
title: "CombatEventHandler"
description: "delegate CombatEventHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CombatEventHandler

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CombatEventHandler(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" attacker, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" attackee, float distanceRatioBetweenCombatantsSquared, float damage, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" attacker, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" attackee, float distanceRatioBetweenCombatantsSquared, float damage)"}</code> |  |

## Used in

Members of other types that take, return or hold a `CombatEventHandler`:

[`PlayerController.CausedCombat`](/game-api/types/global-p/playercontroller#m-causedcombat), [`PlayerEventsManager.CausedCombat`](/game-api/types/global-p/playereventsmanager#m-causedcombat).
