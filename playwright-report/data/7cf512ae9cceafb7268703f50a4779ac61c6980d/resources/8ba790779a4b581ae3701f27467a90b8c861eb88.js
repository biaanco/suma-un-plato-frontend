import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Registro.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useState = __vite__cjsImport3_react["useState"];
import { Link, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=9f826408";
import { post } from "/src/api.js";
import { guardarUsuario } from "/src/auth.js";
import Header from "/src/components/Header.jsx";
import Footer from "/src/components/Footer.jsx";
export default function Registro() {
  _s();
  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    telefono: "",
    password: "",
    tipoDonante: "persona"
  });
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  function cambiar(campo, valor) {
    setDatos({ ...datos, [campo]: valor });
  }
  function cambiarDni(valor) {
    cambiar("dni", valor.replace(/\D/g, "").slice(0, 8));
  }
  async function enviar(e) {
    e.preventDefault();
    setError("");
    if (datos.dni.length < 7 || datos.dni.length > 8) {
      setError("El DNI debe tener 7 u 8 números.");
      return;
    }
    setCargando(true);
    try {
      const usuario = await post("/auth/registro", datos);
      guardarUsuario(usuario);
      navigate("/donar");
    } catch (err) {
      setError(err.message);
      setCargando(false);
    }
  }
  const tipos = [{ v: "persona", t: "Persona" }, { v: "comercio", t: "Comercio" }, { v: "organizacion", t: "Organización" }];
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "contenedor", style: { padding: "56px 16px" }, children: /* @__PURE__ */ jsxDEV("div", { style: { maxWidth: 440, margin: "0 auto" }, children: /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "font-display", style: { fontSize: 28, margin: "0 0 4px" }, children: "Sumate como donante" }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
        lineNumber: 78,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--tinta-suave)", marginTop: 0 }, children: "Sumate para ayudar a los merenderos." }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
        lineNumber: 79,
        columnNumber: 13
      }, this),
      error && /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-error", children: error }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
        lineNumber: 80,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ jsxDEV("form", { onSubmit: enviar, children: [
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Nombre" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
            lineNumber: 83,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("input", { className: "campo", value: datos.nombre, onChange: (e) => cambiar("nombre", e.target.value), required: true }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
            lineNumber: 84,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
          lineNumber: 82,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Apellido" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
            lineNumber: 87,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("input", { className: "campo", value: datos.apellido, onChange: (e) => cambiar("apellido", e.target.value), required: true }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
            lineNumber: 88,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
          lineNumber: 86,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "DNI" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
            lineNumber: 91,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              className: "campo",
              inputMode: "numeric",
              placeholder: "Sin puntos, ej: 30123456",
              value: datos.dni,
              onChange: (e) => cambiarDni(e.target.value),
              required: true
            },
            void 0,
            false,
            {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
              lineNumber: 92,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
          lineNumber: 90,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Email" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
            lineNumber: 102,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("input", { className: "campo", type: "email", value: datos.email, onChange: (e) => cambiar("email", e.target.value), required: true }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
            lineNumber: 103,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
          lineNumber: 101,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Teléfono" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
            lineNumber: 106,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("input", { className: "campo", value: datos.telefono, onChange: (e) => cambiar("telefono", e.target.value) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
            lineNumber: 107,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
          lineNumber: 105,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("label", { className: "label-campo", children: "Contraseña" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
            lineNumber: 110,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("input", { className: "campo", type: "password", value: datos.password, onChange: (e) => cambiar("password", e.target.value), required: true, minLength: 6 }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
            lineNumber: 111,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
          lineNumber: 109,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxDEV("span", { className: "label-campo", children: "Dono como" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
            lineNumber: 114,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 }, children: tipos.map(
            (op) => /* @__PURE__ */ jsxDEV("label", { className: "pildora", children: [
              /* @__PURE__ */ jsxDEV("input", { type: "radio", name: "tipo", checked: datos.tipoDonante === op.v, onChange: () => cambiar("tipoDonante", op.v) }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
                lineNumber: 118,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: op.t }, void 0, false, {
                fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
                lineNumber: 119,
                columnNumber: 23
              }, this)
            ] }, op.v, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
              lineNumber: 117,
              columnNumber: 19
            }, this)
          ) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
            lineNumber: 115,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
          lineNumber: 113,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("button", { type: "submit", className: "btn-donar ancho", disabled: cargando, children: cargando ? "Creando cuenta…" : "Crear cuenta y donar" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
          lineNumber: 124,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
        lineNumber: 81,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 14, color: "var(--tinta-suave)", textAlign: "center", marginTop: 20 }, children: [
        "¿Ya tenés cuenta? ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/login", style: { color: "var(--naranja)", fontWeight: 600 }, children: "Ingresá" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
          lineNumber: 127,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
        lineNumber: 126,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
      lineNumber: 77,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
      lineNumber: 132,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
_s(Registro, "AhdvOVTG72lQQNjJHLSxkU03txA=", false, function() {
  return [useNavigate];
});
_c = Registro;
var _c;
$RefreshReg$(_c, "Registro");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Registro.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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RFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTREQTtBQUVKO0FBQUM5QyxHQTVHdUJELFVBQVE7QUFBQSxVQUNiTCxXQUFXO0FBQUE7QUFBQSxLQUROSztBQUFRLElBQUFnRDtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsInBvc3QiLCJndWFyZGFyVXN1YXJpbyIsIkhlYWRlciIsIkZvb3RlciIsIlJlZ2lzdHJvIiwiX3MiLCJuYXZpZ2F0ZSIsImRhdG9zIiwic2V0RGF0b3MiLCJub21icmUiLCJhcGVsbGlkbyIsImRuaSIsImVtYWlsIiwidGVsZWZvbm8iLCJwYXNzd29yZCIsInRpcG9Eb25hbnRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImNhcmdhbmRvIiwic2V0Q2FyZ2FuZG8iLCJjYW1iaWFyIiwiY2FtcG8iLCJ2YWxvciIsImNhbWJpYXJEbmkiLCJyZXBsYWNlIiwic2xpY2UiLCJlbnZpYXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJ1c3VhcmlvIiwiZXJyIiwibWVzc2FnZSIsInRpcG9zIiwidiIsInQiLCJwYWRkaW5nIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJmb250U2l6ZSIsImNvbG9yIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidGFyZ2V0IiwidmFsdWUiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJnYXAiLCJtYXAiLCJvcCIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJSZWdpc3Ryby5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHBvc3QgfSBmcm9tICcuLi9hcGknXG5pbXBvcnQgeyBndWFyZGFyVXN1YXJpbyB9IGZyb20gJy4uL2F1dGgnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0cm8oKSB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuICBjb25zdCBbZGF0b3MsIHNldERhdG9zXSA9IHVzZVN0YXRlKHtcbiAgICBub21icmU6ICcnLFxuICAgIGFwZWxsaWRvOiAnJyxcbiAgICBkbmk6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICB0ZWxlZm9ubzogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIHRpcG9Eb25hbnRlOiAncGVyc29uYSdcbiAgfSlcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2NhcmdhbmRvLCBzZXRDYXJnYW5kb10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBmdW5jdGlvbiBjYW1iaWFyKGNhbXBvLCB2YWxvcikge1xuICAgIHNldERhdG9zKHsgLi4uZGF0b3MsIFtjYW1wb106IHZhbG9yIH0pXG4gIH1cblxuICAvLyBFbCBETkkgc29sbyBhZG1pdGUgbsO6bWVyb3MgKHNlIGRlc2NhcnRhbiBwdW50b3MsIGVzcGFjaW9zLCBsZXRyYXMpXG4gIGZ1bmN0aW9uIGNhbWJpYXJEbmkodmFsb3IpIHtcbiAgICBjYW1iaWFyKCdkbmknLCB2YWxvci5yZXBsYWNlKC9cXEQvZywgJycpLnNsaWNlKDAsIDgpKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZW52aWFyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRFcnJvcignJylcblxuICAgIGlmIChkYXRvcy5kbmkubGVuZ3RoIDwgNyB8fCBkYXRvcy5kbmkubGVuZ3RoID4gOCkge1xuICAgICAgc2V0RXJyb3IoJ0VsIEROSSBkZWJlIHRlbmVyIDcgdSA4IG7Dum1lcm9zLicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzZXRDYXJnYW5kbyh0cnVlKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c3VhcmlvID0gYXdhaXQgcG9zdCgnL2F1dGgvcmVnaXN0cm8nLCBkYXRvcylcbiAgICAgIGd1YXJkYXJVc3VhcmlvKHVzdWFyaW8pXG4gICAgICBuYXZpZ2F0ZSgnL2RvbmFyJylcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKVxuICAgICAgc2V0Q2FyZ2FuZG8oZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdGlwb3MgPSBbeyB2OiAncGVyc29uYScsIHQ6ICdQZXJzb25hJyB9LCB7IHY6ICdjb21lcmNpbycsIHQ6ICdDb21lcmNpbycgfSwgeyB2OiAnb3JnYW5pemFjaW9uJywgdDogJ09yZ2FuaXphY2nDs24nIH1dXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGVuZWRvclwiIHN0eWxlPXt7IHBhZGRpbmc6ICc1NnB4IDE2cHgnIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiA0NDAsIG1hcmdpbjogJzAgYXV0bycgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXJqZXRhIHRhcmpldGEtcGFkXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5XCIgc3R5bGU9e3sgZm9udFNpemU6IDI4LCBtYXJnaW46ICcwIDAgNHB4JyB9fT5TdW1hdGUgY29tbyBkb25hbnRlPC9oMT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJywgbWFyZ2luVG9wOiAwIH19PlN1bWF0ZSBwYXJhIGF5dWRhciBhIGxvcyBtZXJlbmRlcm9zLjwvcD5cbiAgICAgICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0YSBhbGVydGEtZXJyb3JcIj57ZXJyb3J9PC9kaXY+fVxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Vudmlhcn0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNiB9fT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtY2FtcG9cIj5Ob21icmU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYW1wb1wiIHZhbHVlPXtkYXRvcy5ub21icmV9IG9uQ2hhbmdlPXtlID0+IGNhbWJpYXIoJ25vbWJyZScsIGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNiB9fT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtY2FtcG9cIj5BcGVsbGlkbzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhbXBvXCIgdmFsdWU9e2RhdG9zLmFwZWxsaWRvfSBvbkNoYW5nZT17ZSA9PiBjYW1iaWFyKCdhcGVsbGlkbycsIGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNiB9fT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtY2FtcG9cIj5ETkk8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FtcG9cIlxuICAgICAgICAgICAgICAgICAgaW5wdXRNb2RlPVwibnVtZXJpY1wiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNpbiBwdW50b3MsIGVqOiAzMDEyMzQ1NlwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0b3MuZG5pfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2FtYmlhckRuaShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWNhbXBvXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYW1wb1wiIHR5cGU9XCJlbWFpbFwiIHZhbHVlPXtkYXRvcy5lbWFpbH0gb25DaGFuZ2U9e2UgPT4gY2FtYmlhcignZW1haWwnLCBlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWNhbXBvXCI+VGVsw6lmb25vPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FtcG9cIiB2YWx1ZT17ZGF0b3MudGVsZWZvbm99IG9uQ2hhbmdlPXtlID0+IGNhbWJpYXIoJ3RlbGVmb25vJywgZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE2IH19PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1jYW1wb1wiPkNvbnRyYXNlw7FhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2FtcG9cIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17ZGF0b3MucGFzc3dvcmR9IG9uQ2hhbmdlPXtlID0+IGNhbWJpYXIoJ3Bhc3N3b3JkJywgZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCBtaW5MZW5ndGg9ezZ9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwtY2FtcG9cIj5Eb25vIGNvbW88L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhXcmFwOiAnd3JhcCcsIGdhcDogOCB9fT5cbiAgICAgICAgICAgICAgICAgIHt0aXBvcy5tYXAob3AgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwga2V5PXtvcC52fSBjbGFzc05hbWU9XCJwaWxkb3JhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0aXBvXCIgY2hlY2tlZD17ZGF0b3MudGlwb0RvbmFudGUgPT09IG9wLnZ9IG9uQ2hhbmdlPXsoKSA9PiBjYW1iaWFyKCd0aXBvRG9uYW50ZScsIG9wLnYpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntvcC50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuLWRvbmFyIGFuY2hvXCIgZGlzYWJsZWQ9e2NhcmdhbmRvfT57Y2FyZ2FuZG8gPyAnQ3JlYW5kbyBjdWVudGHigKYnIDogJ0NyZWFyIGN1ZW50YSB5IGRvbmFyJ308L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6IDIwIH19PlxuICAgICAgICAgICAgICDCv1lhIHRlbsOpcyBjdWVudGE/IDxMaW5rIHRvPVwiL2xvZ2luXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1uYXJhbmphKScsIGZvbnRXZWlnaHQ6IDYwMCB9fT5JbmdyZXPDoTwvTGluaz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gIClcbn0iXSwiZmlsZSI6Ii9Vc2Vycy9iaWFuY28vRG9jdW1lbnRzL1NVUDIvc3VtYS11bi1wbGF0by1mcm9udGVuZC1tYWluICg1KS9mcm9udGVuZC9zcmMvcGFnZXMvUmVnaXN0cm8uanN4In0=