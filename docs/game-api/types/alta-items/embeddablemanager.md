---
title: "EmbeddableManager"
description: "class EmbeddableManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmbeddableManager

A **class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EmbeddableManager()"}</code> |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-allembedded" /><code>{"private List<"}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> allEmbedded"}</code> |
| <Link id="m-allowrigidbodiesnotlisted" /><code>{"private bool allowRigidbodiesNotListed"}</code> |
| <Link id="m-btnunembedall" /><code>{"private bool btnUnEmbedAll"}</code> |
| <Link id="m-colliderstoaddto" /><code>{"private "}<Link to="/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" collidersToAddTo"}</code> |
| <Link id="m-embeddablerigidbodies" /><code>{"private Rigidbody[] embeddableRigidbodies"}</code> |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |
| <Link id="m-health" /><code>{"private "}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" health"}</code> |
| <Link id="m-islimitingembedamount" /><code>{"private bool isLimitingEmbedAmount"}</code> |
| <Link id="m-isunembeddingallondeath" /><code>{"private bool isUnEmbeddingAllOnDeath"}</code> |
| <Link id="m-isunembeddingallondestroy" /><code>{"private bool isUnEmbeddingAllOnDestroy"}</code> |
| <Link id="m-isunembeddingondock" /><code>{"private bool isUnembeddingOnDock"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-maxembedded" /><code>{"private int maxEmbedded"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-unembedalloncrafted" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" unEmbedAllOnCrafted"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-allembedded-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> AllEmbedded { get; }"}</code> |
| <Link id="m-allowrigidbodiesnotlisted-2" /><code>{"bool AllowRigidbodiesNotListed { get; }"}</code> |
| <Link id="m-embeddablerigidbodies-2" /><code>{"Rigidbody[] EmbeddableRigidbodies { get; }"}</code> |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-embeddableadded" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/embeddablemanager">{"EmbeddableManager"}</Link>{", "}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> EmbeddableAdded"}</code> |
| <Link id="m-embeddableremoved" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/embeddablemanager">{"EmbeddableManager"}</Link>{", "}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{"> EmbeddableRemoved"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-deregisterembeddable" /><code>{"void DeregisterEmbeddable("}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> |
| <Link id="m-registerembeddable" /><code>{"void RegisterEmbeddable("}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> |
| <Link id="m-unembedall" /><code>{"void UnEmbedAll()"}</code> |

<details>
<summary>9 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-handledeath" /><code>{"private void HandleDeath("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" obj)"}</code> |
| <Link id="m-handledock" /><code>{"private void HandleDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> |
| <Link id="m-handleembed" /><code>{"private void HandleEmbed("}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> |
| <Link id="m-handleembeddableunembed" /><code>{"private void HandleEmbeddableUnEmbed("}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> |
| <Link id="m-handleentitydestroy" /><code>{"private void HandleEntityDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-handleunembed" /><code>{"private void HandleUnEmbed("}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable)"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-unembedalloncrafted-2" /><code>{"private void UnEmbedAllOnCrafted("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part, bool isLoad)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `EmbeddableManager`:

[`Embeddable.TryGetStruckObject`](/game-api/types/global-e-h/embeddable#m-trygetstruckobject).
