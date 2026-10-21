import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Panel.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=9f826408";
import { get } from "/src/api.js";
import { cant, colorSemaforo, claseSemaforo } from "/src/format.js";
import PanelLayout from "/src/components/PanelLayout.jsx";
import Icono from "/src/components/Icono.jsx";
export default function Panel() {
  _s();
  const [datos, setDatos] = useState(null);
  useEffect(() => {
    get("/panel/dashboard").then(setDatos).catch(() => {
    });
  }, []);
  return /* @__PURE__ */ jsxDEV(PanelLayout, { titulo: "Dashboard", seccion: "dashboard", children: !datos ? /* @__PURE__ */ jsxDEV("span", { className: "cargando" }, void 0, false, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-4", style: { marginBottom: 32 }, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "kpi", children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, color: "var(--tinta-suave)", marginBottom: 8 }, children: "Stock total" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 42,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "kpi-num tabular", children: cant(datos.stockTotal) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 43,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "var(--tinta-suave)" }, children: "ítems en depósito" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 44,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "kpi", children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, color: "var(--tinta-suave)", marginBottom: 8 }, children: "Por revisar" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 47,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "kpi-num tabular", style: { color: "var(--naranja)" }, children: datos.porRevisar }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 48,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "var(--tinta-suave)" }, children: "donaciones esperando" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 49,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "kpi", children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, color: "var(--tinta-suave)", marginBottom: 8 }, children: "Urgentes sin cubrir" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 52,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "kpi-num tabular", style: { color: "var(--sem-rojo)" }, children: datos.urgentesSinCubrir }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 53,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "var(--tinta-suave)" }, children: "necesidades críticas" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 54,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "kpi", children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, color: "var(--tinta-suave)", marginBottom: 8 }, children: "Por vencer" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 57,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "kpi-num tabular", style: { color: "var(--sem-ambar)" }, children: datos.porVencer }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 58,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "var(--tinta-suave)" }, children: "lotes en 15 días" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 59,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
        lineNumber: 56,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
      lineNumber: 40,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-2", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "tarjeta tarjeta-pad", children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "font-display", style: { fontSize: 20, margin: 0 }, children: "Semáforo de vencimientos" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
            lineNumber: 66,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/panel/stock", style: { fontSize: 14, color: "var(--naranja)", fontWeight: 600 }, children: "Ver stock" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
            lineNumber: 67,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        datos.semaforo.length === 0 ? /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--tinta-suave)", fontSize: 14 }, children: "No hay lotes con vencimiento cargado." }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 70,
          columnNumber: 13
        }, this) : /* @__PURE__ */ jsxDEV("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: datos.semaforo.map(
          (l) => /* @__PURE__ */ jsxDEV("li", { style: { display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderTop: "1px solid var(--borde)" }, children: [
            /* @__PURE__ */ jsxDEV("span", { className: claseSemaforo(l.semaforo.clase) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
              lineNumber: 75,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { color: "var(--tinta-suave)" }, children: /* @__PURE__ */ jsxDEV(Icono, { nombre: l.icono, size: 20 }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
              lineNumber: 76,
              columnNumber: 69
            }, this) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
              lineNumber: 76,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { flex: 1, fontWeight: 500 }, children: [
              l.nombre,
              " ",
              /* @__PURE__ */ jsxDEV("span", { style: { color: "var(--tinta-suave)", fontWeight: 400, fontSize: 14 }, children: [
                "· ",
                cant(l.cantidad),
                " ",
                l.unidad
              ] }, void 0, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
                lineNumber: 77,
                columnNumber: 77
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
              lineNumber: 77,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "tabular", style: { fontSize: 14, fontWeight: 600, color: colorSemaforo(l.semaforo.clase) }, children: l.semaforo.texto }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
              lineNumber: 78,
              columnNumber: 23
            }, this)
          ] }, l.id, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
            lineNumber: 74,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
        lineNumber: 64,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "tarjeta tarjeta-pad", children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "font-display", style: { fontSize: 20, margin: 0 }, children: "Necesidades pendientes" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
            lineNumber: 87,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/panel/publicar", style: { fontSize: 14, color: "var(--naranja)", fontWeight: 600 }, children: "Publicar" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
            lineNumber: 88,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 86,
          columnNumber: 15
        }, this),
        datos.necesidadesPendientes.length === 0 ? /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--tinta-suave)", fontSize: 14 }, children: "¡Todo cubierto por ahora!" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 91,
          columnNumber: 13
        }, this) : /* @__PURE__ */ jsxDEV("ul", { style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }, children: datos.necesidadesPendientes.map(
          (n, i) => /* @__PURE__ */ jsxDEV("li", { children: [
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 4 }, children: [
              /* @__PURE__ */ jsxDEV("span", { style: { fontWeight: 500 }, children: [
                n.nombre,
                " ",
                n.urgente && /* @__PURE__ */ jsxDEV("span", { className: "chip chip-urgente", style: { marginLeft: 4 }, children: "Urgente" }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
                  lineNumber: 97,
                  columnNumber: 84
                }, this)
              ] }, void 0, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
                lineNumber: 97,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "tabular", style: { fontSize: 14, color: "var(--tinta-suave)" }, children: [
                cant(n.cubierto),
                "/",
                cant(n.objetivo),
                " ",
                n.unidad
              ] }, void 0, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
                lineNumber: 98,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
              lineNumber: 96,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "progreso-riel", children: /* @__PURE__ */ jsxDEV("div", { className: "progreso-relleno", style: { width: n.pct + "%" } }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
              lineNumber: 100,
              columnNumber: 54
            }, this) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
              lineNumber: 100,
              columnNumber: 23
            }, this)
          ] }, i, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
            lineNumber: 95,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
          lineNumber: 93,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
        lineNumber: 85,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
      lineNumber: 63,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
