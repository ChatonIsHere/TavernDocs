---
title: "ServerFeatureSetProvider"
description: "Works out this build's feature set (PC or mobile) and checks whether a server's target feature set matches it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerFeatureSetProvider

A **static class** in `Root.Township`, `ATT.TownshipServer`.

Works out this build's feature set (PC or mobile) and checks whether a server's target feature set matches it.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oldservervalue" /><code>{"private const int OldServerValue"}</code> | <span className="api-desc">The value old servers send, treated as PC.</span> |
| <Link id="m-servertype" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/featuresetflags">{"FeatureSetFlags"}</Link>{"? serverType"}</code> | <span className="api-desc">Backing field for `FeatureSet`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-featureset" /><code>{"static "}<Link to="/mod/game-api/types/game-other-namespaces/featuresetflags">{"FeatureSetFlags"}</Link>{" FeatureSet { get; }"}</code> | <span className="api-desc">This build's feature set flags, worked out once and cached.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-geteditorservertype" /><code>{"static "}<Link to="/mod/game-api/types/game-other-namespaces/featuresetflags">{"FeatureSetFlags"}</Link>{" GetEditorServerType()"}</code> | <span className="api-desc">Throws in this build.</span> |
| <Link id="m-isservervalid" /><code>{"static bool IsServerValid(int targetAsInt)"}</code> | <span className="api-desc">True if the server's feature set overlaps this build's. A value of 0 (old servers) counts as PC.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getservertype" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/featuresetflags">{"FeatureSetFlags"}</Link>{" GetServerType()"}</code> | <span className="api-desc">Mobile on Android, PC on Windows and Linux players. Throws on other platforms and in the editor.</span> |

</details>
