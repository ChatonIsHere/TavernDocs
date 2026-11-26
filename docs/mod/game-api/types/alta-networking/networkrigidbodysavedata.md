---
title: "NetworkRigidbodySaveData"
description: "Save data for a NetworkRigidbody: its transform, motion and sleep state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkRigidbodySaveData

A **internal class** in `Root.Township`, `Alta.Networking`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `NetworkRigidbody`: its transform, motion and sleep state.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NewSaveData<NetworkRigidbody, NetworkRigidbodySaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`NetworkRigidbody`](/mod/game-api/types/alta-networking/networkrigidbody), [`NetworkRigidbodySaveData`](/mod/game-api/types/alta-networking/networkrigidbodysavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkRigidbodySaveData()"}</code> | Creates a `NetworkRigidbodySaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocity" /><code>{"Vector3 angularVelocity"}</code> | Saved angular velocity. |
| <Link id="m-iskinematic" /><code>{"bool isKinematic"}</code> | Whether the body was kinematic. |
| <Link id="m-isserversleeping" /><code>{"bool isServerSleeping"}</code> | Whether the body was asleep on the server. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Saved position. |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | Saved rotation. |
| <Link id="m-velocity" /><code>{"Vector3 velocity"}</code> | Saved velocity. |
