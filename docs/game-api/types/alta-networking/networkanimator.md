---
title: "NetworkAnimator"
description: "Syncs chosen Animator parameters (floats, ints, bools, triggers, layer weights) from the server to clients as streamed state, and sends the current..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkAnimator

A **class** in `Root.Township`, `Alta.Networking.Animation`.

Syncs chosen Animator parameters (floats, ints, bools, triggers, layer weights) from the server to clients as streamed state, and sends the current animation states to joining players. Set values through the `Get` methods' objects on the server.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`FloatParameterType`](/game-api/types/alta-networking/networkanimator-floatparametertype)
- **Attributes** `ProfileNetworkSerialized`, `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkAnimator()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Shared profiling timer. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Shared profiling timer. |

<details>
<summary>18 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-boolmap" /><code>{"private Dictionary<string, "}<Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{"> boolMap"}</code> |
| <Link id="m-bools" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{"> bools"}</code> |
| <Link id="m-floatlerpmap" /><code>{"private Dictionary<string, "}<Link to="/game-api/types/alta-networking/animatedfloatlerp">{"AnimatedFloatLerp"}</Link>{"> floatLerpMap"}</code> |
| <Link id="m-floatmap" /><code>{"private Dictionary<string, "}<Link to="/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{"> floatMap"}</code> |
| <Link id="m-floats" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{"> floats"}</code> |
| <Link id="m-floatslerp" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/animatedfloatlerp">{"AnimatedFloatLerp"}</Link>{"> floatsLerp"}</code> |
| <Link id="m-intmap" /><code>{"private Dictionary<string, "}<Link to="/game-api/types/alta-networking/animatedint">{"AnimatedInt"}</Link>{"> intMap"}</code> |
| <Link id="m-ints" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/animatedint">{"AnimatedInt"}</Link>{"> ints"}</code> |
| <Link id="m-isawake" /><code>{"private bool isAwake"}</code> |
| <Link id="m-layerlerpmap" /><code>{"private Dictionary<string, "}<Link to="/game-api/types/alta-networking/animatedlayerweightlerp">{"AnimatedLayerWeightLerp"}</Link>{"> layerLerpMap"}</code> |
| <Link id="m-layermap" /><code>{"private Dictionary<string, "}<Link to="/game-api/types/alta-networking/animatedlayerweight">{"AnimatedLayerWeight"}</Link>{"> layerMap"}</code> |
| <Link id="m-layers" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/animatedlayerweight">{"AnimatedLayerWeight"}</Link>{"> layers"}</code> |
| <Link id="m-layerslerp" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/animatedlayerweightlerp">{"AnimatedLayerWeightLerp"}</Link>{"> layersLerp"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-syncstart" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStart"}</code> |
| <Link id="m-triggermap" /><code>{"private Dictionary<string, "}<Link to="/game-api/types/alta-networking/animatedtrigger">{"AnimatedTrigger"}</Link>{"> triggerMap"}</code> |
| <Link id="m-triggers" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/animatedtrigger">{"AnimatedTrigger"}</Link>{"> triggers"}</code> |
| <Link id="m-unityanimator" /><code>{"private Animator unityAnimator"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"Animator Animator { get; }"}</code> | The Unity Animator on this object. |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; private set; }"}</code> | True if any synced value changed and needs sending. |

<details>
<summary>3 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ensureawake" /><code>{"void EnsureAwake()"}</code> | Builds the parameter lookups, logging any listed parameter the animator does not have. Safe to call more than once. |
| <Link id="m-forcechanged" /><code>{"void ForceChanged()"}</code> | Marks the parameters as changed so they are sent. |
| <Link id="m-getbool" /><code><Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" GetBool(string name)"}</code> | The synced bool parameter with this name. Throws if not listed. |
| <Link id="m-getfloat" /><code><Link to="/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" GetFloat(string name)"}</code> | The synced float parameter with this name. Throws if not listed. |
| <Link id="m-getfloatlerp" /><code><Link to="/game-api/types/alta-networking/animatedfloatlerp">{"AnimatedFloatLerp"}</Link>{" GetFloatLerp(string name)"}</code> | The synced smoothed float parameter with this name. Throws if not listed. |
| <Link id="m-getint" /><code><Link to="/game-api/types/alta-networking/animatedint">{"AnimatedInt"}</Link>{" GetInt(string name)"}</code> | The synced int parameter with this name. Throws if not listed. |
| <Link id="m-getlayerweight" /><code><Link to="/game-api/types/alta-networking/animatedlayerweight">{"AnimatedLayerWeight"}</Link>{" GetLayerWeight(string name)"}</code> | The synced layer weight with this name. Throws if not listed. |
| <Link id="m-getlayerweightlerp" /><code><Link to="/game-api/types/alta-networking/animatedlayerweightlerp">{"AnimatedLayerWeightLerp"}</Link>{" GetLayerWeightLerp(string name)"}</code> | The synced smoothed layer weight with this name. Throws if not listed. |
| <Link id="m-gettrigger" /><code><Link to="/game-api/types/alta-networking/animatedtrigger">{"AnimatedTrigger"}</Link>{" GetTrigger(string name)"}</code> | The synced trigger with this name. Throws if not listed. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the message that sends current animation states. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends a joining player each layer's current state and time. |
| <Link id="m-updatechanged" /><code>{"void UpdateChanged()"}</code> | Recomputes `HasChanged` from the parameters. |

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-logmissingparameter" /><code>{"private void LogMissingParameter(string parameterType, string parameterName)"}</code> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> |
| <Link id="m-syncstart-2" /><code>{"private void SyncStart("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `NetworkAnimator`:

[`Agent.animator`](/game-api/types/alta-intelligence/agent#m-animator), [`Agent.NetworkAnimator`](/game-api/types/alta-intelligence/agent#m-networkanimator), [`AttackDirectionAnimationBoolSettings.BoolAnimation.Setup`](/game-api/types/alta-intelligence/attackdirectionanimationboolsettings-boolanimation#m-setup), [`AttackDirectionAnimationFloatSettings.FloatAnimation.Setup`](/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings-floatanimation#m-setup), [`AttackDirectionAnimationLayerLerpSettings.LayerAnimation.Setup`](/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings-layeranimation#m-setup), [`AttackDirectionAnimationSettings.GetNewAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationsettings#m-getnewanimation), [`EmptyAttackDirectionAnimation.Setup`](/game-api/types/alta-intelligence/emptyattackdirectionanimation#m-setup), [`IAgent.NetworkAnimator`](/game-api/types/alta-intelligence/iagent#m-networkanimator), [`IAttackDirectionAnimation.Setup`](/game-api/types/alta-intelligence/iattackdirectionanimation#m-setup), [`ConsumableLock.animator`](/game-api/types/alta-items/consumablelock#m-animator), [`AnimatedBool.Initialize`](/game-api/types/alta-networking/animatedbool#m-initialize), [`AnimatedBoolAccess.animator`](/game-api/types/alta-networking/animatedboolaccess#m-animator), [`AnimatedFloat.Initialize`](/game-api/types/alta-networking/animatedfloat#m-initialize), [`AnimatedInt.Initialize`](/game-api/types/alta-networking/animatedint#m-initialize), [`AnimatedLayerWeight.Initialize`](/game-api/types/alta-networking/animatedlayerweight#m-initialize), [`AnimatedValue<T>.animator`](/game-api/types/alta-networking/animatedvalue-t#m-animator), [`AnimatedValue<T>.Animator`](/game-api/types/alta-networking/animatedvalue-t#m-animator-2), [`AnimatedValue<T>.Initialize`](/game-api/types/alta-networking/animatedvalue-t#m-initialize), [`WalkerAnimator.animator`](/game-api/types/alta-intelligence/walkeranimator#m-animator), [`MediumBird.Animator`](/game-api/types/global-m-o/mediumbird#m-animator), [`RepairBox.boxAnimation`](/game-api/types/global-q-r/repairbox#m-boxanimation).
