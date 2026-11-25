---
title: "BubbleInspector"
description: "class BubbleInspector in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BubbleInspector

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BubbleInspector()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-inspectors" /><code>{"private static Dictionary<Type, "}<Link to="/game-api/types/global-c-d/componentinspector">{"ComponentInspector"}</Link>{"> inspectors"}</code> |
| <Link id="m-lastspawned" /><code>{"private static List<"}<Link to="/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{"> lastSpawned"}</code> |
| <Link id="m-tospawn" /><code>{"private static Dictionary<Component, "}<Link to="/game-api/types/global-c-d/componentinspector">{"ComponentInspector"}</Link>{"> toSpawn"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-calculateanglespread" /><code>{"static void CalculateAngleSpread(int count, out float step, out float angle)"}</code> |
| <Link id="m-calculateaxis" /><code>{"static Vector3 CalculateAxis(Transform baseTransform)"}</code> |
| <Link id="m-evaluate" /><code>{"static void Evaluate("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-evaluatecomponent" /><code>{"private static void EvaluateComponent(MonoBehaviour component)"}</code> |
| <Link id="m-recursiveevaluate" /><code>{"private static void RecursiveEvaluate(GameObject evaluate)"}</code> |

</details>
