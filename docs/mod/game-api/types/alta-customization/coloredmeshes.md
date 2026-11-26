---
title: "ColoredMeshes"
description: "Gives a set of renderers one shared material copy for a cosmetic colour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColoredMeshes

A **class** in `Root.Township`, `Alta.Customization`.

Gives a set of renderers one shared material copy for a cosmetic colour.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColoredMeshes()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" color"}</code> | <span className="api-desc">Backing field for `Color`.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">Source material copied for the renderers.</span> |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> | <span className="api-desc">Renderers that get the shared material.</span> |
| <Link id="m-sharedmaterial" /><code>{"private Material sharedMaterial"}</code> | <span className="api-desc">The material copy shared by the renderers.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color-2" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" Color { get; set; }"}</code> | <span className="api-desc">The cosmetic colour. Setting it creates the shared material copy and assigns it to the renderers the first time; it does not apply the colour itself in this code.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the shared material copy.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: reapplies the colour.</span> |

</details>
