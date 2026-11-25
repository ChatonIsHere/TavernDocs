---
title: "RequirementAttribute"
description: "abstract class RequirementAttribute in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RequirementAttribute

An **abstract class** in `Root.Township`, `Alta.Console`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Inherits or implements** `Attribute`
- **Derived types** [`ClientOnlyAttribute`](/game-api/types/alta-console/clientonlyattribute), [`DevOnlyAttribute`](/game-api/types/alta-console/devonlyattribute), [`EditorOnlyAttribute`](/game-api/types/alta-console/editoronlyattribute), [`GroupPermissionAttribute`](/game-api/types/alta-console/grouppermissionattribute), [`LoggedInOnlyAttribute`](/game-api/types/alta-console/loggedinonlyattribute), [`NonSimpleServerAttribute`](/game-api/types/alta-console/nonsimpleserverattribute), [`NotAllowedInRemoteAttribute`](/game-api/types/alta-console/notallowedinremoteattribute), [`PlayOnlyAttribute`](/game-api/types/alta-console/playonlyattribute), [`ServerOnlyAttribute`](/game-api/types/alta-console/serveronlyattribute), [`WithGroupPermissionsOnlyAttribute`](/game-api/types/alta-console/withgrouppermissionsonlyattribute), [`WithPermissionOnlyAttribute`](/game-api/types/alta-console/withpermissiononlyattribute)
- **Attributes** `Usage`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected RequirementAttribute()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"virtual bool Check()"}</code> |  |
| <Link id="m-check-2" /><code>{"virtual bool Check("}<Link to="/game-api/types/alta-console/commandcontext">{"CommandContext"}</Link>{" context)"}</code> |  |

## Used in

Members of other types that take, return or hold a `RequirementAttribute`:

[`CommandPart.Requirements`](/game-api/types/alta-console/commandpart#m-requirements).
