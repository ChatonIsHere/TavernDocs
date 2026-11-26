---
title: "IClusterSerialized"
description: "Something that writes its own part of a cluster to a stream."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IClusterSerialized

An **interface** in `Root.Township`, `Alta.Chunks`.

Something that writes its own part of a cluster to a stream. Nothing in this build implements it.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serializeclusterpart" /><code>{"void SerializeClusterPart("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes this object's cluster data on the stream. |
