---
title: "UltimateRope"
description: "Third-party Ultimate Rope Editor component: builds a physics rope from jointed rigidbody links (procedural mesh, linked objects or imported bones), with..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UltimateRope

A **class** in `Root.Township`, no namespace.

Third-party Ultimate Rope Editor component: builds a physics rope from jointed rigidbody links (procedural mesh, linked objects or imported bones), with optional coil and extension. Runs in edit mode too.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`EAxis`](/game-api/types/global-t-x/ultimaterope-eaxis), [`EColliderType`](/game-api/types/global-t-x/ultimaterope-ecollidertype), [`ERopeExtensionMode`](/game-api/types/global-t-x/ultimaterope-eropeextensionmode), [`ERopeType`](/game-api/types/global-t-x/ultimaterope-eropetype), [`RopeBone`](/game-api/types/global-t-x/ultimaterope-ropebone), [`RopeBreakEventInfo`](/game-api/types/global-t-x/ultimaterope-ropebreakeventinfo), [`RopeNode`](/game-api/types/global-t-x/ultimaterope-ropenode)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"UltimateRope()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-autoregenerate" /><code>{"bool AutoRegenerate"}</code> | Editor option to rebuild the rope when settings change. |
| <Link id="m-boneaxis" /><code><Link to="/game-api/types/global-t-x/ultimaterope-eaxis">{"UltimateRope.EAxis"}</Link>{" BoneAxis"}</code> | Axis along each imported bone, for `ImportBones` ropes. |
| <Link id="m-bonecolliderdiameter" /><code>{"float BoneColliderDiameter"}</code> | Collider diameter for imported bones. |
| <Link id="m-bonecolliderlength" /><code>{"float BoneColliderLength"}</code> | Collider length as a fraction of each imported bone's length. |
| <Link id="m-bonecollideroffset" /><code>{"float BoneColliderOffset"}</code> | Collider offset along the bone, as a fraction of the collider length. |
| <Link id="m-bonecolliderskip" /><code>{"int BoneColliderSkip"}</code> | Copied to each node's collider skip count, probably how many links to skip between colliders. |
| <Link id="m-bonecollidertype" /><code><Link to="/game-api/types/global-t-x/ultimaterope-ecollidertype">{"UltimateRope.EColliderType"}</Link>{" BoneColliderType"}</code> | Collider shape for imported bones. Default capsule. |
| <Link id="m-bonefirst" /><code>{"GameObject BoneFirst"}</code> | First bone of an imported bone chain. Its name must end in digits. |
| <Link id="m-bonelast" /><code>{"GameObject BoneLast"}</code> | Last bone of an imported bone chain. Its name must end in digits. |
| <Link id="m-bonelistnamesnocolliders" /><code>{"string BoneListNamesNoColliders"}</code> | Comma list of bone numbers or ranges (like `1-3`) that get no collider. |
| <Link id="m-bonelistnamesstatic" /><code>{"string BoneListNamesStatic"}</code> | Comma list of bone numbers or ranges that stay static. |
| <Link id="m-coilaxisright" /><code><Link to="/game-api/types/global-t-x/ultimaterope-eaxis">{"UltimateRope.EAxis"}</Link>{" CoilAxisRight"}</code> | Coil object axis the coil turns around. Default x. |
| <Link id="m-coilaxisup" /><code><Link to="/game-api/types/global-t-x/ultimaterope-eaxis">{"UltimateRope.EAxis"}</Link>{" CoilAxisUp"}</code> | Coil object up axis. Default y. |
| <Link id="m-coildiameter" /><code>{"float CoilDiameter"}</code> | Diameter of the coil's core. |
| <Link id="m-coilnumbones" /><code>{"int CoilNumBones"}</code> | Number of bones used to wrap rope around the coil. Default 50. |
| <Link id="m-coilobject" /><code>{"GameObject CoilObject"}</code> | Object the rope winds around when `HasACoil` is on. |
| <Link id="m-coilwidth" /><code>{"float CoilWidth"}</code> | Width of the coil across its axis. |
| <Link id="m-deleted" /><code>{"bool Deleted"}</code> | True when the rope has no generated links; setup methods skip deleted ropes. |
| <Link id="m-enableprefabusage" /><code>{"bool EnablePrefabUsage"}</code> | Rope editor option for saving the rope in a prefab. Not read by game code. |
| <Link id="m-eventsobjectreceiver" /><code>{"GameObject EventsObjectReceiver"}</code> | Object that gets `OnBreakMethodName` sent to it when a link breaks. |
| <Link id="m-extensiblelength" /><code>{"float ExtensibleLength"}</code> | Maximum extra length an extensible rope can pay out. |
| <Link id="m-hasacoil" /><code>{"bool HasACoil"}</code> | Whether an extensible procedural rope winds onto `CoilObject`. |
| <Link id="m-importedbones" /><code><Link to="/game-api/types/global-t-x/ultimaterope-ropebone">{"UltimateRope.RopeBone"}</Link>{"[] ImportedBones"}</code> | The bone chain used by an `ImportBones` rope. |
| <Link id="m-isextensible" /><code>{"bool IsExtensible"}</code> | Whether the rope can be extended at runtime with `ExtendRope`. |
| <Link id="m-linkaxis" /><code><Link to="/game-api/types/global-t-x/ultimaterope-eaxis">{"UltimateRope.EAxis"}</Link>{" LinkAxis"}</code> | Axis along the link mesh, for linked-object ropes. Default z. |
| <Link id="m-linkjointangularxlimit" /><code>{"float LinkJointAngularXLimit"}</code> | Joint swing limit in degrees around x. Zero locks it. |
| <Link id="m-linkjointangularylimit" /><code>{"float LinkJointAngularYLimit"}</code> | Joint swing limit in degrees around y. Zero locks it. |
| <Link id="m-linkjointangularzlimit" /><code>{"float LinkJointAngularZLimit"}</code> | Joint twist limit in degrees around z. Zero locks it. |
| <Link id="m-linkjointbreakforce" /><code>{"float LinkJointBreakForce"}</code> | Force at which link joints break (infinite by default). |
| <Link id="m-linkjointbreaktorque" /><code>{"float LinkJointBreakTorque"}</code> | Torque at which link joints break (infinite by default). |
| <Link id="m-linkjointdampervalue" /><code>{"float LinkJointDamperValue"}</code> | Damper of the joints' angular drive. |
| <Link id="m-linkjointmaxforcevalue" /><code>{"float LinkJointMaxForceValue"}</code> | Maximum force of the joints' angular drive. |
| <Link id="m-linkjointspringvalue" /><code>{"float LinkJointSpringValue"}</code> | Spring strength of the joints' angular drive. |
| <Link id="m-linklengths" /><code>{"float[] LinkLengths"}</code> | Length of each link in order, filled when the rope is built. |
| <Link id="m-linkmass" /><code>{"float LinkMass"}</code> | Mass of each link rigidbody. |
| <Link id="m-linkobject" /><code>{"GameObject LinkObject"}</code> | Prefab used for each link of a linked-objects rope. |
| <Link id="m-linkoffsetobject" /><code>{"float LinkOffsetObject"}</code> | Gap between linked objects, as a fraction of segment length. |
| <Link id="m-linksolveriterationcount" /><code>{"int LinkSolverIterationCount"}</code> | Physics solver iterations for each link rigidbody. |
| <Link id="m-linktwistangleincrement" /><code>{"float LinkTwistAngleIncrement"}</code> | Extra twist in degrees added to each next link, for chain-like ropes. |
| <Link id="m-linktwistanglestart" /><code>{"float LinkTwistAngleStart"}</code> | Twist in degrees of the first link object. |
| <Link id="m-lockstartendinzaxis" /><code>{"bool LockStartEndInZAxis"}</code> | Locks each segment's end links to the node rotations instead of aiming them along the segment. |
| <Link id="m-m-afcoilboneangles" /><code>{"float[] m_afCoilBoneAngles"}</code> | Angle of each coil bone around the coil. |
| <Link id="m-m-afcoilboneradiuses" /><code>{"float[] m_afCoilBoneRadiuses"}</code> | Radius of each coil bone from the coil centre. |
| <Link id="m-m-afcoilbonex" /><code>{"float[] m_afCoilBoneX"}</code> | Position of each coil bone across the coil's width. |
| <Link id="m-m-bbonesareimported" /><code>{"bool m_bBonesAreImported"}</code> | Whether the bone chain has been imported. |
| <Link id="m-m-blaststatusiserror" /><code>{"bool m_bLastStatusIsError"}</code> | Whether the last `Regenerate` failed. Read by `IsLastStatusError`. |
| <Link id="m-m-bropestartinitialorientationinitialized" /><code>{"bool m_bRopeStartInitialOrientationInitialized"}</code> | Whether the rope start's first position, rotation and scale have been saved. |
| <Link id="m-m-fcurrentcoillength" /><code>{"float m_fCurrentCoilLength"}</code> | Length of rope currently wound on the coil. |
| <Link id="m-m-fcurrentcoilroperadius" /><code>{"float m_fCurrentCoilRopeRadius"}</code> | Current radius the rope winds at, used to turn coil rotation into length. |
| <Link id="m-m-fcurrentcoilturnsleft" /><code>{"float m_fCurrentCoilTurnsLeft"}</code> | Turns of rope left on the coil. |
| <Link id="m-m-fcurrentextension" /><code>{"float m_fCurrentExtension"}</code> | How far the rope is currently extended, between 0 and `ExtensibleLength`. |
| <Link id="m-m-fcurrentextensioninput" /><code>{"float m_fCurrentExtensionInput"}</code> | Extension value set from input, starts equal to `m_fCurrentExtension`. |
| <Link id="m-m-nfirstnoncoilnode" /><code>{"int m_nFirstNonCoilNode"}</code> | Index of the first node that is not the coil: 1 with a coil, 0 without. |
| <Link id="m-m-qinitialropestartlocalrot" /><code>{"Quaternion m_qInitialRopeStartLocalRot"}</code> | Saved local rotation of the rope start. |
| <Link id="m-m-strassetfile" /><code>{"string m_strAssetFile"}</code> | Probably the asset file the rope mesh was saved to by the editor. |
| <Link id="m-m-strstatus" /><code>{"string m_strStatus"}</code> | Last status message. Backing field for `Status`. |
| <Link id="m-m-v3initialropestartlocalpos" /><code>{"Vector3 m_v3InitialRopeStartLocalPos"}</code> | Saved local position of the rope start. |
| <Link id="m-m-v3initialropestartlocalscale" /><code>{"Vector3 m_v3InitialRopeStartLocalScale"}</code> | Saved local scale of the rope start. |
| <Link id="m-onbreakmethodname" /><code>{"string OnBreakMethodName"}</code> | Method name sent to `EventsObjectReceiver` with break info when a link breaks. |
| <Link id="m-persistafterplaymode" /><code>{"bool PersistAfterPlayMode"}</code> | Rope editor option to keep changes made in play mode. Not read by game code. |
| <Link id="m-ropediameter" /><code>{"float RopeDiameter"}</code> | Rope thickness (at least 0.01). |
| <Link id="m-ropediameterscalex" /><code>{"float RopeDiameterScaleX"}</code> | Scales the procedural rope's width on x, for flat ropes. At least 0.01. |
| <Link id="m-ropediameterscaley" /><code>{"float RopeDiameterScaleY"}</code> | Scales the procedural rope's width on y. At least 0.01. |
| <Link id="m-ropelayer" /><code>{"int RopeLayer"}</code> | Layer the rope and its links use. |
| <Link id="m-ropematerial" /><code>{"Material RopeMaterial"}</code> | Material for the procedural rope's surface. |
| <Link id="m-ropenodes" /><code>{"List<"}<Link to="/game-api/types/global-t-x/ultimaterope-ropenode">{"UltimateRope.RopeNode"}</Link>{"> RopeNodes"}</code> | The rope's segments, each ending at a node object. |
| <Link id="m-ropephysicsmaterial" /><code>{"PhysicMaterial RopePhysicsMaterial"}</code> | Physic material put on link colliders. |
| <Link id="m-ropesectionmaterial" /><code>{"Material RopeSectionMaterial"}</code> | Material for the procedural rope's end caps and broken ends. |
| <Link id="m-ropesegmentsides" /><code>{"int RopeSegmentSides"}</code> | Number of sides around the procedural rope. Default 8. |
| <Link id="m-ropestart" /><code>{"GameObject RopeStart"}</code> | Object the rope starts from. |
| <Link id="m-ropetexturesectiontilemeters" /><code>{"float RopeTextureSectionTileMeters"}</code> | Texture tiling size for the end cap material. |
| <Link id="m-ropetexturetilemeters" /><code>{"float RopeTextureTileMeters"}</code> | Metres of rope per texture repeat along its length. |
| <Link id="m-ropetype" /><code><Link to="/game-api/types/global-t-x/ultimaterope-eropetype">{"UltimateRope.ERopeType"}</Link>{" RopeType"}</code> | How the rope is built: procedural mesh, linked objects or imported bones. |
| <Link id="m-sendevents" /><code>{"bool SendEvents"}</code> | Whether link breaks are sent to `EventsObjectReceiver`. |
| <Link id="m-totallinks" /><code>{"int TotalLinks"}</code> | Number of links across all segments. |
| <Link id="m-totalropelength" /><code>{"float TotalRopeLength"}</code> | Length of all segments together. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-status" /><code>{"string Status { get; set; }"}</code> | Message from the last build or change. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-afterimportedbonesobjectrespawn" /><code>{"void AfterImportedBonesObjectRespawn()"}</code> | Puts imported bones back under the rope (or their non-bone parent if static) after the object respawns. |
| <Link id="m-beforeimportedbonesobjectrespawn" /><code>{"void BeforeImportedBonesObjectRespawn()"}</code> | Puts imported bones back under their original parents before the object respawns. |
| <Link id="m-buildstaticmeshobject" /><code>{"GameObject BuildStaticMeshObject(out string strStatusMessage)"}</code> | Bakes the rope into a static mesh object. Fails in editor play mode; returns a status message. |
| <Link id="m-changeropediameter" /><code>{"bool ChangeRopeDiameter(float fNewDiameter, float fNewScaleX, float fNewScaleY)"}</code> | Changes a procedural rope's diameter and scale and rebuilds its mesh. False for other rope types. |
| <Link id="m-changeropesegmentsides" /><code>{"bool ChangeRopeSegmentSides(int nNewSegmentSides)"}</code> | Changes how many sides a procedural rope's cross-section has. False for other rope types. |
| <Link id="m-checkneedsstartexitlockz" /><code>{"void CheckNeedsStartExitLockZ()"}</code> | For procedural ropes, locks the first and last link of each segment to the node rotations when `LockStartEndInZAxis` is set. |
| <Link id="m-createnewnode" /><code>{"void CreateNewNode(int nNode)"}</code> | Inserts an empty rope node after the given index. |
| <Link id="m-deleterope" /><code>{"void DeleteRope(bool bResetNodePositions = false, bool bDestroySkin = true)"}</code> | Removes the rope's links and joints, optionally resetting node transforms. |
| <Link id="m-deleteropelinks" /><code>{"void DeleteRopeLinks()"}</code> | Destroys the generated link objects. Does nothing for imported bones. |
| <Link id="m-extendrope" /><code>{"void ExtendRope("}<Link to="/game-api/types/global-t-x/ultimaterope-eropeextensionmode">{"UltimateRope.ERopeExtensionMode"}</Link>{" eRopeExtensionMode, float fIncrement)"}</code> | Extends or retracts an extensible rope, linearly or by turning the coil. Logs an error if not allowed. |
| <Link id="m-filllinkmeshindicesrope" /><code>{"void FillLinkMeshIndicesRope(int nLinearLinkIndex, int nTotalLinks, ref int[] indices, bool bBreakable, bool bBrokenLink = false)"}</code> | Writes the triangle indices for one link's rope surface. For broken links it leaves the gap open. |
| <Link id="m-filllinkmeshindicessections" /><code>{"void FillLinkMeshIndicesSections(int nLinearLinkIndex, int nTotalLinks, ref int[] indices, bool bBreakable, bool bBrokenLink = false)"}</code> | Writes the triangle indices for the end caps of a link, or of the whole rope when not breakable. |
| <Link id="m-firstnodeiscoil" /><code>{"bool FirstNodeIsCoil()"}</code> | Whether the first rope node is the coil. |
| <Link id="m-hasdynamicsegmentnodes" /><code>{"bool HasDynamicSegmentNodes()"}</code> | True if any node object has a non-kinematic rigidbody. |
| <Link id="m-islaststatuserror" /><code>{"bool IsLastStatusError()"}</code> | Whether the last build ended with an error in `Status`. |
| <Link id="m-movenodedown" /><code>{"void MoveNodeDown(int nNode)"}</code> | Swaps a rope node with the next one. |
| <Link id="m-movenodeup" /><code>{"void MoveNodeUp(int nNode)"}</code> | Swaps a rope node with the previous one. |
| <Link id="m-recomputecoil" /><code>{"void RecomputeCoil()"}</code> | Rebuilds the coil bones for the current coil length. |
| <Link id="m-regenerate" /><code>{"bool Regenerate(bool bResetNodePositions = false)"}</code> | Deletes and rebuilds the whole rope. Returns false and sets `Status` on bad settings. |
| <Link id="m-removenode" /><code>{"void RemoveNode(int nNode)"}</code> | Removes a rope node. |
| <Link id="m-setupropejoints" /><code>{"void SetupRopeJoints()"}</code> | Creates the joints between links from the current settings. |
| <Link id="m-setupropelinks" /><code>{"void SetupRopeLinks()"}</code> | Sets up link colliders, rigidbodies and layer from the current settings. |
| <Link id="m-setupropematerials" /><code>{"void SetupRopeMaterials()"}</code> | Assigns the rope and section materials on a procedural rope's skinned renderer. |

