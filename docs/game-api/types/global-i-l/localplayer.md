---
title: "LocalPlayer"
description: "Player prefab component that turns on localOnly objects for the local player and remoteOnly objects for other players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalPlayer

A **class** in `Root.Township`, no namespace.

Player prefab component that turns on `localOnly` objects for the local player and `remoteOnly` objects for other players. Client.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocalPlayer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localonly" /><code>{"private GameObject[] localOnly"}</code> | Objects shown only on the local player. |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | The `PlayerController` on the same object. |
| <Link id="m-remoteonly" /><code>{"private GameObject[] remoteOnly"}</code> | Objects shown only on other players. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Runs `Setup` now if the player is already linked, otherwise when it links to the local player. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step that drops null entries from both lists. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Activates `localOnly` or `remoteOnly` objects depending on whether this is the local player. |

</details>
