---
title: "RequirementAttribute"
description: "Base attribute for a condition a console command (method or whole module class) needs before it can run."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RequirementAttribute

An **abstract class** in `Root.Township`, `Alta.Console`.

Base attribute for a condition a console command (method or whole module class) needs before it can run. Subclasses override `Check`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Inherits or implements** `Attribute`
- **Derived types** [`ClientOnlyAttribute`](/mod/game-api/types/alta-console/clientonlyattribute), [`DevOnlyAttribute`](/mod/game-api/types/alta-console/devonlyattribute), [`EditorOnlyAttribute`](/mod/game-api/types/alta-console/editoronlyattribute), [`GroupPermissionAttribute`](/mod/game-api/types/alta-console/grouppermissionattribute), [`LoggedInOnlyAttribute`](/mod/game-api/types/alta-console/loggedinonlyattribute), [`NonSimpleServerAttribute`](/mod/game-api/types/alta-console/nonsimpleserverattribute), [`NotAllowedInRemoteAttribute`](/mod/game-api/types/alta-console/notallowedinremoteattribute), [`PlayOnlyAttribute`](/mod/game-api/types/alta-console/playonlyattribute), [`ServerOnlyAttribute`](/mod/game-api/types/alta-console/serveronlyattribute), [`WithGroupPermissionsOnlyAttribute`](/mod/game-api/types/alta-console/withgrouppermissionsonlyattribute), [`WithPermissionOnlyAttribute`](/mod/game-api/types/alta-console/withpermissiononlyattribute)
- **Attributes** `Usage`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected RequirementAttribute()"}</code> | <span className="api-desc">Creates a `RequirementAttribute` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"virtual bool Check()"}</code> | <span className="api-desc">Returns whether the requirement is met. The default is always true; the context overload just calls the plain one unless overridden.</span> |
| <Link id="m-check-2" /><code>{"virtual bool Check("}<Link to="/mod/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> | <span className="api-desc">Returns whether the requirement is met. The default is always true; the context overload just calls the plain one unless overridden.</span> |

## Used in

Members of other types that take, return or hold a `RequirementAttribute`:

<div className="api-used-in">

[`CommandPart.Requirements`](/mod/game-api/types/alta-console/commandpart#m-requirements).

</div>
