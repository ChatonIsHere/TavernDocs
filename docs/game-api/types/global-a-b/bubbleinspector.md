---
title: "BubbleInspector"
description: "Builds the in-game inspector's floating bubbles for a prefab: finds components with BubbleInspectorField or BubbleInspectorMethod members and spawns an..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BubbleInspector

A **class** in `Root.Township`, no namespace.

Builds the in-game inspector's floating bubbles for a prefab: finds components with `BubbleInspectorField` or `BubbleInspectorMethod` members and spawns an inspector for each in an arc above it. Called from `InGameInspector`.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BubbleInspector()"}</code> | Creates a `BubbleInspector` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inspectors" /><code>{"private static Dictionary<Type, "}<Link to="/game-api/types/global-c-d/componentinspector">{"ComponentInspector"}</Link>{"> inspectors"}</code> | Cache per component type of its inspector description, or null when it has nothing marked. |
| <Link id="m-lastspawned" /><code>{"private static List<"}<Link to="/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{"> lastSpawned"}</code> | Bubbles from the last `Evaluate`, cleaned up on the next one. |
| <Link id="m-tospawn" /><code>{"private static Dictionary<Component, "}<Link to="/game-api/types/global-c-d/componentinspector">{"ComponentInspector"}</Link>{"> toSpawn"}</code> | Components queued for a bubble during an `Evaluate`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateanglespread" /><code>{"static void CalculateAngleSpread(int count, out float step, out float angle)"}</code> | Works out the angle step and start for spreading a number of bubbles over 90 degrees (180 when more than three). |
| <Link id="m-calculateaxis" /><code>{"static Vector3 CalculateAxis(Transform baseTransform)"}</code> | Flat direction from the local player's head to the object, the axis the bubbles fan around. |
| <Link id="m-evaluate" /><code>{"static void Evaluate("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Cleans up the last bubbles, then spawns a new inspector for each marked component of the prefab, spread above its bounds. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatecomponent" /><code>{"private static void EvaluateComponent(MonoBehaviour component)"}</code> | Finds a component's marked methods, fields and properties by reflection (cached per type) and queues it if it has any. |
| <Link id="m-recursiveevaluate" /><code>{"private static void RecursiveEvaluate(GameObject evaluate)"}</code> | Runs `EvaluateComponent` on every `MonoBehaviour` in the object and its children. |

</details>
