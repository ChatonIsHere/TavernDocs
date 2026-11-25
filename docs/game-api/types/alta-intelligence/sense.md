---
title: "Sense"
description: "Asset for something an AI agent can measure about a target (distance, visibility and so on) as a number."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Sense

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Asset for something an AI agent can measure about a target (distance, visibility and so on) as a number. Sense assets are loaded from `Resources/Senses`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Derived types** [`BasicSense`](/game-api/types/alta-intelligence/basicsense), [`DistanceSense`](/game-api/types/alta-intelligence/distancesense), [`DistanceSquaredSense`](/game-api/types/alta-intelligence/distancesquaredsense), [`Facing2DSense`](/game-api/types/alta-intelligence/facing2dsense), [`Facing3DSense`](/game-api/types/alta-intelligence/facing3dsense), [`HurtSense`](/game-api/types/alta-intelligence/hurtsense), [`VelocitySense`](/game-api/types/alta-intelligence/velocitysense), [`ViewConeSense`](/game-api/types/alta-intelligence/viewconesense)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected Sense()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-all" /><code>{"private static List<"}<Link to="/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{"> all"}</code> |
| <Link id="m-oldequivalent" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{" oldEquivalent"}</code> |
| <Link id="m-oldmapping" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{"> oldMapping"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-all-2" /><code>{"static List<"}<Link to="/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{"> All { get; }"}</code> | Every sense that has been initialized. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"abstract float Get("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | The sense's value for a target, from the asking agent's point of view. |
| <Link id="m-getinverselerp" /><code>{"virtual float GetInverseLerp("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target, float from, float to)"}</code> | The value mapped to 0 to 1 between `from` and `to`, clamped. |
| <Link id="m-getsense" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{" GetSense("}<Link to="/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{" old)"}</code> | The sense that replaces an old `SenseOld` enum value, or null. |
| <Link id="m-initialize" /><code>{"virtual void Initialize()"}</code> | Adds the sense to `All` and maps its old enum value. |
| <Link id="m-initializeall" /><code>{"static void InitializeAll()"}</code> | Loads every sense under `Resources/Senses` and initializes them. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Sense`:

[`CreateTargetOperation.Sense`](/game-api/types/alta-intelligence/createtargetoperation#m-sense-2), [`InverseLerpSenseSelf.InverseLerpSenseSelf`](/game-api/types/alta-intelligence/inverselerpsenseself#m-ctor), [`InverseLerpSenseSelf.sense`](/game-api/types/alta-intelligence/inverselerpsenseself#m-sense), [`InverseLerpSenseTarget.InverseLerpSenseTarget`](/game-api/types/alta-intelligence/inverselerpsensetarget#m-ctor), [`InverseLerpSenseTarget.sense`](/game-api/types/alta-intelligence/inverselerpsensetarget#m-sense), [`SenseOperation.Migrate`](/game-api/types/alta-intelligence/senseoperation#m-migrate), [`SenseOperation.sense`](/game-api/types/alta-intelligence/senseoperation#m-sense).
