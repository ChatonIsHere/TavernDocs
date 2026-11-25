---
title: "Enchantable"
description: "Component on an item that holds its enchantments and syncs their trigger and effect messages to clients."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Enchantable

A **class** in `Root.Township`, `Alta.Enchantments`.

Component on an item that holds its enchantments and syncs their trigger and effect messages to clients. The server adds the prefab's initial enchantments; loading ignores the saved list.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<EnchantableData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<EnchantableData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`EnchantableData`](/game-api/types/alta-crafting/enchantabledata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Enchantable()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-effectapplication" /><code>{"private "}<Link to="/game-api/types/alta-crafting/ienchantmenteffectapplication">{"IEnchantmentEffectApplication"}</Link>{" effectApplication"}</code> |  |
| <Link id="m-enchantments" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-crafting/enchantment">{"Enchantment"}</Link>{", "}<Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{"> enchantments"}</code> |  |
| <Link id="m-initial" /><code>{"private "}<Link to="/game-api/types/alta-crafting/enchantment">{"Enchantment"}</Link>{"[] initial"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-sendingeffectindex" /><code>{"private int sendingEffectIndex"}</code> |  |
| <Link id="m-sendingenchantment" /><code>{"private "}<Link to="/game-api/types/alta-crafting/enchantment">{"Enchantment"}</Link>{" sendingEnchantment"}</code> |  |
| <Link id="m-sendingtriggerindex" /><code>{"private int sendingTriggerIndex"}</code> |  |
| <Link id="m-syncmessage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncMessage"}</code> |  |
| <Link id="m-triggerapplication" /><code>{"private "}<Link to="/game-api/types/alta-crafting/ienchantmenttriggerapplication">{"IEnchantmentTriggerApplication"}</Link>{" triggerApplication"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The item's pickup. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code><Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" Add("}<Link to="/game-api/types/alta-crafting/enchantment">{"Enchantment"}</Link>{" enchantment)"}</code> | Adds an enchantment and returns its application, or null if the item already has it. |
| <Link id="m-get" /><code><Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" Get("}<Link to="/game-api/types/alta-crafting/enchantment">{"Enchantment"}</Link>{" enchantment)"}</code> | Returns the application of an enchantment on this item, or null. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the enchantment list and the sync message. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: adds the initial enchantments. |
| <Link id="m-sendeffectmessage" /><code>{"void SendEffectMessage("}<Link to="/game-api/types/alta-crafting/ienchantmenteffectapplication">{"IEnchantmentEffectApplication"}</Link>{" effectApplication)"}</code> | Sends one effect application's message to players in the chunk. |
| <Link id="m-sendtriggermessage" /><code>{"void SendTriggerMessage("}<Link to="/game-api/types/alta-crafting/ienchantmenttriggerapplication">{"IEnchantmentTriggerApplication"}</Link>{" triggerApplication)"}</code> | Sends one trigger application's message to players in the chunk. |
| <Link id="m-enchantmentremoved" /><code>{"private void EnchantmentRemoved("}<Link to="/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" application)"}</code> |  |
| <Link id="m-synceffect" /><code>{"private void SyncEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Enchantable`:

[`EnchantmentApplication.Enchantable`](/game-api/types/alta-crafting/enchantmentapplication#m-enchantable), [`EnchantmentApplication.EnchantmentApplication`](/game-api/types/alta-crafting/enchantmentapplication#m-ctor).
