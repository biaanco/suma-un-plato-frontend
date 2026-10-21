import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/PanelMerenderos.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { get, post, put } from "/src/api.js";
import PanelLayout from "/src/components/PanelLayout.jsx";
function TarjetaMerendero({ merendero, onCambio }) {
  _s();
  const [editar, setEditar] = useState(false);
  const [datos, setDatos] = useState(merendero);
  function cambiar(campo, valor) {
    setDatos({ ...datos, [campo]: valor });
  }
  async function guardar() {
    await put("/merenderos/" + merendero.id, datos);
    setEditar(false);
    onCambio();
  }
  async function alternar() {
    await post("/merenderos/" + merendero.id + "/toggle", {});
    onCambio();
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", style: { opacity: merendero.activo ? 1 : 0.6 }, children: [
    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 12 }, children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h3", { style: { fontSize: 18, margin: 0 }, children: merendero.nombre }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 14, color: "var(--tinta-suave)", margin: 0 }, children: merendero.direccion || "Sin dirección" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("span", { className: merendero.activo ? "chip chip-verde" : "chip chip-gris", children: merendero.activo ? "Activo" : "Inactivo" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 14, color: "var(--tinta-suave)", display: "flex", flexDirection: "column", gap: 4, marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        "Referente: ",
        /* @__PURE__ */ jsxDEV("span", { style: { color: "var(--tinta)" }, children: merendero.referente || "—" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 53,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        "Tel: ",
        /* @__PURE__ */ jsxDEV("span", { style: { color: "var(--tinta)" }, children: merendero.telefono || "—" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 54,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        "Capacidad: ",
        /* @__PURE__ */ jsxDEV("span", { className: "tabular", style: { color: "var(--tinta)" }, children: merendero.capacidad || "—" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 55,
          columnNumber: 25
        }, this),
        " · Horarios: ",
        /* @__PURE__ */ jsxDEV("span", { style: { color: "var(--tinta)" }, children: merendero.horarios || "—" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 55,
          columnNumber: 133
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { children: [
        "Acceso: ",
        /* @__PURE__ */ jsxDEV("span", { style: { color: "var(--tinta)" }, children: merendero.email || "—" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 56,
          columnNumber: 22
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ jsxDEV("button", { className: "btn-fantasma", style: { padding: "6px 12px", minHeight: "auto", fontSize: 14 }, onClick: () => setEditar(!editar), children: "Editar" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "btn-fantasma", style: { padding: "6px 12px", minHeight: "auto", fontSize: 14 }, onClick: alternar, children: merendero.activo ? "Desactivar" : "Activar" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    editar && /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 16, borderTop: "1px solid var(--borde)", paddingTop: 16, display: "flex", flexDirection: "column", gap: 8 }, children: [
      /* @__PURE__ */ jsxDEV("input", { className: "campo", value: datos.nombre || "", onChange: (e) => cambiar("nombre", e.target.value), placeholder: "Nombre" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("input", { className: "campo", value: datos.direccion || "", onChange: (e) => cambiar("direccion", e.target.value), placeholder: "Dirección" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("input", { className: "campo", value: datos.referente || "", onChange: (e) => cambiar("referente", e.target.value), placeholder: "Referente" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("input", { className: "campo", value: datos.telefono || "", onChange: (e) => cambiar("telefono", e.target.value), placeholder: "Teléfono" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("input", { className: "campo", type: "number", value: datos.capacidad || "", onChange: (e) => cambiar("capacidad", e.target.value), placeholder: "Capacidad" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("input", { className: "campo", value: datos.horarios || "", onChange: (e) => cambiar("horarios", e.target.value), placeholder: "Horarios" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "btn-verde", style: { padding: "6px 12px", minHeight: "auto", fontSize: 14, alignSelf: "flex-start" }, onClick: guardar, children: "Guardar" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
_s(TarjetaMerendero, "sKzR71JaIO3zHnpgu2T0X13Rc3s=");
_c = TarjetaMerendero;
export default function PanelMerenderos() {
  _s2();
  const [merenderos, setMerenderos] = useState([]);
  const [crear, setCrear] = useState(false);
  const [nuevo, setNuevo] = useState({ nombre: "", referente: "", direccion: "", telefono: "", capacidad: "", horarios: "", email: "", password: "" });
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  function cargar() {
    get("/merenderos").then(setMerenderos).catch(() => {
    });
  }
  useEffect(() => {
    cargar();
  }, []);
  function cambiar(campo, valor) {
    setNuevo({ ...nuevo, [campo]: valor });
  }
  async function guardarNuevo(e) {
    e.preventDefault();
    setError("");
    try {
      await post("/merenderos", nuevo);
      setMensaje('Merendero "' + nuevo.nombre + '" creado. Ya puede ingresar con su email.');
      setNuevo({ nombre: "", referente: "", direccion: "", telefono: "", capacidad: "", horarios: "", email: "", password: "" });
      setCrear(false);
      cargar();
    } catch (err) {
      setError(err.message);
    }
  }
  return /* @__PURE__ */ jsxDEV(PanelLayout, { titulo: "Merenderos", seccion: "merenderos", children: [
    /* @__PURE__ */ jsxDEV("p", { className: "medida", style: { color: "var(--tinta-suave)", marginBottom: 24 }, children: "La gestión de la red. Este es el único lugar donde nacen los merenderos, y solo el administrador puede hacerlo. Al crearlos, se les genera su cuenta para que carguen sus necesidades." }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    mensaje && /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-ok", children: mensaje }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
      lineNumber: 113,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", style: { marginBottom: 32 }, children: [
      /* @__PURE__ */ jsxDEV("button", { className: "btn-fantasma", onClick: () => setCrear(!crear), children: "+ Crear nuevo merendero" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      crear && /* @__PURE__ */ jsxDEV("form", { onSubmit: guardarNuevo, className: "grid grid-2", style: { marginTop: 20 }, children: [
        error && /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-error", style: { gridColumn: "1 / -1" }, children: error }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 119,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Nombre del merendero" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
            lineNumber: 120,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("input", { className: "campo", value: nuevo.nombre, onChange: (e) => cambiar("nombre", e.target.value), required: true }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
            lineNumber: 120,
            columnNumber: 77
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 120,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Referente" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
            lineNumber: 121,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("input", { className: "campo", value: nuevo.referente, onChange: (e) => cambiar("referente", e.target.value) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
            lineNumber: 121,
            columnNumber: 66
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Dirección" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
            lineNumber: 122,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("input", { className: "campo", value: nuevo.direccion, onChange: (e) => cambiar("direccion", e.target.value) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
            lineNumber: 122,
            columnNumber: 66
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 122,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Teléfono" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
            lineNumber: 123,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("input", { className: "campo", value: nuevo.telefono, onChange: (e) => cambiar("telefono", e.target.value) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
            lineNumber: 123,
            columnNumber: 65
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Capacidad (personas)" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
            lineNumber: 124,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("input", { className: "campo", type: "number", value: nuevo.capacidad, onChange: (e) => cambiar("capacidad", e.target.value) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
            lineNumber: 124,
            columnNumber: 77
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 124,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Horarios" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
            lineNumber: 125,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("input", { className: "campo", value: nuevo.horarios, onChange: (e) => cambiar("horarios", e.target.value), placeholder: "Lun a Vie 16-18h" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
            lineNumber: 125,
            columnNumber: 65
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 125,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Email (para ingresar)" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
            lineNumber: 126,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("input", { className: "campo", type: "email", value: nuevo.email, onChange: (e) => cambiar("email", e.target.value), required: true }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
            lineNumber: 126,
            columnNumber: 78
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Contraseña" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
            lineNumber: 127,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ jsxDEV("input", { className: "campo", type: "password", value: nuevo.password, onChange: (e) => cambiar("password", e.target.value), required: true, minLength: 6 }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
            lineNumber: 127,
            columnNumber: 67
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 127,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { gridColumn: "1 / -1" }, children: /* @__PURE__ */ jsxDEV("button", { className: "btn-donar", children: "Crear merendero" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 128,
          columnNumber: 51
        }, this) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
          lineNumber: 128,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 118,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-2", children: merenderos.map(
      (m) => /* @__PURE__ */ jsxDEV(TarjetaMerendero, { merendero: m, onCambio: cargar }, m.id, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
        lineNumber: 135,
        columnNumber: 9
      }, this)
    ) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
      lineNumber: 133,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx",
    lineNumber: 109,
    columnNumber: 5
  }, this);
}
_s2(PanelMerenderos, "K0MKg25mwckiSqAgBi+kHu2KfsQ=");
_c2 = PanelMerenderos;
var _c, _c2;
$RefreshReg$(_c, "TarjetaMerendero");
$RefreshReg$(_c2, "PanelMerenderos");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/PanelMerenderos.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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aUNBQUMsWUFBTyxXQUFVLGFBQVksK0JBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBNkMsS0FBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE0RjtBQUFBLFdBVjlGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFXQTtBQUFBLFNBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWdCQTtBQUFBLElBRUEsdUJBQUMsU0FBSSxXQUFVLGVBQ1psQixxQkFBV21CO0FBQUFBLE1BQUksQ0FBQUMsTUFDZCx1QkFBQyxvQkFBNEIsV0FBV0EsR0FBRyxVQUFVVCxVQUE5QlMsRUFBRWxELElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBNEQ7QUFBQSxJQUM3RCxLQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FJQTtBQUFBLE9BNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E2QkE7QUFFSjtBQUFDNkIsSUEvRHVCRCxpQkFBZTtBQUFBLE1BQWZBO0FBQWUsSUFBQXVCLElBQUFDO0FBQUEsYUFBQUQsSUFBQTtBQUFBLGFBQUFDLEtBQUEiLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldCIsInBvc3QiLCJwdXQiLCJQYW5lbExheW91dCIsIlRhcmpldGFNZXJlbmRlcm8iLCJtZXJlbmRlcm8iLCJvbkNhbWJpbyIsIl9zIiwiZWRpdGFyIiwic2V0RWRpdGFyIiwiZGF0b3MiLCJzZXREYXRvcyIsImNhbWJpYXIiLCJjYW1wbyIsInZhbG9yIiwiZ3VhcmRhciIsImlkIiwiYWx0ZXJuYXIiLCJvcGFjaXR5IiwiYWN0aXZvIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZ2FwIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJtYXJnaW4iLCJub21icmUiLCJjb2xvciIsImRpcmVjY2lvbiIsImZsZXhEaXJlY3Rpb24iLCJyZWZlcmVudGUiLCJ0ZWxlZm9ubyIsImNhcGFjaWRhZCIsImhvcmFyaW9zIiwiZW1haWwiLCJwYWRkaW5nIiwibWluSGVpZ2h0IiwibWFyZ2luVG9wIiwiYm9yZGVyVG9wIiwicGFkZGluZ1RvcCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFsaWduU2VsZiIsIlBhbmVsTWVyZW5kZXJvcyIsIl9zMiIsIm1lcmVuZGVyb3MiLCJzZXRNZXJlbmRlcm9zIiwiY3JlYXIiLCJzZXRDcmVhciIsIm51ZXZvIiwic2V0TnVldm8iLCJwYXNzd29yZCIsIm1lbnNhamUiLCJzZXRNZW5zYWplIiwiZXJyb3IiLCJzZXRFcnJvciIsImNhcmdhciIsInRoZW4iLCJjYXRjaCIsImd1YXJkYXJOdWV2byIsInByZXZlbnREZWZhdWx0IiwiZXJyIiwibWVzc2FnZSIsImdyaWRDb2x1bW4iLCJtYXAiLCJtIiwiX2MiLCJfYzIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUGFuZWxNZXJlbmRlcm9zLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXQsIHBvc3QsIHB1dCB9IGZyb20gJy4uL2FwaSdcbmltcG9ydCBQYW5lbExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL1BhbmVsTGF5b3V0J1xuXG5mdW5jdGlvbiBUYXJqZXRhTWVyZW5kZXJvKHsgbWVyZW5kZXJvLCBvbkNhbWJpbyB9KSB7XG4gIGNvbnN0IFtlZGl0YXIsIHNldEVkaXRhcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2RhdG9zLCBzZXREYXRvc10gPSB1c2VTdGF0ZShtZXJlbmRlcm8pXG5cbiAgZnVuY3Rpb24gY2FtYmlhcihjYW1wbywgdmFsb3IpIHtcbiAgICBzZXREYXRvcyh7IC4uLmRhdG9zLCBbY2FtcG9dOiB2YWxvciB9KVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ3VhcmRhcigpIHtcbiAgICBhd2FpdCBwdXQoJy9tZXJlbmRlcm9zLycgKyBtZXJlbmRlcm8uaWQsIGRhdG9zKVxuICAgIHNldEVkaXRhcihmYWxzZSlcbiAgICBvbkNhbWJpbygpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBhbHRlcm5hcigpIHtcbiAgICBhd2FpdCBwb3N0KCcvbWVyZW5kZXJvcy8nICsgbWVyZW5kZXJvLmlkICsgJy90b2dnbGUnLCB7fSlcbiAgICBvbkNhbWJpbygpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGFyamV0YSB0YXJqZXRhLXBhZFwiIHN0eWxlPXt7IG9wYWNpdHk6IG1lcmVuZGVyby5hY3Rpdm8gPyAxIDogMC42IH19PlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGdhcDogMTIsIG1hcmdpbkJvdHRvbTogMTIgfX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAxOCwgbWFyZ2luOiAwIH19PnttZXJlbmRlcm8ubm9tYnJlfTwvaDM+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScsIG1hcmdpbjogMCB9fT57bWVyZW5kZXJvLmRpcmVjY2lvbiB8fCAnU2luIGRpcmVjY2nDs24nfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17bWVyZW5kZXJvLmFjdGl2byA/ICdjaGlwIGNoaXAtdmVyZGUnIDogJ2NoaXAgY2hpcC1ncmlzJ30+e21lcmVuZGVyby5hY3Rpdm8gPyAnQWN0aXZvJyA6ICdJbmFjdGl2byd9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDQsIG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgIDxkaXY+UmVmZXJlbnRlOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRpbnRhKScgfX0+e21lcmVuZGVyby5yZWZlcmVudGUgfHwgJ+KAlCd9PC9zcGFuPjwvZGl2PlxuICAgICAgICA8ZGl2PlRlbDogPHNwYW4gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YSknIH19PnttZXJlbmRlcm8udGVsZWZvbm8gfHwgJ+KAlCd9PC9zcGFuPjwvZGl2PlxuICAgICAgICA8ZGl2PkNhcGFjaWRhZDogPHNwYW4gY2xhc3NOYW1lPVwidGFidWxhclwiIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGludGEpJyB9fT57bWVyZW5kZXJvLmNhcGFjaWRhZCB8fCAn4oCUJ308L3NwYW4+IMK3IEhvcmFyaW9zOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRpbnRhKScgfX0+e21lcmVuZGVyby5ob3JhcmlvcyB8fCAn4oCUJ308L3NwYW4+PC9kaXY+XG4gICAgICAgIDxkaXY+QWNjZXNvOiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRpbnRhKScgfX0+e21lcmVuZGVyby5lbWFpbCB8fCAn4oCUJ308L3NwYW4+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDggfX0+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWZhbnRhc21hXCIgc3R5bGU9e3sgcGFkZGluZzogJzZweCAxMnB4JywgbWluSGVpZ2h0OiAnYXV0bycsIGZvbnRTaXplOiAxNCB9fSBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0YXIoIWVkaXRhcil9PkVkaXRhcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1mYW50YXNtYVwiIHN0eWxlPXt7IHBhZGRpbmc6ICc2cHggMTJweCcsIG1pbkhlaWdodDogJ2F1dG8nLCBmb250U2l6ZTogMTQgfX0gb25DbGljaz17YWx0ZXJuYXJ9PnttZXJlbmRlcm8uYWN0aXZvID8gJ0Rlc2FjdGl2YXInIDogJ0FjdGl2YXInfTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7ZWRpdGFyICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDE2LCBib3JkZXJUb3A6ICcxcHggc29saWQgdmFyKC0tYm9yZGUpJywgcGFkZGluZ1RvcDogMTYsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogOCB9fT5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FtcG9cIiB2YWx1ZT17ZGF0b3Mubm9tYnJlIHx8ICcnfSBvbkNoYW5nZT17ZSA9PiBjYW1iaWFyKCdub21icmUnLCBlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiTm9tYnJlXCIgLz5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FtcG9cIiB2YWx1ZT17ZGF0b3MuZGlyZWNjaW9uIHx8ICcnfSBvbkNoYW5nZT17ZSA9PiBjYW1iaWFyKCdkaXJlY2Npb24nLCBlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiRGlyZWNjacOzblwiIC8+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhbXBvXCIgdmFsdWU9e2RhdG9zLnJlZmVyZW50ZSB8fCAnJ30gb25DaGFuZ2U9e2UgPT4gY2FtYmlhcigncmVmZXJlbnRlJywgZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIlJlZmVyZW50ZVwiIC8+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhbXBvXCIgdmFsdWU9e2RhdG9zLnRlbGVmb25vIHx8ICcnfSBvbkNoYW5nZT17ZSA9PiBjYW1iaWFyKCd0ZWxlZm9ubycsIGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJUZWzDqWZvbm9cIiAvPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYW1wb1wiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17ZGF0b3MuY2FwYWNpZGFkIHx8ICcnfSBvbkNoYW5nZT17ZSA9PiBjYW1iaWFyKCdjYXBhY2lkYWQnLCBlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiQ2FwYWNpZGFkXCIgLz5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FtcG9cIiB2YWx1ZT17ZGF0b3MuaG9yYXJpb3MgfHwgJyd9IG9uQ2hhbmdlPXtlID0+IGNhbWJpYXIoJ2hvcmFyaW9zJywgZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIkhvcmFyaW9zXCIgLz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi12ZXJkZVwiIHN0eWxlPXt7IHBhZGRpbmc6ICc2cHggMTJweCcsIG1pbkhlaWdodDogJ2F1dG8nLCBmb250U2l6ZTogMTQsIGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnIH19IG9uQ2xpY2s9e2d1YXJkYXJ9Pkd1YXJkYXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhbmVsTWVyZW5kZXJvcygpIHtcbiAgY29uc3QgW21lcmVuZGVyb3MsIHNldE1lcmVuZGVyb3NdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtjcmVhciwgc2V0Q3JlYXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtudWV2bywgc2V0TnVldm9dID0gdXNlU3RhdGUoeyBub21icmU6ICcnLCByZWZlcmVudGU6ICcnLCBkaXJlY2Npb246ICcnLCB0ZWxlZm9ubzogJycsIGNhcGFjaWRhZDogJycsIGhvcmFyaW9zOiAnJywgZW1haWw6ICcnLCBwYXNzd29yZDogJycgfSlcbiAgY29uc3QgW21lbnNhamUsIHNldE1lbnNhamVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXG5cbiAgZnVuY3Rpb24gY2FyZ2FyKCkge1xuICAgIGdldCgnL21lcmVuZGVyb3MnKS50aGVuKHNldE1lcmVuZGVyb3MpLmNhdGNoKCgpID0+IHt9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHsgY2FyZ2FyKCkgfSwgW10pXG5cbiAgZnVuY3Rpb24gY2FtYmlhcihjYW1wbywgdmFsb3IpIHtcbiAgICBzZXROdWV2byh7IC4uLm51ZXZvLCBbY2FtcG9dOiB2YWxvciB9KVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ3VhcmRhck51ZXZvKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRFcnJvcignJylcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcG9zdCgnL21lcmVuZGVyb3MnLCBudWV2bylcbiAgICAgIHNldE1lbnNhamUoJ01lcmVuZGVybyBcIicgKyBudWV2by5ub21icmUgKyAnXCIgY3JlYWRvLiBZYSBwdWVkZSBpbmdyZXNhciBjb24gc3UgZW1haWwuJylcbiAgICAgIHNldE51ZXZvKHsgbm9tYnJlOiAnJywgcmVmZXJlbnRlOiAnJywgZGlyZWNjaW9uOiAnJywgdGVsZWZvbm86ICcnLCBjYXBhY2lkYWQ6ICcnLCBob3JhcmlvczogJycsIGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH0pXG4gICAgICBzZXRDcmVhcihmYWxzZSlcbiAgICAgIGNhcmdhcigpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQYW5lbExheW91dCB0aXR1bG89XCJNZXJlbmRlcm9zXCIgc2VjY2lvbj1cIm1lcmVuZGVyb3NcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1lZGlkYVwiIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJywgbWFyZ2luQm90dG9tOiAyNCB9fT5cbiAgICAgICAgTGEgZ2VzdGnDs24gZGUgbGEgcmVkLiBFc3RlIGVzIGVsIMO6bmljbyBsdWdhciBkb25kZSBuYWNlbiBsb3MgbWVyZW5kZXJvcywgeSBzb2xvIGVsIGFkbWluaXN0cmFkb3IgcHVlZGUgaGFjZXJsby4gQWwgY3JlYXJsb3MsIHNlIGxlcyBnZW5lcmEgc3UgY3VlbnRhIHBhcmEgcXVlIGNhcmd1ZW4gc3VzIG5lY2VzaWRhZGVzLlxuICAgICAgPC9wPlxuICAgICAge21lbnNhamUgJiYgPGRpdiBjbGFzc05hbWU9XCJhbGVydGEgYWxlcnRhLW9rXCI+e21lbnNhamV9PC9kaXY+fVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhcmpldGEgdGFyamV0YS1wYWRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDMyIH19PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1mYW50YXNtYVwiIG9uQ2xpY2s9eygpID0+IHNldENyZWFyKCFjcmVhcil9PisgQ3JlYXIgbnVldm8gbWVyZW5kZXJvPC9idXR0b24+XG4gICAgICAgIHtjcmVhciAmJiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2d1YXJkYXJOdWV2b30gY2xhc3NOYW1lPVwiZ3JpZCBncmlkLTJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxuICAgICAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRhIGFsZXJ0YS1lcnJvclwiIHN0eWxlPXt7IGdyaWRDb2x1bW46ICcxIC8gLTEnIH19PntlcnJvcn08L2Rpdj59XG4gICAgICAgICAgICA8ZGl2PjxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1jYW1wb1wiPk5vbWJyZSBkZWwgbWVyZW5kZXJvPC9sYWJlbD48aW5wdXQgY2xhc3NOYW1lPVwiY2FtcG9cIiB2YWx1ZT17bnVldm8ubm9tYnJlfSBvbkNoYW5nZT17ZSA9PiBjYW1iaWFyKCdub21icmUnLCBlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1jYW1wb1wiPlJlZmVyZW50ZTwvbGFiZWw+PGlucHV0IGNsYXNzTmFtZT1cImNhbXBvXCIgdmFsdWU9e251ZXZvLnJlZmVyZW50ZX0gb25DaGFuZ2U9e2UgPT4gY2FtYmlhcigncmVmZXJlbnRlJywgZS50YXJnZXQudmFsdWUpfSAvPjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtY2FtcG9cIj5EaXJlY2Npw7NuPC9sYWJlbD48aW5wdXQgY2xhc3NOYW1lPVwiY2FtcG9cIiB2YWx1ZT17bnVldm8uZGlyZWNjaW9ufSBvbkNoYW5nZT17ZSA9PiBjYW1iaWFyKCdkaXJlY2Npb24nLCBlLnRhcmdldC52YWx1ZSl9IC8+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1jYW1wb1wiPlRlbMOpZm9ubzwvbGFiZWw+PGlucHV0IGNsYXNzTmFtZT1cImNhbXBvXCIgdmFsdWU9e251ZXZvLnRlbGVmb25vfSBvbkNoYW5nZT17ZSA9PiBjYW1iaWFyKCd0ZWxlZm9ubycsIGUudGFyZ2V0LnZhbHVlKX0gLz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWNhbXBvXCI+Q2FwYWNpZGFkIChwZXJzb25hcyk8L2xhYmVsPjxpbnB1dCBjbGFzc05hbWU9XCJjYW1wb1wiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17bnVldm8uY2FwYWNpZGFkfSBvbkNoYW5nZT17ZSA9PiBjYW1iaWFyKCdjYXBhY2lkYWQnLCBlLnRhcmdldC52YWx1ZSl9IC8+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1jYW1wb1wiPkhvcmFyaW9zPC9sYWJlbD48aW5wdXQgY2xhc3NOYW1lPVwiY2FtcG9cIiB2YWx1ZT17bnVldm8uaG9yYXJpb3N9IG9uQ2hhbmdlPXtlID0+IGNhbWJpYXIoJ2hvcmFyaW9zJywgZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIkx1biBhIFZpZSAxNi0xOGhcIiAvPjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtY2FtcG9cIj5FbWFpbCAocGFyYSBpbmdyZXNhcik8L2xhYmVsPjxpbnB1dCBjbGFzc05hbWU9XCJjYW1wb1wiIHR5cGU9XCJlbWFpbFwiIHZhbHVlPXtudWV2by5lbWFpbH0gb25DaGFuZ2U9e2UgPT4gY2FtYmlhcignZW1haWwnLCBlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PjxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1jYW1wb1wiPkNvbnRyYXNlw7FhPC9sYWJlbD48aW5wdXQgY2xhc3NOYW1lPVwiY2FtcG9cIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17bnVldm8ucGFzc3dvcmR9IG9uQ2hhbmdlPXtlID0+IGNhbWJpYXIoJ3Bhc3N3b3JkJywgZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCBtaW5MZW5ndGg9ezZ9IC8+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGdyaWRDb2x1bW46ICcxIC8gLTEnIH19PjxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWRvbmFyXCI+Q3JlYXIgbWVyZW5kZXJvPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLTJcIj5cbiAgICAgICAge21lcmVuZGVyb3MubWFwKG0gPT4gKFxuICAgICAgICAgIDxUYXJqZXRhTWVyZW5kZXJvIGtleT17bS5pZH0gbWVyZW5kZXJvPXttfSBvbkNhbWJpbz17Y2FyZ2FyfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFuZWxMYXlvdXQ+XG4gIClcbn1cbiJdLCJmaWxlIjoiL1VzZXJzL2JpYW5jby9Eb2N1bWVudHMvU1VQMi9zdW1hLXVuLXBsYXRvLWZyb250ZW5kLW1haW4gKDUpL2Zyb250ZW5kL3NyYy9wYWdlcy9QYW5lbE1lcmVuZGVyb3MuanN4In0=