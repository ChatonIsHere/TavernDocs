---
title: "EmbeddableManager"
description: "Sits on something that arrows, knives and other Embeddables can stick into."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmbeddableManager

A **class** in `Root.Township`, `Alta.Impact`.

Sits on something that arrows, knives and other `Embeddable`s can stick into. Tracks what is embedded and frees it on death, docking, destruction or crafting.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmbeddableManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allembedded" /><code>{"private List<"}<Link to="/mod/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> allEmbedded"}</code> | <span className="api-desc">Backing list for `AllEmbedded`, oldest first.</span> |
| <Link id="m-allowrigidbodiesnotlisted" /><code>{"private bool allowRigidbodiesNotListed"}</code> | <span className="api-desc">Backing field for `AllowRigidbodiesNotListed`.</span> |
| <Link id="m-btnunembedall" /><code>{"private bool btnUnEmbedAll"}</code> | <span className="api-desc">Inspector button that runs `UnEmbedAll`.</span> |
| <Link id="m-colliderstoaddto" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" collidersToAddTo"}</code> | <span className="api-desc">Optional collider group that embedded objects' colliders join while embedded.</span> |
| <Link id="m-embeddablerigidbodies" /><code>{"private Rigidbody[] embeddableRigidbodies"}</code> | <span className="api-desc">Backing field for `EmbeddableRigidbodies`.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">Backing field for `Entity`.</span> |
| <Link id="m-health" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" health"}</code> | <span className="api-desc">Health object watched for death.</span> |
| <Link id="m-islimitingembedamount" /><code>{"private bool isLimitingEmbedAmount"}</code> | <span className="api-desc">Whether `maxEmbedded` applies.</span> |
| <Link id="m-isunembeddingallondeath" /><code>{"private bool isUnEmbeddingAllOnDeath"}</code> | <span className="api-desc">Whether everything is freed when `health` is killed.</span> |
| <Link id="m-isunembeddingallondestroy" /><code>{"private bool isUnEmbeddingAllOnDestroy"}</code> | <span className="api-desc">Whether everything is freed when `entity` is destroyed.</span> |
| <Link id="m-isunembeddingondock" /><code>{"private bool isUnembeddingOnDock"}</code> | <span className="api-desc">Whether everything is freed when the pickup docks.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maxembedded" /><code>{"private int maxEmbedded"}</code> | <span className="api-desc">Most embeddables allowed at once. Defaults to 5.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Pickup watched for docking.</span> |
| <Link id="m-unembedalloncrafted" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" unEmbedAllOnCrafted"}</code> | <span className="api-desc">Crafting part watched for crafting and decrafting.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allembedded-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> AllEmbedded { get; }"}</code> | <span className="api-desc">Everything currently embedded here.</span> |
| <Link id="m-allowrigidbodiesnotlisted-2" /><code>{"bool AllowRigidbodiesNotListed { get; }"}</code> | <span className="api-desc">Whether embeddables can stick into rigidbodies missing from `EmbeddableRigidbodies`.</span> |
| <Link id="m-embeddablerigidbodies-2" /><code>{"Rigidbody[] EmbeddableRigidbodies { get; }"}</code> | <span className="api-desc">Rigidbodies things can embed into. An embeddable saves its index in this array.</span> |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The network entity this belongs to.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-embeddableadded" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-items/embeddablemanager">{"EmbeddableManager"}</Link>{", "}<Link to="/mod/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> EmbeddableAdded"}</code> | <span className="api-desc">Raised when an embeddable is registered.</span> |
| <Link id="m-embeddableremoved" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-items/embeddablemanager">{"EmbeddableManager"}</Link>{", "}<Link to="/mod/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> EmbeddableRemoved"}</code> | <span className="api-desc">Raised when an embeddable is deregistered.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterembeddable" /><code>{"void DeregisterEmbeddable("}<Link to="/mod/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> | <span className="api-desc">Stops tracking an embeddable, removes its colliders from the group and raises `EmbeddableRemoved`.</span> |
| <Link id="m-registerembeddable" /><code>{"void RegisterEmbeddable("}<Link to="/mod/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> | <span className="api-desc">Starts tracking an embeddable. If the limit is reached, the oldest ones are pulled out first.</span> |
| <Link id="m-unembedall" /><code>{"void UnEmbedAll()"}</code> | <span className="api-desc">Pulls out everything embedded here.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks up the death, dock, destroy and crafted events chosen in the Inspector.</span> |
| <Link id="m-handledeath" /><code>{"private void HandleDeath("}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" obj)"}</code> | <span className="api-desc">Frees everything when the health object is killed.</span> |
| <Link id="m-handledock" /><code>{"private void HandleDock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | <span className="api-desc">Frees everything just before the pickup docks.</span> |
| <Link id="m-handleembed" /><code>{"private void HandleEmbed("}<Link to="/mod/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> | <span className="api-desc">Adds the embeddable's colliders to `collidersToAddTo`.</span> |
| <Link id="m-handleembeddableunembed" /><code>{"private void HandleEmbeddableUnEmbed("}<Link to="/mod/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> | <span className="api-desc">Runs when an embeddable comes out by itself. Deregisters it.</span> |
| <Link id="m-handleentitydestroy" /><code>{"private void HandleEntityDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Frees everything when the entity is destroyed, but not when it unloads.</span> |
| <Link id="m-handleunembed" /><code>{"private void HandleUnEmbed("}<Link to="/mod/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> | <span className="api-desc">Removes the embeddable's colliders from `collidersToAddTo`.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Fills in `health` and `entity` from parents when needed.</span> |
| <Link id="m-unembedalloncrafted-2" /><code>{"private void UnEmbedAllOnCrafted("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, bool isLoad)"}</code> | <span className="api-desc">Frees everything when the crafting part is crafted or decrafted, but not on load.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EmbeddableManager`:

<div className="api-used-in">

[`Embeddable.TryGetStruckObject`](/mod/game-api/types/global-e-h/embeddable#m-trygetstruckobject).

</div>
