---
title: "AtlasDefinition"
description: "class AtlasDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtlasDefinition

A **class** in `Root.Township`, `Alta.Utilities.Atlas`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`AtlasedMaterial`](/game-api/types/alta-utilities/atlasdefinition-atlasedmaterial), [`MaterialReferences`](/game-api/types/alta-utilities/atlasdefinition-materialreferences)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AtlasDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-atlasedmaterialname" /><code>{"string atlasedMaterialName"}</code> |  |
| <Link id="m-atlassize" /><code>{"int atlasSize"}</code> |  |
| <Link id="m-bakedmaterial" /><code>{"Material bakedMaterial"}</code> |  |
| <Link id="m-freedetails" /><code>{"string freeDetails"}</code> |  |
| <Link id="m-generalpaddingvalue" /><code>{"int generalPaddingValue"}</code> |  |
| <Link id="m-isdisablingalphaondifuse" /><code>{"bool isDisablingAlphaOnDifuse"}</code> |  |
| <Link id="m-isforcingnoemission" /><code>{"bool isForcingNoEmission"}</code> |  |
| <Link id="m-materials" /><code>{"List<"}<Link to="/game-api/types/alta-utilities/atlasdefinition-atlasedmaterial">{"AtlasDefinition.AtlasedMaterial"}</Link>{"> materials"}</code> |  |
| <Link id="m-needstobake" /><code>{"bool needsToBake"}</code> |  |
| <Link id="m-priority" /><code>{"uint priority"}</code> |  |
| <Link id="m-smallesttextureheight" /><code>{"int smallestTextureHeight"}</code> |  |
| <Link id="m-smallesttexturewidth" /><code>{"int smallestTextureWidth"}</code> |  |
| <Link id="m-target" /><code><Link to="/game-api/types/alta-utilities/atlastarget">{"AtlasTarget"}</Link>{" target"}</code> |  |
| <Link id="m-type" /><code><Link to="/game-api/types/alta-utilities/atlastype">{"AtlasType"}</Link>{" type"}</code> |  |
| <Link id="m-uvfixtype" /><code><Link to="/game-api/types/alta-utilities/uvfixtype">{"UVFixType"}</Link>{" uvFixType"}</code> |  |
| <Link id="m-bakedmeshes" /><code>{"private Dictionary<int, Mesh> bakedMeshes"}</code> |  |
| <Link id="m-colors" /><code>{"private static List<Color> colors"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-materialreferences" /><code>{"private Dictionary<Material, "}<Link to="/game-api/types/alta-utilities/atlasdefinition-atlasedmaterial">{"AtlasDefinition.AtlasedMaterial"}</Link>{"> materialReferences"}</code> |  |
| <Link id="m-offsetscaleuvs" /><code>{"private static List<Vector4> offsetScaleUVs"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basepath" /><code>{"static string BasePath { get; }"}</code> |  |
| <Link id="m-definitionspath" /><code>{"static string DefinitionsPath { get; }"}</code> |  |
| <Link id="m-horizontaltakensize" /><code>{"private int HorizontalTakenSize { get; }"}</code> |  |
| <Link id="m-materialspath" /><code>{"private static string MaterialsPath { get; }"}</code> |  |
| <Link id="m-meshespath" /><code>{"private static string MeshesPath { get; }"}</code> |  |
| <Link id="m-projectpath" /><code>{"private static string ProjectPath { get; }"}</code> |  |
| <Link id="m-texturespath" /><code>{"private static string TexturesPath { get; }"}</code> |  |
| <Link id="m-verticaltakensize" /><code>{"private int VerticalTakenSize { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyto" /><code>{"bool ApplyTo(IEnumerable<Renderer> renderers, bool isSavingMeshAsAsset = false, bool isSavingToTemporaryFolder = false)"}</code> |  |
| <Link id="m-applyto-2" /><code>{"bool ApplyTo(Mesh originalMesh, Material baseMaterial, out Mesh resultMesh, bool isSavingToTemporaryFolder = false)"}</code> |  |
| <Link id="m-autoestimatesize" /><code>{"void AutoEstimateSize(bool forceRebake = true)"}</code> |  |
| <Link id="m-bake" /><code>{"void Bake()"}</code> |  |
| <Link id="m-clearbakedmeshes" /><code>{"void ClearBakedMeshes()"}</code> |  |
| <Link id="m-filterrenderers" /><code>{"IEnumerable<Renderer> FilterRenderers(IEnumerable<Renderer> renderers) (iterator)"}</code> |  |
| <Link id="m-getmaterialrect" /><code>{"bool GetMaterialRect(Material material, out "}<Link to="/game-api/types/alta-utilities/atlasdefinition-atlasedmaterial">{"AtlasDefinition.AtlasedMaterial"}</Link>{" reference)"}</code> |  |
| <Link id="m-istargeting" /><code>{"bool IsTargeting("}<Link to="/game-api/types/alta-utilities/atlastarget">{"AtlasTarget"}</Link>{" target)"}</code> |  |
| <Link id="m-preparereferences" /><code>{"void PrepareReferences()"}</code> |  |
| <Link id="m-preparereferencesifneeded" /><code>{"void PrepareReferencesIfNeeded()"}</code> |  |
| <Link id="m-updateshader" /><code>{"void UpdateShader()"}</code> |  |
| <Link id="m-blit" /><code>{"private void Blit(bool rendersEmission, RenderTexture diffuseRT, RenderTexture normalRT, RenderTexture emissionRT, Texture2D defaultWhiteTexture, Texture2D defaultNormal, Texture2D defaultEmission, Vector4 rect, Vector4 interiorRect, Material material)"}</code> |  |
| <Link id="m-clearrt" /><code>{"private void ClearRT(RenderTexture renderTexture)"}</code> |  |
| <Link id="m-deletetexture" /><code>{"private void DeleteTexture(string textureName)"}</code> |  |
| <Link id="m-deletetexture-2" /><code>{"private void DeleteTexture(string textureBasePath, string textureName)"}</code> |  |
| <Link id="m-fixmeshuvs" /><code>{"private Mesh FixMeshUVs(List<int> triangles, Vector4 offsetScale, Mesh workingMesh, bool hasMultipleSubmeshes, int subMeshIndex, bool isOriginal)"}</code> |  |
| <Link id="m-getshader" /><code>{"private Shader GetShader()"}</code> |  |
| <Link id="m-savetofile" /><code>{"private bool SaveToFile(string basePath, string textureName, RenderTexture renderTexture, bool isLinear, TextureFormat format = 4)"}</code> |  |
| <Link id="m-settexture" /><code>{"private void SetTexture(string textureName, bool isNormal)"}</code> |  |

## Used in

Members of other types that take, return or hold a `AtlasDefinition`:

[`MeshPlacementData.BakeAtlas`](/game-api/types/alta-crafting/meshplacementdata#m-bakeatlas), [`MeshPlacementData.forcedAtlasDefinition`](/game-api/types/alta-crafting/meshplacementdata#m-forcedatlasdefinition), [`TreeAttachment.GenerateRenderers`](/game-api/types/alta-crafting/treeattachment#m-generaterenderers), [`TreeSpecies.FixMaterials`](/game-api/types/alta-crafting/treespecies#m-fixmaterials), [`WoodcutTreeBaker.attachmentDefinitions`](/game-api/types/alta-crafting/woodcuttreebaker#m-attachmentdefinitions), [`WoodcutTreeBaker.trunkDefinitions`](/game-api/types/alta-crafting/woodcuttreebaker#m-trunkdefinitions), [`ForcedAtlasDefinition.androidDefinition`](/game-api/types/global-e-h/forcedatlasdefinition#m-androiddefinition), [`ForcedAtlasDefinition.standaloneDefinition`](/game-api/types/global-e-h/forcedatlasdefinition#m-standalonedefinition), [`PhysicalMaterial.Setup`](/game-api/types/global-p/physicalmaterial#m-setup), [`PhysicalMaterial.MaterialChannel.SetupOffsetScale`](/game-api/types/global-p/physicalmaterial-materialchannel#m-setupoffsetscale), [`PooledMeshReplaceObjectDefinition.Bake`](/game-api/types/global-p/pooledmeshreplaceobjectdefinition#m-bake).