_s(Panel, "uI/Yvujh9C2HKIiv9jYac9c2B0U=");
_c = Panel;
var _c;
$RefreshReg$(_c, "Panel");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Panel.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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cUJBQUt5QyxFQUFFSSxRQUFRO0FBQUEsZ0JBQUU7QUFBQSxnQkFBRTdDLEtBQUt5QyxFQUFFSyxRQUFRO0FBQUEsZ0JBQUU7QUFBQSxnQkFBRUwsRUFBRUw7QUFBQUEsbUJBQXpIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWdJO0FBQUEsaUJBRmxJO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR0E7QUFBQSxZQUNBLHVCQUFDLFNBQUksV0FBVSxpQkFBZ0IsaUNBQUMsU0FBSSxXQUFVLG9CQUFtQixPQUFPLEVBQUVXLE9BQU9OLEVBQUVPLE1BQU0sSUFBSSxLQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFpRSxLQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFzRztBQUFBLGVBTC9GTixHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTUE7QUFBQSxRQUNELEtBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVVBO0FBQUEsV0FsQko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW9CQTtBQUFBLFNBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0EyQ0E7QUFBQSxPQW5FRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBb0VBLEtBeEVKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0EwRUE7QUFFSjtBQUFDcEMsR0FwRnVCRCxPQUFLO0FBQUEsS0FBTEE7QUFBSyxJQUFBNEM7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiZ2V0IiwiY2FudCIsImNvbG9yU2VtYWZvcm8iLCJjbGFzZVNlbWFmb3JvIiwiUGFuZWxMYXlvdXQiLCJJY29ubyIsIlBhbmVsIiwiX3MiLCJkYXRvcyIsInNldERhdG9zIiwidGhlbiIsImNhdGNoIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJjb2xvciIsInN0b2NrVG90YWwiLCJwb3JSZXZpc2FyIiwidXJnZW50ZXNTaW5DdWJyaXIiLCJwb3JWZW5jZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwiZm9udFdlaWdodCIsInNlbWFmb3JvIiwibGVuZ3RoIiwibGlzdFN0eWxlIiwicGFkZGluZyIsIm1hcCIsImwiLCJnYXAiLCJib3JkZXJUb3AiLCJjbGFzZSIsImljb25vIiwiZmxleCIsIm5vbWJyZSIsImNhbnRpZGFkIiwidW5pZGFkIiwidGV4dG8iLCJpZCIsIm5lY2VzaWRhZGVzUGVuZGllbnRlcyIsImZsZXhEaXJlY3Rpb24iLCJuIiwiaSIsInVyZ2VudGUiLCJtYXJnaW5MZWZ0IiwiY3ViaWVydG8iLCJvYmpldGl2byIsIndpZHRoIiwicGN0IiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUGFuZWwuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vYXBpJ1xuaW1wb3J0IHsgY2FudCwgY29sb3JTZW1hZm9ybywgY2xhc2VTZW1hZm9ybyB9IGZyb20gJy4uL2Zvcm1hdCdcbmltcG9ydCBQYW5lbExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL1BhbmVsTGF5b3V0J1xuaW1wb3J0IEljb25vIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbm8nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhbmVsKCkge1xuICBjb25zdCBbZGF0b3MsIHNldERhdG9zXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXQoJy9wYW5lbC9kYXNoYm9hcmQnKS50aGVuKHNldERhdG9zKS5jYXRjaCgoKSA9PiB7fSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8UGFuZWxMYXlvdXQgdGl0dWxvPVwiRGFzaGJvYXJkXCIgc2VjY2lvbj1cImRhc2hib2FyZFwiPlxuICAgICAgeyFkYXRvcyA/IChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZ2FuZG9cIj48L3NwYW4+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLTRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDMyIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrcGlcIj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJywgbWFyZ2luQm90dG9tOiA4IH19PlN0b2NrIHRvdGFsPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3BpLW51bSB0YWJ1bGFyXCI+e2NhbnQoZGF0b3Muc3RvY2tUb3RhbCl9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScgfX0+w610ZW1zIGVuIGRlcMOzc2l0bzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtwaVwiPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBtYXJnaW5Cb3R0b206IDggfX0+UG9yIHJldmlzYXI8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrcGktbnVtIHRhYnVsYXJcIiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLW5hcmFuamEpJyB9fT57ZGF0b3MucG9yUmV2aXNhcn08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJyB9fT5kb25hY2lvbmVzIGVzcGVyYW5kbzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtwaVwiPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBtYXJnaW5Cb3R0b206IDggfX0+VXJnZW50ZXMgc2luIGN1YnJpcjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtwaS1udW0gdGFidWxhclwiIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tc2VtLXJvam8pJyB9fT57ZGF0b3MudXJnZW50ZXNTaW5DdWJyaXJ9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScgfX0+bmVjZXNpZGFkZXMgY3LDrXRpY2FzPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3BpXCI+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScsIG1hcmdpbkJvdHRvbTogOCB9fT5Qb3IgdmVuY2VyPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3BpLW51bSB0YWJ1bGFyXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1zZW0tYW1iYXIpJyB9fT57ZGF0b3MucG9yVmVuY2VyfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknIH19PmxvdGVzIGVuIDE1IGTDrWFzPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLTJcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRhcmpldGEgdGFyamV0YS1wYWRcIj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206IDE2IH19PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWRpc3BsYXlcIiBzdHlsZT17eyBmb250U2l6ZTogMjAsIG1hcmdpbjogMCB9fT5TZW3DoWZvcm8gZGUgdmVuY2ltaWVudG9zPC9oMj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wYW5lbC9zdG9ja1wiIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICd2YXIoLS1uYXJhbmphKScsIGZvbnRXZWlnaHQ6IDYwMCB9fT5WZXIgc3RvY2s8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7ZGF0b3Muc2VtYWZvcm8ubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJywgZm9udFNpemU6IDE0IH19Pk5vIGhheSBsb3RlcyBjb24gdmVuY2ltaWVudG8gY2FyZ2Fkby48L3A+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnLCBwYWRkaW5nOiAwLCBtYXJnaW46IDAgfX0+XG4gICAgICAgICAgICAgICAgICB7ZGF0b3Muc2VtYWZvcm8ubWFwKGwgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtsLmlkfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDEyLCBwYWRkaW5nOiAnMTJweCAwJywgYm9yZGVyVG9wOiAnMXB4IHNvbGlkIHZhcigtLWJvcmRlKScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzZVNlbWFmb3JvKGwuc2VtYWZvcm8uY2xhc2UpfT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknIH19PjxJY29ubyBub21icmU9e2wuaWNvbm99IHNpemU9ezIwfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmbGV4OiAxLCBmb250V2VpZ2h0OiA1MDAgfX0+e2wubm9tYnJlfSA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScsIGZvbnRXZWlnaHQ6IDQwMCwgZm9udFNpemU6IDE0IH19PsK3IHtjYW50KGwuY2FudGlkYWQpfSB7bC51bmlkYWR9PC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWJ1bGFyXCIgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBjb2xvclNlbWFmb3JvKGwuc2VtYWZvcm8uY2xhc2UpIH19PntsLnNlbWFmb3JvLnRleHRvfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRhcmpldGEgdGFyamV0YS1wYWRcIj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206IDE2IH19PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWRpc3BsYXlcIiBzdHlsZT17eyBmb250U2l6ZTogMjAsIG1hcmdpbjogMCB9fT5OZWNlc2lkYWRlcyBwZW5kaWVudGVzPC9oMj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wYW5lbC9wdWJsaWNhclwiIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICd2YXIoLS1uYXJhbmphKScsIGZvbnRXZWlnaHQ6IDYwMCB9fT5QdWJsaWNhcjwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtkYXRvcy5uZWNlc2lkYWRlc1BlbmRpZW50ZXMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJywgZm9udFNpemU6IDE0IH19PsKhVG9kbyBjdWJpZXJ0byBwb3IgYWhvcmEhPC9wPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJywgcGFkZGluZzogMCwgbWFyZ2luOiAwLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDE2IH19PlxuICAgICAgICAgICAgICAgICAge2RhdG9zLm5lY2VzaWRhZGVzUGVuZGllbnRlcy5tYXAoKG4sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIG1hcmdpbkJvdHRvbTogNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDUwMCB9fT57bi5ub21icmV9IHtuLnVyZ2VudGUgJiYgPHNwYW4gY2xhc3NOYW1lPVwiY2hpcCBjaGlwLXVyZ2VudGVcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA0IH19PlVyZ2VudGU8L3NwYW4+fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhYnVsYXJcIiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJyB9fT57Y2FudChuLmN1YmllcnRvKX0ve2NhbnQobi5vYmpldGl2byl9IHtuLnVuaWRhZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzby1yaWVsXCI+PGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzby1yZWxsZW5vXCIgc3R5bGU9e3sgd2lkdGg6IG4ucGN0ICsgJyUnIH19PjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvUGFuZWxMYXlvdXQ+XG4gIClcbn1cbiJdLCJmaWxlIjoiL1VzZXJzL2JpYW5jby9Eb2N1bWVudHMvU1VQMi9zdW1hLXVuLXBsYXRvLWZyb250ZW5kLW1haW4gKDUpL2Zyb250ZW5kL3NyYy9wYWdlcy9QYW5lbC5qc3gifQ==