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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`ModifiableStaticObject`](/game-api/types/alta-networking/modifiablestaticobject)
- **Documented in** [Static objects](/game-api/world/static-objects#destroyablestaticobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DestroyableStaticObject()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenthealth" /><code>{"private float currentHealth"}</code> | Health left before the object reverts. |
| <Link id="m-detectors" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{"[] detectors"}</code> | Impact detectors that pass hits to `Hit`. |
| <Link id="m-impacttypemultipliers" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{", float> impactTypeMultipliers"}</code> | Damage multiplier per impact type, built from `multipliers`. |
| <Link id="m-modifiedhealth" /><code>{"private float modifiedHealth"}</code> | Health the object gets each time it becomes modified. |
| <Link id="m-multipliers" /><code>{"private "}<Link to="/game-api/types/global-a-b/attacktypemultiplier">{"AttackTypeMultiplier"}</Link>{"[] multipliers"}</code> | Damage multipliers per attack type. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: fills `detectors` from child impact detectors if empty. |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> | Waits for `ModifiableStaticManager` to finish initializing before running `Initialize`. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hit" /><code>{"private void Hit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Server: applies impact damage, scaled by attack type and armour multipliers, and unmodifies the object at 0 health. |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity = null)"}</code> | Server: hooks the impact detectors and modified event and loads the attack type multipliers, once the static manager is ready. |
| <Link id="m-modified" /><code>{"private void Modified("}<Link to="/game-api/types/alta-networking/modifiablestaticobject">{"ModifiableStaticObject"}</Link>{" self)"}</code> | Resets health to `modifiedHealth` when the object becomes modified. |

</details>
