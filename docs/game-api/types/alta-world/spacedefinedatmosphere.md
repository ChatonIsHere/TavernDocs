---
title: "SpaceDefinedAtmosphere"
description: "Blends between atmosphere sets using placed ambience points: the closer point pair and progress between them decide the ambient colour and audio."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpaceDefinedAtmosphere

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Blends between atmosphere sets using placed ambience points: the closer point pair and progress between them decide the ambient colour and audio.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`SpaceDefinedAttribute<AmbienceSpacePoint>`](/game-api/types/global-s/spacedefinedattribute-t)
- **Documented in** [Time and environment](/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpaceDefinedAtmosphere()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ambientpoints" /><code>{"private "}<Link to="/game-api/types/alta-world/ambiencespacepoint">{"AmbienceSpacePoint"}</Link>{"[] ambientPoints"}</code> | Serialized ambience points. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-points" /><code>{"override IEnumerable<"}<Link to="/game-api/types/alta-world/ambiencespacepoint">{"AmbienceSpacePoint"}</Link>{"> Points { get; }"}</code> | The ambience points. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-exitarea" /><code>{"protected override void ExitArea()"}</code> | On leaving the area, applies whichever set of the closest point pair the player was nearer. |
| <Link id="m-sendnewcloserpoint" /><code>{"protected override void SendNewCloserPoint("}<Link to="/game-api/types/alta-world/ambiencespacepoint">{"AmbienceSpacePoint"}</Link>{" from, "}<Link to="/game-api/types/alta-world/ambiencespacepoint">{"AmbienceSpacePoint"}</Link>{" to, float progress)"}</code> | Blends ambient colour between the two sets and crossfades their ambience audio by progress. |
