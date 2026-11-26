---
title: "EmbeddableSaveData1"
description: "Old (version 1) save data for an Embeddable."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmbeddableSaveData1

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old (version 1) save data for an `Embeddable`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EmbeddableSaveData1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isembedded" /><code>{"bool isEmbedded"}</code> | Whether it was embedded. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Returns a new version 1 object with `isEmbedded` false rather than the version 2 type, so old embeds are dropped. |
