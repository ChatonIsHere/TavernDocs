---
title: "AdditionalStaticContent.StaticContent"
description: "One prefab entry in AdditionalStaticContent, with the local position, rotation and scale it is spawned at."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AdditionalStaticContent.StaticContent

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One prefab entry in `AdditionalStaticContent`, with the local position, rotation and scale it is spawned at.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Nested in** [`AdditionalStaticContent`](/mod/game-api/types/global-a-b/additionalstaticcontent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticContent()"}</code> | <span className="api-desc">Creates an `AdditionalStaticContent.StaticContent` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isvisualonly" /><code>{"private bool isVisualOnly"}</code> | <span className="api-desc">When true, the spawned copy is not marked for script-assigned static batching in the editor.</span> |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> | <span className="api-desc">Local position the prefab is spawned at.</span> |
| <Link id="m-localrotation" /><code>{"private Quaternion localRotation"}</code> | <span className="api-desc">Local rotation the prefab is spawned at.</span> |
| <Link id="m-localscale" /><code>{"private Vector3 localScale"}</code> | <span className="api-desc">Local scale the prefab is spawned at.</span> |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | <span className="api-desc">The prefab to spawn.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-instantiatecontent" /><code>{"Transform InstantiateContent(Transform parent)"}</code> | <span className="api-desc">Spawns the prefab under the parent at the stored transform. In the editor it adds or removes the static batching marker.</span> |
| <Link id="m-isequals" /><code>{"bool IsEquals(GameObject prefab)"}</code> | <span className="api-desc">True if this entry uses the given prefab.</span> |
| <Link id="m-validate" /><code>{"bool Validate()"}</code> | <span className="api-desc">Resets the transform to identity if the scale is about zero, and returns whether it did.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isapproxzeroscale" /><code>{"private bool IsApproxZeroScale()"}</code> | <span className="api-desc">True when the stored scale is about zero.</span> |

</details>

## Used in

Members of other types that take, return or hold a `StaticContent`:

<div className="api-used-in">

[`AdditionalStaticContent.staticContent`](/mod/game-api/types/global-a-b/additionalstaticcontent#m-staticcontent).

</div>
