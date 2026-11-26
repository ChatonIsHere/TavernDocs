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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`KilledData`](/mod/game-api/types/alta-player/killeddata)
- **Documented in** [Console events](/mod/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ObjectKilledData("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" killingHit)"}</code> | <span className="api-desc">Creates an `ObjectKilledData` from `entity` and `killingHit`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"uint identifier"}</code> | <span className="api-desc">Network identifier of the entity that died.</span> |
| <Link id="m-name" /><code>{"string name"}</code> | <span className="api-desc">The entity's original name.</span> |
| <Link id="m-prefab" /><code>{"uint prefab"}</code> | <span className="api-desc">Prefab hash of the entity, or 0 if it has no prefab.</span> |

## Used in

Members of other types that take, return or hold a `ObjectKilledData`:

<div className="api-used-in">

[`ConsoleEvents.ObjectKilled`](/mod/game-api/types/alta-console/consoleevents#m-objectkilled).

</div>
