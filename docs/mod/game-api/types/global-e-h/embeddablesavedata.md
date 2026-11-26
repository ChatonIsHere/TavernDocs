---
title: "EmbeddableSaveData"
description: "Save data (version 2) for an Embeddable: whether it is stuck in something and where."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmbeddableSaveData

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data (version 2) for an `Embeddable`: whether it is stuck in something and where.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NewSaveData<Embeddable, EmbeddableSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Embeddable`](/mod/game-api/types/global-e-h/embeddable), [`EmbeddableSaveData`](/mod/game-api/types/global-e-h/embeddablesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmbeddableSaveData()"}</code> | <span className="api-desc">Creates an `EmbeddableSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isembedded" /><code>{"bool isEmbedded"}</code> | <span className="api-desc">Whether it was embedded when saved.</span> |
| <Link id="m-islocalembed" /><code>{"bool isLocalEmbed"}</code> | <span className="api-desc">Probably whether the pose is relative to a rigidbody rather than the world.</span> |
| <Link id="m-localposition" /><code>{"Vector3 localPosition"}</code> | <span className="api-desc">Position relative to what it is embedded in.</span> |
| <Link id="m-localrotation" /><code>{"Quaternion localRotation"}</code> | <span className="api-desc">Rotation relative to what it is embedded in.</span> |
| <Link id="m-rigidbodyindex" /><code>{"int rigidbodyIndex"}</code> | <span className="api-desc">Index of the rigidbody it is embedded in.</span> |
