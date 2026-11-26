---
title: "DestroyableStaticObject"
description: "A modifiable static world object (such as a breakable wall) that takes hit damage while modified and reverts to unmodified when its health runs out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DestroyableStaticObject

A **class** in `Root.Township`, `Alta.Networking`.

A modifiable static world object (such as a breakable wall) that takes hit damage while modified and reverts to unmodified when its health runs out. Server only.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`ModifiableStaticObject`](/mod/game-api/types/alta-networking/modifiablestaticobject)
- **Documented in** [Static objects](/mod/game-api/world/static-objects#destroyablestaticobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DestroyableStaticObject()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenthealth" /><code>{"private float currentHealth"}</code> | <span className="api-desc">Health left before the object reverts.</span> |
| <Link id="m-detectors" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{"[] detectors"}</code> | <span className="api-desc">Impact detectors that pass hits to `Hit`.</span> |
| <Link id="m-impacttypemultipliers" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{", float> impactTypeMultipliers"}</code> | <span className="api-desc">Damage multiplier per impact type, built from `multipliers`.</span> |
| <Link id="m-modifiedhealth" /><code>{"private float modifiedHealth"}</code> | <span className="api-desc">Health the object gets each time it becomes modified.</span> |
| <Link id="m-multipliers" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/attacktypemultiplier">{"AttackTypeMultiplier"}</Link>{"[] multipliers"}</code> | <span className="api-desc">Damage multipliers per attack type.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: fills `detectors` from child impact detectors if empty.</span> |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> | <span className="api-desc">Waits for `ModifiableStaticManager` to finish initializing before running `Initialize`.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hit" /><code>{"private void Hit("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | <span className="api-desc">Server: applies impact damage, scaled by attack type and armour multipliers, and unmodifies the object at 0 health.</span> |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity = null)"}</code> | <span className="api-desc">Server: hooks the impact detectors and modified event and loads the attack type multipliers, once the static manager is ready.</span> |
| <Link id="m-modified" /><code>{"private void Modified("}<Link to="/mod/game-api/types/alta-networking/modifiablestaticobject">{"ModifiableStaticObject"}</Link>{" self)"}</code> | <span className="api-desc">Resets health to `modifiedHealth` when the object becomes modified.</span> |

</details>
