---
title: "SkillOrbConnectionline"
description: "Line drawn between two skill orbs (or an orb and the shrine's ray origin) on a SkillShrine, coloured by the orb's buy status."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbConnectionline

A **class** in `Root.Township`, the global namespace.

Line drawn between two skill orbs (or an orb and the shrine's ray origin) on a `SkillShrine`, coloured by the orb's buy status. Client visuals, made by the shrine.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbConnectionline(uint entityFromIdentifier, uint entityToIdentifier, "}<Link to="/mod/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" shrine)"}</code> | <span className="api-desc">Creates a `SkillOrbConnectionline` from `entityFromIdentifier`, `entityToIdentifier` and `shrine`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-tintcolor" /><code>{"private readonly int _TintColor"}</code> | <span className="api-desc">Shader id of `_TintColor`.</span> |
| <Link id="m-entityfromidentifier" /><code>{"private uint entityFromIdentifier"}</code> | <span className="api-desc">Entity id of the orb the line starts at.</span> |
| <Link id="m-entitytoidentifier" /><code>{"private uint entityToIdentifier"}</code> | <span className="api-desc">Entity id of the orb the line ends at, or 0 to end at the shrine's ray origin.</span> |
| <Link id="m-from" /><code>{"private Transform from"}</code> | <span className="api-desc">Transform of the start orb, once found.</span> |
| <Link id="m-line" /><code>{"private LineRenderer line"}</code> | <span className="api-desc">The `LineRenderer` on the pooled line.</span> |
| <Link id="m-midpoint" /><code>{"private Vector3 midPoint"}</code> | <span className="api-desc">Point the line shrinks to when destroyed.</span> |
| <Link id="m-pooledline" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledLine"}</code> | <span className="api-desc">Pooled line object from the shrine's line definition.</span> |
| <Link id="m-positions" /><code>{"private Vector3[] positions"}</code> | <span className="api-desc">The two line end points.</span> |
| <Link id="m-shrine" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" shrine"}</code> | <span className="api-desc">The shrine this line belongs to.</span> |
| <Link id="m-to" /><code>{"private Transform to"}</code> | <span className="api-desc">Transform of the end orb or the shrine's ray origin.</span> |
| <Link id="m-updatemethod" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMethod"}</code> | <span className="api-desc">Handle for whichever budgeted update is running (wait, update or shrink).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> | <span className="api-desc">Starts shrinking the line toward its midpoint before it is released.</span> |
| <Link id="m-destroyupdate" /><code>{"void DestroyUpdate()"}</code> | <span className="api-desc">Per-frame shrink toward the midpoint; releases the pooled line when it gets there or the shrine is gone.</span> |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">Keeps the line's ends on the two orbs. Starts `Destroy` if either is gone.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatecolor" /><code>{"private void UpdateColor("}<Link to="/mod/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb, "}<Link to="/mod/game-api/types/global-s/skillstatus">{"SkillStatus"}</Link>{" status)"}</code> | <span className="api-desc">Sets the line tint from the orb's status. Orbs with no dependencies show as allowed instead of can't buy.</span> |
| <Link id="m-waittospawn" /><code>{"private void WaitToSpawn()"}</code> | <span className="api-desc">Waits until both entities exist, then takes a pooled line, hooks the orb's status event and starts `Update`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SkillOrbConnectionline`:

<div className="api-used-in">

[`SkillShrine.activeConnections`](/mod/game-api/types/global-s/skillshrine#m-activeconnections).

</div>
