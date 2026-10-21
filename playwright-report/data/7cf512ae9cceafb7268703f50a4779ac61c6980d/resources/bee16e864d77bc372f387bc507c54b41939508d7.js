import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Index.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9f826408"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=9f826408"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { Link, useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=9f826408";
import { get } from "/src/api.js";
import { usuarioActual } from "/src/auth.js";
import { cant } from "/src/format.js";
import Header from "/src/components/Header.jsx";
import Footer from "/src/components/Footer.jsx";
import Icono from "/src/components/Icono.jsx";
export default function Index() {
  _s();
  const usuario = usuarioActual();
  const { hash, key } = useLocation();
  const [necesidades, setNecesidades] = useState([]);
  const [stats, setStats] = useState({ kgMes: 0, merenderos: 0, entregas: 0 });
  useEffect(() => {
    get("/publico/necesidades").then(setNecesidades).catch(() => {
    });
    get("/publico/estadisticas").then(setStats).catch(() => {
    });
  }, []);
  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }, [hash, key]);
  const pasos = [
    { icono: "comida", titulo: "Elegís qué donar", texto: "Mirás los recursos reales de hoy y armás tu aporte, como un carrito." },
    { icono: "camion", titulo: "Lo llevás al depósito", texto: "Av. Independencia 450, Laboulaye. Lunes a viernes de 9 a 13 y de 16 a 19 h." },
    { icono: "entrega", titulo: "Nosotros lo hacemos llegar", texto: "Lo registramos, lo cuidamos y lo entregamos al comedor que lo necesita." }
  ];
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Header, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { children: [
      /* @__PURE__ */ jsxDEV("section", { className: "contenedor hero", children: /* @__PURE__ */ jsxDEV("div", { className: "hero-grid", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "reveal", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "chip chip-suave", style: { marginBottom: 20 }, children: "Laboulaye · Comedores y merenderos" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
            lineNumber: 59,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h1", { children: "Que la solidaridad de cada familia llegue a la mesa de quien más lo necesita." }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 19, color: "var(--tinta-suave)" }, className: "medida", children: "Conectamos a los comedores y merenderos de Laboulaye con las personas que quieren ayudar. Sin intermediarios confusos ni mensajes que se pierden: tu aporte se registra y llega a donde hace falta." }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
            lineNumber: 61,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }, children: [
            /* @__PURE__ */ jsxDEV(Link, { to: usuario ? "/donar" : "/registro", className: "btn-donar", children: "Quiero donar" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 66,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("a", { href: "#necesidades", className: "btn-fantasma", children: "Ver qué se recursos necesitamos" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 67,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
            lineNumber: 65,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "hero-imagen reveal", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "hero-halo" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
            lineNumber: 71,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "hero-foto", children: /* @__PURE__ */ jsxDEV("img", { src: "/hero.jpg", alt: "Voluntarios armando cajas con alimentos en un depósito" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
            lineNumber: 73,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
            lineNumber: 72,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
          lineNumber: 70,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { id: "como", className: "seccion seccion-clara", children: /* @__PURE__ */ jsxDEV("div", { className: "contenedor", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "centro", style: { marginBottom: 48 }, children: "Cómo funciona" }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
          lineNumber: 81,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-3", children: pasos.map(
          (p, i) => /* @__PURE__ */ jsxDEV("div", { className: "centro", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "icono-circulo", style: { width: 64, height: 64, margin: "0 auto 16px" }, children: /* @__PURE__ */ jsxDEV(Icono, { nombre: p.icono, size: 32 }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 85,
              columnNumber: 107
            }, this) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 85,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { style: { fontSize: 20, margin: "0 0 8px" }, children: p.titulo }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 86,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--tinta-suave)" }, children: p.texto }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 87,
              columnNumber: 19
            }, this)
          ] }, i, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
            lineNumber: 84,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "franja-transparencia", style: { marginTop: 48 }, children: /* @__PURE__ */ jsxDEV("p", { children: "Todo lo que entra se registra en un solo lugar. Sabés que tu aporte llega a donde hace falta." }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
          lineNumber: 92,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
          lineNumber: 91,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
        lineNumber: 80,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { id: "necesidades", className: "contenedor seccion", children: [
        /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: 40 }, children: [
          /* @__PURE__ */ jsxDEV("h2", { style: { marginBottom: 8 }, children: "Los recursos que buscamos" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
            lineNumber: 99,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "medida", style: { color: "var(--tinta-suave)" }, children: "Datos reales del depósito, en tiempo real. Donás lo que hace falta, no cualquier cosa." }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
            lineNumber: 100,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        necesidades.length === 0 ? /* @__PURE__ */ jsxDEV("p", { style: { color: "var(--tinta-suave)" }, children: "Por ahora no hay recursos publicados. Volvé pronto." }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
          lineNumber: 103,
          columnNumber: 11
        }, this) : /* @__PURE__ */ jsxDEV("div", { className: "grid grid-3", children: necesidades.map(
          (n) => /* @__PURE__ */ jsxDEV("article", { className: "tarjeta tarjeta-hover tarjeta-pad", style: { position: "relative" }, children: [
            n.urgente && /* @__PURE__ */ jsxDEV("span", { className: "chip chip-urgente", style: { position: "absolute", top: 16, right: 16 }, children: "Urgente" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 108,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "icono-circulo", style: { marginBottom: 16 }, children: /* @__PURE__ */ jsxDEV(Icono, { nombre: n.icono }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 109,
              columnNumber: 79
            }, this) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 109,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { style: { fontSize: 20, margin: "0 0 4px" }, children: n.nombre }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 110,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { style: { fontSize: 14, color: "var(--tinta-suave)", marginTop: 0 }, children: n.categoria === "perecedero" ? "Perecedero" : "No perecedero" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 111,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "progreso-riel", style: { marginBottom: 8 }, children: /* @__PURE__ */ jsxDEV("div", { className: "progreso-relleno", style: { width: n.pct + "%" } }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 113,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 112,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "tabular", style: { fontSize: 14, color: n.completa ? "var(--verde)" : "var(--tinta-suave)", fontWeight: n.completa ? 600 : 400 }, children: n.completa ? "Cubierto · ¡gracias!" : cant(n.cubierto) + " de " + cant(n.objetivo) + " " + n.unidad + " cubiertos" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 115,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV(Link, { to: usuario && usuario.rol === "donante" ? "/donar" : "/registro", className: "btn-verde ancho", style: { marginTop: 16 }, children: "Voy a donar esto" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 118,
              columnNumber: 19
            }, this)
          ] }, n.id, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
            lineNumber: 107,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "banda", children: /* @__PURE__ */ jsxDEV("div", { className: "contenedor", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-3 centro", style: { marginBottom: 48 }, children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "stat-num tabular", children: [
              cant(stats.kgMes),
              " kg"
            ] }, void 0, true, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 128,
              columnNumber: 20
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { color: "rgba(255,255,255,.7)" }, children: "donados este mes" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 128,
              columnNumber: 82
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "stat-num tabular", children: stats.merenderos }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 129,
              columnNumber: 20
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { color: "rgba(255,255,255,.7)" }, children: "merenderos en la red" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 129,
              columnNumber: 78
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("div", { className: "stat-num tabular", children: stats.entregas }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 130,
              columnNumber: 20
            }, this),
            /* @__PURE__ */ jsxDEV("div", { style: { color: "rgba(255,255,255,.7)" }, children: "entregas realizadas" }, void 0, false, {
              fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
              lineNumber: 130,
              columnNumber: 76
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
            lineNumber: 130,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
          lineNumber: 127,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("blockquote", { style: { maxWidth: 640, margin: "0 auto", textAlign: "center" }, children: [
          /* @__PURE__ */ jsxDEV("p", { className: "font-display", style: { fontSize: 22 }, children: '"Antes no sabíamos con qué íbamos a cocinar. Ahora llegamos a la semana tranquilos."' }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
            lineNumber: 133,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("footer", { style: { color: "rgba(255,255,255,.6)", marginTop: 12 }, children: "— Rosa, referente de merendero" }, void 0, false, {
            fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
            lineNumber: 134,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
          lineNumber: 132,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { style: { textAlign: "center", color: "rgba(255,255,255,.5)", fontSize: 14, marginTop: 32 }, children: "No se aceptan donaciones de dinero." }, void 0, false, {
          fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
          lineNumber: 136,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
        lineNumber: 126,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
        lineNumber: 125,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
      lineNumber: 140,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
_s(Index, "JN98k9ngO9Dkj+sJCo5KscJQImw=", false, function() {
  return [useLocation];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/bianco/Documents/SUP2/suma-un-plato-frontend-main (5)/frontend/src/pages/Index.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUtqQixRQUFRLFVBQVVrQixXQUFXLFNBQVMsR0FDeEU7QUFBQSxpQ0FBQyxPQUFFLFdBQVUsZ0JBQWUsT0FBTyxFQUFFN0IsVUFBVSxHQUFHLEdBQUcsb0dBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXlJO0FBQUEsVUFDekksdUJBQUMsWUFBTyxPQUFPLEVBQUVDLE9BQU8sd0JBQXdCSSxXQUFXLEdBQUcsR0FBRyw4Q0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBK0Y7QUFBQSxhQUZqRztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBR0E7QUFBQSxRQUNBLHVCQUFDLE9BQUUsT0FBTyxFQUFFd0IsV0FBVyxVQUFVNUIsT0FBTyx3QkFBd0JELFVBQVUsSUFBSUssV0FBVyxHQUFHLEdBQUcsbURBQS9GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBa0k7QUFBQSxXQVZwSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBV0EsS0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYUE7QUFBQSxTQW5GRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBb0ZBO0FBQUEsSUFDQSx1QkFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTztBQUFBLE9BdkZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F3RkE7QUFFSjtBQUFDNUIsR0FsSHVCRCxPQUFLO0FBQUEsVUFFTFAsV0FBVztBQUFBO0FBQUEsS0FGWE87QUFBSyxJQUFBc0Q7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwidXNlTG9jYXRpb24iLCJnZXQiLCJ1c3VhcmlvQWN0dWFsIiwiY2FudCIsIkhlYWRlciIsIkZvb3RlciIsIkljb25vIiwiSW5kZXgiLCJfcyIsInVzdWFyaW8iLCJoYXNoIiwia2V5IiwibmVjZXNpZGFkZXMiLCJzZXROZWNlc2lkYWRlcyIsInN0YXRzIiwic2V0U3RhdHMiLCJrZ01lcyIsIm1lcmVuZGVyb3MiLCJlbnRyZWdhcyIsInRoZW4iLCJjYXRjaCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzbGljZSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJwYXNvcyIsImljb25vIiwidGl0dWxvIiwidGV4dG8iLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsImNvbG9yIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiZ2FwIiwibWFyZ2luVG9wIiwibWFwIiwicCIsImkiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImxlbmd0aCIsIm4iLCJwb3NpdGlvbiIsInVyZ2VudGUiLCJ0b3AiLCJyaWdodCIsIm5vbWJyZSIsImNhdGVnb3JpYSIsInBjdCIsImNvbXBsZXRhIiwiZm9udFdlaWdodCIsImN1YmllcnRvIiwib2JqZXRpdm8iLCJ1bmlkYWQiLCJyb2wiLCJpZCIsIm1heFdpZHRoIiwidGV4dEFsaWduIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IGdldCB9IGZyb20gJy4uL2FwaSdcbmltcG9ydCB7IHVzdWFyaW9BY3R1YWwgfSBmcm9tICcuLi9hdXRoJ1xuaW1wb3J0IHsgY2FudCB9IGZyb20gJy4uL2Zvcm1hdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IEljb25vIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbm8nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB1c3VhcmlvID0gdXN1YXJpb0FjdHVhbCgpXG4gIGNvbnN0IHsgaGFzaCwga2V5IH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IFtuZWNlc2lkYWRlcywgc2V0TmVjZXNpZGFkZXNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtzdGF0cywgc2V0U3RhdHNdID0gdXNlU3RhdGUoeyBrZ01lczogMCwgbWVyZW5kZXJvczogMCwgZW50cmVnYXM6IDAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldCgnL3B1YmxpY28vbmVjZXNpZGFkZXMnKS50aGVuKHNldE5lY2VzaWRhZGVzKS5jYXRjaCgoKSA9PiB7fSlcbiAgICBnZXQoJy9wdWJsaWNvL2VzdGFkaXN0aWNhcycpLnRoZW4oc2V0U3RhdHMpLmNhdGNoKCgpID0+IHt9KVxuICB9LCBbXSlcblxuICAvLyBDdWFuZG8gc2UgbGxlZ2EgY29uICNjb21vIG8gI25lY2VzaWRhZGVzIChkZXNkZSBlbCBtZW7DuiksIGJhamEgYSBlc2Egc2VjY2nDs25cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc2gpIHJldHVyblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2guc2xpY2UoMSkpPy5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICB9LCBbaGFzaCwga2V5XSlcblxuICBjb25zdCBwYXNvcyA9IFtcbiAgeyBpY29ubzogJ2NvbWlkYScsIHRpdHVsbzogJ0VsZWfDrXMgcXXDqSBkb25hcicsIHRleHRvOiAnTWlyw6FzIGxvcyByZWN1cnNvcyByZWFsZXMgZGUgaG95IHkgYXJtw6FzIHR1IGFwb3J0ZSwgY29tbyB1biBjYXJyaXRvLicgfSxcbiAgeyBpY29ubzogJ2NhbWlvbicsIHRpdHVsbzogJ0xvIGxsZXbDoXMgYWwgZGVww7NzaXRvJywgdGV4dG86ICdBdi4gSW5kZXBlbmRlbmNpYSA0NTAsIExhYm91bGF5ZS4gTHVuZXMgYSB2aWVybmVzIGRlIDkgYSAxMyB5IGRlIDE2IGEgMTkgaC4nIH0sXG4gIHsgaWNvbm86ICdlbnRyZWdhJywgdGl0dWxvOiAnTm9zb3Ryb3MgbG8gaGFjZW1vcyBsbGVnYXInLCB0ZXh0bzogJ0xvIHJlZ2lzdHJhbW9zLCBsbyBjdWlkYW1vcyB5IGxvIGVudHJlZ2Ftb3MgYWwgY29tZWRvciBxdWUgbG8gbmVjZXNpdGEuJyB9XG5dXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbmVkb3IgaGVyb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ncmlkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmVhbFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGlwIGNoaXAtc3VhdmVcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PkxhYm91bGF5ZSDCtyBDb21lZG9yZXMgeSBtZXJlbmRlcm9zPC9zcGFuPlxuICAgICAgICAgICAgICA8aDE+UXVlIGxhIHNvbGlkYXJpZGFkIGRlIGNhZGEgZmFtaWxpYSBsbGVndWUgYSBsYSBtZXNhIGRlIHF1aWVuIG3DoXMgbG8gbmVjZXNpdGEuPC9oMT5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IDE5LCBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScgfX0gY2xhc3NOYW1lPVwibWVkaWRhXCI+XG4gICAgICAgICAgICAgICAgQ29uZWN0YW1vcyBhIGxvcyBjb21lZG9yZXMgeSBtZXJlbmRlcm9zIGRlIExhYm91bGF5ZSBjb24gbGFzIHBlcnNvbmFzIHF1ZSBxdWllcmVuIGF5dWRhci5cbiAgICAgICAgICAgICAgICBTaW4gaW50ZXJtZWRpYXJpb3MgY29uZnVzb3MgbmkgbWVuc2FqZXMgcXVlIHNlIHBpZXJkZW46IHR1IGFwb3J0ZSBzZSByZWdpc3RyYSB5IGxsZWdhIGEgZG9uZGUgaGFjZSBmYWx0YS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJywgZ2FwOiAxMiwgbWFyZ2luVG9wOiAzMiB9fT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17dXN1YXJpbyA/ICcvZG9uYXInIDogJy9yZWdpc3Rybyd9IGNsYXNzTmFtZT1cImJ0bi1kb25hclwiPlF1aWVybyBkb25hcjwvTGluaz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI25lY2VzaWRhZGVzXCIgY2xhc3NOYW1lPVwiYnRuLWZhbnRhc21hXCI+VmVyIHF1w6kgc2UgcmVjdXJzb3MgbmVjZXNpdGFtb3M8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taW1hZ2VuIHJldmVhbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taGFsb1wiPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tZm90b1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2hlcm8uanBnXCIgYWx0PVwiVm9sdW50YXJpb3MgYXJtYW5kbyBjYWphcyBjb24gYWxpbWVudG9zIGVuIHVuIGRlcMOzc2l0b1wiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBpZD1cImNvbW9cIiBjbGFzc05hbWU9XCJzZWNjaW9uIHNlY2Npb24tY2xhcmFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbmVkb3JcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjZW50cm9cIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQ4IH19PkPDs21vIGZ1bmNpb25hPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLTNcIj5cbiAgICAgICAgICAgICAge3Bhc29zLm1hcCgocCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjZW50cm9cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbm8tY2lyY3Vsb1wiIHN0eWxlPXt7IHdpZHRoOiA2NCwgaGVpZ2h0OiA2NCwgbWFyZ2luOiAnMCBhdXRvIDE2cHgnIH19PjxJY29ubyBub21icmU9e3AuaWNvbm99IHNpemU9ezMyfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAyMCwgbWFyZ2luOiAnMCAwIDhweCcgfX0+e3AudGl0dWxvfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRpbnRhLXN1YXZlKScgfX0+e3AudGV4dG99PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcmFuamEtdHJhbnNwYXJlbmNpYVwiIHN0eWxlPXt7IG1hcmdpblRvcDogNDggfX0+XG4gICAgICAgICAgICAgIDxwPlRvZG8gbG8gcXVlIGVudHJhIHNlIHJlZ2lzdHJhIGVuIHVuIHNvbG8gbHVnYXIuIFNhYsOpcyBxdWUgdHUgYXBvcnRlIGxsZWdhIGEgZG9uZGUgaGFjZSBmYWx0YS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGlkPVwibmVjZXNpZGFkZXNcIiBjbGFzc05hbWU9XCJjb250ZW5lZG9yIHNlY2Npb25cIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNDAgfX0+XG4gICAgICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA4IH19PkxvcyByZWN1cnNvcyBxdWUgYnVzY2Ftb3M8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVkaWRhXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10aW50YS1zdWF2ZSknIH19PkRhdG9zIHJlYWxlcyBkZWwgZGVww7NzaXRvLCBlbiB0aWVtcG8gcmVhbC4gRG9uw6FzIGxvIHF1ZSBoYWNlIGZhbHRhLCBubyBjdWFscXVpZXIgY29zYS48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge25lY2VzaWRhZGVzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJyB9fT5Qb3IgYWhvcmEgbm8gaGF5IHJlY3Vyc29zIHB1YmxpY2Fkb3MuIFZvbHbDqSBwcm9udG8uPC9wPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC0zXCI+XG4gICAgICAgICAgICAgIHtuZWNlc2lkYWRlcy5tYXAobiA9PiAoXG4gICAgICAgICAgICAgICAgPGFydGljbGUga2V5PXtuLmlkfSBjbGFzc05hbWU9XCJ0YXJqZXRhIHRhcmpldGEtaG92ZXIgdGFyamV0YS1wYWRcIiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgICAgICAgIHtuLnVyZ2VudGUgJiYgPHNwYW4gY2xhc3NOYW1lPVwiY2hpcCBjaGlwLXVyZ2VudGVcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAxNiwgcmlnaHQ6IDE2IH19PlVyZ2VudGU8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uby1jaXJjdWxvXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNiB9fT48SWNvbm8gbm9tYnJlPXtuLmljb25vfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAyMCwgbWFyZ2luOiAnMCAwIDRweCcgfX0+e24ubm9tYnJlfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogMTQsIGNvbG9yOiAndmFyKC0tdGludGEtc3VhdmUpJywgbWFyZ2luVG9wOiAwIH19PntuLmNhdGVnb3JpYSA9PT0gJ3BlcmVjZWRlcm8nID8gJ1BlcmVjZWRlcm8nIDogJ05vIHBlcmVjZWRlcm8nfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc28tcmllbFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogOCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzby1yZWxsZW5vXCIgc3R5bGU9e3sgd2lkdGg6IG4ucGN0ICsgJyUnIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0YWJ1bGFyXCIgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBjb2xvcjogbi5jb21wbGV0YSA/ICd2YXIoLS12ZXJkZSknIDogJ3ZhcigtLXRpbnRhLXN1YXZlKScsIGZvbnRXZWlnaHQ6IG4uY29tcGxldGEgPyA2MDAgOiA0MDAgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtuLmNvbXBsZXRhID8gJ0N1YmllcnRvIMK3IMKhZ3JhY2lhcyEnIDogY2FudChuLmN1YmllcnRvKSArICcgZGUgJyArIGNhbnQobi5vYmpldGl2bykgKyAnICcgKyBuLnVuaWRhZCArICcgY3ViaWVydG9zJ31cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXt1c3VhcmlvICYmIHVzdWFyaW8ucm9sID09PSAnZG9uYW50ZScgPyAnL2RvbmFyJyA6ICcvcmVnaXN0cm8nfSBjbGFzc05hbWU9XCJidG4tdmVyZGUgYW5jaG9cIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDE2IH19PlZveSBhIGRvbmFyIGVzdG88L0xpbms+XG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiYW5kYVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVuZWRvclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtMyBjZW50cm9cIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQ4IH19PlxuICAgICAgICAgICAgICA8ZGl2PjxkaXYgY2xhc3NOYW1lPVwic3RhdC1udW0gdGFidWxhclwiPntjYW50KHN0YXRzLmtnTWVzKX0ga2c8L2Rpdj48ZGl2IHN0eWxlPXt7IGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNyknIH19PmRvbmFkb3MgZXN0ZSBtZXM8L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48ZGl2IGNsYXNzTmFtZT1cInN0YXQtbnVtIHRhYnVsYXJcIj57c3RhdHMubWVyZW5kZXJvc308L2Rpdj48ZGl2IHN0eWxlPXt7IGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNyknIH19Pm1lcmVuZGVyb3MgZW4gbGEgcmVkPC9kaXY+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+PGRpdiBjbGFzc05hbWU9XCJzdGF0LW51bSB0YWJ1bGFyXCI+e3N0YXRzLmVudHJlZ2FzfTwvZGl2PjxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC43KScgfX0+ZW50cmVnYXMgcmVhbGl6YWRhczwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YmxvY2txdW90ZSBzdHlsZT17eyBtYXhXaWR0aDogNjQwLCBtYXJnaW46ICcwIGF1dG8nLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWRpc3BsYXlcIiBzdHlsZT17eyBmb250U2l6ZTogMjIgfX0+XCJBbnRlcyBubyBzYWLDrWFtb3MgY29uIHF1w6kgw61iYW1vcyBhIGNvY2luYXIuIEFob3JhIGxsZWdhbW9zIGEgbGEgc2VtYW5hIHRyYW5xdWlsb3MuXCI8L3A+XG4gICAgICAgICAgICAgIDxmb290ZXIgc3R5bGU9e3sgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC42KScsIG1hcmdpblRvcDogMTIgfX0+4oCUIFJvc2EsIHJlZmVyZW50ZSBkZSBtZXJlbmRlcm88L2Zvb3Rlcj5cbiAgICAgICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknLCBmb250U2l6ZTogMTQsIG1hcmdpblRvcDogMzIgfX0+Tm8gc2UgYWNlcHRhbiBkb25hY2lvbmVzIGRlIGRpbmVyby48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKVxufVxuIl0sImZpbGUiOiIvVXNlcnMvYmlhbmNvL0RvY3VtZW50cy9TVVAyL3N1bWEtdW4tcGxhdG8tZnJvbnRlbmQtbWFpbiAoNSkvZnJvbnRlbmQvc3JjL3BhZ2VzL0luZGV4LmpzeCJ9