---
title: "BasicSaveDataWrapper<TData>"
description: "Holds a basic save data object along with its serialized bits, so it is only serialized again after it changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicSaveDataWrapper&lt;TData&gt;

A **class** in `Root.Township`, `Alta.Saving`.

Holds a basic save data object along with its serialized bits, so it is only serialized again after it changes.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicSaveDataWrapper()"}</code> | <span className="api-desc">Creates a `BasicSaveDataWrapper` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bytedata" /><code>{"private uint[] byteData"}</code> | <span className="api-desc">The cached serialized bits.</span> |
| <Link id="m-bytes" /><code>{"private int bytes"}</code> | <span className="api-desc">Size of the cached serialized data.</span> |
| <Link id="m-data" /><code>{"private TData data"}</code> | <span className="api-desc">Backing field for `Data`.</span> |
| <Link id="m-isserialized" /><code>{"private bool isSerialized"}</code> | <span className="api-desc">Whether `byteData` matches `Data`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data-2" /><code>{"TData Data { get; set; }"}</code> | <span className="api-desc">The save data. Setting it marks the cached bits stale.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code><Link to="/mod/game-api/types/alta-world/basicsavedatawrapper-tdata">{"BasicSaveDataWrapper"}</Link>{"<TData> Clone()"}</code> | <span className="api-desc">Serializes if needed and returns a copy holding a pooled copy of the bits. The copy's `Data` is a fresh default object, not the read data.</span> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Returns the cached bits array to the shared pool.</span> |
| <Link id="m-markmodified" /><code>{"void MarkModified()"}</code> | <span className="api-desc">Marks the cached bits stale, so the next write serializes `Data` again.</span> |
| <Link id="m-readfrom" /><code>{"void ReadFrom(BinaryReader binary)"}</code> | <span className="api-desc">Reads the version info and bits, then builds `Data` from them.</span> |
| <Link id="m-writeto" /><code>{"void WriteTo(BinaryWriter binary)"}</code> | <span className="api-desc">Serializes `Data` if stale, then writes the latest version info and the bits.</span> |

## Used in

Members of other types that take, return or hold a `BasicSaveDataWrapper&lt;TData>`:

<div className="api-used-in">

[`BasicSaveFile<T>.wrapper`](/mod/game-api/types/alta-world/basicsavefile-t#m-wrapper), [`PlayerSave.saveData`](/mod/game-api/types/alta-utilities/playersave#m-savedata).

</div>
