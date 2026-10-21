import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Donar.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=9f826408";
import { get, post } from "/src/api.js";
import { usuarioActual } from "/src/auth.js";
import { cant } from "/src/format.js";
import Header from "/src/components/Header.jsx";
import Footer from "/src/components/Footer.jsx";
import Icono from "/src/components/Icono.jsx";
export default function Donar() {
  _s();
  const usuario = usuarioActual();
  const navigate = useNavigate();
  const [catalogo, setCatalogo] = useState([]);
  const [carrito, setCarrito] = useState({});
  const [cantidades, setCantidades] = useState({});
  const [nota, setNota] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  useEffect(() => {
    if (!usuario || usuario.rol !== "donante") {
      navigate("/login");
      return;
    }
    get("/alimentos").then(setCatalogo).catch(() => {
    });
  }, []);
  if (!usuario || usuario.rol !== "donante") {
    return null;
  }
  function agregar(alimento) {
    const suma = Number(cantidades[alimento.id]) || 1;
    setCarrito((prev) => ({ ...prev, [alimento.id]: (prev[alimento.id] || 0) + suma }));
  }
  function quitar(id) {
    const copia = { ...carrito };
    delete copia[id];
    setCarrito(copia);
  }
  async function confirmar() {
    const items = Object.keys(carrito).map((id) => ({ alimentoId: Number(id), cantidad: carrito[id] }));
    if (items.length === 0) {
      setError("Tu donación está vacía.");
      return;
    }
    setError("");
    setCargando(true);
    try {
      const donacion = await post("/donaciones", { donanteId: usuario.id, nota, items });
      navigate("/donacion-confirmada/" + donacion.id);
    } catch (err) {
      setError(err.message);
      setCargando(false);
    }
  }
  const noPerecederos = catalogo.filter((a) => a.categoria === "no_perecedero");
  const perecederos = catalogo.filter((a) => a.categoria === "perecedero");
  const idsCarrito = Object.keys(carrito);
  const totalItems = idsCarrito.reduce((suma, id) => suma + carrito[id], 0);
  function nombrePorId(id) {
    const a = catalogo.find((x) => x.id === Number(id));
    return a ? a : { nombre: "", unidad: "", icono: "bag" };
  }
  function grupo(titulo, lista) {
    return /* @__PURE__ */ jsxDEV("section", { style: { marginBottom: 40 }, children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "font-display", style: { fontSize: 22 }, children: titulo }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-2", children: lista.map(
        (a) => /* @__PURE__ */ jsxDEV("div", { className: "tarjeta", style: { padding: 16, display: "flex", alignItems: "center", gap: 12 }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icono-circulo", style: { width: 44, height: 44 }, children: /* @__PURE__ */ jsxDEV(Icono, { nombre: a.icono, size: 20 }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
            lineNumber: 96,
            columnNumber: 80
          }, this) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
            lineNumber: 96,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: 600 }, children: a.nombre }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
              lineNumber: 98,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { fontSize: 12, color: "var(--tinta-suave)" }, children: [
              "unidad: ",
              a.unidad
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
              lineNumber: 99,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "number",
              min: "0.5",
              step: "0.5",
              value: cantidades[a.id] || 1,
              onChange: (e) => setCantidades({ ...cantidades, [a.id]: e.target.value }),
              className: "campo",
              style: { width: 72, textAlign: "center", padding: "6px 8px" }
            },
            void 0,
            false,
            {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
              lineNumber: 101,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("button", { className: "btn-verde", style: { padding: "8px 12px" }, onClick: () => agregar(a), "aria-label": "Agregar " + a.nombre, children: "+" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
            lineNumber: 104,
            columnNumber: 15
          }, this)
        ] }, a.id, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
      lineNumber: 91,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "contenedor", style: { padding: "40px 16px" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 32 }, children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "font-display", style: { fontSize: 34, margin: 0 }, children: "Armá tu donación" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("p", { className: "medida", style: { color: "var(--tinta-suave)" }, children: "Elegí de la lista, como en una compra. La unidad ya viene cargada para que no tengas que adivinar." }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
          lineNumber: 118,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gridTemplateColumns: "1fr", gap: 32 }, className: "donar-grid", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          grupo("No perecederos", noPerecederos),
          grupo("Perecederos", perecederos)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("aside", { children: /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", children: [
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }, children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "font-display", style: { fontSize: 20, margin: 0 }, children: "Tu donación" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
              lineNumber: 130,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "chip chip-suave", children: [
              cant(totalItems),
              " ítems"
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
              lineNumber: 131,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          error && /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-error", children: error }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
            lineNumber: 133,
            columnNumber: 25
          }, this),
          idsCarrito.length === 0 ? /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--tinta-suave)", fontSize: 14, textAlign: "center", padding: "24px 0" }, children: [
            "Todavía no agregaste nada.",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
              lineNumber: 135,
              columnNumber: 138
            }, this),
            "Elegí de la lista."
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
            lineNumber: 135,
            columnNumber: 15
          }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("ul", { style: { listStyle: "none", padding: 0, margin: "0 0 16px" }, children: idsCarrito.map((id) => {
              const a = nombrePorId(id);
              return /* @__PURE__ */ jsxDEV("li", { style: { display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderTop: "1px solid var(--borde)" }, children: [
                /* @__PURE__ */ jsxDEV("span", { style: { color: "var(--naranja-hover)" }, children: /* @__PURE__ */ jsxDEV(Icono, { nombre: a.icono, size: 20 }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
                  lineNumber: 143,
                  columnNumber: 75
                }, this) }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
                  lineNumber: 143,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDEV("div", { style: { flex: 1, minWidth: 0 }, children: [
                  /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: 500 }, children: a.nombre }, void 0, false, {
                    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
                    lineNumber: 145,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "tabular", style: { fontSize: 14, color: "var(--tinta-suave)" }, children: [
                    cant(carrito[id]),
                    " ",
                    a.unidad
                  ] }, void 0, true, {
                    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
                    lineNumber: 146,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
                  lineNumber: 144,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ jsxDEV("button", { className: "btn-icono", onClick: () => quitar(id), "aria-label": "Quitar " + a.nombre, children: /* @__PURE__ */ jsxDEV("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", children: /* @__PURE__ */ jsxDEV("path", { d: "M6 7h12M9 7V5h6v2M8 7l1 12h6l1-12" }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
                  lineNumber: 149,
                  columnNumber: 129
                }, this) }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
                  lineNumber: 149,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
                  lineNumber: 148,
                  columnNumber: 27
                }, this)
              ] }, id, true, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
                lineNumber: 142,
                columnNumber: 23
              }, this);
            }) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
              lineNumber: 138,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("label", { className: "label-campo", htmlFor: "nota", children: "Nota (opcional)" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
              lineNumber: 155,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("input", { className: "campo", id: "nota", value: nota, onChange: (e) => setNota(e.target.value), placeholder: "Ej: paso el jueves a la tarde", style: { marginBottom: 12 } }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
              lineNumber: 156,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("button", { className: "btn-donar ancho", onClick: confirmar, disabled: cargando, children: cargando ? "Confirmando…" : "Confirmar donación" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
              lineNumber: 157,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
            lineNumber: 137,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
          lineNumber: 128,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
          lineNumber: 127,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
        lineNumber: 121,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
      lineNumber: 164,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx",
    lineNumber: 113,
    columnNumber: 5
  }, this);
}
_s(Donar, "Gm0maS4P1hV7a23HvmsJukpJk2E=", false, function() {
  return [useNavigate];
});
_c = Donar;
var _c;
$RefreshReg$(_c, "Donar");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Donar.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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LFdBQVc7QUFBQTtBQUFBLEtBRk5RO0FBQUssSUFBQTZFO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTmF2aWdhdGUiLCJnZXQiLCJwb3N0IiwidXN1YXJpb0FjdHVhbCIsImNhbnQiLCJIZWFkZXIiLCJGb290ZXIiLCJJY29ubyIsIkRvbmFyIiwiX3MiLCJ1c3VhcmlvIiwibmF2aWdhdGUiLCJjYXRhbG9nbyIsInNldENhdGFsb2dvIiwiY2Fycml0byIsInNldENhcnJpdG8iLCJjYW50aWRhZGVzIiwic2V0Q2FudGlkYWRlcyIsIm5vdGEiLCJzZXROb3RhIiwiZXJyb3IiLCJzZXRFcnJvciIsImNhcmdhbmRvIiwic2V0Q2FyZ2FuZG8iLCJyb2wiLCJ0aGVuIiwiY2F0Y2giLCJhZ3JlZ2FyIiwiYWxpbWVudG8iLCJzdW1hIiwiTnVtYmVyIiwiaWQiLCJwcmV2IiwicXVpdGFyIiwiY29waWEiLCJjb25maXJtYXIiLCJpdGVtcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJhbGltZW50b0lkIiwiY2FudGlkYWQiLCJsZW5ndGgiLCJkb25hY2lvbiIsImRvbmFudGVJZCIsImVyciIsIm1lc3NhZ2UiLCJub1BlcmVjZWRlcm9zIiwiZmlsdGVyIiwiYSIsImNhdGVnb3JpYSIsInBlcmVjZWRlcm9zIiwiaWRzQ2Fycml0byIsInRvdGFsSXRlbXMiLCJyZWR1Y2UiLCJub21icmVQb3JJZCIsImZpbmQiLCJ4Iiwibm9tYnJlIiwidW5pZGFkIiwiaWNvbm8iLCJncnVwbyIsInRpdHVsbyIsImxpc3RhIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJwYWRkaW5nIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJnYXAiLCJ3aWR0aCIsImhlaWdodCIsImZsZXgiLCJtaW5XaWR0aCIsImZvbnRXZWlnaHQiLCJjb2xvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHRBbGlnbiIsIm1hcmdpbiIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJqdXN0aWZ5Q29udGVudCIsImxpc3RTdHlsZSIsImJvcmRlclRvcCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkRvbmFyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBnZXQsIHBvc3QgfSBmcm9tICcuLi9hcGknXG5pbXBvcnQgeyB1c3VhcmlvQWN0dWFsIH0gZnJvbSAnLi4vYXV0aCdcbmltcG9ydCB7IGNhbnQgfSBmcm9tICcuLi9mb3JtYXQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCBJY29ubyBmcm9tICcuLi9jb21wb25lbnRzL0ljb25vJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb25hcigpIHtcbiAgY29uc3QgdXN1YXJpbyA9IHVzdWFyaW9BY3R1YWwoKVxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKClcbiAgY29uc3QgW2NhdGFsb2dvLCBzZXRDYXRhbG9nb10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2NhcnJpdG8sIHNldENhcnJpdG9dID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFtjYW50aWRhZGVzLCBzZXRDYW50aWRhZGVzXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbbm90YSwgc2V0Tm90YV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2NhcmdhbmRvLCBzZXRDYXJnYW5kb10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdXN1YXJpbyB8fCB1c3VhcmlvLnJvbCAhPT0gJ2RvbmFudGUnKSB7XG4gICAgICBuYXZpZ2F0ZSgnL2xvZ2luJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBnZXQoJy9hbGltZW50b3MnKS50aGVuKHNldENhdGFsb2dvKS5jYXRjaCgoKSA9PiB7fSlcbiAgfSwgW10pXG5cbiAgaWYgKCF1c3VhcmlvIHx8IHVzdWFyaW8ucm9sICE9PSAnZG9uYW50ZScpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZnVuY3Rpb24gYWdyZWdhcihhbGltZW50bykge1xuICAgIGNvbnN0IHN1bWEgPSBOdW1iZXIoY2FudGlkYWRlc1thbGltZW50by5pZF0pIHx8IDFcbiAgICBzZXRDYXJyaXRvKHByZXYgPT4gKHsgLi4ucHJldiwgW2FsaW1lbnRvLmlkXTogKHByZXZbYWxpbWVudG8uaWRdIHx8IDApICsgc3VtYSB9KSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aXRhcihpZCkge1xuICAgIGNvbnN0IGNvcGlhID0geyAuLi5jYXJyaXRvIH1cbiAgICBkZWxldGUgY29waWFbaWRdXG4gICAgc2V0Q2Fycml0byhjb3BpYSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbmZpcm1hcigpIHtcbiAgICBjb25zdCBpdGVtcyA9IE9iamVjdC5rZXlzKGNhcnJpdG8pLm1hcChpZCA9PiAoeyBhbGltZW50b0lkOiBOdW1iZXIoaWQpLCBjYW50aWRhZDogY2Fycml0b1tpZF0gfSkpXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0RXJyb3IoJ1R1IGRvbmFjacOzbiBlc3TDoSB2YWPDrWEuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRFcnJvcignJylcbiAgICBzZXRDYXJnYW5kbyh0cnVlKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBkb25hY2lvbiA9IGF3YWl0IHBvc3QoJy9kb25hY2lvbmVzJywgeyBkb25hbnRlSWQ6IHVzdWFyaW8uaWQsIG5vdGEsIGl0ZW1zIH0pXG4gICAgICBuYXZpZ2F0ZSgnL2RvbmFjaW9uLWNvbmZpcm1hZGEvJyArIGRvbmFjaW9uLmlkKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgICBzZXRDYXJnYW5kbyhmYWxzZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBub1BlcmVjZWRlcm9zID0gY2F0YWxvZ28uZmlsdGVyKGEgPT4gYS5jYXRlZ29yaWEgPT09ICdub19wZXJlY2VkZXJvJylcbiAgY29uc3QgcGVyZWNlZGVyb3MgPSBjYXRhbG9nby5maWx0ZXIoYSA9PiBhLmNhdGVnb3JpYSA9PT0gJ3BlcmVjZWRlcm8nKVxuICBjb25zdCBpZHNDYXJyaXRvID0gT2JqZWN0LmtleXMoY2Fycml0bylcbiAgY29uc3QgdG90YWxJdGVtcyA9IGlkc0NhcnJpdG8ucmVkdWNlKChzdW1hLCBpZCkgPT4gc3VtYSArIGNhcnJpdG9baWRdLCAwKVxuXG4gIGZ1bmN0aW9uIG5vbWJyZVBvcklkKGlkKSB7XG4gICAgY29uc3QgYSA9IGNhdGFsb2dvLmZpbmQoeCA9PiB4LmlkID09PSBOdW1iZXIoaWQpKVxuICAgIHJldHVybiBhID8gYSA6IHsgbm9tYnJlOiAnJywgdW5pZGFkOiAnJywgaWNvbm86ICdiYWcnIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdydXBvKHRpdHVsbywgbGlzdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0MCB9fT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheVwiIHN0eWxlPXt7IGZvbnRTaXplOiAyMiB9fT57dGl0dWxvfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLTJcIj5cbiAgICAgICAgICB7bGlzdGEubWFwKGEgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2EuaWR9IGNsYXNzTmFtZT1cInRhcmpldGFcIiBzdHlsZT17eyBwYWRkaW5nOiAxNiwgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAxMiB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uby1jaXJjdWxvXCIgc3R5bGU9e3sgd2lkdGg6IDQ0LCBoZWlnaHQ6IDQ0IH19PjxJY29ubyBub21icmU9e2EuaWNvbm99IHNpemU9ezIwfSAvPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEsIG1pbldpZHRoOiAwIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwIH19PnthLm5vbWJyZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiwgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknIH19PnVuaWRhZDoge2EudW5pZGFkfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwLjVcIiBzdGVwPVwiMC41XCIgdmFsdWU9e2NhbnRpZGFkZXNbYS5pZF0gfHwgMX1cbiAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENhbnRpZGFkZXMoeyAuLi5jYW50aWRhZGVzLCBbYS5pZF06IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FtcG9cIiBzdHlsZT17eyB3aWR0aDogNzIsIHRleHRBbGlnbjogJ2NlbnRlcicsIHBhZGRpbmc6ICc2cHggOHB4JyB9fSAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi12ZXJkZVwiIHN0eWxlPXt7IHBhZGRpbmc6ICc4cHggMTJweCcgfX0gb25DbGljaz17KCkgPT4gYWdyZWdhcihhKX0gYXJpYS1sYWJlbD17J0FncmVnYXIgJyArIGEubm9tYnJlfT4rPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGVuZWRvclwiIHN0eWxlPXt7IHBhZGRpbmc6ICc0MHB4IDE2cHgnIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMzIgfX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheVwiIHN0eWxlPXt7IGZvbnRTaXplOiAzNCwgbWFyZ2luOiAwIH19PkFybcOhIHR1IGRvbmFjacOzbjwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVkaWRhXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknIH19PkVsZWfDrSBkZSBsYSBsaXN0YSwgY29tbyBlbiB1bmEgY29tcHJhLiBMYSB1bmlkYWQgeWEgdmllbmUgY2FyZ2FkYSBwYXJhIHF1ZSBubyB0ZW5nYXMgcXVlIGFkaXZpbmFyLjwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnInLCBnYXA6IDMyIH19IGNsYXNzTmFtZT1cImRvbmFyLWdyaWRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2dydXBvKCdObyBwZXJlY2VkZXJvcycsIG5vUGVyZWNlZGVyb3MpfVxuICAgICAgICAgICAge2dydXBvKCdQZXJlY2VkZXJvcycsIHBlcmVjZWRlcm9zKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxhc2lkZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFyamV0YSB0YXJqZXRhLXBhZFwiPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheVwiIHN0eWxlPXt7IGZvbnRTaXplOiAyMCwgbWFyZ2luOiAwIH19PlR1IGRvbmFjacOzbjwvaDI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hpcCBjaGlwLXN1YXZlXCI+e2NhbnQodG90YWxJdGVtcyl9IMOtdGVtczwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0YSBhbGVydGEtZXJyb3JcIj57ZXJyb3J9PC9kaXY+fVxuICAgICAgICAgICAgICB7aWRzQ2Fycml0by5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCBmb250U2l6ZTogMTQsIHRleHRBbGlnbjogJ2NlbnRlcicsIHBhZGRpbmc6ICcyNHB4IDAnIH19PlRvZGF2w61hIG5vIGFncmVnYXN0ZSBuYWRhLjxiciAvPkVsZWfDrSBkZSBsYSBsaXN0YS48L3A+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGU6ICdub25lJywgcGFkZGluZzogMCwgbWFyZ2luOiAnMCAwIDE2cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICB7aWRzQ2Fycml0by5tYXAoaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBub21icmVQb3JJZChpZClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR9IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogMTIsIHBhZGRpbmc6ICcxMnB4IDAnLCBib3JkZXJUb3A6ICcxcHggc29saWQgdmFyKC0tYm9yZGUpJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1uYXJhbmphLWhvdmVyKScgfX0+PEljb25vIG5vbWJyZT17YS5pY29ub30gc2l6ZT17MjB9IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEsIG1pbldpZHRoOiAwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNTAwIH19PnthLm5vbWJyZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnVsYXJcIiBzdHlsZT17eyBmb250U2l6ZTogMTQsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJyB9fT57Y2FudChjYXJyaXRvW2lkXSl9IHthLnVuaWRhZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWljb25vXCIgb25DbGljaz17KCkgPT4gcXVpdGFyKGlkKX0gYXJpYS1sYWJlbD17J1F1aXRhciAnICsgYS5ub21icmV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIxLjdcIj48cGF0aCBkPVwiTTYgN2gxMk05IDdWNWg2djJNOCA3bDEgMTJoNmwxLTEyXCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWNhbXBvXCIgaHRtbEZvcj1cIm5vdGFcIj5Ob3RhIChvcGNpb25hbCk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhbXBvXCIgaWQ9XCJub3RhXCIgdmFsdWU9e25vdGF9IG9uQ2hhbmdlPXtlID0+IHNldE5vdGEoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIkVqOiBwYXNvIGVsIGp1ZXZlcyBhIGxhIHRhcmRlXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMiB9fSAvPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZG9uYXIgYW5jaG9cIiBvbkNsaWNrPXtjb25maXJtYXJ9IGRpc2FibGVkPXtjYXJnYW5kb30+e2NhcmdhbmRvID8gJ0NvbmZpcm1hbmRv4oCmJyA6ICdDb25maXJtYXIgZG9uYWNpw7NuJ308L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59XG4iXSwiZmlsZSI6Ii9Vc2Vycy9iaWFuY28vRG9jdW1lbnRzL1NVUDIvc3VtYS11bi1wbGF0by1mcm9udGVuZC1tYWluICg1KS9mcm9udGVuZC9zcmMvcGFnZXMvRG9uYXIuanN4In0=