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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AmbienceArea()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ambiencesetin" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" ambienceSetIn"}</code> | <span className="api-desc">Atmosphere set for inside the area.</span> |
| <Link id="m-ambiencesetout" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" ambienceSetOut"}</code> | <span className="api-desc">Atmosphere set for outside the area.</span> |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/atmospheremanager">{"AtmosphereManager"}</Link>{" manager"}</code> | <span className="api-desc">Atmosphere manager reference; never assigned here.</span> |

</details>