<details>
<summary>24 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | In play mode, makes the joints between links, sets up the links, and lays out the coil if the rope has one. |
| <Link id="m-buildbonehashstring2gameobject" /><code>{"private bool BuildBoneHashString2GameObject(GameObject goRoot, GameObject goCurrent, ref Dictionary<string, GameObject> outHashString2GameObjects, ref string strErrorMessage)"}</code> | Maps every object name in a hierarchy to its object, failing if a name is used twice. |
| <Link id="m-buildimportedbonelist" /><code>{"private bool BuildImportedBoneList(GameObject goBoneFirst, GameObject goBoneLast, List<int> ListImportBonesStatic, List<int> ListImportBonesNoCollider, out List<"}<Link to="/game-api/types/global-t-x/ultimaterope-ropebone">{"UltimateRope.RopeBone"}</Link>{"> outListImportedBones, out string strErrorMessage)"}</code> | Works out the bone name pattern from the first and last bone names and builds the imported bone list. |
| <Link id="m-buildimportedbonelisttry" /><code>{"private bool BuildImportedBoneListTry(GameObject goRoot, string strPrefix, int nIndexFirst, int nIndexLast, int nDigitsFirst, int nDigitsLast, List<int> ListImportBonesStatic, List<int> ListImportBonesNoCollider, out List<"}<Link to="/game-api/types/global-t-x/ultimaterope-ropebone">{"UltimateRope.RopeBone"}</Link>{"> outListImportedBones, ref string strErrorMessage)"}</code> | Tries one name pattern and digit count to find each numbered bone, used by `BuildImportedBoneList`. |
| <Link id="m-checkaddcoilnode" /><code>{"private void CheckAddCoilNode()"}</code> | For extensible procedural ropes with a coil, inserts a coil node at the start of `RopeNodes`. |
| <Link id="m-checkdelcoilnode" /><code>{"private void CheckDelCoilNode()"}</code> | Removes the coil node from the start of `RopeNodes` if there is one. |
| <Link id="m-createjoint" /><code>{"private ConfigurableJoint CreateJoint(GameObject goObject, GameObject goConnectedTo, Vector3 v3Pivot)"}</code> | Adds a configurable joint to an object, connects it to another's rigidbody and sets its pivot. |
| <Link id="m-createropejoints" /><code>{"private void CreateRopeJoints(bool bCheckIfBroken = false)"}</code> | Makes the joints between all links. When asked, skips joints that had broken. |
| <Link id="m-extendropelinear" /><code>{"private float ExtendRopeLinear(float fLinearIncrement)"}</code> | Moves links in or out of the rope end to extend or retract it, and returns the length actually changed. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Checks for broken joints, cuts the procedural mesh there, sends the break message, and stops the rest of that segment breaking. |
| <Link id="m-getaxisvector" /><code>{"private Vector3 GetAxisVector("}<Link to="/game-api/types/global-t-x/ultimaterope-eaxis">{"UltimateRope.EAxis"}</Link>{" eAxis, float fLength)"}</code> | Returns a vector of the given length along an `EAxis`. |
| <Link id="m-getlinkaxisindex" /><code>{"private int GetLinkAxisIndex()"}</code> | Returns 0, 1 or 2 for the axis links lie along (x, y or z). |
| <Link id="m-getlinkaxisoffset" /><code>{"private Vector3 GetLinkAxisOffset(float fValue)"}</code> | Returns an offset along the link axis for the rope type. |
| <Link id="m-getlinkboxcollidercenterandsize" /><code>{"private bool GetLinkBoxColliderCenterAndSize(float fLinkLength, float fRopeDiameter, ref Vector3 v3CenterInOut, ref Vector3 v3SizeInOut)"}</code> | Works out a box collider's centre and size for one link. |
| <Link id="m-getlinkdiameter" /><code>{"private float GetLinkDiameter()"}</code> | Returns the rope's thickness: the procedural diameter, the link mesh's width, or the bone collider diameter. |
| <Link id="m-getlinkedobjectlocalrotation" /><code>{"private Quaternion GetLinkedObjectLocalRotation(float fTwistAngle = 0)"}</code> | Rotation that lines a link object up with `LinkAxis`, twisted by an angle. |
| <Link id="m-getlinkedobjectscale" /><code>{"private float GetLinkedObjectScale(float fSegmentLength, int nNumLinks)"}</code> | Scale for link objects so they fill a segment's length, allowing for `LinkOffsetObject`. |
| <Link id="m-ongui" /><code>{"private void OnGUI()"}</code> | Empty. |
| <Link id="m-parseboneindices" /><code>{"private bool ParseBoneIndices(string strBoneList, out List<int> outListBoneIndices, out string strErrorMessage)"}</code> | Parses a comma list of bone numbers and ranges into a list of indices. |
| <Link id="m-setextensiblelinktokinematic" /><code>{"private void SetExtensibleLinkToKinematic(GameObject link, bool bKinematic)"}</code> | Makes a link kinematic (and unbreakable, collider off) while it is pulled in, or physical again when let out. |
| <Link id="m-setupcoilbones" /><code>{"private void SetupCoilBones(float fCoilLength)"}</code> | Lays the coil node's bones around the coil for a given wound length. |
| <Link id="m-setupjoint" /><code>{"private void SetupJoint(ConfigurableJoint joint)"}</code> | Applies the link joint limits, drive and break force settings to a configurable joint. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Copies the current extension to the extension input. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Empty. |

</details>

## Used in

Members of other types that take, return or hold a `UltimateRope`:

[`RopePersistManager.ComputeTransformInfo`](/game-api/types/global-q-r/ropepersistmanager#m-computetransforminfo), [`RopePersistManager.RopeData.m_rope`](/game-api/types/global-q-r/ropepersistmanager-ropedata#m-m-rope), [`RopePersistManager.RopeData.RopeData`](/game-api/types/global-q-r/ropepersistmanager-ropedata#m-ctor), [`UltimateRope.RopeBreakEventInfo.rope`](/game-api/types/global-t-x/ultimaterope-ropebreakeventinfo#m-rope).
