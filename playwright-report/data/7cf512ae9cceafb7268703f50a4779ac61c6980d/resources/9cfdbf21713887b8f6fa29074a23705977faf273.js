import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/PanelPlanillas.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=9f826408";
import { get } from "/src/api.js";
import { cant } from "/src/format.js";
import PanelLayout from "/src/components/PanelLayout.jsx";
const URG = {
  alta: { background: "#000000", color: "#ffffff" },
  media: { background: "#bbbbbb", color: "#000000" },
  baja: { background: "#ffffff", color: "#000000" }
};
const ESTADO = { pendiente: "Pendiente", parcial: "Parcial", cubierta: "Cubierta" };
export default function PanelPlanillas() {
  _s();
  const [datos, setDatos] = useState({ agregado: [], porMerendero: [] });
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    get("/panel/planillas").then(setDatos).catch(() => {
    }).finally(() => setCargando(false));
  }, []);
  return /* @__PURE__ */ jsxDEV(PanelLayout, { titulo: "Planillas de necesidades", seccion: "planillas", children: [
    /* @__PURE__ */ jsxDEV("p", { className: "medida", style: { color: "var(--tinta-suave)", marginBottom: 24 }, children: "Lo que pidieron todos los merenderos, con su cantidad y urgencia. Es la materia prima para decidir qué publicar en el index." }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    cargando ? /* @__PURE__ */ jsxDEV("span", { className: "cargando" }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("section", { className: "tarjeta tarjeta-pad", style: { marginBottom: 32 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "font-display", style: { fontSize: 20, margin: 0 }, children: "Total pedido por producto" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
            lineNumber: 56,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Link, { to: "/panel/publicar", className: "btn-donar", style: { padding: "8px 16px" }, children: "Publicar necesidades" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
            lineNumber: 57,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        datos.agregado.length === 0 ? /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--tinta-suave)", fontSize: 14 }, children: "No hay pedidos cargados por los merenderos." }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
          lineNumber: 60,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV("div", { className: "grid grid-3", children: datos.agregado.map(
          (a, i) => /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid var(--borde)", borderRadius: 12, padding: "12px 16px" }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { fontWeight: 500 }, children: a.nombre }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
              lineNumber: 65,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
              /* @__PURE__ */ jsxDEV("span", { className: "chip", style: URG[a.urgencia], children: a.urgencia }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
                lineNumber: 67,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "tabular", style: { fontWeight: 600 }, children: [
                cant(a.total),
                " ",
                a.unidad
              ] }, void 0, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
                lineNumber: 68,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
              lineNumber: 66,
              columnNumber: 21
            }, this)
          ] }, i, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
            lineNumber: 64,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display", style: { fontSize: 20, marginBottom: 16 }, children: "Detalle por merendero" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 20 }, children: datos.porMerendero.map(
        (m, i) => /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", children: [
          /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 12 }, children: [
            /* @__PURE__ */ jsxDEV("h3", { style: { fontSize: 18, margin: 0 }, children: m.nombre }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
              lineNumber: 81,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 14, color: "var(--tinta-suave)", margin: 0 }, children: [
              m.referente,
              " · ",
              m.horarios
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
              lineNumber: 82,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
            lineNumber: 80,
            columnNumber: 17
          }, this),
          m.items.length === 0 ? /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 14, color: "var(--tinta-suave)" }, children: "Sin necesidades cargadas." }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
            lineNumber: 85,
            columnNumber: 13
          }, this) : /* @__PURE__ */ jsxDEV("div", { className: "tabla-scroll", children: /* @__PURE__ */ jsxDEV("table", { className: "tabla", children: [
            /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("th", { children: "Producto" }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
                lineNumber: 89,
                columnNumber: 34
              }, this),
              /* @__PURE__ */ jsxDEV("th", { children: "Cantidad" }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
                lineNumber: 89,
                columnNumber: 51
              }, this),
              /* @__PURE__ */ jsxDEV("th", { children: "Urgencia" }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
                lineNumber: 89,
                columnNumber: 68
              }, this),
              /* @__PURE__ */ jsxDEV("th", { children: "Estado" }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
                lineNumber: 89,
                columnNumber: 85
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
              lineNumber: 89,
              columnNumber: 30
            }, this) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
              lineNumber: 89,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("tbody", { children: m.items.map(
              (p, j) => /* @__PURE__ */ jsxDEV("tr", { children: [
                /* @__PURE__ */ jsxDEV("td", { style: { fontWeight: 500 }, children: p.nombre }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
                  lineNumber: 93,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("td", { className: "tabular", children: [
                  cant(p.cantidad),
                  " ",
                  p.unidad
                ] }, void 0, true, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
                  lineNumber: 94,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("span", { className: "chip", style: URG[p.urgencia], children: p.urgencia }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
                  lineNumber: 95,
                  columnNumber: 33
                }, this) }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
                  lineNumber: 95,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV("td", { style: { fontSize: 14, color: "var(--tinta-suave)" }, children: ESTADO[p.estado] }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
                  lineNumber: 96,
                  columnNumber: 29
                }, this)
              ] }, j, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
                lineNumber: 92,
                columnNumber: 19
              }, this)
            ) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
              lineNumber: 90,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
            lineNumber: 88,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
            lineNumber: 87,
            columnNumber: 13
          }, this)
        ] }, i, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
          lineNumber: 79,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
        lineNumber: 77,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
