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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicSaveDataWrapper()"}</code> | Creates a `BasicSaveDataWrapper` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bytedata" /><code>{"private uint[] byteData"}</code> | The cached serialized bits. |
| <Link id="m-bytes" /><code>{"private int bytes"}</code> | Size of the cached serialized data. |
| <Link id="m-data" /><code>{"private TData data"}</code> | Backing field for `Data`. |
| <Link id="m-isserialized" /><code>{"private bool isSerialized"}</code> | Whether `byteData` matches `Data`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data-2" /><code>{"TData Data { get; set; }"}</code> | The save data. Setting it marks the cached bits stale. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code><Link to="/game-api/types/alta-world/basicsavedatawrapper-tdata">{"BasicSaveDataWrapper"}</Link>{"<TData> Clone()"}</code> | Serializes if needed and returns a copy holding a pooled copy of the bits. The copy's `Data` is a fresh default object, not the read data. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Returns the cached bits array to the shared pool. |
| <Link id="m-markmodified" /><code>{"void MarkModified()"}</code> | Marks the cached bits stale, so the next write serializes `Data` again. |
| <Link id="m-readfrom" /><code>{"void ReadFrom(BinaryReader binary)"}</code> | Reads the version info and bits, then builds `Data` from them. |
| <Link id="m-writeto" /><code>{"void WriteTo(BinaryWriter binary)"}</code> | Serializes `Data` if stale, then writes the latest version info and the bits. |

## Used in

Members of other types that take, return or hold a `BasicSaveDataWrapper&lt;TData>`:

[`BasicSaveFile<T>.wrapper`](/game-api/types/alta-world/basicsavefile-t#m-wrapper), [`PlayerSave.saveData`](/game-api/types/alta-utilities/playersave#m-savedata).
