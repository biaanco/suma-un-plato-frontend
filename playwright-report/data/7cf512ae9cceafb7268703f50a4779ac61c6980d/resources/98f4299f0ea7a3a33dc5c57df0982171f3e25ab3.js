import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/PanelDonaciones.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { get, post } from "/src/api.js";
import { usuarioActual } from "/src/auth.js";
import { cant, fechaHora } from "/src/format.js";
import PanelLayout from "/src/components/PanelLayout.jsx";
import Icono from "/src/components/Icono.jsx";
import "/src/pages/PanelDonaciones.css";
const ESPERA_VACIO_MS = 5e3;
const SALIDA_MS = 420;
function EsqueletoDonaciones({ cantidad = 3 }) {
  return /* @__PURE__ */ jsxDEV("div", { className: "esq-lista", role: "status", "aria-live": "polite", "aria-busy": "true", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "esq-estado", children: [
      /* @__PURE__ */ jsxDEV("span", { className: "esq-punto", "aria-hidden": "true" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      "Cargando donaciones…"
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    Array.from({ length: cantidad }).map(
      (_, i) => /* @__PURE__ */ jsxDEV("div", { className: "tarjeta esq-tarjeta", style: { "--i": i }, "aria-hidden": "true", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "esq esq-circulo" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "esq-textos", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "esq esq-linea", style: { width: "42%" } }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
            lineNumber: 45,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "esq esq-linea esq-linea-chica", style: { width: "26%" } }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
            lineNumber: 46,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "esq esq-chip" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, i, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
        lineNumber: 42,
        columnNumber: 7
      }, this)
    )
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
_c = EsqueletoDonaciones;
function TarjetaDonacion({ donacion, usuarioId, onConfirmado }) {
  _s();
  const [items, setItems] = useState(
    donacion.items.map((it) => ({ ...it, cantidadReal: it.cantidad, vencimiento: "" }))
  );
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");
  function cambiar(indice, campo, valor) {
    setItems((prev) => prev.map((it, i) => i === indice ? { ...it, [campo]: valor } : it));
  }
  async function confirmar() {
    for (const it of items) {
      if (it.categoria === "perecedero" && !it.vencimiento) {
        setError("Cargá el vencimiento de los perecederos.");
        return;
      }
    }
    setError("");
    setCargando(true);
    try {
      await post("/panel/revisar/confirmar", {
        donacionId: donacion.id,
        usuarioId,
        items: items.map((it) => ({ alimentoId: it.alimentoId, cantidad: Number(it.cantidadReal), vencimiento: it.vencimiento }))
      });
      onConfirmado(donacion.id);
    } catch (err) {
      setError(err.message);
      setCargando(false);
    }
  }
  return /* @__PURE__ */ jsxDEV("details", { className: "tarjeta", open: true, children: [
    /* @__PURE__ */ jsxDEV("summary", { style: { display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, padding: 20, cursor: "pointer", listStyle: "none" }, children: [
      /* @__PURE__ */ jsxDEV("span", { className: "icono-circulo", style: { width: 40, height: 40, fontWeight: 700 }, children: [
        "#",
        donacion.id
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: 600 }, children: [
          donacion.donante,
          " ",
          /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, color: "var(--tinta-suave)", fontWeight: 400 }, children: [
            "· ",
            donacion.tipoDonante || "donante"
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
            lineNumber: 93,
            columnNumber: 63
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, color: "var(--tinta-suave)" }, children: [
          donacion.items.length,
          " ítems · ",
          fechaHora(donacion.creadoEn)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
          lineNumber: 94,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: "chip chip-suave", children: "Registrada" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { borderTop: "1px solid var(--borde)", padding: 20 }, children: [
      error && /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-error aparecer", children: error }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
        lineNumber: 100,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "tabla-scroll", children: /* @__PURE__ */ jsxDEV("table", { className: "tabla", children: [
        /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
          /* @__PURE__ */ jsxDEV("th", { children: "Producto" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
            lineNumber: 103,
            columnNumber: 24
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Declarado" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
            lineNumber: 103,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Cantidad real" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
            lineNumber: 103,
            columnNumber: 59
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Vencimiento" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
            lineNumber: 103,
            columnNumber: 81
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
          lineNumber: 103,
          columnNumber: 20
        }, this) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
          lineNumber: 103,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("tbody", { children: items.map(
          (it, i) => /* @__PURE__ */ jsxDEV("tr", { children: [
            /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
              /* @__PURE__ */ jsxDEV("span", { style: { color: "var(--naranja-hover)" }, children: /* @__PURE__ */ jsxDEV(Icono, { nombre: it.icono, size: 20 }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
                lineNumber: 109,
                columnNumber: 71
              }, this) }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
                lineNumber: 109,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { fontWeight: 500 }, children: it.nombre }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
                lineNumber: 110,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, color: "var(--tinta-suave)" }, children: it.categoria === "perecedero" ? "perecedero" : "no perec." }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
                lineNumber: 111,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
              lineNumber: 108,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
              lineNumber: 107,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("td", { className: "tabular", style: { color: "var(--tinta-suave)" }, children: [
              cant(it.cantidad),
              " ",
              it.unidad
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
              lineNumber: 114,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("td", { children: [
              /* @__PURE__ */ jsxDEV("input", { type: "number", min: "0", step: "0.5", value: it.cantidadReal, onChange: (e) => cambiar(i, "cantidadReal", e.target.value), className: "campo tabular", style: { width: 96, padding: "6px 8px" } }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
                lineNumber: 116,
                columnNumber: 21
              }, this),
              " ",
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, color: "var(--tinta-suave)" }, children: it.unidad }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
                lineNumber: 116,
                columnNumber: 217
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
              lineNumber: 115,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("td", { children: it.categoria === "perecedero" ? /* @__PURE__ */ jsxDEV("input", { type: "date", value: it.vencimiento, onChange: (e) => cambiar(i, "vencimiento", e.target.value), className: "campo", style: { width: 160, padding: "6px 8px" } }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
              lineNumber: 120,
              columnNumber: 19
            }, this) : /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 12, color: "var(--tinta-suave)" }, children: "—" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
              lineNumber: 121,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
              lineNumber: 118,
              columnNumber: 19
            }, this)
          ] }, i, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
            lineNumber: 106,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
          lineNumber: 104,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
        lineNumber: 102,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      donacion.nota && /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 14, color: "var(--tinta-suave)", marginTop: 12 }, children: [
        "Nota del donante: ",
        /* @__PURE__ */ jsxDEV("em", { children: donacion.nota }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
          lineNumber: 128,
          columnNumber: 117
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
        lineNumber: 128,
        columnNumber: 27
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 20 }, children: /* @__PURE__ */ jsxDEV("button", { className: "btn-verde", onClick: confirmar, disabled: cargando, children: cargando ? "Confirmando…" : "Confirmar ingreso" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
        lineNumber: 130,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
        lineNumber: 129,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
      lineNumber: 99,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}
_s(TarjetaDonacion, "P/Dv4s6ISkT/t384XhUIHSfiWpU=");
_c2 = TarjetaDonacion;
export default function PanelDonaciones() {
  _s2();
  const usuario = usuarioActual();
  const [donaciones, setDonaciones] = useState([]);
  const [saliendo, setSaliendo] = useState(() => /* @__PURE__ */ new Set());
  const [mensaje, setMensaje] = useState("");
  const [estado, setEstado] = useState("cargando");
  const [errorCarga, setErrorCarga] = useState("");
  const [intento, setIntento] = useState(0);
  useEffect(() => {
    let activo = true;
    let temporizador = null;
    const inicio = Date.now();
    setEstado("cargando");
    setErrorCarga("");
    get("/panel/revisar").then((datos) => {
      if (!activo) return;
      const lista = Array.isArray(datos) ? datos : [];
      const mostrar = () => {
        if (!activo) return;
        setDonaciones(lista);
        setEstado("listo");
      };
      if (lista.length > 0) {
        mostrar();
      } else {
        const restante = Math.max(0, ESPERA_VACIO_MS - (Date.now() - inicio));
        temporizador = setTimeout(mostrar, restante);
      }
    }).catch((err) => {
      if (!activo) return;
      setErrorCarga(err?.message || "No se pudieron cargar las donaciones.");
      setEstado("error");
    });
    return () => {
      activo = false;
      clearTimeout(temporizador);
    };
  }, [intento]);
  function confirmado(id) {
    setMensaje("Donación #" + id + " ingresada al stock. Las barras del index ya se actualizaron.");
    setSaliendo((prev) => new Set(prev).add(id));
    setTimeout(() => {
      setDonaciones((prev) => prev.filter((d) => d.id !== id));
      setSaliendo((prev) => {
        const copia = new Set(prev);
        copia.delete(id);
        return copia;
      });
    }, SALIDA_MS);
  }
  return /* @__PURE__ */ jsxDEV(PanelLayout, { titulo: "Donaciones por revisar", seccion: "revisar", children: [
    /* @__PURE__ */ jsxDEV("p", { className: "medida", style: { color: "var(--tinta-suave)", marginBottom: 24 }, children: "La bandeja de entrada del depósito. Revisá lo que trajo cada donante, ajustá cantidades, cargá el vencimiento de los perecederos y confirmá el ingreso." }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
      lineNumber: 198,
      columnNumber: 7
    }, this),
    mensaje && /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-ok aparecer", children: mensaje }, mensaje, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
      lineNumber: 202,
      columnNumber: 19
    }, this),
    estado === "cargando" && /* @__PURE__ */ jsxDEV(EsqueletoDonaciones, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
      lineNumber: 204,
      columnNumber: 33
    }, this),
    estado === "error" && /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-error aparecer", role: "alert", children: [
      errorCarga,
      " ",
      /* @__PURE__ */ jsxDEV("button", { className: "btn-link-reintentar", onClick: () => setIntento((n) => n + 1), children: "Reintentar" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
        lineNumber: 209,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
      lineNumber: 207,
      columnNumber: 7
    }, this),
    estado === "listo" && donaciones.length === 0 && /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad vacio-donaciones aparecer", role: "status", children: "No hay donaciones esperando revisión." }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
      lineNumber: 214,
      columnNumber: 7
    }, this),
    estado === "listo" && donaciones.length > 0 && /* @__PURE__ */ jsxDEV("div", { className: "lista-donaciones", children: donaciones.map(
      (d, i) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "donacion-item",
          "data-saliendo": saliendo.has(d.id) || void 0,
          style: { "--i": Math.min(i, 8) },
          children: /* @__PURE__ */ jsxDEV("div", { className: "donacion-item-interior", children: /* @__PURE__ */ jsxDEV(TarjetaDonacion, { donacion: d, usuarioId: usuario.id, onConfirmado: confirmado }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
            lineNumber: 229,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
            lineNumber: 228,
            columnNumber: 15
          }, this)
        },
        d.id,
        false,
        {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
          lineNumber: 222,
          columnNumber: 9
        },
        this
      )
    ) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
      lineNumber: 220,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx",
    lineNumber: 197,
    columnNumber: 5
  }, this);
}
_s2(PanelDonaciones, "8R7eCRiwCJVBXO+cCCBbUTlTveE=");
_c3 = PanelDonaciones;
var _c, _c2, _c3;
$RefreshReg$(_c, "EsqueletoDonaciones");
$RefreshReg$(_c2, "TarjetaDonacion");
$RefreshReg$(_c3, "PanelDonaciones");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelDonaciones.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBLGFBQUFDLEtBQUEiLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldCIsInBvc3QiLCJ1c3VhcmlvQWN0dWFsIiwiY2FudCIsImZlY2hhSG9yYSIsIlBhbmVsTGF5b3V0IiwiSWNvbm8iLCJFU1BFUkFfVkFDSU9fTVMiLCJTQUxJREFfTVMiLCJFc3F1ZWxldG9Eb25hY2lvbmVzIiwiY2FudGlkYWQiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJfIiwiaSIsIndpZHRoIiwiX2MiLCJUYXJqZXRhRG9uYWNpb24iLCJkb25hY2lvbiIsInVzdWFyaW9JZCIsIm9uQ29uZmlybWFkbyIsIl9zIiwiaXRlbXMiLCJzZXRJdGVtcyIsIml0IiwiY2FudGlkYWRSZWFsIiwidmVuY2ltaWVudG8iLCJjYXJnYW5kbyIsInNldENhcmdhbmRvIiwiZXJyb3IiLCJzZXRFcnJvciIsImNhbWJpYXIiLCJpbmRpY2UiLCJjYW1wbyIsInZhbG9yIiwicHJldiIsImNvbmZpcm1hciIsImNhdGVnb3JpYSIsImRvbmFjaW9uSWQiLCJpZCIsImFsaW1lbnRvSWQiLCJOdW1iZXIiLCJlcnIiLCJtZXNzYWdlIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYWxpZ25JdGVtcyIsImdhcCIsInBhZGRpbmciLCJjdXJzb3IiLCJsaXN0U3R5bGUiLCJoZWlnaHQiLCJmb250V2VpZ2h0IiwiZmxleCIsIm1pbldpZHRoIiwiZG9uYW50ZSIsImZvbnRTaXplIiwiY29sb3IiLCJ0aXBvRG9uYW50ZSIsImNyZWFkb0VuIiwiYm9yZGVyVG9wIiwiaWNvbm8iLCJub21icmUiLCJ1bmlkYWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJub3RhIiwibWFyZ2luVG9wIiwiUGFuZWxEb25hY2lvbmVzIiwiX3MyIiwidXN1YXJpbyIsImRvbmFjaW9uZXMiLCJzZXREb25hY2lvbmVzIiwic2FsaWVuZG8iLCJzZXRTYWxpZW5kbyIsIlNldCIsIm1lbnNhamUiLCJzZXRNZW5zYWplIiwiZXN0YWRvIiwic2V0RXN0YWRvIiwiZXJyb3JDYXJnYSIsInNldEVycm9yQ2FyZ2EiLCJpbnRlbnRvIiwic2V0SW50ZW50byIsImFjdGl2byIsInRlbXBvcml6YWRvciIsImluaWNpbyIsIkRhdGUiLCJub3ciLCJ0aGVuIiwiZGF0b3MiLCJsaXN0YSIsImlzQXJyYXkiLCJtb3N0cmFyIiwicmVzdGFudGUiLCJNYXRoIiwibWF4Iiwic2V0VGltZW91dCIsImNhdGNoIiwiY2xlYXJUaW1lb3V0IiwiY29uZmlybWFkbyIsImFkZCIsImZpbHRlciIsImQiLCJjb3BpYSIsImRlbGV0ZSIsIm1hcmdpbkJvdHRvbSIsIm4iLCJoYXMiLCJ1bmRlZmluZWQiLCJtaW4iLCJfYzIiLCJfYzMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUGFuZWxEb25hY2lvbmVzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tICcuLi9hcGknXG5pbXBvcnQgeyB1c3VhcmlvQWN0dWFsIH0gZnJvbSAnLi4vYXV0aCdcbmltcG9ydCB7IGNhbnQsIGZlY2hhSG9yYSB9IGZyb20gJy4uL2Zvcm1hdCdcbmltcG9ydCBQYW5lbExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL1BhbmVsTGF5b3V0J1xuaW1wb3J0IEljb25vIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbm8nXG5pbXBvcnQgJy4vUGFuZWxEb25hY2lvbmVzLmNzcydcblxuLy8gU2kgbGEgYmFuZGVqYSB2aWVuZSB2YWPDrWEsIGVsIGVzcXVlbGV0byBzZSBtYW50aWVuZSBoYXN0YSBjdW1wbGlyIGVzdGUgdGllbXBvXG4vLyBkZXNkZSBxdWUgYXBhcmVjacOzLiBTaSBoYXkgZG9uYWNpb25lcywgc2UgbXVlc3RyYW4gYXBlbmFzIGxsZWdhbi5cbmNvbnN0IEVTUEVSQV9WQUNJT19NUyA9IDUwMDBcbi8vIER1cmFjacOzbiBkZSBsYSBhbmltYWNpw7NuIGRlIHNhbGlkYSBkZSB1bmEgdGFyamV0YSBjb25maXJtYWRhIChpZ3VhbCBxdWUgZW4gZWwgQ1NTKVxuY29uc3QgU0FMSURBX01TID0gNDIwXG5cbmZ1bmN0aW9uIEVzcXVlbGV0b0RvbmFjaW9uZXMoeyBjYW50aWRhZCA9IDMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXNxLWxpc3RhXCIgcm9sZT1cInN0YXR1c1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGFyaWEtYnVzeT1cInRydWVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXNxLWVzdGFkb1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlc3EtcHVudG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgIENhcmdhbmRvIGRvbmFjaW9uZXPigKZcbiAgICAgIDwvZGl2PlxuICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IGNhbnRpZGFkIH0pLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwidGFyamV0YSBlc3EtdGFyamV0YVwiIHN0eWxlPXt7ICctLWknOiBpIH19IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXNxIGVzcS1jaXJjdWxvXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVzcS10ZXh0b3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXNxIGVzcS1saW5lYVwiIHN0eWxlPXt7IHdpZHRoOiAnNDIlJyB9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlc3EgZXNxLWxpbmVhIGVzcS1saW5lYS1jaGljYVwiIHN0eWxlPXt7IHdpZHRoOiAnMjYlJyB9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXNxIGVzcS1jaGlwXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBUYXJqZXRhRG9uYWNpb24oeyBkb25hY2lvbiwgdXN1YXJpb0lkLCBvbkNvbmZpcm1hZG8gfSkge1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFxuICAgIGRvbmFjaW9uLml0ZW1zLm1hcChpdCA9PiAoeyAuLi5pdCwgY2FudGlkYWRSZWFsOiBpdC5jYW50aWRhZCwgdmVuY2ltaWVudG86ICcnIH0pKVxuICApXG4gIGNvbnN0IFtjYXJnYW5kbywgc2V0Q2FyZ2FuZG9dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXG5cbiAgZnVuY3Rpb24gY2FtYmlhcihpbmRpY2UsIGNhbXBvLCB2YWxvcikge1xuICAgIHNldEl0ZW1zKHByZXYgPT4gcHJldi5tYXAoKGl0LCBpKSA9PiBpID09PSBpbmRpY2UgPyB7IC4uLml0LCBbY2FtcG9dOiB2YWxvciB9IDogaXQpKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY29uZmlybWFyKCkge1xuICAgIGZvciAoY29uc3QgaXQgb2YgaXRlbXMpIHtcbiAgICAgIGlmIChpdC5jYXRlZ29yaWEgPT09ICdwZXJlY2VkZXJvJyAmJiAhaXQudmVuY2ltaWVudG8pIHtcbiAgICAgICAgc2V0RXJyb3IoJ0NhcmfDoSBlbCB2ZW5jaW1pZW50byBkZSBsb3MgcGVyZWNlZGVyb3MuJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIHNldEVycm9yKCcnKVxuICAgIHNldENhcmdhbmRvKHRydWUpXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHBvc3QoJy9wYW5lbC9yZXZpc2FyL2NvbmZpcm1hcicsIHtcbiAgICAgICAgZG9uYWNpb25JZDogZG9uYWNpb24uaWQsXG4gICAgICAgIHVzdWFyaW9JZCxcbiAgICAgICAgaXRlbXM6IGl0ZW1zLm1hcChpdCA9PiAoeyBhbGltZW50b0lkOiBpdC5hbGltZW50b0lkLCBjYW50aWRhZDogTnVtYmVyKGl0LmNhbnRpZGFkUmVhbCksIHZlbmNpbWllbnRvOiBpdC52ZW5jaW1pZW50byB9KSlcbiAgICAgIH0pXG4gICAgICBvbkNvbmZpcm1hZG8oZG9uYWNpb24uaWQpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSlcbiAgICAgIHNldENhcmdhbmRvKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRldGFpbHMgY2xhc3NOYW1lPVwidGFyamV0YVwiIG9wZW4+XG4gICAgICA8c3VtbWFyeSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhXcmFwOiAnd3JhcCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDEyLCBwYWRkaW5nOiAyMCwgY3Vyc29yOiAncG9pbnRlcicsIGxpc3RTdHlsZTogJ25vbmUnIH19PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uby1jaXJjdWxvXCIgc3R5bGU9e3sgd2lkdGg6IDQwLCBoZWlnaHQ6IDQwLCBmb250V2VpZ2h0OiA3MDAgfX0+I3tkb25hY2lvbi5pZH08L3NwYW4+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgbWluV2lkdGg6IDAgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAgfX0+e2RvbmFjaW9uLmRvbmFudGV9IDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBmb250V2VpZ2h0OiA0MDAgfX0+wrcge2RvbmFjaW9uLnRpcG9Eb25hbnRlIHx8ICdkb25hbnRlJ308L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJyB9fT57ZG9uYWNpb24uaXRlbXMubGVuZ3RofSDDrXRlbXMgwrcge2ZlY2hhSG9yYShkb25hY2lvbi5jcmVhZG9Fbil9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGlwIGNoaXAtc3VhdmVcIj5SZWdpc3RyYWRhPC9zcGFuPlxuICAgICAgPC9zdW1tYXJ5PlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlclRvcDogJzFweCBzb2xpZCB2YXIoLS1ib3JkZSknLCBwYWRkaW5nOiAyMCB9fT5cbiAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRhIGFsZXJ0YS1lcnJvciBhcGFyZWNlclwiPntlcnJvcn08L2Rpdj59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGEtc2Nyb2xsXCI+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxhXCI+XG4gICAgICAgICAgICA8dGhlYWQ+PHRyPjx0aD5Qcm9kdWN0bzwvdGg+PHRoPkRlY2xhcmFkbzwvdGg+PHRoPkNhbnRpZGFkIHJlYWw8L3RoPjx0aD5WZW5jaW1pZW50bzwvdGg+PC90cj48L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7aXRlbXMubWFwKChpdCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLW5hcmFuamEtaG92ZXIpJyB9fT48SWNvbm8gbm9tYnJlPXtpdC5pY29ub30gc2l6ZT17MjB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDUwMCB9fT57aXQubm9tYnJlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJyB9fT57aXQuY2F0ZWdvcmlhID09PSAncGVyZWNlZGVybycgPyAncGVyZWNlZGVybycgOiAnbm8gcGVyZWMuJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJ1bGFyXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknIH19PntjYW50KGl0LmNhbnRpZGFkKX0ge2l0LnVuaWRhZH08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBzdGVwPVwiMC41XCIgdmFsdWU9e2l0LmNhbnRpZGFkUmVhbH0gb25DaGFuZ2U9e2UgPT4gY2FtYmlhcihpLCAnY2FudGlkYWRSZWFsJywgZS50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJjYW1wbyB0YWJ1bGFyXCIgc3R5bGU9e3sgd2lkdGg6IDk2LCBwYWRkaW5nOiAnNnB4IDhweCcgfX0gLz4gPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScgfX0+e2l0LnVuaWRhZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICB7aXQuY2F0ZWdvcmlhID09PSAncGVyZWNlZGVybycgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2l0LnZlbmNpbWllbnRvfSBvbkNoYW5nZT17ZSA9PiBjYW1iaWFyKGksICd2ZW5jaW1pZW50bycsIGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiY2FtcG9cIiBzdHlsZT17eyB3aWR0aDogMTYwLCBwYWRkaW5nOiAnNnB4IDhweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6ICg8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJyB9fT7igJQ8L3NwYW4+KX1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZG9uYWNpb24ubm90YSAmJiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTQsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJywgbWFyZ2luVG9wOiAxMiB9fT5Ob3RhIGRlbCBkb25hbnRlOiA8ZW0+e2RvbmFjaW9uLm5vdGF9PC9lbT48L3A+fVxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tdmVyZGVcIiBvbkNsaWNrPXtjb25maXJtYXJ9IGRpc2FibGVkPXtjYXJnYW5kb30+e2NhcmdhbmRvID8gJ0NvbmZpcm1hbmRv4oCmJyA6ICdDb25maXJtYXIgaW5ncmVzbyd9PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kZXRhaWxzPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhbmVsRG9uYWNpb25lcygpIHtcbiAgY29uc3QgdXN1YXJpbyA9IHVzdWFyaW9BY3R1YWwoKVxuICBjb25zdCBbZG9uYWNpb25lcywgc2V0RG9uYWNpb25lc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW3NhbGllbmRvLCBzZXRTYWxpZW5kb10gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgU2V0KCkpXG4gIGNvbnN0IFttZW5zYWplLCBzZXRNZW5zYWplXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZXN0YWRvLCBzZXRFc3RhZG9dID0gdXNlU3RhdGUoJ2NhcmdhbmRvJykgLy8gJ2NhcmdhbmRvJyB8ICdsaXN0bycgfCAnZXJyb3InXG4gIGNvbnN0IFtlcnJvckNhcmdhLCBzZXRFcnJvckNhcmdhXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbaW50ZW50bywgc2V0SW50ZW50b10gPSB1c2VTdGF0ZSgwKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGFjdGl2byA9IHRydWUgICAgICAgICAgLy8gZXZpdGEgc2V0U3RhdGUgdHJhcyBkZXNtb250YXIgKHkgZWwgZG9ibGUgZWZlY3RvIGRlIFN0cmljdE1vZGUpXG4gICAgbGV0IHRlbXBvcml6YWRvciA9IG51bGxcbiAgICBjb25zdCBpbmljaW8gPSBEYXRlLm5vdygpXG5cbiAgICBzZXRFc3RhZG8oJ2NhcmdhbmRvJylcbiAgICBzZXRFcnJvckNhcmdhKCcnKVxuXG4gICAgZ2V0KCcvcGFuZWwvcmV2aXNhcicpXG4gICAgICAudGhlbihkYXRvcyA9PiB7XG4gICAgICAgIGlmICghYWN0aXZvKSByZXR1cm5cbiAgICAgICAgY29uc3QgbGlzdGEgPSBBcnJheS5pc0FycmF5KGRhdG9zKSA/IGRhdG9zIDogW11cbiAgICAgICAgY29uc3QgbW9zdHJhciA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoIWFjdGl2bykgcmV0dXJuXG4gICAgICAgICAgc2V0RG9uYWNpb25lcyhsaXN0YSlcbiAgICAgICAgICBzZXRFc3RhZG8oJ2xpc3RvJylcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIG1vc3RyYXIoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHJlc3RhbnRlID0gTWF0aC5tYXgoMCwgRVNQRVJBX1ZBQ0lPX01TIC0gKERhdGUubm93KCkgLSBpbmljaW8pKVxuICAgICAgICAgIHRlbXBvcml6YWRvciA9IHNldFRpbWVvdXQobW9zdHJhciwgcmVzdGFudGUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgaWYgKCFhY3Rpdm8pIHJldHVyblxuICAgICAgICBzZXRFcnJvckNhcmdhKGVycj8ubWVzc2FnZSB8fCAnTm8gc2UgcHVkaWVyb24gY2FyZ2FyIGxhcyBkb25hY2lvbmVzLicpXG4gICAgICAgIHNldEVzdGFkbygnZXJyb3InKVxuICAgICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhY3Rpdm8gPSBmYWxzZVxuICAgICAgY2xlYXJUaW1lb3V0KHRlbXBvcml6YWRvcilcbiAgICB9XG4gIH0sIFtpbnRlbnRvXSlcblxuICBmdW5jdGlvbiBjb25maXJtYWRvKGlkKSB7XG4gICAgc2V0TWVuc2FqZSgnRG9uYWNpw7NuICMnICsgaWQgKyAnIGluZ3Jlc2FkYSBhbCBzdG9jay4gTGFzIGJhcnJhcyBkZWwgaW5kZXggeWEgc2UgYWN0dWFsaXphcm9uLicpXG4gICAgLy8gUHJpbWVybyBzZSBhbmltYSBsYSBzYWxpZGEsIGRlc3B1w6lzIHNlIHF1aXRhIGRlIGxhIGxpc3RhXG4gICAgc2V0U2FsaWVuZG8ocHJldiA9PiBuZXcgU2V0KHByZXYpLmFkZChpZCkpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXREb25hY2lvbmVzKHByZXYgPT4gcHJldi5maWx0ZXIoZCA9PiBkLmlkICE9PSBpZCkpXG4gICAgICBzZXRTYWxpZW5kbyhwcmV2ID0+IHtcbiAgICAgICAgY29uc3QgY29waWEgPSBuZXcgU2V0KHByZXYpXG4gICAgICAgIGNvcGlhLmRlbGV0ZShpZClcbiAgICAgICAgcmV0dXJuIGNvcGlhXG4gICAgICB9KVxuICAgIH0sIFNBTElEQV9NUylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhbmVsTGF5b3V0IHRpdHVsbz1cIkRvbmFjaW9uZXMgcG9yIHJldmlzYXJcIiBzZWNjaW9uPVwicmV2aXNhclwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWVkaWRhXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBtYXJnaW5Cb3R0b206IDI0IH19PlxuICAgICAgICBMYSBiYW5kZWphIGRlIGVudHJhZGEgZGVsIGRlcMOzc2l0by4gUmV2aXPDoSBsbyBxdWUgdHJham8gY2FkYSBkb25hbnRlLCBhanVzdMOhIGNhbnRpZGFkZXMsIGNhcmfDoSBlbCB2ZW5jaW1pZW50byBkZSBsb3MgcGVyZWNlZGVyb3MgeSBjb25maXJtw6EgZWwgaW5ncmVzby5cbiAgICAgIDwvcD5cblxuICAgICAge21lbnNhamUgJiYgPGRpdiBrZXk9e21lbnNhamV9IGNsYXNzTmFtZT1cImFsZXJ0YSBhbGVydGEtb2sgYXBhcmVjZXJcIj57bWVuc2FqZX08L2Rpdj59XG5cbiAgICAgIHtlc3RhZG8gPT09ICdjYXJnYW5kbycgJiYgPEVzcXVlbGV0b0RvbmFjaW9uZXMgLz59XG5cbiAgICAgIHtlc3RhZG8gPT09ICdlcnJvcicgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0YSBhbGVydGEtZXJyb3IgYXBhcmVjZXJcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICB7ZXJyb3JDYXJnYX17JyAnfVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWxpbmstcmVpbnRlbnRhclwiIG9uQ2xpY2s9eygpID0+IHNldEludGVudG8obiA9PiBuICsgMSl9PlJlaW50ZW50YXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7ZXN0YWRvID09PSAnbGlzdG8nICYmIGRvbmFjaW9uZXMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXJqZXRhIHRhcmpldGEtcGFkIHZhY2lvLWRvbmFjaW9uZXMgYXBhcmVjZXJcIiByb2xlPVwic3RhdHVzXCI+XG4gICAgICAgICAgTm8gaGF5IGRvbmFjaW9uZXMgZXNwZXJhbmRvIHJldmlzacOzbi5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7ZXN0YWRvID09PSAnbGlzdG8nICYmIGRvbmFjaW9uZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGEtZG9uYWNpb25lc1wiPlxuICAgICAgICAgIHtkb25hY2lvbmVzLm1hcCgoZCwgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2QuaWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbmFjaW9uLWl0ZW1cIlxuICAgICAgICAgICAgICBkYXRhLXNhbGllbmRvPXtzYWxpZW5kby5oYXMoZC5pZCkgfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBzdHlsZT17eyAnLS1pJzogTWF0aC5taW4oaSwgOCkgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hY2lvbi1pdGVtLWludGVyaW9yXCI+XG4gICAgICAgICAgICAgICAgPFRhcmpldGFEb25hY2lvbiBkb25hY2lvbj17ZH0gdXN1YXJpb0lkPXt1c3VhcmlvLmlkfSBvbkNvbmZpcm1hZG89e2NvbmZpcm1hZG99IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L1BhbmVsTGF5b3V0PlxuICApXG59XG4iXSwiZmlsZSI6Ii9Vc2Vycy9iaWFuY28vRG9jdW1lbnRzL1NVUDIvc3VtYS11bi1wbGF0by1mcm9udGVuZC1tYWluICg1KS9mcm9udGVuZC9zcmMvcGFnZXMvUGFuZWxEb25hY2lvbmVzLmpzeCJ9