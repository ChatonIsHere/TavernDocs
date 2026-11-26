---
title: "LocalPlayer"
description: "Player prefab component that turns on localOnly objects for the local player and remoteOnly objects for other players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalPlayer

A **class** in `Root.Township`, the global namespace.

Player prefab component that turns on `localOnly` objects for the local player and `remoteOnly` objects for other players. Client.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocalPlayer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localonly" /><code>{"private GameObject[] localOnly"}</code> | <span className="api-desc">Objects shown only on the local player.</span> |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | <span className="api-desc">The `PlayerController` on the same object.</span> |
| <Link id="m-remoteonly" /><code>{"private GameObject[] remoteOnly"}</code> | <span className="api-desc">Objects shown only on other players.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Runs `Setup` now if the player is already linked, otherwise when it links to the local player.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step that drops null entries from both lists.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Activates `localOnly` or `remoteOnly` objects depending on whether this is the local player.</span> |

</details>
