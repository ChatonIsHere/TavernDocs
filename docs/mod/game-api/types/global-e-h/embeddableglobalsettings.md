---
title: "EmbeddableGlobalSettings"
description: "Global settings for embedding (such as arrows sticking into things): whether only pickups with a given tag can be embedded into."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmbeddableGlobalSettings

A **class** in `Root.Township`, the global namespace.

Global settings for embedding (such as arrows sticking into things): whether only pickups with a given tag can be embedded into.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`GlobalSettings<EmbeddableGlobalSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`EmbeddableGlobalSettings`](/mod/game-api/types/global-e-h/embeddableglobalsettings)
- **Attributes** `CreateAssetMenu`, `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmbeddableGlobalSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isrestrictingpickupsbytag" /><code>{"private bool isRestrictingPickupsByTag"}</code> | <span className="api-desc">Backing field for `IsRestrictingPickupsByTag`.</span> |
| <Link id="m-validpickupstoembedinto" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{" validPickupsToEmbedInto"}</code> | <span className="api-desc">Backing field for `ValidPickupsToEmbedInto`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isrestrictingpickupsbytag-2" /><code>{"bool IsRestrictingPickupsByTag { get; }"}</code> | <span className="api-desc">Whether embedding into pickups is limited by tag.</span> |
| <Link id="m-validpickupstoembedinto-2" /><code><Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{" ValidPickupsToEmbedInto { get; }"}</code> | <span className="api-desc">Tag a pickup needs to be embedded into when the restriction is on.</span> |
