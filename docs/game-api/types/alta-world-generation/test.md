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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue), `ISerializationCallbackReceiver`
- **Attributes** `DefaultMember`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Test()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-optionset" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/optionset">{"OptionSet"}</Link>{" optionSet"}</code> | The parts to try placing. |
| <Link id="m-serializedtags" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[] serializedTags"}</code> | Flat copy of the grid that Unity saves. |
| <Link id="m-sizex" /><code>{"private int sizeX"}</code> | Backing field for `SizeX`. |
| <Link id="m-sizey" /><code>{"private int sizeY"}</code> | Backing field for `SizeY`. |
| <Link id="m-sizez" /><code>{"private int sizeZ"}</code> | Backing field for `SizeZ`. |
| <Link id="m-tags" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[,,] tags"}</code> | The 3D tag grid. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-item" /><code><Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{" this[int x, int y, int z] { get; }"}</code> | Indexer: the tag at a grid cell. |
| <Link id="m-sizex-2" /><code>{"int SizeX { get; }"}</code> | Grid width. |
| <Link id="m-sizey-2" /><code>{"int SizeY { get; }"}</code> | Grid height. |
| <Link id="m-sizez-2" /><code>{"int SizeZ { get; }"}</code> | Grid depth. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcebeforeserialize" /><code>{"void ForceBeforeSerialize()"}</code> | Runs the serialization callback by hand to flatten the grid into `serializedTags`. |
| <Link id="m-generate" /><code>{"GameObject Generate()"}</code> | Runs a `Constructor` on the grid and returns the spawned parts under a new object. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> | Rebuilds the 3D grid from the flat `serializedTags` array. |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> | Flattens the 3D grid into `serializedTags`. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Resizes the grid when the size fields change in the inspector. |
| <Link id="m-recreatetags" /><code>{"private void RecreateTags()"}</code> | Replaces the grid with a new empty one at the current size, losing its contents. |
| <Link id="m-resize" /><code>{"private void Resize()"}</code> | Recreates the grid if it is missing or its size no longer matches. |

</details>
