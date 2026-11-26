---
title: "ChunkDisplay"
description: "Live debug readout of the chunk the local player is in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkDisplay

A **class** in `Root.Township`, `Alta.Utilities.Profiling`.

Live debug readout of the chunk the local player is in.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`LiveDataDisplayBase`](/mod/game-api/types/alta-utilities/livedatadisplaybase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkDisplay()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-title" /><code>{"protected override string Title { get; }"}</code> | <span className="api-desc">Label `Chunk`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isvalid" /><code>{"override bool IsValid()"}</code> | <span className="api-desc">Only shown while the local player is in a chunk.</span> |
| <Link id="m-getdata" /><code>{"protected override string GetData()"}</code> | <span className="api-desc">The identifier of `LocationChunk.ChunkWithLocalPlayer`.</span> |