_s(PanelPlanillas, "almE7qYRRJFK7vLF/gPcGCOCgvc=");
_c = PanelPlanillas;
var _c;
$RefreshReg$(_c, "PanelPlanillas");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelPlanillas.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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VUFBVSxJQUFJdEIsT0FBTyxxQkFBcUIsR0FBSUcsaUJBQU91QyxFQUFFRyxNQUFNLEtBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQTRFO0FBQUEsbUJBSnJFRixHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBS0E7QUFBQSxZQUNELEtBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFTQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFZQSxLQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBY0E7QUFBQSxhQXRCTWYsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBd0JBO0FBQUEsTUFDRCxLQTNCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNEJBO0FBQUEsU0FwREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXFEQTtBQUFBLE9BN0RKO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0ErREE7QUFFSjtBQUFDcEIsR0E3RXVCRCxnQkFBYztBQUFBLEtBQWRBO0FBQWMsSUFBQXVDO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsImdldCIsImNhbnQiLCJQYW5lbExheW91dCIsIlVSRyIsImFsdGEiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJtZWRpYSIsImJhamEiLCJFU1RBRE8iLCJwZW5kaWVudGUiLCJwYXJjaWFsIiwiY3ViaWVydGEiLCJQYW5lbFBsYW5pbGxhcyIsIl9zIiwiZGF0b3MiLCJzZXREYXRvcyIsImFncmVnYWRvIiwicG9yTWVyZW5kZXJvIiwiY2FyZ2FuZG8iLCJzZXRDYXJnYW5kbyIsInRoZW4iLCJjYXRjaCIsImZpbmFsbHkiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJtYXJnaW4iLCJwYWRkaW5nIiwibGVuZ3RoIiwibWFwIiwiYSIsImkiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJmb250V2VpZ2h0Iiwibm9tYnJlIiwiZ2FwIiwidXJnZW5jaWEiLCJ0b3RhbCIsInVuaWRhZCIsImZsZXhEaXJlY3Rpb24iLCJtIiwicmVmZXJlbnRlIiwiaG9yYXJpb3MiLCJpdGVtcyIsInAiLCJqIiwiY2FudGlkYWQiLCJlc3RhZG8iLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJQYW5lbFBsYW5pbGxhcy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi9hcGknXG5pbXBvcnQgeyBjYW50IH0gZnJvbSAnLi4vZm9ybWF0J1xuaW1wb3J0IFBhbmVsTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvUGFuZWxMYXlvdXQnXG5cbmNvbnN0IFVSRyA9IHtcbiAgYWx0YTogeyBiYWNrZ3JvdW5kOiAnIzAwMDAwMCcsIGNvbG9yOiAnI2ZmZmZmZicgfSxcbiAgbWVkaWE6IHsgYmFja2dyb3VuZDogJyNiYmJiYmInLCBjb2xvcjogJyMwMDAwMDAnIH0sXG4gIGJhamE6IHsgYmFja2dyb3VuZDogJyNmZmZmZmYnLCBjb2xvcjogJyMwMDAwMDAnIH1cbn1cbmNvbnN0IEVTVEFETyA9IHsgcGVuZGllbnRlOiAnUGVuZGllbnRlJywgcGFyY2lhbDogJ1BhcmNpYWwnLCBjdWJpZXJ0YTogJ0N1YmllcnRhJyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhbmVsUGxhbmlsbGFzKCkge1xuICBjb25zdCBbZGF0b3MsIHNldERhdG9zXSA9IHVzZVN0YXRlKHsgYWdyZWdhZG86IFtdLCBwb3JNZXJlbmRlcm86IFtdIH0pXG4gIGNvbnN0IFtjYXJnYW5kbywgc2V0Q2FyZ2FuZG9dID0gdXNlU3RhdGUodHJ1ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldCgnL3BhbmVsL3BsYW5pbGxhcycpXG4gICAgICAudGhlbihzZXREYXRvcylcbiAgICAgIC5jYXRjaCgoKSA9PiB7fSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldENhcmdhbmRvKGZhbHNlKSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8UGFuZWxMYXlvdXQgdGl0dWxvPVwiUGxhbmlsbGFzIGRlIG5lY2VzaWRhZGVzXCIgc2VjY2lvbj1cInBsYW5pbGxhc1wiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWVkaWRhXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBtYXJnaW5Cb3R0b206IDI0IH19PlxuICAgICAgICBMbyBxdWUgcGlkaWVyb24gdG9kb3MgbG9zIG1lcmVuZGVyb3MsIGNvbiBzdSBjYW50aWRhZCB5IHVyZ2VuY2lhLiBFcyBsYSBtYXRlcmlhIHByaW1hIHBhcmEgZGVjaWRpciBxdcOpIHB1YmxpY2FyIGVuIGVsIGluZGV4LlxuICAgICAgPC9wPlxuXG4gICAgICB7Y2FyZ2FuZG8gPyAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmdhbmRvXCI+PC9zcGFuPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0YXJqZXRhIHRhcmpldGEtcGFkXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAzMiB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAxNiB9fT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheVwiIHN0eWxlPXt7IGZvbnRTaXplOiAyMCwgbWFyZ2luOiAwIH19PlRvdGFsIHBlZGlkbyBwb3IgcHJvZHVjdG88L2gyPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9wYW5lbC9wdWJsaWNhclwiIGNsYXNzTmFtZT1cImJ0bi1kb25hclwiIHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMTZweCcgfX0+UHVibGljYXIgbmVjZXNpZGFkZXM8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtkYXRvcy5hZ3JlZ2Fkby5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJywgZm9udFNpemU6IDE0IH19Pk5vIGhheSBwZWRpZG9zIGNhcmdhZG9zIHBvciBsb3MgbWVyZW5kZXJvcy48L3A+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC0zXCI+XG4gICAgICAgICAgICAgICAge2RhdG9zLmFncmVnYWRvLm1hcCgoYSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGJvcmRlcjogJzFweCBzb2xpZCB2YXIoLS1ib3JkZSknLCBib3JkZXJSYWRpdXM6IDEyLCBwYWRkaW5nOiAnMTJweCAxNnB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNTAwIH19PnthLm5vbWJyZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGlwXCIgc3R5bGU9e1VSR1thLnVyZ2VuY2lhXX0+e2EudXJnZW5jaWF9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhYnVsYXJcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAgfX0+e2NhbnQoYS50b3RhbCl9IHthLnVuaWRhZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheVwiIHN0eWxlPXt7IGZvbnRTaXplOiAyMCwgbWFyZ2luQm90dG9tOiAxNiB9fT5EZXRhbGxlIHBvciBtZXJlbmRlcm88L2gyPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAyMCB9fT5cbiAgICAgICAgICAgIHtkYXRvcy5wb3JNZXJlbmRlcm8ubWFwKChtLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJ0YXJqZXRhIHRhcmpldGEtcGFkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEyIH19PlxuICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAxOCwgbWFyZ2luOiAwIH19PnttLm5vbWJyZX08L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScsIG1hcmdpbjogMCB9fT57bS5yZWZlcmVudGV9IMK3IHttLmhvcmFyaW9zfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7bS5pdGVtcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogMTQsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJyB9fT5TaW4gbmVjZXNpZGFkZXMgY2FyZ2FkYXMuPC9wPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxhLXNjcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+PHRyPjx0aD5Qcm9kdWN0bzwvdGg+PHRoPkNhbnRpZGFkPC90aD48dGg+VXJnZW5jaWE8L3RoPjx0aD5Fc3RhZG88L3RoPjwvdHI+PC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bS5pdGVtcy5tYXAoKHAsIGopID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17an0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDUwMCB9fT57cC5ub21icmV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFidWxhclwiPntjYW50KHAuY2FudGlkYWQpfSB7cC51bmlkYWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gY2xhc3NOYW1lPVwiY2hpcFwiIHN0eWxlPXtVUkdbcC51cmdlbmNpYV19PntwLnVyZ2VuY2lhfTwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBmb250U2l6ZTogMTQsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJyB9fT57RVNUQURPW3AuZXN0YWRvXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L1BhbmVsTGF5b3V0PlxuICApXG59XG4iXSwiZmlsZSI6Ii9Vc2Vycy9iaWFuY28vRG9jdW1lbnRzL1NVUDIvc3VtYS11bi1wbGF0by1mcm9udGVuZC1tYWluICg1KS9mcm9udGVuZC9zcmMvcGFnZXMvUGFuZWxQbGFuaWxsYXMuanN4In0=