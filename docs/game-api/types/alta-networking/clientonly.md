---
title: "ClientOnly"
description: "Turns a list of behaviours off on a dedicated server and on everywhere else (clients and local test), so client-only scripts never run server side."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientOnly

A **class** in `Root.Township`, `Alta.Networking`.

Turns a list of behaviours off on a dedicated server and on everywhere else (clients and local test), so client-only scripts never run server side.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Documented in** [Entity sync](/game-api/networking/entity-sync#clientonly)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClientOnly()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-behaviours" /><code>{"private Behaviour[] behaviours"}</code> | The behaviours switched on or off. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Disables the listed behaviours on a non-local-test server and enables them otherwise. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: drops null entries from `behaviours`. |

</details>
