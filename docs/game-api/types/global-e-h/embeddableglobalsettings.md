---
title: "EmbeddableGlobalSettings"
description: "Global settings for embedding (such as arrows sticking into things): whether only pickups with a given tag can be embedded into."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmbeddableGlobalSettings

A **class** in `Root.Township`, no namespace.

Global settings for embedding (such as arrows sticking into things): whether only pickups with a given tag can be embedded into.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`GlobalSettings<EmbeddableGlobalSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`EmbeddableGlobalSettings`](/game-api/types/global-e-h/embeddableglobalsettings)
- **Attributes** `CreateAssetMenu`, `GlobalSettings`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EmbeddableGlobalSettings()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isrestrictingpickupsbytag" /><code>{"private bool isRestrictingPickupsByTag"}</code> | Backing field for `IsRestrictingPickupsByTag`. |
| <Link id="m-validpickupstoembedinto" /><code>{"private "}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{" validPickupsToEmbedInto"}</code> | Backing field for `ValidPickupsToEmbedInto`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrestrictingpickupsbytag-2" /><code>{"bool IsRestrictingPickupsByTag { get; }"}</code> | Whether embedding into pickups is limited by tag. |
| <Link id="m-validpickupstoembedinto-2" /><code><Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{" ValidPickupsToEmbedInto { get; }"}</code> | Tag a pickup needs to be embedded into when the restriction is on. |
