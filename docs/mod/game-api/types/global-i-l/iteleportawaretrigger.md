---
title: "ITeleportAwareTrigger"
description: "A trigger that wants to know when a player teleports through it instead of walking in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITeleportAwareTrigger

An **interface** in `Root.Township`, the global namespace.

A trigger that wants to know when a player teleports through it instead of walking in. The teleport pointer collects them along its path. Implemented by `TriggerZone` and `SpiritModeDoorway`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`TriggerZone`](/mod/game-api/types/game-other-namespaces/triggerzone), [`SpiritModeDoorway`](/mod/game-api/types/game-other-namespaces/spiritmodedoorway), [`TeleportAwareTriggerExample`](/mod/game-api/types/global-t-x/teleportawaretriggerexample)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerteleportedthrough" /><code>{"void OnTriggerTeleportedThrough("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Client: called by `Teleporter` for each trigger on the teleport path after the local player moves. |

## Used in

Members of other types that take, return or hold a `ITeleportAwareTrigger`:

[`Pointer.triggersPassedThrough`](/mod/game-api/types/global-p/pointer#m-triggerspassedthrough), [`Pointer.TriggersPassedThrough`](/mod/game-api/types/global-p/pointer#m-triggerspassedthrough-2).
