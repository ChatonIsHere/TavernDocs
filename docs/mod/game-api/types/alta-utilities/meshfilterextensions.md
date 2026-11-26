---
title: "MeshFilterExtensions"
description: "Vertex colour helper for mesh filters."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeshFilterExtensions

A **static class** in `Root.Township`, `Alta.Utilities`.

Vertex colour helper for mesh filters.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setcolor" /><code>{"static void SetColor(MeshFilter meshFilter, Color color, bool useSharedMesh = false)"}</code> | Swaps the mesh for a cached copy with every vertex set to one colour. Changes the shared mesh if `useSharedMesh` is true. |
