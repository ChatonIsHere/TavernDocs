---
title: "SkillOrbConnectionline"
description: "Line drawn between two skill orbs (or an orb and the shrine's ray origin) on a SkillShrine, coloured by the orb's buy status."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbConnectionline

A **class** in `Root.Township`, no namespace.

Line drawn between two skill orbs (or an orb and the shrine's ray origin) on a `SkillShrine`, coloured by the orb's buy status. Client visuals, made by the shrine.

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SkillOrbConnectionline(uint entityFromIdentifier, uint entityToIdentifier, "}<Link to="/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" shrine)"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-tintcolor" /><code>{"private readonly int _TintColor"}</code> | Shader id of `_TintColor`. |
| <Link id="m-entityfromidentifier" /><code>{"private uint entityFromIdentifier"}</code> | Entity id of the orb the line starts at. |
| <Link id="m-entitytoidentifier" /><code>{"private uint entityToIdentifier"}</code> | Entity id of the orb the line ends at, or 0 to end at the shrine's ray origin. |
| <Link id="m-from" /><code>{"private Transform from"}</code> | Transform of the start orb, once found. |
| <Link id="m-line" /><code>{"private LineRenderer line"}</code> | The `LineRenderer` on the pooled line. |
| <Link id="m-midpoint" /><code>{"private Vector3 midPoint"}</code> | Point the line shrinks to when destroyed. |
| <Link id="m-pooledline" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledLine"}</code> | Pooled line object from the shrine's line definition. |
| <Link id="m-positions" /><code>{"private Vector3[] positions"}</code> | The two line end points. |
| <Link id="m-shrine" /><code>{"private "}<Link to="/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" shrine"}</code> | The shrine this line belongs to. |
| <Link id="m-to" /><code>{"private Transform to"}</code> | Transform of the end orb or the shrine's ray origin. |
| <Link id="m-updatemethod" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMethod"}</code> | Handle for whichever budgeted update is running (wait, update or shrink). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> | Starts shrinking the line toward its midpoint before it is released. |
| <Link id="m-destroyupdate" /><code>{"void DestroyUpdate()"}</code> | Per-frame shrink toward the midpoint; releases the pooled line when it gets there or the shrine is gone. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Keeps the line's ends on the two orbs. Starts `Destroy` if either is gone. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatecolor" /><code>{"private void UpdateColor("}<Link to="/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb, "}<Link to="/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" status)"}</code> | Sets the line tint from the orb's status. Orbs with no dependencies show as allowed instead of can't buy. |
| <Link id="m-waittospawn" /><code>{"private void WaitToSpawn()"}</code> | Waits until both entities exist, then takes a pooled line, hooks the orb's status event and starts `Update`. |

</details>

## Used in

Members of other types that take, return or hold a `SkillOrbConnectionline`:

[`SkillShrine.activeConnections`](/game-api/types/global-s/skillshrine#m-activeconnections).
