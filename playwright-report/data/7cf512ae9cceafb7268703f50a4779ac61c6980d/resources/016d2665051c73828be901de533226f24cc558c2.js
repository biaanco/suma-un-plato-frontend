import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/PanelPublicar.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { get, post } from "/src/api.js";
import { cant } from "/src/format.js";
import PanelLayout from "/src/components/PanelLayout.jsx";
import Icono from "/src/components/Icono.jsx";
export default function PanelPublicar() {
  _s();
  const [alimentos, setAlimentos] = useState([]);
  const [publicadas, setPublicadas] = useState([]);
  const [alimentoId, setAlimentoId] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [urgente, setUrgente] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(true);
  function cargar() {
    return Promise.all(
      [
        get("/alimentos").then(setAlimentos).catch(() => {
        }),
        get("/panel/publicadas").then(setPublicadas).catch(() => {
        })
      ]
    );
  }
  useEffect(() => {
    cargar().finally(() => setCargando(false));
  }, []);
  async function publicar(e) {
    e.preventDefault();
    if (!alimentoId || !objetivo) return;
    await post("/panel/publicar", { alimentoId: Number(alimentoId), objetivo: Number(objetivo), urgente });
    setMensaje("Necesidad publicada en el index.");
    setAlimentoId("");
    setObjetivo("");
    setUrgente(false);
    cargar();
  }
  async function alternar(id) {
    await post("/panel/publicar/urgente", { id });
    cargar();
  }
  async function retirar(id) {
    await post("/panel/publicar/quitar", { id });
    cargar();
  }
  return /* @__PURE__ */ jsxDEV(PanelLayout, { titulo: "Publicar necesidades", seccion: "publicar", children: [
    /* @__PURE__ */ jsxDEV("p", { className: "medida", style: { color: "var(--tinta-suave)", marginBottom: 24 }, children: 'Desde las planillas de los merenderos, elegí qué mostrar en el index y con qué cantidad objetivo. Esto es exactamente lo que verá María como "Necesidades de hoy".' }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    mensaje && /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-ok", children: mensaje }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
      lineNumber: 72,
      columnNumber: 19
    }, this),
    cargando ? /* @__PURE__ */ jsxDEV("span", { className: "cargando" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
      lineNumber: 75,
      columnNumber: 7
    }, this) : /* @__PURE__ */ jsxDEV("div", { className: "grid grid-2", style: { alignItems: "start" }, children: [
      /* @__PURE__ */ jsxDEV("section", { className: "tarjeta tarjeta-pad", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display", style: { fontSize: 20, marginTop: 0 }, children: "Publicar / actualizar" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("form", { onSubmit: publicar, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
            /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Producto" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
              lineNumber: 82,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("select", { className: "campo", value: alimentoId, onChange: (e) => setAlimentoId(e.target.value), required: true, children: [
              /* @__PURE__ */ jsxDEV("option", { value: "", children: "Elegí un producto…" }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
                lineNumber: 84,
                columnNumber: 19
              }, this),
              alimentos.map((a) => /* @__PURE__ */ jsxDEV("option", { value: a.id, children: [
                a.nombre,
                " (",
                a.unidad,
                ")"
              ] }, a.id, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
                lineNumber: 85,
                columnNumber: 41
              }, this))
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
              lineNumber: 83,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
            /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Cantidad objetivo" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
              lineNumber: 89,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("input", { className: "campo", type: "number", step: "0.5", min: "0.5", value: objetivo, onChange: (e) => setObjetivo(e.target.value), style: { width: 160 }, required: true }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
              lineNumber: 90,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("label", { style: { display: "flex", alignItems: "center", gap: 8, cursor: "pointer", marginBottom: 16 }, children: [
            /* @__PURE__ */ jsxDEV("input", { type: "checkbox", checked: urgente, onChange: (e) => setUrgente(e.target.checked), style: { width: 20, height: 20 } }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
              lineNumber: 93,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { fontWeight: 500 }, children: "Marcar como urgente" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
              lineNumber: 94,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
            lineNumber: 92,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("button", { className: "btn-donar", children: "Publicar" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
            lineNumber: 96,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("section", { children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display", style: { fontSize: 20, marginTop: 0, marginBottom: 16 }, children: [
          "Publicadas ahora (",
          publicadas.length,
          ")"
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
          lineNumber: 101,
          columnNumber: 13
        }, this),
        publicadas.length === 0 ? /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--tinta-suave)", fontSize: 14 }, children: "Todavía no publicaste ninguna necesidad." }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
          lineNumber: 103,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: publicadas.map(
          (n) => /* @__PURE__ */ jsxDEV("div", { className: "tarjeta", style: { padding: 20, position: "relative" }, children: [
            n.urgente && /* @__PURE__ */ jsxDEV("span", { className: "chip chip-urgente", style: { position: "absolute", top: 16, right: 16 }, children: "Urgente" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
              lineNumber: 108,
              columnNumber: 35
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }, children: [
              /* @__PURE__ */ jsxDEV("div", { className: "icono-circulo", style: { width: 40, height: 40 }, children: /* @__PURE__ */ jsxDEV(Icono, { nombre: n.icono, size: 20 }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
                lineNumber: 110,
                columnNumber: 88
              }, this) }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
                lineNumber: 110,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: 600 }, children: n.nombre }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
                  lineNumber: 111,
                  columnNumber: 28
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "var(--tinta-suave)" }, children: n.categoria === "perecedero" ? "Perecedero" : "No perecedero" }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
                  lineNumber: 111,
                  columnNumber: 77
                }, this)
              ] }, void 0, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
                lineNumber: 111,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
              lineNumber: 109,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "progreso-riel", style: { marginBottom: 4 }, children: /* @__PURE__ */ jsxDEV("div", { className: "progreso-relleno", style: { width: n.pct + "%" } }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
              lineNumber: 113,
              columnNumber: 80
            }, this) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
              lineNumber: 113,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "tabular", style: { fontSize: 14, color: "var(--tinta-suave)", marginBottom: 12 }, children: [
              cant(n.cubierto),
              " de ",
              cant(n.objetivo),
              " ",
              n.unidad
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
              lineNumber: 114,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 8 }, children: [
              /* @__PURE__ */ jsxDEV("button", { className: "btn-fantasma", style: { padding: "6px 12px", minHeight: "auto", fontSize: 14 }, onClick: () => alternar(n.id), children: n.urgente ? "Quitar urgente" : "Marcar urgente" }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
                lineNumber: 116,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("button", { className: "btn-icono", style: { fontSize: 14 }, onClick: () => retirar(n.id), children: "Retirar" }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
                lineNumber: 117,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
              lineNumber: 115,
              columnNumber: 21
            }, this)
          ] }, n.id, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
            lineNumber: 107,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
        lineNumber: 100,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}
_s(PanelPublicar, "zgcDy9OMRDLdOnhZH1AB9o+e/GQ=");
_c = PanelPublicar;
var _c;
$RefreshReg$(_c, "PanelPublicar");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPublicar.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBaURNOzs7Ozs7Ozs7Ozs7Ozs7OztBQWpETixTQUFTQSxXQUFXQyxnQkFBZ0I7QUFDcEMsU0FBU0MsS0FBS0MsWUFBWTtBQUMxQixTQUFTQyxZQUFZO0FBQ3JCLE9BQU9DLGlCQUFpQjtBQUN4QixPQUFPQyxXQUFXO0FBRWxCLHdCQUF3QkMsZ0JBQWdCO0FBQUFDLEtBQUE7QUFDdEMsUUFBTSxDQUFDQyxXQUFXQyxZQUFZLElBQUlULFNBQVMsRUFBRTtBQUM3QyxRQUFNLENBQUNVLFlBQVlDLGFBQWEsSUFBSVgsU0FBUyxFQUFFO0FBQy9DLFFBQU0sQ0FBQ1ksWUFBWUMsYUFBYSxJQUFJYixTQUFTLEVBQUU7QUFDL0MsUUFBTSxDQUFDYyxVQUFVQyxXQUFXLElBQUlmLFNBQVMsRUFBRTtBQUMzQyxRQUFNLENBQUNnQixTQUFTQyxVQUFVLElBQUlqQixTQUFTLEtBQUs7QUFDNUMsUUFBTSxDQUFDa0IsU0FBU0MsVUFBVSxJQUFJbkIsU0FBUyxFQUFFO0FBQ3pDLFFBQU0sQ0FBQ29CLFVBQVVDLFdBQVcsSUFBSXJCLFNBQVMsSUFBSTtBQUU3QyxXQUFTc0IsU0FBUztBQUNoQixXQUFPQyxRQUFRQztBQUFBQSxNQUFJO0FBQUEsUUFDakJ2QixJQUFJLFlBQVksRUFBRXdCLEtBQUtoQixZQUFZLEVBQUVpQixNQUFNLE1BQU07QUFBQSxRQUFDLENBQUM7QUFBQSxRQUNuRHpCLElBQUksbUJBQW1CLEVBQUV3QixLQUFLZCxhQUFhLEVBQUVlLE1BQU0sTUFBTTtBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUM7QUFBQSxJQUM3RDtBQUFBLEVBQ0g7QUFFQTNCLFlBQVUsTUFBTTtBQUNkdUIsV0FBTyxFQUFFSyxRQUFRLE1BQU1OLFlBQVksS0FBSyxDQUFDO0FBQUEsRUFDM0MsR0FBRyxFQUFFO0FBRUwsaUJBQWVPLFNBQVNDLEdBQUc7QUFDekJBLE1BQUVDLGVBQWU7QUFDakIsUUFBSSxDQUFDbEIsY0FBYyxDQUFDRSxTQUFVO0FBQzlCLFVBQU1aLEtBQUssbUJBQW1CLEVBQUVVLFlBQVltQixPQUFPbkIsVUFBVSxHQUFHRSxVQUFVaUIsT0FBT2pCLFFBQVEsR0FBR0UsUUFBUSxDQUFDO0FBQ3JHRyxlQUFXLGtDQUFrQztBQUM3Q04sa0JBQWMsRUFBRTtBQUNoQkUsZ0JBQVksRUFBRTtBQUNkRSxlQUFXLEtBQUs7QUFDaEJLLFdBQU87QUFBQSxFQUNUO0FBRUEsaUJBQWVVLFNBQVNDLElBQUk7QUFDMUIsVUFBTS9CLEtBQUssMkJBQTJCLEVBQUUrQixHQUFHLENBQUM7QUFDNUNYLFdBQU87QUFBQSxFQUNUO0FBRUEsaUJBQWVZLFFBQVFELElBQUk7QUFDekIsVUFBTS9CLEtBQUssMEJBQTBCLEVBQUUrQixHQUFHLENBQUM7QUFDM0NYLFdBQU87QUFBQSxFQUNUO0FBRUEsU0FDRSx1QkFBQyxlQUFZLFFBQU8sd0JBQXVCLFNBQVEsWUFDakQ7QUFBQSwyQkFBQyxPQUFFLFdBQVUsVUFBUyxPQUFPLEVBQUVhLE9BQU8sc0JBQXNCQyxjQUFjLEdBQUcsR0FBRSxrTEFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUVBO0FBQUEsSUFDQ2xCLFdBQVcsdUJBQUMsU0FBSSxXQUFVLG9CQUFvQkEscUJBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBMkM7QUFBQSxJQUV0REUsV0FDQyx1QkFBQyxVQUFLLFdBQVUsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUEyQixJQUUzQix1QkFBQyxTQUFJLFdBQVUsZUFBYyxPQUFPLEVBQUVpQixZQUFZLFFBQVEsR0FDeEQ7QUFBQSw2QkFBQyxhQUFRLFdBQVUsdUJBQ2pCO0FBQUEsK0JBQUMsUUFBRyxXQUFVLGdCQUFlLE9BQU8sRUFBRUMsVUFBVSxJQUFJQyxXQUFXLEVBQUUsR0FBRyxxQ0FBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF5RjtBQUFBLFFBQ3pGLHVCQUFDLFVBQUssVUFBVVgsVUFDZDtBQUFBLGlDQUFDLFNBQUksT0FBTyxFQUFFUSxjQUFjLEdBQUcsR0FDN0I7QUFBQSxtQ0FBQyxXQUFNLFdBQVUsZUFBYyx3QkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdUM7QUFBQSxZQUN2Qyx1QkFBQyxZQUFPLFdBQVUsU0FBUSxPQUFPeEIsWUFBWSxVQUFVLENBQUFpQixNQUFLaEIsY0FBY2dCLEVBQUVXLE9BQU9DLEtBQUssR0FBRyxVQUFRLE1BQ2pHO0FBQUEscUNBQUMsWUFBTyxPQUFNLElBQUcsa0NBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQW1DO0FBQUEsY0FDbENqQyxVQUFVa0MsSUFBSSxDQUFBQyxNQUFLLHVCQUFDLFlBQWtCLE9BQU9BLEVBQUVWLElBQUtVO0FBQUFBLGtCQUFFQztBQUFBQSxnQkFBTztBQUFBLGdCQUFHRCxFQUFFRTtBQUFBQSxnQkFBTztBQUFBLG1CQUF6Q0YsRUFBRVYsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF1RCxDQUFTO0FBQUEsaUJBRnRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR0E7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTUE7QUFBQSxVQUNBLHVCQUFDLFNBQUksT0FBTyxFQUFFRyxjQUFjLEdBQUcsR0FDN0I7QUFBQSxtQ0FBQyxXQUFNLFdBQVUsZUFBYyxpQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBZ0Q7QUFBQSxZQUNoRCx1QkFBQyxXQUFNLFdBQVUsU0FBUSxNQUFLLFVBQVMsTUFBSyxPQUFNLEtBQUksT0FBTSxPQUFPdEIsVUFBVSxVQUFVLENBQUFlLE1BQUtkLFlBQVljLEVBQUVXLE9BQU9DLEtBQUssR0FBRyxPQUFPLEVBQUVLLE9BQU8sSUFBSSxHQUFHLFVBQVEsUUFBeEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBd0o7QUFBQSxlQUYxSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUdBO0FBQUEsVUFDQSx1QkFBQyxXQUFNLE9BQU8sRUFBRUMsU0FBUyxRQUFRVixZQUFZLFVBQVVXLEtBQUssR0FBR0MsUUFBUSxXQUFXYixjQUFjLEdBQUcsR0FDakc7QUFBQSxtQ0FBQyxXQUFNLE1BQUssWUFBVyxTQUFTcEIsU0FBUyxVQUFVLENBQUFhLE1BQUtaLFdBQVdZLEVBQUVXLE9BQU9VLE9BQU8sR0FBRyxPQUFPLEVBQUVKLE9BQU8sSUFBSUssUUFBUSxHQUFHLEtBQXJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXVIO0FBQUEsWUFDdkgsdUJBQUMsVUFBSyxPQUFPLEVBQUVDLFlBQVksSUFBSSxHQUFHLG1DQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFxRDtBQUFBLGVBRnZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBR0E7QUFBQSxVQUNBLHVCQUFDLFlBQU8sV0FBVSxhQUFZLHdCQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFzQztBQUFBLGFBaEJ4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaUJBO0FBQUEsV0FuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW9CQTtBQUFBLE1BRUEsdUJBQUMsYUFDQztBQUFBLCtCQUFDLFFBQUcsV0FBVSxnQkFBZSxPQUFPLEVBQUVkLFVBQVUsSUFBSUMsV0FBVyxHQUFHSCxjQUFjLEdBQUcsR0FBRztBQUFBO0FBQUEsVUFBbUIxQixXQUFXMkM7QUFBQUEsVUFBTztBQUFBLGFBQTNIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBNEg7QUFBQSxRQUMzSDNDLFdBQVcyQyxXQUFXLElBQ3JCLHVCQUFDLE9BQUUsT0FBTyxFQUFFbEIsT0FBTyxzQkFBc0JHLFVBQVUsR0FBRyxHQUFHLHdEQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWlHLElBRWpHLHVCQUFDLFNBQUksT0FBTyxFQUFFUyxTQUFTLFFBQVFPLGVBQWUsVUFBVU4sS0FBSyxHQUFHLEdBQzdEdEMscUJBQVdnQztBQUFBQSxVQUFJLENBQUFhLE1BQ2QsdUJBQUMsU0FBZSxXQUFVLFdBQVUsT0FBTyxFQUFFQyxTQUFTLElBQUlDLFVBQVUsV0FBVyxHQUM1RUY7QUFBQUEsY0FBRXZDLFdBQVcsdUJBQUMsVUFBSyxXQUFVLHFCQUFvQixPQUFPLEVBQUV5QyxVQUFVLFlBQVlDLEtBQUssSUFBSUMsT0FBTyxHQUFHLEdBQUcsdUJBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWdHO0FBQUEsWUFDOUcsdUJBQUMsU0FBSSxPQUFPLEVBQUVaLFNBQVMsUUFBUVYsWUFBWSxVQUFVVyxLQUFLLElBQUlaLGNBQWMsR0FBRyxHQUM3RTtBQUFBLHFDQUFDLFNBQUksV0FBVSxpQkFBZ0IsT0FBTyxFQUFFVSxPQUFPLElBQUlLLFFBQVEsR0FBRyxHQUFHLGlDQUFDLFNBQU0sUUFBUUksRUFBRUssT0FBTyxNQUFNLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWlDLEtBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXFHO0FBQUEsY0FDckcsdUJBQUMsU0FBSTtBQUFBLHVDQUFDLFNBQUksT0FBTyxFQUFFUixZQUFZLElBQUksR0FBSUcsWUFBRVgsVUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBMkM7QUFBQSxnQkFBTSx1QkFBQyxTQUFJLE9BQU8sRUFBRU4sVUFBVSxJQUFJSCxPQUFPLHFCQUFxQixHQUFJb0IsWUFBRU0sY0FBYyxlQUFlLGVBQWUsbUJBQTFHO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQTBIO0FBQUEsbUJBQWhMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXNMO0FBQUEsaUJBRnhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR0E7QUFBQSxZQUNBLHVCQUFDLFNBQUksV0FBVSxpQkFBZ0IsT0FBTyxFQUFFekIsY0FBYyxFQUFFLEdBQUcsaUNBQUMsU0FBSSxXQUFVLG9CQUFtQixPQUFPLEVBQUVVLE9BQU9TLEVBQUVPLE1BQU0sSUFBSSxLQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFpRSxLQUE1SDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFrSTtBQUFBLFlBQ2xJLHVCQUFDLFNBQUksV0FBVSxXQUFVLE9BQU8sRUFBRXhCLFVBQVUsSUFBSUgsT0FBTyxzQkFBc0JDLGNBQWMsR0FBRyxHQUFJakM7QUFBQUEsbUJBQUtvRCxFQUFFUSxRQUFRO0FBQUEsY0FBRTtBQUFBLGNBQUs1RCxLQUFLb0QsRUFBRXpDLFFBQVE7QUFBQSxjQUFFO0FBQUEsY0FBRXlDLEVBQUVWO0FBQUFBLGlCQUE3STtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFvSjtBQUFBLFlBQ3BKLHVCQUFDLFNBQUksT0FBTyxFQUFFRSxTQUFTLFFBQVFDLEtBQUssRUFBRSxHQUNwQztBQUFBLHFDQUFDLFlBQU8sV0FBVSxnQkFBZSxPQUFPLEVBQUVRLFNBQVMsWUFBWVEsV0FBVyxRQUFRMUIsVUFBVSxHQUFHLEdBQUcsU0FBUyxNQUFNTixTQUFTdUIsRUFBRXRCLEVBQUUsR0FBSXNCLFlBQUV2QyxVQUFVLG1CQUFtQixvQkFBaks7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBa0w7QUFBQSxjQUNsTCx1QkFBQyxZQUFPLFdBQVUsYUFBWSxPQUFPLEVBQUVzQixVQUFVLEdBQUcsR0FBRyxTQUFTLE1BQU1KLFFBQVFxQixFQUFFdEIsRUFBRSxHQUFHLHVCQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE0RjtBQUFBLGlCQUY5RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdBO0FBQUEsZUFYUXNCLEVBQUV0QixJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWUE7QUFBQSxRQUNELEtBZkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWdCQTtBQUFBLFdBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF1QkE7QUFBQSxTQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBK0NBO0FBQUEsT0F4REo7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTBEQTtBQUVKO0FBQUMxQixHQXRHdUJELGVBQWE7QUFBQSxLQUFiQTtBQUFhLElBQUEyRDtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldCIsInBvc3QiLCJjYW50IiwiUGFuZWxMYXlvdXQiLCJJY29ubyIsIlBhbmVsUHVibGljYXIiLCJfcyIsImFsaW1lbnRvcyIsInNldEFsaW1lbnRvcyIsInB1YmxpY2FkYXMiLCJzZXRQdWJsaWNhZGFzIiwiYWxpbWVudG9JZCIsInNldEFsaW1lbnRvSWQiLCJvYmpldGl2byIsInNldE9iamV0aXZvIiwidXJnZW50ZSIsInNldFVyZ2VudGUiLCJtZW5zYWplIiwic2V0TWVuc2FqZSIsImNhcmdhbmRvIiwic2V0Q2FyZ2FuZG8iLCJjYXJnYXIiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsImNhdGNoIiwiZmluYWxseSIsInB1YmxpY2FyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiTnVtYmVyIiwiYWx0ZXJuYXIiLCJpZCIsInJldGlyYXIiLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiYSIsIm5vbWJyZSIsInVuaWRhZCIsIndpZHRoIiwiZGlzcGxheSIsImdhcCIsImN1cnNvciIsImNoZWNrZWQiLCJoZWlnaHQiLCJmb250V2VpZ2h0IiwibGVuZ3RoIiwiZmxleERpcmVjdGlvbiIsIm4iLCJwYWRkaW5nIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImljb25vIiwiY2F0ZWdvcmlhIiwicGN0IiwiY3ViaWVydG8iLCJtaW5IZWlnaHQiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJQYW5lbFB1YmxpY2FyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tICcuLi9hcGknXG5pbXBvcnQgeyBjYW50IH0gZnJvbSAnLi4vZm9ybWF0J1xuaW1wb3J0IFBhbmVsTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvUGFuZWxMYXlvdXQnXG5pbXBvcnQgSWNvbm8gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ubydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFuZWxQdWJsaWNhcigpIHtcbiAgY29uc3QgW2FsaW1lbnRvcywgc2V0QWxpbWVudG9zXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbcHVibGljYWRhcywgc2V0UHVibGljYWRhc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2FsaW1lbnRvSWQsIHNldEFsaW1lbnRvSWRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtvYmpldGl2bywgc2V0T2JqZXRpdm9dID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFt1cmdlbnRlLCBzZXRVcmdlbnRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbWVuc2FqZSwgc2V0TWVuc2FqZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2NhcmdhbmRvLCBzZXRDYXJnYW5kb10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGZ1bmN0aW9uIGNhcmdhcigpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0KCcvYWxpbWVudG9zJykudGhlbihzZXRBbGltZW50b3MpLmNhdGNoKCgpID0+IHt9KSxcbiAgICAgIGdldCgnL3BhbmVsL3B1YmxpY2FkYXMnKS50aGVuKHNldFB1YmxpY2FkYXMpLmNhdGNoKCgpID0+IHt9KVxuICAgIF0pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNhcmdhcigpLmZpbmFsbHkoKCkgPT4gc2V0Q2FyZ2FuZG8oZmFsc2UpKVxuICB9LCBbXSlcblxuICBhc3luYyBmdW5jdGlvbiBwdWJsaWNhcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKCFhbGltZW50b0lkIHx8ICFvYmpldGl2bykgcmV0dXJuXG4gICAgYXdhaXQgcG9zdCgnL3BhbmVsL3B1YmxpY2FyJywgeyBhbGltZW50b0lkOiBOdW1iZXIoYWxpbWVudG9JZCksIG9iamV0aXZvOiBOdW1iZXIob2JqZXRpdm8pLCB1cmdlbnRlIH0pXG4gICAgc2V0TWVuc2FqZSgnTmVjZXNpZGFkIHB1YmxpY2FkYSBlbiBlbCBpbmRleC4nKVxuICAgIHNldEFsaW1lbnRvSWQoJycpXG4gICAgc2V0T2JqZXRpdm8oJycpXG4gICAgc2V0VXJnZW50ZShmYWxzZSlcbiAgICBjYXJnYXIoKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gYWx0ZXJuYXIoaWQpIHtcbiAgICBhd2FpdCBwb3N0KCcvcGFuZWwvcHVibGljYXIvdXJnZW50ZScsIHsgaWQgfSlcbiAgICBjYXJnYXIoKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gcmV0aXJhcihpZCkge1xuICAgIGF3YWl0IHBvc3QoJy9wYW5lbC9wdWJsaWNhci9xdWl0YXInLCB7IGlkIH0pXG4gICAgY2FyZ2FyKClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhbmVsTGF5b3V0IHRpdHVsbz1cIlB1YmxpY2FyIG5lY2VzaWRhZGVzXCIgc2VjY2lvbj1cInB1YmxpY2FyXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtZWRpZGFcIiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScsIG1hcmdpbkJvdHRvbTogMjQgfX0+XG4gICAgICAgIERlc2RlIGxhcyBwbGFuaWxsYXMgZGUgbG9zIG1lcmVuZGVyb3MsIGVsZWfDrSBxdcOpIG1vc3RyYXIgZW4gZWwgaW5kZXggeSBjb24gcXXDqSBjYW50aWRhZCBvYmpldGl2by4gRXN0byBlcyBleGFjdGFtZW50ZSBsbyBxdWUgdmVyw6EgTWFyw61hIGNvbW8gXCJOZWNlc2lkYWRlcyBkZSBob3lcIi5cbiAgICAgIDwvcD5cbiAgICAgIHttZW5zYWplICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRhIGFsZXJ0YS1va1wiPnttZW5zYWplfTwvZGl2Pn1cblxuICAgICAge2NhcmdhbmRvID8gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJnYW5kb1wiPjwvc3Bhbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLTJcIiBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnc3RhcnQnIH19PlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRhcmpldGEgdGFyamV0YS1wYWRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWRpc3BsYXlcIiBzdHlsZT17eyBmb250U2l6ZTogMjAsIG1hcmdpblRvcDogMCB9fT5QdWJsaWNhciAvIGFjdHVhbGl6YXI8L2gyPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3B1YmxpY2FyfT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE2IH19PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1jYW1wb1wiPlByb2R1Y3RvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImNhbXBvXCIgdmFsdWU9e2FsaW1lbnRvSWR9IG9uQ2hhbmdlPXtlID0+IHNldEFsaW1lbnRvSWQoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5FbGVnw60gdW4gcHJvZHVjdG/igKY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIHthbGltZW50b3MubWFwKGEgPT4gPG9wdGlvbiBrZXk9e2EuaWR9IHZhbHVlPXthLmlkfT57YS5ub21icmV9ICh7YS51bmlkYWR9KTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWNhbXBvXCI+Q2FudGlkYWQgb2JqZXRpdm88L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYW1wb1wiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiMC41XCIgbWluPVwiMC41XCIgdmFsdWU9e29iamV0aXZvfSBvbkNoYW5nZT17ZSA9PiBzZXRPYmpldGl2byhlLnRhcmdldC52YWx1ZSl9IHN0eWxlPXt7IHdpZHRoOiAxNjAgfX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDgsIGN1cnNvcjogJ3BvaW50ZXInLCBtYXJnaW5Cb3R0b206IDE2IH19PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt1cmdlbnRlfSBvbkNoYW5nZT17ZSA9PiBzZXRVcmdlbnRlKGUudGFyZ2V0LmNoZWNrZWQpfSBzdHlsZT17eyB3aWR0aDogMjAsIGhlaWdodDogMjAgfX0gLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA1MDAgfX0+TWFyY2FyIGNvbW8gdXJnZW50ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZG9uYXJcIj5QdWJsaWNhcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheVwiIHN0eWxlPXt7IGZvbnRTaXplOiAyMCwgbWFyZ2luVG9wOiAwLCBtYXJnaW5Cb3R0b206IDE2IH19PlB1YmxpY2FkYXMgYWhvcmEgKHtwdWJsaWNhZGFzLmxlbmd0aH0pPC9oMj5cbiAgICAgICAgICAgIHtwdWJsaWNhZGFzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBmb250U2l6ZTogMTQgfX0+VG9kYXbDrWEgbm8gcHVibGljYXN0ZSBuaW5ndW5hIG5lY2VzaWRhZC48L3A+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogMTYgfX0+XG4gICAgICAgICAgICAgICAge3B1YmxpY2FkYXMubWFwKG4gPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e24uaWR9IGNsYXNzTmFtZT1cInRhcmpldGFcIiBzdHlsZT17eyBwYWRkaW5nOiAyMCwgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtuLnVyZ2VudGUgJiYgPHNwYW4gY2xhc3NOYW1lPVwiY2hpcCBjaGlwLXVyZ2VudGVcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAxNiwgcmlnaHQ6IDE2IH19PlVyZ2VudGU8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogMTIsIG1hcmdpbkJvdHRvbTogMTIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uby1jaXJjdWxvXCIgc3R5bGU9e3sgd2lkdGg6IDQwLCBoZWlnaHQ6IDQwIH19PjxJY29ubyBub21icmU9e24uaWNvbm99IHNpemU9ezIwfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAgfX0+e24ubm9tYnJlfTwvZGl2PjxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScgfX0+e24uY2F0ZWdvcmlhID09PSAncGVyZWNlZGVybycgPyAnUGVyZWNlZGVybycgOiAnTm8gcGVyZWNlZGVybyd9PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNvLXJpZWxcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQgfX0+PGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzby1yZWxsZW5vXCIgc3R5bGU9e3sgd2lkdGg6IG4ucGN0ICsgJyUnIH19PjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnVsYXJcIiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJywgbWFyZ2luQm90dG9tOiAxMiB9fT57Y2FudChuLmN1YmllcnRvKX0gZGUge2NhbnQobi5vYmpldGl2byl9IHtuLnVuaWRhZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogOCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1mYW50YXNtYVwiIHN0eWxlPXt7IHBhZGRpbmc6ICc2cHggMTJweCcsIG1pbkhlaWdodDogJ2F1dG8nLCBmb250U2l6ZTogMTQgfX0gb25DbGljaz17KCkgPT4gYWx0ZXJuYXIobi5pZCl9PntuLnVyZ2VudGUgPyAnUXVpdGFyIHVyZ2VudGUnIDogJ01hcmNhciB1cmdlbnRlJ308L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1pY29ub1wiIHN0eWxlPXt7IGZvbnRTaXplOiAxNCB9fSBvbkNsaWNrPXsoKSA9PiByZXRpcmFyKG4uaWQpfT5SZXRpcmFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L1BhbmVsTGF5b3V0PlxuICApXG59XG4iXSwiZmlsZSI6Ii9Vc2Vycy9iaWFuY28vRG9jdW1lbnRzL1NVUDIvc3VtYS11bi1wbGF0by1mcm9udGVuZC1tYWluICg1KS9mcm9udGVuZC9zcmMvcGFnZXMvUGFuZWxQdWJsaWNhci5qc3gifQ==