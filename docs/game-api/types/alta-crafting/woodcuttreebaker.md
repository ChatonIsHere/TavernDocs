---
title: "WoodcutTreeBaker"
description: "class WoodcutTreeBaker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeBaker

A **class** in `Root.Township`, `Alta.Woodcutting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeBaker()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-attachmentdefinitions" /><code>{"private "}<Link to="/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{"[] attachmentDefinitions"}</code> |  |
| <Link id="m-attachmentlodfilters" /><code>{"private MeshFilter[] attachmentLodFilters"}</code> |  |
| <Link id="m-attachmentlodrenderers" /><code>{"private MeshRenderer[] attachmentLodRenderers"}</code> |  |
| <Link id="m-attachmentlods" /><code>{"private Mesh[] attachmentLods"}</code> |  |
| <Link id="m-attachments" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{"> attachments"}</code> |  |
| <Link id="m-damaged" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{"> damaged"}</code> |  |
| <Link id="m-damagedlod" /><code>{"private Mesh[] damagedLod"}</code> |  |
| <Link id="m-damagedlodfilter" /><code>{"private MeshFilter[] damagedLodFilter"}</code> |  |
| <Link id="m-damagedlodrenderer" /><code>{"private MeshRenderer[] damagedLodRenderer"}</code> |  |
| <Link id="m-damagedvertexoffset" /><code>{"private List<int> damagedVertexOffset"}</code> |  |
| <Link id="m-distancelodgroup" /><code>{"private "}<Link to="/game-api/types/global-c-d/distancelodgroup">{"DistanceLODGroup"}</Link>{" distanceLODGroup"}</code> |  |
| <Link id="m-isleavesmodified" /><code>{"private bool isLeavesModified"}</code> |  |
| <Link id="m-islod0modified" /><code>{"private bool isLod0Modified"}</code> |  |
| <Link id="m-lodfilters" /><code>{"private MeshFilter[] lodFilters"}</code> |  |
| <Link id="m-lodrenderers" /><code>{"private MeshRenderer[] lodRenderers"}</code> |  |
| <Link id="m-lods" /><code>{"private Mesh[] lods"}</code> |  |
| <Link id="m-nodes" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{"> nodes"}</code> |  |
| <Link id="m-tree" /><code>{"private "}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree"}</code> |  |
| <Link id="m-trunkdefinitions" /><code>{"private "}<Link to="/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{"[] trunkDefinitions"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-editorinitialize" /><code>{"void EditorInitialize()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-regenerateleavesatendofframe" /><code>{"void RegenerateLeavesAtEndOfFrame()"}</code> |  |
| <Link id="m-regeneratelod0atendofframe" /><code>{"void RegenerateLod0AtEndOfFrame()"}</code> |  |
| <Link id="m-clear" /><code>{"private void Clear(ref Mesh[] meshes)"}</code> |  |
| <Link id="m-delayregenerateleaves" /><code>{"private IEnumerator DelayRegenerateLeaves() (iterator)"}</code> |  |
| <Link id="m-delayregeneratelod0" /><code>{"private IEnumerator DelayRegenerateLod0() (iterator)"}</code> |  |
| <Link id="m-generate" /><code>{"private void Generate()"}</code> |  |
| <Link id="m-initialize-2" /><code>{"private void Initialize("}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" node, List<Renderer>[] renderersToModify)"}</code> |  |
| <Link id="m-nodemodified" /><code>{"private void NodeModified("}<Link to="/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<"}<Link to="/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> core)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-regenerateleaves" /><code>{"private void RegenerateLeaves()"}</code> |  |
| <Link id="m-regeneratelod0" /><code>{"private void RegenerateLod0(bool isGeneratingUndamaged)"}</code> |  |
| <Link id="m-remove" /><code>{"private void Remove("}<Link to="/game-api/types/alta-crafting/treeattachment">{"TreeAttachment"}</Link>{" attachment)"}</code> |  |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> |  |
