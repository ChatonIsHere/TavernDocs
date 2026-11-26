---
title: "PrefabNameMap"
description: "Global settings asset that maps prefab hashes to their asset paths."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabNameMap

A **class** in `Root.Township`, `Alta.Networking`.

Global settings asset that maps prefab hashes to their asset paths. Get it with `PrefabNameMap.Instance`.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`GlobalSettings<PrefabNameMap>`](/mod/game-api/types/assembly-other/globalsettings-t), `ISerializationCallbackReceiver`
- **Derived types** [`PrefabNameMap`](/mod/game-api/types/alta-networking/prefabnamemap)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PrefabNameMap()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hashes" /><code>{"private uint[] hashes"}</code> | <span className="api-desc">Prefab hashes, matched by index with `paths`.</span> |
| <Link id="m-map" /><code>{"private Dictionary<uint, string> map"}</code> | <span className="api-desc">Backing field for `Map`.</span> |
| <Link id="m-paths" /><code>{"private string[] paths"}</code> | <span className="api-desc">Prefab asset paths, matched by index with `hashes`.</span> |
| <Link id="m-setup" /><code>{"private bool setup"}</code> | <span className="api-desc">Editor button that refreshes the map for a build.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-map-2" /><code>{"Dictionary<uint, string> Map { get; }"}</code> | <span className="api-desc">Prefab hash to asset path, built when the asset loads.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> | <span className="api-desc">Builds `Map` from the `hashes` and `paths` arrays.</span> |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> | <span className="api-desc">Does nothing.</span> |

</details>
