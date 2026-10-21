import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Merendero.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=9f826408";
import { get, post, del } from "/src/api.js";
import { usuarioActual } from "/src/auth.js";
import { cant, fecha } from "/src/format.js";
import Header from "/src/components/Header.jsx";
import Footer from "/src/components/Footer.jsx";
import Icono from "/src/components/Icono.jsx";
import SelectorBuscable from "/src/components/SelectorBuscable.jsx";
const URG = {
  alta: { background: "#000000", color: "#ffffff" },
  media: { background: "#bbbbbb", color: "#000000" },
  baja: { background: "#ffffff", color: "#000000" }
};
const ESTADO = { pendiente: "Pendiente", parcial: "Parcial", cubierta: "Cubierta" };
const UNIDADES = ["u", "kg", "L", "paq"];
const FORM_VACIO = { alimentoId: "", otroNombre: "", otraUnidad: "u", cantidad: "", urgencia: "media" };
export default function Merendero() {
  _s();
  const usuario = usuarioActual();
  const navigate = useNavigate();
  const [merendero, setMerendero] = useState(null);
  const [noVinculado, setNoVinculado] = useState(false);
  const [alimentos, setAlimentos] = useState([]);
  const [planilla, setPlanilla] = useState([]);
  const [entregas, setEntregas] = useState([]);
  const [form, setForm] = useState(FORM_VACIO);
  const [mensaje, setMensaje] = useState("");
  useEffect(() => {
    if (!usuario || usuario.rol !== "merendero") {
      navigate("/login");
      return;
    }
    get("/alimentos").then(setAlimentos).catch(() => {
    });
    get("/merenderos/usuario/" + usuario.id).then((m) => {
      setMerendero(m);
      cargar(m.id);
    }).catch(() => setNoVinculado(true));
  }, []);
  function cargar(id) {
    get("/merenderos/" + id + "/planilla").then(setPlanilla).catch(() => {
    });
    get("/merenderos/" + id + "/entregas").then(setEntregas).catch(() => {
    });
  }
  if (!usuario || usuario.rol !== "merendero") {
    return null;
  }
  if (noVinculado) {
    return /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
        lineNumber: 71,
        columnNumber: 14
      }, this),
      /* @__PURE__ */ jsxDEV("main", { className: "contenedor", style: { padding: "64px 16px" }, children: /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", style: { textAlign: "center", color: "var(--tinta-suave)" }, children: "Tu cuenta todavía no está vinculada a un merendero activo. Contactá al coordinador." }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
        lineNumber: 71,
        columnNumber: 86
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
        lineNumber: 71,
        columnNumber: 24
      }, this),
      /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
        lineNumber: 71,
        columnNumber: 280
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
      lineNumber: 71,
      columnNumber: 12
    }, this);
  }
  if (!merendero) {
    return /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
        lineNumber: 75,
        columnNumber: 14
      }, this),
      /* @__PURE__ */ jsxDEV("main", { className: "contenedor", style: { padding: "80px 16px", textAlign: "center" }, children: /* @__PURE__ */ jsxDEV("span", { className: "cargando" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
        lineNumber: 75,
        columnNumber: 107
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
        lineNumber: 75,
        columnNumber: 24
      }, this),
      /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
        lineNumber: 75,
        columnNumber: 148
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
      lineNumber: 75,
      columnNumber: 12
    }, this);
  }
  async function agregar(e) {
    e.preventDefault();
    const esOtro = form.alimentoId === "otros";
    if (!form.alimentoId) {
      setMensaje("");
      alert("Elegí un producto del catálogo.");
      return;
    }
    if (esOtro && !form.otroNombre.trim()) {
      setMensaje("");
      alert("Escribí qué producto necesitás.");
      return;
    }
    if (!form.cantidad) return;
    const producto = esOtro ? { otroNombre: form.otroNombre.trim(), otraUnidad: form.otraUnidad } : { alimentoId: Number(form.alimentoId) };
    await post("/merenderos/" + merendero.id + "/planilla", { ...producto, cantidad: Number(form.cantidad), urgencia: form.urgencia });
    setForm(FORM_VACIO);
    setMensaje(esOtro ? "Necesidad agregada. El coordinador va a revisar el producto nuevo para sumarlo al catálogo." : "Necesidad agregada a tu planilla.");
    cargar(merendero.id);
  }
  async function quitar(id) {
    await del("/merenderos/planilla/" + id);
    cargar(merendero.id);
  }
  async function recibir(entregaId) {
    await post("/merenderos/entrega/recibir", { entregaId, merenderoId: merendero.id });
    setMensaje("¡Recepción confirmada! Gracias por cerrar el círculo.");
    cargar(merendero.id);
  }
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "contenedor", style: { padding: "48px 16px" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 32 }, children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "font-display", style: { fontSize: 34, margin: 0 }, children: merendero.nombre }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--tinta-suave)", marginTop: 4 }, children: [
          merendero.direccion,
          " · ",
          merendero.horarios
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
          lineNumber: 112,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      mensaje && /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-ok", children: mensaje }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
        lineNumber: 114,
        columnNumber: 21
      }, this),
      entregas.length > 0 && /* @__PURE__ */ jsxDEV("section", { style: { marginBottom: 40 }, children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "font-display", style: { fontSize: 22 }, children: "Entregas en camino" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
          lineNumber: 118,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: entregas.map(
          (e) => /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", children: [
            /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 12 }, children: [
              /* @__PURE__ */ jsxDEV("span", { style: { fontWeight: 600 }, children: [
                "Entrega #",
                e.id
              ] }, void 0, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                lineNumber: 123,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("span", { style: { fontSize: 14, color: "var(--tinta-suave)" }, children: fecha(e.creadoEn) }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                lineNumber: 124,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
              lineNumber: 122,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("ul", { style: { listStyle: "none", padding: 0, margin: "0 0 16px", display: "flex", flexWrap: "wrap", gap: "4px 24px", fontSize: 14, color: "var(--tinta-suave)" }, children: e.items.map(
              (it, i) => /* @__PURE__ */ jsxDEV("li", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
                /* @__PURE__ */ jsxDEV("span", { style: { color: "var(--naranja-hover)" }, children: /* @__PURE__ */ jsxDEV(Icono, { nombre: it.icono, size: 16 }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 128,
                  columnNumber: 135
                }, this) }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 128,
                  columnNumber: 87
                }, this),
                it.nombre,
                " · ",
                /* @__PURE__ */ jsxDEV("span", { className: "tabular", children: [
                  cant(it.cantidad),
                  " ",
                  it.unidad
                ] }, void 0, true, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 128,
                  columnNumber: 193
                }, this)
              ] }, i, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                lineNumber: 128,
                columnNumber: 17
              }, this)
            ) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
              lineNumber: 126,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("button", { className: "btn-verde", onClick: () => recibir(e.id), children: "Confirmar que la recibí" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
              lineNumber: 131,
              columnNumber: 19
            }, this)
          ] }, e.id, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
            lineNumber: 121,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
          lineNumber: 119,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid", style: { gridTemplateColumns: "1fr", gap: 32 }, children: /* @__PURE__ */ jsxDEV("div", { className: "merendero-grid", style: { display: "grid", gap: 32 }, children: [
        /* @__PURE__ */ jsxDEV("section", { className: "tarjeta tarjeta-pad", children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "font-display", style: { fontSize: 20, marginTop: 0 }, children: "Cargar necesidad" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
            lineNumber: 141,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("form", { onSubmit: agregar, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
              /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
                /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Producto" }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 145,
                  columnNumber: 3
                }, this),
                /* @__PURE__ */ jsxDEV(
                  SelectorBuscable,
                  {
                    opciones: alimentos,
                    valor: form.alimentoId,
                    onChange: (id) => setForm({ ...form, alimentoId: id }),
                    conOtros: true
                  },
                  void 0,
                  false,
                  {
                    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                    lineNumber: 146,
                    columnNumber: 3
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                lineNumber: 144,
                columnNumber: 19
              }, this),
              form.alimentoId === "otros" && /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 8 }, children: [
                /* @__PURE__ */ jsxDEV("input", { className: "campo", value: form.otroNombre, onChange: (e) => setForm({ ...form, otroNombre: e.target.value }), placeholder: "¿Qué producto necesitás?", maxLength: 60, autoFocus: true, required: true }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 155,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV("select", { className: "campo", value: form.otraUnidad, onChange: (e) => setForm({ ...form, otraUnidad: e.target.value }), style: { width: 90 }, "aria-label": "Unidad", children: UNIDADES.map((u) => /* @__PURE__ */ jsxDEV("option", { value: u, children: u }, u, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 157,
                  columnNumber: 46
                }, this)) }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 156,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                lineNumber: 154,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
              lineNumber: 143,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
              /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Cantidad" }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                lineNumber: 163,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("input", { className: "campo", type: "number", step: "0.5", min: "0.5", value: form.cantidad, onChange: (e) => setForm({ ...form, cantidad: e.target.value }), style: { width: 160 }, required: true }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                lineNumber: 164,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
              lineNumber: 162,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
              /* @__PURE__ */ jsxDEV("span", { className: "label-campo", children: "Urgencia" }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                lineNumber: 167,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 8 }, children: ["baja", "media", "alta"].map(
                (u) => /* @__PURE__ */ jsxDEV("label", { className: "pildora", children: [
                  /* @__PURE__ */ jsxDEV("input", { type: "radio", name: "urg", checked: form.urgencia === u, onChange: () => setForm({ ...form, urgencia: u }) }, void 0, false, {
                    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                    lineNumber: 171,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { style: { textTransform: "capitalize" }, children: u }, void 0, false, {
                    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                    lineNumber: 172,
                    columnNumber: 25
                  }, this)
                ] }, u, true, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 170,
                  columnNumber: 21
                }, this)
              ) }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                lineNumber: 168,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
              lineNumber: 166,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("button", { className: "btn-donar ancho", children: "Agregar a mi planilla" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
              lineNumber: 177,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
            lineNumber: 142,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
          lineNumber: 140,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("section", { children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "font-display", style: { fontSize: 20, marginTop: 0, marginBottom: 16 }, children: "Mi planilla de necesidades" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
            lineNumber: 182,
            columnNumber: 15
          }, this),
          planilla.length === 0 ? /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", style: { textAlign: "center", color: "var(--tinta-suave)" }, children: "Todavía no cargaste necesidades. Empezá con lo que más te falta esta semana." }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
            lineNumber: 184,
            columnNumber: 15
          }, this) : /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tabla-scroll", children: /* @__PURE__ */ jsxDEV("table", { className: "tabla", children: [
            /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
              /* @__PURE__ */ jsxDEV("th", { children: "Producto" }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                lineNumber: 188,
                columnNumber: 32
              }, this),
              /* @__PURE__ */ jsxDEV("th", { children: "Cantidad" }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                lineNumber: 188,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ jsxDEV("th", { children: "Urgencia" }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                lineNumber: 188,
                columnNumber: 66
              }, this),
              /* @__PURE__ */ jsxDEV("th", { children: "Estado" }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                lineNumber: 188,
                columnNumber: 83
              }, this),
              /* @__PURE__ */ jsxDEV("th", {}, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                lineNumber: 188,
                columnNumber: 98
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
              lineNumber: 188,
              columnNumber: 28
            }, this) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
              lineNumber: 188,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("tbody", { children: planilla.map(
              (p) => /* @__PURE__ */ jsxDEV("tr", { children: [
                /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
                  /* @__PURE__ */ jsxDEV("span", { style: { color: "var(--naranja-hover)" }, children: /* @__PURE__ */ jsxDEV(Icono, { nombre: p.icono, size: 20 }, void 0, false, {
                    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                    lineNumber: 192,
                    columnNumber: 142
                  }, this) }, void 0, false, {
                    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                    lineNumber: 192,
                    columnNumber: 94
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { style: { fontWeight: 500 }, children: p.nombre }, void 0, false, {
                    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                    lineNumber: 192,
                    columnNumber: 185
                  }, this),
                  p.pendiente && /* @__PURE__ */ jsxDEV("span", { className: "chip chip-gris", title: "El coordinador todavía no lo sumó al catálogo", children: "en revisión" }, void 0, false, {
                    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                    lineNumber: 192,
                    columnNumber: 252
                  }, this)
                ] }, void 0, true, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 192,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 192,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDEV("td", { className: "tabular", children: [
                  cant(p.cantidad),
                  " ",
                  p.unidad
                ] }, void 0, true, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 193,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("span", { className: "chip", style: URG[p.urgencia], children: p.urgencia }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 194,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 194,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDEV("td", { style: { fontSize: 14, color: "var(--tinta-suave)" }, children: ESTADO[p.estado] }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 195,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("button", { className: "btn-icono", onClick: () => quitar(p.id), "aria-label": "Quitar", children: /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", children: /* @__PURE__ */ jsxDEV("path", { d: "M6 7h12M9 7V5h6v2M8 7l1 12h6l1-12" }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 196,
                  columnNumber: 210
                }, this) }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 196,
                  columnNumber: 110
                }, this) }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 196,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                  lineNumber: 196,
                  columnNumber: 27
                }, this)
              ] }, p.id, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
                lineNumber: 191,
                columnNumber: 21
              }, this)
            ) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
              lineNumber: 189,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
            lineNumber: 187,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
            lineNumber: 186,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
          lineNumber: 181,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
        lineNumber: 139,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
      lineNumber: 207,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx",
    lineNumber: 107,
    columnNumber: 5
  }, this);
}
_s(Merendero, "j2B9QqDRxrtKyGbo9vCF7b/2VUQ=", false, function() {
  return [useNavigate];
});
_c = Merendero;
var _c;
$RefreshReg$(_c, "Merendero");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Merendero.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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c2VTdGF0ZSIsInVzZU5hdmlnYXRlIiwiZ2V0IiwicG9zdCIsImRlbCIsInVzdWFyaW9BY3R1YWwiLCJjYW50IiwiZmVjaGEiLCJIZWFkZXIiLCJGb290ZXIiLCJJY29ubyIsIlNlbGVjdG9yQnVzY2FibGUiLCJVUkciLCJhbHRhIiwiYmFja2dyb3VuZCIsImNvbG9yIiwibWVkaWEiLCJiYWphIiwiRVNUQURPIiwicGVuZGllbnRlIiwicGFyY2lhbCIsImN1YmllcnRhIiwiVU5JREFERVMiLCJGT1JNX1ZBQ0lPIiwiYWxpbWVudG9JZCIsIm90cm9Ob21icmUiLCJvdHJhVW5pZGFkIiwiY2FudGlkYWQiLCJ1cmdlbmNpYSIsIk1lcmVuZGVybyIsIl9zIiwidXN1YXJpbyIsIm5hdmlnYXRlIiwibWVyZW5kZXJvIiwic2V0TWVyZW5kZXJvIiwibm9WaW5jdWxhZG8iLCJzZXROb1ZpbmN1bGFkbyIsImFsaW1lbnRvcyIsInNldEFsaW1lbnRvcyIsInBsYW5pbGxhIiwic2V0UGxhbmlsbGEiLCJlbnRyZWdhcyIsInNldEVudHJlZ2FzIiwiZm9ybSIsInNldEZvcm0iLCJtZW5zYWplIiwic2V0TWVuc2FqZSIsInJvbCIsInRoZW4iLCJjYXRjaCIsImlkIiwibSIsImNhcmdhciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJhZ3JlZ2FyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZXNPdHJvIiwiYWxlcnQiLCJ0cmltIiwicHJvZHVjdG8iLCJOdW1iZXIiLCJxdWl0YXIiLCJyZWNpYmlyIiwiZW50cmVnYUlkIiwibWVyZW5kZXJvSWQiLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsIm1hcmdpbiIsIm5vbWJyZSIsIm1hcmdpblRvcCIsImRpcmVjY2lvbiIsImhvcmFyaW9zIiwibGVuZ3RoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJtYXAiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRXZWlnaHQiLCJjcmVhZG9FbiIsImxpc3RTdHlsZSIsImZsZXhXcmFwIiwiaXRlbXMiLCJpdCIsImkiLCJhbGlnbkl0ZW1zIiwiaWNvbm8iLCJ1bmlkYWQiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwidGFyZ2V0IiwidmFsdWUiLCJ3aWR0aCIsInUiLCJ0ZXh0VHJhbnNmb3JtIiwicCIsImVzdGFkbyIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIk1lcmVuZGVyby5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgZ2V0LCBwb3N0LCBkZWwgfSBmcm9tICcuLi9hcGknXG5pbXBvcnQgeyB1c3VhcmlvQWN0dWFsIH0gZnJvbSAnLi4vYXV0aCdcbmltcG9ydCB7IGNhbnQsIGZlY2hhIH0gZnJvbSAnLi4vZm9ybWF0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgSWNvbm8gZnJvbSAnLi4vY29tcG9uZW50cy9JY29ubydcbmltcG9ydCBTZWxlY3RvckJ1c2NhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvU2VsZWN0b3JCdXNjYWJsZSdcblxuY29uc3QgVVJHID0ge1xuICBhbHRhOiB7IGJhY2tncm91bmQ6ICcjMDAwMDAwJywgY29sb3I6ICcjZmZmZmZmJyB9LFxuICBtZWRpYTogeyBiYWNrZ3JvdW5kOiAnI2JiYmJiYicsIGNvbG9yOiAnIzAwMDAwMCcgfSxcbiAgYmFqYTogeyBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsIGNvbG9yOiAnIzAwMDAwMCcgfVxufVxuY29uc3QgRVNUQURPID0geyBwZW5kaWVudGU6ICdQZW5kaWVudGUnLCBwYXJjaWFsOiAnUGFyY2lhbCcsIGN1YmllcnRhOiAnQ3ViaWVydGEnIH1cbmNvbnN0IFVOSURBREVTID0gWyd1JywgJ2tnJywgJ0wnLCAncGFxJ11cbmNvbnN0IEZPUk1fVkFDSU8gPSB7IGFsaW1lbnRvSWQ6ICcnLCBvdHJvTm9tYnJlOiAnJywgb3RyYVVuaWRhZDogJ3UnLCBjYW50aWRhZDogJycsIHVyZ2VuY2lhOiAnbWVkaWEnIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVyZW5kZXJvKCkge1xuICBjb25zdCB1c3VhcmlvID0gdXN1YXJpb0FjdHVhbCgpXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuICBjb25zdCBbbWVyZW5kZXJvLCBzZXRNZXJlbmRlcm9dID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW25vVmluY3VsYWRvLCBzZXROb1ZpbmN1bGFkb10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2FsaW1lbnRvcywgc2V0QWxpbWVudG9zXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbcGxhbmlsbGEsIHNldFBsYW5pbGxhXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbZW50cmVnYXMsIHNldEVudHJlZ2FzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZShGT1JNX1ZBQ0lPKVxuICBjb25zdCBbbWVuc2FqZSwgc2V0TWVuc2FqZV0gPSB1c2VTdGF0ZSgnJylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdXN1YXJpbyB8fCB1c3VhcmlvLnJvbCAhPT0gJ21lcmVuZGVybycpIHtcbiAgICAgIG5hdmlnYXRlKCcvbG9naW4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGdldCgnL2FsaW1lbnRvcycpLnRoZW4oc2V0QWxpbWVudG9zKS5jYXRjaCgoKSA9PiB7fSlcbiAgICBnZXQoJy9tZXJlbmRlcm9zL3VzdWFyaW8vJyArIHVzdWFyaW8uaWQpXG4gICAgICAudGhlbihtID0+IHsgc2V0TWVyZW5kZXJvKG0pOyBjYXJnYXIobS5pZCkgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiBzZXROb1ZpbmN1bGFkbyh0cnVlKSlcbiAgfSwgW10pXG5cbiAgZnVuY3Rpb24gY2FyZ2FyKGlkKSB7XG4gICAgZ2V0KCcvbWVyZW5kZXJvcy8nICsgaWQgKyAnL3BsYW5pbGxhJykudGhlbihzZXRQbGFuaWxsYSkuY2F0Y2goKCkgPT4ge30pXG4gICAgZ2V0KCcvbWVyZW5kZXJvcy8nICsgaWQgKyAnL2VudHJlZ2FzJykudGhlbihzZXRFbnRyZWdhcykuY2F0Y2goKCkgPT4ge30pXG4gIH1cblxuICBpZiAoIXVzdWFyaW8gfHwgdXN1YXJpby5yb2wgIT09ICdtZXJlbmRlcm8nKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmIChub1ZpbmN1bGFkbykge1xuICAgIHJldHVybiAoPD48SGVhZGVyIC8+PG1haW4gY2xhc3NOYW1lPVwiY29udGVuZWRvclwiIHN0eWxlPXt7IHBhZGRpbmc6ICc2NHB4IDE2cHgnIH19PjxkaXYgY2xhc3NOYW1lPVwidGFyamV0YSB0YXJqZXRhLXBhZFwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJyB9fT5UdSBjdWVudGEgdG9kYXbDrWEgbm8gZXN0w6EgdmluY3VsYWRhIGEgdW4gbWVyZW5kZXJvIGFjdGl2by4gQ29udGFjdMOhIGFsIGNvb3JkaW5hZG9yLjwvZGl2PjwvbWFpbj48Rm9vdGVyIC8+PC8+KVxuICB9XG5cbiAgaWYgKCFtZXJlbmRlcm8pIHtcbiAgICByZXR1cm4gKDw+PEhlYWRlciAvPjxtYWluIGNsYXNzTmFtZT1cImNvbnRlbmVkb3JcIiBzdHlsZT17eyBwYWRkaW5nOiAnODBweCAxNnB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48c3BhbiBjbGFzc05hbWU9XCJjYXJnYW5kb1wiPjwvc3Bhbj48L21haW4+PEZvb3RlciAvPjwvPilcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGFncmVnYXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGVzT3RybyA9IGZvcm0uYWxpbWVudG9JZCA9PT0gJ290cm9zJ1xuICAgIGlmICghZm9ybS5hbGltZW50b0lkKSB7IHNldE1lbnNhamUoJycpOyBhbGVydCgnRWxlZ8OtIHVuIHByb2R1Y3RvIGRlbCBjYXTDoWxvZ28uJyk7IHJldHVybiB9XG4gICAgaWYgKGVzT3RybyAmJiAhZm9ybS5vdHJvTm9tYnJlLnRyaW0oKSkgeyBzZXRNZW5zYWplKCcnKTsgYWxlcnQoJ0VzY3JpYsOtIHF1w6kgcHJvZHVjdG8gbmVjZXNpdMOhcy4nKTsgcmV0dXJuIH1cbiAgICBpZiAoIWZvcm0uY2FudGlkYWQpIHJldHVyblxuICAgIGNvbnN0IHByb2R1Y3RvID0gZXNPdHJvXG4gICAgICA/IHsgb3Ryb05vbWJyZTogZm9ybS5vdHJvTm9tYnJlLnRyaW0oKSwgb3RyYVVuaWRhZDogZm9ybS5vdHJhVW5pZGFkIH1cbiAgICAgIDogeyBhbGltZW50b0lkOiBOdW1iZXIoZm9ybS5hbGltZW50b0lkKSB9XG4gICAgYXdhaXQgcG9zdCgnL21lcmVuZGVyb3MvJyArIG1lcmVuZGVyby5pZCArICcvcGxhbmlsbGEnLCB7IC4uLnByb2R1Y3RvLCBjYW50aWRhZDogTnVtYmVyKGZvcm0uY2FudGlkYWQpLCB1cmdlbmNpYTogZm9ybS51cmdlbmNpYSB9KVxuICAgIHNldEZvcm0oRk9STV9WQUNJTylcbiAgICBzZXRNZW5zYWplKGVzT3Ryb1xuICAgICAgPyAnTmVjZXNpZGFkIGFncmVnYWRhLiBFbCBjb29yZGluYWRvciB2YSBhIHJldmlzYXIgZWwgcHJvZHVjdG8gbnVldm8gcGFyYSBzdW1hcmxvIGFsIGNhdMOhbG9nby4nXG4gICAgICA6ICdOZWNlc2lkYWQgYWdyZWdhZGEgYSB0dSBwbGFuaWxsYS4nKVxuICAgIGNhcmdhcihtZXJlbmRlcm8uaWQpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBxdWl0YXIoaWQpIHtcbiAgICBhd2FpdCBkZWwoJy9tZXJlbmRlcm9zL3BsYW5pbGxhLycgKyBpZClcbiAgICBjYXJnYXIobWVyZW5kZXJvLmlkKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gcmVjaWJpcihlbnRyZWdhSWQpIHtcbiAgICBhd2FpdCBwb3N0KCcvbWVyZW5kZXJvcy9lbnRyZWdhL3JlY2liaXInLCB7IGVudHJlZ2FJZCwgbWVyZW5kZXJvSWQ6IG1lcmVuZGVyby5pZCB9KVxuICAgIHNldE1lbnNhamUoJ8KhUmVjZXBjacOzbiBjb25maXJtYWRhISBHcmFjaWFzIHBvciBjZXJyYXIgZWwgY8OtcmN1bG8uJylcbiAgICBjYXJnYXIobWVyZW5kZXJvLmlkKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGVuZWRvclwiIHN0eWxlPXt7IHBhZGRpbmc6ICc0OHB4IDE2cHgnIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMzIgfX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheVwiIHN0eWxlPXt7IGZvbnRTaXplOiAzNCwgbWFyZ2luOiAwIH19PnttZXJlbmRlcm8ubm9tYnJlfTwvaDE+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBtYXJnaW5Ub3A6IDQgfX0+e21lcmVuZGVyby5kaXJlY2Npb259IMK3IHttZXJlbmRlcm8uaG9yYXJpb3N9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge21lbnNhamUgJiYgPGRpdiBjbGFzc05hbWU9XCJhbGVydGEgYWxlcnRhLW9rXCI+e21lbnNhamV9PC9kaXY+fVxuXG4gICAgICAgIHtlbnRyZWdhcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQwIH19PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheVwiIHN0eWxlPXt7IGZvbnRTaXplOiAyMiB9fT5FbnRyZWdhcyBlbiBjYW1pbm88L2gyPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDE2IH19PlxuICAgICAgICAgICAgICB7ZW50cmVnYXMubWFwKGUgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtlLmlkfSBjbGFzc05hbWU9XCJ0YXJqZXRhIHRhcmpldGEtcGFkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luQm90dG9tOiAxMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNjAwIH19PkVudHJlZ2EgI3tlLmlkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDE0LCBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScgfX0+e2ZlY2hhKGUuY3JlYWRvRW4pfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGxpc3RTdHlsZTogJ25vbmUnLCBwYWRkaW5nOiAwLCBtYXJnaW46ICcwIDAgMTZweCcsIGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJywgZ2FwOiAnNHB4IDI0cHgnLCBmb250U2l6ZTogMTQsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJyB9fT5cbiAgICAgICAgICAgICAgICAgICAge2UuaXRlbXMubWFwKChpdCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNiB9fT48c3BhbiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLW5hcmFuamEtaG92ZXIpJyB9fT48SWNvbm8gbm9tYnJlPXtpdC5pY29ub30gc2l6ZT17MTZ9IC8+PC9zcGFuPntpdC5ub21icmV9IMK3IDxzcGFuIGNsYXNzTmFtZT1cInRhYnVsYXJcIj57Y2FudChpdC5jYW50aWRhZCl9IHtpdC51bmlkYWR9PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXZlcmRlXCIgb25DbGljaz17KCkgPT4gcmVjaWJpcihlLmlkKX0+Q29uZmlybWFyIHF1ZSBsYSByZWNpYsOtPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiIHN0eWxlPXt7IGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnInLCBnYXA6IDMyIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVyZW5kZXJvLWdyaWRcIiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdhcDogMzIgfX0+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0YXJqZXRhIHRhcmpldGEtcGFkXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWRpc3BsYXlcIiBzdHlsZT17eyBmb250U2l6ZTogMjAsIG1hcmdpblRvcDogMCB9fT5DYXJnYXIgbmVjZXNpZGFkPC9oMj5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2FncmVnYXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNiB9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNiB9fT5cbiAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWNhbXBvXCI+UHJvZHVjdG88L2xhYmVsPlxuICA8U2VsZWN0b3JCdXNjYWJsZVxuICAgIG9wY2lvbmVzPXthbGltZW50b3N9XG4gICAgdmFsb3I9e2Zvcm0uYWxpbWVudG9JZH1cbiAgICBvbkNoYW5nZT17aWQgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIGFsaW1lbnRvSWQ6IGlkIH0pfVxuICAgIGNvbk90cm9zXG4gIC8+XG48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHtmb3JtLmFsaW1lbnRvSWQgPT09ICdvdHJvcycgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA4IH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYW1wb1wiIHZhbHVlPXtmb3JtLm90cm9Ob21icmV9IG9uQ2hhbmdlPXtlID0+IHNldEZvcm0oeyAuLi5mb3JtLCBvdHJvTm9tYnJlOiBlLnRhcmdldC52YWx1ZSB9KX0gcGxhY2Vob2xkZXI9XCLCv1F1w6kgcHJvZHVjdG8gbmVjZXNpdMOhcz9cIiBtYXhMZW5ndGg9ezYwfSBhdXRvRm9jdXMgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImNhbXBvXCIgdmFsdWU9e2Zvcm0ub3RyYVVuaWRhZH0gb25DaGFuZ2U9e2UgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIG90cmFVbmlkYWQ6IGUudGFyZ2V0LnZhbHVlIH0pfSBzdHlsZT17eyB3aWR0aDogOTAgfX0gYXJpYS1sYWJlbD1cIlVuaWRhZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1VOSURBREVTLm1hcCh1ID0+IDxvcHRpb24ga2V5PXt1fSB2YWx1ZT17dX0+e3V9PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNiB9fT5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1jYW1wb1wiPkNhbnRpZGFkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYW1wb1wiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiMC41XCIgbWluPVwiMC41XCIgdmFsdWU9e2Zvcm0uY2FudGlkYWR9IG9uQ2hhbmdlPXtlID0+IHNldEZvcm0oeyAuLi5mb3JtLCBjYW50aWRhZDogZS50YXJnZXQudmFsdWUgfSl9IHN0eWxlPXt7IHdpZHRoOiAxNjAgfX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbC1jYW1wb1wiPlVyZ2VuY2lhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogOCB9fT5cbiAgICAgICAgICAgICAgICAgICAge1snYmFqYScsICdtZWRpYScsICdhbHRhJ10ubWFwKHUgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBrZXk9e3V9IGNsYXNzTmFtZT1cInBpbGRvcmFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidXJnXCIgY2hlY2tlZD17Zm9ybS51cmdlbmNpYSA9PT0gdX0gb25DaGFuZ2U9eygpID0+IHNldEZvcm0oeyAuLi5mb3JtLCB1cmdlbmNpYTogdSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyB9fT57dX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1kb25hciBhbmNob1wiPkFncmVnYXIgYSBtaSBwbGFuaWxsYTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5XCIgc3R5bGU9e3sgZm9udFNpemU6IDIwLCBtYXJnaW5Ub3A6IDAsIG1hcmdpbkJvdHRvbTogMTYgfX0+TWkgcGxhbmlsbGEgZGUgbmVjZXNpZGFkZXM8L2gyPlxuICAgICAgICAgICAgICB7cGxhbmlsbGEubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFyamV0YSB0YXJqZXRhLXBhZFwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJyB9fT5Ub2RhdsOtYSBubyBjYXJnYXN0ZSBuZWNlc2lkYWRlcy4gRW1wZXrDoSBjb24gbG8gcXVlIG3DoXMgdGUgZmFsdGEgZXN0YSBzZW1hbmEuPC9kaXY+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXJqZXRhIHRhYmxhLXNjcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxhXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD48dHI+PHRoPlByb2R1Y3RvPC90aD48dGg+Q2FudGlkYWQ8L3RoPjx0aD5VcmdlbmNpYTwvdGg+PHRoPkVzdGFkbzwvdGg+PHRoPjwvdGg+PC90cj48L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAge3BsYW5pbGxhLm1hcChwID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3AuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDggfX0+PHNwYW4gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1uYXJhbmphLWhvdmVyKScgfX0+PEljb25vIG5vbWJyZT17cC5pY29ub30gc2l6ZT17MjB9IC8+PC9zcGFuPjxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDUwMCB9fT57cC5ub21icmV9PC9zcGFuPntwLnBlbmRpZW50ZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJjaGlwIGNoaXAtZ3Jpc1wiIHRpdGxlPVwiRWwgY29vcmRpbmFkb3IgdG9kYXbDrWEgbm8gbG8gc3Vtw7MgYWwgY2F0w6Fsb2dvXCI+ZW4gcmV2aXNpw7NuPC9zcGFuPn08L2Rpdj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFidWxhclwiPntjYW50KHAuY2FudGlkYWQpfSB7cC51bmlkYWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuIGNsYXNzTmFtZT1cImNoaXBcIiBzdHlsZT17VVJHW3AudXJnZW5jaWFdfT57cC51cmdlbmNpYX08L3NwYW4+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknIH19PntFU1RBRE9bcC5lc3RhZG9dfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1pY29ub1wiIG9uQ2xpY2s9eygpID0+IHF1aXRhcihwLmlkKX0gYXJpYS1sYWJlbD1cIlF1aXRhclwiPjxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIxLjdcIj48cGF0aCBkPVwiTTYgN2gxMk05IDdWNWg2djJNOCA3bDEgMTJoNmwxLTEyXCIgLz48L3N2Zz48L2J1dHRvbj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59XG4iXSwiZmlsZSI6Ii9Vc2Vycy9iaWFuY28vRG9jdW1lbnRzL1NVUDIvc3VtYS11bi1wbGF0by1mcm9udGVuZC1tYWluICg1KS9mcm9udGVuZC9zcmMvcGFnZXMvTWVyZW5kZXJvLmpzeCJ9