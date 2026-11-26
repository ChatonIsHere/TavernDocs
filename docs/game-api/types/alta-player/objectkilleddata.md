---
title: "ObjectKilledData"
description: "Payload of the ConsoleEvents.ObjectKilled console event, raised when a HealthObject dies."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ObjectKilledData

A **class** in `Root.Township`, `Alta.PlayerStates`.

Payload of the `ConsoleEvents.ObjectKilled` console event, raised when a `HealthObject` dies. Holds the killing hit from `KilledData` plus which entity died.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`KilledData`](/game-api/types/alta-player/killeddata)
- **Documented in** [Console events](/game-api/console-and-utilities/console-events)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ObjectKilledData("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingHit)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"uint identifier"}</code> | Network identifier of the entity that died. |
| <Link id="m-name" /><code>{"string name"}</code> | The entity's original name. |
| <Link id="m-prefab" /><code>{"uint prefab"}</code> | Prefab hash of the entity, or 0 if it has no prefab. |

## Used in

Members of other types that take, return or hold a `ObjectKilledData`:

[`ConsoleEvents.ObjectKilled`](/game-api/types/alta-console/consoleevents#m-objectkilled).
