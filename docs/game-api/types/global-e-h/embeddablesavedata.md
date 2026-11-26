---
title: "EmbeddableSaveData"
description: "Save data (version 2) for an Embeddable: whether it is stuck in something and where."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmbeddableSaveData

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data (version 2) for an `Embeddable`: whether it is stuck in something and where.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NewSaveData<Embeddable, EmbeddableSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Embeddable`](/game-api/types/global-e-h/embeddable), [`EmbeddableSaveData`](/game-api/types/global-e-h/embeddablesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmbeddableSaveData()"}</code> | Creates an `EmbeddableSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isembedded" /><code>{"bool isEmbedded"}</code> | Whether it was embedded when saved. |
| <Link id="m-islocalembed" /><code>{"bool isLocalEmbed"}</code> | Probably whether the pose is relative to a rigidbody rather than the world. |
| <Link id="m-localposition" /><code>{"Vector3 localPosition"}</code> | Position relative to what it is embedded in. |
| <Link id="m-localrotation" /><code>{"Quaternion localRotation"}</code> | Rotation relative to what it is embedded in. |
| <Link id="m-rigidbodyindex" /><code>{"int rigidbodyIndex"}</code> | Index of the rigidbody it is embedded in. |
