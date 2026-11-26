---
title: "AmbienceArea"
description: "Component holding two atmosphere sets for inside and outside an area."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AmbienceArea

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Component holding two atmosphere sets for inside and outside an area. It has no logic in this build.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AmbienceArea()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ambiencesetin" /><code>{"private "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" ambienceSetIn"}</code> | Atmosphere set for inside the area. |
| <Link id="m-ambiencesetout" /><code>{"private "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" ambienceSetOut"}</code> | Atmosphere set for outside the area. |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" manager"}</code> | Atmosphere manager reference; never assigned here. |

</details>
