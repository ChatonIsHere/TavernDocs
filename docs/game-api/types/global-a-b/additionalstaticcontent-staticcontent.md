---
title: "AdditionalStaticContent.StaticContent"
description: "One prefab entry in AdditionalStaticContent, with the local position, rotation and scale it is spawned at."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AdditionalStaticContent.StaticContent

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One prefab entry in `AdditionalStaticContent`, with the local position, rotation and scale it is spawned at.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Nested in** [`AdditionalStaticContent`](/game-api/types/global-a-b/additionalstaticcontent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticContent()"}</code> | Creates an `AdditionalStaticContent.StaticContent` with default values. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isvisualonly" /><code>{"private bool isVisualOnly"}</code> | When true, the spawned copy is not marked for script-assigned static batching in the editor. |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> | Local position the prefab is spawned at. |
| <Link id="m-localrotation" /><code>{"private Quaternion localRotation"}</code> | Local rotation the prefab is spawned at. |
| <Link id="m-localscale" /><code>{"private Vector3 localScale"}</code> | Local scale the prefab is spawned at. |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | The prefab to spawn. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-instantiatecontent" /><code>{"Transform InstantiateContent(Transform parent)"}</code> | Spawns the prefab under the parent at the stored transform. In the editor it adds or removes the static batching marker. |
| <Link id="m-isequals" /><code>{"bool IsEquals(GameObject prefab)"}</code> | True if this entry uses the given prefab. |
| <Link id="m-validate" /><code>{"bool Validate()"}</code> | Resets the transform to identity if the scale is about zero, and returns whether it did. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isapproxzeroscale" /><code>{"private bool IsApproxZeroScale()"}</code> | True when the stored scale is about zero. |

</details>

## Used in

Members of other types that take, return or hold a `StaticContent`:

[`AdditionalStaticContent.staticContent`](/game-api/types/global-a-b/additionalstaticcontent#m-staticcontent).
