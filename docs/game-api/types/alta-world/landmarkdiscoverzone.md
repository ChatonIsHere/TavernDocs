---
title: "LandmarkDiscoverZone"
description: "class LandmarkDiscoverZone in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LandmarkDiscoverZone

A **class** in `Root.Township`, `Alta.Map`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<LandmarkDiscoverZoneSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LandmarkDiscoverZoneSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LandmarkDiscoverZoneSaveData`](/game-api/types/alta-world/landmarkdiscoverzonesavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LandmarkDiscoverZone()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-landmark" /><code>{"private "}<Link to="/game-api/types/alta-world/landmark">{"Landmark"}</Link>{" landmark"}</code> |  |
| <Link id="m-spherecollider" /><code>{"private SphereCollider sphereCollider"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |  |
