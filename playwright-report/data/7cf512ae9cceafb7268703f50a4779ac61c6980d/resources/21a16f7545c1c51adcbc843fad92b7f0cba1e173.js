import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/PanelEntrega.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { get, post } from "/src/api.js";
import { usuarioActual } from "/src/auth.js";
import { cant, fecha, fechaHora, claseSemaforo } from "/src/format.js";
import PanelLayout from "/src/components/PanelLayout.jsx";
import Icono from "/src/components/Icono.jsx";
export default function PanelEntrega() {
  _s();
  const usuario = usuarioActual();
  const [merenderos, setMerenderos] = useState([]);
  const [sel, setSel] = useState("");
  const [necesidades, setNecesidades] = useState([]);
  const [cantidades, setCantidades] = useState({});
  const [pendientes, setPendientes] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  function cargarPendientes() {
    get("/panel/entrega/pendientes").then(setPendientes).catch(() => {
    });
  }
  useEffect(() => {
    get("/merenderos").then((l) => setMerenderos(l.filter((m) => m.activo))).catch(() => {
    });
    cargarPendientes();
  }, []);
  function elegir(id) {
    setSel(id);
    setNecesidades([]);
    setMensaje("");
    if (!id) return;
    get("/panel/entrega/necesidades/" + id).then((lista) => {
      setNecesidades(lista);
      const inicial = {};
      lista.forEach((n) => {
        inicial[n.alimentoId] = n.sugerido;
      });
      setCantidades(inicial);
    }).catch(() => {
    });
  }
  async function preparar() {
    const items = necesidades.map((n) => ({ alimentoId: n.alimentoId, cantidad: Number(cantidades[n.alimentoId]) || 0 }));
    setError("");
    try {
      await post("/panel/entrega/preparar", { merenderoId: Number(sel), usuarioId: usuario.id, items });
      setMensaje("Entrega preparada por FEFO. El stock ya se descontó. Esperando que el merendero confirme la recepción.");
      setNecesidades([]);
      setSel("");
      cargarPendientes();
    } catch (err) {
      setError(err.message);
    }
  }
  return /* @__PURE__ */ jsxDEV(PanelLayout, { titulo: "Preparar entrega", seccion: "entrega", children: [
    /* @__PURE__ */ jsxDEV("p", { className: "medida", style: { color: "var(--tinta-suave)", marginBottom: 24 }, children: [
      "Elegí un merendero, mirá lo que pidió y el sistema te sugiere los lotes por ",
      /* @__PURE__ */ jsxDEV("strong", { children: "FEFO" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
        lineNumber: 76,
        columnNumber: 85
      }, this),
      ": los próximos a vencer salen primero. Al confirmar, el stock se descuenta solo."
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    mensaje && /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-ok", children: mensaje }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
      lineNumber: 78,
      columnNumber: 19
    }, this),
    error && /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-error", children: error }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
      lineNumber: 79,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 32 }, children: [
      /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Merendero" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("select", { className: "campo", value: sel, onChange: (e) => elegir(e.target.value), style: { maxWidth: 320 }, children: [
        /* @__PURE__ */ jsxDEV("option", { value: "", children: "Elegí un merendero…" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        merenderos.map((m) => /* @__PURE__ */ jsxDEV("option", { value: m.id, children: m.nombre }, m.id, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
          lineNumber: 85,
          columnNumber: 34
        }, this))
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    sel && necesidades.length === 0 && /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", style: { textAlign: "center", color: "var(--tinta-suave)", marginBottom: 32 }, children: "Este merendero no tiene necesidades pendientes." }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    sel && necesidades.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", style: { marginBottom: 32 }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 24 }, children: necesidades.map(
        (n) => /* @__PURE__ */ jsxDEV("div", { style: { border: "1px solid var(--borde)", borderRadius: 12, padding: 16 }, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 12 }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { color: "var(--naranja-hover)" }, children: /* @__PURE__ */ jsxDEV(Icono, { nombre: n.icono }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
              lineNumber: 99,
              columnNumber: 67
            }, this) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
              lineNumber: 99,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { fontWeight: 600, fontSize: 18 }, children: n.nombre }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
              lineNumber: 100,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 14, color: "var(--tinta-suave)" }, children: [
              "Pide ",
              /* @__PURE__ */ jsxDEV("strong", { className: "tabular", children: [
                cant(n.pedido),
                " ",
                n.unidad
              ] }, void 0, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
                lineNumber: 101,
                columnNumber: 84
              }, this),
              " · disponible ",
              /* @__PURE__ */ jsxDEV("strong", { className: "tabular", children: cant(n.disponible) }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
                lineNumber: 101,
                columnNumber: 162
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
              lineNumber: 101,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }, children: [
              /* @__PURE__ */ jsxDEV("label", { style: { fontSize: 14, color: "var(--tinta-suave)" }, children: "Entregar" }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
                lineNumber: 103,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("input", { type: "number", min: "0", step: "0.5", max: n.disponible, value: cantidades[n.alimentoId] ?? 0, onChange: (e) => setCantidades({ ...cantidades, [n.alimentoId]: e.target.value }), className: "campo tabular", style: { width: 96, padding: "6px 8px" } }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
                lineNumber: 104,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 14, color: "var(--tinta-suave)" }, children: n.unidad }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
                lineNumber: 105,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
              lineNumber: 102,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
            lineNumber: 98,
            columnNumber: 17
          }, this),
          n.lotes.length > 0 ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "var(--tinta-suave)", marginBottom: 8 }, children: "Lotes sugeridos por vencimiento (FEFO):" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
              lineNumber: 110,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 }, children: n.lotes.map(
              (l, i) => /* @__PURE__ */ jsxDEV("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, border: i === 0 ? "1px solid var(--naranja)" : "1px solid var(--borde)", borderRadius: 9999, padding: "4px 10px" }, children: [
                /* @__PURE__ */ jsxDEV("span", { className: claseSemaforo(l.semaforo.clase) }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
                  lineNumber: 114,
                  columnNumber: 27
                }, this),
                "#",
                l.id,
                " · ",
                cant(l.cantidad),
                " ",
                n.unidad,
                " · ",
                l.vencimiento ? fecha(l.vencimiento) : "sin venc."
              ] }, l.id, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
                lineNumber: 113,
                columnNumber: 17
              }, this)
            ) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
              lineNumber: 111,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
            lineNumber: 109,
            columnNumber: 13
          }, this) : /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 14, color: "var(--sem-rojo)" }, children: "Sin stock disponible de este alimento." }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
            lineNumber: 120,
            columnNumber: 13
          }, this)
        ] }, n.alimentoId, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
          lineNumber: 97,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
        lineNumber: 95,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 24 }, children: /* @__PURE__ */ jsxDEV("button", { className: "btn-verde", onClick: preparar, children: "Confirmar entrega (FEFO)" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
        lineNumber: 125,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
        lineNumber: 124,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display", style: { fontSize: 20, marginBottom: 16 }, children: "Entregas esperando recepción" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      pendientes.length === 0 ? /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--tinta-suave)", fontSize: 14 }, children: "No hay entregas pendientes de confirmar." }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
        lineNumber: 133,
        columnNumber: 9
      }, this) : /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tabla-scroll", children: /* @__PURE__ */ jsxDEV("table", { className: "tabla", children: [
        /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
          /* @__PURE__ */ jsxDEV("th", { children: "Entrega" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
            lineNumber: 137,
            columnNumber: 26
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Merendero" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
            lineNumber: 137,
            columnNumber: 42
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Preparada" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
            lineNumber: 137,
            columnNumber: 60
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Estado" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
            lineNumber: 137,
            columnNumber: 78
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
          lineNumber: 137,
          columnNumber: 22
        }, this) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
          lineNumber: 137,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("tbody", { children: pendientes.map(
          (e) => /* @__PURE__ */ jsxDEV("tr", { children: [
            /* @__PURE__ */ jsxDEV("td", { style: { fontWeight: 500 }, children: [
              "#",
              e.id
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
              lineNumber: 141,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("td", { children: e.merendero }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
              lineNumber: 142,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("td", { style: { color: "var(--tinta-suave)" }, children: fechaHora(e.creadoEn) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
              lineNumber: 143,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("span", { className: "chip chip-suave", children: "Preparada" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
              lineNumber: 144,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
              lineNumber: 144,
              columnNumber: 21
            }, this)
          ] }, e.id, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
            lineNumber: 140,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
          lineNumber: 138,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
        lineNumber: 136,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
        lineNumber: 135,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
      lineNumber: 130,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
_s(PanelEntrega, "Y5KMc8bo7g4QKcVPKqrRIaXw+Sc=");
_c = PanelEntrega;
var _c;
$RefreshReg$(_c, "PanelEntrega");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelEntrega.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUE7QUFBQSxpQkFLQTtBQUFBLFFBQ0QsS0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBU0E7QUFBQSxXQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFZQSxLQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFjQTtBQUFBLFNBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FxQkE7QUFBQSxPQTdFRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBOEVBO0FBRUo7QUFBQ3hCLEdBL0h1QkQsY0FBWTtBQUFBLEtBQVpBO0FBQVksSUFBQTBFO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0IiwicG9zdCIsInVzdWFyaW9BY3R1YWwiLCJjYW50IiwiZmVjaGEiLCJmZWNoYUhvcmEiLCJjbGFzZVNlbWFmb3JvIiwiUGFuZWxMYXlvdXQiLCJJY29ubyIsIlBhbmVsRW50cmVnYSIsIl9zIiwidXN1YXJpbyIsIm1lcmVuZGVyb3MiLCJzZXRNZXJlbmRlcm9zIiwic2VsIiwic2V0U2VsIiwibmVjZXNpZGFkZXMiLCJzZXROZWNlc2lkYWRlcyIsImNhbnRpZGFkZXMiLCJzZXRDYW50aWRhZGVzIiwicGVuZGllbnRlcyIsInNldFBlbmRpZW50ZXMiLCJtZW5zYWplIiwic2V0TWVuc2FqZSIsImVycm9yIiwic2V0RXJyb3IiLCJjYXJnYXJQZW5kaWVudGVzIiwidGhlbiIsImNhdGNoIiwibCIsImZpbHRlciIsIm0iLCJhY3Rpdm8iLCJlbGVnaXIiLCJpZCIsImxpc3RhIiwiaW5pY2lhbCIsImZvckVhY2giLCJuIiwiYWxpbWVudG9JZCIsInN1Z2VyaWRvIiwicHJlcGFyYXIiLCJpdGVtcyIsIm1hcCIsImNhbnRpZGFkIiwiTnVtYmVyIiwibWVyZW5kZXJvSWQiLCJ1c3VhcmlvSWQiLCJlcnIiLCJtZXNzYWdlIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXhXaWR0aCIsIm5vbWJyZSIsImxlbmd0aCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImZsZXhXcmFwIiwiYWxpZ25JdGVtcyIsImljb25vIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwicGVkaWRvIiwidW5pZGFkIiwiZGlzcG9uaWJsZSIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImxvdGVzIiwiaSIsInNlbWFmb3JvIiwiY2xhc2UiLCJ2ZW5jaW1pZW50byIsIm1hcmdpblRvcCIsIm1lcmVuZGVybyIsImNyZWFkb0VuIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUGFuZWxFbnRyZWdhLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tICcuLi9hcGknXG5pbXBvcnQgeyB1c3VhcmlvQWN0dWFsIH0gZnJvbSAnLi4vYXV0aCdcbmltcG9ydCB7IGNhbnQsIGZlY2hhLCBmZWNoYUhvcmEsIGNsYXNlU2VtYWZvcm8gfSBmcm9tICcuLi9mb3JtYXQnXG5pbXBvcnQgUGFuZWxMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9QYW5lbExheW91dCdcbmltcG9ydCBJY29ubyBmcm9tICcuLi9jb21wb25lbnRzL0ljb25vJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYW5lbEVudHJlZ2EoKSB7XG4gIGNvbnN0IHVzdWFyaW8gPSB1c3VhcmlvQWN0dWFsKClcbiAgY29uc3QgW21lcmVuZGVyb3MsIHNldE1lcmVuZGVyb3NdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtzZWwsIHNldFNlbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW25lY2VzaWRhZGVzLCBzZXROZWNlc2lkYWRlc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2NhbnRpZGFkZXMsIHNldENhbnRpZGFkZXNdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFtwZW5kaWVudGVzLCBzZXRQZW5kaWVudGVzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbWVuc2FqZSwgc2V0TWVuc2FqZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcblxuICBmdW5jdGlvbiBjYXJnYXJQZW5kaWVudGVzKCkge1xuICAgIGdldCgnL3BhbmVsL2VudHJlZ2EvcGVuZGllbnRlcycpLnRoZW4oc2V0UGVuZGllbnRlcykuY2F0Y2goKCkgPT4ge30pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldCgnL21lcmVuZGVyb3MnKS50aGVuKGwgPT4gc2V0TWVyZW5kZXJvcyhsLmZpbHRlcihtID0+IG0uYWN0aXZvKSkpLmNhdGNoKCgpID0+IHt9KVxuICAgIGNhcmdhclBlbmRpZW50ZXMoKVxuICB9LCBbXSlcblxuICBmdW5jdGlvbiBlbGVnaXIoaWQpIHtcbiAgICBzZXRTZWwoaWQpXG4gICAgc2V0TmVjZXNpZGFkZXMoW10pXG4gICAgc2V0TWVuc2FqZSgnJylcbiAgICBpZiAoIWlkKSByZXR1cm5cbiAgICBnZXQoJy9wYW5lbC9lbnRyZWdhL25lY2VzaWRhZGVzLycgKyBpZCkudGhlbihsaXN0YSA9PiB7XG4gICAgICBzZXROZWNlc2lkYWRlcyhsaXN0YSlcbiAgICAgIGNvbnN0IGluaWNpYWwgPSB7fVxuICAgICAgbGlzdGEuZm9yRWFjaChuID0+IHsgaW5pY2lhbFtuLmFsaW1lbnRvSWRdID0gbi5zdWdlcmlkbyB9KVxuICAgICAgc2V0Q2FudGlkYWRlcyhpbmljaWFsKVxuICAgIH0pLmNhdGNoKCgpID0+IHt9KVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gcHJlcGFyYXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBuZWNlc2lkYWRlcy5tYXAobiA9PiAoeyBhbGltZW50b0lkOiBuLmFsaW1lbnRvSWQsIGNhbnRpZGFkOiBOdW1iZXIoY2FudGlkYWRlc1tuLmFsaW1lbnRvSWRdKSB8fCAwIH0pKVxuICAgIHNldEVycm9yKCcnKVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBwb3N0KCcvcGFuZWwvZW50cmVnYS9wcmVwYXJhcicsIHsgbWVyZW5kZXJvSWQ6IE51bWJlcihzZWwpLCB1c3VhcmlvSWQ6IHVzdWFyaW8uaWQsIGl0ZW1zIH0pXG4gICAgICBzZXRNZW5zYWplKCdFbnRyZWdhIHByZXBhcmFkYSBwb3IgRkVGTy4gRWwgc3RvY2sgeWEgc2UgZGVzY29udMOzLiBFc3BlcmFuZG8gcXVlIGVsIG1lcmVuZGVybyBjb25maXJtZSBsYSByZWNlcGNpw7NuLicpXG4gICAgICBzZXROZWNlc2lkYWRlcyhbXSlcbiAgICAgIHNldFNlbCgnJylcbiAgICAgIGNhcmdhclBlbmRpZW50ZXMoKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFuZWxMYXlvdXQgdGl0dWxvPVwiUHJlcGFyYXIgZW50cmVnYVwiIHNlY2Npb249XCJlbnRyZWdhXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtZWRpZGFcIiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScsIG1hcmdpbkJvdHRvbTogMjQgfX0+XG4gICAgICAgIEVsZWfDrSB1biBtZXJlbmRlcm8sIG1pcsOhIGxvIHF1ZSBwaWRpw7MgeSBlbCBzaXN0ZW1hIHRlIHN1Z2llcmUgbG9zIGxvdGVzIHBvciA8c3Ryb25nPkZFRk88L3N0cm9uZz46IGxvcyBwcsOzeGltb3MgYSB2ZW5jZXIgc2FsZW4gcHJpbWVyby4gQWwgY29uZmlybWFyLCBlbCBzdG9jayBzZSBkZXNjdWVudGEgc29sby5cbiAgICAgIDwvcD5cbiAgICAgIHttZW5zYWplICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRhIGFsZXJ0YS1va1wiPnttZW5zYWplfTwvZGl2Pn1cbiAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0YSBhbGVydGEtZXJyb3JcIj57ZXJyb3J9PC9kaXY+fVxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMzIgfX0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1jYW1wb1wiPk1lcmVuZGVybzwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiY2FtcG9cIiB2YWx1ZT17c2VsfSBvbkNoYW5nZT17ZSA9PiBlbGVnaXIoZS50YXJnZXQudmFsdWUpfSBzdHlsZT17eyBtYXhXaWR0aDogMzIwIH19PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5FbGVnw60gdW4gbWVyZW5kZXJv4oCmPC9vcHRpb24+XG4gICAgICAgICAge21lcmVuZGVyb3MubWFwKG0gPT4gPG9wdGlvbiBrZXk9e20uaWR9IHZhbHVlPXttLmlkfT57bS5ub21icmV9PC9vcHRpb24+KX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cblxuICAgICAge3NlbCAmJiBuZWNlc2lkYWRlcy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhcmpldGEgdGFyamV0YS1wYWRcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScsIG1hcmdpbkJvdHRvbTogMzIgfX0+RXN0ZSBtZXJlbmRlcm8gbm8gdGllbmUgbmVjZXNpZGFkZXMgcGVuZGllbnRlcy48L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtzZWwgJiYgbmVjZXNpZGFkZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFyamV0YSB0YXJqZXRhLXBhZFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMzIgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDI0IH19PlxuICAgICAgICAgICAge25lY2VzaWRhZGVzLm1hcChuID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e24uYWxpbWVudG9JZH0gc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIHZhcigtLWJvcmRlKScsIGJvcmRlclJhZGl1czogMTIsIHBhZGRpbmc6IDE2IH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAxMiwgbWFyZ2luQm90dG9tOiAxMiB9fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tbmFyYW5qYS1ob3ZlciknIH19PjxJY29ubyBub21icmU9e24uaWNvbm99IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBmb250U2l6ZTogMTggfX0+e24ubm9tYnJlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknIH19PlBpZGUgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWJ1bGFyXCI+e2NhbnQobi5wZWRpZG8pfSB7bi51bmlkYWR9PC9zdHJvbmc+IMK3IGRpc3BvbmlibGUgPHN0cm9uZyBjbGFzc05hbWU9XCJ0YWJ1bGFyXCI+e2NhbnQobi5kaXNwb25pYmxlKX08L3N0cm9uZz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICdhdXRvJywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA4IH19PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScgfX0+RW50cmVnYXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBzdGVwPVwiMC41XCIgbWF4PXtuLmRpc3BvbmlibGV9IHZhbHVlPXtjYW50aWRhZGVzW24uYWxpbWVudG9JZF0gPz8gMH0gb25DaGFuZ2U9e2UgPT4gc2V0Q2FudGlkYWRlcyh7IC4uLmNhbnRpZGFkZXMsIFtuLmFsaW1lbnRvSWRdOiBlLnRhcmdldC52YWx1ZSB9KX0gY2xhc3NOYW1lPVwiY2FtcG8gdGFidWxhclwiIHN0eWxlPXt7IHdpZHRoOiA5NiwgcGFkZGluZzogJzZweCA4cHgnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknIH19PntuLnVuaWRhZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7bi5sb3Rlcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJywgbWFyZ2luQm90dG9tOiA4IH19PkxvdGVzIHN1Z2VyaWRvcyBwb3IgdmVuY2ltaWVudG8gKEZFRk8pOjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJywgZ2FwOiA4IH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtuLmxvdGVzLm1hcCgobCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtsLmlkfSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA2LCBmb250U2l6ZTogMTIsIGJvcmRlcjogaSA9PT0gMCA/ICcxcHggc29saWQgdmFyKC0tbmFyYW5qYSknIDogJzFweCBzb2xpZCB2YXIoLS1ib3JkZSknLCBib3JkZXJSYWRpdXM6IDk5OTksIHBhZGRpbmc6ICc0cHggMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc2VTZW1hZm9ybyhsLnNlbWFmb3JvLmNsYXNlKX0+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAje2wuaWR9IMK3IHtjYW50KGwuY2FudGlkYWQpfSB7bi51bmlkYWR9IMK3IHtsLnZlbmNpbWllbnRvID8gZmVjaGEobC52ZW5jaW1pZW50bykgOiAnc2luIHZlbmMuJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApIDogKDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICd2YXIoLS1zZW0tcm9qbyknIH19PlNpbiBzdG9jayBkaXNwb25pYmxlIGRlIGVzdGUgYWxpbWVudG8uPC9wPil9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDI0IH19PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tdmVyZGVcIiBvbkNsaWNrPXtwcmVwYXJhcn0+Q29uZmlybWFyIGVudHJlZ2EgKEZFRk8pPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWRpc3BsYXlcIiBzdHlsZT17eyBmb250U2l6ZTogMjAsIG1hcmdpbkJvdHRvbTogMTYgfX0+RW50cmVnYXMgZXNwZXJhbmRvIHJlY2VwY2nDs248L2gyPlxuICAgICAgICB7cGVuZGllbnRlcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBmb250U2l6ZTogMTQgfX0+Tm8gaGF5IGVudHJlZ2FzIHBlbmRpZW50ZXMgZGUgY29uZmlybWFyLjwvcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhcmpldGEgdGFibGEtc2Nyb2xsXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGFcIj5cbiAgICAgICAgICAgICAgPHRoZWFkPjx0cj48dGg+RW50cmVnYTwvdGg+PHRoPk1lcmVuZGVybzwvdGg+PHRoPlByZXBhcmFkYTwvdGg+PHRoPkVzdGFkbzwvdGg+PC90cj48L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge3BlbmRpZW50ZXMubWFwKGUgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17ZS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBmb250V2VpZ2h0OiA1MDAgfX0+I3tlLmlkfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZS5tZXJlbmRlcm99PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJyB9fT57ZmVjaGFIb3JhKGUuY3JlYWRvRW4pfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48c3BhbiBjbGFzc05hbWU9XCJjaGlwIGNoaXAtc3VhdmVcIj5QcmVwYXJhZGE8L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvUGFuZWxMYXlvdXQ+XG4gIClcbn1cbiJdLCJmaWxlIjoiL1VzZXJzL2JpYW5jby9Eb2N1bWVudHMvU1VQMi9zdW1hLXVuLXBsYXRvLWZyb250ZW5kLW1haW4gKDUpL2Zyb250ZW5kL3NyYy9wYWdlcy9QYW5lbEVudHJlZ2EuanN4In0=