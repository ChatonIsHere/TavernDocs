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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Documented in** [Entity sync](/mod/game-api/networking/entity-sync#clientonly)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientOnly()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-behaviours" /><code>{"private Behaviour[] behaviours"}</code> | <span className="api-desc">The behaviours switched on or off.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Disables the listed behaviours on a non-local-test server and enables them otherwise.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step: drops null entries from `behaviours`.</span> |

</details>
