---
title: "LightFlicker"
description: "Client-side effect that drifts a light's colour towards random colours from a gradient."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LightFlicker

A **class** in `Root.Township`, the global namespace.

Client-side effect that drifts a light's colour towards random colours from a gradient. Removes itself on a headless server.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LightFlicker()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colors" /><code>{"private Gradient colors"}</code> | <span className="api-desc">Gradient the random colours are picked from.</span> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | <span className="api-desc">How fast the colour drifts.</span> |
| <Link id="m-targetlight" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" targetLight"}</code> | <span className="api-desc">The light on this object.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Destroys itself when headless, otherwise finds the light.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Moves the light colour towards a random gradient colour.</span> |

</details>
