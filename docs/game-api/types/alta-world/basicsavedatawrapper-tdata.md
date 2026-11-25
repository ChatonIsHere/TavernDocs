---
title: "BasicSaveDataWrapper<TData>"
description: "class BasicSaveDataWrapper<TData> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicSaveDataWrapper&lt;TData&gt;

A **class** in `Root.Township`, `Alta.Saving`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicSaveDataWrapper()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bytedata" /><code>{"private uint[] byteData"}</code> |  |
| <Link id="m-bytes" /><code>{"private int bytes"}</code> |  |
| <Link id="m-data" /><code>{"private TData data"}</code> |  |
| <Link id="m-isserialized" /><code>{"private bool isSerialized"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data-2" /><code>{"TData Data { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code><Link to="/game-api/types/alta-world/basicsavedatawrapper-tdata">{"BasicSaveDataWrapper"}</Link>{"<TData> Clone()"}</code> |  |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
| <Link id="m-markmodified" /><code>{"void MarkModified()"}</code> |  |
| <Link id="m-readfrom" /><code>{"void ReadFrom(BinaryReader binary)"}</code> |  |
| <Link id="m-writeto" /><code>{"void WriteTo(BinaryWriter binary)"}</code> |  |

## Used in

Members of other types that take, return or hold a `BasicSaveDataWrapper&lt;TData>`:

[`BasicSaveFile<T>.wrapper`](/game-api/types/alta-world/basicsavefile-t#m-wrapper), [`PlayerSave.saveData`](/game-api/types/alta-utilities/playersave#m-savedata).
