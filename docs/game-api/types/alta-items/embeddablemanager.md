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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmbeddableManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allembedded" /><code>{"private List<"}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> allEmbedded"}</code> | Backing list for `AllEmbedded`, oldest first. |
| <Link id="m-allowrigidbodiesnotlisted" /><code>{"private bool allowRigidbodiesNotListed"}</code> | Backing field for `AllowRigidbodiesNotListed`. |
| <Link id="m-btnunembedall" /><code>{"private bool btnUnEmbedAll"}</code> | Inspector button that runs `UnEmbedAll`. |
| <Link id="m-colliderstoaddto" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" collidersToAddTo"}</code> | Optional collider group that embedded objects' colliders join while embedded. |
| <Link id="m-embeddablerigidbodies" /><code>{"private Rigidbody[] embeddableRigidbodies"}</code> | Backing field for `EmbeddableRigidbodies`. |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | Backing field for `Entity`. |
| <Link id="m-health" /><code>{"private "}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" health"}</code> | Health object watched for death. |
| <Link id="m-islimitingembedamount" /><code>{"private bool isLimitingEmbedAmount"}</code> | Whether `maxEmbedded` applies. |
| <Link id="m-isunembeddingallondeath" /><code>{"private bool isUnEmbeddingAllOnDeath"}</code> | Whether everything is freed when `health` is killed. |
| <Link id="m-isunembeddingallondestroy" /><code>{"private bool isUnEmbeddingAllOnDestroy"}</code> | Whether everything is freed when `entity` is destroyed. |
| <Link id="m-isunembeddingondock" /><code>{"private bool isUnembeddingOnDock"}</code> | Whether everything is freed when the pickup docks. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-maxembedded" /><code>{"private int maxEmbedded"}</code> | Most embeddables allowed at once. Defaults to 5. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Pickup watched for docking. |
| <Link id="m-unembedalloncrafted" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" unEmbedAllOnCrafted"}</code> | Crafting part watched for crafting and decrafting. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allembedded-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> AllEmbedded { get; }"}</code> | Everything currently embedded here. |
| <Link id="m-allowrigidbodiesnotlisted-2" /><code>{"bool AllowRigidbodiesNotListed { get; }"}</code> | Whether embeddables can stick into rigidbodies missing from `EmbeddableRigidbodies`. |
| <Link id="m-embeddablerigidbodies-2" /><code>{"Rigidbody[] EmbeddableRigidbodies { get; }"}</code> | Rigidbodies things can embed into. An embeddable saves its index in this array. |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The network entity this belongs to. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-embeddableadded" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/embeddablemanager">{"EmbeddableManager"}</Link>{", "}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> EmbeddableAdded"}</code> | Raised when an embeddable is registered. |
| <Link id="m-embeddableremoved" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/embeddablemanager">{"EmbeddableManager"}</Link>{", "}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> EmbeddableRemoved"}</code> | Raised when an embeddable is deregistered. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterembeddable" /><code>{"void DeregisterEmbeddable("}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> | Stops tracking an embeddable, removes its colliders from the group and raises `EmbeddableRemoved`. |
| <Link id="m-registerembeddable" /><code>{"void RegisterEmbeddable("}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> | Starts tracking an embeddable. If the limit is reached, the oldest ones are pulled out first. |
| <Link id="m-unembedall" /><code>{"void UnEmbedAll()"}</code> | Pulls out everything embedded here. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks up the death, dock, destroy and crafted events chosen in the Inspector. |
| <Link id="m-handledeath" /><code>{"private void HandleDeath("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" obj)"}</code> | Frees everything when the health object is killed. |
| <Link id="m-handledock" /><code>{"private void HandleDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | Frees everything just before the pickup docks. |
| <Link id="m-handleembed" /><code>{"private void HandleEmbed("}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> | Adds the embeddable's colliders to `collidersToAddTo`. |
| <Link id="m-handleembeddableunembed" /><code>{"private void HandleEmbeddableUnEmbed("}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> | Runs when an embeddable comes out by itself. Deregisters it. |
| <Link id="m-handleentitydestroy" /><code>{"private void HandleEntityDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Frees everything when the entity is destroyed, but not when it unloads. |
| <Link id="m-handleunembed" /><code>{"private void HandleUnEmbed("}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> | Removes the embeddable's colliders from `collidersToAddTo`. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Fills in `health` and `entity` from parents when needed. |
| <Link id="m-unembedalloncrafted-2" /><code>{"private void UnEmbedAllOnCrafted("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, bool isLoad)"}</code> | Frees everything when the crafting part is crafted or decrafted, but not on load. |

</details>

## Used in

Members of other types that take, return or hold a `EmbeddableManager`:

[`Embeddable.TryGetStruckObject`](/game-api/types/global-e-h/embeddable#m-trygetstruckobject).
