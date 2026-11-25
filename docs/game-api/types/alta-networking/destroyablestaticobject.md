---
title: "DestroyableStaticObject"
description: "Alta.Networking.DestroyableStaticObject derives from ModifiableStaticObject and adds health. On the server it listens to its ImpactDetectors."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DestroyableStaticObject

A **class** in `Root.Township`, `Alta.Networking`.

`Alta.Networking.DestroyableStaticObject` derives from `ModifiableStaticObject` and adds health. On the server it listens to its `ImpactDetector`s.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`ModifiableStaticObject`](/game-api/types/alta-networking/modifiablestaticobject)
- **Documented in** [Static objects](/game-api/world/static-objects#destroyablestaticobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DestroyableStaticObject()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currenthealth" /><code>{"private float currentHealth"}</code> |  |
| <Link id="m-detectors" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{"[] detectors"}</code> |  |
| <Link id="m-impacttypemultipliers" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{", float> impactTypeMultipliers"}</code> |  |
| <Link id="m-modifiedhealth" /><code>{"private float modifiedHealth"}</code> |  |
| <Link id="m-multipliers" /><code>{"private "}<Link to="/game-api/types/global-a-b/attacktypemultiplier">{"AttackTypeMultiplier"}</Link>{"[] multipliers"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hit" /><code>{"private void Hit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |  |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity = null)"}</code> |  |
| <Link id="m-modified" /><code>{"private void Modified("}<Link to="/game-api/types/alta-networking/modifiablestaticobject">{"ModifiableStaticObject"}</Link>{" self)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> |  |
