---
title: "ForgedPointCollection"
description: "class ForgedPointCollection in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForgedPointCollection

A **class** in `Root.Township`, `Alta.Blacksmithing`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`ChildSyncableCollection<ForgedPoint, ForgedPointCollection, ForgedPointCollectionSaveData, ForgedPointCollectionSaveData.Element>`](/game-api/types/global-c-d/childsyncablecollection-t-tthis-tsavedata-telementsavedata), [`IEntityReplaceHandler`](/game-api/types/alta-networking/ientityreplacehandler)
- **Derived types** [`ForgedPointCollection`](/game-api/types/alta-crafting/forgedpointcollection), [`ForgedPointCollectionSaveData`](/game-api/types/global-e-h/forgedpointcollectionsavedata)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ForgedPointCollection()"}</code> |

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-alta-networking-ientityreplacehandler-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Alta.Networking.IEntityReplaceHandler.Entity { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-syncallchildren" /><code>{"override void SyncAllChildren()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-destroyallentities" /><code>{"private void DestroyAllEntities()"}</code> |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceFlags)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ForgedPointCollection`:

[`ForgedModel<TB, TA>.forgedPointCollection`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-forgedpointcollection), [`ForgedModel<TB, TA>.ForgedPointCollection`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-forgedpointcollection-2).
