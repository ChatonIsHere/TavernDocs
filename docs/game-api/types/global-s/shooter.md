---
title: "Shooter"
description: "class Shooter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Shooter

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Shooter()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-defaultdeviation" /><code>{"private float defaultDeviation"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-maxextra" /><code>{"private float maxExtra"}</code> |
| <Link id="m-maxvelocity" /><code>{"private float maxVelocity"}</code> |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" physicalMaterial"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-shootstrengthrtpc" /><code>{"private RTPC shootStrengthRTPC"}</code> |
| <Link id="m-syncshoot" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-s/shootarguments">{"ShootArguments"}</Link>{"> syncShoot"}</code> |

</details>

## Events

| Member |
| --- |
| <Link id="m-onshoot" /><code>{"event Action<"}<Link to="/game-api/types/global-s/shooter">{"Shooter"}</Link>{", "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{", Vector3> OnShoot"}</code> |
| <Link id="m-preshoot" /><code>{"event Action<"}<Link to="/game-api/types/global-s/shooter">{"Shooter"}</Link>{", "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> PreShoot"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-shoot" /><code>{"void Shoot("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, float strength, bool isFromNetwork = false, Vector3 direction = null)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-defaultshoot" /><code>{"private Vector3 DefaultShoot(Vector3 direction, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, float strength, bool isApplyingDeviation)"}</code> |
| <Link id="m-syncshoot-2" /><code>{"private void SyncShoot("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-s/shootarguments">{"ShootArguments"}</Link>{" args)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Shooter`:

[`BowString.IgnoreArrowCollisions`](/game-api/types/global-a-b/bowstring#m-ignorearrowcollisions), [`BowString.OnShoot`](/game-api/types/global-a-b/bowstring#m-onshoot), [`BowString.shooter`](/game-api/types/global-a-b/bowstring#m-shooter), [`ItemShooter.IgnoreArrowCollisions`](/game-api/types/global-i-l/itemshooter#m-ignorearrowcollisions), [`ItemShooter.shooter`](/game-api/types/global-i-l/itemshooter#m-shooter).
