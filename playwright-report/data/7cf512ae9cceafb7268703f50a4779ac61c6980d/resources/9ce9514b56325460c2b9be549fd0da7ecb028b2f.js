import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Login.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useState = __vite__cjsImport3_react["useState"];
import { Link, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=9f826408";
import { post } from "/src/api.js";
import { guardarUsuario, destinoPorRol } from "/src/auth.js";
import Header from "/src/components/Header.jsx";
import Footer from "/src/components/Footer.jsx";
export default function Login() {
  _s();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  async function enviar(e) {
    e.preventDefault();
    setError("");
    setCargando(true);
    try {
      const usuario = await post("/auth/login", { email, password });
      guardarUsuario(usuario);
      navigate(destinoPorRol(usuario.rol));
    } catch (err) {
      setError(err.message);
      setCargando(false);
    }
  }
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "contenedor", style: { padding: "56px 16px" }, children: /* @__PURE__ */ jsxDEV("div", { style: { maxWidth: 380, margin: "0 auto" }, children: [
      /* @__PURE__ */ jsxDEV("div", { className: "tarjeta tarjeta-pad", children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "font-display", style: { fontSize: 26, marginTop: 0 }, children: "Ingresar" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        error && /* @__PURE__ */ jsxDEV("div", { className: "alerta alerta-error", children: error }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
          lineNumber: 55,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ jsxDEV("form", { onSubmit: enviar, children: [
          /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
            /* @__PURE__ */ jsxDEV("label", { className: "label-campo", htmlFor: "email", children: "Email" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
              lineNumber: 58,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("input", { className: "campo", id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
              lineNumber: 59,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
            lineNumber: 57,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 16 }, children: [
            /* @__PURE__ */ jsxDEV("label", { className: "label-campo", htmlFor: "password", children: "Contraseña" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
              lineNumber: 62,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("input", { className: "campo", id: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
              lineNumber: 63,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
            lineNumber: 61,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("button", { type: "submit", className: "btn-donar ancho", disabled: cargando, children: cargando ? "Ingresando…" : "Ingresar" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
            lineNumber: 65,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 14, color: "var(--tinta-suave)", textAlign: "center", marginTop: 20 }, children: [
          "¿Sos donante nuevo? ",
          /* @__PURE__ */ jsxDEV(Link, { to: "/registro", style: { color: "var(--naranja)", fontWeight: 600 }, children: "Creá tu cuenta" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
            lineNumber: 68,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { marginTop: 24, fontSize: 12, color: "var(--tinta-suave)", textAlign: "center", lineHeight: 1.8 }, children: [
        /* @__PURE__ */ jsxDEV("p", { style: { fontWeight: 600, margin: 0 }, children: "Cuentas de prueba" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        "Admin: admin@sumaunplato.org / admin123",
        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
          lineNumber: 73,
          columnNumber: 52
        }, this),
        "Donante: maria@example.com / maria123",
        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
          lineNumber: 74,
          columnNumber: 50
        }, this),
        "Merendero: angelitos@example.com / merendero123"
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
      lineNumber: 52,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
_s(Login, "xBc6ces+CUi7haAiSZ/mmdOn/ak=", false, function() {
  return [useNavigate];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Login.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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InBvc3QiLCJndWFyZGFyVXN1YXJpbyIsImRlc3Rpbm9Qb3JSb2wiLCJIZWFkZXIiLCJGb290ZXIiLCJMb2dpbiIsIl9zIiwibmF2aWdhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJjYXJnYW5kbyIsInNldENhcmdhbmRvIiwiZW52aWFyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXN1YXJpbyIsInJvbCIsImVyciIsIm1lc3NhZ2UiLCJwYWRkaW5nIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInRhcmdldCIsInZhbHVlIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkxvZ2luLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgcG9zdCB9IGZyb20gJy4uL2FwaSdcbmltcG9ydCB7IGd1YXJkYXJVc3VhcmlvLCBkZXN0aW5vUG9yUm9sIH0gZnJvbSAnLi4vYXV0aCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjYXJnYW5kbywgc2V0Q2FyZ2FuZG9dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgYXN5bmMgZnVuY3Rpb24gZW52aWFyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRFcnJvcignJylcbiAgICBzZXRDYXJnYW5kbyh0cnVlKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c3VhcmlvID0gYXdhaXQgcG9zdCgnL2F1dGgvbG9naW4nLCB7IGVtYWlsLCBwYXNzd29yZCB9KVxuICAgICAgZ3VhcmRhclVzdWFyaW8odXN1YXJpbylcbiAgICAgIG5hdmlnYXRlKGRlc3Rpbm9Qb3JSb2wodXN1YXJpby5yb2wpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpXG4gICAgICBzZXRDYXJnYW5kbyhmYWxzZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250ZW5lZG9yXCIgc3R5bGU9e3sgcGFkZGluZzogJzU2cHggMTZweCcgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6IDM4MCwgbWFyZ2luOiAnMCBhdXRvJyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhcmpldGEgdGFyamV0YS1wYWRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWRpc3BsYXlcIiBzdHlsZT17eyBmb250U2l6ZTogMjYsIG1hcmdpblRvcDogMCB9fT5JbmdyZXNhcjwvaDE+XG4gICAgICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJhbGVydGEgYWxlcnRhLWVycm9yXCI+e2Vycm9yfTwvZGl2Pn1cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlbnZpYXJ9PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTYgfX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWNhbXBvXCIgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjYW1wb1wiIGlkPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNiB9fT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtY2FtcG9cIiBodG1sRm9yPVwicGFzc3dvcmRcIj5Db250cmFzZcOxYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNhbXBvXCIgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuLWRvbmFyIGFuY2hvXCIgZGlzYWJsZWQ9e2NhcmdhbmRvfT57Y2FyZ2FuZG8gPyAnSW5ncmVzYW5kb+KApicgOiAnSW5ncmVzYXInfTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScsIHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogMjAgfX0+XG4gICAgICAgICAgICAgIMK/U29zIGRvbmFudGUgbnVldm8/IDxMaW5rIHRvPVwiL3JlZ2lzdHJvXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1uYXJhbmphKScsIGZvbnRXZWlnaHQ6IDYwMCB9fT5DcmXDoSB0dSBjdWVudGE8L0xpbms+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDI0LCBmb250U2l6ZTogMTIsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJywgdGV4dEFsaWduOiAnY2VudGVyJywgbGluZUhlaWdodDogMS44IH19PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW46IDAgfX0+Q3VlbnRhcyBkZSBwcnVlYmE8L3A+XG4gICAgICAgICAgICBBZG1pbjogYWRtaW5Ac3VtYXVucGxhdG8ub3JnIC8gYWRtaW4xMjM8YnIgLz5cbiAgICAgICAgICAgIERvbmFudGU6IG1hcmlhQGV4YW1wbGUuY29tIC8gbWFyaWExMjM8YnIgLz5cbiAgICAgICAgICAgIE1lcmVuZGVybzogYW5nZWxpdG9zQGV4YW1wbGUuY29tIC8gbWVyZW5kZXJvMTIzXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59XG4iXSwiZmlsZSI6Ii9Vc2Vycy9iaWFuY28vRG9jdW1lbnRzL1NVUDIvc3VtYS11bi1wbGF0by1mcm9udGVuZC1tYWluICg1KS9mcm9udGVuZC9zcmMvcGFnZXMvTG9naW4uanN4In0=