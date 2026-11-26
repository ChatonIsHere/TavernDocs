---
title: "PreventAtlas"
description: "Component that keeps renderers out of texture atlasing: the listed ones, or every child renderer when the list is empty."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PreventAtlas

A **class** in `Root.Township`, `Alta.Utilities.Atlas`.

Component that keeps renderers out of texture atlasing: the listed ones, or every child renderer when the list is empty.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`, [`IPreventAtlasing`](/game-api/types/alta-utilities/ipreventatlasing)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PreventAtlas()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-preventatlasingon" /><code>{"private Renderer[] preventAtlasingOn"}</code> | Renderers to keep out of atlasing. Leave empty to cover all children. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ispreventatlasing" /><code>{"private bool Alta.Utilities.Atlas.IPreventAtlasing.IsPreventAtlasing(Renderer renderer)"}</code> | True if the renderer is in the list, or always true when the list is empty. |

</details>
