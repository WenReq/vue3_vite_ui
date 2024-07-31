import { ref as m, onMounted as _, openBlock as c, createElementBlock as l, createElementVNode as f, Fragment as i, renderList as p } from "vue";
const u = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [o, a] of e)
    r[o] = a;
  return r;
}, y = { class: "starry-sky-bg" }, h = { class: "stars" }, g = {
  __name: "StarrySky",
  props: {
    starsCount: {
      type: [Number, String],
      default: () => 800
    },
    distance: {
      type: [Number, String],
      default: () => 800
    }
  },
  setup(t) {
    const e = t, r = m();
    return _(() => {
      r.value.forEach((a) => {
        let s = 0.1 + Math.random() * 1, d = e.distance + Math.random() * 300;
        a.style.transformOrigin = `0 0 ${d}px`, a.style.transform = `translate3d(0,0,-${d}px) rotateY(${Math.random() * 360}deg) rotateX(${Math.random() * -50}deg) scale(${s},${s})`;
      });
    }), (o, a) => (c(), l("div", y, [
      f("div", h, [
        (c(!0), l(i, null, p(t.starsCount, (s) => (c(), l("div", {
          key: s,
          class: "star",
          ref_for: !0,
          ref_key: "star",
          ref: r
        }))), 128))
      ])
    ]));
  }
}, n = /* @__PURE__ */ u(g, [["__scopeId", "data-v-244bfae9"]]);
n.install = (t) => {
  t.component(n.name, n);
};
const k = [n], v = (t) => {
  k.forEach((e) => {
    t.component(e.__name, e);
  });
}, S = {
  install: v
};
export {
  n as StarrySky,
  S as default
};
