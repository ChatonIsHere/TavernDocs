---
title: "JointPoint"
description: "Base for the two ends of a crafting join: JointSlot (receives) and the insert (goes in)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JointPoint

An **abstract class** in `Root.Township`, `Alta.Crafting`.

Base for the two ends of a crafting join: `JointSlot` (receives) and the insert (goes in). It tracks whether it is connected, shows a glow, and switches objects on or off when joined.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`JointInsert`](/mod/game-api/types/alta-crafting/jointinsert), [`JointPointEvent`](/mod/game-api/types/alta-crafting/jointpointevent), [`JointPointUnityEvent`](/mod/game-api/types/alta-crafting/jointpointunityevent), [`JointSlot`](/mod/game-api/types/alta-crafting/jointslot)
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected JointPoint()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connected" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/jointpointevent">{"JointPointEvent"}</Link>{" connected"}</code> | Event behind `Connected`, invoked by `OnJointConnected`. |
| <Link id="m-connectedobjects" /><code>{"private List<GameObject> connectedObjects"}</code> | Objects shown only while the joint is connected. |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> | Backing field for `CraftingPart`, found in the parents on first use. |
| <Link id="m-disconnected" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/jointpointevent">{"JointPointEvent"}</Link>{" disconnected"}</code> | Event behind `Disconnected`, invoked by `OnJointDisconnected`. |
| <Link id="m-disconnectedobjects" /><code>{"private List<GameObject> disconnectedObjects"}</code> | Objects shown only while the joint is disconnected. |
| <Link id="m-glow" /><code>{"private Renderer glow"}</code> | Renderer that glows to show the joint. `OnValidate` finds a child named Glow if unset. |
| <Link id="m-glowcolor" /><code>{"private static readonly int glowColor"}</code> | Shader property ID for the glow colour (`_EmisColor`). |
| <Link id="m-glowproperties" /><code>{"private MaterialPropertyBlock glowProperties"}</code> | Material property block used to set the glow colour. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-craftingpart-2" /><code><Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" { get; }"}</code> | The crafting part this joint belongs to, found in parents. |
| <Link id="m-generaltypes" /><code>{"abstract IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/jointpointtype">{"JointPointType"}</Link>{"> GeneralTypes { get; }"}</code> | The joint's types, used to match slots and inserts. |
| <Link id="m-glow-2" /><code>{"Transform Glow { get; }"}</code> | Transform of the glow renderer. |
| <Link id="m-isconnected" /><code>{"bool IsConnected { get; private set; }"}</code> | True while joined. |
| <Link id="m-isglowing" /><code>{"bool IsGlowing { get; set; }"}</code> | Shows or hides the glow. Always false on a headless server. |
| <Link id="m-ispreconfirmationconnected" /><code>{"bool IsPreConfirmationConnected { get; private set; }"}</code> | True while a join is waiting for confirmation (such as nailing). |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-connected-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{"> Connected"}</code> | Raised when the joint connects. |
| <Link id="m-disconnected-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{"> Disconnected"}</code> | Raised when the joint disconnects. |
| <Link id="m-isavailable" /><code>{"event "}<Link to="/mod/game-api/types/alta-crafting/isjointavailable">{"IsJointAvailable"}</Link>{" isAvailable"}</code> | Lets other code veto `IsAvailable`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isavailable-2" /><code>{"bool IsAvailable(bool isIgnoringPreConfirmation = false)"}</code> | True if not connected, active, not held for a pending confirmation, and no `isAvailable` handler says no. |
| <Link id="m-onjointconnected" /><code>{"virtual void OnJointConnected(bool isPlayingEffects)"}</code> | Marks connected, swaps the connected and disconnected objects and raises `Connected`. |
| <Link id="m-onjointdisconnected" /><code>{"virtual void OnJointDisconnected(bool isPlayingEffects)"}</code> | Marks disconnected, swaps the objects back and raises `Disconnected`. |
| <Link id="m-onpreconfirmationconnected" /><code>{"void OnPreConfirmationConnected()"}</code> | Marks the joint as held by a pending join. |
| <Link id="m-onpreconfirmationdisconnected" /><code>{"void OnPreConfirmationDisconnected()"}</code> | Clears the pending join mark. |
| <Link id="m-setglowcolor" /><code>{"void SetGlowColor(Color color)"}</code> | Sets the glow colour. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Hides the glow. |
| <Link id="m-ondrawgizmosselected" /><code>{"protected virtual void OnDrawGizmosSelected()"}</code> | Draws the joint's axes in the editor. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Finds a child named "Glow" as the glow renderer if none is set. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setobjectsactive" /><code>{"private void SetObjectsActive(bool isConnected)"}</code> | Shows `connectedObjects` and hides `disconnectedObjects` when connected, and the other way round. |

</details>

## Used in

Members of other types that take, return or hold a `JointPoint`:

[`AddonCraftingPart.Add`](/mod/game-api/types/global-a-b/addoncraftingpart#m-add), [`AddonCraftingPart.Remove`](/mod/game-api/types/global-a-b/addoncraftingpart#m-remove), [`ConnectEvent.BeginInvoke`](/mod/game-api/types/alta-crafting/connectevent#m-begininvoke), [`ConnectEvent.Invoke`](/mod/game-api/types/alta-crafting/connectevent#m-invoke), [`ImpactModifier.DeregisterSlot`](/mod/game-api/types/alta-items/impactmodifier#m-deregisterslot), [`ImpactModifier.maps`](/mod/game-api/types/alta-items/impactmodifier#m-maps), [`ImpactModifier.RegisterSlot`](/mod/game-api/types/alta-items/impactmodifier#m-registerslot).
