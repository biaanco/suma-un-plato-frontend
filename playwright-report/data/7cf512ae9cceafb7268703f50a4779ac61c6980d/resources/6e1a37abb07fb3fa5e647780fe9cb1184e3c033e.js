import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/PanelHistorial.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { get } from "/src/api.js";
import { cant, fechaHora } from "/src/format.js";
import PanelLayout from "/src/components/PanelLayout.jsx";
const BADGE = {
  ingreso: { background: "#ffffff", color: "#000000" },
  ajuste: { background: "#bbbbbb", color: "#000000" },
  egreso: { background: "#000000", color: "#ffffff" }
};
export default function PanelHistorial() {
  _s();
  const [datos, setDatos] = useState({ donado: [], entregado: [], movimientos: [] });
  const [tipo, setTipo] = useState("");
  function cargar(filtro) {
    const q = filtro ? "?tipo=" + filtro : "";
    get("/panel/historial" + q).then(setDatos).catch(() => {
    });
  }
  useEffect(() => {
    cargar("");
  }, []);
  function cambiarTipo(valor) {
    setTipo(valor);
    cargar(valor);
  }
  function signo(t, cantidad) {
    if (cantidad === null || cantidad === void 0) return "—";
    const n = Math.abs(Number(cantidad));
    return (t === "egreso" ? "-" : "+") + cant(n);
  }
  return /* @__PURE__ */ jsxDEV(PanelLayout, { titulo: "Historial y reportes", seccion: "historial", children: [
    /* @__PURE__ */ jsxDEV("p", { className: "medida", style: { color: "var(--tinta-suave)", marginBottom: 24 }, children: "El registro de todos los movimientos —ingreso, ajuste, egreso— y reportes simples. Es lo que sirve para rendir cuentas y para la presentación final." }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-2", style: { marginBottom: 32 }, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", children: [
        /* @__PURE__ */ jsxDEV("h3", { style: { marginTop: 0, fontSize: 16 }, children: "Qué se donó" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        datos.donado.length === 0 ? /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 14, color: "var(--tinta-suave)" }, children: "Sin datos." }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 62,
          columnNumber: 40
        }, this) : /* @__PURE__ */ jsxDEV("ul", { style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }, children: datos.donado.map((d, i) => /* @__PURE__ */ jsxDEV("li", { style: { display: "flex", justifyContent: "space-between", fontSize: 14 }, children: [
          /* @__PURE__ */ jsxDEV("span", { children: d.nombre }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
            lineNumber: 64,
            columnNumber: 130
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "tabular", style: { fontWeight: 500 }, children: [
            cant(d.total),
            " ",
            d.unidad
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
            lineNumber: 64,
            columnNumber: 153
          }, this)
        ] }, i, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 64,
          columnNumber: 43
        }, this)) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", children: [
        /* @__PURE__ */ jsxDEV("h3", { style: { marginTop: 0, fontSize: 16 }, children: "Qué se entregó" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        datos.entregado.length === 0 ? /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 14, color: "var(--tinta-suave)" }, children: "Sin datos." }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 70,
          columnNumber: 43
        }, this) : /* @__PURE__ */ jsxDEV("ul", { style: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }, children: datos.entregado.map((d, i) => /* @__PURE__ */ jsxDEV("li", { style: { display: "flex", justifyContent: "space-between", fontSize: 14 }, children: [
          /* @__PURE__ */ jsxDEV("span", { children: d.nombre }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
            lineNumber: 72,
            columnNumber: 133
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "tabular", style: { fontWeight: 500 }, children: [
            cant(d.total),
            " ",
            d.unidad
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
            lineNumber: 72,
            columnNumber: 156
          }, this)
        ] }, i, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 72,
          columnNumber: 46
        }, this)) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 71,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display", style: { fontSize: 20, margin: 0 }, children: "Movimientos" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("select", { className: "campo", value: tipo, onChange: (e) => cambiarTipo(e.target.value), style: { marginLeft: "auto", width: 180 }, children: [
        /* @__PURE__ */ jsxDEV("option", { value: "", children: "Todos" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("option", { value: "ingreso", children: "Ingresos" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("option", { value: "ajuste", children: "Ajustes" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("option", { value: "egreso", children: "Egresos" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tabla-scroll", children: /* @__PURE__ */ jsxDEV("table", { className: "tabla", children: [
      /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
        /* @__PURE__ */ jsxDEV("th", { children: "Fecha" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 90,
          columnNumber: 22
        }, this),
        /* @__PURE__ */ jsxDEV("th", { children: "Tipo" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 90,
          columnNumber: 36
        }, this),
        /* @__PURE__ */ jsxDEV("th", { children: "Alimento" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 90,
          columnNumber: 49
        }, this),
        /* @__PURE__ */ jsxDEV("th", { children: "Cantidad" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 90,
          columnNumber: 66
        }, this),
        /* @__PURE__ */ jsxDEV("th", { children: "Detalle" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 90,
          columnNumber: 83
        }, this),
        /* @__PURE__ */ jsxDEV("th", { children: "Responsable" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 90,
          columnNumber: 99
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
        lineNumber: 90,
        columnNumber: 18
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
        lineNumber: 90,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("tbody", { children: datos.movimientos.length === 0 ? /* @__PURE__ */ jsxDEV("tr", { children: /* @__PURE__ */ jsxDEV("td", { colSpan: "6", style: { textAlign: "center", color: "var(--tinta-suave)", padding: 32 }, children: "Sin movimientos." }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
        lineNumber: 93,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
        lineNumber: 93,
        columnNumber: 13
      }, this) : datos.movimientos.map(
        (m, i) => /* @__PURE__ */ jsxDEV("tr", { children: [
          /* @__PURE__ */ jsxDEV("td", { className: "tabular", style: { color: "var(--tinta-suave)", whiteSpace: "nowrap" }, children: fechaHora(m.fecha) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
            lineNumber: 96,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("span", { className: "chip", style: BADGE[m.tipo], children: m.tipo }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
            lineNumber: 97,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
            lineNumber: 97,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("td", { style: { fontWeight: 500 }, children: m.alimento || "—" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
            lineNumber: 98,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("td", { className: "tabular", style: { color: m.tipo === "egreso" ? "var(--sem-rojo)" : m.tipo === "ingreso" ? "var(--verde)" : "inherit" }, children: signo(m.tipo, m.cantidad) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
            lineNumber: 99,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("td", { style: { fontSize: 14, color: "var(--tinta-suave)" }, children: m.detalle }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
            lineNumber: 100,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("td", { style: { fontSize: 14, color: "var(--tinta-suave)" }, children: m.usuario || "—" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
            lineNumber: 101,
            columnNumber: 17
          }, this)
        ] }, i, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
          lineNumber: 95,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
        lineNumber: 91,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
      lineNumber: 89,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
_s(PanelHistorial, "ZBWjLFiWlc3oXfFcVDU1obBv26g=");
_c = PanelHistorial;
var _c;
$RefreshReg$(_c, "PanelHistorial");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelHistorial.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBQTtBQUFBO0FBQUEsaUJBQW9LO0FBQUEsVUFDcEssdUJBQUMsUUFBRyxPQUFPLEVBQUVRLFVBQVUsSUFBSTdCLE9BQU8scUJBQXFCLEdBQUlvRCxZQUFFSSxXQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFxRTtBQUFBLFVBQ3JFLHVCQUFDLFFBQUcsT0FBTyxFQUFFM0IsVUFBVSxJQUFJN0IsT0FBTyxxQkFBcUIsR0FBSW9ELFlBQUVLLFdBQVcsT0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBNEU7QUFBQSxhQU5yRWxCLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU9BO0FBQUEsTUFDRCxLQVpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFhQTtBQUFBLFNBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWdCQSxLQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBa0JBO0FBQUEsT0FwREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXFEQTtBQUVKO0FBQUNuQyxHQTlFdUJELGdCQUFjO0FBQUEsS0FBZEE7QUFBYyxJQUFBdUQ7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXQiLCJjYW50IiwiZmVjaGFIb3JhIiwiUGFuZWxMYXlvdXQiLCJCQURHRSIsImluZ3Jlc28iLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJhanVzdGUiLCJlZ3Jlc28iLCJQYW5lbEhpc3RvcmlhbCIsIl9zIiwiZGF0b3MiLCJzZXREYXRvcyIsImRvbmFkbyIsImVudHJlZ2FkbyIsIm1vdmltaWVudG9zIiwidGlwbyIsInNldFRpcG8iLCJjYXJnYXIiLCJmaWx0cm8iLCJxIiwidGhlbiIsImNhdGNoIiwiY2FtYmlhclRpcG8iLCJ2YWxvciIsInNpZ25vIiwidCIsImNhbnRpZGFkIiwidW5kZWZpbmVkIiwibiIsIk1hdGgiLCJhYnMiLCJOdW1iZXIiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsImxlbmd0aCIsImxpc3RTdHlsZSIsInBhZGRpbmciLCJtYXJnaW4iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsIm1hcCIsImQiLCJpIiwianVzdGlmeUNvbnRlbnQiLCJub21icmUiLCJmb250V2VpZ2h0IiwidG90YWwiLCJ1bmlkYWQiLCJhbGlnbkl0ZW1zIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luTGVmdCIsIndpZHRoIiwidGV4dEFsaWduIiwibSIsIndoaXRlU3BhY2UiLCJmZWNoYSIsImFsaW1lbnRvIiwiZGV0YWxsZSIsInVzdWFyaW8iLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJQYW5lbEhpc3RvcmlhbC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vYXBpJ1xuaW1wb3J0IHsgY2FudCwgZmVjaGFIb3JhIH0gZnJvbSAnLi4vZm9ybWF0J1xuaW1wb3J0IFBhbmVsTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvUGFuZWxMYXlvdXQnXG5cbmNvbnN0IEJBREdFID0ge1xuICBpbmdyZXNvOiB7IGJhY2tncm91bmQ6ICcjZmZmZmZmJywgY29sb3I6ICcjMDAwMDAwJyB9LFxuICBhanVzdGU6IHsgYmFja2dyb3VuZDogJyNiYmJiYmInLCBjb2xvcjogJyMwMDAwMDAnIH0sXG4gIGVncmVzbzogeyBiYWNrZ3JvdW5kOiAnIzAwMDAwMCcsIGNvbG9yOiAnI2ZmZmZmZicgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYW5lbEhpc3RvcmlhbCgpIHtcbiAgY29uc3QgW2RhdG9zLCBzZXREYXRvc10gPSB1c2VTdGF0ZSh7IGRvbmFkbzogW10sIGVudHJlZ2FkbzogW10sIG1vdmltaWVudG9zOiBbXSB9KVxuICBjb25zdCBbdGlwbywgc2V0VGlwb10gPSB1c2VTdGF0ZSgnJylcblxuICBmdW5jdGlvbiBjYXJnYXIoZmlsdHJvKSB7XG4gICAgY29uc3QgcSA9IGZpbHRybyA/ICc/dGlwbz0nICsgZmlsdHJvIDogJydcbiAgICBnZXQoJy9wYW5lbC9oaXN0b3JpYWwnICsgcSkudGhlbihzZXREYXRvcykuY2F0Y2goKCkgPT4ge30pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4geyBjYXJnYXIoJycpIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIGNhbWJpYXJUaXBvKHZhbG9yKSB7XG4gICAgc2V0VGlwbyh2YWxvcilcbiAgICBjYXJnYXIodmFsb3IpXG4gIH1cblxuICBmdW5jdGlvbiBzaWdubyh0LCBjYW50aWRhZCkge1xuICAgIGlmIChjYW50aWRhZCA9PT0gbnVsbCB8fCBjYW50aWRhZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ+KAlCdcbiAgICBjb25zdCBuID0gTWF0aC5hYnMoTnVtYmVyKGNhbnRpZGFkKSlcbiAgICByZXR1cm4gKHQgPT09ICdlZ3Jlc28nID8gJy0nIDogJysnKSArIGNhbnQobilcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhbmVsTGF5b3V0IHRpdHVsbz1cIkhpc3RvcmlhbCB5IHJlcG9ydGVzXCIgc2VjY2lvbj1cImhpc3RvcmlhbFwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWVkaWRhXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBtYXJnaW5Cb3R0b206IDI0IH19PlxuICAgICAgICBFbCByZWdpc3RybyBkZSB0b2RvcyBsb3MgbW92aW1pZW50b3Mg4oCUaW5ncmVzbywgYWp1c3RlLCBlZ3Jlc2/igJQgeSByZXBvcnRlcyBzaW1wbGVzLiBFcyBsbyBxdWUgc2lydmUgcGFyYSByZW5kaXIgY3VlbnRhcyB5IHBhcmEgbGEgcHJlc2VudGFjacOzbiBmaW5hbC5cbiAgICAgIDwvcD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtMlwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMzIgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFyamV0YSB0YXJqZXRhLXBhZFwiPlxuICAgICAgICAgIDxoMyBzdHlsZT17eyBtYXJnaW5Ub3A6IDAsIGZvbnRTaXplOiAxNiB9fT5RdcOpIHNlIGRvbsOzPC9oMz5cbiAgICAgICAgICB7ZGF0b3MuZG9uYWRvLmxlbmd0aCA9PT0gMCA/IDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknIH19PlNpbiBkYXRvcy48L3A+IDogKFxuICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnLCBwYWRkaW5nOiAwLCBtYXJnaW46IDAsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogNiB9fT5cbiAgICAgICAgICAgICAge2RhdG9zLmRvbmFkby5tYXAoKGQsIGkpID0+IDxsaSBrZXk9e2l9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgZm9udFNpemU6IDE0IH19PjxzcGFuPntkLm5vbWJyZX08L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwidGFidWxhclwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDUwMCB9fT57Y2FudChkLnRvdGFsKX0ge2QudW5pZGFkfTwvc3Bhbj48L2xpPil9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhcmpldGEgdGFyamV0YS1wYWRcIj5cbiAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luVG9wOiAwLCBmb250U2l6ZTogMTYgfX0+UXXDqSBzZSBlbnRyZWfDszwvaDM+XG4gICAgICAgICAge2RhdG9zLmVudHJlZ2Fkby5sZW5ndGggPT09IDAgPyA8cCBzdHlsZT17eyBmb250U2l6ZTogMTQsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJyB9fT5TaW4gZGF0b3MuPC9wPiA6IChcbiAgICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJywgcGFkZGluZzogMCwgbWFyZ2luOiAwLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDYgfX0+XG4gICAgICAgICAgICAgIHtkYXRvcy5lbnRyZWdhZG8ubWFwKChkLCBpKSA9PiA8bGkga2V5PXtpfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGZvbnRTaXplOiAxNCB9fT48c3Bhbj57ZC5ub21icmV9PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInRhYnVsYXJcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA1MDAgfX0+e2NhbnQoZC50b3RhbCl9IHtkLnVuaWRhZH08L3NwYW4+PC9saT4pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogMTIsIG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWRpc3BsYXlcIiBzdHlsZT17eyBmb250U2l6ZTogMjAsIG1hcmdpbjogMCB9fT5Nb3ZpbWllbnRvczwvaDI+XG4gICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiY2FtcG9cIiB2YWx1ZT17dGlwb30gb25DaGFuZ2U9e2UgPT4gY2FtYmlhclRpcG8oZS50YXJnZXQudmFsdWUpfSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycsIHdpZHRoOiAxODAgfX0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlRvZG9zPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImluZ3Jlc29cIj5JbmdyZXNvczwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhanVzdGVcIj5BanVzdGVzPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVncmVzb1wiPkVncmVzb3M8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXJqZXRhIHRhYmxhLXNjcm9sbFwiPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGFcIj5cbiAgICAgICAgICA8dGhlYWQ+PHRyPjx0aD5GZWNoYTwvdGg+PHRoPlRpcG88L3RoPjx0aD5BbGltZW50bzwvdGg+PHRoPkNhbnRpZGFkPC90aD48dGg+RGV0YWxsZTwvdGg+PHRoPlJlc3BvbnNhYmxlPC90aD48L3RyPjwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge2RhdG9zLm1vdmltaWVudG9zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgPHRyPjx0ZCBjb2xTcGFuPVwiNlwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJywgcGFkZGluZzogMzIgfX0+U2luIG1vdmltaWVudG9zLjwvdGQ+PC90cj5cbiAgICAgICAgICAgICkgOiBkYXRvcy5tb3ZpbWllbnRvcy5tYXAoKG0sIGkpID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYnVsYXJcIiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PntmZWNoYUhvcmEobS5mZWNoYSl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gY2xhc3NOYW1lPVwiY2hpcFwiIHN0eWxlPXtCQURHRVttLnRpcG9dfT57bS50aXBvfTwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBmb250V2VpZ2h0OiA1MDAgfX0+e20uYWxpbWVudG8gfHwgJ+KAlCd9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFidWxhclwiIHN0eWxlPXt7IGNvbG9yOiBtLnRpcG8gPT09ICdlZ3Jlc28nID8gJ3ZhcigtLXNlbS1yb2pvKScgOiAobS50aXBvID09PSAnaW5ncmVzbycgPyAndmFyKC0tdmVyZGUpJyA6ICdpbmhlcml0JykgfX0+e3NpZ25vKG0udGlwbywgbS5jYW50aWRhZCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScgfX0+e20uZGV0YWxsZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBmb250U2l6ZTogMTQsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJyB9fT57bS51c3VhcmlvIHx8ICfigJQnfTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9QYW5lbExheW91dD5cbiAgKVxufVxuIl0sImZpbGUiOiIvVXNlcnMvYmlhbmNvL0RvY3VtZW50cy9TVVAyL3N1bWEtdW4tcGxhdG8tZnJvbnRlbmQtbWFpbiAoNSkvZnJvbnRlbmQvc3JjL3BhZ2VzL1BhbmVsSGlzdG9yaWFsLmpzeCJ9