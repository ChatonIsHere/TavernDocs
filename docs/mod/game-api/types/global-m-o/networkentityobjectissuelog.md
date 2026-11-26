---
title: "NetworkEntityObjectIssueLog"
description: "Editor-only assert helpers on ObjectIssueLog."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkEntityObjectIssueLog

A **static class** in `Root.Township`, the global namespace.

Editor-only assert helpers on `ObjectIssueLog`. Every method is marked `Conditional("UNITY_EDITOR")`, so calls are removed from game builds.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assertentity" /><code>{"static void AssertEntity("}<Link to="/mod/game-api/types/global-m-o/objectissuelog">{"ObjectIssueLog"}</Link>{" log, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" topic, bool condition, string message)"}</code> | <span className="api-desc">Throws if the condition is false.</span> |
| <Link id="m-assertexistsentity" /><code>{"static void AssertExistsEntity("}<Link to="/mod/game-api/types/global-m-o/objectissuelog">{"ObjectIssueLog"}</Link>{" log, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" topic, Object value, string message)"}</code> | <span className="api-desc">Throws if the object is null, or if any object in the list is null.</span> |
| <Link id="m-assertexistsentity-2" /><code>{"static void AssertExistsEntity("}<Link to="/mod/game-api/types/global-m-o/objectissuelog">{"ObjectIssueLog"}</Link>{" log, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" topic, IEnumerable<Object> value, string message)"}</code> | <span className="api-desc">Throws if the object is null, or if any object in the list is null.</span> |
| <Link id="m-assertexistsfind" /><code>{"static void AssertExistsFind("}<Link to="/mod/game-api/types/global-m-o/objectissuelog">{"ObjectIssueLog"}</Link>{" log, Component component, Object value, string message)"}</code> | <span className="api-desc">Throws if the object is null, or if any object in the list is null.</span> |
| <Link id="m-assertexistsfind-2" /><code>{"static void AssertExistsFind("}<Link to="/mod/game-api/types/global-m-o/objectissuelog">{"ObjectIssueLog"}</Link>{" log, Component component, IEnumerable<Object> value, string message)"}</code> | <span className="api-desc">Throws if the object is null, or if any object in the list is null.</span> |
| <Link id="m-assertfind" /><code>{"static void AssertFind("}<Link to="/mod/game-api/types/global-m-o/objectissuelog">{"ObjectIssueLog"}</Link>{" log, Component component, bool condition, string message)"}</code> | <span className="api-desc">Throws if the condition is false.</span> |
