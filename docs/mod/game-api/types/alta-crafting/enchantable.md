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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<EnchantableData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<EnchantableData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`EnchantableData`](/mod/game-api/types/alta-crafting/enchantabledata)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Enchantable()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-effectapplication" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/ienchantmenteffectapplication">{"IEnchantmentEffectApplication"}</Link>{" effectApplication"}</code> | Private: the effect whose message is being sent or received. |
| <Link id="m-enchantments" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-crafting/enchantment">{"Enchantment"}</Link>{", "}<Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{"> enchantments"}</code> | Private: the active enchantments and their applications. |
| <Link id="m-initial" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/enchantment">{"Enchantment"}</Link>{"[] initial"}</code> | Enchantments added when the server spawns the item. Also filled with the current ones when saving. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Backing field for `Pickup`. |
| <Link id="m-sendingeffectindex" /><code>{"private int sendingEffectIndex"}</code> | Private: index of the effect in the message, or -1. |
| <Link id="m-sendingenchantment" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/enchantment">{"Enchantment"}</Link>{" sendingEnchantment"}</code> | Private: the enchantment the message is for. |
| <Link id="m-sendingtriggerindex" /><code>{"private int sendingTriggerIndex"}</code> | Private: index of the trigger in the message, or -1. |
| <Link id="m-syncmessage" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncMessage"}</code> | Private: message used by `SendTriggerMessage` and `SendEffectMessage`. |
| <Link id="m-triggerapplication" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/ienchantmenttriggerapplication">{"IEnchantmentTriggerApplication"}</Link>{" triggerApplication"}</code> | Private: the trigger whose message is being sent or received. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The item's pickup. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code><Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" Add("}<Link to="/mod/game-api/types/alta-crafting/enchantment">{"Enchantment"}</Link>{" enchantment)"}</code> | Adds an enchantment and returns its application, or null if the item already has it. |
| <Link id="m-get" /><code><Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" Get("}<Link to="/mod/game-api/types/alta-crafting/enchantment">{"Enchantment"}</Link>{" enchantment)"}</code> | Returns the application of an enchantment on this item, or null. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the enchantment list and the sync message. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: adds the initial enchantments. |
| <Link id="m-sendeffectmessage" /><code>{"void SendEffectMessage("}<Link to="/mod/game-api/types/alta-crafting/ienchantmenteffectapplication">{"IEnchantmentEffectApplication"}</Link>{" effectApplication)"}</code> | Sends one effect application's message to players in the chunk. |
| <Link id="m-sendtriggermessage" /><code>{"void SendTriggerMessage("}<Link to="/mod/game-api/types/alta-crafting/ienchantmenttriggerapplication">{"IEnchantmentTriggerApplication"}</Link>{" triggerApplication)"}</code> | Sends one trigger application's message to players in the chunk. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enchantmentremoved" /><code>{"private void EnchantmentRemoved("}<Link to="/mod/game-api/types/alta-crafting/enchantmentapplication">{"EnchantmentApplication"}</Link>{" application)"}</code> | Private: drops an enchantment from the list when its application is removed. |
| <Link id="m-synceffect" /><code>{"private void SyncEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Private: sends or receives one enchantment trigger or effect message, by enchantment and index, and passes the stream to it. |

</details>

## Used in

Members of other types that take, return or hold a `Enchantable`:

[`EnchantmentApplication.Enchantable`](/mod/game-api/types/alta-crafting/enchantmentapplication#m-enchantable), [`EnchantmentApplication.EnchantmentApplication`](/mod/game-api/types/alta-crafting/enchantmentapplication#m-ctor).
