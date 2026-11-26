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
| <Link id="m-ctor" /><code>{"protected JointPoint()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connected" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/jointpointevent">{"JointPointEvent"}</Link>{" connected"}</code> | <span className="api-desc">Event behind `Connected`, invoked by `OnJointConnected`.</span> |
| <Link id="m-connectedobjects" /><code>{"private List<GameObject> connectedObjects"}</code> | <span className="api-desc">Objects shown only while the joint is connected.</span> |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> | <span className="api-desc">Backing field for `CraftingPart`, found in the parents on first use.</span> |
| <Link id="m-disconnected" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/jointpointevent">{"JointPointEvent"}</Link>{" disconnected"}</code> | <span className="api-desc">Event behind `Disconnected`, invoked by `OnJointDisconnected`.</span> |
| <Link id="m-disconnectedobjects" /><code>{"private List<GameObject> disconnectedObjects"}</code> | <span className="api-desc">Objects shown only while the joint is disconnected.</span> |
| <Link id="m-glow" /><code>{"private Renderer glow"}</code> | <span className="api-desc">Renderer that glows to show the joint. `OnValidate` finds a child named Glow if unset.</span> |
| <Link id="m-glowcolor" /><code>{"private static readonly int glowColor"}</code> | <span className="api-desc">Shader property ID for the glow colour (`_EmisColor`).</span> |
| <Link id="m-glowproperties" /><code>{"private MaterialPropertyBlock glowProperties"}</code> | <span className="api-desc">Material property block used to set the glow colour.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-craftingpart-2" /><code><Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" { get; }"}</code> | <span className="api-desc">The crafting part this joint belongs to, found in parents.</span> |
| <Link id="m-generaltypes" /><code>{"abstract IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/jointpointtype">{"JointPointType"}</Link>{"> GeneralTypes { get; }"}</code> | <span className="api-desc">The joint's types, used to match slots and inserts.</span> |
| <Link id="m-glow-2" /><code>{"Transform Glow { get; }"}</code> | <span className="api-desc">Transform of the glow renderer.</span> |
| <Link id="m-isconnected" /><code>{"bool IsConnected { get; private set; }"}</code> | <span className="api-desc">True while joined.</span> |
| <Link id="m-isglowing" /><code>{"bool IsGlowing { get; set; }"}</code> | <span className="api-desc">Shows or hides the glow. Always false on a headless server.</span> |
| <Link id="m-ispreconfirmationconnected" /><code>{"bool IsPreConfirmationConnected { get; private set; }"}</code> | <span className="api-desc">True while a join is waiting for confirmation (such as nailing).</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-connected-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{"> Connected"}</code> | <span className="api-desc">Raised when the joint connects.</span> |
| <Link id="m-disconnected-2" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{"> Disconnected"}</code> | <span className="api-desc">Raised when the joint disconnects.</span> |
| <Link id="m-isavailable" /><code>{"event "}<Link to="/mod/game-api/types/alta-crafting/isjointavailable">{"IsJointAvailable"}</Link>{" isAvailable"}</code> | <span className="api-desc">Lets other code veto `IsAvailable`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isavailable-2" /><code>{"bool IsAvailable(bool isIgnoringPreConfirmation = false)"}</code> | <span className="api-desc">True if not connected, active, not held for a pending confirmation, and no `isAvailable` handler says no.</span> |
| <Link id="m-onjointconnected" /><code>{"virtual void OnJointConnected(bool isPlayingEffects)"}</code> | <span className="api-desc">Marks connected, swaps the connected and disconnected objects and raises `Connected`.</span> |
| <Link id="m-onjointdisconnected" /><code>{"virtual void OnJointDisconnected(bool isPlayingEffects)"}</code> | <span className="api-desc">Marks disconnected, swaps the objects back and raises `Disconnected`.</span> |
| <Link id="m-onpreconfirmationconnected" /><code>{"void OnPreConfirmationConnected()"}</code> | <span className="api-desc">Marks the joint as held by a pending join.</span> |
| <Link id="m-onpreconfirmationdisconnected" /><code>{"void OnPreConfirmationDisconnected()"}</code> | <span className="api-desc">Clears the pending join mark.</span> |
| <Link id="m-setglowcolor" /><code>{"void SetGlowColor(Color color)"}</code> | <span className="api-desc">Sets the glow colour.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Hides the glow.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"protected virtual void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the joint's axes in the editor.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Finds a child named "Glow" as the glow renderer if none is set.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setobjectsactive" /><code>{"private void SetObjectsActive(bool isConnected)"}</code> | <span className="api-desc">Shows `connectedObjects` and hides `disconnectedObjects` when connected, and the other way round.</span> |

</details>

## Used in

Members of other types that take, return or hold a `JointPoint`:

<div className="api-used-in">

[`AddonCraftingPart.Add`](/mod/game-api/types/global-a-b/addoncraftingpart#m-add), [`AddonCraftingPart.Remove`](/mod/game-api/types/global-a-b/addoncraftingpart#m-remove), [`ConnectEvent.BeginInvoke`](/mod/game-api/types/alta-crafting/connectevent#m-begininvoke), [`ConnectEvent.Invoke`](/mod/game-api/types/alta-crafting/connectevent#m-invoke), [`ImpactModifier.DeregisterSlot`](/mod/game-api/types/alta-items/impactmodifier#m-deregisterslot), [`ImpactModifier.maps`](/mod/game-api/types/alta-items/impactmodifier#m-maps), [`ImpactModifier.RegisterSlot`](/mod/game-api/types/alta-items/impactmodifier#m-registerslot).

</div>
