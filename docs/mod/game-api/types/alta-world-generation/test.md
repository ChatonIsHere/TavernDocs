---
title: "Test"
description: "Test asset for PAGaC: a hand-filled 3D tag grid plus an option set, used to try out part placement."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Test

A **class** in `Root.Township`, `Alta.PAGaC`.

Test asset for PAGaC: a hand-filled 3D tag grid plus an option set, used to try out part placement.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue), `ISerializationCallbackReceiver`
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Test()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-optionset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/optionset">{"OptionSet"}</Link>{" optionSet"}</code> | <span className="api-desc">The parts to try placing.</span> |
| <Link id="m-serializedtags" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[] serializedTags"}</code> | <span className="api-desc">Flat copy of the grid that Unity saves.</span> |
| <Link id="m-sizex" /><code>{"private int sizeX"}</code> | <span className="api-desc">Backing field for `SizeX`.</span> |
| <Link id="m-sizey" /><code>{"private int sizeY"}</code> | <span className="api-desc">Backing field for `SizeY`.</span> |
| <Link id="m-sizez" /><code>{"private int sizeZ"}</code> | <span className="api-desc">Backing field for `SizeZ`.</span> |
| <Link id="m-tags" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[,,] tags"}</code> | <span className="api-desc">The 3D tag grid.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" this[int x, int y, int z] { get; }"}</code> | <span className="api-desc">Indexer: the tag at a grid cell.</span> |
| <Link id="m-sizex-2" /><code>{"int SizeX { get; }"}</code> | <span className="api-desc">Grid width.</span> |
| <Link id="m-sizey-2" /><code>{"int SizeY { get; }"}</code> | <span className="api-desc">Grid height.</span> |
| <Link id="m-sizez-2" /><code>{"int SizeZ { get; }"}</code> | <span className="api-desc">Grid depth.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcebeforeserialize" /><code>{"void ForceBeforeSerialize()"}</code> | <span className="api-desc">Runs the serialization callback by hand to flatten the grid into `serializedTags`.</span> |
| <Link id="m-generate" /><code>{"GameObject Generate()"}</code> | <span className="api-desc">Runs a `Constructor` on the grid and returns the spawned parts under a new object.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> | <span className="api-desc">Rebuilds the 3D grid from the flat `serializedTags` array.</span> |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> | <span className="api-desc">Flattens the 3D grid into `serializedTags`.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Resizes the grid when the size fields change in the inspector.</span> |
| <Link id="m-recreatetags" /><code>{"private void RecreateTags()"}</code> | <span className="api-desc">Replaces the grid with a new empty one at the current size, losing its contents.</span> |
| <Link id="m-resize" /><code>{"private void Resize()"}</code> | <span className="api-desc">Recreates the grid if it is missing or its size no longer matches.</span> |

</details>
