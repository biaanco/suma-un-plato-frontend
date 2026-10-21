import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/PanelStock.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useRef = __vite__cjsImport3_react["useRef"]; const useState = __vite__cjsImport3_react["useState"];
import { get, post } from "/src/api.js";
import { usuarioActual } from "/src/auth.js";
import { cant, fecha, colorSemaforo, claseSemaforo } from "/src/format.js";
import PanelLayout from "/src/components/PanelLayout.jsx";
import Icono from "/src/components/Icono.jsx";
import "/src/pages/PanelDonaciones.css";
import "/src/pages/PanelStock.css";
const ESPERA_VACIO_MS = 5e3;
const DESTELLO_MS = 1200;
const ANCHOS_PRODUCTO = [150, 110, 170, 125, 140, 100];
const ANCHOS_ORIGEN = [96, 84, 110, 90, 100, 80];
function FilasEsqueleto({ cantidad = 6 }) {
  return Array.from({ length: cantidad }).map(
    (_, i) => /* @__PURE__ */ jsxDEV("tr", { className: "esq-fila", style: { "--i": i }, "aria-hidden": "true", children: [
      /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { className: "esq-celda-producto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "esq esq-icono" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "esq esq-linea", style: { width: ANCHOS_PRODUCTO[i % 6] } }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 43,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { className: "esq esq-linea", style: { width: 36 } }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 46,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { className: "esq esq-linea", style: { width: 72 } }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 47,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 47,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { className: "esq esq-linea esq-linea-chica", style: { width: ANCHOS_ORIGEN[i % 6] } }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 48,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 48,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { className: "esq esq-linea", style: { width: 80 } }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 49,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 49,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { className: "esq-celda-producto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "esq esq-semaforo" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "esq esq-linea esq-linea-chica", style: { width: 70 } }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 53,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 50,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { className: "esq-celda-producto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "esq esq-input" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "esq esq-boton" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 57,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 56,
        columnNumber: 7
      }, this)
    ] }, i, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
      lineNumber: 39,
      columnNumber: 3
    }, this)
  );
}
_c = FilasEsqueleto;
export default function PanelStock() {
  _s();
  const usuario = usuarioActual();
  const [lotes, setLotes] = useState([]);
  const [cat, setCat] = useState("");
  const [q, setQ] = useState("");
  const [ajustes, setAjustes] = useState({});
  const [estado, setEstado] = useState("cargando");
  const [errorCarga, setErrorCarga] = useState("");
  const [errorAjuste, setErrorAjuste] = useState("");
  const [guardando, setGuardando] = useState(null);
  const [ajustado, setAjustado] = useState(null);
  const pedidoRef = useRef(0);
  const montadoRef = useRef(true);
  const esperaRef = useRef(null);
  const destelloRef = useRef(null);
  useEffect(() => {
    montadoRef.current = true;
    cargar({ esperaVacio: true });
    return () => {
      montadoRef.current = false;
      clearTimeout(esperaRef.current);
      clearTimeout(destelloRef.current);
    };
  }, []);
  function vigente(id) {
    return montadoRef.current && id === pedidoRef.current;
  }
  function cargar({ esperaVacio = false, silencioso = false } = {}) {
    const id = ++pedidoRef.current;
    clearTimeout(esperaRef.current);
    const inicio = Date.now();
    if (!silencioso) {
      setEstado("cargando");
      setErrorCarga("");
    }
    const params = new URLSearchParams();
    if (cat) params.set("cat", cat);
    if (q.trim()) params.set("q", q.trim());
    return get("/panel/stock?" + params.toString()).then((datos) => {
      if (!vigente(id)) return;
      const lista = Array.isArray(datos) ? datos : [];
      const mostrar = () => {
        if (!vigente(id)) return;
        setLotes(lista);
        if (!silencioso) setAjustes({});
        setEstado("listo");
      };
      const restante = esperaVacio && lista.length === 0 ? Math.max(0, ESPERA_VACIO_MS - (Date.now() - inicio)) : 0;
      if (restante > 0) esperaRef.current = setTimeout(mostrar, restante);
      else
        mostrar();
    }).catch((err) => {
      if (!vigente(id) || silencioso) return;
      setErrorCarga(err?.message || "No se pudo cargar el stock.");
      setEstado("error");
    });
  }
  function filtrar(e) {
    e.preventDefault();
    cargar();
  }
  function editar(loteId, valor) {
    setAjustes((prev) => ({ ...prev, [loteId]: valor }));
  }
  function tieneCambio(lote) {
    const v = ajustes[lote.id];
    return v !== void 0 && v !== "" && Number(v) !== lote.cantidad;
  }
  async function ajustar(loteId) {
    const valor = Number(ajustes[loteId]);
    if (!Number.isFinite(valor) || valor < 0) {
      setErrorAjuste("Ingresá una cantidad válida para el lote #" + loteId + ".");
      return;
    }
    setErrorAjuste("");
    setGuardando(loteId);
    try {
      await post("/panel/stock/ajustar", { loteId, cantidad: valor, usuarioId: usuario.id });
      if (!montadoRef.current) return;
      setLotes((prev) => prev.map((l) => l.id === loteId ? { ...l, cantidad: valor } : l));
      setAjustes((prev) => {
        const copia = { ...prev };
        delete copia[loteId];
        return copia;
      });
      setAjustado(loteId);
      clearTimeout(destelloRef.current);
      destelloRef.current = setTimeout(() => setAjustado(null), DESTELLO_MS);
      cargar({ silencioso: true });
    } catch (err) {
      if (montadoRef.current) setErrorAjuste(err?.message || "No se pudo ajustar el lote.");
    } finally {
      if (montadoRef.current) setGuardando(null);
    }
  }
  const total = lotes.reduce((suma, l) => suma + l.cantidad, 0);
  const cargando = estado === "cargando";
  return /* @__PURE__ */ jsxDEV(PanelLayout, { titulo: "Stock del depósito", seccion: "stock", children: [
    /* @__PURE__ */ jsxDEV("p", { className: "medida", style: { color: "var(--tinta-suave)", marginBottom: 24 }, children: "El inventario vivo, lote por lote. Filtrá por categoría o buscá un producto. Si hubo un error de conteo, corregí un lote acá mismo y queda registrado el ajuste." }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
      lineNumber: 184,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("form", { onSubmit: filtrar, style: { display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-end", marginBottom: 24 }, children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: "label-campo", htmlFor: "stock-buscar", children: "Buscar" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 190,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("input", { id: "stock-buscar", className: "campo", value: q, onChange: (e) => setQ(e.target.value), placeholder: "Ej: arroz", style: { width: 220 } }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 191,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("label", { className: "label-campo", htmlFor: "stock-categoria", children: "Categoría" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 194,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("select", { id: "stock-categoria", className: "campo", value: cat, onChange: (e) => setCat(e.target.value), style: { width: 190 }, children: [
          /* @__PURE__ */ jsxDEV("option", { value: "", children: "Todas" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
            lineNumber: 196,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("option", { value: "no_perecedero", children: "No perecederos" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
            lineNumber: 197,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("option", { value: "perecedero", children: "Perecederos" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
            lineNumber: 198,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 195,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 193,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "btn-fantasma", disabled: cargando, children: "Filtrar" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 201,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "stock-resumen", role: "status", "aria-live": "polite", children: cargando ? /* @__PURE__ */ jsxDEV("span", { className: "esq-estado", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "esq-punto", "aria-hidden": "true" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 206,
          columnNumber: 15
        }, this),
        "Cargando stock…"
      ] }, "cargando", true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 205,
        columnNumber: 11
      }, this) : estado === "listo" ? /* @__PURE__ */ jsxDEV("span", { className: "aparecer", children: [
        "Total mostrado: ",
        /* @__PURE__ */ jsxDEV("strong", { className: "tabular", children: cant(total) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 211,
          columnNumber: 31
        }, this)
      ] }, "total", true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 210,
        columnNumber: 11
      }, this) : null }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 203,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
      lineNumber: 188,
      columnNumber: 7
    }, this),
    errorAjuste && /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-error aparecer", role: "alert", children: errorAjuste }, errorAjuste, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
      lineNumber: 217,
      columnNumber: 23
    }, this),
    estado === "error" ? /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-error aparecer", role: "alert", children: [
      errorCarga,
      " ",
      /* @__PURE__ */ jsxDEV("button", { className: "btn-link-reintentar", onClick: () => cargar({ esperaVacio: true }), children: "Reintentar" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 222,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
      lineNumber: 220,
      columnNumber: 7
    }, this) : /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tabla-scroll", "aria-busy": cargando, children: /* @__PURE__ */ jsxDEV("table", { className: "tabla", children: [
      /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
        /* @__PURE__ */ jsxDEV("th", { children: "Producto" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 227,
          columnNumber: 24
        }, this),
        /* @__PURE__ */ jsxDEV("th", { children: "Lote" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 227,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ jsxDEV("th", { children: "Cantidad" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 227,
          columnNumber: 54
        }, this),
        /* @__PURE__ */ jsxDEV("th", { children: "Origen" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 227,
          columnNumber: 71
        }, this),
        /* @__PURE__ */ jsxDEV("th", { children: "Vencimiento" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 227,
          columnNumber: 86
        }, this),
        /* @__PURE__ */ jsxDEV("th", { children: "Estado" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 227,
          columnNumber: 106
        }, this),
        /* @__PURE__ */ jsxDEV("th", {}, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 227,
          columnNumber: 121
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 227,
        columnNumber: 20
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 227,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("tbody", { children: cargando ? /* @__PURE__ */ jsxDEV(FilasEsqueleto, {}, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 230,
        columnNumber: 13
      }, this) : lotes.length === 0 ? /* @__PURE__ */ jsxDEV("tr", { className: "aparecer", children: /* @__PURE__ */ jsxDEV("td", { colSpan: "7", style: { textAlign: "center", color: "var(--tinta-suave)", padding: 32 }, children: "No hay lotes que coincidan." }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 233,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 232,
        columnNumber: 13
      }, this) : lotes.map(
        (l, i) => /* @__PURE__ */ jsxDEV("tr", { className: "fila-entrar" + (ajustado === l.id ? " fila-ajustada" : ""), style: { "--i": Math.min(i, 12) }, children: [
          /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
            /* @__PURE__ */ jsxDEV("span", { style: { color: "var(--naranja-hover)" }, children: /* @__PURE__ */ jsxDEV(Icono, { nombre: l.icono, size: 20 }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
              lineNumber: 237,
              columnNumber: 134
            }, this) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
              lineNumber: 237,
              columnNumber: 86
            }, this),
            /* @__PURE__ */ jsxDEV("span", { style: { fontWeight: 500 }, children: l.nombre }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
              lineNumber: 237,
              columnNumber: 177
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
            lineNumber: 237,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
            lineNumber: 237,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { style: { color: "var(--tinta-suave)" }, children: [
            "#",
            l.id
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
            lineNumber: 238,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { className: "tabular", style: { fontWeight: 500 }, children: [
            cant(l.cantidad),
            " ",
            l.unidad
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
            lineNumber: 239,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { style: { color: "var(--tinta-suave)", fontSize: 14 }, children: l.origen ? "Donación #" + l.origen : "Carga directa" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
            lineNumber: 240,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { className: "tabular", children: l.vencimiento ? fecha(l.vencimiento) : "—" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
            lineNumber: 241,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 500, color: colorSemaforo(l.semaforo.clase) }, children: [
            /* @__PURE__ */ jsxDEV("span", { className: claseSemaforo(l.semaforo.clase) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
              lineNumber: 242,
              columnNumber: 165
            }, this),
            l.semaforo.texto
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
            lineNumber: 242,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
            lineNumber: 242,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 4 }, children: [
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "number",
                min: "0",
                step: "0.5",
                "aria-label": "Nueva cantidad del lote #" + l.id,
                value: ajustes[l.id] ?? l.cantidad,
                onChange: (e) => editar(l.id, e.target.value),
                onKeyDown: (e) => {
                  if (e.key === "Enter" && tieneCambio(l)) ajustar(l.id);
                },
                className: "campo tabular",
                style: { width: 80, padding: "4px 8px" }
              },
              void 0,
              false,
              {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
                lineNumber: 245,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                type: "button",
                className: "btn-fantasma btn-ajustar",
                style: { padding: "6px 12px", minHeight: "auto" },
                onClick: () => ajustar(l.id),
                disabled: !tieneCambio(l) || guardando === l.id,
                children: guardando === l.id ? "Ajustando…" : "Ajustar"
              },
              void 0,
              false,
              {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
                lineNumber: 254,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
            lineNumber: 244,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
            lineNumber: 243,
            columnNumber: 19
          }, this)
        ] }, l.id, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
          lineNumber: 236,
          columnNumber: 13
        }, this)
      ) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
        lineNumber: 228,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
      lineNumber: 226,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
      lineNumber: 225,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx",
    lineNumber: 183,
    columnNumber: 5
  }, this);
}
_s(PanelStock, "2VCdez1cIiWu4Im3kFTUmFGtfLI=");
_c2 = PanelStock;
var _c, _c2;
$RefreshReg$(_c, "FilasEsqueleto");
$RefreshReg$(_c2, "PanelStock");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelStock.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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M0NGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0E0Q0E7QUFBQSxPQXRGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBd0ZBO0FBRUo7QUFBQzdCLEdBL011QkQsWUFBVTtBQUFBLE1BQVZBO0FBQVUsSUFBQUQsSUFBQWlHO0FBQUEsYUFBQWpHLElBQUE7QUFBQSxhQUFBaUcsS0FBQSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiZ2V0IiwicG9zdCIsInVzdWFyaW9BY3R1YWwiLCJjYW50IiwiZmVjaGEiLCJjb2xvclNlbWFmb3JvIiwiY2xhc2VTZW1hZm9ybyIsIlBhbmVsTGF5b3V0IiwiSWNvbm8iLCJFU1BFUkFfVkFDSU9fTVMiLCJERVNURUxMT19NUyIsIkFOQ0hPU19QUk9EVUNUTyIsIkFOQ0hPU19PUklHRU4iLCJGaWxhc0VzcXVlbGV0byIsImNhbnRpZGFkIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwibWFwIiwiXyIsImkiLCJ3aWR0aCIsIl9jIiwiUGFuZWxTdG9jayIsIl9zIiwidXN1YXJpbyIsImxvdGVzIiwic2V0TG90ZXMiLCJjYXQiLCJzZXRDYXQiLCJxIiwic2V0USIsImFqdXN0ZXMiLCJzZXRBanVzdGVzIiwiZXN0YWRvIiwic2V0RXN0YWRvIiwiZXJyb3JDYXJnYSIsInNldEVycm9yQ2FyZ2EiLCJlcnJvckFqdXN0ZSIsInNldEVycm9yQWp1c3RlIiwiZ3VhcmRhbmRvIiwic2V0R3VhcmRhbmRvIiwiYWp1c3RhZG8iLCJzZXRBanVzdGFkbyIsInBlZGlkb1JlZiIsIm1vbnRhZG9SZWYiLCJlc3BlcmFSZWYiLCJkZXN0ZWxsb1JlZiIsImN1cnJlbnQiLCJjYXJnYXIiLCJlc3BlcmFWYWNpbyIsImNsZWFyVGltZW91dCIsInZpZ2VudGUiLCJpZCIsInNpbGVuY2lvc28iLCJpbmljaW8iLCJEYXRlIiwibm93IiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2V0IiwidHJpbSIsInRvU3RyaW5nIiwidGhlbiIsImRhdG9zIiwibGlzdGEiLCJpc0FycmF5IiwibW9zdHJhciIsInJlc3RhbnRlIiwiTWF0aCIsIm1heCIsInNldFRpbWVvdXQiLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJmaWx0cmFyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZWRpdGFyIiwibG90ZUlkIiwidmFsb3IiLCJwcmV2IiwidGllbmVDYW1iaW8iLCJsb3RlIiwidiIsInVuZGVmaW5lZCIsIk51bWJlciIsImFqdXN0YXIiLCJpc0Zpbml0ZSIsInVzdWFyaW9JZCIsImwiLCJjb3BpYSIsInRvdGFsIiwicmVkdWNlIiwic3VtYSIsImNhcmdhbmRvIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJnYXAiLCJhbGlnbkl0ZW1zIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwibWluIiwiaWNvbm8iLCJmb250V2VpZ2h0Iiwibm9tYnJlIiwidW5pZGFkIiwiZm9udFNpemUiLCJvcmlnZW4iLCJ2ZW5jaW1pZW50byIsInNlbWFmb3JvIiwiY2xhc2UiLCJ0ZXh0byIsImtleSIsIm1pbkhlaWdodCIsIl9jMiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJQYW5lbFN0b2NrLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldCwgcG9zdCB9IGZyb20gJy4uL2FwaSdcbmltcG9ydCB7IHVzdWFyaW9BY3R1YWwgfSBmcm9tICcuLi9hdXRoJ1xuaW1wb3J0IHsgY2FudCwgZmVjaGEsIGNvbG9yU2VtYWZvcm8sIGNsYXNlU2VtYWZvcm8gfSBmcm9tICcuLi9mb3JtYXQnXG5pbXBvcnQgUGFuZWxMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9QYW5lbExheW91dCdcbmltcG9ydCBJY29ubyBmcm9tICcuLi9jb21wb25lbnRzL0ljb25vJ1xuaW1wb3J0ICcuL1BhbmVsRG9uYWNpb25lcy5jc3MnIC8vIHRva2VucywgYnJpbGxvIHkga2V5ZnJhbWVzIGNvbXBhcnRpZG9zIGRlbCBlc3F1ZWxldG9cbmltcG9ydCAnLi9QYW5lbFN0b2NrLmNzcydcblxuLy8gU29sbyBlbiBsYSBjYXJnYSBpbmljaWFsOiBzaSBubyBoYXkgbG90ZXMsIGVsIGVzcXVlbGV0byBzZSBtYW50aWVuZSBoYXN0YSBlc3RlIHRpZW1wby5cbmNvbnN0IEVTUEVSQV9WQUNJT19NUyA9IDUwMDBcbmNvbnN0IERFU1RFTExPX01TID0gMTIwMFxuXG4vLyBBbmNob3MgdmFyaWFkb3MgcGFyYSBxdWUgZWwgZXNxdWVsZXRvIG5vIHBhcmV6Y2EgdW5hIGdyaWxsYSBtZWPDoW5pY2FcbmNvbnN0IEFOQ0hPU19QUk9EVUNUTyA9IFsxNTAsIDExMCwgMTcwLCAxMjUsIDE0MCwgMTAwXVxuY29uc3QgQU5DSE9TX09SSUdFTiA9IFs5NiwgODQsIDExMCwgOTAsIDEwMCwgODBdXG5cbmZ1bmN0aW9uIEZpbGFzRXNxdWVsZXRvKHsgY2FudGlkYWQgPSA2IH0pIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IGNhbnRpZGFkIH0pLm1hcCgoXywgaSkgPT4gKFxuICAgIDx0ciBrZXk9e2l9IGNsYXNzTmFtZT1cImVzcS1maWxhXCIgc3R5bGU9e3sgJy0taSc6IGkgfX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICA8dGQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXNxLWNlbGRhLXByb2R1Y3RvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlc3EgZXNxLWljb25vXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVzcSBlc3EtbGluZWFcIiBzdHlsZT17eyB3aWR0aDogQU5DSE9TX1BST0RVQ1RPW2kgJSA2XSB9fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJlc3EgZXNxLWxpbmVhXCIgc3R5bGU9e3sgd2lkdGg6IDM2IH19IC8+PC90ZD5cbiAgICAgIDx0ZD48ZGl2IGNsYXNzTmFtZT1cImVzcSBlc3EtbGluZWFcIiBzdHlsZT17eyB3aWR0aDogNzIgfX0gLz48L3RkPlxuICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPVwiZXNxIGVzcS1saW5lYSBlc3EtbGluZWEtY2hpY2FcIiBzdHlsZT17eyB3aWR0aDogQU5DSE9TX09SSUdFTltpICUgNl0gfX0gLz48L3RkPlxuICAgICAgPHRkPjxkaXYgY2xhc3NOYW1lPVwiZXNxIGVzcS1saW5lYVwiIHN0eWxlPXt7IHdpZHRoOiA4MCB9fSAvPjwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXNxLWNlbGRhLXByb2R1Y3RvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlc3EgZXNxLXNlbWFmb3JvXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVzcSBlc3EtbGluZWEgZXNxLWxpbmVhLWNoaWNhXCIgc3R5bGU9e3sgd2lkdGg6IDcwIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlc3EtY2VsZGEtcHJvZHVjdG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVzcSBlc3EtaW5wdXRcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXNxIGVzcS1ib3RvblwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICApKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYW5lbFN0b2NrKCkge1xuICBjb25zdCB1c3VhcmlvID0gdXN1YXJpb0FjdHVhbCgpXG4gIGNvbnN0IFtsb3Rlcywgc2V0TG90ZXNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtjYXQsIHNldENhdF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3EsIHNldFFdID0gdXNlU3RhdGUoJycpXG4gIC8vIFNvbG8gZ3VhcmRhIGxvcyB2YWxvcmVzIHF1ZSBlbCB1c3VhcmlvIGVkaXTDszogeyBbbG90ZUlkXTogdmFsb3IgfVxuICBjb25zdCBbYWp1c3Rlcywgc2V0QWp1c3Rlc10gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2VzdGFkbywgc2V0RXN0YWRvXSA9IHVzZVN0YXRlKCdjYXJnYW5kbycpIC8vICdjYXJnYW5kbycgfCAnbGlzdG8nIHwgJ2Vycm9yJ1xuICBjb25zdCBbZXJyb3JDYXJnYSwgc2V0RXJyb3JDYXJnYV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2Vycm9yQWp1c3RlLCBzZXRFcnJvckFqdXN0ZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2d1YXJkYW5kbywgc2V0R3VhcmRhbmRvXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFthanVzdGFkbywgc2V0QWp1c3RhZG9dID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBwZWRpZG9SZWYgPSB1c2VSZWYoMCkgICAgICAgICAgLy8gZGVzY2FydGEgcmVzcHVlc3RhcyB2aWVqYXMgc2kgc2UgZmlsdHJhIHLDoXBpZG9cbiAgY29uc3QgbW9udGFkb1JlZiA9IHVzZVJlZih0cnVlKVxuICBjb25zdCBlc3BlcmFSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgZGVzdGVsbG9SZWYgPSB1c2VSZWYobnVsbClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG1vbnRhZG9SZWYuY3VycmVudCA9IHRydWVcbiAgICBjYXJnYXIoeyBlc3BlcmFWYWNpbzogdHJ1ZSB9KVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBtb250YWRvUmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgY2xlYXJUaW1lb3V0KGVzcGVyYVJlZi5jdXJyZW50KVxuICAgICAgY2xlYXJUaW1lb3V0KGRlc3RlbGxvUmVmLmN1cnJlbnQpXG4gICAgfVxuICB9LCBbXSlcblxuICBmdW5jdGlvbiB2aWdlbnRlKGlkKSB7XG4gICAgcmV0dXJuIG1vbnRhZG9SZWYuY3VycmVudCAmJiBpZCA9PT0gcGVkaWRvUmVmLmN1cnJlbnRcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhcmdhcih7IGVzcGVyYVZhY2lvID0gZmFsc2UsIHNpbGVuY2lvc28gPSBmYWxzZSB9ID0ge30pIHtcbiAgICBjb25zdCBpZCA9ICsrcGVkaWRvUmVmLmN1cnJlbnRcbiAgICBjbGVhclRpbWVvdXQoZXNwZXJhUmVmLmN1cnJlbnQpXG4gICAgY29uc3QgaW5pY2lvID0gRGF0ZS5ub3coKVxuXG4gICAgaWYgKCFzaWxlbmNpb3NvKSB7XG4gICAgICBzZXRFc3RhZG8oJ2NhcmdhbmRvJylcbiAgICAgIHNldEVycm9yQ2FyZ2EoJycpXG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gICAgaWYgKGNhdCkgcGFyYW1zLnNldCgnY2F0JywgY2F0KVxuICAgIGlmIChxLnRyaW0oKSkgcGFyYW1zLnNldCgncScsIHEudHJpbSgpKVxuXG4gICAgcmV0dXJuIGdldCgnL3BhbmVsL3N0b2NrPycgKyBwYXJhbXMudG9TdHJpbmcoKSlcbiAgICAgIC50aGVuKGRhdG9zID0+IHtcbiAgICAgICAgaWYgKCF2aWdlbnRlKGlkKSkgcmV0dXJuXG4gICAgICAgIGNvbnN0IGxpc3RhID0gQXJyYXkuaXNBcnJheShkYXRvcykgPyBkYXRvcyA6IFtdXG4gICAgICAgIGNvbnN0IG1vc3RyYXIgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKCF2aWdlbnRlKGlkKSkgcmV0dXJuXG4gICAgICAgICAgc2V0TG90ZXMobGlzdGEpXG4gICAgICAgICAgaWYgKCFzaWxlbmNpb3NvKSBzZXRBanVzdGVzKHt9KVxuICAgICAgICAgIHNldEVzdGFkbygnbGlzdG8nKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3RhbnRlID0gZXNwZXJhVmFjaW8gJiYgbGlzdGEubGVuZ3RoID09PSAwXG4gICAgICAgICAgPyBNYXRoLm1heCgwLCBFU1BFUkFfVkFDSU9fTVMgLSAoRGF0ZS5ub3coKSAtIGluaWNpbykpXG4gICAgICAgICAgOiAwXG4gICAgICAgIGlmIChyZXN0YW50ZSA+IDApIGVzcGVyYVJlZi5jdXJyZW50ID0gc2V0VGltZW91dChtb3N0cmFyLCByZXN0YW50ZSlcbiAgICAgICAgZWxzZSBtb3N0cmFyKClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgaWYgKCF2aWdlbnRlKGlkKSB8fCBzaWxlbmNpb3NvKSByZXR1cm5cbiAgICAgICAgc2V0RXJyb3JDYXJnYShlcnI/Lm1lc3NhZ2UgfHwgJ05vIHNlIHB1ZG8gY2FyZ2FyIGVsIHN0b2NrLicpXG4gICAgICAgIHNldEVzdGFkbygnZXJyb3InKVxuICAgICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbHRyYXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNhcmdhcigpXG4gIH1cblxuICBmdW5jdGlvbiBlZGl0YXIobG90ZUlkLCB2YWxvcikge1xuICAgIHNldEFqdXN0ZXMocHJldiA9PiAoeyAuLi5wcmV2LCBbbG90ZUlkXTogdmFsb3IgfSkpXG4gIH1cblxuICBmdW5jdGlvbiB0aWVuZUNhbWJpbyhsb3RlKSB7XG4gICAgY29uc3QgdiA9IGFqdXN0ZXNbbG90ZS5pZF1cbiAgICByZXR1cm4gdiAhPT0gdW5kZWZpbmVkICYmIHYgIT09ICcnICYmIE51bWJlcih2KSAhPT0gbG90ZS5jYW50aWRhZFxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gYWp1c3Rhcihsb3RlSWQpIHtcbiAgICBjb25zdCB2YWxvciA9IE51bWJlcihhanVzdGVzW2xvdGVJZF0pXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodmFsb3IpIHx8IHZhbG9yIDwgMCkge1xuICAgICAgc2V0RXJyb3JBanVzdGUoJ0luZ3Jlc8OhIHVuYSBjYW50aWRhZCB2w6FsaWRhIHBhcmEgZWwgbG90ZSAjJyArIGxvdGVJZCArICcuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRFcnJvckFqdXN0ZSgnJylcbiAgICBzZXRHdWFyZGFuZG8obG90ZUlkKVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBwb3N0KCcvcGFuZWwvc3RvY2svYWp1c3RhcicsIHsgbG90ZUlkLCBjYW50aWRhZDogdmFsb3IsIHVzdWFyaW9JZDogdXN1YXJpby5pZCB9KVxuICAgICAgaWYgKCFtb250YWRvUmVmLmN1cnJlbnQpIHJldHVyblxuICAgICAgLy8gQWN0dWFsaXphY2nDs24gaW5tZWRpYXRhIGRlIGxhIGZpbGEsIHNpbiB2b2x2ZXIgYSBtb3N0cmFyIGVsIGVzcXVlbGV0b1xuICAgICAgc2V0TG90ZXMocHJldiA9PiBwcmV2Lm1hcChsID0+IGwuaWQgPT09IGxvdGVJZCA/IHsgLi4ubCwgY2FudGlkYWQ6IHZhbG9yIH0gOiBsKSlcbiAgICAgIHNldEFqdXN0ZXMocHJldiA9PiB7XG4gICAgICAgIGNvbnN0IGNvcGlhID0geyAuLi5wcmV2IH1cbiAgICAgICAgZGVsZXRlIGNvcGlhW2xvdGVJZF1cbiAgICAgICAgcmV0dXJuIGNvcGlhXG4gICAgICB9KVxuICAgICAgc2V0QWp1c3RhZG8obG90ZUlkKVxuICAgICAgY2xlYXJUaW1lb3V0KGRlc3RlbGxvUmVmLmN1cnJlbnQpXG4gICAgICBkZXN0ZWxsb1JlZi5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiBzZXRBanVzdGFkbyhudWxsKSwgREVTVEVMTE9fTVMpXG4gICAgICAvLyBSZWNhcmdhIHNpbGVuY2lvc2EgcGFyYSB0cmFlciBlbCBzZW3DoWZvcm8gYWN0dWFsaXphZG8sIGNvbnNlcnZhbmRvIG90cmFzIGVkaWNpb25lc1xuICAgICAgY2FyZ2FyKHsgc2lsZW5jaW9zbzogdHJ1ZSB9KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKG1vbnRhZG9SZWYuY3VycmVudCkgc2V0RXJyb3JBanVzdGUoZXJyPy5tZXNzYWdlIHx8ICdObyBzZSBwdWRvIGFqdXN0YXIgZWwgbG90ZS4nKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAobW9udGFkb1JlZi5jdXJyZW50KSBzZXRHdWFyZGFuZG8obnVsbClcbiAgICB9XG4gIH1cblxuICBjb25zdCB0b3RhbCA9IGxvdGVzLnJlZHVjZSgoc3VtYSwgbCkgPT4gc3VtYSArIGwuY2FudGlkYWQsIDApXG4gIGNvbnN0IGNhcmdhbmRvID0gZXN0YWRvID09PSAnY2FyZ2FuZG8nXG5cbiAgcmV0dXJuIChcbiAgICA8UGFuZWxMYXlvdXQgdGl0dWxvPVwiU3RvY2sgZGVsIGRlcMOzc2l0b1wiIHNlY2Npb249XCJzdG9ja1wiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWVkaWRhXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBtYXJnaW5Cb3R0b206IDI0IH19PlxuICAgICAgICBFbCBpbnZlbnRhcmlvIHZpdm8sIGxvdGUgcG9yIGxvdGUuIEZpbHRyw6EgcG9yIGNhdGVnb3LDrWEgbyBidXNjw6EgdW4gcHJvZHVjdG8uIFNpIGh1Ym8gdW4gZXJyb3IgZGUgY29udGVvLCBjb3JyZWfDrSB1biBsb3RlIGFjw6EgbWlzbW8geSBxdWVkYSByZWdpc3RyYWRvIGVsIGFqdXN0ZS5cbiAgICAgIDwvcD5cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2ZpbHRyYXJ9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJywgZ2FwOiAxMiwgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJywgbWFyZ2luQm90dG9tOiAyNCB9fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtY2FtcG9cIiBodG1sRm9yPVwic3RvY2stYnVzY2FyXCI+QnVzY2FyPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJzdG9jay1idXNjYXJcIiBjbGFzc05hbWU9XCJjYW1wb1wiIHZhbHVlPXtxfSBvbkNoYW5nZT17ZSA9PiBzZXRRKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJFajogYXJyb3pcIiBzdHlsZT17eyB3aWR0aDogMjIwIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1jYW1wb1wiIGh0bWxGb3I9XCJzdG9jay1jYXRlZ29yaWFcIj5DYXRlZ29yw61hPC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0IGlkPVwic3RvY2stY2F0ZWdvcmlhXCIgY2xhc3NOYW1lPVwiY2FtcG9cIiB2YWx1ZT17Y2F0fSBvbkNoYW5nZT17ZSA9PiBzZXRDYXQoZS50YXJnZXQudmFsdWUpfSBzdHlsZT17eyB3aWR0aDogMTkwIH19PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlRvZGFzPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9fcGVyZWNlZGVyb1wiPk5vIHBlcmVjZWRlcm9zPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVyZWNlZGVyb1wiPlBlcmVjZWRlcm9zPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1mYW50YXNtYVwiIGRpc2FibGVkPXtjYXJnYW5kb30+RmlsdHJhcjwvYnV0dG9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvY2stcmVzdW1lblwiIHJvbGU9XCJzdGF0dXNcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cbiAgICAgICAgICB7Y2FyZ2FuZG8gPyAoXG4gICAgICAgICAgICA8c3BhbiBrZXk9XCJjYXJnYW5kb1wiIGNsYXNzTmFtZT1cImVzcS1lc3RhZG9cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXNxLXB1bnRvXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICBDYXJnYW5kbyBzdG9ja+KAplxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICkgOiBlc3RhZG8gPT09ICdsaXN0bycgPyAoXG4gICAgICAgICAgICA8c3BhbiBrZXk9XCJ0b3RhbFwiIGNsYXNzTmFtZT1cImFwYXJlY2VyXCI+XG4gICAgICAgICAgICAgIFRvdGFsIG1vc3RyYWRvOiA8c3Ryb25nIGNsYXNzTmFtZT1cInRhYnVsYXJcIj57Y2FudCh0b3RhbCl9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuXG4gICAgICB7ZXJyb3JBanVzdGUgJiYgPGRpdiBrZXk9e2Vycm9yQWp1c3RlfSBjbGFzc05hbWU9XCJhbGVydGEgYWxlcnRhLWVycm9yIGFwYXJlY2VyXCIgcm9sZT1cImFsZXJ0XCI+e2Vycm9yQWp1c3RlfTwvZGl2Pn1cblxuICAgICAge2VzdGFkbyA9PT0gJ2Vycm9yJyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydGEgYWxlcnRhLWVycm9yIGFwYXJlY2VyXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAge2Vycm9yQ2FyZ2F9eycgJ31cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1saW5rLXJlaW50ZW50YXJcIiBvbkNsaWNrPXsoKSA9PiBjYXJnYXIoeyBlc3BlcmFWYWNpbzogdHJ1ZSB9KX0+UmVpbnRlbnRhcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFyamV0YSB0YWJsYS1zY3JvbGxcIiBhcmlhLWJ1c3k9e2NhcmdhbmRvfT5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGFcIj5cbiAgICAgICAgICAgIDx0aGVhZD48dHI+PHRoPlByb2R1Y3RvPC90aD48dGg+TG90ZTwvdGg+PHRoPkNhbnRpZGFkPC90aD48dGg+T3JpZ2VuPC90aD48dGg+VmVuY2ltaWVudG88L3RoPjx0aD5Fc3RhZG88L3RoPjx0aD48L3RoPjwvdHI+PC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge2NhcmdhbmRvID8gKFxuICAgICAgICAgICAgICAgIDxGaWxhc0VzcXVlbGV0byAvPlxuICAgICAgICAgICAgICApIDogbG90ZXMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJhcGFyZWNlclwiPlxuICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI3XCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBwYWRkaW5nOiAzMiB9fT5ObyBoYXkgbG90ZXMgcXVlIGNvaW5jaWRhbi48L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkgOiBsb3Rlcy5tYXAoKGwsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtsLmlkfSBjbGFzc05hbWU9eydmaWxhLWVudHJhcicgKyAoYWp1c3RhZG8gPT09IGwuaWQgPyAnIGZpbGEtYWp1c3RhZGEnIDogJycpfSBzdHlsZT17eyAnLS1pJzogTWF0aC5taW4oaSwgMTIpIH19PlxuICAgICAgICAgICAgICAgICAgPHRkPjxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA4IH19PjxzcGFuIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tbmFyYW5qYS1ob3ZlciknIH19PjxJY29ubyBub21icmU9e2wuaWNvbm99IHNpemU9ezIwfSAvPjwvc3Bhbj48c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA1MDAgfX0+e2wubm9tYnJlfTwvc3Bhbj48L2Rpdj48L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJyB9fT4je2wuaWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJ1bGFyXCIgc3R5bGU9e3sgZm9udFdlaWdodDogNTAwIH19PntjYW50KGwuY2FudGlkYWQpfSB7bC51bmlkYWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScsIGZvbnRTaXplOiAxNCB9fT57bC5vcmlnZW4gPyAnRG9uYWNpw7NuICMnICsgbC5vcmlnZW4gOiAnQ2FyZ2EgZGlyZWN0YSd9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJ1bGFyXCI+e2wudmVuY2ltaWVudG8gPyBmZWNoYShsLnZlbmNpbWllbnRvKSA6ICfigJQnfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1mbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNiwgZm9udFNpemU6IDE0LCBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiBjb2xvclNlbWFmb3JvKGwuc2VtYWZvcm8uY2xhc2UpIH19PjxzcGFuIGNsYXNzTmFtZT17Y2xhc2VTZW1hZm9ybyhsLnNlbWFmb3JvLmNsYXNlKX0+PC9zcGFuPntsLnNlbWFmb3JvLnRleHRvfTwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgc3RlcD1cIjAuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXsnTnVldmEgY2FudGlkYWQgZGVsIGxvdGUgIycgKyBsLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FqdXN0ZXNbbC5pZF0gPz8gbC5jYW50aWRhZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGVkaXRhcihsLmlkLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2UgPT4geyBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgdGllbmVDYW1iaW8obCkpIGFqdXN0YXIobC5pZCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhbXBvIHRhYnVsYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDgwLCBwYWRkaW5nOiAnNHB4IDhweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWZhbnRhc21hIGJ0bi1hanVzdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICc2cHggMTJweCcsIG1pbkhlaWdodDogJ2F1dG8nIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhanVzdGFyKGwuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aWVuZUNhbWJpbyhsKSB8fCBndWFyZGFuZG8gPT09IGwuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2d1YXJkYW5kbyA9PT0gbC5pZCA/ICdBanVzdGFuZG/igKYnIDogJ0FqdXN0YXInfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L1BhbmVsTGF5b3V0PlxuICApXG59XG4iXSwiZmlsZSI6Ii9Vc2Vycy9iaWFuY28vRG9jdW1lbnRzL1NVUDIvc3VtYS11bi1wbGF0by1mcm9udGVuZC1tYWluICg1KS9mcm9udGVuZC9zcmMvcGFnZXMvUGFuZWxTdG9jay5qc3gifQ==