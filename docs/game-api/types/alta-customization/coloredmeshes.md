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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColoredMeshes()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" color"}</code> | Backing field for `Color`. |
| <Link id="m-material" /><code>{"private Material material"}</code> | Source material copied for the renderers. |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> | Renderers that get the shared material. |
| <Link id="m-sharedmaterial" /><code>{"private Material sharedMaterial"}</code> | The material copy shared by the renderers. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-color-2" /><code><Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" Color { get; set; }"}</code> | The cosmetic colour. Setting it creates the shared material copy and assigns it to the renderers the first time; it does not apply the colour itself in this code. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up the shared material copy. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: reapplies the colour. |

</details>
