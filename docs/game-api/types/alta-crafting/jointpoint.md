---
title: "JointPoint"
description: "abstract class JointPoint in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JointPoint

An **abstract class** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`JointInsert`](/game-api/types/alta-crafting/jointinsert), [`JointPointEvent`](/game-api/types/alta-crafting/jointpointevent), [`JointPointUnityEvent`](/game-api/types/alta-crafting/jointpointunityevent), [`JointSlot`](/game-api/types/alta-crafting/jointslot)
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected JointPoint()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-connected" /><code>{"private "}<Link to="/game-api/types/alta-crafting/jointpointevent">{"JointPointEvent"}</Link>{" connected"}</code> |  |
| <Link id="m-connectedobjects" /><code>{"private List<GameObject> connectedObjects"}</code> |  |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> |  |
| <Link id="m-disconnected" /><code>{"private "}<Link to="/game-api/types/alta-crafting/jointpointevent">{"JointPointEvent"}</Link>{" disconnected"}</code> |  |
| <Link id="m-disconnectedobjects" /><code>{"private List<GameObject> disconnectedObjects"}</code> |  |
| <Link id="m-glow" /><code>{"private Renderer glow"}</code> |  |
| <Link id="m-glowcolor" /><code>{"private static readonly int glowColor"}</code> |  |
| <Link id="m-glowproperties" /><code>{"private MaterialPropertyBlock glowProperties"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-craftingpart-2" /><code><Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" { get; }"}</code> |  |
| <Link id="m-generaltypes" /><code>{"abstract IEnumerable<"}<Link to="/game-api/types/alta-crafting/jointpointtype">{"JointPointType"}</Link>{"> GeneralTypes { get; }"}</code> |  |
| <Link id="m-glow-2" /><code>{"Transform Glow { get; }"}</code> |  |
| <Link id="m-isconnected" /><code>{"bool IsConnected { get; private set; }"}</code> |  |
| <Link id="m-isglowing" /><code>{"bool IsGlowing { get; set; }"}</code> |  |
| <Link id="m-ispreconfirmationconnected" /><code>{"bool IsPreConfirmationConnected { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-connected-2" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{"> Connected"}</code> |  |
| <Link id="m-disconnected-2" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{"> Disconnected"}</code> |  |
| <Link id="m-isavailable" /><code>{"event "}<Link to="/game-api/types/alta-crafting/isjointavailable">{"IsJointAvailable"}</Link>{" isAvailable"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isavailable-2" /><code>{"bool IsAvailable(bool isIgnoringPreConfirmation = false)"}</code> |  |
| <Link id="m-onjointconnected" /><code>{"virtual void OnJointConnected(bool isPlayingEffects)"}</code> |  |
| <Link id="m-onjointdisconnected" /><code>{"virtual void OnJointDisconnected(bool isPlayingEffects)"}</code> |  |
| <Link id="m-onpreconfirmationconnected" /><code>{"void OnPreConfirmationConnected()"}</code> |  |
| <Link id="m-onpreconfirmationdisconnected" /><code>{"void OnPreConfirmationDisconnected()"}</code> |  |
| <Link id="m-setglowcolor" /><code>{"void SetGlowColor(Color color)"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"protected virtual void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |  |
| <Link id="m-setobjectsactive" /><code>{"private void SetObjectsActive(bool isConnected)"}</code> |  |

## Used in

Members of other types that take, return or hold a `JointPoint`:

[`AddonCraftingPart.Add`](/game-api/types/global-a-b/addoncraftingpart#m-add), [`AddonCraftingPart.Remove`](/game-api/types/global-a-b/addoncraftingpart#m-remove), [`ConnectEvent.BeginInvoke`](/game-api/types/alta-crafting/connectevent#m-begininvoke), [`ConnectEvent.Invoke`](/game-api/types/alta-crafting/connectevent#m-invoke), [`ImpactModifier.DeregisterSlot`](/game-api/types/alta-items/impactmodifier#m-deregisterslot), [`ImpactModifier.maps`](/game-api/types/alta-items/impactmodifier#m-maps), [`ImpactModifier.RegisterSlot`](/game-api/types/alta-items/impactmodifier#m-registerslot).
