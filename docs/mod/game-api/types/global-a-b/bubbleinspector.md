---
title: "BubbleInspector"
description: "Builds the in-game inspector's floating bubbles for a prefab: finds components with BubbleInspectorField or BubbleInspectorMethod members and spawns an..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BubbleInspector

A **class** in `Root.Township`, the global namespace.

Builds the in-game inspector's floating bubbles for a prefab: finds components with `BubbleInspectorField` or `BubbleInspectorMethod` members and spawns an inspector for each in an arc above it. Called from `InGameInspector`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BubbleInspector()"}</code> | <span className="api-desc">Creates a `BubbleInspector` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inspectors" /><code>{"private static Dictionary<Type, "}<Link to="/mod/game-api/types/global-c-d/componentinspector">{"ComponentInspector"}</Link>{"> inspectors"}</code> | <span className="api-desc">Cache per component type of its inspector description, or null when it has nothing marked.</span> |
| <Link id="m-lastspawned" /><code>{"private static List<"}<Link to="/mod/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{"> lastSpawned"}</code> | <span className="api-desc">Bubbles from the last `Evaluate`, cleaned up on the next one.</span> |
| <Link id="m-tospawn" /><code>{"private static Dictionary<Component, "}<Link to="/mod/game-api/types/global-c-d/componentinspector">{"ComponentInspector"}</Link>{"> toSpawn"}</code> | <span className="api-desc">Components queued for a bubble during an `Evaluate`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateanglespread" /><code>{"static void CalculateAngleSpread(int count, out float step, out float angle)"}</code> | <span className="api-desc">Works out the angle step and start for spreading a number of bubbles over 90 degrees (180 when more than three).</span> |
| <Link id="m-calculateaxis" /><code>{"static Vector3 CalculateAxis(Transform baseTransform)"}</code> | <span className="api-desc">Flat direction from the local player's head to the object, the axis the bubbles fan around.</span> |
| <Link id="m-evaluate" /><code>{"static void Evaluate("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | <span className="api-desc">Cleans up the last bubbles, then spawns a new inspector for each marked component of the prefab, spread above its bounds.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluatecomponent" /><code>{"private static void EvaluateComponent(MonoBehaviour component)"}</code> | <span className="api-desc">Finds a component's marked methods, fields and properties by reflection (cached per type) and queues it if it has any.</span> |
| <Link id="m-recursiveevaluate" /><code>{"private static void RecursiveEvaluate(GameObject evaluate)"}</code> | <span className="api-desc">Runs `EvaluateComponent` on every `MonoBehaviour` in the object and its children.</span> |

</details>
