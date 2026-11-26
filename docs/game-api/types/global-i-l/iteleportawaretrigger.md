---
title: "ITeleportAwareTrigger"
description: "A trigger that wants to know when a player teleports through it instead of walking in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITeleportAwareTrigger

An **interface** in `Root.Township`, no namespace.

A trigger that wants to know when a player teleports through it instead of walking in. The teleport pointer collects them along its path. Implemented by `TriggerZone` and `SpiritModeDoorway`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`TriggerZone`](/game-api/types/game-other-namespaces/triggerzone), [`SpiritModeDoorway`](/game-api/types/game-other-namespaces/spiritmodedoorway), [`TeleportAwareTriggerExample`](/game-api/types/global-t-x/teleportawaretriggerexample)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerteleportedthrough" /><code>{"void OnTriggerTeleportedThrough("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Client: called by `Teleporter` for each trigger on the teleport path after the local player moves. |

## Used in

Members of other types that take, return or hold a `ITeleportAwareTrigger`:

[`Pointer.triggersPassedThrough`](/game-api/types/global-p/pointer#m-triggerspassedthrough), [`Pointer.TriggersPassedThrough`](/game-api/types/global-p/pointer#m-triggerspassedthrough-2).
