import { Color } from "three";
import { IfcViewerAPI } from "web-ifc-viewer";

const container = document.getElementById("viewer-container");
const viewer = new IfcViewerAPI({container, backgroundColor: new Color(200, 200, 200)});

viewer.axes.setAxes();
viewer.grid.setGrid();

async function loadIfc(url) {
  //await viewer.IFC.setWasmPath("node_modules/web-ifc");
  const model = await viewer.IFC.loadIfcUrl(url);
  viewer.shadowDropper.renderShadow(model.modelID)
}
// viewer.IFC.loadIfcUrl("IFC_files\01.ifc")
 loadIfc("IFC_files/01.ifc")