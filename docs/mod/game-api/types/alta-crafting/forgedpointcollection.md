---
title: "ForgedPointCollection"
description: "The set of ForgedPoint children on a forged item, synced and saved as one collection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForgedPointCollection

A **class** in `Root.Township`, `Alta.Blacksmithing`.

The set of `ForgedPoint` children on a forged item, synced and saved as one collection. Keeps forging progress when the item is replaced.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`ChildSyncableCollection<ForgedPoint, ForgedPointCollection, ForgedPointCollectionSaveData, ForgedPointCollectionSaveData.Element>`](/mod/game-api/types/global-c-d/childsyncablecollection-t-tthis-tsavedata-telementsavedata), [`IEntityReplaceHandler`](/mod/game-api/types/alta-networking/ientityreplacehandler)
- **Derived types** [`ForgedPointCollection`](/mod/game-api/types/alta-crafting/forgedpointcollection), [`ForgedPointCollectionSaveData`](/mod/game-api/types/global-e-h/forgedpointcollectionsavedata)
- **Documented in** [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForgedPointCollection()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-ientityreplacehandler-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Alta.Networking.IEntityReplaceHandler.Entity { get; }"}</code> | <span className="api-desc">The entity this collection belongs to.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-syncallchildren" /><code>{"override void SyncAllChildren()"}</code> | <span className="api-desc">Syncs every point, only on a real server (not local test).</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyallentities" /><code>{"private void DestroyAllEntities()"}</code> | <span className="api-desc">Private: destroys the `NetworkEntity` component on each child point. Not called in this build.</span> |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceFlags)"}</code> | <span className="api-desc">Copies each point's progress to the matching point on the replacing item, by index.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ForgedPointCollection`:

<div className="api-used-in">

[`ForgedModel<TB, TA>.forgedPointCollection`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-forgedpointcollection), [`ForgedModel<TB, TA>.ForgedPointCollection`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-forgedpointcollection-2).

</div>
